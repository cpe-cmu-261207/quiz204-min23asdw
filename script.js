const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const reset = document.getElementById('reset')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
        //Hide others
        ('toggle').not(this).removeClass('text');
        ('toggle').not(this).parent().next('text').removeClass('text');

        (this).addClass('text');
        (this).parent().next('.text').addClass('text');



}

function cnt(){
     let str = document.getElementById('text')
     const myArr = str.split(" ");
     var paragraphs = document.getElementById("text");
     var count = 0;
     for(var i = 0; i < paragraphs.length; i++)
     {
         count += paragraphs[i].innerHTML.split(' ').length;
     }
     for(var j = 0; j < count; j++)
     {
         if(myArr[i].length >= length){
         highlight(myArr[i]);
         };
     }
}

function highlight(text) {
  var inputText = document.getElementById("text");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) {
   innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}

reset.addEventListener("click", () => { //เก็บค่า
  length.value = "5";   // เคลียค่า
});

// more codes for Search and Reset buttons here
