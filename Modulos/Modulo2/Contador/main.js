window.onload = function() {
   console.log('hola mundo');

   var counter = 0;

   var counterElement = document.getElementById("counter");
   var btnSub = document.getElementById("btnSub");
   var btnRes = document.getElementById("btnRes");
   var btnAdd = document.getElementById("btnAdd");
   
   function subtraction() {
      counter -= 1;
      counterElement.innerHTML = counter;
   }

   function add() {
      counter += 1;
      counterElement.innerHTML = counter;
   }

   function reset() {
      counterElement.innerHTML = 0;
      counter = 0;
   }

   btnSub.addEventListener("click", subtraction);
   btnAdd.addEventListener("click", add);
   btnRes.addEventListener("click", reset);
}