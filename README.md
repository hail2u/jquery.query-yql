TITLE
=====

jQuery Plugin: Query YQL - version 0.2

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

Query YQL with JSONP-X:

    var statement = "select * from html where url='http://example.com/' and xpath='//h1'";
    $.queryYQL(statement, "xml", function (data) {
      // do something with "data".
    });

LICENSE
=======

Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net><br />
This library licensed under MIT license:<br />
http://opensource.org/licenses/mit-license.php<br />
