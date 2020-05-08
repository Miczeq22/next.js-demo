import React from 'react';
import {
  CounterContainer,
  ButtonsContainer,
  CounterButton,
  PriceContainer,
  CounterNumber,
} from './product-counter.styles';
import { getUSDFormat } from '../../lib/money';

interface ProductCounterProps {
  initialPrice: number;
  onChange: (cents: number) => void;
}

export const ProductCounter = ({
  initialPrice,
  onChange,
}: ProductCounterProps) => {
  const [counter, setCounter] = React.useState(1);

  const price = React.useMemo(() => initialPrice * counter, [
    counter,
    initialPrice,
  ]);

  const onIncrease = () => {
    const currentCounter = counter + 1;
    setCounter(currentCounter);
    onChange(initialPrice * currentCounter);
  };

  const onDecrease = () => {
    const currentCounter = Math.max(1, counter - 1);
    setCounter(currentCounter);
    onChange(initialPrice * currentCounter);
  };

  return (
    <CounterContainer>
      <ButtonsContainer>
        <CounterButton disabled={counter <= 1} onClick={onDecrease}>
          -
        </CounterButton>
        <CounterNumber>{counter}</CounterNumber>
        <CounterButton onClick={onIncrease}>+</CounterButton>
      </ButtonsContainer>
      <PriceContainer>{getUSDFormat(price)}</PriceContainer>
    </CounterContainer>
  );
};
