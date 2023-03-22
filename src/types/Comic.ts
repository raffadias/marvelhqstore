export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  price: number;
  thumbnail: {
    path: string;
    extension: string;
  }
}
