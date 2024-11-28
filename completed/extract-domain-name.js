function domainName(url) {
    let urlParts = []
    url.split("/").forEach(word => {
        if (word.includes(".")) {
            urlParts.push(word.split("."))
        }
       urlParts = urlParts.flat()
    })
    if (urlParts[0] === "www") {
        return urlParts[1]
    } else {
        return urlParts[0]
    }
}
console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))
console.log(domainName("http://google.co.jp"))