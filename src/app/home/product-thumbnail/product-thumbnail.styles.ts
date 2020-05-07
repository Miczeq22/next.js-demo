import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductContainer = styled(motion.article)`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-image: ${({ theme }) => theme.color.white};
  cursor: pointer;
  border: 1px solid #efefef;
  border-radius: 10px;
  padding-bottom: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductTitle = styled.h2`
  font-size: 27px;
  font-weight: 700;
  margin: 10px 0;
`;

export const ProductPrice = styled.h3`
  font-size: 23px;
  font-weight: 500;
`;
