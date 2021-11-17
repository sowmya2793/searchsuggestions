//init TBD instead of code below
let url = 'https://spark.innosabi.com/api/v4/suggestion';
const username = 'api@innosabi.com';
        const password = '0thRuch0';
//let headers = new Headers();
//headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
//headers.append('Content-Type', 'application/json');
//headers.append('Accept', 'application/json');
/*fetch(url, {
        method:'GET',
        mode: 'no-cors',
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
}); */
//Test code start
async function APIcallfinal(){
try {
        let response= await fetch(url,{
                method : 'get',
                headers:{
                        'Authorization': 'Basic ' + btoa(username + ":" + password),
                        'Content-Type': 'application/json'
                },
                mode : 'no-cors', 
                cache: 'default'     
        }
        );
        let data = await response.json();
        return data;
}
catch(err){
        return err;
}
}
async function main(){
        console.log('first');
        let result= await APIcallfinal();
        console.log(result);
        console.log('second')
}

main();
