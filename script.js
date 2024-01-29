function sayHello() {
    var nameInput = document.getElementById("nameInput").value;
    var greetingElement = document.getElementById("greeting");
    var finalElement = document.getElementById("final")

    if (nameInput.trim() === "") {
        greetingElement.textContent = "Please enter your name!";
        finalElement.textContent = "";
    } else {
        finalElement.textContent = "Hello, " + nameInput + "!";
        greetingElement.textContent =""
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
          sleep(2000).then(() => { finalElement.textContent = "Hope you are having a great day!"; });
    }
}
