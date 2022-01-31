
//выставка
let show = {
    nav: document.querySelector('#nav-show-tab').classList.contains('active'),         //вкладка выставки
    chack: document.querySelector('#show-chack'),                                       //чекбокс выставки   
    price: 12.50,                                                                       //цена выставки
    tickets_count: document.querySelector('#count-show'),                               //количество билетов
    time_visit: "",
    data_visit: "",
    summa_visit: ""
}

//фото-зона
let photo = {
    nav: document.querySelector('#nav-photo-tab').classList.contains('active'),         //вкладка выставки
    chack: document.querySelector('#photo-chack'),                                       //чекбокс выставки   
    price: 20.80,                                                                       //цена выставки
    tickets_count: document.querySelector('#count-photo'),                               //количество билетов
    time_visit: "",
    data_visit: "",
    summa_visit: ""
}
//встреча
let meet = {
    nav: document.querySelector('#nav-meet-tab').classList.contains('active'),         //вкладка выставки
    chack: document.querySelector('#meet-chack'),                                       //чекбокс выставки   
    price: 15.00,                                                                       //цена выставки
    tickets_count: document.querySelector('#count-meet'),                               //количество билетов
    time_visit: "",
    data_visit: "",
    summa_visit: ""
}
//мастерская
let workshop = {
    nav: document.querySelector('#nav-warkshop-tab').classList.contains('active'),         //вкладка выставки
    chack: document.querySelector('#workshop-chack'),                                       //чекбокс выставки
    price: 10.50,                                                                       //цена выставки
    tickets_count: document.querySelector('#count-workshop'),                               //количество билетов
    time_visit: "",
    data_visit: "",
    summa_visit: ""
}
//вечеринка
let party = {
    nav: document.querySelector('#nav-party-tab').classList.contains('active'),         //вкладка выставки
    chack: document.querySelector('#party-chack'),                                       //чекбокс выставки
    price: 40.00,                                                                       //цена выставки
    tickets_count: document.querySelector('#count-party'),                               //количество билетов
    time_visit: "",
    data_visit: "",
    summa_visit: ""
}


//блоки билета
let show_ticket = document.querySelector('.show');
let photo_ticket = document.querySelector('.photo');
let meet_ticket = document.querySelector('.meet');
let workshop_ticket = document.querySelector('.workshop');
let party_ticket = document.querySelector('.party');

let ticket_booked = document.querySelector('#ticket_booked');   //кнопка "проверить билет"
let total = 0;                                                  //итоговая сумма по чеку




//получить значение первого <p> родителя
function GetDataVisit(element) {
    let radiobuttons = document.querySelectorAll(element);
    let children;

    for (var i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            children = radiobuttons[i].closest('.col-sm').childNodes;             
            return children[1].textContent;
        }
    }
}

//получаем значение выбранного радио
function GetTimeVisit(element) {
    let radiobuttons = document.querySelectorAll(element);

    for (var i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {                       
            return radiobuttons[i].value;            
        }
    }
}

//обновить поля калькулятора
function UpdateCalculator(object) {
    let price;
    let count;
    let summa = 0;    

    if (object.chack.checked) {
        price = object.price;
        count = object.tickets_count;
        summa = count * price;       
    }
    else {
        price = 0;
        count = 0;
        summa = 0;        
    }

    total = (show.price * show.tickets_count) + (photo.price * photo.tickets_count) + (meet.price * meet.tickets_count) + (workshop.price * workshop.tickets_count) + (party.price * party.tickets_count);



    document.querySelector('#price').innerHTML = String(price.toFixed(2));      //вывести цену билета
    document.querySelector('#ticket_amount').innerHTML = String(summa.toFixed(2));      //вывести сумму за несколько билетов
    document.querySelector('#total_amount').innerHTML = String(total.toFixed(2));      //вывести сумму за несколько билетов
    document.querySelector('.total').innerHTML = String(total.toFixed(2));
}

//обновить свойства объектов
function UpdateObjects() {
    show.nav = document.querySelector('#nav-show-tab').classList.contains('active');
    show.chack = document.querySelector('#show-chack');
    show.tickets_count = document.querySelector('#count-show').value;
    show.time_visit = GetTimeVisit("input[name=time-show]");
    show.data_visit = GetDataVisit("input[name=time-show]");

    photo.nav = document.querySelector('#nav-photo-tab').classList.contains('active');
    photo.chack = document.querySelector('#photo-chack');
    photo.tickets_count = document.querySelector('#count-photo').value;
    photo.time_visit = GetTimeVisit("input[name=time-photo]");
    photo.data_visit = GetDataVisit("input[name=time-photo]");

    meet.nav = document.querySelector('#nav-meet-tab').classList.contains('active');
    meet.chack = document.querySelector('#meet-chack');
    meet.tickets_count = document.querySelector('#count-meet').value;
    meet.time_visit = GetTimeVisit("input[name=time-meet]");
    meet.data_visit = GetDataVisit("input[name=time-meet]");

    workshop.nav = document.querySelector('#nav-warkshop-tab').classList.contains('active');
    workshop.chack = document.querySelector('#workshop-chack');
    workshop.tickets_count = document.querySelector('#count-workshop').value;
    workshop.time_visit = GetTimeVisit("input[name=time-workshop]");
    workshop.data_visit = GetDataVisit("input[name=time-workshop]");

    party.nav = document.querySelector('#nav-party-tab').classList.contains('active');
    party.chack = document.querySelector('#party-chack');
    party.tickets_count = document.querySelector('#count-party').value;
    party.time_visit = GetTimeVisit("input[name=time-party]");
    party.data_visit = GetDataVisit("input[name=time-party]");

    if (show.nav) {        
        UpdateCalculator(show);
    }
    if (photo.nav) {        
        UpdateCalculator(photo);
    }
    if (meet.nav) {        
        UpdateCalculator(meet);
    }
    if (workshop.nav) {       
        UpdateCalculator(workshop);
    }
    if (party.nav) {       
        UpdateCalculator(party);
    }
}

//сформировать билет
function AddTicket() {
    if (document.querySelector('#show-chack').checked) {
        document.querySelector('.show span[class=count]').innerHTML = String(show.tickets_count);
        document.querySelector('.show span[class=date]').innerHTML = String(show.data_visit);
        document.querySelector('.show span[class=time]').innerHTML = String(show.time_visit);
        document.querySelector('.show span[class=summa]').innerHTML = String(show.summa_visit);        
        show_ticket.style.display = "block";
    }
    if (document.querySelector('#photo-chack').checked) {
        document.querySelector('.photo span[class=count]').innerHTML = String(photo.tickets_count);
        document.querySelector('.photo span[class=date]').innerHTML = String(photo.data_visit);
        document.querySelector('.photo span[class=time]').innerHTML = String(photo.time_visit);
        document.querySelector('.photo span[class=summa]').innerHTML = String(photo.summa_visit);
        photo_ticket.style.display = "block";
    }
    if (document.querySelector('#meet-chack').checked) {
        document.querySelector('.meet span[class=count]').innerHTML = String(meet.tickets_count);
        document.querySelector('.meet span[class=date]').innerHTML = String(meet.data_visit);
        document.querySelector('.meet span[class=time]').innerHTML = String(meet.time_visit);
        document.querySelector('.meet span[class=summa]').innerHTML = String(meet.summa_visit);
        meet_ticket.style.display = "block";
    }
    if (document.querySelector('#workshop-chack').checked) {
        document.querySelector('.workshop span[class=count]').innerHTML = String(workshop.tickets_count);
        document.querySelector('.workshop span[class=date]').innerHTML = String(workshop.data_visit);
        document.querySelector('.workshop span[class=time]').innerHTML = String(workshop.time_visit);
        document.querySelector('.workshop span[class=summa]').innerHTML = String(workshop.summa_visit);
        workshop_ticket.style.display = "block";
    }
    if (document.querySelector('#party-chack').checked) {
        document.querySelector('.party span[class=count]').innerHTML = String(party.tickets_count);
        document.querySelector('.party span[class=date]').innerHTML = String(party.data_visit);
        document.querySelector('.party span[class=time]').innerHTML = String(party.time_visit);
        document.querySelector('.party span[class=summa]').innerHTML = String(party.summa_visit);
        party_ticket.style.display = "block";
    }    
}


//по клику мыши на любом элементе страницы
document.addEventListener('click', UpdateObjects);

//по клику мыши на кнопе "проверить билет"
ticket_booked.addEventListener('click', AddTicket);
