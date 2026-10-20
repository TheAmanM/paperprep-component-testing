import "./App.css";
import { fetch } from "./services/pdf";

function App() {
  fetch(
    "https://papers.gceguide.com/O%20Levels/Physics%20(5054)/2019/5054_s19_qp_21.pdf"
  );
  return <h1>Hi</h1>;
}

export default App;
