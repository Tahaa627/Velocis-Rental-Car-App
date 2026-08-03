import "./FleetSearch.css";




interface FleetSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

const FleetSearch = ({
  search,
  setSearch,
}: FleetSearchProps) => {
  return (
    <div className="fleet-search">

      <input
        type="text"
        placeholder="Search by brand or model..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
};

export default FleetSearch;