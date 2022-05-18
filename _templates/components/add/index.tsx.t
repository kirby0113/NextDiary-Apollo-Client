---
to: components/<%= name %>.tsx
unless_exists: true
---
import React from "react";
import styled from "styled-components";

export type <%= name %>Props =  {
  children: React.ReactNode;
}

export const Styled<%= name %> = styled.div`
  background-color: #ff0000;
`;


export const <%= name %>:React.FC<<%= name %>Props> = ({ children }: <%= name %>Props) => {
  return (
    <Styled<%= name %>>
    {children}
    </Styled<%= name %>>
  );
};
