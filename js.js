function ExpangeCanvas(canvasid, width, height)
{
	// ------------------
	// Переменные ширины и высоты
	// Хотя canvas ставит значения по-умолчанию 300 на 150
	// ------------------
	width = width || 300;
	height = height || 150;
	
	
	// ------------------
	// Находим нужный канвас
	// ------------------
	this.canvas = document.querySelector(canvasid);
	this.obCanvas = null;
	
	if (this.canvas != null)
	{
		// ------------------
		// Устанавливаем размеры канваса
		// ------------------
		this.canvas.width = width;
		this.canvas.height = height;
		
		
		// ------------------
		// Контекст канваса
		// ------------------
		this.obCanvas = this.canvas.getContext('2d');
	}
	
	
	// ------------------
	// Рисуем линию
	// ------------------
	this.Line = function(x1, y1, x2, y2, linewidth, strokestyle)
	{
		if (this.obCanvas == null) return false;
		
		this.obCanvas.beginPath();
		this.obCanvas.lineWidth = linewidth;
		this.obCanvas.strokeStyle = strokestyle;
		this.obCanvas.moveTo(x1, y1);
		this.obCanvas.lineTo(x2, y2);
		this.obCanvas.stroke();
	}
	
	
	// ------------------
	// Функция заливает канвас цветом
	// ------------------
	this.SetBgColor = function(bgcolor)
	{
		if (this.obCanvas == null) return false;
		
		this.obCanvas.fillStyle = bgcolor;
		this.obCanvas.fillRect(0, 0, this.obCanvas.canvas.width, this.obCanvas.canvas.height);
	}
}

let canvas = document.querySelectorAll('.canvas1');
for(let i = 0; i < canvas.length; i++) {
    let ctx = canvas[i].getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = 2; //толщина 5px
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 50);
    ctx.stroke();
}



let ctxHorizontal = document.querySelector('.canvashorizontal').getContext('2d');
ctxHorizontal.beginPath();
ctxHorizontal.lineWidth = 2; //толщина 5px
ctxHorizontal.moveTo(1000, 0);
ctxHorizontal.lineTo(150, 0);
ctxHorizontal.lineTo(150, 100);
ctxHorizontal.moveTo(1000, 0);
ctxHorizontal.lineTo(1000, 50);
ctxHorizontal.moveTo(715, 0);
ctxHorizontal.lineTo(715, 50);
ctxHorizontal.moveTo(430, 0);
ctxHorizontal.lineTo(430, 50);
ctxHorizontal.stroke();


// Горизонтальная красная линия на светло-желтом фоне
// var draw3 = new ExpangeCanvas('.canvashorizontal', 1144, 100);
// draw3.Line(150, 100, 1144, 100, 5, 'black');

let canvasvertical = document.querySelector('.canvasvertical').getContext('2d');
canvasvertical.beginPath();
canvasvertical.lineWidth = 2; //толщина 5px
// ==========================================================
// первая линия
// первый отдел
// по горизонтали
canvasvertical.moveTo(50, 0);
canvasvertical.lineTo(50, 100);
//  первая короткая горизонтальная линия
canvasvertical.moveTo(50, 100);
canvasvertical.lineTo(70, 100);

// второй отдел
// по вертикали
canvasvertical.moveTo(50, 100);
canvasvertical.lineTo(50, 300);
// вторая короткая горизонтальная линия
canvasvertical.moveTo(50, 300);
canvasvertical.lineTo(70, 300);
// ==========================================================



// ==========================================================
// вторая
// первый отдел
// по горизонтали
canvasvertical.moveTo(335, 0);
canvasvertical.lineTo(335, 100);
//  первая короткая горизонтальная линия
canvasvertical.moveTo(335, 100);
canvasvertical.lineTo(355, 100);

// второй отдел
// по вертикали
canvasvertical.moveTo(335, 100);
canvasvertical.lineTo(335, 300);
// вторая короткая горизонтальная линия
canvasvertical.moveTo(335, 300);
canvasvertical.lineTo(355, 300);
// ==========================================================

// ==========================================================
// третья
// первый отдел
// по горизонтали
canvasvertical.moveTo(620, 0);
canvasvertical.lineTo(620, 100);
//  первая короткая горизонтальная линия
canvasvertical.moveTo(620, 100);
canvasvertical.lineTo(640, 100);

// второй отдел
// по вертикали
canvasvertical.moveTo(620, 100);
canvasvertical.lineTo(620, 300);
// вторая короткая горизонтальная линия
canvasvertical.moveTo(620, 300);
canvasvertical.lineTo(640, 300);
// ==========================================================

// ==========================================================
// четвертая
// первый отдел
// по горизонтали
canvasvertical.moveTo(905, 0);
canvasvertical.lineTo(905, 100);
//  первая короткая горизонтальная линия
canvasvertical.moveTo(905, 100);
canvasvertical.lineTo(925, 100);

// второй отдел
// по вертикали
canvasvertical.moveTo(905, 100);
canvasvertical.lineTo(905, 300);
// вторая короткая горизонтальная линия
canvasvertical.moveTo(905, 300);
canvasvertical.lineTo(925, 300);
// ==========================================================



// рисуем подотдел
// ==========================================================
// линия подотдела
// первый отдел
// по горизонтали
canvasvertical.moveTo(905, 0);
canvasvertical.lineTo(905, 100);
//  первая короткая горизонтальная линия
canvasvertical.moveTo(905, 100);
canvasvertical.lineTo(925, 100);

// второй отдел
// по вертикали
canvasvertical.moveTo(905, 100);
canvasvertical.lineTo(905, 300);
// вторая короткая горизонтальная линия
canvasvertical.moveTo(905, 300);
canvasvertical.lineTo(925, 300);
// ==========================================================
canvasvertical.stroke();



let canvashorizontal2 = document.querySelector('.canvashorizontal2').getContext('2d');
canvashorizontal2.beginPath();
canvashorizontal2.lineWidth = 2; //толщина 5px
// вертикальная линия
canvashorizontal2.moveTo(429, 0);
canvashorizontal2.lineTo(429, 50);
// горизонтальная линия справа
canvashorizontal2.lineTo(150, 50);
canvashorizontal2.moveTo(50, 0);

// горизонтальная линия слева
canvashorizontal2.moveTo(429, 50);
canvashorizontal2.lineTo(708, 50);

// подлинии
// линия 1
canvashorizontal2.moveTo(150, 100);
canvashorizontal2.lineTo(150, 50);

// линия 2
canvashorizontal2.moveTo(429, 100);
canvashorizontal2.lineTo(429, 50);

// линия 3
canvashorizontal2.moveTo(708, 100);
canvashorizontal2.lineTo(708, 50);
canvashorizontal2.stroke();
