import React from 'react'
import styled from 'styled-components'
import TokenSymbol from '../../../../components/TokenSymbol'

interface CardHeadProps{
tokenName:string
TVL:string
}
const CardHead: React.FC<CardHeadProps> = ({children, tokenName,TVL}) => {
  
  return(
    <Wrapper>
        <Image><TokenSymbol size={48} symbol={tokenName} /></Image>
        <Heading>
          <div><span>{tokenName}</span><span>Recommended</span></div>
          <div><span>Stake BSHARE and earn BOMB every epoch</span></div>
        </Heading>
        <Tvl>
          <span>TVL: </span>
          <span>${TVL}</span>
        </Tvl>
    </Wrapper>
  )
}
const Wrapper=styled.div`
color: white;
display: flex;
width: 100%;
row-gap: 20px;
padding-bottom: 10px;
&::after{
    content: '';
    position: absolute;
    width: calc(100% - 48px);
    height:0.5px;
    background-color:rgba(195, 197, 203, 0.75);
    right: 0px;
    bottom: 0px;
    }
`
const Image=styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0px 10px;
`
const Heading=styled.div`
& div:first-child{
  display: flex;
  column-gap: 10px;
  align-items: center;
}
& div:first-child span:first-child{
font-weight: 700;
font-size: 22px;
line-height: 30px;
}
& div:first-child span:last-child{
  background:rgba(0, 232, 162, 0.5);
  padding: 2px 5px;
  border-radius: 3px;
  font-weight: 600;
font-size: 12px;
line-height: 16px;
}
& div:last-child{
font-weight: 400;
font-size: 14px;
line-height: 19px;
}
`
const Tvl=styled.div`
font-weight: 400;
font-size: 14px;
line-height: 19px;
margin-left: auto;
align-self: flex-end;
& span:last-child{
font-weight:600;
font-size:16px;
line-height: 21px;
}
`
export default CardHead;