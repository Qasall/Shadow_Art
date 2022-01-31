let time = 2000;

jQuery(document).ready(function () {
    //функция срабатывает при клике на элемент с классом vodeo_cont
    $(".vodeo_cont").click(function (e) {
        //кставляем картинку с кругом в конец целевого элемента
        $(this).append('<img src="img/cercle.png" class="img">');
        //задаем картинке координаты клика со смещением на половину ширины картинки
        $(this).children().last().css("left", e.pageX - 5);
        $(this).children().last().css("top", e.pageY - 5);
        //скрытие видео
        $("video").animate({
            opacity: "0"
        }, 200, function () { });
        //анимация картинки
        $(this).children().last().animate({
                left: '-=75',
                top: '-=75',
                width: '+=150px',
                opacity: "0"
            }, 2000, function () { });
        //удаление картинки после завершения анимации        
        setTimeout(function () {
            $(".img").remove();
            }, time);
    })
});
