import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'João'}
          fotoUsuario={'https://picsum.photos/50/51?a=2'}
          fotoPost={'https://picsum.photos/200/152'}
        />
        <Post
          nomeUsuario={'Raphael'}
          fotoUsuario={'https://picsum.photos/50/52?a=3'}
          fotoPost={'https://picsum.photos/200/153'}
        />
      </MainContainer>
      
    );
  }
}

export default App;
