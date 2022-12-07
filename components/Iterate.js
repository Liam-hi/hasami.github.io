import React from 'react'

const employees = [
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 2, name: 'Bob', country: 'Belgium'},
    {id: 3, name: 'Carl', country: 'Canada'},
    {id: 4, name: 'Dean', country: 'Denmark'},
    {id: 5, name: 'Ethan', country: 'Egypt'},
  ];

  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(x => x * 2);
  console.log(doubled);

export default function Iterate() {
  return (
    <div>
    {employees.map(x => {
      return (
        <div className={x.id}>
          <h2>name: {x.name}</h2>
          <h2>country: {x.country}</h2>

          <h1>{doubled}</h1>

          <hr />
        </div>
      );
    })}
  </div>
  )
}
