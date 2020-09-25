$("#addItemButton").on("click", function(add) {
    
    add.preventDefault();
    var name = $("#input").val();

    $("#list").append(
        `<div class="element">
            <h2 class="h2">${name}</h2>
            <button type="submit" id="checkButton">Check</button>
            <button type="submit" id="deleteButton">Delete</button>
        </div>`);
})

$("#list").on("click", "#checkButton", function() { 
    $(this).parent().addClass('strike');
})

$("#list").on("click", "#deleteButton", function() {
    $(this).parent().remove();
})