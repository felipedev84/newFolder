const arrayMessages = [
    "luis felipe",
    "sofia",
    "natalia",
    "adriana",
    "carolina",
    "vanessa"
];

const randomMessage = () =>{
 const message = arrayMessages[Math.floor(Math.random() * arrayMessages.length)];
    console.log(message);
};

module.exports = {randomMessage};

