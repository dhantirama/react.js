import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

//cat dri app.js
// function App() {
//   const [count, setCount] = useState(0); //digunakan untuk menyimpan variabel

//   return ( //return hanya bisa digunakan satu tag, karena itu pakai div
//     <div className="App">
//       <button
//         style={{ backgroundColor: "magenta", padding: 10, borderRadius: 8 }}
//         onClick={() => setCount(count + 1)}
//       >
//         Click to Increment
//       </button>
//       <button
//         style={{ backgroundColor: "maroon", padding: 10, borderRadius: 8 }}
//         onClick={() => setCount(count - 1)}
//       >
//         Click to Decrement
//       </button>
//       <p>{count}</p>
//     </div>
//   );
// }

//cara 2
// const Button = ({ onPress, count }) => {
//   return (
//     <>
//       <button
//         style={{ backgroundColor: "magenta", padding: 10, borderRadius: 8 }}
//         onClick={onPress}
//       >
//         Click to Increment
//       </button>
//       <p>{count}</p>
//     </>
//   );
// };
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <Button onPress={() => setCount(count + 1)} count={count}>
//         Click to Increment
//       </Button>
//       <button onClick={() => setCount(count - 1)}>Click to Decrement</button>
//       <p>{count}</p>
//     </div>
//   );
// }

//cara 3
// const Button = ({ onPositive, onNegative, count }) => {
//   return (
//     <>
//       <button
//         style={{ backgroundColor: "magenta", padding: 10, borderRadius: 8 }}
//         onClick={onPositive}
//       >
//         Click to Increment
//       </button>
//       <button
//         style={{ backgroundColor: "maroon", padding: 10, borderRadius: 8 }}
//         onClick={onNegative}
//       >
//         Click to Decrement
//       </button>
//       <p>{count}</p>
//     </>
//   );
// };
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <Button
//         onPositive={() => setCount(count + 1)}
//         onNegative={() => setCount(count - 1)}
//         count={count}
//       >
//         Click to Increment
//       </Button>
//     </div>
//   );
// }

//cara 4
const Button = ({ onPositive, count }) => {
  return (
    <>
      <button
        style={{ backgroundColor: "magenta", padding: 10, borderRadius: 8 }}
        onClick={onPositive}
      >
        Click to Increment
      </button>
      <p>{count}</p>
    </>
  );
};
const ButtonP = ({ onNegative, count }) => {
  return (
    <>
      <button
        style={{ backgroundColor: "maroon", padding: 10, borderRadius: 8 }}
        onClick={onNegative}
      >
        Click to Decrement
      </button>
    </>
  );
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button onPositive={() => setCount(count + 1)} count={count}>
        Click to Increment
      </Button>
      <ButtonP onNegative={() => setCount(count - 1)} count={count}>
        Click to Increment
      </ButtonP>
    </div>
  );
}
