// bg color change text
const bgColorText = document.getElementById("bg-color-text");

const main = document.getElementById("main");
main.style.overflow = "hidden";

// using HTML onclick() method
function blueBtn() {
    main.style.backgroundColor = "blue";
    bgColorText.style.color = "blue";
    bgColorText.innerText = "Blue";
}
// Handle event using separate function
document.getElementById("redBtn").onclick = bgRed;
document.getElementById("greenBtn").onclick = greenBtn;

function bgRed() {
    main.style.backgroundColor = "red";
    bgColorText.style.color = "red";
    bgColorText.innerText = "Red";
}
function greenBtn() {
    main.style.backgroundColor = "green";
    bgColorText.style.color = "green";
    bgColorText.innerText = "Green";
}

// handle event using anonymous function
const yellowBtn = document.getElementById("yellowBtn");

yellowBtn.onclick = () => {
    main.style.backgroundColor = "yellow";
    bgColorText.style.color = "yellow";
    bgColorText.innerText = "Yellow";
};

// handle event using addEventListener() method
const indigoBtn = document.getElementById("indigoBtn");
indigoBtn.addEventListener("click", changeBgToIndigo);

function changeBgToIndigo() {
    main.style.backgroundColor = "indigo";
    bgColorText.style.color = "indigo";
    bgColorText.innerText = "Indigo";
}

// handle event using addEventListener() method & Anonymous Function
const hotpinkBtn = document.getElementById("hotpinkBtn");
hotpinkBtn.addEventListener("click", () => {
    main.style.backgroundColor = "hotpink";
    bgColorText.style.color = "hotpink";
    bgColorText.innerText = "Hot Pink";
});

// handle event using addEventListener() method & Anonymous Function
const normalBtn = document.getElementById("normalBtn");
normalBtn.addEventListener("click", () => {
    main.style.backgroundColor = "white";
    bgColorText.style.color = "black";
    bgColorText.innerText = "Normal";
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
const blogTitle = document.getElementById("blog-title");
const blogContent = document.getElementById("blog-content");
document.getElementById("addBlogBtn").addEventListener("click", () => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const inputBox = document.createElement("input");
    inputBox.setAttribute("placeholder", 'Type "Delete" to confirm');
    inputBox.setAttribute("id", "deleteConfirm");
    inputBox.setAttribute("type", "text");
    const deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("id", "blogDeleteBtn");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
    deleteBtn.setAttribute("disabled", "disabled");
    h2.innerText = blogTitle.value;
    p.innerText = blogContent.value;
    section.append(h2, p, inputBox, deleteBtn);
    blogs.appendChild(section);
    blogTitle.value = "";
    blogContent.value = "";
    inputBox.addEventListener("keyup", (e) => {
        if (e.target.value == "Delete") {
            deleteBtn.removeAttribute("disabled");
        } else {
            deleteBtn.setAttribute("disabled", true);
        }
        deleteBtn.addEventListener("click", () => {
            section.style.display = "none";
        });
    });
});
// // Delete Blog with Confirm Keyword like github
// document.getElementById("blogDeleteBtn").addEventListener("click", () => {
//     document.querySelector("#blogs section").style.display = "none";
//     console.log("click");
// });

// document.getElementById("deleteConfirm").addEventListener("keyup", (event) => {
//     const addBlogBtn = document.getElementById("blogDeleteBtn");
//     console.log(event.target.value);
//     if (event.target.value == "Delete") {
//         addBlogBtn.removeAttribute("disabled");
//     } else {
//         addBlogBtn.setAttribute("disabled", true);
//     }
// });
