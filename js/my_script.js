


for(let x = 1 ; x <= 100 ; x++) {

    if( x % 3 == 0 &&  x % 5 == 0 ) {
        console.log("FIZZBUZZ");

    }else if( x % 5 == 0) {
        console.log("BUZZ");

    }else if( x % 3 == 0) {
        console.log("FIZZ");
    
    }else { console.log(x);
    }
    
}

const ulElement = document.querySelector("ul");

for(let x = 1 ; x <= 100 ; x++) {

    if( x % 3 == 0 &&  x % 5 == 0 ) {
    const liElement = document.createElement("li");
    liElement. innerHTML = "Fizz-Buzz" ;
     ulElement.appendChild(liElement);


    }else if( x % 5 == 0) {
        const liElement = document.createElement("li");
        liElement. innerHTML = "Buzz" ;
         ulElement.appendChild(liElement);

    }else if( x % 3 == 0) {
        const liElement = document.createElement("li");
        liElement. innerHTML = "Fizz" ;
         ulElement.appendChild(liElement);
    
    }else { 
        const liElement = document.createElement("li");
        liElement. innerHTML = x ;
         ulElement.appendChild(liElement);

    }
    
}

     

     



     
