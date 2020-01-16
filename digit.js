function digit_root(n){
    let num_To_Array=n.toString().split('')
    console.log('num to array',num_To_Array)
    if(num_To_Array.length==1){
        return n
    }
    console.log('Legth of the array'+num_To_Array.length)
    while(num_To_Array.length>1){
        let sum=0;
        for(let i=0;i<num_To_Array.length;i++){
            let element=Number(num_To_Array[i])
            sum+=element
        }
        num_To_Array=sum.toString().split('')
    }
    
    return console.log('Single Digit Number',Number(num_To_Array))
}
digit_root(942)