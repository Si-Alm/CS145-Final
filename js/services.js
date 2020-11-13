var investigativeServices = ["Kidnapping", "Arson Investigation", "Cheating Spouse Surveillance"];
var securityServices = ["Home Security", "Event Security", "Personal Security"];

function toggleService(type, index) {
    let serviceDivs;
    let headerText;
    let listText;

    if ('Security' == type) {
        serviceDivs = document.getElementsByClassName("security-text");
        headerText = document.getElementById("security-head");
        listText = document.getElementsByClassName("security-list");
    } else {
        serviceDivs = document.getElementsByClassName("investigative-text");
        headerText = document.getElementById("investigative-head");
        listText = document.getElementsByClassName("investigative-list");
    }

    for (let i = 0; i < serviceDivs.length; i++) {
        if (i != index) {
            serviceDivs[i].style.display = "none";
            listText[i].style.color = "white";
        } else {
            serviceDivs[i].style.display = "block";
            listText[i].style.color = "red";
        }
    }

    headerText.innerHTML = "Security" == type ? securityServices[index] : investigativeServices[index];
}