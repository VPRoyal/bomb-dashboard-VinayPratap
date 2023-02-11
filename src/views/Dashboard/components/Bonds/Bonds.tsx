import React from 'react'
import styled from 'styled-components'
import Container from '../Elements/Container'
import CardHead from '../Elements/CardHead'
import TextIcon from '../Elements/TextIcon'
import ButtonC from '../Elements/Buttons/ButtonC'
export default function Bonds() {
    return (
        <Wrapper>
            <Container width={80} border="1px solid #728CDF">
                {/* <CardHead tokenName='XYZ' /> */}
                <Footer>
                    <Left>
                        <div>
                            <span>Current Price: (Bomb)^2</span>
                            <span>BBond = 6.2872 BTCB</span>
                        </div>
                        <div>
                            <span>Available to redeem: </span>
                            <TextIcon ImgSize={18} src={require('../../../../assets/img/bshares.png')} text={"6.0000"} />
                        </div>
                    </Left>
                    <Right>
                    <ActionPanel>
                        <div><span>Purchase BBond</span><span>Bomb is over peg</span></div>
                        <div><ButtonC  color='white' text='Purchase' border='1px solid white' background='rgba(35, 40, 75, 0.75)' link={require('../../../../assets/img/shopping-cart.svg')}/></div>
                    </ActionPanel>
                    <ActionPanel>
                        <div><span>Purchase BBond</span></div>
                        <div><ButtonC  color='white' text='Redeem' border='1px solid white' background='rgba(35, 40, 75, 0.75)' link={require('../../../../assets/img/arrowdown.svg')}/></div>
                    </ActionPanel>
                    </Right>
                </Footer>
            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Footer = styled(Wrapper)`
margin-top: 20px;
color: white;
justify-content: space-between;
`
const Left =styled(Wrapper)`
justify-content: left;
column-gap: 20px;
    width: 50%;
& div{
    display: flex;
    flex-direction: column;
}
& div span:first-child{
    font-weight: 300;
font-size: 16px;
line-height: 25px;
}
& div span:last-child{
    font-weight: 700;
font-size: 22px;
line-height: 30px;
}
`
const Right=styled(Wrapper)`
width: 50%;
    flex-direction: column;
`
const ActionPanel=styled.div`
display: flex;
width: 100%;
padding: 5px;
justify-content: space-between;
align-items: center;
& div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
& + &{
    border-top: 0.5px solid rgba(195, 197, 203, 0.75);
}

& div span:last-child{
    font-weight: 300;
font-size: 16px;
line-height: 22px;
}
& div span:first-child{
    font-weight: 600;
font-size: 16px;
line-height: 22px;
}
`