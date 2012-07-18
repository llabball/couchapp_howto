function(doc, req) {  
  var resp = {};

	resp.headers = {"Content-Type" : "text/html"};

  resp.body = "<!DOCTYPE html><html><head><title>My New CouchApp</title></head><body>Contents from _shows/indexshow.js</body></html>";

	return resp;

}