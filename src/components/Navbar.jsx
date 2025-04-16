import React from 'react'
import logo from "../assets/images/logo-2.png";
import SearchBar from './SearchBar';
import Filter from './Filter';

const Navbar = () => {
  return (
    <nav className="lg:px-12 px-4 py-3 flex w-full justify-between items-center sticky top-0 bg-white !border-b-2 !border-b-slate-100 z-50 ">

      {/* Logo */}
      <div className="flex items-center gap-1">
          <img src={logo} alt="team view" className="lg:w-[45px] w-[35px]" />
          <span className="lg:text-3xl text-xl font-acme uppercase text-purple-950">Team-View</span>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-2">
        <SearchBar/>
        <Filter/>
      </div>
    </nav>
  )
}

export default Navbar