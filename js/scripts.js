// items.sort();
$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    var list = $("input#item").val();
    var items = list.split(" ")
    var array = items.map(function(item) {
      var toupper = item.toUpperCase()
      return toupper
      array.sort();
    });
    $("#mylist").append(array);
  });
});
