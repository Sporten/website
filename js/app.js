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
        $('.signup > input').hide(function(){
            $('.signup').html("<div/>Thank your for signing up with Sporten! We'll send you ONE message a week before we release the product!<div>")
        });
    });

});