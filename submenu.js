function muda(){
    var element = document.getElementById("a1");
    if(element.style.display == "none")
    {
        document.getElementById("a1").style.display = "flex";
        document.getElementById("a2").style.display = "flex";
        document.getElementById("a3").style.display = "flex";
        document.getElementById("a4").style.display = "flex";
    }
    else
    {
        document.getElementById("a1").style.display = "none";
        document.getElementById("a2").style.display = "none";
        document.getElementById("a3").style.display = "none";
        document.getElementById("a4").style.display = "none";
    }
}
function esconde()
{
    document.getElementById("a1").style.display = "none";
    document.getElementById("a2").style.display = "none";
    document.getElementById("a3").style.display = "none";
    document.getElementById("a4").style.display = "none";
}
window.onload = function() {
    esconde();
  }