import React from 'react'
import styled from 'styled-components'
import ButtonA from '../Elements/Buttons/ButtonA'
import ButtonB from '../Elements/Buttons/ButtonB'
import DiscordImage from '../../../../assets/img/discordBlue.svg'
import DocsImage from '../../../../assets/img/docs.svg'
import Container from '../Elements/Container'
import FCards from './FCards'
export default function Boardroom() {
  return (
    <StyledBoardroom>
      <Wrapper>
        <Left>
          <Link><span><a href="https://bombbshare.medium.com/the-bomb-cycle-how-to-print-forever-e89dc82c12e5">Read Investment Strategy</a></span><span><img src={require('../../../../assets/img/RArrow.svg')} alt="" /></span></Link>
          <ButtonA color='white' text='Invest Now' border='0.5px solid #E41A1A' background='radial-gradient(59345.13% 4094144349.28% at 39511.5% -2722397851.45%, rgba(0, 245, 171, 0.5) 0%, rgba(0, 173, 232, 0.5) 100%)' to='/' />
          <ButtonWrap>
            <ButtonB color='black' text='Chat on Discord' border='none' background='rgba(255, 255, 255, 0.5)' link={DiscordImage} href='https://discord.bomb.money' />
            <ButtonB color='black' text='Read Docs' border='none' background='rgba(255, 255, 255, 0.5)' link={DocsImage} href='https://docs.bomb.money/' />
          </ButtonWrap>
          <Container width={100} border="1px solid #728CDF" >
            {/* <FCards bank={null}/> */}
          </Container>
        </Left>
        <Right>
            <Container width={100} height={100} border="1px solid #728CDF" >
               <h3 style={{color:'white', textTransform:'none'}} >Latest News</h3>
            </Container>
        </Right>
      </Wrapper>
      </StyledBoardroom>
  )
}
const StyledBoardroom=styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper=styled.div`
  display: flex;
  /* border: solid 1px white; */
  width: 80%;
  column-gap: 20px;
`
const Left=styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
const Right=styled(Left)`
  width: 40%;
`
const ButtonWrap=styled.div`
  display: flex;
  column-gap: 20px;
`
const Link=styled.div`
 display: flex;
 justify-content: right;
 column-gap: 4px;
 & a{
  color: #9EE6FF;
 }
 & span{
  display: flex;
  align-items:center;
 }
;
`
