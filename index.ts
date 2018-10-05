/*Aufgabe: Aufgabe 0
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 05.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace index {

    interface iLike {
        see: string;
        text: string;
    }

    //I Like 1
    var games: iLike = {
        see: "ME3.jpg",
        text: "Gameing. Because: 'I Took an Arrow in the Knee' ;) ",
    }

    //I Like 2
    var Robots: iLike = {
        see: "PacRim.jpeg",
        text: "Robots and machines in general",
    }

    //I Like 3
    var Physics: iLike = {
        see: "physics.gif",
        text: "I allways wanted to be a physicist, but well...",
    }

    //I Like 4
    var learning: iLike = {
        see: "studying.gif",
        text: "Learning new things. I know, crazy!",
    }

    //I Like 5, comming soon (maybe)


    var all: iLike[] = [games, Robots, Physics, learning];

    function writeHTML(): void {

        var node: any = document.getElementById("main");
        var childNodeHTML: string;

        var i: number = 0;
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

    document.addEventListener('DOMContentLoaded', writeHTML);
}