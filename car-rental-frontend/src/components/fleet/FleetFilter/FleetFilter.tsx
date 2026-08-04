import "./FleetFilter.css";

interface FleetFilterProps {
  brands: string[];
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
}

const FleetFilter = ({
  brands,
  selectedBrand,
  onBrandChange,
}: FleetFilterProps) => {
  return (
    <aside className="fleet-filter">
      <h3>Brand</h3>

      <label>
        <input
          type="radio"
          name="brand"
          checked={selectedBrand === ""}
          onChange={() => onBrandChange("")}
        />
        All
      </label>

      {brands.map((brand) => (
        <label key={brand}>
          <input
            type="radio"
            name="brand"
            checked={selectedBrand === brand}
            onChange={() => onBrandChange(brand)}
          />
          {brand}
        </label>
      ))}
    </aside>
  );
};

export default FleetFilter;