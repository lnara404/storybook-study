import React from 'react';
import styled from "@emotion/styled";

interface TitleProps {
  text?: string;
}

const StyledTitle = styled.h2`
  display: inline-block;
  color: black;
`;

export const Title = ({ text }: TitleProps) => {
  return <StyledTitle>{text}</StyledTitle>
}