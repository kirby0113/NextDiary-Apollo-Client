import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../constants/color";
import { FontSize } from "../constants/font";
import { ButtonPadding } from "../constants/padding";

export type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  color?: keyof typeof ButtonColor;
  buttonSize?: keyof typeof ButtonPadding;
  fontSize?: keyof typeof FontSize;
};

export const StyledPrimaryButton = styled.div<{
  color: keyof typeof ButtonColor;
  buttonSize: keyof typeof ButtonPadding;
  fontSize: keyof typeof FontSize;
}>`
  display: inline-block;
  background-color: ${({ color }) => ButtonColor[color].background};
  color: ${({ color }) => ButtonColor[color].text};
  border: solid 1px ${({ color }) => ButtonColor[color].border};
  padding: ${({ buttonSize }) => ButtonPadding[buttonSize].y} ${({ buttonSize }) => ButtonPadding[buttonSize].x};
  font-size: ${({ fontSize }) => FontSize[fontSize]};
  border-radius: 6px;
  cursor: pointer;
`;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  color = "white",
  buttonSize = "medium",
  fontSize = "medium",
}: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton onClick={onClick} color={color} buttonSize={buttonSize} fontSize={fontSize}>
      {children}
    </StyledPrimaryButton>
  );
};
