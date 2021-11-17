//work around for Cors- does not allow Localhost or local file to fetch from https
/*var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
function doCORSRequest(options, printResult) {
        var x = new XMLHttpRequest();
        x.open(options.method, cors_api_url + options.url);
        x.onload = x.onerror = function () {
                printResult(
                        options.method + ' ' + options.url + '\n' +
                        x.status + ' ' + x.statusText + '\n\n' +
                        (x.responseText || '')
                );
        };
        if (/^POST/i.test(options.method)) {
                x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        x.send(options.data);
}

// Bind event
(function () {
        let url = 'https://spark.innosabi.com/api/v4/suggestion';
        const username = 'api@innosabi.com';
        const password = '0thRuch0';
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        headers.append('Content-Type', 'application/json');
        var outputresult = document.getElementsByClassName('search-result');
        doCORSRequest({
                method: 'GET',
                url: url,
                headers: headers,
                data: ''
        }, function printResult(result) {
                outputresult.value = result;
        });
})();
*/
//init TBD instead of code above
let url = 'https://spark.innosabi.com/api/v4/suggestion';

fetch(url, {
        method:'GET',
        mode: 'no-cors',
        credentials: 'omit'
       })
.then(data=>  {
        console.log(data);
    })
.catch(error => {
  console.log('Error:', error);
}); 
