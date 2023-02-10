let num = 11;

let count = 0;

for(let i=2; i<num; i++){

    if(i % num == 0){
        count++;
    }

}
if(count == 0){
    console.log("yes it is prime")
}else{
    console.log("not a palidrome")
}