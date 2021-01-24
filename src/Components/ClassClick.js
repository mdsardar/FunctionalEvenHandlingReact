import React, { Component } from "react"

class ClassClick extends Component {
  classClickHandler(){
    console.log('Clicked Button')
  }
  render() {
    return (
      <div>
        <button onClick={this.classClickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick