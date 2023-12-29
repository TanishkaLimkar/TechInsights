const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_STORIES":
        return {
          ...state,
          isLoading: false,
          hits: action.payload.hits,
          nbPages: action.payload.nbPages,
        };
      case "REMOVE_STORY":
        return {
          ...state,
          hits: state.hits.filter((currPost) => currPost.objectID !== action.payload),
        };
      //search5) define the action for the dispatch method in reducer.js 6-->
      case "SEARCH_QUERY" :
        return{
          ...state,
          query:action.data,
        };

      case "NEXT_PAGE":
        let pageNumInc = state.page+1;// to handle page num shoukd not go above 50
        if(pageNumInc>=state.nbPages)
        {
          pageNumInc=0;
        }
        return{
            ...state,
            page:pageNumInc,
        };
     case "PREV_PAGE":
        let pageNumDec = state.page -1;// to handle page num shoukd not go below 1
        if(pageNumDec<=0)
        {
          pageNumDec = 0;
        }
        else{
          pageNumDec= pageNumDec-1
        }
          return{
            ...state,
            page:pageNumDec,
          };
      
      default:
        return state;
    }
  };

  
//the initial state which is present in context.js is updated by reduceer.js

  export default reducer;