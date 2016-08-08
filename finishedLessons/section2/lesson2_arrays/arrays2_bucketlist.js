'use strict'
let bucketList = []

bucketList[0] = 'Go skydiving'
bucketList[1] = 'Hug a shark'

bucketList.push('Arm wrestle a robot', 'Travel back in time and fist-bump Abe Lincoln')
console.log(bucketList)

let dyingWish = bucketList.pop()
console.log(dyingWish)
console.log(bucketList)

let doItNow = bucketList.shift()
console.log(doItNow)
console.log(bucketList)
