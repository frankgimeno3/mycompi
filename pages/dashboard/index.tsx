import React from 'react';

const Dashgboard: React.FC = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-purple-500 to-purple-900">
      <div className="text-center mt-5 p-10">
        <h1 className="text-5xl font-bold text-yellow-400 mt-20">MyCompi</h1>
        <h2 className="text-white text-xl  mt-5">Selecciona una opción para continuar <span className='font-bold text-yellow-400'>en una sola app</span></h2>
      </div>
      <Mainroller/>
      <Servicestab/>
    </div>
  );
};

export default Dashgboard;