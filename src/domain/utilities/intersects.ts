import { Bounds } from "../geometry";

const intersects = (
  objectA: Bounds,
  objectB: Bounds
) => {
  return (
    objectA.position.x + objectA.size.width >= objectB.position.x &&
    objectA.position.x <= objectB.position.x + objectB.size.width && 
    objectA.position.y + objectA.size.height >= objectB.position.y &&
    objectA.position.y <= objectB.position.y + objectB.size.height
  );
};

export default intersects;
