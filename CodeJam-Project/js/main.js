//black temayı ilk açılıdğında gizlemek için
$( document ).ready(function() {
    $('.blacktema').hide();
});


//navbarları aktif ettiğinde çalışması için
$('.nav-item').click(function(){
    $('.nav-item').removeClass('aktif');
    $(this).addClass('aktif');
});

//white tema için
$('.whitetema').click(whitetema);

//black tema için
$('.blacktema').click(blacktema);

function whitetema(){
    $('body').removeClass('blackbody');

    //Navbar menü için
    $('.ust-menu').addClass('ust-menu-white');
    $('.ust-menu').removeClass('ust-menu');
    $('.nav-link').removeClass('text-light');
    $('.nav-link').addClass('text-dark');
    $('.navbar').removeClass('ust-menu-black');

    //Ana sayfa için
    $('.anasayfa-title').removeClass('text-light');
    $('.anasayfa-title').addClass('black-text-color');
    $('.ana-sayfa-aciklama').removeClass('ana-sayfa-aciklama');
    $('.ana-sayfa-aciklama').addClass('black-text-color');

    //Hakimda yeri için
    $('.hakkimda-title').removeClass('text-white');
    $('.hakkimda-title').addClass('black-white-text-color');
    $('.hakkimda-aciklama').removeClass('text-white');
    $('.hakkimda-aciklama').addClass('text-dark');
    $('.list-group-item').removeClass('list-group-item-bg');
    $('.list-group-item').addClass('list-group-item-wbg');
    $('.hakkimda-txt').removeClass('text-light');
    $('.hakkimda-txt').addClass('text-dark');
    $('#img-change').attr('src', "img/brlblack.png");

    //Yetenek yeri için
    $('.yetenek-title').removeClass('text-white');
    $('.yetenek-title').addClass('black-text-color');

    //Projelerim yeri için
    $('.projelerim-title').removeClass('text-white');
    $('.projelerim-title').addClass('text-dark');

    //İletişim yeri için
    $('.iletişim-title').removeClass('text-white');
    $('.iletişim-title').addClass('text-dark');
    $('.iletişim-text').removeClass('text-white');
    $('.iletişim-text').addClass('black-text-color');

    //copyright yeri
    $('.copyright-text').removeClass('text-white');
    $('.copyright-text').addClass('text-dark');

    $('.whitetema').hide();
    $('.blacktema').show();
};

function blacktema(){
     //body için
     $('body').addClass('blackbody');

     //Navbar için
     $('.navbar').addClass('ust-menu-black');
     $('.nav-link').removeClass('text-dark');
     $('.nav-link').addClass('text-light');
 
     //Ana sayfa için
     $('.anasayfa-title').removeClass('black-text-color');
     $('.anasayfa-title').addClass('text-light');
     $('.ana-sayfaaciklama').addClass('ana-sayfa-aciklama');
 
     //Hakkımda yeri için
     $('.hakkimda-title').removeClass('black-white-text-color');
     $('.hakkimda-title').addClass('text-white');
     $('.hakkimda-aciklama').removeClass('text-dark');
     $('.hakkimda-aciklama').addClass('text-white');
     $('.list-group-item').removeClass('list-group-item-wbg');
     $('.list-group-item').addClass('list-group-item-bg');
     $('.hakkimda-txt').removeClass('text-dark');
     $('.hakkimda-txt').addClass('text-light');
     $('#img-change').attr('src', "img/brlwhite.png");
 
     //Yetenek yeri için
     $('.yetenek-title').removeClass('black-text-color');
     $('.yetenek-title').addClass('text-white');
 
     //Projelerim yeri için
     $('.projelerim-title').removeClass('text-dark');
     $('.projelerim-title').addClass('text-white');
 
     //İletişim yeri için
     $('.iletişim-title').removeClass('text-dark');
     $('.iletişim-title').addClass('text-white');
     $('.iletişim-text').removeClass('black-text-color');
     $('.iletişim-text').addClass('text-white');
 
    //copyright yeri
    $('.copyright-text').removeClass('text-dark');
    $('.copyright-text').addClass('text-white');

     $('.whitetema').show();
     $('.blacktema').hide();
};