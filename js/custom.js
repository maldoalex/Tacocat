
    document.getElementById("btnWord").addEventListener("click", function () {
      let word = document.getElementById("word").value;
    isPalindrome(word);
    });




function isPalindrome(word) {
    if (word == word.split('').reverse().join('')) {
        // alert(word + ' is palindrome.');
        document.getElementById("card-body").innerHTML = word + " is a palindrome!";
    }
    else {
        document.getElementById("card-body").innerHTML = word + " is not a palindrome!";
    }
}


$('.card').click(function() {
  $('.card-body').toggleClass('close');
  document.getElementById("word").value = "";
});



{/* <div class="col">
                    <input id="word" type="text" class="form-control" placeholder="Enter word">
                  </div> */}


            //       <div class="row">
            //       <div class="col">
            //         <p id="output"></p>
            //       </div>
            //     </div>
            //   </div>