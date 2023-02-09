import React from 'react'
import styled from 'styled-components'
export default function Far() {
  return (
    <Wrapper>
        <Image><img src={require('../../../../assets/img/bshares.png')} alt="" /></Image>
        <Heading>
          <div><span>Boardroom</span><span>Recommended</span></div>
          <div><span>Stake BSHARE and earn BOMB every epoch</span></div>
        </Heading>
        <Tvl>
          <span>TVL: </span>
          <span>$1,008,430</span>
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
width: 48px;
align-items: center;
justify-content: center;
& img{
  width: 100%;
  height: 100%;
}
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