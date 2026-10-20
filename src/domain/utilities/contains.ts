import { Bounds } from "../geometry";

const contains = (
  container: Bounds,
  contained: Bounds
) => {
  return (
    contained.position.x >= container.position.x &&
    contained.position.x + contained.size.width <= container.position.x + container.size.width &&
    contained.position.y >= container.position.y &&
    contained.position.y + contained.size.height <= container.position.y + container.size.height
  );
};

export default contains;
