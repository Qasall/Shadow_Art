//����� ����� �������?
//������� � ����� �������� �����������
//���� �� ������?
//������� ���� �����
//������ �������?
//������� ��������� �������
//������� � ����� ���������� �����������
//����� ����?
//������� � ����� ����
//����� �����?
//������� � ����� �����
//������� ����� ����� ������

//����� ������
let show_ticket = document.querySelector('.show');
let photo_ticket = document.querySelector('.photo');
let meet_ticket = document.querySelector('.meet');
let workshop_ticket = document.querySelector('.workshop');
let party_ticket = document.querySelector('.party');

//������� �����
let show_form = document.querySelector('#show');
let photo_form = document.querySelector('#photo');
let meet_form = document.querySelector('#meet');
let workshop_form = document.querySelector('#workshop');
let party_form = document.querySelector('#party');

let ticket_booked = document.querySelector('#ticket_booked');   //������ "�������� �����"
let price = 0.00;               //����
let ticket_amount = 0.00;       //����� �������
let total_amount = 0.00;        //����� �����

//������������ �����
function AddTickert() {
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
}

//���������� ������� �������� � ������������ ��� �������� ��������
/*window.onload = function () {
    document.querySelector('#price').innerHTML = price;
    document.querySelector('#ticket_amount').innerHTML = ticket_amount;
    document.querySelector('#total_amount').innerHTML = total_amount;
};*/


ticket_booked.addEventListener('click', AddTickert);
