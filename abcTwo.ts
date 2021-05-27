class firstClass{
    stuName:string='Pratyush';

    show(){
        console.log("this is show method");
        
    }
}

class secondClass extends firstClass{
    empName:string='Roshan';

    display(){
        console.log("Employee Name:- ",this.empName);

        console.log("Student Name:- ",this.stuName);
        this.show()
    }  
    
}
var myobj=new secondClass();
myobj.display();
