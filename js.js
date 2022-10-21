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
            id: id(),
            "RukName": "Марат",
            "RukSurname": "Башмаков",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    id: id(),
                    "RukName": "Шынар",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству башмаков",
                    "subordinate_departments" : [
                        {
                            id: id(),
                            "RukName": "Шынар1",
                            "RukSurname": "Акмаралкызы",
                            "RukPosition": "Отдел по производству башмаков",
                            "subordinate_departments" : [
                                {
                                    id: id(),
                                    "RukName": "Шынар1",
                                    "RukSurname": "Акмаралкызы",
                                    "RukPosition": "Отдел по производству башмаков",
                                }
                            ],
                        }
                    ],
                    "employees": [
                        {
                            id: id(),
                            "RukName": "Шынар2",
                            "RukSurname": "Акмаралкызы",
                            "RukPosition": "Отдел по производству башмаков",
                        }
                    ]
                },
                {
                    id: id(),
                    "RukName": "Фаргиза",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
            ]
        }, 
        {
            id: id(),
            "RukName": "Ерназар",
            "RukSurname": "Кадыров",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    id: id(),
                    "RukName": "Бектибек",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству башмаков",
                    "subordinate_departments": [
                        {
                            id: id(),
                            "RukName": "Динаfdff",
                            "RukSurname": "Акмаралкызы",
                            "RukPosition": "Отдел по производству башмаков",
                        },
                        {
                            id: id(),
                            "RukName": "Саяжанwwwwwww",
                            "RukSurname": "Сандугашова",
                            "RukPosition": "Отдел по производству носков",
                            "subordinate_departments": [
                                {
                                    id: id(),
                                    "RukName": "Динаrrrrrr",
                                    "RukSurname": "Акмаралкызы",
                                    "RukPosition": "Отдел по производству башмаков",
                                },
                                {
                                    id: id(),
                                    "RukName": "Саяжанtttttt",
                                    "RukSurname": "Сандугашова",
                                    "RukPosition": "Отдел по производству носков",
                                },
                                {
                                    id: id(),
                                    "RukName": "Саяжанyyyyyyyy",
                                    "RukSurname": "Сандугашова",
                                    "RukPosition": "Отдел по производству носков",
                                },
                               
                            ],
                            "employees": [
                                {
                                    id: id(),
                                    "RukName": "Шынар2",
                                    "RukSurname": "Акмаралкызы",
                                    "RukPosition": "Отдел по производству башмаков",
                                }
                            ]
                        },
                        {
                            id: id(),
                            "RukName": "Саяжан",
                            "RukSurname": "Сандугашова",
                            "RukPosition": "Отдел по производству носков",
                        },
                       
                    ],
                    "employees": [
                        {
                            id: id(),
                            "RukName": "Шынар2",
                            "RukSurname": "Акмаралкызы",
                            "RukPosition": "должность",
                        }
                    ]
                },
                {
                    id: id(),
                    "RukName": "Саяжан",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
                {
                    id: id(),
                    "RukName": "Саяжан",
                    "RukSurname": "Сандугашова",
                    "RukPosition": "Отдел по производству носков",
                },
               
            ]
        },
        {
            id: id(),
            "RukName": "Бахтияр",
            "RukSurname": "Калашников",
            "RukPosition": "Руководство",
            "subordinate_departments": [
                {
                    id: id(),
                    "RukName": "Олжас",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб",
                },
                {
                    id: id(),
                    "RukName": "Асылбек",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб2",
                },
                {
                    id: id(),
                    "RukName": "Ольга",
                    "RukSurname": "Акмаралкызы",
                    "RukPosition": "Отдел по производству труб3",
                },
            ]
        },
        {
            id: id(),
            "RukName": "Темирхан",
            "RukSurname": "Кондиционерович",
            "RukPosition": "Руководство",
            "subordinate_departments": []
        },
    ],

}
// ============== global params =========
let verticalLinesHeight = 50;   // размер div контейнера verticalLines
let thickness = 2; // толщина линии
let rukLenght = array.Rukovodstvo.length; // длина руководства
let newArray = getNewArrayOtdels()  // в переменную ложим массив в массиве для рисовки отделов
let differentName = 1; // разные названия для verticalLines
let marginL = 90;
// ============== global params =========

function Start() {
    getRukovodstvo(array.Rukovodstvo)  // метод для отрисовки руководства
    getHorizontalLines(); // метод для вставки канваса
    getOtdels() // метод рисует отделы руководства
    getCanvasVerticalLines(); // метод рисует линии между рук и отделами
    activeClass() // добавляет событие на отделы
    RukovodstvoshowAllElements() // добавляет событие на руководства
}
Start();

// рисует вертикальную линию между госорганом и первым руководителем
let ctx = document.querySelector('.canvas1').getContext('2d');
ctx.beginPath();
ctx.lineWidth = thickness; //толщина px
ctx.moveTo(150, 0);
ctx.lineTo(150, 50);
ctx.stroke();

function getRukovodstvo(arr) {
    // метод для отрисовки руководства
    let OtdelsRukovodstvo = document.querySelector(".OtdelsRukovodstvo");
    let Rukovodstvo = document.createElement("div");
    Rukovodstvo.className = "Rukovodstvo";
    let text = "";
    for(let i = 0; i < arr.length; i++) {    
        text += getOtdel(arr[i].id, arr[i].RukName, arr[i].RukSurname, arr[i].RukPosition);
    }
    Rukovodstvo.innerHTML = text; // здесь внутрь ложим текст
    OtdelsRukovodstvo.appendChild(Rukovodstvo);
}

function getHorizontalLines() {
    // метод для вставки канваса между первым руководителем и руководством
    let OtdelsRukovodstvo = document.querySelector(".OtdelsRukovodstvo");
    let horizontalLines = document.createElement("div");
    horizontalLines.className = "horizontalLines";
    let Rukovodstvo = document.querySelector(".Rukovodstvo");
    let RukovodstvoSize = rukLenght; // берем длину массива руководства
    
    let width = Rukovodstvo.offsetWidth; // ширина контейнера руководства
    let text = `
        <canvas class="canvashorizontal" width="${width}" height="100"></canvas>              
    `;
    horizontalLines.innerHTML = text;
    OtdelsRukovodstvo.prepend(horizontalLines); // канвас ложим в начало контейнера 
    setCanvasHorizontal(width, RukovodstvoSize) // вызываем метод, который нарисует линии
}
function setCanvasHorizontal(width, RukovodstvoSize) {
    // функция рисует линии между первым рук и руководством
    let otdel = document.querySelector(".OtdelsRukovodstvo .Rukovodstvo .Otdel")
    let otdelSize = otdel.offsetWidth;   // ширина одного отдела

    let ctxHorizontal = document.querySelector('.canvashorizontal').getContext('2d');
    ctxHorizontal.beginPath();

    ctxHorizontal.lineWidth = thickness; //толщина px
    // вертикальная линия
    let valueCenterBlock = width/2;    // центр блока контейнера
    let centerOneOtdel = otdelSize / 2; // центр ширины одного отдела
    // ===================== горизонтальные линии слева и справа =================
    // вертикальная линия
    ctxHorizontal.moveTo(valueCenterBlock, 0);
    ctxHorizontal.lineTo(valueCenterBlock, 50);
    // горизонтальная линия справа
    ctxHorizontal.lineTo(centerOneOtdel, 50);
    ctxHorizontal.moveTo(50, 0);
    let valueEndPoint = width - centerOneOtdel;  // конечная точка горизонтальной линии
    // горизонтальная линия слева
    ctxHorizontal.moveTo(valueCenterBlock, 50);
    ctxHorizontal.lineTo(valueEndPoint, 50);
    // ===================== горизонтальные линии слева и справа =================

    // =============== подлинии =====================
    let valueStartPoint = centerOneOtdel; // начальная точка центр первого отдела слева
    for(let i = 0; i < RukovodstvoSize; i++) {
        ctxHorizontal.moveTo(valueStartPoint, 100);
        ctxHorizontal.lineTo(valueStartPoint, 50);
        valueStartPoint += otdelSize; // добавляем размер одного отдела, чтобы след линия нарисовалась для след отдела
    }
    // =============== подлинии =====================
    ctxHorizontal.stroke();
}

function getOtdel(id, name, surname, position, status="Otdel") {
    // функция рисует отделы. Все отделы
    let textId = ""; // если id не передано, то id не вставляется
    if(id != undefined) {
        textId = `id=${id}`
    }
    if(name == undefined || surname == undefined || position == undefined) {
        // если ничего не передано, то отдел не показывается. Но пространство он будет занимать
        status = "dontShow";
    }
    return `
        <div class="${status}" ${textId} onClick="func(id)">
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
function func(id) {
    let otdels = document.querySelectorAll(".BigBlockPodcategory .Otdel")
    
    for(let i = 0; i < otdels.length; i++) {
        otdels[i].addEventListener("click", function() {
            if(this.id === id) {
                let result = getArrayPodcategory(id, array.Rukovodstvo);
                if(result[0] != null) {
                    if(result[0].length > 0) {
                        let BigBlockPodcategory = document.querySelector(".BigBlockPodcategory");
                        let childrens = BigBlockPodcategory.children;
                        let parentId = this.parentElement.parentElement.id
        
                        let bool = false;
                        for(let i = 0; i < childrens.length; i++) {
                            if(parentId === childrens[i].id) {
                                bool = true;
                                continue;
                            } else {
                                if(bool) {
                                    childrens[i].classList.add("slowlyShow")
                                    setTimeout(() => {
                                        childrens[i].className = "slowlyShow";
                                    }, 500);
                                }
                            }
                        }
                        
                        getPodCategory(id);
                    }
                }
            }
        })
    }
}
function getNewArrayOtdels() {
    // метод, которая возвращает массив в массиве, чтобы рисовать отделы, курируемые руководством
    // метод возвращает массав такого типа [ ["", {}, {}, ""], ["", {}, "", ""] ] 
    
    if(rukLenght > 0) {
        // ========= получаем самую большую длину отделов по вертикали. Это количество подмассивов
        let bigSize = 0;
        for(let i = 0; i < rukLenght; i++) {
            let size = array.Rukovodstvo[i].subordinate_departments.length;
            if(bigSize < size) {
                bigSize = size;
            }
        }
        // в массив ложим пустые массивы
        if(bigSize > 0) {
            let newArr = [];
            for(let i = 0; i < bigSize; i++) {
                let arr = []
                newArr.push(arr)
            }
        // если курируемый отдел есть, ложим в массив объект, если нет, то пустую строку
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
    // метод, которая рисует отделы руководства
    let OtdelKategories = document.querySelector(".BigBlock .OtdelKategories");
    let newArr = getNewArrayOtdels()
    
    for(let i = 0; i < newArr.length; i++) {
        let text = "";
        let div = document.createElement("div"); 
        if(i == 0) { // для отделов первого блока margin сверху не должно быть, поэтому ложим в отдельные дивы
            div.className = "firstKategory";
        } else {
            div.className = "secondKategory";
        }
        // рисуем отделы
        for(let j = 0; j < newArr[i].length; j++) {
            if(newArr[i].length) {
                text += getOtdel(newArr[i][j].id, newArr[i][j].RukName, newArr[i][j].RukSurname, newArr[i][j].RukPosition);
            }
        }
        if(text) {
            div.id = id()
            div.innerHTML = text;
            
            OtdelKategories.appendChild(div);
        }
    }


}

function getCanvasVerticalLines(modifyArray) {
    // метод, для вставки канваса между руководством и отделами
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
    BigBlock.insertBefore(verticalLinesDiv, OtdelKategories) // канвас вставляем между руководством и отделами

    drawVerticalLines(modifyArray) // вызываем метод, для рисовки линии
}


function drawVerticalLines(modifyArray=newArray) {
    // функция рисует линии между руководством и отделами
    let otdel = document.querySelector(".BigBlock .OtdelKategories .firstKategory .Otdel") // берем все отделы
    let otdelHeightSize = otdel.offsetHeight;   // высота одного отдела
    let halfOtdelHeightSize = otdelHeightSize / 2; // половина высоты отдела
    let heightEndPoint = verticalLinesHeight + halfOtdelHeightSize; // конечная точка для первого отдела(середина отдела)
    let otdelRukWidth = document.querySelector(".BigBlock .OtdelsRukovodstvo .Rukovodstvo .Otdel").offsetWidth; // ширина отдела

    let firstKategory = document.querySelector(".firstKategory")
    let firstKategoryHeight = firstKategory.offsetHeight + verticalLinesHeight;   // высота блока firstKategory
    let gap = firstKategoryHeight - otdelHeightSize;   // зазор между отделами(вертикально)

    let canvasvertical = document.querySelector('.canvasvertical').getContext('2d');
    canvasvertical.beginPath();
    canvasvertical.lineWidth = thickness; //толщина px
 
    let startPoint = 50;
    
    let newArr = modifyArray;    // переменная равно переданному массиву. Если ничего не передано, берется значение по умолч(чтобы линии отрисовались заново при нажатии на отдел)

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
    // при нажатии на отдел, надо чтобы она расскрылась, а остальные отделы ниже исчезли
    let otdels = document.querySelectorAll(".OtdelKategories .Otdel");
    for(let otdel of otdels) {
        otdel.addEventListener("click", function() {
            clearPodcategory() // удаляет подотдел, чтобы нарисовать по новому
            getPodCategory(this.id) // рисуем подотделы по новому

            // ================== скрытие и показ элемента ========================
            let thisId = this.parentElement.id;
            let bool2 = false;
            let OtdelKategories = document.querySelector(".OtdelKategories").children;
            for(let elem of OtdelKategories) {
                if(elem.classList.contains("slowlyShow")) {
                    if(elem.id === thisId) {
                        bool2 = true;
                        continue
                    }
                    if(bool2) {
                        elem.classList.add("slowlyShow")
                        setTimeout(() => {
                            elem.className = "slowlyShow"
                        }, 500);
                    }
                } else {
                    if(elem.id === thisId) {
                        bool2 = true;
                        continue;
                    }
                    if(bool2) {
                        elem.classList.add("slowlyShow")
                        setTimeout(() => {
                            elem.className = "slowlyShow"
                        }, 500);
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
    // функция при нажатии на руководство, отделы рисует полностью, а подотделы скрываются
    let otdels = document.querySelectorAll(".Rukovodstvo .Otdel");
    
    for(let otdel of otdels) {
        otdel.addEventListener("click", function() {
            clearPodcategory()
            let elems = document.querySelectorAll(".slowlyShow");
            
            for(let elem of elems) {
                
                elem.classList.remove("slowlyShow")
                elem.classList.add("slowlyView")
                elem.classList.add("secondKategory")
            }


            let BigBlock = document.querySelector(".BigBlock");
            let verticalLinesDiv = document.querySelector(".verticalLinesDiv");
            BigBlock.removeChild(verticalLinesDiv)
            getCanvasVerticalLines(newArray)
        })
    }

    
}



function getArrayPodcategory(id, arr) {
    // сложный метод для понятия. Метод принимает id нажатого отдела, и перебирает весь массив чтобы найти этот id
    // как только он находит, он возвращает этот объект
    let arrLength = arr.length; // длина руководства
    let findObj = null; // найденный объект
    let result;         // временная переменная для найденного объекта
    let number;         // в каком руководстве был найден объект
    let podarr = [];    // возвращаемый методом массив в массиве
    
    // ищем id по всему массиву
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].subordinate_departments) {
            for(let j = 0; j < arr[i].subordinate_departments.length; j++) {
               result = getFindObj(id, arr[i].subordinate_departments[j]);
               if(result != null) {
                number = i;
                findObj = result;
                break;
               } 
            }
        }
    }
    // найденный объект ложим в массив, чтобы потом нарисовать
    if(findObj) {
        let subordinate_departmentsLength = 0;
        if(findObj.subordinate_departments) {
            subordinate_departmentsLength = findObj.subordinate_departments.length;
        } 
        let employeesLength = 0;
        if(findObj.employees) {
            employeesLength = findObj.employees.length;
        }
    
        for(let i = 0; i < subordinate_departmentsLength; i++) {
            let tempArr = [];
            for(let j = 0; j < arrLength; j++) {
                if(j != number) {
                    tempArr.push("");
                } else {
                    tempArr.push(findObj.subordinate_departments[i])
                }
            }
            podarr.push(tempArr);
        }
    
        for(let i = 0; i < employeesLength; i++) {
            let tempArr = [];
            for(let j = 0; j < arrLength; j++) {
                if(j != number) {
                    tempArr.push("");
                } else {
                    tempArr.push(findObj.employees[i])
                }
            }
            podarr.push(tempArr);
        }
        return [podarr, number];
    } else {
        return [null, number]
    }
}

function getFindObj(id, subordinate_departments) {
    // метод, которая ищет id. здесь используется рекурсия. Если id не найдено, то она ищет дальше глубже если есть массивы
    // возвращает найденный объект
        if(subordinate_departments.id === id) {
            return subordinate_departments;
        } else {
            if(subordinate_departments.subordinate_departments) {
                let result;
                for(let i = 0; i < subordinate_departments.subordinate_departments.length; i++) {
                    result =  getFindObj(id, subordinate_departments.subordinate_departments[i])
                    if(result != null) {
                        return result
                    }
                }
                return null;
            } else {
                return null
            }
        }
}

function getPodCategory(otdelId) {
    // метод рисует отделы подкатегории
    let BigBlockPodcategory = document.querySelector(".BigBlockPodcategory");
    BigBlockPodcategory.style.marginLeft = `${marginL}px`
    let result = getArrayPodcategory(otdelId, array.Rukovodstvo) // получаем массив в массиве

    if(result[0] != null) {
        if(result[0].length > 0) {
            let bool = false;
            let numberClickObj = result[1]
            for(let i = 0; i < result[0].length; i++) {
                if(result[0].length - 1 == i) {
                    bool = true
                }
               let PodCategory = document.createElement("div");
               PodCategory.className = "podCategory";
               PodCategory.style.marginLeft = `${marginL}px`
                let text = "";
                let podOtdelsSecondKategory = document.createElement("div");
                
                if(i == 0) {
                    podOtdelsSecondKategory.className = "podOtdelsFirstKategory";
                } else {
                    podOtdelsSecondKategory.className = "podOtdelsSecondKategory";
                }
            
                for(let j = 0; j < rukLenght; j++) {
                    text += getOtdel(result[0][i][j].id, result[0][i][j].RukName, result[0][i][j].RukSurname, result[0][i][j].RukPosition)
                }
        
                if(text) {
                    PodCategory.id = id()
                    podOtdelsSecondKategory.innerHTML = text;
                    
                    PodCategory.appendChild(podOtdelsSecondKategory);
                    BigBlockPodcategory.appendChild(PodCategory)
                
                    getPodCategoryVerticalLines(bool, PodCategory, numberClickObj) // вызываем метод для рисовки линии
                }
        
            }
            marginL += 45;
        }
    }     
}

function getPodCategoryVerticalLines(bool, PodCategory, numberClickObj) {
    // метод вставляет канвас перед подотделом, чтобы потом нарисовать линии
    let BigBlockPodcategory = document.querySelector(".BigBlockPodcategory");

    let canvashorizontal = document.querySelector(".canvashorizontal")
    let width = canvashorizontal.offsetWidth;
    let verticalLinesDiv = document.createElement("div");
    verticalLinesDiv.className = "verticalLinesDiv";

    let otdelHeight = document.querySelector(".BigBlockPodcategory .Otdel")
    let height = otdelHeight.offsetHeight;
    differentName++;
    let text = `
        <div class="verticalLines">
            <canvas class="canvasvertical${differentName}" width="${width}" height="${height + verticalLinesHeight}"></canvas>             
        </div>
    `;
    verticalLinesDiv.innerHTML = text;
    PodCategory.prepend(verticalLinesDiv)
    drawVerticalLinesForPodCategory(bool, numberClickObj)
}

function drawVerticalLinesForPodCategory(bool, numberClickObj) {
    let Otdel= document.querySelector(".OtdelKategories .firstKategory .Otdel");
    let OtdelHeight = Otdel.offsetHeight;
    let OtdelWidth = Otdel.offsetWidth;

    let startPoint = 5;
    if(numberClickObj != 0) {
        for(let i = 0; i < numberClickObj; i++) {
            startPoint += OtdelWidth;
        }
    }
    let horizontalLineSize = startPoint + 18;
    let otherLineHeight = OtdelHeight+ verticalLinesHeight;
    let EndLineHeight = (OtdelHeight / 2) + verticalLinesHeight;
    let horizontalLineStartPoint = (OtdelHeight / 2) + verticalLinesHeight;
    let horizontalLineEndPoint = (OtdelHeight / 2) + verticalLinesHeight;

    let canvasverticalPodcategory = document.querySelector(`.canvasvertical${differentName}`).getContext('2d');
    canvasverticalPodcategory.beginPath();
    canvasverticalPodcategory.lineWidth = thickness; //толщина px

    if(!bool) {
        // ================================================================
        // вертикальная линия
        canvasverticalPodcategory.moveTo(startPoint, 0);
        canvasverticalPodcategory.lineTo(startPoint, otherLineHeight);
        
        //  короткая горизонтальная линия
        canvasverticalPodcategory.moveTo(startPoint, horizontalLineStartPoint);
        canvasverticalPodcategory.lineTo(horizontalLineSize, horizontalLineEndPoint);
    } else {
        // ================================================================
        // вертикальная линия
        canvasverticalPodcategory.moveTo(startPoint, 0);
        canvasverticalPodcategory.lineTo(startPoint, EndLineHeight);
        
        //  короткая горизонтальная линия
        canvasverticalPodcategory.moveTo(startPoint, horizontalLineStartPoint);
        canvasverticalPodcategory.lineTo(horizontalLineSize, horizontalLineEndPoint);
    }
    canvasverticalPodcategory.stroke();
}

function clearPodcategory() {
    let BigBlockPodcategory = document.querySelector(".BigBlockPodcategory");
    BigBlockPodcategory.innerHTML = "";
    marginL = 90;
    // let childrens = BigBlockPodcategory.children;
    // // console.log(childrens)
    // for(let elem of childrens) {
    //     console.log(elem)
    //     try {
    //         BigBlockPodcategory.removeChild(elem)
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     console.log("this")
    // }
    
}


function id() {
    // метод возвращает уникальный id
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
}



