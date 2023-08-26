import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./fonts/Rust.ttf";
import "./fonts/Roboto-Black.ttf";
import "./fonts/Roboto-Bold.ttf";

function App() {
  const [count, setCount] = useState(0);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
