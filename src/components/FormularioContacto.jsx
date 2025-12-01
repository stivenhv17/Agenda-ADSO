// // Archivo: src/components/FormularioContacto.jsx
// // Versión extendida: validación de longitud de teléfono

// import { useState } from "react";

// function FormularioContacto({ onAgregar }) {
//   // Estado del formulario
//   const [form, setForm] = useState({
//     nombre: "",
//     telefono: "",
//     correo: "",
//     etiqueta: "",
//     empresa: "",
//   });

//   // Estado de errores
//   const [errores, setErrores] = useState({
//     nombre: "",
//     telefono: "",
//     correo: "",
//   });

//   const [enviando, setEnviando] = useState(false);

//   // Manejar cambios de los inputs
//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   // Validar formulario usando trim() + longitud del teléfono
//   function validarFormulario() {
//     const nuevosErrores = { nombre: "", telefono: "", correo: "" };

//     // Validación nombre
//     if (!form.nombre.trim()) {
//       nuevosErrores.nombre = "El nombre es obligatorio.";
//     }

//     // Validación teléfono con longitud mínima
//     if (!form.telefono.trim()) {
//       nuevosErrores.telefono = "El teléfono es obligatorio.";
//     } else if (form.telefono.trim().length < 7) {
//       nuevosErrores.telefono = "El teléfono debe tener al menos 7 dígitos.";
//     }

//     // Validación correo
//     if (!form.correo.trim()) {
//       nuevosErrores.correo = "El correo es obligatorio.";
//     } else if (!form.correo.includes("@")) {
//       nuevosErrores.correo = "El correo debe contener @.";
//     }

//     setErrores(nuevosErrores);

//     const esValido =
//       !nuevosErrores.nombre &&
//       !nuevosErrores.telefono &&
//       !nuevosErrores.correo;

//     return esValido;
//   }

//   // Envío del formulario
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const esValido = validarFormulario();
//     if (!esValido) return;

//     try {
//       setEnviando(true);

//       await onAgregar(form);

//       setForm({
//         nombre: "",
//         telefono: "",
//         correo: "",
//         etiqueta: "",
//         empresa: "",
//       });

//       setErrores({
//         nombre: "",
//         telefono: "",
//         correo: "",
//       });
//     } finally {
//       setEnviando(false);
//     }
//   };

//   return (
//     <form
//       className="bg-white shadow-sm rounded-2xl p-6 space-y-4 mb-8"
//       onSubmit={onSubmit}
//     >
//       <h2 className="text-lg font-semibold text-gray-900 mb-2">
//         Nuevo contacto
//       </h2>

//       {/* Nombre */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Nombre *
//         </label>
//         <input
//           className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
//           name="nombre"
//           placeholder="Ej: Camila Pérez"
//           value={form.nombre}
//           onChange={onChange}
//         />
//         {errores.nombre && (
//           <p className="mt-1 text-xs text-red-600">{errores.nombre}</p>
//         )}
//       </div>

//       {/* Teléfono */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Teléfono *
//         </label>
//         <input
//           className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
//           name="telefono"
//           placeholder="Ej: 300 123 4567"
//           value={form.telefono}
//           onChange={onChange}
//         />
//         {errores.telefono && (
//           <p className="mt-1 text-xs text-red-600">{errores.telefono}</p>
//         )}
//       </div>

//       {/* Correo */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Correo *
//         </label>
//         <input
//           className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
//           name="correo"
//           placeholder="Ej: camila@sena.edu.co"
//           value={form.correo}
//           onChange={onChange}
//         />
//         {errores.correo && (
//           <p className="mt-1 text-xs text-red-600">{errores.correo}</p>
//         )}
//       </div>

//       {/* Etiqueta opcional */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Etiqueta (opcional)
//         </label>
//         <input
//           className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
//           name="etiqueta"
//           placeholder="Ej: Trabajo"
//           value={form.etiqueta}
//           onChange={onChange}
//         />
//       </div>

//       {/* Empresa opcional */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Empresa (opcional)
//         </label>
//         <input
//           className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
//           name="empresa"
//           placeholder="Ej: SENA"
//           value={form.empresa}
//           onChange={onChange}
//         />
//       </div>

//       {/* Botón */}
//       <div className="pt-2">
//         <button
//           type="submit"
//           disabled={enviando}
//           className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
//         >
//           {enviando ? "Guardando..." : "Agregar contacto"}
//         </button>
//       </div>
//     </form>
//   );
// }

// export default FormularioContacto;

// Archivo: src/components/FormularioContacto.jsx
// Componente para crear y editar contactos.

import { useEffect, useState } from "react";

function FormularioContacto({
  onAgregar,
  onActualizar,
  contactoEnEdicion,
  onCancelarEdicion,
}) {
  // Estado principal del formulario
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  // Errores de validación
  const [errores, setErrores] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });

  // Estado de envío al servidor
  const [enviando, setEnviando] = useState(false);

  // Cargar datos en modo edición
  useEffect(() => {
    if (contactoEnEdicion) {
      setForm({
        nombre: contactoEnEdicion.nombre || "",
        telefono: contactoEnEdicion.telefono || "",
        correo: contactoEnEdicion.correo || "",
        etiqueta: contactoEnEdicion.etiqueta || "",
      });

      setErrores({ nombre: "", telefono: "", correo: "" });
    } else {
      setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
      setErrores({ nombre: "", telefono: "", correo: "" });
    }
  }, [contactoEnEdicion]);

  // Manejador de cambios
  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validación del formulario
  function validarFormulario() {
    const nuevosErrores = { nombre: "", telefono: "", correo: "" };

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }
    if (!form.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    }
    if (!form.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!form.correo.includes("@")) {
      nuevosErrores.correo = "El correo debe contener @.";
    }

    setErrores(nuevosErrores);

    return (
      !nuevosErrores.nombre &&
      !nuevosErrores.telefono &&
      !nuevosErrores.correo
    );
  }

  // Envío del formulario
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    try {
      setEnviando(true);

      if (contactoEnEdicion) {
        // MODO EDICIÓN
        await onActualizar({
          ...form,
          id: contactoEnEdicion.id,
        });

        setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
        setErrores({ nombre: "", telefono: "", correo: "" });
        if (onCancelarEdicion) onCancelarEdicion();
      } else {
        // MODO CREAR
        await onAgregar(form);

        setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
        setErrores({ nombre: "", telefono: "", correo: "" });
      }
    } finally {
      setEnviando(false);
    }
  };

  // Textos dinámicos
  const estaEnEdicion = Boolean(contactoEnEdicion);
  const tituloFormulario = estaEnEdicion ? "Editar contacto" : "Nuevo contacto";
  const textoBotonPrincipal = estaEnEdicion
    ? "Guardar cambios"
    : "Agregar contacto";

  return (
    <form
      className="bg-white shadow-sm rounded-2xl p-6 space-y-4 mb-8"
      onSubmit={onSubmit}
    >
      {/* Título */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        {tituloFormulario}
      </h2>

      {/* Nombre */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre *
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="nombre"
          placeholder="Ej: Camila Pérez"
          value={form.nombre}
          onChange={onChange}
        />
        {errores.nombre && (
          <p className="mt-1 text-xs text-red-600">{errores.nombre}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono *
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="telefono"
          placeholder="Ej: 300 123 4567"
          value={form.telefono}
          onChange={onChange}
        />
        {errores.telefono && (
          <p className="mt-1 text-xs text-red-600">{errores.telefono}</p>
        )}
      </div>

      {/* Correo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo *
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="correo"
          placeholder="Ej: camila@sena.edu.co"
          value={form.correo}
          onChange={onChange}
        />
        {errores.correo && (
          <p className="mt-1 text-xs text-red-600">{errores.correo}</p>
        )}
      </div>

      {/* Etiqueta (opcional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Etiqueta (opcional)
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="etiqueta"
          placeholder="Ej: Trabajo"
          value={form.etiqueta}
          onChange={onChange}
        />
      </div>

      {/* Botones */}
      <div className="pt-2 flex flex-col md:flex-row md:items-center gap-3">
        <button
          type="submit"
          disabled={enviando}
          className="w-full md:w-auto bg-purple-600 hover:bg-purple-700
          disabled:bg-purple-300 disabled:cursor-not-allowed
          text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
        >
          {enviando ? "Guardando..." : textoBotonPrincipal}
        </button>

        {estaEnEdicion && (
          <button
            type="button"
            onClick={onCancelarEdicion}
            className="w-full md:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-xl
            border border-gray-300 hover:bg-gray-200 text-sm"
          >
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  );
}

export default FormularioContacto;
