import styled from 'styled-components'
//Col es un componente definido, usando Tailwind CSS y sus clases para mas info: https://tailwindcss.com/docs/width
export const Col = styled.div.attrs((props)=>({
  className: `w-${props.width}`
}))``