import { useState } from 'react';
import { Tour as TourType} from "../types";
import Tour from "./Tour";

type ToursProps = {
  tours: TourType[];
}

const TourList = ({ tours } :ToursProps) => {
  const [showAllTours, setShowAllTours] = useState(true);

  const handleRefreshClick = () => {
    setShowAllTours(true);
  };

  return (
    <div>
      <button className= "btn"  onClick={handleRefreshClick}>Refresh</button>
      {showAllTours ? (
        <div>
          {tours.map((tour) => (
            <Tour key={tour.id} tour={tour} />  
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TourList;
