import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledListItem = styled(motion.li)`
  display: flex;
  margin: 1%;
`;
