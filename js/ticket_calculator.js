
//��������
let show = {
    nav: document.querySelector('#nav-show-tab').classList.contains('active'),         //������� ��������
    chack: document.querySelector('#show-chack'),                                       //������� ��������   
    price: 12.50,                                                                       //���� ��������
    tickets_count: document.querySelector('#count-show'),                               //���������� �������    
    time_visit: GetTimeVisit(),
    data_visit: GetDataVisit(),
}

//����-����
//�������
//����������
//���������

//�������� �������� ������� <p> ��������
function GetDataVisit() {

}

//�������� �������� ���������� �����
function GetTimeVisit() {
    let radiobuttons = document.querySelectorAll("input[name=time-show]");

    for (var i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            GetDataVisit();
            return radiobuttons[i].value;            
        }
    }
}
//�������� ���� ������������
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

    document.querySelector('#price').innerHTML = String(price.toFixed(2));      //������� ���� ������
    document.querySelector('#ticket_amount').innerHTML = String(summa.toFixed(2));      //������� ����� �� ��������� �������
    document.querySelector('#total_amount').innerHTML = String(total.toFixed(2));      //������� ����� �� ��������� �������
}

//�������� �������� ��������
function UpdateObjects() {
    show.nav = document.querySelector('#nav-show-tab').classList.contains('active');
    show.chack = document.querySelector('#show-chack');
    show.tickets_count = document.querySelector('#count-show');
    show.data_visit = GetDataVisit();
    show.time_visit = GetTimeVisit();

    UpdateCalculator(show);
}

//�� ����� ���� �� ����� �������� ��������
document.addEventListener('click', UpdateObjects);

//����� ������
/*let show_ticket = document.querySelector('.show');
let photo_ticket = document.querySelector('.photo');
let meet_ticket = document.querySelector('.meet');
let workshop_ticket = document.querySelector('.workshop');
let party_ticket = document.querySelector('.party');*/

//������� ��������� 
/*let photo_nav = document.querySelector('#nav-photo-tab');
let meet_nav = document.querySelector('#nav-meet-tab');
let workshop_nav = document.querySelector('#nav-warkshop-tab');
let party_nav = document.querySelector('#nav-party-tab');*/

//let ticket_booked = document.querySelector('#ticket_booked');   //������ "�������� �����"
/*let photo_chack = document.querySelector('#photo-chack');       //������� ����
let meet_chack = document.querySelector('#meet-chack');         //������� �������
let workshop_chack = document.querySelector('#workshop-chack'); //������� ����������
let party_chack = document.querySelector('#party-chack');       //������� ���������*/

/*let price = 0.00;               //����
let ticket_amount = 0.00;       //����� �������
let total_amount = 0.00;        //����� �����*/

//������������ �����
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

//������� ���� ������
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

//������ � ������ �������
function AllowForm() {
    TicketPrice();
}

//���������� ������� �������� � ������������ ��� �������� ��������
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