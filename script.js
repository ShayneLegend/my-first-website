// 找到网页上的按钮和用来显示灵感的文字区域。
const inspirationButton = document.querySelector("#inspiration-button");
const inspirationText = document.querySelector("#inspiration-text");

// 准备三条灵感，每点击一次就显示下一条。
const inspirations = [
  "今日灵感：试着修改网页的大标题，让它表达你的想法。",
  "今日灵感：观察你喜欢的网站，找出一种让你觉得舒服的配色。",
  "今日灵感：把一个生活中的小问题，变成一个想制作的网页。"
];
let nextInspiration = 0;

inspirationButton.addEventListener("click", () => {
  inspirationText.textContent = inspirations[nextInspiration];
  nextInspiration = (nextInspiration + 1) % inspirations.length;
});
