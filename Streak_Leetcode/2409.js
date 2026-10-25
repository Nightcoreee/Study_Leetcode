// Problem: Count Days Spent Together
// Time: O(1)

var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const maxArrival = Math.max(new Date(arriveAlice), new Date(arriveBob))
    const minLeave = Math.min(new Date(leaveAlice), new Date(leaveBob))
    const msInDay = 24*60*60*1000
    const deltaDays = ((minLeave-maxArrival)/msInDay)+1
    return deltaDays >= 0 ? deltaDays : 0
};


// Other solution
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const toDayOfYear = (s) => {
    const month = parseInt(s.slice(0, 2), 10);
    const day = parseInt(s.slice(3), 10);
    let total = 0;
    for (let i = 0; i < month - 1; i++) total += daysInMonth[i];
    return total + day;
  };

  const start = arriveAlice > arriveBob ? arriveAlice : arriveBob; 
  const end = leaveAlice < leaveBob ? leaveAlice : leaveBob;       

  return Math.max(0, toDayOfYear(end) - toDayOfYear(start) + 1);                

};

console.log(countDaysTogether("08-15","08-18","08-16","08-19"));