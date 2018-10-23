(function() {
    $(`.inputFields`).hide();
    $(`#addButton`).hide();
    $(`#deleteButton`).hide();
    $(`#searchButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();

})();


const showView = function() {
    $(`.inputFields`).hide();
    $(`#addButton`).hide();
    $(`#deleteButton`).hide();
    $(`#searchButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();

};    

// Showing the Add function button and fields
const showAddInput = function() {
    $(`.inputFields`).show();
    $(`#addButton`).show();
    $(`#deleteButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();

};

// Showing the Delete function button and fields
const showDelInput = function() {
    $(`.inputFields`).show();
    $(`#deleteButton`).show();
    $(`#addButton`).hide();
    $(`#verifyButton`).hide();
    $(`#updateButton`).hide();
};

// Showing the Verify function button and fields
const showVerifyInput = function() {
    $(`.inputFields`).show();
    $(`#verifyButton`).show();
    $(`#deleteButton`).hide();
    $(`#addButton`).hide();
    $(`#updateButton`).hide();
};


// Showing the Update function button and fields
const showUpdateInput = function() {
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


$('#view').on('click', showView);
$('#view').on('click', render);




// how do I create / incorperate the Add screen to get the name to append to the object?
//  When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list.
const getInputVal = function () {
    const nameVal = $('#nameInp').val();
    employeeList.push(nameVal);
  

    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    $('#officeNumInp').val('');
    $('#phoneNumInp').val('');
    render();
    
}

$(`#add`).on(`click`, showAddInput);
$('#addButton').on('click', getInputVal);



//  When the delete button is pressed, delete the element from employeeList that matches the name the user entered in the input field. Re-render the list.
const removeName = function() {
    const nameVal = $('#nameInp').val();
  
    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index
    employeeList.splice(employeeList.indexOf(nameVal), 1);
  
    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    $('#officeNumInp').val('');
    $('#phoneNumInp').val('');
    render();

  }

  $(`#delete`).on(`click`, showDelInput);
  $('#deleteButton').on('click', removeName);
  



//  When the Verify button is pressed,  check to see if the name the user entered is in the employee List.

const verifyName = function() {
    const nameVal = $('#nameInp').val();
  
    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index

    // employeeList.splice(employeeList.indexOf(nameVal), 1);
  
    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    render();

}

  $(`#verify`).on(`click`, showVerifyInput);
  $('#verifyButton').on('click', verifyName);
  




//  When the Update button is pressed, allows the user to input name, office number, and phone number and then update the office number and phone number 
//  of the employee that matches the input name, and then renders the updated employee list.

const updateName = function() {
    const nameVal = $('#nameInp').val();
  
    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index

    // employeeList.splice(employeeList.indexOf(nameVal), 1);
  
    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    render();

}

  $(`#update`).on(`click`, showUpdateInput);
  $('#updateButton').on('click', updateName);



// *** added this code to supprt show and hide functions.  This is fom the homework video.  Will need to update what is shown or hidden.

    // Hides the About
// (function() {
//     $('about').hide();
// })();

    // Hides Homepage and shows about
// const showAbout = function() {
//     $('#homepage').hide();
//     $('about').show();
// };
















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
