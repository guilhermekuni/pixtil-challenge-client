import FilterInputProps from './interface';
import * as S from './styles';

const FilterInput = ({
  customSize = 'md',
  ...inputProps
}: FilterInputProps) => {
  return <S.StyledFilterInput customSize={customSize} {...inputProps} />;
};

export default FilterInput;
