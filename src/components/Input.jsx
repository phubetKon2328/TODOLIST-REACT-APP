// eslint-disable-next-line react/prop-types
export default function Input({ onValue, ...props }) {
  return (
    <input
      className="w-full h-11 pl-10 shadow-md border-none rounded-lg outline-0 text- bg-white border-gray-500 active:scale-95"
      type="text"
      id="input"
      autoComplete="off"
      placeholder="Task"
      {...props}
      value={onValue}
    />
  );
}
