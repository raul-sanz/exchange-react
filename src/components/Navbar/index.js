import React,{useState} from 'react'
import { Title, DropContainer, DropDown, DropDownOption, Balance } from "./Components";

const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      <Title>
        Balance aproximado en pesos
        <img onClick={()=>{setShow(!show)}} className="mt-1 ml-1 cursor-pointer p-1" width="18px" src="https://img.icons8.com/android/24/000000/expand-arrow.png" alt="down"/>
      </Title>
      <DropContainer show={show}>
        <DropDown>
          <DropDownOption onClick={()=>{setShow(false)}}>Dollar</DropDownOption>
          <DropDownOption>Bitcoin</DropDownOption>
          <DropDownOption>Yuan</DropDownOption>
        </DropDown>
      </DropContainer>

      <Balance>
        $ 70,560.50
      </Balance>
    </div>
  )
}

export default Navbar


