TITLE
=====

jQuery Plugin: Query YQL - version 0.4


DESCRIPTION
===========

Query YQL simply.


Usage
=====

Query YQL:

    var statement = "select * from feed where url='http://example.com/rss'";
    $.queryYQL(statement, function (data) {
      // do something with "data".
    });

Query YQL (full):

    var statement = "select * from feed where url='http://example.com/rss'";
    $.queryYQL(statement, "json", undefined, function (data) {
      // do something with "data".
    });

Query YQL with JSONP-X:

    var statement = "select * from html where url='http://example.com/' and xpath='//h1'";
    $.queryYQL(statement, "xml", function (data) {
      // do something with "data".
    });

Query YQL with Open Data Table:

    var statement = "select * from twitter.user.timeline where id='hell2u'";
    $.queryYQL(statement, "all", function (data) {
      // do something with "data".
    });

Query YQL with Open Data Table (custom URL):

    var statement = "select * from twitter.user.timeline where id='hell2u'";
    $.queryYQL(statement, "http://example.com/tables.env", function (data) {
      // do something with "data".
    });


LICENSE
=======

MIT: http://hail2u.mit-license.org/2009
