const Button = ({ value, dark, addClass, onClick }) => {
  const cls = addClass === undefined! ? addClass : "";
  return (
    <>
      <button
        className={`${
          dark
            ? "bg-func-button-color text-white"
            : "bg-digits-button-color text-black"
        } ${cls} w-[88px] h-[88px] rounded-[352px] bg-digits-button-color`}
        type="button"
        value={value}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
