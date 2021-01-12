
    document.getElementById("btnWord").addEventListener("click", function () {
      let word = document.getElementById("word").value;
    isPalindrome(word);
    });




function isPalindrome(word) {
    if (word == word.split('').reverse().join('')) {
        alert(word + ' is palindrome.');
    }
    else {
        alert(word + ' is not palindrome.');
    }
}
