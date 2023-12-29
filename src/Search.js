import React from 'react'
import { useGlobalContext } from './conetxt'

const Search = () => {
  const {query,searchPost} = useGlobalContext();
  //search1) get the query from the initial state from context.js
  return (
    <>
    
        <h1>TechInsights</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" className="large-input" placeholder="search here" value={query} onChange={(e) => searchPost(e.target.value)}/>
          
          </div>
        </form>
        
      
    </>
  )
}
//search2)calling the function defined in context.js through globalContext in onChange
export default Search
