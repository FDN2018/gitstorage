$('.previous').click(function () {
    var cur = $('.tab-pane').index($('.tab-pane.active'));
    var curt= $('.list-group-item').index($('.list-group-item.active'));
    if (cur!=0 && curt!=0) {
        $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(cur-1).addClass('fade show active');
        $('.list-group-item').eq(curt-1).addClass('active');
       
    }
    if (cur!=1 && curt!=1) {
        $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(cur-1).addClass('fade show active');
        $('.list-group-item').eq(curt-1).addClass('active');  
    } 
});

$('.next').click(function () {
    var cur = $('.tab-pane').index($('.tab-pane.active'));
    var curt= $('.list-group-item').index($('.list-group-item-action.active'));
    if (cur!=$('.tab-pane').length-1 && curt!=$('.list-group-item').length-1) {
        $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(cur+1).addClass('fade show active');
        $('.list-group-item-action').eq(curt+1).addClass('active');
    }
});


ClassicEditor
.create(document.querySelector('#editor'))
.catch(error => {
    console.error(error);
});
