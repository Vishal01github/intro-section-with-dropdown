function drdwToggler(){
    document.getElementById("myDrdw").classList.toggle("show-drdw");
    var c_up = document.querySelector(".caret-up");
    c_up.classList.toggle("show");
    var c_down = document.querySelector(".caret-down")
    c_down.classList.toggle("hide");
    console.log("hello")
}

function drdwToggler2(){
    document.getElementById("myDrdw1").classList.toggle("show-drdw");
    var c_up = document.querySelector(".caret-up1");
    c_up.classList.toggle("show");
    var c_down = document.querySelector(".caret-down1")
    c_down.classList.toggle("hide");
}

function drdwToggler3(){
    var x = document.getElementById("caret-mob-up")
    x.classList.toggle("show")
    document.getElementById("caret-mob-down").classList.toggle("hide")
    x = document.getElementById("myDrdw2");
    if(x.style.display === "flex"){
        x.style.display = "none";
        var y = document.getElementById("mob-options")
        y.style.height = "200px";
    }else{
        var y = document.getElementById("mob-options")
        y.style.height = "375px";
        x.style.display = "flex"
    }
}
function drdwToggler4(){
    var x = document.getElementById("caret-mob-up1")
    x.classList.toggle("show")
    document.getElementById("caret-mob-down1").classList.toggle("hide")
    x = document.getElementById("myDrdw3");
    if(x.style.display === "flex"){
        x.style.display = "none";
        var y = document.getElementById("mob-options")
        y.style.height = "200px";
    }else{
        var y = document.getElementById("mob-options")
        y.style.height = "375px";
        x.style.display = "flex"
    }
}

function hamToggler(){
    var x = document.getElementById("close-menu")
    if(x.style.display === "none"){
        x.style.display = "inline-block";
        document.getElementById("open-menu").style.display = "none";
        document.getElementById("mob-drdw").style.display = "grid";
        //document.body.style.backgroundColor = "rgba(0,0,0,0.7)"
    }else{
        x.style.display = "none";
        document.getElementById("open-menu").style.display = "inline-block";
        document.getElementById("mob-drdw").style.display = "none";
        document.body.style.backgroundColor = "hsl(0,0%,98%)"
    }
}

window.onclick = function(event){
    if(!event.target.matches(".item-drdw" )){
        var drdws = document.getElementsByClassName("drdw-menu");
        var i;
        for(i=0;i<drdws.length;i++){
            var open = drdws[i];
            if(open.classList.contains("show-drdw")){
                open.classList.remove("show-drdw");
            }
        }
    }
    /*if(!event.target.matches(".hamburger") || !event.target.matches(".close-icon") || !event.target.matches(".open-icon")){
        var x = document.getElementById("close-menu")
        x.style.display = "none";
        document.getElementById("open-menu").style.display = "inline-block";
        document.getElementById("mob-drdw").style.display = "none";
        document.body.style.backgroundColor = "hsl(0,0%,98%)"
    }*/
}