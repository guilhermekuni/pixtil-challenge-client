import FilterInputProps from './interface';
import * as S from './styles';

const FilterInput = ({ fieldName, ...rest }: FilterInputProps) => {
  return (
    <S.FilterInputWrapper>
      <S.FilterInput {...rest} />
    </S.FilterInputWrapper>
  );
};

export default FilterInput;
