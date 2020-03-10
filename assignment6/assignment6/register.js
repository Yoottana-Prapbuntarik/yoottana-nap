
window.onload = pageLoad;
function pageLoad(){
    let myForm = document.getElementById('myForm');
    myForm.onsubmit = validateForm;
}

function validateForm() {
    let dataFromInput = document.forms["myForm"];
    if(dataFromInput.password.value != dataFromInput.Repassword.value ){
        let innerHtml = document.getElementById('errormsg');
        alert('สมัครสมาชิกไม่สำเร็จ');
        innerHtml.innerHTML = "คุณกรอกข้อมูลไม่ถูกต้อง";
        return false;

    }else{
        alert('สมัครสมาชิกสำเร็จ')
    }
}
