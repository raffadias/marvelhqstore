export interface Comic {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: {
    path: string;
    extension: string;
  }
}
