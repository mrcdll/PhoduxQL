import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Mutation } from "react-apollo";
import { compose } from 'react-apollo';

class NewNote extends Component {

  state = {
    name: ""
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value })
  }

  render() {

    return (
      <Mutation 
        mutation={CREATE_NOTE}
        update={(cache, { data: { createNote } }) => {
          const {allNotes} = cache.readQuery({ query: NOTES_QUERY });
          console.log(allNotes)
          cache.writeQuery({
            query: NOTES_QUERY,
            data: { allNotes: allNotes.concat([createNote]) }
          });
        }}
      >
        
        {(createNote, { data }) => {
          const handleFormSubmit = (event) => {
            const name = this.state.name
            event.preventDefault();
            createNote({ variables: { name } });
          }
        
          return (
            <div>
              <form onSubmit={handleFormSubmit}>
                <input onChange={this.handleChange}/>
                <button type="submit">Add Note</button>
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }

}

const CREATE_NOTE = gql`
  mutation createNote($name: String!) {
    createNote(name: $name)
    {
      id
      name
      tasks {
        id
        description
      }
    }
  }
`

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

export default graphql(CREATE_NOTE, { name: 'createNote', }) (NewNote)