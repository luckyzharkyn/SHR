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

// Горизонтальная красная линия на светло-желтом фоне
// var draw3 = new ExpangeCanvas('.canvashorizontal', 1144, 100);
// draw3.Line(150, 100, 1144, 100, 5, 'black');

let array = {
    "GosOrganName": "Акимат города Алматы",
    "firstRuk": {
        "firstRukName": "Жаркын",
        "firstRukSurname": "Маркабаев", 
        "position": "Заместитель"
    },
    "Rukovodstvo": [
        {
            id: getId(),
            "RukName": "Марат",
            "RukSurname": "Башмаков",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    id: getId(),
                    "RukName": "Шынар",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству башмаков",
                    "subordinate_departments" : [
                        {
                            id: getId(),
                            "RukName": "Шынар1",
                            "RukSurname": "Акмаралкызы",
                            "RukPosition": "ещё один отдел",
                            "subordinate_departments" : [
                                {
                                    id: getId(),
                                    "RukName": "Шынар5",
                                    "RukSurname": "Акмаралкызы",
                                    "RukPosition": "ещё один отдел",
                                    "subordinate_departments" : [
                                        {
                                            id: getId(),
                                            "RukName": "Шынар5",
                                            "RukSurname": "Акмаралкызы",
                                            "RukPosition": "ещё один отдел",
                                            
                                        }
                                    ],
                                }
                            ],
                        }
                    ],
                    "employees": [
                        {
                            id: getId(),
                            "RukName": "Шынар2",
                            "RukSurname": "Акмаралкызы",
                            "RukPosition": "работник",
                        },
                        {
                            id: getId(),
                            "RukName": "Шынар2",
                            "RukSurname": "Акмаралкызы",
                            "RukPosition": "работник",
                        }
                    ]
                },
                {
                    id: getId(),
                    "RukName": "Фаргиза",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
                {   
                    id: getId(),
                    "RukName": "Жансая",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
                {
                    id: getId(),
                    "RukName": "Жансая",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                }
            ]
        }, 
        {
            id: getId(),
            "RukName": "Ерназар",
            "RukSurname": "Кадыров",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    id: getId(),
                    "RukName": "Дина",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству башмаков",
                },
                {
                    id: getId(),
                    "RukName": "Саяжан",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
                {
                    id: getId(),
                    "RukName": "Саяжан",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
               
            ]
        },
        {
            id: getId(),
            "RukName": "Бахтияр",
            "RukSurname": "Калашников",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    id: getId(),
                    "RukName": "Олжас",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб",
                },
                {
                    id: getId(),
                    "RukName": "Асылбек",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб2",
                },
                {
                    id: getId(),
                    "RukName": "Ольга",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб3",
                },
                {
                    id: getId(),
                    "RukName": "Шынар",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб3",
                },
            ]
        },
        {
            id: getId(),
            "RukName": "Темирхан",
            "RukSurname": "Кондиционерович",
            "RukPosition": "Руководство",
            "subordinate_departments": []
        },
    ],

}
// ============== global params =========
let newArray = getNewArrayOtdels()

let verticalLinesHeight = 50;
// ============== global params =========

function Start() {
    getRukovodstvo(array.Rukovodstvo)
    getHorizontalLines();
    getOtdels()
    getCanvasVerticalLines();
    activeClass()
    RukovodstvoshowAllElements()
}
Start();


let ctx = document.querySelector('.canvas1').getContext('2d');
ctx.beginPath();
ctx.lineWidth = 2; //толщина 5px
ctx.moveTo(150, 0);
ctx.lineTo(150, 50);
ctx.stroke();

function getRukovodstvo(arr) {
    let OtdelsRukovodstvo = document.querySelector(".OtdelsRukovodstvo");
    let Rukovodstvo = document.createElement("div");
    Rukovodstvo.className = "Rukovodstvo";
    let text = "";
    for(let i = 0; i < arr.length; i++) {    
        text += getOtdel(arr[i].id, arr[i].RukName, arr[i].RukSurname, arr[i].RukPosition);
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
function getOtdel(id, name, surname, position) {
    let textId = "";
    let status = "Otdel"
    if(id != undefined) {
        textId = `id=${id}`
    }
    if(name == undefined || surname == undefined || position == undefined) {
        status = "dontShow";
    }
    return `
        <div class="${status}" ${textId}>
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
function getAllOtdels(id, name, surname, position, subordinate_departments, employees) {
    let textId = "";
    let status = "AllOtdels"
    if(id != undefined) {
        textId = `id=${id}`
    }
    if(name == undefined || surname == undefined || position == undefined) {
        status = "dontShow";
    }

    let textSubsubordinate_departments = "";
    if(subordinate_departments != undefined) {
        for(let i = 0; i < subordinate_departments.length; i++) {
            console.log(subordinate_departments.length)
            let temp = getAllOtdels(subordinate_departments[i].id, subordinate_departments[i].RukName, subordinate_departments[i].RukSurname, subordinate_departments[i].RukPosition, subordinate_departments[i].subordinate_departments, subordinate_departments[i].employees)
            textSubsubordinate_departments += temp;
        }
    }

    let textEmployee = ""
    if(employees != undefined) {
        for(let i = 0; i < employees.length; i++) {
            textEmployee += getEmployee(employees[i].id, employees[i].RukName, employees[i].RukSurname, employees[i].RukPosition)
        }
    }
    let tempId = getId()
    return `
        <div class="${status}" id="${tempId}">
            <div class="Otdel" ${textId}>
                <div class="rukovodstvo">
                    <div class="SR_card">
                        <p>${name}</p>
                        <p>${surname}</p>
                        <p>${position}</p>
                    </div>
                </div>
            </div>
            <div class="PodCategories slowlyShow">
                <div class="subcategories">
                    ${textSubsubordinate_departments}
                </div>
                <div class="employees">
                    ${textEmployee}
                </div>
            </div>
        </div>
    `
}

function getEmployee(id, name, surname, position) {
    return `
        <div class="Employee" ${id}>
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
                text += getAllOtdels(newArr[i][j].id, newArr[i][j].RukName, newArr[i][j].RukSurname, newArr[i][j].RukPosition, newArr[i][j].subordinate_departments, newArr[i][j].employees);
            }
        }
        if(text) {
            secondKategory.id = getId()
            secondKategory.innerHTML = text;
            
            BigBlock.appendChild(secondKategory);
        }
    }


}

function getCanvasVerticalLines(modifyArray) {
    let Rukovodstvo = document.querySelector(".Rukovodstvo");
    let BigBlock = document.querySelector(".BigBlock");
    let OtdelKategories = document.querySelector(".OtdelKategories");

    let verticalLinesDiv = document.createElement("div");
    verticalLinesDiv.className = "verticalLinesDiv";

    let width = Rukovodstvo.offsetWidth;
    let height = OtdelKategories.offsetHeight;
    let text = `
        <div class="verticalLines">
            <canvas class="canvasvertical" width="${width}" height="${height + verticalLinesHeight}"></canvas>             
        </div>
    `;
    verticalLinesDiv.innerHTML = text;
    BigBlock.insertBefore(verticalLinesDiv, OtdelKategories)

    drawVerticalLines(modifyArray)
}


function drawVerticalLines(modifyArray=newArray) {
    // функция рисует линии между первым рук и руководством
    let otdel = document.querySelector(".BigBlock .OtdelKategories .firstKategory .AllOtdels .Otdel")
    let otdelHeightSize = otdel.offsetHeight;   // высота одного отдела
    let halfOtdelHeightSize = otdelHeightSize / 2; // половина высоты отдела
    let heightEndPoint = verticalLinesHeight + halfOtdelHeightSize; // конечная точка для первого отдела(середина отдела)
    let otdelRukWidth = document.querySelector(".BigBlock .OtdelsRukovodstvo .Rukovodstvo .Otdel").offsetWidth; // ширина отдела

    let firstKategory = document.querySelector(".firstKategory")
    let firstKategoryHeight = firstKategory.offsetHeight + verticalLinesHeight;   // высота блока firstKategory
    let gap = 50  // зазор между отделами(вертикально)

    let canvasvertical = document.querySelector('.canvasvertical').getContext('2d');
    canvasvertical.beginPath();
    canvasvertical.lineWidth = 2; //толщина 2px
 
    let startPoint = 50;
    
    let newArr = modifyArray;    // переменная равно переданному массиву. Если ничего не передано, берется значение по умолч

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
}


function activeClass() {
    let otdels = document.querySelectorAll(".OtdelKategories .Otdel");
    for(let otdel of otdels) {
        otdel.addEventListener("click", function() {
            // ================== скрытие и показ элемента ========================
            let thisId = this.parentElement.parentElement.id;
            let bool2 = false;
            let OtdelKategories = document.querySelector(".OtdelKategories").children;
            let PodCategories = document.querySelectorAll(".PodCategories");

            for(let elem of OtdelKategories) {
                if(elem.classList.contains("slowlyShow")) {
                    if(elem.id === thisId) {
                        bool2 = true;
                        continue
                    }
                    if(bool2) {
                        elem.classList.add("slowlyShow")
                        for(let el of PodCategories) {
                            el.classList.add("slowlyShow")
                        }
                        setTimeout(() => {
                            elem.className = "slowlyShow"
                            for(let el of PodCategories) {
                                el.classList.className = "slowlyShow"
                            }
                        }, 500);
                    }
                } else {
                    if(elem.id === thisId) {
                        bool2 = true;
                        continue;
                    }
                    if(bool2) {
                        elem.classList.add("slowlyShow")
                        for(let el of PodCategories) {
                            el.classList.add("slowlyShow")
                        }
                        setTimeout(() => {
                            elem.className = "slowlyShow"
                            for(let el of PodCategories) {
                                el.classList.className = "slowlyShow"
                            }
                        }, 500);
                    }
                }
            }
         
            if(otdel.id == this.id) {
                let thisPodCategories = this.nextElementSibling;
                if(thisPodCategories.classList.contains("slowlyShow")) {
                    thisPodCategories.classList.remove("slowlyShow")
                    thisPodCategories.classList.add("slowlyView")
                    thisPodCategories.classList.add("PodCategories")
                }

            }
            let AllOtdelsid = this.parentElement.id;
            console.log(AllOtdelsid)
            let parent = this.parentElement.parentElement;
            let childrens = parent.children;
            for(let i = 0; i < childrens.length; i++) {
                if(childrens[i].classList.contains("AllOtdels")) {
                    if(childrens[i].id !== AllOtdelsid) {
                    if(!childrens[i].classList.contains("slowlyShow")) {
                        childrens[i].classList.add("dontShow")
                    }
                }
                }
            }
            // ================== скрытие и показ элемента ========================

            // ================== регуляровка линии =================
            let tempArray = [];
            let bool = false;
            for(let i = 0; i < newArray.length; i++) {
                if(bool) {
                    tempArray.push([]);
                } else {
                    for(let j = 0; j < newArray[i].length; j++) {
                        if(newArray[i][j].id === otdel.id) {
                            bool = true;    
                        }
                    }
                    tempArray.push(newArray[i])
                }
            }
            let BigBlock = document.querySelector(".BigBlock");
            let verticalLinesDiv = document.querySelector(".verticalLinesDiv");
            BigBlock.removeChild(verticalLinesDiv)
            getCanvasVerticalLines(tempArray)
            // ================== регуляровка линии =================
            
            
        })
    }
}



function RukovodstvoshowAllElements() {
    let otdels = document.querySelectorAll(".Rukovodstvo .Otdel");
    for(let otdel of otdels) {
        otdel.addEventListener("click", function() {
            let elems = document.querySelectorAll(".slowlyShow");
            let PodCategories = document.querySelectorAll(".PodCategories");
            for(let elem of elems) {
                
                elem.classList.remove("slowlyShow")
                elem.classList.add("slowlyView")
                elem.classList.add("secondKategory")
            }
            for(let elem of PodCategories) {
                elem.classList = "slowlyShow"
            }


            let BigBlock = document.querySelector(".BigBlock");
            let verticalLinesDiv = document.querySelector(".verticalLinesDiv");
            BigBlock.removeChild(verticalLinesDiv)
            getCanvasVerticalLines(newArray)
        })
    }

    
}

function getId() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
}








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

// canvasvertical2.stroke();


