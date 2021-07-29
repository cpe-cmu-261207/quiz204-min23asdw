const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here

    ('.main-diff .blue-bg .arc_arrow').click(function () {
        //Hide others
        $('.main-diff .blue-bg .arc_arrow').not(this).removeClass('arc_arrow--displayed');
        $('.main-diff .blue-bg .arc_arrow').not(this).parent().next('.matchfooter').removeClass('matchfooter--displayed');

        $(this).addClass('arc_arrow--displayed');
        $(this).parent().next('.matchfooter').addClass('matchfooter--displayed');
    });


}

// more codes for Search and Reset buttons here
