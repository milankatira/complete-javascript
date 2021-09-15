function outest() {
    var c = 20;
    
    function outer() {
    
        function inner() {
            let a = 10;
            console.log(a,c);
           
        }
        return inner();

    }
    return outer();

}

var close = outest()
close();