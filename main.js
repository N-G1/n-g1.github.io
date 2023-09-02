jQuery(function() { 
    $('#aboutScroll').on("click", function () { $('html, body').animate({
        scrollTop: $("#scroll").offset().top }, 1000);
    });

    $('#projScroll').on("click", function () { $('html, body').animate({
        scrollTop: $("#pScroll").offset().top }, 1000);
    });

    $('#contactButton').on("click", function () { $('html, body').animate({
        scrollTop: $("#contactScroll").offset().top }, 1000);
    });
});

function sendMessage(){
    Email.send({
        SecureToken: "54f7807a-8755-445d-b1e6-42593c952ea8",

        To : 'portfolioenqs@gmail.com',
        From : "portfolioenqs@gmail.com",
        Subject : "New contact form enquiry",
        Body : "Name:" + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Message body: " + document.getElementById("subject").value
    }).then(
      message => alert(message)
    );
}

