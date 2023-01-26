import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./Footer";

// ReactDOM.render(<App/>,  document.getElementById('root'));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>
)
