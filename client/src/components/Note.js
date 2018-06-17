import React, { Component } from 'react'
import styled from 'styled-components'

class Note extends Component {

  render() {

    const taskList = this.props.note.tasks.map(task => 
      <li key={task.id}>{task.description}</li>
    )

    return (
      <div>
          <div>{this.props.note.name}</div>
          <ul>
            {taskList}
          </ul>
      </div>
    )
  }
}

export default Note