function primenot(num){
    let count=0
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count+=1
        }
    }

    if(count==2){
        return true
    }
    else{
        return false
    }

}

function check(limit){
    for(let i=0;i<=limit;i++){
        
        if(primenot(i)==false){
            console.log(i,"NO")
        }
       
    }
}
check(100)