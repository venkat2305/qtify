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
import Songs from './components/Songs/Songs';

function App() {

  const [albumData, setAlbumData] = useState([])
  const [newAlbumData, setNewAlbumData] = useState([])

  const getTopAlbums = async () => {
      try {
          const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
          setAlbumData(response.data)
          // console.log(response.data)
      } catch (error) {
          console.log(error)
      }
  }

  const getNewAlbums = async () => {
    try{
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new")
      setNewAlbumData(response.data)
      // console.log(response.data)
    
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getTopAlbums()
      getNewAlbums()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Top Albums" cardData={albumData}/>
      <Section title="New Albums" cardData={newAlbumData}/>
      <Songs />
    </div>
  );
}

export default App;
