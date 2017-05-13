import {createStore} from 'redux';
import postReducer from 'postReducer';

//reducers, initialState, enchancers
const store = createStore(postReducer);

export default BlogStore;
