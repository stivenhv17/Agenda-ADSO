// // Este componente muestra un contacto individual.
// // Incluye nombre, teléfono, correo, etiqueta, empresa y el botón de eliminar.
// export default function ContactoCard({ nombre, telefono, correo, etiqueta, empresa, onEliminar }) {
//   return (
//     <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 flex items-start justify-between">
//       {/* Información del contacto */}
//       <div className="space-y-1">
//         {/* Nombre */}
//         <h3 className="text-xl font-semibold text-gray-800">{nombre}</h3>
//         {/* Teléfono */}
//         <p className="text-gray-600 text-sm flex items-center gap-2">
//           <span className="text-purple-500 text-lg">📞</span>
//           {telefono}
//         </p>
//         {/* Correo */}
//         <p className="text-gray-600 text-sm flex items-center gap-2">
//           <span className="text-purple-500 text-lg">✉️</span>
//           {correo}
//         </p>
//         {/* Empresa (si existe) */}
//         {empresa && (
//           <p className="text-gray-600 text-sm flex items-center gap-2">
//             <span className="text-purple-500 text-lg">🏢</span>
//             {empresa}
//           </p>
//         )}
//         {/* Etiqueta (si existe) */}
//         {etiqueta && (
//           <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mt-2">
//             {etiqueta}
//           </span>
//         )}
//       </div>
//       {/* Botón de eliminar */}
//       <button
//         onClick={onEliminar}
//         className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow transition"
//       >
//         Eliminar
//       </button>
//     </div>
//   );
// }

// Archivo: src/components/ContactoCard.jsx
// Componente que muestra la información de un contacto en una tarjeta.

function ContactoCard({ nombre, telefono, correo, etiqueta, onEliminar, onEditar }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 
    flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      
      {/* Información del contacto */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          {nombre}
        </h3>

        <p className="text-sm text-gray-600">
          Tel: {telefono}
        </p>

        <p className="text-sm text-gray-600">
          Correo: {correo}
        </p>

        {etiqueta && (
          <span className="inline-flex mt-1 px-2 py-0.5 rounded-full text-xs font-medium 
          bg-purple-50 text-purple-700">
            {etiqueta}
          </span>
        )}
      </div>

      {/* Botones de acción */}
      <div className="flex gap-2 justify-end">
        {/* Editar */}
        <button
          type="button"
          onClick={onEditar}
          className="text-xs md:text-sm px-3 py-2 rounded-xl border border-gray-300 
          text-gray-700 hover:bg-gray-100"
        >
          Editar
        </button>

        {/* Eliminar */}
        <button
          type="button"
          onClick={onEliminar}
          className="text-xs md:text-sm px-3 py-2 rounded-xl bg-red-500 text-white 
          hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>

    </article>
  );
}

export default ContactoCard;

