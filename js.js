export const form = document.getElementById("form");
const textInput = document.getElementById("name");
const checkbox = document.getElementById("admin");
const radioButton = document.querySelectorAll('input[type="radio"]');
console.log("🚀 ~ file: lesson.js:5 ~ radioButton:", radioButton);
console.log("🚀 ~ file: lesson.js:3 ~ textInput:", textInput);
console.dir(form);

textInput.addEventListener("focus", () => {
  console.log("focus");
});

textInput.addEventListener("blur", (e) => {
  console.log("blur", e);
  // fetch("urlTOBE", {
  //   method: "POST",
  //   body: JSON.stringify({ name: e.target.value }),
  // });
});

textInput.addEventListener("keydown", (e) => {
  console.log("keydown");
});

textInput.addEventListener("keyup", (e) => {
  const value = e.target.value;
  if (value === "yes") {
    e.target.value = "no";
  }
  if (value === "no") {
    e.target.value = "yes";
  }
  console.log("keyup");
});

textInput.addEventListener("keypress", (e) => {
  console.log("keypress");
});

checkbox.addEventListener("change", (e) => {
  console.log("change", e);
});

radioButton.forEach((element) => {
  element.addEventListener("change", (e) => {
    console.log("radio button", e);
  });
});

const validateInput = (e) => {
  e.preventDefault();
  const input = e.target.elements.name;
  const name = input.value;
  const errorHint = document.getElementById("name-error-msg");
  if (!name.length) {
    input.focus();
    errorHint.innerText = "Required";
    errorHint.classList.toggle("hidden");
  }
  if (name.length > 3) {
    input.classList.remove("error");
    input.classList.add("success");
    errorHint.classList.toggle("hidden");
  } else {
    input.classList.remove("success");
    input.classList.add("error");
    errorHint.innerText = "Name is too short";
    errorHint.classList.toggle("hidden");
  }
};
const validateRadio = (e) => {
  const radioButtons = e.target.elements.sex;
  const sex = radioButtons.value;
  const errorHint = document.getElementById("sex-error-msg");
  if (!sex) {
    errorHint.innerText = "Required";
    errorHint.classList.toggle("hidden");
    for (let radio of radioButtons) {
      radio.style.accentColor = "red";
    }
  } else {
    for (let radio of radioButtons) {
      radio.style.accentColor = "green";
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput(e);
  validateRadio(e);
  const value = {
    admin: e.target.elements.admin.checked,
    name: e.target.elements.name.value,
    sex: e.target.elements.sex.value,
  };

  const str = JSON.stringify(value);
  const formData = new FormData(e.target);
  const inputValue = formData.get("name");
});

const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    const img = document.createElement("img");
    img.src = e.target.result;
    document.body.append(img);
  });
  reader.readAsDataURL(file);
});

export { form, fileInput };