import { useState } from "react";
import { Button } from "@chakra-ui/react";

const MyButton = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <Button colorScheme="twitter" onClick={() => setClickCount(clickCount + 1)}>
      {clickCount !== 0 ? `You clicked ${clickCount} times` : "Click me"}
    </Button>
  );
};

export default MyButton;
