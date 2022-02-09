const fetch = require('node-fetch');

class IdentifyYoutubeShortsError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

async function checkIfYoutubeShorts(id) {
    try {
        const response = await fetch("https://www.youtube.com/shorts/" + id, {
            redirect: "manual"
        });
        if (response.headers.has('Location') && response.headers.get('Location') == "https://www.youtube.com/watch?v=" + id) {
            return false
        } else {
            return true
        }
    } catch (e) {
        throw new IdentifyYoutubeShortsError(e.message)
    }
}

module.exports = checkIfYoutubeShorts;