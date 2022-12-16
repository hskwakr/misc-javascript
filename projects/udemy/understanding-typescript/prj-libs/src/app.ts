// Get the api key
const API_KEY = process.env.GOOGLE_API_KEY;

// Get form element
const form = document.querySelector('form');
if (!form) {
  throw new Error('Missing form element');
}

// Get input element
const addressInput = document.getElementById('address') as HTMLInputElement;
if (!addressInput) {
  throw new Error('Missing address input element');
}

// Event handler to search address
function searchAddressHandler(event: Event) {
  event.preventDefault();

  // const enteredAddress = addressInput.value;
}

// Register events
form.addEventListener('submit', searchAddressHandler);
