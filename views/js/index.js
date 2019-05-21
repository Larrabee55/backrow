
//bill tracking page.
var nextRowId = 0;

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

    nextRowId++
}

//Clicking on the new-bill-button will add a form to the bottom of the table.
$("body").on("click","#new-bill-button",function(){
    $("#bill-table").append(`
    <tr id="new-bill-row">
        <th>
            <form id = "bill-form">
                <input name = "bill-name">
            </form>
        </th>
        <th>
            <input form = "bill-form" name = "amount">
        </th>
        <th>
            <input form = "bill-form" name = "due">
        </th>
    </tr>`)

    $("#button-flex").html(`
    <div id = "cancel-button" class = "button">
        <img src = "assets/images/delete.png" width = "18px">
    </div>
    <div id = "submit-button" class = "button">
        <img src = "assets/images/checkmark.png" width = "18px">
    </div>`)

    $("#button-flex").css("justify-content","space-between")
})

// Clicking the cancel button removes the form from the bottom of the table
$("body").on("click","#cancel-button",function(){
    $("#new-bill-row").remove();
    
    $("#button-flex").html(`
    <div id = "new-bill-button" class = "button">+</div>`)

    $("#button-flex").css("justify-content","right")
})


//shows edit and delete button where hovering over row and hides them when exiting.
$("body").on("mouseenter",".bill-row",function(){
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
 
$("body").on("mouseleave",".bill-row",function(){
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
$("body").on("mouseenter",".edit-button",function(){
    $(this).css("opacity","1")
})

$("body").on("mouseleave",".edit-button",function(){
    $(this).css("opacity",".3")
})
 
$("body").on("mouseenter",".delete-button",function(){
    $(this).css("opacity","1")
})

$("body").on("mouseleave",".delete-button",function(){
    $(this).css("opacity",".3")
})
 
$("body").on("mouseenter",".button",function(){
    $(this).css("opacity","1")
})
 
$("body").on("mouseleave",".button",function(){
    $(this).css("opacity",".5")
})

