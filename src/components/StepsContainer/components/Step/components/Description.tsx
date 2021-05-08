import React from "react";
import { space, SpaceProps, typography, TypographyProps } from "styled-system";
import styled from "@emotion/styled";

interface IDescriptionBase
  extends TypographyProps,
    SpaceProps,
    React.HTMLAttributes<HTMLParagraphElement> {}

const DescriptionBase = styled.p<IDescriptionBase>`
  ${space};
  ${typography};
`;

const Description: React.FC = ({ children }) => (
  <DescriptionBase fontSize={0} p={0} my={0}>
    {children}
  </DescriptionBase>
);

export default Description;
