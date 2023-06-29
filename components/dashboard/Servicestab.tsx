import React from 'react';

const Servicestab: React.FC = () => {
  return (
    <nav className="bg-yellow-400 py-3">
      <div className="container mx-auto px-4 text-center  font-bold">
        <h2 className="text-lg text-purple-900 mx-7">
          Contrata servicios para tu pisito
        </h2>
      </div>
      <h3 className="text-md text-purple-900 ml-10 pl-5 font-bold mt-10">Mudanzas y transportes</h3>
      <h3 className="text-md text-purple-900 ml-10 pl-5 font-bold mt-10">Instalación y montaje</h3>
      <h3 className="text-md text-purple-900 ml-10 pl-5 font-bold mt-10">Fontanería</h3>
      <h3 className="text-md text-purple-900 ml-10 pl-5 font-bold mt-10">Electricidad</h3>
      <h3 className="text-md text-purple-900 ml-10 pl-5 font-bold mt-10">Pintura</h3>
      <h3 className="text-md text-purple-900 ml-10 pl-5 font-bold mt-10">Servicios de Limpieza</h3>
      <h3 className="text-md text-purple-900 ml-10 pl-5 font-bold mt-10">Control de plagas</h3>
    </nav>
  );
};

export default Servicestab;