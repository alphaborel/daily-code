// Given two arrays, one with items to remove from the second:

function arrayDiff(a,b) {
 return b.filter(element => !a.includes(element));
}

arrayDiff ([5],[1,2,5,17])