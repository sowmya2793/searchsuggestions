var myHeaders = new Headers();
myHeaders.append("Cookie", "ignite=164447b26cbeb68c505df29ec4b6a4ce");

var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors'
};

fetch("https://spark.innosabi.com/api/v4/suggestion\n?=innovation\n", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
