import React from 'react'
import styled from 'styled-components'
interface ContainerProps{
    width?:number;
    border?:string
    height?:number
}
const Container: React.FC<ContainerProps> = ({children, width, border, height})=> {
  return (<StyledBox width={width} border={border} height={height} >{children}</StyledBox>)
}
interface StyledBoxProps{
    width?:number;
    border?:string,
    height?:number
}
const StyledBox=styled.div<StyledBoxProps>`
box-sizing: border-box;
width: ${(props) => props.width}%;
height: ${(props) => props.height || null}%;
background-color:rgba(32, 37, 67, 0.5);
border: ${(props)=> props.border || 'none'};
border-radius: 5px;
padding:5px 20px 
`
export default Container;
