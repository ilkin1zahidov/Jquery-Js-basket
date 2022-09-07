// $(document).ready(function () {

//     console.log("salam");

// });


$(function () {


    //let elem = document.querySelector("h4").innerText;

    // let elem = $("#products h4");

    // for (const item of elem) {
    //     console.log(item);
    // }

   

    $("#products button").first().click(function(){
        //console.log($(this).html(`<span class = "text-danger">Bye bye</span>`));
        $("#products .box").hide(2000);
        $("h4").css({
            "font-size":"50px",
            "color":"yellow"
        })
    })

    $("#products button").first().next().click(function(){
        //console.log($(this).html(`<span class = "text-danger">Bye bye</span>`));
        $("#products .box").show(2000,function(){
            $("#products .box").css("background-color","blue")
        });
    })

    $("#products button").last().click(function(){
        //console.log($(this).html(`<span class = "text-danger">Bye bye</span>`));
        $("#products .box").toggle(2000);
        $("#products .box").show(2000,function(){
            $("#products .box").css("background-color","blue")
        });
    })































})