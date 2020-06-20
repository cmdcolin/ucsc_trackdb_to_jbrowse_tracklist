# ucsc_trackdb_to_jbrowse_tracklist

Converts a trackDb.txt file to a jbrowse formatted trackList.json

Very basic, but could be extended to add things like multibigwig plugin tracks, wigglehighlighter tracks, and more


## Usage

Clone the repo and run it on an input trackDb.txt


    git clone https://github.com/cmdcolin/ucsc_trackdb_to_jbrowse_tracklist
    cd ucsc_trackdb_to_jbrowse_tracklist
    node index.js trackDb.txt > trackList.json
