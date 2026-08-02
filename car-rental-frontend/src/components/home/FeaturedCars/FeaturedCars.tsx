import "./FeaturedCars.css";

import CarCard from "../CarCard";

import { cars } from "../../../data/cars";

const FeaturedCars = () => {
  return (
    <section className="featured">

      <h2>Featured Cars</h2>

      <p>
        Browse our premium collection
      </p>

      <div className="cars-grid">

        {cars.filter((car) => car.featured).map((car) => (
          <CarCard

            key={car.id}

            name={car.brand + " " + car.model}

            type={car.category}

            price={car.pricePerDay}

            image={car.image}

          />

        ))}

      </div>

    </section>
  );
};

export default FeaturedCars;