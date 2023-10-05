import { useState } from 'react';
import {Tour as TourType} from '../types';

type TourProps = {
    tour: TourType;
}

const Tour = ({ tour }: TourProps) => {
    const {image, name, price, info} = tour;
    const [readMore, setReadMore] = useState(false);

  return (
  <article className = 'single-tour'>
    <img src={image} alt={name} />
    <footer>
        <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price"> ${price}</h4>
        </div>
        <p>
            {readMore ? info : info.substring(0, 100) + '...'}
            <button onClick={() => setReadMore(!readMore)}>
                {readMore ? 'Show Less' : 'Read More'}
                </button>
        </p>
        <button className="delete-btn">Not Interested</button>
    </footer>
    </article>
  );
};

export default Tour 