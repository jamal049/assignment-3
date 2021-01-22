// problem-1 kilometerToMeter    


function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;

}
// var homeToKushtia=kilometerToMeter(30);





      // problem-2  budgetCalculator   

function budgetCalculator(watch,mobile,laptop){
    var watchBudget=watch*50;
    var mobileBudget=mobile*100;
    var laptopBudget=laptop*500;
    var totalBudget=watchBudget+mobileBudget+laptopBudge;
    return totalBudget;

}
// var result=budgetCalculator(3,2,3);
// console.log(result);





      //problem-3  hotelCost    

 function hotelCost(days){
     if(days=0){
         return "please enter posative valu";
     }
     else if(days<=10){
         var cost=days*100;
         return cost;
     }
     else if(days<=20){
        cost=((days-10)*80)+(10+100);
        return cost;
    }
    else{
        cost=(days-20*50)+(10*100)+(10*80);
        return cost;
    }

 }
//  var result=hotelCost;
//  console.log(result);





       // problem-4 megaFriend      

function megaFriend(friends){
    var largestName ="";
    for(i=0;i<friends.length;i++){
        if(friends[i].length>largestName.length){
            largestName=friends[i];

        }

    }
    return largestName;
}
// var result=megaFriend([jamal],[kamrul],[solaiman]);
// console.log(resrlt);