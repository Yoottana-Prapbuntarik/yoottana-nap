function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
        for (var i = 0; i < pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    return params;
}

window.onload = loginLoad;

function loginLoad() {
    // วิธีใช้ getParams()
    var parameter = getParams();
    console.log(parameter["username"]);
    console.log(parameter["password"]);

    var myLogin = document.getElementById("myLogin");
    myLogin.onsubmit = checkLogin;
}

function checkLogin() {
    var parameter = getParams();
    var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];

    //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    if (parameter["username"] === username.value && parameter["password"] === password.value) {
        alert("Logain Finish");
    } else {
        alert("Logain Again");
        return false;
    }
}