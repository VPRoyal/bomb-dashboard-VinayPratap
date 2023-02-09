import React from 'react'
import styled from 'styled-components';
interface ButtonAProps{
  href?:string,
  onclick?:() => void,
  text?:string,
  border?:string,
  background?:string,
  color?:string
}
const ButtonA: React.FC<ButtonAProps> = ({children, href, onclick,text, border, background, color}) => {
  
  return (
    <StyledButton background={background} color={color} border={border}>{text}</StyledButton>
  )
}
interface ButtonProps{
  color?:string,
  background?:string,
  border?:string,
}
const StyledButton=styled.button<ButtonProps>`
  width: 100%;
  color: ${(props)=>props.color};
  background:${(props)=>props.background} ;
  border:${(props)=>props.border};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 33px;
`
export default ButtonA