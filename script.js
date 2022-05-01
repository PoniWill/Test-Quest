
function checkSelects(){
    let zodiaks = [
        {
            title : "Овен",
            img : "1_aries.png"
        },
        {
            title : "Телец",
            img : "2_Taurus.png"
        },
        {
            title : "Близнецы",
            img : "3_Gemini.png"
        },
        {
            title : "Рак",
            img : "4_Cancer_Rak.png"
        },
        {
            title : "Лев",
            img : "5_Leo.png"
        },
        {
            title : "Дева",
            img : "6_Virgo.png"
        },
        {
            title : "Весы",
            img : "7_Libra.png"
        },
        {
            title : "Скорпион",
            img : "8_Scorpio.png"
        },
        {
            title : "Стрелец",
            img : "9_Sagittasrius.png"
        },
        {
            title : "Козерог",
            img : "10_Capricorn.png"
        },
        {
            title : "Водолей",
            img : "11_Aquarius.png"
        },
        {
            title : "Рыбы",
            img : "12_Pisces.png"
        }
    ];
    let selectDay = document.getElementById("BirthDay");
    let selectMonth = document.getElementById("BirthMonth");
    let selectYear = document.getElementById("BirthYear");
    if(selectDay.selectedIndex > 0 && selectMonth.selectedIndex != -1 && selectYear.selectedIndex > 0){
        
        selectDay.style.color = "blue";
        selectDay.style.fontWeight = "700";
        selectMonth.style.color = "blue";
        selectMonth.style.fontWeight = "700";
        selectYear.style.color = "blue";
        selectYear.style.fontWeight = "700";
        
        let day = parseInt(selectDay.options[selectDay.selectedIndex].value);
        let month = parseInt(selectMonth.options[selectMonth.selectedIndex].value) + 1;
        let z;
        
        if (month==1 && day>=20 || month==2 && day<=18) z = 10;
        else if (month==2 && day>=19 || month==3 && day<=20) z = 11;
        else if (month==3 && day>=21 || month==4 && day<=19) z = 0;
        else if (month==4 && day>=20 || month==5 && day<=20) z = 1;
        else if (month==5 && day>=21 || month==6 && day<=21) z = 2;
        else if (month==6 && day>=22 || month==7 && day<=22) z = 3;
        else if (month==7 && day>=23 || month==8 && day<=22) z = 4;
        else if (month==8 && day>=23 || month==9 && day<=22) z = 5;
        else if (month==9 && day>=23 || month==10 && day<=22) z = 6;
        else if (month==10 && day>=23 || month==11 && day<=21) z = 7;
        else if (month==11 && day>=22 || month==12 && day<=21) z = 8;
        else if (month==12 && day>=22 || month==1 && day<=19) z = 9;
        document.getElementById("zodiak").classList.remove("hided");
        document.getElementById("zodiak").src = `./images/symbols/${zodiaks[z].img}`;
        document.getElementById('zodiakName').innerHTML = zodiaks[z].title;
        document.getElementById("lastQuestion").classList.remove("hided");
    }
}
function makeMonthSelect(){
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let options = "<option disabled selected>Месяц</option>";
    for (let i = 0; i < months.length; i++) {
        let option = `<option value=${i}>${months[i]}</option>`;
        options += option
    }
    document.getElementById("BirthMonth").innerHTML = options;
    checkSelects();
}
function makeYearSelect(){
    let options = "<option disabled selected>Год</option>";
    for (let i = 2022; i >= 1922; i--) {
        let option = `<option value=${i}>${i}</option>`;
        options += option
    }
    document.getElementById("BirthYear").innerHTML = options;
}
function makeDaySelect(){
    let n;
    let select = document.getElementById("BirthMonth");
    let m = parseInt(select.options[select.selectedIndex].value);
    let options = "<option disabled selected  >День</option>";
    if([0, 2, 4, 6, 7, 9, 11].includes(m)){
        n = 31;
    }
    else if(m === 1){
        n = 28;
    }
    else{
        n = 30;
    }
    for (let i = 1; i <= n; i++) {
        let option = `<option value=${i}>${i}</option>`;
        options += option
    }
    document.getElementById("BirthDay").innerHTML = options;
}
let questions = [
    {
        title : "В какое время суток Вы чувствуете себя наиболее комфортно?",
        answers : [
            "Утро", "Ночь", "Вечер", "День"
        ]
    },
    {
        title : "Подскажите, мучает ли Вас бессонница последнее время?",
        answers : [
            "Да", "Нет", "Иногда"
        ]
    },
    {
        title : "Чувствуете ли Вы в последнее время, что вам никак не удается осуществить ваши планы? ",
        answers : [
            "Да", "Нет", "Иногда"
        ]
    },
    {
        title : "Какой Вы видите свою жизнь через 5 лет? ",
        answers : [
            "Брак, семья, дети, дом", "Путешествия по миру", "Успешная карьера","Все вместе"
        ]
    },
];

let currentQuestion = 0;

function startQuiz(){
    document.getElementById("nextQuestion").classList.remove("hided");
    document.getElementsByClassName("progress")[0].classList.remove("hided");
}

function nextQuestion(){
    document.getElementsByClassName("question-answers")[0].classList.remove("inrow");
    document.getElementById("nextQuestion").classList.add("hided");//Делаем кнопку видимой
    document.getElementsByClassName("question-title")[0].innerHTML = `<h3>${questions[currentQuestion].title}</h3>`; //Берем название текущего вопроса и заменяем вопрос в HTML на него
    let answers = "";
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) { // Начинаем перебирать ответы текущего вопроса
        let answer = `<div class="question-answer"> 
        <input type="radio" name="question" value="${i}" id="answer${i}" onchange="startQuiz()">
        <label for="answer${i}">${questions[currentQuestion].answers[i]}</label>
        </div>`; // Формируем один ответ в HTML
        answers += answer; 
    }
    document.getElementsByClassName("question-answers")[0].innerHTML = answers; // Вставляем все вопросы в элемент для них
    
    let progressW = parseInt(window.getComputedStyle(document.querySelector(".progress")).getPropertyValue('width'));

    let progress = ((currentQuestion + 1)/(questions.length))*progressW;
    
    if(currentQuestion < questions.length - 1){ 
        currentQuestion++;
    }
    else{
        document.getElementsByClassName("question")[0].classList.add("hided");
        document.getElementsByClassName("last")[0].classList.remove("hided");
    }
    
    document.getElementsByClassName("bar")[0].style.width = `${progress}px`;
}

async function sendResponse(){
    let response = await fetch("https://swapi.dev/api/people/1/", {
        method : "GET"
    });
    let result = await response.json();
    if(response.ok){
        let table = `<table>
        <thead>
        <tr>
        <th>Ключ</th>
        <th>Значение</th>    
        </tr>
        </thead>
        <tbody>
        <tr></tr>
        </tbody>
        </table>`;
        document.querySelector("body").innerHTML += table;
        let tbody = document.querySelector("tbody");
        for(key in result){
            if(typeof result.key === "object"){
                tbody.innerHTML += `<tr><th>${key}</th><td>${result[key].join("\n")}</td></tr>`;
            }
            else{
                tbody.innerHTML += `<tr><th>${key}</th><td>${result[key]}</td></tr>`;
            }
        }
    }
}

function results () {
    let main = document.querySelector("main");
    main.innerHTML = `<div  class='h2-ref'><h2>Спасибо за Ваши ответы!</h2>  <h3 class='blue'>Поздравляем! Прослушать свой персональный гороскоп возможно уже сейчас!</h3> <h2>2021 год Вас ошарашит! </h2>
    <p>Вас ждёт то, чего Вы никак не ожидали. Первые известия Вы получите совсем скоро, возможно это 17-18 ноября!</p>
    
    <p>Что бы прослушать аудио-сообщение, необходимо нажать на кнопку ниже и позвонить со своего мобильного телефона. Позвоните и Прослушайте очень серьезную информацию!</p> 
    <button class="btn btn-last" id="sendResponse" onclick='sendResponse()'> <img src='./images/icon_call.png'>ЗВОНИТЬ И СЛУШАТЬ</button>
    </div>`;
    document.querySelector('footer').innerHTML = `TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE <br> DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18`;
    document.querySelector('footer').style.letterSpacing = "2px";
}

function pending(){
    let steps = ["Анализ введенных данных", "Коррекция астрологического знака", "Расчет вариаций ответов", "Генерация предсказания", "Сохранение результата",
    "Поиск свободного оператора", "Начало озвучки и записи аудио-сообщения"];
    let step = 0
    let main = document.querySelector("main");
    main.innerHTML = `<h2>Обработка ваших данных</h2><div class='load'><div class='load-bar'></div></div><div class='steps'><p>${steps[step]}<span class='points'></span></p></div>`;
    let loadBar = 0;
    let points = 0;
    // Получение стилей из style.css. Есть нюанс, что через обычный el.style нельзя получить стили
    // которые уже записаны в CSS и особенно если там есть медиазапросы.
    // Поэтому используется метод getComputedStyle у объекта window
    let progressW = parseInt(window.getComputedStyle(document.querySelector(".load")).getPropertyValue('width'));
    let loadTimer = setInterval(function(){
        if(loadBar >= progressW){
            clearInterval(loadTimer);
        }
        if(loadBar % Math.floor(progressW/50) === 0 && loadBar <= progressW*0.96){ // Если брать до всей полоски получится больше точек (51), поэтому умножаю на 96%
            if(points === 7){
                document.querySelector(".steps>p:last-child").innerHTML += " <span class='green'>Выполнено!</span>";
                points = 0;
                step++;
                if(step === 6){
                    document.querySelector(".steps").innerHTML += `<p>${steps[step]}<span class='points'></span><span class='red'> ИДЕТ ЗАПИСЬ!</span></p>`;
                }
                else{
                    document.querySelector(".steps").innerHTML += `<p>${steps[step]}<span class='points'></span></p>`;
                }
            }
            document.querySelector(".steps>p:last-child>.points").innerText += " . ";
            points++;
            if(points === 7 && step === 6){
                document.querySelector(".red").innerText = " ГОТОВО!";
                document.querySelector(".red").classList.add("grey");
                document.querySelector(".red").classList.remove("red");
                setTimeout(results, 3000);

            }
        }
        if(loadBar >= (progressW/16)){
            let p = Math.floor((loadBar/progressW)*100);
            document.querySelector(".load-bar").innerHTML = `${p}%`;
        }
        loadBar++;
        document.getElementsByClassName("load-bar")[0].style.width = `${loadBar}px`;
    }, 10);
}

makeYearSelect();
makeMonthSelect();