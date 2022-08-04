$('h1').addClass("big-title margin-50")


// console.log($('h1').hasClass("margin-50"))
// $('button')

// $("h1").text("Bye")

// $('button').text("Changing everything")

// // console.log($("img").attr("src"))

// $("a").attr("href","https://www.facebook.com/")

// console.log($("h1").attr('class'))



// $("button").click(function(){
//     $("h1").css("color","purple")
// })

// $('body').keypress(function(event){
//     $("h1").text(event.key).addClass("big-title")
// })

// $('body').on("mouseover",function(event){
//     $("body").css("background","red")
//     $("h1").text(event.key).addClass("big-title")
// })

// $('body').on("click",function(event){
//     $("body").css("background","white")
//     $("h1").text(event.key).addClass("big-title")
// })


$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5})
})