import React from 'react'
import styled from 'styled-components'

const Card = styled.div.attrs({
  className: 'w-full bg-white shadow-lg rounder-lg h-full p-3'
})``

const Title = styled.div.attrs({
  className: 'font-bold font-dim text-lg pb-2'
})`
  color:#39393b;
`
const SelectContainer = styled.div.attrs({
  className:'flex text-secondary'
})``

const Options = styled.select.attrs({
  className:'block appearance-none w-full bg-white py-2 pr-8 leading-tight focus:outline-none'
})`
`
const Select = styled.div.attrs({
  className:'inline-block relative'
})``

const Icon = styled.div.attrs({
  className:'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'
})``

const Input = styled.input.attrs({
  className:'mt-1 border rounded-lg py-2 px-3 text-gray-700 leading-tight h-6 w-32 block '
})``

const Button = styled.button.attrs({
  className: 'border px-2 text-sm bg-primary text-white rounded-full mt-3'
})``  

const CardActions = () => {
  return (
    <div className="w-1/2 pl-1">
      <Card>
        <Title>
          Abonar/retirar fondos
        </Title>

        <SelectContainer>
          <Select>
            <Options >
              <option>Abonar</option>
              <option>Retirar</option>
            </Options>
            <Icon >
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </Icon>
          </Select>

          <Select>
            <Options >
              <option>Peso</option>
              <option>Dolar</option>
              <option>Yuan</option>
              <option>Bitcoin</option>
            </Options>
            <Icon >
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </Icon>
          </Select>
        </SelectContainer>
        
        <Input type="number" placeholder="Cantidad"/>
        
        <Button>Abonar</Button>
      </Card>
    </div>
  )
}

export default CardActions
