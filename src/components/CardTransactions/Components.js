import React from 'react'
import styled from 'styled-components'
import { Col } from "../GlobalComponents";

export const Card = styled.div.attrs({
  className: 'w-full bg-white shadow-lg rounder-lg h-full'
})``

export const Header = styled.div.attrs({
  className:' w-full py-2 pl-3 border-b'
})``

export const Title = styled.div.attrs({
  className: 'font-bold font-dim text-lg'
})`color:#39393b;`

export const Subtitle = styled.span.attrs({
  className: 'font-dim text-sm text-gray-500'
})``

export const List = styled.div.attrs({
  className:'p-5'
})``


export const Description = styled.div.attrs({
  className:'text-gray-500 font-dim text-md'
})``

export const Amount = styled.div.attrs({
  className: 'text-lg font-dim text-right'
})``

export const Exchange = styled.div.attrs({
  className: 'text-xs text-gray-500 text-right'
})``

export const Item = (props)=>(
  <div className="flex w-full pb-1">
    <Col width="4/6">
      <Description>
        Retiro de efectivo
      </Description>
    </Col>
    <Col width="2/6">
      <Amount>$500.25</Amount>
      <Exchange>$12,526.25 MXN</Exchange>
    </Col>
  </div>
)