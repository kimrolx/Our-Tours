import { useState } from 'react';
import { Tour as TourType } from '../types';

type TourProps = {
  tour: TourType;
  onNotInterested: () => void;
};

const Tour = ({ tour, onNotInterested }: TourProps) => {
  const { image, name, price, info } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <footer>
        <div className="tour-info">
          <h5>{name}</h5>
          <h4 className="tour-price">${price}</h4>

          <p>
            {readMore ? info : info.substring(0, 200) + '...'}
            <button className="info-btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show Less' : 'Read More'}
            </button>
          </p>

          <button className="delete-btn btn-block btn" onClick={onNotInterested}>
            Not Interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
