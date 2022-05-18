import React from "react";
import styled from "styled-components";
import { FontSize } from "../constants/font";

export type LabelProps = {
  htmlFor?: string & String;
  children?: React.ReactNode;
  fontSize?: keyof typeof FontSize;
};

const StyledLabel = styled.label<{ htmlFor?: string & String; fontSize: keyof typeof FontSize }>`
  font-size: ${({ fontSize }) => FontSize[fontSize]};
`;

export const Label: React.FC<LabelProps> = ({ htmlFor, children, fontSize = "medium" }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} fontSize={fontSize}>
      {children}
    </StyledLabel>
  );
};
