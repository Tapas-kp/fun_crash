function con(char){
    let alp="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0;i<26;i++){
        if(alp[i]==char){
            return true
        }
       
    }
    return false
}
function check(char){
  let a=con(char)
  if(a==true){
    console.log("cap")
  }
  else{
    console.log("small");
  }
    
}
check("d")