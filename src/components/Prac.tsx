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

  let a: unknown;
  if (typeof a === 'number') {
    let b = a + 1;
  }
  if (typeof a === 'string') {
    let b = a.toUpperCase();
  }

  // void
  const hello = () => {
    console.log('x');
  };
  // never
  const hello2 = (name: string | number) => {
    if (typeof name === 'string') {
    } else if (typeof name === 'number') {
    }
  };
  type Add = (a: number, b: number) => number;

  const add: Add = (a, b) => {
    return a + b;
  };

  // generic
  // type SuperPrint = {
  //   (arr: number[]): void;
  //   (arr: boolean[]): void;
  //   (arr: string[]): void;
  //   (arr: (number | boolean)[]): void;
  // };
  type SuperPrint = {
    <T>(arr: T[]): T;
  };
  const superPrint: SuperPrint = (arr) => {
    // arr.forEach((i) => console.log(i));
    return arr[0];
  };
  const c = superPrint([1, 2, 3, 4]);
  const d = superPrint([true, false, true]);
  const f = superPrint(['a', 'b', 'c']);
  const g = superPrint([1, 2, true, false, 'hello']);

  type Player1<T> = {
    name: string;
    extraInfo: T;
  };
  type BaeExtra = {
    favFood: string;
  };
  type BaePlayer = Player1<BaeExtra>;

  const BaePlayer: BaePlayer = {
    name: 'bae',
    extraInfo: {
      favFood: 'kimch',
    },
  };
  const lynn: Player1<null> = {
    name: 'lynn',
    extraInfo: null,
  };

  return (
    <div>
      {nico.age}
      <div>{players}</div>
    </div>
  );
};

export default Prac;
