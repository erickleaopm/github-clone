import { isValidElement } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: var(--button-bg);
  color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 0.5rem;
  padding-block: 0.25rem;
  font: var(--button);
  min-inline-size: 135px;
  gap: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none !important;
  &:hover {
    background: var(--white);
    color: var(--button);
  }
`;

function Button({ text, link, className, icon }) {
  const component = link ? 'a' : 'button';
  let IconComponent = null;

  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon;
    }
  }
  return (
    <ButtonStyled as={component} href={link} className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  );
}

export default Button;
