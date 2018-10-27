(function () {
    $(`.inputFields`).hide();
    $(`#addButton`).hide();
    $(`#deleteButton`).hide();
    $(`#searchButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();

})();

// Hidding all buttons and fields for the View function
const showView = function () {
    $(`.inputFields`).hide();
    $(`#addButton`).hide();
    $(`#deleteButton`).hide();
    $(`#searchButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();
    $('#scroll').html('V'.fontcolor('black').bold().big() +'iew Employee Directory');

};

// Showing the Add function button and fields
const showAddInput = function () {
    $(`.inputFields`).show();
    $(`#nameInp`).show();
    $(`#officeNumInp`).show();
    $(`#phoneNumInp`).show();
    $(`#addButton`).show();
    $(`#deleteButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();
    $('#scroll').html('');
    $('#scroll').html('A'.fontcolor('black').bold().big() +'dd Employees to Directory');

};

// Showing the Delete function button and fields
const showDelInput = function () {
    $(`.inputFields`).show();
    $(`#nameInp`).show();
    $(`#officeNumInp`).hide();
    $(`#phoneNumInp`).hide();
    $(`#deleteButton`).show();
    $(`#addButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();
    $('#scroll').html('');
    $('#scroll').html('D'.fontcolor('black').bold().big() +'elete Employee from Directory');
};

// Showing the Verify function button and fields
const showVerifyInput = function () {
    $(`.inputFields`).show();
    $(`#verifyButton`).show();
    $(`#deleteButton`).hide();
    $(`#addButton`).hide();
    $(`#updateButton`).hide();
    $(`#officeNumInp`).hide();
    $(`#phoneNumInp`).hide();
    $('#scroll').html('V'.fontcolor('black').bold().big() +'erify Employee in Directory');
      
};


// Showing the Update function button and fields
const showUpdateInput = function () {
    $(`.inputFields`).show();
    $(`#nameInp`).show();
    $(`#officeNumInp`).show();
    $(`#phoneNumInp`).show();
    $(`#updateButton`).show();
    $(`#deleteButton`).hide();
    $(`#addButton`).hide();
    $(`#verifyButton`).hide();
    $('#scroll').html('');
    $('#scroll').html('U'.fontcolor('black').bold().big() +'pdate Employee Information');
};




let j = 0;
let txt = 'Welcome to the Employee Directory';
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (j < txt.length) {
    document.getElementById("scroll").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter(); 







 // When the View button is pressed or 'render is called, display all of the employee information in `employeeList` individually in paragraph tags to the div with the class `content`.
const render = function () {
    $('.content').empty();
    
    for (let i = 0; i < employeeList.length; i++) {
        $('.content').append(`<hr><p>${employeeList[i].name}</p>`);
        $('.content').append(`<p>${employeeList[i].officeNum}</p>`);
        $('.content').append(`<p>${employeeList[i].phoneNum}</p>`);
    }
}

render();

// Listening for user to click the View menu option and then render the employee list.
$('#view').on('click', showView);
$('#view').on('click', render);





//  When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list.
const getInputVal = function () {
    // Delaring newEmployee object elements that will be used to gather user imput and then add to the Employee list.
    const newEmployee = {
        name: '',
        officeNum: '',
        phoneNum: ''
    };

    // Gathering user input.
    const nameVal = $('#nameInp').val();
    const officeVal = $('#officeNumInp').val();
    const phoneVal = $('#phoneNumInp').val();
    
    // Assigning user input to newEmployee object.
    newEmployee.name = nameVal;
    newEmployee.officeNum = officeVal ;
    newEmployee.phoneNum = phoneVal;

    // Adding the new employee infomation to the employee list.
    employeeList.push(newEmployee);

    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    $('#officeNumInp').val('');
    $('#phoneNumInp').val('');
    render();

}
// Listening for user to click the Add menu option.
$(`#add`).on(`click`, showAddInput);
// Listening for the user to push the Add buttom.
$('#addButton').on('click', getInputVal);





//  When the delete button is pressed, delete the element from employeeList that matches the name the user entered in the input field. Re-render the list.
const removeName = function () {
    let onEmployeetList = false;
    // Gathering user input.
    const nameVal = $('#nameInp').val();
    
    // If selected employee name is in the list, delete the employee record.
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
          employeeList.splice(i, 1);
          onEmployeetList = true;  
        }    
    }   
  
    // If selected employee name not in the list, alert user.
    if (onEmployeetList == false) {
        $('#scroll').html(nameVal.fontcolor("DarkRed").bold() + ', not in the employee list');
        }

    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    $('#officeNumInp').val('');
    $('#phoneNumInp').val('');
    render();

}

// Listening for user to click the Delete menu option.
$(`#delete`).on(`click`, showDelInput);
// Listening for the user to push the Delete buttom.
$('#deleteButton').on('click', removeName);





//  When the Verify button is pressed,  check to see if the name the user entered is in the employee List.
const verifyName = function () {
    // Gathering user input and initializing variable 'listStatus'.
    const nameVal = $('#nameInp').val();
    let listStatus = false;

    // Loop through employeeList and set the listStatus to 'true' or 'false' based on userinput value.
    for (let i = 0; i < employeeList.length; i++) {    
        if (employeeList[i].name === nameVal) {
            listStatus =  true;
            break
        } else {
            listStatus =  false;
        }
    }

    // based on booloean value of listStatus, use html method to display 'yes' or 'no' message.
    if (listStatus == true) {
       $('#scroll').html(nameVal.fontcolor("DarkGreen").bold() + ', is in the employee list');
     
    } else {
       $('#scroll').html(nameVal.fontcolor("DarkRed").bold() + ', not in the employee list');       

    }

    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    // render();
   
}
// Listening for user to click the Verify menu option.
$(`#verify`).on(`click`, showVerifyInput);
$('#verifyButton').on('click', verifyName);





//  When the Update button is pressed, allows the user to input name, office number, and phone number and then update the office number and phone number 
//  of the employee that matches the input name, and then renders the updated employee list.
const updateName = function () {
    let onEmployeetList = false;
    
    // Gathering user input.
    const nameVal = $('#nameInp').val();
    const officeVal = $('#officeNumInp').val();
    const phoneVal = $('#phoneNumInp').val();
    
    // If selected empoyee is on the list, update with new employee infomation.
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            employeeList[i].name = nameVal;
            employeeList[i].officeNum = officeVal;
            employeeList[i].phoneNum = phoneVal;
            onEmployeetList = true;
        }
    }

    // If selected employee name not in the list, alert user.
    if (onEmployeetList == false) {
        $('#scroll').html(nameVal.fontcolor("DarkRed").bold() + ', not in the employee list');
    }
    


    // After performing our actions, clear the input values and re-render the list
     $('#nameInp').val('');
     $('#officeNumInp').val('');
     $('#phoneNumInp').val('');
    render();

}
// Listening for user to click the Update menu option.
$(`#update`).on(`click`, showUpdateInput);
$('#updateButton').on('click', updateName);

