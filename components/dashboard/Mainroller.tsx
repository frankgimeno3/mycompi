import React from 'react';

const Mainroller: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        style={{
          backgroundColor: 'white',
          borderRadius: '100%',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
          color: 'black',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        Mi pisito
      </button>
    </div>
  );
};

export default Mainroller;