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

  const names: readonly string[] = ['1', '2'];

  const players: [string, number, boolean] = ['nico', 1, true];

  return (
    <div>
      {nico.age}
      <div>{players}</div>
    </div>
  );
};

export default Prac;
