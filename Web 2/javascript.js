const moi = document.querySelectorAll('.container .sanpham .info .new');
const para1 = document.getElementById('1');
const para2 = document.getElementById('2');


const icon1 = document.getElementById('righticon1');
const moreinfo1 = document.getElementById('moreinfo1');
const icon2 = document.getElementById('righticon2');
const moreinfo2 = document.getElementById('moreinfo2');
const icon3 = document.getElementById('righticon3');
const moreinfo3 = document.getElementById('moreinfo3');


const thongtin = document.querySelectorAll('.container .thongtin .thongtinbottom');
const thongtintop = document.querySelectorAll('.container .top .info .thongtintop');

// Khi hover chuột qua chữ 'mới' thì sẽ khiến cho chữ 'iphone' cũng sáng lên
moi.forEach(element =>{
    element.addEventListener('mouseover',()=>{
        if(element == moi[0]){
            para1.style.color = "rgb(101, 101, 196)";
        }
        if(element == moi[1]){
            para2.style.color = "rgb(101, 101, 196)";
        }
    })
    element.addEventListener('mouseout',()=>{
        if(element == moi[0]){
            para1.style.color = "#383636";
        }
        if(element == moi[1]){
            para2.style.color = "#383636";
        }
    })
});

// Khi di chuột vào tìm hiểu thêm hoặc nút > thì sẽ có underline
icon1.addEventListener('mouseover',()=>{
    moreinfo1.style.textDecoration ='underline';
});
moreinfo1.addEventListener('mouseover',()=>{
    moreinfo1.style.textDecoration ='underline';
});

icon1.addEventListener('mouseout',()=>{
    moreinfo1.style.textDecoration ='none';
});
moreinfo1.addEventListener('mouseout',()=>{
    moreinfo1.style.textDecoration ='none';
});

icon2.addEventListener('mouseover',()=>{
    moreinfo2.style.textDecoration ='underline';
});
moreinfo2.addEventListener('mouseover',()=>{
    moreinfo2.style.textDecoration ='underline';
});

icon2.addEventListener('mouseout',()=>{
    moreinfo2.style.textDecoration ='none';
});
moreinfo2.addEventListener('mouseout',()=>{
    moreinfo2.style.textDecoration ='none';
});

icon3.addEventListener('mouseover',()=>{
    moreinfo3.style.textDecoration ='underline';
});
moreinfo3.addEventListener('mouseover',()=>{
    moreinfo3.style.textDecoration ='underline';
});

icon3.addEventListener('mouseout',()=>{
    moreinfo3.style.textDecoration ='none';
});
moreinfo3.addEventListener('mouseout',()=>{
    moreinfo3.style.textDecoration ='none';
});


// thông tin cửa hàng khi di chuột vào cửa hàng
let activeScreen;
thongtintop.forEach(element =>{
    element.addEventListener('mouseover', ()=>{
        if(element == thongtintop[0]){
            
            thongtin[0].style.display ='grid';
            activeScreen.display.style ='none';
            activeScreen = thongtin[0];
            
        }
        else if (element == thongtintop[1]) {
            
            thongtin[1].style.display ='grid';
            activeScreen.display.style ='none';
            activeScreen = thongtin[1];
        }
    })
})


thongtin.forEach(element =>{
    element.addEventListener('mouseover', ()=>{
        if(element == thongtin[0]){
            thongtin[0].style.display ='grid';
            activeScreen = element;
        }
        else if (element == thongtin[1]) {
            thongtin[1].style.display ='grid';
            activeScreen = element;
        }
    })
})

thongtin.forEach(element =>{
    element.addEventListener('mouseout', ()=>{
        if(element == thongtin[0]){
            thongtin[0].style.display ='none';
        }
        else if (element == thongtin[1]) {
            thongtin[1].style.display ='none';
        }
    })
})

