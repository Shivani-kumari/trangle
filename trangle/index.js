var start = 1;
var end = 1;
var down = false;
var snapshort;


document.getElementById("canvas").style.border = "thick solid #0000FF";

function getSnapshort() {
    snapshort = context.getImageData(0, 0, canvas.width, canvas.height)
}
function putSnapshort() {
    context.putImageData(snapshort, 0, 0);
}

onmousemove = function (e) {

    var marginy = window.scrollY + document.querySelector('#canvas').getBoundingClientRect().top;
    var marginx = window.scrollX + document.querySelector('#canvas').getBoundingClientRect().left
    document.getElementById("title").innerHTML = e.clientX + "x y " + e.clientY + " canvas " + marginx + " y" + marginy;


    if (down) {
        putSnapshort()
        draw(e.clientX - marginx, e.clientY - marginy);
        //   context.clearRect(0, 0, canvas.width, canvas.height);
    }

};



onmousedown = function (e) {

    down = true;

    var marginy = window.scrollY + document.querySelector('#canvas').getBoundingClientRect().top + 5;
    var marginx = window.scrollX + document.querySelector('#canvas').getBoundingClientRect().left + 5;
    //   draw(e.clientX - marginx,e.clientY - marginy);
    start = e.clientX - marginx;
    end = e.clientY - marginy;
    getSnapshort()
};

onmouseup = function (e) {

    down = false
    // context.clearRect(0, 0, canvas.width, canvas.height);
    putSnapshort()
    var marginy = window.scrollY + document.querySelector('#canvas').getBoundingClientRect().top + 5;
    var marginx = window.scrollX + document.querySelector('#canvas').getBoundingClientRect().left + 5;

    draw(e.clientX - marginx, e.clientY - marginy);


};

let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
function drawTriangle(x, y) {

    context.clearRect(start, end, x - start, y - end);
    context.fillStyle = "#FFFFFF";


    let height = y - end;

    context.beginPath();
    context.moveTo(start, end);//left
    context.lineTo(x, y);//right
    context.lineTo(x, end);//top


    context.fillStyle = getRandomColour();
    context.fill();
}
function getRandomColour() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    return "rgb(" + red + "," + green + "," + blue + " )";

}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(x, y) {


    return drawTriangle(x, y)


}



document.getElementById("clear").onclick = function () { clearCanvas() };

