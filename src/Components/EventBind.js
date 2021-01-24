import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello'
    }
    // Binding in the class constructor
    this.clickHandler  = this.clickHandler.bind(this)
  }

  /* clickHandler() {
    this.setState({
      message: 'Good bye' 
    })
    console.log(this)
  } */

  // Approach 4 for Bind Event Handling
  clickHandler = () => {
    this.setState({
      message: 'Good bye' 
    })
  }

  render() {
  return (
    <div>
      <div>{this.state.message}</div>
       {/*   Various approaches of Event Binding
           <button onClick={this.clickHandler.bind(this)}>Click</button> }
       {/* <button onClick={() => this.clickHandler()}>Click</button> */} 
           <button onClick={this.clickHandler}>Click</button>
       </div>
  )
}
}

export default EventBind