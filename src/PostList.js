import React, { Component } from 'react'

 class PostList extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           userId : '',
           title:'',
           body:''
        }
      }
      onChangeHandler = (e)=>
      {
          this.setState({[e.target.name]: e.target.value})
      }
      onSubmitHandler = e =>
      {
          e.preventDefault();
          console.log(this.state)
      }
  render() {
      const {userId,title,body}=this.state
    return (
        
      <div>
          <h2>Post Form</h2>
      <form onSubmit={this.onSubmitHandler}>
          <div>
              <input type="text" name="userId" value={userId} onChange={this.onChangeHandler}/>
          </div>
          <div>
              <input type="text" name="title" value={title} onChange={this.onChangeHandler}/>
              
          </div>
          <div>
              <input type="text" name="body" value={body} onChange={this.onChangeHandler}/>              
          </div>
          <div>
              <button type="submit">Submit</button>
          </div>
      </form> 
      </div>
    )
  }
}

export default PostList