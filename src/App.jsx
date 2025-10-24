// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React SOY LA MAQUINA DE MOLER ARROZ</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

import TarjetaAprendiz from "./components/TarjetaAprendiz";
import "./App.css";
export default function App() {
return (
<main style={{
maxWidth: 520,
margin: "30px auto",
fontFamily: "sans-serif"
}}>
<h2>Aprendices ADSO</h2>
<TarjetaAprendiz
nombre="Stiven"
ficha={3223876}
programa="ADSO"
/>

<TarjetaAprendiz
nombre="Juan"
ficha={3223879}
programa="ADSO"
/>
</main>
);
}
// export default function App() {  
//   return(<main> <h1>Hola SENA</h1> </main>)}
// export default function App() { const fecha = new Date().toLocaleString(); return(<main> <h1>Hola SENA</h1> </main>)}

//Demo guiada: renderizar lista de tarjetas
// import TarjetaAprendiz from "./components /TarjetaAprendiz";
// const data = [
//   { id: 1, nombre: "Carolina", ficha: 3223874, programa: "ADSO" },
//   { id: 2, nombre: "Juan", ficha: 3144585, programa: "ADSO" },
//   { id: 3, nombre: "Luisa", ficha: 3169892, programa: "ADSO" },
// ];
// export default function App() {
//   return (
//     <main
//       style={{
//         maxWidth: 520,
//         margin: "30px auto",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <h2>Aprendices ADSO</h2>
//       {data.map((a) => (
//         <TarjetaAprendiz
//           key={a.id}
//           nombre={a.nombre}
//           ficha={a.ficha}
//           programa={a.programa}
//         />
//       ))}
//     </main>
//   );
// }
