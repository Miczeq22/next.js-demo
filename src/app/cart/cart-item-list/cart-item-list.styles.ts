import styled from 'styled-components';
import { Container } from '../../../ui/container/container.styles';
import { motion } from 'framer-motion';

export const ListContainer = styled(Container)``;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled(motion.li)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;
