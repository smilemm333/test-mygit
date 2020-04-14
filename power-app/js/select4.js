$(function() {
    var hgS1 = new selectSwiper({
        el: '.select_box1',
        mustSelect: true,
        data: ['手工填报', '巡检填报'],
        init: function(index) {
            if (index !== -1) {
                $('.btn1').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn1').html(this.data[index]);            
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn1').on('click',
    function() {
        hgS1.openSelectSwiper();
    });
    
    
    var hgS2 = new selectSwiper({
        el: '.select_box2',
        mustSelect: true,
        data: ['设备1', '设备2', '设备3'],
        init: function(index) {
            if (index !== -1) {
                $('.btn2').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn2').html(this.data[index]);            
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn2').on('click',
    function() {
        hgS2.openSelectSwiper();
    });
    
    var hgS3 = new selectSwiper({
        el: '.select_box3',
        mustSelect: true,
        data: ['锅炉一班', '汽机一班', '电气一班'],
        init: function(index) {
            if (index !== -1) {
                $('.btn3').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn3').html(this.data[index]);            
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn3').on('click',
    function() {
        hgS3.openSelectSwiper();
    });
    
    
        
})