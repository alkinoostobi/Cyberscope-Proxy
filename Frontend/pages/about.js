import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const PrettyButton = styled.button`
  background-color: #ff4081;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff80ab;
  }
`;

const MyComponent = () => {
  return (
    <div>
      <Title>Cyberscope Assignment</Title>
      <PrettyButton>Click me</PrettyButton>
    </div>
  );
};

export default MyComponent;