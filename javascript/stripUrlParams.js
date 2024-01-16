/*

====== Strip Url Params (6 kyu) ======
Complete the method so that it does the following:

    - Removes any duplicate query string parameters from the url 
      (the first occurence should be kept)
    - Removes any query string parameters specified within the 
      2nd argument (optional array)

1) Parameters 
    1st parameter - string representing the URL
    2nd (optional) parameter - array of query parameters to remove
2) Return - URL with duplicate query string parameters removed and
            optional params removed
3) Examples - see tests
4) Pseudocode - see comments

*/

function stripUrlParams(url, paramsToStrip=[]){
    // Return url if no query string parameters
    if (!url.includes('?')) return url;

    // Split url into domain and query string parameters
    const urlParts = url.split('?');
    // Split query string parameters into an array of separate 
    // parameters
    const params = urlParts[1].split('&');
    
    const keptParams = {};
    // Loop over parameters add property name and value to keptParams if a 
    // property with the name isn't already present and if isn't included in
    // paramsToStrip
    for ( let param of params ) {
        if(!keptParams[param[0]] && !paramsToStrip.includes(param[0])) 
            keptParams[param[0]] = param[2];
    }

    const newParams = [];
    // Loop over object and construct query string parameters from 
    // key-value pairs and push to newParams
    for (let param in keptParams) {
        newParams.push(`${param}=${keptParams[param]}`);
    }

    // Join individual parameters with '&' into one string
    const queryStr = newParams.join('&');

    // Concat and return new url if queryStr is not empty
    if ( queryStr.length !== 0 ) {
        return `${urlParts[0]}?${queryStr}`;
    }

    // Otherwise, return domain
    return urlParts[0];

}

let url1 = 'www.codewars.com?a=1&b=2';
let url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
let url3 = 'www.codewars.com?a=1';
let url4 = 'www.codewars.com';

console.log(stripUrlParams(url1)=== url1);
console.log(stripUrlParams(url2) === url1);
console.log(stripUrlParams(url2, ['b']) === url3);
console.log(stripUrlParams(url4, ['b'])=== url4);
console.log(stripUrlParams(url1, ['a', 'b']) === url4);