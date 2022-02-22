export interface carDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: string;
  };

  fuel_type: string;
  thumbnail: string;
  acessories: {
    type: string;
    name: string;
  }[];
  photos: string[];
}
