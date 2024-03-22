// Function to send a message and save it to local storage
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message !== '') {
        // Create a unique key for each message (e.g., using a timestamp)
        const timestamp = new Date().getTime();
        const messageKey = `message_${timestamp}`;

        // Save the message to local storage
        localStorage.setItem(messageKey, message);

        // Clear the input field
        messageInput.value = '';
        
        // Display the message in the chat interface
        displayMessage(message);

        // Optionally, you can also send the message to a server or perform other actions here.
    }
}

// Function to retrieve and display messages from local storage
function displayMessagesFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const message = localStorage.getItem(key);
        displayMessage(message);
    }
}

// Function to upload an image
function uploadImage() {
    const imageInput = document.getElementById('image-upload');
    const chatMessages = document.getElementById('chat-messages');

    // Check if a file was selected
    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            // Display the uploaded image in the chat
            const imageElement = document.createElement('img');
            imageElement.src = event.target.result;
            chatMessages.appendChild(imageElement);

            // You would typically send the image to a server for storage at this point.
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select an image to upload.');
    }
}


// Function to display a message in the chat interface
function displayMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

// Function to clear all messages from local storage
function clearMessages() {
    localStorage.clear(); // This will remove all items from local storage
    // Optionally, you can also remove the displayed messages from the chat interface
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = ''; // Clear the chat interface
}

// Call the function to display messages from local storage when the page loads
displayMessagesFromLocalStorage();
