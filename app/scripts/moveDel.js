
var RemoveList = {
    init: function () {
        var _deviceWidth = $(window).width();
        var _itemHeight = 60;

        //整个可移除项列表
        $(".removeList").css({
            position: 'relative',
            width: _deviceWidth + "px",
            height: _itemHeight + "px",
            'border-bottom': '1px solid #EAEAEB'
        });
        //可移除项列表中的项
        $(".removeList-item").css({
            position: 'absolute',
            width: _deviceWidth + 70 + "px",
            height: _itemHeight + "px",
            'line-height': _itemHeight + "px",
            'border-bottom': '1px solid #EAEAEB'
        });
        //移除按钮
        $(".removeList-button").css({
            width: 70 + "px",
            display: 'none',
            height: _itemHeight + "px",
            'line-height': _itemHeight + "px",
            "vertical-align": "middle",
            'background-color': '#f92635',
            color: '#fff',
            float: 'right',
            'text-align': 'center'
        });
        //可移除项的内容
        $(".removeList-content").css({
            width: _deviceWidth + "px",
            height: _itemHeight + "px",
            'line-height': _itemHeight + "px",
            float: 'left'
        });

        $(".removeList-item input").css({
            display: 'inline-block',
            'margin-left': '10%',
            width: '55%',
            height: '30px',
            border: 'none',
            'text-align': 'right'
        });


        //开始触摸屏幕
        $(".removeList-item").on("touchstart", function (e) {
            $(this).find('.removeList-button').show();
            start_x = e.originalEvent.targetTouches[0].pageX;
            start_y = e.originalEvent.targetTouches[0].pageY;
        });
        //触摸屏幕 移动中
        $(".removeList-item").on("touchmove", function (e) {
            end_x = e.originalEvent.targetTouches[0].pageX;
            end_y = e.originalEvent.targetTouches[0].pageY;
            distanceX = end_x - start_x;
            if ((distanceX > -70 && distanceX < -20)) {
                $(".removeList-item").css({ "left": "0px" })
                $(this).stop().animate({ "left": "-70px" });
            } else if (distanceX > 0) {
                $(this).stop().animate({ "left": "0px" });
            }
        });

        //点击列表项，将列表项复原
        $(".removeList-item").click(function (event) {
            $(this).find('.removeList-button').hide();
            $(".removeList-item").animate({ "left": 0 });

            $(this).find("input").focus();
        });

        $(".removeList-item").blur(function (event) {
            $(this).find("input").css("border", "none");
        });

        //点击移除按钮，将列表项移除
        $(".removeList-button").click(function () {
            $(this).parent().parent().remove();
        });
    },
    addItem: function (containerId, content) {
        var strContent = "<div class='removeList'>";
        strContent += "<div class='removeList-item' >";
        strContent += " <div class='removeList-content'>";
        strContent += content;
        strContent += "</div>";
        strContent += "<div class='removeList-button'>删除</div></div></div>";

        var obj_a = $(strContent);
        $(containerId).append(obj_a);

        this.init();
    }
};