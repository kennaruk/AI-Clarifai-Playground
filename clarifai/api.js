const Clarifai = require('clarifai');
const app = new Clarifai.App({
    apiKey: 'e86080b82fda4bd498c9bb2c7d13cb88'
});

app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", "https://samples.clarifai.com/metro-north.jpg").then(
    function(response) {
        console.log(response.outputs[0].data.colors);
        response.outputs[0].data.colors.forEach(color => {
            console.log(color.raw_hex);
        });
    },
    function(err) {
     // there was an error
    }
);