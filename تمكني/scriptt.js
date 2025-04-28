let chatBox = document.getElementById("chat-box");

let messageInput = document.getElementById("message-input");



function sendMessage() {

    let message = messageInput.value.trim();

    if (message !== "") {

        let messageElement = document.createElement("p");

        messageElement.textContent = "👤 أنت: " + message;

        chatBox.appendChild(messageElement);

        chatBox.scrollTop = chatBox.scrollHeight;  

        messageInput.value = "";  

    }

}