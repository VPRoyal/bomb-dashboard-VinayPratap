import React from 'react'
import styled from 'styled-components'
import { roundAndFormatNumber } from '../../../../0x'
import MetamaskFox from '../../../../assets/img/metamask-fox.svg';
import useBombFinance from '../../../../hooks/useBombFinance';
interface FormProps{
priceInBNB:string,
priceInDollar:string,
CurrentSupply:number,
TotalSupply:number,
name:string,
Icon:string
}
const Farm: React.FC<FormProps> = ({children, priceInBNB, priceInDollar, CurrentSupply, TotalSupply, name,Icon }) => {
    const bombFinance = useBombFinance();
    return (
    <Body>
        <Item start={1}  >
            <span style={{width:'25px', height:'25px', flexShrink:0, display:'flex', alignItems:"center", justifyContent:"center", backgroundColor:"#373747", borderRadius:"50%"}} ><img style={{width:'20px', height:'20px'}} src={Icon} alt="" /></span>
            <span>${name}</span>
        </Item>
        <Item start={3} >
            <span>{roundAndFormatNumber(CurrentSupply, 2)}</span>
        </Item>
        <Item start={5} >
            <span>{roundAndFormatNumber(TotalSupply, 2)}</span>
        </Item>
        <Item start={7} style={{flexDirection:"column"}} >
            <span>${priceInDollar ? roundAndFormatNumber(Number(priceInDollar), 2) : '-.--'}</span>
            <span>{priceInBNB ? priceInBNB : '-.----'} BTCB</span>
        </Item>
        <Item start={9} onClick={() => {
                  bombFinance.watchAssetInMetamask('BOMB');
                }}  >
            <span style={{width:'30px'}} ><img src={MetamaskFox} alt="" /></span>
        </Item>
    </Body>
  )

}
const Body=styled.div`
&{
display: grid;
/* border: solid 1px white; */
width: 100%;
grid-template-columns: repeat(10, 1fr);
padding: 10px 0px;
}
& + &{
    border-top: rgba(195, 197, 203, 0.75) 0.5px solid;
}
/* &::after{
    content:'';
    position: absolute;
    width: 95%;
    height:0.5px;
    background-color:rgba(195, 197, 203, 0.75);
    right: 0px;
    bottom: 0px;

} */
`
interface ItemProps{
    start:number;
}
const Item=styled.div<ItemProps>`
color: white;
    display: flex;
    grid-column: ${(props) => props.start}/ span 2;
    /* border: solid 1px red; */
    column-gap: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
&:last-child{
    cursor: pointer;
}
`
export default Farm;