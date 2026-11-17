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

function cancelRegistration() {

    let name = document.getElementById("cancelName").value;
    let eventName = document.getElementById("cancelEvent").value;

    let list = document.getElementById("registrationList");
    let items = list.getElementsByTagName("li");

    let found = false;

    for (let i = 0; i < items.length; i++) {

        if (items[i].textContent ===
            name + " registered for " + eventName) {

            items[i].remove();
            found = true;
            break;
        }
    }

    if (found) {
        alert("Registration cancelled successfully!");
    } else {
        alert("Registration not found!");
    }
}
