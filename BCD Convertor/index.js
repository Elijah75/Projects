// Creating an Variables

const Binary=document.getElementById("binary");
const Input=document.getElementById("Input-value");
const outputText=document.getElementById("output-text");
const OutputShow=document.getElementById("Output-Show");

 const audio=new Audio("./click.mp3");
    

let Ans="";
let num=0;
let Reversed="";

    // Function To Input A Song By Clicking On A Button Or A Search Bar
function input(){
    audio.play();
}
    // function for binary conversion
function Conversion(point,Name){
    Binary.innerText=`${Name}`;
    num=Input.value;
    audio.play();
    outputText.innerText=`${Name}`

            // Logic For the conversion of the Binary number
            while(num!=0){
                    // Logic For Obtaining A Number 
                Ans+=num%point;
                num=Math.floor(num/point);
            }
   
            Reverse(Ans);
          
            Ans='';
            num=0;
          
        }




// Logic TO Reverse a Given Number
function Reverse(Ans){

let ans='';
for(let i=Ans.length-1 ;i>=0;i--){
   
ans=ans+Ans[i];
}

OutputShow.innerText=ans;

}
function Reset(){
    OutputShow.innerText="000";
}

