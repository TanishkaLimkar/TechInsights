//context creation- data is fetched and all the data is available to be shown on the website
//provider 
// consumer is removed now and now we use
//useContext hook
//context api and useContext hook is not same ...context api uses useContext hook

//creating context api
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer"

let API ="https://hn.algolia.com/api/v1/search?";


const initialState ={
  isLoading : true,
  query:" ",
  nbPages:0,
  page:0,
  hits:[],
}

const AppContext = React.createContext();

//provider
const AppProvider = ({children}) => {
  //const [state, setState] = useState(initialState);

  const [state, dispatch] = useReducer(reducer, initialState);



    
    const fetchApiData = async (url) => {
      dispatch({type:"SET_LOADING"})
      //asynchronous function doesn't block the execution of the code; instead, it returns a promise immediately and allows the code to continue executing while the asynchronous operation is in progress.
      try {
          // Step 1: Use the Fetch API to make a GET request to the specified URL
          const res = await fetch(url);
          //The await keyword can only be used inside an async function. It is used to wait for a promise to resolve before continuing the execution of the code.
          
          // Step 2: Parse the response body as JSON
          const data = await res.json();
          //pauses execution until json parsing is done
          // Step 3: Log the parsed JSON data to the console
          console.log(data);

          dispatch({type:"GET_STORIES",
          payload : {
            hits:data.hits,
            nbPages:data.nbPages,
          },
        });

         // isLoading = false;
      } catch (error) {
          // Step 4: If there's an error during the process, log the error to the console
          console.log(error);
      }
  };
  //to remove the post

  const removePost =(ID) => {
    dispatch({type:"REMOVE_STORY", payload:ID})
  }

  //to search post

  const searchPost = (searchQuery) =>{
    dispatch({type:"SEARCH_QUERY",
  data:searchQuery,});
  }
  //search3) define the searchPost function in context.js and provide the dispatch function that will trigger the action SEARCH_QUERY in render.js

  //pagination
  const getPrevPage = () =>{
    dispatch({
      type:"PREV_PAGE",
    });
  };
  const getNextPage = () =>{
    dispatch({
      type:"NEXT_PAGE",
    });
  };


  useEffect(()=>{
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  },[state.query, state.page]); //search6) pass the state.query index to start searching as soon as we type a single word
  //every time a page will be incremented or decremented the content on the page will be updated
  

  // useEffect hook is fetching data from an API when the component mounts or when the dependencies (state.query or state.page) change.

  
    return (
        <AppContext.Provider value={{...state, removePost,searchPost,getNextPage,getPrevPage}}>{children}</AppContext.Provider>
    )
//search4) add the searchPost function to AppContext so that we can use searchPost function on any page
};

//create a custom hook 
const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};

