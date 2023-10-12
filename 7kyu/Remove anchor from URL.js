function removeUrlAnchor(url){
    return url.includes("#") ? url.split("#")[0]: url;

}