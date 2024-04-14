function tempConvertor(){
    var Farhenheit=document.getElementById('Farhenheit').value;
    var Celsius=document.getElementById('Celsius').value;
    var Kelvin=document.getElementById('Kelvin').value;
if(Farhenheit !='') {
    Celsius=(parseFloat(Farhenheit)-32)/1.8;
    Kelvin=(parseFloat(Farhenheit-32)*5/9)+273.15;
}else if(Celsius !='') {
    Farhenheit=(parseFloat(Celsius)*1.8)+32;
    Kelvin=(parseFloat(Celsius)+273.15);
}else{
    Farhenheit=(parseFloat(Kelvin)-273.15)*1.8+32;
    Celsius=(parseFloat(Kelvin)-273.15);
}
document.getElementById('Farhenheit').value=parseFloat(Farhenheit).toFixed(2);
document.getElementById('Celsius').value=parseFloat(Celsius).toFixed(2);
document.getElementById('Kelvin').value=parseFloat(Kelvin).toFixed(2);
}

function clearForm() {
document.getElementById('Farhenheit').value = '';
document.getElementById('Celsius').value = '';
document.getElementById('Kelvin').value = '';
} 