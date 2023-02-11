import React from 'react'
import { createGlobalStyle }  from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import Background from './components/Background/Background';
import Summary from './components/Summary/Summary';
import Boardroom from './components/Boardroom/Boardroom';
import styled from 'styled-components';
import BFarms from './components/BFarms/BFarms';
import Bonds from './components/Bonds/Bonds';
import useWallet from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
    overflow:hidden;
  }`;
const Dashboard = () =>{
  const {account} = useWallet();
  return account? (
    <>
    <Background/>
    <StyledWrapper>
    <Summary/>
    <Boardroom/>
    <BFarms/>
    <Bonds/>
    </StyledWrapper>
    </>

  ):<Connect><h2>Please Connect First to see the Dashboard</h2><UnlockWallet/></Connect>
}
const StyledWrapper=styled.div`
display: flex;
width: 100%;
padding: 10px 0px;
flex-direction: column;
row-gap: 20px;
`
const Connect=styled.div`
display: flex;
flex-direction: column;
row-gap: 50px;
padding: 30px;
text-align: center;
`
export default Dashboard;