const CustomButton = (props) => {
  return (
    <button
      className={"py-2 px-3 bg-slate-300 font-mono border " + props.className}
      onClick={() => {
        if (props.openNewTab) {
          window.open(props.href, "_blank");
        } else {
          window.location.href = props.href;
        }
      }}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
