import React from 'react'
import styled from 'styled-components'
import Container from '../Elements/Container'
import ButtonC from '../Elements/Buttons/ButtonC'
import FCards from '../Boardroom/FCards'

import useBanks from '../../../../hooks/useBanks'
export default function BFarms() {
    const [banks] = useBanks();
    const activeBanks = banks.filter((bank) => !bank.finished);
    return (
        <StyledBFarms>
            <Container width={80} border="1px solid #728CDF" >
                <Head>
                    <Section>
                        <span>Bomb Farms</span>
                        <span>Stake your LP tokens in our farms to start earning $BSHARE</span>
                    </Section>
                    <ButtonWrap>
                        <ButtonC color='white' text='Claim All' border='1px solid white' background='rgba(35, 40, 75, 0.75)' IBackground='#373747' link={require('../../../../assets/img/bshares.png')} />
                    </ButtonWrap>
                </Head>
                <FarmWrap>
                    {activeBanks
                        .filter((bank) => bank.sectionInUI === 3)
                        .map((bank) => (
                            
                            <React.Fragment key={bank.name}>
                                <FCards bank={bank} />
                            </React.Fragment>
                        ))}
                </FarmWrap>
            </Container>
        </StyledBFarms>
    )
}
const StyledBFarms = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Head = styled(StyledBFarms)`
justify-content: space-between;
padding: 20px 10px;
`
const Section = styled.div`
    margin-right: auto;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    color: white;
& span:first-child{
    font-weight: 700;
font-size: 22px;
line-height: 30px;
}
& span:last-child{
    font-weight: 400;
font-size: 14px;
line-height: 19px;
}
`
const ButtonWrap = styled.div`
margin-left: auto;
display: flex;
align-items: flex-end;
`
const FarmWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    margin: 20px 0px;
    padding: 20px 10px;

`
