import React from 'react'


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(x =>  <li>{x}</li>);


export default function Iterate2() {
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}
