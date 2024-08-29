import { useEffect, useRef,useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {

  let heroData = [
    {text: "EcoZoom Drive",data: "Infinite Energy "},
    {text: "Future Flux",data: "Green Momentum"},
    {text: "Future Spark",data: "EcoMotion Revolution"},
    {text: "Electric Zen", data: "Sustainable Power" },
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start the interval
    intervalRef.current = setInterval(() => {
      setHeroCount((count) => (count === 3 ? 0 : count + 1));
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalRef.current);
  }, []);
  
  

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero 
      setPlayStatus={setPlayStatus} 
      heroData={heroData[heroCount]} 
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  );
}

export default App;
