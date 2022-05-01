import { useState } from "react";

const Button = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <button
      className="btn btn-primary"
      onClick={() => setClickCount(clickCount + 1)}
    >
      {clickCount !== 0 ? `You clicked ${clickCount} times` : "Click me"}
    </button>
  );
};

export default Button;
