import React from 'react';
import Mainroller from '../../components/dashboard/Mainroller';
import Servicestab from '../../components/dashboard/Servicestab';
import Navbardashb from "../../components/navbardashb";

const Dashgboard: React.FC = () => {
  return (
    <>
    <Navbardashb/>
      <div className=" flex items-start justify-center bg-gradient-to-br from-purple-500 to-purple-900 pb-4">
        <div className="text-center mt-5 p-10 h-90vh mb-20 ">
          <h1 className="text-5xl font-bold text-yellow-400 mt-20">MyCompi</h1>
          <h2 className="text-white text-xl mt-5">Selecciona una herramienta para continuar</h2>
          <Mainroller />
        </div>
      </div>
      <Servicestab />
    </>
  );
};

export default Dashgboard;