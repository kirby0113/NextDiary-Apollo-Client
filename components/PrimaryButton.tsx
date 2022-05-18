import React from "react";
import styled from "styled-components";

export type PrimaryButtonProps = {
  children: React.ReactNode;
};

export const StyledPrimaryButton = styled.div`
  background-color: #ff0000;
`;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
}: PrimaryButtonProps) => {
  return <StyledPrimaryButton>{children}</StyledPrimaryButton>;
};
