//the function penalizes the driver if he surpasses the speed limmit
const calculateDemeritPoints = (speed); {
    const speedLimit = 70;
    const pointsPerExcessSpeed = 5;
  
    if (speed <= speedLimit) {
      return "Ok";
    }
  
    // getting a whole number
    const demeritPoints = Math.floor( pointsPerExcessSpeed);
  
    // penalty will be given  the points are more than 12
    if (demeritPoints > 12) {
      return "License suspended";
    }
  };
  