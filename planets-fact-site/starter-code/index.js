// NavBar button function

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', ()=>{

    navbarLinks.classList.toggle('active');

});

// Buttons

// When clicking on a button it should change its color 

$("button").click(function() {
    $("button").removeClass("active");
    $(this).addClass("active");
 });

// Mercury

 var mercuryPara = ["Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.", "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.", "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."];
 var mercuryLinks = ["https://en.wikipedia.org/wiki/Mercury_(planet)", "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure", "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"];

 $("#overviewButton").click(function(){
    $("#overviewPara").html(mercuryPara[0]);
    $("#wikiLink").attr("href", mercuryLinks[0]);
    $("#overviewImage").attr("style", "visibilty: visible");
    $("#structureImage").attr("style", "visibilty: hidden");
    $("#surfaceImage").attr("style", "visibility: hidden");
});

 $("#structureButton").click(function(){
     $("#overviewPara").html(mercuryPara[1]);
     $("#wikiLink").attr("href", mercuryLinks[1]);
     $("#structureImage").attr("style", "visibility: visible");
     $("#surfaceImage").attr("style", "visibility: hidden");
 });

 $("#surfaceButton").click(function(){
    $("#overviewPara").html(mercuryPara[2]);
    $("#wikiLink").attr("href", mercuryLinks[2]);
    $("#overviewImage").attr("style", "visibilty: visible");
    $("#structureImage").attr("style", "visibilty: hidden");
    $("#surfaceImage").attr("style", "visibility: visible");
});
 
// Venus

var venusPara = ["Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.", "  The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least par tially liquid because the two planets have been cooling at about the same rate.", "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."];
var venusLinks = ["https://en.wikipedia.org/wiki/Venus", "https://en.wikipedia.org/wiki/Venus#Internal_structure", "https://en.wikipedia.org/wiki/Venus#Surface_geology"];

$("#venusoverviewButton").click(function(){
   $("#overviewPara").html(venusPara[0]);
   $("#wikiLink").attr("href", venusLinks[0]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageVenus").attr("style", "visibility: hidden");
});

$("#venusstructureButton").click(function(){
    $("#overviewPara").html(venusPara[1]);
    $("#wikiLink").attr("href", venusLinks[1]);
    $("#structureImage").attr("style", "visibility: visible");
    $("#surfaceImageVenus").attr("style", "visibility: hidden");
});

$("#venussurfaceButton").click(function(){
   $("#overviewPara").html(venusPara[2]);
   $("#wikiLink").attr("href", venusLinks[2]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageVenus").attr("style", "visibility: visible");
});

// Earth

var earthPara = ["Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.", "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.", "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."];
var earthLinks = ["https://en.wikipedia.org/wiki/Earth", "https://en.wikipedia.org/wiki/Earth#Internal_structure", "https://en.wikipedia.org/wiki/Earth#Surface"];

$("#earthoverviewButton").click(function(){
   $("#overviewPara").html(earthPara[0]);
   $("#wikiLink").attr("href", earthLinks[0]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageEarth").attr("style", "visibility: hidden");
});

$("#earthstructureButton").click(function(){
    $("#overviewPara").html(earthPara[1]);
    $("#wikiLink").attr("href", earthLinks[1]);
    $("#structureImage").attr("style", "visibility: visible");
    $("#surfaceImageEarth").attr("style", "visibility: hidden");
});

$("#earthsurfaceButton").click(function(){
   $("#overviewPara").html(earthPara[2]);
   $("#wikiLink").attr("href", earthLinks[2]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageEarth").attr("style", "visibility: visible");
});

// Mars

var marsPara = ["Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".", "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.", "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."];
var marsLinks = ["https://en.wikipedia.org/wiki/Mars", "https://en.wikipedia.org/wiki/Mars#Internal_structure", "https://en.wikipedia.org/wiki/Mars#Surface_geology"];

$("#marsoverviewButton").click(function(){
   $("#overviewPara").html(marsPara[0]);
   $("#wikiLink").attr("href", marsLinks[0]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageMars").attr("style", "visibility: hidden");
});

$("#marsstructureButton").click(function(){
    $("#overviewPara").html(marsPara[1]);
    $("#wikiLink").attr("href", marsLinks[1]);
    $("#structureImage").attr("style", "visibility: visible");
    $("#surfaceImageMars").attr("style", "visibility: hidden");
});

$("#marssurfaceButton").click(function(){
   $("#overviewPara").html(marsPara[2]);
   $("#wikiLink").attr("href", marsLinks[2]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageMars").attr("style", "visibility: visible");
});

// Jupiter

var jupiterPara = ["Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.", "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.", "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."];
var jupiterLinks = ["https://en.wikipedia.org/wiki/Jupiter", "https://en.wikipedia.org/wiki/Jupiter#Internal_structure", "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"];

$("#jupiteroverviewButton").click(function(){
   $("#overviewPara").html(jupiterPara[0]);
   $("#wikiLink").attr("href", jupiterLinks[0]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageJupiter").attr("style", "visibility: hidden");
});

$("#jupiterstructureButton").click(function(){
    $("#overviewPara").html(jupiterPara[1]);
    $("#wikiLink").attr("href", jupiterLinks[1]);
    $("#structureImage").attr("style", "visibility: visible");
    $("#surfaceImageJupiter").attr("style", "visibility: hidden");
});

$("#jupitersurfaceButton").click(function(){
   $("#overviewPara").html(jupiterPara[2]);
   $("#wikiLink").attr("href", jupiterLinks[2]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageJupiter").attr("style", "visibility: visible");
});

//Saturn

var saturnPara = ["Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.", "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.", "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."];
var saturnLinks = ["https://en.wikipedia.org/wiki/Saturn", "https://en.wikipedia.org/wiki/Saturn#Internal_structure", "https://en.wikipedia.org/wiki/Saturn#Atmosphere"];

$("#saturnoverviewButton").click(function(){
   $("#overviewPara").html(saturnPara[0]);
   $("#wikiLink").attr("href", saturnLinks[0]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageSaturn").attr("style", "visibility: hidden");
});

$("#saturnstructureButton").click(function(){
    $("#overviewPara").html(saturnPara[1]);
    $("#wikiLink").attr("href", saturnLinks[1]);
    $("#structureImage").attr("style", "visibility: visible");
    $("#surfaceImageSaturn").attr("style", "visibility: hidden");
});

$("#saturnsurfaceButton").click(function(){
   $("#overviewPara").html(saturnPara[2]);
   $("#wikiLink").attr("href", saturnLinks[2]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageSaturn").attr("style", "visibility: visible");
});

//Uranus

var uranusPara = ["Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.", "  The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.", "  The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."];
var uranusLinks = ["https://en.wikipedia.org/wiki/Uranus", "https://en.wikipedia.org/wiki/Uranus#Internal_structure", "https://en.wikipedia.org/wiki/Uranus#Atmosphere"];

$("#uranusoverviewButton").click(function(){
   $("#overviewPara").html(uranusPara[0]);
   $("#wikiLink").attr("href", uranusLinks[0]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageUranus").attr("style", "visibility: hidden");
});

$("#uranusstructureButton").click(function(){
    $("#overviewPara").html(uranusPara[1]);
    $("#wikiLink").attr("href", uranusLinks[1]);
    $("#structureImage").attr("style", "visibility: visible");
    $("#surfaceImageUranus").attr("style", "visibility: hidden");
});

$("#uranussurfaceButton").click(function(){
   $("#overviewPara").html(uranusPara[2]);
   $("#wikiLink").attr("href", uranusLinks[2]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageUranus").attr("style", "visibility: visible");
});

//Neptune

var neptunePara = ["Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.", "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.", "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."];
var neptuneLinks = ["https://en.wikipedia.org/wiki/Neptune", "https://en.wikipedia.org/wiki/Neptune#Internal_structure", "https://en.wikipedia.org/wiki/Neptune#Atmosphere"];

$("#neptuneoverviewButton").click(function(){
   $("#overviewPara").html(neptunePara[0]);
   $("#wikiLink").attr("href", neptuneLinks[0]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageNeptune").attr("style", "visibility: hidden");
});

$("#neptunestructureButton").click(function(){
    $("#overviewPara").html(neptunePara[1]);
    $("#wikiLink").attr("href", neptuneLinks[1]);
    $("#structureImage").attr("style", "visibility: visible");
    $("#surfaceImageNeptune").attr("style", "visibility: hidden");
});

$("#neptunesurfaceButton").click(function(){
   $("#overviewPara").html(neptunePara[2]);
   $("#wikiLink").attr("href", neptuneLinks[2]);
   $("#overviewImage").attr("style", "visibilty: visible");
   $("#structureImage").attr("style", "visibilty: hidden");
   $("#surfaceImageNeptune").attr("style", "visibility: visible");
});
