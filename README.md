# ucsc_trackdb_to_jbrowse_tracklist

Converts a trackDb.txt file to a jbrowse formatted trackList.json

Very basic approach, could certainly be extended or elaborated on

This script does not convert supertracks or parent tracks, but it could potentially make supertracks into multibigwig tracks or similar. Similar with paired bigBed+bigWig, maybe wigglehighlighter jbrowse plugin


## Usage

Clone the repo and run it on an input trackDb.txt


    git clone https://github.com/cmdcolin/ucsc_trackdb_to_jbrowse_tracklist
    cd ucsc_trackdb_to_jbrowse_tracklist
    yarn
    node index.js trackDb.txt > trackList.json
