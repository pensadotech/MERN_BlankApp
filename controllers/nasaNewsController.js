
// NASA news funcitons to retreive and scrap the data ...................
const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
   getNasaNews : function(req,res) {
     getNews()
      .then(news => res.json(news))
      .catch(err => res.status(422).json(err))
   }
}

async function getArtilceHeads() {
  // build the target URL
  let url = 'https://www.nasa.gov/rss/dyn/breaking_news.rss'
  // Retreive teh information
  let result = await axios.get(url)
  // retunr result
  return result;
}

async function getArticles() {
  // articles collection
  articlesArr = [];
  // Get news feed (async)
  let result = await getArtilceHeads()
  // use cheerio to make the HTM reponse manageble
  // normally will be a 'data' child with the informaiton
  const $ = cheerio.load(result.data)
  // parse to obtain desired data
  $('item').each((i, elem) => {
        
    articlesArr.push({ 
      title:  $(elem).children('title').text(),
      description: $(elem).children('description').text(),
      image : $(elem).children('enclosure').attr('url'),
      url : $(elem).children('enclosure').children('guid').text(),
      pubDate: $(elem).children('enclosure').children('pubDate').text(),
      pubId : $(elem).children('enclosure').children().last().text()
    })
  })

  return articlesArr
}

function getNews() {
  return new Promise(function (resolve, reject) {
    resolve(getArticles())
  })
}
