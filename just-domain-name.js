/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet */


//takes in url
//if the url has https:// we replace with empty space
//if the url has http:// we replace with empty space
//then we replace www. with empty space
//we then split the url from the "."
//then we return the first element 
function parseDomainName(url) {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0]
}

console.log(parseDomainName("http://github.com/carbonfive/raygun"), "github");
console.log(parseDomainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(parseDomainName("https://www.cnet.com"), "cnet");