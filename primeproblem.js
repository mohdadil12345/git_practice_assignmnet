let num = 13;

let count = 0;

for(let i=2; i<num; i++){

    if( num % i== 0){
        count++;
    }

}
if(count == 0){
    console.log("yes it is prime")
}else{
    console.log("not a prime")
}

