import React from 'react'
import styled from 'styled-components'
export default function Epoch() {
  return (
    <Wrapper>
        <CurrentEpoch>
            <span>Current Epoch</span>
            <span>258</span>
        </CurrentEpoch>
        <NextEpoch>
        <span>03:38:36</span>
            <span>Next Epoch in</span>
        </NextEpoch>
        <LiveEpoch>
            <div><span>Live TWAP: </span><span>1.17</span></div>
            <div><span>TVL: </span><span>$5,002,412</span></div>
            <div><span>Last Epoch TWAP: </span><span>1.22</span></div>
        </LiveEpoch>
    </Wrapper>
  )
}
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    color:white;
    font-family: sans-serif;
`
const CurrentEpoch=styled.div`
&{
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap:2px;
    font-size: 14px;
    padding-bottom: 5px;
}
& span:last-child{
   font-size : 22px;
}

&::after{
    content: "";
    position:absolute;
    top:100%;
    left:50%;
    transform:translate(-50%,0);
    width: 120%;
    height:0.5px;
    background-color:rgba(195, 197, 203, 0.75);
}
`
const NextEpoch=styled(CurrentEpoch)`
&{
    font-size : 22px; 
}
& span:last-child{
   font-size : 14px;
}
&::after{
    width: 100%; 
}
`
const LiveEpoch=styled.div`
&{
    display: flex;
    flex-direction: column;
    row-gap: 3px;
}
& div{
    display: flex;
    justify-content: center;
    font-size: 10px;
    column-gap: 2px;
    font-weight: 100;
}
& div span:last-child{
    color: #00E8A2;
}
`