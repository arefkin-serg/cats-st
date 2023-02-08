import { CartItem } from '../models/cartItem';

export const initialCartState: readonly CartItem[] = [
  {
    id: 'product001',
    name: 'Bouclé Bungalow “Creme” Cover',
    imageUrl: 'product1',
    price: 23900,
    quantity: 1,
  },
  {
    id: 'product002',
    name: 'Replacement Cover in “Catnip”',
    imageUrl: 'product2',
    price: 12900,
    quantity: 1,
  },
];
