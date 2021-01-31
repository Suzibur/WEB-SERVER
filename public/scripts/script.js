fetch('http://localhost:5000/info')
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.log(err));