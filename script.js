$.getJSON(
    'https://jsonplaceholder.typicode.com/todos',
    function (data) {
      $(data).each(function (i, hero) {
        $(".output").append($("<li>")).append(hero.userId);
        $(".output").append($("<li>")).append(hero.title);
      });
    },
    "json"
  )
  .done(function () {
    alert("Completed");
  })
  .fail(function (e) {
    console.log("fail");
  })
  .always(function () {
    console.log("always complete this message");
  });