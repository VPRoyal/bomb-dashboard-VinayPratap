import React from 'react'
import styled from 'styled-components'
import Farm from './Farm'
export default function Farms() {
  return (
    <Wrapper>
        <Head>
            <HeadChild start={3} >Current Supply</HeadChild >
            <HeadChild start={5} >Total Supply</HeadChild >
            <HeadChild start={7} >Price</HeadChild >
        </Head>
        <Body>
            <Farm/>
        </Body>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width: 500px;
`
const Head=styled.div`
width:100%;
display:grid;
margin-bottom: 5px;
grid-template-columns: repeat(10,1fr);
`
interface HeadChildProps{
    start:number;
}
const HeadChild=styled.span<HeadChildProps>`
grid-column: ${(props) => props.start}/ span 2;
text-align: center;
font-family: Numito;
font-size: 16px;
line-height: 14px;
line-height: 100%;
color: white;
`

const Body=styled.div`
    &{
        width: 100%;
        padding: 4px 0px;
    }
&::before{
    content: '';
    position: absolute;
    width:85%;
    height:0.5px;
    background-color:rgba(195, 197, 203, 0.75);
    right: 0px;
    top: 0px;
}
&::after{
    content: '';
    position: absolute;
    width: 85%;
    height:0.5px;
    background-color:rgba(195, 197, 203, 0.75);
    right: 0px;
    bottom: 0px;
    }
`