import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AppContext } from '../App';

const Filter = () => {
    const { members, setMembers } = useContext(AppContext);
    const [selectedFilter, setSelectedFilter] = useState("Filter");

    // Stores initial members
    const allMembersRef = useRef([]);

    useEffect(() => {
        if (members.length > 0 && allMembersRef.current.length === 0) {
        allMembersRef.current = members;
        }
    }, [members]);

    // Handles Filtering
    const handleFilter = (term) => {
        setSelectedFilter(term.charAt(0).toUpperCase() + term.slice(1));

        const filtered = allMembersRef.current.filter((member) =>
            member.employment.title.toLowerCase().includes(term.toLowerCase())
        );

        // If filtered results are empty, returns all members
        if (filtered.length === 0) {
            setMembers(allMembersRef.current);
            alert("No members found with this filter. Showing all members instead.");
        } else {
            setMembers(filtered);
        }
    };

  return (
    <Menu>
      <MenuButton size="md" as={Button} rightIcon={<MdKeyboardArrowDown />}>
        {selectedFilter}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleFilter("sales")}>Sales department</MenuItem>
        <MenuItem onClick={() => handleFilter("engineer")}>Engineers</MenuItem>
        <MenuItem onClick={() => handleFilter("customer")}>Customer Service</MenuItem>
        <MenuItem onClick={() => handleFilter("analyst")}>Analysts</MenuItem>
        <MenuItem onClick={() => handleFilter("planner")}>Planners</MenuItem>
        <MenuItem onClick={() => {
          setSelectedFilter("Filter");
          setMembers(allMembersRef.current);
        }}>
          Clear Filter
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Filter;
