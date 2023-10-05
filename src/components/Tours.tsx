import { Tour as TourType} from "../types";
import Tour from "./Tour";

type ToursProps = {
    tours: TourType[];
}

export default function Tours({ tours }: ToursProps) {
    return <section>
        <div className="title">
            <h2>Our Tours</h2>
            <div className="title-underline"/>

            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} tour={tour}/>;
                })}
            </div>
        </div>
    </section>
}