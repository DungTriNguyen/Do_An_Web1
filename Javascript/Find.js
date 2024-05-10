function show(){
    
    var x =  document.getElementById("finding");
    if(x.style.display == "block"){//nếu đang ẩn thì hiện ra và ngược lại
         x.style.display = "none";
    }
    else{
         x.style.display = "block";
    }
    
 }

 function search_func(){
    let menusearch = document.querySelector('#finding');//lấy phần tử đầu tiên trong id finding
    let menuitem = Array.from(document.querySelectorAll('.list_product'));//Lấy tất cả phần tử của các  lớp list_product 
    //ẩn và hiện khi search
    menuitem.forEach(function(el){//duyệt tất cả các phần tử của mảng với biến el lần lượt là các phần tử của mảng
        let text = el.children[0].children[1].children[1].innerText;//tạo biến text và để tên của các món ăn vào
        //tìm chuỗi con menusearch.value trong chuỗi text 
        //nếu có chuỗi con thì indexof sẽ trả về vị trí xuất hiện đầu tiên của chuỗi
        //nếu ko thì trả về -1
        if(text.indexOf(menusearch.value)>-1){
            el.style.display = "";//hiện món ăn nếu tìm thấy chuỗi con tương ứng 
        }
        else el.style.display = "none";//ẩn món ăn
    })
 }