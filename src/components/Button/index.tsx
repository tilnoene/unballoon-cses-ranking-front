import { ContainerButton } from './styles';

const Button = ({
  onClick = undefined,
  iconButton = false,
  children = undefined,
}: {
  onClick?: any;
  iconButton?: boolean;
  children?: any;
}) => {
  return (
    <ContainerButton iconButton={iconButton} onClick={onClick}>
      {children}
    </ContainerButton>
  );
};

export default Button;
