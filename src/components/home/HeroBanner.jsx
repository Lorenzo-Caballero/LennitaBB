import React from "react";
import videoFile from "./video.mp4"; // Ajusta la ruta según corresponda

const HeroBanner = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center md:mt-0 md:pt-0 mt-5 pt-20">
      <div className="w-full md:w-1/2 h-full relative z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoFile} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>

      {/* Contenedor del texto */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8 bg-gradient-to-br from-[#4779a4] to-[#f7e7ce] text-white-900 md:mt-0 mt-0">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">TATTOO</h1>
          <p className="text-base md:text-lg leading-relaxed text-[#2c3e50]">
            ABRAZAMOS LA AUTOEXPRESIÓN Y CELEBRAMOS LA CREATIVIDAD.
            <br />
            ESTÁS AQUÍ Y TE VAMOS A ACOMPAÑAR DURANTE TODO EL PROCESO:
            <br />
            ANTES, DURANTE Y DESPUÉS DE TU VISITA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
