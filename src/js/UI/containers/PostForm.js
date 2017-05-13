import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Radio, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import submitPost from '../../actions/BeforePostingActions';

class PostForm extends Component {
  constructor() {
    super();
    this.state={
      post:{
        pTitle: "",
        pAuthor: "",
        pAuthGender: "",
        pCategory: "Movies",
        pContent: "",
      },
      showPostContentEntry: false
    };
    this.handleCreatePost = this.handleCreatePost.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
  }

  handleCreatePost() {
    this.setState({
      showPostContentEntry: !this.state.showPostContentEntry
    });
  }

  handleInputChange(e) {
    if(e.target.name==='pAuthGender') {
      this.setState({
        post: {...this.state.post, pAuthGender: e.target.value}
      });
    }else{
    this.setState({
      post: {...this.state.post, [e.target.id]: e.target.value }
    });
  }
    console.log(this.state);
  }

  handleSubmitPost() {
    // code to send the post object to redux store
    this.props.submitPost(this.state.post);
    // resetting the components state to initial state
    this.setState({
      post:{
        pTitle: "",
        pAuthor: "",
        pAuthGender: "",
        pCategory: "Movies",
        pContent: "",
      },
      showPostContentEntry: false
    });

    window.document.getElementByName("pAuthGender")[0].checked = false;
    window.document.getElementByName("pAuthGender")[1].checked = false;
  }

  render() {
      return(
        <Form>
          <FormGroup controlId="pTitle">
            <ControlLabel>Title of Post:</ControlLabel>
            <FormControl type='text'
                          onChange={this.handleInputChange}
                          value={this.state.post.pTitle}
                         placeholder='Enter the title of the post...'
                          />
          </FormGroup>

          <FormGroup controlId="pAuthor">
            <ControlLabel>Author of Post:</ControlLabel>
            <FormControl type='text'
                          onChange={this.handleInputChange}
                          value={this.state.post.pAuthor}
                         placeholder='Enter the author of the post...'
                        />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Gender of Author:</ControlLabel><br/>
            <Radio name="pAuthGender" value="male" onChange={this.handleInputChange} value={this.state.post.pAuthGender} inline>Male</Radio>
            <Radio name="pAuthGender" value="female" onChange={this.handleInputChange} value={this.state.post.pAuthGender} inline>Female</Radio>
          </FormGroup>

          <FormGroup controlId="pCategory">
            <ControlLabel>Category of the post:</ControlLabel>
            <FormControl componentClass='select' onChange={this.handleInputChange} value={this.state.post.pCategory}>
              <option value='movies'>Movies</option>
              <option value='sports'>Sports</option>
            </FormControl>
          </FormGroup>

          <Button bsStyle='success' onClick={this.handleCreatePost}>Create Post</Button>

          <Modal show={this.state.showPostContentEntry} onHide={this.handleCreatePost}>
            <Modal.Header closeButton>
              <Modal.Title>Enter the content of the post</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormControl  id="pContent"
                            type="textarea"
                            bsSize="large"
                            onChange={this.handleInputChange}
                            placeholder="enter content..." />
            </Modal.Body>

            <Modal.Footer>
              <Button bsStyle="success" onClick={this.handleSubmitPost}>Submit Post</Button>
            </Modal.Footer>

          </Modal>
        </Form>
      );
    }
  }

  const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(
      {submitPost: submitPost},
      dispatch
    );
  };

export default connect(null, mapDispatchToProps)PostForm;
