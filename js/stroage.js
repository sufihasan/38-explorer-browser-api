// console.log('ok');
// localStorage.getItem('name');

document.getElementById('btn-add-name').addEventListener('click', function () {

    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    // console.log(nameValue);

    localStorage.setItem('Name', nameValue);



})

document.getElementById('btn-remove-name').addEventListener('click', function () {



    localStorage.removeItem('Name');



})


document.getElementById('btn-add-age').addEventListener('click', function () {

    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    // console.log(nameValue);

    localStorage.setItem('Age', ageValue);



})

document.getElementById('btn-remove-age').addEventListener('click', function () {


    localStorage.removeItem('Age');



})

document.getElementById('clr-all').addEventListener('click', function () {

    localStorage.clear();
})



