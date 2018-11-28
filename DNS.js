var dns = require('dns');
console.log(dns.getServers());
var w3 = dns.lookup('hermangouw.net', function (err, addresses, family) {
  console.log(addresses);
});