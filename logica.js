window.addEventListener('load', function () {
   let animationObjects = document.querySelectorAll('#animation');
   let infoA = document.getElementById('info-a');
   let onOffA = document.getElementById('on-off-a');
   let infoB = document.getElementById('info-b');
   let onOffB = document.getElementById('on-off-b');
   let infoC = document.getElementById('info-c');
   let onOffC = document.getElementById('on-off-c');
   let infoD = document.getElementById('info-d');
   let onOffD = document.getElementById('on-off-d');

   document.getElementById('animation').addEventListener('mouseover', function () {
      animationObjects.forEach(function (element) {
         element.classList.toggle('fa-bounce');
         setTimeout(function () {
            element.classList.toggle('fa-bounce');
         }, 2000);
      });
   });

   document.getElementById('on-off-a').addEventListener('click', function () {
      let arrayOnOff = [onOffB, onOffC, onOffD];
      let arrayInfo = [infoB, infoC, infoD];
      infoA.style.zIndex = 1;
      onOffA.style.color = 'black';
      cambioEstilo(arrayInfo, arrayOnOff);
   });

   document.getElementById('on-off-b').addEventListener('click', function () {
      let arrayOnOff = [onOffA, onOffC, onOffD];
      let arrayInfo = [infoA, infoC, infoD];
      infoB.style.zIndex = 1;
      onOffB.style.color = 'black';
      cambioEstilo(arrayInfo, arrayOnOff);
   });

   document.getElementById('on-off-c').addEventListener('click', function () {
      let arrayOnOff = [onOffA, onOffB, onOffD];
      let arrayInfo = [infoA, infoB, infoD];
      infoC.style.zIndex = 1;
      onOffC.style.color = 'black';
      cambioEstilo(arrayInfo, arrayOnOff);
   });

   document.getElementById('on-off-d').addEventListener('click', function () {
      let arrayOnOff = [onOffA, onOffB, onOffC];
      let arrayInfo = [infoA, infoB, infoC];
      infoD.style.zIndex = 1;
      onOffD.style.color = 'black';
      cambioEstilo(arrayInfo, arrayOnOff);
   });
});

const cambioEstilo = function (arrayInfo, arrayOnOff) {
   arrayInfo.forEach((element) => {
      element.style.zIndex = 0;
   });
   arrayOnOff.forEach(function (element) {
      element.style.color = 'rgb(197, 197, 197)';
   });
};
