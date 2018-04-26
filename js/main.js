// 轮播图自适应部分

// 当文档加载完成才会执行
$(function () {

    // 当屏幕大小发生改变，决定展示大图还是小图
    function resize() {

        // 获取屏幕的宽度
        var windowwidth = $(window).width();

        // 判断屏幕是大还是小
        var isSmallScreen = windowwidth < 768;
        // 根据屏幕大小为每一张轮播图设置背景
        // 获取到轮播图对象
        //  $('#main_ad > .carousel-inner > .item') 获取到的是DOM数组（多个元素）
        $('#main_ad > .carousel-inner > .item').each(function (i,item) {
            // 因为拿到的是DOM对象 需要转换
            var $item = $(item);
            // $element.data() 是一个函数，专门用于取元素上的自定义属性（data-abc）
            // 函数的参数就是我们要取得属性名称（abc）
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

            // 设置背景图片
            $item.css('backgroundImage','url("' + imgSrc +'")');

            // 用img能够实现图片大小的缩放
            if(isSmallScreen) {
                $item.html('<img src="'+ imgSrc +'"/>');
            }else {
                // 当由小图再次变成大图时，不应该是img在放大
                $item.empty();
            }
        })


    }

    // $(window).on('resize', resize);
    // 让window对象立即触发一下resize
    // $(window).trigger('resize');
    $(window).on('resize', resize).trigger('resize');

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
})