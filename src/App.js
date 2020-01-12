import React from 'react';
import styled from 'styled-components'
import { Col } from "./components/GlobalComponents";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

const Layout = styled.div.attrs({className:'w-full h-full flex'})``

function App() {
  return (
    <Layout >
      <Col width='16'>
        <Sidebar/>
      </Col>
      <Col width='full'>
        <Navbar/>
        <Dashboard/>
      </Col>
    </Layout>
  );
}

export default App;
