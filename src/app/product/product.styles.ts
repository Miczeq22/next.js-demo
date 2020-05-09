import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from 'antd';

export const ProductContainer = styled(motion.article)`
  display: flex;
  overflow: hidden;
`;

export const ProductImage = styled(motion.div)`
  width: 50%;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const ProductInformation = styled(motion.header)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 60px;
`;

export const ProductName = styled(motion.h2)`
  font-weight: 700;
  font-size: 47px;
`;

export const ProductDescription = styled(motion.section)`
  padding: 20px 0;

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    font-weight: 500;
    margin: 10px 0;
    padding-bottom: 5px;
    border-bottom: 2px solid #efefef;
  }

  & b,
  & strong {
    font-weight: 700;
  }

  & i,
  & em {
    font-style: italic;
  }

  & > h1 {
    font-size: 37px;
  }

  & > h2 {
    font-size: 31px;
  }

  & > h3 {
    font-size: 27px;
  }

  & > h4 {
    font-size: 23px;
  }

  & > h5 {
    font-size: 19px;
  }

  & > h6 {
    font-size: 17px;
  }

  & > p {
    padding: 10px 0;
  }
`;

export const ProductPrice = styled(motion.div)`
  width: 100%;
`;

export const ButtonsContainer = styled(motion.div)`
  width: 100%;
  margin-top: 30px;
`;

export const AddToCartButton = styled(Button)`
  border-radius: 10px;
  padding: 0 30px;
  height: 40px;
`;

export const BackToProductsLink = styled(motion.a)`
  width: 100%;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
`;
