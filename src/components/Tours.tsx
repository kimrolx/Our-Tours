import { useState } from 'react';
import { Tour as TourType } from '../types';
import Tour from './Tour';

type ToursProps = {
  tours: TourType[];
};

export default function Tours({ tours }: ToursProps) {
  const [interestedTours, setInterestedTours] = useState([...tours]);

  const handleNotInterested = (tourId: number) => {
    const updatedTours = interestedTours.filter((tour) => tour.id !== tourId);
    setInterestedTours(updatedTours);
  };

  const handleRefreshClick = () => {
    setInterestedTours([...tours]);
  };

  const renderTours = () => {
    if (interestedTours.length > 0) {
      return (
        <div className="tours">
          {interestedTours.map((tour) => (
            <Tour
              key={tour.id}
              tour={tour}
              onNotInterested={() => handleNotInterested(tour.id)}
            />
          ))}
        </div>
      )
    } else {
      return (
        <div className="title">
          <h2>No Tours Left</h2>
          <div className="title-underline" />
          <button className="btn" onClick={handleRefreshClick}>
            Refresh
          </button>
        </div>
      );
    }
  };

  return (
    <main>
      <section>
        {interestedTours.length > 0 && (
          <div className="title">
            <h2>Our tours</h2>
            <div className="title-underline" />
          </div>
        )}

        {renderTours()}
      </section>
    </main>
  );
}
