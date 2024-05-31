interface ButtonProps {
  type: string;
  activeButton: string;
  handleClick: (value: string) => void;
}

const Button = ({ type, activeButton, handleClick }: ButtonProps) => {
  return (
    <button
      className={`${
        activeButton === type ? "text-white bg-black" : "border-2"
      } px-5 py-1 cursor-pointer`}
      onClick={() => handleClick(type)}
    >
      {type}
    </button>
  );
};

export default Button;
