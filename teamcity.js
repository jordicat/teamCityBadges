var request = require('request');
var async = require('async');
var ansi = require('ansi-html-stream');
var mapStream = require('map-stream');
var config = require('./config.json');
var auth = {
  user: config.AUTH.split(':')[0],
  pass: config.AUTH.split(':')[1],
};

module.exports.getLastbuild = function (bt, callback) {
  async.parallel([
    function (done) {
      request.get({
        url: config.TEAMCITY + '/httpAuth/app/rest/buildTypes/id:' + bt + '/builds/running:true',
        auth: auth,
        headers: {
          'Accept': 'application/json'
        }
      }, function (err, resp, body) {
        if (err) return done(err);
        if (resp.statusCode === 404) return done();
        var build = JSON.parse(body);
        done(null, build);
      });
    },
    function (done) {
      request.get({
        url: config.TEAMCITY + '/httpAuth/app/rest/buildTypes/id:' + bt + '/builds/running:false',
        auth: auth,
        headers: {
          'Accept': 'application/json'
        }
      }, function (err, resp, body) {
        if (err) return done(err);
        if (resp.statusCode === 404) return done();
        var build = JSON.parse(body);
        done(null, build);
      });
    }
  ], function (err, results) {
    callback(err, results[0] || results[1]);
  });
};

module.exports.sendLog = function (buildNumber, res) {
  var stream = request.get({
    url: config.TEAMCITY + '/httpAuth/downloadBuildLog.html?buildId=' + buildNumber,
    auth: auth,
    headers: {
      'Accept': 'application/json'
    }
  }).pipe(mapStream(function (data, callback) {
    var chunk = data.toString()
                    .replace(/\[24m/ig, '').replace(/\[4m/ig, '') //remove underlines until it get fixed in ansi-stream
                    .replace(/\[(\d)*m/ig, '\x1B$&');
    callback(null, chunk);
  })).pipe(ansi({ chunked: false }));
  stream.pipe(res, { end: false });
  return stream;
};