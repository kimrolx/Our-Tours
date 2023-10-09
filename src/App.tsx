/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';
import { Tour } from './types';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTours = async () => {
    setIsLoading(true);

    try{  
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      setIsLoading(false);
      setTours(data); 
    }catch(error){
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if(isLoading){
    return(
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main> 
      <Tours tours = {tours}/>
    </main>
  );
}

export default App
