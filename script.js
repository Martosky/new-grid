const button = document.getElementById("top-btn");

window.onscroll = function(){
        showScrool()
}
function showScrool(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}