
(function(){

    const _FEET_ = 3.281;     // To meters
    const _LITER_ = 0.264;    // To gallons
    const _KILOGRAM_ = 2.204; // To pounds

    const btn = document.querySelector('#convert');
    const input = document.querySelector("#unit");
    const meter = document.querySelector("#meter");
    const volume = document.querySelector("#volume");
    const mass = document.querySelector("#mass");

    btn.addEventListener('click', ConvertUnit );

    function ConvertUnit(){
        let unit = input.value;
        if(input.value > 0){
            meter.textContent = ConvertToMeterAndFeet(unit);
            volume.textContent = ConvertToLitersToGallons(unit);
            mass.textContent = ConvertToKilogramsAndPounds(unit);
        }
        else{
            input.focus();
        }
    }

    function ConvertToMeterAndFeet(unit){
        let meterToFeet = (unit * _FEET_).toFixed(3);
        let feetToMeter = (unit / _FEET_).toFixed(3);
        let convertion = `${unit} meters  = ${meterToFeet} feet | ${unit} feet = ${feetToMeter} meters`;
        return convertion;
    }

    function ConvertToLitersToGallons(unit){
        let literToGallons = (unit * _LITER_ ).toFixed(3);
        let GallonsToLiters = (unit / _LITER_).toFixed(3);
        let convertion = `${unit} liters  = ${literToGallons} gallons | ${unit} gallons = ${GallonsToLiters} liters`;
        return convertion;
    }

    function ConvertToKilogramsAndPounds(unit){
        let kilogramsToPounds = (unit * _KILOGRAM_ ).toFixed(3);
        let PoundsToKilograms = (unit / _KILOGRAM_).toFixed(3);
        let convertion = `${unit} kilograms  = ${kilogramsToPounds} pounds | ${unit} pounds = ${PoundsToKilograms} kilograms`;
        return convertion;
    }

})();