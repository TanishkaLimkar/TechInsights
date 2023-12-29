import React from 'react'
import { useGlobalContext } from './conetxt'

const Pagination = () => {
  const {page, nbPages, getNextPage,getPrevPage} = useGlobalContext();
  return (
    <>
      <div className='pagination_btn'>
        <button onClick={()=> getPrevPage()}>PREV</button>
        <p className='paginationText'>
          {page + 1} of {nbPages}
        </p>
        <button onClick={()=> getNextPage()}>NEXT</button>
      </div>
    </>
  )
}

export default Pagination
