export interface Price {
  type: string;
  price: number;
}
export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  prices: Price[];
  thumbnail: {
    path: string;
    extension: string;
  }
}
