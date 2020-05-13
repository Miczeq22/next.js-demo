import styled from 'styled-components';
import { Container } from '../../ui/container/container.styles';
import { motion } from 'framer-motion';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdfdfd;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

export const CartTitle = styled(motion.h2)`
  font-weight: 700;
  font-size: 31px;
  margin-bottom: 30px;
`;

export const ItemsContainer = styled(motion.section)`
  width: 65%;
  height: 100%;
`;

export const CheckoutContainer = styled(motion.section)`
  width: 35%;
  margin-left: 20px;
`;
