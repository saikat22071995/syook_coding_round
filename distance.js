  
  function chooseBestSum(t, k, ls) {
    if (ls.length < k){
      return null;
    }
    var tripCounter = 0;
    var totalDistance = 0;
    var distances = ls;
    distances.sort(function (a,b) {
      return b - a;
    });
    console.log(distances);
    for (var i = 0; i < distances.length; i++){
      if (distances[i] < t && (distances[i] + totalDistance) < t && tripCounter <= k){
        tripCounter ++;
        totalDistance += distances[i];
      }
    }
    return totalDistance
  }
  
  
  var ls = [50, 55, 57, 58, 60];
  var k = 3;
  var t = 174;
  
  console.log(chooseBestSum(t,k,ls))
  
  
  
  
  
  
  
  
  
  
  