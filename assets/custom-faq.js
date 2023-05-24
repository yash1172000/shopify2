$(()=>{
  $(".faqs-main").hide();
  $('.pr-faq-section').each(function(){
      $(this).find('.show-faq').click(function(){
         $(this).parent().siblings('.faqs-main').slideToggle();
      });
  });
});

$(()=>{
  $(".faq-a").hide();
  $('.pr-faqs').each(function(){
      $(this).find('.faq-q').click(function(){
         $(this).siblings('.faq-a').slideToggle();
      });
  });
});

$(document).ready(function(){
  $(".pr-faq-section").hide();
  $(".pr-faq-section").slice(0, 2).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".pr-faq-section:hidden").slice(0, 4).slideDown();
    if($(".pr-faq-section:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  });


  





// $(document).ready(function() {
  //css
  // $(".prac-div,#prac-ul").css("border","2px solid blue");
  
  //even list hide
  //$("ul li:even").hide();
   //  $('.prac-button').click(function(){
   //  $('#prac-ul').hide();
   // });
   // $('.prac-event').click(function(){
   //  $('#prac-ul').show();
   // });
  //print a html in console when we click a button
  // $('.prac-button').click(function() {
  //  var a = $('.prac-event').html();
  //   console.log(a);
  // });
  
  //all mouse event and keyboard event
  // $('.prac-event').click(function(){
  //   $('.prac-event').css('background-color','green');
  // });
  // $('.prac-event').contextmenu(function(){
  //   $('.prac-event').css('background-color','violet');
  // });
  // $('.prac-event').mouseenter(function(){
  //   $('.prac-event').css('background-color','tan');
  // });
  // $('.prac-event').mouseleave(function(){
  //   $('.prac-event').css('background-color','orange');
  // });
  // $('.prac-button').click(function(){
  //   $('.prac-event').slideUp();
  //  });
  // $('.prac-button').keypress(function(){
  //   $('.prac-event').slideDown();
  //  });
   // $('.prac-button').click(function(){
   //  $('.prac-event').fadeTo("slow", 0.7);
   // });
  //  
// });

// $(document).ready(function(){
  // $(".prac-event").html("hello<h1>friends</h1>");
  
  // $(".prac-event p:last").text("hello <h1> friends </h1>");

  // var a = $(".prac-event h2").val();
  // console.log(a);
  
  // $(".prac-event p").prepend("<p><b>Hello friends...</b></p>"); ---> before
  // $(".prac-event h2").after("<h1>hello friends...</h1>"); ---> append
  // $("<br><b>Hello friends...</b>").appendTo(".prac-event p"); ---> insertAfter

  // $(".prac-event p").empty(); ---> remove the child [remove() ---> remove the element]

  // var x = $(".prac-event p").offset();  
  // alert("Top: " + x.top);    

  // $(".prac-event p:last").addClass("addClass");  

  // alert($("#prac-ul").hasClass("prac-ul"));  ---> it check it has class or not

  // $(".prac-button").click(function(){
  // $("#prac-ul").toggleClass("addClass");
  // });

 // var a = $(".prac-event").innerHeight();
 //  alert(a);                               ---> width, innerWidth, height, innerHeight, outerWidth, outerHeight

 // $(".prac-event p").wrapAll("<div></div>");  
//});


//$(document).ready(function(){
 
    // $(".prac-serialize").text($("form").serialize()); 

  
    // $(".prac-button").bind("dblclick",function(){
    //    $(".prac-event p").text("hello friends");
    // });

  
   // $(".prac-div input").focus(function(){
   //        $(this).css("background","green");
   //       // alert("Focus loose");  
   //   }); 
  
   // $(".prac-div input").blur(function(){
   //        $(this).css("background","blue");
   //       // alert("Focus loose");  
   // });  
    
    // $("select").change(function(){
    //      $(this).css("background","blue");
    // });
  
    // $(".prac-button").click(function(){
    //    $(".prac-event").animate({top : '450px',width : '-=500px',fontSize : '30px'},"slow",function(){
    //      alert("1st animation complete");
    //    }); 
    //    $(".prac-event").animate({left : '450px'},3000);
    // });
      
    //Method Chaining
    //$(".prac-event").css("background","brown").slideUp("slow").slideDown(2000);

    //Ancestors Method
    //  $(".prac-button").on("click", function(){
    //  $(".prac-event").parentsUntil().slideToggle(); ---> parent(),parents(),closest()
    //  });

    //Descendants Methods
      // $(".prac-button").click(function(){
      //     $(".prac-sub-div").children('#prac-ul').slideToggle();   ---> find()
      //  });

    //Siblings Methods
       //$(".prac-event h2").siblings().css('background-color','red');
       //$(".prac-list-1").siblings(".prac-list-2").css('background-color','red');

       //$(".prac-list-1").next().css('background-color','red');  ---> nexAll, prev,prevAll
       // $(".prac-button").nextUntil(".prac-event").css('background-color','red');  --->prevUntil

    //Filtering Methods
       //$('.prac-event p').first().hide();  --->last()
       //$("#prac-ul li").eq(2).hide();
       //$(".prac-ul1 li").filter('.prac-list-2').css('background-color','red');
       //$(".prac-div div").not(".prac-event").hide();
       //$("#prac-ul li").slice(1,3).fadeOut();

   //alert($("#prac-ul li").length);
// });

// $(document).ready(function(){
       // if($('p').parent().is('div')){
       //    $('#prac-ul .prac-list-1').css('background-color','red');
       // }

       // $(document).mousemove(function(event){
       //   $('.prac-event p').text("X: " + event.pageX + " Y: " + event.pageY );
       // });

       // $('.prac-event').on("click dblclick mouseover mouseout keypress contextmenu", function(){
       //   $('.prac-serialize').text("Event: " + event.type);
       // });

       // $('.prac-sub-div form input').on("keydown",function(event){
       //  $('.prac-serialize').text(event.type + ": " + event.which);
       // });

        // $(".prac-div").click(function(){
        //   $('.prac-serialize').html("Targeted elment: " + event.target.nodeName);
        // });

      // event propagation
     // $(document).ready(function(){

     //     $(".prac-div").click(function(){
     //         alert("div is clicked");
     //     });

     //     $(".prac-event").click(function(event){
     //       event.stopPropagation()
     //         alert("p,h2 is clicked: " + event.isPropagationStopped());
     //     });

     //     $(".prac-div form").click(function(event){
     //         alert("form is clicked: " + event.isPropagationStopped());
     //     });
     // });    

    
// });
// $(document).ready(function(){
//    $(".product-form__submit").on("click", function(){
//   let id = $('.line-item-property__field input').attr('id');
//     // console.log(id)
    
//   // $('.product-variant-id').attr('data-id',id)
//   // $("input.addproduct .product-form__submit").on("click", function(){
    
//    });
// });