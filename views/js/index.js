
//bill tracking page.


//AJAX get request to select all bills from a certain user goes here.
//Puts response from ajax into table rows.  Should go in .then function.
for(let i = 0; i < 4; i++){
    $("#bill-table").append(`
    <tr data-id = "${i}" class = "bill-row">
    <th>Ajax response goes here</th>
    <th>Response goes here</th>
    <th position= "relative">Response
        <img class = "edit-button" data-id = "${i}" src="assets/images/edit.png" width= "18px">
        <img class = "delete-button" data-id = "${i}" src="assets/images/delete.png" width= "16px">
    </th>
</tr>`)
}

//shows edit and delete button where hovering over row and hides them when exiting.
$(".bill-row").mouseenter(function(){
    let id = $(this).data("id")
    $(".edit-button").each(function(){
        if($(this).data("id") === id){
            $(this).css("display","block")
        }
    })
    
    $(".delete-button").each(function(){
        if($(this).data("id") === id){
            $(this).css("display","block")
        }
    })

})
 
$(".bill-row").mouseleave(function(){
    let id = $(this).data("id")
    $(".edit-button").each(function(){
        if($(this).data("id") === id){
            $(this).css("display","none")
        }
    })
    
    $(".delete-button").each(function(){
        if($(this).data("id") === id){
            $(this).css("display","none")
        }
    })

})
 
//adjusts opacity when user hovers over or leaves buttons.
$(".edit-button").mouseenter(function(){
    $(this).css("opacity","1")
})

$(".edit-button").mouseleave(function(){
    $(this).css("opacity",".3")
})
 
$(".delete-button").mouseenter(function(){
    $(this).css("opacity","1")
})

$(".delete-button").mouseleave(function(){
    $(this).css("opacity",".3")
})
 
$("#new-bill-button").mouseenter(function(){
    $(this).css("opacity","1")
})
 
$("#new-bill-button").mouseleave(function(){
    $(this).css("opacity",".5")
})