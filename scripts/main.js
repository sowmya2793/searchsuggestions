//init TBD instead of code below
let url = 'https://spark.innosabi.com/api/v4/suggestion';
const username = 'api@innosabi.com';
        const password = '0thRuch0';
        /*let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');*/
fetch(url, {
        method:'GET',
        mode: 'cors',
        headers: {
                'Authorization' :  'Basic ' + btoa('username: password'),
                'Content-Type' : 'application/json'
        },
        //credentials: 'omit'
       })
.then(data=>  {
        console.log(data);
    })
.catch(error => {
  console.log('Error:', error);
}); 

