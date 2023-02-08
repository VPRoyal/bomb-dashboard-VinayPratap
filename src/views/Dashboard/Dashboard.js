import React from 'react'
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import Background from './components/Background/Background';
import Summary from './components/Summary/Summary';
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
    <Summary/>
    </>

  )
}
export default Dashboard;