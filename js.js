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

let array = {
    "GosOrganName": "Акимат города Алматы",
    "firstRuk": {
        "firstRukName": "Жаркын",
        "firstRukSurname": "Маркабаев", 
        "position": "Заместитель"
    },
    "Rukovodstvo": [
        {
            "RukName": "Марат",
            "RukSurname": "Башмаков",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    "RukName": "Шынар",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству башмаков",
                },
                {
                    "RukName": "Фаргиза",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
                {
                    "RukName": "Жансая",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                }
            ]
        }, 
        {
            "RukName": "Ерназар",
            "RukSurname": "Кадыров",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    "RukName": "Дина",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству башмаков",
                },
                {
                    "RukName": "Саяжан",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
               
            ]
        },
        {
            "RukName": "Бахтияр",
            "RukSurname": "Калашников",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    "RukName": "Олжас",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб",
                },
                {
                    "RukName": "Асылбек",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб2",
                },
                {
                    "RukName": "Ольга",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб3",
                },
                {
                    "RukName": "Шынар",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб3",
                },
            ]
        },
        {
            "RukName": "Темирхан",
            "RukSurname": "Кондиционерович",
            "RukPosition": "Руководство",
            "subordinate_departments": []
        },
       
    ],

}




function Start() {
    getRukovodstvo(array.Rukovodstvo)
    getHorizontalLines();
    getOtdels()
    getCanvasVerticalLines();
}
Start();

function getRukovodstvo(arr) {
    let OtdelsRukovodstvo = document.querySelector(".OtdelsRukovodstvo");
    let Rukovodstvo = document.createElement("div");
    Rukovodstvo.className = "Rukovodstvo";
    let text = "";
    for(let i = 0; i < arr.length; i++) {    
        text += getOtdel(arr[i].RukName, arr[i].RukSurname, arr[i].RukPosition);
    }
    Rukovodstvo.innerHTML = text;
    OtdelsRukovodstvo.appendChild(Rukovodstvo);
}

function getHorizontalLines() {
    let OtdelsRukovodstvo = document.querySelector(".OtdelsRukovodstvo");
    let horizontalLines = document.createElement("div");
    horizontalLines.className = "horizontalLines";
    let Rukovodstvo = document.querySelector(".Rukovodstvo");
    let RukovodstvoSize = array.Rukovodstvo.length;
    
    let width = Rukovodstvo.offsetWidth;
    let text = `
        <canvas class="canvashorizontal" width="${width}" height="100"></canvas>              
    `;
    horizontalLines.innerHTML = text;
    OtdelsRukovodstvo.prepend(horizontalLines);
    setCanvasHorizontal(width, RukovodstvoSize)
}
function setCanvasHorizontal(width, RukovodstvoSize) {
    // функция рисует линии между первым рук и руководством
    let otdel = document.querySelector(".OtdelsRukovodstvo .Rukovodstvo .Otdel")
    let otdelSize = otdel.offsetWidth;   // ширина одного отдела

    let ctxHorizontal = document.querySelector('.canvashorizontal').getContext('2d');
    ctxHorizontal.beginPath();

    ctxHorizontal.lineWidth = 2; //толщина 2px
    // вертикальная линия
    let valueCenterBlock = width/2;    // центр блока
    let centerOneOtdel = otdelSize / 2; // центр ширины одного отдела
    ctxHorizontal.moveTo(valueCenterBlock, 0);
    ctxHorizontal.lineTo(valueCenterBlock, 50);
    // горизонтальная линия справа
    ctxHorizontal.lineTo(centerOneOtdel, 50);
    ctxHorizontal.moveTo(50, 0);
    let valueEndPoint = width - centerOneOtdel;  // конечная точка горизонтальной линии
    // горизонтальная линия слева
    ctxHorizontal.moveTo(valueCenterBlock, 50);
    ctxHorizontal.lineTo(valueEndPoint, 50);

    // =============== подлинии =====================
    let valueStartPoint = centerOneOtdel;
    for(let i = 0; i < RukovodstvoSize; i++) {
        ctxHorizontal.moveTo(valueStartPoint, 100);
        ctxHorizontal.lineTo(valueStartPoint, 50);
        valueStartPoint += otdelSize;
    }
    // =============== подлинии =====================
    ctxHorizontal.stroke();
}

function getOtdel(name, surname, position) {
    let status = "Otdel"
    if(name == undefined || surname == undefined || position == undefined) {
        status = "dontShow";
    }
    return `
        <div class="${status}">
            <div class="rukovodstvo">
                <div class="SR_card">
                    <p>${name}</p>
                    <p>${surname}</p>
                    <p>${position}</p>
                </div>
            </div>
        </div>
    `
}

function getNewArrayOtdels() {
    let rukLenght = array.Rukovodstvo.length;
    if(rukLenght > 0) {

        let bigSize = 0;
        for(let i = 0; i < rukLenght; i++) {
            let size = array.Rukovodstvo[i].subordinate_departments.length;
            if(bigSize < size) {
                bigSize = size;
            }
        }

        if(bigSize > 0) {
            let newArr = [];
            for(let i = 0; i < rukLenght; i++) {
                let arr = []
                newArr.push(arr)
            }
            
            for(let i = 0; i < rukLenght; i++) {
                for(let j = 0; j < bigSize; j++) {
                    let temp = array.Rukovodstvo[i].subordinate_departments[j]
                    if(temp) {
                        newArr[j].push(temp)
                    } else {
                        newArr[j].push("")
                    }
                }
            }
            return newArr
        } else {
            return []
        }
    } else {
        return []
    }

}

function getOtdels() {
    let BigBlock = document.querySelector(".BigBlock .OtdelKategories");
    let newArr = getNewArrayOtdels()
    console.log(newArr)
    
    for(let i = 0; i < newArr.length; i++) {
        let text = "";
        let secondKategory = document.createElement("div");
        if(i == 0) {
            secondKategory.className = "firstKategory";
        } else {
            secondKategory.className = "secondKategory";
        }

        for(let j = 0; j < newArr[i].length; j++) {
            if(newArr[i].length) {
                text += getOtdel(newArr[i][j].RukName, newArr[i][j].RukSurname, newArr[i][j].RukPosition);
            }
        }
        if(text) {
            secondKategory.innerHTML = text;
            console.log(secondKategory)
            
            BigBlock.appendChild(secondKategory);
        }
    }


}

function getCanvasVerticalLines() {
    let verticalLinesHeight = 50;
    let Rukovodstvo = document.querySelector(".Rukovodstvo");
    let BigBlock = document.querySelector(".BigBlock");
    let OtdelKategories = document.querySelector(".OtdelKategories");

    let verticalLines = document.createElement("div");
    verticalLines.className = "verticalLines";

    let width = Rukovodstvo.offsetWidth;
    let height = OtdelKategories.offsetHeight;
    let text = `
        <canvas class="canvasvertical" width="${width}" height="${height + verticalLinesHeight}"></canvas>             
    `;
    verticalLines.innerHTML = text;
    BigBlock.insertBefore(verticalLines, OtdelKategories)

    drawVerticalLines(verticalLinesHeight)
}


function drawVerticalLines(verticalLinesHeight) {
    // функция рисует линии между первым рук и руководством
    let otdel = document.querySelector(".BigBlock .OtdelKategories .firstKategory .Otdel")
    let otdelHeightSize = otdel.offsetHeight;   // высота одного отдела
    let halfOtdelHeightSize = otdelHeightSize / 2;
    let heightEndPoint = verticalLinesHeight + halfOtdelHeightSize;
    let firstKategory = document.querySelector(".firstKategory");
    let otdelRukWidth = document.querySelector(".BigBlock .OtdelsRukovodstvo .Rukovodstvo .Otdel").offsetWidth;
    let RukSize = array.Rukovodstvo.length;

    let secondKategory = document.querySelector(".secondKategory")
    let secondKategoryHeight = secondKategory.offsetHeight;
    let gap = secondKategoryHeight - otdelHeightSize;

    let canvasvertical = document.querySelector('.canvasvertical').getContext('2d');
    canvasvertical.beginPath();
    canvasvertical.lineWidth = 2; //толщина 5px
 
        // второй отдел
    // по вертикали
    // canvasvertical.moveTo(startPoint, heightEndPoint + nextEndPoint);
    // canvasvertical.lineTo(startPoint, heightEndPoint + nextEndPoint + nextEndPoint);
    // // вторая короткая горизонтальная линия
    // canvasvertical.moveTo(startPoint, heightEndPoint + nextEndPoint + nextEndPoint);
    // canvasvertical.lineTo(startPoint + 20, heightEndPoint + nextEndPoint + nextEndPoint);

    let startPoint = 50;
    
    let newArr = getNewArrayOtdels();
    for(let i = 0; i < 1; i++) {
        if(firstKategory) { 
            // первая линия
            // if(i == 0) {
            //     heightEndPoint = 0;
            // } else {
            //     heightEndPoint = verticalLinesHeight + halfOtdelHeightSize;
            // }
            // let nextEndPoint = gap + halfOtdelHeightSize;
            // drawLine(startPoint, heightEndPoint, nextEndPoint)
            
            
        }
    }
    let nextEndPoint = 0;
    for(let i = 0; i < newArr.length; i++) {
        startPoint = 50;
        if(i == 0) {
            heightEndPoint = 0;
            nextEndPoint = gap + halfOtdelHeightSize;
        } else if(i == 1) {
            heightEndPoint = nextEndPoint;
            nextEndPoint = heightEndPoint + gap + otdelHeightSize;
        } else {
            heightEndPoint = nextEndPoint;
            nextEndPoint = heightEndPoint + gap + otdelHeightSize;
        }
        
       for(let j = 0; j < newArr[i].length; j++) {
        if(newArr[i][j] != "" || newArr[i][j].length < 0) {
            drawLine(startPoint, heightEndPoint, nextEndPoint)
        } 
            startPoint += otdelRukWidth;
       }
    }

    function drawLine(startPoint, heightEndPoint, nextEndPoint) {
        canvasvertical.moveTo(startPoint, heightEndPoint);
        canvasvertical.lineTo(startPoint, nextEndPoint);
        //  первая короткая горизонтальная линия
        canvasvertical.moveTo(startPoint, nextEndPoint);
        canvasvertical.lineTo(startPoint + 20, nextEndPoint);
    }
    

canvasvertical.stroke();

// let canvasvertical = document.querySelector('.canvasvertical').getContext('2d');
// canvasvertical.beginPath();
// canvasvertical.lineWidth = 2; //толщина 5px
// ==========================================================
// первая линия
// первый отдел
// по горизонтали
// canvasvertical.moveTo(startPoint, 0);
// canvasvertical.lineTo(startPoint, heightEndPoint);
// //  первая короткая горизонтальная линия
// canvasvertical.moveTo(startPoint, heightEndPoint);
// canvasvertical.lineTo(startPoint + 20, heightEndPoint);

// // второй отдел
// // по вертикали
// canvasvertical.moveTo(startPoint, heightEndPoint);
// canvasvertical.lineTo(startPoint, heightEndPoint + nextEndPoint);
// // вторая короткая горизонтальная линия
// canvasvertical.moveTo(startPoint, heightEndPoint + nextEndPoint);
// canvasvertical.lineTo(startPoint + 20, heightEndPoint + nextEndPoint);

// // второй отдел
// // по вертикали
// canvasvertical.moveTo(startPoint, heightEndPoint + nextEndPoint);
// canvasvertical.lineTo(startPoint, heightEndPoint + nextEndPoint + nextEndPoint);
// // вторая короткая горизонтальная линия
// canvasvertical.moveTo(startPoint, heightEndPoint + nextEndPoint + nextEndPoint);
// canvasvertical.lineTo(startPoint + 20, heightEndPoint + nextEndPoint + nextEndPoint);

// ==========================================================







// let canvasvertical2 = document.querySelector('.canvasvertical2').getContext('2d');
// canvasvertical2.beginPath();
// canvasvertical2.lineWidth = 2; //толщина 5px
// // ================================================================
// // вертикальная линия
// canvasvertical2.moveTo(665, 0);
// canvasvertical2.lineTo(665, 100);

// //  первая короткая горизонтальная линия
// canvasvertical2.moveTo(665, 100);
// canvasvertical2.lineTo(685, 100);


// // второй отдел
// // по вертикали
// canvasvertical2.moveTo(665, 100);
// canvasvertical2.lineTo(665, 300);
// // вторая короткая горизонтальная линия
// canvasvertical2.moveTo(665, 300);
// canvasvertical2.lineTo(685, 300);


// // должности
// // по вертикали
// canvasvertical2.moveTo(665, 100);
// canvasvertical2.lineTo(665, 480);
// // вторая короткая горизонтальная линия
// canvasvertical2.moveTo(665, 480);
// canvasvertical2.lineTo(685, 480);

// // по вертикали
// canvasvertical2.moveTo(665, 100);
// canvasvertical2.lineTo(665, 650);
// // вторая короткая горизонтальная линия
// canvasvertical2.moveTo(665, 650);
// canvasvertical2.lineTo(685, 650);

// // по вертикали
// canvasvertical2.moveTo(665, 100);
// canvasvertical2.lineTo(665, 850);
// // вторая короткая горизонтальная линия
// canvasvertical2.moveTo(665, 850);
// canvasvertical2.lineTo(685, 850);
// ================================================================

}
let ctx = document.querySelector('.canvas1').getContext('2d');
ctx.beginPath();
ctx.lineWidth = 2; //толщина 5px
ctx.moveTo(150, 0);
ctx.lineTo(150, 50);
ctx.stroke();








// Горизонтальная красная линия на светло-желтом фоне
// var draw3 = new ExpangeCanvas('.canvashorizontal', 1144, 100);
// draw3.Line(150, 100, 1144, 100, 5, 'black');







// canvasvertical2.stroke();
