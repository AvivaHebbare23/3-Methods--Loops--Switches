// METHODS
var str = "AmAzInG";
document.write(str.toUpperCase());
document.write("<br>");
document.write(str.toLowerCase());
document.write("<br>");
document.write(str.startsWith('A'));
document.write("<br>");
document.write(str.startsWith('B'));
document.write("<br>");

var sen = "I learnt about methods";
var patt = new RegExp("out");
var res = patt.test(sen);

document.write(res+"<hr>")

// LOOPS
for(i=0;i<5;i++)
{
    document.write("Aviva"+"<br>")
}

document.write("<hr>")

fruit = ["Apple ", "Mango ", "Orange ", "Banana "]
for(i=0;i<fruit.length;i++)
{
    document.write(fruit[i])
}

document.write("<hr>")

// SWITCHES
var day;
var x=new Date().getDay()
switch(x)
{
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.write("Today is " + day)