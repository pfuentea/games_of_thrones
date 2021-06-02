/*
https://anapioficeandfire.com/api/houses/229

https://anapioficeandfire.com/api/houses/362
House Stark of Winterfell

https://anapioficeandfire.com/api/houses/378
House Targaryen of King's Landing


https://www.anapioficeandfire.com/api/houses/17

*/

$(document).ready(function() {
    $('img').on("click",function() {

        let house_id=$(this).attr("house-id");
        console.log(house_id);
        let url="https://anapioficeandfire.com/api/houses/"+house_id;
        $.get(url,function(res) {
            limpiar();
            console.log(res);
            $('#info').append("<h3><u>"+res.name+"</u></h3>");
            $('#info').append("<h4>"+res.words+"</h4>");
            for(let i=0;i<res.titles.length;i++){
                $('#info').append("<li>"+res.titles[i]+"</li>");
            }
            

        }, 'json');
        

        return false;
    });
});

function limpiar(){
    $('#info').html("");
}
            