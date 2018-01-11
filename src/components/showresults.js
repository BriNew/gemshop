export default (async function showResults(values) {
  // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  console.log(values);
  fetch('http://localhost:8080/contact', {
  	method: 'POST', 
  	headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  	body: JSON.stringify(values)
  }).then(res => {
  	return res.json();
  }).then(data => {
  	console.log(data);
  })
});



