var currentActive = document.querySelector('.active');
var tabhome = document.querySelector('.tabHome');
var tabaoutbus = document.querySelector('.tabAboutus');
var tabaddress = document.querySelector('.tabAddress');


const aboutuspointer = document.querySelector('.pointaboutus');
const divaboutus = document.querySelector('.sideaboutus');
let AboutUsisExpanded = false;

aboutuspointer.addEventListener('click', function() {
});
function clickaboutus() {
    if (!AboutUsisExpanded) {
        divaboutus.style.width = '90%';
        AboutUsisExpanded = true;
        tabaoutbus.classList.add('active');
        if (AddressisExpanded) { // Use === for comparison
            divaddress.style.width = '';
            AddressisExpanded = false;
        }
        currentActive.classList.remove('active');
    } else {


    }
}


const addresspointer = document.querySelector('.pointaddress');
const divaddress = document.querySelector('.sideaddress');
let AddressisExpanded = false;
addresspointer.addEventListener('click', function() {
});
function clickaddress() {
    if (!AddressisExpanded) {
        divaddress.style.width = '90%';
        AddressisExpanded = true;
        if (AboutUsisExpanded) { // Use === for comparison
            divaboutus.style.width = '';
            AboutUsisExpanded = false;
        }
    } else {

    }
}



function toggleActive(element, linkName) {
    var currentActive = document.querySelector('.nav-item.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }  
    element.parentNode.classList.add('active'); 
    if (linkName === 'ABOUTUS') {
        clickaboutus();
    } else if (linkName === 'ADDRESS') {
        clickaddress();
    } else if (linkName === 'HOME') {
        AboutUsisExpanded = false;
        AddressisExpanded = false;
        divaddress.style.width = '';
        divaboutus.style.width = '';
    }
}
