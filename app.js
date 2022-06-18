const currentDate = new Date()
const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`
document.querySelector('.time').innerHTML = time;
document.querySelector('.datetime-time').innerHTML = time;

const day = new Intl.DateTimeFormat('india', { weekday: 'long' }).format(currentDate)
document.querySelector('.datetime-day').innerHTML = day.toLocaleUpperCase();

const screen = document.querySelector('.screen')
const openMessageApp = () => {
    screen.innerHTML = "";
    screen.style.backgroundColor = "white";
    screen.classList.remove('screen-home');
    screen.classList.add("screen-message");
    messages.forEach(message => {
        console.log(message);
        screen.innerHTML += `
            <div class="message-title" onclick="showMessage(${message.id})">
                <div>${message.title}</div>
                <hr/>
            <div>`
    })
}

const showMessage = (id) => {
    const message = messages.find(message => message.id === id);
    screen.innerHTML = "";
    screen.innerHTML += `
        <div class="message-body">
            <div>${message.body}</div>
            <hr/>
        <div>`
}