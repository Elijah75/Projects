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
function Binary_Conversion(point){
    Binary.innerText="Binary";
    num=Input.value;
    audio.play();
    outputText.innerText="Binary";

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

// function for octal conversion
function Octal_Conversion(point){
    Binary.innerText="Octal";
    audio.play();
    outputText.innerText="Octal";
    num=Input.value;
    while(num!=0){
        Ans+=num%point;
        num=Math.floor(num/point);
    
                     
}
Reverse(Ans);
Ans="";
num=0;
}

// function for hex conversion
function Hex_Conversion(point){
Binary.innerText="Hex";
outputText.innerText="Hex";
audio.play();
num=Input.value;
while(num!=0){
    Ans+=num%point;
    num=Math.floor(num/point);

}
Reverse(Ans);
Ans="";
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

