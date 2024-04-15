import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routing/Router";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
