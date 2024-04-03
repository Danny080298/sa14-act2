document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('movable-div');
    
    document.getElementById('control-right').onclick = function() {
        div.style.transform = 'translateX(300px)';
    };

    document.getElementById('control-down').onclick = function() {
        div.style.transform = 'translateY(300px)';
    };

    document.getElementById('control-up').onclick = function() {
        div.style.transform = 'translateY(-300px)';
    };

    document.getElementById('control-left').onclick = function() {
        div.style.transform = 'translateX(-300px)';
    };

    document.getElementById('control-reset').onclick = function() {
        div.style.transform = 'translate(0, 0)';
    };
});
