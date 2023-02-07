import React from 'react'
import Page from '../../components/Page'
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import Background from './components/Background/Background';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
    overflow:hidden;
`;
const Dashboard = () =>{
  return (
    <>
    <Background/>
    </>

  )
}
export default Dashboard;