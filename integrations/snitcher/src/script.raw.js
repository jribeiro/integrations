const snid = '<TO_REPLACE>';

!(function (s, n, i, t, c, h) {
    s.SnitchObject = i;
    s[i] ||
        (s[i] = function () {
            (s[i].q = s[i].q || []).push(arguments);
        });
    s[i].l = +new Date();
    c = n.createElement(t);
    h = n.getElementsByTagName(t)[0];
    c.src = '//snid.snitcher.com/' + snid + '.js';
    h.parentNode.insertBefore(c, h);
})(window, document, 'snid', 'script');

snid('verify', snid);
