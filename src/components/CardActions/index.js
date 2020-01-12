import React from 'react'
import {Card, Title, SelectContainer, Options, Select, Icon, Input, Button} from './Components'

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
