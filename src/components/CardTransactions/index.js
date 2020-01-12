import React from 'react'
import { Card, Header, Title, Subtitle, List, Item } from "./Components";

const CardTransactions = () => {
  return (
    <div className="w-1/2 pr-1 ">
      <Card>
        <Header>
          <Title>Hola!</Title>
          <Subtitle>Estos son tus movimientos mas recientes.</Subtitle>
        </Header>
        <List>
          <Item></Item>
          <Item></Item>
        </List>
      </Card>
    </div>
  )
}

export default CardTransactions
