import React, { useState } from 'react';

const Task1 = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [result, setResult] = useState({
    onlyInA: [],
    onlyInB: [],
    inBoth: [],
    combined: [],
  });

  const computeDifferences = () => {
    const arrA = listA.split('\n').map(item => item.trim());
    const arrB = listB.split('\n').map(item => item.trim());

    const onlyInA = arrA.filter(item => !arrB.includes(item));
    const onlyInB = arrB.filter(item => !arrA.includes(item));
    const inBoth = arrA.filter(item => arrB.includes(item));
    const combined = [...new Set([...arrA, ...arrB])];

    setResult({
      onlyInA,
      onlyInB,
      inBoth,
      combined,
    });
  };

  return (
    <div>
      <div>
        <h2>List A</h2>
        <textarea
          value={listA}
          onChange={e => setListA(e.target.value)}
          rows={5}
        />
      </div>
      <div>
        <h2>List B</h2>
        <textarea
          value={listB}
          onChange={e => setListB(e.target.value)}
          rows={5}
        />
      </div>
      <button onClick={computeDifferences}>Compute</button>
      <div>
        <h2>Results</h2>
        <div>
          <h3>Items present only in A:</h3>
          <ul>
            {result.onlyInA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Items present only in B:</h3>
          <ul>
            {result.onlyInB.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Items present in both A and B:</h3>
          <ul>
            {result.inBoth.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Items combining both A and B (unique):</h3>
          <ul>
            {result.combined.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task1;
