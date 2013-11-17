//Fix z-index youtube video embedding
$(document).ready(function (){
    $('iframe').each(function(){
        var url = $(this).attr("src");
        $(this).attr("src",url+"?wmode=transparent");
    });
});