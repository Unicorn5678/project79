var names=["Nysha Agarwal" , "Ritesh Agarwal" , "Krati Agarwal" , "Poornima Agarwal" , "Rajendra Agarwal"];
var images=["me.jfif" , "dad.png" , "mom.png" , "grandma.jfif" , "grandpa.jpg"];
var i=0;
function nextslide(){
    i++;
    var numberoffamilymembers=4;
    if(i>numberoffamilymembers){
        i=0;
    }
    var updatedimage=images[i];
    var updatedname=names[i];
    document.getElementById("image").src=updatedimage;
    document.getElementById("name").innerHTML=updatedname;
}