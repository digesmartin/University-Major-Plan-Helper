export function saySomethingStupid(): void
{
    alert("ayo");
    console.log("popo's big bum");
}

export function obtainJSON(): void
{
    const testFolder = './Existing Major Requirements';
    const fs = require('fs');

    const dir = '/Users/flavio/folder'
    const files = fs.readdirSync(dir)

    for (const file of files) {
    console.log(file)
    }
}