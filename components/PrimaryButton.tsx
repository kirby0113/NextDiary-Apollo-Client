import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../constants/color";
import { ButtonPadding } from "../constants/padding";

export type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  color?: keyof typeof ButtonColor;
  size?: keyof typeof ButtonPadding;
};

export const StyledPrimaryButton = styled.div<{
  color: keyof typeof ButtonColor;
  size: keyof typeof ButtonPadding;
}>`
  display: inline-block;
  background-color: ${({ color }) => ButtonColor[color].background};
  color: ${({ color }) => ButtonColor[color].text};
  border: solid 1px ${({ color }) => ButtonColor[color].border};
  padding: ${({ size }) => ButtonPadding[size].y} ${({ size }) => ButtonPadding[size].x};
  border-radius: 6px;
  cursor: pointer;
`;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  color = "white",
  size = "medium",
}: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton onClick={onClick} color={color} size={size}>
      {children}
    </StyledPrimaryButton>
  );
};
