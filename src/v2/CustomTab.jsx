const CustomTab = (props) => {
  return (
    <div
      className={
        "flex flex-col items-center mt-3 py-2 px-3 bg-gray-400 font-mono border border-white cursor-pointer " +
        props.className
      }
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default CustomTab;
