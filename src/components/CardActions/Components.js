import styled from 'styled-components'

export const Card = styled.div.attrs({
  className: 'w-full bg-white shadow-lg rounder-lg h-full p-3'
})``

export const Title = styled.div.attrs({
  className: 'font-bold font-dim text-lg pb-2'
})`
  color:#39393b;
`
export const SelectContainer = styled.div.attrs({
  className:'flex text-secondary'
})``

export const Options = styled.select.attrs({
  className:'block appearance-none w-full bg-white py-2 pr-8 leading-tight focus:outline-none'
})`
`
export const Select = styled.div.attrs({
  className:'inline-block relative'
})``

export const Icon = styled.div.attrs({
  className:'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'
})``

export const Input = styled.input.attrs({
  className:'mt-1 border rounded-lg py-2 px-3 text-gray-700 leading-tight h-6 w-32 block '
})``

export const Button = styled.button.attrs({
  className: 'border px-2 text-sm bg-primary text-white rounded-full mt-3'
})``  