document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello I exist :)');

const titleTextField = document.querySelector('#title');
titleTextField.addEventListener('input', titleInputChanged);

const authorTextField = document.querySelector('#author');
authorTextField.addEventListener('input', authorInputChanged);

const categoryRadioButton = document.querySelector('#radio');
categoryRadioButton.addEventListener('input', radioButtonSubmit);

const dropDownGenre = document.querySelector('#genre');
dropDownGenre.addEventListener('input', genreSelectionChanged);

const submitForm = document.querySelector('#form');
submitForm.addEventListener('submit', handleFormSubmit);

});

const titleInputChanged = function (event){
  console.log('title changed');
  const titleResult = document.querySelector('#title-result');
  titleResult.textContent = `You chose Title ${this.value}`
}

const authorInputChanged = function (event){
  console.log('author changed');
  const authorResult = document.querySelector('#author-result');
  authorResult.textContent = `You chose Author ${this.value}`
}

const radioButtonSubmit = function (event) {
  console.log("input");
  const categoryResult = this.value;
  const radioResult = document.querySelector('#radio-result');
  console.log(`category chosen ${this.category.value}`);
  radioResult.textContent = `You picked category ${this.category.value}`
}

const genreSelectionChanged = function (event) {
  const genreResult = this.value;
  const textParagraph = document.querySelector('#genre-result');
  console.log(`genre changed ${this.value}`);
  textParagraph.textContent = `You chose genre ${this.value}`
}

const handleFormSubmit = function(event){
  event.preventDefault();
  console.log(`form changed ${this.value}`);
  const formParagraph = document.querySelector('#form-result');
  formParagraph.textContent = `You have added ${this.title.value} ${this.author.value} ${this.radio.value} ${this.genre.value}`

}


// const reading_list = document.querySelector("#reading-list")
//   const item = document.createElement('li')
//   item.textContent = `${this.title.value} -- ${this.author.value} -- ${this.category.value} -- ${this.genre.value}`
//   reading_list.appendChild(item);
//
//   resetForm();
// }
//
// function resetForm(){
//   document.querySelector('#input-form').reset();
// }
