import Dinero from 'dinero.js';

export const getUSDFormat = (cents: number) =>
  Dinero({ amount: cents, currency: 'USD' }).toFormat('$0.00');
