import React from 'react'
import styled from 'styled-components'
import CardBalance from '../components/CardBalance'

const Container = styled.div.attrs({
  className: 'px-5 py-2'
})``

const CardsBalanceContainer = styled.div.attrs({
  className:' py-3 flex'
})``

const CardActionsContainer = styled.div.attrs({
  className: 'flex py-3 mt-6'
})``
const Dashboard = () => {
  return (
    <Container>
      <CardsBalanceContainer>
        <CardBalance/>
        <CardBalance/>
        <CardBalance/>
        <CardBalance/>
      </CardsBalanceContainer>

      <CardActionsContainer>
        Hola
      </CardActionsContainer>
    </Container>
  )
}

export default Dashboard;
