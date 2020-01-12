import React from 'react'
import styled from 'styled-components'

const Card = styled.div.attrs({
  className:'bg-white shadow-lg rounded-lg p-3 pb-6 '
})``

const CurrencyName = styled.p.attrs({
  className:''
})``

const Balance = styled.h4.attrs({
  className:'text-md font-dim'
})``

const CardBalance = () => {
  return (
    <div className="w-1/5 pr-3">
      <Card>
        <CurrencyName>
          Pesos
        </CurrencyName>
        <Balance>
          $37,205.50
        </Balance>
      </Card>
    </div>
  )
}

export default CardBalance
