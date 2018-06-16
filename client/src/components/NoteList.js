import React, { Component } from 'react'
import Note from './Note'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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

class NoteList extends Component {
  render() {

    console.log(this.props.allNotes.allNotes)
    if (this.props.allNotes && this.props.allNotes.loading) {
      return <div>Loading</div>
    }
  
    if (this.props.allNotes && this.props.allNotes.error) {
      return <div>Error</div>
    }
    
    return (
      this.props.allNotes.allNotes.map(note => <Note key={note.id} note={note}/>)
    )
  }
}

export default graphql(NOTES_QUERY, { name: 'allNotes' }) (NoteList)

