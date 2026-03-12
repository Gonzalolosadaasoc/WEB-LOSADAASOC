import React, { useState, useEffect } from 'react';
import { Instagram, ArrowLeft } from 'lucide-react';

/**
 * Losada & Asociados - Sitio Web Profesional (Versión React)
 * * Instrucciones para el entorno local:
 * 1. Asegúrate de tener instalada la librería lucide-react (npm install lucide-react)
 * 2. Coloca las imágenes en la carpeta /public de tu proyecto.
 */

export default function App() {
  // -------------------------------------------------------------------
  // ZONA DE CONFIGURACIÓN
  // -------------------------------------------------------------------
  const brandBrown = "#552A13";
  const hoverOverlayColor = "#552A13CC"; // Marrón corporativo al 80% de opacidad
  const logoEstudio = "LOGO LISTO HORIZONTAL.png";
  const isotipoEstudio = "ISOTIPO.png";
  const imagenDeFondo = "FORBER 6.jpg";

  const datosContacto = {
    direccion: "Bernardo de Irigoyen 3918, Mar del Plata, Buenos Aires",
    telefono: "+54 9 223 535-3121",
    email: "gonzalo@losadaasoc.com",
    instagram: "https://www.instagram.com/santiagolosadaasociados/" 
  };

  const equipo = [
    { 
      id: 1, 
      nombre: "Arq. Carlos Santiago Losada", 
      rol: "Socio Fundador", 
      descripcion: "Arquitecto recibido de la UNMdP año 2004.\nMatricula CAPBA N°23987", 
      foto: "foto_socio_1.jpg" 
    },
    { 
      id: 2, 
      nombre: "Arq. Maria Laura Fassinato", 
      rol: "Socio", 
      descripcion: "Arquitecta recibida de la UNMdP año 2015.\nMatricula CAPBA N°28859.", 
      foto: "foto_socio_2.jpg" 
    },
    { 
      id: 3, 
      nombre: "Arq. Geronimo Sobrino", 
      rol: "Socio", 
      descripcion: "Arquitecto recibido de la UNMdP año 2021.\nMatricula CAPBA N°34988.", 
      foto: "foto_jefe.jpg" 
    },
    { 
      id: 4, 
      nombre: "Arq. Gonzalo Gasparini", 
      rol: "Socio", 
      descripcion: "Arquitecto recibido de la UNMdP año 2021.\nMatricula CAPBA N°34760.", 
      foto: "Gonzalo.JPEG" 
    }
  ];

  const categoriasProyectos = [
    {
      titulo: "Viviendas Unifamiliares",
      obras: [
        { id: 1, titulo: "Casa Viamonte", ubicacion: "Mar del Plata", anio: "2020", foto: "Viamonte 1.jpg", galeria: ["Viamonte 1.jpg", "Viamonte 2.jpg", "Viamonte 3.jpg", "Viamonte 4.jpg", "Viamonte 5.jpg", "Viamonte 6.jpg", "Viamonte 7.jpg", "Viamonte 8.jpg", "Viamonte 9.jpg", "Viamonte 18.jpg"] },
        { id: 2, titulo: "Casa Pinares", ubicacion: "Pinares de Santa Clara, Santa Clara", anio: "2021", foto: "PINARES-1.jpg", galeria: ["PINARES-2.jpg", "PINARES-3.jpg", "PINARES-4.jpg", "PINARES-5.jpg", "PINARES-6.jpg", "PINARES-7.jpg", "PINARES-8.jpg", "PINARES-9.jpg", "PINARES-10.jpg", "PINARES-11.jpg", "PINARES-12.jpg", "PINARES-13.jpg", "PINARES-14.jpg"] },
        { id: 3, titulo: "Lote 180", ubicacion: "Arenas del Sur, Mar del Plata", anio: "2022", foto: "Lote 180 1.jpg", galeria: ["Lote 180 1.jpg", "Lote 180 2.jpg", "Lote 180 3.jpg", "Lote 180 4.jpg", "Lote 180 5.jpg", "Lote 180 6.jpg", "Lote 180 7.jpg", "Lote 180 8.jpg"] },
        { id: 4, titulo: "Casa Acantilados", ubicacion: "Acantilados, Mar del Plata", anio: "2022", foto: "VIVIENDA ACANTILADOS  1.jpg", galeria: ["VIVIENDA ACANTILADOS  1.jpg", "VIVIENDA ACANTILADOS  2.jpg", "VIVIENDA ACANTILADOS  3.jpg", "VIVIENDA ACANTILADOS 4.jpg"] },
        { id: 5, titulo: "Lote 181", ubicacion: "Mar del Plata", anio: "2021", foto: "Lote 181 1.jpg", galeria: ["Lote 181 1.jpg", "Lote 181 2.jpg", "Lote 181 3.jpg", "Lote 181 4.jpg", "Lote 181 5.jpg", "Lote 181 6.jpg", "Lote 181 7.jpg", "Lote 181 8.jpg"] },
        { id: 6, titulo: "Lote 58", ubicacion: "Mar del Plata", anio: "2019", foto: "Lote 58 1.jpg", galeria: ["Lote 58 1.jpg", "Lote 58 2.jpg", "Lote 58 3.jpg", "Lote 58 4.jpg"] },
        { id: 7, titulo: "Lote 175", ubicacion: "Arenas del Sur, Mar del Plata", anio: "2021", foto: "Lote 175 1.jpg", galeria: ["Lote 175 1.jpg", "Lote 175 2.jpg", "Lote 175 3.jpg", "Lote 175 4.jpg", "Lote 175 5.jpg", "Lote 175 6.jpg", "Lote 175 7.jpg", "Lote 175 8.jpg", "Lote 175 9.jpg", "Lote 175 15.jpg"] },
        { id: 8, titulo: "Casa Los pinos", ubicacion: "Mar del Plata", anio: "2023", foto: "Casa Los pinos 1.jpg", galeria: ["Casa Los pinos 1.jpg", "Casa Los pinos 2.jpg", "Casa Los pinos 3.jpg", "Casa Los pinos 4.jpg", "Casa Los pinos 5.jpg", "Casa Los pinos 6.jpg"] },
        { id: 9, titulo: "Lote 83", ubicacion: "Arenas del Sur, Mar del Plata", anio: "2021", foto: "Lote 83 1.jpg", galeria: ["Lote 83 1.jpg", "Lote 83 2.jpg", "Lote 83 3.jpg", "Lote 83 4.jpg", "Lote 83 5.jpg"] },
        { id: 10, titulo: "Casa Los Álamos", ubicacion: "La Vega, San Martín de los Andes", anio: "2023", foto: "Casa Los alamos 1.jpg", galeria: ["Casa Los alamos 1.jpg", "Casa Los alamos 2.jpg", "Casa Los alamos 3.jpg", "Casa Los alamos 4.jpg", "Casa Los alamos 5.jpg", "Casa Los alamos 6.jpg", "Casa Los alamos 7.jpg", "Casa Los alamos 8.jpg", "Casa Los alamos 9.jpg"] },
        { id: 11, titulo: "Casa Playa Los Lobos", ubicacion: "Playa Los Lobos, Mar del Plata", anio: "2022", foto: "Casa Playa Los Lobos 1.jpg", galeria: ["Casa Playa Los Lobos 1.jpg", "Casa Playa Los Lobos 2.jpg", "Casa Playa Los Lobos 3.jpg", "Casa Playa Los Lobos 4.jpg", "Casa Playa Los Lobos 5.jpg", "Casa Playa Los Lobos 6.jpg", "Casa Playa Los Lobos 7.jpg", "Casa Playa Los Lobos 8.jpg", "Casa Playa Los Lobos 9.jpg", "Casa Playa Los Lobos 10.jpg"] },
      ]
    },
    { titulo: "Viviendas Multifamiliares", obras: [
      { id: 1, titulo: "Colón 3885", ubicacion: "Colón 3885, Mar del Plata", anio: "2012", foto: "Colon 3885 1.jpg", galeria: ["Colon 3885 1.jpg", "Colon 3885 2.jpg", "Colon 3885 3.jpg", "Colon 3885 4.jpg"] },
      { id: 2, titulo: "Olavarría", ubicacion: "Olavarría, Mar del Plata", anio: "2019", foto: "Olavarria 1.jpg", galeria: ["Olavarria 1.jpg", "Olavarria 2.jpg", "Olavarria 3.jpg", "Olavarria 4.jpg", "Olavarria 5.jpg", "Olavarria 6.jpg", "Olavarria 7.jpg", "Olavarria 8.jpg"] },
      { id: 3, titulo: "Rawson 2035", ubicacion: "Rawson 2035, Mar del Plata", anio: "2018", foto: "RAWSON 2035 1.jpg", galeria: ["RAWSON 2035 1.jpg", "RAWSON 2035 2.jpg", "RAWSON 2035 3.jpg", "RAWSON 2035 4.jpg", "RAWSON 2035 5.jpg", "RAWSON 2035 6.jpg", "RAWSON 2035 7.jpg", "RAWSON 2035 8.jpg", "RAWSON 2035 9.jpg", "RAWSON 2035 14.jpg"] },
      { id: 4, titulo: "Rivadavia 3774", ubicacion: "Rivadavia 3774, Mar del Plata", anio: "2009", foto: "RIVADAVIA 3774 1.jpg", galeria: ["RIVADAVIA 3774 1.jpg", "RIVADAVIA 3774 2.jpg", "RIVADAVIA 3774 3.jpg", "RIVADAVIA 3774 4.jpg"] },
      { id: 5, titulo: "Salta 1919", ubicacion: "Salta 1919, Mar del Plata", anio: "2016", foto: "SALTA 1919 1.jpg", galeria: ["SALTA 1919 1.jpg", "SALTA 1919 2.jpg", "SALTA 1919 3.jpg", "SALTA 1919 4.jpg", "SALTA 1919 5.jpg"] },
    ] },
    { titulo: "Edificios Comerciales", obras: [
      { id: 1, titulo: "Forber", ubicacion: "Bernardo de Irigoyen 3918, Mar del Plata", anio: "2022", foto: "FORBER 1.jpg", galeria: ["FORBER 1.jpg", "FORBER 2.jpg", "FORBER 3.jpg", "FORBER 4.jpg", "FORBER 5.jpg", "FORBER 6.jpg", "FORBER 7.jpg", "FORBER 8.jpg", "FORBER 9.jpg"] },
    ] },
    { titulo: "Edificios Educativos", obras: [
      { id: 1, titulo: "HTC - Box Park", ubicacion: "Gascón 544", anio: "2022", foto: "BOX PARK 1.jpg", galeria: ["BOX PARK 1.jpg", "BOX PARK 2.jpg", "BOX PARK 3.jpg", "BOX PARK 4.jpg"] }
    ] }
  ];

  // -------------------------------------------------------------------
  // LÓGICA DE NAVEGACIÓN Y ESTADO
  // -------------------------------------------------------------------
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const [proyectoActivo, setProyectoActivo] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (proyectoActivo) return; 
      const secciones = ['inicio', 'proyectos', 'quienes-somos', 'contacto'];
      let actual = 'inicio';
      secciones.forEach(id => {
        const el = document.getElementById(`seccion-${id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) actual = id;
        }
      });
      setSeccionActiva(actual);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [proyectoActivo]);

  useEffect(() => {
    document.body.style.overflow = proyectoActivo ? 'hidden' : 'auto';
  }, [proyectoActivo]);

  const scrollToSeccion = (id) => {
    if (proyectoActivo) setProyectoActivo(null);
    const el = document.getElementById(`seccion-${id}`);
    if (id === 'inicio') window.scrollTo({ top: 0, behavior: 'smooth' });
    else if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Tipografía de Google Fonts */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');`}
      </style>

{/* HEADER FIJO (z-130) */}
      <header className="fixed top-0 left-0 w-full bg-white z-[130] shadow-sm h-20 border-b border-stone-100">
        {/* ACÁ EL CAMBIO: w-full en lugar de max-w-7xl para que vaya de punta a punta */}
        <div className="w-full px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* LADO IZQUIERDO: DINÁMICO (LOGO O VOLVER) */}
          {/* ACÁ EL CAMBIO: Le sacamos el ancho fijo (w-48) para que no restrinja al logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            {proyectoActivo ? (
              <button 
                onClick={() => setProyectoActivo(null)}
                className="flex items-center font-bold uppercase tracking-widest text-[10px] md:text-xs transition-transform hover:-translate-x-1"
                style={{ color: brandBrown }}
              >
                <ArrowLeft size={16} />
                <span className="ml-2">Volver</span>
              </button>
            ) : (
              <div className="cursor-pointer h-full flex items-center" onClick={() => scrollToSeccion('inicio')}>
                {/* ACÁ EL CAMBIO: h-14 md:h-16 hace que sea casi del alto de la barra (h-20) */}
                <img src={isotipoEstudio} alt="Logo Losada & Asociados" className="h-14 md:h-16 object-contain" />
              </div>
            )}
          </div>

          {/* CENTRO: MENÚ (Eje central fijo para evitar saltos) */}
          <div className="flex-grow flex items-center justify-center space-x-2 md:space-x-10">
            <button 
              onClick={() => scrollToSeccion('inicio')} 
              className={`hidden sm:block font-semibold tracking-widest uppercase text-[9px] md:text-sm transition-colors ${seccionActiva === 'inicio' ? 'border-b-2 pb-1' : 'text-stone-500 hover:text-stone-800'}`} 
              style={{ color: seccionActiva === 'inicio' ? brandBrown : '', borderColor: brandBrown }}
            >
              Inicio
            </button>
            
            <button 
              onClick={() => scrollToSeccion('proyectos')} 
              className={`font-semibold tracking-widest uppercase text-[9px] md:text-sm transition-colors ${seccionActiva === 'proyectos' ? 'border-b-2 pb-1' : 'text-stone-500 hover:text-stone-800'}`} 
              style={{ color: seccionActiva === 'proyectos' ? brandBrown : '', borderColor: brandBrown }}
            >
              Proyectos
            </button>
            
            <button 
              onClick={() => scrollToSeccion('quienes-somos')} 
              className={`font-semibold tracking-widest uppercase text-[9px] md:text-sm transition-colors ${seccionActiva === 'quienes-somos' ? 'border-b-2 pb-1' : 'text-stone-500 hover:text-stone-800'}`} 
              style={{ color: seccionActiva === 'quienes-somos' ? brandBrown : '', borderColor: brandBrown }}
            >
              ESTUDIO
            </button>
            
            <button 
              onClick={() => scrollToSeccion('contacto')} 
              className={`font-semibold tracking-widest uppercase text-[9px] md:text-sm transition-colors ${seccionActiva === 'contacto' ? 'border-b-2 pb-1' : 'text-stone-500 hover:text-stone-800'}`} 
              style={{ color: seccionActiva === 'contacto' ? brandBrown : '', borderColor: brandBrown }}
            >
              <span className="hidden md:inline">Contáctanos</span>
              <span className="md:hidden">Contacto</span>
            </button>
          </div>

          {/* LADO DERECHO: REDES */}
          {/* Le dejamos un ancho mínimo para equilibrar el espacio con el logo */}
          <div className="flex-shrink-0 w-16 md:w-32 flex justify-end items-center h-full">
            <a href={datosContacto.instagram} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110" style={{ color: brandBrown }} title="Instagram">
              {/* ACÁ EL CAMBIO: Pasamos de size={20} a size={28} (o probá 32 si lo querés aún más grande) */}
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-20">
        
      {/* 1. SECCIÓN INICIO */}
        <section id="seccion-inicio" className="relative h-[calc(100vh-5rem)] w-full flex items-center justify-center overflow-hidden bg-stone-900 scroll-mt-20">
          <div className="absolute inset-0 z-0">
            {/* Le bajamos un poco la opacidad a la imagen a 50 */}
            <img src={imagenDeFondo} alt="Fondo" className="w-full h-full object-cover object-center opacity-50" />
            {/* CAMBIO AQUÍ: Pusimos un velo blanco al 70% */}
            <div className="absolute inset-0 bg-white/30"></div>
          </div>
          <div className="relative z-10 w-[85%] max-w-[600px] flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <img src={logoEstudio} alt="Estudio Central" className="w-full object-contain" />
          </div>
        </section>

        {/* 2. SECCIÓN PROYECTOS (DAMERO 3:2 CONTINUO) */}
        <section id="seccion-proyectos" className="min-h-[calc(100vh-5rem)] w-full bg-white flex flex-col items-center justify-center py-12 px-4 md:px-8 relative z-10 scroll-mt-20">
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoriasProyectos.map((categoria, catIndex) => (
                <React.Fragment key={catIndex}>
                  {/* Casillero Título de Categoría */}
                  <div className="aspect-[3/2] text-white flex flex-col items-center justify-center p-3 text-center shadow-md" style={{ backgroundColor: brandBrown }}>
                    <h2 className="text-sm md:text-base font-bold uppercase tracking-wider">{categoria.titulo}</h2>
                  <div className="w-8 h-px bg-white/50 mt-3 mb-2"></div>
                    <span className="text-[10px] md:text-xs font-light uppercase">
                      {categoria.obras.length} {categoria.obras.length === 1 ? "Obra" : "Obras"}
                    </span>
                  </div>

                  {/* Obras de la Categoría */}
                  {categoria.obras.map((obra) => (
                    <div key={obra.id} className="relative group aspect-[3/2] overflow-hidden bg-stone-100 cursor-pointer shadow-sm" onClick={() => setProyectoActivo(obra)}>
                      <img src={obra.foto} alt={obra.titulo} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                      {/* Overlay con Información */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white" style={{ backgroundColor: hoverOverlayColor }}> 
                        <h3 className="font-bold uppercase text-xs md:text-sm">{obra.titulo}</h3>
                        <p className="text-[10px] md:text-xs mt-1 font-light uppercase italic">{obra.ubicacion} <br/> {obra.anio}</p>
                      </div>
                    </div>
                  ))}

                  {/* Marcador si la categoría está vacía */}
                  {categoria.obras.length === 0 && (
                    <div className="aspect-[3/2] border-2 border-dashed flex flex-col items-center justify-center bg-stone-50 p-4 text-center" style={{ borderColor: `${brandBrown}40` }}>
                      <span className="text-xs uppercase tracking-widest font-light italic" style={{ color: brandBrown }}>Próximamente</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN QUIÉNES SOMOS (DIAPOSITIVA) */}
        <section 
          id="seccion-quienes-somos" 
          className="min-h-screen w-full bg-stone-100 border-t border-stone-200 scroll-mt-20 flex flex-col items-center justify-center py-20 px-4 md:px-8"
        >
          <div className="w-full px-4 md:px-8">
            {/* Agregamos gap-16 para que en el celu respiren mejor las fotos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
              {equipo.map((miembro) => (
                <div key={miembro.id} className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square mb-4 overflow-hidden bg-white shadow-md relative border-b-4" style={{ borderColor: brandBrown }}>
                    <img src={miembro.foto} alt={miembro.nombre} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide mb-1" style={{ color: brandBrown }}>{miembro.nombre}</h3>
                  <p className="text-[10px] md:text-xs font-light italic text-stone-500 uppercase tracking-widest mb-2">{miembro.rol}</p>
                  <p className="text-xs md:text-sm font-normal text-stone-600 leading-relaxed px-2 whitespace-pre-line">{miembro.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN CONTACTO (PANTALLA COMPLETA) */}
        <section id="seccion-contacto" className="h-[calc(100vh-5rem)] w-full bg-stone-50 flex flex-col scroll-mt-20">
          
          {/* 1. FORMULARIO ESCALADO */}
          <div className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-24 py-6">
            <div className="w-full max-w-6xl">
              <div className="bg-white p-8 md:p-16 lg:p-20 shadow-sm border border-stone-100 w-full">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-stone-400 font-medium">Nombre Completo</label>
                    <input type="text" className="border-b border-stone-200 py-3 focus:outline-none focus:border-stone-800 transition-colors bg-transparent text-lg font-light" placeholder="Juan Pérez" />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-stone-400 font-medium">Correo Electrónico</label>
                    <input type="email" className="border-b border-stone-200 py-3 focus:outline-none focus:border-stone-800 transition-colors bg-transparent text-lg font-light" placeholder="ejemplo@mail.com" />
                  </div>
                  <div className="flex flex-col text-left md:col-span-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-stone-400 font-medium">Mensaje / Consulta</label>
                    <textarea rows="5" className="border-b border-stone-200 py-3 focus:outline-none focus:border-stone-800 transition-colors bg-transparent resize-none text-lg font-light" placeholder="Detalles de su proyecto..."></textarea>
                  </div>
                  <div className="md:col-span-2 pt-6 flex justify-center">
                    <button className="w-full md:w-auto px-24 py-5 text-white text-[10px] md:text-xs uppercase tracking-[0.4em] transition-all hover:opacity-90 shadow-xl" style={{ backgroundColor: brandBrown }}>
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* 2. FOOTER DIVIDIDO EN 4 PARTES IGUALES Y CENTRADAS */}
          <footer className="w-full bg-white border-t border-stone-200 py-12">
            <div className="w-full px-4 md:px-8">
              {/* Grilla de 4 columnas iguales (lg:grid-cols-4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-0 items-start">
                
                {/* Columna 1 */}
                <div className="flex flex-col items-center text-center px-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: brandBrown }}>Ubicación</h4>
                  <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">{datosContacto.direccion}</p>
                </div>

                {/* Columna 2 */}
                <div className="flex flex-col items-center text-center px-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: brandBrown }}>Horario Laboral</h4>
                  <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">8 am - 16 pm</p>
                </div>

                {/* Columna 3 */}
                <div className="flex flex-col items-center text-center px-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: brandBrown }}>Teléfono</h4>
                  <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">{datosContacto.telefono}</p>
                </div>

                {/* Columna 4 */}
                <div className="flex flex-col items-center text-center px-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: brandBrown }}>E-mail</h4>
                  <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed break-all">{datosContacto.email}</p>
                </div>

              </div>
            </div>
          </footer>
        </section>
      </main>

          {/* 5. VISTA DETALLE PROYECTO (MODAL) */}
{proyectoActivo && (
  <div className="fixed inset-0 z-[120] bg-white overflow-y-auto pt-20 animate-in fade-in duration-300">
    <div className="max-w-4xl mx-auto w-full px-4 py-12 text-center">
      <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-2 uppercase" style={{ color: brandBrown }}>{proyectoActivo.titulo}</h1>
      <div className="w-10 h-[2px] mx-auto mb-3" style={{ backgroundColor: brandBrown }}></div>
      <p className="text-stone-500 uppercase tracking-widest text-[10px] md:text-xs font-light italic">{proyectoActivo.ubicacion} &nbsp;|&nbsp; {proyectoActivo.anio}</p>
    </div>

    {/* CONTENEDOR DE GALERÍA */}
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-24">
      <div className="flex flex-col gap-8"> {/* Cambiado a flex-col para un recorrido lineal y ordenado */}
        {proyectoActivo.galeria.map((img, idx) => (
          <div 
            key={`${proyectoActivo.id}-${idx}`} 
            className="w-full bg-stone-50 overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ transitionDelay: `${idx * 100}ms` }} // Efecto de cascada
          >
            <img 
              src={img} 
              alt={`${proyectoActivo.titulo} - Imagen ${idx + 1}`} 
              className="w-full h-auto object-contain block mx-auto shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>

    {/* BOTÓN VOLVER FLOTANTE (Opcional para mejorar UX) */}
    <button 
      onClick={() => setProyectoActivo(null)}
      className="fixed bottom-8 right-8 z-[140] bg-white border border-stone-200 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      style={{ color: brandBrown }}
    >
      <ArrowLeft size={24} />
    </button>
  </div>
)}
    </div>
  );
}
