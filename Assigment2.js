//take only single characters from the given string
let str="ababaceldkeeedld";
let ans="";
let uniqueChar=()=>{
    for(i=0;i<str.length;i++){
        if(ans.indexOf(str[i])==-1){
            ans=ans+str[i];
        }
    }
    console.log(ans);
}
uniqueChar();