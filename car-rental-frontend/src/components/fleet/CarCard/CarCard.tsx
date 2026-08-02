import "./CarCard.css";

import type { Car } from "../../../types/car";
import Button from "../../common/Button/Button";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="car-card">

      <div className="car-image">
        <img src={car.image} alt={`${car.brand} ${car.model}`} />

        <span className="car-rating">
          ⭐ {car.rating}
        </span>
      </div>

      <div className="car-content">

        <div className="car-header">
          <h3>
            {car.brand} {car.model}
          </h3>

          <span>{car.year}</span>
        </div>

        <p className="car-category">
          {car.category}
        </p>

        <div className="car-specs">

          <span>👥 {car.seats} Seats</span>

          <span>⚙️ {car.transmission}</span>

          <span>⛽ {car.fuelType}</span>

        </div>

        <div className="car-footer">

          <div>

            <h4>${car.pricePerDay}</h4>

            <small>/ day</small>

          </div>

          <Button>
            Book Now
          </Button>

        </div>

      </div>

    </div>
  );
};

export default CarCard;