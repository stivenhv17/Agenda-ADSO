// // Archivo: src/App.jsx
// // Componente principal de la aplicación Agenda ADSO.

// import { useEffect, useState } from "react";

// // API (capa de datos)
// import {
//   listarContactos,
//   crearContacto,
//   eliminarContactoPorId,
// } from "./api";

// // Configuración global
// import { APP_INFO } from "./config";

// // Componentes hijos
// import FormularioContacto from "./components/FormularioContacto";
// import ContactoCard from "./components/ContactoCard";

// function App() {
//   // Lista de contactos
//   const [contactos, setContactos] = useState([]);

//   // Estados de carga y error
//   const [cargando, setCargando] = useState(true);
//   const [error, setError] = useState("");

//   // === NUEVOS ESTADOS (BÚSQUEDA Y ORDENAMIENTO) ===
//   const [busqueda, setBusqueda] = useState("");
//   const [ordenAsc, setOrdenAsc] = useState(true);

//   // Cargar contactos al iniciar
//   useEffect(() => {
//     const cargarContactos = async () => {
//       try {
//         setCargando(true);
//         setError("");

//         const data = await listarContactos();
//         setContactos(data);
//       } catch (error) {
//         console.error("Error al cargar contactos:", error);
//         setError(
//           "No se pudieron cargar los contactos. Verifica que el servidor esté encendido e intenta de nuevo."
//         );
//       } finally {
//         setCargando(false);
//       }
//     };

//     cargarContactos();
//   }, []);

//   // Crear contacto (POST)
//   const onAgregarContacto = async (nuevoContacto) => {
//     try {
//       setError("");
//       const creado = await crearContacto(nuevoContacto);
//       setContactos((prev) => [...prev, creado]);
//     } catch (error) {
//       console.error("Error al crear contacto:", error);
//       setError(
//         "No se pudo guardar el contacto. Verifica tu conexión o el estado del servidor e intenta nuevamente."
//       );
//       throw error;
//     }
//   };

//   // Eliminar contacto (DELETE)
//   const onEliminarContacto = async (id) => {
//     try {
//       setError("");
//       await eliminarContactoPorId(id);
//       setContactos((prev) => prev.filter((c) => c.id !== id));
//     } catch (error) {
//       console.error("Error al eliminar contacto:", error);
//       setError(
//         "No se pudo eliminar el contacto. Vuelve a intentarlo o verifica el servidor."
//       );
//     }
//   };

//   // === BÚSQUEDA (nombre, correo, etiqueta y teléfono) ===
//   const contactosFiltrados = contactos.filter((c) => {
//     const termino = busqueda.toLowerCase();
//     const nombre = c.nombre.toLowerCase();
//     const correo = c.correo.toLowerCase();
//     const etiqueta = (c.etiqueta || "").toLowerCase();
//     const telefono = String(c.telefono || "").toLowerCase();

//     return (
//       nombre.includes(termino) ||
//       correo.includes(termino) ||
//       etiqueta.includes(termino) ||
//       telefono.includes(termino)
//     );
//   });

//   // === ORDENAMIENTO ===
//   const contactosOrdenados = [...contactosFiltrados].sort((a, b) => {
//     const nombreA = a.nombre.toLowerCase();
//     const nombreB = b.nombre.toLowerCase();

//     if (nombreA < nombreB) return ordenAsc ? -1 : 1;
//     if (nombreA > nombreB) return ordenAsc ? 1 : -1;
//     return 0;
//   });

//   // Render principal
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         {/* Header */}
//         <header className="mb-8">
//           <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
//             Desarrollo Web ReactJS Ficha {APP_INFO.ficha}
//           </p>

//           <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
//             {APP_INFO.titulo}
//           </h1>

//           <p className="text-sm text-gray-600 mt-1">{APP_INFO.subtitulo}</p>
//         </header>

//         {/* Error global */}
//         {error && (
//           <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
//             <p className="text-sm font-medium text-red-700">{error}</p>
//           </div>
//         )}

//         {/* Loading */}
//         {cargando ? (
//           <p className="text-sm text-gray-500">Cargando contactos...</p>
//         ) : (
//           <>
//             {/* Formulario */}
//             <FormularioContacto onAgregar={onAgregarContacto} />

//             {/* Buscador + Orden */}
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
//               <input
//                 type="text"
//                 className="w-full md:flex-1 rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
//                 placeholder="Buscar por nombre, correo, etiqueta o teléfono..."
//                 value={busqueda}
//                 onChange={(e) => setBusqueda(e.target.value)}
//               />

//               <button
//                 type="button"
//                 onClick={() => setOrdenAsc((prev) => !prev)}
//                 className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-200"
//               >
//                 {ordenAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
//               </button>
//             </div>

//             {/* Cantidad de resultados */}
//             <p className="text-sm text-gray-600 mb-4">
//               {contactosOrdenados.length} contacto
//               {contactosOrdenados.length !== 1 ? "s" : ""} encontrado
//               {contactosOrdenados.length !== 1 ? "s" : ""}
//             </p>

//             {/* Listado */}
//             <section className="space-y-4">
//               {contactosOrdenados.length === 0 ? (
//                 <p className="text-sm text-gray-500">
//                   No se encontraron contactos que coincidan con la búsqueda.
//                 </p>
//               ) : (
//                 contactosOrdenados.map((c) => (
//                   <ContactoCard
//                     key={c.id}
//                     nombre={c.nombre}
//                     telefono={c.telefono}
//                     correo={c.correo}
//                     etiqueta={c.etiqueta}
//                     empresa={c.empresa}
//                     onEliminar={() => onEliminarContacto(c.id)}
//                   />
//                 ))
//               )}
//             </section>
//           </>
//         )}

//         {/* Footer */}
//         <footer className="mt-8 text-xs text-gray-400">
//           <p>Desarrollo Web – ReactJS | Proyecto Agenda ADSO</p>
//           <p>Instructor: Gustavo Adolfo Bolaños Dorado</p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default App;

// Archivo: src/App.jsx
// Componente principal de la aplicación Agenda ADSO.

import { useEffect, useState } from "react";

// Importamos funciones de la API
import {
  listarContactos,
  crearContacto,
  actualizarContacto,
  eliminarContactoPorId,
} from "./api";

// Configuración global
import { APP_INFO } from "./config";

// Componentes hijos
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

function App() {
  // Estados
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [ordenAsc, setOrdenAsc] = useState(true);
  const [contactoEnEdicion, setContactoEnEdicion] = useState(null);

  // Cargar contactos al inicio
  useEffect(() => {
    const cargarContactos = async () => {
      try {
        setCargando(true);
        setError("");
        const data = await listarContactos();
        setContactos(data);
      } catch (error) {
        console.error("Error al cargar contactos:", error);
        setError(
          "No se pudieron cargar los contactos. Verifica que el servidor esté encendido e intenta de nuevo."
        );
      } finally {
        setCargando(false);
      }
    };
    cargarContactos();
  }, []);

  // Crear contacto
  const onAgregarContacto = async (nuevoContacto) => {
    try {
      setError("");
      const creado = await crearContacto(nuevoContacto);
      setContactos((prev) => [...prev, creado]);
    } catch (error) {
      console.error("Error al crear contacto:", error);
      setError(
        "No se pudo guardar el contacto. Verifica tu conexión o el servidor e intenta nuevamente."
      );
      throw error;
    }
  };

  // Actualizar contacto
  const onActualizarContacto = async (contactoActualizado) => {
    try {
      setError("");
      const actualizado = await actualizarContacto(
        contactoActualizado.id,
        contactoActualizado
      );

      setContactos((prev) =>
        prev.map((c) => (c.id === actualizado.id ? actualizado : c))
      );

      setContactoEnEdicion(null);
    } catch (error) {
      console.error("Error al actualizar contacto:", error);
      setError(
        "No se pudo actualizar el contacto. Verifica tu conexión o el servidor e intenta nuevamente."
      );
      throw error;
    }
  };

  // Eliminar contacto
  const onEliminarContacto = async (id) => {
    try {
      setError("");
      await eliminarContactoPorId(id);

      setContactos((prev) => prev.filter((c) => c.id !== id));

      setContactoEnEdicion((actual) =>
        actual && actual.id === id ? null : actual
      );
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
      setError("No se pudo eliminar el contacto. Intenta nuevamente.");
    }
  };

  // Activar modo edición
  const onEditarClick = (contacto) => {
    setContactoEnEdicion(contacto);
    setError("");
  };

  // Cancelar edición
  const onCancelarEdicion = () => {
    setContactoEnEdicion(null);
  };

  // === BÚSQUEDA ===
  const contactosFiltrados = contactos.filter((c) => {
    const termino = busqueda.toLowerCase();
    const nombre = c.nombre.toLowerCase();
    const correo = c.correo.toLowerCase();
    const etiqueta = (c.etiqueta || "").toLowerCase();
    return (
      nombre.includes(termino) ||
      correo.includes(termino) ||
      etiqueta.includes(termino)
    );
  });

  // === ORDENAMIENTO ===
  const contactosOrdenados = [...contactosFiltrados].sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA < nombreB) return ordenAsc ? -1 : 1;
    if (nombreA > nombreB) return ordenAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Encabezado */}
        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Desarrollo Web ReactJS Ficha {APP_INFO.ficha}
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            {APP_INFO.titulo}
          </h1>
          <p className="text-sm text-gray-600 mt-1">{APP_INFO.subtitulo}</p>
        </header>

        {/* Error global */}
        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        {/* Cargando */}
        {cargando ? (
          <p className="text-sm text-gray-500">Cargando contactos...</p>
        ) : (
          <>
            {/* Formulario */}
            <FormularioContacto
              onAgregar={onAgregarContacto}
              onActualizar={onActualizarContacto}
              contactoEnEdicion={contactoEnEdicion}
              onCancelarEdicion={onCancelarEdicion}
            />

            {/* Buscador */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <input
                type="text"
                className="w-full md:flex-1 rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Buscar por nombre, correo o etiqueta..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setOrdenAsc((prev) => !prev)}
                className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-200"
              >
                {ordenAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
              </button>
            </div>

            {/* Lista de contactos */}
            <section className="space-y-4">
              {contactosOrdenados.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No se encontraron contactos que coincidan con la búsqueda.
                </p>
              ) : (
                contactosOrdenados.map((c) => (
                  <ContactoCard
                    key={c.id}
                    nombre={c.nombre}
                    telefono={c.telefono}
                    correo={c.correo}
                    etiqueta={c.etiqueta}
                    onEliminar={() => onEliminarContacto(c.id)}
                    onEditar={() => onEditarClick(c)}
                  />
                ))
              )}
            </section>
          </>
        )}

        {/* Footer */}
        <footer className="mt-8 text-xs text-gray-400">
          <p>Desarrollo Web – ReactJS | Proyecto Agenda ADSO</p>
          <p>Instructor: Gustavo Adolfo Bolaños Dorado</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
