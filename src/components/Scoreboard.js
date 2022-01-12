import React from 'react';
import styled from 'styled-components';
import logo from '../imgs/logo_rhodes.png';

const Scoreboard = ({score, bestScore}) => {
  return (
    <Container>
      <Img src={logo} alt='logo' />
      <ScoresBox>
        <span>Best score: {bestScore}</span>
        <span>Current score: {score}</span>
      </ScoresBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Img = styled.img`
  width: 100px;
  `

const ScoresBox = styled.div`
  display: flex;
  flex-direction: column;
`

export default Scoreboard;
