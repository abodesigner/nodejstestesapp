const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const location = search.value;
    fetch(`/weather?address=${location}`).then(response=>{
    response.json().then(data=>{
        if(data.error) {
            console.log(data.error);
        } else {
            console.log("Forcast:" , data.forecast);
        }
    })
})
})