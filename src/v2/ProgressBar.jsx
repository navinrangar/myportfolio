const ProgressBar = (props) => {
  return (
    <div className="flex flex-row-reverse sm:w-[10%] lg:w-[20%] h-[3%] rounded-full justify-end font-medium border-4 border-gray-600">
      <div
        style={{ width: props.filled + "%" }}
        className={`flex justify-end rounded-full ${props.filled} bg-blue-500 pr-5`}
      >
        {props.filled}%
      </div>
    </div>
  );
};

export default ProgressBar;
