var gh = localStorage.getItem('giohang');//mo gio hang tren Storage de lay cac du lieu co san tren gio hang
var giohang = JSON.parse(gh);//chuyen cac du lieu vua lay dc ve dang mang

if(giohang==null){//neu khong lay duoc gi tu Storage thi khoi tao 1 mang gio hang rong de luu du lieu
    var giohang = new Array();
}

//nhan su kien bam nut tu nguoi dung



function themvaogiohang(x){
            
            var boxsp = x.parentElement.parentElement.children;//tim lai cha cua nut button 
            //truy van den cac thanh phan trong the div chua san pham
            var hinh = boxsp[0].children[0].children[0].src;
            var ten = boxsp[1].children[1].innerText;
            var gia = boxsp[1].children[2].children[0].innerText;
            var soluong = boxsp[1].children[3].children[1].value;
    
            var sp = new Array(hinh,ten,gia,soluong);
    
            var kt = 0;//dat trang thai kiem tra coi san pham co trong gio hang hay khong
            for(let i = 0;i < giohang.length;i++){
                if(giohang[i][1]==ten){//tìm thấy sản phẩm trong giỏ hàng
                    kt=1;
                    soluong = parseInt(giohang[i][3])+ parseInt(soluong);
                    giohang[i][3] = soluong;
                    break;
                }
            }
    
            if(kt==0){
                giohang.push(sp);
            }
            showmycart();//in ra cart
            //gửi dữ liệu lên kho lưu trữ
            localStorage.setItem("giohang", JSON.stringify(giohang));
        }

function xoasp(x){
    //xoa tr
    var tr = x.parentElement.parentElement;
    var ten = tr.children[1].innerText;//lay ten cua san pham muon xoa trong ban gio hang
    tr.remove();//xoa hang chua nut xoa vua bam
    //xoa mang
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1]==ten){
            giohang.splice(i,1);
            //su dung ham splice de xoa
            //i la vi tri bat dau xoa va 1 la so phan tu bi xoa
        }
    }
    //console.log(giohang);
    //do sau khi xoa thi tong tien chua cap nhat nen phai goi lai ham showmycart de cap nhat lai gio hang
    showmycart();
}

function Xoatatca(){
    giohang=[];
    localStorage.clear();//xoa tat ca du lieu trong gio hang
    showmycart();
    //console.log(giohang);
}


//thao tac hien va an gio hang
function showcart(){
    
   var x =  document.getElementById("showcart");
   if(x.style.display == "block"){//nếu đang ẩn thì hiện ra và ngược lại
        x.style.display = "none";
   }
   else{
        x.style.display = "block";
   }
   
}




//nhan thong tin cho gio hang
function showmycart(){
    var ttgh="";
    var tong = 0;
    for(let i = 0; i < giohang.length;i++){
        //lan luot ghep cac chuoi thong tin cua san pham da ton tai trong gio hang
        var tt = giohang[i][2] * giohang[i][3];//tinh tong tien
        tong +=tt;
        ttgh+='<tr>'+
            '<td><img src="'+giohang[i][0]+'"></td>'+
            '<td>'+giohang[i][1]+'</td>'+
            '<td><b>'+giohang[i][2]+'</b><b>đ</b></td>'+
            '<td>'+giohang[i][3]+'</td>'+
            '<td>'+
                '<div>'+tt+'</div>'+
            '</td>'+
            '<td>'+
                '<button onclick="xoasp(this)">Xóa</button>'+
            '</td>'+
            '</tr>';
    }
    //noi phan tinh tong vao 
    ttgh+='  <tr>'+
        '<th colspan = "4">Tổng đơn hàng</th>'+
        '<th><div>'+tong+'</div></th>'+
        '</tr>'
    document.getElementById("mycart").innerHTML = ttgh;
}

function showmycart_loadtrang(){  
    var gh = localStorage.getItem('giohang');
    var giohang = JSON.parse(gh);
    if(giohang==null) return;
    var ttgh="";
    var tong = 0;
    for(let i = 0; i < giohang.length;i++){
        //lan luot ghep cac chuoi thong tin cua san pham da ton tai trong gio hang
        var tt = giohang[i][2] * giohang[i][3];//tinh tong tien
        tong +=tt;
        ttgh+='<tr>'+
            '<td><img src="'+giohang[i][0]+'"></td>'+
            '<td>'+giohang[i][1]+'</td>'+
            '<td><b>'+giohang[i][2]+'</b><b>đ</b></td>'+
            '<td>'+giohang[i][3]+'</td>'+
            '<td>'+
                '<div>'+
                    tt+
                '</div>'+
            '</td>'+
            '</tr>';
    }
    //noi phan tinh tong doi hang
    ttgh+='  <tr>'+
        '<th colspan = "4">Tổng đơn hàng</th>'+
        '<th><div>'+tong+'</div></th>'+
        '</tr>'
    document.getElementById("mycart").innerHTML = ttgh;
}

//lay thong tin nguoi dung
function dongydathang(){
    var hoten = document.getElementById("hoten").value;
    var diachi = document.getElementById("diachi").value;
    var dienthoai = document.getElementById("dt").value;
    var email = document.getElementById("email").value;
    if(hoten=="" || diachi=="" || dt=="" || email==""){
        alert("Khong duoc de trong thong tin");
        return;
    }
    var nguoidung = new Array(hoten,diachi,dienthoai,email);

    console.log(nguoidung);

    localStorage.setItem("nguoidung",JSON.stringify(nguoidung));

    window.location.assign("/html/donhang.html");
}

function showthongtinnguoidung(){
    var nguoinhan = localStorage.getItem("nguoidung");
    var thongtin = JSON.parse(nguoinhan);

    var tt =' <tr>'+
            '<p>Họ tên</p>'+
            '<td>'+thongtin[0]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<p>Địa chỉ</p>'+
            '<td>'+thongtin[1]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<p>Điện thoại</p>'+
            '<td>'+thongtin[2]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<p>Email</p>'+
            '<td>'+thongtin[3]+'</td>'+
        '</tr>';
    
    document.getElementById("thongtinnhanhang").innerHTML = tt;
}   

//ham hoan tat hoa don va xoa du lieu gio hang
function hoantat(){
    alert("Đã đặt hàng thành công");
    window.location.assign("/html/MenuPage1/MenuPage1.html");
    localStorage.clear();//xoa tat ca du lieu trong gio hang
    
}
