function sum ()
{
   var values =[20,30,30,30,20,50];
   var sum =0 ;
   for (var i=0 ; i<values.length ; i++)
   {
     sum+=values[i];
   }
   var avg=sum/values.length;
   return avg;
}
 console.log(sum());