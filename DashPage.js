document.addEventListener("DOMContentLoaded", function() {
    const aboutuspointer = document.querySelector('.pointaboutus');
    const divaboutus = document.querySelector('.sideaboutus');

    let AboutUsisExpanded = false;

    aboutuspointer.addEventListener('click', function() {
        if (!AboutUsisExpanded) {
            divaboutus.style.width = '90%';
            AboutUsisExpanded = true;
            if(AddressisExpanded = true){
                divaddress.style.width = '';
                AddressisExpanded=false;
            }
        } else {
            divaboutus.style.width = '';
            AboutUsisExpanded = false;
        }
    });


    const addresspointer = document.querySelector('.pointaddress');
    const divaddress = document.querySelector('.sideaddress');

    let AddressisExpanded = false;
    addresspointer.addEventListener('click', function() {
        if (!AddressisExpanded) {
            divaddress.style.width = '90%';
            AddressisExpanded = true;
            if(AboutUsisExpanded = true){
                divaboutus.style.width = '';
                AboutUsisExpanded=false;
            }
        } else {
            divaddress.style.width = '';
            AddressisExpanded = false;
        }
    });
});