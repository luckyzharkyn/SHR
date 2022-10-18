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





let ctx = document.querySelector('.canvas1').getContext('2d');
ctx.beginPath();
ctx.lineWidth = 2; //толщина 5px
ctx.moveTo(150, 0);
ctx.lineTo(150, 50);
ctx.stroke();





let ctxHorizontal = document.querySelector('.canvashorizontal').getContext('2d');
ctxHorizontal.beginPath();
ctxHorizontal.lineWidth = 2; //толщина 5px
// вертикальная линия
ctxHorizontal.moveTo(572, 0);
ctxHorizontal.lineTo(572, 50);
// горизонтальная линия справа
ctxHorizontal.lineTo(150, 50);
ctxHorizontal.moveTo(50, 0);

// горизонтальная линия слева
ctxHorizontal.moveTo(429, 50);
ctxHorizontal.lineTo(987, 50);

// подлинии
// линия 1
ctxHorizontal.moveTo(150, 100);
ctxHorizontal.lineTo(150, 50);

// линия 2
ctxHorizontal.moveTo(429, 100);
ctxHorizontal.lineTo(429, 50);

// линия 3
ctxHorizontal.moveTo(708, 100);
ctxHorizontal.lineTo(708, 50);

// линия 4
ctxHorizontal.moveTo(987, 100);
ctxHorizontal.lineTo(987, 50);
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



let canvasvertical2 = document.querySelector('.canvasvertical2').getContext('2d');
canvasvertical2.beginPath();
canvasvertical2.lineWidth = 2; //толщина 5px
// ================================================================
// вертикальная линия
canvasvertical2.moveTo(665, 0);
canvasvertical2.lineTo(665, 100);

//  первая короткая горизонтальная линия
canvasvertical2.moveTo(665, 100);
canvasvertical2.lineTo(685, 100);


// второй отдел
// по вертикали
canvasvertical2.moveTo(665, 100);
canvasvertical2.lineTo(665, 300);
// вторая короткая горизонтальная линия
canvasvertical2.moveTo(665, 300);
canvasvertical2.lineTo(685, 300);


// должности
// по вертикали
canvasvertical2.moveTo(665, 100);
canvasvertical2.lineTo(665, 480);
// вторая короткая горизонтальная линия
canvasvertical2.moveTo(665, 480);
canvasvertical2.lineTo(685, 480);

// по вертикали
canvasvertical2.moveTo(665, 100);
canvasvertical2.lineTo(665, 650);
// вторая короткая горизонтальная линия
canvasvertical2.moveTo(665, 650);
canvasvertical2.lineTo(685, 650);

// по вертикали
canvasvertical2.moveTo(665, 100);
canvasvertical2.lineTo(665, 850);
// вторая короткая горизонтальная линия
canvasvertical2.moveTo(665, 850);
canvasvertical2.lineTo(685, 850);
// ================================================================

canvasvertical2.stroke();
