import React, { Component } from 'react'

class Note extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.note.name}
        </div>
      </div>
    )
  }
}

export default Note