import React from 'react'
import styled from 'styled-components'
import TextIcon from './TextIcon'
import ButtonC from './Buttons/ButtonC'
interface CardBottomProps{
    tokenName:string
    TVL:string
    }
    const CardHead: React.FC<CardBottomProps> = ({children, }) => {
  return (
    <Wrapper>
        <Body>
            <div>
                <span>Daily Returns:</span>
                <span>2%</span>
            </div>
            <div>
                <span>Your Stake:</span>
                <TextIcon ImgSize={18} src={require('../../../../assets/img/bshares.png')} text={"6.0000"} />
                <span>≈ $1171.62</span>
            </div>
            <div>
                <span>Earned:</span>
                <TextIcon ImgSize={18} src={require('../../../../assets/img/bomb.png')} text={"1660.4413"} />
                <span>≈ $298.88</span>
            </div>
        </Body>
        <ButtonWrapper>
            <ButtonC  color='white' text='Deposit' border='1px solid white' background='rgba(35, 40, 75, 0.75)' link={require('../../../../assets/img/arrowup.svg')}/>
            <ButtonC  color='white' text='Withdraw' border='1px solid white' background='rgba(35, 40, 75, 0.75)' link={require('../../../../assets/img/arrowdown.svg')}/>
            <ButtonC  color='white' text='Claim Rewards' border='1px solid white' background='rgba(35, 40, 75, 0.75)' IBackground='#373747' link={require('../../../../assets/img/bshares.png')}/>
        </ButtonWrapper>
    </Wrapper>
  )
}
const Wrapper=styled.div`
 display: flex;
 justify-content: space-between;
`

const Body=styled.div`
    display: flex;
    width: 60%;
    column-gap: 10px;
    color:white;
& div{
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    font-weight: 400;
font-size: 14px;
line-height: 19px;
}
& div:first-child span:last-child{
    font-weight:600;
font-size:22px;
line-height:30.01px
}
`
const ButtonWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    row-gap: 10px;
    flex-wrap: wrap;
    height: min-content;
`