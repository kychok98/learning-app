import React, { useState } from 'react';
import { HeaderContainerSC } from './SimpleAddition.sc';

const SimpleAddition = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  const [sum, setSum] = useState(num1 + num2);

  const handleAdd = () => {
    setSum(num1 + num2);
  };

  return (
    <React.Fragment>
      <HeaderContainerSC>SimpleAddition</HeaderContainerSC>
      <div>
        <label>Number1: </label>
        <input value={num1} onChange={e => setNum1(+e.target.value)} />
      </div>
      <div>
        <label>Number2: </label>
        <input value={num2} onChange={e => setNum2(Number(e.target.value))} />
      </div>
      <div>
        <label>Sum: ${sum}</label>
      </div>
      <div>
        <button onClick={handleAdd}>Sum</button>
      </div>
    </React.Fragment>
  );
};

export default SimpleAddition;
