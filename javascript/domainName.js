// 5 kyu - Extract the domain name from a URL
function domainName( url ) {
    let data = indices( url ), domain;

    if ( ( url.includes("http://") || url.includes("https://") )
        && !url.includes("www")) {

        domain = url.slice(data[1][1] + 1, data[0][0]);
        return domain;

    } else if ( url.includes("www") ) {
        domain = url.slice( data[0][0] + 1, data[0][1]);
        return domain;
    } else {
        domain = url.slice(0, data[0][0]);
        return domain;
    }  

    function indices( url ) {
        let indicesDot = [], indicesSlash = [], dotSlash = [];
        
        for ( let i = 0; i < url.length; i++ ) {
            if( url[i] === "." ) {
                indicesDot.push(i);
            } else if ( url[i] === "/" ) {
                indicesSlash.push(i);
            }
        }
    
        dotSlash.push(indicesDot);
        dotSlash.push(indicesSlash);
    
        return dotSlash;
    }
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("http://www.s-0o2dtblyureq17tkmc.fr/warez/"));