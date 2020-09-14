const axios = require("axios");
const urls = [
"https://example.com"
]

setInterval(() => {
        urls.forEach(url => {
              axios.get(url)
                  console.log(`Pinged ${url}`);
              }).catch(() => {});
        });
    }, 60000); //pings all the urls specified in the array urls.
    
