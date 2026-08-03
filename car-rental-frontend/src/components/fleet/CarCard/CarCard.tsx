import "./CarCard.css";

import type { Car } from "../../../types/car";
import Button from "../../common/Button";
import {
  Users,
  Fuel,
  Settings,
  CalendarDays,
  Star,
} from "lucide-react";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="car-card">

      <div className="car-image">

        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
        />

        <span className="badge category">
          {car.category}
        </span>

        <span className="badge rating">
          <Star size={14} fill="#FFD700" color="#FFD700" />
          {car.rating}
        </span>

      </div>

      <div className="car-body">

        <h3>
          {car.year} {car.brand} {car.model}
        </h3>

        <div className="car-specs">

          <div>
            <Settings size={18} />
            <span>{car.transmission}</span>
          </div>

          <div>
            <Fuel size={18} />
            <span>{car.fuelType}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{car.seats} Seats</span>
          </div>

        </div>

        <div className="car-footer">

          <div>

            <small>Daily Rate</small>

            <h2>
              ${car.pricePerDay}
              <span>/day</span>
            </h2>

          </div>

          <div className="availability">

            <CalendarDays size={16} />

            <span>
              {car.available ? "Available" : "Booked"}
            </span>

          </div>

        </div>

        <div className="car-buttons">

          <Button variant="secondary">
            View Details
          </Button>

          <Button>
            Book Now
          </Button>

        </div>

      </div>

    </div>
  );
};

export default CarCard;