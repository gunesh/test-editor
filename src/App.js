import React from 'react';
import './style.css';

export default function App() {
  var arr = [
    {
      color: 'purple',
      Id: 1,
    },
    {
      color: 'red',
      Id: 2,
    },
    {
      color: 'green',
      Id: 3,
    },
    {
      color: 'purple',
      Id: 1,
    },
  ];

  let tmp = [];
  arr.forEach((item, index, arr) => {
    console.log(arr[index].color);
    if (true) {
      tmp.push(item);
    }
    // if(tmp[index].color){
    //   tmp.push(item)
    // }
  });

  console.log(tmp);
  return (
    <div>
      <h1>Good Morning Xoriant!</h1>
    </div>
  );
}
