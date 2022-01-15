
//выставка
let show = {
    nav: document.querySelector('#nav-show-tab').classList.contains('active'),         //вкладка выставки
    chack: document.querySelector('#show-chack'),                                       //чекбокс выставки   
    price: 12.50,                                                                       //цена выставки
    tickets_count: document.querySelector('#count-show'),                               //количество билетов    
    time_visit: GetTimeVisit(),
    data_visit: GetDataVisit(),
}

//фото-зона
//встреча
//мастерская
//вечеринка

//получить значение первого <p> родителя
function GetDataVisit() {

}

//получаем значение выбранного радио
function GetTimeVisit() {
    let radiobuttons = document.querySelectorAll("input[name=time-show]");

    for (var i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            GetDataVisit();
            return radiobuttons[i].value;            
        }
    }
}
//обновить поля калькулятора
function UpdateCalculator(object) {
    let price;
    let count;
    let summa = 0;
    let total = 0;

    if (object.chack.checked) {
        price = object.price;
        count = object.tickets_count.value;
        summa = count * price;
        total += summa;
    }
    else {
        price = 0;
        count = 0;
        summa = 0;
        total -= summa;
    }        

    document.querySelector('#price').innerHTML = String(price.toFixed(2));      //вывести цену билета
    document.querySelector('#ticket_amount').innerHTML = String(summa.toFixed(2));      //вывести сумму за несколько билетов
    document.querySelector('#total_amount').innerHTML = String(total.toFixed(2));      //вывести сумму за несколько билетов
}

//обновить свойства объектов
function UpdateObjects() {
    show.nav = document.querySelector('#nav-show-tab').classList.contains('active');
    show.chack = document.querySelector('#show-chack');
    show.tickets_count = document.querySelector('#count-show');
    show.data_visit = GetDataVisit();
    show.time_visit = GetTimeVisit();

    UpdateCalculator(show);
}

//по клику мыши на любом элементе страницы
document.addEventListener('click', UpdateObjects);

//блоки билета
/*let show_ticket = document.querySelector('.show');
let photo_ticket = document.querySelector('.photo');
let meet_ticket = document.querySelector('.meet');
let workshop_ticket = document.querySelector('.workshop');
let party_ticket = document.querySelector('.party');*/

//вкладки навигации 
/*let photo_nav = document.querySelector('#nav-photo-tab');
let meet_nav = document.querySelector('#nav-meet-tab');
let workshop_nav = document.querySelector('#nav-warkshop-tab');
let party_nav = document.querySelector('#nav-party-tab');*/

//let ticket_booked = document.querySelector('#ticket_booked');   //кнопка "заказать билет"
/*let photo_chack = document.querySelector('#photo-chack');       //чекбокс фото
let meet_chack = document.querySelector('#meet-chack');         //чекбокс встречи
let workshop_chack = document.querySelector('#workshop-chack'); //чекбокс мастерской
let party_chack = document.querySelector('#party-chack');       //чекбокс вечеринки*/

/*let price = 0.00;               //цена
let ticket_amount = 0.00;       //сумма билетов
let total_amount = 0.00;        //общая сумма*/

//сформировать билет
/*function AddTicket() {
    if (document.querySelector('#show-chack').checked) {
        show_ticket.style.display = "block";        
    }
    if (document.querySelector('#photo-chack').checked) {
        photo_ticket.style.display = "block";       
    }
    if (document.querySelector('#meet-chack').checked) {
        meet_ticket.style.display = "block";        
    }
    if (document.querySelector('#workshop-chack').checked) {
        workshop_ticket.style.display = "block";        
    }
    if (document.querySelector('#party-chack').checked) {
        party_ticket.style.display = "block";       
    }
    
    console.log();
}*/

//вывести цену билета
/*function TicketPrice() {
    if (show_chack.checked && show_nav.active) {
        price = 12.50;        
    }
    if (photo_chack.checked) {
        price = 20.80;
    }
    if (meet_chack.checked) {
        price = 15.00;
    }
    if (workshop_chack.checked) {
        price = 10.50;
    }
    if (party_chack.checked) {
        price = 40.00;
    }
    else {
        price = 0.00;
    }    
    document.querySelector('#price').innerHTML = String(price.toFixed(2));
}

//доступ к заказу билетов
function AllowForm() {
    TicketPrice();
}

//установить нуленые значения в калькуляторе при загрузке страницы
/*window.onload = function () {
    document.querySelector('#price').innerHTML = price;
    document.querySelector('#ticket_amount').innerHTML = ticket_amount;
    document.querySelector('#total_amount').innerHTML = total_amount;
};*/


//ticket_booked.addEventListener('click', AddTicket);

/*show_nav.addEventListener()
show_chack.addEventListener('change', AllowForm);
photo_chack.addEventListener('change', AllowForm);
meet_chack.addEventListener('change', AllowForm);
workshop_chack.addEventListener('change', AllowForm);
party_chack.addEventListener('change', AllowForm);*/