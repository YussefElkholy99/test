// JavaScript for batch operations
const classes = [];

function searchByMobile() {
    const mobileNumber = document.getElementById('mobile-search').value.trim();
    if (!mobileNumber) {
        alert('Please enter a mobile number to search.');
        return;
    }

    // Filter classes by mobile number
    const filteredClasses = classes.filter(cls => cls.mobile === mobileNumber);
    displayClasses(filteredClasses);
}

function selectTime() {
    const timeSelect = document.getElementById('time-select');
    const selectedValue = timeSelect.options[timeSelect.selectedIndex].value;

    // Filter classes by selected time
    let filteredClasses = [];
    switch (selectedValue) {
        case '1':
            filteredClasses = classes.filter(cls => cls.time === '11:00 AM - 2:00 PM');
            break;
        case '2':
            filteredClasses = classes.filter(cls => cls.time === '2:30 PM - 5:30 PM');
            break;
        case '3':
            filteredClasses = classes.filter(cls => cls.time === '6:00 PM - 9:00 PM');
            break;
        default:
            break;
    }

    displayClasses(filteredClasses);
}

function deleteClass() {
    // Simulate deleting a class
    if (classes.length > 0) {
        classes.pop();
        displayClasses(classes);
    }
}

function addClass() {
    // Simulate adding a class
    const newClass = {
        mobile: '1234567890',
        time: '11:00 AM - 2:00 PM'
    };
    classes.push(newClass);
    displayClasses(classes);
}

function displayClasses(classArray) {
    const classList = document.querySelector('.class-list');
    let html = '<ul>';
    classArray.forEach(cls => {
        html += `<li>${cls.mobile} - ${cls.time}</li>`;
    });
    html += '</ul>';
    classList.innerHTML = html;
}

// Initialize display
displayClasses(classes);
