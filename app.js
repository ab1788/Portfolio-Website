const scriptURL = 'https://script.google.com/macros/s/AKfycbzEUBlZhIfWWwdvsx3g5Ksv9ZcwBTsH5gDWs6cWQZly7ESJa6CXS5cBbwCgyS6mtv3Y/exec'
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success');

var typed = new Typed(".text", {
    strings:["Full Stack Developer" , "Frontend Developer", "Machine Learning Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        success.innerHTML = "data successfully submitted";

        setTimeout(function() {
            success.innerHTML = "";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
})
