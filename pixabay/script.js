$(document).ready(function() {
    var $photoContainer = $('#container_photo'),
        $videoContainer = $('#container_video');

    
    $('button').click(function(e) {
        e.preventDefault();
        var $search = $('input[name="search"]:checked').val();
        console.log($search);
        switch ($search){
            case 'photo':
                var ajaxReq = $.ajax({
                    method: "GET",
                    url: "https://pixabay.com/api/",
                    data: {
                        key: "5744960-6f2f5fb7837004e1b3aa58195",
                        q: $('input[name="keyword"]').val()
                    },
                    dataType: "json"
                });
                break;
            case 'video':
                var ajaxReq = $.ajax({
                    method: "GET",
                    url: "https://pixabay.com/api/videos/",
                    data: {
                        key: "5744960-6f2f5fb7837004e1b3aa58195",
                        q: $('input[name="keyword"]').val()
                    },
                    dataType: "json"
                });
                break;
        }


        ajaxReq.done(function(msg) {
            console.log(msg);
            $photoContainer.html('');
            $videoContainer.html('');
            switch ($search){
                case 'photo':
                    var pics = msg.hits;
                    for (var i = 0; i < pics.length; i++) {
                        $photoContainer.append('<div class="block"><img src="'
                            + pics[i].webformatURL + '" alt=""></div>');
                    }
                    break;
                case 'video':
                    var videos = msg.hits;
                    for (var i = 0; i < videos.length; i++) {
                        $videoContainer.append('<div class="block"><video controls="controls" poster="' + videos[i].userImageURL + '">' +
                                          '<source src="'+videos[i].videos.tiny.url+'" type=video/ogg; codecs="theora, vorbis">' +
                                          '<source src="'+videos[i].videos.tiny.url+'" type=video/mp4; codecs="avc1.42E01E, mp4a.40.2">' +
                                          '<source src="'+videos[i].videos.tiny.url+'" type=video/webm; codecs="vp8, vorbis">' +
                                          '</video> </div>');
                    }
                    break;
            }
        });

        ajaxReq.fail(function(jqXHR, statusFail){
            console.log(statusFail);
        });


    });

});
