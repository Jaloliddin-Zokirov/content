let elForm = document.querySelector('.js-form');
let elName = document.querySelector('.js-name');
let elSurname = document.querySelector('.js-surname');
let elAge = document.querySelector('.js-age');
let elNumber = document.querySelector('.js-number');

let elList = document.querySelector('.js-list');

let contactList = [];

let renderContact = function () {
	elList.innerHTML = ``;

	for (let i = 0; i < contactList.length; i++) {
		let newItem = document.createElement('li');
		let newName = document.createElement('p');
		let newSurname = document.createElement('p');
		let newAge = document.createElement('p');
		let newNum = document.createElement('p');
		let newNameSpan = document.createElement('span');
		let newNameSpanTwo = document.createElement('span');
		let newSurnameSpan = document.createElement('span');
		let newSurnameSpanTwo = document.createElement('span');
		let newAgeSpan = document.createElement('span');
		let newAgeSpanTwo = document.createElement('span');
		let newNumSpan = document.createElement('span');
		let newNumHref = document.createElement('a');

		newItem.setAttribute('class', 'list-group-item');
		newName.setAttribute('class', 'mt-0 mb-3');
		newSurname.setAttribute('class', 'mt-0 mb-3');
		newAge.setAttribute('class', 'mt-0 mb-3');
		newNum.setAttribute('class', 'mt-0 mb-3');
		newNameSpan.setAttribute('class', 'fw-bold fs-4');
		newSurnameSpan.setAttribute('class', 'fw-bold fs-4');
		newAgeSpan.setAttribute('class', 'fw-bold fs-4');
		newNumSpan.setAttribute('class', 'fw-bold fs-4');
		newNameSpanTwo.setAttribute('class', 'fw-normal fs-4 text-dark');
		newSurnameSpanTwo.setAttribute('class', 'fw-normal fs-4 text-dark');
		newAgeSpanTwo.setAttribute('class', 'fw-normal fs-4 text-dark');
		newNumHref.setAttribute('class', 'text-decoration-none fw-normal fs-4 text-dark');

		newNumHref.setAttribute('href', `tel:${contactList[i].Raqami}`);
		newNameSpan.textContent = `Ismi: `;
		newSurnameSpan.textContent = `Familiyasi: `;
		newAgeSpan.textContent = `Yoshi: `;
		newNumSpan.textContent = `Raqami: `;
		newNameSpanTwo.textContent = `${contactList[i].Ismi}`;
		newSurnameSpanTwo.textContent = `${contactList[i].Familiyasi}`;
		newAgeSpanTwo.textContent = `${contactList[i].Yoshi}`;
		newNumHref.textContent = `${contactList[i].Raqami}`;

		newName.appendChild(newNameSpan);
		newName.appendChild(newNameSpanTwo);
		newSurname.appendChild(newSurnameSpan);
		newSurname.appendChild(newSurnameSpanTwo);
		newAge.appendChild(newAgeSpan);
		newAge.appendChild(newAgeSpanTwo);
		newNum.appendChild(newNumSpan);
		newNum.appendChild(newNumHref);
		newItem.appendChild(newName);
		newItem.appendChild(newSurname);
		newItem.appendChild(newAge);
		newItem.appendChild(newNum);
		elList.appendChild(newItem);
	}
};

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	let elNameVal = elName.value.trim();
	let elSurnameVal = elSurname.value.trim();
	let elAgeVal = elAge.value.trim();
	let elNumberVal = elNumber.value.trim();
	elName.value = '';
	elSurname.value = '';
	elAge.value = '';
	elNumber.value = '';

	let person = {
		Ismi: elNameVal,
		Familiyasi: elSurnameVal,
		Yoshi: elAgeVal,
		Raqami: elNumberVal,
	};

	contactList.push(person);
	renderContact();
});
