function validateURL(inputText) {
    //will need extra check for url's with no content
    const regex = inputText.match(/http(s)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);

    if(regex === null){
        return false;
    } else{
        return true;
    }
 }

 export { validateURL }