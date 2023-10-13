const subtitle = document.getElementById("subtitle");
console.dir(subtitle);

const container = document.querySelector(".w3-container");
const text = container.querySelector("p");
console.log("🚀 ~ file: lesson.js:6 ~ text:", text);
console.log("🚀 ~ file: lesson.js:5 ~ container:", container);

const nodeList = document.querySelectorAll(".w3-cell");
console.log("🚀 ~ file: lesson.js:10 ~ nodeList:", nodeList);

const tagCollection = document.getElementsByTagName("p");
const classCollection = document.getElementsByClassName("w3-cell");
console.log("🚀 ~ file: lesson.js:14 ~ classCollection:", classCollection);
console.log("🚀 ~ file: lesson.js:13 ~ tagCollection:", tagCollection);
const firstText = document.querySelector("div > p");

// fetch("https://dummyjson.com/products")
//   .then(() => {
//     container.classList.toggle("success");
//   })
//   .catch(() => {
//     container.classList.add("error");
//   });

const loadData = async () => {
  container.classList.toggle("loading");
  const resp = await fetch("https://dummyjson.com/products");
  container.classList.toggle("success");
};

loadData();

// const hackGithub = () => {
//   const container = document.querySelector(
//     "body > div.logged-in.env-production.page-responsive.full-width > div.application-main > div > div"
//   );
//   if (container) {
//     container.classList.add("flex-row-reverse");
//     const content = container.querySelector("aside + div > div > div > div");
//     content?.classList.add("flex-row-reverse");
//   }
// };