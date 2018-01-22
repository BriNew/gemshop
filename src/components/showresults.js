import {URL} from '../backend.js';

export default (async function showResults(values) {
  fetch(URL + 'contact', {
  	method: 'POST', 
  	headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  	body: JSON.stringify(values)
  }).then(res => {
  	return res.json();
  }).then(data => {
    alert('Thank you for contacting us, we will get back to you shortly.');
    window.location.href = "/ ";
  })
});



