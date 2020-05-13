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
  initialCount?: number;
  initialPrice: number;
  onChange: (cents: number) => void;
}

export const ProductCounter = ({
  initialCount = 1,
  initialPrice,
  onChange,
}: ProductCounterProps) => {
  const [counter, setCounter] = React.useState(initialCount);

  const price = React.useMemo(() => initialPrice * counter, [
    counter,
    initialPrice,
  ]);

  const onIncrease = () => {
    const currentCounter = counter + 1;
    setCounter(currentCounter);
    onChange(currentCounter);
  };

  const onDecrease = () => {
    const currentCounter = Math.max(1, counter - 1);
    setCounter(currentCounter);
    onChange(currentCounter);
  };

  return (
    <CounterContainer className="product-counter">
      <ButtonsContainer>
        <CounterButton disabled={counter <= 1} onClick={onDecrease}>
          -
        </CounterButton>
        <CounterNumber>{counter}</CounterNumber>
        <CounterButton onClick={onIncrease}>+</CounterButton>
      </ButtonsContainer>
      <PriceContainer className="price-container">
        {getUSDFormat(price)}
      </PriceContainer>
    </CounterContainer>
  );
};
