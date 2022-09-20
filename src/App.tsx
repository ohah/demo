import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './Button';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

function App() {

  useEffect(()=>{
    console.log('asdf');
  },[])

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
