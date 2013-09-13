(function () {
    var container = document.getElementById('time');
    function update() {
        container.textContent = new Date().toTimeString().split(' ')[0];
    }
    update();
    setInterval(update, 1000);
}());
