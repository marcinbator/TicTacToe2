function change() {
  $("#menu").css("display", "none");
  $("#container").css("display", "flex");
}
function choose(typ) {
  player.type = typ;
  game();
}
//SELECTOR
$("#x").on("click", function () {
  choose("x");
});
$("#o").on("click", function () {
  choose("o");
});
//GAME
function game() {
  if (player.type != "none") {
    $("#play").on("click", change);
    $("#play").keypress(change);
    $("#play").css("background", "rgb(3, 24, 116)");
    $("#play").css("border", "rgb(19, 48, 176)");
    $("#play").hover(function () {
      $(this).css("cursor", "pointer");
    });
    $("#play").hover(
      function () {
        $(this).css("color", "rgb(211, 211, 211)");
      },
      function () {
        $(this).css("color", "inherit");
      }
    );
    $("#play").hover(
      function () {
        $(this).css("background", "rgb(2, 18, 87)");
      },
      function () {
        $(this).css("background", "rgb(3, 24, 116)");
      }
    );
    $("#play").hover(
      function () {
        $(this).css("transform", "scale(1.1)");
      },
      function () {
        $(this).css("transform", "scale(1.0)");
      }
    );
  }
  $("#typ").text(" " + player.type);
  var color;
  if (player.type == "o") {
    color = "blue";
  } else {
    color = "red";
  }
  $("#typ").css("color", color);
}
/////////OBJECTS
var player = {
  score: 0,
  type: "none",
};
var field1 = {
  value: "none",
};
var field2 = {
  value: "none",
};
var field3 = {
  value: "none",
};
var field4 = {
  value: "none",
};
var field5 = {
  value: "none",
};
var field6 = {
  value: "none",
};
var field7 = {
  value: "none",
};
var field8 = {
  value: "none",
};
var field9 = {
  value: "none",
};
