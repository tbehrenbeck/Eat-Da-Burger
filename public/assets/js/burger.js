// $(".create-update-form").on("submit", function(event) {
//     event.preventDefault();

//     var newBurger = {
//         name: $("#name").val().trim(), 
//         devoured: false
//     };

//     $.ajax("/api/burgers", {
//         type: "POST", 
//         data: newBurger
//     }).then(
//         function() {
//             console.log("new burger");
//             location.reload();
//         }
//     );
// });