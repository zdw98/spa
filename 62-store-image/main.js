$(function () {  
    var $url = $('input[type="text"]'),
        $btnSave = $('input[type="button"]'),
        $img = $('img'),
        $tmpImg = $('<img>');

    // load local storage string to $img
    var strImg = window.localStorage.getItem('img');
    if(strImg !== ''){
        $img.attr('src',strImg);
    }

    $btnSave.click(function(){
        // validate url not null
        var url = $url.val();
        if(url === '') return ;

        // load url iage tmpImg
        $tmpImg.attr('crossOrigin', 'anonymous');
        $tmpImg.attr('src',url);
        
        // create canvas
        var can = $('<canvas>').get(0);
        var ctx = can.getContext('2d');

        ctx.width = $tmpImg.get(0).width;
        ctx.height = $tmpImg.get(0).height;

        // canvas fill tmpImage
        ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height);

        // canvas output base64 string
        var str = can.toDataURL();

        // save base64 string to local storage
        window.localStorage.setItem('img',str);

        // load local storage string to $img
        var strImg = window.localStorage.getItem('img');
        $img.attr('src',strImg);

    });
    $btnSave.load(function(){
        // validate url not null
        var url = $url.val();
        if(url === '') return ;

        // load url iage tmpImg
        $tmpImg.attr('crossOrigin', 'anonymous');
        $tmpImg.attr('src',url);
        
        // create canvas
        var can = $('<canvas>').get(0);
        var ctx = can.getContext('2d');

        ctx.width = $tmpImg.get(0).width;
        ctx.height = $tmpImg.get(0).height;

        // canvas fill tmpImage
        ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height);

        // canvas output base64 string
        var str = can.toDataURL();

        // save base64 string to local storage
        window.localStorage.setItem('img',str);

        // load local storage string to $img
        var strImg = window.localStorage.getItem('img');
        $img.attr('src',strImg);

    });
});