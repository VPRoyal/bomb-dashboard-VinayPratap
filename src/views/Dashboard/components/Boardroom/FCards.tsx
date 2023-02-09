import React from 'react'
import styled from 'styled-components'
import CardHead from '../Elements/CardHead'
import TextIcon from '../Elements/TextIcon'
import CardBottom from '../Elements/CardBottom'
export default function FCards() {
  return (
    <FWrap>
        <CardHead/>
        <TotalStake>
            <div><span>Total Staked: </span></div>
            <TextIcon ImgSize={16} src={require('../../../../assets/img/bshares.png')} text={"7232"} />
        </TotalStake>
        <CardBottom/>
    </FWrap>
  )
}
const FWrap=styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
`
const TotalStake=styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
column-gap: 5px;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #FFFFFF;
`
