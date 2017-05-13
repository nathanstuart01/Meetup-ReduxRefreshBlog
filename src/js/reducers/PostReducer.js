

let postReducer = (state = [], action)=>{
  switch(action.type) {
    case "SUBMIT_POST":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postReducer;
