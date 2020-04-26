class SearchGifs{
    constructor(url,params) {
        this.url = url;
        this.params = params;
    }

    async fetchSearchedGifs(){               
        return fetch(this.url + new URLSearchParams(this.params))
        .then((response) => {
          return response.json();
        }).then((response) => {
            return response.data;
        });
    }      

    async drawSearchedGif(){
        const results = await this.fetchSearchedGifs();
        console.log(results);
        document.getElementById("user-search").value = "";
        results.map(elem => {
            let img = document.createElement('img');
            img.src = elem.images.fixed_height_still.url;
            document.getElementById("gif-list").append(img);
        });

    }      
}

class Trending{
    constructor(url,key) {
        this.url = url;
        this.params = key;
    }

    async fetchTrandingGifs(){               
        return fetch(this.url+new URLSearchParams(this.params))
        .then((response) => {
          return response.json();
        }).then((response) => {
            return response.data;
        });
    }      

    async drawTrendingGif(){
        const results = await this.fetchTrandingGifs();
        console.log(results);
        document.getElementById("user-search").value = "";
        results.map(elem => {
            let img = document.createElement('img');
            img.src =elem.images.fixed_height_still.url;
            document.getElementById("gif-list").append(img);
        });
    }
}

async function getSearchedGifs(){
    let query = document.getElementById("user-search").value;
    let queryURL = "https://api.giphy.com/v1/gifs/search?";
    let params = {
    q: query,
    limit: 10,
    api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
    fmt: "json"
    }
    let searchElem = new SearchGifs(queryURL, params);
    await searchElem.drawSearchedGif();
}

async function getTrendingGifs(){
    let queryURL = "https://api.giphy.com/v1/gifs/trending?";
    let params = {
    limit: 10,
    api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
    fmt: "json"
    }
    let trendingElem = new Trending(queryURL,params);
    await trendingElem.drawTrendingGif();
}


