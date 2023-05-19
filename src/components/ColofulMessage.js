import { StrictMode } from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, //プロパティ名と値が同じ名前の時は省略できる
    fontSize: "18px",
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
