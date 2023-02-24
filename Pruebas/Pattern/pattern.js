// 1-How many rows you want in the pattern


let n = Number(prompt("Enter rows"));

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *


for(let i =0; i<n;i++){
    for(let j = 0;j<n;j++){
        document.write("* ");
    }  
    document.write("<br>"); 
}

document.write("<br><br>");

// *
// * *
// * * *
// * * * *
// * * * * *

for(let i =0; i<n;i++){
    for(let j = 0;j<=i;j++){
        document.write("* ");
    }  
    document.write("<br>"); 
}
document.write("<br><br>");

// * * * * *
// * * * *
// * * *
// * *
// *
document.write("<br><br>");
for(let i =0; i<n;i++){
    for(let j = n;j>i;j--){
        document.write("*&nbsp");
    }  
    document.write("<br>"); 
}
document.write("<br><br>");

    // * * * * * 
    //   * * * * 
    //     * * * 
    //       * * 
    //         * 

for(let i =0; i<n;i++){
    for(let j = 0;j<i;j++){
        document.write("&nbsp&nbsp&nbsp");
    } 
    for(let j = n;j>i;j--){
    document.write("*&nbsp");
    }  

    document.write("<br>"); 
}
document.write("<br><br>");

//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 

for(let i =0; i<n;i++){

    for(let j = n;j>i;j--){
        document.write("&nbsp;&nbsp;&nbsp");
    } 
    for(let j = 0;j<=i;j++){
        document.write("*&nbsp");
    }  
    document.write("<br>"); 

}
document.write("<br><br>");



for(let i =0; i<n;i++){

    for(let j = 0;j<=i;j++){
        document.write("&nbsp;&nbsp;&nbsp");
    } 
    for(let j = 0;j<=i;j++){
        document.write("*&nbsp");
    }  
    document.write("<br>"); 

}
document.write("<br><br>");

