let canvasvertical = document.querySelector('.canvasvertical').getContext('2d');
    canvasvertical.beginPath();

    canvasvertical.lineWidth = 10; //толщина 5px

    canvasvertical.moveTo(0, 100);
    canvasvertical.lineTo(0, 500);

    canvasvertical.stroke();