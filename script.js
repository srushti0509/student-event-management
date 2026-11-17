function registerEvent(eventName) {
    let name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    let list = document.getElementById("registrationList");
    let item = document.createElement("li");

    item.textContent = name + " registered for " + eventName;

    list.appendChild(item);

    alert("Registration Successful!");
}