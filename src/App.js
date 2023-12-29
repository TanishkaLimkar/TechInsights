import React from 'react'
import Search from './Search'
import Pagination from './Pagination'
import Stories from './Stories'
import Navbar from './Navbar'
import "./App.css";
// import { useContext } from 'react'
// import { AppContext } from './conetxt'
//instead of using above two imports we can use one single import by creating custom hook in context.js
// import { useGlobalContext } from './conetxt'


const App = () => {
  // const data = useContext(AppContext);
  // const data = useGlobalContext();
  return (
    <>
      <Navbar/>
      <Search/>
      <Pagination/>
      <Stories/>

    </>
  )
}

export default App
