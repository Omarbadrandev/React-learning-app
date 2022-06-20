import React from "react";

export const InputGroup = (props: {
  onButtonClicked: () => void;
  textRef: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <div>
      <input type="text" ref={props.textRef} />
      <button onClick={props.onButtonClicked}>Add Todo</button>
    </div>
  );
};
