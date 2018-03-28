# Webgrab.js

Really simple CLI tool to quickly grab a screenshot of a website url.

### Installation

Node v8 or greater is required.

*IMPORTANT*: This tool requires puppeteer, which in turn downloads a Chromium
binary, of almost 100MB in size as of this writing.

1. Clone the repo  
`git clone https://github.com/robaxelsen/webgrabjs.git`
1. Enter the repo directory  
`cd webgrabjs`
1. Install npm package dependencies  
`npm install`

### Usage

Syntax:  
`node webgrab.js <site> [dimensions]`

Dimensions default to 1920x1080 if nothing is specified.

Example:  
`node webgrab.js https://github.com/robaxelsen/webgrabjs 1280x720`
