let students = [];

/* ---------- SIGNUP ---------- */
function signup() {
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    if (user === "" || pass === "") {
        alert("Please fill all fields");
        return;
    }

    // No backend → directly go to home
    window.location.href = "home.html";
}

/* ---------- LOGIN ---------- */
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === "" || pass === "") {
        alert("Please enter username and password");
        return;
    }

    // No validation → allow everyone
    window.location.href = "home.html";
}

/* ---------- STUDENT MANAGEMENT ---------- */
function addStudent() {
    let name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Enter student name");
        return;
    }

    students.push(name);
    document.getElementById("studentName").value = "";
    displayStudents();
}

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(student => {
        let li = document.createElement("li");
        li.textContent = student;
        list.appendChild(li);
    });
}