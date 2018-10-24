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

};

// Showing the Add function button and fields
const showAddInput = function () {
    $(`.inputFields`).show();
    $(`#addButton`).show();
    $(`#deleteButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();

};

// Showing the Delete function button and fields
const showDelInput = function () {
    $(`.inputFields`).show();
    $(`#deleteButton`).show();
    $(`#addButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();
};

// Showing the Verify function button and fields
const showVerifyInput = function () {
    $(`.inputFields`).show();
    $(`#verifyButton`).show();
    $(`#deleteButton`).hide();
    $(`#addButton`).hide();
    $(`#updateButton`).hide();
};


// Showing the Update function button and fields
const showUpdateInput = function () {
    $(`.inputFields`).show();
    $(`#updateButton`).show();
    $(`#deleteButton`).hide();
    $(`#addButton`).hide();
    $(`#verifyButton`).hide();
};





//  Render all of the employee information in `employeeList` individually in paragraph tags to the div with the class `content`.
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
    // Gathering user input.
    const nameVal = $('#nameInp').val();
    // const officeVal = $('#officeNumInp').val();
    // const phoneVal = $('#phoneNumInp').val();
    

    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
          employeeList.splice(i, 1);
          
        }    
    }   
    
    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index
    // employeeList.splice(employeeList.indexOf(nameVal), 1);  Why does this not returns correct index???



    // employeeList.splice(employeeList.indexOf(officeVal), 1);
    // employeeList.splice(employeeList.indexOf(phoneVal), 1);


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
    // Gathering user input.
    const nameVal = $('#nameInp').val();
    // const officeVal = $('#officeNumInp').val();
    // const phoneVal = $('#phoneNumInp').val();
      // If our studentList includes the input value, add blue class to the body
    
      if(employeeList.includes(nameVal)) {
        $('main').addClass('blue');
    }    







    // for (let i = 0; i < employeeList.length; i++) {
    //     if (employeeList[i].name === nameVal) {
    //         console.log('yes');
    //     else {
    //         console.log('No');
    //     }
            
    //     }    
    // }   
    




    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index

    // employeeList.splice(employeeList.indexOf(nameVal), 1);

    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    render();

}
// Listening for user to click the Verify menu option.
$(`#verify`).on(`click`, showVerifyInput);
$('#verifyButton').on('click', verifyName);






//  When the Update button is pressed, allows the user to input name, office number, and phone number and then update the office number and phone number 
//  of the employee that matches the input name, and then renders the updated employee list.
const updateName = function () {
    const nameVal = $('#nameInp').val();

    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index

    // employeeList.splice(employeeList.indexOf(nameVal), 1);

    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    render();

}
// Listening for user to click the Update menu option.
$(`#update`).on(`click`, showUpdateInput);
$('#updateButton').on('click', updateName);









// Please watch this video on single page applications _before_ getting started: <https://youtu.be/_gDMQzNVxQA>

// For this assignment you will be building an online employee directory for your company using your DOM manipulation library and Bootstrap.

// There is an array of employees in the `employeeList.js` file. Note that there is only 1 html file. This is a single page application. You will need to hide and show sections as necessary.

// Begin by creating the `app.js` file, and linking to it from `index.html`.

// In `app.js` you will need to implement all of the following functionality:

// 1. A `View` option that displays all employee info:

// ![view](../images/print.png)

// 2. An `Add` option that allows users to input name, office number, and phone number and then renders the updated employee list.

// ![add](../images/add.png)

// 3. A `Verify` option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.

// ![verify](../images/verify.png)

// 4. An `Update` option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.

// 5. A `Delete` option that deletes the employee with the matching name and then renders the updated employee list.
