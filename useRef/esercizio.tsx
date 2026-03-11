import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <label htmlFor="focusable-input">Input Auto-focus: </label>
      <input ref={inputRef} id="focusable-input" type="text" />
    </div>
  );
}