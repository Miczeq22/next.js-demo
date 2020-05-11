import styled from 'styled-components';
import { Container } from '../../../ui/container/container.styles';
import { motion } from 'framer-motion';
import { Button } from 'antd';

export const CheckoutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const CheckoutTile = styled(motion.section)`
  background-color: ${({ theme }) => theme.color.white};
  margin-bottom: 10px;
  border-radius: 20px;
  border: 1px solid #efefef;
  padding: 20px;
`;

export const TileTitle = styled(motion.h2)`
  font-weight: 500;
  font-size: 21px;
  margin-bottom: 20px;
`;

export const TileLabel = styled(motion.div)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;

  & > .anticon {
    margin-right: 10px;
  }
`;

export const CheckoutItem = styled(motion.div)`
  margin-bottom: 10px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.special {
    border-bottom: 1px solid #efefef;
    padding-bottom: 20px;
  }
`;

export const CheckoutLabel = styled(motion.h3)`
  font-weight: 500;
  font-size: 19px;
`;

export const TotalPrice = styled(motion.h4)`
  font-weight: 700;
  font-size: 23px;
  margin-top: 10px;
`;

export const PlaceOrderButton = styled(Button)`
  padding: 0 30px;
  height: 40px;
`;
