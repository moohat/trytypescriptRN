interface Fruit {
  id: number;
  name: string;
  price: number;
}

const Fruits: Fruit[] = [
  {
    id: 1,
    name: 'Mango',
    price: 10,
  },
  {
    id: 2,
    name: 'Strawberry',
    price: 2,
  },
  {
    id: 3,
    name: 'Apple',
    price: 15,
  },
  {
    id: 4,
    name: 'Water Melon',
    price: 10,
  },
  {
    id: 5,
    name: 'Grape',
    price: 20,
  },
  {
    id: 6,
    name: 'Coconut',
    price: 12,
  },
];

export { Fruits };    export type { Fruit };

