class stuDetails{

   a(){

   }

   b(){

   }

   c(){

   }

   eligiblityForVoting(age:number){
      if(age>=18)
      return true;
      else
      return false;
   }

}

var myObj=new stuDetails();
var flag=myObj.eligiblityForVoting(13);
console.log(flag);
