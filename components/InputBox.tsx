import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import { Colors } from "../constants/color";
import { FontSize } from "../constants/font";
import { InputPadding } from "../constants/padding";

export type InputBoxProps = {
  boxSize?: keyof typeof InputPadding;
  fontSize?: keyof typeof FontSize;
  id?: string & String;
  value: string;
  onChange: (value: string) => void;
};

const StyledInputBox = styled.input<{ boxSize: keyof typeof InputPadding; fontSize: keyof typeof FontSize }>`
  border: solid 1px ${Colors["black"]};
  padding: ${({ boxSize }) => InputPadding[boxSize].y} ${({ boxSize }) => InputPadding[boxSize].x};
  font-size: ${({ fontSize }) => FontSize[fontSize]};
  width: 100%;
  border-radius: 6px;
  letter-spacing: 1px;
`;

export const InputBox: React.FC<InputBoxProps> = ({
  boxSize = "medium",
  fontSize = "medium",
  id,
  value,
  onChange,
}: InputBoxProps) => {
  return (
    <StyledInputBox
      boxSize={boxSize}
      fontSize={fontSize}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
