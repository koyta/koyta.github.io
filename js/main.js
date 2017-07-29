$(document).ready(function () {
  'use strict';
  //Sidebar reveal
  $(".asideTrigger").click(function () {
    $("body").toggleClass('showAside');
  });

    $('header nav a').on('click', function() {

        console.log(`===START===`);

        const anchor_view = $(this).attr('href');
        console.log(`Anchor: ${anchor_view}`);

        const data_view = anchor_view.substring(1);
        console.log(`Data view: ${data_view}`);

        const currentOffset = $(window).scrollLeft();
        console.log(`Current offset: ${currentOffset}`);

        // TODO: Нужно сделать скролл до того div'а, на который сослался клик, тобишь до anchor_view/data_view

        const element = $(" section[data-view='"+data_view+"'] ")

        // Получаем отступ слева у этого элемента
        const element_offset = element.offset().left;
        console.log(`Element offset: ${element_offset}`);

        // Скроллим
        $('html').animate({
            scrollLeft: element_offset
        }, 800, 'easeInOutCubic');

        console.log(`===END===`);
    });

});
