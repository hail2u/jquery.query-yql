/*!
 * jQuery Plugin: Query YQL - version 0.3.1
 * http://github.com/hail2u/jquery.query-yql
 * Query YQL simply.
 *
 * LICENSE: http://hail2u.mit-license.org/2009
 */
(function ($) {
  $.queryYQL = function (statement, type, envUrl, callback) {
    if ($.isFunction(type)) {
      callback = type;
      type     = "json";
    } else if (!type.match(/(json|xml)/)) {
      callback = envUrl;
      envUrl   = type;
      type     = "json";
    } else if ($.isFunction(envUrl)) {
      callback = envUrl;
      envUrl   = undefined;
    }

    var scheme = ('https:' == document.location.protocol ? 'https' : 'http');

    if (envUrl === "all") {
      envUrl = scheme + "://datatables.org/alltables.env";
    }

    var url = scheme + "://query.yahooapis.com/v1/public/yql?callback=?";
    var data = {
      format: type,
      q:      statement
    };

    if (envUrl) {
      data.env = envUrl;
    }

    return $.get(url, data, callback, "json");
  };
})(jQuery);
