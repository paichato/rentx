export interface carDTO {
  id: string;
  brand: string;
  name: string;
  about: string;

  period: string;
  price: string;

  fuel_type: string;
  thumbnail: string;
  accessories: {
    if: string;
    type: string;
    name: string;
  }[];
  photos: {
    id: string;
    photo: string;
  };
}
