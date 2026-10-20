import { Element } from ".";
import { Bounds } from "../geometry";

interface Room extends Element {
  id: number;
  type: "room";
  name: string;
  boundary: Bounds;
}

export default Room;
