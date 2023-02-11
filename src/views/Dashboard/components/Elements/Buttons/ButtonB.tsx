import React from 'react'
import styled from 'styled-components';
interface ButtonAProps{
  href?:string,
  onclick?:() => void,
  text?:string,
  border?:string,
  background?:string,
  color?:string,
  link?:string,
}
const ButtonA: React.FC<ButtonAProps> = ({children, href, onclick,text, border, background, color,link}) => {
  
  return (
    <StyledButton background={background} color={color} border={border}><span><img src={link} alt="" /></span><span><a href={href} target="__blank">{text}</a></span></StyledButton>
  )
}
interface ButtonProps{
  color?:string,
  background?:string,
  border?:string,
}
const StyledButton=styled.button<ButtonProps>`
&{
width: 100%;
display: flex;
column-gap: 5px;
align-items: center;
color: ${(props)=>props.color};
background:${(props)=>props.background} ;
border:${(props)=>props.border};
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
backdrop-filter: blur(12.5px);
justify-content: center;
padding: 5px;
}
& span:first-child{
    border-radius: 50%;
    background-color: white;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    padding: 2px;
    
}
& img{
    object-fit: contain;
    /* width: 90%;
    height: 90%; */
}
& a{
  text-decoration: none;
  color: inherit;
}
`
export default ButtonA