import React, { useState } from 'react';
import SimpleAddition from '../../modules/SimpleAddition';
import { randomItem } from './constant';
import { DivContainerSC, HeaderContainerSC } from './example.sc';

const ExamplePage = () => {
  const [stringState, setStringState] = useState<string>('');
  const [numState, setNumState] = useState<number>(0);
  const [arrayState, setArrayState] = useState<string[]>([]);

  const handleStringChange = () => {
    setStringState(Math.random().toString(36).substring(7));
  };

  const handleNumberChange = () => {
    setNumState(Math.random());
  };

  const handleArrayChange = () => {
    setArrayState(_getRandomItem(randomItem));
  };

  return (
    <React.Fragment>
      <HeaderContainerSC>ExamplePage</HeaderContainerSC>
      <DivContainerSC>
        <label>String: </label>
        <span>{stringState}</span>
        <button onClick={handleStringChange}>Change string</button>
      </DivContainerSC>
      <DivContainerSC>
        <label>Number: </label>
        <span>{numState}</span>
        <button onClick={handleNumberChange}>Change Number</button>
      </DivContainerSC>
      <DivContainerSC>
        <label>Array: </label>
        <span>{JSON.stringify(arrayState)}</span>
        <button onClick={handleArrayChange}>Change Array</button>
      </DivContainerSC>

      <SimpleAddition />
    </React.Fragment>
  );
};

export default ExamplePage;

const _getRandomItem = (arr: string[][]) => {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  return arr[randomIndex];
};
