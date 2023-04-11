// Code your solution in this file!
function distanceFromHqInBlocks(someVaule){
    const hq = 42
    return Math.abs(someVaule - hq)

}
function distanceFromHqInFeet(someVaule){
    const hq = distanceFromHqInBlocks(someVaule);
    return hq * 264;

}
function distanceTravelledInFeet(start, destination) {
    let distanceInBlocks = Math.abs (start - destination);
    return distanceInBlocks * 264;
}
function calculatesFarePrice(start, destination){
    let feet = Math.abs (start - destination)*264;
    if(feet <= 400){
        return 0;

    }else if(feet > 400 && feet <= 2000){
       return (feet - 400)*0.02;

    }else if(feet > 2000 && feet <= 2500){
      return 25;

    } else if (feet > 2500){
        return 'cannot travel that far';
    }

}

















