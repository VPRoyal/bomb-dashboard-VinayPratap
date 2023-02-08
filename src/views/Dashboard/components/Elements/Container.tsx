import React from 'react'
import styled from 'styled-components'
interface ContainerProps{
    width?:number;
}
const Container: React.FC<ContainerProps> = ({children, width})=> {
  return (<StyledBox width={width} >{children}</StyledBox>)
}
interface StyledBoxProps{
    width?:number;
}
const StyledBox=styled.div<StyledBoxProps>`
width: ${(props) => props.width}%;
background-color:rgba(32, 37, 67, 0.5);
border-radius: 2px;
padding:5px 20px 
`
export default Container;
