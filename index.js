const avatars = [
    'avatars/avatar1.jpg',
    'avatars/avatar2.png',
    'avatars/avatar3.png',
    'avatars/avatar4.png',
    'avatars/avatar5.jpg',
    'avatars/avatar6.jpg'
  ];

function validateName(value) {
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
}

function toggleNameVisibility() {
    let yes = document.getElementById('yes');
    let no = document.getElementById('no');
    const name = document.getElementById('name');

    if (yes.checked) {
        name.style.display = "block";
    } else {
        name.style.display = "none";
    }
}

function toggleCheckbox(checkbox) {
    let otherCheckboxId = checkbox.id === 'yes' ? 'no' : 'yes'; 
    let otherCheckbox = document.getElementById(otherCheckboxId); 

    if (checkbox.checked) {
        otherCheckbox.checked = false; 
    }
}

document.getElementById('yes').addEventListener('change', function() {
    toggleCheckbox(this);
});

document.getElementById('no').addEventListener('change', function() {
    toggleCheckbox(this);
});
function checkSpam(str) {
    return str.replaceAll(/viagra/gi, '***');
}
    const date = new Date();

function getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    const randomAvatar = avatars[randomIndex];
    return randomAvatar;
}

function onSendComment() {
    const name = document.getElementById('name').value;
    let myUrl = document.getElementById('url').value;
    const message = document.getElementById('comment').value;

    const showName = document.getElementById('yes').checked;
    
    let validatedName = '';
    if (showName) {
        validatedName = validateName(name);
    } else {
        validatedName = 'username';
    }

    const validatedMessage = checkSpam(message);
    let nameOutput = showName ? `Name: ${validatedName}` : '';

    if (!myUrl) {
        myUrl = getRandomAvatar();
    }

    document.getElementById("renderedComment").innerHTML = `${nameOutput}</br> Avatar: <img src=${myUrl} /></br> Message: ${validatedMessage} ${date}`;
}