# identify-youtube-shorts
Identify whether a youtube video is shorts or not

# Install
```shell
npm install identify-youtube-shorts
```

# Usage
### `checkIfYoutubeShorts(videoID) -> Promise(boolean)`
#### *Note: `checkIfYoutubeShorts` is an async function*

# Example
```javascript
const checkIfYoutubeShorts = require('identify-youtube-shorts');
const videoID = "dQw4w9WgXcQ";
async function example(videoID){
    const ifShorts = await checkIfYoutubeShorts(videoID);
    console.log(ifShorts); // true or false according to the video
}
example(videoID)
```

# Errors
### The Function will raise a `IdentifyYoutubeShortsError` Error with the cause.