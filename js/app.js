$(function() {

    
    $('blockquote').html($('blockquote').text().replace(/(\w)/g, "<span>$&</span>"));
    $('blockquote span, blockquote + p').addClass('opacity0');

    var quoteSpanLength = $('blockquote span').length;
    $('blockquote span').each(function(index) {
        var quoteSpan = $(this);
        setTimeout(function() {
            quoteSpan.removeClass('opacity0').addClass('opacity');
        }, 40 * index);
        if (index == quoteSpanLength - 1) {
            setTimeout(function() {
                $('blockquote + p').removeClass('opacity0').addClass('opacity');
            }, 40 * quoteSpanLength + 400);
        };

    });

    $('.btns a').click(function() {
        return false;
    });

    $('input[type=button]').click(function(){
        $.ajax({
            url: '/signUp',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({email: $('#email').val()}),
            success: success, 
            error: error
        });


        function success (data) {
            if (data === true) {
                alert('This email is already registered! Thank you again!');
            }
            else{
                $('.signup > input').hide(function(){
                    $('.signup').html("<div class='thanks'>Thank your for signing up with Sporten! <br/>We'll send you ONE message a week before we release the product!</div>");
                });    
            }
        }

        function error (xhr, msg){
            
        }

        
    });

});