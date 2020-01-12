import React from 'react'
import styled from 'styled-components'
import CardBalance from '../components/CardBalance'
import CardTransactions from '../components/CardTransactions'
import CardActions from '../components/CardActions'
const Container = styled.div.attrs({
  className: 'px-5 py-2'
})``

const CardsBalanceContainer = styled.div.attrs({
  className:' py-3 flex'
})``

const CardsContainer = styled.div.attrs({
  className: 'flex py-3 mt-6 h-full'
})`
  height:50vh;
`
const Dashboard = () => {
  return (
    <Container>
      <CardsBalanceContainer>
        <CardBalance/>
      </CardsBalanceContainer>

      <CardsContainer>
        <CardTransactions></CardTransactions>
        <CardActions></CardActions>
      </CardsContainer>
    </Container>
  )
}

export default Dashboard;
