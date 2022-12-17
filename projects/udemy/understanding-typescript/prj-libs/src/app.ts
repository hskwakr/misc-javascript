import axios from 'axios';
import { Loader } from '@googlemaps/js-api-loader';

// Get the api key
const API_KEY = process.env.GOOGLE_API_KEY;
if (!API_KEY) {
  throw new Error('Missing Google API key');
}

// Get the map loader
const loader = new Loader({
  apiKey: API_KEY,
  version: 'weekly',
  libraries: ['places'],
});

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
    // Get map element
    const mapEl = document.getElementById('map');
    if (!mapEl) {
      throw new Error('Missing map element');
    }

    // Send request to search
    const res = await axios.get<GoogleGeocodingResponse>(url);
    // console.log(res);
    if (res.data.status !== 'OK') {
      throw new Error('Could not fetch location!');
    }

    // Get a location data
    const coordinates = res.data.results[0].geometry.location;

    // Load the map
    const googleMap = await loader.load();

    // Render map
    const map = new googleMap.maps.Map(mapEl, {
      center: coordinates,
      zoom: 10,
    });

    new google.maps.Marker({ position: coordinates, map: map });
  } catch (error) {
    console.log(error);
  }
}

// Register events
form.addEventListener('submit', searchAddressHandler);
