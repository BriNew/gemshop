import {URL} from '../backend.js';

export default (async function showResults(values) {
  console.log(values);
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
  	console.log(data);.3
    alert('Thank you for contacting us, we will get back to you shortly.');
    window.location.href = "/ ";
  })
});



