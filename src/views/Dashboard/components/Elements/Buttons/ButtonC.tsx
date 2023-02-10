import React from 'react'
import styled from 'styled-components';
interface ButtonCProps{
  href?:string,
  onclick?:() => void,
  text?:string,
  border?:string,
  background?:string,
  color?:string,
  link?:string,
  IBackground?:string
}
const ButtonC: React.FC<ButtonCProps> = ({children, href, onclick,text, border, background, color,link, IBackground}) => {
  
  return (
    <StyledButton background={background} color={color} border={border} IBack={IBackground}><span>{text}</span><span><img src={link} alt="" /></span></StyledButton>
  )
}
interface ButtonProps{
  color?:string,
  background?:string,
  border?:string,
  IBack?:string
}
const StyledButton=styled.button<ButtonProps>`
&{
min-width: 110px;
cursor: pointer;
display: flex;
flex-grow: 1;
column-gap: 5px;
align-items: center;
color: ${(props)=>props.color};
background:${(props)=>props.background} ;
border:${(props)=>props.border};
border-radius: 20px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-weight: 400;
font-size: 15px;
line-height: 20px;
backdrop-filter: blur(5px);
justify-content: center;
padding: 5px 8px;
}
& span:last-child{
    border-radius: 50%;
    background-color: ${(props)=>props.IBack || "white"};
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
}
& img{
    width: 100%;
    height: 100%;
}
`
export default ButtonC