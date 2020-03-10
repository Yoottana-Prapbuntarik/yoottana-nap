let getCurrentMessange = "" , state = 0;

function InputMessage(getmessageFormuser){
    getCurrentMessange = getmessageFormuser;
}

function showInputInPost1(){
    let post1 = document.getElementById('post1');
    post1.innerHTML = getCurrentMessange;
}
function showInputInreply1(){
    let reply1 = document.getElementById('reply1');
    reply1.innerHTML = getCurrentMessange;
}
function showInputInreply2(){
    let reply2 = document.getElementById('reply2');
    reply2.innerHTML = getCurrentMessange;
}

function postFunction(){
    state = state + 1;
    if(state == 1){
        showInputInPost1();
    }else if(state == 2){
        showInputInreply1();
    }else {
        showInputInreply2();
    }
}

function clearFunction(){
    let post1 = document.getElementById('post1');
    let reply1 = document.getElementById('reply1');
    let reply2 = document.getElementById('reply2');
    post1.innerHTML = "";
    reply1.innerHTML = "";
    reply2.innerHTML = "";
    state = 0;
}