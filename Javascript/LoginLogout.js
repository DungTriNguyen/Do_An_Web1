let userArray = [];
//admin user
function CreateAdmin() {
    if (localStorage.getItem('user') == null) {
        var user = {
            username: 'admin',
            password: 'admin',
            fullname: 'Admin Van Teo',
            address: '',
            phone: '0777888999',
            datesignup: ''
        };
        userArray.push(user);
        localStorage.setItem('user', JSON.stringify(userArray));
    }
}
CreateAdmin();

function Login() {
    var username = document.getElementById("iduser").value;
    var password = document.getElementById("idpass").value;
    userArray = JSON.parse(localStorage.getItem('user'));
    var check = 0;
    for (i = 0; i < userArray.length; i++) {
        if (userArray[i].username == username && userArray[i].password == password) {
            if (username == 'admin' && password == 'admin') {
                // window.location = "";
                // logoutEl.style.visibility = 'visible';
                // loginEl.style.visibility = 'hidden';
                logoutBtn.style.display = 'block';
                userBtn.style.display = 'none';
                dongdangnhap();
            }
            else {
                alert("Ban da dang nhap thanh cong !!");
                userBtn.style.display = 'none';

                logoutBtn.style.display = 'block';
                // logoutEl.style.visibility = 'visible';
                // loginEl.style.visibility = 'hidden';
                dongdangnhap();
            }

            check = 1;
        }
    }

    if (check == 0) {
        if (username == "" || password == "") {
            alert("Tai khoan hoac mat khau dang rong !!");
        }
        else {

            alert("Thong tin dang nhap khong chinh xac");
        };
    }
}


function ktdangky() {

    if (document.getElementById("fullname").value == "") {
        alert("Ho va ten rong");
        document.getElementById("fullname").focus();
        return false
    }
    if (document.getElementById("userPhone").value == "") {
        alert("Dien thoai rong");
        document.getElementById("userPhone").focus();
        return false
    }
    if (document.getElementById("userName").value == "") {
        alert("Ten dang nhap rong");
        document.getElementById("userName").focus();
        return false
    }
    if (document.getElementById("userName").value.length < 5) {
        alert("Ten dang nhap qua ngan");
        document.getElementById("userName").focus();
        return false
    }
    if (document.getElementById("userPass").value == "") {
        alert("Vui long nhap mat khau");
        document.getElementById("userPass").focus();
        return false
    }
    if (document.getElementById("userPass").value.length < 5) {
        alert("Mat khau qua ngan");
        document.getElementById("userPass").focus();
        return false
    }
    if (document.getElementById("userPass2").value == "") {
        alert("Vui long nhap lai mat khau");
        document.getElementById("userPass2").focus();
        return false
    }
    if (document.getElementById("userPass").value != document.getElementById("userPass2").value) {
        alert("Mat khau khong trung khop");
        document.getElementById("userPass").focus();
        return false;
    }
    return dangky();
}

function dangky() {
    var user = {
        username: document.getElementById("userName").value,
        password: document.getElementById("userPass").value,
        fullname: document.getElementById("fullname").value,
        address: document.getElementById("userAddress").value,
        phone: document.getElementById("userPhone").value,
    }
    userArray.push(user);
    localStorage.setItem('user', JSON.stringify(userArray));
    userArray = JSON.parse(localStorage.getItem('user'));
    dongdangnhap();
    alert("Dang ky thanh cong");
    dangnhap();
}


// Dang xuat
var userBtn = document.querySelector('.user-login');
var logoutBtn = document.querySelector('.user-logout');


logoutBtn.addEventListener('click',
    function () {
        alert("Logout success");
        logoutBtn.style.display = 'none';
        userBtn.style.display = 'block';
        // logoutEl.style.visibility = 'hidden';
        // loginEl.style.visibility = 'visible';
        localStorage.removeItem('order');
        // localStorage.removeItem('giohang');
        // localStorage.clear('giohang');
      

    })
    


function dangnhap() {
    document.getElementById("idmodal").setAttribute("style", "opacity:1");
    document.getElementById("mdbd").setAttribute("style", "opacity:1");
    document.getElementById("iddangki").style.display = "none";
}

function dongdangnhap() {
    document.getElementById("idmodal").style.display = "none";
    document.getElementById("iddangki").style.display = "none";
}

function modangki() {

    document.getElementById("mdbd").style.display = "none";
    document.getElementById("iddangki").setAttribute("style", "opacity:1");
}


