const useDetectCanvasCollision = () => {

  const CANVAS_MINIMUM_SIZE = 0;

  const detectCanvasCollision = (
    canvasSize, {
    xPosition,
    yPosition,
    xOffset,
    yOffset
  }) => (
    xPosition < CANVAS_MINIMUM_SIZE ||
    xPosition > canvasSize - xOffset ||
    yPosition < CANVAS_MINIMUM_SIZE ||
    yPosition > canvasSize - yOffset 
  );

  return {
    detectCanvasCollision
  };
};

export default useDetectCanvasCollision;
