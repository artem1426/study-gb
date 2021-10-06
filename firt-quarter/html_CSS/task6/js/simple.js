$(document).ready(function(){
    $('button.menu-left-button').on('click', function (event){//TODO выпадающий список: main, contact
        if (event && event.detail === 1)
            location.href='./contact.html';
    });
    $('button.menu-rigth-button').on('click', function (event){
        if (event && event.detail === 1)
            location.href='./main.html';//TODO выпадающий список: лк, настройки, авторизоваться/выйти
    });
    $('button.see-other-project').on('click', function (event){
        if (event && event.detail === 1)
            location.href='./contact.html';//TODO переход на строничку с проектами
    });
    $('#learn_more_1').on('click', function (event){
        if (event && event.detail === 1)
            location.href='./contact.html';//TODO 
    });
    $('#learn_more_2').on('click', function (event){
        if (event && event.detail === 1)
            location.href='./contact.html';//TODO 
    });
    $('#learn_more_3').on('click', function (event){
        if (event && event.detail === 1)
            location.href='./contact.html';//TODO 
    });
    $('button.button-footer').on('click', function (event){
        if (event && event.detail === 1)
            location.href='./contact.html';
    });
});