import React from 'react';
import styled from 'styled-components'
import { Col } from "./components/GlobalComponents";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'

const Layout = styled.div.attrs({className:'w-full h-full flex'})``

function App() {
  return (
    <Layout >
      <Col width='12'>
        <Sidebar/>
      </Col>
      <Col width='auto'>
        <Dashboard/>
      </Col>
    </Layout>
  );
}

export default App;
