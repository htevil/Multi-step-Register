let checkedValues = [];
let nameValue = "empty"
let emailValue = "empty"

// Get the submit button by its ID
const submitButton = document.getElementById('submit-btn');
const submitButton2 = document.getElementById('submit-btn2');
const submitButton3 = document.getElementById('submit-btn3');
const redirectButton = document.getElementById('redirect-btn');
const container_number = document.getElementById('container_num');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
// Get the container elements by their class names
const container_1 = document.getElementsByClassName('container_1')[0];
const container_2 = document.getElementsByClassName('container_2')[0];
const container_3 = document.getElementsByClassName('container_3')[0];


// Add event listener to the submit button
submitButton.addEventListener('click', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Get the name and email input elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    // Get the values of the name and email inputs
    nameValue = name.value;
    emailValue = email.value;
    // Display container_2
    container_1.style.display = "none";
    container_2.style.display = "block";
    container_number.textContent = "Step 2 of 3";
    dot2.style.backgroundColor = "#652CD1";
    dot2.style.border = "solid 5px #212936";

});

submitButton2.addEventListener('click', function(event){
    event.preventDefault();
    const form = document.getElementById('checkboxForm');
    const checkboxes = form.querySelectorAll('.checkbox');
    

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value);
        }
    });

    container_1.style.display = "none";
    container_2.style.display = "none";
    container_3.style.display = "block";

    
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    input1.innerHTML= nameValue;
    input2.innerHTML= emailValue;

    let ul = document.createElement('ul');

    // Loop through the checkedValues array
    for (let i = 0; i < checkedValues.length; i++) {
        // Create a list item element
        let li = document.createElement('li');
        
        // Set the text content of the list item to the current value
        li.textContent = checkedValues[i];
        
        // Append the list item to the unordered list
        ul.appendChild(li);
    }
    
    // Append the unordered list to the input3 element
    input3.innerHTML = ''; // Clear any existing content
    input3.appendChild(ul);
    container_number.textContent= "Step 3 of 3";
    dot3.style.backgroundColor = "#652CD1";
    dot3.style.border = "solid 5px #212936";
});

submitButton3.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Show the alert
    document.getElementById('alertBox').style.display = 'flex';
});


redirectButton.addEventListener('click', function(event) {
    event.preventDefault();
    location.reload();

});