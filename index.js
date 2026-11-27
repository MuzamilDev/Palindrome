 function palindrome(){
            let userinput = prompt("Enter Word to check Palindrome");
            let palindrome = userinput.split("").reverse().join("");

            if(userinput == palindrome){
                swal("This is Palindrome", "success"); //swal, sweet alert
            }
            else{
                swal("Not a Palindrome", "error");

            }
        }