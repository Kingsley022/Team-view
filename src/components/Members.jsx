import React, { useContext, useState } from 'react'
import Member from './Member'
import { AppContext } from '../App';
import ReactPaginate from 'react-paginate';

const Members = () => {
  const { members } = useContext(AppContext);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  
  // Calculate the items to display on the current page
  const offset = currentPage * itemsPerPage;
  const currentMembers = members?.slice(offset, offset + itemsPerPage);
  
  // Calculate total pages
  const pageCount = Math.ceil((members?.length || 0) / itemsPerPage);
  
  // Handle page change
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    
    // Scroll to top when changes
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen bg-slate-100 lg:px-12 px-4 lg:py-6 py-3">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
        {currentMembers?.map(member => (
          <Member member={member} key={member.id}/>
        ))}
      </div>
      
      {members.length > 12 && <div className="flex justify-center my-8">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'flex gap-2'}
          pageClassName={'px-3 py-1 !border rounded hover:bg-gray-200'}
          previousClassName={'px-3 py-1 !border rounded hover:bg-gray-200'}
          nextClassName={'px-3 py-1 !border rounded hover:bg-gray-200'}
          breakClassName={'px-3 py-1'}
          activeClassName={'bg-purple-950 text-white'}
          disabledClassName={'text-gray-300 cursor-not-allowed'}
        />
      </div>}
    </div>
  )
}

export default Members