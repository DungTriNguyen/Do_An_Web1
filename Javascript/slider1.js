//chuyen anh slider 1

var arr_hinh=[
    "/img/gioithieu/1.jpg",
    "/img/gioithieu/0.jpg",
    "/img/gioithieu/about-ibuki05-768x768.jpg"
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

//chuyen anh slider 2

var arr_hinh_2 = [
    "/img/gioithieu/ibuki-restaurant05.jpg",
    "/img/gioithieu/ibuki-restaurant03.jpg",
    "/img/gioithieu/about-ibuki03.jpg",
]

var index_2 = 0;
function next_2(){
    index_2++;
    if(index_2 >= arr_hinh_2.length) index_2 = 0;

    var show_2 = document.getElementById("show_2");
    show_2.src = arr_hinh_2[index_2];
}
setInterval(next_2,3000);

function prev_2(){
    index_2--;
    if(index_2 < 0) index_2 = arr_hinh_2.length-1;

    var show_2 = document.getElementById("show_2");
    show_2.src = arr_hinh_2[index_2];
}