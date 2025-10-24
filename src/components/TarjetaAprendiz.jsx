// src/components/TarjetaAprendiz.jsx
// Demo guiada: usándolo en App.jsx
export default function TarjetaAprendiz({ nombre, ficha, programa }) {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <h4>{nombre}</h4>
      <p>Ficha: {ficha}</p>
      <small>{programa}</small>
    </article>
  );
}

//Demo guiada: evento simple (onClick)
// export default function TarjetaAprendiz({ nombre, ficha, programa }) {
//   const handleVerDetalle = () => {
//     alert(`Aprendiz: ${nombre} 3 Ficha: ${ficha}`);
//   };
//   return (
//     <article
//       style={{
//         border: "1px solid #ddd",
//         padding: "12px",
//         borderRadius: "10px",
//         marginBottom: "10px",
//       }}
//     >
//       <h4>{nombre}</h4>
//       <p>Ficha: {ficha}</p>
//       <small>{programa}</small>
//       <div style={{ marginTop: 8 }}>
//         <button onClick={handleVerDetalle}>Ver detalle</button>
//       </div>
//     </article>
//   );
// }

// //Render condicional dentro de la tarjeta
// export default function TarjetaAprendiz({ nombre, ficha, programa }) {
// const esNuevaCohorte = ficha >= 3200000;
// return (
// <article style={{
// border:"1px solid #ddd",
// padding:"12px",
// borderRadius:"10px",
// marginBottom:"10px"
// }}>
// <h4>
// {nombre}
// {esNuevaCohorte && (
// <span style={{color:"green"}}>
// " Nueva cohorte
// </span>
// )}
// </h4>
// <p>Ficha: {ficha}</p>
// <small>{programa}</small>
// </article>
// );
// }