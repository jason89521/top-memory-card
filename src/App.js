import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import { shuffleArray } from './utils';

import background from './imgs/background.jpg';
import cardsArr from './cardsArr';

const App = () => {
  const [cards, setCards] = useState(cardsArr);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    if (score > bestScore) setBestScore(score);
  }, [score, bestScore]);

  const onClickCard = title => {
    if (clickedCards.includes(title)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, title]);
    }

    setCards(shuffleArray(cards));
  };

  const renderedCards = cards.map(card => {
    return (
      <Card key={card.title} title={card.title} imgSrc={card.imgSrc} onClickCard={onClickCard} />
    );
  });

  return (
    <React.Fragment>
      <GlobalStyles />
      <Scoreboard score={score} bestScore={bestScore} />
      <CardsContainer>{renderedCards}</CardsContainer>
    </React.Fragment>
  );
};

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Averia Sans Libre', cursive;
  }


  body {
    background-image:
      url(${background});
    background-repeat: no-repeat;
    background-size: 100% 110%;
    background-position-y: 100%;
    padding: 3rem 10rem;
    min-height: 100vh;

    @media screen and (max-width: 768px) {
      padding: 3rem 3rem;
    }
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem 2rem;
  margin-top: 75px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default App;
