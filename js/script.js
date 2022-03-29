document.getElementById("redBtn").onclick = bgRed;
// document.getElementById('blueBtn').onclick=blueBtn;
document.getElementById("greenBtn").onclick = greenBtn;

// bg color change text
const bgColorText = document.getElementById("bg-color-text");

const main = document.getElementById("main");
main.style.overflow = "hidden";

function bgRed() {
    main.style.backgroundColor = "red";
    bgColorText.style.color = "red";
    bgColorText.style.border = "2px solid black";
    bgColorText.style.padding = "5px 10px";
    bgColorText.innerText = "Red";
}
function blueBtn() {
    main.style.backgroundColor = "blue";
    bgColorText.style.color = "blue";
    bgColorText.innerText = "Blue";
    bgColorText.style.border = "2px solid black";
    bgColorText.style.padding = "5px 10px";
}
function greenBtn() {
    main.style.backgroundColor = "green";
    bgColorText.style.color = "green";
    bgColorText.innerText = "Green";
    bgColorText.style.border = "2px solid black";
    bgColorText.style.padding = "5px 10px";
}

// handle event using anonymous function

const yellowBtn = document.getElementById("yellowBtn");

yellowBtn.onclick = () => {
    main.style.backgroundColor = "yellow";
    bgColorText.style.color = "yellow";
    bgColorText.innerText = "Yellow";
    bgColorText.style.border = "2px solid black";
    bgColorText.style.padding = "5px 10px";
};

// handle event using addEventListener() method

const indigoBtn = document.getElementById("indigoBtn");
indigoBtn.addEventListener("click", changeBgToIndigo);

function changeBgToIndigo() {
    main.style.backgroundColor = "indigo";
    bgColorText.style.color = "indigo";
    bgColorText.innerText = "Indigo";
    bgColorText.style.border = "2px solid black";
    bgColorText.style.padding = "5px 10px";
}

// handle event using addEventListener() method & Anonymous Function

const hotpinkBtn = document.getElementById("hotpinkBtn");
hotpinkBtn.addEventListener("click", () => {
    main.style.backgroundColor = "hotpink";
    bgColorText.style.color = "hotpink";
    bgColorText.innerText = "Hot Pink";
    bgColorText.style.border = "2px solid black";
    bgColorText.style.padding = "5px 10px";
});

// Dynamic Form Save and Edit

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const companyName = document.getElementById("companyName");
const mobileNumber = document.getElementById("mobileNumber");

const firstNamePrint = document.getElementById("firstNamePrint");
const lastNamePrint = document.getElementById("lastNamePrint");
const companyNamePrint = document.getElementById("companyNamePrint");
const mobileNumPrint = document.getElementById("mobileNumPrint");

document.getElementById("saveBtn").addEventListener("click", () => {
    firstNamePrint.innerText = firstName.value;
    lastNamePrint.innerText = lastName.value;
    fullNamePrint.innerText = firstName.value + " " + lastName.value;
    companyNamePrint.innerText = companyName.value;
    mobileNumPrint.innerText = mobileNumber.value;

    firstName.value = "";
    lastName.value = "";
    companyName.value = "";
    mobileNumber.value = "";
});

document.getElementById("editBtn").addEventListener("click", () => {
    firstName.value = firstNamePrint.innerText;
    lastName.value = lastNamePrint.innerText;
    companyName.value = companyNamePrint.innerText;
    mobileNumber.value = mobileNumPrint.innerText;
});

// Add Blog
const blogs = document.querySelector("#blogs");
document.getElementById("addBlogBtn").addEventListener("click", () => {
    const blogTitle = document.getElementById("blog-title").value;
    const blogContent = document.getElementById("blog-content").value;
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.innerText = blogTitle;
    p.innerText = blogContent;
    section.append(h2, p);
    blogs.appendChild(section);
});
