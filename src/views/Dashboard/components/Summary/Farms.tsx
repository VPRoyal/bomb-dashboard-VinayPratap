import React, { useMemo } from 'react'
import styled from 'styled-components'
import Farm from './Farm'
import BombImage from '../../../../assets/img/bomb.png';
import BShareImage from '../../../../assets/img/bshares.png'
import BBondImage from '../../../../assets/img/bbond.png'

import useBombStats from '../../../../hooks/useBombStats';
import useBondStats from '../../../../hooks/useBondStats';
import usebShareStats from '../../../../hooks/usebShareStats';
export default function Farms() {
    const bombStats = useBombStats();
    const bShareStats = usebShareStats();
    const tBondStats = useBondStats();

    const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
    const bombPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
    );
    const bombCirculatingSupply = useMemo(() => (bombStats ? Number(bombStats.circulatingSupply) : null), [bombStats]);
    const bombTotalSupply = useMemo(() => (bombStats ? Number(bombStats.totalSupply) : null), [bombStats]);

    const bSharePriceInDollars = useMemo(
        () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
        [bShareStats],
    );
    const bSharePriceInBNB = useMemo(
        () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
        [bShareStats],
    );
    const bShareCirculatingSupply = useMemo(
        () => (bShareStats ? Number(bShareStats.circulatingSupply) : null),
        [bShareStats],
    );
    const bShareTotalSupply = useMemo(() => (bShareStats ? Number(bShareStats.totalSupply) : null), [bShareStats]);

    const tBondPriceInDollars = useMemo(
        () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
        [tBondStats],
    );
    const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
    const tBondCirculatingSupply = useMemo(
        () => (tBondStats ? Number(tBondStats.circulatingSupply) : null),
        [tBondStats],
    );
    const tBondTotalSupply = useMemo(() => (tBondStats ? Number(tBondStats.totalSupply) : null), [tBondStats]);

    return (
        <Wrapper>
            <Head>
                <HeadChild start={3} >Current Supply</HeadChild >
                <HeadChild start={5} >Total Supply</HeadChild >
                <HeadChild start={7} >Price</HeadChild >
            </Head>
            <Body>
                <Farm priceInBNB={bombPriceInBNB} priceInDollar={bombPriceInDollars} CurrentSupply={bombCirculatingSupply} TotalSupply={bombTotalSupply} name="BOMB" Icon={BombImage} />
                <Farm priceInBNB={bSharePriceInBNB} priceInDollar={bSharePriceInDollars} CurrentSupply={bShareCirculatingSupply} TotalSupply={bShareTotalSupply} name="BSHARE" Icon={BShareImage} />
                <Farm priceInBNB={tBondPriceInBNB} priceInDollar={tBondPriceInDollars} CurrentSupply={tBondCirculatingSupply} TotalSupply={tBondTotalSupply} name="BBOND" Icon={BBondImage} />
            </Body>
        </Wrapper>
    )
}
const Wrapper = styled.div`
width: 500px;
`
const Head = styled.div`
width:100%;
display:grid;
margin-bottom: 5px;
grid-template-columns: repeat(10,1fr);
`
interface HeadChildProps {
    start: number;
}
const HeadChild = styled.span<HeadChildProps>`
grid-column: ${(props) => props.start}/ span 2;
text-align: center;
font-family: Numito;
font-size: 16px;
line-height: 14px;
line-height: 100%;
color: white;
`

const Body = styled.div`
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