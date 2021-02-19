document.getElementById("btnWord").addEventListener("click", function () {
      let word = document.getElementById("word").value;
      isPalindrome(word);
    });

function isPalindrome(word) 
{
    if (word == word.split('').reverse().join('')) 
    {
      document.getElementById("card-body").innerHTML = word + " is a palindrome!";
      let card = document.getElementById("card-body");
      if(card.style.display == "none")
      {
        card.style.display = "block";
      }
    }
    else 
    {
      document.getElementById("card-body").innerHTML = word + " is not a palindrome!";
      let card = document.getElementById("card-body");
      if(card.style.display == "none")
      {
        card.style.display = "block";
      }
    }
}


$('.card').click(function() {
  let card = document.getElementById("card-body");
  if(card.style.display == "block")
  {
    card.style.display = "none";
  }
  document.getElementById("word").value = "";
  document.getElementById("card-body").innerHTML = "";
});