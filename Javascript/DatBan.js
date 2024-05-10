var orderArray = [];
function ktdatban(){
    if(document.getElementById("ngayThang").value == ""){
        alert("ngay thang rong ! vui long dien ngay thang");
        document.getElementById("ngayThang").focus();
        return false;
    }

    if(document.getElementById("hovaten").value == ""){
        alert("ho va ten rong ! vui long dien ho va ten");
        document.getElementById("hovaten").focus();
        return false;
    }
    
    if(document.getElementById("Email").value == ""){
        alert("Email rong ! vui long dien Email");
        document.getElementById("Email").focus();
        return false;
    }
    if(document.getElementById("Sdt").value == ""){
        alert("SDT rong ! vui long dien SDT");
        document.getElementById("Sdt").focus();
        return false;
    }
    if(document.getElementById("Sdt").value.length < 10){
        alert("SDT khong hop le ! vui long nhap lai!!");
        document.getElementById("Sdt").focus();
        return false;
    }
    if(document.getElementById("Sdt").value.length >= 12){
        alert("SDT khong hop le ! vui long nhap lai!!");
        document.getElementById("Sdt").focus();
        return false;
    }
    if(document.getElementById("soKhach").value == ""){
        alert("So khach rong ! vui long dien So khach");
        document.getElementById("soKhach").focus();
        return false;
    }
    if(document.getElementById("soKhach").value <= 0){
        alert("So khach phai lon hon 0 ! vui long dien So khach");
        document.getElementById("soKhach").focus();
        return false;
    }
//     Phải có ký tự @
// Ký tự @ không nằm ở vị trí đầu
// Phải có ít nhất một dấu . trong địa chỉ mail
// Phải có ít nhất 1 ký tự giữa @ và dấu . cuối cùng
// Phải có ít nhất một ký tự sau dấu . cuối cùng
// Không có khoảng trắng trong địa chỉ mail
// Ví dụ các địa chỉ mail sau đây là không hợp lệ:
// @abc@gmail.com
// abc@mail
// abc@.com
// abc@com
var Email = document.getElementById("Email").value;
var at = Email.indexOf("@");
var dot = Email.lastIndexOf(".");
var space = Email.indexOf(" ");

if ((at != -1) && //có ký tự @
(at != 0) && //ký tự @ không nằm ở vị trí đầu
(dot != -1) && //có ký tự .
(dot > at + 1) && (dot < Email.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
&&
(space == -1)) //không có khoẳng trắng 
{
    
} else {
    alert("Email Invalid");
    return false;
}

return true;
 

}
function datban(){
    if(ktdatban())
    {
        var order = {
            time: document.getElementById("thoiGian").value,
            day: document.getElementById("ngayThang").value,
            fullname: document.getElementById("hovaten").value,
            email: document.getElementById("Email").value,
            phone: document.getElementById("Sdt").value,
            numberpeople: document.getElementById("soKhach").value,     
            note: document.getElementById("ghiChu").value, 
        }
        orderArray = JSON.parse(localStorage.getItem('order'));
        orderArray.push(order);
        localStorage.setItem('order', JSON.stringify(orderArray));
        alert("Dat ban thanh cong !!");
        // orderArray.push(order);
        // localStorage.setItem('order', JSON.stringify(orderArray));
        // orderArray = JSON.parse(localStorage.getItem('order'));
        //  alert("Dang ky thanh cong");

    }

    
}
// var bookButton = document.getElementById("datban");
// bookButton.addEventListener("click",datban);