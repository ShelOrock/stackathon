const useDetectCanvasCollision = () => {

  const CANVAS_MINIMUM_SIZE = 0;

  const detectCanvasCollision = (
    canvasSize,
    collidingObject, {
    xOffset,
    yOffset
  }) => (
    collidingObject.x < CANVAS_MINIMUM_SIZE ||
    collidingObject.x > canvasSize - xOffset ||
    collidingObject.y < CANVAS_MINIMUM_SIZE ||
    collidingObject.y > canvasSize - yOffset 
  );

  return {
    detectCanvasCollision
  };
};

export default useDetectCanvasCollision;
