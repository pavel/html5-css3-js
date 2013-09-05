(function ($) {
    var time = $('#time');
    function update_time() {
        time.text(new Date().toTimeString().split(' ')[0]);
    }
    update_time();
    setInterval(update_time, 1000);
}(jQuery));