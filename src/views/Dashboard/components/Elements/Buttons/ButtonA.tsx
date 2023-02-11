import React, {useMemo} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface ButtonAProps{
  href?:string,
  onclick?:() => void,
  text?:string,
  border?:string,
  background?:string,
  color?:string
  to?:string
}
const ButtonA: React.FC<ButtonAProps> = ({children, href, onclick,text, border, background, color, to}) => {
  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>;
    } else if (href) {
      return (
        <StyledExternalLink href={href} target="__blank">
          {text}
        </StyledExternalLink>
      );
    } else {
      return text;
    }
  }, [href, text, to]);
  return (
    <StyledButton background={background} color={color} border={border}>{ButtonChild}</StyledButton>
  )
}
interface ButtonProps{
  color?:string,
  background?:string,
  border?:string,
}
const StyledButton=styled.button<ButtonProps>`
cursor: pointer;
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
const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;