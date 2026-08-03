import "./Fleet.css";

import { cars } from "../../data/cars";

import CarCard from "../../components/fleet/CarCard";

import SectionTitle from "../../components/common/SectionTitle";

import FleetSearch from "../../components/fleet/FleetSearch";

import { useState } from "react";

const Fleet = () => {
  
  const [search, setSearch] = useState("");

  return (
    <section className="fleet-page">

      <div className="container">

        <SectionTitle
          title="Our Premium Fleet"
          subtitle="Choose the perfect vehicle for your next journey."
        />
        <FleetSearch search={search} setSearch={setSearch}/>

        <div className="fleet-grid">
          
          {cars
            .filter((car) => {
            const query = search.toLowerCase();
        
            return (
              car.brand.toLowerCase().includes(query) ||
              car.model.toLowerCase().includes(query)
            );
          })
          .map((car) => (
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