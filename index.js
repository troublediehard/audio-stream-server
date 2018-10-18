var express = require('express');
var app = express();

var Downloader = require("./youtube/downloader");
var dl = new Downloader();
var i = 0;




app.get('/download/:videoId', function (req, res) {
  try {
    // youtubeStream(req.params.videoId).pipe(res);
    console.log('videoId', req.params.videoId);
    dl.getMP3({videoId: req.params.videoId, name: req.params.videoId}, function(err,res){
      i++;
      if(err)
        throw err;
      else{
        console.log("Song "+ i + " was downloaded: " + res.file);
      }
    });
  } catch (exception) {
    res.status(500).send(exception)
  }
});

app.listen(3005, () => {
  console.log("App listening on port 3005!");
});
