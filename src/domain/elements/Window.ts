import { Element } from ".";

interface Window extends Element {
  id: number;
  type: "window";
}

export default Window;
