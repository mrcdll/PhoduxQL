import React, { Component } from 'react'
import Note from './Note'
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag'
import NewNote from './NewNote'
import styled from 'styled-components'
class NoteList extends Component {

  render() {

    const notelist = this.props.allNotes.allNotes?
      this.props.allNotes.allNotes.map(note => 
        <Note key={note.id} note={note} addPost={this.addpost}/>
      )
      :
      null

    if (this.props.allNotes && this.props.allNotes.loading) {
      return <div>Loading</div>
    }
  
    if (this.props.allNotes && this.props.allNotes.error) {
      return <div>Error</div>
    }
    
    return (
      <Wrapper>
        {notelist}
        <NewNote/>
      </Wrapper>
    )
  }
}

const NOTES_QUERY = gql`
  {
    allNotes {
      id
      name
      tasks {
        id
        description
      }
    }
  }
`

export default graphql(NOTES_QUERY, { 
  name: 'allNotes', 
}) (NoteList)

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ghostwhite;
  display: flex;
  flex-direction: column;
  align-items: start;
`