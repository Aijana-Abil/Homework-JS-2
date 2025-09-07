//  function reverseIt(data){
//     if (data != String(data) && data != Number(data) ){
//         return data
//     } else if (data.length === 0 ){
//          return []
//     }  else if (data === String(data)) {
//         return data.split('').reverse().join('')
//     } else if ( data === Number(data))  {
//     const number = String(data).split('').reverse().join('')
//         return Number(number)
//     } else {
//         return data
//     }
// }


// function archersReady(archers){
//   for (let i =0 ; i < archers.length ; i++){
//     if (archers[i] < 5 ){
//         return false
//     } 
//   } 
//      if (archers.length === 0){
//         return false
//   }     
//         return true
// }



function generatePairs(n) {
  let result = []
    for (let i = 0 ; i <= n ; i ++){
      for (let j = i; j <= n; j ++){
         result = result.concat([[i,j]])
      }
    }
   return result;
} 
console.log(generatePairs(2))
