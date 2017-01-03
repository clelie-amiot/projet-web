/**
 * Created by Prenoult on 03/01/2017.
 */

$('.addEpisode').click(function (){
    var id = this.id;
    $.ajax({
        url : '/ajax/addEpisode/'+id,
        type : 'POST',
        dataType : 'JSON'
    }).done(function(data) {
        console.log(data);
    }).fail(function(data) {
        console.log(data);
    })
});

$('.deleteEpisode').click(function (){
    var id = this.id;
    $.ajax({
        url : '/ajax/deleteEpisode/'+id,
        type : 'POST',
        dataType : 'JSON'
    }).done(function(data){
        console.log('ok');
        $('#bloc_'+id).remove();
    }).fail(function(data){
        console.log(data);
    });
});