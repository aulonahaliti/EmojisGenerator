function emojis(){
    fetch('https://emojihub.yurace.pro/api/random')
    .then(response => response.json())
    .then(emoji => {
        const emojiContainer = document.getElementById('emoji');
        emojiContainer.innerHTML = `
        <h1> Name: ${emoji.name} </h1>
        <p> Category: ${emoji.category} </p>
        <p> Group: ${emoji.group} </p>
        <p> Emoji: ${emoji.htmlCode} </p>
        <p> Unicode: ${emoji.unicode} </p>  
        `
    } );
 };