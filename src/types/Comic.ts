export type Price = {
  type: string;
  price: number;
}

type TextObject = {
  language: string;
  text: string;
  type: string;
}


export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  textObjects: TextObject[];
  prices: Price[];
  thumbnail: {
    path: string;
    extension: string;
  }
}
