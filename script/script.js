const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn"); 
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const inputText = input.value.trim(); 

    if (inputText === "" ) {
        alert("Please input a value");
    } else if  (isPalimdrome(inputText)) 
        result.innerText = `${inputText} is a palindrome`;
    else {
       result.innerText = `${inputText} is not a palindrome`; 
    }
})

//check if the string is a palindrome
const isPalimdrome = (str) => {
    const valideStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); 
    const checked = [...valideStr].reverse().join(""); 

   return valideStr === checked
}