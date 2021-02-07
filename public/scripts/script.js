



const weatherForm = document.querySelector('form');
const searchLocation = document.querySelector('input');
const result = document.querySelector('#result')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/weather?location=${searchLocation.value}`)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                const msg = res.error;
                result.textContent = msg;
            } else if (res.country) {
                const msg = `In ${res.location}, there have ${res.temperature} degree temperature.`
                result.textContent = msg;
            }
        })
        // .catch(err => {

        // });
})