    $(document).ready(function() {
        
        $(document).mousemove(function(x) {
            $('#moveme img').offset({
                left: x.pageX - 128, top: x.pageY - 128
            });
        });

        $(document).on('click', function() {
            $(document).unbind('mousemove');         
            // $("img").explode();
            var pos = $('#moveme img').position();
            var pos2 = $('#moveTo').position();
            console.log(pos);

            $('#moveTo').animate({left: '250px'});

        });



     });


    $("div").animate({left: '250px'});