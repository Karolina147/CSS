$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    // wysokośc przeglądarki będziemy odejmować - bo jej nie skrolujemy, dopiero ppowyżej jej wysokości scrollujemy

    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    // PIERWSZA sekcja

    const $art2 = $('.art2');
    // określamy gdzie znajduje się dolna krawędź wybranej sekcji

    const art2FromTop = $art2.offset().top;
    // console.log(art1FromTop);

    const art2Height = $art2.outerHeight();
    // outerHeight - dla pewności z paddingiem i marginem
    // console.log(art2Height)

    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top;
    const art3Height = $art3.outerHeight();

    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top;
    const art4Height = $art4.outerHeight();


    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        // odejmujemy windowHeight - bo dopóki okno ma wysokość przeglądarki jeszcze nie scrollujemy, całe widzimy od początku
        $art2.addClass('active');
    }

    if (scrollValue > art3FromTop + art3Height - windowHeight) {
        // odejmujemy windowHeight - bo dopóki okno ma wysokość przeglądarki jeszcze nie scrollujemy, całe widzimy od początku
        $art3.addClass('active');
    }
    if (scrollValue > art4FromTop + art4Height - windowHeight) {
        // odejmujemy windowHeight - bo dopóki okno ma wysokość przeglądarki jeszcze nie scrollujemy, całe widzimy od początku
        $art4.addClass('active');
    }

    // DRUGA sekcja
    const $op1 = $('.op1');
    const $op2 = $('.op2');
    const $op1FromTop = $op1.offset().top;
    const $op2FromTop = $op2.offset().top;
    const $op1Height = $op1.height();
    const $op2Height = $op2.height();
    // pobieramy height a nie outerHeight, bo przez padding musieli,byśmy dłużej czekać aż obrazek się pojawi

    if (scrollValue > $op1FromTop + $op1Height / 4 - windowHeight) {
        // wysokość sekcji dzielimy na 2 aby przyspieszyć pojawienie się animacji
        $op1.addClass('active');
        // console.log('op1')
    }
    if (scrollValue > $op2FromTop + $op2Height / 4 - windowHeight) {
        $op2.addClass('active');
    }
    // if czyszczący
    if (scrollValue < 100) {
        $('article').removeClass('active')
    }

})
