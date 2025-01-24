var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(2)";
  love.style.opacity = 0.8;
  setTimeout(function () {
    love.style.transform = 0;
  }, 1000);
  setTimeout(function () {
    love.style.transform = "translate(0%, 0%) scale(1)";
  }, 2000);
});

love.addEventListener("dblclick", function () {
  love.style.color = "red";
});
