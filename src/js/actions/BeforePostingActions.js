//action creator
let submitPost = (post)=>{
  return {
    type: "SUBMIT_POST"
    payload: post
  }
};

export default submitPost;
