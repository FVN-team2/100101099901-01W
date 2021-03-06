


/***Trim string ***/
(function(ns) {
    /**
     * mb_strwidth
     * @param String
     * @return int
     * @see http://php.net/manual/ja/function.mb-strwidth.php
     */
    var mb_strwidth = function(str) {
        var i = 0,
            l = str.length,
            c = '',
            length = 0;
        for (; i < l; i++) {
            c = str.charCodeAt(i);
            if (0x0000 <= c && c <= 0x0019) {
                length += 0;
            } else if (0x0020 <= c && c <= 0x1FFF) {
                length += 1;
            } else if (0x2000 <= c && c <= 0xFF60) {
                length += 2;
            } else if (0xFF61 <= c && c <= 0xFF9F) {
                length += 1;
            } else if (0xFFA0 <= c) {
                length += 2;
            }
        }
        return length;
    };

    /**
     * mb_strimwidth
     * @param String
     * @param int
     * @param int
     * @param String
     * @return String
     * @see http://www.php.net/manual/ja/function.mb-strimwidth.php
     */
    var mb_strimwidth = function(str, start, width, trimmarker) {
        if (typeof trimmarker === 'undefined') trimmarker = '';
        var trimmakerWidth = mb_strwidth(trimmarker),
            i = start,
            l = str.length,
            trimmedLength = 0,
            trimmedStr = '';
        for (; i < l; i++) {
            var charCode = str.charCodeAt(i),
                c = str.charAt(i),
                charWidth = mb_strwidth(c),
                next = str.charAt(i + 1),
                nextWidth = mb_strwidth(next);
            trimmedLength += charWidth;
            trimmedStr += c;
            if (trimmedLength + trimmakerWidth + nextWidth > width) {
                trimmedStr += trimmarker;
                break;
            }
        }
        return trimmedStr;
    };
    ns.mb_strwidth = mb_strwidth;
    ns.mb_strimwidth = mb_strimwidth;
})(window);


/****Slider Overnots index***/
!function($){
	$.ajax({
	'url' : 'performance/_custom/?limit=4',
	'dataType' : 'jsonp',
	'success' : function(json){
		
	$.each(json.data, function(i,val){		
		var thumb = val.img01 ? val.img01  : '<img src="images/under_img01.jpg" alt="'+val.title+'">';
		var $li = $('<li class=""></li>').html(									
					'<p class="case_t01">'+val.txt05+'</p>' + '<p class="case_cate"><span>'+val.txt06 +'</span></p>'
		          + '<p class="case_title"><a href="performance/'+ val.url +'">' + val.title + '</a></p>'		          
		          + '<div class="txt">'
				  + '<p class="image-r"><a href="performance/'+ val.url +'">'+ thumb +'</a></p>'
				  + mb_strimwidth(val.txt04, 0, 180, '…', 'UTF-8')+'</div>');
		$li.appendTo('.case');		  
	})
	
	$('.case').slick({
        dots: false,
        autoplay: true,
		arrows:true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        centerMode: true,
        initialSlide: 0,
        variableWidth: true,
		
    });	

	
	}
	})
}(jQuery);


/**News kijikaku**/
! function($) {
    $.ajax({
        'url': 'news/_custom/',
        'dataType': 'jsonp',
        'success': function(json) {
            $.each(json.data, function(i, val) {
                var $li = $('<li/>').html(
                    '<span class="date">' + val.date + '</span>' + '<a class="cate" href="news/cate_'+ val.category_id +'/">' + val.category_name + '</a>' + '<p><a href="news/' + val.url + '">' + val.title + '</a></p>');
                $li.appendTo('#news ul');
            })
        }
    })
}(jQuery);