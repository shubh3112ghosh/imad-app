//button code

var button=document.getElementById('counter');
var counter = 0;
button.onClick = function()
{
    //make a request to the counter endpoint
    
    //get the response and store it in a variable
    
    //render the variable in the correct span
    counter = counter + 1;
    var span=document.getElementById('count');
    span.innerHtml = counter.toString();
    
    
};