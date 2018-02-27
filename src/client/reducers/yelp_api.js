import Yelp from 'node-yelp-fusion'

export const CLIENT_ID = "5r_zrjize_iwTbaAg_1VYw"
export const API_KEY = "EnixyvfHt4OKYw7NKHgCG1WyyRkb3VQSrWE7pXnhiiILpIJLQqtEaR1Zx41UrXCAOdxqd-o88e1a_6ozN3L3i2MPw9_hWY22vZhhIgACcxkXrQeRx8JN0OFjrK6VWnYx"
export const SECRET_KEY = "7kufFV4xfAmYjPC8LJsRj8O9ja3FYMqhSHDLcVRLIhX0Y5OCDJ6ovugrH6DHTCB2"

const yelp = new Yelp({id: CLIENT_ID, secret: SECRET_KEY})

fetch('https://api.yelp.com/v3/businesses/search?term=Restaurants&location=Oakland',
      {
        method: 'GET',
        headers: {'Authorization': `Bearer ${API_KEY}`}
      })
  .then((result) => {
    console.log('result::::', result)
  })
