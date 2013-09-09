(function ($) {
    function item(slide) {
        return '<li><a href="#go/' + slide.attr('id') + '">' + slide.find('> header').text() + '</a></li>';
    }
    var toc = '';
    var slides = $('.slide').filter(':not(#home)');
    var dom = '';
    slides.each(function (ind, slide) {
        dom += item($(slide));
    });
    $('#home ol').append(dom);
}(jQuery));