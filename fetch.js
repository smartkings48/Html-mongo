import axios from 'axios'

// fetch('localhost:2000/cust').then((response) => response.json()).then(data => console.log(data))
axios.get('localhost:2000/cust').then((response) => response.json()).then(data => console.log(data))