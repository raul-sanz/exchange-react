import React from 'react';
import styled from 'styled-components'
import { Col } from "../GlobalComponents";
import Sidebar from '../Sidebar';

const Container = styled.div.attrs({className:'w-full h-full flex'})``

function App() {
  return (
    <Container >
      <Col width='12'>
        <Sidebar/>
      </Col>
      <Col width='auto'>
        
      </Col>
    </Container>
  );
}

export default App;
