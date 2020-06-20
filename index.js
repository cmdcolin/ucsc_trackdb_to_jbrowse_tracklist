const { TrackDbFile } = require("@gmod/ucsc-hub");
const fs = require("fs");

const myargs = process.argv.slice(2);
const trackDbFile = new TrackDbFile(fs.readFileSync(myargs[0], "utf8"));

const tracks = [];
for (const [key, value] of trackDbFile.entries()) {
  const track = {};
  for (const [entry, val] of value.entries()) {
    track[entry] = val;
  }
  if (track.bigDataUrl) {
    tracks.push({
      urlTemplate: track.bigDataUrl,
      label: track.shortLabel,
      key: track.longLabel || track.shortLabel,
      style: {
        color: track.color,
      },
    });
  }
}

console.log(JSON.stringify({ tracks }, 0, 2));
