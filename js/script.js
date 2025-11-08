function init(){
    function myEventFunct(){
        var message = document.getElementById('entry_input').value;
        alert("Milan: " + message);
        document.getElementById('result').innerHTML = "<h3>" + message + "</h3>";
    }
    var result= document.getElementById('entrybutton');
    result.addEventListener('click',myEventFunct)
}
window.addEventListener('load', init);


