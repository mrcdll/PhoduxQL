import React, { Component } from 'react';
import '../App.css';
import NoteList from './NoteList'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <NoteList/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ghostwhite
  display: flex;
  flex-wrap: wrap;
  align-items: start;
`
export default App;
