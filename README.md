TITLE
=====

jQuery Plugin: Query YQL - version 0.1

DESCRIPTION
===========

Query YQL simply.

Usage
=====

    var statement = "select * from feed where url='http://example.com/rss'";
    $.queryYQL(statement, function (data) {
      // do something with "data".
    });

LICENSE
=======

Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net><br />
This library licensed under MIT license:<br />
http://opensource.org/licenses/mit-license.php<br />
