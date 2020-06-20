const { TrackDbFile } = require("@gmod/ucsc-hub");
const fs = require("fs");
const trackDbFile = new TrackDbFile(fs.readFileSync("trackDb.txt", "utf8"));

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

fs.writeFileSync("trackList.json", JSON.stringify({ tracks }, 0, 2));
