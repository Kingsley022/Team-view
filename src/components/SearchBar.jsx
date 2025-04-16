import React, { useContext, useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AppContext } from '../App';

const SearchBar = () => {
    const { members, setMembers } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState('');
  
    const allMembersRef = useRef([]);

    // Stores initial members
    useEffect(() => {
        if (members.length > 0 && allMembersRef.current.length === 0) {
            allMembersRef.current = members;
        }
    }, [members]);

    // Handles Search  
    useEffect(() => {
        const term = searchTerm.trim().toLowerCase();

        if (!term) {
            setMembers(allMembersRef.current);
        } else {
            const filtered = allMembersRef.current.filter((member) =>
            member.first_name.toLowerCase().includes(term) ||
            member.last_name.toLowerCase().includes(term) ||
            member.username.toLowerCase().includes(term) ||
            member.address.country.toLowerCase().includes(term) ||
            member.address.city.toLowerCase().includes(term) ||
            member.employment.title.toLowerCase().includes(term)
            );
            setMembers(filtered);
        }
    }, [searchTerm]);

    return (
        <div className="lg:flex md:flex hidden w-[380px] items-center px-2 gap-4 h-10 !border-2 !border-slate-100 rounded-lg">
            <input 
            value={searchTerm} 
            type="text" 
            placeholder='Search name, Job title, country or city' 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="outline-none w-[90%]" 
            />
            <FiSearch className='text-xl text-slate-300 cursor-pointer'/>
        </div>
    );
};

export default SearchBar;
