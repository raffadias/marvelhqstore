export type Price = {
  type: string;
  price: number;
}
export type Comic = {
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
