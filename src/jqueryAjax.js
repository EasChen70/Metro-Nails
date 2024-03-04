$(document).ready(function(){
    $("#bookingbutton").on('click', function(){
        const dataForm = $("<div>");
        dataForm.addClass("data-form");
        dataForm.css({
            "height": "500px",
            "width": "600px",
            "background-color": "azure",
            "border-width": "2px",
            "border-style": "solid",
            "position": "fixed",
            "zIndex": "100",
            "transform": "translate(0%, -30%)",
            "border-radius": "2%",
            "overflow": "auto"
        });
        $(this).before($dataForm);
        loadData('data/data2.html');
    })

    function loadData(filepath){
        $.ajax({filepath, type: 'GET', success: function(response){
            $('.data-form').html(response);
        }})
    }
})
