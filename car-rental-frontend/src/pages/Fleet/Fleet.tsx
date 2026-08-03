import "./Fleet.css";

import { cars } from "../../data/cars";

import CarCard from "../../components/fleet/CarCard";

import SectionTitle from "../../components/common/SectionTitle";

const Fleet = () => {
  return (
    <section className="fleet-page">

      <div className="container">

        <SectionTitle
          title="Our Premium Fleet"
          subtitle="Choose the perfect vehicle for your next journey."
        />

        <div className="fleet-grid">

          {cars.map((car) => (

            <CarCard
              key={car.id}
              car={car}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Fleet;