let chatBox = document.getElementById("chat-box");

let messageInput = document.getElementById("message-input");



// تحميل الرسائل المخزنة عند فتح الصفحة

window.onload = function() {

    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

    messages.forEach(msg => {

        displayMessage(msg);

    });

};



// إرسال الرسالة

function sendMessage() {

    let message = messageInput.value.trim();

    if (message !== "") {

        let msg = "👤 أنت: " + message;

        displayMessage(msg);



        // حفظ الرسائل في localStorage

        let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

        messages.push(msg);

        localStorage.setItem("chatMessages", JSON.stringify(messages));



        messageInput.value = "";  // تفريغ خانة الإدخال

    }

}



// عرض الرسائل في الدردشة

function displayMessage(message) {

    let messageElement = document.createElement("p");

    messageElement.textContent = message;

    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;  // تحريك العرض للأسفل تلقائيًا

}