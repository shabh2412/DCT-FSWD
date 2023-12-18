export const Button = ({
  handleClick,
  colorCode = "btn-primary",
  children
}) => {
  return (
    <button
      className={"btn px-3 border-0 rounded-0 " + colorCode}
      onClick={handleClick}
    >
      <small>{children}</small>
    </button>
  );
};
