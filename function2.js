function primenot(num) {
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
    for(i=2;i<=limit;i++){
        let a=primenot(i)
        
        if(a==true){
            console.log(i,"prime")
        }
        else{
            console.log(i,"Not")
        }
    }


}
check(100)