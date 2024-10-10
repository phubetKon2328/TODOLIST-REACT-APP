/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import BIN_SVG from "../assets/bin.svg";
export default function Button({
  addCss,
  onSelect,
  children,
  onDel,
  delCss,
  tooltipCss,
  ...props
}) {
  if (delCss) {
    return (
      <button className={delCss} {...props} onClick={onDel}>
        <img className="w-2/5" src={BIN_SVG} />
        <span className={tooltipCss}>Delete</span>
      </button>
    );
  }
  return (
    // eslint-disable-next-line react/prop-types
    <button className={addCss} onClick={onSelect} {...props}>
      {children}
    </button>
  );
}
