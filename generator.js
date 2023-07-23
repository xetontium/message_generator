
export const randomMessageGen = (name, pMessage, inspWords) => {

    const giveRandomThingsBack = (arr) =>
        arr[Math.floor(Math.random()*arr.length)];

    return `Dear ${name} these inspiring messages are for YOU today:` + 
        `\n ${giveRandomThingsBack(pMessage)} \n ${giveRandomThingsBack(inspWords)}`;
        

};



