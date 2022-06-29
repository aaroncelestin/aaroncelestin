var Ws = Object.defineProperty,
    Zs = Object.defineProperties;
var Ks = Object.getOwnPropertyDescriptors;
var Yl = Object.getOwnPropertySymbols;
var Xs = Object.prototype.hasOwnProperty,
    Js = Object.prototype.propertyIsEnumerable;
var Wl = (i, e, r) => e in i ? Ws(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : i[e] = r,
    Oe = (i, e) => {
        for (var r in e || (e = {})) Xs.call(e, r) && Wl(i, r, e[r]);
        if (Yl)
            for (var r of Yl(e)) Js.call(e, r) && Wl(i, r, e[r]);
        return i
    },
    ft = (i, e) => Zs(i, Ks(e));
import {
    S as ue,
    i as fe,
    s as de,
    l as J,
    g as S,
    r as N,
    p as F,
    d,
    w as He,
    O as Ee,
    x as le,
    y as se,
    z as ie,
    C as ne,
    e as E,
    c as C,
    a as w,
    b as u,
    J as g,
    k as P,
    m as M,
    n as U,
    o as ke,
    a2 as ml,
    a3 as gl,
    q as we,
    H as Q,
    M as De,
    K as pe,
    t as W,
    h as Z,
    I as Pe,
    Y as Pt,
    a4 as lr,
    a5 as Qs,
    L as Ct,
    P as $t,
    f as Se,
    T as vl,
    a6 as Jt,
    N as nt,
    j as je,
    F as he,
    G as _e,
    U as xs,
    V as ea,
    W as ta,
    X as ra,
    Q as zn,
    v as la,
    a7 as jt,
    a8 as Zl,
    a9 as Pr,
    aa as ia,
    ab as bl,
    $ as Kl,
    R as na,
    a0 as sa
} from "./index-205b2a59.js";
import {
    c as Yr,
    g as aa,
    $ as bt,
    e as oa,
    f as Rr,
    h as Bn,
    A as yl,
    R as Ie,
    i as Ae,
    a as ir,
    j as Ln,
    M as ca,
    k as ua,
    S as rl,
    l as Nn,
    F as fa,
    m as da,
    d as kl,
    r as ha,
    n as _a,
    p as pa,
    q as ma
} from "./HeroParticlesVideo.svelte_svelte_type_style_lang-812e9428.js";
import {
    _ as Fn
} from "./preload-helper-60cab3ee.js";

function Xl(i, e, r) {
    const t = i.slice();
    return t[27] = e[r], t[29] = r, t
}

function Jl(i, e, r) {
    const t = i.slice();
    return t[27] = e[r], t[29] = r, t
}

function ga(i) {
    let e, r;
    return e = new qs({
        props: {
            props: Oe({}, i[0])
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, l) {
            const n = {};
            l & 1 && (n.props = Oe({}, t[0])), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function va(i) {
    let e, r, t, l, n, s, a;
    const o = [ya, ba],
        c = [];

    function f(h, v) {
        return h[8] ? 0 : 1
    }
    r = f(i), t = c[r] = o[r](i);
    let p = i[9] && Sa();
    return {
        c() {
            e = E("section"), t.c(), l = P(), p && p.c(), this.h()
        },
        l(h) {
            e = C(h, "SECTION", {
                class: !0,
                style: !0,
                "data-bg": !0
            });
            var v = w(e);
            t.l(v), l = M(v), p && p.l(v), v.forEach(d), this.h()
        },
        h() {
            u(e, "class", n = (i[9] ? "z-20 overflow-visible" : "z-10") + " " + (i[17] ? "" : "overflow-hidden") + " lazyload " + (i[8] ? "" : "py-10 md:py-20") + " relative " + (i[2] && !i[8] && i[7] === "full-bottom" ? "bg-full-bottom" : i[7] === "full-only-top" ? "bg-full-only-top" : "") + " " + i[18] + " svelte-am2ffe"), u(e, "style", (i[11] != null && !i[8] ? `--padding-top: ${i[11]}px; --mobile-padding-top: ${i[13]||i[11]/2}px;` : i[8] ? "" : "--padding-top: 80px; --mobile-padding-top: 40px;") + " " + (i[12] != null && !i[8] ? `--padding-bottom: ${i[12]}px; --mobile-padding-bottom: ${i[14]||i[12]/2}px;` : i[8] ? "" : "--padding-bottom: 80px; --mobile-padding-bottom: 40px;") + " " + (i[10] ? `height: ${i[10]}px;` : "") + " background: center / cover no-repeat " + (i[6] || "#fff")), u(e, "data-bg", s = i[2] && !i[8] ? i[2] : "")
        },
        m(h, v) {
            S(h, e, v), c[r].m(e, null), g(e, l), p && p.m(e, null), i[20](e), a = !0
        },
        p(h, v) {
            t.p(h, v), (!a || v & 4 && n !== (n = (h[9] ? "z-20 overflow-visible" : "z-10") + " " + (h[17] ? "" : "overflow-hidden") + " lazyload " + (h[8] ? "" : "py-10 md:py-20") + " relative " + (h[2] && !h[8] && h[7] === "full-bottom" ? "bg-full-bottom" : h[7] === "full-only-top" ? "bg-full-only-top" : "") + " " + h[18] + " svelte-am2ffe")) && u(e, "class", n), (!a || v & 4 && s !== (s = h[2] && !h[8] ? h[2] : "")) && u(e, "data-bg", s)
        },
        i(h) {
            a || (N(t), a = !0)
        },
        o(h) {
            F(t), a = !1
        },
        d(h) {
            h && d(e), c[r].d(), p && p.d(), i[20](null)
        }
    }
}

function ba(i) {
    let e, r, t, l, n, s, a = i[16] === "from center" && ka(),
        o = i[17] && wa(),
        c = i[4] && Ea(i),
        f = i[5] && i[5].length > 0 && Ca(i);
    return {
        c() {
            a && a.c(), e = P(), r = E("div"), o && o.c(), t = P(), l = E("div"), c && c.c(), n = P(), f && f.c(), this.h()
        },
        l(p) {
            a && a.l(p), e = M(p), r = C(p, "DIV", {
                class: !0
            });
            var h = w(r);
            o && o.l(h), t = M(h), l = C(h, "DIV", {
                class: !0
            });
            var v = w(l);
            c && c.l(v), n = M(v), f && f.l(v), v.forEach(d), h.forEach(d), this.h()
        },
        h() {
            u(l, "class", "mx-auto " + (i[15] || "") + " " + (i[17] ? "w-full mr-0 lg:col-9" : "") + " svelte-am2ffe"), u(r, "class", (i[15] !== "w-full" ? "container" : "w-full") + " " + (i[17] ? "relative" : ""))
        },
        m(p, h) {
            a && a.m(p, h), S(p, e, h), S(p, r, h), o && o.m(r, null), g(r, t), g(r, l), c && c.m(l, null), g(l, n), f && f.m(l, null), s = !0
        },
        p(p, h) {
            p[4] && c.p(p, h), p[5] && p[5].length > 0 && f.p(p, h)
        },
        i(p) {
            s || (N(a), N(c), N(f), s = !0)
        },
        o(p) {
            F(a), F(c), F(f), s = !1
        },
        d(p) {
            a && a.d(p), p && d(e), p && d(r), o && o.d(), c && c.d(), f && f.d()
        }
    }
}

function ya(i) {
    let e, r, t, l, n, s, a, o = i[4] && Ia(i),
        c = i[5] && i[5].length > 0 && Da(i);
    return {
        c() {
            e = E("div"), r = E("img"), t = P(), l = E("div"), n = E("div"), o && o.c(), s = P(), c && c.c(), this.h()
        },
        l(f) {
            e = C(f, "DIV", {
                class: !0,
                style: !0
            });
            var p = w(e);
            r = C(p, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), t = M(p), l = C(p, "DIV", {
                class: !0
            });
            var h = w(l);
            n = C(h, "DIV", {
                class: !0
            });
            var v = w(n);
            o && o.l(v), s = M(v), c && c.l(v), v.forEach(d), h.forEach(d), p.forEach(d), this.h()
        },
        h() {
            u(r, "class", "parallax lazyload svelte-am2ffe"), u(r, "data-src", i[2]), u(r, "alt", ""), u(n, "class", "mx-auto " + i[15] + " svelte-am2ffe"), u(l, "class", i[15] !== "w-full" ? "container" : "w-full"), u(e, "class", "parallax-wrapper svelte-am2ffe"), u(e, "style", (i[11] != null ? `padding-top: ${i[11]}px;` : "") + " " + (i[12] != null ? `padding-bottom: ${i[12]}px;` : ""))
        },
        m(f, p) {
            S(f, e, p), g(e, r), g(e, t), g(e, l), g(l, n), o && o.m(n, null), g(n, s), c && c.m(n, null), a = !0
        },
        p(f, p) {
            (!a || p & 4) && u(r, "data-src", f[2]), f[4] && o.p(f, p), f[5] && f[5].length > 0 && c.p(f, p)
        },
        i(f) {
            a || (N(o), N(c), a = !0)
        },
        o(f) {
            F(o), F(c), a = !1
        },
        d(f) {
            f && d(e), o && o.d(), c && c.d()
        }
    }
}

function ka(i) {
    let e, r, t;
    return r = new t_({}), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "absolute overflow-hidden w-full h-full")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function wa(i) {
    let e;
    return {
        c() {
            e = E("div"), this.h()
        },
        l(r) {
            e = C(r, "DIV", {
                id: !0,
                class: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "id", "section-nav"), u(e, "class", "hidden md:block sticky lg:col-3 float-left svelte-am2ffe")
        },
        m(r, t) {
            S(r, e, t)
        },
        d(r) {
            r && d(e)
        }
    }
}

function Ea(i) {
    let e, r;
    return e = new Nl({
        props: {
            props: i[4].fields
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Ca(i) {
    let e = [],
        r = new Map,
        t, l, n = i[5];
    const s = a => `noparallax-${a[29]}-${a[27].sys.id}`;
    for (let a = 0; a < n.length; a += 1) {
        let o = Xl(i, n, a),
            c = s(o);
        r.set(c, e[a] = Ql(c, o))
    }
    return {
        c() {
            for (let a = 0; a < e.length; a += 1) e[a].c();
            t = J()
        },
        l(a) {
            for (let o = 0; o < e.length; o += 1) e[o].l(a);
            t = J()
        },
        m(a, o) {
            for (let c = 0; c < e.length; c += 1) e[c].m(a, o);
            S(a, t, o), l = !0
        },
        p(a, o) {
            o & 32 && (n = a[5], ke(), e = ml(e, o, s, 1, a, n, r, t.parentNode, gl, Ql, t, Xl), we())
        },
        i(a) {
            if (!l) {
                for (let o = 0; o < n.length; o += 1) N(e[o]);
                l = !0
            }
        },
        o(a) {
            for (let o = 0; o < e.length; o += 1) F(e[o]);
            l = !1
        },
        d(a) {
            for (let o = 0; o < e.length; o += 1) e[o].d(a);
            a && d(t)
        }
    }
}

function $a(i) {
    let e, r;
    return e = new Ll({
        props: {
            props: i[27].fields
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Ql(i, e) {
    let r, t, l, n = e[27].fields && $a(e);
    return {
        key: i,
        first: null,
        c() {
            r = J(), n && n.c(), t = J(), this.h()
        },
        l(s) {
            r = J(), n && n.l(s), t = J(), this.h()
        },
        h() {
            this.first = r
        },
        m(s, a) {
            S(s, r, a), n && n.m(s, a), S(s, t, a), l = !0
        },
        p(s, a) {
            e = s, e[27].fields && n.p(e, a)
        },
        i(s) {
            l || (N(n), l = !0)
        },
        o(s) {
            F(n), l = !1
        },
        d(s) {
            s && d(r), n && n.d(s), s && d(t)
        }
    }
}

function Ia(i) {
    let e, r;
    return e = new Nl({
        props: {
            props: i[4].fields
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Da(i) {
    let e = [],
        r = new Map,
        t, l, n = i[5];
    const s = a => `parallax-${a[29]}-${a[27].sys.id}`;
    for (let a = 0; a < n.length; a += 1) {
        let o = Jl(i, n, a),
            c = s(o);
        r.set(c, e[a] = xl(c, o))
    }
    return {
        c() {
            for (let a = 0; a < e.length; a += 1) e[a].c();
            t = J()
        },
        l(a) {
            for (let o = 0; o < e.length; o += 1) e[o].l(a);
            t = J()
        },
        m(a, o) {
            for (let c = 0; c < e.length; c += 1) e[c].m(a, o);
            S(a, t, o), l = !0
        },
        p(a, o) {
            o & 32 && (n = a[5], ke(), e = ml(e, o, s, 1, a, n, r, t.parentNode, gl, xl, t, Jl), we())
        },
        i(a) {
            if (!l) {
                for (let o = 0; o < n.length; o += 1) N(e[o]);
                l = !0
            }
        },
        o(a) {
            for (let o = 0; o < e.length; o += 1) F(e[o]);
            l = !1
        },
        d(a) {
            for (let o = 0; o < e.length; o += 1) e[o].d(a);
            a && d(t)
        }
    }
}

function Ta(i) {
    let e, r;
    return e = new Ll({
        props: {
            props: i[27].fields
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function xl(i, e) {
    let r, t, l, n = e[27].fields && Ta(e);
    return {
        key: i,
        first: null,
        c() {
            r = J(), n && n.c(), t = J(), this.h()
        },
        l(s) {
            r = J(), n && n.l(s), t = J(), this.h()
        },
        h() {
            this.first = r
        },
        m(s, a) {
            S(s, r, a), n && n.m(s, a), S(s, t, a), l = !0
        },
        p(s, a) {
            e = s, e[27].fields && n.p(e, a)
        },
        i(s) {
            l || (N(n), l = !0)
        },
        o(s) {
            F(n), l = !1
        },
        d(s) {
            s && d(r), n && n.d(s), s && d(t)
        }
    }
}

function Sa(i) {
    let e, r;
    return {
        c() {
            e = E("div"), r = E("div"), this.h()
        },
        l(t) {
            e = C(t, "DIV", {
                class: !0
            });
            var l = w(e);
            r = C(l, "DIV", {
                class: !0
            }), w(r).forEach(d), l.forEach(d), this.h()
        },
        h() {
            u(r, "class", "blue-circle size-xl svelte-am2ffe"), u(e, "class", "circle-wrapper container svelte-am2ffe")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        d(t) {
            t && d(e)
        }
    }
}

function Va(i) {
    let e, r, t, l;
    const n = [va, ga],
        s = [];

    function a(o, c) {
        return o[3] == "content" ? 0 : o[3] == "page header" ? 1 : -1
    }
    return ~(e = a(i)) && (r = s[e] = n[e](i)), {
        c() {
            r && r.c(), t = J()
        },
        l(o) {
            r && r.l(o), t = J()
        },
        m(o, c) {
            ~e && s[e].m(o, c), S(o, t, c), l = !0
        },
        p(o, [c]) {
            r && r.p(o, c)
        },
        i(o) {
            l || (N(r), l = !0)
        },
        o(o) {
            F(r), l = !1
        },
        d(o) {
            ~e && s[e].d(o), o && d(t)
        }
    }
}

function Pa(i, e, r) {
    let t, {
        props: l
    } = e;
    const {
        type: n,
        title: s,
        rows: a,
        bgColor: o,
        bgImage: c,
        bgImageSizePosition: f,
        mobileBgImage: p,
        bgAnimation: h,
        parallax: v,
        circleDecorator: _,
        fixedHeight: m,
        paddingTop: b,
        paddingBottom: y,
        mobilePaddingTop: k,
        mobilePaddingBottom: $,
        innerContainerWidth: I,
        explosiveParticles: D,
        lateralMenu: T,
        customClasses: z
    } = l, A = c && c.fields && c.fields.file ? c.fields.file.url : null, B = p && p.fields && p.fields.file ? p.fields.file.url : null;
    h && h.fields && h.fields.file && h.fields.file.url;
    let V, L;
    He(() => {
        if (r(19, V = window.innerWidth <= 640), T) {
            let R, j = [];
            const G = L.querySelectorAll("h2"),
                X = L.querySelector("#section-nav");
            G.forEach((x, re) => {
                x.setAttribute("id", Yr(x.innerText)), j = [...j, x.getBoundingClientRect().y + window.scrollY];
                const te = document.createElement("a");
                te.classList = `row-link block mb-2 text-grey-6pm font-semibold ${re===0?"active":""}`, te.setAttribute("id", `row-link-${Yr(x.innerText)}`), te.setAttribute("href", `${window.location.origin+window.location.pathname}#${Yr(x.innerText)}`), te.innerText = x.innerText, te.addEventListener("click", function (H) {
                    H.preventDefault();
                    let K = this.id.replace("row-link-", ""),
                        ye = document.getElementById(K).getBoundingClientRect().y + window.scrollY - ee + 10;
                    window.scrollTo({
                        top: ye,
                        behavior: "smooth"
                    })
                }), X.appendChild(te)
            });
            const Y = document.querySelectorAll(".row-link"),
                ee = 74,
                q = () => {
                    R && window.clearTimeout(R), R = window.setTimeout(() => {
                        let x = window.scrollY;
                        if (x + ee < j[0]) Y.forEach(re => re.classList.remove("active")), Y[0].classList.add("active");
                        else {
                            Y.forEach(re => re.classList.remove("active"));
                            for (let re = j.length - 1; re >= 0; re--)
                                if (x + ee >= j[re]) {
                                    Y[re].classList.add("active");
                                    return
                                }
                        }
                    }, 25)
                };
            window.addEventListener("scroll", q, {
                capture: !0,
                passive: !0
            })
        }
    });

    function O(R) {
        Ee[R ? "unshift" : "push"](() => {
            L = R, r(1, L)
        })
    }
    return i.$$set = R => {
        "props" in R && r(0, l = R.props)
    }, i.$$.update = () => {
        i.$$.dirty & 524288 && r(2, t = V && B ? B : A)
    }, [l, L, t, n, s, a, o, f, v, _, m, b, y, k, $, I, D, T, z, V, O]
}
class y_ extends ue {
    constructor(e) {
        super(), fe(this, e, Pa, Va, de, {
            props: 0
        })
    }
}

function Rn(i, e, r, t) {
    const l = aa();
    return i.params.createElements && Object.keys(t).forEach(n => {
        if (!r[n] && r.auto === !0) {
            let s = i.$el.children(`.${t[n]}`)[0];
            s || (s = l.createElement("div"), s.className = t[n], i.$el.append(s)), r[n] = s, e[n] = s
        }
    }), r
}

function Ma(i) {
    let {
        swiper: e,
        extendParams: r,
        on: t,
        emit: l
    } = i;
    r({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
        }
    }), e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };

    function n(h) {
        let v;
        return h && (v = bt(h), e.params.uniqueNavElements && typeof h == "string" && v.length > 1 && e.$el.find(h).length === 1 && (v = e.$el.find(h))), v
    }

    function s(h, v) {
        const _ = e.params.navigation;
        h && h.length > 0 && (h[v ? "addClass" : "removeClass"](_.disabledClass), h[0] && h[0].tagName === "BUTTON" && (h[0].disabled = v), e.params.watchOverflow && e.enabled && h[e.isLocked ? "addClass" : "removeClass"](_.lockClass))
    }

    function a() {
        if (e.params.loop) return;
        const {
            $nextEl: h,
            $prevEl: v
        } = e.navigation;
        s(v, e.isBeginning && !e.params.rewind), s(h, e.isEnd && !e.params.rewind)
    }

    function o(h) {
        h.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && e.slidePrev()
    }

    function c(h) {
        h.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && e.slideNext()
    }

    function f() {
        const h = e.params.navigation;
        if (e.params.navigation = Rn(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !(h.nextEl || h.prevEl)) return;
        const v = n(h.nextEl),
            _ = n(h.prevEl);
        v && v.length > 0 && v.on("click", c), _ && _.length > 0 && _.on("click", o), Object.assign(e.navigation, {
            $nextEl: v,
            nextEl: v && v[0],
            $prevEl: _,
            prevEl: _ && _[0]
        }), e.enabled || (v && v.addClass(h.lockClass), _ && _.addClass(h.lockClass))
    }

    function p() {
        const {
            $nextEl: h,
            $prevEl: v
        } = e.navigation;
        h && h.length && (h.off("click", c), h.removeClass(e.params.navigation.disabledClass)), v && v.length && (v.off("click", o), v.removeClass(e.params.navigation.disabledClass))
    }
    t("init", () => {
        f(), a()
    }), t("toEdge fromEdge lock unlock", () => {
        a()
    }), t("destroy", () => {
        p()
    }), t("enable disable", () => {
        const {
            $nextEl: h,
            $prevEl: v
        } = e.navigation;
        h && h[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), v && v[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
    }), t("click", (h, v) => {
        const {
            $nextEl: _,
            $prevEl: m
        } = e.navigation, b = v.target;
        if (e.params.navigation.hideOnClick && !bt(b).is(m) && !bt(b).is(_)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === b || e.pagination.el.contains(b))) return;
            let y;
            _ ? y = _.hasClass(e.params.navigation.hiddenClass) : m && (y = m.hasClass(e.params.navigation.hiddenClass)), l(y === !0 ? "navigationShow" : "navigationHide"), _ && _.toggleClass(e.params.navigation.hiddenClass), m && m.toggleClass(e.params.navigation.hiddenClass)
        }
    }), Object.assign(e.navigation, {
        update: a,
        init: f,
        destroy: p
    })
}

function qt(i) {
    return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
}

function Aa(i) {
    let {
        swiper: e,
        extendParams: r,
        on: t,
        emit: l
    } = i;
    const n = "swiper-pagination";
    r({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: _ => _,
            formatFractionTotal: _ => _,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`
        }
    }), e.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let s, a = 0;

    function o() {
        return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0
    }

    function c(_, m) {
        const {
            bulletActiveClass: b
        } = e.params.pagination;
        _[m]().addClass(`${b}-${m}`)[m]().addClass(`${b}-${m}-${m}`)
    }

    function f() {
        const _ = e.rtl,
            m = e.params.pagination;
        if (o()) return;
        const b = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            y = e.pagination.$el;
        let k;
        const $ = e.params.loop ? Math.ceil((b - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (k = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), k > b - 1 - e.loopedSlides * 2 && (k -= b - e.loopedSlides * 2), k > $ - 1 && (k -= $), k < 0 && e.params.paginationType !== "bullets" && (k = $ + k)) : typeof e.snapIndex != "undefined" ? k = e.snapIndex : k = e.activeIndex || 0, m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const I = e.pagination.bullets;
            let D, T, z;
            if (m.dynamicBullets && (s = I.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), y.css(e.isHorizontal() ? "width" : "height", `${s*(m.dynamicMainBullets+4)}px`), m.dynamicMainBullets > 1 && e.previousIndex !== void 0 && (a += k - (e.previousIndex - e.loopedSlides || 0), a > m.dynamicMainBullets - 1 ? a = m.dynamicMainBullets - 1 : a < 0 && (a = 0)), D = Math.max(k - a, 0), T = D + (Math.min(I.length, m.dynamicMainBullets) - 1), z = (T + D) / 2), I.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(A => `${m.bulletActiveClass}${A}`).join(" ")), y.length > 1) I.each(A => {
                const B = bt(A),
                    V = B.index();
                V === k && B.addClass(m.bulletActiveClass), m.dynamicBullets && (V >= D && V <= T && B.addClass(`${m.bulletActiveClass}-main`), V === D && c(B, "prev"), V === T && c(B, "next"))
            });
            else {
                const A = I.eq(k),
                    B = A.index();
                if (A.addClass(m.bulletActiveClass), m.dynamicBullets) {
                    const V = I.eq(D),
                        L = I.eq(T);
                    for (let O = D; O <= T; O += 1) I.eq(O).addClass(`${m.bulletActiveClass}-main`);
                    if (e.params.loop)
                        if (B >= I.length) {
                            for (let O = m.dynamicMainBullets; O >= 0; O -= 1) I.eq(I.length - O).addClass(`${m.bulletActiveClass}-main`);
                            I.eq(I.length - m.dynamicMainBullets - 1).addClass(`${m.bulletActiveClass}-prev`)
                        } else c(V, "prev"), c(L, "next");
                    else c(V, "prev"), c(L, "next")
                }
            }
            if (m.dynamicBullets) {
                const A = Math.min(I.length, m.dynamicMainBullets + 4),
                    B = (s * A - s) / 2 - z * s,
                    V = _ ? "right" : "left";
                I.css(e.isHorizontal() ? V : "top", `${B}px`)
            }
        }
        if (m.type === "fraction" && (y.find(qt(m.currentClass)).text(m.formatFractionCurrent(k + 1)), y.find(qt(m.totalClass)).text(m.formatFractionTotal($))), m.type === "progressbar") {
            let I;
            m.progressbarOpposite ? I = e.isHorizontal() ? "vertical" : "horizontal" : I = e.isHorizontal() ? "horizontal" : "vertical";
            const D = (k + 1) / $;
            let T = 1,
                z = 1;
            I === "horizontal" ? T = D : z = D, y.find(qt(m.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${T}) scaleY(${z})`).transition(e.params.speed)
        }
        m.type === "custom" && m.renderCustom ? (y.html(m.renderCustom(e, k + 1, $)), l("paginationRender", y[0])) : l("paginationUpdate", y[0]), e.params.watchOverflow && e.enabled && y[e.isLocked ? "addClass" : "removeClass"](m.lockClass)
    }

    function p() {
        const _ = e.params.pagination;
        if (o()) return;
        const m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            b = e.pagination.$el;
        let y = "";
        if (_.type === "bullets") {
            let k = e.params.loop ? Math.ceil((m - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && k > m && (k = m);
            for (let $ = 0; $ < k; $ += 1) _.renderBullet ? y += _.renderBullet.call(e, $, _.bulletClass) : y += `<${_.bulletElement} class="${_.bulletClass}"></${_.bulletElement}>`;
            b.html(y), e.pagination.bullets = b.find(qt(_.bulletClass))
        }
        _.type === "fraction" && (_.renderFraction ? y = _.renderFraction.call(e, _.currentClass, _.totalClass) : y = `<span class="${_.currentClass}"></span> / <span class="${_.totalClass}"></span>`, b.html(y)), _.type === "progressbar" && (_.renderProgressbar ? y = _.renderProgressbar.call(e, _.progressbarFillClass) : y = `<span class="${_.progressbarFillClass}"></span>`, b.html(y)), _.type !== "custom" && l("paginationRender", e.pagination.$el[0])
    }

    function h() {
        e.params.pagination = Rn(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const _ = e.params.pagination;
        if (!_.el) return;
        let m = bt(_.el);
        m.length !== 0 && (e.params.uniqueNavElements && typeof _.el == "string" && m.length > 1 && (m = e.$el.find(_.el), m.length > 1 && (m = m.filter(b => bt(b).parents(".swiper")[0] === e.el))), _.type === "bullets" && _.clickable && m.addClass(_.clickableClass), m.addClass(_.modifierClass + _.type), m.addClass(e.isHorizontal() ? _.horizontalClass : _.verticalClass), _.type === "bullets" && _.dynamicBullets && (m.addClass(`${_.modifierClass}${_.type}-dynamic`), a = 0, _.dynamicMainBullets < 1 && (_.dynamicMainBullets = 1)), _.type === "progressbar" && _.progressbarOpposite && m.addClass(_.progressbarOppositeClass), _.clickable && m.on("click", qt(_.bulletClass), function (y) {
            y.preventDefault();
            let k = bt(this).index() * e.params.slidesPerGroup;
            e.params.loop && (k += e.loopedSlides), e.slideTo(k)
        }), Object.assign(e.pagination, {
            $el: m,
            el: m[0]
        }), e.enabled || m.addClass(_.lockClass))
    }

    function v() {
        const _ = e.params.pagination;
        if (o()) return;
        const m = e.pagination.$el;
        m.removeClass(_.hiddenClass), m.removeClass(_.modifierClass + _.type), m.removeClass(e.isHorizontal() ? _.horizontalClass : _.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(_.bulletActiveClass), _.clickable && m.off("click", qt(_.bulletClass))
    }
    t("init", () => {
        h(), p(), f()
    }), t("activeIndexChange", () => {
        (e.params.loop || typeof e.snapIndex == "undefined") && f()
    }), t("snapIndexChange", () => {
        e.params.loop || f()
    }), t("slidesLengthChange", () => {
        e.params.loop && (p(), f())
    }), t("snapGridLengthChange", () => {
        e.params.loop || (p(), f())
    }), t("destroy", () => {
        v()
    }), t("enable disable", () => {
        const {
            $el: _
        } = e.pagination;
        _ && _[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
    }), t("lock unlock", () => {
        f()
    }), t("click", (_, m) => {
        const b = m.target,
            {
                $el: y
            } = e.pagination;
        if (e.params.pagination.el && e.params.pagination.hideOnClick && y.length > 0 && !bt(b).hasClass(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && b === e.navigation.nextEl || e.navigation.prevEl && b === e.navigation.prevEl)) return;
            const k = y.hasClass(e.params.pagination.hiddenClass);
            l(k === !0 ? "paginationShow" : "paginationHide"), y.toggleClass(e.params.pagination.hiddenClass)
        }
    }), Object.assign(e.pagination, {
        render: p,
        update: f,
        init: h,
        destroy: v
    })
}

function ht(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i
}

function jn(i, e) {
    i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.__proto__ = e
}
var Qe = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Qt = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    wl, tt = 1e8,
    $e = 1 / tt,
    ll = Math.PI * 2,
    Oa = ll / 4,
    za = 0,
    Un = Math.sqrt,
    Ba = Math.cos,
    La = Math.sin,
    Le = function (e) {
        return typeof e == "string"
    },
    Be = function (e) {
        return typeof e == "function"
    },
    mt = function (e) {
        return typeof e == "number"
    },
    El = function (e) {
        return typeof e == "undefined"
    },
    gt = function (e) {
        return typeof e == "object"
    },
    Ye = function (e) {
        return e !== !1
    },
    Hn = function () {
        return typeof window != "undefined"
    },
    Dr = function (e) {
        return Be(e) || Le(e)
    },
    qn = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {},
    Ue = Array.isArray,
    il = /(?:-?\.?\d|\.)+/gi,
    Gn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Yt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Wr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Yn = /[+-]=-?[.\d]+/,
    Wn = /[^,'"\[\]\s]+/gi,
    Na = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ve, ct, nl, Cl, xe = {},
    Mr = {},
    Zn, Kn = function (e) {
        return (Mr = Ut(e, xe)) && ot
    },
    $l = function (e, r) {
        return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
    },
    Ar = function (e, r) {
        return !r && console.warn(e)
    },
    Xn = function (e, r) {
        return e && (xe[e] = r) && Mr && (Mr[e] = r) || xe
    },
    pr = function () {
        return 0
    },
    Il = {},
    It = [],
    sl = {},
    Jn, Ke = {},
    Zr = {},
    ei = 30,
    Tr = [],
    Dl = "",
    Tl = function (e) {
        var r = e[0],
            t, l;
        if (gt(r) || Be(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (l = Tr.length; l-- && !Tr[l].targetTest(r););
            t = Tr[l]
        }
        for (l = e.length; l--;) e[l] && (e[l]._gsap || (e[l]._gsap = new bs(e[l], t))) || e.splice(l, 1);
        return e
    },
    Nt = function (e) {
        return e._gsap || Tl(rt(e))[0]._gsap
    },
    Qn = function (e, r, t) {
        return (t = e[r]) && Be(t) ? e[r]() : El(t) && e.getAttribute && e.getAttribute(r) || t
    },
    We = function (e, r) {
        return (e = e.split(",")).forEach(r) || e
    },
    Me = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Fe = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Zt = function (e, r) {
        var t = r.charAt(0),
            l = parseFloat(r.substr(2));
        return e = parseFloat(e), t === "+" ? e + l : t === "-" ? e - l : t === "*" ? e * l : e / l
    },
    Fa = function (e, r) {
        for (var t = r.length, l = 0; e.indexOf(r[l]) < 0 && ++l < t;);
        return l < t
    },
    Or = function () {
        var e = It.length,
            r = It.slice(0),
            t, l;
        for (sl = {}, It.length = 0, t = 0; t < e; t++) l = r[t], l && l._lazy && (l.render(l._lazy[0], l._lazy[1], !0)._lazy = 0)
    },
    xn = function (e, r, t, l) {
        It.length && Or(), e.render(r, t, l), It.length && Or()
    },
    es = function (e) {
        var r = parseFloat(e);
        return (r || r === 0) && (e + "").match(Wn).length < 2 ? r : Le(e) ? e.trim() : e
    },
    ts = function (e) {
        return e
    },
    it = function (e, r) {
        for (var t in r) t in e || (e[t] = r[t]);
        return e
    },
    Ra = function (e) {
        return function (r, t) {
            for (var l in t) l in r || l === "duration" && e || l === "ease" || (r[l] = t[l])
        }
    },
    Ut = function (e, r) {
        for (var t in r) e[t] = r[t];
        return e
    },
    ti = function i(e, r) {
        for (var t in r) t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = gt(r[t]) ? i(e[t] || (e[t] = {}), r[t]) : r[t]);
        return e
    },
    zr = function (e, r) {
        var t = {},
            l;
        for (l in e) l in r || (t[l] = e[l]);
        return t
    },
    dr = function (e) {
        var r = e.parent || Ve,
            t = e.keyframes ? Ra(Ue(e.keyframes)) : it;
        if (Ye(e.inherit))
            for (; r;) t(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    },
    ja = function (e, r) {
        for (var t = e.length, l = t === r.length; l && t-- && e[t] === r[t];);
        return t < 0
    },
    rs = function (e, r, t, l, n) {
        t === void 0 && (t = "_first"), l === void 0 && (l = "_last");
        var s = e[l],
            a;
        if (n)
            for (a = r[n]; s && s[n] > a;) s = s._prev;
        return s ? (r._next = s._next, s._next = r) : (r._next = e[t], e[t] = r), r._next ? r._next._prev = r : e[l] = r, r._prev = s, r.parent = r._dp = e, r
    },
    jr = function (e, r, t, l) {
        t === void 0 && (t = "_first"), l === void 0 && (l = "_last");
        var n = r._prev,
            s = r._next;
        n ? n._next = s : e[t] === r && (e[t] = s), s ? s._prev = n : e[l] === r && (e[l] = n), r._next = r._prev = r.parent = null
    },
    _t = function (e, r) {
        e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
    },
    Ft = function (e, r) {
        if (e && (!r || r._end > e._dur || r._start < 0))
            for (var t = e; t;) t._dirty = 1, t = t.parent;
        return e
    },
    Ua = function (e) {
        for (var r = e.parent; r && r.parent;) r._dirty = 1, r.totalDuration(), r = r.parent;
        return e
    },
    Ha = function i(e) {
        return !e || e._ts && i(e.parent)
    },
    ri = function (e) {
        return e._repeat ? xt(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    xt = function (e, r) {
        var t = Math.floor(e /= r);
        return e && t === e ? t - 1 : t
    },
    Br = function (e, r) {
        return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    },
    Ur = function (e) {
        return e._end = Fe(e._start + (e._tDur / Math.abs(e._ts || e._rts || $e) || 0))
    },
    Sl = function (e, r) {
        var t = e._dp;
        return t && t.smoothChildTiming && e._ts && (e._start = Fe(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), Ur(e), t._dirty || Ft(t, e)), e
    },
    ls = function (e, r) {
        var t;
        if ((r._time || r._initted && !r._dur) && (t = Br(e.rawTime(), r), (!r._dur || wr(0, r.totalDuration(), t) - r._tTime > $e) && r.render(t, !0)), Ft(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (t = e; t._dp;) t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
            e._zTime = -$e
        }
    },
    ut = function (e, r, t, l) {
        return r.parent && _t(r), r._start = Fe((mt(t) ? t : t || e !== Ve ? et(e, t, r) : e._time) + r._delay), r._end = Fe(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), rs(e, r, "_first", "_last", e._sort ? "_start" : 0), al(r) || (e._recent = r), l || ls(e, r), e
    },
    is = function (e, r) {
        return (xe.ScrollTrigger || $l("scrollTrigger", r)) && xe.ScrollTrigger.create(r, e)
    },
    ns = function (e, r, t, l) {
        if (Pl(e, r), !e._initted) return 1;
        if (!t && e._pt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Jn !== Xe.frame) return It.push(e), e._lazy = [r, l], 1
    },
    qa = function i(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || i(r))
    },
    al = function (e) {
        var r = e.data;
        return r === "isFromStart" || r === "isStart"
    },
    Ga = function (e, r, t, l) {
        var n = e.ratio,
            s = r < 0 || !r && (!e._start && qa(e) && !(!e._initted && al(e)) || (e._ts < 0 || e._dp._ts < 0) && !al(e)) ? 0 : 1,
            a = e._rDelay,
            o = 0,
            c, f, p;
        if (a && e._repeat && (o = wr(0, e._tDur, r), f = xt(o, a), e._yoyo && f & 1 && (s = 1 - s), f !== xt(e._tTime, a) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || l || e._zTime === $e || !r && e._zTime) {
            if (!e._initted && ns(e, r, l, t)) return;
            for (p = e._zTime, e._zTime = r || (t ? $e : 0), t || (t = r && !p), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = o, c = e._pt; c;) c.r(s, c.d), c = c._next;
            e._startAt && r < 0 && e._startAt.render(r, !0, !0), e._onUpdate && !t && lt(e, "onUpdate"), o && e._repeat && !t && e.parent && lt(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === s && (s && _t(e, 1), t || (lt(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = r)
    },
    Ya = function (e, r, t) {
        var l;
        if (t > r)
            for (l = e._first; l && l._start <= t;) {
                if (l.data === "isPause" && l._start > r) return l;
                l = l._next
            } else
                for (l = e._last; l && l._start >= t;) {
                    if (l.data === "isPause" && l._start < r) return l;
                    l = l._prev
                }
    },
    er = function (e, r, t, l) {
        var n = e._repeat,
            s = Fe(r) || 0,
            a = e._tTime / e._tDur;
        return a && !l && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : Fe(s * (n + 1) + e._rDelay * n) : s, a > 0 && !l ? Sl(e, e._tTime = e._tDur * a) : e.parent && Ur(e), t || Ft(e.parent, e), e
    },
    li = function (e) {
        return e instanceof Ge ? Ft(e) : er(e, e._dur)
    },
    Wa = {
        _start: 0,
        endTime: pr,
        totalDuration: pr
    },
    et = function i(e, r, t) {
        var l = e.labels,
            n = e._recent || Wa,
            s = e.duration() >= tt ? n.endTime(!1) : e._dur,
            a, o, c;
        return Le(r) && (isNaN(r) || r in l) ? (o = r.charAt(0), c = r.substr(-1) === "%", a = r.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (r = r.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (c ? (a < 0 ? n : t).totalDuration() / 100 : 1)) : a < 0 ? (r in l || (l[r] = s), l[r]) : (o = parseFloat(r.charAt(a - 1) + r.substr(a + 1)), c && t && (o = o / 100 * (Ue(t) ? t[0] : t).totalDuration()), a > 1 ? i(e, r.substr(0, a - 1), t) + o : s + o)) : r == null ? s : +r
    },
    hr = function (e, r, t) {
        var l = mt(r[1]),
            n = (l ? 2 : 1) + (e < 2 ? 0 : 1),
            s = r[n],
            a, o;
        if (l && (s.duration = r[1]), s.parent = t, e) {
            for (a = s, o = t; o && !("immediateRender" in a);) a = o.vars.defaults || {}, o = Ye(o.vars.inherit) && o.parent;
            s.immediateRender = Ye(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = r[n - 1]
        }
        return new ze(r[0], s, r[n + 1])
    },
    Mt = function (e, r) {
        return e || e === 0 ? r(e) : r
    },
    wr = function (e, r, t) {
        return t < e ? e : t > r ? r : t
    },
    Re = function (e, r) {
        return !Le(e) || !(r = Na.exec(e)) ? "" : r[1]
    },
    Za = function (e, r, t) {
        return Mt(t, function (l) {
            return wr(e, r, l)
        })
    },
    ol = [].slice,
    ss = function (e, r) {
        return e && gt(e) && "length" in e && (!r && !e.length || e.length - 1 in e && gt(e[0])) && !e.nodeType && e !== ct
    },
    Ka = function (e, r, t) {
        return t === void 0 && (t = []), e.forEach(function (l) {
            var n;
            return Le(l) && !r || ss(l, 1) ? (n = t).push.apply(n, rt(l)) : t.push(l)
        }) || t
    },
    rt = function (e, r, t) {
        return Le(e) && !t && (nl || !tr()) ? ol.call((r || Cl).querySelectorAll(e), 0) : Ue(e) ? Ka(e, t) : ss(e) ? ol.call(e, 0) : e ? [e] : []
    },
    Xa = function (e) {
        return e = rt(e)[0] || Ar("Invalid scope") || {},
            function (r) {
                var t = e.current || e.nativeElement || e;
                return rt(r, t.querySelectorAll ? t : t === e ? Ar("Invalid scope") || Cl.createElement("div") : e)
            }
    },
    as = function (e) {
        return e.sort(function () {
            return .5 - Math.random()
        })
    },
    os = function (e) {
        if (Be(e)) return e;
        var r = gt(e) ? e : {
                each: e
            },
            t = Rt(r.ease),
            l = r.from || 0,
            n = parseFloat(r.base) || 0,
            s = {},
            a = l > 0 && l < 1,
            o = isNaN(l) || a,
            c = r.axis,
            f = l,
            p = l;
        return Le(l) ? f = p = {
                center: .5,
                edges: .5,
                end: 1
            } [l] || 0 : !a && o && (f = l[0], p = l[1]),
            function (h, v, _) {
                var m = (_ || r).length,
                    b = s[m],
                    y, k, $, I, D, T, z, A, B;
                if (!b) {
                    if (B = r.grid === "auto" ? 0 : (r.grid || [1, tt])[1], !B) {
                        for (z = -tt; z < (z = _[B++].getBoundingClientRect().left) && B < m;);
                        B--
                    }
                    for (b = s[m] = [], y = o ? Math.min(B, m) * f - .5 : l % B, k = B === tt ? 0 : o ? m * p / B - .5 : l / B | 0, z = 0, A = tt, T = 0; T < m; T++) $ = T % B - y, I = k - (T / B | 0), b[T] = D = c ? Math.abs(c === "y" ? I : $) : Un($ * $ + I * I), D > z && (z = D), D < A && (A = D);
                    l === "random" && as(b), b.max = z - A, b.min = A, b.v = m = (parseFloat(r.amount) || parseFloat(r.each) * (B > m ? m - 1 : c ? c === "y" ? m / B : B : Math.max(B, m / B)) || 0) * (l === "edges" ? -1 : 1), b.b = m < 0 ? n - m : n, b.u = Re(r.amount || r.each) || 0, t = t && m < 0 ? ms(t) : t
                }
                return m = (b[h] - b.min) / b.max || 0, Fe(b.b + (t ? t(m) : m) * b.v) + b.u
            }
    },
    cl = function (e) {
        var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (t) {
            var l = Math.round(parseFloat(t) / e) * e * r;
            return (l - l % 1) / r + (mt(t) ? 0 : Re(t))
        }
    },
    cs = function (e, r) {
        var t = Ue(e),
            l, n;
        return !t && gt(e) && (l = t = e.radius || tt, e.values ? (e = rt(e.values), (n = !mt(e[0])) && (l *= l)) : e = cl(e.increment)), Mt(r, t ? Be(e) ? function (s) {
            return n = e(s), Math.abs(n - s) <= l ? n : s
        } : function (s) {
            for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), c = tt, f = 0, p = e.length, h, v; p--;) n ? (h = e[p].x - a, v = e[p].y - o, h = h * h + v * v) : h = Math.abs(e[p] - a), h < c && (c = h, f = p);
            return f = !l || c <= l ? e[f] : s, n || f === s || mt(s) ? f : f + Re(s)
        } : cl(e))
    },
    us = function (e, r, t, l) {
        return Mt(Ue(e) ? !r : t === !0 ? !!(t = 0) : !l, function () {
            return Ue(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (l = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * .99)) / t) * t * l) / l
        })
    },
    Ja = function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return function (l) {
            return r.reduce(function (n, s) {
                return s(n)
            }, l)
        }
    },
    Qa = function (e, r) {
        return function (t) {
            return e(parseFloat(t)) + (r || Re(t))
        }
    },
    xa = function (e, r, t) {
        return ds(e, r, 0, 1, t)
    },
    fs = function (e, r, t) {
        return Mt(t, function (l) {
            return e[~~r(l)]
        })
    },
    eo = function i(e, r, t) {
        var l = r - e;
        return Ue(e) ? fs(e, i(0, e.length), r) : Mt(t, function (n) {
            return (l + (n - e) % l) % l + e
        })
    },
    to = function i(e, r, t) {
        var l = r - e,
            n = l * 2;
        return Ue(e) ? fs(e, i(0, e.length - 1), r) : Mt(t, function (s) {
            return s = (n + (s - e) % n) % n || 0, e + (s > l ? n - s : s)
        })
    },
    mr = function (e) {
        for (var r = 0, t = "", l, n, s, a; ~(l = e.indexOf("random(", r));) s = e.indexOf(")", l), a = e.charAt(l + 7) === "[", n = e.substr(l + 7, s - l - 7).match(a ? Wn : il), t += e.substr(r, l - r) + us(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), r = s + 1;
        return t + e.substr(r, e.length - r)
    },
    ds = function (e, r, t, l, n) {
        var s = r - e,
            a = l - t;
        return Mt(n, function (o) {
            return t + ((o - e) / s * a || 0)
        })
    },
    ro = function i(e, r, t, l) {
        var n = isNaN(e + r) ? 0 : function (v) {
            return (1 - v) * e + v * r
        };
        if (!n) {
            var s = Le(e),
                a = {},
                o, c, f, p, h;
            if (t === !0 && (l = 1) && (t = null), s) e = {
                p: e
            }, r = {
                p: r
            };
            else if (Ue(e) && !Ue(r)) {
                for (f = [], p = e.length, h = p - 2, c = 1; c < p; c++) f.push(i(e[c - 1], e[c]));
                p--, n = function (_) {
                    _ *= p;
                    var m = Math.min(h, ~~_);
                    return f[m](_ - m)
                }, t = r
            } else l || (e = Ut(Ue(e) ? [] : {}, e));
            if (!f) {
                for (o in r) Vl.call(a, e, o, "get", r[o]);
                n = function (_) {
                    return Ol(_, a) || (s ? e.p : e)
                }
            }
        }
        return Mt(t, n)
    },
    ii = function (e, r, t) {
        var l = e.labels,
            n = tt,
            s, a, o;
        for (s in l) a = l[s] - r, a < 0 == !!t && a && n > (a = Math.abs(a)) && (o = s, n = a);
        return o
    },
    lt = function (e, r, t) {
        var l = e.vars,
            n = l[r],
            s, a;
        if (!!n) return s = l[r + "Params"], a = l.callbackScope || e, t && It.length && Or(), s ? n.apply(a, s) : n.call(a)
    },
    or = function (e) {
        return _t(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && lt(e, "onInterrupt"), e
    },
    Wt, lo = function (e) {
        e = !e.name && e.default || e;
        var r = e.name,
            t = Be(e),
            l = r && !t && e.init ? function () {
                this._props = []
            } : e,
            n = {
                init: pr,
                render: Ol,
                add: Vl,
                kill: yo,
                modifier: bo,
                rawVars: 0
            },
            s = {
                targetTest: 0,
                get: 0,
                getSetter: Al,
                aliases: {},
                register: 0
            };
        if (tr(), e !== l) {
            if (Ke[r]) return;
            it(l, it(zr(e, n), s)), Ut(l.prototype, Ut(n, zr(e, s))), Ke[l.prop = r] = l, e.targetTest && (Tr.push(l), Il[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
        }
        Xn(r, l), e.register && e.register(ot, l, Ze)
    },
    Ce = 255,
    cr = {
        aqua: [0, Ce, Ce],
        lime: [0, Ce, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Ce],
        navy: [0, 0, 128],
        white: [Ce, Ce, Ce],
        olive: [128, 128, 0],
        yellow: [Ce, Ce, 0],
        orange: [Ce, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Ce, 0, 0],
        pink: [Ce, 192, 203],
        cyan: [0, Ce, Ce],
        transparent: [Ce, Ce, Ce, 0]
    },
    Kr = function (e, r, t) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (t - r) * e * 6 : e < .5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * Ce + .5 | 0
    },
    hs = function (e, r, t) {
        var l = e ? mt(e) ? [e >> 16, e >> 8 & Ce, e & Ce] : 0 : cr.black,
            n, s, a, o, c, f, p, h, v, _;
        if (!l) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), cr[e]) l = cr[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + n + n + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return l = parseInt(e.substr(1, 6), 16), [l >> 16, l >> 8 & Ce, l & Ce, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), l = [e >> 16, e >> 8 & Ce, e & Ce]
            } else if (e.substr(0, 3) === "hsl") {
                if (l = _ = e.match(il), !r) o = +l[0] % 360 / 360, c = +l[1] / 100, f = +l[2] / 100, s = f <= .5 ? f * (c + 1) : f + c - f * c, n = f * 2 - s, l.length > 3 && (l[3] *= 1), l[0] = Kr(o + 1 / 3, n, s), l[1] = Kr(o, n, s), l[2] = Kr(o - 1 / 3, n, s);
                else if (~e.indexOf("=")) return l = e.match(Gn), t && l.length < 4 && (l[3] = 1), l
            } else l = e.match(il) || cr.transparent;
            l = l.map(Number)
        }
        return r && !_ && (n = l[0] / Ce, s = l[1] / Ce, a = l[2] / Ce, p = Math.max(n, s, a), h = Math.min(n, s, a), f = (p + h) / 2, p === h ? o = c = 0 : (v = p - h, c = f > .5 ? v / (2 - p - h) : v / (p + h), o = p === n ? (s - a) / v + (s < a ? 6 : 0) : p === s ? (a - n) / v + 2 : (n - s) / v + 4, o *= 60), l[0] = ~~(o + .5), l[1] = ~~(c * 100 + .5), l[2] = ~~(f * 100 + .5)), t && l.length < 4 && (l[3] = 1), l
    },
    _s = function (e) {
        var r = [],
            t = [],
            l = -1;
        return e.split(Dt).forEach(function (n) {
            var s = n.match(Yt) || [];
            r.push.apply(r, s), t.push(l += s.length + 1)
        }), r.c = t, r
    },
    ni = function (e, r, t) {
        var l = "",
            n = (e + l).match(Dt),
            s = r ? "hsla(" : "rgba(",
            a = 0,
            o, c, f, p;
        if (!n) return e;
        if (n = n.map(function (h) {
                return (h = hs(h, r, 1)) && s + (r ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
            }), t && (f = _s(e), o = t.c, o.join(l) !== f.c.join(l)))
            for (c = e.replace(Dt, "1").split(Yt), p = c.length - 1; a < p; a++) l += c[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : t).shift());
        if (!c)
            for (c = e.split(Dt), p = c.length - 1; a < p; a++) l += c[a] + n[a];
        return l + c[p]
    },
    Dt = function () {
        var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in cr) i += "|" + e + "\\b";
        return new RegExp(i + ")", "gi")
    }(),
    io = /hsl[a]?\(/,
    ps = function (e) {
        var r = e.join(" "),
            t;
        if (Dt.lastIndex = 0, Dt.test(r)) return t = io.test(r), e[1] = ni(e[1], t), e[0] = ni(e[0], t, _s(e[1])), !0
    },
    gr, Xe = function () {
        var i = Date.now,
            e = 500,
            r = 33,
            t = i(),
            l = t,
            n = 1e3 / 240,
            s = n,
            a = [],
            o, c, f, p, h, v, _ = function m(b) {
                var y = i() - l,
                    k = b === !0,
                    $, I, D, T;
                if (y > e && (t += y - r), l += y, D = l - t, $ = D - s, ($ > 0 || k) && (T = ++p.frame, h = D - p.time * 1e3, p.time = D = D / 1e3, s += $ + ($ >= n ? 4 : n - $), I = 1), k || (o = c(m)), I)
                    for (v = 0; v < a.length; v++) a[v](D, h, T, b)
            };
        return p = {
            time: 0,
            frame: 0,
            tick: function () {
                _(!0)
            },
            deltaRatio: function (b) {
                return h / (1e3 / (b || 60))
            },
            wake: function () {
                Zn && (!nl && Hn() && (ct = nl = window, Cl = ct.document || {}, xe.gsap = ot, (ct.gsapVersions || (ct.gsapVersions = [])).push(ot.version), Kn(Mr || ct.GreenSockGlobals || !ct.gsap && ct || {}), f = ct.requestAnimationFrame), o && p.sleep(), c = f || function (b) {
                    return setTimeout(b, s - p.time * 1e3 + 1 | 0)
                }, gr = 1, _(2))
            },
            sleep: function () {
                (f ? ct.cancelAnimationFrame : clearTimeout)(o), gr = 0, c = pr
            },
            lagSmoothing: function (b, y) {
                e = b || 1 / $e, r = Math.min(y, e, 0)
            },
            fps: function (b) {
                n = 1e3 / (b || 240), s = p.time * 1e3 + n
            },
            add: function (b, y, k) {
                var $ = y ? function (I, D, T, z) {
                    b(I, D, T, z), p.remove($)
                } : b;
                return p.remove(b), a[k ? "unshift" : "push"]($), tr(), $
            },
            remove: function (b, y) {
                ~(y = a.indexOf(b)) && a.splice(y, 1) && v >= y && v--
            },
            _listeners: a
        }, p
    }(),
    tr = function () {
        return !gr && Xe.wake()
    },
    ve = {},
    no = /^[\d.\-M][\d.\-,\s]/,
    so = /["']/g,
    ao = function (e) {
        for (var r = {}, t = e.substr(1, e.length - 3).split(":"), l = t[0], n = 1, s = t.length, a, o, c; n < s; n++) o = t[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, c = o.substr(0, a), r[l] = isNaN(c) ? c.replace(so, "").trim() : +c, l = o.substr(a + 1).trim();
        return r
    },
    oo = function (e) {
        var r = e.indexOf("(") + 1,
            t = e.indexOf(")"),
            l = e.indexOf("(", r);
        return e.substring(r, ~l && l < t ? e.indexOf(")", t + 1) : t)
    },
    co = function (e) {
        var r = (e + "").split("("),
            t = ve[r[0]];
        return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [ao(r[1])] : oo(e).split(",").map(es)) : ve._CE && no.test(e) ? ve._CE("", e) : t
    },
    ms = function (e) {
        return function (r) {
            return 1 - e(1 - r)
        }
    },
    gs = function i(e, r) {
        for (var t = e._first, l; t;) t instanceof Ge ? i(t, r) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== r && (t.timeline ? i(t.timeline, r) : (l = t._ease, t._ease = t._yEase, t._yEase = l, t._yoyo = r)), t = t._next
    },
    Rt = function (e, r) {
        return e && (Be(e) ? e : ve[e] || co(e)) || r
    },
    Ht = function (e, r, t, l) {
        t === void 0 && (t = function (o) {
            return 1 - r(1 - o)
        }), l === void 0 && (l = function (o) {
            return o < .5 ? r(o * 2) / 2 : 1 - r((1 - o) * 2) / 2
        });
        var n = {
                easeIn: r,
                easeOut: t,
                easeInOut: l
            },
            s;
        return We(e, function (a) {
            ve[a] = xe[a] = n, ve[s = a.toLowerCase()] = t;
            for (var o in n) ve[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = ve[a + "." + o] = n[o]
        }), n
    },
    vs = function (e) {
        return function (r) {
            return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
        }
    },
    Xr = function i(e, r, t) {
        var l = r >= 1 ? r : 1,
            n = (t || (e ? .3 : .45)) / (r < 1 ? r : 1),
            s = n / ll * (Math.asin(1 / l) || 0),
            a = function (f) {
                return f === 1 ? 1 : l * Math.pow(2, -10 * f) * La((f - s) * n) + 1
            },
            o = e === "out" ? a : e === "in" ? function (c) {
                return 1 - a(1 - c)
            } : vs(a);
        return n = ll / n, o.config = function (c, f) {
            return i(e, c, f)
        }, o
    },
    Jr = function i(e, r) {
        r === void 0 && (r = 1.70158);
        var t = function (s) {
                return s ? --s * s * ((r + 1) * s + r) + 1 : 0
            },
            l = e === "out" ? t : e === "in" ? function (n) {
                return 1 - t(1 - n)
            } : vs(t);
        return l.config = function (n) {
            return i(e, n)
        }, l
    };
We("Linear,Quad,Cubic,Quart,Quint,Strong", function (i, e) {
    var r = e < 5 ? e + 1 : e;
    Ht(i + ",Power" + (r - 1), e ? function (t) {
        return Math.pow(t, r)
    } : function (t) {
        return t
    }, function (t) {
        return 1 - Math.pow(1 - t, r)
    }, function (t) {
        return t < .5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
    })
});
ve.Linear.easeNone = ve.none = ve.Linear.easeIn;
Ht("Elastic", Xr("in"), Xr("out"), Xr());
(function (i, e) {
    var r = 1 / e,
        t = 2 * r,
        l = 2.5 * r,
        n = function (a) {
            return a < r ? i * a * a : a < t ? i * Math.pow(a - 1.5 / e, 2) + .75 : a < l ? i * (a -= 2.25 / e) * a + .9375 : i * Math.pow(a - 2.625 / e, 2) + .984375
        };
    Ht("Bounce", function (s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
Ht("Expo", function (i) {
    return i ? Math.pow(2, 10 * (i - 1)) : 0
});
Ht("Circ", function (i) {
    return -(Un(1 - i * i) - 1)
});
Ht("Sine", function (i) {
    return i === 1 ? 1 : -Ba(i * Oa) + 1
});
Ht("Back", Jr("in"), Jr("out"), Jr());
ve.SteppedEase = ve.steps = xe.SteppedEase = {
    config: function (e, r) {
        e === void 0 && (e = 1);
        var t = 1 / e,
            l = e + (r ? 0 : 1),
            n = r ? 1 : 0,
            s = 1 - $e;
        return function (a) {
            return ((l * wr(0, s, a) | 0) + n) * t
        }
    }
};
Qt.ease = ve["quad.out"];
We("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (i) {
    return Dl += i + "," + i + "Params,"
});
var bs = function (e, r) {
        this.id = za++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : Qn, this.set = r ? r.getSetter : Al
    },
    vr = function () {
        function i(r) {
            this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, er(this, +r.duration, 1, 1), this.data = r.data, gr || Xe.wake()
        }
        var e = i.prototype;
        return e.delay = function (t) {
            return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function (t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, er(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function (t, l) {
            if (tr(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Sl(this, t), !n._dp || n.parent || ls(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && ut(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !l || this._initted && Math.abs(this._zTime) === $e || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), xn(this, t, l)), this
        }, e.time = function (t, l) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ri(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), l) : this._time
        }, e.totalProgress = function (t, l) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, l) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function (t, l) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + ri(this), l) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function (t, l) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, l) : this._repeat ? xt(this._tTime, n) + 1 : 1
        }, e.timeScale = function (t) {
            if (!arguments.length) return this._rts === -$e ? 0 : this._rts;
            if (this._rts === t) return this;
            var l = this.parent && this._ts ? Br(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -$e ? 0 : this._rts, this.totalTime(wr(-this._delay, this._tDur, l), !0), Ur(this), Ua(this)
        }, e.paused = function (t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (tr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== $e && (this._tTime -= $e)))), this) : this._ps
        }, e.startTime = function (t) {
            if (arguments.length) {
                this._start = t;
                var l = this.parent || this._dp;
                return l && (l._sort || !this.parent) && ut(l, this, t - this._delay), this
            }
            return this._start
        }, e.endTime = function (t) {
            return this._start + (Ye(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function (t) {
            var l = this.parent || this._dp;
            return l ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Br(l.rawTime(t), this) : this._tTime : this._tTime
        }, e.globalTime = function (t) {
            for (var l = this, n = arguments.length ? t : l.rawTime(); l;) n = l._start + n / (l._ts || 1), l = l._dp;
            return n
        }, e.repeat = function (t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, li(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function (t) {
            if (arguments.length) {
                var l = this._time;
                return this._rDelay = t, li(this), l ? this.time(l) : this
            }
            return this._rDelay
        }, e.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function (t, l) {
            return this.totalTime(et(this, t), Ye(l))
        }, e.restart = function (t, l) {
            return this.play().totalTime(t ? -this._delay : 0, Ye(l))
        }, e.play = function (t, l) {
            return t != null && this.seek(t, l), this.reversed(!1).paused(!1)
        }, e.reverse = function (t, l) {
            return t != null && this.seek(t || this.totalDuration(), l), this.reversed(!0).paused(!1)
        }, e.pause = function (t, l) {
            return t != null && this.seek(t, l), this.paused(!0)
        }, e.resume = function () {
            return this.paused(!1)
        }, e.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -$e : 0)), this) : this._rts < 0
        }, e.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -$e, this
        }, e.isActive = function () {
            var t = this.parent || this._dp,
                l = this._start,
                n;
            return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= l && n < this.endTime(!0) - $e)
        }, e.eventCallback = function (t, l, n) {
            var s = this.vars;
            return arguments.length > 1 ? (l ? (s[t] = l, n && (s[t + "Params"] = n), t === "onUpdate" && (this._onUpdate = l)) : delete s[t], this) : s[t]
        }, e.then = function (t) {
            var l = this;
            return new Promise(function (n) {
                var s = Be(t) ? t : ts,
                    a = function () {
                        var c = l.then;
                        l.then = null, Be(s) && (s = s(l)) && (s.then || s === l) && (l.then = c), n(s), l.then = c
                    };
                l._initted && l.totalProgress() === 1 && l._ts >= 0 || !l._tTime && l._ts < 0 ? a() : l._prom = a
            })
        }, e.kill = function () {
            or(this)
        }, i
    }();
it(vr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -$e,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ge = function (i) {
    jn(e, i);

    function e(t, l) {
        var n;
        return t === void 0 && (t = {}), n = i.call(this, t) || this, n.labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = Ye(t.sortChildren), Ve && ut(t.parent || Ve, ht(n), l), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && is(ht(n), t.scrollTrigger), n
    }
    var r = e.prototype;
    return r.to = function (l, n, s) {
        return hr(0, arguments, this), this
    }, r.from = function (l, n, s) {
        return hr(1, arguments, this), this
    }, r.fromTo = function (l, n, s, a) {
        return hr(2, arguments, this), this
    }, r.set = function (l, n, s) {
        return n.duration = 0, n.parent = this, dr(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new ze(l, n, et(this, s), 1), this
    }, r.call = function (l, n, s) {
        return ut(this, ze.delayedCall(0, l, n), s)
    }, r.staggerTo = function (l, n, s, a, o, c, f) {
        return s.duration = n, s.stagger = s.stagger || a, s.onComplete = c, s.onCompleteParams = f, s.parent = this, new ze(l, s, et(this, o)), this
    }, r.staggerFrom = function (l, n, s, a, o, c, f) {
        return s.runBackwards = 1, dr(s).immediateRender = Ye(s.immediateRender), this.staggerTo(l, n, s, a, o, c, f)
    }, r.staggerFromTo = function (l, n, s, a, o, c, f, p) {
        return a.startAt = s, dr(a).immediateRender = Ye(a.immediateRender), this.staggerTo(l, n, a, o, c, f, p)
    }, r.render = function (l, n, s) {
        var a = this._time,
            o = this._dirty ? this.totalDuration() : this._tDur,
            c = this._dur,
            f = l <= 0 ? 0 : Fe(l),
            p = this._zTime < 0 != l < 0 && (this._initted || !c),
            h, v, _, m, b, y, k, $, I, D, T, z;
        if (this !== Ve && f > o && l >= 0 && (f = o), f !== this._tTime || s || p) {
            if (a !== this._time && c && (f += this._time - a, l += this._time - a), h = f, I = this._start, $ = this._ts, y = !$, p && (c || (a = this._zTime), (l || !n) && (this._zTime = l)), this._repeat) {
                if (T = this._yoyo, b = c + this._rDelay, this._repeat < -1 && l < 0) return this.totalTime(b * 100 + l, n, s);
                if (h = Fe(f % b), f === o ? (m = this._repeat, h = c) : (m = ~~(f / b), m && m === f / b && (h = c, m--), h > c && (h = c)), D = xt(this._tTime, b), !a && this._tTime && D !== m && (D = m), T && m & 1 && (h = c - h, z = 1), m !== D && !this._lock) {
                    var A = T && D & 1,
                        B = A === (T && m & 1);
                    if (m < D && (A = !A), a = A ? 0 : c, this._lock = 1, this.render(a || (z ? 0 : Fe(m * b)), n, !c)._lock = 0, this._tTime = f, !n && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !z && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (c = this._dur, o = this._tDur, B && (this._lock = 2, a = A ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !z && this.invalidate()), this._lock = 0, !this._ts && !y) return this;
                    gs(this, z)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (k = Ya(this, Fe(a), Fe(h)), k && (f -= h - (h = k._start))), this._tTime = f, this._time = h, this._act = !$, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = l, a = 0), !a && h && !n && (lt(this, "onStart"), this._tTime !== f)) return this;
            if (h >= a && l >= 0)
                for (v = this._first; v;) {
                    if (_ = v._next, (v._act || h >= v._start) && v._ts && k !== v) {
                        if (v.parent !== this) return this.render(l, n, s);
                        if (v.render(v._ts > 0 ? (h - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (h - v._start) * v._ts, n, s), h !== this._time || !this._ts && !y) {
                            k = 0, _ && (f += this._zTime = -$e);
                            break
                        }
                    }
                    v = _
                } else {
                    v = this._last;
                    for (var V = l < 0 ? l : h; v;) {
                        if (_ = v._prev, (v._act || V <= v._end) && v._ts && k !== v) {
                            if (v.parent !== this) return this.render(l, n, s);
                            if (v.render(v._ts > 0 ? (V - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (V - v._start) * v._ts, n, s), h !== this._time || !this._ts && !y) {
                                k = 0, _ && (f += this._zTime = V ? -$e : $e);
                                break
                            }
                        }
                        v = _
                    }
                }
            if (k && !n && (this.pause(), k.render(h >= a ? 0 : -$e)._zTime = h >= a ? 1 : -1, this._ts)) return this._start = I, Ur(this), this.render(l, n, s);
            this._onUpdate && !n && lt(this, "onUpdate", !0), (f === o && this._tTime >= this.totalDuration() || !f && a) && (I === this._start || Math.abs($) !== Math.abs(this._ts)) && (this._lock || ((l || !c) && (f === o && this._ts > 0 || !f && this._ts < 0) && _t(this, 1), !n && !(l < 0 && !a) && (f || a || !o) && (lt(this, f === o && l >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < o && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, r.add = function (l, n) {
        var s = this;
        if (mt(n) || (n = et(this, n, l)), !(l instanceof vr)) {
            if (Ue(l)) return l.forEach(function (a) {
                return s.add(a, n)
            }), this;
            if (Le(l)) return this.addLabel(l, n);
            if (Be(l)) l = ze.delayedCall(0, l);
            else return this
        }
        return this !== l ? ut(this, l, n) : this
    }, r.getChildren = function (l, n, s, a) {
        l === void 0 && (l = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -tt);
        for (var o = [], c = this._first; c;) c._start >= a && (c instanceof ze ? n && o.push(c) : (s && o.push(c), l && o.push.apply(o, c.getChildren(!0, n, s)))), c = c._next;
        return o
    }, r.getById = function (l) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === l) return n[s]
    }, r.remove = function (l) {
        return Le(l) ? this.removeLabel(l) : Be(l) ? this.killTweensOf(l) : (jr(this, l), l === this._recent && (this._recent = this._last), Ft(this))
    }, r.totalTime = function (l, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Fe(Xe.time - (this._ts > 0 ? l / this._ts : (this.totalDuration() - l) / -this._ts))), i.prototype.totalTime.call(this, l, n), this._forcing = 0, this) : this._tTime
    }, r.addLabel = function (l, n) {
        return this.labels[l] = et(this, n), this
    }, r.removeLabel = function (l) {
        return delete this.labels[l], this
    }, r.addPause = function (l, n, s) {
        var a = ze.delayedCall(0, n || pr, s);
        return a.data = "isPause", this._hasPause = 1, ut(this, a, et(this, l))
    }, r.removePause = function (l) {
        var n = this._first;
        for (l = et(this, l); n;) n._start === l && n.data === "isPause" && _t(n), n = n._next
    }, r.killTweensOf = function (l, n, s) {
        for (var a = this.getTweensOf(l, s), o = a.length; o--;) yt !== a[o] && a[o].kill(l, n);
        return this
    }, r.getTweensOf = function (l, n) {
        for (var s = [], a = rt(l), o = this._first, c = mt(n), f; o;) o instanceof ze ? Fa(o._targets, a) && (c ? (!yt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (f = o.getTweensOf(a, n)).length && s.push.apply(s, f), o = o._next;
        return s
    }, r.tweenTo = function (l, n) {
        n = n || {};
        var s = this,
            a = et(s, l),
            o = n,
            c = o.startAt,
            f = o.onStart,
            p = o.onStartParams,
            h = o.immediateRender,
            v, _ = ze.to(s, it({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: n.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale()) || $e,
                onStart: function () {
                    if (s.pause(), !v) {
                        var b = n.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale());
                        _._dur !== b && er(_, b, 0, 1).render(_._time, !0, !0), v = 1
                    }
                    f && f.apply(_, p || [])
                }
            }, n));
        return h ? _.render(0) : _
    }, r.tweenFromTo = function (l, n, s) {
        return this.tweenTo(n, it({
            startAt: {
                time: et(this, l)
            }
        }, s))
    }, r.recent = function () {
        return this._recent
    }, r.nextLabel = function (l) {
        return l === void 0 && (l = this._time), ii(this, et(this, l))
    }, r.previousLabel = function (l) {
        return l === void 0 && (l = this._time), ii(this, et(this, l), 1)
    }, r.currentLabel = function (l) {
        return arguments.length ? this.seek(l, !0) : this.previousLabel(this._time + $e)
    }, r.shiftChildren = function (l, n, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, o = this.labels, c; a;) a._start >= s && (a._start += l, a._end += l), a = a._next;
        if (n)
            for (c in o) o[c] >= s && (o[c] += l);
        return Ft(this)
    }, r.invalidate = function () {
        var l = this._first;
        for (this._lock = 0; l;) l.invalidate(), l = l._next;
        return i.prototype.invalidate.call(this)
    }, r.clear = function (l) {
        l === void 0 && (l = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), l && (this.labels = {}), Ft(this)
    }, r.totalDuration = function (l) {
        var n = 0,
            s = this,
            a = s._last,
            o = tt,
            c, f, p;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -l : l));
        if (s._dirty) {
            for (p = s.parent; a;) c = a._prev, a._dirty && a.totalDuration(), f = a._start, f > o && s._sort && a._ts && !s._lock ? (s._lock = 1, ut(s, a, f - a._delay, 1)._lock = 0) : o = f, f < 0 && a._ts && (n -= f, (!p && !s._dp || p && p.smoothChildTiming) && (s._start += f / s._ts, s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = c;
            er(s, s === Ve && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function (l) {
        if (Ve._ts && (xn(Ve, Br(l, Ve)), Jn = Xe.frame), Xe.frame >= ei) {
            ei += Qe.autoSleep || 120;
            var n = Ve._first;
            if ((!n || !n._ts) && Qe.autoSleep && Xe._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || Xe.sleep()
            }
        }
    }, e
}(vr);
it(Ge.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var uo = function (e, r, t, l, n, s, a) {
        var o = new Ze(this._pt, e, r, 0, 1, $s, null, n),
            c = 0,
            f = 0,
            p, h, v, _, m, b, y, k;
        for (o.b = t, o.e = l, t += "", l += "", (y = ~l.indexOf("random(")) && (l = mr(l)), s && (k = [t, l], s(k, e, r), t = k[0], l = k[1]), h = t.match(Wr) || []; p = Wr.exec(l);) _ = p[0], m = l.substring(c, p.index), v ? v = (v + 1) % 5 : m.substr(-5) === "rgba(" && (v = 1), _ !== h[f++] && (b = parseFloat(h[f - 1]) || 0, o._pt = {
            _next: o._pt,
            p: m || f === 1 ? m : ",",
            s: b,
            c: _.charAt(1) === "=" ? Zt(b, _) - b : parseFloat(_) - b,
            m: v && v < 4 ? Math.round : 0
        }, c = Wr.lastIndex);
        return o.c = c < l.length ? l.substring(c, l.length) : "", o.fp = a, (Yn.test(l) || y) && (o.e = 0), this._pt = o, o
    },
    Vl = function (e, r, t, l, n, s, a, o, c) {
        Be(l) && (l = l(n || 0, e, s));
        var f = e[r],
            p = t !== "get" ? t : Be(f) ? c ? e[r.indexOf("set") || !Be(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](c) : e[r]() : f,
            h = Be(f) ? c ? mo : Es : Ml,
            v;
        if (Le(l) && (~l.indexOf("random(") && (l = mr(l)), l.charAt(1) === "=" && (v = Zt(p, l) + (Re(p) || 0), (v || v === 0) && (l = v))), p !== l || ul) return !isNaN(p * l) && l !== "" ? (v = new Ze(this._pt, e, r, +p || 0, l - (p || 0), typeof f == "boolean" ? vo : Cs, 0, h), c && (v.fp = c), a && v.modifier(a, this, e), this._pt = v) : (!f && !(r in e) && $l(r, l), uo.call(this, e, r, p, l, h, o || Qe.stringFilter, c))
    },
    fo = function (e, r, t, l, n) {
        if (Be(e) && (e = _r(e, n, r, t, l)), !gt(e) || e.style && e.nodeType || Ue(e) || qn(e)) return Le(e) ? _r(e, n, r, t, l) : e;
        var s = {},
            a;
        for (a in e) s[a] = _r(e[a], n, r, t, l);
        return s
    },
    ys = function (e, r, t, l, n, s) {
        var a, o, c, f;
        if (Ke[e] && (a = new Ke[e]).init(n, a.rawVars ? r[e] : fo(r[e], l, n, s, t), t, l, s) !== !1 && (t._pt = o = new Ze(t._pt, n, e, 0, 1, a.render, a, 0, a.priority), t !== Wt))
            for (c = t._ptLookup[t._targets.indexOf(n)], f = a._props.length; f--;) c[a._props[f]] = o;
        return a
    },
    yt, ul, Pl = function i(e, r) {
        var t = e.vars,
            l = t.ease,
            n = t.startAt,
            s = t.immediateRender,
            a = t.lazy,
            o = t.onUpdate,
            c = t.onUpdateParams,
            f = t.callbackScope,
            p = t.runBackwards,
            h = t.yoyoEase,
            v = t.keyframes,
            _ = t.autoRevert,
            m = e._dur,
            b = e._startAt,
            y = e._targets,
            k = e.parent,
            $ = k && k.data === "nested" ? k.parent._targets : y,
            I = e._overwrite === "auto" && !wl,
            D = e.timeline,
            T, z, A, B, V, L, O, R, j, G, X, Y, ee;
        if (D && (!v || !l) && (l = "none"), e._ease = Rt(l, Qt.ease), e._yEase = h ? ms(Rt(h === !0 ? l : h, Qt.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !D && !!t.runBackwards, !D || v && !t.stagger) {
            if (R = y[0] ? Nt(y[0]).harness : 0, Y = R && t[R.prop], T = zr(t, Il), b && (_t(b.render(-1, !0)), b._lazy = 0), n)
                if (_t(e._startAt = ze.set(y, it({
                        data: "isStart",
                        overwrite: !1,
                        parent: k,
                        immediateRender: !0,
                        lazy: Ye(a),
                        startAt: null,
                        delay: 0,
                        onUpdate: o,
                        onUpdateParams: c,
                        callbackScope: f,
                        stagger: 0
                    }, n))), r < 0 && !s && !_ && e._startAt.render(-1, !0), s) {
                    if (r > 0 && !_ && (e._startAt = 0), m && r <= 0) {
                        r && (e._zTime = r);
                        return
                    }
                } else _ === !1 && (e._startAt = 0);
            else if (p && m) {
                if (b) !_ && (e._startAt = 0);
                else if (r && (s = !1), A = it({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: s && Ye(a),
                        immediateRender: s,
                        stagger: 0,
                        parent: k
                    }, T), Y && (A[R.prop] = Y), _t(e._startAt = ze.set(y, A)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, !s) i(e._startAt, $e);
                else if (!r) return
            }
            for (e._pt = e._ptCache = 0, a = m && Ye(a) || a && !m, z = 0; z < y.length; z++) {
                if (V = y[z], O = V._gsap || Tl(y)[z]._gsap, e._ptLookup[z] = G = {}, sl[O.id] && It.length && Or(), X = $ === y ? z : $.indexOf(V), R && (j = new R).init(V, Y || T, e, X, $) !== !1 && (e._pt = B = new Ze(e._pt, V, j.name, 0, 1, j.render, j, 0, j.priority), j._props.forEach(function (q) {
                        G[q] = B
                    }), j.priority && (L = 1)), !R || Y)
                    for (A in T) Ke[A] && (j = ys(A, T, e, X, V, $)) ? j.priority && (L = 1) : G[A] = B = Vl.call(e, V, A, "get", T[A], X, $, 0, t.stringFilter);
                e._op && e._op[z] && e.kill(V, e._op[z]), I && e._pt && (yt = e, Ve.killTweensOf(V, G, e.globalTime(r)), ee = !e.parent, yt = 0), e._pt && a && (sl[O.id] = 1)
            }
            L && Is(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = o, e._initted = (!e._op || e._pt) && !ee, v && r <= 0 && D.render(tt, !0, !0)
    },
    ho = function (e, r, t, l, n, s, a) {
        var o = (e._pt && e._ptCache || (e._ptCache = {}))[r],
            c, f, p;
        if (!o)
            for (o = e._ptCache[r] = [], f = e._ptLookup, p = e._targets.length; p--;) {
                if (c = f[p][r], c && c.d && c.d._pt)
                    for (c = c.d._pt; c && c.p !== r;) c = c._next;
                if (!c) return ul = 1, e.vars[r] = "+=0", Pl(e, a), ul = 0, 1;
                o.push(c)
            }
        for (p = o.length; p--;) c = o[p], c.s = (l || l === 0) && !n ? l : c.s + (l || 0) + s * c.c, c.c = t - c.s, c.e && (c.e = Me(t) + Re(c.e)), c.b && (c.b = c.s + Re(c.b))
    },
    _o = function (e, r) {
        var t = e[0] ? Nt(e[0]).harness : 0,
            l = t && t.aliases,
            n, s, a, o;
        if (!l) return r;
        n = Ut({}, r);
        for (s in l)
            if (s in n)
                for (o = l[s].split(","), a = o.length; a--;) n[o[a]] = n[s];
        return n
    },
    po = function (e, r, t, l) {
        var n = r.ease || l || "power1.inOut",
            s, a;
        if (Ue(r)) a = t[e] || (t[e] = []), r.forEach(function (o, c) {
            return a.push({
                t: c / (r.length - 1) * 100,
                v: o,
                e: n
            })
        });
        else
            for (s in r) a = t[s] || (t[s] = []), s === "ease" || a.push({
                t: parseFloat(e),
                v: r[s],
                e: n
            })
    },
    _r = function (e, r, t, l, n) {
        return Be(e) ? e.call(r, t, l, n) : Le(e) && ~e.indexOf("random(") ? mr(e) : e
    },
    ks = Dl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    ws = {};
We(ks + ",id,stagger,delay,duration,paused,scrollTrigger", function (i) {
    return ws[i] = 1
});
var ze = function (i) {
    jn(e, i);

    function e(t, l, n, s) {
        var a;
        typeof l == "number" && (n.duration = l, l = n, n = null), a = i.call(this, s ? l : dr(l)) || this;
        var o = a.vars,
            c = o.duration,
            f = o.delay,
            p = o.immediateRender,
            h = o.stagger,
            v = o.overwrite,
            _ = o.keyframes,
            m = o.defaults,
            b = o.scrollTrigger,
            y = o.yoyoEase,
            k = l.parent || Ve,
            $ = (Ue(t) || qn(t) ? mt(t[0]) : "length" in l) ? [t] : rt(t),
            I, D, T, z, A, B, V, L;
        if (a._targets = $.length ? Tl($) : Ar("GSAP target " + t + " not found. https://greensock.com", !Qe.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = v, _ || h || Dr(c) || Dr(f)) {
            if (l = a.vars, I = a.timeline = new Ge({
                    data: "nested",
                    defaults: m || {}
                }), I.kill(), I.parent = I._dp = ht(a), I._start = 0, h || Dr(c) || Dr(f)) {
                if (z = $.length, V = h && os(h), gt(h))
                    for (A in h) ~ks.indexOf(A) && (L || (L = {}), L[A] = h[A]);
                for (D = 0; D < z; D++) T = zr(l, ws), T.stagger = 0, y && (T.yoyoEase = y), L && Ut(T, L), B = $[D], T.duration = +_r(c, ht(a), D, B, $), T.delay = (+_r(f, ht(a), D, B, $) || 0) - a._delay, !h && z === 1 && T.delay && (a._delay = f = T.delay, a._start += f, T.delay = 0), I.to(B, T, V ? V(D, B, $) : 0), I._ease = ve.none;
                I.duration() ? c = f = 0 : a.timeline = 0
            } else if (_) {
                dr(it(I.vars.defaults, {
                    ease: "none"
                })), I._ease = Rt(_.ease || l.ease || "none");
                var O = 0,
                    R, j, G;
                if (Ue(_)) _.forEach(function (X) {
                    return I.to($, X, ">")
                });
                else {
                    T = {};
                    for (A in _) A === "ease" || A === "easeEach" || po(A, _[A], T, _.easeEach);
                    for (A in T)
                        for (R = T[A].sort(function (X, Y) {
                                return X.t - Y.t
                            }), O = 0, D = 0; D < R.length; D++) j = R[D], G = {
                            ease: j.e,
                            duration: (j.t - (D ? R[D - 1].t : 0)) / 100 * c
                        }, G[A] = j.v, I.to($, G, O), O += G.duration;
                    I.duration() < c && I.to({}, {
                        duration: c - I.duration()
                    })
                }
            }
            c || a.duration(c = I.duration())
        } else a.timeline = 0;
        return v === !0 && !wl && (yt = ht(a), Ve.killTweensOf($), yt = 0), ut(k, ht(a), n), l.reversed && a.reverse(), l.paused && a.paused(!0), (p || !c && !_ && a._start === Fe(k._time) && Ye(p) && Ha(ht(a)) && k.data !== "nested") && (a._tTime = -$e, a.render(Math.max(0, -f))), b && is(ht(a), b), a
    }
    var r = e.prototype;
    return r.render = function (l, n, s) {
        var a = this._time,
            o = this._tDur,
            c = this._dur,
            f = l > o - $e && l >= 0 ? o : l < $e ? 0 : l,
            p, h, v, _, m, b, y, k, $;
        if (!c) Ga(this, l, n, s);
        else if (f !== this._tTime || !l || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 != l < 0) {
            if (p = f, k = this.timeline, this._repeat) {
                if (_ = c + this._rDelay, this._repeat < -1 && l < 0) return this.totalTime(_ * 100 + l, n, s);
                if (p = Fe(f % _), f === o ? (v = this._repeat, p = c) : (v = ~~(f / _), v && v === f / _ && (p = c, v--), p > c && (p = c)), b = this._yoyo && v & 1, b && ($ = this._yEase, p = c - p), m = xt(this._tTime, _), p === a && !s && this._initted) return this._tTime = f, this;
                v !== m && (k && this._yEase && gs(k, b), this.vars.repeatRefresh && !b && !this._lock && (this._lock = s = 1, this.render(Fe(_ * v), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (ns(this, l < 0 ? l : p, s, n)) return this._tTime = 0, this;
                if (a !== this._time) return this;
                if (c !== this._dur) return this.render(l, n, s)
            }
            if (this._tTime = f, this._time = p, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = ($ || this._ease)(p / c), this._from && (this.ratio = y = 1 - y), p && !a && !n && (lt(this, "onStart"), this._tTime !== f)) return this;
            for (h = this._pt; h;) h.r(y, h.d), h = h._next;
            k && k.render(l < 0 ? l : !p && b ? -$e : k._dur * k._ease(p / this._dur), n, s) || this._startAt && (this._zTime = l), this._onUpdate && !n && (l < 0 && this._startAt && this._startAt.render(l, !0, s), lt(this, "onUpdate")), this._repeat && v !== m && this.vars.onRepeat && !n && this.parent && lt(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (l < 0 && this._startAt && !this._onUpdate && this._startAt.render(l, !0, !0), (l || !c) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && _t(this, 1), !n && !(l < 0 && !a) && (f || a) && (lt(this, f === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < o && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, r.targets = function () {
        return this._targets
    }, r.invalidate = function () {
        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), i.prototype.invalidate.call(this)
    }, r.resetTo = function (l, n, s, a) {
        gr || Xe.wake(), this._ts || this.play();
        var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            c;
        return this._initted || Pl(this, o), c = this._ease(o / this._dur), ho(this, l, n, s, a, c, o) ? this.resetTo(l, n, s, a) : (Sl(this, 0), this.parent || rs(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, r.kill = function (l, n) {
        if (n === void 0 && (n = "all"), !l && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? or(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(l, n, yt && yt.vars.overwrite !== !0)._first || or(this), this.parent && s !== this.timeline.totalDuration() && er(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var a = this._targets,
            o = l ? rt(l) : a,
            c = this._ptLookup,
            f = this._pt,
            p, h, v, _, m, b, y;
        if ((!n || n === "all") && ja(a, o)) return n === "all" && (this._pt = 0), or(this);
        for (p = this._op = this._op || [], n !== "all" && (Le(n) && (m = {}, We(n, function (k) {
                return m[k] = 1
            }), n = m), n = _o(a, n)), y = a.length; y--;)
            if (~o.indexOf(a[y])) {
                h = c[y], n === "all" ? (p[y] = n, _ = h, v = {}) : (v = p[y] = p[y] || {}, _ = n);
                for (m in _) b = h && h[m], b && ((!("kill" in b.d) || b.d.kill(m) === !0) && jr(this, b, "_pt"), delete h[m]), v !== "all" && (v[m] = 1)
            } return this._initted && !this._pt && f && or(this), this
    }, e.to = function (l, n) {
        return new e(l, n, arguments[2])
    }, e.from = function (l, n) {
        return hr(1, arguments)
    }, e.delayedCall = function (l, n, s, a) {
        return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: l,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }, e.fromTo = function (l, n, s) {
        return hr(2, arguments)
    }, e.set = function (l, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(l, n)
    }, e.killTweensOf = function (l, n, s) {
        return Ve.killTweensOf(l, n, s)
    }, e
}(vr);
it(ze.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
We("staggerTo,staggerFrom,staggerFromTo", function (i) {
    ze[i] = function () {
        var e = new Ge,
            r = ol.call(arguments, 0);
        return r.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, r)
    }
});
var Ml = function (e, r, t) {
        return e[r] = t
    },
    Es = function (e, r, t) {
        return e[r](t)
    },
    mo = function (e, r, t, l) {
        return e[r](l.fp, t)
    },
    go = function (e, r, t) {
        return e.setAttribute(r, t)
    },
    Al = function (e, r) {
        return Be(e[r]) ? Es : El(e[r]) && e.setAttribute ? go : Ml
    },
    Cs = function (e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
    },
    vo = function (e, r) {
        return r.set(r.t, r.p, !!(r.s + r.c * e), r)
    },
    $s = function (e, r) {
        var t = r._pt,
            l = "";
        if (!e && r.b) l = r.b;
        else if (e === 1 && r.e) l = r.e;
        else {
            for (; t;) l = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + l, t = t._next;
            l += r.c
        }
        r.set(r.t, r.p, l, r)
    },
    Ol = function (e, r) {
        for (var t = r._pt; t;) t.r(e, t.d), t = t._next
    },
    bo = function (e, r, t, l) {
        for (var n = this._pt, s; n;) s = n._next, n.p === l && n.modifier(e, r, t), n = s
    },
    yo = function (e) {
        for (var r = this._pt, t, l; r;) l = r._next, r.p === e && !r.op || r.op === e ? jr(this, r, "_pt") : r.dep || (t = 1), r = l;
        return !t
    },
    ko = function (e, r, t, l) {
        l.mSet(e, r, l.m.call(l.tween, t, l.mt), l)
    },
    Is = function (e) {
        for (var r = e._pt, t, l, n, s; r;) {
            for (t = r._next, l = n; l && l.pr > r.pr;) l = l._next;
            (r._prev = l ? l._prev : s) ? r._prev._next = r: n = r, (r._next = l) ? l._prev = r : s = r, r = t
        }
        e._pt = n
    },
    Ze = function () {
        function i(r, t, l, n, s, a, o, c, f) {
            this.t = t, this.s = n, this.c = s, this.p = l, this.r = a || Cs, this.d = o || this, this.set = c || Ml, this.pr = f || 0, this._next = r, r && (r._prev = this)
        }
        var e = i.prototype;
        return e.modifier = function (t, l, n) {
            this.mSet = this.mSet || this.set, this.set = ko, this.m = t, this.mt = n, this.tween = l
        }, i
    }();
We(Dl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (i) {
    return Il[i] = 1
});
xe.TweenMax = xe.TweenLite = ze;
xe.TimelineLite = xe.TimelineMax = Ge;
Ve = new Ge({
    sortChildren: !1,
    defaults: Qt,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Qe.stringFilter = ps;
var Lr = {
    registerPlugin: function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        r.forEach(function (l) {
            return lo(l)
        })
    },
    timeline: function (e) {
        return new Ge(e)
    },
    getTweensOf: function (e, r) {
        return Ve.getTweensOf(e, r)
    },
    getProperty: function (e, r, t, l) {
        Le(e) && (e = rt(e)[0]);
        var n = Nt(e || {}).get,
            s = t ? ts : es;
        return t === "native" && (t = ""), e && (r ? s((Ke[r] && Ke[r].get || n)(e, r, t, l)) : function (a, o, c) {
            return s((Ke[a] && Ke[a].get || n)(e, a, o, c))
        })
    },
    quickSetter: function (e, r, t) {
        if (e = rt(e), e.length > 1) {
            var l = e.map(function (f) {
                    return ot.quickSetter(f, r, t)
                }),
                n = l.length;
            return function (f) {
                for (var p = n; p--;) l[p](f)
            }
        }
        e = e[0] || {};
        var s = Ke[r],
            a = Nt(e),
            o = a.harness && (a.harness.aliases || {})[r] || r,
            c = s ? function (f) {
                var p = new s;
                Wt._pt = 0, p.init(e, t ? f + t : f, Wt, 0, [e]), p.render(1, p), Wt._pt && Ol(1, Wt)
            } : a.set(e, o);
        return s ? c : function (f) {
            return c(e, o, t ? f + t : f, a, 1)
        }
    },
    quickTo: function (e, r, t) {
        var l, n = ot.to(e, Ut((l = {}, l[r] = "+=0.1", l.paused = !0, l), t || {})),
            s = function (o, c, f) {
                return n.resetTo(r, o, c, f)
            };
        return s.tween = n, s
    },
    isTweening: function (e) {
        return Ve.getTweensOf(e, !0).length > 0
    },
    defaults: function (e) {
        return e && e.ease && (e.ease = Rt(e.ease, Qt.ease)), ti(Qt, e || {})
    },
    config: function (e) {
        return ti(Qe, e || {})
    },
    registerEffect: function (e) {
        var r = e.name,
            t = e.effect,
            l = e.plugins,
            n = e.defaults,
            s = e.extendTimeline;
        (l || "").split(",").forEach(function (a) {
            return a && !Ke[a] && !xe[a] && Ar(r + " effect requires " + a + " plugin.")
        }), Zr[r] = function (a, o, c) {
            return t(rt(a), it(o || {}, n), c)
        }, s && (Ge.prototype[r] = function (a, o, c) {
            return this.add(Zr[r](a, gt(o) ? o : (c = o) && {}, this), c)
        })
    },
    registerEase: function (e, r) {
        ve[e] = Rt(r)
    },
    parseEase: function (e, r) {
        return arguments.length ? Rt(e, r) : ve
    },
    getById: function (e) {
        return Ve.getById(e)
    },
    exportRoot: function (e, r) {
        e === void 0 && (e = {});
        var t = new Ge(e),
            l, n;
        for (t.smoothChildTiming = Ye(e.smoothChildTiming), Ve.remove(t), t._dp = 0, t._time = t._tTime = Ve._time, l = Ve._first; l;) n = l._next, (r || !(!l._dur && l instanceof ze && l.vars.onComplete === l._targets[0])) && ut(t, l, l._start - l._delay), l = n;
        return ut(Ve, t, 0), t
    },
    utils: {
        wrap: eo,
        wrapYoyo: to,
        distribute: os,
        random: us,
        snap: cs,
        normalize: xa,
        getUnit: Re,
        clamp: Za,
        splitColor: hs,
        toArray: rt,
        selector: Xa,
        mapRange: ds,
        pipe: Ja,
        unitize: Qa,
        interpolate: ro,
        shuffle: as
    },
    install: Kn,
    effects: Zr,
    ticker: Xe,
    updateRoot: Ge.updateRoot,
    plugins: Ke,
    globalTimeline: Ve,
    core: {
        PropTween: Ze,
        globals: Xn,
        Tween: ze,
        Timeline: Ge,
        Animation: vr,
        getCache: Nt,
        _removeLinkedListItem: jr,
        suppressOverwrites: function (e) {
            return wl = e
        }
    }
};
We("to,from,fromTo,delayedCall,set,killTweensOf", function (i) {
    return Lr[i] = ze[i]
});
Xe.add(Ge.updateRoot);
Wt = Lr.to({}, {
    duration: 0
});
var wo = function (e, r) {
        for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r;) t = t._next;
        return t
    },
    Eo = function (e, r) {
        var t = e._targets,
            l, n, s;
        for (l in r)
            for (n = t.length; n--;) s = e._ptLookup[n][l], s && (s = s.d) && (s._pt && (s = wo(s, l)), s && s.modifier && s.modifier(r[l], e, t[n], l))
    },
    Qr = function (e, r) {
        return {
            name: e,
            rawVars: 1,
            init: function (l, n, s) {
                s._onInit = function (a) {
                    var o, c;
                    if (Le(n) && (o = {}, We(n, function (f) {
                            return o[f] = 1
                        }), n = o), r) {
                        o = {};
                        for (c in n) o[c] = r(n[c]);
                        n = o
                    }
                    Eo(a, n)
                }
            }
        }
    },
    ot = Lr.registerPlugin({
        name: "attr",
        init: function (e, r, t, l, n) {
            var s, a;
            for (s in r) a = this.add(e, "setAttribute", (e.getAttribute(s) || 0) + "", r[s], l, n, 0, 0, s), a && (a.op = s), this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function (e, r) {
            for (var t = r.length; t--;) this.add(e, t, e[t] || 0, r[t])
        }
    }, Qr("roundProps", cl), Qr("modifiers"), Qr("snap", cs)) || Lr;
ze.version = Ge.version = ot.version = "3.10.4";
Zn = 1;
Hn() && tr();
ve.Power0;
ve.Power1;
var k_ = ve.Power2;
ve.Power3;
ve.Power4;
var Co = ve.Linear;
ve.Quad;
ve.Cubic;
ve.Quart;
ve.Quint;
ve.Strong;
ve.Elastic;
ve.Back;
ve.SteppedEase;
ve.Bounce;
ve.Sine;
ve.Expo;
ve.Circ;
var si, kt, Kt, zl, Lt, ai, $o = function () {
        return typeof window != "undefined"
    },
    Tt = {},
    zt = 180 / Math.PI,
    Xt = Math.PI / 180,
    Gt = Math.atan2,
    oi = 1e8,
    Ds = /([A-Z])/g,
    Io = /(left|right|width|margin|padding|x)/i,
    Do = /[\s,\(]\S/,
    wt = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Ts = function (e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    To = function (e, r) {
        return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    So = function (e, r) {
        return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
    },
    Vo = function (e, r) {
        var t = r.s + r.c * e;
        r.set(r.t, r.p, ~~(t + (t < 0 ? -.5 : .5)) + r.u, r)
    },
    Ss = function (e, r) {
        return r.set(r.t, r.p, e ? r.e : r.b, r)
    },
    Vs = function (e, r) {
        return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
    },
    Po = function (e, r, t) {
        return e.style[r] = t
    },
    Mo = function (e, r, t) {
        return e.style.setProperty(r, t)
    },
    Ao = function (e, r, t) {
        return e._gsap[r] = t
    },
    Oo = function (e, r, t) {
        return e._gsap.scaleX = e._gsap.scaleY = t
    },
    zo = function (e, r, t, l, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = t, s.renderTransform(n, s)
    },
    Bo = function (e, r, t, l, n) {
        var s = e._gsap;
        s[r] = t, s.renderTransform(n, s)
    },
    Ne = "transform",
    St = Ne + "Origin",
    Ps, fl = function (e, r) {
        var t = kt.createElementNS ? kt.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : kt.createElement(e);
        return t.style ? t : kt.createElement(e)
    },
    pt = function i(e, r, t) {
        var l = getComputedStyle(e);
        return l[r] || l.getPropertyValue(r.replace(Ds, "-$1").toLowerCase()) || l.getPropertyValue(r) || !t && i(e, rr(r) || r, 1) || ""
    },
    ci = "O,Moz,ms,Ms,Webkit".split(","),
    rr = function (e, r, t) {
        var l = r || Lt,
            n = l.style,
            s = 5;
        if (e in n && !t) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(ci[s] + e in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? ci[s] : "") + e
    },
    dl = function () {
        $o() && window.document && (si = window, kt = si.document, Kt = kt.documentElement, Lt = fl("div") || {
            style: {}
        }, fl("div"), Ne = rr(Ne), St = Ne + "Origin", Lt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ps = !!rr("perspective"), zl = 1)
    },
    xr = function i(e) {
        var r = fl("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            t = this.parentNode,
            l = this.nextSibling,
            n = this.style.cssText,
            s;
        if (Kt.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = i
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return t && (l ? t.insertBefore(this, l) : t.appendChild(this)), Kt.removeChild(r), this.style.cssText = n, s
    },
    ui = function (e, r) {
        for (var t = r.length; t--;)
            if (e.hasAttribute(r[t])) return e.getAttribute(r[t])
    },
    Ms = function (e) {
        var r;
        try {
            r = e.getBBox()
        } catch {
            r = xr.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === xr || (r = xr.call(e, !0)), r && !r.width && !r.x && !r.y ? {
            x: +ui(e, ["x", "cx", "x1"]) || 0,
            y: +ui(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : r
    },
    As = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ms(e))
    },
    br = function (e, r) {
        if (r) {
            var t = e.style;
            r in Tt && r !== St && (r = Ne), t.removeProperty ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), t.removeProperty(r.replace(Ds, "-$1").toLowerCase())) : t.removeAttribute(r)
        }
    },
    Et = function (e, r, t, l, n, s) {
        var a = new Ze(e._pt, r, t, 0, 1, s ? Vs : Ss);
        return e._pt = a, a.b = l, a.e = n, e._props.push(t), a
    },
    fi = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    Vt = function i(e, r, t, l) {
        var n = parseFloat(t) || 0,
            s = (t + "").trim().substr((n + "").length) || "px",
            a = Lt.style,
            o = Io.test(r),
            c = e.tagName.toLowerCase() === "svg",
            f = (c ? "client" : "offset") + (o ? "Width" : "Height"),
            p = 100,
            h = l === "px",
            v = l === "%",
            _, m, b, y;
        return l === s || !n || fi[l] || fi[s] ? n : (s !== "px" && !h && (n = i(e, r, t, "px")), y = e.getCTM && As(e), (v || s === "%") && (Tt[r] || ~r.indexOf("adius")) ? (_ = y ? e.getBBox()[o ? "width" : "height"] : e[f], Me(v ? n / _ * p : n / 100 * _)) : (a[o ? "width" : "height"] = p + (h ? s : l), m = ~r.indexOf("adius") || l === "em" && e.appendChild && !c ? e : e.parentNode, y && (m = (e.ownerSVGElement || {}).parentNode), (!m || m === kt || !m.appendChild) && (m = kt.body), b = m._gsap, b && v && b.width && o && b.time === Xe.time ? Me(n / b.width * p) : ((v || s === "%") && (a.position = pt(e, "position")), m === e && (a.position = "static"), m.appendChild(Lt), _ = Lt[f], m.removeChild(Lt), a.position = "absolute", o && v && (b = Nt(m), b.time = Xe.time, b.width = m[f]), Me(h ? _ * n / p : _ && n ? p / _ * n : 0))))
    },
    Bt = function (e, r, t, l) {
        var n;
        return zl || dl(), r in wt && r !== "transform" && (r = wt[r], ~r.indexOf(",") && (r = r.split(",")[0])), Tt[r] && r !== "transform" ? (n = kr(e, l), n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : Fr(pt(e, St)) + " " + n.zOrigin + "px") : (n = e.style[r], (!n || n === "auto" || l || ~(n + "").indexOf("calc(")) && (n = Nr[r] && Nr[r](e, r, t) || pt(e, r) || Qn(e, r) || (r === "opacity" ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? Vt(e, r, n, t) + t : n
    },
    Lo = function (e, r, t, l) {
        if (!t || t === "none") {
            var n = rr(r, e, 1),
                s = n && pt(e, n, 1);
            s && s !== t ? (r = n, t = s) : r === "borderColor" && (t = pt(e, "borderTopColor"))
        }
        var a = new Ze(this._pt, e.style, r, 0, 1, $s),
            o = 0,
            c = 0,
            f, p, h, v, _, m, b, y, k, $, I, D;
        if (a.b = t, a.e = l, t += "", l += "", l === "auto" && (e.style[r] = l, l = pt(e, r) || l, e.style[r] = t), f = [t, l], ps(f), t = f[0], l = f[1], h = t.match(Yt) || [], D = l.match(Yt) || [], D.length) {
            for (; p = Yt.exec(l);) b = p[0], k = l.substring(o, p.index), _ ? _ = (_ + 1) % 5 : (k.substr(-5) === "rgba(" || k.substr(-5) === "hsla(") && (_ = 1), b !== (m = h[c++] || "") && (v = parseFloat(m) || 0, I = m.substr((v + "").length), b.charAt(1) === "=" && (b = Zt(v, b) + I), y = parseFloat(b), $ = b.substr((y + "").length), o = Yt.lastIndex - $.length, $ || ($ = $ || Qe.units[r] || I, o === l.length && (l += $, a.e += $)), I !== $ && (v = Vt(e, r, m, $) || 0), a._pt = {
                _next: a._pt,
                p: k || c === 1 ? k : ",",
                s: v,
                c: y - v,
                m: _ && _ < 4 || r === "zIndex" ? Math.round : 0
            });
            a.c = o < l.length ? l.substring(o, l.length) : ""
        } else a.r = r === "display" && l === "none" ? Vs : Ss;
        return Yn.test(l) && (a.e = 0), this._pt = a, a
    },
    di = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    No = function (e) {
        var r = e.split(" "),
            t = r[0],
            l = r[1] || "50%";
        return (t === "top" || t === "bottom" || l === "left" || l === "right") && (e = t, t = l, l = e), r[0] = di[t] || t, r[1] = di[l] || l, r.join(" ")
    },
    Fo = function (e, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var t = r.t,
                l = t.style,
                n = r.u,
                s = t._gsap,
                a, o, c;
            if (n === "all" || n === !0) l.cssText = "", o = 1;
            else
                for (n = n.split(","), c = n.length; --c > -1;) a = n[c], Tt[a] && (o = 1, a = a === "transformOrigin" ? St : Ne), br(t, a);
            o && (br(t, Ne), s && (s.svg && t.removeAttribute("transform"), kr(t, 1), s.uncache = 1))
        }
    },
    Nr = {
        clearProps: function (e, r, t, l, n) {
            if (n.data !== "isFromStart") {
                var s = e._pt = new Ze(e._pt, r, t, 0, 0, Fo);
                return s.u = l, s.pr = -10, s.tween = n, e._props.push(t), 1
            }
        }
    },
    yr = [1, 0, 0, 1, 0, 0],
    Os = {},
    zs = function (e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    hi = function (e) {
        var r = pt(e, Ne);
        return zs(r) ? yr : r.substr(7).match(Gn).map(Me)
    },
    Bl = function (e, r) {
        var t = e._gsap || Nt(e),
            l = e.style,
            n = hi(e),
            s, a, o, c;
        return t.svg && e.getAttribute("transform") ? (o = e.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? yr : n) : (n === yr && !e.offsetParent && e !== Kt && !t.svg && (o = l.display, l.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (c = 1, a = e.nextSibling, Kt.appendChild(e)), n = hi(e), o ? l.display = o : br(e, "display"), c && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : Kt.removeChild(e))), r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    hl = function (e, r, t, l, n, s) {
        var a = e._gsap,
            o = n || Bl(e, !0),
            c = a.xOrigin || 0,
            f = a.yOrigin || 0,
            p = a.xOffset || 0,
            h = a.yOffset || 0,
            v = o[0],
            _ = o[1],
            m = o[2],
            b = o[3],
            y = o[4],
            k = o[5],
            $ = r.split(" "),
            I = parseFloat($[0]) || 0,
            D = parseFloat($[1]) || 0,
            T, z, A, B;
        t ? o !== yr && (z = v * b - _ * m) && (A = I * (b / z) + D * (-m / z) + (m * k - b * y) / z, B = I * (-_ / z) + D * (v / z) - (v * k - _ * y) / z, I = A, D = B) : (T = Ms(e), I = T.x + (~$[0].indexOf("%") ? I / 100 * T.width : I), D = T.y + (~($[1] || $[0]).indexOf("%") ? D / 100 * T.height : D)), l || l !== !1 && a.smooth ? (y = I - c, k = D - f, a.xOffset = p + (y * v + k * m) - y, a.yOffset = h + (y * _ + k * b) - k) : a.xOffset = a.yOffset = 0, a.xOrigin = I, a.yOrigin = D, a.smooth = !!l, a.origin = r, a.originIsAbsolute = !!t, e.style[St] = "0px 0px", s && (Et(s, a, "xOrigin", c, I), Et(s, a, "yOrigin", f, D), Et(s, a, "xOffset", p, a.xOffset), Et(s, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", I + " " + D)
    },
    kr = function (e, r) {
        var t = e._gsap || new bs(e);
        if ("x" in t && !r && !t.uncache) return t;
        var l = e.style,
            n = t.scaleX < 0,
            s = "px",
            a = "deg",
            o = pt(e, St) || "0",
            c, f, p, h, v, _, m, b, y, k, $, I, D, T, z, A, B, V, L, O, R, j, G, X, Y, ee, q, x, re, te, H, K;
        return c = f = p = _ = m = b = y = k = $ = 0, h = v = 1, t.svg = !!(e.getCTM && As(e)), T = Bl(e, t.svg), t.svg && (X = (!t.uncache || o === "0px 0px") && !r && e.getAttribute("data-svg-origin"), hl(e, X || o, !!X || t.originIsAbsolute, t.smooth !== !1, T)), I = t.xOrigin || 0, D = t.yOrigin || 0, T !== yr && (V = T[0], L = T[1], O = T[2], R = T[3], c = j = T[4], f = G = T[5], T.length === 6 ? (h = Math.sqrt(V * V + L * L), v = Math.sqrt(R * R + O * O), _ = V || L ? Gt(L, V) * zt : 0, y = O || R ? Gt(O, R) * zt + _ : 0, y && (v *= Math.abs(Math.cos(y * Xt))), t.svg && (c -= I - (I * V + D * O), f -= D - (I * L + D * R))) : (K = T[6], te = T[7], q = T[8], x = T[9], re = T[10], H = T[11], c = T[12], f = T[13], p = T[14], z = Gt(K, re), m = z * zt, z && (A = Math.cos(-z), B = Math.sin(-z), X = j * A + q * B, Y = G * A + x * B, ee = K * A + re * B, q = j * -B + q * A, x = G * -B + x * A, re = K * -B + re * A, H = te * -B + H * A, j = X, G = Y, K = ee), z = Gt(-O, re), b = z * zt, z && (A = Math.cos(-z), B = Math.sin(-z), X = V * A - q * B, Y = L * A - x * B, ee = O * A - re * B, H = R * B + H * A, V = X, L = Y, O = ee), z = Gt(L, V), _ = z * zt, z && (A = Math.cos(z), B = Math.sin(z), X = V * A + L * B, Y = j * A + G * B, L = L * A - V * B, G = G * A - j * B, V = X, j = Y), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, b = 180 - b), h = Me(Math.sqrt(V * V + L * L + O * O)), v = Me(Math.sqrt(G * G + K * K)), z = Gt(j, G), y = Math.abs(z) > 2e-4 ? z * zt : 0, $ = H ? 1 / (H < 0 ? -H : H) : 0), t.svg && (X = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !zs(pt(e, Ne)), X && e.setAttribute("transform", X))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (h *= -1, y += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (v *= -1, y += y <= 0 ? 180 : -180)), r = r || t.uncache, t.x = c - ((t.xPercent = c && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + s, t.y = f - ((t.yPercent = f && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + s, t.z = p + s, t.scaleX = Me(h), t.scaleY = Me(v), t.rotation = Me(_) + a, t.rotationX = Me(m) + a, t.rotationY = Me(b) + a, t.skewX = y + a, t.skewY = k + a, t.transformPerspective = $ + s, (t.zOrigin = parseFloat(o.split(" ")[2]) || 0) && (l[St] = Fr(o)), t.xOffset = t.yOffset = 0, t.force3D = Qe.force3D, t.renderTransform = t.svg ? jo : Ps ? Bs : Ro, t.uncache = 0, t
    },
    Fr = function (e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    el = function (e, r, t) {
        var l = Re(r);
        return Me(parseFloat(r) + parseFloat(Vt(e, "x", t + "px", l))) + l
    },
    Ro = function (e, r) {
        r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, Bs(e, r)
    },
    At = "0deg",
    ar = "0px",
    Ot = ") ",
    Bs = function (e, r) {
        var t = r || this,
            l = t.xPercent,
            n = t.yPercent,
            s = t.x,
            a = t.y,
            o = t.z,
            c = t.rotation,
            f = t.rotationY,
            p = t.rotationX,
            h = t.skewX,
            v = t.skewY,
            _ = t.scaleX,
            m = t.scaleY,
            b = t.transformPerspective,
            y = t.force3D,
            k = t.target,
            $ = t.zOrigin,
            I = "",
            D = y === "auto" && e && e !== 1 || y === !0;
        if ($ && (p !== At || f !== At)) {
            var T = parseFloat(f) * Xt,
                z = Math.sin(T),
                A = Math.cos(T),
                B;
            T = parseFloat(p) * Xt, B = Math.cos(T), s = el(k, s, z * B * -$), a = el(k, a, -Math.sin(T) * -$), o = el(k, o, A * B * -$ + $)
        }
        b !== ar && (I += "perspective(" + b + Ot), (l || n) && (I += "translate(" + l + "%, " + n + "%) "), (D || s !== ar || a !== ar || o !== ar) && (I += o !== ar || D ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Ot), c !== At && (I += "rotate(" + c + Ot), f !== At && (I += "rotateY(" + f + Ot), p !== At && (I += "rotateX(" + p + Ot), (h !== At || v !== At) && (I += "skew(" + h + ", " + v + Ot), (_ !== 1 || m !== 1) && (I += "scale(" + _ + ", " + m + Ot), k.style[Ne] = I || "translate(0, 0)"
    },
    jo = function (e, r) {
        var t = r || this,
            l = t.xPercent,
            n = t.yPercent,
            s = t.x,
            a = t.y,
            o = t.rotation,
            c = t.skewX,
            f = t.skewY,
            p = t.scaleX,
            h = t.scaleY,
            v = t.target,
            _ = t.xOrigin,
            m = t.yOrigin,
            b = t.xOffset,
            y = t.yOffset,
            k = t.forceCSS,
            $ = parseFloat(s),
            I = parseFloat(a),
            D, T, z, A, B;
        o = parseFloat(o), c = parseFloat(c), f = parseFloat(f), f && (f = parseFloat(f), c += f, o += f), o || c ? (o *= Xt, c *= Xt, D = Math.cos(o) * p, T = Math.sin(o) * p, z = Math.sin(o - c) * -h, A = Math.cos(o - c) * h, c && (f *= Xt, B = Math.tan(c - f), B = Math.sqrt(1 + B * B), z *= B, A *= B, f && (B = Math.tan(f), B = Math.sqrt(1 + B * B), D *= B, T *= B)), D = Me(D), T = Me(T), z = Me(z), A = Me(A)) : (D = p, A = h, T = z = 0), ($ && !~(s + "").indexOf("px") || I && !~(a + "").indexOf("px")) && ($ = Vt(v, "x", s, "px"), I = Vt(v, "y", a, "px")), (_ || m || b || y) && ($ = Me($ + _ - (_ * D + m * z) + b), I = Me(I + m - (_ * T + m * A) + y)), (l || n) && (B = v.getBBox(), $ = Me($ + l / 100 * B.width), I = Me(I + n / 100 * B.height)), B = "matrix(" + D + "," + T + "," + z + "," + A + "," + $ + "," + I + ")", v.setAttribute("transform", B), k && (v.style[Ne] = B)
    },
    Uo = function (e, r, t, l, n) {
        var s = 360,
            a = Le(n),
            o = parseFloat(n) * (a && ~n.indexOf("rad") ? zt : 1),
            c = o - l,
            f = l + c + "deg",
            p, h;
        return a && (p = n.split("_")[1], p === "short" && (c %= s, c !== c % (s / 2) && (c += c < 0 ? s : -s)), p === "cw" && c < 0 ? c = (c + s * oi) % s - ~~(c / s) * s : p === "ccw" && c > 0 && (c = (c - s * oi) % s - ~~(c / s) * s)), e._pt = h = new Ze(e._pt, r, t, l, c, To), h.e = f, h.u = "deg", e._props.push(t), h
    },
    _i = function (e, r) {
        for (var t in r) e[t] = r[t];
        return e
    },
    Ho = function (e, r, t) {
        var l = _i({}, t._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = t.style,
            a, o, c, f, p, h, v, _;
        l.svg ? (c = t.getAttribute("transform"), t.setAttribute("transform", ""), s[Ne] = r, a = kr(t, 1), br(t, Ne), t.setAttribute("transform", c)) : (c = getComputedStyle(t)[Ne], s[Ne] = r, a = kr(t, 1), s[Ne] = c);
        for (o in Tt) c = l[o], f = a[o], c !== f && n.indexOf(o) < 0 && (v = Re(c), _ = Re(f), p = v !== _ ? Vt(t, o, c, _) : parseFloat(c), h = parseFloat(f), e._pt = new Ze(e._pt, a, o, p, h - p, Ts), e._pt.u = _ || 0, e._props.push(o));
        _i(a, l)
    };
We("padding,margin,Width,Radius", function (i, e) {
    var r = "Top",
        t = "Right",
        l = "Bottom",
        n = "Left",
        s = (e < 3 ? [r, t, l, n] : [r + n, r + t, l + t, l + n]).map(function (a) {
            return e < 2 ? i + a : "border" + a + i
        });
    Nr[e > 1 ? "border" + i : i] = function (a, o, c, f, p) {
        var h, v;
        if (arguments.length < 4) return h = s.map(function (_) {
            return Bt(a, _, c)
        }), v = h.join(" "), v.split(h[0]).length === 5 ? h[0] : v;
        h = (f + "").split(" "), v = {}, s.forEach(function (_, m) {
            return v[_] = h[m] = h[m] || h[(m - 1) / 2 | 0]
        }), a.init(o, v, p)
    }
});
var Ls = {
    name: "css",
    register: dl,
    targetTest: function (e) {
        return e.style && e.nodeType
    },
    init: function (e, r, t, l, n) {
        var s = this._props,
            a = e.style,
            o = t.vars.startAt,
            c, f, p, h, v, _, m, b, y, k, $, I, D, T, z;
        zl || dl();
        for (m in r)
            if (m !== "autoRound" && (f = r[m], !(Ke[m] && ys(m, r, t, l, e, n)))) {
                if (v = typeof f, _ = Nr[m], v === "function" && (f = f.call(t, l, e, n), v = typeof f), v === "string" && ~f.indexOf("random(") && (f = mr(f)), _) _(this, e, m, f, t) && (z = 1);
                else if (m.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(m) + "").trim(), f += "", Dt.lastIndex = 0, Dt.test(c) || (b = Re(c), y = Re(f)), y ? b !== y && (c = Vt(e, m, c, y) + y) : b && (f += b), this.add(a, "setProperty", c, f, l, n, 0, 0, m), s.push(m);
                else if (v !== "undefined") {
                    if (o && m in o ? (c = typeof o[m] == "function" ? o[m].call(t, l, e, n) : o[m], Le(c) && ~c.indexOf("random(") && (c = mr(c)), Re(c + "") || (c += Qe.units[m] || Re(Bt(e, m)) || ""), (c + "").charAt(1) === "=" && (c = Bt(e, m))) : c = Bt(e, m), h = parseFloat(c), k = v === "string" && f.charAt(1) === "=" && f.substr(0, 2), k && (f = f.substr(2)), p = parseFloat(f), m in wt && (m === "autoAlpha" && (h === 1 && Bt(e, "visibility") === "hidden" && p && (h = 0), Et(this, a, "visibility", h ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), m !== "scale" && m !== "transform" && (m = wt[m], ~m.indexOf(",") && (m = m.split(",")[0]))), $ = m in Tt, $) {
                        if (I || (D = e._gsap, D.renderTransform && !r.parseTransform || kr(e, r.parseTransform), T = r.smoothOrigin !== !1 && D.smooth, I = this._pt = new Ze(this._pt, a, Ne, 0, 1, D.renderTransform, D, 0, -1), I.dep = 1), m === "scale") this._pt = new Ze(this._pt, D, "scaleY", D.scaleY, (k ? Zt(D.scaleY, k + p) : p) - D.scaleY || 0), s.push("scaleY", m), m += "X";
                        else if (m === "transformOrigin") {
                            f = No(f), D.svg ? hl(e, f, 0, T, 0, this) : (y = parseFloat(f.split(" ")[2]) || 0, y !== D.zOrigin && Et(this, D, "zOrigin", D.zOrigin, y), Et(this, a, m, Fr(c), Fr(f)));
                            continue
                        } else if (m === "svgOrigin") {
                            hl(e, f, 1, T, 0, this);
                            continue
                        } else if (m in Os) {
                            Uo(this, D, m, h, k ? Zt(h, k + f) : f);
                            continue
                        } else if (m === "smoothOrigin") {
                            Et(this, D, "smooth", D.smooth, f);
                            continue
                        } else if (m === "force3D") {
                            D[m] = f;
                            continue
                        } else if (m === "transform") {
                            Ho(this, f, e);
                            continue
                        }
                    } else m in a || (m = rr(m) || m);
                    if ($ || (p || p === 0) && (h || h === 0) && !Do.test(f) && m in a) b = (c + "").substr((h + "").length), p || (p = 0), y = Re(f) || (m in Qe.units ? Qe.units[m] : b), b !== y && (h = Vt(e, m, c, y)), this._pt = new Ze(this._pt, $ ? D : a, m, h, (k ? Zt(h, k + p) : p) - h, !$ && (y === "px" || m === "zIndex") && r.autoRound !== !1 ? Vo : Ts), this._pt.u = y || 0, b !== y && y !== "%" && (this._pt.b = c, this._pt.r = So);
                    else if (m in a) Lo.call(this, e, m, c, k ? k + f : f);
                    else if (m in e) this.add(e, m, c || e[m], k ? k + f : f, l, n);
                    else {
                        $l(m, f);
                        continue
                    }
                    s.push(m)
                }
            } z && Is(this)
    },
    get: Bt,
    aliases: wt,
    getSetter: function (e, r, t) {
        var l = wt[r];
        return l && l.indexOf(",") < 0 && (r = l), r in Tt && r !== St && (e._gsap.x || Bt(e, "x")) ? t && ai === t ? r === "scale" ? Oo : Ao : (ai = t || {}) && (r === "scale" ? zo : Bo) : e.style && !El(e.style[r]) ? Po : ~r.indexOf("-") ? Mo : Al(e, r)
    },
    core: {
        _removeProperty: br,
        _getMatrix: Bl
    }
};
ot.utils.checkPrefix = rr;
(function (i, e, r, t) {
    var l = We(i + "," + e + "," + r, function (n) {
        Tt[n] = 1
    });
    We(e, function (n) {
        Qe.units[n] = "deg", Os[n] = 1
    }), wt[l[13]] = i + "," + e, We(t, function (n) {
        var s = n.split(":");
        wt[s[1]] = l[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
We("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (i) {
    Qe.units[i] = "px"
});
ot.registerPlugin(Ls);
var Sr = ot.registerPlugin(Ls) || ot;
Sr.core.Tween;
var Vr = (i => (i[i.topic = 1] = "topic", i[i.disclaimer = 2] = "disclaimer", i[i.fill = 3] = "fill", i))(Vr || {}),
    dt = (i => (i[i.business = 1] = "business", i[i.service = 2] = "service", i[i.wallet = 3] = "wallet", i[i.information = 4] = "information", i[i.communications = 5] = "communications", i[i.job = 6] = "job", i[i.exchange = 7] = "exchange", i[i.other = 8] = "other", i))(dt || {});

function pi(i, e, r) {
    const t = i.slice();
    return t[11] = e[r], t
}

function mi(i) {
    let e, r, t, l;
    const n = [Wo, Yo, Go, qo],
        s = [];

    function a(o, c) {
        return o[0][0].fields.type == "fast news" ? 0 : o[0][0].type == "tab" ? 1 : o[0][0].fields.type == "paginated list card" ? 2 : 3
    }
    return e = a(i), r = s[e] = n[e](i), {
        c() {
            r.c(), t = J()
        },
        l(o) {
            r.l(o), t = J()
        },
        m(o, c) {
            s[e].m(o, c), S(o, t, c), l = !0
        },
        p(o, c) {
            let f = e;
            e = a(o), e === f ? s[e].p(o, c) : (ke(), F(s[f], 1, 1, () => {
                s[f] = null
            }), we(), r = s[e], r ? r.p(o, c) : (r = s[e] = n[e](o), r.c()), N(r, 1), r.m(t.parentNode, t))
        },
        i(o) {
            l || (N(r), l = !0)
        },
        o(o) {
            F(r), l = !1
        },
        d(o) {
            s[e].d(o), o && d(t)
        }
    }
}

function qo(i) {
    let e, r, t = i[0],
        l = [];
    for (let s = 0; s < t.length; s += 1) l[s] = vi(pi(i, t, s));
    const n = s => F(l[s], 1, 1, () => {
        l[s] = null
    });
    return {
        c() {
            for (let s = 0; s < l.length; s += 1) l[s].c();
            e = J()
        },
        l(s) {
            for (let a = 0; a < l.length; a += 1) l[a].l(s);
            e = J()
        },
        m(s, a) {
            for (let o = 0; o < l.length; o += 1) l[o].m(s, a);
            S(s, e, a), r = !0
        },
        p(s, a) {
            if (a & 1) {
                t = s[0];
                let o;
                for (o = 0; o < t.length; o += 1) {
                    const c = pi(s, t, o);
                    l[o] ? (l[o].p(c, a), N(l[o], 1)) : (l[o] = vi(c), l[o].c(), N(l[o], 1), l[o].m(e.parentNode, e))
                }
                for (ke(), o = t.length; o < l.length; o += 1) n(o);
                we()
            }
        },
        i(s) {
            if (!r) {
                for (let a = 0; a < t.length; a += 1) N(l[a]);
                r = !0
            }
        },
        o(s) {
            l = l.filter(Boolean);
            for (let a = 0; a < l.length; a += 1) F(l[a]);
            r = !1
        },
        d(s) {
            De(l, s), s && d(e)
        }
    }
}

function Go(i) {
    let e, r;
    return e = new Er({
        props: {
            props: {
                elements: i[0],
                elementsType: "paginated list card",
                itemsPerPage: 10
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, l) {
            const n = {};
            l & 1 && (n.props = {
                elements: t[0],
                elementsType: "paginated list card",
                itemsPerPage: 10
            }), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Yo(i) {
    let e, r;
    return e = new md({
        props: {
            props: {
                tabs: i[0]
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, l) {
            const n = {};
            l & 1 && (n.props = {
                tabs: t[0]
            }), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Wo(i) {
    let e, r;
    return e = new js({
        props: {
            props: {
                entries: i[0]
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, l) {
            const n = {};
            l & 1 && (n.props = {
                entries: t[0]
            }), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function gi(i) {
    let e, r;
    return e = new Hr({
        props: {
            componentData: i[11]
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, l) {
            const n = {};
            l & 1 && (n.componentData = t[11]), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function vi(i) {
    let e, r, t = i[11] && gi(i);
    return {
        c() {
            t && t.c(), e = J()
        },
        l(l) {
            t && t.l(l), e = J()
        },
        m(l, n) {
            t && t.m(l, n), S(l, e, n), r = !0
        },
        p(l, n) {
            l[11] ? t ? (t.p(l, n), n & 1 && N(t, 1)) : (t = gi(l), t.c(), N(t, 1), t.m(e.parentNode, e)) : t && (ke(), F(t, 1, 1, () => {
                t = null
            }), we())
        },
        i(l) {
            r || (N(t), r = !0)
        },
        o(l) {
            F(t), r = !1
        },
        d(l) {
            t && t.d(l), l && d(e)
        }
    }
}

function Zo(i) {
    let e, r, t, l = i[0] && i[0].length > 0 && mi(i);
    return {
        c() {
            e = E("div"), l && l.c(), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0,
                style: !0
            });
            var s = w(e);
            l && l.l(s), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", r = "row " + (i[7] || "") + " " + (i[3] ? i[5] && i[4] === 2 ? "justify-center" : "justify-baseline" : i[6] == "center" ? "justify-center" : "justify-between") + " svelte-1xwyt96"), u(e, "style", (i[8] != null ? `padding-top: ${i[8]}px;` : "") + " " + (i[9] != null ? `padding-bottom: ${i[9]}px;` : "")), Q(e, "items-center", i[2]), Q(e, "hasTitleOverflow", i[1])
        },
        m(n, s) {
            S(n, e, s), l && l.m(e, null), t = !0
        },
        p(n, [s]) {
            n[0] && n[0].length > 0 ? l ? (l.p(n, s), s & 1 && N(l, 1)) : (l = mi(n), l.c(), N(l, 1), l.m(e, null)) : l && (ke(), F(l, 1, 1, () => {
                l = null
            }), we()), (!t || s & 56 && r !== (r = "row " + (n[7] || "") + " " + (n[3] ? n[5] && n[4] === 2 ? "justify-center" : "justify-baseline" : n[6] == "center" ? "justify-center" : "justify-between") + " svelte-1xwyt96")) && u(e, "class", r), s & 60 && Q(e, "items-center", n[2]), s & 58 && Q(e, "hasTitleOverflow", n[1])
        },
        i(n) {
            t || (N(l), t = !0)
        },
        o(n) {
            F(l), t = !1
        },
        d(n) {
            n && d(e), l && l.d()
        }
    }
}

function Ko(i, e, r) {
    let {
        props: t
    } = e;
    const {
        contentAlignment: l,
        width: n,
        paddingTop: s,
        paddingBottom: a
    } = t;
    let {
        elements: o
    } = t, c = !1, f = !1, p = !1, h = 0, v = !1;
    return o && o.length > 0 && (o = o.filter(_ => _.sys.contentType).map(_ => ({
        id: _.sys.id,
        type: _.sys.contentType.sys.id,
        fields: _.fields
    }))), o && o.length > 0 && (o.forEach(_ => {
        _.fields && _.fields.type && _.fields.type == "title-overflow" && r(1, c = !0), _.fields && _.fields.type && _.fields.type == "intercalated" && r(2, f = !0), _ && _.type && _.type == "card" && (r(3, p = !0), r(4, h++, h))
    }), p && (o = o.map(_ => _ && _.type && _.type == "card" ? (_.fields.type === "ghost" && r(5, v = !0), ft(Oe({}, _), {
        fields: ft(Oe({}, _.fields), {
            cardsCounter: h,
            rowWidth: n ? +n.substring(n.indexOf("-") + 1) : null
        })
    })) : _))), i.$$set = _ => {
        "props" in _ && r(10, t = _.props)
    }, [o, c, f, p, h, v, l, n, s, a, t]
}
class Ll extends ue {
    constructor(e) {
        super(), fe(this, e, Ko, Zo, de, {
            props: 10
        })
    }
}
var Ns = oa.exports;
const Xo = [{
    country_code: "AF",
    country_name: "Afghanistan",
    dialling_code: "+93"
}, {
    country_code: "AL",
    country_name: "Albania",
    dialling_code: "+355"
}, {
    country_code: "DZ",
    country_name: "Algeria",
    dialling_code: "+213"
}, {
    country_code: "AS",
    country_name: "American Samoa",
    dialling_code: "+1"
}, {
    country_code: "AD",
    country_name: "Andorra",
    dialling_code: "+376"
}, {
    country_code: "AO",
    country_name: "Angola",
    dialling_code: "+244"
}, {
    country_code: "AI",
    country_name: "Anguilla",
    dialling_code: "+1"
}, {
    country_code: "AG",
    country_name: "Antigua",
    dialling_code: "+1"
}, {
    country_code: "AR",
    country_name: "Argentina",
    dialling_code: "+54"
}, {
    country_code: "AM",
    country_name: "Armenia",
    dialling_code: "+374"
}, {
    country_code: "AW",
    country_name: "Aruba",
    dialling_code: "+297"
}, {
    country_code: "AU",
    country_name: "Australia",
    dialling_code: "+61"
}, {
    country_code: "AI",
    country_name: "Austria",
    dialling_code: "+43"
}, {
    country_code: "AZ",
    country_name: "Azerbaijan",
    dialling_code: "+994"
}, {
    country_code: "BH",
    country_name: "Bahrain",
    dialling_code: "+973"
}, {
    country_code: "BD",
    country_name: "Bangladesh",
    dialling_code: "+880"
}, {
    country_code: "BB",
    country_name: "Barbados",
    dialling_code: "+1"
}, {
    country_code: "BY",
    country_name: "Belarus",
    dialling_code: "+375"
}, {
    country_code: "BE",
    country_name: "Belgium",
    dialling_code: "+32"
}, {
    country_code: "BZ",
    country_name: "Belize",
    dialling_code: "+501"
}, {
    country_code: "BJ",
    country_name: "Benin",
    dialling_code: "+229"
}, {
    country_code: "BM",
    country_name: "Bermuda",
    dialling_code: "+1"
}, {
    country_code: "BT",
    country_name: "Bhutan",
    dialling_code: "+975"
}, {
    country_code: "BO",
    country_name: "Bolivia",
    dialling_code: "+591"
}, {
    country_code: "BA",
    country_name: "Bosnia and Herzegovina",
    dialling_code: "+387"
}, {
    country_code: "BW",
    country_name: "Botswana",
    dialling_code: "+267"
}, {
    country_code: "BR",
    country_name: "Brazil",
    dialling_code: "+55"
}, {
    country_code: "IO",
    country_name: "British Indian Ocean Territory",
    dialling_code: "+246"
}, {
    country_code: "VG",
    country_name: "British Virgin Islands",
    dialling_code: "+1"
}, {
    country_code: "BN",
    country_name: "Brunei",
    dialling_code: "+673"
}, {
    country_code: "BG",
    country_name: "Bulgaria",
    dialling_code: "+359"
}, {
    country_code: "BF",
    country_name: "Burkina Faso",
    dialling_code: "+226"
}, {
    country_code: "MM",
    country_name: "Burma Myanmar",
    dialling_code: "+95"
}, {
    country_code: "BI",
    country_name: "Burundi",
    dialling_code: "+257"
}, {
    country_code: "KH",
    country_name: "Cambodia",
    dialling_code: "+855"
}, {
    country_code: "CM",
    country_name: "Cameroon",
    dialling_code: "+237"
}, {
    country_code: "CA",
    country_name: "Canada",
    dialling_code: "+1"
}, {
    country_code: "CV",
    country_name: "Cape Verde",
    dialling_code: "+238"
}, {
    country_code: "KY",
    country_name: "Cayman Islands",
    dialling_code: "+1"
}, {
    country_code: "CF",
    country_name: "Central African Republic",
    dialling_code: "+236"
}, {
    country_code: "ID",
    country_name: "Chad",
    dialling_code: "+235"
}, {
    country_code: "CL",
    country_name: "Chile",
    dialling_code: "+56"
}, {
    country_code: "CN",
    country_name: "China",
    dialling_code: "+86"
}, {
    country_code: "CO",
    country_name: "Colombia",
    dialling_code: "+57"
}, {
    country_code: "KM",
    country_name: "Comoros",
    dialling_code: "+269"
}, {
    country_code: "CK",
    country_name: "Cook Islands",
    dialling_code: "+682"
}, {
    country_code: "CR",
    country_name: "Costa Rica",
    dialling_code: "+506"
}, {
    country_code: "CI",
    country_name: "C\xF4te d'Ivoire",
    dialling_code: "+225"
}, {
    country_code: "HR",
    country_name: "Croatia",
    dialling_code: "+385"
}, {
    country_code: "CU",
    country_name: "Cuba",
    dialling_code: "+53"
}, {
    country_code: "CY",
    country_name: "Cyprus",
    dialling_code: "+357"
}, {
    country_code: "CZ",
    country_name: "Czech Republic",
    dialling_code: "+420"
}, {
    country_code: "CD",
    country_name: "Democratic Republic of Congo",
    dialling_code: "+243"
}, {
    country_code: "DK",
    country_name: "Denmark",
    dialling_code: "+45"
}, {
    country_code: "DJ",
    country_name: "Djibouti",
    dialling_code: "+253"
}, {
    country_code: "DM",
    country_name: "Dominica",
    dialling_code: "+1"
}, {
    country_code: "DO",
    country_name: "Dominican Republic",
    dialling_code: "+1"
}, {
    country_code: "EC",
    country_name: "Ecuador",
    dialling_code: "+593"
}, {
    country_code: "EG",
    country_name: "Egypt",
    dialling_code: "+20"
}, {
    country_code: "SV",
    country_name: "El Salvador",
    dialling_code: "+503"
}, {
    country_code: "GQ",
    country_name: "Equatorial Guinea",
    dialling_code: "+240"
}, {
    country_code: "ER",
    country_name: "Eritrea",
    dialling_code: "+291"
}, {
    country_code: "EE",
    country_name: "Estonia",
    dialling_code: "+372"
}, {
    country_code: "ET",
    country_name: "Ethiopia",
    dialling_code: "+251"
}, {
    country_code: "FK",
    country_name: "Falkland Islands",
    dialling_code: "+500"
}, {
    country_code: "FO",
    country_name: "Faroe Islands",
    dialling_code: "+298"
}, {
    country_code: "FM",
    country_name: "Federated States of Micronesia",
    dialling_code: "+691"
}, {
    country_code: "FJ",
    country_name: "Fiji",
    dialling_code: "+679"
}, {
    country_code: "FI",
    country_name: "Finland",
    dialling_code: "+358"
}, {
    country_code: "FR",
    country_name: "France",
    dialling_code: "+33"
}, {
    country_code: "GF",
    country_name: "French Guiana",
    dialling_code: "+594"
}, {
    country_code: "PF",
    country_name: "French Polynesia",
    dialling_code: "+689"
}, {
    country_code: "GA",
    country_name: "Gabon",
    dialling_code: "+241"
}, {
    country_code: "GE",
    country_name: "Georgia",
    dialling_code: "+995"
}, {
    country_code: "DE",
    country_name: "Germany",
    dialling_code: "+49"
}, {
    country_code: "GH",
    country_name: "Ghana",
    dialling_code: "+233"
}, {
    country_code: "GI",
    country_name: "Gibraltar",
    dialling_code: "+350"
}, {
    country_code: "GR",
    country_name: "Greece",
    dialling_code: "+30"
}, {
    country_code: "GL",
    country_name: "Greenland",
    dialling_code: "+299"
}, {
    country_code: "GD",
    country_name: "Grenada",
    dialling_code: "+1"
}, {
    country_code: "GP",
    country_name: "Guadeloupe",
    dialling_code: "+590"
}, {
    country_code: "GU",
    country_name: "Guam",
    dialling_code: "+1"
}, {
    country_code: "GT",
    country_name: "Guatemala",
    dialling_code: "+502"
}, {
    country_code: "GN",
    country_name: "Guinea",
    dialling_code: "+224"
}, {
    country_code: "GW",
    country_name: "Guinea-Bissau",
    dialling_code: "+245"
}, {
    country_code: "GY",
    country_name: "Guyana",
    dialling_code: "+592"
}, {
    country_code: "HT",
    country_name: "Haiti",
    dialling_code: "+509"
}, {
    country_code: "HN",
    country_name: "Honduras",
    dialling_code: "+504"
}, {
    country_code: "HK",
    country_name: "Hong Kong",
    dialling_code: "+852"
}, {
    country_code: "HU",
    country_name: "Hungary",
    dialling_code: "+36"
}, {
    country_code: "IS",
    country_name: "Iceland",
    dialling_code: "+354"
}, {
    country_code: "IN",
    country_name: "India",
    dialling_code: "+91"
}, {
    country_code: "ID",
    country_name: "Indonesia",
    dialling_code: "+62"
}, {
    country_code: "IR",
    country_name: "Iran",
    dialling_code: "+98"
}, {
    country_code: "IQ",
    country_name: "Iraq",
    dialling_code: "+964"
}, {
    country_code: "IE",
    country_name: "Ireland",
    dialling_code: "+353"
}, {
    country_code: "IL",
    country_name: "Israel",
    dialling_code: "+972"
}, {
    country_code: "IT",
    country_name: "Italy",
    dialling_code: "+39"
}, {
    country_code: "JM",
    country_name: "Jamaica",
    dialling_code: "+1"
}, {
    country_code: "JP",
    country_name: "Japan",
    dialling_code: "+81"
}, {
    country_code: "JO",
    country_name: "Jordan",
    dialling_code: "+962"
}, {
    country_code: "KZ",
    country_name: "Kazakhstan",
    dialling_code: "+7"
}, {
    country_code: "KE",
    country_name: "Kenya",
    dialling_code: "+254"
}, {
    country_code: "KI",
    country_name: "Kiribati",
    dialling_code: "+686"
}, {
    country_code: "XK",
    country_name: "Kosovo",
    dialling_code: "+381"
}, {
    country_code: "KW",
    country_name: "Kuwait",
    dialling_code: "+965"
}, {
    country_code: "KG",
    country_name: "Kyrgyzstan",
    dialling_code: "+996"
}, {
    country_code: "LA",
    country_name: "Laos",
    dialling_code: "+856"
}, {
    country_code: "LV",
    country_name: "Latvia",
    dialling_code: "+371"
}, {
    country_code: "LB",
    country_name: "Lebanon",
    dialling_code: "+961"
}, {
    country_code: "LS",
    country_name: "Lesotho",
    dialling_code: "+266"
}, {
    country_code: "LR",
    country_name: "Liberia",
    dialling_code: "+231"
}, {
    country_code: "LY",
    country_name: "Libya",
    dialling_code: "+218"
}, {
    country_code: "LI",
    country_name: "Liechtenstein",
    dialling_code: "+423"
}, {
    country_code: "LT",
    country_name: "Lithuania",
    dialling_code: "+370"
}, {
    country_code: "LU",
    country_name: "Luxembourg",
    dialling_code: "+352"
}, {
    country_code: "MO",
    country_name: "Macau",
    dialling_code: "+853"
}, {
    country_code: "MK",
    country_name: "Macedonia",
    dialling_code: "+389"
}, {
    country_code: "MG",
    country_name: "Madagascar",
    dialling_code: "+261"
}, {
    country_code: "MW",
    country_name: "Malawi",
    dialling_code: "+265"
}, {
    country_code: "MY",
    country_name: "Malaysia",
    dialling_code: "+60"
}, {
    country_code: "MV",
    country_name: "Maldives",
    dialling_code: "+960"
}, {
    country_code: "ML",
    country_name: "Mali",
    dialling_code: "+223"
}, {
    country_code: "MT",
    country_name: "Malta",
    dialling_code: "+356"
}, {
    country_code: "MH",
    country_name: "Marshall Islands",
    dialling_code: "+692"
}, {
    country_code: "MQ",
    country_name: "Martinique",
    dialling_code: "+596"
}, {
    country_code: "MR",
    country_name: "Mauritania",
    dialling_code: "+222"
}, {
    country_code: "MU",
    country_name: "Mauritius",
    dialling_code: "+230"
}, {
    country_code: "YT",
    country_name: "Mayotte",
    dialling_code: "+262"
}, {
    country_code: "MX",
    country_name: "Mexico",
    dialling_code: "+52"
}, {
    country_code: "MD",
    country_name: "Moldova",
    dialling_code: "+373"
}, {
    country_code: "MC",
    country_name: "Monaco",
    dialling_code: "+377"
}, {
    country_code: "MN",
    country_name: "Mongolia",
    dialling_code: "+976"
}, {
    country_code: "ME",
    country_name: "Montenegro",
    dialling_code: "+382"
}, {
    country_code: "MS",
    country_name: "Montserrat",
    dialling_code: "+1"
}, {
    country_code: "MA",
    country_name: "Morocco",
    dialling_code: "+212"
}, {
    country_code: "MZ",
    country_name: "Mozambique",
    dialling_code: "+258"
}, {
    country_code: "NA",
    country_name: "Namibia",
    dialling_code: "+264"
}, {
    country_code: "NR",
    country_name: "Nauru",
    dialling_code: "+674"
}, {
    country_code: "NP",
    country_name: "Nepal",
    dialling_code: "+977"
}, {
    country_code: "NL",
    country_name: "Netherlands",
    dialling_code: "+31"
}, {
    country_code: "AN",
    country_name: "Netherlands Antilles",
    dialling_code: "+599"
}, {
    country_code: "NC",
    country_name: "New Caledonia",
    dialling_code: "+687"
}, {
    country_code: "NZ",
    country_name: "New Zealand",
    dialling_code: "+64"
}, {
    country_code: "NI",
    country_name: "Nicaragua",
    dialling_code: "+505"
}, {
    country_code: "NE",
    country_name: "Niger",
    dialling_code: "+227"
}, {
    country_code: "NG",
    country_name: "Nigeria",
    dialling_code: "+234"
}, {
    country_code: "NU",
    country_name: "Niue",
    dialling_code: "+683"
}, {
    country_code: "NF",
    country_name: "Norfolk Island",
    dialling_code: "+672"
}, {
    country_code: "KP",
    country_name: "North Korea",
    dialling_code: "+850"
}, {
    country_code: "MP",
    country_name: "Northern Mariana Islands",
    dialling_code: "+1"
}, {
    country_code: "NO",
    country_name: "Norway",
    dialling_code: "+47"
}, {
    country_code: "OM",
    country_name: "Oman",
    dialling_code: "+968"
}, {
    country_code: "PK",
    country_name: "Pakistan",
    dialling_code: "+92"
}, {
    country_code: "PW",
    country_name: "Palau",
    dialling_code: "+680"
}, {
    country_code: "PS",
    country_name: "Palestine",
    dialling_code: "+970"
}, {
    country_code: "PA",
    country_name: "Panama",
    dialling_code: "+507"
}, {
    country_code: "PG",
    country_name: "Papua New Guinea",
    dialling_code: "+675"
}, {
    country_code: "PY",
    country_name: "Paraguay",
    dialling_code: "+595"
}, {
    country_code: "PE",
    country_name: "Peru",
    dialling_code: "+51"
}, {
    country_code: "PH",
    country_name: "Philippines",
    dialling_code: "+63"
}, {
    country_code: "PL",
    country_name: "Poland",
    dialling_code: "+48"
}, {
    country_code: "PT",
    country_name: "Portugal",
    dialling_code: "+351"
}, {
    country_code: "PR",
    country_name: "Puerto Rico",
    dialling_code: "+1"
}, {
    country_code: "QA",
    country_name: "Qatar",
    dialling_code: "+974"
}, {
    country_code: "CG",
    country_name: "Republic of the Congo",
    dialling_code: "+242"
}, {
    country_code: "RE",
    country_name: "R\xE9union",
    dialling_code: "+262"
}, {
    country_code: "RO",
    country_name: "Romania",
    dialling_code: "+40"
}, {
    country_code: "RU",
    country_name: "Russia",
    dialling_code: "+7"
}, {
    country_code: "RW",
    country_name: "Rwanda",
    dialling_code: "+250"
}, {
    country_code: "BL",
    country_name: "Saint Barth\xE9lemy",
    dialling_code: "+590"
}, {
    country_code: "SH",
    country_name: "Saint Helena",
    dialling_code: "+290"
}, {
    country_code: "KN",
    country_name: "Saint Kitts and Nevis",
    dialling_code: "+1"
}, {
    country_code: "MF",
    country_name: "Saint Martin",
    dialling_code: "+590"
}, {
    country_code: "PM",
    country_name: "Saint Pierre and Miquelon",
    dialling_code: "+508"
}, {
    country_code: "VC",
    country_name: "Saint Vincent and the Grenadines",
    dialling_code: "+1"
}, {
    country_code: "WS",
    country_name: "Samoa",
    dialling_code: "+685"
}, {
    country_code: "SM",
    country_name: "San Marino",
    dialling_code: "+378"
}, {
    country_code: "ST",
    country_name: "S\xE3o Tom\xE9 and Pr\xEDncipe",
    dialling_code: "+239"
}, {
    country_code: "SA",
    country_name: "Saudi Arabia",
    dialling_code: "+966"
}, {
    country_code: "SN",
    country_name: "Senegal",
    dialling_code: "+221"
}, {
    country_code: "RS",
    country_name: "Serbia",
    dialling_code: "+381"
}, {
    country_code: "SC",
    country_name: "Seychelles",
    dialling_code: "+248"
}, {
    country_code: "SL",
    country_name: "Sierra Leone",
    dialling_code: "+232"
}, {
    country_code: "SG",
    country_name: "Singapore",
    dialling_code: "+65"
}, {
    country_code: "SK",
    country_name: "Slovakia",
    dialling_code: "+421"
}, {
    country_code: "SI",
    country_name: "Slovenia",
    dialling_code: "+386"
}, {
    country_code: "SB",
    country_name: "Solomon Islands",
    dialling_code: "+677"
}, {
    country_code: "SO",
    country_name: "Somalia",
    dialling_code: "+252"
}, {
    country_code: "ZA",
    country_name: "South Africa",
    dialling_code: "+27"
}, {
    country_code: "KR",
    country_name: "South Korea",
    dialling_code: "+82"
}, {
    country_code: "ES",
    country_name: "Spain",
    dialling_code: "+34"
}, {
    country_code: "LK",
    country_name: "Sri Lanka",
    dialling_code: "+94"
}, {
    country_code: "LC",
    country_name: "St. Lucia",
    dialling_code: "+1"
}, {
    country_code: "SD",
    country_name: "Sudan",
    dialling_code: "+249"
}, {
    country_code: "SR",
    country_name: "Suriname",
    dialling_code: "+597"
}, {
    country_code: "SZ",
    country_name: "Swaziland",
    dialling_code: "+268"
}, {
    country_code: "SE",
    country_name: "Sweden",
    dialling_code: "+46"
}, {
    country_code: "CH",
    country_name: "Switzerland",
    dialling_code: "+41"
}, {
    country_code: "SY",
    country_name: "Syria",
    dialling_code: "+963"
}, {
    country_code: "TW",
    country_name: "Taiwan",
    dialling_code: "+886"
}, {
    country_code: "TJ",
    country_name: "Tajikistan",
    dialling_code: "+992"
}, {
    country_code: "TZ",
    country_name: "Tanzania",
    dialling_code: "+255"
}, {
    country_code: "TH",
    country_name: "Thailand",
    dialling_code: "+66"
}, {
    country_code: "BS",
    country_name: "The Bahamas",
    dialling_code: "+1"
}, {
    country_code: "GM",
    country_name: "The Gambia",
    dialling_code: "+220"
}, {
    country_code: "TL",
    country_name: "Timor-Leste",
    dialling_code: "+670"
}, {
    country_code: "TG",
    country_name: "Togo",
    dialling_code: "+228"
}, {
    country_code: "TK",
    country_name: "Tokelau",
    dialling_code: "+690"
}, {
    country_code: "TO",
    country_name: "Tonga",
    dialling_code: "+676"
}, {
    country_code: "TT",
    country_name: "Trinidad and Tobago",
    dialling_code: "+1"
}, {
    country_code: "TN",
    country_name: "Tunisia",
    dialling_code: "+216"
}, {
    country_code: "TR",
    country_name: "Turkey",
    dialling_code: "+90"
}, {
    country_code: "TM",
    country_name: "Turkmenistan",
    dialling_code: "+993"
}, {
    country_code: "TC",
    country_name: "Turks and Caicos Islands",
    dialling_code: "+1"
}, {
    country_code: "TV",
    country_name: "Tuvalu",
    dialling_code: "+688"
}, {
    country_code: "UG",
    country_name: "Uganda",
    dialling_code: "+256"
}, {
    country_code: "UA",
    country_name: "Ukraine",
    dialling_code: "+380"
}, {
    country_code: "AE",
    country_name: "United Arab Emirates",
    dialling_code: "+971"
}, {
    country_code: "GB",
    country_name: "United Kingdom",
    dialling_code: "+44"
}, {
    country_code: "US",
    country_name: "United States",
    dialling_code: "+1"
}, {
    country_code: "UY",
    country_name: "Uruguay",
    dialling_code: "+598"
}, {
    country_code: "VI",
    country_name: "US Virgin Islands",
    dialling_code: "+1"
}, {
    country_code: "UZ",
    country_name: "Uzbekistan",
    dialling_code: "+998"
}, {
    country_code: "VU",
    country_name: "Vanuatu",
    dialling_code: "+678"
}, {
    country_code: "VA",
    country_name: "Vatican City",
    dialling_code: "+39"
}, {
    country_code: "VE",
    country_name: "Venezuela",
    dialling_code: "+58"
}, {
    country_code: "VN",
    country_name: "Vietnam",
    dialling_code: "+84"
}, {
    country_code: "WF",
    country_name: "Wallis and Futuna",
    dialling_code: "+681"
}, {
    country_code: "YE",
    country_name: "Yemen",
    dialling_code: "+967"
}, {
    country_code: "ZM",
    country_name: "Zambia",
    dialling_code: "+260"
}, {
    country_code: "ZW",
    country_name: "Zimbabwe",
    dialling_code: "+263"
}];

function bi(i, e, r) {
    const t = i.slice();
    return t[24] = e[r], t[27] = e, t[28] = r, t
}

function yi(i, e, r) {
    const t = i.slice();
    return t[24] = e[r], t[25] = e, t[26] = r, t
}

function Jo(i) {
    let e, r, t, l = !i[5] && ki(i),
        n = i[5] && Ii();
    return {
        c() {
            l && l.c(), e = P(), n && n.c(), r = J()
        },
        l(s) {
            l && l.l(s), e = M(s), n && n.l(s), r = J()
        },
        m(s, a) {
            l && l.m(s, a), S(s, e, a), n && n.m(s, a), S(s, r, a), t = !0
        },
        p(s, a) {
            s[5] ? l && (ke(), F(l, 1, 1, () => {
                l = null
            }), we()) : l ? (l.p(s, a), a & 32 && N(l, 1)) : (l = ki(s), l.c(), N(l, 1), l.m(e.parentNode, e)), s[5] ? n ? a & 32 && N(n, 1) : (n = Ii(), n.c(), N(n, 1), n.m(r.parentNode, r)) : n && (ke(), F(n, 1, 1, () => {
                n = null
            }), we())
        },
        i(s) {
            t || (N(l), N(n), t = !0)
        },
        o(s) {
            F(l), F(n), t = !1
        },
        d(s) {
            l && l.d(s), s && d(e), n && n.d(s), s && d(r)
        }
    }
}

function ki(i) {
    let e, r, t, l, n, s;
    const a = [xo, Qo],
        o = [];

    function c(f, p) {
        return f[1] === f[10].topic ? 0 : f[1] === f[10].fill ? 1 : -1
    }
    return ~(r = c(i)) && (t = o[r] = a[r](i)), {
        c() {
            e = E("form"), t && t.c(), this.h()
        },
        l(f) {
            e = C(f, "FORM", {
                action: !0,
                class: !0
            });
            var p = w(e);
            t && t.l(p), p.forEach(d), this.h()
        },
        h() {
            u(e, "action", ""), u(e, "class", "relative flex justify-between flex-wrap w-full svelte-1kk62c2")
        },
        m(f, p) {
            S(f, e, p), ~r && o[r].m(e, null), i[19](e), l = !0, n || (s = pe(e, "submit", i[14]), n = !0)
        },
        p(f, p) {
            let h = r;
            r = c(f), r === h ? ~r && o[r].p(f, p) : (t && (ke(), F(o[h], 1, 1, () => {
                o[h] = null
            }), we()), ~r ? (t = o[r], t ? t.p(f, p) : (t = o[r] = a[r](f), t.c()), N(t, 1), t.m(e, null)) : t = null)
        },
        i(f) {
            l || (N(t), l = !0)
        },
        o(f) {
            F(t), l = !1
        },
        d(f) {
            f && d(e), ~r && o[r].d(), i[19](null), n = !1, s()
        }
    }
}

function Qo(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m = i[11],
        b = [];
    for (let $ = 0; $ < m.length; $ += 1) b[$] = Ei(bi(i, m, $));
    const y = $ => F(b[$], 1, 1, () => {
        b[$] = null
    });
    let k = i[7] && Ci();
    return {
        c() {
            e = E("div");
            for (let $ = 0; $ < b.length; $ += 1) b[$].c();
            r = P(), t = E("div"), k && k.c(), l = P(), n = E("div"), s = E("button"), a = W("back"), o = P(), c = E("input"), this.h()
        },
        l($) {
            e = C($, "DIV", {
                class: !0
            });
            var I = w(e);
            for (let A = 0; A < b.length; A += 1) b[A].l(I);
            r = M(I), t = C(I, "DIV", {
                class: !0
            });
            var D = w(t);
            k && k.l(D), l = M(D), n = C(D, "DIV", {
                class: !0
            });
            var T = w(n);
            s = C(T, "BUTTON", {
                type: !0,
                class: !0
            });
            var z = w(s);
            a = Z(z, "back"), z.forEach(d), o = M(T), c = C(T, "INPUT", {
                type: !0,
                class: !0
            }), T.forEach(d), D.forEach(d), I.forEach(d), this.h()
        },
        h() {
            u(s, "type", "button"), u(s, "class", "back svelte-1kk62c2"), u(c, "type", "submit"), c.value = "SEND", u(c, "class", "svelte-1kk62c2"), u(n, "class", "w-full flex justify-end"), u(t, "class", f = "flex " + (i[7] ? "justify-between" : "justify-end") + " items-center mt-8 flex-wrap lg:flex-nowrap"), u(e, "class", "w-full form-step svelte-1kk62c2")
        },
        m($, I) {
            S($, e, I);
            for (let D = 0; D < b.length; D += 1) b[D].m(e, null);
            g(e, r), g(e, t), k && k.m(t, null), g(t, l), g(t, n), g(n, s), g(s, a), g(n, o), g(n, c), h = !0, v || (_ = pe(s, "click", i[18]), v = !0)
        },
        p($, I) {
            if (I & 7500) {
                m = $[11];
                let D;
                for (D = 0; D < m.length; D += 1) {
                    const T = bi($, m, D);
                    b[D] ? (b[D].p(T, I), N(b[D], 1)) : (b[D] = Ei(T), b[D].c(), N(b[D], 1), b[D].m(e, r))
                }
                for (ke(), D = m.length; D < b.length; D += 1) y(D);
                we()
            }
            $[7] ? k || (k = Ci(), k.c(), k.m(t, l)) : k && (k.d(1), k = null), (!h || I & 128 && f !== (f = "flex " + ($[7] ? "justify-between" : "justify-end") + " items-center mt-8 flex-wrap lg:flex-nowrap")) && u(t, "class", f)
        },
        i($) {
            if (!h) {
                for (let I = 0; I < m.length; I += 1) N(b[I]);
                p || Pt(() => {
                    p = lr(e, Bn, {
                        x: 200,
                        duration: 200
                    }), p.start()
                }), h = !0
            }
        },
        o($) {
            b = b.filter(Boolean);
            for (let I = 0; I < b.length; I += 1) F(b[I]);
            h = !1
        },
        d($) {
            $ && d(e), De(b, $), k && k.d(), v = !1, _()
        }
    }
}

function xo(i) {
    let e, r, t, l, n, s, a, o, c = i[11],
        f = [];
    for (let h = 0; h < c.length; h += 1) f[h] = $i(yi(i, c, h));
    const p = h => F(f[h], 1, 1, () => {
        f[h] = null
    });
    return {
        c() {
            e = E("div");
            for (let h = 0; h < f.length; h += 1) f[h].c();
            r = P(), t = E("div"), l = E("button"), n = W("next"), this.h()
        },
        l(h) {
            e = C(h, "DIV", {
                class: !0
            });
            var v = w(e);
            for (let b = 0; b < f.length; b += 1) f[b].l(v);
            r = M(v), t = C(v, "DIV", {
                class: !0
            });
            var _ = w(t);
            l = C(_, "BUTTON", {
                type: !0,
                class: !0
            });
            var m = w(l);
            n = Z(m, "next"), m.forEach(d), _.forEach(d), v.forEach(d), this.h()
        },
        h() {
            u(l, "type", "submit"), u(l, "class", "svelte-1kk62c2"), u(t, "class", s = "flex " + (i[5] ? "justify-between" : "justify-end") + " items-center mt-8"), u(e, "class", "w-full form-step svelte-1kk62c2")
        },
        m(h, v) {
            S(h, e, v);
            for (let _ = 0; _ < f.length; _ += 1) f[_].m(e, null);
            g(e, r), g(e, t), g(t, l), g(l, n), o = !0
        },
        p(h, v) {
            if (v & 7496) {
                c = h[11];
                let _;
                for (_ = 0; _ < c.length; _ += 1) {
                    const m = yi(h, c, _);
                    f[_] ? (f[_].p(m, v), N(f[_], 1)) : (f[_] = $i(m), f[_].c(), N(f[_], 1), f[_].m(e, r))
                }
                for (ke(), _ = c.length; _ < f.length; _ += 1) p(_);
                we()
            }(!o || v & 32 && s !== (s = "flex " + (h[5] ? "justify-between" : "justify-end") + " items-center mt-8")) && u(t, "class", s)
        },
        i(h) {
            if (!o) {
                for (let v = 0; v < c.length; v += 1) N(f[v]);
                a || Pt(() => {
                    a = lr(e, Bn, {
                        x: 200,
                        duration: 200
                    }), a.start()
                }), o = !0
            }
        },
        o(h) {
            f = f.filter(Boolean);
            for (let v = 0; v < f.length; v += 1) F(f[v]);
            o = !1
        },
        d(h) {
            h && d(e), De(f, h)
        }
    }
}

function wi(i) {
    let e, r, t;

    function l(s) {
        i[17](s, i[24])
    }
    let n = {
        props: {
            fieldData: i[24],
            theme: i[8],
            validateField: i[12]
        },
        errors: i[6]
    };
    return i[3][i[24].name] !== void 0 && (n.value = i[3][i[24].name]), e = new Gs({
        props: n
    }), Ee.push(() => $t(e, "value", l)), {
        c() {
            le(e.$$.fragment)
        },
        l(s) {
            se(e.$$.fragment, s)
        },
        m(s, a) {
            ie(e, s, a), t = !0
        },
        p(s, a) {
            i = s;
            const o = {};
            a & 64 && (o.errors = i[6]), !r && a & 2056 && (r = !0, o.value = i[3][i[24].name], Ct(() => r = !1)), e.$set(o)
        },
        i(s) {
            t || (N(e.$$.fragment, s), t = !0)
        },
        o(s) {
            F(e.$$.fragment, s), t = !1
        },
        d(s) {
            ne(e, s)
        }
    }
}

function Ei(i) {
    let e = i[24].formStep === i[10].fill && (!i[24].appearOnly || i[24].appearOnly && i[24].appearOnly.includes(i[2])),
        r, t, l = e && wi(i);
    return {
        c() {
            l && l.c(), r = J()
        },
        l(n) {
            l && l.l(n), r = J()
        },
        m(n, s) {
            l && l.m(n, s), S(n, r, s), t = !0
        },
        p(n, s) {
            s & 4 && (e = n[24].formStep === n[10].fill && (!n[24].appearOnly || n[24].appearOnly && n[24].appearOnly.includes(n[2]))), e ? l ? (l.p(n, s), s & 4 && N(l, 1)) : (l = wi(n), l.c(), N(l, 1), l.m(r.parentNode, r)) : l && (ke(), F(l, 1, 1, () => {
                l = null
            }), we())
        },
        i(n) {
            t || (N(l), t = !0)
        },
        o(n) {
            F(l), t = !1
        },
        d(n) {
            l && l.d(n), n && d(r)
        }
    }
}

function Ci(i) {
    let e, r, t, l, n, s;
    return {
        c() {
            e = E("div"), r = E("div"), t = W("There was an error, try again later"), l = P(), n = E("img"), this.h()
        },
        l(a) {
            e = C(a, "DIV", {
                class: !0
            });
            var o = w(e);
            r = C(o, "DIV", {});
            var c = w(r);
            t = Z(c, "There was an error, try again later"), c.forEach(d), l = M(o), n = C(o, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), o.forEach(d), this.h()
        },
        h() {
            u(n, "class", "ml-4 flex-shrink-0 svelte-1kk62c2"), Pe(n.src, s = "/images/exclamation-triangle.png") || u(n, "src", s), u(n, "alt", "warning icon"), u(e, "class", "w-full flex items-center justify-between text-grey-8pm rounded-lg p-4 text-xs bg-white mb-8 lg:mb-0")
        },
        m(a, o) {
            S(a, e, o), g(e, r), g(r, t), g(e, l), g(e, n)
        },
        d(a) {
            a && d(e)
        }
    }
}

function ec(i) {
    let e, r, t;

    function l(s) {
        i[16](s, i[24])
    }
    let n = {
        props: {
            fieldData: i[24],
            theme: i[8],
            validateField: i[12]
        },
        errors: i[6]
    };
    return i[3][i[24].name] !== void 0 && (n.value = i[3][i[24].name]), e = new Gs({
        props: n
    }), Ee.push(() => $t(e, "value", l)), {
        c() {
            le(e.$$.fragment)
        },
        l(s) {
            se(e.$$.fragment, s)
        },
        m(s, a) {
            ie(e, s, a), t = !0
        },
        p(s, a) {
            i = s;
            const o = {};
            a & 64 && (o.errors = i[6]), !r && a & 2056 && (r = !0, o.value = i[3][i[24].name], Ct(() => r = !1)), e.$set(o)
        },
        i(s) {
            t || (N(e.$$.fragment, s), t = !0)
        },
        o(s) {
            F(e.$$.fragment, s), t = !1
        },
        d(s) {
            ne(e, s)
        }
    }
}

function $i(i) {
    let e, r, t = i[24].formStep === i[10].topic && ec(i);
    return {
        c() {
            t && t.c(), e = J()
        },
        l(l) {
            t && t.l(l), e = J()
        },
        m(l, n) {
            t && t.m(l, n), S(l, e, n), r = !0
        },
        p(l, n) {
            l[24].formStep === l[10].topic && t.p(l, n)
        },
        i(l) {
            r || (N(t), r = !0)
        },
        o(l) {
            F(t), r = !1
        },
        d(l) {
            t && t.d(l), l && d(e)
        }
    }
}

function Ii(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _;
    return t = new yl({
        props: {
            props: {
                mediaUrl: "/animations/form_lottie.json"
            }
        }
    }), {
        c() {
            e = E("div"), r = E("div"), le(t.$$.fragment), l = P(), n = E("div"), s = E("div"), a = E("b"), o = W("Thank you so much!"), c = W(" Your message has been sent."), f = P(), p = E("img"), this.h()
        },
        l(m) {
            e = C(m, "DIV", {
                class: !0
            });
            var b = w(e);
            r = C(b, "DIV", {
                class: !0
            });
            var y = w(r);
            se(t.$$.fragment, y), y.forEach(d), l = M(b), n = C(b, "DIV", {
                class: !0
            });
            var k = w(n);
            s = C(k, "DIV", {});
            var $ = w(s);
            a = C($, "B", {});
            var I = w(a);
            o = Z(I, "Thank you so much!"), I.forEach(d), c = Z($, " Your message has been sent."), $.forEach(d), f = M(k), p = C(k, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), k.forEach(d), b.forEach(d), this.h()
        },
        h() {
            u(r, "class", "animation mx-auto mb-4 svelte-1kk62c2"), u(p, "class", "ml-4 flex-shrink-0 svelte-1kk62c2"), Pe(p.src, h = "/images/success-circle.png") || u(p, "src", h), u(p, "alt", "success icon"), u(n, "class", "text-grey-8pm flex items-center justify-between rounded-lg p-4 text-xs mb-4 mx-auto bg-white"), u(e, "class", "success-block svelte-1kk62c2")
        },
        m(m, b) {
            S(m, e, b), g(e, r), ie(t, r, null), g(e, l), g(e, n), g(n, s), g(s, a), g(a, o), g(s, c), g(n, f), g(n, p), _ = !0
        },
        i(m) {
            _ || (N(t.$$.fragment, m), v || Pt(() => {
                v = lr(e, Rr, {
                    duration: 200
                }), v.start()
            }), _ = !0)
        },
        o(m) {
            F(t.$$.fragment, m), _ = !1
        },
        d(m) {
            m && d(e), ne(t)
        }
    }
}

function tc(i) {
    let e, r, t, l = i[11] && i[11].length > 0 && Jo(i);
    return {
        c() {
            e = E("div"), l && l.c(), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0
            });
            var s = w(e);
            l && l.l(s), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", (i[8] ? i[8] : "light") + " w-full lg:col-6 svelte-1kk62c2"), Pt(() => i[20].call(e)), Q(e, "mx-auto", i[9])
        },
        m(n, s) {
            S(n, e, s), l && l.m(e, null), r = Qs(e, i[20].bind(e)), t = !0
        },
        p(n, [s]) {
            n[11] && n[11].length > 0 && l.p(n, s)
        },
        i(n) {
            t || (N(l), t = !0)
        },
        o(n) {
            F(l), t = !1
        },
        d(n) {
            n && d(e), l && l.d(), r()
        }
    }
}
const Di = 255,
    Ti = 1e4;

function rc(i, e, r) {
    let {
        props: t,
        formClientHeight: l = 0
    } = e;
    const {
        theme: n,
        centered: s
    } = t, a = {
        topic: Vr.topic,
        disclaimer: Vr.disclaimer,
        fill: Vr.fill
    }, o = {
        business: dt.business,
        service: dt.service,
        wallet: dt.wallet,
        information: dt.information,
        communications: dt.communications,
        job: dt.job,
        exchange: dt.exchange,
        other: dt.other
    };
    let c = a.topic,
        f = null,
        p = {},
        h, v = !1,
        _ = {},
        m = !1;
    const b = Xo.map(L => ({
            text: L.country_name,
            value: L.country_name
        })),
        y = [{
            label: "Name",
            type: "fake",
            placeholder: "Name",
            required: !1,
            validationType: "short-text",
            options: [],
            width: "full",
            name: "name",
            formStep: a.topic
        }, {
            label: "Email",
            type: "fake",
            placeholder: "Your email",
            required: !1,
            validationType: "short-text",
            options: [],
            width: "full",
            name: "email",
            formStep: a.topic
        }, {
            label: null,
            type: "select",
            placeholder: "Choose topic",
            required: !0,
            validationType: null,
            options: [{
                text: "Business / Partnership",
                value: "Business / Partnership",
                ref: o.business
            }, {
                text: "Offering a service or product to IOTA",
                value: "Offering a service or product to IOTA",
                ref: o.service
            }, {
                text: "Firefly / Trinity",
                value: "Firefly / Trinity",
                ref: o.wallet
            }, {
                text: "Interested in detailed or general information",
                value: "Interested in detailed or general information",
                ref: o.information
            }, {
                text: "Communications / Collaboration / PR or Interview request",
                value: "Communications / Collaboration / PR or Interview request",
                ref: o.communications
            }, {
                text: "Job Seeking",
                value: "Job Seeking",
                ref: o.job
            }, {
                text: "Exchange Listing",
                value: "Exchange Listing",
                ref: o.exchange
            }, {
                text: "Other",
                value: "Other",
                ref: o.other
            }],
            width: "full",
            name: "topic",
            formStep: a.topic
        }, {
            label: null,
            type: "text",
            placeholder: "Name",
            required: !0,
            validationType: "short-text",
            options: [],
            width: "full",
            name: "r_name",
            formStep: a.topic
        }, {
            label: null,
            type: "email",
            placeholder: "Email",
            required: !0,
            validationType: "email",
            options: [],
            width: "full",
            name: "r_email",
            formStep: a.topic
        }, {
            label: null,
            type: "text",
            placeholder: "Organisation Name",
            required: !1,
            validationType: "short-text",
            options: [],
            width: "full",
            name: "organisation_name",
            formStep: a.fill,
            appearOnly: [o.business]
        }, {
            label: null,
            type: "url",
            placeholder: "Website Link",
            required: !1,
            validationType: "short-text",
            options: [],
            width: "full",
            name: "website_link",
            formStep: a.fill,
            appearOnly: [o.communications]
        }, {
            label: null,
            type: "select",
            placeholder: "Your Location",
            required: !1,
            validationType: null,
            options: b,
            width: "full",
            name: "location",
            formStep: a.fill,
            appearOnly: [o.business]
        }, {
            label: null,
            type: "select",
            placeholder: "Industry Vertical",
            required: !1,
            validationType: null,
            options: [{
                text: "Automotive / Mobility",
                value: "Automotive / Mobility"
            }, {
                text: "Digital ID/ ePrivacy",
                value: "Digital ID/ ePrivacy"
            }, {
                text: "Energy / Power",
                value: "Energy / Power"
            }, {
                text: "eHealth",
                value: "eHealth"
            }, {
                text: "Finance",
                value: "Finance"
            }, {
                text: "Global Trade and Supply Chain",
                value: "Global Trade and Supply Chain"
            }, {
                text: "Smart City",
                value: "Smart City"
            }, {
                text: "Smart Manufacturing / Industrial IoT",
                value: "Smart Manufacturing / Industrial IoT"
            }, {
                text: "Telco and Infrastructure Development",
                value: "Telco and Infrastructure Development"
            }, {
                text: "Humanitarian / Environment Cooperation",
                value: "Humanitarian / Environment Cooperation"
            }, {
                text: "Other",
                value: "Other"
            }],
            width: "full",
            name: "industry_vertical",
            formStep: a.fill,
            appearOnly: [o.business, o.information]
        }, {
            label: null,
            type: "select",
            placeholder: "Industry Sector",
            required: !1,
            validationType: null,
            options: [{
                text: "Public sector - Government/Municipality",
                value: "Public sector - Government/Municipality"
            }, {
                text: "Public sector - Public enterprise",
                value: "Public sector - Public enterprise"
            }, {
                text: "Public sector - Non-Profit organisation",
                value: "Public sector - Non-Profit organisation"
            }, {
                text: "Private sector - Organisation interested in IOTA technology and offerings",
                value: "Private sector - Organisation interested in IOTA technology and offerings"
            }, {
                text: "Private Sector - Solution provider (Interested to combine IOTA technology to your solution)",
                value: "Private Sector - Solution provider (Interested to combine IOTA technology to your solution)"
            }, {
                text: "Private Sector - Technology provider (Interested to collaborate with IOTA)",
                value: "Private Sector - Technology provider (Interested to collaborate with IOTA)"
            }, {
                text: "Private Sector - Innovation facilitators and education providers",
                value: "Private Sector - Innovation facilitators and education providers"
            }, {
                text: "Private Sector - Consultant",
                value: "Private Sector - Consultant"
            }, {
                text: "Private Sector - Start-up",
                value: "Private Sector - Start-up"
            }, {
                text: "Private Sector - Exchange",
                value: "Private Sector - Exchange"
            }, {
                text: "Academia - Research Institute / Lab",
                value: "Academia - Research Institute / Lab"
            }, {
                text: "Academia - University",
                value: "Academia - University"
            }, {
                text: "Other - Individual",
                value: "Other - Individual"
            }, {
                text: "Other - Media/Press",
                value: "Other - Media/Press"
            }],
            width: "full",
            name: "sector",
            formStep: a.fill,
            appearOnly: [o.business]
        }, {
            label: null,
            type: "textarea",
            placeholder: "Your message",
            required: !0,
            validationType: "long-text",
            options: [],
            width: "full",
            name: "message",
            formStep: a.fill
        }];
    He(() => {
        for (let L of y) r(3, p[L.name] = "", p)
    });

    function k(L, O) {
        const {
            value: R,
            name: j
        } = L;
        if (O.required) {
            if (!R) return r(6, _[j] = `Please introduce your ${j.replace("r_","")}.`, _);
            if (O.validationType === "short-text") {
                if (R.length > Di) return r(6, _[j] = `No more than ${Di} characters`, _)
            } else if (O.validationType === "long-text") {
                if (R.length > Ti) return r(6, _[j] = `No more than ${Ti} characters`, _)
            } else if (O.validationType === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(R)) return r(6, _[j] = "Invalid email address", _);
            return r(6, _[j] = !1, _), delete _[j]
        }
    }

    function $() {
        var L = !1;
        if (document.querySelectorAll(`[formStep="${c}"]`).forEach(j => {
                let G = y.find(X => X.name === j.name);
                if (k(j, G), _[j.name]) L = !0;
                else {
                    const {
                        name: X,
                        value: Y
                    } = j;
                    if (X === "topic") {
                        let ee = G.options.find(q => q.value === Y);
                        ee && r(2, f = ee.ref)
                    }
                }
            }), L) return;
        let R;
        switch (c) {
        case a.topic:
            R = a.fill;
            break
        }
        if (R) {
            for (let j of y) j.appearOnly && !j.appearOnly.includes(f) && r(3, p[j.name] = "", p);
            r(1, c = R)
        } else console.error("Could not find next step!")
    }

    function I() {
        let L;
        switch (c) {
        case a.fill:
            L = a.topic;
            break
        }
        L ? r(1, c = L) : console.error("Could not find prev step!")
    }

    function D(L) {
        if (L.preventDefault(), c !== a.fill) return $();
        for (let O of h.elements) {
            let R = y.find(j => j.name === O.name);
            R && k(O, R)
        }
        if (Object.entries(_).length === 0 && _.constructor === Object) {
            const {
                name: O,
                email: R,
                r_name: j,
                r_email: G
            } = p;
            O && O.length > 0 || R ? r(7, m = !0) : Ns.post("https://website-mailserver.iota.works/api/enquiry", ft(Oe({}, p), {
                name: j,
                email: G
            })).then(X => {
                r(5, v = !0), r(7, m = !1);
                for (let Y of y) r(3, p[Y.name] = "", p);
                r(1, c = 0)
            }).catch(X => {
                r(7, m = !0)
            })
        }
    }

    function T(L, O) {
        i.$$.not_equal(p[O.name], L) && (p[O.name] = L, r(3, p))
    }

    function z(L, O) {
        i.$$.not_equal(p[O.name], L) && (p[O.name] = L, r(3, p))
    }
    const A = () => I();

    function B(L) {
        Ee[L ? "unshift" : "push"](() => {
            h = L, r(4, h)
        })
    }

    function V() {
        l = this.clientHeight, r(0, l)
    }
    return i.$$set = L => {
        "props" in L && r(15, t = L.props), "formClientHeight" in L && r(0, l = L.formClientHeight)
    }, [l, c, f, p, h, v, _, m, n, s, a, y, k, I, D, t, T, z, A, B, V]
}
class Fs extends ue {
    constructor(e) {
        super(), fe(this, e, rc, tc, de, {
            props: 15,
            formClientHeight: 0
        })
    }
}

function lc(i) {
    let e, r;
    return e = new Hr({
        props: {
            componentData: {
                type: i[1],
                fields: Oe({}, i[0])
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, [l]) {
            const n = {};
            l & 3 && (n.componentData = {
                type: t[1],
                fields: Oe({}, t[0])
            }), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function ic(i, e, r) {
    let {
        props: t
    } = e, {
        type: l
    } = t;
    switch (l) {
    case "ghost":
        l = "ghostRectangularCard";
        break;
    case "squared":
        l = "squaredCard";
        break;
    case "rectangular-floating":
        l = "floatingRectangularCard";
        break;
    case "wide floating squared":
        l = "wideFloatingSquaredCard";
        break;
    case "wide floating rectangular":
        l = "wideFloatingRectangularCard";
        break;
    case "rectangular flat":
        l = "flatRectangularCard";
        break;
    case "news":
        l = "newsCard";
        break;
    case "wide news":
        l = "wideNewsCard";
        break;
    case "social":
        l = "socialCard";
        break;
    case "author":
        l = "authorCard";
        break;
    case "paper":
        l = "paperCard";
        break;
    case "exchange":
        l = "exchangeCard";
        break;
    case "partner":
        l = "partnerCard";
        break;
    case "paginated list card":
        l = "paginatedListCard";
        break;
    case "technology":
        l = "technologyCard";
        break;
    case "automated-news-coverage":
        l = "automatedNewsCoverage";
        break;
    case "automated-press-releases":
        l = "automatedPressReleases";
        break
    }
    return i.$$set = n => {
        "props" in n && r(0, t = n.props)
    }, [t, l]
}
class nc extends ue {
    constructor(e) {
        super(), fe(this, e, ic, lc, de, {
            props: 0
        })
    }
}

function sc(i) {
    let e, r, t;
    return r = new sr({
        props: {
            props: {
                title: i[0]
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "eyebrow mb-3 text-grey-8pm svelte-6tz06n")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function ac(i) {
    let e, r, t;
    return r = new ir({
        props: {
            props: {
                title: i[3],
                url: i[4],
                openNewTab: !Ae(i[4])
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "relative z-10 text-sm font-semibold")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function oc(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m = i[0] && sc(i);
    h = new Ie({
        props: {
            props: {
                text: i[2]
            }
        }
    });
    let b = i[3] && i[4] && ac(i);
    return {
        c() {
            e = E("a"), r = E("div"), t = P(), l = E("div"), m && m.c(), n = P(), s = E("h3"), a = W(i[1]), o = P(), c = E("div"), f = P(), p = E("div"), le(h.$$.fragment), v = P(), b && b.c(), this.h()
        },
        l(y) {
            e = C(y, "A", {
                class: !0,
                href: !0,
                target: !0,
                rel: !0
            });
            var k = w(e);
            r = C(k, "DIV", {
                class: !0,
                "data-bg": !0,
                style: !0
            }), w(r).forEach(d), t = M(k), l = C(k, "DIV", {
                class: !0
            });
            var $ = w(l);
            m && m.l($), n = M($), s = C($, "H3", {
                class: !0
            });
            var I = w(s);
            a = Z(I, i[1]), I.forEach(d), o = M($), c = C($, "DIV", {
                class: !0
            }), w(c).forEach(d), f = M($), p = C($, "DIV", {
                class: !0
            });
            var D = w(p);
            se(h.$$.fragment, D), D.forEach(d), $.forEach(d), v = M(k), b && b.l(k), k.forEach(d), this.h()
        },
        h() {
            u(r, "class", "hoverBg lazyload svelte-6tz06n"), u(r, "data-bg", i[5]), Se(r, "background", "center / cover no-repeat"), u(s, "class", "title mb-4 text-grey-midnight svelte-6tz06n"), u(c, "class", "headline-stick size-l mb-6"), u(p, "class", "body mb-4"), u(l, "class", "relative z-10"), u(e, "class", "card fade-in-bottom svelte-6tz06n"), u(e, "href", i[4]), u(e, "target", i[4] ? Ae(i[4]) ? "" : "_blank" : null), u(e, "rel", Ae(i[4]) ? null : "noopener noreferrer")
        },
        m(y, k) {
            S(y, e, k), g(e, r), g(e, t), g(e, l), m && m.m(l, null), g(l, n), g(l, s), g(s, a), g(l, o), g(l, c), g(l, f), g(l, p), ie(h, p, null), g(e, v), b && b.m(e, null), _ = !0
        },
        p(y, [k]) {
            y[0] && m.p(y, k), y[3] && y[4] && b.p(y, k)
        },
        i(y) {
            _ || (N(m), N(h.$$.fragment, y), N(b), _ = !0)
        },
        o(y) {
            F(m), F(h.$$.fragment, y), F(b), _ = !1
        },
        d(y) {
            y && d(e), m && m.d(), ne(h), b && b.d()
        }
    }
}

function cc(i, e, r) {
    let {
        props: t
    } = e;
    const {
        eyebrow: l,
        title: n,
        body: s,
        linkText: a,
        linkUrl: o,
        image: c
    } = t, f = c && c.fields && c.fields.file ? c.fields.file.url : null;
    return i.$$set = p => {
        "props" in p && r(6, t = p.props)
    }, [l, n, s, a, o, f, t]
}
class uc extends ue {
    constructor(e) {
        super(), fe(this, e, cc, oc, de, {
            props: 6
        })
    }
}

function fc(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _;
    return p = new Ie({
        props: {
            props: {
                text: i[1]
            }
        }
    }), v = new nr({
        props: {
            props: {
                url: i[2]
            }
        }
    }), {
        c() {
            e = E("a"), r = E("div"), t = P(), l = E("div"), n = E("h3"), s = W(i[0]), a = P(), o = E("div"), c = P(), f = E("div"), le(p.$$.fragment), h = P(), le(v.$$.fragment), this.h()
        },
        l(m) {
            e = C(m, "A", {
                href: !0,
                target: !0,
                rel: !0,
                style: !0,
                class: !0,
                "data-bgset": !0,
                "data-sizes": !0
            });
            var b = w(e);
            r = C(b, "DIV", {
                class: !0,
                style: !0
            }), w(r).forEach(d), t = M(b), l = C(b, "DIV", {});
            var y = w(l);
            n = C(y, "H3", {
                class: !0
            });
            var k = w(n);
            s = Z(k, i[0]), k.forEach(d), a = M(y), o = C(y, "DIV", {
                class: !0
            }), w(o).forEach(d), c = M(y), f = C(y, "DIV", {
                class: !0
            });
            var $ = w(f);
            se(p.$$.fragment, $), $.forEach(d), y.forEach(d), h = M(b), se(v.$$.fragment, b), b.forEach(d), this.h()
        },
        h() {
            u(r, "class", "absolute top-0 left-0 w-full h-full"), Se(r, "z-index", "-1"), Se(r, "background", "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))"), u(n, "class", "title mb-4 text-white"), u(o, "class", "headline-stick size-l mb-6"), u(f, "class", "body mb-4 text-white"), u(e, "href", i[2]), u(e, "target", i[2] ? Ae(i[2]) ? "" : "_blank" : null), u(e, "rel", Ae(i[2]) ? null : "noopener noreferrer"), Se(e, "background", i[3] || i[4] ? "center / cover no-repeat" : ""), u(e, "class", "card sm:mx-2 fade-in-bottom lazyload svelte-1byhyk2"), u(e, "data-bgset", i[3] || i[4] ? `${i[4]||i[3]} [--small] | ${i[3]}` : null), u(e, "data-sizes", "auto")
        },
        m(m, b) {
            S(m, e, b), g(e, r), g(e, t), g(e, l), g(l, n), g(n, s), g(l, a), g(l, o), g(l, c), g(l, f), ie(p, f, null), g(e, h), ie(v, e, null), _ = !0
        },
        p: U,
        i(m) {
            _ || (N(p.$$.fragment, m), N(v.$$.fragment, m), _ = !0)
        },
        o(m) {
            F(p.$$.fragment, m), F(v.$$.fragment, m), _ = !1
        },
        d(m) {
            m && d(e), ne(p), ne(v)
        }
    }
}

function dc(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        body: n,
        linkUrl: s,
        image: a,
        mobileImage: o
    } = t, c = a && a.fields && a.fields.file ? a.fields.file.url : null, f = o && o.fields && o.fields.file ? o.fields.file.url : null;
    return i.$$set = p => {
        "props" in p && r(5, t = p.props)
    }, [l, n, s, c, f, t]
}
class hc extends ue {
    constructor(e) {
        super(), fe(this, e, dc, fc, de, {
            props: 5
        })
    }
}

function _c(i) {
    let e, r, t;
    return r = new nr({
        props: {
            props: {
                url: i[2]
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "w-full sm:w-auto")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function pc(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h;
    f = new Ie({
        props: {
            props: {
                text: i[1]
            }
        }
    });
    let v = i[2] && _c(i);
    return {
        c() {
            e = E("a"), r = E("div"), t = E("div"), l = E("h3"), n = W(i[0]), s = P(), a = E("div"), o = P(), c = E("div"), le(f.$$.fragment), p = P(), v && v.c(), this.h()
        },
        l(_) {
            e = C(_, "A", {
                href: !0,
                target: !0,
                rel: !0,
                style: !0,
                "data-bgset": !0,
                "data-sizes": !0,
                class: !0,
                "aria-label": !0
            });
            var m = w(e);
            r = C(m, "DIV", {
                class: !0
            });
            var b = w(r);
            t = C(b, "DIV", {});
            var y = w(t);
            l = C(y, "H3", {
                class: !0
            });
            var k = w(l);
            n = Z(k, i[0]), k.forEach(d), s = M(y), a = C(y, "DIV", {
                class: !0
            }), w(a).forEach(d), o = M(y), c = C(y, "DIV", {
                class: !0
            });
            var $ = w(c);
            se(f.$$.fragment, $), $.forEach(d), y.forEach(d), p = M(b), v && v.l(b), b.forEach(d), m.forEach(d), this.h()
        },
        h() {
            u(l, "class", "title mb-4 " + (i[3] == "dark" ? "text-white" : "text-grey-midnight")), u(a, "class", "headline-stick size-m mb-6"), u(c, "class", "mb-4 " + (i[3] == "dark" ? "text-white" : "text-grey-10pm")), u(r, "class", "flex flex-col sm:flex-row justify-between items-start flex-wrap sm:flex-nowrap h-full"), u(e, "href", i[2]), u(e, "target", i[2] ? Ae(i[2]) ? "" : "_blank" : null), u(e, "rel", i[2] ? Ae(i[2]) ? null : "noopener noreferrer" : null), Se(e, "background", (i[4] || i[5] ? "center / cover no-repeat" : "") + " #F6F8FC"), u(e, "data-bgset", i[4] || i[5] ? `${i[5]||i[4]} [--small] | ${i[4]}` : null), u(e, "data-sizes", "auto"), u(e, "class", "wide-floating-rectangular-card fade-in-bottom p-12 md:pr-12 rounded-lg mb-6 md:mb-8 lazyload svelte-z9xh4o"), u(e, "aria-label", i[0])
        },
        m(_, m) {
            S(_, e, m), g(e, r), g(r, t), g(t, l), g(l, n), g(t, s), g(t, a), g(t, o), g(t, c), ie(f, c, null), g(r, p), v && v.m(r, null), h = !0
        },
        p(_, [m]) {
            _[2] && v.p(_, m)
        },
        i(_) {
            h || (N(f.$$.fragment, _), N(v), h = !0)
        },
        o(_) {
            F(f.$$.fragment, _), F(v), h = !1
        },
        d(_) {
            _ && d(e), ne(f), v && v.d()
        }
    }
}

function mc(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        body: n,
        linkUrl: s,
        image: a,
        mobileImage: o,
        theme: c
    } = t, f = a && a.fields && a.fields.file ? a.fields.file.url : null, p = o && o.fields && o.fields.file ? o.fields.file.url : null;
    return i.$$set = h => {
        "props" in h && r(6, t = h.props)
    }, [l, n, s, c, f, p, t]
}
class gc extends ue {
    constructor(e) {
        super(), fe(this, e, mc, pc, de, {
            props: 6
        })
    }
}

function Si(i, e, r) {
    const t = i.slice();
    return t[11] = e[r], t[13] = r, t
}

function vc(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b = i[5] && yc(i),
        y = i[3] && Cc(i),
        k = i[4] && $c(i),
        $ = i[2] && Ic(i),
        I = i[2] && Dc(i);
    return {
        c() {
            e = E("div"), r = E("div"), t = E("div"), l = E("div"), n = E("h3"), s = W(i[1]), a = P(), o = E("div"), c = P(), b && b.c(), f = P(), p = E("div"), y && y.c(), h = P(), k && k.c(), v = P(), $ && $.c(), _ = P(), I && I.c(), this.h()
        },
        l(D) {
            e = C(D, "DIV", {
                id: !0,
                class: !0
            });
            var T = w(e);
            r = C(T, "DIV", {
                class: !0
            });
            var z = w(r);
            t = C(z, "DIV", {
                class: !0
            });
            var A = w(t);
            l = C(A, "DIV", {
                class: !0
            });
            var B = w(l);
            n = C(B, "H3", {
                class: !0
            });
            var V = w(n);
            s = Z(V, i[1]), V.forEach(d), a = M(B), o = C(B, "DIV", {
                class: !0
            }), w(o).forEach(d), c = M(B), b && b.l(B), B.forEach(d), f = M(A), p = C(A, "DIV", {
                class: !0
            });
            var L = w(p);
            y && y.l(L), h = M(L), k && k.l(L), v = M(L), $ && $.l(L), L.forEach(d), A.forEach(d), z.forEach(d), _ = M(T), I && I.l(T), T.forEach(d), this.h()
        },
        h() {
            u(n, "class", "title mb-4 text-grey-midnight lg:col-10"), u(o, "class", "headline-stick size-l mb-6"), u(l, "class", "mr-4"), u(p, "class", "flex-shrink-0"), u(t, "class", "flex justify-between items-start flex-wrap md:flex-nowrap"), u(r, "class", "py-6 px-6 md:px-12"), u(e, "id", Ln(i[1])), u(e, "class", "paper-card bg-white rounded-lg lg:col-12 mb-8 fade-in-bottom svelte-4p1gw7"), Q(e, "showing-abstract", i[0])
        },
        m(D, T) {
            S(D, e, T), g(e, r), g(r, t), g(t, l), g(l, n), g(n, s), g(l, a), g(l, o), g(l, c), b && b.m(l, null), g(t, f), g(t, p), y && y.m(p, null), g(p, h), k && k.m(p, null), g(p, v), $ && $.m(p, null), g(e, _), I && I.m(e, null), m = !0
        },
        p(D, T) {
            D[5] && b.p(D, T), D[3] && y.p(D, T), D[4] && k.p(D, T), D[2] && $.p(D, T), D[2] && I.p(D, T), T & 1 && Q(e, "showing-abstract", D[0])
        },
        i(D) {
            m || (N(y), N(k), N($), N(I), m = !0)
        },
        o(D) {
            F(y), F(k), F($), F(I), m = !1
        },
        d(D) {
            D && d(e), b && b.d(), y && y.d(), k && k.d(), $ && $.d(), I && I.d()
        }
    }
}

function bc(i) {
    let e, r, t, l, n, s, a, o, c, f, p;
    return {
        c() {
            e = E("div"), r = E("div"), t = E("div"), l = E("div"), n = P(), s = E("div"), a = P(), o = E("div"), c = E("div"), f = P(), p = E("div"), this.h()
        },
        l(h) {
            e = C(h, "DIV", {
                class: !0
            });
            var v = w(e);
            r = C(v, "DIV", {
                class: !0
            });
            var _ = w(r);
            t = C(_, "DIV", {
                class: !0
            });
            var m = w(t);
            l = C(m, "DIV", {
                class: !0
            }), w(l).forEach(d), n = M(m), s = C(m, "DIV", {
                class: !0
            }), w(s).forEach(d), m.forEach(d), a = M(_), o = C(_, "DIV", {
                class: !0
            });
            var b = w(o);
            c = C(b, "DIV", {
                class: !0
            }), w(c).forEach(d), f = M(b), p = C(b, "DIV", {
                class: !0
            }), w(p).forEach(d), b.forEach(d), _.forEach(d), v.forEach(d), this.h()
        },
        h() {
            u(l, "class", "placeholder-title svelte-4p1gw7"), u(s, "class", "placeholder-description svelte-4p1gw7"), u(t, "class", "flex flex-col w-full space-y-4"), u(c, "class", "placeholder-button svelte-4p1gw7"), u(p, "class", "placeholder-button svelte-4p1gw7"), u(o, "class", "flex flex-col w-full space-y-4 items-start sm:items-end"), u(r, "class", "flex flex-wrap sm:flex-nowrap space-y-4 justify-between"), u(e, "class", "placeholder-card fade-in-bottom placeholder-animation svelte-4p1gw7")
        },
        m(h, v) {
            S(h, e, v), g(e, r), g(r, t), g(t, l), g(t, n), g(t, s), g(r, a), g(r, o), g(o, c), g(o, f), g(o, p)
        },
        p: U,
        i: U,
        o: U,
        d(h) {
            h && d(e)
        }
    }
}

function yc(i) {
    let e, r, t;

    function l(o, c) {
        return o[7] ? wc : kc
    }
    let s = l(i)(i),
        a = i[6] && Ec(i);
    return {
        c() {
            e = E("p"), s.c(), r = P(), a && a.c(), t = J(), this.h()
        },
        l(o) {
            e = C(o, "P", {
                class: !0
            });
            var c = w(e);
            s.l(c), c.forEach(d), r = M(o), a && a.l(o), t = J(), this.h()
        },
        h() {
            u(e, "class", "my-2 mr-1")
        },
        m(o, c) {
            S(o, e, c), s.m(e, null), S(o, r, c), a && a.m(o, c), S(o, t, c)
        },
        p(o, c) {
            s.p(o, c), o[6] && a.p(o, c)
        },
        d(o) {
            o && d(e), s.d(), o && d(r), a && a.d(o), o && d(t)
        }
    }
}

function kc(i) {
    let e, r = i[5],
        t = [];
    for (let l = 0; l < r.length; l += 1) t[l] = Vi(Si(i, r, l));
    return {
        c() {
            for (let l = 0; l < t.length; l += 1) t[l].c();
            e = J()
        },
        l(l) {
            for (let n = 0; n < t.length; n += 1) t[n].l(l);
            e = J()
        },
        m(l, n) {
            for (let s = 0; s < t.length; s += 1) t[s].m(l, n);
            S(l, e, n)
        },
        p(l, n) {
            if (n & 32) {
                r = l[5];
                let s;
                for (s = 0; s < r.length; s += 1) {
                    const a = Si(l, r, s);
                    t[s] ? t[s].p(a, n) : (t[s] = Vi(a), t[s].c(), t[s].m(e.parentNode, e))
                }
                for (; s < t.length; s += 1) t[s].d(1);
                t.length = r.length
            }
        },
        d(l) {
            De(t, l), l && d(e)
        }
    }
}

function wc(i) {
    let e;
    return {
        c() {
            e = W(i[5])
        },
        l(r) {
            e = Z(r, i[5])
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Vi(i) {
    let e = i[11].fields.name + (i[5].length > 1 ? i[13] < i[5].length - 2 ? ", " : i[5].length - 2 === i[13] ? " and " : "" : ""),
        r;
    return {
        c() {
            r = W(e)
        },
        l(t) {
            r = Z(t, e)
        },
        m(t, l) {
            S(t, r, l)
        },
        p: U,
        d(t) {
            t && d(r)
        }
    }
}

function Ec(i) {
    let e, r;
    return {
        c() {
            e = E("p"), r = W(i[6]), this.h()
        },
        l(t) {
            e = C(t, "P", {
                class: !0
            });
            var l = w(e);
            r = Z(l, i[6]), l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mt-1 mb-2 mr-1")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Cc(i) {
    let e, r, t;
    return r = new vt({
        props: {
            props: {
                title: "Published",
                url: i[3],
                openNewTab: !0,
                buttonTheme: "green",
                icon: "doc",
                iconPosition: "left"
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mt-4 md:mt-0")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function $c(i) {
    let e, r, t;
    return r = new vt({
        props: {
            props: {
                title: "Open Access",
                url: i[4],
                openNewTab: !0,
                buttonTheme: "green",
                icon: "doc",
                iconPosition: "left"
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mt-4")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function Ic(i) {
    let e, r, t;
    return r = new vt({
        props: {
            props: {
                title: "abstract",
                buttonTheme: "ghost",
                icon: "arrow-down",
                iconPosition: "right",
                onClick: i[9]
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mt-4")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function Dc(i) {
    let e, r, t, l, n, s, a, o;
    const c = [Sc, Tc],
        f = [];

    function p(h, v) {
        return h[7] ? 0 : 1
    }
    return s = p(i), a = f[s] = c[s](i), {
        c() {
            e = E("div"), r = E("p"), t = W("Abstract"), l = P(), n = E("div"), a.c(), this.h()
        },
        l(h) {
            e = C(h, "DIV", {
                class: !0
            });
            var v = w(e);
            r = C(v, "P", {
                class: !0
            });
            var _ = w(r);
            t = Z(_, "Abstract"), _.forEach(d), l = M(v), n = C(v, "DIV", {
                class: !0
            });
            var m = w(n);
            a.l(m), m.forEach(d), v.forEach(d), this.h()
        },
        h() {
            u(r, "class", "font-bold text-xl mb-2"), u(n, "class", "w-full lg:col-8"), u(e, "class", "body bg-grey-daylight px-6 md:px-20 svelte-4p1gw7")
        },
        m(h, v) {
            S(h, e, v), g(e, r), g(r, t), g(e, l), g(e, n), f[s].m(n, null), o = !0
        },
        p(h, v) {
            a.p(h, v)
        },
        i(h) {
            o || (N(a), o = !0)
        },
        o(h) {
            F(a), o = !1
        },
        d(h) {
            h && d(e), f[s].d()
        }
    }
}

function Tc(i) {
    let e, r;
    return e = new Ie({
        props: {
            props: {
                text: i[2]
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Sc(i) {
    let e, r;
    return {
        c() {
            e = E("p"), r = W(i[2])
        },
        l(t) {
            e = C(t, "P", {});
            var l = w(e);
            r = Z(l, i[2]), l.forEach(d)
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        i: U,
        o: U,
        d(t) {
            t && d(e)
        }
    }
}

function Vc(i) {
    let e, r, t, l;
    const n = [bc, vc],
        s = [];

    function a(o, c) {
        return o[8] ? 0 : 1
    }
    return e = a(i), r = s[e] = n[e](i), {
        c() {
            r.c(), t = J()
        },
        l(o) {
            r.l(o), t = J()
        },
        m(o, c) {
            s[e].m(o, c), S(o, t, c), l = !0
        },
        p(o, [c]) {
            r.p(o, c)
        },
        i(o) {
            l || (N(r), l = !0)
        },
        o(o) {
            F(r), l = !1
        },
        d(o) {
            s[e].d(o), o && d(t)
        }
    }
}

function Pc(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        body: n,
        linkPeerReviewed: s,
        linkOpenAccess: a,
        authors: o,
        paperExtraInformation: c,
        fromGoogleSheets: f,
        placeholder: p
    } = t;
    let h = !1;

    function v() {
        r(0, h = !h)
    }
    return i.$$set = _ => {
        "props" in _ && r(10, t = _.props)
    }, [h, l, n, s, a, o, c, f, p, v, t]
}
class Mc extends ue {
    constructor(e) {
        super(), fe(this, e, Pc, Vc, de, {
            props: 10
        })
    }
}

function Ac(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h;
    return p = new vt({
        props: {
            props: i[2]
        }
    }), {
        c() {
            e = E("div"), r = E("div"), t = E("h4"), l = W(i[0]), n = P(), s = E("div"), a = E("p"), o = W(i[1]), c = P(), f = E("div"), le(p.$$.fragment), this.h()
        },
        l(v) {
            e = C(v, "DIV", {
                class: !0
            });
            var _ = w(e);
            r = C(_, "DIV", {});
            var m = w(r);
            t = C(m, "H4", {
                class: !0
            });
            var b = w(t);
            l = Z(b, i[0]), b.forEach(d), m.forEach(d), n = M(_), s = C(_, "DIV", {});
            var y = w(s);
            a = C(y, "P", {
                class: !0
            });
            var k = w(a);
            o = Z(k, i[1]), k.forEach(d), y.forEach(d), c = M(_), f = C(_, "DIV", {
                class: !0
            });
            var $ = w(f);
            se(p.$$.fragment, $), $.forEach(d), _.forEach(d), this.h()
        },
        h() {
            u(t, "class", "capitalize my-0 px-6"), u(a, "class", "capitalize px-6"), u(f, "class", "button-wrapper svelte-rvvtj2"), u(e, "class", "job-grid svelte-rvvtj2")
        },
        m(v, _) {
            S(v, e, _), g(e, r), g(r, t), g(t, l), g(e, n), g(e, s), g(s, a), g(a, o), g(e, c), g(e, f), ie(p, f, null), h = !0
        },
        p: U,
        i(v) {
            h || (N(p.$$.fragment, v), h = !0)
        },
        o(v) {
            F(p.$$.fragment, v), h = !1
        },
        d(v) {
            v && d(e), ne(p)
        }
    }
}

function Oc(i, e, r) {
    let {
        props: t
    } = e;
    const {
        position: l,
        location: n,
        id: s
    } = t, a = "https://iota.bamboohr.com/jobs/view.php?id=".concat(s).concat("&source=other");
    let o = {
        title: "View job",
        url: a,
        openNewTab: !0,
        buttonTheme: "green",
        buttonSize: "small"
    };
    return i.$$set = c => {
        "props" in c && r(3, t = c.props)
    }, [l, n, o, t]
}
class zc extends ue {
    constructor(e) {
        super(), fe(this, e, Oc, Ac, de, {
            props: 3
        })
    }
}

function Bc(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k;
    return _ = new Ie({
        props: {
            props: {
                text: i[1]
            }
        }
    }), y = new ir({
        props: {
            props: {
                title: i[2],
                url: i[3],
                openNewTab: !0
            }
        }
    }), {
        c() {
            e = E("a"), r = E("div"), t = E("div"), l = E("div"), n = E("img"), s = P(), a = E("div"), o = E("h3"), c = W(i[0]), f = P(), p = E("div"), h = P(), v = E("div"), le(_.$$.fragment), m = P(), b = E("div"), le(y.$$.fragment), this.h()
        },
        l($) {
            e = C($, "A", {
                class: !0,
                href: !0,
                target: !0,
                rel: !0
            });
            var I = w(e);
            r = C(I, "DIV", {
                class: !0
            });
            var D = w(r);
            t = C(D, "DIV", {
                class: !0
            });
            var T = w(t);
            l = C(T, "DIV", {
                class: !0
            });
            var z = w(l);
            n = C(z, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), z.forEach(d), s = M(T), a = C(T, "DIV", {});
            var A = w(a);
            o = C(A, "H3", {
                class: !0
            });
            var B = w(o);
            c = Z(B, i[0]), B.forEach(d), f = M(A), p = C(A, "DIV", {
                class: !0
            }), w(p).forEach(d), h = M(A), v = C(A, "DIV", {
                class: !0
            });
            var V = w(v);
            se(_.$$.fragment, V), V.forEach(d), A.forEach(d), T.forEach(d), m = M(D), b = C(D, "DIV", {
                class: !0
            });
            var L = w(b);
            se(y.$$.fragment, L), L.forEach(d), D.forEach(d), I.forEach(d), this.h()
        },
        h() {
            u(n, "class", "lazyload svelte-1hlasg0"), u(n, "data-src", i[4]), u(n, "alt", i[0]), u(l, "class", "image flex justify-center items-center mb-8 img-wrapper svelte-1hlasg0"), u(o, "class", "title mb-3 text-grey-midnight"), u(p, "class", "headline-stick size-s mb-4"), u(v, "class", "text-grey-8pm"), u(t, "class", "flex flex-col"), u(b, "class", "text-sm font-semibold"), u(r, "class", "card fade-in-bottom rounded-lg bg-white pt-12 pb-10 px-12 w-full flex flex-col justify-between svelte-1hlasg0"), u(e, "class", "card-wrapper mb-6 svelte-1hlasg0"), u(e, "href", i[3]), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer")
        },
        m($, I) {
            S($, e, I), g(e, r), g(r, t), g(t, l), g(l, n), g(t, s), g(t, a), g(a, o), g(o, c), g(a, f), g(a, p), g(a, h), g(a, v), ie(_, v, null), g(r, m), g(r, b), ie(y, b, null), k = !0
        },
        p: U,
        i($) {
            k || (N(_.$$.fragment, $), N(y.$$.fragment, $), k = !0)
        },
        o($) {
            F(_.$$.fragment, $), F(y.$$.fragment, $), k = !1
        },
        d($) {
            $ && d(e), ne(_), ne(y)
        }
    }
}

function Lc(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        body: n,
        linkText: s,
        linkUrl: a,
        image: o
    } = t, c = o && o.fields && o.fields.file ? o.fields.file.url : null;
    return i.$$set = f => {
        "props" in f && r(5, t = f.props)
    }, [l, n, s, a, c, t]
}
class Nc extends ue {
    constructor(e) {
        super(), fe(this, e, Lc, Bc, de, {
            props: 5
        })
    }
}

function Fc(i) {
    let e, r, t, l, n;
    return {
        c() {
            e = E("a"), r = E("div"), t = E("img"), this.h()
        },
        l(s) {
            e = C(s, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0
            });
            var a = w(e);
            r = C(a, "DIV", {
                class: !0
            });
            var o = w(r);
            t = C(o, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), o.forEach(d), a.forEach(d), this.h()
        },
        h() {
            u(t, "class", "lazyload svelte-pxpgya"), u(t, "data-src", i[4]), u(t, "alt", i[0]), u(r, "class", "w-full h-full flex justify-center items-center svelte-pxpgya"), u(e, "href", i[2] ? null : i[1]), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer"), u(e, "class", "partner-card mb-6 relative w-full lg:col-3 flex justify-center items-center cursor-pointer p-6 sm:p-8 svelte-pxpgya")
        },
        m(s, a) {
            S(s, e, a), g(e, r), g(r, t), l || (n = pe(e, "click", i[6]), l = !0)
        },
        p: U,
        i: U,
        o: U,
        d(s) {
            s && d(e), l = !1, n()
        }
    }
}

function Rc(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        image: n,
        linkUrl: s,
        body: a
    } = t, {
        open: o
    } = vl("simple-modal"), c = n && n.fields && n.fields.file ? n.fields.file.url : null, f = () => a ? o({
        title: l,
        imageUrl: c,
        linkUrl: s,
        body: a,
        type: "partner"
    }) : null;
    return i.$$set = p => {
        "props" in p && r(5, t = p.props)
    }, [l, s, a, o, c, t, f]
}
class jc extends ue {
    constructor(e) {
        super(), fe(this, e, Rc, Fc, de, {
            props: 5
        })
    }
}
var Uc = ca.exports,
    Je = Uc;

function Hc(i) {
    let e, r, t, l, n, s, a, o, c;
    return {
        c() {
            e = E("div"), r = E("div"), t = P(), l = E("div"), n = E("div"), s = P(), a = E("div"), o = P(), c = E("div"), this.h()
        },
        l(f) {
            e = C(f, "DIV", {
                class: !0
            });
            var p = w(e);
            r = C(p, "DIV", {
                class: !0
            }), w(r).forEach(d), t = M(p), l = C(p, "DIV", {
                class: !0
            });
            var h = w(l);
            n = C(h, "DIV", {
                class: !0
            }), w(n).forEach(d), s = M(h), a = C(h, "DIV", {
                class: !0
            }), w(a).forEach(d), o = M(h), c = C(h, "DIV", {
                class: !0
            }), w(c).forEach(d), h.forEach(d), p.forEach(d), this.h()
        },
        h() {
            u(r, "class", "placeholder-image placeholder-animation svelte-1k8i27x"), u(n, "class", "placeholder-bar svelte-1k8i27x"), u(a, "class", "placeholder-bar svelte-1k8i27x"), u(c, "class", "placeholder-bar svelte-1k8i27x"), u(l, "class", "placeholder-content placeholder-animation svelte-1k8i27x"), u(e, "class", "list-placeholder lg:col-10 mx-auto svelte-1k8i27x")
        },
        m(f, p) {
            S(f, e, p), g(e, r), g(e, t), g(e, l), g(l, n), g(l, s), g(l, a), g(l, o), g(l, c)
        },
        p: U,
        i: U,
        o: U,
        d(f) {
            f && d(e)
        }
    }
}

function qc(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _;

    function m(k, $) {
        return k[2] === "pending" ? Wc : k[2] ? Gc : Yc
    }
    let b = m(i),
        y = b(i);
    return {
        c() {
            e = E("a"), r = E("div"), y.c(), t = P(), l = E("div"), n = E("div"), s = E("span"), a = W(i[3]), o = W(","), c = P(), f = W(i[6]), p = P(), h = E("div"), v = W(i[4]), this.h()
        },
        l(k) {
            e = C(k, "A", {
                class: !0,
                href: !0,
                target: !0
            });
            var $ = w(e);
            r = C($, "DIV", {
                class: !0
            });
            var I = w(r);
            y.l(I), I.forEach(d), t = M($), l = C($, "DIV", {
                class: !0
            });
            var D = w(l);
            n = C(D, "DIV", {
                class: !0
            });
            var T = w(n);
            s = C(T, "SPAN", {
                class: !0
            });
            var z = w(s);
            a = Z(z, i[3]), o = Z(z, ","), z.forEach(d), c = M(T), f = Z(T, i[6]), T.forEach(d), p = M(D), h = C(D, "DIV", {
                class: !0
            });
            var A = w(h);
            v = Z(A, i[4]), A.forEach(d), D.forEach(d), $.forEach(d), this.h()
        },
        h() {
            u(r, "class", "image svelte-1k8i27x"), u(s, "class", "md:font-semibold"), u(n, "class", "text-grey-8pm mb-2 text-xs md:text-base"), u(h, "class", "title capitalize text-xl text-grey-midnight svelte-1k8i27x"), u(l, "class", "ml-3 md:ml-6 md:mt-1"), u(e, "class", "list-card d-block w-full p-2 rounded-lg flex justify-start items-start mb-2 bg-white lg:col-10 mx-auto lazyload svelte-1k8i27x"), u(e, "href", i[5]), u(e, "target", "_blank")
        },
        m(k, $) {
            S(k, e, $), g(e, r), y.m(r, null), g(e, t), g(e, l), g(l, n), g(n, s), g(s, a), g(s, o), g(n, c), g(n, f), g(l, p), g(l, h), g(h, v), i[7](h)
        },
        p(k, $) {
            b === (b = m(k)) && y ? y.p(k, $) : (y.d(1), y = b(k), y && (y.c(), y.m(r, null)))
        },
        i(k) {
            _ || Pt(() => {
                _ = lr(e, Rr, {
                    duration: 500
                }), _.start()
            })
        },
        o: U,
        d(k) {
            k && d(e), y.d(), i[7](null)
        }
    }
}

function Gc(i) {
    let e, r, t;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(l) {
            e = C(l, "IMG", {
                style: !0,
                class: !0,
                src: !0,
                alt: !0
            }), this.h()
        },
        h() {
            u(e, "style", r = `--object-fit: ${i[0].objectFit?i[0].objectFit:"contain"}`), u(e, "class", "h-full w-full lazyload svelte-1k8i27x"), Pe(e.src, t = i[2]) || u(e, "src", t), u(e, "alt", i[4])
        },
        m(l, n) {
            S(l, e, n)
        },
        p(l, n) {
            n & 1 && r !== (r = `--object-fit: ${l[0].objectFit?l[0].objectFit:"contain"}`) && u(e, "style", r), n & 4 && !Pe(e.src, t = l[2]) && u(e, "src", t)
        },
        d(l) {
            l && d(e)
        }
    }
}

function Yc(i) {
    let e, r, t;
    return {
        c() {
            e = E("div"), r = E("img"), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            r = C(n, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), n.forEach(d), this.h()
        },
        h() {
            Pe(r.src, t = "/images/icon-news.svg") || u(r, "src", t), u(r, "alt", ""), u(r, "class", "svelte-1k8i27x"), u(e, "class", "placeholder-image light flex justify-center items-center svelte-1k8i27x")
        },
        m(l, n) {
            S(l, e, n), g(e, r)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function Wc(i) {
    let e;
    return {
        c() {
            e = E("div"), this.h()
        },
        l(r) {
            e = C(r, "DIV", {
                class: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "class", "placeholder-image placeholder-animation svelte-1k8i27x")
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Zc(i) {
    let e;

    function r(n, s) {
        return n[0] !== "placeholder" ? qc : Hc
    }
    let t = r(i),
        l = t(i);
    return {
        c() {
            l.c(), e = J()
        },
        l(n) {
            l.l(n), e = J()
        },
        m(n, s) {
            l.m(n, s), S(n, e, s)
        },
        p(n, [s]) {
            t === (t = r(n)) && l ? l.p(n, s) : (l.d(1), l = t(n), l && (l.c(), N(l, 1), l.m(e.parentNode, e)))
        },
        i(n) {
            N(l)
        },
        o: U,
        d(n) {
            l.d(n), n && d(e)
        }
    }
}

function Kc(i, e, r) {
    let {
        props: t
    } = e, l = t.eyebrow, n = t.title, s = t.linkUrl, a = t.image, o = t.date, c = new Date(o).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }), f = "pending", p;

    function h(v) {
        Ee[v ? "unshift" : "push"](() => {
            p = v, r(1, p)
        })
    }
    return i.$$set = v => {
        "props" in v && r(0, t = v.props)
    }, i.$$.update = () => {
        i.$$.dirty & 1 && (t.imageUrl ? r(2, f = t.imageUrl) : r(2, f = a && a.fields && a.fields.file ? a.fields.file.url : null)), i.$$.dirty & 2 && p && new Je(p, {
            ellipsis: "...",
            clamp: 2
        })
    }, [t, p, f, l, n, s, c, h]
}
class Rs extends ue {
    constructor(e) {
        super(), fe(this, e, Kc, Zc, de, {
            props: 0
        })
    }
}

function Xc(i) {
    let e;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(r) {
            e = C(r, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), this.h()
        },
        h() {
            u(e, "class", "lazyload absolute mt-8 pt-1 svelte-ue0kic"), u(e, "data-src", i[4]), u(e, "alt", i[0])
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Jc(i) {
    let e, r, t;
    return r = new ir({
        props: {
            props: {
                title: i[2],
                url: i[3],
                openNewTab: !0
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "text-sm font-semibold")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function Qc(i) {
    let e, r, t, l, n, s, a, o, c, f, p = i[4] && Xc(i);
    o = new Ie({
        props: {
            props: {
                text: i[1]
            }
        }
    });
    let h = i[2] && i[3] && Jc(i);
    return {
        c() {
            e = E("a"), p && p.c(), r = P(), t = E("div"), l = E("h4"), n = W(i[0]), s = P(), a = E("div"), le(o.$$.fragment), c = P(), h && h.c(), this.h()
        },
        l(v) {
            e = C(v, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0
            });
            var _ = w(e);
            p && p.l(_), r = M(_), t = C(_, "DIV", {
                class: !0
            });
            var m = w(t);
            l = C(m, "H4", {
                class: !0
            });
            var b = w(l);
            n = Z(b, i[0]), b.forEach(d), s = M(m), a = C(m, "DIV", {
                class: !0
            });
            var y = w(a);
            se(o.$$.fragment, y), y.forEach(d), m.forEach(d), c = M(_), h && h.l(_), _.forEach(d), this.h()
        },
        h() {
            u(l, "class", "title mb-2 text-grey-midnight"), u(a, "class", "text-grey-10pm text-xs"), u(t, "class", "mt-24 pt-3"), u(e, "href", i[3]), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer"), u(e, "class", "card fade-in-bottom rounded-lg bg-white mb-6 pb-8 px-8 flex flex-col justify-between svelte-ue0kic"), Q(e, "no-link", !i[3])
        },
        m(v, _) {
            S(v, e, _), p && p.m(e, null), g(e, r), g(e, t), g(t, l), g(l, n), g(t, s), g(t, a), ie(o, a, null), g(e, c), h && h.m(e, null), f = !0
        },
        p(v, [_]) {
            v[4] && p.p(v, _), v[2] && v[3] && h.p(v, _)
        },
        i(v) {
            f || (N(o.$$.fragment, v), N(h), f = !0)
        },
        o(v) {
            F(o.$$.fragment, v), F(h), f = !1
        },
        d(v) {
            v && d(e), p && p.d(), ne(o), h && h.d()
        }
    }
}

function xc(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        body: n,
        linkText: s,
        linkUrl: a,
        image: o
    } = t, c = o && o.fields && o.fields.file ? o.fields.file.url : null;
    return i.$$set = f => {
        "props" in f && r(5, t = f.props)
    }, [l, n, s, a, c, t]
}
class eu extends ue {
    constructor(e) {
        super(), fe(this, e, xc, Qc, de, {
            props: 5
        })
    }
}
var tl = [60, 60, 24, 7, 365 / 7 / 12, 12];

function Pi(i) {
    return i instanceof Date ? i : !isNaN(i) || /^\d+$/.test(i) ? new Date(parseInt(i)) : (i = (i || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(i))
}

function tu(i, e) {
    var r = i < 0 ? 1 : 0;
    i = Math.abs(i);
    for (var t = i, l = 0; i >= tl[l] && l < tl.length; l++) i /= tl[l];
    return i = Math.floor(i), l *= 2, i > (l === 0 ? 9 : 1) && (l += 1), e(i, l, t)[r].replace("%s", i.toString())
}

function ru(i, e) {
    var r = e ? Pi(e) : new Date;
    return (+r - +Pi(i)) / 1e3
}
var lu = function (i, e, r) {
    var t = ru(i, r && r.relativeDate);
    return tu(t, ua(e))
};

function iu(i) {
    let e = (Math.floor(i[6] / 100) / 10).toFixed(1) + "",
        r, t;
    return {
        c() {
            r = W(e), t = W("k views")
        },
        l(l) {
            r = Z(l, e), t = Z(l, "k views")
        },
        m(l, n) {
            S(l, r, n), S(l, t, n)
        },
        p: U,
        d(l) {
            l && d(r), l && d(t)
        }
    }
}

function nu(i) {
    let e, r;
    return {
        c() {
            e = W(i[6]), r = W(" views")
        },
        l(t) {
            e = Z(t, i[6]), r = Z(t, " views")
        },
        m(t, l) {
            S(t, e, l), S(t, r, l)
        },
        p: U,
        d(t) {
            t && d(e), t && d(r)
        }
    }
}

function su(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I, D, T, z = i[7].slice(0, 255) + "",
        A, B, V, L, O, R, j;

    function G(ee, q) {
        return +ee[6] < 1e3 ? nu : iu
    }
    let Y = G(i)(i);
    return {
        c() {
            e = E("div"), r = E("div"), t = E("div"), l = E("img"), n = P(), s = E("div"), a = E("div"), o = W(i[3]), c = P(), f = E("div"), p = W(i[5]), h = P(), v = E("span"), _ = W("\xB7"), m = P(), Y.c(), b = P(), y = E("span"), k = W("\xB7"), $ = P(), I = W(i[9]), D = P(), T = E("div"), A = W(z), B = P(), V = E("iframe"), this.h()
        },
        l(ee) {
            e = C(ee, "DIV", {
                class: !0
            });
            var q = w(e);
            r = C(q, "DIV", {
                class: !0
            });
            var x = w(r);
            t = C(x, "DIV", {
                class: !0
            });
            var re = w(t);
            l = C(re, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), re.forEach(d), x.forEach(d), n = M(q), s = C(q, "DIV", {
                class: !0
            });
            var te = w(s);
            a = C(te, "DIV", {
                class: !0
            });
            var H = w(a);
            o = Z(H, i[3]), H.forEach(d), c = M(te), f = C(te, "DIV", {
                class: !0
            });
            var K = w(f);
            p = Z(K, i[5]), h = M(K), v = C(K, "SPAN", {
                class: !0
            });
            var ce = w(v);
            _ = Z(ce, "\xB7"), ce.forEach(d), m = M(K), Y.l(K), b = M(K), y = C(K, "SPAN", {
                class: !0
            });
            var ye = w(y);
            k = Z(ye, "\xB7"), ye.forEach(d), $ = M(K), I = Z(K, i[9]), K.forEach(d), D = M(te), T = C(te, "DIV", {
                class: !0
            });
            var ge = w(T);
            A = Z(ge, z), ge.forEach(d), te.forEach(d), B = M(q), V = C(q, "IFRAME", {
                class: !0,
                title: !0,
                src: !0,
                frameborder: !0,
                allow: !0
            }), w(V).forEach(d), q.forEach(d), this.h()
        },
        h() {
            u(l, "class", "object-cover lazyload svelte-gxc6n9"), u(l, "data-src", i[4].url), u(l, "alt", i[3]), u(t, "class", "svelte-gxc6n9"), u(r, "class", "image pt-3 px-2 md:pt-0 md:px-0 svelte-gxc6n9"), u(a, "class", "title capitalize text-xl text-grey-midnight svelte-gxc6n9"), u(v, "class", "font-bold"), u(y, "class", "font-bold"), u(f, "class", "text-grey-8pm my-2 text-xs md:text-base svelte-gxc6n9"), u(T, "class", "svelte-gxc6n9"), u(s, "class", "mt-1 w-full px-2 md:px-0 md:ml-4 lg:ml-12 md:mt-2 lg:col-6 svelte-gxc6n9"), u(V, "class", "hidden"), u(V, "title", "youtube"), Pe(V.src, L = "https://www.youtube.com/embed/" + i[2]) || u(V, "src", L), u(V, "frameborder", "0"), u(V, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"), V.allowFullscreen = !0, u(e, "class", "youtube-card d-block w-full p-2 rounded-lg flex justify-start items-start flex-wrap mb-6 md:mb-2 bg-white cursor-pointer overflow-hidden svelte-gxc6n9")
        },
        m(ee, q) {
            S(ee, e, q), g(e, r), g(r, t), g(t, l), g(e, n), g(e, s), g(s, a), g(a, o), i[11](a), g(s, c), g(s, f), g(f, p), g(f, h), g(f, v), g(v, _), g(f, m), Y.m(f, null), g(f, b), g(f, y), g(y, k), g(f, $), g(f, I), g(s, D), g(s, T), g(T, A), i[12](T), g(e, B), g(e, V), R || (j = pe(e, "click", i[13]), R = !0)
        },
        p(ee, [q]) {
            Y.p(ee, q)
        },
        i(ee) {
            O || Pt(() => {
                O = lr(e, Rr, {
                    duration: 500
                }), O.start()
            })
        },
        o: U,
        d(ee) {
            ee && d(e), i[11](null), Y.d(), i[12](null), R = !1, j()
        }
    }
}

function au(i, e, r) {
    let {
        props: t
    } = e;
    const {
        videoId: l,
        title: n,
        thumbnail: s,
        channelTitle: a,
        viewCount: o,
        publishedAt: c,
        description: f
    } = t, {
        open: p
    } = vl("simple-modal"), h = lu(c);
    let v, _;

    function m(k) {
        Ee[k ? "unshift" : "push"](() => {
            v = k, r(0, v)
        })
    }

    function b(k) {
        Ee[k ? "unshift" : "push"](() => {
            _ = k, r(1, _)
        })
    }
    const y = () => p({
        youtubeID: l,
        title: n,
        type: "video"
    });
    return i.$$set = k => {
        "props" in k && r(10, t = k.props)
    }, i.$$.update = () => {
        i.$$.dirty & 1 && v && new Je(v, {
            ellipsis: "...",
            clamp: 2
        }), i.$$.dirty & 2 && _ && new Je(_, {
            ellipsis: "...",
            clamp: 2
        })
    }, [v, _, l, n, s, a, o, f, p, h, t, m, b, y]
}
class ou extends ue {
    constructor(e) {
        super(), fe(this, e, au, su, de, {
            props: 10
        })
    }
}

function cu(i) {
    let e, r, t, l;
    return {
        c() {
            e = E("div"), r = E("iframe"), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0
            });
            var s = w(e);
            r = C(s, "IFRAME", {
                src: !0,
                title: !0,
                width: !0,
                height: !0,
                frameborder: !0,
                scrolling: !0,
                seamless: !0,
                style: !0
            }), w(r).forEach(d), s.forEach(d), this.h()
        },
        h() {
            Pe(r.src, t = `https://share.transistor.fm/e/${i[1]}/`) || u(r, "src", t), u(r, "title", i[0]), u(r, "width", "100%"), u(r, "height", "180"), u(r, "frameborder", "0"), u(r, "scrolling", "no"), u(r, "seamless", "true"), Se(r, "width", "100%"), Se(r, "height", "180px"), u(e, "class", "card d-block w-full md:p-0 rounded-lg flex justify-start items-start flex-wrap mb-6 md:mb-2 bg-white cursor-pointer overflow-hidden svelte-1r0m95g")
        },
        m(n, s) {
            S(n, e, s), g(e, r)
        },
        p: U,
        i(n) {
            l || Pt(() => {
                l = lr(e, Rr, {
                    duration: 500
                }), l.start()
            })
        },
        o: U,
        d(n) {
            n && d(e)
        }
    }
}

function uu(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        podcastId: n
    } = t;
    return i.$$set = s => {
        "props" in s && r(2, t = s.props)
    }, [l, n, t]
}
class fu extends ue {
    constructor(e) {
        super(), fe(this, e, uu, cu, de, {
            props: 2
        })
    }
}

function du(i) {
    let e, r;
    return {
        c() {
            e = E("div"), r = W(i[1]), this.h()
        },
        l(t) {
            e = C(t, "DIV", {
                class: !0
            });
            var l = w(e);
            r = Z(l, i[1]), l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "tag z-10 text-center w-full svelte-sadvni")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function hu(i) {
    let e, r, t;
    return r = new vt({
        props: {
            props: i[0]
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "w-full text-center")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p(l, n) {
            const s = {};
            n & 1 && (s.props = l[0]), r.$set(s)
        },
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function _u(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _ = i[1] && du(i);
    c = new Ie({
        props: {
            props: {
                text: i[4]
            }
        }
    });
    let m = (i[6] || i[5]) && hu(i);
    return {
        c() {
            e = E("a"), r = E("div"), _ && _.c(), t = P(), l = E("div"), n = E("h3"), s = W(i[3]), a = P(), o = E("div"), le(c.$$.fragment), f = P(), m && m.c(), this.h()
        },
        l(b) {
            e = C(b, "A", {
                class: !0,
                href: !0,
                target: !0,
                rel: !0
            });
            var y = w(e);
            r = C(y, "DIV", {
                class: !0
            });
            var k = w(r);
            _ && _.l(k), t = M(k), l = C(k, "DIV", {
                class: !0
            });
            var $ = w(l);
            n = C($, "H3", {
                class: !0
            });
            var I = w(n);
            s = Z(I, i[3]), I.forEach(d), a = M($), o = C($, "DIV", {
                class: !0
            });
            var D = w(o);
            se(c.$$.fragment, D), D.forEach(d), $.forEach(d), f = M(k), m && m.l(k), k.forEach(d), y.forEach(d), this.h()
        },
        h() {
            u(n, "class", "mb-8 w-full text-center svelte-sadvni"), u(o, "class", "richTextBlock text-grey-10pm text-center relative mb-12"), u(l, "class", "flex justify-center flex-wrap z-10"), u(r, "class", "block ghost-card rounded-lg bg-white " + i[2] + " py-16 px-8 relative flex flex-col items-start justify-between svelte-sadvni"), u(e, "class", "ghost-card-wrapper fade-in-bottom mx-auto md:mx-0 my-4 svelte-sadvni"), u(e, "href", i[6]), u(e, "target", i[6] ? Ae(i[6]) ? "" : "_blank" : null), u(e, "rel", Ae(i[6]) ? null : "noopener noreferrer"), Q(e, "has_2_columns", i[7])
        },
        m(b, y) {
            S(b, e, y), g(e, r), _ && _.m(r, null), g(r, t), g(r, l), g(l, n), g(n, s), g(l, a), g(l, o), ie(c, o, null), g(r, f), m && m.m(r, null), p = !0, h || (v = [pe(e, "mouseenter", Jt(i[8])), pe(e, "mouseleave", Jt(i[9]))], h = !0)
        },
        p(b, [y]) {
            b[1] && _.p(b, y), (b[6] || b[5]) && m.p(b, y)
        },
        i(b) {
            p || (N(c.$$.fragment, b), N(m), p = !0)
        },
        o(b) {
            F(c.$$.fragment, b), F(m), p = !1
        },
        d(b) {
            b && d(e), _ && _.d(), ne(c), m && m.d(), h = !1, nt(v)
        }
    }
}

function pu(i, e, r) {
    let t, {
        props: l
    } = e;
    const {
        tag: n,
        theme: s,
        title: a,
        body: o,
        linkText: c,
        linkUrl: f,
        cardsCounter: p
    } = l;
    let h = p % 3 !== 0 && p % 2 === 0,
        v = s;

    function _(b) {
        window.innerWidth >= 720 && r(11, v = "ghost-white")
    }

    function m(b) {
        r(11, v = s)
    }
    return i.$$set = b => {
        "props" in b && r(10, l = b.props)
    }, i.$$.update = () => {
        i.$$.dirty & 2048 && r(0, t = {
            title: c,
            url: f,
            size: "small",
            buttonTheme: v,
            openNewTab: !Ae(f)
        })
    }, [t, n, s, a, o, c, f, h, _, m, l, v]
}
class mu extends ue {
    constructor(e) {
        super(), fe(this, e, pu, _u, de, {
            props: 10
        })
    }
}

function gu(i, e, r) {
    const t = i.slice();
    return t[20] = e[r], t[19] = r, t
}

function Mi(i, e, r) {
    const t = i.slice();
    return t[17] = e[r], t[19] = r, t
}

function vu(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k = i[3] && Ai(i);
    s = new nr({
        props: {
            props: {
                url: i[8]
            }
        }
    });
    let $ = i[4] && Oi(i),
        I = i[6] && yu(i);
    return b = new Ie({
        props: {
            props: {
                text: i[7]
            }
        }
    }), {
        c() {
            e = E("a"), r = E("div"), t = E("div"), k && k.c(), l = P(), n = E("div"), le(s.$$.fragment), a = P(), o = E("div"), c = E("h5"), f = W(i[5]), p = P(), h = E("div"), $ && $.c(), v = P(), I && I.c(), _ = P(), m = E("div"), le(b.$$.fragment), this.h()
        },
        l(D) {
            e = C(D, "A", {
                class: !0,
                href: !0,
                target: !0
            });
            var T = w(e);
            r = C(T, "DIV", {
                class: !0
            });
            var z = w(r);
            t = C(z, "DIV", {
                class: !0
            });
            var A = w(t);
            k && k.l(A), l = M(A), n = C(A, "DIV", {
                class: !0
            });
            var B = w(n);
            se(s.$$.fragment, B), B.forEach(d), A.forEach(d), a = M(z), o = C(z, "DIV", {
                class: !0
            });
            var V = w(o);
            c = C(V, "H5", {
                class: !0
            });
            var L = w(c);
            f = Z(L, i[5]), L.forEach(d), p = M(V), h = C(V, "DIV", {
                class: !0
            });
            var O = w(h);
            $ && $.l(O), v = M(O), I && I.l(O), O.forEach(d), _ = M(V), m = C(V, "DIV", {
                class: !0
            });
            var R = w(m);
            se(b.$$.fragment, R), R.forEach(d), V.forEach(d), z.forEach(d), T.forEach(d), this.h()
        },
        h() {
            u(n, "class", "circle-link svelte-1euz3v5"), u(t, "class", "cardImage svelte-1euz3v5"), u(c, "class", "mb-1 text-grey-10pm"), u(h, "class", "text-grey-8pm text-xs flex justify-between mb-1"), u(m, "class", "body"), u(o, "class", "cardContent svelte-1euz3v5"), u(r, "class", "card overflow-hidden rounded-lg bg-white fade-in-bottom svelte-1euz3v5"), u(e, "class", "card-wrapper news-card mb-8 svelte-1euz3v5"), u(e, "href", i[8]), u(e, "target", "_blank")
        },
        m(D, T) {
            S(D, e, T), g(e, r), g(r, t), k && k.m(t, null), g(t, l), g(t, n), ie(s, n, null), g(r, a), g(r, o), g(o, c), g(c, f), i[11](c), g(o, p), g(o, h), $ && $.m(h, null), g(h, v), I && I.m(h, null), g(o, _), g(o, m), ie(b, m, null), i[12](m), y = !0
        },
        p(D, T) {
            D[3] ? k ? k.p(D, T) : (k = Ai(D), k.c(), k.m(t, l)) : k && (k.d(1), k = null), D[4] ? $ ? $.p(D, T) : ($ = Oi(D), $.c(), $.m(h, v)) : $ && ($.d(1), $ = null), D[6] && I.p(D, T)
        },
        i(D) {
            y || (N(s.$$.fragment, D), N(b.$$.fragment, D), y = !0)
        },
        o(D) {
            F(s.$$.fragment, D), F(b.$$.fragment, D), y = !1
        },
        d(D) {
            D && d(e), k && k.d(), ne(s), i[11](null), $ && $.d(), I && I.d(), ne(b), i[12](null)
        }
    }
}

function bu(i) {
    let e, r, t, l;
    const n = [wu, ku],
        s = [];

    function a(o, c) {
        return o[0] ? 0 : 1
    }
    return r = a(i), t = s[r] = n[r](i), {
        c() {
            e = E("div"), t.c(), this.h()
        },
        l(o) {
            e = C(o, "DIV", {
                class: !0
            });
            var c = w(e);
            t.l(c), c.forEach(d), this.h()
        },
        h() {
            u(e, "class", "fade-in-bottom row flex flex-wrap w-full")
        },
        m(o, c) {
            S(o, e, c), s[r].m(e, null), l = !0
        },
        p(o, c) {
            let f = r;
            r = a(o), r === f ? s[r].p(o, c) : (ke(), F(s[f], 1, 1, () => {
                s[f] = null
            }), we(), t = s[r], t ? t.p(o, c) : (t = s[r] = n[r](o), t.c()), N(t, 1), t.m(e, null))
        },
        i(o) {
            l || (N(t), l = !0)
        },
        o(o) {
            F(t), l = !1
        },
        d(o) {
            o && d(e), s[r].d()
        }
    }
}

function Ai(i) {
    let e;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(r) {
            e = C(r, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), this.h()
        },
        h() {
            u(e, "class", "lazyload object-cover w-full h-full"), u(e, "data-src", i[3]), u(e, "alt", i[5])
        },
        m(r, t) {
            S(r, e, t)
        },
        p(r, t) {
            t & 8 && u(e, "data-src", r[3])
        },
        d(r) {
            r && d(e)
        }
    }
}

function Oi(i) {
    let e, r;
    return {
        c() {
            e = E("div"), r = W(i[4])
        },
        l(t) {
            e = C(t, "DIV", {});
            var l = w(e);
            r = Z(l, i[4]), l.forEach(d)
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p(t, l) {
            l & 16 && je(r, t[4])
        },
        d(t) {
            t && d(e)
        }
    }
}

function yu(i) {
    let e, r, t;
    return {
        c() {
            e = E("div"), r = W(i[6]), t = W(" MIN READ")
        },
        l(l) {
            e = C(l, "DIV", {});
            var n = w(e);
            r = Z(n, i[6]), t = Z(n, " MIN READ"), n.forEach(d)
        },
        m(l, n) {
            S(l, e, n), g(e, r), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function ku(i) {
    let e, r = Array(3),
        t = [];
    for (let l = 0; l < r.length; l += 1) t[l] = Eu(gu(i, r, l));
    return {
        c() {
            for (let l = 0; l < t.length; l += 1) t[l].c();
            e = J()
        },
        l(l) {
            for (let n = 0; n < t.length; n += 1) t[n].l(l);
            e = J()
        },
        m(l, n) {
            for (let s = 0; s < t.length; s += 1) t[s].m(l, n);
            S(l, e, n)
        },
        p: U,
        i: U,
        o: U,
        d(l) {
            De(t, l), l && d(e)
        }
    }
}

function wu(i) {
    let e, r, t = i[0],
        l = [];
    for (let s = 0; s < t.length; s += 1) l[s] = zi(Mi(i, t, s));
    const n = s => F(l[s], 1, 1, () => {
        l[s] = null
    });
    return {
        c() {
            for (let s = 0; s < l.length; s += 1) l[s].c();
            e = J()
        },
        l(s) {
            for (let a = 0; a < l.length; a += 1) l[a].l(s);
            e = J()
        },
        m(s, a) {
            for (let o = 0; o < l.length; o += 1) l[o].m(s, a);
            S(s, e, a), r = !0
        },
        p(s, a) {
            if (a & 1) {
                t = s[0];
                let o;
                for (o = 0; o < t.length; o += 1) {
                    const c = Mi(s, t, o);
                    l[o] ? (l[o].p(c, a), N(l[o], 1)) : (l[o] = zi(c), l[o].c(), N(l[o], 1), l[o].m(e.parentNode, e))
                }
                for (ke(), o = t.length; o < l.length; o += 1) n(o);
                we()
            }
        },
        i(s) {
            if (!r) {
                for (let a = 0; a < t.length; a += 1) N(l[a]);
                r = !0
            }
        },
        o(s) {
            l = l.filter(Boolean);
            for (let a = 0; a < l.length; a += 1) F(l[a]);
            r = !1
        },
        d(s) {
            De(l, s), s && d(e)
        }
    }
}

function Eu(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $;
    return {
        c() {
            e = E("div"), r = E("div"), t = E("div"), l = E("div"), n = E("div"), s = P(), a = E("div"), o = E("div"), c = E("div"), f = P(), p = E("div"), h = P(), v = E("div"), _ = P(), m = E("div"), b = P(), y = E("div"), k = P(), this.h()
        },
        l(I) {
            e = C(I, "DIV", {
                class: !0,
                key: !0
            });
            var D = w(e);
            r = C(D, "DIV", {
                class: !0
            });
            var T = w(r);
            t = C(T, "DIV", {
                class: !0
            });
            var z = w(t);
            l = C(z, "DIV", {
                class: !0
            });
            var A = w(l);
            n = C(A, "DIV", {
                class: !0
            }), w(n).forEach(d), A.forEach(d), z.forEach(d), s = M(T), a = C(T, "DIV", {
                class: !0
            });
            var B = w(a);
            o = C(B, "DIV", {
                class: !0
            });
            var V = w(o);
            c = C(V, "DIV", {
                class: !0
            }), w(c).forEach(d), f = M(V), p = C(V, "DIV", {
                class: !0
            }), w(p).forEach(d), h = M(V), v = C(V, "DIV", {
                class: !0
            }), w(v).forEach(d), _ = M(V), m = C(V, "DIV", {
                class: !0
            }), w(m).forEach(d), b = M(V), y = C(V, "DIV", {
                class: !0
            }), w(y).forEach(d), V.forEach(d), B.forEach(d), T.forEach(d), k = M(D), D.forEach(d), this.h()
        },
        h() {
            u(n, "class", "placeholder-bar svelte-1euz3v5"), u(l, "class", "placeholder placeholder-animation svelte-1euz3v5"), u(t, "class", "cardImage placeholder svelte-1euz3v5"), u(c, "class", "placeholder-bar mb-3 svelte-1euz3v5"), u(p, "class", "placeholder-bar svelte-1euz3v5"), u(v, "class", "placeholder-bar svelte-1euz3v5"), u(m, "class", "placeholder-bar svelte-1euz3v5"), u(y, "class", "placeholder-bar svelte-1euz3v5"), u(o, "class", "placeholder placeholder-animation svelte-1euz3v5"), u(a, "class", "cardContent svelte-1euz3v5"), u(r, "class", "card overflow-hidden rounded-lg bg-white svelte-1euz3v5"), u(e, "class", "card-wrapper news-card mb-8 svelte-1euz3v5"), u(e, "key", $ = "newsCardplaceholder-" + i[19])
        },
        m(I, D) {
            S(I, e, D), g(e, r), g(r, t), g(t, l), g(l, n), g(r, s), g(r, a), g(a, o), g(o, c), g(o, f), g(o, p), g(o, h), g(o, v), g(o, _), g(o, m), g(o, b), g(o, y), g(e, k)
        },
        p: U,
        d(I) {
            I && d(e)
        }
    }
}

function zi(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v = i[17].title + "",
        _, m, b, y, k = i[17].dateString + "",
        $, I, D, T = i[17].content + "",
        z, A, B, V, L;
    return c = new nr({
        props: {
            props: {
                url: i[17].linkUrl
            }
        }
    }), {
        c() {
            e = E("a"), r = E("div"), t = E("div"), l = E("img"), a = P(), o = E("div"), le(c.$$.fragment), f = P(), p = E("div"), h = E("h5"), _ = W(v), m = P(), b = E("div"), y = E("div"), $ = W(k), I = P(), D = E("div"), z = W(T), A = P(), this.h()
        },
        l(O) {
            e = C(O, "A", {
                class: !0,
                href: !0,
                target: !0,
                rel: !0,
                key: !0
            });
            var R = w(e);
            r = C(R, "DIV", {
                class: !0
            });
            var j = w(r);
            t = C(j, "DIV", {
                class: !0
            });
            var G = w(t);
            l = C(G, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), a = M(G), o = C(G, "DIV", {
                class: !0
            });
            var X = w(o);
            se(c.$$.fragment, X), X.forEach(d), G.forEach(d), f = M(j), p = C(j, "DIV", {
                class: !0
            });
            var Y = w(p);
            h = C(Y, "H5", {
                class: !0
            });
            var ee = w(h);
            _ = Z(ee, v), ee.forEach(d), m = M(Y), b = C(Y, "DIV", {
                class: !0
            });
            var q = w(b);
            y = C(q, "DIV", {});
            var x = w(y);
            $ = Z(x, k), x.forEach(d), q.forEach(d), I = M(Y), D = C(Y, "DIV", {
                class: !0
            });
            var re = w(D);
            z = Z(re, T), re.forEach(d), Y.forEach(d), j.forEach(d), A = M(R), R.forEach(d), this.h()
        },
        h() {
            u(l, "class", "lazyload object-cover w-full h-full"), u(l, "data-src", n = i[17].imageUrl), u(l, "alt", s = i[17].title), u(o, "class", "circle-link svelte-1euz3v5"), u(t, "class", "cardImage svelte-1euz3v5"), u(h, "class", "clampHeading mb-1 text-grey-10pm"), u(b, "class", "text-grey-8pm text-xs flex justify-between mb-1"), u(D, "class", "body clampBody"), u(p, "class", "cardContent svelte-1euz3v5"), u(r, "class", "card overflow-hidden rounded-lg bg-white svelte-1euz3v5"), u(e, "class", "card-wrapper news-card mb-8 svelte-1euz3v5"), u(e, "href", B = i[17].linkUrl), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer"), u(e, "key", V = "newsCard-" + i[19])
        },
        m(O, R) {
            S(O, e, R), g(e, r), g(r, t), g(t, l), g(t, a), g(t, o), ie(c, o, null), g(r, f), g(r, p), g(p, h), g(h, _), g(p, m), g(p, b), g(b, y), g(y, $), g(p, I), g(p, D), g(D, z), g(e, A), L = !0
        },
        p(O, R) {
            (!L || R & 1 && n !== (n = O[17].imageUrl)) && u(l, "data-src", n), (!L || R & 1 && s !== (s = O[17].title)) && u(l, "alt", s);
            const j = {};
            R & 1 && (j.props = {
                url: O[17].linkUrl
            }), c.$set(j), (!L || R & 1) && v !== (v = O[17].title + "") && je(_, v), (!L || R & 1) && k !== (k = O[17].dateString + "") && je($, k), (!L || R & 1) && T !== (T = O[17].content + "") && je(z, T), (!L || R & 1 && B !== (B = O[17].linkUrl)) && u(e, "href", B)
        },
        i(O) {
            L || (N(c.$$.fragment, O), L = !0)
        },
        o(O) {
            F(c.$$.fragment, O), L = !1
        },
        d(O) {
            O && d(e), ne(c)
        }
    }
}

function Cu(i) {
    let e, r, t, l;
    const n = [bu, vu],
        s = [];

    function a(o, c) {
        return o[9] ? 0 : 1
    }
    return e = a(i), r = s[e] = n[e](i), {
        c() {
            r.c(), t = J()
        },
        l(o) {
            r.l(o), t = J()
        },
        m(o, c) {
            s[e].m(o, c), S(o, t, c), l = !0
        },
        p(o, [c]) {
            r.p(o, c)
        },
        i(o) {
            l || (N(r), l = !0)
        },
        o(o) {
            F(r), l = !1
        },
        d(o) {
            s[e].d(o), o && d(t)
        }
    }
}
const $u = 3;

function Iu(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        date: n,
        readTime: s,
        body: a,
        image: o,
        linkUrl: c,
        mediumFetchTag: f
    } = t;
    let p, h, v, _, m;
    const b = I => new Date(I).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).toUpperCase().replace(",", "");
    async function y(I) {
        try {
            let T = await (await fetch(`/get-posts.json?tag=${I}&items=${$u}`)).json();
            return T = T == null ? void 0 : T.posts.map(z => {
                let A, B, V;
                return A = z.feature_image.replace("/images/", "/images/size/w600/").replace(/^http:\/\//i, "https://"), V = z.excerpt, B = b(z.published_at), {
                    title: z.title,
                    linkUrl: z.url.replace(/^http:\/\//i, "https://"),
                    imageUrl: A,
                    dateString: B,
                    content: V
                }
            }), T
        } catch {
            return null
        }
    }
    He(async () => {
        f ? r(0, v = await y(f)) : (r(3, p = o && o.fields && o.fields.file ? o.fields.file.url : null), n && r(4, h = b(n)))
    });

    function k(I) {
        Ee[I ? "unshift" : "push"](() => {
            _ = I, r(1, _)
        })
    }

    function $(I) {
        Ee[I ? "unshift" : "push"](() => {
            m = I, r(2, m)
        })
    }
    return i.$$set = I => {
        "props" in I && r(10, t = I.props)
    }, i.$$.update = () => {
        i.$$.dirty & 3 && (_ || v) && (_ ? new Je(_, {
            ellipsis: "...",
            clamp: 1
        }) : setTimeout(function () {
            document.querySelectorAll(".news-card .clampHeading").forEach(D => {
                new Je(D, {
                    ellipsis: "...",
                    clamp: 1
                })
            })
        }, 100)), i.$$.dirty & 5 && (m || v) && (m ? new Je(m, {
            ellipsis: "...",
            clamp: 4
        }) : setTimeout(function () {
            document.querySelectorAll(".news-card .clampBody").forEach(D => {
                new Je(D, {
                    ellipsis: "...",
                    clamp: 4
                })
            })
        }, 100))
    }, [v, _, m, p, h, l, s, a, c, f, t, k, $]
}
class Du extends ue {
    constructor(e) {
        super(), fe(this, e, Iu, Cu, de, {
            props: 10
        })
    }
}

function Tu(i) {
    let e;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(r) {
            e = C(r, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), this.h()
        },
        h() {
            u(e, "class", "object-cover w-full h-full lazyload"), u(e, "data-src", i[7]), u(e, "alt", i[2])
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Su(i) {
    let e, r;
    return {
        c() {
            e = E("div"), r = W(i[6]), this.h()
        },
        l(t) {
            e = C(t, "DIV", {
                class: !0
            });
            var l = w(e);
            r = Z(l, i[6]), l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mr-8")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Vu(i) {
    let e, r, t;
    return {
        c() {
            e = E("div"), r = W(i[3]), t = W(" MIN READ")
        },
        l(l) {
            e = C(l, "DIV", {});
            var n = w(e);
            r = Z(n, i[3]), t = Z(n, " MIN READ"), n.forEach(d)
        },
        m(l, n) {
            S(l, e, n), g(e, r), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function Pu(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y = i[7] && Tu(i);
    n = new nr({
        props: {
            props: {
                url: i[5]
            }
        }
    });
    let k = i[6] && Su(i),
        $ = i[3] && Vu(i);
    return m = new Ie({
        props: {
            props: {
                text: i[4]
            }
        }
    }), {
        c() {
            e = E("a"), r = E("div"), y && y.c(), t = P(), l = E("div"), le(n.$$.fragment), s = P(), a = E("div"), o = E("h5"), c = W(i[2]), f = P(), p = E("div"), k && k.c(), h = P(), $ && $.c(), v = P(), _ = E("div"), le(m.$$.fragment), this.h()
        },
        l(I) {
            e = C(I, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0
            });
            var D = w(e);
            r = C(D, "DIV", {
                class: !0
            });
            var T = w(r);
            y && y.l(T), t = M(T), l = C(T, "DIV", {
                class: !0
            });
            var z = w(l);
            se(n.$$.fragment, z), z.forEach(d), T.forEach(d), s = M(D), a = C(D, "DIV", {
                class: !0
            });
            var A = w(a);
            o = C(A, "H5", {
                class: !0
            });
            var B = w(o);
            c = Z(B, i[2]), B.forEach(d), f = M(A), p = C(A, "DIV", {
                class: !0
            });
            var V = w(p);
            k && k.l(V), h = M(V), $ && $.l(V), V.forEach(d), v = M(A), _ = C(A, "DIV", {
                class: !0
            });
            var L = w(_);
            se(m.$$.fragment, L), L.forEach(d), A.forEach(d), D.forEach(d), this.h()
        },
        h() {
            u(l, "class", "circle-link svelte-1660vbe"), u(r, "class", "cardImage svelte-1660vbe"), u(o, "class", "mb-1 text-grey-10pm"), u(p, "class", "text-grey-8pm text-xs mb-1 flex justify-start"), u(_, "class", "body svelte-1660vbe"), u(a, "class", "cardContent svelte-1660vbe"), u(e, "href", i[5]), u(e, "target", i[5] ? Ae(i[5]) ? "" : "_blank" : null), u(e, "rel", Ae(i[5]) ? null : "noopener noreferrer"), u(e, "class", "card rounded-lg bg-white mx-2 mb-4 lg:mx-0 fade-in-bottom svelte-1660vbe")
        },
        m(I, D) {
            S(I, e, D), g(e, r), y && y.m(r, null), g(r, t), g(r, l), ie(n, l, null), g(e, s), g(e, a), g(a, o), g(o, c), i[9](o), g(a, f), g(a, p), k && k.m(p, null), g(p, h), $ && $.m(p, null), g(a, v), g(a, _), ie(m, _, null), i[10](_), b = !0
        },
        p(I, [D]) {
            I[7] && y.p(I, D), I[6] && k.p(I, D), I[3] && $.p(I, D)
        },
        i(I) {
            b || (N(n.$$.fragment, I), N(m.$$.fragment, I), b = !0)
        },
        o(I) {
            F(n.$$.fragment, I), F(m.$$.fragment, I), b = !1
        },
        d(I) {
            I && d(e), y && y.d(), ne(n), i[9](null), k && k.d(), $ && $.d(), ne(m), i[10](null)
        }
    }
}

function Mu(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        date: n,
        readTime: s,
        body: a,
        image: o,
        linkUrl: c
    } = t, f = n ? new Date(n).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).toUpperCase().replace(",", "") : null, p = o && o.fields && o.fields.file ? o.fields.file.url : null;
    let h, v;
    He(async () => {
        new Je(h, {
            ellipsis: "...",
            clamp: 1
        }), new Je(v, {
            ellipsis: "...",
            clamp: 3
        })
    });

    function _(b) {
        Ee[b ? "unshift" : "push"](() => {
            h = b, r(0, h)
        })
    }

    function m(b) {
        Ee[b ? "unshift" : "push"](() => {
            v = b, r(1, v)
        })
    }
    return i.$$set = b => {
        "props" in b && r(8, t = b.props)
    }, [h, v, l, s, a, c, f, p, t, _, m]
}
class Au extends ue {
    constructor(e) {
        super(), fe(this, e, Mu, Pu, de, {
            props: 8
        })
    }
}

function Ou(i) {
    let e, r;
    return {
        c() {
            e = E("div"), r = W(i[6]), this.h()
        },
        l(t) {
            e = C(t, "DIV", {
                class: !0
            });
            var l = w(e);
            r = Z(l, i[6]), l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "socialStatsNumber svelte-1bgpip0")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function zu(i) {
    let e, r;
    return {
        c() {
            e = E("div"), r = W(i[7]), this.h()
        },
        l(t) {
            e = C(t, "DIV", {
                class: !0
            });
            var l = w(e);
            r = Z(l, i[7]), l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "socialStatsText svelte-1bgpip0")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Bu(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I, D, T, z, A, B = i[6] && Ou(i),
        V = i[7] && zu(i);
    return I = new Ie({
        props: {
            props: {
                text: i[1]
            }
        }
    }), z = new ir({
        props: {
            props: {
                url: i[3],
                title: i[2],
                arrowLinkTextColor: "light",
                arrowLinkArrowColor: "green",
                openNewTab: !0
            }
        }
    }), {
        c() {
            e = E("a"), r = E("div"), t = E("h3"), l = W(i[0]), n = P(), s = E("div"), a = P(), o = E("div"), c = E("div"), f = E("img"), p = P(), h = E("div"), B && B.c(), v = P(), V && V.c(), _ = P(), m = E("div"), b = E("div"), y = E("h3"), k = W(i[0]), $ = P(), le(I.$$.fragment), D = P(), T = E("div"), le(z.$$.fragment), this.h()
        },
        l(L) {
            e = C(L, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0
            });
            var O = w(e);
            r = C(O, "DIV", {
                class: !0
            });
            var R = w(r);
            t = C(R, "H3", {});
            var j = w(t);
            l = Z(j, i[0]), j.forEach(d), n = M(R), s = C(R, "DIV", {
                class: !0,
                style: !0
            }), w(s).forEach(d), R.forEach(d), a = M(O), o = C(O, "DIV", {
                class: !0
            });
            var G = w(o);
            c = C(G, "DIV", {
                class: !0
            });
            var X = w(c);
            f = C(X, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), X.forEach(d), p = M(G), h = C(G, "DIV", {
                class: !0
            });
            var Y = w(h);
            B && B.l(Y), v = M(Y), V && V.l(Y), Y.forEach(d), G.forEach(d), _ = M(O), m = C(O, "DIV", {
                class: !0,
                style: !0
            });
            var ee = w(m);
            b = C(ee, "DIV", {
                class: !0
            });
            var q = w(b);
            y = C(q, "H3", {
                class: !0
            });
            var x = w(y);
            k = Z(x, i[0]), x.forEach(d), $ = M(q), se(I.$$.fragment, q), D = M(q), T = C(q, "DIV", {
                class: !0
            });
            var re = w(T);
            se(z.$$.fragment, re), re.forEach(d), q.forEach(d), ee.forEach(d), O.forEach(d), this.h()
        },
        h() {
            u(s, "class", "social-decorator svelte-1bgpip0"), Se(s, "background-color", i[5]), u(r, "class", "svelte-1bgpip0"), u(f, "class", "lazyload"), u(f, "data-src", i[8]), u(f, "alt", i[0]), u(c, "class", "socialIcon svelte-1bgpip0"), u(h, "class", "inline-block text-right svelte-1bgpip0"), u(o, "class", "flex justify-between items-end svelte-1bgpip0"), u(y, "class", "text-grey-daylight"), u(T, "class", "svelte-1bgpip0"), u(b, "class", "svelte-1bgpip0"), u(m, "class", "circle svelte-1bgpip0"), Se(m, "background-color", i[5]), u(e, "href", i[3]), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer"), u(e, "class", "SocialCard " + i[4] + " fade-in-bottom svelte-1bgpip0"), Q(e, "has_3_columns", i[9]), Q(e, "has_2_columns", i[10])
        },
        m(L, O) {
            S(L, e, O), g(e, r), g(r, t), g(t, l), g(r, n), g(r, s), g(e, a), g(e, o), g(o, c), g(c, f), g(o, p), g(o, h), B && B.m(h, null), g(h, v), V && V.m(h, null), g(e, _), g(e, m), g(m, b), g(b, y), g(y, k), g(b, $), ie(I, b, null), g(b, D), g(b, T), ie(z, T, null), A = !0
        },
        p(L, [O]) {
            L[6] && B.p(L, O), L[7] && V.p(L, O)
        },
        i(L) {
            A || (N(I.$$.fragment, L), N(z.$$.fragment, L), A = !0)
        },
        o(L) {
            F(I.$$.fragment, L), F(z.$$.fragment, L), A = !1
        },
        d(L) {
            L && d(e), B && B.d(), V && V.d(), ne(I), ne(z)
        }
    }
}

function Lu(i, e, r) {
    let {
        props: t
    } = e;
    const {
        type: l,
        title: n,
        body: s,
        linkText: a,
        linkUrl: o,
        width: c,
        socialIcon: f,
        socialColor: p,
        socialStatsNumber: h,
        socialStatsText: v,
        rowWidth: _
    } = t, m = f && f.fields && f.fields.file ? f.fields.file.url : null;
    let b = _ ? _ !== 8 : !0,
        y = _ ? _ === 8 : !1;
    return i.$$set = k => {
        "props" in k && r(11, t = k.props)
    }, [n, s, a, o, c, p, h, v, m, b, y, t]
}
class Nu extends ue {
    constructor(e) {
        super(), fe(this, e, Lu, Bu, de, {
            props: 11
        })
    }
}

function Fu(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I, D, T, z, A, B, V = i[12] && ju(i),
        L = i[13] && Uu(i),
        O = i[7] && Hu(i),
        R = i[6] && qu(i),
        j = i[8] && Gu(i),
        G = i[10] && Yu(i),
        X = i[11] && Wu(i),
        Y = i[9] && Zu(i),
        ee = i[14] && Ku(i),
        q = i[15] && Xu(i);
    return A = new Ie({
        props: {
            props: {
                text: i[3]
            }
        }
    }), {
        c() {
            e = E("div"), r = E("div"), t = E("div"), l = E("img"), n = P(), s = E("div"), V && V.c(), a = P(), L && L.c(), o = P(), O && O.c(), c = P(), R && R.c(), f = P(), j && j.c(), p = P(), G && G.c(), h = P(), X && X.c(), v = P(), Y && Y.c(), _ = P(), ee && ee.c(), m = P(), q && q.c(), b = P(), y = E("div"), k = E("h3"), $ = W(i[0]), I = P(), D = E("div"), T = P(), z = E("div"), le(A.$$.fragment), this.h()
        },
        l(x) {
            e = C(x, "DIV", {
                class: !0
            });
            var re = w(e);
            r = C(re, "DIV", {
                class: !0
            });
            var te = w(r);
            t = C(te, "DIV", {
                class: !0
            });
            var H = w(t);
            l = C(H, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), H.forEach(d), n = M(te), s = C(te, "DIV", {
                class: !0
            });
            var K = w(s);
            V && V.l(K), a = M(K), L && L.l(K), o = M(K), O && O.l(K), c = M(K), R && R.l(K), f = M(K), j && j.l(K), p = M(K), G && G.l(K), h = M(K), X && X.l(K), v = M(K), Y && Y.l(K), _ = M(K), ee && ee.l(K), m = M(K), q && q.l(K), K.forEach(d), te.forEach(d), b = M(re), y = C(re, "DIV", {
                class: !0
            });
            var ce = w(y);
            k = C(ce, "H3", {
                class: !0
            });
            var ye = w(k);
            $ = Z(ye, i[0]), ye.forEach(d), I = M(ce), D = C(ce, "DIV", {
                class: !0
            }), w(D).forEach(d), T = M(ce), z = C(ce, "DIV", {
                class: !0
            });
            var ge = w(z);
            se(A.$$.fragment, ge), ge.forEach(d), ce.forEach(d), re.forEach(d), this.h()
        },
        h() {
            u(l, "class", "lazyload"), u(l, "data-src", i[16]), u(l, "alt", i[1]), u(t, "class", "img-wrapper rounded-full overflow-hidden flex justify-center items-center svelte-7g67d8"), u(s, "class", "author-links mt-8 w-full flex justify-center items-center"), u(r, "class", "flex justify-center items-start flex-wrap w-full mb-6 lg:w-48 lg:mr-24"), u(k, "class", "title mb-4 text-grey-midnight"), u(D, "class", "headline-stick size-l mb-6 "), u(z, "class", "body mb-4 svelte-7g67d8"), u(y, "class", "lg:col-6 "), u(e, "class", "author-card fade-in-bottom px-4 py-8 md:px-24 rounded-lg bg-grey-daylight flex flex-wrap items-start justify-center mb-12  svelte-7g67d8")
        },
        m(x, re) {
            S(x, e, re), g(e, r), g(r, t), g(t, l), g(r, n), g(r, s), V && V.m(s, null), g(s, a), L && L.m(s, null), g(s, o), O && O.m(s, null), g(s, c), R && R.m(s, null), g(s, f), j && j.m(s, null), g(s, p), G && G.m(s, null), g(s, h), X && X.m(s, null), g(s, v), Y && Y.m(s, null), g(s, _), ee && ee.m(s, null), g(s, m), q && q.m(s, null), g(e, b), g(e, y), g(y, k), g(k, $), g(y, I), g(y, D), g(y, T), g(y, z), ie(A, z, null), B = !0
        },
        p(x, re) {
            x[12] && V.p(x, re), x[13] && L.p(x, re), x[7] && O.p(x, re), x[6] && R.p(x, re), x[8] && j.p(x, re), x[10] && G.p(x, re), x[11] && X.p(x, re), x[9] && Y.p(x, re), x[14] && ee.p(x, re), x[15] && q.p(x, re)
        },
        i(x) {
            B || (N(A.$$.fragment, x), B = !0)
        },
        o(x) {
            F(A.$$.fragment, x), B = !1
        },
        d(x) {
            x && d(e), V && V.d(), L && L.d(), O && O.d(), R && R.d(), j && j.d(), G && G.d(), X && X.d(), Y && Y.d(), ee && ee.d(), q && q.d(), ne(A)
        }
    }
}

function Ru(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I, D, T, z = i[16] && Ju(i),
        A = i[2] && Qu(i);
    o = new Ie({
        props: {
            props: {
                text: i[4]
            }
        }
    });
    let B = i[6] && xu(i),
        V = i[7] && ef(i),
        L = i[8] && tf(i),
        O = i[9] && rf(i),
        R = i[10] && lf(i),
        j = i[11] && nf(i),
        G = i[14] && sf(i),
        X = i[13] && af(i),
        Y = i[12] && of (i),
        ee = i[15] && cf(i);
    return D = new Ie({
        props: {
            props: {
                text: i[3]
            }
        }
    }), {
        c() {
            e = E("div"), z && z.c(), r = P(), t = E("div"), A && A.c(), l = P(), n = E("h5"), s = W(i[1]), a = P(), le(o.$$.fragment), c = P(), f = E("div"), B && B.c(), p = P(), V && V.c(), h = P(), L && L.c(), v = P(), O && O.c(), _ = P(), R && R.c(), m = P(), j && j.c(), b = P(), G && G.c(), y = P(), X && X.c(), k = P(), Y && Y.c(), $ = P(), ee && ee.c(), I = P(), le(D.$$.fragment), this.h()
        },
        l(q) {
            e = C(q, "DIV", {
                id: !0,
                class: !0
            });
            var x = w(e);
            z && z.l(x), r = M(x), t = C(x, "DIV", {
                class: !0
            });
            var re = w(t);
            A && A.l(re), l = M(re), n = C(re, "H5", {
                class: !0
            });
            var te = w(n);
            s = Z(te, i[1]), te.forEach(d), a = M(re), se(o.$$.fragment, re), c = M(re), f = C(re, "DIV", {
                class: !0
            });
            var H = w(f);
            B && B.l(H), p = M(H), V && V.l(H), h = M(H), L && L.l(H), v = M(H), O && O.l(H), _ = M(H), R && R.l(H), m = M(H), j && j.l(H), b = M(H), G && G.l(H), y = M(H), X && X.l(H), k = M(H), Y && Y.l(H), $ = M(H), ee && ee.l(H), H.forEach(d), I = M(re), se(D.$$.fragment, re), re.forEach(d), x.forEach(d), this.h()
        },
        h() {
            u(n, "class", "light font-semibold tracking-wide mb-1"), u(f, "class", "flex mt-3 mb-6"), u(t, "class", "ml-4 lg:ml-12 mt-8 md:mt-0"), u(e, "id", Ln(i[0])), u(e, "class", "flex flex-col md:flex-row items-center md:items-start flex-no-wrap mb-24 w-full ")
        },
        m(q, x) {
            S(q, e, x), z && z.m(e, null), g(e, r), g(e, t), A && A.m(t, null), g(t, l), g(t, n), g(n, s), g(t, a), ie(o, t, null), g(t, c), g(t, f), B && B.m(f, null), g(f, p), V && V.m(f, null), g(f, h), L && L.m(f, null), g(f, v), O && O.m(f, null), g(f, _), R && R.m(f, null), g(f, m), j && j.m(f, null), g(f, b), G && G.m(f, null), g(f, y), X && X.m(f, null), g(f, k), Y && Y.m(f, null), g(f, $), ee && ee.m(f, null), g(t, I), ie(D, t, null), T = !0
        },
        p(q, x) {
            q[16] && z.p(q, x), q[2] && A.p(q, x), q[6] && B.p(q, x), q[7] && V.p(q, x), q[8] && L.p(q, x), q[9] && O.p(q, x), q[10] && R.p(q, x), q[11] && j.p(q, x), q[14] && G.p(q, x), q[13] && X.p(q, x), q[12] && Y.p(q, x), q[15] && ee.p(q, x)
        },
        i(q) {
            T || (N(A), N(o.$$.fragment, q), N(D.$$.fragment, q), T = !0)
        },
        o(q) {
            F(A), F(o.$$.fragment, q), F(D.$$.fragment, q), T = !1
        },
        d(q) {
            q && d(e), z && z.d(), A && A.d(), ne(o), B && B.d(), V && V.d(), L && L.d(), O && O.d(), R && R.d(), j && j.d(), G && G.d(), X && X.d(), Y && Y.d(), ee && ee.d(), ne(D)
        }
    }
}

function ju(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                class: !0,
                target: !0,
                "aria-label": !0,
                href: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mx-2"), u(e, "target", "_blank"), u(e, "aria-label", r = i[0] + " welcome post"), u(e, "href", i[12])
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[22]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Uu(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                class: !0,
                target: !0,
                "aria-label": !0,
                href: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mx-2"), u(e, "target", "_blank"), u(e, "aria-label", r = i[0] + " personal website"), u(e, "href", i[13])
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[23]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Hu(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                class: !0,
                target: !0,
                "aria-label": !0,
                href: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mx-2"), u(e, "target", "_blank"), u(e, "aria-label", r = i[0] + " academic profile"), u(e, "href", i[7])
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[17]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function qu(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                href: !0,
                class: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "href", r = `mailto:${i[6]}`), u(e, "class", "mr-2")
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[26]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Gu(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                class: !0,
                target: !0,
                "aria-label": !0,
                href: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mx-2"), u(e, "target", "_blank"), u(e, "aria-label", r = i[0] + " twitter profile"), u(e, "href", i[8])
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[18]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Yu(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                class: !0,
                target: !0,
                "aria-label": !0,
                href: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mx-2"), u(e, "target", "_blank"), u(e, "aria-label", r = i[0] + " medium profile"), u(e, "href", i[10])
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[20]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Wu(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                class: !0,
                target: !0,
                "aria-label": !0,
                href: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mx-2"), u(e, "target", "_blank"), u(e, "aria-label", r = i[0] + " youtube profile"), u(e, "href", i[11])
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[21]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Zu(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                class: !0,
                target: !0,
                "aria-label": !0,
                href: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mx-2"), u(e, "target", "_blank"), u(e, "aria-label", r = i[0] + " linkedin profile"), u(e, "href", i[9])
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[19]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Ku(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[14]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[24]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Xu(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[15]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[25]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Ju(i) {
    let e, r;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(t) {
            e = C(t, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            Pe(e.src, r = i[16]) || u(e, "src", r), u(e, "alt", i[1]), u(e, "class", "researcher-image rounded-lg svelte-7g67d8")
        },
        m(t, l) {
            S(t, e, l)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Qu(i) {
    let e, r;
    return e = new sr({
        props: {
            props: {
                classes: "mb-1",
                title: i[2],
                color: "green"
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function xu(i) {
    let e, r;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(t) {
            e = C(t, "A", {
                href: !0,
                class: !0
            });
            var l = w(e);
            l.forEach(d), this.h()
        },
        h() {
            u(e, "href", r = `mailto:${i[6]}`), u(e, "class", "mr-2")
        },
        m(t, l) {
            S(t, e, l), e.innerHTML = i[26]
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function ef(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[7]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[17]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function tf(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[8]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[18]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function rf(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[9]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[19]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function lf(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[10]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[20]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function nf(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[11]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[21]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function sf(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[14]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[24]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function af(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[13]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[23]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function of (i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[12]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[22]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function cf(i) {
    let e;
    return {
        c() {
            e = E("a"), this.h()
        },
        l(r) {
            e = C(r, "A", {
                href: !0,
                class: !0
            });
            var t = w(e);
            t.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[15]), u(e, "class", "mr-2")
        },
        m(r, t) {
            S(r, e, t), e.innerHTML = i[25]
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function uf(i) {
    let e, r, t, l;
    const n = [Ru, Fu],
        s = [];

    function a(o, c) {
        return o[5] === "researcher" ? 0 : 1
    }
    return e = a(i), r = s[e] = n[e](i), {
        c() {
            r.c(), t = J()
        },
        l(o) {
            r.l(o), t = J()
        },
        m(o, c) {
            s[e].m(o, c), S(o, t, c), l = !0
        },
        p(o, [c]) {
            r.p(o, c)
        },
        i(o) {
            l || (N(r), l = !0)
        },
        o(o) {
            F(r), l = !1
        },
        d(o) {
            s[e].d(o), o && d(t)
        }
    }
}

function ff(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l
    } = t, {
        name: n,
        jobTitle: s,
        body: a,
        education: o,
        photo: c,
        type: f,
        email: p,
        academicProfileLink: h,
        twitterProfileLink: v,
        linkedinProfileLink: _,
        mediumProfileLink: m,
        youtubeProfileLink: b,
        welcomePostLink: y,
        personalWebsiteLink: k,
        githubProfileLink: $,
        promotionPostLink: I
    } = t.authors[0].fields, D = c && c.fields && c.fields.file ? c.fields.file.url : null;
    let T = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 8V26C7 27.1046 7.89543 28 9 28H15.8158C18.3639 28 20.4295 25.9344 20.4295 23.3863C22.9537
                        23.3863 25 21.34 25 18.8158V8C25 6.89543 24.1046 6 23 6H9C7.89543 6 7 6.89543 7 8ZM11.9094
                        13.16H20.0912V11.16H11.9094V13.16ZM11.9094 18.44H18.1276V16.44H11.9094V18.44Z"
                        fill="#C3D0E4"/>
                    </svg>`,
        z = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26.2246 12.7041C26.2417 12.935 26.2417 13.166 26.2417 13.397C26.2417 20.4414 20.6739 28.5581
                        10.4975 28.5581C7.3623 28.5581 4.44988 27.6837 2 26.166C2.44545 26.2155 2.8737 26.232 3.33629
                        26.232C5.92317 26.232 8.30455 25.3906 10.2062 23.9554C7.77347 23.9059 5.73475 22.3716 5.03233
                        20.2599C5.375 20.3094 5.71762 20.3424 6.07742 20.3424C6.57423 20.3424 7.0711 20.2764 7.53363
                        20.1609C4.99811 19.666 3.0964 17.5213 3.0964 14.9312V14.8653C3.83305 15.2612 4.68972 15.5087 5.59765
                        15.5416C4.10716 14.5848 3.13068 12.9515 3.13068 11.1038C3.13068 10.114 3.40474 9.20661 3.88446
                        8.41473C6.60846 11.6482 10.703 13.7599 15.2943 13.9909C15.2087 13.5949 15.1573 13.1825 15.1573
                        12.7701C15.1573 9.83351 17.6243 7.44141 20.6909 7.44141C22.2842 7.44141 23.7232 8.0848 24.7341
                        9.12414C25.9847 8.89319 27.1839 8.44774 28.2461 7.83735C27.8349 9.07468 26.9612 10.114 25.8134
                        10.7739C26.927 10.6584 28.0063 10.3614 28.9999 9.94903C28.2462 11.0048 27.3039 11.9451 26.2246
                        12.7041Z" fill="#C3D0E4"/>
                    </svg>`,
        A = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22.2347 27.9892C22.2347 27.8586 22.2347 27.7442 22.2347 27.6297C22.2347 25.0358 22.2464 22.442
                        22.2265 19.8481C22.2214 19.1928 22.1662 18.5279 22.0445 17.8855C21.8063 16.6241 21.1003 16.032 19.8694
                        15.9742C19.0751 15.9367 18.3349 16.0988 17.7618 16.7242C17.2762 17.2543 17.0646 17.9245 16.9925
                        18.6371C16.9378 19.1763 16.9112 19.7213 16.9092 20.2638C16.9005 22.733 16.9056 25.2017 16.9056
                        27.6709C16.9056 27.7752 16.9056 27.8795 16.9056 27.9993C15.3112 27.9993 13.7481 27.9993 12.1619
                        27.9993C12.1619 22.6624 12.1619 17.3313 12.1619 11.9836C13.6744 11.9836 15.1768 11.9836 16.7175
                        11.9836C16.7175 12.7026 16.7175 13.4065 16.7175 14.1105C16.7359 14.1153 16.7548 14.1196 16.7732
                        14.1244C16.8126 14.0731 16.8565 14.0249 16.8898 13.9698C17.7122 12.6031 18.9268 11.8745 20.4241
                        11.6434C21.5001 11.4771 22.5659 11.576 23.6067 11.9168C25.1034 12.4062 26.0164 13.4943 26.4984
                        15.0193C26.8501 16.1315 26.9758 17.2842 26.9835 18.4455C27.004 21.5738 26.9973 24.7026 27.0009
                        27.8314C27.0009 27.8752 26.9948 27.9191 26.9891 27.9892C25.4147 27.9892 23.8464 27.9892 22.2347
                        27.9892Z" fill="#C3D0E4"/>
                        <path d="M4.40356 11.9863C5.99078 11.9863 7.55498 11.9863 9.133 11.9863C9.133 17.3302 9.133 22.6554 9.133
                        27.9983C7.55396 27.9983 5.99026 27.9983 4.40356 27.9983C4.40356 22.6672 4.40356 17.3351 4.40356
                        11.9863Z" fill="#C3D0E4" />
                        <path d="M9.51563 6.88114C9.5187 8.48378 8.2888 9.77295 6.75782 9.77241C5.22991 9.77241 3.99592 8.47682
                        4.00001 6.87793C4.0041 5.28759 5.22735 4.00644 6.7476 4.00002C8.27858 3.9936 9.51308 5.27796 9.51563
                        6.88114Z" fill="#C3D0E4"/>
                    </svg>`,
        B = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.6842 13.0729C19.9573 14.8757 19.2292 16.678 18.5041 18.4814C17.2632 21.5672 16.023 24.6537
                        14.79 27.7425C14.7172 27.9257 14.611 27.9471 14.4314 27.9697C14.0025 28.0244 13.8089 27.8549 13.6305
                        27.47C11.4206 22.7015 9.18834 17.9431 6.96211 13.1824C6.94148 13.1389 6.91599 13.0979 6.83711
                        13.0539C6.83104 13.1508 6.81891 13.2484 6.81891 13.3453C6.8177 16.5965 6.81952 19.8477 6.81527
                        23.0983C6.81466 23.5164 6.95907 23.8644 7.2303 24.1826C8.11072 25.2175 8.9778 26.2638 9.86064
                        27.2969C10.0227 27.4867 10.1106 27.6711 10.0251 27.9393C7.36986 27.9393 4.70735 27.9393 2.03271
                        27.9393C1.95686 27.7074 2.01572 27.5188 2.18016 27.3255C3.04238 26.3143 3.88579 25.2877 4.75165
                        24.2795C5.08173 23.8953 5.22189 23.4849 5.22007 22.9769C5.2043 19.0816 5.20854 15.1862 5.21461
                        11.2909C5.21522 10.9852 5.12602 10.7348 4.92822 10.5034C4.13577 9.57668 3.35668 8.63987 2.55696
                        7.71912C2.37372 7.50856 2.3094 7.30157 2.37796 7.02379C4.96826 7.02379 7.56342 7.02379 10.178
                        7.02379C12.1846 11.3367 14.1966 15.6609 16.2244 20.0196C16.79 18.6355 17.3409 17.2894 17.8906
                        15.9428C19.0769 13.0384 20.2631 10.1334 21.4451 7.22781C21.5021 7.08744 21.5543 6.99941 21.7388
                        7C24.1149 7.00714 26.491 7.00536 28.8671 7.00655C28.8962 7.00655 28.9253 7.01606 28.9684
                        7.02379C29.0388 7.27837 28.9982 7.47465 28.7791 7.67272C28.1244 8.26276 27.4976 8.88254 26.852
                        9.4827C26.6688 9.65281 26.5941 9.84493 26.5947 10.0888C26.599 13.9044 26.5996 17.7201 26.6008
                        21.5363C26.6008 22.6563 26.6057 23.7763 26.596 24.8963C26.5935 25.1818 26.6706 25.4049 26.8896
                        25.6071C27.5 26.171 28.085 26.7622 28.6972 27.3243C28.9041 27.5146 29 27.7074 28.9168 28C25.4243 28
                        21.9226 28 18.4058 28C18.3251 27.7484 18.3706 27.5491 18.586 27.3517C19.2431 26.7491 19.8887 26.1341
                        20.5173 25.5036C20.6435 25.3775 20.7412 25.1616 20.7418 24.9867C20.7552 21.0819 20.7528 17.1764
                        20.7528 13.2716C20.7528 13.2061 20.7455 13.1413 20.7412 13.0759C20.723 13.0747 20.7036 13.0741 20.6842
                        13.0729Z" fill="#C3D0E4"/>
                    </svg>`,
        V = `<svg class="pt-1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2691 7.10563C27.3454 7.39961 28.1912 8.26265 28.4793 9.36087C29 11.3494 29 15.5008 29
                        15.5008C29 15.5008 29 19.6522 28.4773 21.6408C28.1892 22.739 27.3433 23.6021 26.267 23.896C24.3182
                        24.4294 16.5 24.4294 16.5 24.4294C16.5 24.4294 8.68184 24.4294 6.73296 23.896C5.65665 23.6021 4.81083
                        22.739 4.52272 21.6408C4 19.6522 4 15.5008 4 15.5008C4 15.5008 4 11.3494 4.52272 9.36087C4.81083
                        8.26265 5.65665 7.39961 6.73296 7.10563C8.68184 6.57227 16.5 6.57227 16.5 6.57227C16.5 6.57227 24.3182
                        6.57227 26.2691 7.10563ZM20.6667 15.5008L14.7143 19.6675V11.3342L20.6667 15.5008Z" fill="#C3D0E4"/>
                    </svg>`,
        L = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274
                        9.37258 28 16 28Z" stroke="#C3D0E4" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M15.971 15.9243C17.6506 15.9243 19.0122 14.5627 19.0122 12.8831C19.0122 11.2034 17.6506 9.8418 15.971 9.8418C14.2913 9.8418 12.9297 11.2034 12.9297 12.8831C12.9297 14.5627 14.2913 15.9243 15.971 15.9243Z"
                        stroke="#C3D0E4" stroke-width="2.1531" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M10.1406 21.6002C10.1406 18.4664 12.6822 15.9248 15.816 15.9248C18.9498 15.9248 21.4914 18.4664 21.4914 21.6002"
                        stroke="#C3D0E4" stroke-width="2.1531" stroke-miterlimit="10" stroke-linecap="round" />
                    </svg>`,
        O = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="16" cy="16" r="11" stroke="#C3D0E4" stroke-width="2" />
                        <path d="M21 16C21 19.1921 20.3509 22.0326 19.3482 24.0381C18.3156 26.1033 17.074 27 16 27C14.926 27 13.6844
                        26.1033 12.6518 24.0381C11.6491 22.0326 11 19.1921 11 16C11 12.8079 11.6491 9.96739 12.6518 7.96193C13.6844 5.89666 14.926 5 16 5C17.074 5 18.3156 5.89666 19.3482 7.96193C20.3509 9.96739 21 12.8079 21 16Z"
                        stroke="#C3D0E4" stroke-width="2"/>
                        <path d="M5.5 12.5H26" stroke="#C3D0E4" stroke-width="2" />
                        <path d="M5.5 20H26" stroke="#C3D0E4" stroke-width="2" />
                    </svg>`,
        R = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32
                        12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96
                        26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98
                        22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1
                        25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84
                        15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64
                        6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76
                        7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6
                        10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94
                        23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20
                        30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0Z" fill="#C3D0E4" />
                    </svg>`,
        j = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C2.79086 2 1 3.79086 1 6V18C1 20.2091 2.79086 22 5 22H19C21.2091 22 23 20.2091 23 18V6C23 3.79086 21.2091 2 19 2H5ZM7.5 14C8.32843 14 9 13.3284 9 12.5C9 11.6716 8.32843 11 7.5 11C6.67157 11 6 11.6716 6 12.5C6 13.3284 6.67157 14 7.5 14ZM14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5ZM17.5 14C18.3284 14 19 13.3284 19 12.5C19 11.6716 18.3284 11 17.5 11C16.6716 11 16 11.6716 16 12.5C16 13.3284 16.6716 14 17.5 14Z" fill="#C3D0E4"/>
                        </svg>`,
        G = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 3H3C1.89543 3 1 3.89543 1 5C1 5.58834 1.30309 6.13518 1.802 6.447L11.4533 12.4791C11.7772 12.6815 12.188 12.6818 12.5121 12.4798L22.1973 6.44585C22.6965 6.13481 23 5.58822 23 5C23 3.89543 22.1046 3 21 3Z" fill="#C3D0E4"/>
                        <path d="M23 8.30425L12.5479 14.8576C12.2234 15.0611 11.8114 15.0614 11.4867 14.8584L1 8.30425V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V8.30425Z" fill="#C3D0E4"/>
                    </svg>`;
    return i.$$set = X => {
        "props" in X && r(27, t = X.props)
    }, [l, n, s, a, o, f, p, h, v, _, m, b, y, k, $, I, D, T, z, A, B, V, L, O, R, j, G, t]
}
class df extends ue {
    constructor(e) {
        super(), fe(this, e, ff, uf, de, {
            props: 27
        })
    }
}

function hf(i) {
    let e, r, t;
    return r = new sr({
        props: {
            props: {
                title: i[2],
                color: "green-highlight"
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mb-4")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function _f(i) {
    let e, r, t;
    return r = new ir({
        props: {
            props: i[0]
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0,
                style: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "card-link absolute text-sm block font-bold svelte-18y0ipj"), Se(e, "letter-spacing", "1.2px")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p(l, n) {
            const s = {};
            n & 1 && (s.props = l[0]), r.$set(s)
        },
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function pf(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m = i[2] && hf(i);
    o = new Ie({
        props: {
            props: {
                text: i[4]
            }
        }
    });
    let b = i[5] && _f(i);
    return {
        c() {
            e = E("a"), r = E("div"), m && m.c(), t = P(), l = E("h5"), n = W(i[3]), s = P(), a = E("div"), le(o.$$.fragment), c = P(), b && b.c(), f = P(), p = E("div"), this.h()
        },
        l(y) {
            e = C(y, "A", {
                href: !0,
                "aria-label": !0,
                target: !0,
                rel: !0,
                "data-bg": !0,
                class: !0
            });
            var k = w(e);
            r = C(k, "DIV", {
                class: !0
            });
            var $ = w(r);
            m && m.l($), t = M($), l = C($, "H5", {
                class: !0
            });
            var I = w(l);
            n = Z(I, i[3]), I.forEach(d), s = M($), a = C($, "DIV", {
                class: !0
            });
            var D = w(a);
            se(o.$$.fragment, D), D.forEach(d), $.forEach(d), c = M(k), b && b.l(k), f = M(k), p = C(k, "DIV", {
                class: !0
            }), w(p).forEach(d), k.forEach(d), this.h()
        },
        h() {
            u(l, "class", "mb-4 svelte-18y0ipj"), u(a, "class", "card-text svelte-18y0ipj"), u(r, "class", "card-content svelte-18y0ipj"), u(p, "class", "circle svelte-18y0ipj"), u(e, "href", i[6]), u(e, "aria-label", i[3]), u(e, "target", i[6] ? Ae(i[6]) ? "" : "_blank" : null), u(e, "rel", Ae(i[6]) ? null : "noopener noreferrer"), u(e, "data-bg", i[8] || null), u(e, "class", (i[7] ? i[7] : "") + " lazyload bg-white bg-no-repeat bg-cover bg-center rounded-none px-10 squared-card relative mx-auto md:mx-0 sm:rounded-lg sm:mb-6 overflow-hidden fade-in-bottom svelte-18y0ipj"), Q(e, "squaredCardIsIntroCard", i[1])
        },
        m(y, k) {
            S(y, e, k), g(e, r), m && m.m(r, null), g(r, t), g(r, l), g(l, n), g(r, s), g(r, a), ie(o, a, null), g(e, c), b && b.m(e, null), g(e, f), g(e, p), h = !0, v || (_ = [pe(e, "mouseenter", Jt(i[9])), pe(e, "mouseleave", Jt(i[10]))], v = !0)
        },
        p(y, [k]) {
            y[2] && m.p(y, k), y[5] && b.p(y, k)
        },
        i(y) {
            h || (N(m), N(o.$$.fragment, y), N(b), h = !0)
        },
        o(y) {
            F(m), F(o.$$.fragment, y), F(b), h = !1
        },
        d(y) {
            y && d(e), m && m.d(), ne(o), b && b.d(), v = !1, nt(_)
        }
    }
}

function mf(i, e, r) {
    let t, {
        props: l
    } = e;
    const {
        squaredCardIsIntroCard: n,
        eyebrow: s,
        title: a,
        body: o,
        linkText: c,
        linkUrl: f,
        image: p,
        theme: h
    } = l, v = p && p.fields && p.fields.file ? p.fields.file.url : null;
    let _ = h == "light" ? "dark" : "light";

    function m(y) {
        let k = y.target.classList.contains("squaredCardIsIntroCard") ? "dark" : "light";
        window.innerWidth >= 720 && r(12, _ = k)
    }

    function b() {
        r(12, _ = h == "light" ? "dark" : "light")
    }
    return i.$$set = y => {
        "props" in y && r(11, l = y.props)
    }, i.$$.update = () => {
        i.$$.dirty & 4096 && r(0, t = {
            title: c,
            url: f,
            arrowLinkTextColor: _,
            openNewTab: !Ae(f)
        })
    }, [t, n, s, a, o, c, f, h, v, m, b, l, _]
}
class gf extends ue {
    constructor(e) {
        super(), fe(this, e, mf, pf, de, {
            props: 11
        })
    }
}

function vf(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I, D, T;
    return m = new Ie({
        props: {
            props: {
                text: i[1]
            }
        }
    }), D = new nr({
        props: {
            props: {
                url: i[2]
            }
        }
    }), {
        c() {
            e = E("a"), r = E("div"), t = P(), l = E("div"), n = P(), s = E("div"), a = E("div"), o = E("img"), c = P(), f = E("h3"), p = W(i[0]), h = P(), v = E("div"), _ = E("div"), le(m.$$.fragment), b = P(), y = E("div"), k = W(i[3]), $ = P(), I = E("div"), le(D.$$.fragment), this.h()
        },
        l(z) {
            e = C(z, "A", {
                href: !0,
                target: !0,
                rel: !0,
                "data-bg": !0,
                class: !0
            });
            var A = w(e);
            r = C(A, "DIV", {
                class: !0
            }), w(r).forEach(d), t = M(A), l = C(A, "DIV", {
                class: !0
            }), w(l).forEach(d), n = M(A), s = C(A, "DIV", {
                class: !0
            });
            var B = w(s);
            a = C(B, "DIV", {
                class: !0
            });
            var V = w(a);
            o = C(V, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), V.forEach(d), c = M(B), f = C(B, "H3", {
                class: !0
            });
            var L = w(f);
            p = Z(L, i[0]), L.forEach(d), h = M(B), v = C(B, "DIV", {
                class: !0
            });
            var O = w(v);
            _ = C(O, "DIV", {
                class: !0
            });
            var R = w(_);
            se(m.$$.fragment, R), R.forEach(d), O.forEach(d), b = M(B), y = C(B, "DIV", {
                class: !0
            });
            var j = w(y);
            k = Z(j, i[3]), j.forEach(d), B.forEach(d), $ = M(A), I = C(A, "DIV", {
                class: !0
            });
            var G = w(I);
            se(D.$$.fragment, G), G.forEach(d), A.forEach(d), this.h()
        },
        h() {
            u(r, "class", "filter filter-1 w-full h-full absolute z-0 top-0 left-0 svelte-nx2nrr"), u(l, "class", "filter filter-2 w-full h-full absolute z-0 top-0 left-0 svelte-nx2nrr"), u(o, "class", "lazyload"), u(o, "data-src", i[4]), u(o, "alt", i[0]), u(a, "class", "circle-icon mb-8 rounded-full flex justify-center items-center mx-auto md:mx-0 svelte-nx2nrr"), u(f, "class", "card-title text-grey-2pm"), u(_, "class", "mt-4 mb-6"), u(v, "class", "card-body relative text-grey-2pm svelte-nx2nrr"), u(y, "class", "eyebrow uppercase font-bold text-green-highlight svelte-nx2nrr"), u(s, "class", "card-content text-center md:text-left relative z-10 svelte-nx2nrr"), u(I, "class", "circle-link absolute bottom-0 right-0 mb-12 mr-8 svelte-nx2nrr"), u(e, "href", i[2]), u(e, "target", i[2] ? Ae(i[2]) ? "" : "_blank" : null), u(e, "rel", Ae(i[2]) ? null : "noopener noreferrer"), u(e, "data-bg", i[5]), u(e, "class", "lazyload bg-white bg-no-repeat bg-cover bg-center card m-0 overflow-hidden p-6 px-8 w-full md:w-1/6 relative svelte-nx2nrr")
        },
        m(z, A) {
            S(z, e, A), g(e, r), g(e, t), g(e, l), g(e, n), g(e, s), g(s, a), g(a, o), g(s, c), g(s, f), g(f, p), g(s, h), g(s, v), g(v, _), ie(m, _, null), g(s, b), g(s, y), g(y, k), g(e, $), g(e, I), ie(D, I, null), T = !0
        },
        p: U,
        i(z) {
            T || (N(m.$$.fragment, z), N(D.$$.fragment, z), T = !0)
        },
        o(z) {
            F(m.$$.fragment, z), F(D.$$.fragment, z), T = !1
        },
        d(z) {
            z && d(e), ne(m), ne(D)
        }
    }
}

function bf(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        body: n,
        linkUrl: s,
        image: a,
        socialIcon: o,
        eyebrow: c
    } = t, f = o && o.fields && o.fields.file ? o.fields.file.url : null, p = a && a.fields && a.fields.file ? a.fields.file.url : null;
    return i.$$set = h => {
        "props" in h && r(6, t = h.props)
    }, [l, n, s, c, f, p, t]
}
class yf extends ue {
    constructor(e) {
        super(), fe(this, e, bf, vf, de, {
            props: 6
        })
    }
}

function Bi(i, e, r) {
    const t = i.slice();
    return t[2] = e[r], t[4] = r, t
}

function Li(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v = i[0],
        _ = [];
    for (let b = 0; b < v.length; b += 1) _[b] = Ni(Bi(i, v, b));
    const m = b => F(_[b], 1, 1, () => {
        _[b] = null
    });
    return {
        c() {
            e = he("svg"), r = he("path"), t = P(), l = E("div"), n = E("div"), s = E("div");
            for (let b = 0; b < _.length; b += 1) _[b].c();
            a = P(), o = he("svg"), c = he("path"), f = P(), p = E("div"), this.h()
        },
        l(b) {
            e = _e(b, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var y = w(e);
            r = _e(y, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0
            }), w(r).forEach(d), y.forEach(d), t = M(b), l = C(b, "DIV", {
                class: !0
            });
            var k = w(l);
            n = C(k, "DIV", {
                class: !0
            });
            var $ = w(n);
            s = C($, "DIV", {
                class: !0
            });
            var I = w(s);
            for (let T = 0; T < _.length; T += 1) _[T].l(I);
            I.forEach(d), $.forEach(d), k.forEach(d), a = M(b), o = _e(b, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var D = w(o);
            c = _e(D, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0
            }), w(c).forEach(d), D.forEach(d), f = M(b), p = C(b, "DIV", {
                class: !0
            }), w(p).forEach(d), this.h()
        },
        h() {
            u(r, "d", "M7 1L2 6L7 11"), u(r, "stroke", "#C3D0E4"), u(r, "stroke-width", "1.72854"), u(e, "class", "lg:hidden prev mr-4 svelte-vk4bqe"), u(e, "width", "8"), u(e, "height", "12"), u(e, "viewBox", "0 0 8 12"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(s, "class", "swiper-wrapper svelte-vk4bqe"), u(n, "class", "carousel md:flex md:justify-between"), u(l, "class", "grow overflow-hidden lg:px-0 lg:w-full"), u(c, "d", "M1 11L6 6L1 1"), u(c, "stroke", "#C3D0E4"), u(c, "stroke-width", "1.72854"), u(o, "class", "lg:hidden next ml-4 svelte-vk4bqe"), u(o, "width", "8"), u(o, "height", "12"), u(o, "viewBox", "0 0 8 12"), u(o, "fill", "none"), u(o, "xmlns", "http://www.w3.org/2000/svg"), u(p, "class", "swiper-pagination md:hidden svelte-vk4bqe")
        },
        m(b, y) {
            S(b, e, y), g(e, r), S(b, t, y), S(b, l, y), g(l, n), g(n, s);
            for (let k = 0; k < _.length; k += 1) _[k].m(s, null);
            S(b, a, y), S(b, o, y), g(o, c), S(b, f, y), S(b, p, y), h = !0
        },
        p(b, y) {
            if (y & 1) {
                v = b[0];
                let k;
                for (k = 0; k < v.length; k += 1) {
                    const $ = Bi(b, v, k);
                    _[k] ? (_[k].p($, y), N(_[k], 1)) : (_[k] = Ni($), _[k].c(), N(_[k], 1), _[k].m(s, null))
                }
                for (ke(), k = v.length; k < _.length; k += 1) m(k);
                we()
            }
        },
        i(b) {
            if (!h) {
                for (let y = 0; y < v.length; y += 1) N(_[y]);
                h = !0
            }
        },
        o(b) {
            _ = _.filter(Boolean);
            for (let y = 0; y < _.length; y += 1) F(_[y]);
            h = !1
        },
        d(b) {
            b && d(e), b && d(t), b && d(l), De(_, b), b && d(a), b && d(o), b && d(f), b && d(p)
        }
    }
}

function Ni(i) {
    let e, r, t, l;
    return r = new Hr({
        props: {
            componentData: i[2]
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), t = P(), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0
            });
            var s = w(e);
            se(r.$$.fragment, s), t = M(s), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", "swiper-slide svelte-vk4bqe")
        },
        m(n, s) {
            S(n, e, s), ie(r, e, null), g(e, t), l = !0
        },
        p(n, s) {
            const a = {};
            s & 1 && (a.componentData = n[2]), r.$set(a)
        },
        i(n) {
            l || (N(r.$$.fragment, n), l = !0)
        },
        o(n) {
            F(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && d(e), ne(r)
        }
    }
}

function kf(i) {
    let e, r, t, l, n, s = i[0] && i[0].length > 0 && Li(i);
    return {
        c() {
            e = E("link"), r = P(), t = E("section"), l = E("div"), s && s.c(), this.h()
        },
        l(a) {
            e = C(a, "LINK", {
                rel: !0,
                href: !0
            }), r = M(a), t = C(a, "SECTION", {
                class: !0
            });
            var o = w(t);
            l = C(o, "DIV", {
                class: !0
            });
            var c = w(l);
            s && s.l(c), c.forEach(d), o.forEach(d), this.h()
        },
        h() {
            u(e, "rel", "stylesheet"), u(e, "href", "https://unpkg.com/swiper/swiper-bundle.min.css"), u(l, "class", "container mx-auto flex justify-center items-center lg:block"), u(t, "class", "fastnews-section w-full md:absolute bottom-0 left-0 svelte-vk4bqe")
        },
        m(a, o) {
            S(a, e, o), S(a, r, o), S(a, t, o), g(t, l), s && s.m(l, null), n = !0
        },
        p(a, [o]) {
            a[0] && a[0].length > 0 ? s ? (s.p(a, o), o & 1 && N(s, 1)) : (s = Li(a), s.c(), N(s, 1), s.m(l, null)) : s && (ke(), F(s, 1, 1, () => {
                s = null
            }), we())
        },
        i(a) {
            n || (N(s), n = !0)
        },
        o(a) {
            F(s), n = !1
        },
        d(a) {
            a && d(e), a && d(r), a && d(t), s && s.d()
        }
    }
}

function wf(i, e, r) {
    let {
        props: t
    } = e, {
        entries: l
    } = t;
    return l = l.map(n => ({
        id: n.id,
        type: n.fields.mediumFetchTag != null ? "mediumFastNew" : "manualFastNew",
        fields: n.fields
    })), He(() => {
        new rl(".carousel", {
            slidesPerView: 1,
            spaceBetween: 100,
            loop: !0,
            updateOnWindowResize: !0,
            noSwiping: !1,
            allowSlideNext: !0,
            allowSlidePrev: !0,
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            },
            navigation: {
                nextEl: ".next",
                prevEl: ".prev"
            },
            breakpoints: {
                720: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    noSwiping: !1,
                    allowSlideNext: !0,
                    allowSlidePrev: !0
                },
                1064: {
                    slidesPerView: 3,
                    setWrapperSize: !0,
                    spaceBetween: 20,
                    noSwiping: !0,
                    allowSlidePrev: !1,
                    allowSlideNext: !1
                }
            }
        }), document.querySelector(".carousel").swiper
    }), i.$$set = n => {
        "props" in n && r(1, t = n.props)
    }, [l, t]
}
class js extends ue {
    constructor(e) {
        super(), fe(this, e, wf, kf, de, {
            props: 1
        })
    }
}

function Ef(i) {
    let e, r, t, l;
    return {
        c() {
            e = E("div"), r = E("img"), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0
            });
            var s = w(e);
            r = C(s, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), s.forEach(d), this.h()
        },
        h() {
            u(r, "class", "w-full h-full svelte-1reps76"), Pe(r.src, t = i[7]) || u(r, "src", t), u(r, "alt", l = i[2].fields.title), u(e, "class", "img-wrapper overflow-hidden mb-4 mx-auto md:mr-6 md:mb-0 svelte-1reps76")
        },
        m(n, s) {
            S(n, e, s), g(e, r)
        },
        p: U,
        d(n) {
            n && d(e)
        }
    }
}

function Cf(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _ = i[7] && Ef(i);
    return h = new Ie({
        props: {
            props: {
                text: i[5]
            }
        }
    }), {
        c() {
            e = E("a"), r = E("div"), _ && _.c(), t = P(), l = E("div"), n = E("div"), s = W(i[3]), a = P(), o = E("h6"), c = W(i[4]), f = P(), p = E("div"), le(h.$$.fragment), this.h()
        },
        l(m) {
            e = C(m, "A", {
                href: !0,
                target: !0,
                rel: !0
            });
            var b = w(e);
            r = C(b, "DIV", {
                class: !0
            });
            var y = w(r);
            _ && _.l(y), t = M(y), l = C(y, "DIV", {
                class: !0
            });
            var k = w(l);
            n = C(k, "DIV", {
                class: !0
            });
            var $ = w(n);
            s = Z($, i[3]), $.forEach(d), a = M(k), o = C(k, "H6", {
                class: !0
            });
            var I = w(o);
            c = Z(I, i[4]), I.forEach(d), f = M(k), p = C(k, "DIV", {
                class: !0
            });
            var D = w(p);
            se(h.$$.fragment, D), D.forEach(d), k.forEach(d), y.forEach(d), b.forEach(d), this.h()
        },
        h() {
            u(n, "class", "text-grey-8pm uppercase text-xs mb-1"), u(o, "class", "news-title text-grey-daylight uppercase text-sm mb-2 svelte-1reps76"), u(p, "class", "news-body text-xs leading-relaxed svelte-1reps76"), u(l, "class", "text-grey-daylight " + (i[7] ? "md:w-6/12" : "")), u(r, "class", "fastNew fade-in-bottom-bigger svelte-1reps76"), Q(r, "no-image", !i[7]), u(e, "href", i[6]), u(e, "target", i[6] ? Ae(i[6]) ? "" : "_blank" : null), u(e, "rel", Ae(i[6]) ? null : "noopener noreferrer")
        },
        m(m, b) {
            S(m, e, b), g(e, r), _ && _.m(r, null), g(r, t), g(r, l), g(l, n), g(n, s), g(l, a), g(l, o), g(o, c), i[9](o), g(l, f), g(l, p), ie(h, p, null), i[10](p), v = !0
        },
        p(m, [b]) {
            m[7] && _.p(m, b)
        },
        i(m) {
            v || (N(h.$$.fragment, m), v = !0)
        },
        o(m) {
            F(h.$$.fragment, m), v = !1
        },
        d(m) {
            m && d(e), _ && _.d(), i[9](null), ne(h), i[10](null)
        }
    }
}

function $f(i, e, r) {
    let {
        props: t
    } = e;
    const {
        image: l,
        tag: n,
        title: s,
        body: a,
        linkUrl: o
    } = t, c = l && l.fields && l.fields.file ? l.fields.file.url : null;
    let f, p;
    He(async () => {
        new Je(f, {
            ellipsis: "...",
            clamp: 1
        }), new Je(p, {
            ellipsis: "...",
            clamp: 3
        })
    });

    function h(_) {
        Ee[_ ? "unshift" : "push"](() => {
            f = _, r(0, f)
        })
    }

    function v(_) {
        Ee[_ ? "unshift" : "push"](() => {
            p = _, r(1, p)
        })
    }
    return i.$$set = _ => {
        "props" in _ && r(8, t = _.props)
    }, [f, p, l, n, s, a, o, c, t, h, v]
}
class If extends ue {
    constructor(e) {
        super(), fe(this, e, $f, Cf, de, {
            props: 8
        })
    }
}

function Df(i) {
    let e, r, t, l, n = i[2].title + "",
        s;
    return {
        c() {
            e = E("h6"), r = W("IOTA Blog"), t = P(), l = E("div"), s = W(n), this.h()
        },
        l(a) {
            e = C(a, "H6", {
                class: !0
            });
            var o = w(e);
            r = Z(o, "IOTA Blog"), o.forEach(d), t = M(a), l = C(a, "DIV", {
                class: !0
            });
            var c = w(l);
            s = Z(c, n), c.forEach(d), this.h()
        },
        h() {
            u(e, "class", "news-title text-grey-daylight uppercase text-sm mb-2 svelte-9pnu0s"), u(l, "class", "news-body text-xs leading-relaxed svelte-9pnu0s")
        },
        m(a, o) {
            S(a, e, o), g(e, r), i[6](e), S(a, t, o), S(a, l, o), g(l, s), i[7](l)
        },
        p(a, o) {
            o & 4 && n !== (n = a[2].title + "") && je(s, n)
        },
        d(a) {
            a && d(e), i[6](null), a && d(t), a && d(l), i[7](null)
        }
    }
}

function Tf(i) {
    let e, r, t, l, n, s, a, o;
    return {
        c() {
            e = E("div"), r = E("div"), t = P(), l = E("div"), n = P(), s = E("div"), a = P(), o = E("div"), this.h()
        },
        l(c) {
            e = C(c, "DIV", {
                class: !0
            });
            var f = w(e);
            r = C(f, "DIV", {
                class: !0
            }), w(r).forEach(d), t = M(f), l = C(f, "DIV", {
                class: !0
            }), w(l).forEach(d), n = M(f), s = C(f, "DIV", {
                class: !0
            }), w(s).forEach(d), a = M(f), o = C(f, "DIV", {
                class: !0
            }), w(o).forEach(d), f.forEach(d), this.h()
        },
        h() {
            u(r, "class", "placeholder-bar svelte-9pnu0s"), u(l, "class", "placeholder-bar svelte-9pnu0s"), u(s, "class", "placeholder-bar svelte-9pnu0s"), u(o, "class", "placeholder-bar svelte-9pnu0s"), u(e, "class", "placeholder placeholder-animation svelte-9pnu0s")
        },
        m(c, f) {
            S(c, e, f), g(e, r), g(e, t), g(e, l), g(e, n), g(e, s), g(e, a), g(e, o)
        },
        p: U,
        d(c) {
            c && d(e)
        }
    }
}

function Sf(i) {
    let e, r, t, l, n, s, a, o;

    function c(h, v) {
        return h[2] ? Df : Tf
    }
    let f = c(i),
        p = f(i);
    return {
        c() {
            e = E("a"), r = E("div"), t = E("div"), l = E("div"), n = W(i[4]), s = P(), p.c(), this.h()
        },
        l(h) {
            e = C(h, "A", {
                class: !0,
                href: !0,
                target: !0,
                rel: !0
            });
            var v = w(e);
            r = C(v, "DIV", {
                class: !0
            });
            var _ = w(r);
            t = C(_, "DIV", {
                class: !0
            });
            var m = w(t);
            l = C(m, "DIV", {
                class: !0
            });
            var b = w(l);
            n = Z(b, i[4]), b.forEach(d), s = M(m), p.l(m), m.forEach(d), _.forEach(d), v.forEach(d), this.h()
        },
        h() {
            u(l, "class", "text-grey-8pm uppercase text-xs mb-1"), u(t, "class", a = "text-grey-daylight w-full " + (i[3] ? "md:w-6/12" : "")), u(r, "class", "fastNew svelte-9pnu0s"), Q(r, "no-image", !i[3]), u(e, "class", "fade-in-bottom-bigger"), u(e, "href", o = i[2] ? i[2].linkUrl : "/"), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer")
        },
        m(h, v) {
            S(h, e, v), g(e, r), g(r, t), g(t, l), g(l, n), g(t, s), p.m(t, null)
        },
        p(h, [v]) {
            f === (f = c(h)) && p ? p.p(h, v) : (p.d(1), p = f(h), p && (p.c(), p.m(t, null))), v & 8 && a !== (a = "text-grey-daylight w-full " + (h[3] ? "md:w-6/12" : "")) && u(t, "class", a), v & 8 && Q(r, "no-image", !h[3]), v & 4 && o !== (o = h[2] ? h[2].linkUrl : "/") && u(e, "href", o)
        },
        i: U,
        o: U,
        d(h) {
            h && d(e), p.d()
        }
    }
}

function Vf(i, e, r) {
    let {
        props: t
    } = e;
    const {
        mediumFetchTag: l
    } = t;
    let n, s, a, o;
    async function c(h) {
        try {
            let _ = await (await fetch(`/get-posts.json?tag=${h}`)).json();
            return r(3, a = !1), _ = {
                title: _.posts[0].title,
                linkUrl: _.posts[0].url.replace(/^http:\/\//i, "https://")
            }, _
        } catch {
            return null
        }
    }
    He(async () => {
        r(2, o = await c(l))
    });

    function f(h) {
        Ee[h ? "unshift" : "push"](() => {
            n = h, r(0, n)
        })
    }

    function p(h) {
        Ee[h ? "unshift" : "push"](() => {
            s = h, r(1, s)
        })
    }
    return i.$$set = h => {
        "props" in h && r(5, t = h.props)
    }, i.$$.update = () => {
        i.$$.dirty & 5 && o && n && new Je(n, {
            ellipsis: "...",
            clamp: 1
        }), i.$$.dirty & 6 && o && s && new Je(s, {
            ellipsis: "...",
            clamp: 3
        })
    }, [n, s, o, a, l, t, f, p]
}
class Pf extends ue {
    constructor(e) {
        super(), fe(this, e, Vf, Sf, de, {
            props: 5
        })
    }
}

function Mf(i) {
    let e, r;
    return e = new Er({
        props: {
            props: {
                elements: Array(10).fill({
                    fields: "placeholder"
                }),
                elementsType: "paginated list card",
                itemsPerPage: 10
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Af(i) {
    let e, r, t;

    function l(s) {
        i[4](s)
    }
    let n = {
        props: i[2]
    };
    return i[1] !== void 0 && (n.paginatorActivePage = i[1]), e = new Er({
        props: n
    }), Ee.push(() => $t(e, "paginatorActivePage", l)), {
        c() {
            le(e.$$.fragment)
        },
        l(s) {
            se(e.$$.fragment, s)
        },
        m(s, a) {
            ie(e, s, a), t = !0
        },
        p(s, a) {
            const o = {};
            a & 4 && (o.props = s[2]), !r && a & 2 && (r = !0, o.paginatorActivePage = s[1], Ct(() => r = !1)), e.$set(o)
        },
        i(s) {
            t || (N(e.$$.fragment, s), t = !0)
        },
        o(s) {
            F(e.$$.fragment, s), t = !1
        },
        d(s) {
            ne(e, s)
        }
    }
}

function Of(i) {
    let e, r, t, l;
    const n = [Af, Mf],
        s = [];

    function a(o, c) {
        return o[0] && o[0].length && o[0].length > 0 ? 0 : 1
    }
    return e = a(i), r = s[e] = n[e](i), {
        c() {
            r.c(), t = J()
        },
        l(o) {
            r.l(o), t = J()
        },
        m(o, c) {
            s[e].m(o, c), S(o, t, c), l = !0
        },
        p(o, [c]) {
            let f = e;
            e = a(o), e === f ? s[e].p(o, c) : (ke(), F(s[f], 1, 1, () => {
                s[f] = null
            }), we(), r = s[e], r ? r.p(o, c) : (r = s[e] = n[e](o), r.c()), N(r, 1), r.m(t.parentNode, t))
        },
        i(o) {
            l || (N(r), l = !0)
        },
        o(o) {
            F(r), l = !1
        },
        d(o) {
            s[e].d(o), o && d(t)
        }
    }
}
async function zf() {
    let i = await fetch("/get-press-releases.json");
    return i = await i.json(), i
}

function Bf(i, e, r) {
    let t, l, n, s = 10,
        a = 1;
    const o = (f, p, h) => {
        const v = (h - 1) * p,
            _ = h * p - 1;
        for (let m = v; m <= _; m++)
            if (f.rowsData[m] && !f.rowsData[m].fields.imageFetched) {
                let b, y = "cover";
                Nn(f.rowsData[m].fields.linkUrl).then(k => {
                    b = k.image || k["og:image"] || null, b === null && (b = f.rowsData[m].fields.eyebrow === "SlicedBrand" ? "https://images.ctfassets.net/xit7f234flxz/7mDJ4ifoY0AvQWUFO3mbok/e159bfc2413d98f60db427c0e8ced64d/image.png" : f[m].fields.eyebrow === "Business Wire" ? "https://images.ctfassets.net/xit7f234flxz/6NJdbxgozNCKSwJUGDOcbF/a7e9c0131e877ccebc5530c21e051c0d/businesswire.png" : null, y = "contain"), r(0, l[m] = {
                        fields: ft(Oe({}, f.rowsData[m].fields), {
                            imageUrl: b,
                            objectFit: y,
                            imageFetched: !0
                        })
                    }, l)
                })
            }
    };
    He(async () => {
        r(3, t = await zf()), r(0, l = t.rowsData), o(t, s, a)
    });

    function c(f) {
        a = f, r(1, a)
    }
    return i.$$.update = () => {
        i.$$.dirty & 3 && r(2, n = {
            elements: l,
            elementsType: "paginated list card",
            itemsPerPage: s,
            paginatorActivePage: a
        }), i.$$.dirty & 10 && a !== 1 && o(t, s, a)
    }, [l, a, n, t, c]
}
class Lf extends ue {
    constructor(e) {
        super(), fe(this, e, Bf, Of, de, {})
    }
}

function Nf(i) {
    let e, r;
    return e = new Er({
        props: {
            props: {
                elements: Array(10).fill({
                    fields: "placeholder"
                }),
                elementsType: "paginated list card",
                itemsPerPage: 10
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Ff(i) {
    let e, r, t;

    function l(s) {
        i[4](s)
    }
    let n = {
        props: i[2]
    };
    return i[1] !== void 0 && (n.paginatorActivePage = i[1]), e = new Er({
        props: n
    }), Ee.push(() => $t(e, "paginatorActivePage", l)), {
        c() {
            le(e.$$.fragment)
        },
        l(s) {
            se(e.$$.fragment, s)
        },
        m(s, a) {
            ie(e, s, a), t = !0
        },
        p(s, a) {
            const o = {};
            a & 4 && (o.props = s[2]), !r && a & 2 && (r = !0, o.paginatorActivePage = s[1], Ct(() => r = !1)), e.$set(o)
        },
        i(s) {
            t || (N(e.$$.fragment, s), t = !0)
        },
        o(s) {
            F(e.$$.fragment, s), t = !1
        },
        d(s) {
            ne(e, s)
        }
    }
}

function Rf(i) {
    let e, r, t, l;
    const n = [Ff, Nf],
        s = [];

    function a(o, c) {
        return o[0] && o[0].length && o[0].length > 0 ? 0 : 1
    }
    return e = a(i), r = s[e] = n[e](i), {
        c() {
            r.c(), t = J()
        },
        l(o) {
            r.l(o), t = J()
        },
        m(o, c) {
            s[e].m(o, c), S(o, t, c), l = !0
        },
        p(o, [c]) {
            let f = e;
            e = a(o), e === f ? s[e].p(o, c) : (ke(), F(s[f], 1, 1, () => {
                s[f] = null
            }), we(), r = s[e], r ? r.p(o, c) : (r = s[e] = n[e](o), r.c()), N(r, 1), r.m(t.parentNode, t))
        },
        i(o) {
            l || (N(r), l = !0)
        },
        o(o) {
            F(r), l = !1
        },
        d(o) {
            s[e].d(o), o && d(t)
        }
    }
}
async function jf() {
    let i = await fetch("/get-news-coverage.json");
    return i = await i.json(), i
}

function Uf(i, e, r) {
    let t, l, n = {
            elements: [],
            elementsType: "paginated list card",
            itemsPerPage: 10,
            paginatorActivePage: 1
        },
        s = 10,
        a = 1;
    const o = (f, p, h) => {
        const v = (h - 1) * p,
            _ = h * p - 1;
        for (let m = v; m <= _; m++)
            if (f.rowsData[m] && !f.rowsData[m].fields.imageFetched) {
                let b;
                Nn(f.rowsData[m].fields.linkUrl).then(y => {
                    b = y.image || y["og:image"] || null, r(0, l[m] = {
                        fields: ft(Oe({}, f.rowsData[m].fields), {
                            imageUrl: b,
                            imageFetched: !0
                        })
                    }, l)
                })
            }
    };
    He(async () => {
        r(3, t = await jf()), r(0, l = t.rowsData), o(t, s, a)
    });

    function c(f) {
        a = f, r(1, a)
    }
    return i.$$.update = () => {
        i.$$.dirty & 3 && r(2, n = {
            elements: l,
            elementsType: "paginated list card",
            itemsPerPage: s,
            paginatorActivePage: a
        }), i.$$.dirty & 10 && a !== 1 && o(t, s, a)
    }, [l, a, n, t, c]
}
class Hf extends ue {
    constructor(e) {
        super(), fe(this, e, Uf, Rf, de, {})
    }
}

function Fi(i, e, r) {
    const t = i.slice();
    return t[23] = e[r].title, t[24] = e[r].type, t[25] = e[r].list, t[26] = e[r].children, t
}

function Ri(i, e, r) {
    const t = i.slice();
    return t[31] = e[r].iconUrl, t[32] = e[r].linkUrl, t[33] = e[r].text, t
}

function ji(i, e, r) {
    const t = i.slice();
    return t[23] = e[r].title, t[24] = e[r].type, t[25] = e[r].list, t
}

function Ui(i, e, r) {
    const t = i.slice();
    return t[31] = e[r].iconUrl, t[32] = e[r].linkUrl, t[33] = e[r].text, t
}

function qf(i) {
    let e;
    return {
        c() {
            e = W(i[8])
        },
        l(r) {
            e = Z(r, i[8])
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Gf(i) {
    let e, r;
    return e = new Ie({
        props: {
            props: {
                text: i[9],
                listArrowColor: "green",
                listFontWeight: 500
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Yf(i) {
    let e, r, t, l = i[10].form && Wf(i),
        n = i[10].columns && Zf(i);
    return {
        c() {
            l && l.c(), e = P(), n && n.c(), r = J()
        },
        l(s) {
            l && l.l(s), e = M(s), n && n.l(s), r = J()
        },
        m(s, a) {
            l && l.m(s, a), S(s, e, a), n && n.m(s, a), S(s, r, a), t = !0
        },
        p(s, a) {
            s[10].form && l.p(s, a), s[10].columns && n.p(s, a)
        },
        i(s) {
            t || (N(l), t = !0)
        },
        o(s) {
            F(l), t = !1
        },
        d(s) {
            l && l.d(s), s && d(e), n && n.d(s), s && d(r)
        }
    }
}

function Wf(i) {
    let e, r, t, l;

    function n(a) {
        i[21](a)
    }
    let s = {
        props: {
            centered: !0
        }
    };
    return i[0] !== void 0 && (s.formClientHeight = i[0]), r = new Fs({
        props: s
    }), Ee.push(() => $t(r, "formClientHeight", n)), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(a) {
            e = C(a, "DIV", {
                class: !0
            });
            var o = w(e);
            se(r.$$.fragment, o), o.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mt-10")
        },
        m(a, o) {
            S(a, e, o), ie(r, e, null), l = !0
        },
        p(a, o) {
            const c = {};
            !t && o[0] & 1 && (t = !0, c.formClientHeight = a[0], Ct(() => t = !1)), r.$set(c)
        },
        i(a) {
            l || (N(r.$$.fragment, a), l = !0)
        },
        o(a) {
            F(r.$$.fragment, a), l = !1
        },
        d(a) {
            a && d(e), ne(r)
        }
    }
}

function Zf(i) {
    let e, r = i[10].columns,
        t = [];
    for (let l = 0; l < r.length; l += 1) t[l] = Yi(Fi(i, r, l));
    return {
        c() {
            e = E("div");
            for (let l = 0; l < t.length; l += 1) t[l].c();
            this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            for (let s = 0; s < t.length; s += 1) t[s].l(n);
            n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "flex flex-wrap justify-between")
        },
        m(l, n) {
            S(l, e, n);
            for (let s = 0; s < t.length; s += 1) t[s].m(e, null)
        },
        p(l, n) {
            if (n[0] & 1024) {
                r = l[10].columns;
                let s;
                for (s = 0; s < r.length; s += 1) {
                    const a = Fi(l, r, s);
                    t[s] ? t[s].p(a, n) : (t[s] = Yi(a), t[s].c(), t[s].m(e, null))
                }
                for (; s < t.length; s += 1) t[s].d(1);
                t.length = r.length
            }
        },
        d(l) {
            l && d(e), De(t, l)
        }
    }
}

function Kf(i) {
    let e, r, t, l = i[23] && Jf(i),
        n = i[25] && ed(i);
    return {
        c() {
            e = E("div"), l && l.c(), r = P(), n && n.c(), t = P(), this.h()
        },
        l(s) {
            e = C(s, "DIV", {
                class: !0
            });
            var a = w(e);
            l && l.l(a), r = M(a), n && n.l(a), t = M(a), a.forEach(d), this.h()
        },
        h() {
            u(e, "class", "w-full md:w-6/12")
        },
        m(s, a) {
            S(s, e, a), l && l.m(e, null), g(e, r), n && n.m(e, null), g(e, t)
        },
        p(s, a) {
            s[23] && l.p(s, a), s[25] && n.p(s, a)
        },
        d(s) {
            s && d(e), l && l.d(), n && n.d()
        }
    }
}

function Xf(i) {
    let e, r, t = i[26],
        l = [];
    for (let n = 0; n < t.length; n += 1) l[n] = Gi(ji(i, t, n));
    return {
        c() {
            e = E("div");
            for (let n = 0; n < l.length; n += 1) l[n].c();
            r = P(), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0
            });
            var s = w(e);
            for (let a = 0; a < l.length; a += 1) l[a].l(s);
            r = M(s), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", "w-full md:w-5/12")
        },
        m(n, s) {
            S(n, e, s);
            for (let a = 0; a < l.length; a += 1) l[a].m(e, null);
            g(e, r)
        },
        p(n, s) {
            if (s[0] & 1024) {
                t = n[26];
                let a;
                for (a = 0; a < t.length; a += 1) {
                    const o = ji(n, t, a);
                    l[a] ? l[a].p(o, s) : (l[a] = Gi(o), l[a].c(), l[a].m(e, r))
                }
                for (; a < l.length; a += 1) l[a].d(1);
                l.length = t.length
            }
        },
        d(n) {
            n && d(e), De(l, n)
        }
    }
}

function Jf(i) {
    let e;

    function r(n, s) {
        if (n[24] === "bold") return xf;
        if (n[24] === "h4") return Qf
    }
    let t = r(i),
        l = t && t(i);
    return {
        c() {
            l && l.c(), e = J()
        },
        l(n) {
            l && l.l(n), e = J()
        },
        m(n, s) {
            l && l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            l && l.p(n, s)
        },
        d(n) {
            l && l.d(n), n && d(e)
        }
    }
}

function Qf(i) {
    let e, r = i[23] + "",
        t;
    return {
        c() {
            e = E("h4"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "H4", {
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mt-10 text-grey-10pm")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function xf(i) {
    let e, r = i[23] + "",
        t;
    return {
        c() {
            e = E("b"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "B", {
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "inline-block mt-10")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function ed(i) {
    let e, r = i[25],
        t = [];
    for (let l = 0; l < r.length; l += 1) t[l] = Hi(Ri(i, r, l));
    return {
        c() {
            for (let l = 0; l < t.length; l += 1) t[l].c();
            e = J()
        },
        l(l) {
            for (let n = 0; n < t.length; n += 1) t[n].l(l);
            e = J()
        },
        m(l, n) {
            for (let s = 0; s < t.length; s += 1) t[s].m(l, n);
            S(l, e, n)
        },
        p(l, n) {
            if (n[0] & 1024) {
                r = l[25];
                let s;
                for (s = 0; s < r.length; s += 1) {
                    const a = Ri(l, r, s);
                    t[s] ? t[s].p(a, n) : (t[s] = Hi(a), t[s].c(), t[s].m(e.parentNode, e))
                }
                for (; s < t.length; s += 1) t[s].d(1);
                t.length = r.length
            }
        },
        d(l) {
            De(t, l), l && d(e)
        }
    }
}

function td(i) {
    let e, r = i[33] + "",
        t;
    return {
        c() {
            e = E("div"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "text-grey-10pm")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function rd(i) {
    let e, r, t, l, n, s = i[33] + "",
        a, o;
    return {
        c() {
            e = E("a"), r = E("div"), t = E("img"), l = P(), n = E("div"), a = W(s), o = P(), this.h()
        },
        l(c) {
            e = C(c, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0
            });
            var f = w(e);
            r = C(f, "DIV", {
                style: !0,
                class: !0
            });
            var p = w(r);
            t = C(p, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), p.forEach(d), l = M(f), n = C(f, "DIV", {
                class: !0
            });
            var h = w(n);
            a = Z(h, s), h.forEach(d), o = M(f), f.forEach(d), this.h()
        },
        h() {
            u(t, "class", "lazyload"), u(t, "data-src", i[31]), u(t, "alt", i[33]), Se(r, "width", "54px"), Se(r, "height", "54px"), u(r, "class", "flex items-center justify-center mr-4 rounded-full bg-grey-8pm"), u(n, "class", "text-grey-midnight"), u(e, "href", i[32]), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer"), u(e, "class", "inline-block flex items-center w-full mt-8")
        },
        m(c, f) {
            S(c, e, f), g(e, r), g(r, t), g(e, l), g(e, n), g(n, a), g(e, o)
        },
        p: U,
        d(c) {
            c && d(e)
        }
    }
}

function Hi(i) {
    let e;

    function r(n, s) {
        return n[31] ? rd : td
    }
    let l = r(i)(i);
    return {
        c() {
            l.c(), e = J()
        },
        l(n) {
            l.l(n), e = J()
        },
        m(n, s) {
            l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            l.p(n, s)
        },
        d(n) {
            l.d(n), n && d(e)
        }
    }
}

function ld(i) {
    let e;

    function r(n, s) {
        if (n[24] === "bold") return nd;
        if (n[24] === "h4") return id
    }
    let t = r(i),
        l = t && t(i);
    return {
        c() {
            l && l.c(), e = J()
        },
        l(n) {
            l && l.l(n), e = J()
        },
        m(n, s) {
            l && l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            l && l.p(n, s)
        },
        d(n) {
            l && l.d(n), n && d(e)
        }
    }
}

function id(i) {
    let e, r = i[23] + "",
        t;
    return {
        c() {
            e = E("h4"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "H4", {
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mt-10 text-grey-10pm")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function nd(i) {
    let e, r = i[23] + "",
        t;
    return {
        c() {
            e = E("b"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "B", {
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "inline-block mt-10")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function sd(i) {
    let e, r = i[25],
        t = [];
    for (let l = 0; l < r.length; l += 1) t[l] = qi(Ui(i, r, l));
    return {
        c() {
            for (let l = 0; l < t.length; l += 1) t[l].c();
            e = J()
        },
        l(l) {
            for (let n = 0; n < t.length; n += 1) t[n].l(l);
            e = J()
        },
        m(l, n) {
            for (let s = 0; s < t.length; s += 1) t[s].m(l, n);
            S(l, e, n)
        },
        p(l, n) {
            if (n[0] & 1024) {
                r = l[25];
                let s;
                for (s = 0; s < r.length; s += 1) {
                    const a = Ui(l, r, s);
                    t[s] ? t[s].p(a, n) : (t[s] = qi(a), t[s].c(), t[s].m(e.parentNode, e))
                }
                for (; s < t.length; s += 1) t[s].d(1);
                t.length = r.length
            }
        },
        d(l) {
            De(t, l), l && d(e)
        }
    }
}

function ad(i) {
    let e, r = i[33] + "",
        t;
    return {
        c() {
            e = E("div"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "text-grey-10pm")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function od(i) {
    let e, r = i[33] + "",
        t;
    return {
        c() {
            e = E("a"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "href", i[32]), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer"), u(e, "class", "link inline-block mt-2 svelte-1urmylf")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function cd(i) {
    let e, r, t, l, n, s = i[33] + "",
        a;
    return {
        c() {
            e = E("a"), r = E("div"), t = E("img"), l = P(), n = E("div"), a = W(s), this.h()
        },
        l(o) {
            e = C(o, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0
            });
            var c = w(e);
            r = C(c, "DIV", {
                style: !0,
                class: !0
            });
            var f = w(r);
            t = C(f, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), f.forEach(d), l = M(c), n = C(c, "DIV", {
                class: !0
            });
            var p = w(n);
            a = Z(p, s), p.forEach(d), c.forEach(d), this.h()
        },
        h() {
            u(t, "class", "lazyload"), u(t, "data-src", i[31]), u(t, "alt", i[33]), Se(r, "width", "54px"), Se(r, "height", "54px"), u(r, "class", "flex items-center justify-center mr-4 rounded-full bg-grey-8pm"), u(n, "class", "text-grey-midnight"), u(e, "href", i[32]), u(e, "target", "_blank"), u(e, "rel", "noopener noreferrer"), u(e, "class", "flex items-center w-full mt-8")
        },
        m(o, c) {
            S(o, e, c), g(e, r), g(r, t), g(e, l), g(e, n), g(n, a)
        },
        p: U,
        d(o) {
            o && d(e)
        }
    }
}

function qi(i) {
    let e;

    function r(n, s) {
        return n[31] ? cd : n[32] && !n[31] ? od : ad
    }
    let l = r(i)(i);
    return {
        c() {
            l.c(), e = J()
        },
        l(n) {
            l.l(n), e = J()
        },
        m(n, s) {
            l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            l.p(n, s)
        },
        d(n) {
            l.d(n), n && d(e)
        }
    }
}

function Gi(i) {
    let e, r, t = i[23] && ld(i),
        l = i[25] && sd(i);
    return {
        c() {
            e = E("div"), t && t.c(), r = P(), l && l.c()
        },
        l(n) {
            e = C(n, "DIV", {});
            var s = w(e);
            t && t.l(s), r = M(s), l && l.l(s), s.forEach(d)
        },
        m(n, s) {
            S(n, e, s), t && t.m(e, null), g(e, r), l && l.m(e, null)
        },
        p(n, s) {
            n[23] && t.p(n, s), n[25] && l.p(n, s)
        },
        d(n) {
            n && d(e), t && t.d(), l && l.d()
        }
    }
}

function Yi(i) {
    let e;

    function r(n, s) {
        return n[26] ? Xf : Kf
    }
    let l = r(i)(i);
    return {
        c() {
            l.c(), e = J()
        },
        l(n) {
            l.l(n), e = J()
        },
        m(n, s) {
            l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            l.p(n, s)
        },
        d(n) {
            l.d(n), n && d(e)
        }
    }
}

function ud(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _ = i[8] && qf(i),
        m = i[9] && Gf(i),
        b = i[10] && Yf(i);
    const y = i[18].default,
        k = xs(y, i, i[17], null);
    return {
        c() {
            e = E("div"), r = W(i[7]), t = P(), l = he("svg"), n = he("path"), s = P(), a = E("div"), _ && _.c(), o = P(), m && m.c(), c = P(), b && b.c(), f = P(), k && k.c(), this.h()
        },
        l($) {
            e = C($, "DIV", {
                class: !0
            });
            var I = w(e);
            r = Z(I, i[7]), t = M(I), l = _e(I, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var D = w(l);
            n = _e(D, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0
            }), w(n).forEach(d), D.forEach(d), I.forEach(d), s = M($), a = C($, "DIV", {
                style: !0,
                class: !0
            });
            var T = w(a);
            _ && _.l(T), o = M(T), m && m.l(T), c = M(T), b && b.l(T), f = M(T), k && k.l(T), T.forEach(d), this.h()
        },
        h() {
            u(n, "d", "M13 1L7 7L1 0.999999"), u(n, "stroke", "#131F37"), u(n, "stroke-width", "2"), u(l, "class", "mr-8 md:hidden svelte-1urmylf"), u(l, "width", "14"), u(l, "height", "9"), u(l, "viewBox", "0 0 14 9"), u(l, "fill", "none"), u(l, "xmlns", "http://www.w3.org/2000/svg"), Q(l, "active", i[6]), Q(l, "accordion-open", i[3]), Q(l, "keep-tab-on-mobile", i[2]), u(e, "class", "tab-title flex md:grow justify-between md:justify-center items-center w-full py-2 cursor-pointer md:w-auto md:pb-5 svelte-1urmylf"), Q(e, "active", i[6]), Q(e, "accordion-open", i[3]), Q(e, "keep-tab-on-mobile", i[2]), Se(a, "--tab-content-top", i[1] + "px"), u(a, "class", "tab-content overflow-hidden text-base md:order-last md:w-full svelte-1urmylf"), Q(a, "active", i[6]), Q(a, "accordion-open", i[3]), Q(a, "keep-tab-on-mobile", i[2])
        },
        m($, I) {
            S($, e, I), g(e, r), g(e, t), g(e, l), g(l, n), i[20](e), S($, s, I), S($, a, I), _ && _.m(a, null), g(a, o), m && m.m(a, null), g(a, c), b && b.m(a, null), g(a, f), k && k.m(a, null), i[22](a), p = !0, h || (v = pe(e, "click", i[19]), h = !0)
        },
        p($, I) {
            I[0] & 64 && Q(l, "active", $[6]), I[0] & 8 && Q(l, "accordion-open", $[3]), I[0] & 4 && Q(l, "keep-tab-on-mobile", $[2]), I[0] & 64 && Q(e, "active", $[6]), I[0] & 8 && Q(e, "accordion-open", $[3]), I[0] & 4 && Q(e, "keep-tab-on-mobile", $[2]), $[8] && _.p($, I), $[9] && m.p($, I), $[10] && b.p($, I), k && k.p && (!p || I[0] & 131072) && ea(k, y, $, $[17], p ? ra(y, $[17], I, null) : ta($[17]), null), (!p || I[0] & 2) && Se(a, "--tab-content-top", $[1] + "px"), I[0] & 64 && Q(a, "active", $[6]), I[0] & 8 && Q(a, "accordion-open", $[3]), I[0] & 4 && Q(a, "keep-tab-on-mobile", $[2])
        },
        i($) {
            p || (N(m), N(b), N(k, $), p = !0)
        },
        o($) {
            F(m), F(b), F(k, $), p = !1
        },
        d($) {
            $ && d(e), i[20](null), $ && d(s), $ && d(a), _ && _.d(), m && m.d(), b && b.d(), k && k.d($), i[22](null), h = !1, v()
        }
    }
}

function fd(i, e, r) {
    let t, {
            $$slots: l = {},
            $$scope: n
        } = e,
        {
            props: s,
            keepTabOnMobile: a,
            openedTabIndex: o,
            tabContentHeight: c,
            formClientHeight: f = 0,
            tabTitleHeight: p = 0,
            handleTabClick: h,
            accordionOpen: v
        } = e;
    const {
        title: _,
        description: m,
        body: b,
        staticContent: y,
        i: k
    } = s;
    let $, I;
    He(() => {
        t && (r(13, c = $.clientHeight), r(1, p = I.clientHeight))
    });

    function D(V) {
        h(V), r(13, c = $.clientHeight), r(1, p = I.clientHeight)
    }
    const T = V => D(k);

    function z(V) {
        Ee[V ? "unshift" : "push"](() => {
            I = V, r(5, I)
        })
    }

    function A(V) {
        f = V, r(0, f)
    }

    function B(V) {
        Ee[V ? "unshift" : "push"](() => {
            $ = V, r(4, $)
        })
    }
    return i.$$set = V => {
        "props" in V && r(14, s = V.props), "keepTabOnMobile" in V && r(2, a = V.keepTabOnMobile), "openedTabIndex" in V && r(15, o = V.openedTabIndex), "tabContentHeight" in V && r(13, c = V.tabContentHeight), "formClientHeight" in V && r(0, f = V.formClientHeight), "tabTitleHeight" in V && r(1, p = V.tabTitleHeight), "handleTabClick" in V && r(16, h = V.handleTabClick), "accordionOpen" in V && r(3, v = V.accordionOpen), "$$scope" in V && r(17, n = V.$$scope)
    }, i.$$.update = () => {
        i.$$.dirty[0] & 32768 && r(6, t = k === o), i.$$.dirty[0] & 32784 && typeof $ != "undefined" && (k !== o ? ($.classList.remove(`${k>o?"left":"right"}-hidden-tab`), $.classList.add(`${k>o?"right":"left"}-hidden-tab`)) : ($.classList.remove("left-hidden-tab"), $.classList.remove("right-hidden-tab"))), i.$$.dirty[0] & 17 && f && r(13, c = $.clientHeight)
    }, [f, p, a, v, $, I, t, _, m, b, y, k, D, c, s, o, h, n, l, T, z, A, B]
}
class Us extends ue {
    constructor(e) {
        super(), fe(this, e, fd, ud, de, {
            props: 14,
            keepTabOnMobile: 2,
            openedTabIndex: 15,
            tabContentHeight: 13,
            formClientHeight: 0,
            tabTitleHeight: 1,
            handleTabClick: 16,
            accordionOpen: 3
        }, null, [-1, -1])
    }
}

function Wi(i, e, r) {
    const t = i.slice();
    return t[10] = e[r], t[11] = e, t[12] = r, t
}

function dd(i) {
    let e, r, t, l, n, s = i[4] && i[4].length && i[4].length > 0 && hd(i);
    return {
        c() {
            e = E("div"), r = E("div"), s && s.c(), t = P(), l = E("hr"), this.h()
        },
        l(a) {
            e = C(a, "DIV", {
                class: !0,
                style: !0
            });
            var o = w(e);
            r = C(o, "DIV", {
                class: !0
            });
            var c = w(r);
            s && s.l(c), c.forEach(d), t = M(o), l = C(o, "HR", {
                class: !0,
                style: !0
            }), o.forEach(d), this.h()
        },
        h() {
            u(r, "class", "w-full md:flex md:flex-wrap md:justify-between"), u(l, "class", "hidden md:block absolute w-full border-grey-4pm z-0"), Se(l, "top", "3.25rem"), u(e, "class", "tabs-container relative lg:col-8 mx-auto fade-in-bottom md:overflow-hidden svelte-1xrx63e"), Se(e, "--padding-bottom", i[0] + i[1] + "px")
        },
        m(a, o) {
            S(a, e, o), g(e, r), s && s.m(r, null), g(e, t), g(e, l), n = !0
        },
        p(a, o) {
            a[4] && a[4].length && a[4].length > 0 && s.p(a, o), (!n || o & 3) && Se(e, "--padding-bottom", a[0] + a[1] + "px")
        },
        i(a) {
            n || (N(s), n = !0)
        },
        o(a) {
            F(s), n = !1
        },
        d(a) {
            a && d(e), s && s.d()
        }
    }
}

function hd(i) {
    let e, r, t = i[4],
        l = [];
    for (let s = 0; s < t.length; s += 1) l[s] = Zi(Wi(i, t, s));
    const n = s => F(l[s], 1, 1, () => {
        l[s] = null
    });
    return {
        c() {
            for (let s = 0; s < l.length; s += 1) l[s].c();
            e = J()
        },
        l(s) {
            for (let a = 0; a < l.length; a += 1) l[a].l(s);
            e = J()
        },
        m(s, a) {
            for (let o = 0; o < l.length; o += 1) l[o].m(s, a);
            S(s, e, a), r = !0
        },
        p(s, a) {
            if (a & 63) {
                t = s[4];
                let o;
                for (o = 0; o < t.length; o += 1) {
                    const c = Wi(s, t, o);
                    l[o] ? (l[o].p(c, a), N(l[o], 1)) : (l[o] = Zi(c), l[o].c(), N(l[o], 1), l[o].m(e.parentNode, e))
                }
                for (ke(), o = t.length; o < l.length; o += 1) n(o);
                we()
            }
        },
        i(s) {
            if (!r) {
                for (let a = 0; a < t.length; a += 1) N(l[a]);
                r = !0
            }
        },
        o(s) {
            l = l.filter(Boolean);
            for (let a = 0; a < l.length; a += 1) F(l[a]);
            r = !1
        },
        d(s) {
            De(l, s), s && d(e)
        }
    }
}

function Zi(i) {
    let e, r, t, l, n;

    function s(f) {
        i[7](f, i[12])
    }

    function a(f) {
        i[8](f)
    }

    function o(f) {
        i[9](f)
    }
    let c = {
        props: ft(Oe({}, i[10].fields), {
            i: i[12]
        }),
        handleTabClick: i[5],
        openedTabIndex: i[2],
        keepTabOnMobile: !1
    };
    return i[3][i[12]] !== void 0 && (c.accordionOpen = i[3][i[12]]), i[0] !== void 0 && (c.tabContentHeight = i[0]), i[1] !== void 0 && (c.tabTitleHeight = i[1]), e = new Us({
        props: c
    }), Ee.push(() => $t(e, "accordionOpen", s)), Ee.push(() => $t(e, "tabContentHeight", a)), Ee.push(() => $t(e, "tabTitleHeight", o)), {
        c() {
            le(e.$$.fragment)
        },
        l(f) {
            se(e.$$.fragment, f)
        },
        m(f, p) {
            ie(e, f, p), n = !0
        },
        p(f, p) {
            i = f;
            const h = {};
            p & 4 && (h.openedTabIndex = i[2]), !r && p & 8 && (r = !0, h.accordionOpen = i[3][i[12]], Ct(() => r = !1)), !t && p & 1 && (t = !0, h.tabContentHeight = i[0], Ct(() => t = !1)), !l && p & 2 && (l = !0, h.tabTitleHeight = i[1], Ct(() => l = !1)), e.$set(h)
        },
        i(f) {
            n || (N(e.$$.fragment, f), n = !0)
        },
        o(f) {
            F(e.$$.fragment, f), n = !1
        },
        d(f) {
            ne(e, f)
        }
    }
}

function _d(i) {
    let e, r, t = i[4] && i[4].length && i[4].length > 0 && dd(i);
    return {
        c() {
            t && t.c(), e = J()
        },
        l(l) {
            t && t.l(l), e = J()
        },
        m(l, n) {
            t && t.m(l, n), S(l, e, n), r = !0
        },
        p(l, [n]) {
            l[4] && l[4].length && l[4].length > 0 && t.p(l, n)
        },
        i(l) {
            r || (N(t), r = !0)
        },
        o(l) {
            F(t), r = !1
        },
        d(l) {
            t && t.d(l), l && d(e)
        }
    }
}

function pd(i, e, r) {
    let {
        props: t
    } = e;
    const {
        tabs: l
    } = t;
    let n = null,
        s = null,
        a = 0,
        o = {};
    l.forEach((v, _) => {
        r(3, o[_] = !1, o)
    });

    function c(v) {
        window.innerWidth < 720 ? r(3, o = ft(Oe({}, o), {
            [v]: !o[v]
        })) : r(2, a = v)
    }

    function f(v, _) {
        i.$$.not_equal(o[_], v) && (o[_] = v, r(3, o))
    }

    function p(v) {
        n = v, r(0, n)
    }

    function h(v) {
        s = v, r(1, s)
    }
    return i.$$set = v => {
        "props" in v && r(6, t = v.props)
    }, [n, s, a, o, l, c, t, f, p, h]
}
class md extends ue {
    constructor(e) {
        super(), fe(this, e, pd, _d, de, {
            props: 6
        })
    }
}

function Ki(i, e, r) {
    const t = i.slice();
    return t[12] = e[r], t[14] = r, t
}

function Xi(i, e, r) {
    const t = i.slice();
    return t[12] = e[r], t[14] = r, t
}

function Ji(i) {
    let e, r, t, l;
    return {
        c() {
            e = E("button"), r = W("1"), this.h()
        },
        l(n) {
            e = C(n, "BUTTON", {
                class: !0
            });
            var s = w(e);
            r = Z(s, "1"), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", "hidden md:block py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2 svelte-1cxmhd1"), Q(e, "active", i[0] === 1)
        },
        m(n, s) {
            S(n, e, s), g(e, r), t || (l = pe(e, "click", i[4]), t = !0)
        },
        p(n, s) {
            s & 1 && Q(e, "active", n[0] === 1)
        },
        d(n) {
            n && d(e), t = !1, l()
        }
    }
}

function Qi(i) {
    let e, r;
    return {
        c() {
            e = he("svg"), r = he("path"), this.h()
        },
        l(t) {
            e = _e(t, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var l = w(e);
            r = _e(l, "path", {
                d: !0,
                fill: !0
            }), w(r).forEach(d), l.forEach(d), this.h()
        },
        h() {
            u(r, "d", `M24.3807 27.1477C25.108 27.1477 25.7386 26.5398 25.7443 25.7841C25.7386 25.0398 25.108 24.4318 24.3807
                        24.4318C23.6307 24.4318 23.0114 25.0398 23.017 25.7841C23.0114 26.5398 23.6307 27.1477 24.3807
                        27.1477ZM30.4263 27.1477C31.1536 27.1477 31.7843 26.5398 31.7899 25.7841C31.7843 25.0398 31.1536 24.4318
                        30.4263 24.4318C29.6763 24.4318 29.057 25.0398 29.0627 25.7841C29.057 26.5398 29.6763 27.1477 30.4263
                        27.1477ZM36.4719 27.1477C37.1992 27.1477 37.8299 26.5398 37.8356 25.7841C37.8299 25.0398 37.1992 24.4318
                        36.4719 24.4318C35.7219 24.4318 35.1026 25.0398 35.1083 25.7841C35.1026 26.5398 35.7219 27.1477 36.4719
                        27.1477Z`), u(r, "fill", "#8493AD"), u(e, "width", "61"), u(e, "height", "48"), u(e, "viewBox", "0 0 61 48"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        d(t) {
            t && d(e)
        }
    }
}

function gd(i) {
    let e, r = i[14] + 1 + "",
        t, l, n, s;

    function a(...o) {
        return i[6](i[14], ...o)
    }
    return {
        c() {
            e = E("button"), t = W(r), l = P(), this.h()
        },
        l(o) {
            e = C(o, "BUTTON", {
                class: !0
            });
            var c = w(e);
            t = Z(c, r), l = M(c), c.forEach(d), this.h()
        },
        h() {
            u(e, "class", "py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2 svelte-1cxmhd1"), Q(e, "active", i[14] + 1 === i[0])
        },
        m(o, c) {
            S(o, e, c), g(e, t), g(e, l), n || (s = pe(e, "click", a), n = !0)
        },
        p(o, c) {
            i = o, c & 1 && Q(e, "active", i[14] + 1 === i[0])
        },
        d(o) {
            o && d(e), n = !1, s()
        }
    }
}

function vd(i) {
    let e, r = i[14] + 1 != 1 && i[14] + 1 != i[1] && (i[14] + 1 >= i[0] || i[14] + 1 >= i[1] - 3 || i[0] >= i[1] - 3 && i[14] + 1 >= i[1] - 3) && (i[14] + 1 <= i[0] + 2 || i[0] == 1 && i[14] + 1 <= i[0] + 3) && xi(i);
    return {
        c() {
            r && r.c(), e = J()
        },
        l(t) {
            r && r.l(t), e = J()
        },
        m(t, l) {
            r && r.m(t, l), S(t, e, l)
        },
        p(t, l) {
            t[14] + 1 != 1 && t[14] + 1 != t[1] && (t[14] + 1 >= t[0] || t[14] + 1 >= t[1] - 3 || t[0] >= t[1] - 3 && t[14] + 1 >= t[1] - 3) && (t[14] + 1 <= t[0] + 2 || t[0] == 1 && t[14] + 1 <= t[0] + 3) ? r ? r.p(t, l) : (r = xi(t), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null)
        },
        d(t) {
            r && r.d(t), t && d(e)
        }
    }
}

function xi(i) {
    let e, r = i[14] + 1 + "",
        t, l, n, s;

    function a(...o) {
        return i[5](i[14], ...o)
    }
    return {
        c() {
            e = E("button"), t = W(r), l = P(), this.h()
        },
        l(o) {
            e = C(o, "BUTTON", {
                class: !0
            });
            var c = w(e);
            t = Z(c, r), l = M(c), c.forEach(d), this.h()
        },
        h() {
            u(e, "class", "py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2 svelte-1cxmhd1"), Q(e, "active", i[14] + 1 === i[0])
        },
        m(o, c) {
            S(o, e, c), g(e, t), g(e, l), n || (s = pe(e, "click", a), n = !0)
        },
        p(o, c) {
            i = o, c & 1 && Q(e, "active", i[14] + 1 === i[0])
        },
        d(o) {
            o && d(e), n = !1, s()
        }
    }
}

function en(i) {
    let e;

    function r(n, s) {
        return n[1] > 7 ? vd : gd
    }
    let t = r(i),
        l = t(i);
    return {
        c() {
            l.c(), e = J()
        },
        l(n) {
            l.l(n), e = J()
        },
        m(n, s) {
            l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            t === (t = r(n)) && l ? l.p(n, s) : (l.d(1), l = t(n), l && (l.c(), l.m(e.parentNode, e)))
        },
        d(n) {
            l.d(n), n && d(e)
        }
    }
}

function tn(i) {
    let e;

    function r(n, s) {
        if (n[0] < n[1] - 5) return yd;
        if (n[0] == n[1] - 5) return bd
    }
    let t = r(i),
        l = t && t(i);
    return {
        c() {
            l && l.c(), e = J()
        },
        l(n) {
            l && l.l(n), e = J()
        },
        m(n, s) {
            l && l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            t === (t = r(n)) && l ? l.p(n, s) : (l && l.d(1), l = t && t(n), l && (l.c(), l.m(e.parentNode, e)))
        },
        d(n) {
            l && l.d(n), n && d(e)
        }
    }
}

function bd(i) {
    let e, r = i[1] - 1 + "",
        t, l, n;
    return {
        c() {
            e = E("button"), t = W(r), this.h()
        },
        l(s) {
            e = C(s, "BUTTON", {
                class: !0
            });
            var a = w(e);
            t = Z(a, r), a.forEach(d), this.h()
        },
        h() {
            u(e, "class", "py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2 svelte-1cxmhd1"), Q(e, "active", i[1] - 1 === i[0])
        },
        m(s, a) {
            S(s, e, a), g(e, t), l || (n = pe(e, "click", i[7]), l = !0)
        },
        p(s, a) {
            a & 2 && r !== (r = s[1] - 1 + "") && je(t, r), a & 3 && Q(e, "active", s[1] - 1 === s[0])
        },
        d(s) {
            s && d(e), l = !1, n()
        }
    }
}

function yd(i) {
    let e, r;
    return {
        c() {
            e = he("svg"), r = he("path"), this.h()
        },
        l(t) {
            e = _e(t, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var l = w(e);
            r = _e(l, "path", {
                d: !0,
                fill: !0
            }), w(r).forEach(d), l.forEach(d), this.h()
        },
        h() {
            u(r, "d", `M24.3807 27.1477C25.108 27.1477 25.7386 26.5398 25.7443 25.7841C25.7386 25.0398 25.108 24.4318
                            24.3807 24.4318C23.6307 24.4318 23.0114 25.0398 23.017 25.7841C23.0114 26.5398 23.6307 27.1477 24.3807
                            27.1477ZM30.4263 27.1477C31.1536 27.1477 31.7843 26.5398 31.7899 25.7841C31.7843 25.0398 31.1536
                            24.4318 30.4263 24.4318C29.6763 24.4318 29.057 25.0398 29.0627 25.7841C29.057 26.5398 29.6763 27.1477
                            30.4263 27.1477ZM36.4719 27.1477C37.1992 27.1477 37.8299 26.5398 37.8356 25.7841C37.8299 25.0398
                            37.1992 24.4318 36.4719 24.4318C35.7219 24.4318 35.1026 25.0398 35.1083 25.7841C35.1026 26.5398
                            35.7219 27.1477 36.4719 27.1477Z`), u(r, "fill", "#8493AD"), u(e, "width", "61"), u(e, "height", "48"), u(e, "viewBox", "0 0 61 48"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function rn(i) {
    let e, r, t, l;
    return {
        c() {
            e = E("button"), r = W(i[1]), this.h()
        },
        l(n) {
            e = C(n, "BUTTON", {
                class: !0
            });
            var s = w(e);
            r = Z(s, i[1]), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", "py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2 svelte-1cxmhd1"), Q(e, "active", i[1] === i[0])
        },
        m(n, s) {
            S(n, e, s), g(e, r), t || (l = pe(e, "click", i[8]), t = !0)
        },
        p(n, s) {
            s & 2 && je(r, n[1]), s & 3 && Q(e, "active", n[1] === n[0])
        },
        d(n) {
            n && d(e), t = !1, l()
        }
    }
}

function ln(i) {
    let e, r = i[14] + 1 + "",
        t, l, n, s;

    function a(...o) {
        return i[9](i[14], ...o)
    }
    return {
        c() {
            e = E("button"), t = W(r), l = P(), this.h()
        },
        l(o) {
            e = C(o, "BUTTON", {
                class: !0
            });
            var c = w(e);
            t = Z(c, r), l = M(c), c.forEach(d), this.h()
        },
        h() {
            u(e, "class", "py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2 svelte-1cxmhd1"), Q(e, "active", i[14] + 1 === i[0])
        },
        m(o, c) {
            S(o, e, c), g(e, t), g(e, l), n || (s = pe(e, "click", a), n = !0)
        },
        p(o, c) {
            i = o, c & 1 && Q(e, "active", i[14] + 1 === i[0])
        },
        d(o) {
            o && d(e), n = !1, s()
        }
    }
}

function nn(i) {
    let e, r = (i[14] + 1 <= i[0] + 1 && i[14] + 1 >= i[0] - 1 || i[0] == 1 && i[14] + 1 <= i[0] + 2 || i[0] == i[1] && i[14] + 1 >= i[0] - 2) && ln(i);
    return {
        c() {
            r && r.c(), e = J()
        },
        l(t) {
            r && r.l(t), e = J()
        },
        m(t, l) {
            r && r.m(t, l), S(t, e, l)
        },
        p(t, l) {
            t[14] + 1 <= t[0] + 1 && t[14] + 1 >= t[0] - 1 || t[0] == 1 && t[14] + 1 <= t[0] + 2 || t[0] == t[1] && t[14] + 1 >= t[0] - 2 ? r ? r.p(t, l) : (r = ln(t), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null)
        },
        d(t) {
            r && r.d(t), t && d(e)
        }
    }
}

function kd(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I, D, T, z, A, B, V, L, O, R, j = i[1] > 7 && Ji(i),
        G = i[1] > 7 && i[0] > 2 && Qi(),
        X = Array(i[1]),
        Y = [];
    for (let te = 0; te < X.length; te += 1) Y[te] = en(Xi(i, X, te));
    let ee = i[1] > 7 && tn(i),
        q = i[1] > 7 && rn(i),
        x = Array(i[1]),
        re = [];
    for (let te = 0; te < x.length; te += 1) re[te] = nn(Ki(i, x, te));
    return {
        c() {
            e = E("div"), r = E("div"), t = E("button"), l = E("span"), n = W("PREVIOUS"), s = P(), a = he("svg"), o = he("path"), p = P(), h = E("div"), j && j.c(), v = P(), G && G.c(), _ = P();
            for (let te = 0; te < Y.length; te += 1) Y[te].c();
            m = P(), ee && ee.c(), b = P(), q && q.c(), y = P(), k = E("div");
            for (let te = 0; te < re.length; te += 1) re[te].c();
            $ = P(), I = E("button"), D = E("span"), T = W("NEXT"), z = P(), A = he("svg"), B = he("path"), this.h()
        },
        l(te) {
            e = C(te, "DIV", {
                class: !0
            });
            var H = w(e);
            r = C(H, "DIV", {
                class: !0
            });
            var K = w(r);
            t = C(K, "BUTTON", {
                class: !0
            });
            var ce = w(t);
            l = C(ce, "SPAN", {
                class: !0
            });
            var ye = w(l);
            n = Z(ye, "PREVIOUS"), ye.forEach(d), s = M(ce), a = _e(ce, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var ge = w(a);
            o = _e(ge, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0
            }), w(o).forEach(d), ge.forEach(d), ce.forEach(d), p = M(K), h = C(K, "DIV", {
                class: !0
            });
            var Te = w(h);
            j && j.l(Te), v = M(Te), G && G.l(Te), _ = M(Te);
            for (let ae = 0; ae < Y.length; ae += 1) Y[ae].l(Te);
            m = M(Te), ee && ee.l(Te), b = M(Te), q && q.l(Te), Te.forEach(d), y = M(K), k = C(K, "DIV", {
                class: !0
            });
            var me = w(k);
            for (let ae = 0; ae < re.length; ae += 1) re[ae].l(me);
            me.forEach(d), $ = M(K), I = C(K, "BUTTON", {
                class: !0
            });
            var st = w(I);
            D = C(st, "SPAN", {
                class: !0
            });
            var oe = w(D);
            T = Z(oe, "NEXT"), oe.forEach(d), z = M(st), A = _e(st, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var be = w(A);
            B = _e(be, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0
            }), w(B).forEach(d), be.forEach(d), st.forEach(d), K.forEach(d), H.forEach(d), this.h()
        },
        h() {
            u(l, "class", "hidden md:block"), u(o, "d", "M7 1L2 6L7 11"), u(o, "stroke", "#485776"), u(o, "stroke-width", "1.72854"), u(a, "class", "block md:hidden"), u(a, "width", "8"), u(a, "height", "12"), u(a, "viewBox", "0 0 8 12"), u(a, "fill", "none"), u(a, "xmlns", "http://www.w3.org/2000/svg"), t.disabled = c = i[0] == 1, u(t, "class", f = (i[0] == 1 ? "cursor-not-allowed" : "false") + " py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2"), u(h, "class", "hidden md:flex"), u(k, "class", "flex md:hidden"), u(D, "class", "hidden md:block"), u(B, "d", "M1 11L6 6L1 1"), u(B, "stroke", "#485776"), u(B, "stroke-width", "1.72854"), u(A, "class", "block md:hidden"), u(A, "width", "8"), u(A, "height", "12"), u(A, "viewBox", "0 0 8 12"), u(A, "fill", "none"), u(A, "xmlns", "http://www.w3.org/2000/svg"), I.disabled = V = i[0] == i[1], u(I, "class", L = (i[0] == i[1] ? "cursor-not-allowed" : "") + " py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2"), u(r, "class", "my-5 flex"), u(e, "class", "flex w-full justify-center")
        },
        m(te, H) {
            S(te, e, H), g(e, r), g(r, t), g(t, l), g(l, n), g(t, s), g(t, a), g(a, o), g(r, p), g(r, h), j && j.m(h, null), g(h, v), G && G.m(h, null), g(h, _);
            for (let K = 0; K < Y.length; K += 1) Y[K].m(h, null);
            g(h, m), ee && ee.m(h, null), g(h, b), q && q.m(h, null), g(r, y), g(r, k);
            for (let K = 0; K < re.length; K += 1) re[K].m(k, null);
            g(r, $), g(r, I), g(I, D), g(D, T), g(I, z), g(I, A), g(A, B), O || (R = [pe(t, "click", i[3]), pe(I, "click", i[10])], O = !0)
        },
        p(te, [H]) {
            if (H & 1 && c !== (c = te[0] == 1) && (t.disabled = c), H & 1 && f !== (f = (te[0] == 1 ? "cursor-not-allowed" : "false") + " py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2") && u(t, "class", f), te[1] > 7 ? j ? j.p(te, H) : (j = Ji(te), j.c(), j.m(h, v)) : j && (j.d(1), j = null), te[1] > 7 && te[0] > 2 ? G || (G = Qi(), G.c(), G.m(h, _)) : G && (G.d(1), G = null), H & 7) {
                X = Array(te[1]);
                let K;
                for (K = 0; K < X.length; K += 1) {
                    const ce = Xi(te, X, K);
                    Y[K] ? Y[K].p(ce, H) : (Y[K] = en(ce), Y[K].c(), Y[K].m(h, m))
                }
                for (; K < Y.length; K += 1) Y[K].d(1);
                Y.length = X.length
            }
            if (te[1] > 7 ? ee ? ee.p(te, H) : (ee = tn(te), ee.c(), ee.m(h, b)) : ee && (ee.d(1), ee = null), te[1] > 7 ? q ? q.p(te, H) : (q = rn(te), q.c(), q.m(h, null)) : q && (q.d(1), q = null), H & 7) {
                x = Array(te[1]);
                let K;
                for (K = 0; K < x.length; K += 1) {
                    const ce = Ki(te, x, K);
                    re[K] ? re[K].p(ce, H) : (re[K] = nn(ce), re[K].c(), re[K].m(k, null))
                }
                for (; K < re.length; K += 1) re[K].d(1);
                re.length = x.length
            }
            H & 3 && V !== (V = te[0] == te[1]) && (I.disabled = V), H & 3 && L !== (L = (te[0] == te[1] ? "cursor-not-allowed" : "") + " py-4 px-6 mx-1 rounded-lg bg-grey-2pm text-grey-8pm font-bold flex justify-center items-center lg:mx-2") && u(I, "class", L)
        },
        i: U,
        o: U,
        d(te) {
            te && d(e), j && j.d(), G && G.d(), De(Y, te), ee && ee.d(), q && q.d(), De(re, te), O = !1, nt(R)
        }
    }
}

function wd(i, e, r) {
    let {
        currentPage: t,
        numPages: l
    } = e;
    const n = zn();

    function s(m, b) {
        n("message", {
            text: b
        })
    }
    const a = m => s(m, t - 1),
        o = m => s(m, 1),
        c = (m, b) => s(b, m + 1),
        f = (m, b) => s(b, m + 1),
        p = m => s(m, l - 1),
        h = m => s(m, l),
        v = (m, b) => s(b, m + 1),
        _ = m => s(m, t + 1);
    return i.$$set = m => {
        "currentPage" in m && r(0, t = m.currentPage), "numPages" in m && r(1, l = m.numPages)
    }, [t, l, s, a, o, c, f, p, h, v, _]
}
class Ed extends ue {
    constructor(e) {
        super(), fe(this, e, wd, kd, de, {
            currentPage: 0,
            numPages: 1
        })
    }
}

function sn(i, e, r) {
    const t = i.slice();
    return t[14] = e[r], t
}

function an(i) {
    let e = [],
        r = new Map,
        t, l, n = i[2];
    const s = a => a[14].i;
    for (let a = 0; a < n.length; a += 1) {
        let o = sn(i, n, a),
            c = s(o);
        r.set(c, e[a] = on(c, o))
    }
    return {
        c() {
            for (let a = 0; a < e.length; a += 1) e[a].c();
            t = J()
        },
        l(a) {
            for (let o = 0; o < e.length; o += 1) e[o].l(a);
            t = J()
        },
        m(a, o) {
            for (let c = 0; c < e.length; c += 1) e[c].m(a, o);
            S(a, t, o), l = !0
        },
        p(a, o) {
            o & 5 && (n = a[2], ke(), e = ml(e, o, s, 1, a, n, r, t.parentNode, gl, on, t, sn), we())
        },
        i(a) {
            if (!l) {
                for (let o = 0; o < n.length; o += 1) N(e[o]);
                l = !0
            }
        },
        o(a) {
            for (let o = 0; o < e.length; o += 1) F(e[o]);
            l = !1
        },
        d(a) {
            for (let o = 0; o < e.length; o += 1) e[o].d(a);
            a && d(t)
        }
    }
}

function on(i, e) {
    let r, t, l, n;
    var s = e[0];

    function a(o) {
        return {
            props: {
                props: o[14].fields
            }
        }
    }
    return s && (t = new s(a(e))), {
        key: i,
        first: null,
        c() {
            r = J(), t && le(t.$$.fragment), l = J(), this.h()
        },
        l(o) {
            r = J(), t && se(t.$$.fragment, o), l = J(), this.h()
        },
        h() {
            this.first = r
        },
        m(o, c) {
            S(o, r, c), t && ie(t, o, c), S(o, l, c), n = !0
        },
        p(o, c) {
            e = o;
            const f = {};
            if (c & 4 && (f.props = e[14].fields), s !== (s = e[0])) {
                if (t) {
                    ke();
                    const p = t;
                    F(p.$$.fragment, 1, 0, () => {
                        ne(p, 1)
                    }), we()
                }
                s ? (t = new s(a(e)), le(t.$$.fragment), N(t.$$.fragment, 1), ie(t, l.parentNode, l)) : t = null
            } else s && t.$set(f)
        },
        i(o) {
            n || (t && N(t.$$.fragment, o), n = !0)
        },
        o(o) {
            t && F(t.$$.fragment, o), n = !1
        },
        d(o) {
            o && d(r), o && d(l), t && ne(t, o)
        }
    }
}

function Cd(i) {
    let e, r;
    return e = new Ed({
        props: {
            numPages: i[3],
            currentPage: i[1]
        }
    }), e.$on("message", i[4]), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, l) {
            const n = {};
            l & 2 && (n.currentPage = t[1]), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function $d(i) {
    let e, r, t, l = i[2] && an(i),
        n = i[3] > 1 && Cd(i);
    return {
        c() {
            l && l.c(), e = P(), n && n.c(), r = J()
        },
        l(s) {
            l && l.l(s), e = M(s), n && n.l(s), r = J()
        },
        m(s, a) {
            l && l.m(s, a), S(s, e, a), n && n.m(s, a), S(s, r, a), t = !0
        },
        p(s, [a]) {
            s[2] ? l ? (l.p(s, a), a & 4 && N(l, 1)) : (l = an(s), l.c(), N(l, 1), l.m(e.parentNode, e)) : l && (ke(), F(l, 1, 1, () => {
                l = null
            }), we()), s[3] > 1 && n.p(s, a)
        },
        i(s) {
            t || (N(l), N(n), t = !0)
        },
        o(s) {
            F(l), F(n), t = !1
        },
        d(s) {
            l && l.d(s), s && d(e), n && n.d(s), s && d(r)
        }
    }
}

function Id(i, e, r) {
    let t, l, {
        props: n,
        paginatorActivePage: s = 0
    } = e;
    const {
        itemsPerPage: a,
        elementsType: o
    } = n;
    let c = n.elements,
        f;
    switch (o) {
    case "paginated list card":
        f = Rs;
        break;
    case "youtube card":
        f = ou;
        break;
    case "podcast card":
        f = fu;
        break
    }
    const p = c.length,
        h = Math.ceil(p / a);
    let v = s || 1;

    function _(y) {
        r(8, v = y.detail.text), r(5, s = v)
    }
    let m = v * a - a,
        b = v * a;
    return la(() => {
        r(9, m = t * a - a), r(10, b = t * a)
    }), i.$$set = y => {
        "props" in y && r(6, n = y.props), "paginatorActivePage" in y && r(5, s = y.paginatorActivePage)
    }, i.$$.update = () => {
        i.$$.dirty & 64 && r(7, c = n.elements.map((y, k) => ft(Oe({}, y), {
            i: k
        }))), i.$$.dirty & 256 && r(1, t = v), i.$$.dirty & 1664 && r(2, l = c.slice(m, b))
    }, [f, t, l, h, _, s, n, c, v, m, b]
}
class Er extends ue {
    constructor(e) {
        super(), fe(this, e, Id, $d, de, {
            props: 6,
            paginatorActivePage: 5
        })
    }
}

function Dd(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v;
    return f = new Ie({
        props: {
            props: {
                text: i[2]
            }
        }
    }), {
        c() {
            e = E("div"), r = E("div"), t = E("div"), l = W(i[1]), n = P(), s = he("svg"), a = he("path"), o = P(), c = E("div"), le(f.$$.fragment), this.h()
        },
        l(_) {
            e = C(_, "DIV", {
                class: !0
            });
            var m = w(e);
            r = C(m, "DIV", {
                class: !0
            });
            var b = w(r);
            t = C(b, "DIV", {
                class: !0
            });
            var y = w(t);
            l = Z(y, i[1]), y.forEach(d), n = M(b), s = _e(b, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var k = w(s);
            a = _e(k, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0
            }), w(a).forEach(d), k.forEach(d), b.forEach(d), o = M(m), c = C(m, "DIV", {
                class: !0
            });
            var $ = w(c);
            se(f.$$.fragment, $), $.forEach(d), m.forEach(d), this.h()
        },
        h() {
            u(t, "class", "text-grey-midnight font-bold relative text-2xl"), u(a, "d", "M3 6L8 11L13 6"), u(a, "stroke", "#131F37"), u(a, "stroke-width", "1.72854"), u(s, "class", "w-8 svelte-17vqdyq"), u(s, "width", "16"), u(s, "height", "16"), u(s, "viewBox", "0 0 16 16"), u(s, "fill", "none"), u(s, "xmlns", "http://www.w3.org/2000/svg"), Q(s, "open", i[0]), u(r, "class", "flex justify-between bg-white items-center cursor-pointer p-6"), u(c, "class", "content bg-grey-daylight py-0 px-8 md:px-20 svelte-17vqdyq"), Q(c, "open", i[0]), u(e, "class", "accordion my-2 rounded-lg overflow-hidden " + (i[3] ? `tablet-${i[3]} lg:${i[3]}` : "w-full") + " svelte-17vqdyq")
        },
        m(_, m) {
            S(_, e, m), g(e, r), g(r, t), g(t, l), g(r, n), g(r, s), g(s, a), g(e, o), g(e, c), ie(f, c, null), p = !0, h || (v = pe(r, "click", i[4]), h = !0)
        },
        p(_, [m]) {
            m & 1 && Q(s, "open", _[0]), m & 1 && Q(c, "open", _[0])
        },
        i(_) {
            p || (N(f.$$.fragment, _), p = !0)
        },
        o(_) {
            F(f.$$.fragment, _), p = !1
        },
        d(_) {
            _ && d(e), ne(f), h = !1, v()
        }
    }
}

function Td(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        body: n,
        width: s
    } = t;
    let a = !1;

    function o() {
        r(0, a = !a)
    }
    return i.$$set = c => {
        "props" in c && r(5, t = c.props)
    }, [a, l, n, s, o, t]
}
class Sd extends ue {
    constructor(e) {
        super(), fe(this, e, Td, Dd, de, {
            props: 5
        })
    }
}

function Vd(i) {
    let e, r;
    return e = new vt({
        props: {
            props: Oe({}, i[0])
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, l) {
            const n = {};
            l & 1 && (n.props = Oe({}, t[0])), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Pd(i) {
    let e, r;
    return e = new ir({
        props: {
            props: Oe({}, i[0])
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, l) {
            const n = {};
            l & 1 && (n.props = Oe({}, t[0])), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Md(i) {
    let e, r, t, l;
    const n = [Pd, Vd],
        s = [];

    function a(o, c) {
        return o[1] == "arrow" ? 0 : o[1] == "button" ? 1 : -1
    }
    return ~(e = a(i)) && (r = s[e] = n[e](i)), {
        c() {
            r && r.c(), t = J()
        },
        l(o) {
            r && r.l(o), t = J()
        },
        m(o, c) {
            ~e && s[e].m(o, c), S(o, t, c), l = !0
        },
        p(o, [c]) {
            r && r.p(o, c)
        },
        i(o) {
            l || (N(r), l = !0)
        },
        o(o) {
            F(r), l = !1
        },
        d(o) {
            ~e && s[e].d(o), o && d(t)
        }
    }
}

function Ad(i, e, r) {
    let {
        props: t
    } = e;
    const {
        type: l
    } = t;
    return i.$$set = n => {
        "props" in n && r(0, t = n.props)
    }, [t, l]
}
class Hs extends ue {
    constructor(e) {
        super(), fe(this, e, Ad, Md, de, {
            props: 0
        })
    }
}

function cn(i, e, r) {
    const t = i.slice();
    return t[20] = e[r], t
}

function Od(i) {
    let e, r, t, l;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(n) {
            e = C(n, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), this.h()
        },
        h() {
            u(e, "class", r = "mb-8 " + (i[12] == "center" ? "mx-auto" : "mx-0") + " svelte-1be2l8v"), Pe(e.src, t = i[16]) || u(e, "src", t), u(e, "alt", l = i[8].fields.title)
        },
        m(n, s) {
            S(n, e, s)
        },
        p: U,
        d(n) {
            n && d(e)
        }
    }
}

function zd(i) {
    let e, r, t;
    return r = new yl({
        props: {
            props: {
                mediaUrl: i[15]
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "animation-top mx-auto mb-12 svelte-1be2l8v")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function Bd(i) {
    let e, r, t;
    return r = new sr({
        props: {
            props: {
                title: i[0],
                color: i[1] || null
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "mb-8")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function Ld(i) {
    let e, r, t, l;
    r = new Ie({
        props: {
            props: {
                text: i[2],
                createWithId: !0
            }
        }
    });
    let n = i[3] == "circle" && Nd();
    return {
        c() {
            e = E("div"), le(r.$$.fragment), t = P(), n && n.c(), this.h()
        },
        l(s) {
            e = C(s, "DIV", {
                class: !0,
                style: !0
            });
            var a = w(e);
            se(r.$$.fragment, a), t = M(a), n && n.l(a), a.forEach(d), this.h()
        },
        h() {
            u(e, "class", "title richtext-block relative"), Se(e, "color", i[4] || "#131F37")
        },
        m(s, a) {
            S(s, e, a), ie(r, e, null), g(e, t), n && n.m(e, null), l = !0
        },
        p: U,
        i(s) {
            l || (N(r.$$.fragment, s), l = !0)
        },
        o(s) {
            F(r.$$.fragment, s), l = !1
        },
        d(s) {
            s && d(e), ne(r), n && n.d()
        }
    }
}

function Nd(i) {
    let e;
    return {
        c() {
            e = E("div"), this.h()
        },
        l(r) {
            e = C(r, "DIV", {
                class: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "class", "blue-circle size-l z-0 absolute top-0 left-0 svelte-1be2l8v")
        },
        m(r, t) {
            S(r, e, t)
        },
        d(r) {
            r && d(e)
        }
    }
}

function Fd(i) {
    let e;
    return {
        c() {
            e = E("div"), this.h()
        },
        l(r) {
            e = C(r, "DIV", {
                class: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "class", "headline-stick size-l"), Q(e, "mx-auto", i[12] == "center")
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Rd(i) {
    let e, r, t, l;
    return r = new Ie({
        props: {
            props: {
                text: i[5],
                listFontWeight: 700
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0,
                style: !0
            });
            var s = w(e);
            se(r.$$.fragment, s), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", "richtext-block"), u(e, "style", t = (i[6] ? `color: ${i[6]};` : "") + ` font-size: ${i[14]};`)
        },
        m(n, s) {
            S(n, e, s), ie(r, e, null), l = !0
        },
        p: U,
        i(n) {
            l || (N(r.$$.fragment, n), l = !0)
        },
        o(n) {
            F(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && d(e), ne(r)
        }
    }
}

function jd(i) {
    let e, r, t;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(l) {
            e = C(l, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), this.h()
        },
        h() {
            u(e, "class", "mx-auto mt-8 md:mx-0"), Pe(e.src, r = i[17]) || u(e, "src", r), u(e, "alt", t = i[9].fields.title)
        },
        m(l, n) {
            S(l, e, n)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function Ud(i) {
    let e, r, t, l = i[10],
        n = [];
    for (let a = 0; a < l.length; a += 1) n[a] = un(cn(i, l, a));
    const s = a => F(n[a], 1, 1, () => {
        n[a] = null
    });
    return {
        c() {
            e = E("div");
            for (let a = 0; a < n.length; a += 1) n[a].c();
            this.h()
        },
        l(a) {
            e = C(a, "DIV", {
                class: !0
            });
            var o = w(e);
            for (let c = 0; c < n.length; c += 1) n[c].l(o);
            o.forEach(d), this.h()
        },
        h() {
            u(e, "class", r = "cta " + (i[10].length > 1 ? "flex justify-between flex-wrap" : ""))
        },
        m(a, o) {
            S(a, e, o);
            for (let c = 0; c < n.length; c += 1) n[c].m(e, null);
            t = !0
        },
        p(a, o) {
            if (o & 1024) {
                l = a[10];
                let c;
                for (c = 0; c < l.length; c += 1) {
                    const f = cn(a, l, c);
                    n[c] ? (n[c].p(f, o), N(n[c], 1)) : (n[c] = un(f), n[c].c(), N(n[c], 1), n[c].m(e, null))
                }
                for (ke(), c = l.length; c < n.length; c += 1) s(c);
                we()
            }
        },
        i(a) {
            if (!t) {
                for (let o = 0; o < l.length; o += 1) N(n[o]);
                t = !0
            }
        },
        o(a) {
            n = n.filter(Boolean);
            for (let o = 0; o < n.length; o += 1) F(n[o]);
            t = !1
        },
        d(a) {
            a && d(e), De(n, a)
        }
    }
}

function un(i) {
    let e, r;
    return e = new Hs({
        props: {
            props: i[20].fields
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function Hd(i) {
    let e, r, t, l, n, s, a, o, c, f = i[16] && Od(i),
        p = i[7] && zd(i),
        h = i[0] && Bd(i),
        v = i[2] && Ld(i),
        _ = i[3] == "stick" && Fd(i),
        m = i[5] && Rd(i),
        b = i[17] && jd(i),
        y = i[10] && i[10].length > 0 && Ud(i);
    return {
        c() {
            e = E("div"), f && f.c(), r = P(), p && p.c(), t = P(), h && h.c(), l = P(), v && v.c(), n = P(), _ && _.c(), s = P(), m && m.c(), a = P(), b && b.c(), o = P(), y && y.c(), this.h()
        },
        l(k) {
            e = C(k, "DIV", {
                class: !0
            });
            var $ = w(e);
            f && f.l($), r = M($), p && p.l($), t = M($), h && h.l($), l = M($), v && v.l($), n = M($), _ && _.l($), s = M($), m && m.l($), a = M($), b && b.l($), o = M($), y && y.l($), $.forEach(d), this.h()
        },
        h() {
            u(e, "class", "content-block fade-in-bottom " + (i[11] ? `w-full  lg:col-${i[11]}` : "") + " " + (i[12] ? `text-${i[12]}` : "") + " " + i[13] + " svelte-1be2l8v")
        },
        m(k, $) {
            S(k, e, $), f && f.m(e, null), g(e, r), p && p.m(e, null), g(e, t), h && h.m(e, null), g(e, l), v && v.m(e, null), g(e, n), _ && _.m(e, null), g(e, s), m && m.m(e, null), g(e, a), b && b.m(e, null), g(e, o), y && y.m(e, null), c = !0
        },
        p(k, [$]) {
            k[16] && f.p(k, $), k[7] && p.p(k, $), k[0] && h.p(k, $), k[2] && v.p(k, $), k[3] == "stick" && _.p(k, $), k[5] && m.p(k, $), k[17] && b.p(k, $), k[10] && k[10].length > 0 && y.p(k, $)
        },
        i(k) {
            c || (N(p), N(h), N(v), N(m), N(y), c = !0)
        },
        o(k) {
            F(p), F(h), F(v), F(m), F(y), c = !1
        },
        d(k) {
            k && d(e), f && f.d(), p && p.d(), h && h.d(), v && v.d(), _ && _.d(), m && m.d(), b && b.d(), y && y.d()
        }
    }
}

function qd(i, e, r) {
    let {
        props: t
    } = e;
    const {
        eyebrow: l,
        eyebrowColor: n,
        title: s,
        titleDecorator: a,
        titleColor: o,
        body: c,
        bodySize: f,
        bodyColor: p,
        animationTop: h,
        iconTop: v,
        iconBottom: _,
        ctas: m,
        width: b,
        contentAlignment: y,
        customClasses: k
    } = t, $ = f == "small" ? "0.75rem" : "1rem", I = h && h.fields && h.fields.file ? h.fields.file.url : null, D = v && v.fields && v.fields.file ? v.fields.file.url : null, T = _ && _.fields && _.fields.file ? _.fields.file.url : null;
    return i.$$set = z => {
        "props" in z && r(18, t = z.props)
    }, [l, n, s, a, o, c, p, h, v, _, m, b, y, k, $, I, D, T, t]
}
class Nl extends ue {
    constructor(e) {
        super(), fe(this, e, qd, Hd, de, {
            props: 18
        })
    }
}

function Gd(i) {
    let e, r;
    return {
        c() {
            e = E("div"), r = E("img"), this.h()
        },
        l(t) {
            e = C(t, "DIV", {
                class: !0
            });
            var l = w(e);
            r = C(l, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), l.forEach(d), this.h()
        },
        h() {
            u(r, "class", "w-auto z-10 relative lazyload svelte-1ntb9k9"), u(r, "data-src", i[10]), u(r, "alt", i[1] || i[5].fields.title), Q(r, "parallax", i[6]), u(e, "class", "img-wrapper flex items-baseline " + i[7] + " " + (i[7] == "intercalated" ? "px-4 sm:px-0 mb-10 md:mb-0" : "") + " svelte-1ntb9k9"), Q(e, "title-left", i[3] == "title left")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        i: U,
        o: U,
        d(t) {
            t && d(e)
        }
    }
}

function Yd(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m = i[2] && Kd(i);
    return {
        c() {
            e = E("div"), r = E("div"), t = E("img"), l = P(), n = E("h2"), s = E("div"), a = W(i[1]), o = P(), c = E("div"), f = P(), p = E("div"), h = he("svg"), v = he("path"), _ = P(), m && m.c(), this.h()
        },
        l(b) {
            e = C(b, "DIV", {
                class: !0
            });
            var y = w(e);
            r = C(y, "DIV", {
                class: !0
            });
            var k = w(r);
            t = C(k, "IMG", {
                class: !0,
                "data-src": !0,
                alt: !0
            }), l = M(k), n = C(k, "H2", {
                class: !0
            });
            var $ = w(n);
            s = C($, "DIV", {
                class: !0
            });
            var I = w(s);
            a = Z(I, i[1]), I.forEach(d), o = M($), c = C($, "DIV", {
                class: !0
            }), w(c).forEach(d), f = M($), p = C($, "DIV", {
                style: !0,
                class: !0
            });
            var D = w(p);
            h = _e(D, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var T = w(h);
            v = _e(T, "path", {
                d: !0,
                stroke: !0
            }), w(v).forEach(d), T.forEach(d), _ = M(D), m && m.l(D), D.forEach(d), $.forEach(d), k.forEach(d), y.forEach(d), this.h()
        },
        h() {
            u(t, "class", "z-10 relative lazyload svelte-1ntb9k9"), u(t, "data-src", i[10]), u(t, "alt", i[1] || i[5].fields.title), u(s, "class", "z-20 relative svelte-1ntb9k9"), u(c, "class", "blue-circle size-m quote-blue-circle svelte-1ntb9k9"), u(v, "d", "M0 0.5L32 0.500003"), u(v, "stroke", "#8493AD"), u(h, "class", "mr-6 svelte-1ntb9k9"), u(h, "width", "32"), u(h, "height", "1"), u(h, "viewBox", "0 0 32 1"), u(h, "fill", "none"), u(h, "xmlns", "http://www.w3.org/2000/svg"), Se(p, "bottom", "-30px"), u(p, "class", "z-20 text-base uppercase text-grey-8pm absolute right-0 flex items-center svelte-1ntb9k9"), u(n, "class", "absolute left-0 top-0 mt-12 col-3 ml-12 text-lg sm:col-5 sm:ml-24 sm:text-3xl md:text-4xl md:mt-32 md:col-8 md:left-auto md:left-0 svelte-1ntb9k9"), u(r, "class", "img-wrapper " + i[7] + " w-4/12 sm:w-6/12 md:w-full svelte-1ntb9k9"), u(e, "class", "relative svelte-1ntb9k9")
        },
        m(b, y) {
            S(b, e, y), g(e, r), g(r, t), g(r, l), g(r, n), g(n, s), g(s, a), g(n, o), g(n, c), g(n, f), g(n, p), g(p, h), g(h, v), g(p, _), m && m.m(p, null)
        },
        p(b, y) {
            b[2] && m.p(b, y)
        },
        i: U,
        o: U,
        d(b) {
            b && d(e), m && m.d()
        }
    }
}

function Wd(i) {
    let e, r, t, l, n, s, a, o;
    return {
        c() {
            e = E("div"), r = E("div"), t = P(), l = he("svg"), n = he("path"), s = he("circle"), this.h()
        },
        l(c) {
            e = C(c, "DIV", {
                class: !0
            });
            var f = w(e);
            r = C(f, "DIV", {
                style: !0,
                class: !0,
                alt: !0
            }), w(r).forEach(d), t = M(f), l = _e(f, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var p = w(l);
            n = _e(p, "path", {
                d: !0,
                fill: !0
            }), w(n).forEach(d), s = _e(p, "circle", {
                cx: !0,
                cy: !0,
                r: !0,
                stroke: !0,
                "stroke-width": !0
            }), w(s).forEach(d), p.forEach(d), f.forEach(d), this.h()
        },
        h() {
            Se(r, "background-image", "linear-gradient( rgba(130, 130, 130, 0.4), rgba(130, 130, 130, 0.4) ), url(" + i[0] + ")"), u(r, "class", "w-full h-auto rounded-lg cursor-pointer svelte-1ntb9k9"), u(r, "alt", "Youtube Thumbnail"), u(n, "d", `M84.0694 65.2761L56.014 48.773C54.6808 47.9887 53 48.95 53 50.4968L53 83.5032C53 85.05 54.6808 86.0113
                    56.014 85.227L84.0694 68.7239C85.384 67.9506 85.384 66.0494 84.0694 65.2761Z`), u(n, "fill", "white"), u(s, "cx", "67"), u(s, "cy", "67"), u(s, "r", "66"), u(s, "stroke", "#F6F8FC"), u(s, "stroke-width", "2"), u(l, "class", "absolute cursor-pointer svelte-1ntb9k9"), u(l, "width", "134"), u(l, "height", "134"), u(l, "viewBox", "0 0 134 134"), u(l, "fill", "none"), u(l, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "youtube-thumbnail z-10 w-full relative svelte-1ntb9k9")
        },
        m(c, f) {
            S(c, e, f), g(e, r), g(e, t), g(e, l), g(l, n), g(l, s), a || (o = [pe(r, "click", i[12]), pe(l, "click", i[12])], a = !0)
        },
        p(c, f) {
            f & 1 && Se(r, "background-image", "linear-gradient( rgba(130, 130, 130, 0.4), rgba(130, 130, 130, 0.4) ), url(" + c[0] + ")")
        },
        i: U,
        o: U,
        d(c) {
            c && d(e), a = !1, nt(o)
        }
    }
}

function Zd(i) {
    let e, r, t;
    return r = new yl({
        props: {
            props: {
                mediaUrl: i[10]
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            se(r.$$.fragment, n), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", jt(i[7] == "intercalated" ? "px-4 md:px-0 mb-10 md:mb-0" : "") + " svelte-1ntb9k9")
        },
        m(l, n) {
            S(l, e, n), ie(r, e, null), t = !0
        },
        p: U,
        i(l) {
            t || (N(r.$$.fragment, l), t = !0)
        },
        o(l) {
            F(r.$$.fragment, l), t = !1
        },
        d(l) {
            l && d(e), ne(r)
        }
    }
}

function Kd(i) {
    let e;
    return {
        c() {
            e = W(i[2])
        },
        l(r) {
            e = Z(r, i[2])
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Xd(i) {
    let e, r, t, l, n;
    return {
        c() {
            e = E("h3"), r = E("div"), t = W(i[1]), l = P(), n = E("div"), this.h()
        },
        l(s) {
            e = C(s, "H3", {
                class: !0
            });
            var a = w(e);
            r = C(a, "DIV", {
                class: !0
            });
            var o = w(r);
            t = Z(o, i[1]), o.forEach(d), l = M(a), n = C(a, "DIV", {
                class: !0
            }), w(n).forEach(d), a.forEach(d), this.h()
        },
        h() {
            u(r, "class", "z-20 relative svelte-1ntb9k9"), u(n, "class", "blue-circle title-blue-circle size-s  svelte-1ntb9k9"), Q(n, "reverse", i[3] == "title left"), u(e, "class", "relative mt-6 mb-2 md:absolute md:top-0 md:mt-20 lg:col-3 svelte-1ntb9k9"), Q(e, "title-right", i[3] == "title right"), Q(e, "title-left", i[3] == "title left")
        },
        m(s, a) {
            S(s, e, a), g(e, r), g(r, t), g(e, l), g(e, n)
        },
        p: U,
        d(s) {
            s && d(e)
        }
    }
}

function Jd(i) {
    let e;
    return {
        c() {
            e = E("div"), this.h()
        },
        l(r) {
            e = C(r, "DIV", {
                class: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "class", "blue-circle size-l back-blue-circle svelte-1ntb9k9"), Q(e, "circle-top-left", i[3] == "circle top left"), Q(e, "circle-top-right", i[3] == "circle top right"), Q(e, "circle-bottom-left", i[3] == "circle bottom left"), Q(e, "circle-bottom-right", i[3] == "circle bottom right")
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Qd(i) {
    let e, r;
    return {
        c() {
            e = E("div"), r = W(i[4]), this.h()
        },
        l(t) {
            e = C(t, "DIV", {
                class: !0
            });
            var l = w(e);
            r = Z(l, i[4]), l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "w-full")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function xd(i) {
    let e, r, t, l, n, s = i[3] && i[3].includes("circle"),
        a, o, c;
    const f = [Zd, Wd, Yd, Gd],
        p = [];

    function h(b, y) {
        return b[11] ? 0 : b[8] ? 1 : b[7] == "quote" ? 2 : 3
    }
    r = h(i), t = p[r] = f[r](i);
    let v = (i[3] == "title right" || i[3] == "title left") && Xd(i),
        _ = s && Jd(i),
        m = i[4] && Qd(i);
    return {
        c() {
            e = E("div"), t.c(), l = P(), v && v.c(), n = P(), _ && _.c(), a = P(), m && m.c(), o = J(), this.h()
        },
        l(b) {
            e = C(b, "DIV", {
                class: !0
            });
            var y = w(e);
            t.l(y), l = M(y), v && v.l(y), n = M(y), _ && _.l(y), y.forEach(d), a = M(b), m && m.l(b), o = J(), this.h()
        },
        h() {
            u(e, "class", "media fade-in-bottom " + (i[9], `${i[7]=="intercalated"?`tablet-${i[9]}`:`w-full md:tablet-${i[9]}`} lg:${i[9]}`) + " " + i[7] + " " + (i[7] == "title-overflow" ? "lg:col-4" : "") + " " + (i[7] == "intercalated" || i[7] == "title-overflow" ? "order-first mx-auto md:mx-0 md:order-none" : "") + " " + (i[8] ? "self-center" : "") + " svelte-1ntb9k9")
        },
        m(b, y) {
            S(b, e, y), p[r].m(e, null), g(e, l), v && v.m(e, null), g(e, n), _ && _.m(e, null), S(b, a, y), m && m.m(b, y), S(b, o, y), c = !0
        },
        p(b, [y]) {
            t.p(b, y), (b[3] == "title right" || b[3] == "title left") && v.p(b, y), s && _.p(b, y), b[4] && m.p(b, y)
        },
        i(b) {
            c || (N(t), c = !0)
        },
        o(b) {
            F(t), c = !1
        },
        d(b) {
            b && d(e), p[r].d(), v && v.d(), _ && _.d(), b && d(a), m && m.d(b), b && d(o)
        }
    }
}

function eh(i) {
    if (!i) return null;
    var e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
        r = i.match(e);
    return r && r[7].length == 11 ? r[7] : !1
}

function th(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        quoteAuthor: n,
        decoratorType: s,
        caption: a,
        media: o,
        parallax: c,
        type: f,
        youtubeUrl: p,
        width: h
    } = t, v = o && o.fields && o.fields.file ? o.fields.file.url : null, _ = !!(o && o.fields && o.fields.file && o.fields.file.contentType == "application/json"), {
        open: m
    } = vl("simple-modal");
    let b = eh(p),
        y;
    He(() => {
        b && (r(0, y = `https://img.youtube.com/vi/${b}/maxresdefault.jpg`), $(y))
    });
    const k = () => {
            m({
                youtubeID: b,
                title: l,
                type: "video"
            })
        },
        $ = I => {
            var D = new Image;
            D.addEventListener("load", function () {
                this.naturalWidth < 200 && r(0, y = `https://img.youtube.com/vi/${b}/hqdefault.jpg`)
            }), D.src = I
        };
    return i.$$set = I => {
        "props" in I && r(13, t = I.props)
    }, [y, l, n, s, a, o, c, f, p, h, v, _, k, t]
}
class rh extends ue {
    constructor(e) {
        super(), fe(this, e, th, xd, de, {
            props: 13
        })
    }
}

function lh(i) {
    let e, r, t, l;
    return {
        c() {
            e = E("a"), r = E("div"), t = he("svg"), l = he("path"), this.h()
        },
        l(n) {
            e = C(n, "A", {
                href: !0,
                target: !0,
                "aria-label": !0,
                rel: !0
            });
            var s = w(e);
            r = C(s, "DIV", {
                class: !0
            });
            var a = w(r);
            t = _e(a, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var o = w(t);
            l = _e(o, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0
            }), w(l).forEach(d), o.forEach(d), a.forEach(d), s.forEach(d), this.h()
        },
        h() {
            u(l, "d", "M1 11L6 6L1 1"), u(l, "stroke", "#F6F8FC"), u(l, "stroke-width", "2"), u(t, "width", "8"), u(t, "height", "12"), u(t, "viewBox", "0 0 8 12"), u(t, "fill", "none"), u(t, "xmlns", "http://www.w3.org/2000/svg"), u(r, "class", "circle svelte-1ewwv7p"), u(e, "href", i[0]), u(e, "target", Ae(i[0]) ? "" : "_blank"), u(e, "aria-label", i[0]), u(e, "rel", Ae(i[0]) ? null : "noopener noreferrer")
        },
        m(n, s) {
            S(n, e, s), g(e, r), g(r, t), g(t, l)
        },
        p: U,
        i: U,
        o: U,
        d(n) {
            n && d(e)
        }
    }
}

function ih(i, e, r) {
    let {
        props: t
    } = e;
    const {
        url: l
    } = t;
    return i.$$set = n => {
        "props" in n && r(1, t = n.props)
    }, [l, t]
}
class nr extends ue {
    constructor(e) {
        super(), fe(this, e, ih, lh, de, {
            props: 1
        })
    }
}

function nh(i) {
    let e, r, t;
    return {
        c() {
            e = E("div"), r = E("img"), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            r = C(n, "IMG", {
                src: !0,
                alt: !0
            }), n.forEach(d), this.h()
        },
        h() {
            Pe(r.src, t = i[1]) || u(r, "src", t), u(r, "alt", i[2]), u(e, "class", "icon flex items-center justify-center rounded-tl-lg rounded-bl-lg px-4 svelte-lt6zv4"), Q(e, "order-last", i[7] === "right")
        },
        m(l, n) {
            S(l, e, n), g(e, r)
        },
        p(l, n) {
            n & 2 && !Pe(r.src, t = l[1]) && u(r, "src", t)
        },
        d(l) {
            l && d(e)
        }
    }
}

function sh(i) {
    let e, r, t, l, n, s, a, o = i[6] && nh(i);
    return {
        c() {
            e = E("a"), o && o.c(), r = P(), t = E("div"), l = W(i[2]), this.h()
        },
        l(c) {
            e = C(c, "A", {
                target: !0,
                rel: !0,
                class: !0,
                href: !0
            });
            var f = w(e);
            o && o.l(f), r = M(f), t = C(f, "DIV", {
                class: !0
            });
            var p = w(t);
            l = Z(p, i[2]), p.forEach(d), f.forEach(d), this.h()
        },
        h() {
            u(t, "class", "py-4 px-6 grow"), u(e, "target", i[5] ? "_blank" : "_self"), u(e, "rel", i[5] ? "noopener noreferrer" : null), u(e, "class", n = "btn inline-block " + (i[9] ? "w-full" : "") + " cursor-pointer " + (i[0] || "") + " " + (i[4] || "") + " svelte-lt6zv4"), u(e, "href", i[3]), Q(e, "flex", i[6])
        },
        m(c, f) {
            S(c, e, f), o && o.m(e, null), g(e, r), g(e, t), g(t, l), s || (a = pe(e, "click", i[8]), s = !0)
        },
        p(c, [f]) {
            c[6] && o.p(c, f), f & 1 && n !== (n = "btn inline-block " + (c[9] ? "w-full" : "") + " cursor-pointer " + (c[0] || "") + " " + (c[4] || "") + " svelte-lt6zv4") && u(e, "class", n), f & 65 && Q(e, "flex", c[6])
        },
        i: U,
        o: U,
        d(c) {
            c && d(e), o && o.d(), s = !1, a()
        }
    }
}

function ah(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        url: n,
        buttonSize: s,
        openNewTab: a,
        icon: o,
        iconPosition: c,
        onClick: f,
        fullWidth: p
    } = t;
    let h = t.buttonTheme,
        v;
    switch (o) {
    case "doc":
        v = "https://images.ctfassets.net/xit7f234flxz/2DAHfvJC1c7um7hQQ7CqGG/566fe96de031f2dd840be4b3010dd76f/docIcon.svg";
        break;
    case "arrow-down":
        v = "https://images.ctfassets.net/xit7f234flxz/2qQRfgWB86jVdSo7zczpAl/5a6ed94b33281d8fb7e85f4825410759/Vector.svg";
        break;
    case "external-link":
        v = "https://images.ctfassets.net/xit7f234flxz/5wQfRjHG2gc1EUXd5wTzv3/573b9fa7781d19755c9626a5e0e0e7a9/external-link.svg";
        break;
    case "filter":
        v = "/icons/filter.svg";
        break
    }
    return i.$$set = _ => {
        "props" in _ && r(10, t = _.props)
    }, i.$$.update = () => {
        i.$$.dirty & 1024 && r(0, h = t.buttonTheme)
    }, [h, v, l, n, s, a, o, c, f, p, t]
}
class vt extends ue {
    constructor(e) {
        super(), fe(this, e, ah, sh, de, {
            props: 10
        })
    }
}

function oh(i) {
    let e, r, t;
    return {
        c() {
            e = E("div"), r = W(i[1]), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            r = Z(n, i[1]), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", t = "eyebrow " + i[0] + " " + (i[2] || "") + " svelte-11fnwb7")
        },
        m(l, n) {
            S(l, e, n), g(e, r)
        },
        p(l, [n]) {
            n & 1 && t !== (t = "eyebrow " + l[0] + " " + (l[2] || "") + " svelte-11fnwb7") && u(e, "class", t)
        },
        i: U,
        o: U,
        d(l) {
            l && d(e)
        }
    }
}

function ch(i, e, r) {
    let {
        props: t
    } = e;
    const {
        title: l,
        color: n,
        classes: s
    } = t;
    let a;
    switch (n) {
    case "green":
        a = "text-green-regular";
        break;
    case "green-highlight":
        a = "text-green-highlight";
        break;
    case "grey":
        a = "text-grey-8pm";
        break;
    case "daylight":
        a = "text-grey-daylight";
        break;
    default:
        a = "";
        break
    }
    return i.$$set = o => {
        "props" in o && r(3, t = o.props)
    }, [a, l, s, t]
}
class sr extends ue {
    constructor(e) {
        super(), fe(this, e, ch, oh, de, {
            props: 3
        })
    }
}

function fn(i, e, r) {
    const t = i.slice();
    return t[25] = e[r], t[27] = r, t
}

function uh(i) {
    let e;
    return {
        c() {
            e = E("div"), this.h()
        },
        l(r) {
            e = C(r, "DIV", {
                class: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "class", "blue-circle size-xl absolute z-0 svelte-1hzfvey")
        },
        m(r, t) {
            S(r, e, t)
        },
        d(r) {
            r && d(e)
        }
    }
}

function fh(i) {
    let e, r, t;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(l) {
            e = C(l, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), this.h()
        },
        h() {
            u(e, "class", "mb-8 mx-auto"), Pe(e.src, r = i[14]) || u(e, "src", r), u(e, "alt", t = i[11].fields.title)
        },
        m(l, n) {
            S(l, e, n)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function dh(i) {
    let e;
    return {
        c() {
            e = E("div"), this.h()
        },
        l(r) {
            e = C(r, "DIV", {
                class: !0,
                style: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "class", "mb-6"), Se(e, "height", "24px")
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        i: U,
        o: U,
        d(r) {
            r && d(e)
        }
    }
}

function hh(i) {
    let e, r;
    return e = new sr({
        props: {
            props: {
                title: i[6],
                color: i[10] === "center" ? "green" : "daylight",
                classes: `mb-6 ${i[10]==="center"&&"text-center"}`
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p: U,
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function _h(i) {
    let e, r, t, l, n;
    return {
        c() {
            e = E("div"), r = E("hr"), t = P(), l = E("div"), n = E("div"), this.h()
        },
        l(s) {
            e = C(s, "DIV", {
                class: !0
            });
            var a = w(e);
            r = C(a, "HR", {
                class: !0
            }), t = M(a), l = C(a, "DIV", {
                class: !0
            });
            var o = w(l);
            n = C(o, "DIV", {
                class: !0
            }), w(n).forEach(d), o.forEach(d), a.forEach(d), this.h()
        },
        h() {
            u(r, "class", "border-grey-daylight w-full opacity-25"), u(n, "class", "headline-stick size-l md:mx-auto absolute svelte-1hzfvey"), u(l, "class", "container relative"), u(e, "class", "line-decorator my-8 relative")
        },
        m(s, a) {
            S(s, e, a), g(e, r), g(e, t), g(e, l), g(l, n)
        },
        d(s) {
            s && d(e)
        }
    }
}

function ph(i) {
    let e, r, t, l, n;
    return t = new Ie({
        props: {
            props: {
                text: i[8]
            }
        }
    }), {
        c() {
            e = E("div"), r = E("div"), le(t.$$.fragment), this.h()
        },
        l(s) {
            e = C(s, "DIV", {
                class: !0
            });
            var a = w(e);
            r = C(a, "DIV", {
                class: !0
            });
            var o = w(r);
            se(t.$$.fragment, o), o.forEach(d), a.forEach(d), this.h()
        },
        h() {
            u(r, "class", l = "body " + (i[10] === "center" ? "text-grey-10pm text-center mx-auto mt-4" : "text-grey-daylight") + " max-w-xs relative svelte-1hzfvey"), Q(r, "no-left", i[10] === "center"), u(e, "class", "container relative")
        },
        m(s, a) {
            S(s, e, a), g(e, r), ie(t, r, null), n = !0
        },
        p: U,
        i(s) {
            n || (N(t.$$.fragment, s), n = !0)
        },
        o(s) {
            F(t.$$.fragment, s), n = !1
        },
        d(s) {
            s && d(e), ne(t)
        }
    }
}

function mh(i) {
    let e, r, t, l = i[9],
        n = [];
    for (let a = 0; a < l.length; a += 1) n[a] = dn(fn(i, l, a));
    const s = a => F(n[a], 1, 1, () => {
        n[a] = null
    });
    return {
        c() {
            e = E("div"), r = E("div");
            for (let a = 0; a < n.length; a += 1) n[a].c();
            this.h()
        },
        l(a) {
            e = C(a, "DIV", {
                class: !0
            });
            var o = w(e);
            r = C(o, "DIV", {
                class: !0
            });
            var c = w(r);
            for (let f = 0; f < n.length; f += 1) n[f].l(c);
            c.forEach(d), o.forEach(d), this.h()
        },
        h() {
            u(r, "class", "container flex justify-center md:items-center flex-wrap flex-col md:flex-row"), u(e, "class", "ctas-wrapper bottom-0 left-0 py-10 w-full svelte-1hzfvey")
        },
        m(a, o) {
            S(a, e, o), g(e, r);
            for (let c = 0; c < n.length; c += 1) n[c].m(r, null);
            t = !0
        },
        p(a, o) {
            if (o & 512) {
                l = a[9];
                let c;
                for (c = 0; c < l.length; c += 1) {
                    const f = fn(a, l, c);
                    n[c] ? (n[c].p(f, o), N(n[c], 1)) : (n[c] = dn(f), n[c].c(), N(n[c], 1), n[c].m(r, null))
                }
                for (ke(), c = l.length; c < n.length; c += 1) s(c);
                we()
            }
        },
        i(a) {
            if (!t) {
                for (let o = 0; o < l.length; o += 1) N(n[o]);
                t = !0
            }
        },
        o(a) {
            n = n.filter(Boolean);
            for (let o = 0; o < n.length; o += 1) F(n[o]);
            t = !1
        },
        d(a) {
            a && d(e), De(n, a)
        }
    }
}

function dn(i) {
    let e, r, t, l;
    return r = new vt({
        props: {
            props: {
                title: i[25].fields.title,
                url: i[25].fields.url,
                buttonTheme: i[25].fields.buttonTheme || "ghost",
                size: "normal",
                openNewTab: i[25].fields.openNewTab
            }
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), t = P(), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0
            });
            var s = w(e);
            se(r.$$.fragment, s), t = M(s), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", "cta " + (i[27] !== i[9].length - 1 ? "mr-0 mb-6 md:mr-6" : "md:mb-6") + " svelte-1hzfvey")
        },
        m(n, s) {
            S(n, e, s), ie(r, e, null), g(e, t), l = !0
        },
        p: U,
        i(n) {
            l || (N(r.$$.fragment, n), l = !0)
        },
        o(n) {
            F(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && d(e), ne(r)
        }
    }
}

function gh(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I = i[10] !== "center" && uh(),
        D = i[14] && fh(i);
    const T = [hh, dh],
        z = [];

    function A(O, R) {
        return O[6] ? 0 : 1
    }
    p = A(i), h = z[p] = T[p](i), m = new Ie({
        props: {
            props: {
                text: i[7]
            }
        }
    });
    let B = !i[10] && _h(),
        V = i[8] && ph(i),
        L = i[9] && mh(i);
    return {
        c() {
            e = E("header"), r = E("div"), l = P(), n = E("div"), s = E("div"), a = E("div"), o = E("div"), I && I.c(), c = P(), D && D.c(), f = P(), h.c(), v = P(), _ = E("h1"), le(m.$$.fragment), b = P(), B && B.c(), y = P(), V && V.c(), k = P(), L && L.c(), this.h()
        },
        l(O) {
            e = C(O, "HEADER", {
                class: !0,
                style: !0,
                "data-bgset": !0,
                "data-sizes": !0
            });
            var R = w(e);
            r = C(R, "DIV", {
                class: !0,
                style: !0
            }), w(r).forEach(d), l = M(R), n = C(R, "DIV", {
                class: !0
            });
            var j = w(n);
            s = C(j, "DIV", {
                class: !0
            });
            var G = w(s);
            a = C(G, "DIV", {
                class: !0
            });
            var X = w(a);
            o = C(X, "DIV", {
                class: !0
            });
            var Y = w(o);
            I && I.l(Y), c = M(Y), D && D.l(Y), f = M(Y), h.l(Y), v = M(Y), _ = C(Y, "H1", {
                class: !0
            });
            var ee = w(_);
            se(m.$$.fragment, ee), ee.forEach(d), Y.forEach(d), b = M(X), B && B.l(X), y = M(X), V && V.l(X), X.forEach(d), G.forEach(d), k = M(j), L && L.l(j), j.forEach(d), R.forEach(d), this.h()
        },
        h() {
            u(r, "class", "absolute left-0 top-0 w-full h-full bg-no-repeat bg-left bg-cover"), u(r, "style", t = `background-image: ${`url(${i[4]}?fm=jpg&q=5)`}; transition: opacity 0.3s ease-in-out; ${i[5]==="center-center"?"background-position: center;":""}`), u(_, "class", (i[10] === "center" ? "text-grey-midnight text-center" : "text-white") + " relative contains-richtext letters-from-blur"), Q(_, "alt", i[3] > hn || i[10] === "center"), u(o, "class", "heading container lg:max-w-3xl z-0 relative"), u(a, "class", "mx-auto relative"), u(s, "class", "header-content relative w-full mt-32 md:mt-48 mb-32 md:mb-16"), u(n, "class", (i[10] !== "center" && "filter") + " " + (i[10] === "center" && i[9] ? "extended" : "") + " relative flex items-center flex-wrap w-full h-full left-0 top-0 content-between svelte-1hzfvey"), u(e, "class", "page-header relative bg-no-repeat bg-left bg-cover lazyload svelte-1hzfvey"), u(e, "style", `${i[5]==="center-center"?"background-position: center;":""}`), u(e, "data-bgset", i[12] || i[13] ? `${i[13]||i[12]} [--small] | ${i[12]}` : null), u(e, "data-sizes", "auto")
        },
        m(O, R) {
            S(O, e, R), g(e, r), i[17](r), g(e, l), g(e, n), g(n, s), g(s, a), g(a, o), I && I.m(o, null), g(o, c), D && D.m(o, null), g(o, f), z[p].m(o, null), g(o, v), g(o, _), ie(m, _, null), g(a, b), B && B.m(a, null), g(a, y), V && V.m(a, null), g(n, k), L && L.m(n, null), i[18](n), i[19](e), $ = !0
        },
        p(O, [R]) {
            (!$ || R & 16 && t !== (t = `background-image: ${`url(${O[4]}?fm=jpg&q=5)`}; transition: opacity 0.3s ease-in-out; ${O[5]==="center-center"?"background-position: center;":""}`)) && u(r, "style", t), O[14] && D.p(O, R), h.p(O, R), R & 1032 && Q(_, "alt", O[3] > hn || O[10] === "center"), O[8] && V.p(O, R), O[9] && L.p(O, R)
        },
        i(O) {
            $ || (N(h), N(m.$$.fragment, O), N(V), N(L), $ = !0)
        },
        o(O) {
            F(h), F(m.$$.fragment, O), F(V), F(L), $ = !1
        },
        d(O) {
            O && d(e), i[17](null), I && I.d(), D && D.d(), z[p].d(), ne(m), B && B.d(), V && V.d(), L && L.d(), i[18](null), i[19](null)
        }
    }
}
const hn = 45;

function vh(i, e, r) {
    let t, {
        props: l
    } = e;
    const {
        title: n,
        bgImage: s,
        mobileBgImage: a,
        bgImageSizePosition: o
    } = l, {
        eyebrow: c,
        title: f,
        body: p,
        ctas: h,
        contentAlignment: v,
        iconTop: _
    } = n.fields, m = s && s.fields && s.fields.file ? s.fields.file.url : null, b = a && a.fields && a.fields.file ? a.fields.file.url : null, y = _ && _.fields && _.fields.file ? _.fields.file.url : null;
    let k, $, I, D, T = 0;
    He(() => {
        r(16, D = window.innerWidth <= 640), z(k, t)
    });
    const z = (O, R) => {
        var j = new Image;
        j.onload = () => {
            O.style.backgroundImage = `url(${R})`, setTimeout(() => {
                r(1, $.style.backdropFilter = "none", $), r(1, $.style.webkitBackdropFilter = "none", $), r(2, I.style.opacity = 0, I)
            }, 1e3)
        }, j.src = R
    };

    function A() {
        f && f.content && f.content.forEach(O => {
            O.nodeType == "paragraph" && O.content.forEach(R => {
                R.nodeType == "text" && r(3, T += R.value.length)
            })
        })
    }
    A();

    function B(O) {
        Ee[O ? "unshift" : "push"](() => {
            I = O, r(2, I)
        })
    }

    function V(O) {
        Ee[O ? "unshift" : "push"](() => {
            $ = O, r(1, $)
        })
    }

    function L(O) {
        Ee[O ? "unshift" : "push"](() => {
            k = O, r(0, k)
        })
    }
    return i.$$set = O => {
        "props" in O && r(15, l = O.props)
    }, i.$$.update = () => {
        i.$$.dirty & 65536 && r(4, t = D && b ? b : m)
    }, [k, $, I, T, t, o, c, f, p, h, v, _, m, b, y, l, D, B, V, L]
}
class qs extends ue {
    constructor(e) {
        super(), fe(this, e, vh, gh, de, {
            props: 15
        })
    }
}

function bh(i) {
    let e, r, t;
    var l = i[1].component;

    function n(s) {
        return {
            props: {
                props: s[0].fields
            }
        }
    }
    return l && (e = new l(n(i))), {
        c() {
            e && le(e.$$.fragment), r = J()
        },
        l(s) {
            e && se(e.$$.fragment, s), r = J()
        },
        m(s, a) {
            e && ie(e, s, a), S(s, r, a), t = !0
        },
        p(s, a) {
            const o = {};
            if (a & 1 && (o.props = s[0].fields), l !== (l = s[1].component)) {
                if (e) {
                    ke();
                    const c = e;
                    F(c.$$.fragment, 1, 0, () => {
                        ne(c, 1)
                    }), we()
                }
                l ? (e = new l(n(s)), le(e.$$.fragment), N(e.$$.fragment, 1), ie(e, r.parentNode, r)) : e = null
            } else l && e.$set(o)
        },
        i(s) {
            t || (e && N(e.$$.fragment, s), t = !0)
        },
        o(s) {
            e && F(e.$$.fragment, s), t = !1
        },
        d(s) {
            s && d(r), e && ne(e, s)
        }
    }
}

function yh(i) {
    let e, r, t = i[1] && i[1].component && bh(i);
    return {
        c() {
            t && t.c(), e = J()
        },
        l(l) {
            t && t.l(l), e = J()
        },
        m(l, n) {
            t && t.m(l, n), S(l, e, n), r = !0
        },
        p(l, [n]) {
            l[1] && l[1].component && t.p(l, n)
        },
        i(l) {
            r || (N(t), r = !0)
        },
        o(l) {
            F(t), r = !1
        },
        d(l) {
            t && t.d(l), l && d(e)
        }
    }
}

function kh(i, e, r) {
    let {
        componentData: t
    } = e;
    const n = [{
        id: "tab",
        component: Us
    }, {
        id: "row",
        component: Ll
    }, {
        id: "accordion",
        component: Sd
    }, {
        id: "cta",
        component: Hs
    }, {
        id: "button",
        component: vt
    }, {
        id: "richTextBlock",
        component: Ie
    }, {
        id: "footer",
        component: fa
    }, {
        id: "form",
        component: Fs
    }, {
        id: "fastNewsSection",
        component: js
    }, {
        id: "manualFastNew",
        component: If
    }, {
        id: "mediumFastNew",
        component: Pf
    }, {
        id: "pageHeader",
        component: qs
    }, {
        id: "card",
        component: nc
    }, {
        id: "authorCard",
        component: df
    }, {
        id: "paperCard",
        component: Mc
    }, {
        id: "jobCard",
        component: zc
    }, {
        id: "exchangeCard",
        component: Nc
    }, {
        id: "partnerCard",
        component: jc
    }, {
        id: "paginatedListCard",
        component: Rs
    }, {
        id: "technologyCard",
        component: eu
    }, {
        id: "squaredCard",
        component: gf
    }, {
        id: "newsCard",
        component: Du
    }, {
        id: "wideNewsCard",
        component: Au
    }, {
        id: "socialCard",
        component: Nu
    }, {
        id: "floatingRectangularCard",
        component: uc
    }, {
        id: "wideFloatingSquaredCard",
        component: hc
    }, {
        id: "wideFloatingRectangularCard",
        component: gc
    }, {
        id: "flatRectangularCard",
        component: yf
    }, {
        id: "ghostRectangularCard",
        component: mu
    }, {
        id: "automatedPressReleases",
        component: Lf
    }, {
        id: "automatedNewsCoverage",
        component: Hf
    }, {
        id: "contentBlock",
        component: Nl
    }, {
        id: "media",
        component: rh
    }, {
        id: "slider",
        component: i_
    }, {
        id: "subscriptionForm",
        component: jh
    }, {
        id: "useCasesSlider",
        component: a_
    }, {
        id: "heroParticlesVideo",
        component: p_
    }, {
        id: "testimonalsSlider",
        component: d_
    }, {
        id: "pills",
        component: Kh
    }].filter(s => s.id === t.type)[0];
    return i.$$set = s => {
        "componentData" in s && r(0, t = s.componentData)
    }, [t, n]
}
class Hr extends ue {
    constructor(e) {
        super(), fe(this, e, kh, yh, de, {
            componentData: 0
        })
    }
}

function _n(i, e, r) {
    const t = i.slice();
    return t[12] = e[r], t
}

function wh(i) {
    let e, r;
    return {
        c() {
            e = E("label"), r = W("_"), this.h()
        },
        l(t) {
            e = C(t, "LABEL", {
                class: !0,
                for: !0
            });
            var l = w(e);
            r = Z(l, "_"), l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "opacity-0 w-0"), u(e, "for", i[2].name)
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        p: U,
        d(t) {
            t && d(e)
        }
    }
}

function Eh(i) {
    let e;

    function r(n, s) {
        return n[2].type === "fake" ? $h : Ch
    }
    let l = r(i)(i);
    return {
        c() {
            l.c(), e = J()
        },
        l(n) {
            l.l(n), e = J()
        },
        m(n, s) {
            l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            l.p(n, s)
        },
        d(n) {
            l.d(n), n && d(e)
        }
    }
}

function Ch(i) {
    let e, r = i[2].label + "",
        t;
    return {
        c() {
            e = E("label"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "LABEL", {
                for: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "for", i[2].name)
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function $h(i) {
    let e;
    return {
        c() {
            e = E("label"), this.h()
        },
        l(r) {
            e = C(r, "LABEL", {
                for: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "for", i[2].name)
        },
        m(r, t) {
            S(r, e, t)
        },
        p: U,
        d(r) {
            r && d(e)
        }
    }
}

function Ih(i) {
    let e, r, t, l, n, s, a;
    return {
        c() {
            e = E("input"), this.h()
        },
        l(o) {
            e = C(o, "INPUT", {
                class: !0,
                autocomplete: !0,
                tabindex: !0,
                "data-lpignore": !0,
                "aria-hidden": !0,
                name: !0,
                id: !0,
                placeholder: !0,
                type: !0
            }), this.h()
        },
        h() {
            u(e, "class", "w-full oops svelte-1v93rqd"), u(e, "autocomplete", "off"), u(e, "tabindex", "-1"), u(e, "data-lpignore", "true"), u(e, "aria-hidden", "true"), u(e, "name", r = i[2].name), u(e, "id", t = i[2].name), u(e, "placeholder", l = i[2].placeholder), e.value = i[0], u(e, "type", n = i[2].type)
        },
        m(o, c) {
            S(o, e, c), s || (a = [pe(e, "input", i[4]), pe(e, "change", i[4])], s = !0)
        },
        p(o, c) {
            c & 5 && e.value !== o[0] && (e.value = o[0])
        },
        d(o) {
            o && d(e), s = !1, nt(a)
        }
    }
}

function Dh(i) {
    let e, r, t, l, n, s, a, o, c;
    return {
        c() {
            e = E("input"), this.h()
        },
        l(f) {
            e = C(f, "INPUT", {
                formstep: !0,
                class: !0,
                name: !0,
                id: !0,
                placeholder: !0,
                type: !0
            }), this.h()
        },
        h() {
            u(e, "formstep", r = i[2].formStep), u(e, "class", t = jt(`w-full ${i[1][i[2].name]?"border-red-600":null}`) + " svelte-1v93rqd"), u(e, "name", l = i[2].name), u(e, "id", n = i[2].name), u(e, "placeholder", s = i[2].placeholder), e.value = i[0], u(e, "type", a = i[2].type)
        },
        m(f, p) {
            S(f, e, p), o || (c = [pe(e, "blur", i[6]), pe(e, "input", i[4]), pe(e, "change", i[4])], o = !0)
        },
        p(f, p) {
            p & 2 && t !== (t = jt(`w-full ${f[1][f[2].name]?"border-red-600":null}`) + " svelte-1v93rqd") && u(e, "class", t), p & 5 && e.value !== f[0] && (e.value = f[0])
        },
        d(f) {
            f && d(e), o = !1, nt(c)
        }
    }
}

function Th(i) {
    let e, r, t = i[2].placeholder + "",
        l, n, s, a, o, c, f, p, h, v = i[2].options,
        _ = [];
    for (let m = 0; m < v.length; m += 1) _[m] = pn(_n(i, v, m));
    return {
        c() {
            e = E("select"), r = E("option"), l = W(t);
            for (let m = 0; m < _.length; m += 1) _[m].c();
            this.h()
        },
        l(m) {
            e = C(m, "SELECT", {
                formstep: !0,
                style: !0,
                class: !0,
                name: !0,
                placeholder: !0,
                id: !0
            });
            var b = w(e);
            r = C(b, "OPTION", {});
            var y = w(r);
            l = Z(y, t), y.forEach(d);
            for (let k = 0; k < _.length; k += 1) _[k].l(b);
            b.forEach(d), this.h()
        },
        h() {
            r.__value = "", r.value = r.__value, r.selected = !0, r.disabled = !0, r.hidden = !0, u(e, "formstep", n = i[2].formStep), u(e, "style", s = "background-image: url(/icons/arrow-down-light.svg)"), u(e, "class", a = jt(`w-full ${i[1][i[2].name]?"border-red-600":null}`) + " svelte-1v93rqd"), u(e, "name", o = i[2].name), u(e, "placeholder", c = i[2].placeholder), u(e, "id", f = i[2].name), i[0] === void 0 && Pt(() => i[8].call(e))
        },
        m(m, b) {
            S(m, e, b), g(e, r), g(r, l);
            for (let y = 0; y < _.length; y += 1) _[y].m(e, null);
            Zl(e, i[0]), p || (h = [pe(e, "blur", i[7]), pe(e, "change", i[8])], p = !0)
        },
        p(m, b) {
            if (b & 4) {
                v = m[2].options;
                let y;
                for (y = 0; y < v.length; y += 1) {
                    const k = _n(m, v, y);
                    _[y] ? _[y].p(k, b) : (_[y] = pn(k), _[y].c(), _[y].m(e, null))
                }
                for (; y < _.length; y += 1) _[y].d(1);
                _.length = v.length
            }
            b & 2 && a !== (a = jt(`w-full ${m[1][m[2].name]?"border-red-600":null}`) + " svelte-1v93rqd") && u(e, "class", a), b & 5 && Zl(e, m[0])
        },
        d(m) {
            m && d(e), De(_, m), p = !1, nt(h)
        }
    }
}

function Sh(i) {
    let e = i[12].text + "",
        r;
    return {
        c() {
            r = W(e)
        },
        l(t) {
            r = Z(t, e)
        },
        m(t, l) {
            S(t, r, l)
        },
        p: U,
        d(t) {
            t && d(r)
        }
    }
}

function Vh(i) {
    let e = i[12].text.substring(0, i[12].text.lastIndexOf("(")) + "",
        r;
    return {
        c() {
            r = W(e)
        },
        l(t) {
            r = Z(t, e)
        },
        m(t, l) {
            S(t, r, l)
        },
        p: U,
        d(t) {
            t && d(r)
        }
    }
}

function pn(i) {
    let e, r;

    function t(s, a) {
        return s[12].text.lastIndexOf("(") > -1 ? Vh : Sh
    }
    let n = t(i)(i);
    return {
        c() {
            e = E("option"), n.c(), r = P(), this.h()
        },
        l(s) {
            e = C(s, "OPTION", {
                title: !0
            });
            var a = w(e);
            n.l(a), r = M(a), a.forEach(d), this.h()
        },
        h() {
            u(e, "title", i[12].text), e.__value = i[12].value, e.value = e.__value
        },
        m(s, a) {
            S(s, e, a), n.m(e, null), g(e, r)
        },
        p(s, a) {
            n.p(s, a)
        },
        d(s) {
            s && d(e), n.d()
        }
    }
}

function Ph(i) {
    let e, r, t, l, n, s, a, o;
    return {
        c() {
            e = E("textarea"), this.h()
        },
        l(c) {
            e = C(c, "TEXTAREA", {
                formstep: !0,
                rows: !0,
                class: !0,
                name: !0,
                id: !0,
                placeholder: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "formstep", r = i[2].formStep), u(e, "rows", "4"), u(e, "class", t = jt(`w-full ${i[1][i[2].name]?"border-red-600":null}`) + " svelte-1v93rqd"), u(e, "name", l = i[2].name), u(e, "id", n = i[2].name), u(e, "placeholder", s = i[2].placeholder)
        },
        m(c, f) {
            S(c, e, f), Pr(e, i[0]), a || (o = [pe(e, "blur", i[9]), pe(e, "input", i[10])], a = !0)
        },
        p(c, f) {
            f & 2 && t !== (t = jt(`w-full ${c[1][c[2].name]?"border-red-600":null}`) + " svelte-1v93rqd") && u(e, "class", t), f & 5 && Pr(e, c[0])
        },
        d(c) {
            c && d(e), a = !1, nt(o)
        }
    }
}

function Mh(i) {
    let e, r;
    return {
        c() {
            e = E("span"), r = W("*"), this.h()
        },
        l(t) {
            e = C(t, "SPAN", {
                class: !0
            });
            var l = w(e);
            r = Z(l, "*"), l.forEach(d), this.h()
        },
        h() {
            u(e, "class", "required absolute text-xs top-0 left-0 text-green-highlight svelte-1v93rqd")
        },
        m(t, l) {
            S(t, e, l), g(e, r)
        },
        d(t) {
            t && d(e)
        }
    }
}

function mn(i) {
    let e, r = i[1][i[2].name] + "",
        t;
    return {
        c() {
            e = E("div"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "text-red-600 -mt-4 pl-1 text-sm")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p(l, n) {
            n & 2 && r !== (r = l[1][l[2].name] + "") && je(t, r)
        },
        d(l) {
            l && d(e)
        }
    }
}

function Ah(i) {
    let e, r, t, l, n, s, a, o;

    function c(k, $) {
        return k[2].label ? Eh : wh
    }
    let p = c(i)(i),
        h = i[2].type === "fake" && Ih(i),
        v = (i[2].type === "text" || i[2].type === "url" || i[2].type === "number" || i[2].type === "email") && Dh(i),
        _ = i[2].type === "select" && Th(i),
        m = i[2].type === "textarea" && Ph(i),
        b = i[2].required && Mh(),
        y = i[1][i[2].name] && mn(i);
    return {
        c() {
            e = E("div"), p.c(), r = P(), h && h.c(), t = P(), v && v.c(), l = P(), _ && _.c(), n = P(), m && m.c(), s = P(), b && b.c(), a = P(), y && y.c(), this.h()
        },
        l(k) {
            e = C(k, "DIV", {
                class: !0
            });
            var $ = w(e);
            p.l($), r = M($), h && h.l($), t = M($), v && v.l($), l = M($), _ && _.l($), n = M($), m && m.l($), s = M($), b && b.l($), a = M($), y && y.l($), $.forEach(d), this.h()
        },
        h() {
            u(e, "class", o = (i[2].type === "fake" ? "oops" : "") + " " + (i[2].width === "full" ? "w-full" : "lg:col-3") + " relative px-3 py-1 " + (i[1][i[2].name] ? "bg-transparent my-2" : null) + " svelte-1v93rqd"), Q(e, "required", i[2].required)
        },
        m(k, $) {
            S(k, e, $), p.m(e, null), g(e, r), h && h.m(e, null), g(e, t), v && v.m(e, null), g(e, l), _ && _.m(e, null), g(e, n), m && m.m(e, null), g(e, s), b && b.m(e, null), g(e, a), y && y.m(e, null)
        },
        p(k, [$]) {
            p.p(k, $), k[2].type === "fake" && h.p(k, $), (k[2].type === "text" || k[2].type === "url" || k[2].type === "number" || k[2].type === "email") && v.p(k, $), k[2].type === "select" && _.p(k, $), k[2].type === "textarea" && m.p(k, $), k[1][k[2].name] ? y ? y.p(k, $) : (y = mn(k), y.c(), y.m(e, null)) : y && (y.d(1), y = null), $ & 2 && o !== (o = (k[2].type === "fake" ? "oops" : "") + " " + (k[2].width === "full" ? "w-full" : "lg:col-3") + " relative px-3 py-1 " + (k[1][k[2].name] ? "bg-transparent my-2" : null) + " svelte-1v93rqd") && u(e, "class", o), $ & 6 && Q(e, "required", k[2].required)
        },
        i: U,
        o: U,
        d(k) {
            k && d(e), p.d(), h && h.d(), v && v.d(), _ && _.d(), m && m.d(), b && b.d(), y && y.d()
        }
    }
}

function Oh(i, e, r) {
    let {
        props: t
    } = e, {
        errors: l,
        value: n = ""
    } = e;
    const {
        fieldData: s,
        theme: a,
        validateField: o
    } = t, c = m => {
        r(0, n = m.target.value)
    }, f = m => o(m.target, s), p = m => o(m.target, s);

    function h() {
        n = ia(this), r(0, n), r(2, s)
    }
    const v = m => o(m.target, s);

    function _() {
        n = this.value, r(0, n), r(2, s)
    }
    return i.$$set = m => {
        "props" in m && r(5, t = m.props), "errors" in m && r(1, l = m.errors), "value" in m && r(0, n = m.value)
    }, [n, l, s, o, c, t, f, p, h, v, _]
}
class Gs extends ue {
    constructor(e) {
        super(), fe(this, e, Oh, Ah, de, {
            props: 5,
            errors: 1,
            value: 0
        })
    }
}

function zh(i) {
    let e, r, t, l, n, s, a;
    return {
        c() {
            e = E("div"), r = E("div"), t = E("b"), l = W("Thank you for subscribing!"), n = P(), s = E("img"), this.h()
        },
        l(o) {
            e = C(o, "DIV", {
                class: !0
            });
            var c = w(e);
            r = C(c, "DIV", {});
            var f = w(r);
            t = C(f, "B", {});
            var p = w(t);
            l = Z(p, "Thank you for subscribing!"), p.forEach(d), f.forEach(d), n = M(c), s = C(c, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), c.forEach(d), this.h()
        },
        h() {
            u(s, "class", "ml-4 flex-shrink-0"), Pe(s.src, a = "/images/success-circle.png") || u(s, "src", a), u(s, "alt", "success icon"), u(e, "class", "thankyou flex items-center justify-between text-grey-8pm rounded-lg p-4 text-xs mb-4 bg-white  svelte-1gpi53u")
        },
        m(o, c) {
            S(o, e, c), g(e, r), g(r, t), g(t, l), g(e, n), g(e, s)
        },
        p: U,
        d(o) {
            o && d(e)
        }
    }
}

function Bh(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h = i[1] && gn(i);
    return {
        c() {
            e = E("div"), r = E("form"), t = E("label"), l = W("_"), n = P(), s = E("input"), a = P(), o = E("input"), c = P(), h && h.c(), this.h()
        },
        l(v) {
            e = C(v, "DIV", {
                class: !0
            });
            var _ = w(e);
            r = C(_, "FORM", {
                id: !0,
                class: !0
            });
            var m = w(r);
            t = C(m, "LABEL", {
                class: !0,
                for: !0
            });
            var b = w(t);
            l = Z(b, "_"), b.forEach(d), n = M(m), s = C(m, "INPUT", {
                id: !0,
                class: !0,
                type: !0,
                placeholder: !0
            }), a = M(m), o = C(m, "INPUT", {
                class: !0,
                type: !0
            }), m.forEach(d), c = M(_), h && h.l(_), _.forEach(d), this.h()
        },
        h() {
            u(t, "class", "opacity-0 w-0"), u(t, "for", "subscription_email-" + i[4]), u(s, "id", "subscription_email-" + i[4]), u(s, "class", "rounded-l-lg rounded-r-none bg-white p-4 w-1/2 text-gray-900 md:w-1/3 grow svelte-1gpi53u"), u(s, "type", "email"), u(s, "placeholder", "Email"), u(o, "class", "rounded-r-lg rounded-l-none uppercase px-4 font-bold text-white bg-green-regular relative cursor-pointer svelte-1gpi53u"), u(o, "type", "submit"), o.value = i[3], u(r, "id", "subscription-form-" + i[4]), u(r, "class", "mt-6 w-full flex items-stretch rounded-lg overflow-hidden h-12 md:px-0 mb-2  svelte-1gpi53u"), u(e, "class", "flex justify-center items-center flex-col w-full relative mb-5")
        },
        m(v, _) {
            S(v, e, _), g(e, r), g(r, t), g(t, l), g(r, n), g(r, s), Pr(s, i[0]), g(r, a), g(r, o), g(e, c), h && h.m(e, null), f || (p = [pe(s, "input", i[7]), pe(r, "submit", i[8])], f = !0)
        },
        p(v, _) {
            _ & 1 && s.value !== v[0] && Pr(s, v[0]), v[1] ? h ? h.p(v, _) : (h = gn(v), h.c(), h.m(e, null)) : h && (h.d(1), h = null)
        },
        d(v) {
            v && d(e), h && h.d(), f = !1, nt(p)
        }
    }
}

function gn(i) {
    let e;

    function r(n, s) {
        if (n[1].type === "server") return Nh;
        if (n[1].type === "validation") return Lh
    }
    let t = r(i),
        l = t && t(i);
    return {
        c() {
            l && l.c(), e = J()
        },
        l(n) {
            l && l.l(n), e = J()
        },
        m(n, s) {
            l && l.m(n, s), S(n, e, s)
        },
        p(n, s) {
            t === (t = r(n)) && l ? l.p(n, s) : (l && l.d(1), l = t && t(n), l && (l.c(), l.m(e.parentNode, e)))
        },
        d(n) {
            l && l.d(n), n && d(e)
        }
    }
}

function Lh(i) {
    let e, r = i[1].msg + "",
        t;
    return {
        c() {
            e = E("div"), t = W(r), this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            t = Z(n, r), n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "error validation absolute text-sm mb-4 text-red-600 svelte-1gpi53u")
        },
        m(l, n) {
            S(l, e, n), g(e, t)
        },
        p(l, n) {
            n & 2 && r !== (r = l[1].msg + "") && je(t, r)
        },
        d(l) {
            l && d(e)
        }
    }
}

function Nh(i) {
    let e, r, t = i[1].msg + "",
        l, n, s, a;
    return {
        c() {
            e = E("div"), r = E("div"), l = W(t), n = P(), s = E("img"), this.h()
        },
        l(o) {
            e = C(o, "DIV", {
                class: !0
            });
            var c = w(e);
            r = C(c, "DIV", {});
            var f = w(r);
            l = Z(f, t), f.forEach(d), n = M(c), s = C(c, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), c.forEach(d), this.h()
        },
        h() {
            u(s, "class", "ml-4 flex-shrink-0"), Pe(s.src, a = "/images/exclamation-triangle.png") || u(s, "src", a), u(s, "alt", "warning icon"), u(e, "class", "error server mb-4 flex items-center justify-between w-full text-grey-8pm rounded-lg p-4 text-xs bg-white svelte-1gpi53u")
        },
        m(o, c) {
            S(o, e, c), g(e, r), g(r, l), g(e, n), g(e, s)
        },
        p(o, c) {
            c & 2 && t !== (t = o[1].msg + "") && je(l, t)
        },
        d(o) {
            o && d(e)
        }
    }
}

function Fh(i) {
    let e;

    function r(n, s) {
        return n[2] ? zh : Bh
    }
    let t = r(i),
        l = t(i);
    return {
        c() {
            l.c(), e = J()
        },
        l(n) {
            l.l(n), e = J()
        },
        m(n, s) {
            l.m(n, s), S(n, e, s)
        },
        p(n, [s]) {
            t === (t = r(n)) && l ? l.p(n, s) : (l.d(1), l = t(n), l && (l.c(), l.m(e.parentNode, e)))
        },
        i: U,
        o: U,
        d(n) {
            l.d(n), n && d(e)
        }
    }
}

function Rh(i, e, r) {
    let {
        props: t
    } = e;
    const {
        buttonText: l = "Subscribe",
        projectID: n = "DUMMY_FOO"
    } = t;
    let s, a, o;

    function c(h) {
        h.preventDefault(), da(s) ? Ns.post("https://newsletter-api.iota.org/api/signup", {
            email: s,
            projectID: n
        }).then(v => {
            r(2, o = !0), r(1, a = null)
        }).catch(v => {
            r(1, a = {
                type: "server",
                msg: "There was an error, try again later"
            })
        }) : r(1, a = {
            type: "validation",
            msg: "Invalid email address"
        })
    }

    function f() {
        s = this.value, r(0, s)
    }
    const p = h => c(h);
    return i.$$set = h => {
        "props" in h && r(6, t = h.props)
    }, [s, a, o, l, n, c, t, f, p]
}
class jh extends ue {
    constructor(e) {
        super(), fe(this, e, Rh, Fh, de, {
            props: 6
        })
    }
}

function Uh(i) {
    let e, r, t, l, n, s;
    return {
        c() {
            e = E("div"), r = E("div"), t = E("img"), n = P(), s = E("div"), this.h()
        },
        l(a) {
            e = C(a, "DIV", {
                class: !0
            });
            var o = w(e);
            r = C(o, "DIV", {
                class: !0
            });
            var c = w(r);
            t = C(c, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), c.forEach(d), n = M(o), s = C(o, "DIV", {
                class: !0
            }), w(s).forEach(d), o.forEach(d), this.h()
        },
        h() {
            u(t, "class", "w-full"), Pe(t.src, l = i[0]) || u(t, "src", l), u(t, "alt", i[1]), u(r, "class", "overflow-hidden rounded-full w-full h-full flex justify-center items-center"), u(s, "class", "circle rounded-full bg-grey-4pm absolute w-full h-full svelte-xa7q06"), u(e, "class", "image-wrapper block mx-auto relative z-0 svelte-xa7q06")
        },
        m(a, o) {
            S(a, e, o), g(e, r), g(r, t), g(e, n), g(e, s)
        },
        p(a, o) {
            o & 1 && !Pe(t.src, l = a[0]) && u(t, "src", l), o & 2 && u(t, "alt", a[1])
        },
        d(a) {
            a && d(e)
        }
    }
}

function Hh(i) {
    let e, r, t, l, n, s;
    return {
        c() {
            e = E("a"), r = E("div"), t = E("img"), n = P(), s = E("div"), this.h()
        },
        l(a) {
            e = C(a, "A", {
                href: !0,
                target: !0,
                class: !0
            });
            var o = w(e);
            r = C(o, "DIV", {
                class: !0
            });
            var c = w(r);
            t = C(c, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), c.forEach(d), n = M(o), s = C(o, "DIV", {
                class: !0
            }), w(s).forEach(d), o.forEach(d), this.h()
        },
        h() {
            u(t, "class", "w-full"), Pe(t.src, l = i[0]) || u(t, "src", l), u(t, "alt", i[1]), u(r, "class", "overflow-hidden rounded-full w-full h-full flex justify-center items-center"), u(s, "class", "circle rounded-full bg-grey-4pm absolute w-full h-full svelte-xa7q06"), u(e, "href", i[4]), u(e, "target", "_blank"), u(e, "class", "image-wrapper block mx-auto relative z-0 svelte-xa7q06")
        },
        m(a, o) {
            S(a, e, o), g(e, r), g(r, t), g(e, n), g(e, s)
        },
        p(a, o) {
            o & 1 && !Pe(t.src, l = a[0]) && u(t, "src", l), o & 2 && u(t, "alt", a[1]), o & 16 && u(e, "href", a[4])
        },
        d(a) {
            a && d(e)
        }
    }
}

function qh(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v;
    t = new Ie({
        props: {
            props: {
                text: i[3]
            }
        }
    });

    function _(y, k) {
        return y[4] ? Hh : Uh
    }
    let m = _(i),
        b = m(i);
    return {
        c() {
            e = E("div"), r = E("div"), le(t.$$.fragment), l = P(), n = E("div"), b.c(), s = P(), a = E("div"), o = E("h4"), c = W(i[1]), f = P(), p = E("div"), h = W(i[2]), this.h()
        },
        l(y) {
            e = C(y, "DIV", {
                class: !0
            });
            var k = w(e);
            r = C(k, "DIV", {
                class: !0
            });
            var $ = w(r);
            se(t.$$.fragment, $), $.forEach(d), l = M(k), n = C(k, "DIV", {
                class: !0
            });
            var I = w(n);
            b.l(I), s = M(I), a = C(I, "DIV", {
                class: !0
            });
            var D = w(a);
            o = C(D, "H4", {
                class: !0
            });
            var T = w(o);
            c = Z(T, i[1]), T.forEach(d), f = M(D), p = C(D, "DIV", {
                class: !0
            });
            var z = w(p);
            h = Z(z, i[2]), z.forEach(d), D.forEach(d), I.forEach(d), k.forEach(d), this.h()
        },
        h() {
            u(r, "class", "pb-8"), u(o, "class", "mb-0"), u(p, "class", "text-grey-10pm"), u(a, "class", "flex flex-col justify-center ml-4"), u(n, "class", "flex items-center pt-8"), u(e, "class", "flex flex-col items-center justify-center p-12 rounded-lg bg-white w-full")
        },
        m(y, k) {
            S(y, e, k), g(e, r), ie(t, r, null), g(e, l), g(e, n), b.m(n, null), g(n, s), g(n, a), g(a, o), g(o, c), g(a, f), g(a, p), g(p, h), v = !0
        },
        p(y, [k]) {
            const $ = {};
            k & 8 && ($.props = {
                text: y[3]
            }), t.$set($), m === (m = _(y)) && b ? b.p(y, k) : (b.d(1), b = m(y), b && (b.c(), b.m(n, s))), (!v || k & 2) && je(c, y[1]), (!v || k & 4) && je(h, y[2])
        },
        i(y) {
            v || (N(t.$$.fragment, y), v = !0)
        },
        o(y) {
            F(t.$$.fragment, y), v = !1
        },
        d(y) {
            y && d(e), ne(t), b.d()
        }
    }
}

function Gh(i, e, r) {
    let {
        photo: t = ""
    } = e, {
        name: l = ""
    } = e, {
        jobTitle: n = ""
    } = e, {
        body: s = null
    } = e, {
        link: a = ""
    } = e;
    return i.$$set = o => {
        "photo" in o && r(0, t = o.photo), "name" in o && r(1, l = o.name), "jobTitle" in o && r(2, n = o.jobTitle), "body" in o && r(3, s = o.body), "link" in o && r(4, a = o.link)
    }, [t, l, n, s, a]
}
class Yh extends ue {
    constructor(e) {
        super(), fe(this, e, Gh, qh, de, {
            photo: 0,
            name: 1,
            jobTitle: 2,
            body: 3,
            link: 4
        })
    }
}

function vn(i, e, r) {
    const t = i.slice();
    return t[5] = e[r], t[7] = r, t
}

function bn(i) {
    let e, r = i[0],
        t = [];
    for (let l = 0; l < r.length; l += 1) t[l] = yn(vn(i, r, l));
    return {
        c() {
            e = E("div");
            for (let l = 0; l < t.length; l += 1) t[l].c();
            this.h()
        },
        l(l) {
            e = C(l, "DIV", {
                class: !0
            });
            var n = w(e);
            for (let s = 0; s < t.length; s += 1) t[s].l(n);
            n.forEach(d), this.h()
        },
        h() {
            u(e, "class", "flex justify-center flex-wrap")
        },
        m(l, n) {
            S(l, e, n);
            for (let s = 0; s < t.length; s += 1) t[s].m(e, null)
        },
        p(l, n) {
            if (n & 7) {
                r = l[0];
                let s;
                for (s = 0; s < r.length; s += 1) {
                    const a = vn(l, r, s);
                    t[s] ? t[s].p(a, n) : (t[s] = yn(a), t[s].c(), t[s].m(e, null))
                }
                for (; s < t.length; s += 1) t[s].d(1);
                t.length = r.length
            }
        },
        d(l) {
            l && d(e), De(t, l)
        }
    }
}

function yn(i) {
    let e, r = i[5].title + "",
        t, l, n, s;

    function a() {
        return i[3](i[7])
    }
    return {
        c() {
            e = E("div"), t = W(r), l = P(), this.h()
        },
        l(o) {
            e = C(o, "DIV", {
                class: !0
            });
            var c = w(e);
            t = Z(c, r), l = M(c), c.forEach(d), this.h()
        },
        h() {
            u(e, "class", "pill svelte-1czfv0h"), Q(e, "active", !i[1] && i[5].show)
        },
        m(o, c) {
            S(o, e, c), g(e, t), g(e, l), n || (s = pe(e, "click", a), n = !0)
        },
        p(o, c) {
            i = o, c & 1 && r !== (r = i[5].title + "") && je(t, r), c & 3 && Q(e, "active", !i[1] && i[5].show)
        },
        d(o) {
            o && d(e), n = !1, s()
        }
    }
}

function Wh(i) {
    let e, r = i[0] && bn(i);
    return {
        c() {
            r && r.c(), e = J()
        },
        l(t) {
            r && r.l(t), e = J()
        },
        m(t, l) {
            r && r.m(t, l), S(t, e, l)
        },
        p(t, [l]) {
            t[0] ? r ? r.p(t, l) : (r = bn(t), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null)
        },
        i: U,
        o: U,
        d(t) {
            r && r.d(t), t && d(e)
        }
    }
}

function Zh(i, e, r) {
    let {
        sections: t
    } = e;
    const l = zn();
    let n = !0;

    function s(o) {
        r(1, n = !1);
        let c = 0;
        if (t.map(f => {
                c += f.show ? 1 : 0
            }), c === t.length) r(0, t = t.map((f, p) => (f.show = p === o, f)));
        else if (c === 0) t.map(f => {
            f.show = !0
        });
        else {
            let f = null;
            t.map((p, h) => {
                f = p.show === !0 ? h : f
            }), c === 1 && o === f ? (r(0, t = t.map(p => (p.show = !0, p))), r(1, n = !0)) : r(0, t[o].show = !t[o].show, t)
        }
        l("pillClicked", {
            sections: t
        })
    }
    const a = o => s(o);
    return i.$$set = o => {
        "sections" in o && r(0, t = o.sections)
    }, [t, n, s, a]
}
class Kh extends ue {
    constructor(e) {
        super(), fe(this, e, Zh, Wh, de, {
            sections: 0
        })
    }
}

function Xh(i) {
    let e;
    return {
        c() {
            e = E("div"), this.h()
        },
        l(r) {
            e = C(r, "DIV", {
                class: !0
            }), w(e).forEach(d), this.h()
        },
        h() {
            u(e, "class", "explosiveparticles absolute absolute-centered svelte-tvjddc"), Q(e, "inView", i[1])
        },
        m(r, t) {
            S(r, e, t), i[2](e)
        },
        p(r, [t]) {
            t & 2 && Q(e, "inView", r[1])
        },
        i: U,
        o: U,
        d(r) {
            r && d(e), i[2](null)
        }
    }
}
const Jh = "particles/particles.json",
    Qh = "particleexplotion";

function xh(i, e) {
    if (e == null && (e = i, i = 0), i > e) {
        var r = i;
        i = e, e = r
    }
    return i + (e - i) * Math.random()
}

function e_(i, e, r) {
    const t = {
        width: 1582,
        height: 1582
    };
    let l, n, s = !1,
        a, o;
    He(async () => {
        a = kl(), n = await new p(l), await n.setSamples(Jh, t, Qh), a ? (o = new IntersectionObserver(c, {
            root: null,
            rootMargin: "0px",
            threshold: .25
        }), o.observe(l)) : (r(1, s = !0), n.play())
    });

    function c(v, _) {
        v[0].isIntersecting ? (r(1, s = !0), n.play()) : v[0].isIntersecting || n.pause()
    }
    bl(() => {
        n && n.destroy(), o && o.unobserve(l)
    });
    class f {
        constructor(_, m, b, y, k, $, I) {
            this.x = _ + .5 | 0, this.y = m + .5 | 0, this.radius = b, this.color = y, this.opacity = k, this.animate = $, this.context = I;
            const D = xh(5, 10);
            $ ? (this.pathAnimation = new Ge({
                repeat: -1,
                yoyo: !0,
                paused: !0
            }).to(this, D, {
                x: `+=${Math.random()*160-40+.5|0}`,
                y: `+=${Math.random()*160-40+.5|0}`,
                ease: Co.easeNone
            }), this.pathAnimation.time(D)) : this.draw()
        }
        draw() {
            this.context.fillStyle = this.color, this.context.globalAlpha = this.opacity, this.context.beginPath(), this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), this.context.closePath(), this.context.fill()
        }
        kill() {
            this.pathAnimation && this.pathAnimation.kill()
        }
        pause() {
            this.pathAnimation && this.pathAnimation.pause()
        }
        play() {
            this.pathAnimation && this.pathAnimation.play()
        }
    }
    class p {
        constructor(_, m) {
            this.container = _, this.particles = Array(3), this.canvases = [], this.contexts = [], this.cssClass = m, this.viewbox = {}, this.classes = "", Sr.ticker.lagSmoothing(1e3, 16), Sr.ticker.add(this.render.bind(this)), this.visible = !1
        }
        async setSamples(_, m, b) {
            if (this.destroy(), this.canvases.length > 0) {
                for (let V = this.canvases.length - 1; V >= 0; V--) this.container.removeChild(this.canvases[V]);
                this.canvases = [], this.contexts = []
            }
            const y = ["#CAD6E9", "#00E0CA", "#516183", "#F8F9FD", "#DEE5F2", "#F4F7FC"],
                k = [.9, 1, 1, .2, .2, .1];
            let I = await (await fetch(_)).json();
            this.viewbox = m, this.classes = b, this.particles = Array(4);
            let D = document.createElement("canvas");
            D = document.createElement("canvas"), D.width = this.viewbox.width, D.height = this.viewbox.height, D.classList.add("explotionparticles", this.classes);
            let T = D.getContext("2d");
            T.imageSmoothingEnabled = !1, T.mozImageSmoothingEnabled = !1, T.oImageSmoothingEnabled = !1, T.webkitImageSmoothingEnabled = !1, T.msImageSmoothingEnabled = !1, this.container.appendChild(D), this.canvases.push(D), this.contexts.push(T);
            const z = [];
            for (var A = 0; A < I.length; A++) {
                let V = document.createElement("canvas");
                V = document.createElement("canvas"), V.width = this.viewbox.width, V.height = this.viewbox.height, V.classList.add("explotionparticles", this.classes);
                let L = V.getContext("2d");
                L.imageSmoothingEnabled = !1, L.mozImageSmoothingEnabled = !1, L.oImageSmoothingEnabled = !1, L.webkitImageSmoothingEnabled = !1, L.msImageSmoothingEnabled = !1;
                const O = [];
                for (var B = 0; B < I[A].length; B++) {
                    let R = B % 7 === 0,
                        j = new f(I[A][B][0], I[A][B][1], I[A][B][2] > 5 ? 5 : I[A][B][2], y[A], k[A], R, R ? T : L);
                    R ? z.push(j) : O.push(j)
                }
                O.length > 0 && (this.container.appendChild(V), this.canvases.push(V), this.contexts.push(L), this.particles[A + 1] = O)
            }
            this.particles[0] = z
        }
        render() {
            if (this.visible && this.particles.length > 0 && this.contexts[0] && this.particles[0]) {
                this.contexts[0].clearRect(0, 0, this.viewbox.width, this.viewbox.height);
                for (let _ = 0; _ < this.particles[0].length; _++) this.particles[0][_].draw()
            }
        }
        destroy() {
            if (Sr.ticker.remove(this.render.bind(this)), this.particles.length > 0 && this.contexts[0] && this.particles[0])
                for (let _ = 0; _ < this.particles[0].length; _++) this.particles[0][_].kill()
        }
        pause() {
            if (this.visible = !1, this.particles.length > 0 && this.contexts[0] && this.particles[0])
                for (let _ = 0; _ < this.particles[0].length; _++) this.particles[0][_].pause()
        }
        play() {
            if (this.visible = !0, this.particles.length > 0 && this.contexts[0] && this.particles[0])
                for (let _ = 0; _ < this.particles[0].length; _++) this.particles[0][_].play()
        }
    }

    function h(v) {
        Ee[v ? "unshift" : "push"](() => {
            l = v, r(0, l)
        })
    }
    return [l, s, h]
}
class t_ extends ue {
    constructor(e) {
        super(), fe(this, e, e_, Xh, de, {})
    }
}

function r_(i) {
    let e, r;
    return e = new Hr({
        props: {
            componentData: {
                type: i[1],
                fields: Oe({}, i[0])
            }
        }
    }), {
        c() {
            le(e.$$.fragment)
        },
        l(t) {
            se(e.$$.fragment, t)
        },
        m(t, l) {
            ie(e, t, l), r = !0
        },
        p(t, [l]) {
            const n = {};
            l & 3 && (n.componentData = {
                type: t[1],
                fields: Oe({}, t[0])
            }), e.$set(n)
        },
        i(t) {
            r || (N(e.$$.fragment, t), r = !0)
        },
        o(t) {
            F(e.$$.fragment, t), r = !1
        },
        d(t) {
            ne(e, t)
        }
    }
}

function l_(i, e, r) {
    let {
        props: t
    } = e;
    const {
        type: l
    } = t;
    let n;
    switch (l) {
    case "hero-video":
        n = "heroParticlesVideo";
        break;
    case "use-cases":
        n = "useCasesSlider";
        break;
    case "testimonials":
        n = "testimonalsSlider";
        break
    }
    return i.$$set = s => {
        "props" in s && r(0, t = s.props)
    }, [t, n]
}
class i_ extends ue {
    constructor(e) {
        super(), fe(this, e, l_, r_, de, {
            props: 0
        })
    }
}

function kn(i, e, r) {
    const t = i.slice();
    return t[36] = e[r], t[38] = r, t
}

function wn(i, e, r) {
    const t = i.slice();
    return t[39] = e[r].iconUrl, t[40] = e[r].title, t[41] = e[r].body, t
}

function En(i, e, r) {
    const t = i.slice();
    return t[40] = e[r].title, t[44] = e[r].link, t[38] = r, t
}

function Cn(i, e, r) {
    const t = i.slice();
    return t[46] = e[r].heroImage, t[13] = e[r].videos, t[38] = r, t
}

function $n(i) {
    let e, r, t, l, n, s, a, o, c, f;
    return {
        c() {
            e = E("video"), r = E("source"), n = E("source"), o = W(`
                Your browser does not support video on HTML.`), this.h()
        },
        l(p) {
            e = C(p, "VIDEO", {
                height: !0,
                width: !0,
                id: !0,
                poster: !0,
                class: !0,
                preload: !0
            });
            var h = w(e);
            r = C(h, "SOURCE", {
                "data-src": !0,
                type: !0
            }), n = C(h, "SOURCE", {
                "data-src": !0,
                type: !0
            }), o = Z(h, `
                Your browser does not support video on HTML.`), h.forEach(d), this.h()
        },
        h() {
            u(r, "data-src", t = i[13][0].url), u(r, "type", l = i[13][0].contentType), u(n, "data-src", s = i[13][1].url), u(n, "type", a = i[13][1].contentType), u(e, "height", "100%"), u(e, "width", "100%"), u(e, "id", c = `usecasesslidervideo-${i[38]}`), e.playsInline = !0, u(e, "poster", f = i[46] && i[46].fields.file.url), u(e, "class", "lazy svelte-1vgghv3"), u(e, "preload", "metadata"), e.loop = !0, e.muted = !0, Q(e, "active", i[38] === i[1] || i[38] === 0 && i[1] === -1)
        },
        m(p, h) {
            S(p, e, h), g(e, r), g(e, n), g(e, o)
        },
        p(p, h) {
            h[0] & 1 && t !== (t = p[13][0].url) && u(r, "data-src", t), h[0] & 1 && l !== (l = p[13][0].contentType) && u(r, "type", l), h[0] & 1 && s !== (s = p[13][1].url) && u(n, "data-src", s), h[0] & 1 && a !== (a = p[13][1].contentType) && u(n, "type", a), h[0] & 1 && f !== (f = p[46] && p[46].fields.file.url) && u(e, "poster", f), h[0] & 2 && Q(e, "active", p[38] === p[1] || p[38] === 0 && p[1] === -1)
        },
        d(p) {
            p && d(e)
        }
    }
}

function In(i) {
    let e, r, t = i[40] + "",
        l, n, s, a, o = i[40] + "",
        c, f, p, h, v, _, m, b, y, k, $, I, D, T, z, A, B, V, L, O, R, j, G, X, Y, ee, q, x;

    function re() {
        return i[27](i[38])
    }
    return {
        c() {
            e = E("div"), r = E("div"), l = W(t), n = P(), s = E("div"), a = E("span"), c = W(o), f = P(), p = he("svg"), h = he("circle"), m = P(), b = he("svg"), y = he("circle"), T = P(), z = E("div"), A = E("div"), B = P(), V = E("a"), L = E("div"), O = W("Visit page"), R = P(), j = he("svg"), G = he("path"), Y = P(), this.h()
        },
        l(te) {
            e = C(te, "DIV", {
                class: !0,
                key: !0
            });
            var H = w(e);
            r = C(H, "DIV", {
                class: !0
            });
            var K = w(r);
            l = Z(K, t), K.forEach(d), n = M(H), s = C(H, "DIV", {
                class: !0
            });
            var ce = w(s);
            a = C(ce, "SPAN", {
                class: !0
            });
            var ye = w(a);
            c = Z(ye, o), ye.forEach(d), f = M(ce), p = _e(ce, "svg", {
                class: !0,
                height: !0,
                width: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var ge = w(p);
            h = _e(ge, "circle", {
                cx: !0,
                cy: !0,
                r: !0,
                fill: !0,
                class: !0
            }), w(h).forEach(d), ge.forEach(d), m = M(ce), b = _e(ce, "svg", {
                class: !0,
                height: !0,
                width: !0
            });
            var Te = w(b);
            y = _e(Te, "circle", {
                stroke: !0,
                fill: !0,
                "stroke-dasharray": !0,
                style: !0,
                "stroke-width": !0,
                r: !0,
                cx: !0,
                cy: !0,
                class: !0
            }), w(y).forEach(d), Te.forEach(d), ce.forEach(d), T = M(H), z = C(H, "DIV", {
                class: !0
            });
            var me = w(z);
            A = C(me, "DIV", {
                class: !0
            }), w(A).forEach(d), me.forEach(d), B = M(H), V = C(H, "A", {
                class: !0,
                href: !0
            });
            var st = w(V);
            L = C(st, "DIV", {});
            var oe = w(L);
            O = Z(oe, "Visit page"), oe.forEach(d), R = M(st), j = _e(st, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var be = w(j);
            G = _e(be, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0,
                class: !0
            }), w(G).forEach(d), be.forEach(d), st.forEach(d), Y = M(H), H.forEach(d), this.h()
        },
        h() {
            u(r, "class", "litle-title svelte-1vgghv3"), u(a, "class", "letters-from-blur remove-white-spaces inline-block"), u(h, "cx", "50"), u(h, "cy", "50"), u(h, "r", "50"), u(h, "fill", "#00E0CA"), u(h, "class", "svelte-1vgghv3"), u(p, "class", "green-circle svelte-1vgghv3"), u(p, "height", v = i[6] * 2), u(p, "width", _ = i[6] * 2), u(p, "viewBox", "0 0 100 100"), u(p, "fill", "none"), u(p, "xmlns", "http://www.w3.org/2000/svg"), u(y, "stroke", "#00E0CA"), u(y, "fill", "transparent"), u(y, "stroke-dasharray", k = i[4] + " " + i[4]), u(y, "style", $ = `stroke-dashoffset: ${-i[11]}; opacity: 1`), u(y, "stroke-width", Ys), u(y, "r", i[5]), u(y, "cx", i[6]), u(y, "cy", i[6]), u(y, "class", "svelte-1vgghv3"), Q(y, "animate", i[3] !== 0), u(b, "class", "circle-animated svelte-1vgghv3"), u(b, "height", I = i[6] * 2), u(b, "width", D = i[6] * 2), u(s, "class", "title relative svelte-1vgghv3"), u(A, "class", "dot-stick svelte-1vgghv3"), Q(A, "animate", i[3] !== 0), u(z, "class", "stick-wrapper svelte-1vgghv3"), u(G, "d", "M1 11L6 6L1 1"), u(G, "stroke", "#F6F8FC"), u(G, "stroke-width", "2"), u(G, "class", "svelte-1vgghv3"), u(j, "class", "arrow-svg ml-2 svelte-1vgghv3"), u(j, "width", "8"), u(j, "height", "12"), u(j, "viewBox", "0 0 8 12"), u(j, "fill", "none"), u(j, "xmlns", "http://www.w3.org/2000/svg"), u(V, "class", "absolute text-xs font-semibold flex items-center svelte-1vgghv3"), u(V, "href", X = i[44]), u(e, "class", "item svelte-1vgghv3"), u(e, "key", ee = "slide-title-" + i[38]), Q(e, "active", i[38] === i[1]), Q(e, "inactive", i[38] === i[8])
        },
        m(te, H) {
            S(te, e, H), g(e, r), g(r, l), g(e, n), g(e, s), g(s, a), g(a, c), g(s, f), g(s, p), g(p, h), g(s, m), g(s, b), g(b, y), g(e, T), g(e, z), g(z, A), g(e, B), g(e, V), g(V, L), g(L, O), g(V, R), g(V, j), g(j, G), g(e, Y), q || (x = [pe(e, "mouseover", Jt(function () {
                Kl(i[38] === i[1] ? i[18] : null) && (i[38] === i[1] ? i[18] : null).apply(this, arguments)
            })), pe(e, "mouseleave", Jt(function () {
                Kl(i[38] === i[1] ? i[19] : null) && (i[38] === i[1] ? i[19] : null).apply(this, arguments)
            })), pe(e, "click", re), pe(e, "focus", i[24])], q = !0)
        },
        p(te, H) {
            i = te, H[0] & 1 && t !== (t = i[40] + "") && je(l, t), H[0] & 1 && o !== (o = i[40] + "") && je(c, o), H[0] & 64 && v !== (v = i[6] * 2) && u(p, "height", v), H[0] & 64 && _ !== (_ = i[6] * 2) && u(p, "width", _), H[0] & 16 && k !== (k = i[4] + " " + i[4]) && u(y, "stroke-dasharray", k), H[0] & 2048 && $ !== ($ = `stroke-dashoffset: ${-i[11]}; opacity: 1`) && u(y, "style", $), H[0] & 32 && u(y, "r", i[5]), H[0] & 64 && u(y, "cx", i[6]), H[0] & 64 && u(y, "cy", i[6]), H[0] & 8 && Q(y, "animate", i[3] !== 0), H[0] & 64 && I !== (I = i[6] * 2) && u(b, "height", I), H[0] & 64 && D !== (D = i[6] * 2) && u(b, "width", D), H[0] & 8 && Q(A, "animate", i[3] !== 0), H[0] & 1 && X !== (X = i[44]) && u(V, "href", X), H[0] & 2 && Q(e, "active", i[38] === i[1]), H[0] & 256 && Q(e, "inactive", i[38] === i[8])
        },
        d(te) {
            te && d(e), q = !1, nt(x)
        }
    }
}

function Dn(i) {
    let e, r, t, l, n, s, a, o = i[40] + "",
        c, f, p, h, v;
    return h = new Ie({
        props: {
            props: {
                text: i[41]
            }
        }
    }), {
        c() {
            e = E("div"), r = E("div"), t = E("img"), s = P(), a = E("div"), c = W(o), f = P(), p = E("div"), le(h.$$.fragment), this.h()
        },
        l(_) {
            e = C(_, "DIV", {
                class: !0
            });
            var m = w(e);
            r = C(m, "DIV", {
                class: !0
            });
            var b = w(r);
            t = C(b, "IMG", {
                src: !0,
                alt: !0
            }), b.forEach(d), s = M(m), a = C(m, "DIV", {
                class: !0
            });
            var y = w(a);
            c = Z(y, o), y.forEach(d), f = M(m), p = C(m, "DIV", {
                class: !0
            });
            var k = w(p);
            se(h.$$.fragment, k), k.forEach(d), m.forEach(d), this.h()
        },
        h() {
            Pe(t.src, l = i[39]) || u(t, "src", l), u(t, "alt", n = i[40]), u(r, "class", "mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3"), u(a, "class", "title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3"), u(p, "class", "w-full hidden md:block"), u(e, "class", "card flex flex-wrap justify-center text-white text-center svelte-1vgghv3")
        },
        m(_, m) {
            S(_, e, m), g(e, r), g(r, t), g(e, s), g(e, a), g(a, c), g(e, f), g(e, p), ie(h, p, null), v = !0
        },
        p(_, m) {
            (!v || m[0] & 1 && !Pe(t.src, l = _[39])) && u(t, "src", l), (!v || m[0] & 1 && n !== (n = _[40])) && u(t, "alt", n), (!v || m[0] & 1) && o !== (o = _[40] + "") && je(c, o);
            const b = {};
            m[0] & 1 && (b.props = {
                text: _[41]
            }), h.$set(b)
        },
        i(_) {
            v || (N(h.$$.fragment, _), v = !0)
        },
        o(_) {
            F(h.$$.fragment, _), v = !1
        },
        d(_) {
            _ && d(e), ne(h)
        }
    }
}

function Tn(i) {
    let e, r, t, l = i[36].cards,
        n = [];
    for (let a = 0; a < l.length; a += 1) n[a] = Dn(wn(i, l, a));
    const s = a => F(n[a], 1, 1, () => {
        n[a] = null
    });
    return {
        c() {
            e = E("div");
            for (let a = 0; a < n.length; a += 1) n[a].c();
            r = P(), this.h()
        },
        l(a) {
            e = C(a, "DIV", {
                class: !0
            });
            var o = w(e);
            for (let c = 0; c < n.length; c += 1) n[c].l(o);
            r = M(o), o.forEach(d), this.h()
        },
        h() {
            u(e, "class", "cards w-full justify-between svelte-1vgghv3"), Q(e, "active", i[38] === i[1])
        },
        m(a, o) {
            S(a, e, o);
            for (let c = 0; c < n.length; c += 1) n[c].m(e, null);
            g(e, r), t = !0
        },
        p(a, o) {
            if (o[0] & 1) {
                l = a[36].cards;
                let c;
                for (c = 0; c < l.length; c += 1) {
                    const f = wn(a, l, c);
                    n[c] ? (n[c].p(f, o), N(n[c], 1)) : (n[c] = Dn(f), n[c].c(), N(n[c], 1), n[c].m(e, r))
                }
                for (ke(), c = l.length; c < n.length; c += 1) s(c);
                we()
            }
            o[0] & 2 && Q(e, "active", a[38] === a[1])
        },
        i(a) {
            if (!t) {
                for (let o = 0; o < l.length; o += 1) N(n[o]);
                t = !0
            }
        },
        o(a) {
            n = n.filter(Boolean);
            for (let o = 0; o < n.length; o += 1) F(n[o]);
            t = !1
        },
        d(a) {
            a && d(e), De(n, a)
        }
    }
}

function n_(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I, D, T, z, A, B, V, L, O, R, j, G, X, Y, ee, q, x, re, te, H, K = i[0],
        ce = [];
    for (let oe = 0; oe < K.length; oe += 1) ce[oe] = $n(Cn(i, K, oe));
    let ye = i[0],
        ge = [];
    for (let oe = 0; oe < ye.length; oe += 1) ge[oe] = In(En(i, ye, oe));
    let Te = i[0],
        me = [];
    for (let oe = 0; oe < Te.length; oe += 1) me[oe] = Tn(kn(i, Te, oe));
    const st = oe => F(me[oe], 1, 1, () => {
        me[oe] = null
    });
    return j = new sr({
        props: {
            props: {
                title: "Industries",
                color: "green"
            }
        }
    }), x = new vt({
        props: {
            props: {
                title: "Explore more",
                url: "/solutions/industries",
                buttonTheme: "ghost"
            }
        }
    }), {
        c() {
            e = E("section"), r = E("div");
            for (let oe = 0; oe < ce.length; oe += 1) ce[oe].c();
            t = P(), l = E("div"), n = P(), s = E("div"), a = P(), o = E("nav"), c = E("div"), f = he("svg"), p = he("circle"), h = he("path"), v = P(), _ = E("div"), m = he("svg"), b = he("circle"), y = he("path"), k = P(), $ = he("svg"), I = he("circle"), T = P(), z = E("div");
            for (let oe = 0; oe < ge.length; oe += 1) ge[oe].c();
            A = P(), B = E("div");
            for (let oe = 0; oe < me.length; oe += 1) me[oe].c();
            V = P(), L = E("div"), O = E("div"), R = E("div"), le(j.$$.fragment), G = P(), X = E("h2"), Y = W("IOTA enables new possibilities"), ee = P(), q = E("div"), le(x.$$.fragment), this.h()
        },
        l(oe) {
            e = C(oe, "SECTION", {
                class: !0
            });
            var be = w(e);
            r = C(be, "DIV", {
                class: !0,
                id: !0
            });
            var ae = w(r);
            for (let at = 0; at < ce.length; at += 1) ce[at].l(ae);
            t = M(ae), l = C(ae, "DIV", {
                class: !0
            }), w(l).forEach(d), n = M(ae), s = C(ae, "DIV", {
                class: !0
            }), w(s).forEach(d), ae.forEach(d), a = M(be), o = C(be, "NAV", {
                class: !0
            });
            var qe = w(o);
            c = C(qe, "DIV", {
                class: !0
            });
            var Fl = w(c);
            f = _e(Fl, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0,
                class: !0
            });
            var qr = w(f);
            p = _e(qr, "circle", {
                cx: !0,
                cy: !0,
                r: !0,
                transform: !0,
                stroke: !0,
                fill: !0,
                class: !0
            }), w(p).forEach(d), h = _e(qr, "path", {
                d: !0,
                stroke: !0,
                class: !0
            }), w(h).forEach(d), qr.forEach(d), Fl.forEach(d), v = M(qe), _ = C(qe, "DIV", {
                class: !0
            });
            var Cr = w(_);
            m = _e(Cr, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0,
                class: !0
            });
            var Gr = w(m);
            b = _e(Gr, "circle", {
                cx: !0,
                cy: !0,
                r: !0,
                stroke: !0,
                fill: !0,
                class: !0
            }), w(b).forEach(d), y = _e(Gr, "path", {
                d: !0,
                stroke: !0,
                class: !0
            }), w(y).forEach(d), Gr.forEach(d), k = M(Cr), $ = _e(Cr, "svg", {
                class: !0,
                height: !0,
                width: !0
            });
            var Rl = w($);
            I = _e(Rl, "circle", {
                stroke: !0,
                fill: !0,
                strokewidth: !0,
                "stroke-dasharray": !0,
                style: !0,
                "stroke-width": !0,
                r: !0,
                cx: !0,
                cy: !0,
                class: !0
            }), w(I).forEach(d), Rl.forEach(d), Cr.forEach(d), T = M(qe), z = C(qe, "DIV", {
                class: !0
            });
            var jl = w(z);
            for (let at = 0; at < ge.length; at += 1) ge[at].l(jl);
            jl.forEach(d), qe.forEach(d), A = M(be), B = C(be, "DIV", {
                class: !0
            });
            var Ul = w(B);
            for (let at = 0; at < me.length; at += 1) me[at].l(Ul);
            Ul.forEach(d), V = M(be), L = C(be, "DIV", {
                class: !0
            });
            var $r = w(L);
            O = C($r, "DIV", {
                class: !0
            });
            var Ir = w(O);
            R = C(Ir, "DIV", {
                class: !0
            });
            var Hl = w(R);
            se(j.$$.fragment, Hl), Hl.forEach(d), G = M(Ir), X = C(Ir, "H2", {
                class: !0,
                id: !0
            });
            var ql = w(X);
            Y = Z(ql, "IOTA enables new possibilities"), ql.forEach(d), Ir.forEach(d), ee = M($r), q = C($r, "DIV", {
                class: !0
            });
            var Gl = w(q);
            se(x.$$.fragment, Gl), Gl.forEach(d), $r.forEach(d), be.forEach(d), this.h()
        },
        h() {
            u(l, "class", "bg-filter-1 w-full h-full absolute top-0 left-0 svelte-1vgghv3"), u(s, "class", "bg-filter-2 w-full h-full absolute top-0 left-0 svelte-1vgghv3"), u(r, "class", "bg w-full h-full absolute top-0 left-0"), u(r, "id", "bg-video-container"), u(p, "cx", "25"), u(p, "cy", "25"), u(p, "r", "24"), u(p, "transform", "rotate(-180 25 25)"), u(p, "stroke", "#697488"), u(p, "fill", "#697488"), u(p, "class", "svelte-1vgghv3"), u(h, "d", "M27 31L21 25L27 19"), u(h, "stroke", "white"), u(h, "class", "svelte-1vgghv3"), u(f, "width", "50"), u(f, "height", "50"), u(f, "viewBox", "0 0 50 50"), u(f, "fill", "#181e32"), u(f, "xmlns", "http://www.w3.org/2000/svg"), u(f, "class", "svelte-1vgghv3"), u(c, "class", "arrow-button left body font-semibold text-sm text-grey-8pm leading-none svelte-1vgghv3"), u(b, "cx", "25"), u(b, "cy", "25"), u(b, "r", "24"), u(b, "stroke", "#697488"), u(b, "fill", "#697488"), u(b, "class", "svelte-1vgghv3"), u(y, "d", "M23 19L29 25L23 31"), u(y, "stroke", "white"), u(y, "class", "svelte-1vgghv3"), u(m, "width", "50"), u(m, "height", "50"), u(m, "viewBox", "0 0 50 50"), u(m, "fill", "#181e32"), u(m, "xmlns", "http://www.w3.org/2000/svg"), u(m, "class", "svelte-1vgghv3"), u(I, "stroke", "#00E0CA"), u(I, "fill", "transparent"), u(I, "strokewidth", _l), u(I, "stroke-dasharray", i[15] + " " + i[15]), u(I, "style", D = `stroke-dashoffset: ${i[12]};`), u(I, "stroke-width", _l), u(I, "r", i[14]), u(I, "cx", ur), u(I, "cy", ur), u(I, "class", "svelte-1vgghv3"), Q(I, "animate", i[2] !== 0), u($, "class", "circle-animated svelte-1vgghv3"), u($, "height", ur * 2), u($, "width", ur * 2), u(_, "class", "arrow-button right body font-semibold text-sm text-grey-8pm leading-none svelte-1vgghv3"), u(z, "class", "slides-titles svelte-1vgghv3"), u(o, "class", "container svelte-1vgghv3"), u(B, "class", "cards-wrapper container flex justify-center svelte-1vgghv3"), u(R, "class", "mb-8"), u(X, "class", "text-grey-daylight svelte-1vgghv3"), u(X, "id", "iota-enables-new-possibilities"), u(O, "class", "text-center mx-auto md:max-w-xs"), u(q, "class", "mx-auto"), u(L, "class", "container static-content svelte-1vgghv3"), u(e, "class", "usecasesslider z-0 relative py-10 min-h-screen svelte-1vgghv3")
        },
        m(oe, be) {
            S(oe, e, be), g(e, r);
            for (let ae = 0; ae < ce.length; ae += 1) ce[ae].m(r, null);
            g(r, t), g(r, l), g(r, n), g(r, s), g(e, a), g(e, o), g(o, c), g(c, f), g(f, p), g(f, h), g(o, v), g(o, _), g(_, m), g(m, b), g(m, y), g(_, k), g(_, $), g($, I), g(o, T), g(o, z);
            for (let ae = 0; ae < ge.length; ae += 1) ge[ae].m(z, null);
            g(e, A), g(e, B);
            for (let ae = 0; ae < me.length; ae += 1) me[ae].m(B, null);
            g(e, V), g(e, L), g(L, O), g(O, R), ie(j, R, null), g(O, G), g(O, X), g(X, Y), g(L, ee), g(L, q), ie(x, q, null), i[28](e), re = !0, te || (H = [pe(c, "click", i[25]), pe(_, "click", i[26])], te = !0)
        },
        p(oe, be) {
            if (be[0] & 3) {
                K = oe[0];
                let ae;
                for (ae = 0; ae < K.length; ae += 1) {
                    const qe = Cn(oe, K, ae);
                    ce[ae] ? ce[ae].p(qe, be) : (ce[ae] = $n(qe), ce[ae].c(), ce[ae].m(r, t))
                }
                for (; ae < ce.length; ae += 1) ce[ae].d(1);
                ce.length = K.length
            }
            if ((!re || be[0] & 4096 && D !== (D = `stroke-dashoffset: ${oe[12]};`)) && u(I, "style", D), be[0] & 4 && Q(I, "animate", oe[2] !== 0), be[0] & 919931) {
                ye = oe[0];
                let ae;
                for (ae = 0; ae < ye.length; ae += 1) {
                    const qe = En(oe, ye, ae);
                    ge[ae] ? ge[ae].p(qe, be) : (ge[ae] = In(qe), ge[ae].c(), ge[ae].m(z, null))
                }
                for (; ae < ge.length; ae += 1) ge[ae].d(1);
                ge.length = ye.length
            }
            if (be[0] & 3) {
                Te = oe[0];
                let ae;
                for (ae = 0; ae < Te.length; ae += 1) {
                    const qe = kn(oe, Te, ae);
                    me[ae] ? (me[ae].p(qe, be), N(me[ae], 1)) : (me[ae] = Tn(qe), me[ae].c(), N(me[ae], 1), me[ae].m(B, null))
                }
                for (ke(), ae = Te.length; ae < me.length; ae += 1) st(ae);
                we()
            }
        },
        i(oe) {
            if (!re) {
                for (let be = 0; be < Te.length; be += 1) N(me[be]);
                N(j.$$.fragment, oe), N(x.$$.fragment, oe), re = !0
            }
        },
        o(oe) {
            me = me.filter(Boolean);
            for (let be = 0; be < me.length; be += 1) F(me[be]);
            F(j.$$.fragment, oe), F(x.$$.fragment, oe), re = !1
        },
        d(oe) {
            oe && d(e), De(ce, oe), De(ge, oe), De(me, oe), ne(j), ne(x), i[28](null), te = !1, nt(H)
        }
    }
}
const ur = 25,
    _l = 1,
    Ys = 3;

function s_(i, e, r) {
    let t, l, n, s, a, o, c, {
            props: f
        } = e,
        {
            slides: p
        } = f,
        h, v, _ = -1,
        m = -1,
        b, y, k, $;
    const I = ur - _l,
        D = I * 2 * Math.PI;
    let T = 0,
        z = !1,
        A = 0,
        B = !1,
        V = !1,
        L = () => null;
    p = p.map(H => {
        const {
            title: K,
            heroImage: ce,
            heroVideos: ye,
            link: ge
        } = H.fields, Te = H.fields.cards.map(me => ({
            title: me.fields.title,
            body: me.fields.body,
            linkUrl: me.fields.linkUrl,
            iconUrl: me.fields.image && me.fields.image.fields.file.url ? me.fields.image.fields.file.url : null
        }));
        return {
            title: K,
            heroImage: ce,
            videos: ye.map(me => me.fields.file),
            cards: Te,
            link: ge
        }
    }), He(async () => {
        k = kl(), r(13, b = document.querySelectorAll(".usecasesslider video"));

        function H(ge, Te) {
            ge[0].isIntersecting ? O(o) : ge[0].isIntersecting || (b[_] && b[_].pause(), clearInterval(y))
        }
        k ? ($ = new IntersectionObserver(H, {
            root: null,
            rootMargin: "0px",
            threshold: .25
        }), $.observe(h)) : O(o), v = (await Fn(() => import("./hammer-3991930d.js").then(function (ge) {
            return ge.h
        }), [])).default;
        const ce = new v(h);
        ce.on("swipeleft", ge => {
            O(o)
        }), ce.on("swiperight", ge => {
            O(c)
        });
        const ye = () => {
            r(21, z = window.innerWidth < 1064)
        };
        r(21, z = window.innerWidth < 1064), window.addEventListener("resize", ye), L = () => window.removeEventListener("resize", ye)
    });
    const O = H => {
            var K = b[H];
            if (K.classList.contains("lazy")) {
                for (var ce in K.children) {
                    var ye = K.children[ce];
                    typeof ye.tagName == "string" && ye.tagName === "SOURCE" && (ye.src = ye.dataset.src)
                }
                K.load(), K.classList.remove("lazy")
            }
            j(), r(8, m = _), r(1, _ = H), y && clearInterval(y), r(3, A = 0), r(2, T = 0), r(23, V = !1), r(22, B = !1), setTimeout(function () {
                b[m] && b[m].pause(), r(2, T = 100), R()
            }, 100), setTimeout(() => r(22, B = !0), 1e3), r(13, b[_].currentTime = 0, b), b[_].play(), y = setInterval(() => O(o), 1e4)
        },
        R = () => {
            setTimeout(() => {
                document.querySelectorAll(".usecasesslider .active .element-from-blur").forEach(H => {
                    H.classList.add("element-from-blur-animate")
                })
            }, 5)
        },
        j = () => {
            document.querySelectorAll(".usecasesslider .active .element-from-blur").forEach(H => {
                H.classList.remove("element-from-blur-animate")
            })
        },
        G = H => {
            if (H === _) return window.location.href = p[H].link;
            O(H)
        },
        X = () => {
            V || r(23, V = !0)
        },
        Y = () => {
            r(23, V = !1)
        };
    bl(() => {
        clearInterval(y), L(), $ && $.unobserve(h)
    });

    function ee(H) {
        na.call(this, i, H)
    }
    const q = () => {
            O(c)
        },
        x = () => {
            O(o)
        },
        re = H => G(H);

    function te(H) {
        Ee[H ? "unshift" : "push"](() => {
            h = H, r(7, h)
        })
    }
    return i.$$set = H => {
        "props" in H && r(20, f = H.props)
    }, i.$$.update = () => {
        i.$$.dirty[0] & 2097152 && r(6, t = z ? 80 : 90), i.$$.dirty[0] & 64 && r(5, l = t - Ys / 2), i.$$.dirty[0] & 32 && r(4, n = l * 2 * Math.PI), i.$$.dirty[0] & 12582912 && r(3, A = B && V ? 100 : 0), i.$$.dirty[0] & 4 && r(12, s = D - T / 100 * D), i.$$.dirty[0] & 24 && r(11, a = n - A / 100 * n), i.$$.dirty[0] & 3 && r(9, o = _ === p.length - 1 ? 0 : _ + 1), i.$$.dirty[0] & 3 && r(10, c = _ === 0 ? p.length - 1 : _ - 1)
    }, [p, _, T, A, n, l, t, h, m, o, c, a, s, b, I, D, O, G, X, Y, f, z, B, V, ee, q, x, re, te]
}
class a_ extends ue {
    constructor(e) {
        super(), fe(this, e, s_, n_, de, {
            props: 20
        }, null, [-1, -1])
    }
}

function Sn(i, e, r) {
    const t = i.slice();
    return t[5] = e[r], t
}

function o_(i) {
    let e, r, t, l, n, s, a, o, c, f;
    return {
        c() {
            e = E("div"), r = E("div"), t = E("div"), l = P(), n = E("div"), s = E("div"), a = P(), o = E("div"), c = P(), f = E("div"), this.h()
        },
        l(p) {
            e = C(p, "DIV", {
                class: !0
            });
            var h = w(e);
            r = C(h, "DIV", {
                class: !0
            });
            var v = w(r);
            t = C(v, "DIV", {
                class: !0
            }), w(t).forEach(d), l = M(v), n = C(v, "DIV", {
                class: !0
            });
            var _ = w(n);
            s = C(_, "DIV", {
                class: !0
            }), w(s).forEach(d), a = M(_), o = C(_, "DIV", {
                class: !0
            }), w(o).forEach(d), _.forEach(d), c = M(v), f = C(v, "DIV", {
                class: !0
            }), w(f).forEach(d), v.forEach(d), h.forEach(d), this.h()
        },
        h() {
            u(t, "class", "placeholder-body bg-gray-200 block mx-auto my-4 w-full svelte-12458bo"), u(s, "class", "placeholder-circle rounded-full bg-gray-200 block mx-2 w-full svelte-12458bo"), u(o, "class", "placeholder-name bg-gray-200 block mx-2 rounded-sm w-full svelte-12458bo"), u(n, "class", "flex items-center justify-center w-full svelte-12458bo"), u(f, "class", "flex flex-col justify-center ml-4 rounded-sm svelte-12458bo"), u(r, "class", "placeholder flex flex-col items-center justify-center p-12 rounded-lg bg-white w-full svelte-12458bo"), u(e, "class", "swiper-slide svelte-12458bo")
        },
        m(p, h) {
            S(p, e, h), g(e, r), g(r, t), g(r, l), g(r, n), g(n, s), g(n, a), g(n, o), g(r, c), g(r, f)
        },
        p: U,
        i: U,
        o: U,
        d(p) {
            p && d(e)
        }
    }
}

function c_(i) {
    let e, r, t = i[0],
        l = [];
    for (let s = 0; s < t.length; s += 1) l[s] = Vn(Sn(i, t, s));
    const n = s => F(l[s], 1, 1, () => {
        l[s] = null
    });
    return {
        c() {
            for (let s = 0; s < l.length; s += 1) l[s].c();
            e = J()
        },
        l(s) {
            for (let a = 0; a < l.length; a += 1) l[a].l(s);
            e = J()
        },
        m(s, a) {
            for (let o = 0; o < l.length; o += 1) l[o].m(s, a);
            S(s, e, a), r = !0
        },
        p(s, a) {
            if (a & 1) {
                t = s[0];
                let o;
                for (o = 0; o < t.length; o += 1) {
                    const c = Sn(s, t, o);
                    l[o] ? (l[o].p(c, a), N(l[o], 1)) : (l[o] = Vn(c), l[o].c(), N(l[o], 1), l[o].m(e.parentNode, e))
                }
                for (ke(), o = t.length; o < l.length; o += 1) n(o);
                we()
            }
        },
        i(s) {
            if (!r) {
                for (let a = 0; a < t.length; a += 1) N(l[a]);
                r = !0
            }
        },
        o(s) {
            l = l.filter(Boolean);
            for (let a = 0; a < l.length; a += 1) F(l[a]);
            r = !1
        },
        d(s) {
            De(l, s), s && d(e)
        }
    }
}

function Vn(i) {
    let e, r, t, l;
    return r = new Yh({
        props: {
            photo: i[5].photo,
            name: i[5].name,
            jobTitle: i[5].jobTitle,
            body: i[5].body,
            link: i[5].welcomePostLink
        }
    }), {
        c() {
            e = E("div"), le(r.$$.fragment), t = P(), this.h()
        },
        l(n) {
            e = C(n, "DIV", {
                class: !0
            });
            var s = w(e);
            se(r.$$.fragment, s), t = M(s), s.forEach(d), this.h()
        },
        h() {
            u(e, "class", "swiper-slide relative svelte-12458bo")
        },
        m(n, s) {
            S(n, e, s), ie(r, e, null), g(e, t), l = !0
        },
        p(n, s) {
            const a = {};
            s & 1 && (a.photo = n[5].photo), s & 1 && (a.name = n[5].name), s & 1 && (a.jobTitle = n[5].jobTitle), s & 1 && (a.body = n[5].body), s & 1 && (a.link = n[5].welcomePostLink), r.$set(a)
        },
        i(n) {
            l || (N(r.$$.fragment, n), l = !0)
        },
        o(n) {
            F(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && d(e), ne(r)
        }
    }
}

function u_(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _;
    const m = [c_, o_],
        b = [];

    function y(k, $) {
        return k[0] ? 0 : 1
    }
    return s = y(i), a = b[s] = m[s](i), {
        c() {
            e = E("link"), r = P(), t = E("div"), l = E("div"), n = E("div"), a.c(), o = P(), c = E("div"), f = P(), p = E("button"), h = P(), v = E("button"), this.h()
        },
        l(k) {
            e = C(k, "LINK", {
                rel: !0,
                href: !0
            }), r = M(k), t = C(k, "DIV", {
                class: !0
            });
            var $ = w(t);
            l = C($, "DIV", {
                class: !0
            });
            var I = w(l);
            n = C(I, "DIV", {
                class: !0
            });
            var D = w(n);
            a.l(D), D.forEach(d), I.forEach(d), o = M($), c = C($, "DIV", {
                class: !0
            }), w(c).forEach(d), f = M($), p = C($, "BUTTON", {
                class: !0
            }), w(p).forEach(d), h = M($), v = C($, "BUTTON", {
                class: !0
            }), w(v).forEach(d), $.forEach(d), this.h()
        },
        h() {
            u(e, "rel", "stylesheet"), u(e, "href", "https://unpkg.com/swiper/swiper-bundle.min.css"), u(n, "class", "swiper-wrapper"), u(l, "class", "testimonials-slider md:flex md:justify-between overflow-hidden"), u(c, "class", "swiper-pagination svelte-12458bo"), u(p, "class", "swiper-arrow-prev svelte-12458bo"), u(v, "class", "swiper-arrow-next svelte-12458bo"), u(t, "class", "w-full fade-in-bottom mb-16")
        },
        m(k, $) {
            S(k, e, $), S(k, r, $), S(k, t, $), g(t, l), g(l, n), b[s].m(n, null), g(t, o), g(t, c), g(t, f), g(t, p), g(t, h), g(t, v), _ = !0
        },
        p(k, [$]) {
            let I = s;
            s = y(k), s === I ? b[s].p(k, $) : (ke(), F(b[I], 1, 1, () => {
                b[I] = null
            }), we(), a = b[s], a ? a.p(k, $) : (a = b[s] = m[s](k), a.c()), N(a, 1), a.m(n, null))
        },
        i(k) {
            _ || (N(a), _ = !0)
        },
        o(k) {
            F(a), _ = !1
        },
        d(k) {
            k && d(e), k && d(r), k && d(t), b[s].d()
        }
    }
}

function f_(i, e, r) {
    let {
        props: t
    } = e, l = t.authors.map(o => {
        let c = o.fields.photo;
        return {
            name: o.fields.name,
            photo: c && c.fields && c.fields.file ? c.fields.file.url : null,
            jobTitle: o.fields.jobTitle,
            body: o.fields.body,
            welcomePostLink: o.fields.welcomePostLink,
            displayName: ha(o.fields.name).trim()
        }
    }), n, s;
    const a = o => {
        let c = !1;
        return n.forEach(f => {
            c || (c = new RegExp(`^.*\\b${o.displayName}\\b.*$`).test(f) || new RegExp(`^.*\\b${f}\\b.*$`).test(o.displayName))
        }), c
    };
    return He(async () => {
        var o;
        n = await _a(!0, !1), n = (o = n == null ? void 0 : n.result) === null || o === void 0 ? void 0 : o.map(p => `${p.customTitle?p.customTitle+" ":""}${p.preferredName||p.firstName} ${p.lastName}`), r(0, s = await l.filter(p => a(p))), rl.use([Ma, Aa]), new rl(".testimonials-slider", {
            spaceBetween: 20,
            allowSlideNext: !0,
            allowSlidePrev: !0,
            autoHeight: !0,
            observer: !0,
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            },
            navigation: {
                nextEl: ".swiper-arrow-next",
                prevEl: ".swiper-arrow-prev"
            }
        })
    }), i.$$set = o => {
        "props" in o && r(1, t = o.props)
    }, [s, t]
}
class d_ extends ue {
    constructor(e) {
        super(), fe(this, e, f_, u_, de, {
            props: 1
        })
    }
}

function Pn(i, e, r) {
    const t = i.slice();
    return t[26] = e[r].title, t[27] = e[r].heroDescription, t[28] = e[r].heroImage, t[30] = r, t
}

function Mn(i, e, r) {
    const t = i.slice();
    return t[7] = e[r], t[30] = r, t
}

function An(i) {
    let e, r, t, l, n, s, a, o, c, f;
    return {
        c() {
            e = E("video"), r = E("source"), n = E("source"), o = W(`
            Your browser does not support video on HTML.`), this.h()
        },
        l(p) {
            e = C(p, "VIDEO", {
                id: !0,
                class: !0,
                poster: !0,
                preload: !0,
                height: !0,
                width: !0
            });
            var h = w(e);
            r = C(h, "SOURCE", {
                "data-src": !0,
                type: !0
            }), n = C(h, "SOURCE", {
                "data-src": !0,
                type: !0
            }), o = Z(h, `
            Your browser does not support video on HTML.`), h.forEach(d), this.h()
        },
        h() {
            u(r, "data-src", t = i[7][0].url), u(r, "type", l = i[7][0].contentType), u(n, "data-src", s = i[7][1].url), u(n, "type", a = i[7][1].contentType), u(e, "id", c = `heroparticlesvideo-${i[30]}`), u(e, "class", "lazy svelte-njtwo6"), u(e, "poster", f = i[8][i[30]] && i[8][i[30]].heroImage.fields.file.url), e.playsInline = !0, u(e, "preload", "metadata"), e.muted = !0, u(e, "height", "100%"), u(e, "width", "100%"), Q(e, "active", i[30] === i[0]), Q(e, "inactive", i[30] === i[3])
        },
        m(p, h) {
            S(p, e, h), g(e, r), g(e, n), g(e, o)
        },
        p(p, h) {
            h[0] & 1 && Q(e, "active", p[30] === p[0]), h[0] & 8 && Q(e, "inactive", p[30] === p[3])
        },
        d(p) {
            p && d(e)
        }
    }
}

function On(i) {
    let e, r, t, l, n = i[26].split(" ")[0] + "",
        s, a, o, c, f = i[26].split(" ")[1] + "",
        p, h, v, _, m, b, y, k, $;
    return y = new Ie({
        props: {
            props: {
                text: i[27]
            }
        }
    }), {
        c() {
            e = E("article"), r = E("div"), t = E("h1"), l = E("span"), s = W(n), a = P(), o = E("strong"), c = E("span"), p = W(f), h = P(), v = he("svg"), _ = he("circle"), m = P(), b = E("div"), le(y.$$.fragment), k = P(), this.h()
        },
        l(I) {
            e = C(I, "ARTICLE", {
                class: !0
            });
            var D = w(e);
            r = C(D, "DIV", {});
            var T = w(r);
            t = C(T, "H1", {
                class: !0
            });
            var z = w(t);
            l = C(z, "SPAN", {
                class: !0
            });
            var A = w(l);
            s = Z(A, n), A.forEach(d), a = M(z), o = C(z, "STRONG", {
                class: !0
            });
            var B = w(o);
            c = C(B, "SPAN", {
                class: !0
            });
            var V = w(c);
            p = Z(V, f), V.forEach(d), h = M(B), v = _e(B, "svg", {
                viewBox: !0,
                fill: !0,
                xmlns: !0,
                class: !0
            });
            var L = w(v);
            _ = _e(L, "circle", {
                cx: !0,
                cy: !0,
                r: !0,
                fill: !0
            }), w(_).forEach(d), L.forEach(d), B.forEach(d), z.forEach(d), m = M(T), b = C(T, "DIV", {
                class: !0
            });
            var O = w(b);
            se(y.$$.fragment, O), O.forEach(d), T.forEach(d), k = M(D), D.forEach(d), this.h()
        },
        h() {
            u(l, "class", "svelte-njtwo6"), u(c, "class", "svelte-njtwo6"), u(_, "cx", "50"), u(_, "cy", "50"), u(_, "r", "50"), u(_, "fill", "#00E0CA"), u(v, "viewBox", "0 0 100 100"), u(v, "fill", "none"), u(v, "xmlns", "http://www.w3.org/2000/svg"), u(v, "class", "svelte-njtwo6"), u(o, "class", "svelte-njtwo6"), u(t, "class", "letters-from-blur hero svelte-njtwo6"), u(b, "class", "richtext text-base leading-normal text-grey-4pm fade-in-right svelte-njtwo6"), Q(b, "fade-in-right-animate", i[30] === i[0]), Q(b, "fade-out-right-animate", i[30] !== i[0] && i[0] !== -1), u(e, "class", "svelte-njtwo6"), Q(e, "active", i[30] === i[0]), Q(e, "inactive", i[30] === i[3])
        },
        m(I, D) {
            S(I, e, D), g(e, r), g(r, t), g(t, l), g(l, s), g(t, a), g(t, o), g(o, c), g(c, p), g(o, h), g(o, v), g(v, _), g(r, m), g(r, b), ie(y, b, null), g(e, k), $ = !0
        },
        p(I, D) {
            D[0] & 1 && Q(b, "fade-in-right-animate", I[30] === I[0]), D[0] & 1 && Q(b, "fade-out-right-animate", I[30] !== I[0] && I[0] !== -1), D[0] & 1 && Q(e, "active", I[30] === I[0]), D[0] & 8 && Q(e, "inactive", I[30] === I[3])
        },
        i(I) {
            $ || (N(y.$$.fragment, I), $ = !0)
        },
        o(I) {
            F(y.$$.fragment, I), $ = !1
        },
        d(I) {
            I && d(e), ne(y)
        }
    }
}

function h_(i) {
    let e, r, t, l, n, s, a, o, c, f, p, h, v, _, m, b, y, k, $, I, D = i[9],
        T = [];
    for (let V = 0; V < D.length; V += 1) T[V] = An(Mn(i, D, V));
    let z = i[8],
        A = [];
    for (let V = 0; V < z.length; V += 1) A[V] = On(Pn(i, z, V));
    const B = V => F(A[V], 1, 1, () => {
        A[V] = null
    });
    return {
        c() {
            e = E("section");
            for (let V = 0; V < T.length; V += 1) T[V].c();
            r = P(), t = E("nav"), l = E("div"), n = he("svg"), s = he("circle"), a = he("path"), o = P(), c = E("div"), f = he("svg"), p = he("circle"), h = he("path"), v = P(), _ = he("svg"), m = he("circle"), y = P();
            for (let V = 0; V < A.length; V += 1) A[V].c();
            this.h()
        },
        l(V) {
            e = C(V, "SECTION", {
                class: !0
            });
            var L = w(e);
            for (let ee = 0; ee < T.length; ee += 1) T[ee].l(L);
            r = M(L), t = C(L, "NAV", {
                class: !0
            });
            var O = w(t);
            l = C(O, "DIV", {
                class: !0
            });
            var R = w(l);
            n = _e(R, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0,
                class: !0
            });
            var j = w(n);
            s = _e(j, "circle", {
                cx: !0,
                cy: !0,
                r: !0,
                transform: !0,
                stroke: !0,
                class: !0
            }), w(s).forEach(d), a = _e(j, "path", {
                d: !0,
                stroke: !0
            }), w(a).forEach(d), j.forEach(d), R.forEach(d), o = M(O), c = C(O, "DIV", {
                class: !0
            });
            var G = w(c);
            f = _e(G, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0,
                class: !0
            });
            var X = w(f);
            p = _e(X, "circle", {
                cx: !0,
                cy: !0,
                r: !0,
                stroke: !0,
                class: !0
            }), w(p).forEach(d), h = _e(X, "path", {
                d: !0,
                stroke: !0
            }), w(h).forEach(d), X.forEach(d), v = M(G), _ = _e(G, "svg", {
                class: !0,
                height: !0,
                width: !0
            });
            var Y = w(_);
            m = _e(Y, "circle", {
                stroke: !0,
                fill: !0,
                strokewidth: !0,
                "stroke-dasharray": !0,
                style: !0,
                "stroke-width": !0,
                r: !0,
                cx: !0,
                cy: !0,
                class: !0
            }), w(m).forEach(d), Y.forEach(d), G.forEach(d), O.forEach(d), y = M(L);
            for (let ee = 0; ee < A.length; ee += 1) A[ee].l(L);
            L.forEach(d), this.h()
        },
        h() {
            u(s, "cx", "25"), u(s, "cy", "25"), u(s, "r", "24"), u(s, "transform", "rotate(-180 25 25)"), u(s, "stroke", "#697488"), u(s, "class", "svelte-njtwo6"), u(a, "d", "M27 31L21 25L27 19"), u(a, "stroke", "white"), u(n, "width", "50"), u(n, "height", "50"), u(n, "viewBox", "0 0 50 50"), u(n, "fill", "#181e32"), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(n, "class", "svelte-njtwo6"), u(l, "class", "arrow-button left body font-semibold text-sm text-grey-8pm leading-none svelte-njtwo6"), u(p, "cx", "25"), u(p, "cy", "25"), u(p, "r", "24"), u(p, "stroke", "#697488"), u(p, "class", "svelte-njtwo6"), u(h, "d", "M23 19L29 25L23 31"), u(h, "stroke", "white"), u(f, "width", "50"), u(f, "height", "50"), u(f, "viewBox", "0 0 50 50"), u(f, "fill", "#181e32"), u(f, "xmlns", "http://www.w3.org/2000/svg"), u(f, "class", "svelte-njtwo6"), u(m, "stroke", "#00E0CA"), u(m, "fill", "transparent"), u(m, "strokewidth", pl), u(m, "stroke-dasharray", i[11] + " " + i[11]), u(m, "style", b = `stroke-dashoffset: ${i[6]};`), u(m, "stroke-width", pl), u(m, "r", i[10]), u(m, "cx", fr), u(m, "cy", fr), u(m, "class", "svelte-njtwo6"), Q(m, "animate", i[1] !== 0), u(_, "class", "circle-animated svelte-njtwo6"), u(_, "height", fr * 2), u(_, "width", fr * 2), u(c, "class", "arrow-button right body font-semibold text-sm text-grey-8pm leading-none svelte-njtwo6"), u(t, "class", "container svelte-njtwo6"), u(e, "class", "heroparticles z-0 relative svelte-njtwo6")
        },
        m(V, L) {
            S(V, e, L);
            for (let O = 0; O < T.length; O += 1) T[O].m(e, null);
            g(e, r), g(e, t), g(t, l), g(l, n), g(n, s), g(n, a), g(t, o), g(t, c), g(c, f), g(f, p), g(f, h), g(c, v), g(c, _), g(_, m), g(e, y);
            for (let O = 0; O < A.length; O += 1) A[O].m(e, null);
            i[16](e), k = !0, $ || (I = [pe(l, "click", i[14]), pe(c, "click", i[15])], $ = !0)
        },
        p(V, L) {
            if (L[0] & 777) {
                D = V[9];
                let O;
                for (O = 0; O < D.length; O += 1) {
                    const R = Mn(V, D, O);
                    T[O] ? T[O].p(R, L) : (T[O] = An(R), T[O].c(), T[O].m(e, r))
                }
                for (; O < T.length; O += 1) T[O].d(1);
                T.length = D.length
            }
            if ((!k || L[0] & 64 && b !== (b = `stroke-dashoffset: ${V[6]};`)) && u(m, "style", b), L[0] & 2 && Q(m, "animate", V[1] !== 0), L[0] & 265) {
                z = V[8];
                let O;
                for (O = 0; O < z.length; O += 1) {
                    const R = Pn(V, z, O);
                    A[O] ? (A[O].p(R, L), N(A[O], 1)) : (A[O] = On(R), A[O].c(), N(A[O], 1), A[O].m(e, null))
                }
                for (ke(), O = z.length; O < A.length; O += 1) B(O);
                we()
            }
        },
        i(V) {
            if (!k) {
                for (let L = 0; L < z.length; L += 1) N(A[L]);
                k = !0
            }
        },
        o(V) {
            A = A.filter(Boolean);
            for (let L = 0; L < A.length; L += 1) F(A[L]);
            k = !1
        },
        d(V) {
            V && d(e), De(T, V), De(A, V), i[16](null), $ = !1, nt(I)
        }
    }
}
const fr = 25,
    pl = 1;

function __(i, e, r) {
    let t, l, n, {
        props: s
    } = e;
    const {
        slides: a
    } = s;
    let o = a.map(R => R.fields);
    const c = o.map(R => R.heroVideos.map(j => j.fields.file));
    let f, p, h, v = -1,
        _ = -1,
        m, b, y;
    const k = fr - pl,
        $ = k * 2 * Math.PI;
    let I = 0,
        D = !1;
    const T = R => {
            var j = h[R];
            if (j.classList.contains("lazy")) {
                for (var G in j.children) {
                    var X = j.children[G];
                    typeof X.tagName == "string" && X.tagName === "SOURCE" && (X.src = X.dataset.src)
                }
                j.load(), j.classList.remove("lazy")
            }
            B(), r(3, _ = v), r(0, v = R), m && clearInterval(m), r(1, I = 0), setTimeout(function () {
                h[_] && h[_].pause(), r(1, I = 100), A()
            }, _ === -1 ? 100 : 1e3), r(7, h[v].currentTime = 0, h), h[v].play(), m = setInterval(z, 7e3)
        },
        z = () => T(l);
    He(async () => {
        b = kl(), await document.querySelectorAll(".hero.letters-from-blur").forEach(Y => {
            pa(Y)
        }), D = !0, r(7, h = document.querySelectorAll(".heroparticles video"));

        function j(Y, ee) {
            Y[0].isIntersecting ? D && T(l) : Y[0].isIntersecting || (h[v] && h[v].pause(), clearInterval(m))
        }
        b ? (y = await new IntersectionObserver(j, {
            root: null,
            rootMargin: "0px",
            threshold: .25
        }), setTimeout(() => {
            y.observe(f)
        }, 200)) : setTimeout(() => {
            T(l)
        }, 200), p = (await Fn(() => import("./hammer-3991930d.js").then(function (Y) {
            return Y.h
        }), [])).default;
        const X = new p(f);
        X.on("swipeleft", Y => {
            T(l)
        }), X.on("swiperight", Y => {
            T(n)
        })
    });
    const A = () => {
            setTimeout(() => {
                var R;
                document.querySelectorAll(".heroparticles .active .element-from-blur").forEach(j => {
                    j.classList.add("element-from-blur-animate")
                }), (R = document.querySelector(".heroparticles .active svg")) === null || R === void 0 || R.classList.add("circle-fade-in")
            }, 200)
        },
        B = () => {
            let R = document.querySelectorAll(".heroparticles .active .element-from-blur");
            R && R.forEach(G => {
                G.classList.remove("element-from-blur-animate")
            });
            let j = document.querySelector(".active svg");
            j && j.classList.remove("circle-fade-in")
        };
    bl(() => {
        clearInterval(m), y && y.unobserve(f)
    });
    const V = () => {
            T(n)
        },
        L = () => {
            T(l)
        };

    function O(R) {
        Ee[R ? "unshift" : "push"](() => {
            f = R, r(2, f)
        })
    }
    return i.$$set = R => {
        "props" in R && r(13, s = R.props)
    }, i.$$.update = () => {
        i.$$.dirty[0] & 2 && r(6, t = $ - I / 100 * $), i.$$.dirty[0] & 1 && r(5, l = v === o.length - 1 ? 0 : v + 1), i.$$.dirty[0] & 1 && r(4, n = v === 0 ? o.length - 1 : v - 1)
    }, [v, I, f, _, n, l, t, h, o, c, k, $, T, s, V, L, O]
}
class p_ extends ue {
    constructor(e) {
        super(), fe(this, e, __, h_, de, {
            props: 13
        }, null, [-1, -1])
    }
}
const [w_, E_] = ma({
    easing: sa,
    duration: i => Math.sqrt(i * 5e3),
    fallback(i, e) {
        const r = getComputedStyle(i),
            t = r.transform === "none" ? "" : r.transform;
        return {
            duration: 300,
            css: l => `
                transform: ${t};
                opacity: ${l}
            `
        }
    }
});
export {
    vt as B, sr as E, zc as J, Co as L, Ma as N, Kh as P, y_ as S, md as T, Mc as a, Ge as b, k_ as c, Us as d, Er as e, Sr as g, E_ as r
};