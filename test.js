function funOne(){
    let a=10;
    console.log(a);
    function funTwo(){
        console.log("-->",a);
    }
    funTwo();
}

funOne();