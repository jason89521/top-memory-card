import React from 'react';
import styled from 'styled-components';

const Card = ({ title, imgSrc, onClickCard }) => {
  return (
    <Container onClick={e => onClickCard(title)}>
      <img src={imgSrc} alt={title} />
      <span>{title}</span>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  gap: 0.5rem;
  border: 2px solid #5f6f69;
  border-radius: 5px;
  background-image: linear-gradient(
    to right bottom,
    rgba(123, 123, 123, 0.2),
    rgba(223, 223, 223, 0.2)
  );
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.025);
  }

  img {
    width: 100%;
  }

  span {
    font-size: 1.1rem;
  }
`;

export default Card;
