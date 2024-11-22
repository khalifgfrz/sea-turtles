import { ChangeEventHandler } from "react";

type InputProps = {
  input: {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type?: string;
    name?: string;
    placeholder?: string;
    autocomplete?: string;
    value?: string;
    readOnly?: boolean;
  };
  isToggler?: boolean;
  onTogglerHandler?: (e: React.MouseEvent) => void;
};

function Input(props: InputProps) {
  const { input } = props;

  return (
    <input
      className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-3 text-xs md:text-sm"
      type={input.type}
      id={input.name}
      name={input.name}
      value={input.value}
      placeholder={input.placeholder}
      autoComplete={input.autocomplete}
      onChange={input.onChange}
      readOnly={input.readOnly}
    />
  );
}

export default Input;
