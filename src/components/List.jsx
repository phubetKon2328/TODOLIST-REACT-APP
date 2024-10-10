/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import Button from "./Button";
import EDIT_SVG from "../assets/edit.svg";
export default function List({
  children,
  rowId,
  onDel,
  delCss,
  tooltipCss,
  ...props
}) {
  return (
    <div className="text-left flex items-center justify-around" {...props}>
      <li>{children}</li>
      <Button
        onDel={() => onDel(rowId)}
        delCss={delCss}
        tooltipCss={tooltipCss}
      ></Button>

      <button type="button">
        <img src={EDIT_SVG} alt="" />
      </button>
    </div>
  );
}
