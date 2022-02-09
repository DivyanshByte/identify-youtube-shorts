const fetch = require('node-fetch');

async function checkIfYoutubeShorts(id) {

    const response = await fetch("https://www.youtube.com/shorts/"+id, {
        redirect: "manual"
    });
    if (response.headers.has('Location') && response.headers.get('Location') == "https://www.youtube.com/watch?v="+id){
        return false
    }
    else{
        return true
    }
}

module.exports = checkIfYoutubeShorts;