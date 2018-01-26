<script>
$(document).ready(function(){
    // for every article tag inside a slide tag
    $("slide > article").each(function(){
        // copy the article name to the parentNode's (the slide) ID
        this.parentNode.id=$(this).attr('pic');
    });
    $("slide > article").each(function(){
        this.parentNode.className=$(this).attr('title-size');
        
    });
    
    // Fix favicon
    setTimeout(function() {
      $("head link[rel*='icon']").attr('href', 'www/img/pearson_logo_favicon.png');
    }, 200);
    
    // Add logo to title slide
    $('.title-slide').append("<img src = 'www/img/pearson_logo_white.png' class = 'title-slide-logo auto-fadein'>");
});
</script>