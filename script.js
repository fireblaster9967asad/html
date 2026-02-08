function Palindrome(MyString) {


    var input = MyString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var reversedinput = input.split('').reverse().join('');
    if (input === reversedinput) {
        document.write(MyString + " is a palindrome");
    } else {
        document.write(MyString + " is a not palindrome");
    }




}
Palindrome("madam")


