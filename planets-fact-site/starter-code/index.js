// NavBar button

function myFunction(){

    var x = document.getElementById("myTopnav");

    if(x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }

}

// Buttons

// Mercury

document.getElementById("overviewButton").onclick = function(){
   
    document.getElementById("overviewPara").innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
    document.getElementById("wikiLink").href = "https://en.wikipedia.org/wiki/Mercury_(planet)";
    document.getElementById("structureImage").style.visibility = "hidden";
    document.getElementById("surfaceImage").style.visibility = "hidden";
    document.getElementById("overviewButton").style.background = "rgb(65,158,187)";
    document.getElementById("surfaceButton").style.backgroundColor = "transparent";
    document.getElementById("structureButton").style.backgroundColor = "transparent";
   }

document.getElementById("structureButton").onclick = function(){

    document.getElementById("overviewPara").innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density." ;
    document.getElementById("wikiLink").href = "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure";
    document.getElementById("structureImage").style.visibility = "visible";
    document.getElementById("surfaceImage").style.visibility = "hidden";
    document.getElementById("structureButton").style.background = "rgb(65,158,187)";
    document.getElementById("overviewButton").style.backgroundColor = "transparent";
    document.getElementById("surfaceButton").style.backgroundColor = "transparent";
   }

document.getElementById("surfaceButton").onclick = function (){

    document.getElementById("overviewPara").innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s." ;
    document.getElementById("wikiLink").href = "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology";
    document.getElementById("surfaceImage").style.visibility = "visible";
    document.getElementById("overviewImage").style.visibility = "visible";
    document.getElementById("structureImage").style.visibility = "hidden";
    document.getElementById("surfaceButton").style.background = "rgb(65,158,187)";
    document.getElementById("overviewButton").style.backgroundColor = "transparent";
    document.getElementById("structureButton").style.backgroundColor = "transparent";
}

// Venus

// document.getElementById("overviewButton").onclick = function(){
   
//     document.getElementById("overviewPara").innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
//     document.getElementById("wikiLink").href = "https://en.wikipedia.org/wiki/Mercury_(planet)";
//     document.getElementById("structureImage").style.visibility = "hidden";
//     document.getElementById("surfaceImage").style.visibility = "hidden";
//     document.getElementById("overviewButton").style.background = "rgb(65,158,187)";
//     document.getElementById("surfaceButton").style.backgroundColor = "transparent";
//     document.getElementById("structureButton").style.backgroundColor = "transparent";
//    }

// document.getElementById("structureButton").onclick = function(){

//     document.getElementById("overviewPara").innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density." ;
//     document.getElementById("wikiLink").href = "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure";
//     document.getElementById("structureImage").style.visibility = "visible";
//     document.getElementById("surfaceImage").style.visibility = "hidden";
//     document.getElementById("structureButton").style.background = "rgb(65,158,187)";
//     document.getElementById("overviewButton").style.backgroundColor = "transparent";
//     document.getElementById("surfaceButton").style.backgroundColor = "transparent";
//    }

// document.getElementById("surfaceButton").onclick = function (){

//     document.getElementById("overviewPara").innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s." ;
//     document.getElementById("wikiLink").href = "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology";
//     document.getElementById("surfaceImage").style.visibility = "visible";
//     document.getElementById("overviewImage").style.visibility = "visible";
//     document.getElementById("structureImage").style.visibility = "hidden";
//     document.getElementById("surfaceButton").style.background = "rgb(65,158,187)";
//     document.getElementById("overviewButton").style.backgroundColor = "transparent";
//     document.getElementById("structureButton").style.backgroundColor = "transparent";
// }
