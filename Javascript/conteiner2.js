//chuyen anh slider 1

var arr_hinh=[
    "/img/home/ibuki-restaurant01.jpg",
    "/img/home/Chef-performance-pepper-seasoning-512x768.jpg",
    "/img/home/Customers-teppanyaki-ibuki-01 (1).jpg"
]

var index = 0;

function next_1(){
    index++;
    if(index >= arr_hinh.length) index = 0;

    var show = document.getElementById("show_1");
    show.src = arr_hinh[index];
}

setInterval(next_1, 3000);//set thoi gian chay lai ham 
function prev_1(){
    index--;
    if(index < 0) index = arr_hinh.length-1;

    var show = document.getElementById("show_1");
    show.src = arr_hinh[index];
}

