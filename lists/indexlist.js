function(head, req) {
  start({"headers": {"Content-Type": "text/html; charset=utf-8"}});

  return "<!DOCTYPE html><html><head><title>My New CouchApp</title></head><body>Contents from _lists/indexshow.js</body></html>";
}