$(document).ready(function () {

    // Warning
    const warningSection = $(".warning");
    if (Modernizr.cssgrid) {
        warningSection.show();
        console.log("Warning showed");
        $(".grid-container").css('display', 'none');
    } else {
        warningSection.hide();
        console.log("Warning hidden");
    }

    // Save to the variable current window offset
    const currentOffset = $(window).scrollLeft();

    // Sidebar reveal
    let isSidebarRevealed = false;
    // Trigger on click show/hide sidebar
    $(".asideTrigger").click(function () {
        // Toggle sidebar open status
        $("body").toggleClass('showAside');
        $(this).toggleClass('current');
    });

    $('header nav a').on('click', function () {

        // console.log(`===START===`);

        const anchor_view = $(this).attr('href');
        // console.log(`Anchor: ${anchor_view}`);

        const data_view = anchor_view.substring(1);
        // console.log(`Data view: ${data_view}`);

        // TODO: Нужно сделать скролл до того div'а, на который сослался клик, тобишь до anchor_view/data_view

        const element = $(" section[data-view='" + data_view + "'] ")

        // Получаем отступ слева у этого элемента
        const element_offset = element.offset().left;
        // console.log(`Element offset: ${element_offset}`);

        // Scroll
        $('html,body').animate({
            scrollLeft: element_offset
        }, 600, 'easeInOutCubic');

        // console.log(`===END===`);
    });

});