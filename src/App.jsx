import { useState } from 'react'
import './App.css'
import Cars from './components/Cars'

function App() {
  const cars = [
    {id:1,marca:"Ford",km:551,ano:1996},
    {id:2,marca:"Fiat",km:101,ano:2002},
    {id:3,marca:"Ferrari",km:1585,ano:1980},
    {id:4,marca:"Toyota",km:18,ano:2024},
  ];
  return (
    <>
      <h1>Desafio 5</h1>
      {cars.map((car)=>(
        <Cars
        key={car.id}
        marca={car.marca}
        km={car.km}
        ano={car.ano}/>
      ))}
    </>
  )
}

export default App
