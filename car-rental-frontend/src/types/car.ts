export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;

  image: string;

  pricePerDay: number;

  transmission: "Automatic" | "Manual";

  fuelType: "Petrol" | "Diesel" | "Hybrid" | "Electric";

  seats: number;

  rating: number;

  reviews: number;

  available: boolean;

  category:
    | "SUV"
    | "Sedan"
    | "Luxury"
    | "Sports"
    | "Hatchback";

  description: string;
}