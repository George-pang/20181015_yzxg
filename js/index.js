$(function () {
    //导航栏鼠标移动切换
    var liObjs = $(".r-nav li");
    liObjs.on("mouseenter", function () {
        $(this).find(".line").addClass("li-current");
        $(this).siblings("li").find(".line").removeClass("li-current");

    });

    //显示服务菜单
    $(".fw").on("mouseenter", function () {
        $(".fw-menu").css("display", "block");
    });
    $(".fw").on("mouseleave", function () {
        $(".fw-menu").css("display", "none");
    });

    //顶部导航栏滚动悬浮
    // $(window).on("scroll", function () {
    //     var scroll_Top = $(this).scrollTop();
    //     if (scroll_Top >= $(".top-nav").height() ) {
    //         $(".top-nav").addClass("fix-nav");
    //         $(".swiper-container").css("marginTop", $(".top-nav").height());
    //     } else {
    //         $(".top-nav").removeClass("fix-nav");
    //         $(".swiper-container").css("marginTop", 0);
    //     }
    // });

    //提交需求弹窗
    $("#submit-btn").on("click",function(){
        $(".popup-wrapper").css("display","block");
    });
    $(".submit-btn").on("click",function(){
        $(".popup-wrapper").css("display","block");
    });

    $(".sub-btn").on("click",function(){
        var value_1=$("#username").val().trim();
        var value_2=$("#phone").val().trim();
        var value_3=$("#userdemand").val().trim();
        if(value_1==""){
            alert("请输入您的姓名！");
            return false;
        }else if(value_2==""){
            alert("请留下您的联系方式！");
            return false;
        }else if(value_3==""){
            alert("请说明您的需求！");
            return false;
        }
        $(".popup-wrapper").css("display","none");
        $("#username").val("");
        $("#phone").val("");
        $("#userdemand").val("");
    });

    $(".close-btn").on("click",function(){
        $(".popup-wrapper").css("display","none");
        $("#username").val("");
        $("#phone").val("");
        $("#userdemand").val("");
        return false;
    });

    // 初始化swipper      
    var mySwiper = new Swiper('#swiper1', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '#swiper-pagination',
            clickable :true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },

    });
    var mySwiper2 = new Swiper('#swiper2', {
        direction: 'horizontal', 
        loop: true, 
        pagination: {
            el: '#case-swiper-pagination',
            clickable :true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

    });

    //鼠标移入轮播图暂停自动播放、显示滑块控制
    $(".swiper-container").on("mouseenter",function(event){
            mySwiper.autoplay.stop();
            $(".swiper-button-next").fadeIn(1000);
            $(".swiper-button-prev").fadeIn(1000);
            return false;
    });
    $(".swiper-container").on("mouseleave",function(event){
        mySwiper.autoplay.start();
        $(".swiper-button-next").fadeOut(1000);
        $(".swiper-button-prev").fadeOut(1000);
        return false;
    });

});