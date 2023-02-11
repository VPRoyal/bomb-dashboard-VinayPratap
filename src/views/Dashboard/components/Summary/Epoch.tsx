import React, { useMemo } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import ProgressCountdown from '../../../Boardroom/components/ProgressCountdown'

import useTreasuryAllocationTimes from '../../../../hooks/useTreasuryAllocationTimes';
import useCurrentEpoch from '../../../../hooks/useCurrentEpoch';
import useCashPriceInEstimatedTWAP from '../../../../hooks/useCashPriceInEstimatedTWAP';
import useXbombAPR from '../../../../hooks/useXbombAPR';
import { roundAndFormatNumber } from '../../../../0x';
export default function Epoch() {
    const currentEpoch = useCurrentEpoch();
    const cashStat = useCashPriceInEstimatedTWAP();
    const xbombAPR = useXbombAPR();
    const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
    const { to } = useTreasuryAllocationTimes();
    const xbombTVL = useMemo(() => (xbombAPR ? Number(xbombAPR.TVL).toFixed(0) : null), [xbombAPR]);
  return (
    <Wrapper>
        <CurrentEpoch>
            <span>Current Epoch</span>
            <span>{Number(currentEpoch)}</span>
        </CurrentEpoch>
        <NextEpoch>
        <span><ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" /></span>
            <span>Next Epoch in</span>
        </NextEpoch>
        <LiveEpoch>
            <div><span>Live TWAP: </span><span>{scalingFactor}</span></div>
            <div><span>TVL: </span><span>${roundAndFormatNumber(Number(xbombTVL), 2)}</span></div>
            <div><span>Last Epoch TWAP: </span><span>3435</span></div>
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