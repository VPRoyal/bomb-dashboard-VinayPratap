import React from 'react'
import styled from 'styled-components'
export default function Farm() {
  return (
    <Body>
        <Item start={1}  >
            <span style={{width:'25px', height:'25px', display:'flex', alignItems:"center", justifyContent:"center", backgroundColor:"#373747", borderRadius:"50%"}} ><img style={{width:'20px', height:'20px'}} src={require('../../../../assets/img/bomb.png')} alt="" /></span>
            <span>$BOMB</span>
        </Item>
        <Item start={3} >
            <span>8.66M</span>
        </Item>
        <Item start={5} >
            <span>60.9k</span>
        </Item>
        <Item start={7} style={{flexDirection:"column"}} >
            <span>$0.24 </span>
            <span>1.05 BTCB</span>
        </Item>
        <Item start={9} >
            <span style={{width:'30px'}} ><img src={require('../../../../assets/img/metamask-fox.svg')} alt="" /></span>
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
&::after{
    content:'';
    position: absolute;
    width: 95%;
    height:0.5px;
    background-color:rgba(195, 197, 203, 0.75);
    right: 0px;
    bottom: 0px;

}
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
`