// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let hqBlock = 42;
  
   return Math.abs(block - hqBlock)
  
}

function distanceFromHqInFeet(block) {
  
  return  (distanceFromHqInBlocks(block)*264)
  
}

function distanceTravelledInFeet(block1, block2) {
  
  return ((Math.abs(block1 - block2)) * 264)
  
}

function calculatesFarePrice(start, destination) {
  
  if  (distanceTravelledInFeet(start, destination) > 2500) {
    
    return "cannot travel that far"
    
  }
}