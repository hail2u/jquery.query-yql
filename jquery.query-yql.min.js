/*
 * jQuery Plugin: Query YQL - version 0.3
 * http://github.com/hail2u/jquery.query-yql
 * Query YQL simply.
 *
 * Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net>
 * This library licensed under MIT license:
 * http://opensource.org/licenses/mit-license.php
 */
(function(a){a.queryYQL=function(d,c,f,g){if(a.isFunction(c)){g=c;c="json"}else{if(!c.match(/(json|xml)/)){g=f;f=c;c="json"}else{if(a.isFunction(f)){g=f;f=undefined}}}if(f==="all"){f="http://datatables.org/alltables.env"}var b="http://query.yahooapis.com/v1/public/yql?callback=?";var e={format:c,q:d};if(f){e.env=f}return a.get(b,e,g,"json")}})(jQuery);