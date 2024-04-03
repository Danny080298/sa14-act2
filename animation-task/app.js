
var right = document.getElementById('control-right');
var down = document.getElementById('control-down');
var up = document.getElementById('control-up');
var left = document.getElementById('control-left');
var div = document.getElementById('movable-div');
var toggle = false;

right.onclick = function() {
    toggle = !toggle;
    if (toggle) {
        div.style.transform = 'translateX(300px)';
    } else {
        div.style.transform = 'translateX(0px)';
    }
};
down.onclick = function() {
    toggle = !toggle;
    if (toggle) {
        div.style.transform = 'translateY(300px)';
    } else {
        div.style.transform = 'translateY(600px)';
    }
};
up.onclick = function() {
    toggle = !toggle;
    if (toggle) {
        div.style.transform = 'translateY(600px)';
    } else {
        div.style.transform = 'translateY(300px)';
    }
};
left.onclick = function() {
    toggle = !toggle;
    if (toggle) {
        div.style.transform = 'translateY(600px)';
    } else {
        div.style.transform = 'translateY(300px)';
    }
};


