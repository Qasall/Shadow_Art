let time = 2000;

jQuery(document).ready(function () {
    //������� ����������� ��� ����� �� ������� � ������� vodeo_cont
    $(".vodeo_cont").click(function (e) {
        //��������� �������� � ������ � ����� �������� ��������
        $(this).append('<img src="img/cercle.png" class="img">');
        //������ �������� ���������� ����� �� ��������� �� �������� ������ ��������
        $(this).children().last().css("left", e.pageX - 5);
        $(this).children().last().css("top", e.pageY - 5);
        //������� �����
        $("video").animate({
            opacity: "0"
        }, 200, function () { });
        //�������� ��������
        $(this).children().last().animate({
                left: '-=75',
                top: '-=75',
                width: '+=150px',
                opacity: "0"
            }, 2000, function () { });
        //�������� �������� ����� ���������� ��������        
        setTimeout(function () {
            $(".img").remove();
            }, time);
    })
});
