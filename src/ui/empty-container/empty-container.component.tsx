import React from 'react';
import {
  StyledContainer,
  StyledImage,
  StyledLabel,
} from './empty-container.styles';

interface EmptyContainerProps {
  label?: string;
}

export const EmptyContainer = ({
  label = 'There is no data...',
}: EmptyContainerProps) => {
  return (
    <StyledContainer>
      <StyledImage alt="Empty" src={`${process.env.ASSET_PREFIX}/empty.svg`} />
      <StyledLabel>{label}</StyledLabel>
    </StyledContainer>
  );
};
