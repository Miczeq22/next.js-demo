import React from 'react';
import {
  CounterContainer,
  ButtonsContainer,
  CounterButton,
  PriceContainer,
  CounterNumber,
} from './product-counter.styles';
import { getUSDFormat } from '../../lib/money';
import { message } from 'antd';

interface ProductCounterProps {
  initialPrice: number;
  onChange: (cents: number) => void;
}

const getHappyMessage = () => {
  const messages = ['Nice bro! 😎', 'My Homie! 💪🏼', 'Oh yeah! 🌝'];
  return messages[Math.floor(Math.random() * messages.length)];
};

const getSadMessage = () => {
  const messages = ['Why? 😭', 'Are you sure? 🤔', '... 😠'];
  return messages[Math.floor(Math.random() * messages.length)];
};

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
    message.success(getHappyMessage(), 0.5);
    const currentCounter = counter + 1;
    setCounter(currentCounter);
    onChange(initialPrice * currentCounter);
  };

  const onDecrease = () => {
    message.success(getSadMessage(), 0.5);
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
