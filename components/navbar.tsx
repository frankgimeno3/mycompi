import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-yellow-400 py-4 px-6 flex items-center justify-between">
      <h1 className="text-lg text-white font-bold">MyCompi</h1>
      <div>
        <button className="mr-2 bg-transparent text-white text-sm">ENG</button>
        <button className="mr-2 rounded-full bg-white text-sm px-4 py-2 shadow">Log In</button>
        <button className="rounded-full bg-white text-sm px-4 py-2 shadow">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;