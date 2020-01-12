import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className: 'px-5 py-2'
})``

const Dashboard = () => {
  return (
    <Container>
      <Navbar/>
    </Container>
  )
}

export default Dashboard;
