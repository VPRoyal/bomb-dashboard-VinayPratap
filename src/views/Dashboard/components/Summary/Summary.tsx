import React from 'react'
import styled from 'styled-components'
import Farm from './Farms'
import Container from '../Elements/Container'
export default function Summary() {
  return (
    <StyledSummary>
        <Container width={80} >
            <Head>Bomb Finance Summary</Head>
            <Section>
                <Farm/>
            </Section>
        </Container>
    </StyledSummary>
  )
}

const Head=styled.header`
&{
    font-famil:Nunito;
font-style:Regular;
font-size:16px;
line-height:30px;
line-height: 100%;
color:#ffffff;
text-align:center;
padding:5px 0px
}

&::after {
    content: "";
    position:absolute;
    top:100%;
    left:50%;
    transform:translate(-50%,0);
    width: 100%;
    height:0.5px;
    background-color:rgba(195, 197, 203, 0.75);
  }
`
const Section=styled.div`
display:flex;
justify-content: space-between;

`
const StyledSummary=styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;

`