import React, { Component } from 'react'
import styled from 'styled-components'

class Note extends Component {

  render() {

    const taskList = this.props.note.tasks.map(task => 
      <li key={task.id}>{task.description}</li>
    )

    return (
      <Card>
          <Title>{this.props.note.name}</Title>
          <ul>
            {taskList}
          </ul>
      </Card>
    )
  }
}

export default Note

const Card = styled.div`
  width: 250px;
  height: 250px;
  background-color: papayawhip;
  margin: 0.5% 5%;
`

const Title = styled.div`
  text-align: center;
  margin: 5% 0;
`