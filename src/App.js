// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import '@fontsource/poppins';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Section from './components/Section/Section';

function App() {

  // const [cardData, setCardData] = useState([])

  // const getCardData = async () => {
  //   try {
  //     const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
  //     setCardData(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getCardData()
  // }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
}

export default App;
