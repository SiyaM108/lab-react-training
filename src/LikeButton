import { useState } from "react";

const colors = ['purple','blue','green','yellow','orange','red'];

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      style={{ backgroundColor: colors[count % colors.length] }}
      onClick={() => setCount(count + 1)}
    >
      {count} Likes
    </button>
  );
}

export default LikeButton;
