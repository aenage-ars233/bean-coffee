import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.buttonBgColor};
    color: ${(props) => props.theme.buttonTextColor};
    font-weight: 700;
    padding: 14px 27px;
    border-radius: 24px;
    box-shadow: 0 6px 12px 0 rgba(249, 192, 106, 0.22);

    &:hover {
      background-color: #fdb64bff;
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${(props) => props.theme.whiteTextColor};
    text-decoration: underline;
    font-size: 14px;
    font-weight: 500;
  `,
  big: css`
    background-color: ${(props) => props.theme.buttonBgColor};
    color: ${(props) => props.theme.buttonTextColor};
    padding: 29px;
    border-radius: 16px;

    &:hover {
      background-color: #fdb64bff;
    }

    &:disabled {
      background-color: #fcd8a2ff;
      cursor: default;
    }
  `,
  third: css`
    background-color: ${(props) => props.theme.buttonBgColor};
    color: ${(props) => props.theme.buttonTextColor};
    padding: 16px 24px;
    border-radius: 4px;
    font-size: 22px;
    font-weight: 700;
    margin-left: -4px;

    &:hover {
      background-color: #faa92fff;
    }
  `,
};

export const StyledButton = styled.button`
  display: inline-block;
  font-weight: 500;
  font-size: ${(props) => props.$fontSize || 16}px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  ${({ variant }) => variants[variant || "primary"]}
`;