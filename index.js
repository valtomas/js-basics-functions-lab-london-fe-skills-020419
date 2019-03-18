// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let hqBlock = 42;
  
   return Math.abs(block - hqBlock)
  
}

function distanceFromHqInFeet(block) {
  
  return  (distanceFromHqInBlocks(block)*264)
  
}