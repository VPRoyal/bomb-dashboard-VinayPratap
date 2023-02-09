import React from 'react'
import { createGlobalStyle }  from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import Background from './components/Background/Background';
import Summary from './components/Summary/Summary';
import Boardroom from './components/Boardroom/Boardroom';
import styled from 'styled-components';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
    overflow:hidden;
  }`;
const Dashboard = () =>{
  return (
    <>
    <Background/>
    <StyledWrapper>
    <Summary/>
    <Boardroom/>
    </StyledWrapper>
    </>

  )
}
const StyledWrapper=styled.div`
display: flex;
width: 100%;
flex-direction: column;
row-gap: 20px;
`
export default Dashboard;