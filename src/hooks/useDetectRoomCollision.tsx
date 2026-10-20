const useDetectRoomCollision = () => {

  interface CollidingObject {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  const detectLeftBoundary = (collidingObject: CollidingObject, stationaryObject: CollidingObject, tolerance: number) => (
    collidingObject.x + tolerance >= stationaryObject.x &&
    collidingObject.x - tolerance <= stationaryObject.x &&
    collidingObject.y >= stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const detectRightBoundary = (collidingObject: CollidingObject, stationaryObject: CollidingObject, tolerance: number ) => (
    collidingObject.x + tolerance >= stationaryObject.x + stationaryObject.width &&
    collidingObject.x - tolerance <= stationaryObject.x + stationaryObject.width &&
    collidingObject.y >= stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const detectTopBoundary = (collidingObject: CollidingObject, stationaryObject: CollidingObject, tolerance: number) => (
    collidingObject.y + tolerance >= stationaryObject.y &&
    collidingObject.y - tolerance <= stationaryObject.y &&
    collidingObject.x >= stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width
  );

  const detectBottomBoundary = (collidingObject: CollidingObject, stationaryObject: CollidingObject, tolerance: number) => (
    collidingObject.y + tolerance >= stationaryObject.y + stationaryObject.height &&
    collidingObject.y - tolerance <= stationaryObject.y + stationaryObject.height &&
    collidingObject.x >= stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width 
  );

  return {
    detectLeftBoundary,
    detectRightBoundary,
    detectTopBoundary,
    detectBottomBoundary
  };
};

export default useDetectRoomCollision;
