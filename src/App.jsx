import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import Journal from './components/Journal'
import data from './data/data.js'

function App() {
  //lets take our data 
  const journalsData = data.map(item => {
    return (
      <Journal item={item} />
    )
  }) 

  return (
    <div>
      <Navbar />
      {journalsData}
   </div>
  )
}

export default App
