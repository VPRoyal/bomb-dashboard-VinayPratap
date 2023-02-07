import React from 'react'
import styled from 'styled-components';
const hrefs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
export default function Background() {
  return (
    < >
      <StyledEllipse width={172.86} left={28.55} top={52.82} background={'linear-gradient(341.51deg, #FF5657 25.06%, #F2D9BB 162.32%)'} />
      <StyledEllipse width={243.66} left={44.02} top={24.45} background={'linear-gradient(341.51deg, #0B8A00 25.06%, #BEFF97 112.99%)'} />
      <StyledEllipse width={382.33} left={44.06} top={46.925} background={'linear-gradient(341.51deg, #149EE3 25.06%, #5DFDB0 162.32%)'} />
      <StyledEllipse width={238.06} left={23.99} top={32.38} background={'linear-gradient(225.09deg, #00E8A2 25.04%, #00ADE8 94.09%)'} />
      {hrefs.map((item, index) => { return <StyledVector key={index} src={require(`../../../../assets/img/Vector ${item}.svg`)} />})}
    </>
  )
}
interface StyledEllipseProps {
  width:number;
  background:string;
  left:number;
  top:number;
}
const StyledEllipse= styled.div<StyledEllipseProps>`
position: fixed;
width: ${(props) => props.width}px;
height: ${(props) => props.width}px;
left: ${(props) => props.left}%;
top: ${(props) => props.top}%;
background: ${(props) => props.background};
opacity: 0.8;
filter: blur(75px);
`
const StyledVector = styled.img`
position: fixed;
left: 50%;
top: 50%;
transform:translate(-50%,-50%);
// border: 0.5px solid #FFFFFF;
`;
