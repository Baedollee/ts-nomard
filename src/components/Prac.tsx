import React from 'react';

const Prac = () => {
  type Player = {
    name: string;
    age?: number;
  };
  const nico: Player = {
    name: 'nico',
    age: 23,
  };
  const playerMaker = (name: string): Player => {
    return {
      name,
    };
  };
  const bae = playerMaker('nico');

  return <div>{nico.age}</div>;
};

export default Prac;
