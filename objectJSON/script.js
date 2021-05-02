let person = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Ford'
    },
    job: 'Frontend',
    friends: ['Elena', 'Igor']
}

let str = JSON.stringify(person)
console.log(JSON.parse(str));

let date = new Date()
let year = date.getFullYear()
document.querySelector('p').innerHTML = year + ' год'
console.log(date);

document.querySelector('button').addEventListener('click', function(event) {

    let value = document.querySelector('input').value

    localStorage.setItem('headerText', value)

})

document.addEventListener('DOMContentLoaded', function() {

    let text = localStorage.getItem('headerText')

    if (text && text.trim()) {
        document.querySelector('h1').textContent = text
    }
})
