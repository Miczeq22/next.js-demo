import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledListItem = styled(motion.li)`
  margin: 1%;
`;
