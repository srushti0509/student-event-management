
function registerEvent(eventName) {
    let list = document.getElementById("registrationList");

    let item = document.createElement("li");

    item.textContent = eventName + " - Registered";

    list.appendChild(item);

    alert("Registration Successful!");
}
