window.onload = function() {
   console.log('hola mundo');

   var counter = 0;

   var counterElement = document.getElementById("counter");
   var btnSub = document.getElementById("btnSub");
   var btnRes = document.getElementById("btnRes");
   var btnAdd = document.getElementById("btnAdd");
   
   function op(num) {
      // Solución 1
      counter += num;
      counterElement.innerHTML = counter;
      // Solución 2
      // if(num == 2) {
      //    counter -= 1;
      // }else if(num == 1) {
      //    counter += 1;
      // }else if(num == 3) {
      //    counter *= 2;
      // }else if(num == 4) {
      //    counter = counter / 2;
      // }else if(num == 5) {
      //    counter = Math.sqrt(counter);
      // }else{
      //    counter = 0;
      // }
      // Solución 3
      // switch (num) {
      //    case 2:
      //       counter -= 1;
      //       break;
      //    case 3:
      //       counter *= 2;
      //       break;
      //    case 4:
      //       counter = counter / 2;
      //       break;
      //    case 5:
      //       counter = Math.sqrt(counter);
      //       break;
      //    case 1:
      //       counter += 1;
      //       break;
      //    default:
      //       counter = 0;
      //       break;
      // }
   }

   function reset() {
      counterElement.innerHTML = 0;
      counter = 0;
   }

   btnSub.addEventListener("click", function() {
      op(-1);
   });
   btnAdd.addEventListener("click", function() {
      op(1);
   });
   btnRes.addEventListener("click", reset);
}