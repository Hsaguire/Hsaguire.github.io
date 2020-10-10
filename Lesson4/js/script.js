 //This cjs code is for tolocalDateString
        const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numberic'};
        document.getElementById('currentdate').textContent = new Date().toLocaleDateString('options');
// This js code is for the nav button 

const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

try {
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString(options);
} catch (e) {
    alert('Error with code or your browser does not support Locale');
}
