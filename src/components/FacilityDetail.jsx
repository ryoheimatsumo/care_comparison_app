import React from 'react';
import * as actions from '../action/Facilities';
import {connect} from 'react-redux';
import CommentForm from './CommentForm'
import Comments from './Comments';

class FacilityDetail extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        allFacilities:this.props.state.facilities,
        title:"",
        userName:"",
        review:"",
        comments:[]
    };
  }
  
  handleTitleChange =
  (e) => {
    this.setState({ title: e.target.value });
  }

  handleNameChange =
  (e) => {
    this.setState({ userName: e.target.value });
  }

  handleReviewChange =
  (e) => {
    this.setState({ review: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comments = this.state.comments;
    const newComment = {title:this.state.title, userName:this.state.userName, review:this.state.review};
    comments.push(newComment);
    
    this.setState({
      comments:comments,
      title:"",
      userName:"",
      review:""
    })

  }


  render() {
    const {params} = this.props.match
    const id = parseInt(params.id, 10)
    const facility = this.state.allFacilities.filter(e => e.id === id)[0]
    return (
      <>
      <div className='facility_block'>
          <div className="facility_detail">
              <table　border="1">
              <tr valign="top">
                <th>施設名</th>
                <td>{facility.name}</td>
                </tr>
                <tr valign="top">
                <th>所在地</th>
                <td>{facility.address}</td>
                </tr>
                <tr valign="top">
                <th>紹介文</th>
                <td>{facility.introduction}</td>
                </tr>
              </table>
           </div>
           <CommentForm title={this.state.title} name={this.state.userName} review={this.state.review} handleTitleChange={this.handleTitleChange}
           handleNameChange={this.handleNameChange} handleReviewChange={this.handleReviewChange} handleSubmit={this.handleSubmit.bind(this)} />
           <Comments comments={this.state.comments}/>
      </div>
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (facilities) => dispatch(actions.addTodo(facilities)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityDetail);