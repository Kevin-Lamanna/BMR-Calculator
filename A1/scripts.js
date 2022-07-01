function calculateBMR() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var lbs = document.getElementById("lbs");
    var inches = document.getElementById("inches");
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var BMR = 0;
    var activeNum = 0;
    var TDEE = 0;

    lbs.checked ? weight = weight*0.453592 : weight = weight;
    inches.checked ? height = height*2.54 : height = height;

    if (male.checked)
    {
       BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
       
       if (document.getElementById("activity").value == "light")
       {
        activeNum = 1.2;
        
       }

       else if (document.getElementById("activity").value =="moderate")
       {
        activeNum = 1.375;
       }

       else if (document.getElementById("activity").value =="high")
       {
        activeNum = 1.725;
       }

       else if (document.getElementById("activity").value =="extreme")
       {
        activeNum = 1.9;
       }

       TDEE = BMR*activeNum;

    }

    else if (female.checked)
    {
       BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
       
       if (document.getElementById("activity").value == "light")
       {
        activeNum = 1.2;
        
       }

       else if (document.getElementById("activity").value =="moderate")
       {
        activeNum = 1.375;
       }

       else if (document.getElementById("activity").value =="high")
       {
        activeNum = 1.725;
       }

       else if (document.getElementById("activity").value =="extreme")
       {
        activeNum = 1.9;
       }

       TDEE = BMR*activeNum;
    }

    alert("Your BMR is " + BMR + " calories per day, \nand your Total Daily Energy Expenditure is " + TDEE + " calories per day");

    document.getElementById("submit").addEventListener("click", calculateBMR, false);
    
    
 }