import ButtonProps from './interface';
import * as S from './styles';

const Button = ({
  isPrimary = false,
  children,
  ...buttonProps
}: ButtonProps) => (
  <S.StyledButton isPrimary={isPrimary} {...buttonProps}>
    {children}
  </S.StyledButton>
);

export default Button;
