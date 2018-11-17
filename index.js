/*Aufgabe: Aufgabe 0
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 05.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var index;
(function (index) {
    document.addEventListener('DOMContentLoaded', writeHTML);
    //I Like 1
    var games = {
        see: "ME3.jpg",
        text: "Gaming, because: 'I Took an Arrow in the Knee' ;) ",
    };
    //I Like 2
    var Robots = {
        see: "PacRim.jpeg",
        text: "Robots and machines in general",
    };
    //I Like 3
    var Physics = {
        see: "physics.gif",
        text: "I always wanted to be a physicist, but well...",
    };
    //I Like 4
    var learning = {
        see: "studying.gif",
        text: "Learning new things - I know, crazy!",
    };
    //I Like 5, comming soon (maybe)
    var all = [games, Robots, Physics, learning];
    function writeHTML() {
        var node = document.getElementById("main");
        var childNodeHTML;
        var i = 0;
        while (i < all.length) {
            childNodeHTML = "";
            childNodeHTML += "<article>";
            childNodeHTML += "<img src=pics/" + all[i].see + ">";
            childNodeHTML += "<p>" + all[i].text + "</p>";
            childNodeHTML += "</article>";
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
})(index || (index = {}));
//# sourceMappingURL=index.js.map