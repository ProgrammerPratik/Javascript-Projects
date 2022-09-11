let count = 0;
const catPic = '<img src="cat.jpg" alt="catpic" id="catpic"/>';
document.getElementById("dec").onclick = function () {
  count--;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("inc").onclick = function () {
  count++;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("cat").onclick = function () {
  document.getElementById("countLabel").innerHTML = catPic;
};
