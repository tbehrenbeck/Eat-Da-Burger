// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-need").on("click", function(event) {
    var id = $(this).data("id");
    var newNeed = $(this).data("newneed");

    var newNeed = {
      need: newNeed
    };

    // Send the PUT request.
    $.ajax("/api/items/" + id, {
      type: "PUT",
      data: newNeed
    }).then(function() {
      console.log("changed item to", newNeed);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newItem = {
      name: $("#ca")
        .val()
        .trim(),
      need: $("[name=need]:checked").val()
    };

    // Send the POST request.
    $.ajax("/api/items", {
      type: "POST",
      data: newItem
    }).then(function() {
      console.log("created new item");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-item").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/items/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted item", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
