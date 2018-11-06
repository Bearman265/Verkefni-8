const ENTER_KEYCODE = 13;



document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  let eyda;
  let input;
  let check;
  let baetavid;
  let inputContainer;

  function init(_form, _items) {
    items = _items;
    
    input = _form.querySelector('.form__input');
    baetavid = _form.querySelector('.form__button');
    check = items.querySelector('.item__checkbox');
    eyda = items.querySelector('.item__button');
    inputContainer = items.querySelector('.item__text');
    

    _form.addEventListener('submit', formHandler);

    const fjoldiItems = items.getElementsByTagName('li');
    for(let i=0; i<fjoldiItems.length; i++) {
      fjoldiItems[i].children[0].addEventListener('change', () => {
        finish(fjoldiItems[i]);
      });
      fjoldiItems[i].children[1].addEventListener('click', () => {
        edit(fjoldiItems[i]);
      });
      fjoldiItems[i].children[2].addEventListener('click', () => {
        deleteItem(fjoldiItems[i]);
      });
    }
    //check.addEventListener('click', commit);
    //eyda.addEventListener('click', deleteItem);
    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    const inputValue = input.value;
    let valid = true;
    if(!validText(inputValue)) {
      valid = false;
    }
    if (valid) {
      add(inputValue);
      clearForm();
    }
    
    console.log('halló heimur');
    
  }

  function clearForm() {
    input.value = '';
    
  }

  function validText(value) {
    return value.length > 0;
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    document.getElementsByClassName('item__text').value = 'Halló Pési';
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    const liElement = document.createElement('li');
    liElement.classList.add('item');

    const checkElement = document.createElement('input');
    checkElement.type = 'checkbox';
    checkElement.classList.add('item__checkbox');

    const textElement = document.createElement('span');
    textElement.classList.add('item__text');
    textElement.appendChild(document.createTextNode(value));

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('item__button');
    buttonElement.appendChild(document.createTextNode('Eyða'));

    liElement.appendChild(checkElement);
    liElement.appendChild(textElement);
    liElement.appendChild(buttonElement);

    liElement.children[0].addEventListener('click', () => {
      finish(liElement);
    });
    liElement.children[2].addEventListener('click', () => {
      deleteItem(liElement);
    });

    items.appendChild(liElement);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    e.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();