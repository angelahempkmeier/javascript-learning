function talkafter(seconds, phrase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase);
        }, seconds*1000);
    });
}

talkafter(3, 'nice')
    .then(phrase => phrase.concat('?!'))
    .then(anotherphrase => console.log(anotherphrase));