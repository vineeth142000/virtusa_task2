console.log("linked");

async function loadnaruto() {
    document.getElementById("ramen").style.display="none";
    document.getElementById("msg").innerHTML="Loading..."
    setTimeout(function(){
        document.getElementById("msg").style.display="none";
         document.getElementById("ramen").style.display="block";
         }, 5000);
  }
 function loadsasuke() {
    document.getElementById("noob").style.display="none";
    document.getElementById("msg1").innerHTML="Loading..."
    setTimeout(function(){
        document.getElementById("msg1").style.display="none";
         document.getElementById("noob").style.display="block";
         }, 10000);
  }

  function loadex() {
    document.getElementById("pro").style.display="none";
    document.getElementById("msg2").innerHTML="Loading..."
    setTimeout(function(){
        document.getElementById("msg2").style.display="none";
         document.getElementById("pro").style.display="block";
         }, 15000);
  }

window.onload=function(){loadnaruto().then(loadsasuke()).then(loadex());}