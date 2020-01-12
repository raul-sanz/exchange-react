import styled from 'styled-components'



export const Title = styled.div.attrs({
  className:'font-dim flex'
})``

export const DropContainer = styled.div.attrs(props=>({
  className:`${props.show ? 'flex' : 'hidden'} justify-end w-full`
}))``

export const DropDown = styled.div.attrs({
  className:'bg-white rounded-lg absolute w-1/5 p-1 '
})``

export const DropDownOption = styled.p.attrs({
  className:'py-2 pl-1 hover:bg-primary bg-white w-full font-dim hover:text-white rounded-lg cursor-pointer'
})``

export const Balance = styled.h3.attrs({
  className:'font-dim text-lg font-bold'
})``