import { Dispatch, SetStateAction } from "react";

interface IProps {
  inputValues: ICommonAuthValues;
  setInputValues: Dispatch<SetStateAction<ICommonAuthValues>>;
}

interface IUseOnChange {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useOnChange({ inputValues, setInputValues }: IProps): IUseOnChange {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  return { onChange };
}

export default useOnChange;
