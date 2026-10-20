import React, { useState } from 'react'
import './EmailCapture.css'

import { addDoc } from '@firebase/firestore'
import { emailsRef } from '../../services/firebase'

import toast, { Toaster } from 'react-hot-toast';
import { IoIosWarning } from 'react-icons/io'

const showSuccessToast = () => {
  toast.dismiss();
  toast.success('Operation successfully handled!', {
    style: {
      borderRadius: '8px',
      marginTop: '8px',
    }
  });
};

const showFailToast = () => {
  toast.dismiss();
  toast.error('Sorry, operation failed!', {
    style: {
      borderRadius: '8px',
      marginTop: '8px',
    }
  })
};

const showWarningToast = (message) => {
  toast.dismiss();
  toast(<span>{message.toString()}</span>, {
    style: {
      borderRadius: '8px',
      marginTop: '8px',
    },
    iconTheme: {
      primary: '#FFBB33'
    },
    icon: <IoIosWarning size={'24px'} color='#FFBB33'></IoIosWarning>
  })
};

const EmailCapture = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const sendEmail = async (value) => {
    setLoading(true);
    try {
      /* if (value.length === 0) {
        console.log("Warning: No value entered")
        showWarningToast('Please enter an email address!');
        setLoading(false);
        return;
      }
      if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
        console.log("Warning: Invalid email entered")
        showWarningToast('Please enter a valid email address!');
        setLoading(false);
        return;
      } */
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const result = email.match(validRegex);
      if (!result) {
        console.log("Warning: Invalid email entered")
        showWarningToast('Please enter a valid email address!');
        setLoading(false);
        return;
      }
      const emailDocRef = await addDoc(emailsRef, {
        email: value
      });
      console.log(`Created ${value} with reference: ${emailDocRef.id}`)
      setLoading(false);
      showSuccessToast();
      console.log(value);
      setEmail('');
    } catch (e) {
      console.log(e.toString());
      setLoading(false);
      showFailToast();
    }
  }

  return (
    <div className="email-capture">
      <div className='cta-text'>
        Excited for the first PaperPrep release?
      </div>
      <div className="capture">
        <input type="text" name="name" disabled={loading} className='text' placeholder='Email' value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} />
        <button className={loading ? 'button loading-button' : 'button'} onClick={loading ? null : () => {
          sendEmail(email)
        }}>
          Subscribe
        </button>
        <Toaster />
      </div>
    </div>
  )
}

export default EmailCapture