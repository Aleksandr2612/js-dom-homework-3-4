// №1

// const mainForm = document.forms.main;
// const mainFormInput = mainForm.nameInput;

// const mainFormInputPlaceholder = mainFormInput.placeholder;

// mainFormInput.addEventListener("focus", function(e) {
//     mainFormInput.placeholder = "";
//     console.log('Фокус');
//     setTimeout(() => {
//         mainFormInput.blur();
//         console.log('blur');
//     }, 5000);
// });

// №2


// const lesson = document.querySelector('.lesson');

// // Реагируем на событие "в фокусе"
// lesson.addEventListener("focus", function(e) {
//     lesson.classList.add('_focus');
//     console.log('Див lesson в фокусе!');
// });
// // Реагируем на событие "потеря фокуса"
// lesson.addEventListener("blur", function(e) {
//     lesson.classList.remove('_focus');
//     console.log('Сработал blur');
// });


// №3

// const fhone = {
//     display: '5 дюймов',
//     screenResolution: '1280х720',
//     operationSistem: 'IOS',
//     memory: '12 Гб',
//     camera: true,
//     price: 450,
//     model: {
//         serie_5: false,
//         serie_11: true,
//     },
// }

// localStorage.setItem('fhons', JSON.stringify(fhone));


// const myName = 'Александр';
// const mySurname = 'Клепец';

// localStorage.setItem('myName', myName);
// localStorage.setItem('mySurname', mySurname);
// localStorage.removeItem('myName');