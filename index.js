/*var tweet = prompt("enter tweet");
//alert(tweet.slice(0,1).toUpperCase()+tweet.slice(1,tweet.length).toLowerCase());
//var currentAge= prompt("Enter the yourAge");
//var remainingAge= 90-currentAge;
//alert("you have"+remainingAge*365 +"days and"+remainingAge*52+"weeks and "+remainingAge*12+"months") 
function bmiCalculator(weight,height){
    var bmi=weight/Math.pow(height,2);
    return Math.round(bmi);
}
//alert(bmiCalculator(70,1.7));
var name1=prompt("enter name1");
var name2=prompt("enter name2");
var n = Math.random();
n=(n*100)+1;
alert("love percentage is "+Math.floor(n));
var year= prompt("enter the year");
if(year%4===0){
    if(year%100===0){
        
        if(year%400==0){
            alert("leap year");
        }
        else{
            alert("not leap year");
        }
    }
    else{
    alert("leap year");
    }
}
else{
    alert("not leap year");
}
var guests=["all","is","well"];
var guest=prompt("enter the guest")
if(guests.includes(guest)){
    alert("welcome");
}
else{
    alert("not welcome");
}
var output=[];
var count=1;
function fizzbuzz() {

   if(count%3==0 && count%5===0){
       output.push("fizzbuzz");  
    }
   else if(count%3===0){
       output.push("fizz");  
    }
    else if(count%5===0){
      output.push("buzz");  
    }

    else {
       output.push(count); 
    }    
    count++;  
    console.log(output);
}
var names=["apple","ball","cat","dog","ear"];
nameslength=names.length;
randompos=Math.floor((Math.random()*nameslength));
alert(names[randompos]+" will buy food today");*/

function fabnums(n){
   var fabseries=[];
   if(n===1){
        fabseries=[0];
        console.log(fabseries);
     }
     else if (n===2){
        fabseries=[0,1];
        console.log(fabseries);
     }
   else{
        fabseries=[0,1];
        for(var i=2;i<n;i++) {
          fabseries[i] = fabseries[i-2]+fabseries[i-1];     
         }
      console.log(fabseries);
   }

}
fabnums(10);
