function dothis() {
    firebase.database().ref("/Images/Main Page/BackgroundScroll").on("value", function(a) {
        var b = a.val();
        document.getElementById("Services").style = b
    }), firebase.database().ref("/Images/Main Page/FirstImage").on("value", function(a) {
        var b = a.val();
        document.getElementById("FirstImage").style = b
    })
}

function update(a, b) {
    document.getElementById(a);
    firebase.database().ref("/Text Block/" + a).on("value", function(c) {
        var d = c.val();
        document.getElementById(a).innerHTML = d, console.log("FB " + a + " Updated-[" + b + "]"), document.body.style.display = "initial"
    })
}

function openOver() {
    document.getElementById("Button 1 Linko").style.width = "100%", document.getElementById("body1").style.overflow = "hidden"
}

function closeOver() {
    document.getElementById("Button 1 Linko").style.width = "0%", document.getElementById("body1").style.overflow = "visible"
}

function openOver2() {
    document.getElementById("Button 2 Linko").style.width = "100%"
}

function closeOver2() {
    document.getElementById("Button 2 Linko").style.width = "0%"
}

function openOver3() {
    document.getElementById("Button 3 Linko").style.width = "100%"
}

function closeOver3() {
    document.getElementById("Button 3 Linko").style.width = "0%"
}

function openOver4() {
    document.getElementById("Button 4 Linko").style.width = "100%"
}

function closeOver4() {
    document.getElementById("Button 4 Linko").style.width = "0%"
}

function openOver5() {
    document.getElementById("Button 5 Linko").style.width = "100%"
}

function closeOver5() {
    document.getElementById("Button 5 Linko").style.width = "0%"
}

function openOver6() {
    document.getElementById("Button 6 Linko").style.width = "100%"
}

function closeOver6() {
    document.getElementById("Button 6 Linko").style.width = "0%"
}
document.addEventListener("DOMContentLoaded", function() {
    dothis()
}, !1);

var UnID = [
	"About Main",
	"Main Quote",
	"Button 1",
	"Button 1 Link",
	"Button 2",
	"Button 2 Link",
	"Button 3",
	"Button 3 Link",
	"Button 4",
	"Button 4 Link",
	"Button 5",
	"Button 5 Link",
	"Button 6",
	"Button 6 Link"
	];


// code for pretty scrolling
window.onscroll = function(a) {
    window.innerHeight + window.scrollY >= document.body.scrollHeight && (console.log("Bottom of page"), document.getElementById("CoInfo").className += " expand")
}, $(".button").click(function() {
    $(this).parent().toggleClass("expand")
}), ! function() {
    function a() {
        var a = !1;
        a && j("keydown", e), s.keyboardSupport && !a && i("keydown", e)
    }

    function b() {
        if (document.body) {
            var b = document.body,
                c = document.documentElement,
                d = window.innerHeight,
                e = b.scrollHeight;
            if (x = document.compatMode.indexOf("CSS") >= 0 ? c : b, q = b, a(), w = !0, top != self) u = !0;
            else if (e > d && (b.offsetHeight <= d || c.offsetHeight <= d)) {
                var f = !1,
                    g = function() {
                        f || c.scrollHeight == document.height || (f = !0, setTimeout(function() {
                            c.style.height = document.height + "px", f = !1
                        }, 500))
                    };
                if (c.style.height = "auto", setTimeout(g, 10), x.offsetHeight <= d) {
                    var h = document.createElement("div");
                    h.style.clear = "both", b.appendChild(h)
                }
            }
            s.fixedBackground || t || (b.style.backgroundAttachment = "scroll", c.style.backgroundAttachment = "scroll")
        }
    }

    function c(a, b, c, d) {
        if (d || (d = 1e3), l(b, c), 1 != s.accelerationMax) {
            var e = +new Date,
                f = e - C;
            if (f < s.accelerationDelta) {
                var g = (1 + 30 / f) / 2;
                g > 1 && (g = Math.min(g, s.accelerationMax), b *= g, c *= g)
            }
            C = +new Date
        }
        if (A.push({
                x: b,
                y: c,
                lastX: 0 > b ? .99 : -.99,
                lastY: 0 > c ? .99 : -.99,
                start: +new Date
            }), !B) {
            var h = a === document.body,
                i = function() {
                    for (var e = +new Date, f = 0, g = 0, j = 0; j < A.length; j++) {
                        var k = A[j],
                            l = e - k.start,
                            m = l >= s.animationTime,
                            n = m ? 1 : l / s.animationTime;
                        s.pulseAlgorithm && (n = p(n));
                        var o = k.x * n - k.lastX >> 0,
                            q = k.y * n - k.lastY >> 0;
                        f += o, g += q, k.lastX += o, k.lastY += q, m && (A.splice(j, 1), j--)
                    }
                    h ? window.scrollBy(f, g) : (f && (a.scrollLeft += f), g && (a.scrollTop += g)), b || c || (A = []), A.length ? G(i, a, d / s.frameRate + 1) : B = !1
                };
            G(i, a, 0), B = !0
        }
    }

    function d(a) {
        w || b();
        var d = a.target,
            e = h(d);
        if (!e || a.defaultPrevented || k(q, "embed") || k(d, "embed") && /\.pdf/i.test(d.src)) return !0;
        var f = a.wheelDeltaX || 0,
            g = a.wheelDeltaY || 0;
        return f || g || (g = a.wheelDelta || 0), !(s.touchpadSupport || !m(g)) || (Math.abs(f) > 1.2 && (f *= s.stepSize / 120), Math.abs(g) > 1.2 && (g *= s.stepSize / 120), c(e, -f, -g), void a.preventDefault())
    }

    function e(a) {
        var b = a.target,
            d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== z.spacebar;
        if (/input|textarea|select|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || d) return !0;
        if (k(b, "button") && a.keyCode === z.spacebar) return !0;
        var e, f = 0,
            g = 0,
            i = h(q),
            j = i.clientHeight;
        switch (i == document.body && (j = window.innerHeight), a.keyCode) {
            case z.up:
                g = -s.arrowScroll;
                break;
            case z.down:
                g = s.arrowScroll;
                break;
            case z.spacebar:
                e = a.shiftKey ? 1 : -1, g = -e * j * .9;
                break;
            case z.pageup:
                g = .9 * -j;
                break;
            case z.pagedown:
                g = .9 * j;
                break;
            case z.home:
                g = -i.scrollTop;
                break;
            case z.end:
                var l = i.scrollHeight - i.scrollTop - j;
                g = l > 0 ? l + 10 : 0;
                break;
            case z.left:
                f = -s.arrowScroll;
                break;
            case z.right:
                f = s.arrowScroll;
                break;
            default:
                return !0
        }
        c(i, f, g), a.preventDefault()
    }

    function f(a) {
        q = a.target
    }

    function g(a, b) {
        for (var c = a.length; c--;) D[F(a[c])] = b;
        return b
    }

    function h(a) {
        var b = [],
            c = x.scrollHeight;
        do {
            var d = D[F(a)];
            if (d) return g(b, d);
            if (b.push(a), c === a.scrollHeight) {
                if (!u || x.clientHeight + 10 < c) return g(b, document.body)
            } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return g(b, a)
        } while (a = a.parentNode)
    }

    function i(a, b, c) {
        window.addEventListener(a, b, c || !1)
    }

    function j(a, b, c) {
        window.removeEventListener(a, b, c || !1)
    }

    function k(a, b) {
        return (a.nodeName || "").toLowerCase() === b.toLowerCase()
    }

    function l(a, b) {
        a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (v.x !== a || v.y !== b) && (v.x = a, v.y = b, A = [], C = 0)
    }

    function m(a) {
        if (a) {
            a = Math.abs(a), y.push(a), y.shift(), clearTimeout(E);
            var b = y[0] == y[1] && y[1] == y[2],
                c = n(y[0], 120) && n(y[1], 120) && n(y[2], 120);
            return !(b || c)
        }
    }

    function n(a, b) {
        return Math.floor(a / b) == a / b
    }

    function o(a) {
        var b, c, d;
        return a *= s.pulseScale, 1 > a ? b = a - (1 - Math.exp(-a)) : (c = Math.exp(-1), a -= 1, d = 1 - Math.exp(-a), b = c + d * (1 - c)), b * s.pulseNormalize
    }

    function p(a) {
        return a >= 1 ? 1 : 0 >= a ? 0 : (1 == s.pulseNormalize && (s.pulseNormalize /= o(1)), o(a))
    }
    var q, r = {
            frameRate: 150,
            animationTime: 800,
            stepSize: 120,
            pulseAlgorithm: !0,
            pulseScale: 8,
            pulseNormalize: 1,
            accelerationDelta: 20,
            accelerationMax: 1,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !0,
            fixedBackground: !0,
            excluded: ""
        },
        s = r,
        t = !1,
        u = !1,
        v = {
            x: 0,
            y: 0
        },
        w = !1,
        x = document.documentElement,
        y = [120, 120, 120],
        z = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        s = r,
        A = [],
        B = !1,
        C = +new Date,
        D = {};
    setInterval(function() {
        D = {}
    }, 1e4);
    var E, F = function() {
            var a = 0;
            return function(b) {
                return b.uniqueID || (b.uniqueID = a++)
            }
        }(),
        G = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(a, b, c) {
                window.setTimeout(a, c || 1e3 / 60)
            }
        }(),
        H = /chrome/i.test(window.navigator.userAgent),
        I = "onmousewheel" in document;
    I && H && (i("mousedown", f), i("mousewheel", d), i("load", b))
}(), ! function(a) {
    var b = a(window),
        c = b.height();
    b.resize(function() {
        c = b.height()
    }), a.fn.parallax = function(d, e, f) {
        function g() {
            var f = b.scrollTop();
            j.each(function() {
                var b = a(this),
                    g = b.offset().top,
                    k = h(b);
                f > g + k || g > f + c || j.css("backgroundPosition", d + " " + Math.round((i - f) * e) + "px")
            })
        }
        var h, i, j = a(this);
        j.each(function() {
            i = j.offset().top
        }), h = f ? function(a) {
            return a.outerHeight(!0)
        } : function(a) {
            return a.height()
        }, (arguments.length < 1 || null === d) && (d = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === f) && (f = !0), b.bind("scroll", g).resize(g), g()
    }
}(jQuery), $(function() {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $("#Services").parallax("50%", .4), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(".parallax-section").css({
        "background-attachment": "scroll"
    })
}), $(window).bind("resize", function() {
    "none" == $(".menu-icon").css("display") ? $("#navigation").show() : $("#navigation").hide()
}), $(".menu-icon").on("click", function(a) {
    a.preventDefault(), "block" != $("#navigation").css("display") ? $("#navigation").slideDown() : $("#navigation").slideUp()
}), $("#mainnav li a").on("click", function(a) {
    var b = $(this).attr("href"),
        c = $(b).offset().top;
    $("html, body").animate({
        scrollTop: c
    }, 1e3), "block" == $(".menu-icon").css("display") && $("#navigation").slideUp(), a.preventDefault()
});