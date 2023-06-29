import React from 'react';

const Mainroller: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="relative mt-10">
        <button
          className="bg-white rounded-full shadow text-black px-3 py-2 "
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Mi pisito
        </button>
        <button
          className="bg-white rounded-full shadow text-black px-3 py-2  absolute"
          style={{
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Botón 1
        </button>
        <button
          className="bg-white rounded-full shadow text-black px-3 py-2  absolute"
          style={{
            top: '15px',
            left: '115px',
            transform: 'translateY(-50%)',
          }}
        >
          Botón 2
        </button>
        <button
          className="bg-white rounded-full shadow text-black px-3 py-2  absolute"
          style={{
            top: '110px',
            left: '110px',
            transform: 'translateY(-50%)',
          }}
        >
          Botón 3
        </button>
        <button
          className="bg-white rounded-full shadow text-black px-3 py-2  absolute"
          style={{
            top: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Botón 4
        </button>
        <button
          className="bg-white rounded-full shadow text-black px-3 py-2  absolute"
          style={{
            top: '110px',
            right: '110px',
            transform: 'translateY(-50%)',
          }}
        >
          Botón 5
        </button>
        <button
          className="bg-white rounded-full shadow text-black px-3 py-2  absolute"
          style={{
            top: '15px',
            right: '115px',
            transform: 'translateY(-50%)',
          }}
        >
          Botón 6
        </button>
      </div>
    </div>
  );
};

export default Mainroller;