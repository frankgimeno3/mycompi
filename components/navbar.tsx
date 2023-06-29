import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full  py-4  flex items-center justify-between">
      <button className="text-lg text-white font-bold px-6 text-yellow-300">MyCompi</button>
      <div>
        <button className="mr-2 bg-transparent text-yellow-300 font-bold text-sm">ENG</button>
        <button className="mr-1 rounded-full bg-white text-sm px-4 py-1 shadow">Log In</button>
        <button className="rounded-full bg-white text-sm px-4 mr-2 py-1 shadow">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;