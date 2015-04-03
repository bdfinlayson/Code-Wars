// You need to write a function that can manipulate URL parameters.
//
// It should be able to add a parameter to a existing URL, but also change a parameter if it already exists.
//
// Example:
//
// www.example.com should become www.example.com/?key=value when you add a parameter.
//
// www.example.com?key=value should become www.example.com/?key=value?key2=value2 when you add a parameter.
//
// www.example.com?key=oldValue should become www.example.com/?key=newValue when you change the parameter.
/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter(url, param) {
  // TODO: Make something awesome
  var paramType = param.substring(0, 2);

  if (url.search(/\?/) === -1) {
    return url + '?' + param;
  } else if (url.indexOf(paramType) > -1) {
    return url.replace(/\?.*/, '') + '?' + param;
  } else {
    return url + '&' + param;
  }
}
