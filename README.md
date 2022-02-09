# identify-youtube-shorts
Identify whether a youtube video is shorts or not

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
example()
```