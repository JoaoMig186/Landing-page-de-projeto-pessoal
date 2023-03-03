$(document).ready(function(){
    $("#form").hide();
})
function expandirForm(){

    let botatoForm = document.getElementById("buttonForm");
    botatoForm.style.cursor="default";
    botatoForm.style.position="absolute";

    $(document).ready(function(){
        $("#buttonForm").attr('value','');
        $("#buttonForm").animate({height:"368px"},{ duration: 700, queue: false });
        $("#buttonForm").animate({width:"373px"},700).queue(function(){
            $("#form").fadeIn(100);
            $("#buttonForm").fadeOut({ duration: 500, queue: false })
        })
    })
}