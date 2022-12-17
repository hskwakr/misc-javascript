import axios from 'axios';

// Get the api key
const API_KEY = process.env.GOOGLE_API_KEY;

// Set api url
const API_URL_BASE = 'https://maps.googleapis.com/maps/api/geocode/';

// Define api response type
type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

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
async function searchAddressHandler(event: Event) {
  event.preventDefault();

  // Get input data
  const enteredAddress = addressInput.value;

  // Set the url to request
  const url =
    API_URL_BASE + `json?address=${encodeURI(enteredAddress)}&key=${API_KEY}`;

  try {
    // Send request to search
    const res = await axios.get<GoogleGeocodingResponse>(url);
    // console.log(res);
    if (res.data.status !== 'OK') {
      throw new Error('Could not fetch location!');
    }
    
    // Get a location data
    // const coordinates = res.data.results[0].geometry.location;
  } catch (error) {
    console.log(error);
  }
}

// Register events
form.addEventListener('submit', searchAddressHandler);
