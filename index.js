function validateName(value) {
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
}

function checkSpam(str) {
    return str.replaceAll(/viagra/gi, '***');
}

function onSendComment() {
    const name = document.getElementById('name').value;
    const myUrl = document.getElementById('url').value;
    const message = document.getElementById('comment').value;

    const validatedName = validateName(name);
    const validatedMessage = checkSpam(message);
 
    document.getElementById("renderedComment").innerHTML = `Name: ${validatedName}</br> Avatar: <img src=${myUrl} /></br> Message: ${validatedMessage}`;
}