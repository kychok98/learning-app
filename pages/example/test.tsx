import React, { useState } from 'react';

const TestPage = () => {
  const [inputString, setString] = useState<string>('');
  const [totalString, setTotalString] = useState<string>('');

  const addString = () => {
    setTotalString(totalString + ' ' + inputString);
  };

  return (
    <div>
      <label>Input: </label>
      <input type="text" onChange={e => setString(e.target.value)} />
      <button onClick={addString}>add</button>
      <div>{totalString}</div>
    </div>
  );
};

export default TestPage;
