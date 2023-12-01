const display = document.getElementById('ohienthi')
function hienthi(input){
    display.value += input;
}
function tinhtoan(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "ERROR";
    }
}
function xoa(input){
    display.value ="";
}