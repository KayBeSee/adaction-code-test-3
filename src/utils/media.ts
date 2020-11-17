import { css, FlattenSimpleInterpolation } from 'styled-components';

export const mobile = (inner: FlattenSimpleInterpolation) => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner};
  }
`;