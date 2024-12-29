/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Lr = l(() => {
    "use strict";
    window.tram = (function (e) {
      function t(u, v) {
        var O = new q.Bare();
        return O.init(u, v);
      }
      function n(u) {
        return u.replace(/[A-Z]/g, function (v) {
          return "-" + v.toLowerCase();
        });
      }
      function r(u) {
        var v = parseInt(u.slice(1), 16),
          O = (v >> 16) & 255,
          L = (v >> 8) & 255,
          P = 255 & v;
        return [O, L, P];
      }
      function a(u, v, O) {
        return (
          "#" + ((1 << 24) | (u << 16) | (v << 8) | O).toString(16).slice(1)
        );
      }
      function i() {}
      function o(u, v) {
        f("Type warning: Expected: [" + u + "] Got: [" + typeof v + "] " + v);
      }
      function s(u, v, O) {
        f("Units do not match [" + u + "]: " + v + ", " + O);
      }
      function c(u, v, O) {
        if ((v !== void 0 && (O = v), u === void 0)) return O;
        var L = O;
        return (
          Se.test(u) || !Me.test(u)
            ? (L = parseInt(u, 10))
            : Me.test(u) && (L = 1e3 * parseFloat(u)),
          0 > L && (L = 0),
          L === L ? L : O
        );
      }
      function f(u) {
        Q.debug && window && window.console.warn(u);
      }
      function T(u) {
        for (var v = -1, O = u ? u.length : 0, L = []; ++v < O; ) {
          var P = u[v];
          P && L.push(P);
        }
        return L;
      }
      var y = (function (u, v, O) {
          function L(oe) {
            return typeof oe == "object";
          }
          function P(oe) {
            return typeof oe == "function";
          }
          function M() {}
          function J(oe, ee) {
            function k() {
              var Ae = new ce();
              return P(Ae.init) && Ae.init.apply(Ae, arguments), Ae;
            }
            function ce() {}
            ee === O && ((ee = oe), (oe = Object)), (k.Bare = ce);
            var ue,
              Ie = (M[u] = oe[u]),
              xe = (ce[u] = k[u] = new M());
            return (
              (xe.constructor = k),
              (k.mixin = function (Ae) {
                return (ce[u] = k[u] = J(k, Ae)[u]), k;
              }),
              (k.open = function (Ae) {
                if (
                  ((ue = {}),
                  P(Ae) ? (ue = Ae.call(k, xe, Ie, k, oe)) : L(Ae) && (ue = Ae),
                  L(ue))
                )
                  for (var zt in ue) v.call(ue, zt) && (xe[zt] = ue[zt]);
                return P(xe.init) || (xe.init = oe), k;
              }),
              k.open(ee)
            );
          }
          return J;
        })("prototype", {}.hasOwnProperty),
        p = {
          ease: [
            "ease",
            function (u, v, O, L) {
              var P = (u /= L) * u,
                M = P * u;
              return (
                v +
                O * (-2.75 * M * P + 11 * P * P + -15.5 * M + 8 * P + 0.25 * u)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (u, v, O, L) {
              var P = (u /= L) * u,
                M = P * u;
              return v + O * (-1 * M * P + 3 * P * P + -3 * M + 2 * P);
            },
          ],
          "ease-out": [
            "ease-out",
            function (u, v, O, L) {
              var P = (u /= L) * u,
                M = P * u;
              return (
                v +
                O * (0.3 * M * P + -1.6 * P * P + 2.2 * M + -1.8 * P + 1.9 * u)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (u, v, O, L) {
              var P = (u /= L) * u,
                M = P * u;
              return v + O * (2 * M * P + -5 * P * P + 2 * M + 2 * P);
            },
          ],
          linear: [
            "linear",
            function (u, v, O, L) {
              return (O * u) / L + v;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (u, v, O, L) {
              return O * (u /= L) * u + v;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (u, v, O, L) {
              return -O * (u /= L) * (u - 2) + v;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (u, v, O, L) {
              return (u /= L / 2) < 1
                ? (O / 2) * u * u + v
                : (-O / 2) * (--u * (u - 2) - 1) + v;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (u, v, O, L) {
              return O * (u /= L) * u * u + v;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (u, v, O, L) {
              return O * ((u = u / L - 1) * u * u + 1) + v;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (u, v, O, L) {
              return (u /= L / 2) < 1
                ? (O / 2) * u * u * u + v
                : (O / 2) * ((u -= 2) * u * u + 2) + v;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (u, v, O, L) {
              return O * (u /= L) * u * u * u + v;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (u, v, O, L) {
              return -O * ((u = u / L - 1) * u * u * u - 1) + v;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (u, v, O, L) {
              return (u /= L / 2) < 1
                ? (O / 2) * u * u * u * u + v
                : (-O / 2) * ((u -= 2) * u * u * u - 2) + v;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (u, v, O, L) {
              return O * (u /= L) * u * u * u * u + v;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (u, v, O, L) {
              return O * ((u = u / L - 1) * u * u * u * u + 1) + v;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (u, v, O, L) {
              return (u /= L / 2) < 1
                ? (O / 2) * u * u * u * u * u + v
                : (O / 2) * ((u -= 2) * u * u * u * u + 2) + v;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (u, v, O, L) {
              return -O * Math.cos((u / L) * (Math.PI / 2)) + O + v;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (u, v, O, L) {
              return O * Math.sin((u / L) * (Math.PI / 2)) + v;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (u, v, O, L) {
              return (-O / 2) * (Math.cos((Math.PI * u) / L) - 1) + v;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (u, v, O, L) {
              return u === 0 ? v : O * Math.pow(2, 10 * (u / L - 1)) + v;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (u, v, O, L) {
              return u === L
                ? v + O
                : O * (-Math.pow(2, (-10 * u) / L) + 1) + v;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (u, v, O, L) {
              return u === 0
                ? v
                : u === L
                ? v + O
                : (u /= L / 2) < 1
                ? (O / 2) * Math.pow(2, 10 * (u - 1)) + v
                : (O / 2) * (-Math.pow(2, -10 * --u) + 2) + v;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (u, v, O, L) {
              return -O * (Math.sqrt(1 - (u /= L) * u) - 1) + v;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (u, v, O, L) {
              return O * Math.sqrt(1 - (u = u / L - 1) * u) + v;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (u, v, O, L) {
              return (u /= L / 2) < 1
                ? (-O / 2) * (Math.sqrt(1 - u * u) - 1) + v
                : (O / 2) * (Math.sqrt(1 - (u -= 2) * u) + 1) + v;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (u, v, O, L, P) {
              return (
                P === void 0 && (P = 1.70158),
                O * (u /= L) * u * ((P + 1) * u - P) + v
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (u, v, O, L, P) {
              return (
                P === void 0 && (P = 1.70158),
                O * ((u = u / L - 1) * u * ((P + 1) * u + P) + 1) + v
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (u, v, O, L, P) {
              return (
                P === void 0 && (P = 1.70158),
                (u /= L / 2) < 1
                  ? (O / 2) * u * u * (((P *= 1.525) + 1) * u - P) + v
                  : (O / 2) *
                      ((u -= 2) * u * (((P *= 1.525) + 1) * u + P) + 2) +
                    v
              );
            },
          ],
        },
        h = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        _ = document,
        m = window,
        A = "bkwld-tram",
        b = /[\-\.0-9]/g,
        C = /[A-Z]/,
        R = "number",
        N = /^(rgb|#)/,
        x = /(em|cm|mm|in|pt|pc|px)$/,
        w = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        H = "unitless",
        z = /(all|none) 0s ease 0s/,
        K = /^(width|height)$/,
        te = " ",
        U = _.createElement("a"),
        S = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        Y = function (u) {
          if (u in U.style) return { dom: u, css: u };
          var v,
            O,
            L = "",
            P = u.split("-");
          for (v = 0; v < P.length; v++)
            L += P[v].charAt(0).toUpperCase() + P[v].slice(1);
          for (v = 0; v < S.length; v++)
            if (((O = S[v] + L), O in U.style))
              return { dom: O, css: F[v] + u };
        },
        W = (t.support = {
          bind: Function.prototype.bind,
          transform: Y("transform"),
          transition: Y("transition"),
          backface: Y("backface-visibility"),
          timing: Y("transition-timing-function"),
        });
      if (W.transition) {
        var ne = W.timing.dom;
        if (((U.style[ne] = p["ease-in-back"][0]), !U.style[ne]))
          for (var re in h) p[re][0] = h[re];
      }
      var le = (t.frame = (function () {
          var u =
            m.requestAnimationFrame ||
            m.webkitRequestAnimationFrame ||
            m.mozRequestAnimationFrame ||
            m.oRequestAnimationFrame ||
            m.msRequestAnimationFrame;
          return u && W.bind
            ? u.bind(m)
            : function (v) {
                m.setTimeout(v, 16);
              };
        })()),
        ve = (t.now = (function () {
          var u = m.performance,
            v = u && (u.now || u.webkitNow || u.msNow || u.mozNow);
          return v && W.bind
            ? v.bind(u)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        I = y(function (u) {
          function v(ie, fe) {
            var ye = T(("" + ie).split(te)),
              pe = ye[0];
            fe = fe || {};
            var Re = B[pe];
            if (!Re) return f("Unsupported property: " + pe);
            if (!fe.weak || !this.props[pe]) {
              var Ve = Re[0],
                Ce = this.props[pe];
              return (
                Ce || (Ce = this.props[pe] = new Ve.Bare()),
                Ce.init(this.$el, ye, Re, fe),
                Ce
              );
            }
          }
          function O(ie, fe, ye) {
            if (ie) {
              var pe = typeof ie;
              if (
                (fe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && fe)
              )
                return (
                  (this.timer = new ae({
                    duration: ie,
                    context: this,
                    complete: M,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && fe) {
                switch (ie) {
                  case "hide":
                    k.call(this);
                    break;
                  case "stop":
                    J.call(this);
                    break;
                  case "redraw":
                    ce.call(this);
                    break;
                  default:
                    v.call(this, ie, ye && ye[1]);
                }
                return M.call(this);
              }
              if (pe == "function") return void ie.call(this, this);
              if (pe == "object") {
                var Re = 0;
                xe.call(
                  this,
                  ie,
                  function (me, gE) {
                    me.span > Re && (Re = me.span), me.stop(), me.animate(gE);
                  },
                  function (me) {
                    "wait" in me && (Re = c(me.wait, 0));
                  }
                ),
                  Ie.call(this),
                  Re > 0 &&
                    ((this.timer = new ae({ duration: Re, context: this })),
                    (this.active = !0),
                    fe && (this.timer.complete = M));
                var Ve = this,
                  Ce = !1,
                  In = {};
                le(function () {
                  xe.call(Ve, ie, function (me) {
                    me.active && ((Ce = !0), (In[me.name] = me.nextStyle));
                  }),
                    Ce && Ve.$el.css(In);
                });
              }
            }
          }
          function L(ie) {
            (ie = c(ie, 0)),
              this.active
                ? this.queue.push({ options: ie })
                : ((this.timer = new ae({
                    duration: ie,
                    context: this,
                    complete: M,
                  })),
                  (this.active = !0));
          }
          function P(ie) {
            return this.active
              ? (this.queue.push({ options: ie, args: arguments }),
                void (this.timer.complete = M))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function M() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ie = this.queue.shift();
              O.call(this, ie.options, !0, ie.args);
            }
          }
          function J(ie) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var fe;
            typeof ie == "string"
              ? ((fe = {}), (fe[ie] = 1))
              : (fe = typeof ie == "object" && ie != null ? ie : this.props),
              xe.call(this, fe, Ae),
              Ie.call(this);
          }
          function oe(ie) {
            J.call(this, ie), xe.call(this, ie, zt, dE);
          }
          function ee(ie) {
            typeof ie != "string" && (ie = "block"),
              (this.el.style.display = ie);
          }
          function k() {
            J.call(this), (this.el.style.display = "none");
          }
          function ce() {
            this.el.offsetHeight;
          }
          function ue() {
            J.call(this), e.removeData(this.el, A), (this.$el = this.el = null);
          }
          function Ie() {
            var ie,
              fe,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ie in this.props)
              (fe = this.props[ie]), fe.active && ye.push(fe.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[W.transition.dom] = ye));
          }
          function xe(ie, fe, ye) {
            var pe,
              Re,
              Ve,
              Ce,
              In = fe !== Ae,
              me = {};
            for (pe in ie)
              (Ve = ie[pe]),
                pe in de
                  ? (me.transform || (me.transform = {}),
                    (me.transform[pe] = Ve))
                  : (C.test(pe) && (pe = n(pe)),
                    pe in B ? (me[pe] = Ve) : (Ce || (Ce = {}), (Ce[pe] = Ve)));
            for (pe in me) {
              if (((Ve = me[pe]), (Re = this.props[pe]), !Re)) {
                if (!In) continue;
                Re = v.call(this, pe);
              }
              fe.call(this, Re, Ve);
            }
            ye && Ce && ye.call(this, Ce);
          }
          function Ae(ie) {
            ie.stop();
          }
          function zt(ie, fe) {
            ie.set(fe);
          }
          function dE(ie) {
            this.$el.css(ie);
          }
          function qe(ie, fe) {
            u[ie] = function () {
              return this.children
                ? pE.call(this, fe, arguments)
                : (this.el && fe.apply(this, arguments), this);
            };
          }
          function pE(ie, fe) {
            var ye,
              pe = this.children.length;
            for (ye = 0; pe > ye; ye++) ie.apply(this.children[ye], fe);
            return this;
          }
          (u.init = function (ie) {
            if (
              ((this.$el = e(ie)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              Q.keepInherited && !Q.fallback)
            ) {
              var fe = D(this.el, "transition");
              fe && !z.test(fe) && (this.upstream = fe);
            }
            W.backface &&
              Q.hideBackface &&
              d(this.el, W.backface.css, "hidden");
          }),
            qe("add", v),
            qe("start", O),
            qe("wait", L),
            qe("then", P),
            qe("next", M),
            qe("stop", J),
            qe("set", oe),
            qe("show", ee),
            qe("hide", k),
            qe("redraw", ce),
            qe("destroy", ue);
        }),
        q = y(I, function (u) {
          function v(O, L) {
            var P = e.data(O, A) || e.data(O, A, new I.Bare());
            return P.el || P.init(O), L ? P.start(L) : P;
          }
          u.init = function (O, L) {
            var P = e(O);
            if (!P.length) return this;
            if (P.length === 1) return v(P[0], L);
            var M = [];
            return (
              P.each(function (J, oe) {
                M.push(v(oe, L));
              }),
              (this.children = M),
              this
            );
          };
        }),
        g = y(function (u) {
          function v() {
            var M = this.get();
            this.update("auto");
            var J = this.get();
            return this.update(M), J;
          }
          function O(M, J, oe) {
            return J !== void 0 && (oe = J), M in p ? M : oe;
          }
          function L(M) {
            var J = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(M);
            return (J ? a(J[1], J[2], J[3]) : M).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var P = { duration: 500, ease: "ease", delay: 0 };
          (u.init = function (M, J, oe, ee) {
            (this.$el = M), (this.el = M[0]);
            var k = J[0];
            oe[2] && (k = oe[2]),
              j[k] && (k = j[k]),
              (this.name = k),
              (this.type = oe[1]),
              (this.duration = c(J[1], this.duration, P.duration)),
              (this.ease = O(J[2], this.ease, P.ease)),
              (this.delay = c(J[3], this.delay, P.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = K.test(this.name)),
              (this.unit = ee.unit || this.unit || Q.defaultUnit),
              (this.angle = ee.angle || this.angle || Q.defaultAngle),
              Q.fallback || ee.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    te +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? te + p[this.ease][0] : "") +
                    (this.delay ? te + this.delay + "ms" : "")));
          }),
            (u.set = function (M) {
              (M = this.convert(M, this.type)), this.update(M), this.redraw();
            }),
            (u.transition = function (M) {
              (this.active = !0),
                (M = this.convert(M, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  M == "auto" && (M = v.call(this))),
                (this.nextStyle = M);
            }),
            (u.fallback = function (M) {
              var J =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (M = this.convert(M, this.type)),
                this.auto &&
                  (J == "auto" && (J = this.convert(this.get(), this.type)),
                  M == "auto" && (M = v.call(this))),
                (this.tween = new Z({
                  from: J,
                  to: M,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (u.get = function () {
              return D(this.el, this.name);
            }),
            (u.update = function (M) {
              d(this.el, this.name, M);
            }),
            (u.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                d(this.el, this.name, this.get()));
              var M = this.tween;
              M && M.context && M.destroy();
            }),
            (u.convert = function (M, J) {
              if (M == "auto" && this.auto) return M;
              var oe,
                ee = typeof M == "number",
                k = typeof M == "string";
              switch (J) {
                case R:
                  if (ee) return M;
                  if (k && M.replace(b, "") === "") return +M;
                  oe = "number(unitless)";
                  break;
                case N:
                  if (k) {
                    if (M === "" && this.original) return this.original;
                    if (J.test(M))
                      return M.charAt(0) == "#" && M.length == 7 ? M : L(M);
                  }
                  oe = "hex or rgb string";
                  break;
                case x:
                  if (ee) return M + this.unit;
                  if (k && J.test(M)) return M;
                  oe = "number(px) or string(unit)";
                  break;
                case w:
                  if (ee) return M + this.unit;
                  if (k && J.test(M)) return M;
                  oe = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (ee) return M + this.angle;
                  if (k && J.test(M)) return M;
                  oe = "number(deg) or string(angle)";
                  break;
                case H:
                  if (ee || (k && w.test(M))) return M;
                  oe = "number(unitless) or string(unit or %)";
              }
              return o(oe, M), M;
            }),
            (u.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        E = y(g, function (u, v) {
          u.init = function () {
            v.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), N));
          };
        }),
        G = y(g, function (u, v) {
          (u.init = function () {
            v.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (u.get = function () {
              return this.$el[this.name]();
            }),
            (u.update = function (O) {
              this.$el[this.name](O);
            });
        }),
        V = y(g, function (u, v) {
          function O(L, P) {
            var M, J, oe, ee, k;
            for (M in L)
              (ee = de[M]),
                (oe = ee[0]),
                (J = ee[1] || M),
                (k = this.convert(L[M], oe)),
                P.call(this, J, k, oe);
          }
          (u.init = function () {
            v.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  Q.perspective &&
                  ((this.current.perspective = Q.perspective),
                  d(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (u.set = function (L) {
              O.call(this, L, function (P, M) {
                this.current[P] = M;
              }),
                d(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (u.transition = function (L) {
              var P = this.values(L);
              this.tween = new se({
                current: this.current,
                values: P,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var M,
                J = {};
              for (M in this.current) J[M] = M in P ? P[M] : this.current[M];
              (this.active = !0), (this.nextStyle = this.style(J));
            }),
            (u.fallback = function (L) {
              var P = this.values(L);
              this.tween = new se({
                current: this.current,
                values: P,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (u.update = function () {
              d(this.el, this.name, this.style(this.current));
            }),
            (u.style = function (L) {
              var P,
                M = "";
              for (P in L) M += P + "(" + L[P] + ") ";
              return M;
            }),
            (u.values = function (L) {
              var P,
                M = {};
              return (
                O.call(this, L, function (J, oe, ee) {
                  (M[J] = oe),
                    this.current[J] === void 0 &&
                      ((P = 0),
                      ~J.indexOf("scale") && (P = 1),
                      (this.current[J] = this.convert(P, ee)));
                }),
                M
              );
            });
        }),
        Z = y(function (u) {
          function v(k) {
            oe.push(k) === 1 && le(O);
          }
          function O() {
            var k,
              ce,
              ue,
              Ie = oe.length;
            if (Ie)
              for (le(O), ce = ve(), k = Ie; k--; )
                (ue = oe[k]), ue && ue.render(ce);
          }
          function L(k) {
            var ce,
              ue = e.inArray(k, oe);
            ue >= 0 &&
              ((ce = oe.slice(ue + 1)),
              (oe.length = ue),
              ce.length && (oe = oe.concat(ce)));
          }
          function P(k) {
            return Math.round(k * ee) / ee;
          }
          function M(k, ce, ue) {
            return a(
              k[0] + ue * (ce[0] - k[0]),
              k[1] + ue * (ce[1] - k[1]),
              k[2] + ue * (ce[2] - k[2])
            );
          }
          var J = { ease: p.ease[1], from: 0, to: 1 };
          (u.init = function (k) {
            (this.duration = k.duration || 0), (this.delay = k.delay || 0);
            var ce = k.ease || J.ease;
            p[ce] && (ce = p[ce][1]),
              typeof ce != "function" && (ce = J.ease),
              (this.ease = ce),
              (this.update = k.update || i),
              (this.complete = k.complete || i),
              (this.context = k.context || this),
              (this.name = k.name);
            var ue = k.from,
              Ie = k.to;
            ue === void 0 && (ue = J.from),
              Ie === void 0 && (Ie = J.to),
              (this.unit = k.unit || ""),
              typeof ue == "number" && typeof Ie == "number"
                ? ((this.begin = ue), (this.change = Ie - ue))
                : this.format(Ie, ue),
              (this.value = this.begin + this.unit),
              (this.start = ve()),
              k.autoplay !== !1 && this.play();
          }),
            (u.play = function () {
              this.active ||
                (this.start || (this.start = ve()),
                (this.active = !0),
                v(this));
            }),
            (u.stop = function () {
              this.active && ((this.active = !1), L(this));
            }),
            (u.render = function (k) {
              var ce,
                ue = k - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var Ie = this.ease(ue, 0, 1, this.duration);
                return (
                  (ce = this.startRGB
                    ? M(this.startRGB, this.endRGB, Ie)
                    : P(this.begin + Ie * this.change)),
                  (this.value = ce + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ce = this.endHex || this.begin + this.change),
                (this.value = ce + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (u.format = function (k, ce) {
              if (((ce += ""), (k += ""), k.charAt(0) == "#"))
                return (
                  (this.startRGB = r(ce)),
                  (this.endRGB = r(k)),
                  (this.endHex = k),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = ce.replace(b, ""),
                  Ie = k.replace(b, "");
                ue !== Ie && s("tween", ce, k), (this.unit = ue);
              }
              (ce = parseFloat(ce)),
                (k = parseFloat(k)),
                (this.begin = this.value = ce),
                (this.change = k - ce);
            }),
            (u.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var oe = [],
            ee = 1e3;
        }),
        ae = y(Z, function (u) {
          (u.init = function (v) {
            (this.duration = v.duration || 0),
              (this.complete = v.complete || i),
              (this.context = v.context),
              this.play();
          }),
            (u.render = function (v) {
              var O = v - this.start;
              O < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        se = y(Z, function (u, v) {
          (u.init = function (O) {
            (this.context = O.context),
              (this.update = O.update),
              (this.tweens = []),
              (this.current = O.current);
            var L, P;
            for (L in O.values)
              (P = O.values[L]),
                this.current[L] !== P &&
                  this.tweens.push(
                    new Z({
                      name: L,
                      from: this.current[L],
                      to: P,
                      duration: O.duration,
                      delay: O.delay,
                      ease: O.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (u.render = function (O) {
              var L,
                P,
                M = this.tweens.length,
                J = !1;
              for (L = M; L--; )
                (P = this.tweens[L]),
                  P.context &&
                    (P.render(O), (this.current[P.name] = P.value), (J = !0));
              return J
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (u.destroy = function () {
              if ((v.destroy.call(this), this.tweens)) {
                var O,
                  L = this.tweens.length;
                for (O = L; O--; ) this.tweens[O].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        Q = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !W.transition,
          agentTests: [],
        });
      (t.fallback = function (u) {
        if (!W.transition) return (Q.fallback = !0);
        Q.agentTests.push("(" + u + ")");
        var v = new RegExp(Q.agentTests.join("|"), "i");
        Q.fallback = v.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (u) {
          return new Z(u);
        }),
        (t.delay = function (u, v, O) {
          return new ae({ complete: v, duration: u, context: O });
        }),
        (e.fn.tram = function (u) {
          return t.call(null, this, u);
        });
      var d = e.style,
        D = e.css,
        j = { transform: W.transform && W.transform.css },
        B = {
          color: [E, N],
          background: [E, N, "background-color"],
          "outline-color": [E, N],
          "border-color": [E, N],
          "border-top-color": [E, N],
          "border-right-color": [E, N],
          "border-bottom-color": [E, N],
          "border-left-color": [E, N],
          "border-width": [g, x],
          "border-top-width": [g, x],
          "border-right-width": [g, x],
          "border-bottom-width": [g, x],
          "border-left-width": [g, x],
          "border-spacing": [g, x],
          "letter-spacing": [g, x],
          margin: [g, x],
          "margin-top": [g, x],
          "margin-right": [g, x],
          "margin-bottom": [g, x],
          "margin-left": [g, x],
          padding: [g, x],
          "padding-top": [g, x],
          "padding-right": [g, x],
          "padding-bottom": [g, x],
          "padding-left": [g, x],
          "outline-width": [g, x],
          opacity: [g, R],
          top: [g, w],
          right: [g, w],
          bottom: [g, w],
          left: [g, w],
          "font-size": [g, w],
          "text-indent": [g, w],
          "word-spacing": [g, w],
          width: [g, w],
          "min-width": [g, w],
          "max-width": [g, w],
          height: [g, w],
          "min-height": [g, w],
          "max-height": [g, w],
          "line-height": [g, H],
          "scroll-top": [G, R, "scrollTop"],
          "scroll-left": [G, R, "scrollLeft"],
        },
        de = {};
      W.transform &&
        ((B.transform = [V]),
        (de = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [R],
          scaleX: [R],
          scaleY: [R],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        W.transform &&
          W.backface &&
          ((de.z = [w, "translateZ"]),
          (de.rotateZ = [X]),
          (de.scaleZ = [R]),
          (de.perspective = [x]));
      var Se = /ms/,
        Me = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ja = l((U3, Za) => {
    "use strict";
    var EE = window.$,
      yE = Lr() && EE.tram;
    Za.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        a = Function.prototype,
        i = n.push,
        o = n.slice,
        s = n.concat,
        c = r.toString,
        f = r.hasOwnProperty,
        T = n.forEach,
        y = n.map,
        p = n.reduce,
        h = n.reduceRight,
        _ = n.filter,
        m = n.every,
        A = n.some,
        b = n.indexOf,
        C = n.lastIndexOf,
        R = Array.isArray,
        N = Object.keys,
        x = a.bind,
        w =
          (e.each =
          e.forEach =
            function (S, F, Y) {
              if (S == null) return S;
              if (T && S.forEach === T) S.forEach(F, Y);
              else if (S.length === +S.length) {
                for (var W = 0, ne = S.length; W < ne; W++)
                  if (F.call(Y, S[W], W, S) === t) return;
              } else
                for (var re = e.keys(S), W = 0, ne = re.length; W < ne; W++)
                  if (F.call(Y, S[re[W]], re[W], S) === t) return;
              return S;
            });
      (e.map = e.collect =
        function (S, F, Y) {
          var W = [];
          return S == null
            ? W
            : y && S.map === y
            ? S.map(F, Y)
            : (w(S, function (ne, re, le) {
                W.push(F.call(Y, ne, re, le));
              }),
              W);
        }),
        (e.find = e.detect =
          function (S, F, Y) {
            var W;
            return (
              X(S, function (ne, re, le) {
                if (F.call(Y, ne, re, le)) return (W = ne), !0;
              }),
              W
            );
          }),
        (e.filter = e.select =
          function (S, F, Y) {
            var W = [];
            return S == null
              ? W
              : _ && S.filter === _
              ? S.filter(F, Y)
              : (w(S, function (ne, re, le) {
                  F.call(Y, ne, re, le) && W.push(ne);
                }),
                W);
          });
      var X =
        (e.some =
        e.any =
          function (S, F, Y) {
            F || (F = e.identity);
            var W = !1;
            return S == null
              ? W
              : A && S.some === A
              ? S.some(F, Y)
              : (w(S, function (ne, re, le) {
                  if (W || (W = F.call(Y, ne, re, le))) return t;
                }),
                !!W);
          });
      (e.contains = e.include =
        function (S, F) {
          return S == null
            ? !1
            : b && S.indexOf === b
            ? S.indexOf(F) != -1
            : X(S, function (Y) {
                return Y === F;
              });
        }),
        (e.delay = function (S, F) {
          var Y = o.call(arguments, 2);
          return setTimeout(function () {
            return S.apply(null, Y);
          }, F);
        }),
        (e.defer = function (S) {
          return e.delay.apply(e, [S, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (S) {
          var F, Y, W;
          return function () {
            F ||
              ((F = !0),
              (Y = arguments),
              (W = this),
              yE.frame(function () {
                (F = !1), S.apply(W, Y);
              }));
          };
        }),
        (e.debounce = function (S, F, Y) {
          var W,
            ne,
            re,
            le,
            ve,
            I = function () {
              var q = e.now() - le;
              q < F
                ? (W = setTimeout(I, F - q))
                : ((W = null), Y || ((ve = S.apply(re, ne)), (re = ne = null)));
            };
          return function () {
            (re = this), (ne = arguments), (le = e.now());
            var q = Y && !W;
            return (
              W || (W = setTimeout(I, F)),
              q && ((ve = S.apply(re, ne)), (re = ne = null)),
              ve
            );
          };
        }),
        (e.defaults = function (S) {
          if (!e.isObject(S)) return S;
          for (var F = 1, Y = arguments.length; F < Y; F++) {
            var W = arguments[F];
            for (var ne in W) S[ne] === void 0 && (S[ne] = W[ne]);
          }
          return S;
        }),
        (e.keys = function (S) {
          if (!e.isObject(S)) return [];
          if (N) return N(S);
          var F = [];
          for (var Y in S) e.has(S, Y) && F.push(Y);
          return F;
        }),
        (e.has = function (S, F) {
          return f.call(S, F);
        }),
        (e.isObject = function (S) {
          return S === Object(S);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var H = /(.)^/,
        z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        K = /\\|'|\r|\n|\u2028|\u2029/g,
        te = function (S) {
          return "\\" + z[S];
        },
        U = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (S, F, Y) {
          !F && Y && (F = Y), (F = e.defaults({}, F, e.templateSettings));
          var W = RegExp(
              [
                (F.escape || H).source,
                (F.interpolate || H).source,
                (F.evaluate || H).source,
              ].join("|") + "|$",
              "g"
            ),
            ne = 0,
            re = "__p+='";
          S.replace(W, function (q, g, E, G, V) {
            return (
              (re += S.slice(ne, V).replace(K, te)),
              (ne = V + q.length),
              g
                ? (re +=
                    `'+
    ((__t=(` +
                    g +
                    `))==null?'':_.escape(__t))+
    '`)
                : E
                ? (re +=
                    `'+
    ((__t=(` +
                    E +
                    `))==null?'':__t)+
    '`)
                : G &&
                  (re +=
                    `';
    ` +
                    G +
                    `
    __p+='`),
              q
            );
          }),
            (re += `';
    `);
          var le = F.variable;
          if (le) {
            if (!U.test(le))
              throw new Error("variable is not a bare identifier: " + le);
          } else
            (re =
              `with(obj||{}){
    ` +
              re +
              `}
    `),
              (le = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            re +
            `return __p;
    `;
          var ve;
          try {
            ve = new Function(F.variable || "obj", "_", re);
          } catch (q) {
            throw ((q.source = re), q);
          }
          var I = function (q) {
            return ve.call(this, q, e);
          };
          return (
            (I.source =
              "function(" +
              le +
              `){
    ` +
              re +
              "}"),
            I
          );
        }),
        e
      );
    })();
  });
  var Fe = l((q3, so) => {
    "use strict";
    var ge = {},
      mt = {},
      _t = [],
      wr = window.Webflow || [],
      nt = window.jQuery,
      ke = nt(window),
      hE = nt(document),
      We = nt.isFunction,
      Ge = (ge._ = Ja()),
      to = (ge.tram = Lr() && nt.tram),
      vn = !1,
      Nr = !1;
    to.config.hideBackface = !1;
    to.config.keepInherited = !0;
    ge.define = function (e, t, n) {
      mt[e] && ro(mt[e]);
      var r = (mt[e] = t(nt, Ge, n) || {});
      return no(r), r;
    };
    ge.require = function (e) {
      return mt[e];
    };
    function no(e) {
      ge.env() &&
        (We(e.design) && ke.on("__wf_design", e.design),
        We(e.preview) && ke.on("__wf_preview", e.preview)),
        We(e.destroy) && ke.on("__wf_destroy", e.destroy),
        e.ready && We(e.ready) && IE(e);
    }
    function IE(e) {
      if (vn) {
        e.ready();
        return;
      }
      Ge.contains(_t, e.ready) || _t.push(e.ready);
    }
    function ro(e) {
      We(e.design) && ke.off("__wf_design", e.design),
        We(e.preview) && ke.off("__wf_preview", e.preview),
        We(e.destroy) && ke.off("__wf_destroy", e.destroy),
        e.ready && We(e.ready) && TE(e);
    }
    function TE(e) {
      _t = Ge.filter(_t, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (vn) {
        We(e) && e();
        return;
      }
      wr.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Tn = navigator.userAgent.toLowerCase(),
      io = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      vE = (ge.env.chrome =
        /chrome/.test(Tn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Tn.match(/chrome\/(\d+)\./)[1], 10)),
      mE = (ge.env.ios = /(ipod|iphone|ipad)/.test(Tn));
    ge.env.safari = /safari/.test(Tn) && !vE && !mE;
    var Cr;
    io &&
      hE.on("touchstart mousedown", function (e) {
        Cr = e.target;
      });
    ge.validClick = io
      ? function (e) {
          return e === Cr || nt.contains(e, Cr);
        }
      : function () {
          return !0;
        };
    var ao = "resize.webflow orientationchange.webflow load.webflow",
      _E = "scroll.webflow " + ao;
    ge.resize = Pr(ke, ao);
    ge.scroll = Pr(ke, _E);
    ge.redraw = Pr();
    function Pr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = Ge.throttle(function (a) {
          Ge.each(n, function (i) {
            i(a);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (a) {
          typeof a == "function" && (Ge.contains(n, a) || n.push(a));
        }),
        (r.off = function (a) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = Ge.filter(n, function (i) {
            return i !== a;
          });
        }),
        r
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (vn = !0), Nr ? bE() : Ge.each(_t, eo), Ge.each(wr, eo), ge.resize.up();
    };
    function eo(e) {
      We(e) && e();
    }
    function bE() {
      (Nr = !1), Ge.each(mt, no);
    }
    var ft;
    ge.load = function (e) {
      ft.then(e);
    };
    function oo() {
      ft && (ft.reject(), ke.off("load", ft.resolve)),
        (ft = new nt.Deferred()),
        ke.on("load", ft.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (Nr = !0),
        ke.triggerHandler("__wf_destroy"),
        e.domready != null && (vn = e.domready),
        Ge.each(mt, ro),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (_t = []),
        (wr = []),
        ft.state() === "pending" && oo();
    };
    nt(ge.ready);
    oo();
    so.exports = window.Webflow = ge;
  });
  var lo = l((V3, uo) => {
    "use strict";
    var co = Fe();
    co.define(
      "brand",
      (uo.exports = function (e) {
        var t = {},
          n = document,
          r = e("html"),
          a = e("body"),
          i = ".w-webflow-badge",
          o = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var h = r.attr("data-wf-status"),
            _ = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(_) && o.hostname !== _ && (h = !0),
            h &&
              !s &&
              ((f = f || y()),
              p(),
              setTimeout(p, 500),
              e(n).off(c, T).on(c, T));
        };
        function T() {
          var h =
            n.fullScreen ||
            n.mozFullScreen ||
            n.webkitIsFullScreen ||
            n.msFullscreenElement ||
            !!n.webkitFullscreenElement;
          e(f).attr("style", h ? "display: none !important;" : "");
        }
        function y() {
        //   var h = e('<a class="w-webflow-badge"></a>').attr(
        //       "href",
        //       "https://webflow.com?utm_campaign=brandjs"
        //     ),
        //     _ = e("<img>")
        //       .attr(
        //         "src",
        //         "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
        //       )
        //       .attr("alt", "")
        //       .css({ marginRight: "4px", width: "26px" }),
        //     m = e("<img>")
        //       .attr(
        //         "src",
        //         "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
        //       )
        //       .attr("alt", "Made in Webflow");
        //   return h.append(_, m), h[0];
        return
        }
        function p() {
          var h = a.children(i),
            _ = h.length && h.get(0) === f,
            m = co.env("editor");
          if (_) {
            m && h.remove();
            return;
          }
          h.length && h.remove(), m || a.append(f);
        }
        return t;
      })
    );
  });
  var po = l((G3, fo) => {
    "use strict";
    var bt = Fe();
    bt.define(
      "links",
      (fo.exports = function (e, t) {
        var n = {},
          r = e(window),
          a,
          i = bt.env(),
          o = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          T = /\/$/,
          y,
          p;
        n.ready = n.design = n.preview = h;
        function h() {
          (a = i && bt.env("design")),
            (p = bt.env("slug") || o.pathname || ""),
            bt.scroll.off(m),
            (y = []);
          for (var b = document.links, C = 0; C < b.length; ++C) _(b[C]);
          y.length && (bt.scroll.on(m), m());
        }
        function _(b) {
          if (!b.getAttribute("hreflang")) {
            var C =
              (a && b.getAttribute("href-disabled")) || b.getAttribute("href");
            if (((s.href = C), !(C.indexOf(":") >= 0))) {
              var R = e(b);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === o.host + o.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var N = e(s.hash);
                N.length && y.push({ link: R, sec: N, active: !1 });
                return;
              }
              if (!(C === "#" || C === "")) {
                var x =
                  s.href === o.href || C === p || (f.test(C) && T.test(p));
                A(R, c, x);
              }
            }
          }
        }
        function m() {
          var b = r.scrollTop(),
            C = r.height();
          t.each(y, function (R) {
            if (!R.link.attr("hreflang")) {
              var N = R.link,
                x = R.sec,
                w = x.offset().top,
                X = x.outerHeight(),
                H = C * 0.5,
                z = x.is(":visible") && w + X - H >= b && w + H <= b + C;
              R.active !== z && ((R.active = z), A(N, c, z));
            }
          });
        }
        function A(b, C, R) {
          var N = b.hasClass(C);
          (R && N) || (!R && !N) || (R ? b.addClass(C) : b.removeClass(C));
        }
        return n;
      })
    );
  });
  var Eo = l((k3, go) => {
    "use strict";
    var mn = Fe();
    mn.define(
      "scroll",
      (go.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = _() ? null : window.history,
          a = e(window),
          i = e(document),
          o = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (U) {
              window.setTimeout(U, 15);
            },
          c = mn.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          T = 'a[href="#"]',
          y = 'a[href*="#"]:not(.w-tab-link):not(' + T + ")",
          p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          h = document.createElement("style");
        h.appendChild(document.createTextNode(p));
        function _() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var m = /^#[a-zA-Z0-9][\w:.-]*$/;
        function A(U) {
          return m.test(U.hash) && U.host + U.pathname === n.host + n.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function C() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function R(U, S) {
          var F;
          switch (S) {
            case "add":
              (F = U.attr("tabindex")),
                F
                  ? U.attr("data-wf-tabindex-swap", F)
                  : U.attr("tabindex", "-1");
              break;
            case "remove":
              (F = U.attr("data-wf-tabindex-swap")),
                F
                  ? (U.attr("tabindex", F),
                    U.removeAttr("data-wf-tabindex-swap"))
                  : U.removeAttr("tabindex");
              break;
          }
          U.toggleClass("wf-force-outline-none", S === "add");
        }
        function N(U) {
          var S = U.currentTarget;
          if (
            !(
              mn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(S.className))
            )
          ) {
            var F = A(S) ? S.hash : "";
            if (F !== "") {
              var Y = e(F);
              Y.length &&
                (U && (U.preventDefault(), U.stopPropagation()),
                x(F, U),
                window.setTimeout(
                  function () {
                    w(Y, function () {
                      R(Y, "add"),
                        Y.get(0).focus({ preventScroll: !0 }),
                        R(Y, "remove");
                    });
                  },
                  U ? 0 : 300
                ));
            }
          }
        }
        function x(U) {
          if (
            n.hash !== U &&
            r &&
            r.pushState &&
            !(mn.env.chrome && n.protocol === "file:")
          ) {
            var S = r.state && r.state.hash;
            S !== U && r.pushState({ hash: U }, "", U);
          }
        }
        function w(U, S) {
          var F = a.scrollTop(),
            Y = X(U);
          if (F !== Y) {
            var W = H(U, F, Y),
              ne = Date.now(),
              re = function () {
                var le = Date.now() - ne;
                window.scroll(0, z(F, Y, le, W)),
                  le <= W ? s(re) : typeof S == "function" && S();
              };
            s(re);
          }
        }
        function X(U) {
          var S = e(f),
            F = S.css("position") === "fixed" ? S.outerHeight() : 0,
            Y = U.offset().top - F;
          if (U.data("scroll") === "mid") {
            var W = a.height() - F,
              ne = U.outerHeight();
            ne < W && (Y -= Math.round((W - ne) / 2));
          }
          return Y;
        }
        function H(U, S, F) {
          if (C()) return 0;
          var Y = 1;
          return (
            o.add(U).each(function (W, ne) {
              var re = parseFloat(ne.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (Y = re);
            }),
            (472.143 * Math.log(Math.abs(S - F) + 125) - 2e3) * Y
          );
        }
        function z(U, S, F, Y) {
          return F > Y ? S : U + (S - U) * K(F / Y);
        }
        function K(U) {
          return U < 0.5
            ? 4 * U * U * U
            : (U - 1) * (2 * U - 2) * (2 * U - 2) + 1;
        }
        function te() {
          var { WF_CLICK_EMPTY: U, WF_CLICK_SCROLL: S } = t;
          i.on(S, y, N),
            i.on(U, T, function (F) {
              F.preventDefault();
            }),
            document.head.insertBefore(h, document.head.firstChild);
        }
        return { ready: te };
      })
    );
  });
  var Io = l((B3, ho) => {
    "use strict";
    var yo = Fe();
    yo.define(
      "focus",
      (ho.exports = function () {
        var e = [],
          t = !1;
        function n(o) {
          t &&
            (o.preventDefault(),
            o.stopPropagation(),
            o.stopImmediatePropagation(),
            e.unshift(o));
        }
        function r(o) {
          var s = o.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function a(o) {
          r(o) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, o.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            yo.env.safari &&
            (document.addEventListener("mousedown", a, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: i };
      })
    );
  });
  var vo = l((X3, To) => {
    "use strict";
    var OE = Fe();
    OE.define(
      "focus-visible",
      (To.exports = function () {
        function e(n) {
          var r = !0,
            a = !1,
            i = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(R) {
            return !!(
              R &&
              R !== document &&
              R.nodeName !== "HTML" &&
              R.nodeName !== "BODY" &&
              "classList" in R &&
              "contains" in R.classList
            );
          }
          function c(R) {
            var N = R.type,
              x = R.tagName;
            return !!(
              (x === "INPUT" && o[N] && !R.readOnly) ||
              (x === "TEXTAREA" && !R.readOnly) ||
              R.isContentEditable
            );
          }
          function f(R) {
            R.getAttribute("data-wf-focus-visible") ||
              R.setAttribute("data-wf-focus-visible", "true");
          }
          function T(R) {
            R.getAttribute("data-wf-focus-visible") &&
              R.removeAttribute("data-wf-focus-visible");
          }
          function y(R) {
            R.metaKey ||
              R.altKey ||
              R.ctrlKey ||
              (s(n.activeElement) && f(n.activeElement), (r = !0));
          }
          function p() {
            r = !1;
          }
          function h(R) {
            s(R.target) && (r || c(R.target)) && f(R.target);
          }
          function _(R) {
            s(R.target) &&
              R.target.hasAttribute("data-wf-focus-visible") &&
              ((a = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                a = !1;
              }, 100)),
              T(R.target));
          }
          function m() {
            document.visibilityState === "hidden" && (a && (r = !0), A());
          }
          function A() {
            document.addEventListener("mousemove", C),
              document.addEventListener("mousedown", C),
              document.addEventListener("mouseup", C),
              document.addEventListener("pointermove", C),
              document.addEventListener("pointerdown", C),
              document.addEventListener("pointerup", C),
              document.addEventListener("touchmove", C),
              document.addEventListener("touchstart", C),
              document.addEventListener("touchend", C);
          }
          function b() {
            document.removeEventListener("mousemove", C),
              document.removeEventListener("mousedown", C),
              document.removeEventListener("mouseup", C),
              document.removeEventListener("pointermove", C),
              document.removeEventListener("pointerdown", C),
              document.removeEventListener("pointerup", C),
              document.removeEventListener("touchmove", C),
              document.removeEventListener("touchstart", C),
              document.removeEventListener("touchend", C);
          }
          function C(R) {
            (R.target.nodeName && R.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), b());
          }
          document.addEventListener("keydown", y, !0),
            document.addEventListener("mousedown", p, !0),
            document.addEventListener("pointerdown", p, !0),
            document.addEventListener("touchstart", p, !0),
            document.addEventListener("visibilitychange", m, !0),
            A(),
            n.addEventListener("focus", h, !0),
            n.addEventListener("blur", _, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var _o = l((W3, mo) => {
    "use strict";
    var SE = Fe();
    SE.define(
      "touch",
      (mo.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new r(i) : null
            );
          });
        function r(i) {
          var o = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            T;
          i.addEventListener("touchstart", y, !1),
            i.addEventListener("touchmove", p, !1),
            i.addEventListener("touchend", h, !1),
            i.addEventListener("touchcancel", _, !1),
            i.addEventListener("mousedown", y, !1),
            i.addEventListener("mousemove", p, !1),
            i.addEventListener("mouseup", h, !1),
            i.addEventListener("mouseout", _, !1);
          function y(A) {
            var b = A.touches;
            (b && b.length > 1) ||
              ((o = !0),
              b ? ((s = !0), (f = b[0].clientX)) : (f = A.clientX),
              (T = f));
          }
          function p(A) {
            if (o) {
              if (s && A.type === "mousemove") {
                A.preventDefault(), A.stopPropagation();
                return;
              }
              var b = A.touches,
                C = b ? b[0].clientX : A.clientX,
                R = C - T;
              (T = C),
                Math.abs(R) > c &&
                  n &&
                  String(n()) === "" &&
                  (a("swipe", A, { direction: R > 0 ? "right" : "left" }), _());
            }
          }
          function h(A) {
            if (o && ((o = !1), s && A.type === "mouseup")) {
              A.preventDefault(), A.stopPropagation(), (s = !1);
              return;
            }
          }
          function _() {
            o = !1;
          }
          function m() {
            i.removeEventListener("touchstart", y, !1),
              i.removeEventListener("touchmove", p, !1),
              i.removeEventListener("touchend", h, !1),
              i.removeEventListener("touchcancel", _, !1),
              i.removeEventListener("mousedown", y, !1),
              i.removeEventListener("mousemove", p, !1),
              i.removeEventListener("mouseup", h, !1),
              i.removeEventListener("mouseout", _, !1),
              (i = null);
          }
          this.destroy = m;
        }
        function a(i, o, s) {
          var c = e.Event(i, { originalEvent: o });
          e(o.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Oo = l((H3, bo) => {
    "use strict";
    var Mr = Fe();
    Mr.define(
      "edit",
      (bo.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (Mr.env("test") || Mr.env("frame")) && !n.fixture && !AE())
        )
          return { exit: 1 };
        var r = {},
          a = e(window),
          i = e(document.documentElement),
          o = document.location,
          s = "hashchange",
          c,
          f = n.load || p,
          T = !1;
        try {
          T =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        T
          ? f()
          : o.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) ||
              /\?edit$/.test(o.href)) &&
            f()
          : a.on(s, y).triggerHandler(s);
        function y() {
          c || (/\?edit/.test(o.hash) && f());
        }
        function p() {
          (c = !0),
            (window.WebflowEditor = !0),
            a.off(s, y),
            C(function (N) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: h(N),
              });
            });
        }
        function h(N) {
          return function (x) {
            if (!x) {
              console.error("Could not load editor data");
              return;
            }
            (x.thirdPartyCookiesSupported = N),
              _(A(x.scriptPath), function () {
                window.WebflowEditor(x);
              });
          };
        }
        function _(N, x) {
          e.ajax({ type: "GET", url: N, dataType: "script", cache: !0 }).then(
            x,
            m
          );
        }
        function m(N, x, w) {
          throw (console.error("Could not load editor script: " + x), w);
        }
        function A(N) {
          return N.indexOf("//") >= 0
            ? N
            : b("https://editor-api.webflow.com" + N);
        }
        function b(N) {
          return N.replace(/([^:])\/\//g, "$1/");
        }
        function C(N) {
          var x = window.document.createElement("iframe");
          (x.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (x.style.display = "none"),
            (x.sandbox = "allow-scripts allow-same-origin");
          var w = function (X) {
            X.data === "WF_third_party_cookies_unsupported"
              ? (R(x, w), N(!1))
              : X.data === "WF_third_party_cookies_supported" &&
                (R(x, w), N(!0));
          };
          (x.onerror = function () {
            R(x, w), N(!1);
          }),
            window.addEventListener("message", w, !1),
            window.document.body.appendChild(x);
        }
        function R(N, x) {
          window.removeEventListener("message", x, !1), N.remove();
        }
        return r;
      })
    );
    function AE() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var xr = l((z3, So) => {
    var RE =
      typeof global == "object" && global && global.Object === Object && global;
    So.exports = RE;
  });
  var Be = l((Y3, Ao) => {
    var LE = xr(),
      CE = typeof self == "object" && self && self.Object === Object && self,
      wE = LE || CE || Function("return this")();
    Ao.exports = wE;
  });
  var Ot = l((Q3, Ro) => {
    var NE = Be(),
      PE = NE.Symbol;
    Ro.exports = PE;
  });
  var No = l((j3, wo) => {
    var Lo = Ot(),
      Co = Object.prototype,
      ME = Co.hasOwnProperty,
      xE = Co.toString,
      Yt = Lo ? Lo.toStringTag : void 0;
    function FE(e) {
      var t = ME.call(e, Yt),
        n = e[Yt];
      try {
        e[Yt] = void 0;
        var r = !0;
      } catch {}
      var a = xE.call(e);
      return r && (t ? (e[Yt] = n) : delete e[Yt]), a;
    }
    wo.exports = FE;
  });
  var Mo = l((K3, Po) => {
    var DE = Object.prototype,
      UE = DE.toString;
    function qE(e) {
      return UE.call(e);
    }
    Po.exports = qE;
  });
  var rt = l(($3, Do) => {
    var xo = Ot(),
      VE = No(),
      GE = Mo(),
      kE = "[object Null]",
      BE = "[object Undefined]",
      Fo = xo ? xo.toStringTag : void 0;
    function XE(e) {
      return e == null
        ? e === void 0
          ? BE
          : kE
        : Fo && Fo in Object(e)
        ? VE(e)
        : GE(e);
    }
    Do.exports = XE;
  });
  var Fr = l((Z3, Uo) => {
    function WE(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Uo.exports = WE;
  });
  var Dr = l((J3, qo) => {
    var HE = Fr(),
      zE = HE(Object.getPrototypeOf, Object);
    qo.exports = zE;
  });
  var Je = l((e6, Vo) => {
    function YE(e) {
      return e != null && typeof e == "object";
    }
    Vo.exports = YE;
  });
  var Ur = l((t6, ko) => {
    var QE = rt(),
      jE = Dr(),
      KE = Je(),
      $E = "[object Object]",
      ZE = Function.prototype,
      JE = Object.prototype,
      Go = ZE.toString,
      ey = JE.hasOwnProperty,
      ty = Go.call(Object);
    function ny(e) {
      if (!KE(e) || QE(e) != $E) return !1;
      var t = jE(e);
      if (t === null) return !0;
      var n = ey.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && Go.call(n) == ty;
    }
    ko.exports = ny;
  });
  var Bo = l((qr) => {
    "use strict";
    Object.defineProperty(qr, "__esModule", { value: !0 });
    qr.default = ry;
    function ry(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Xo = l((Gr, Vr) => {
    "use strict";
    Object.defineProperty(Gr, "__esModule", { value: !0 });
    var iy = Bo(),
      ay = oy(iy);
    function oy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var St;
    typeof self < "u"
      ? (St = self)
      : typeof window < "u"
      ? (St = window)
      : typeof global < "u"
      ? (St = global)
      : typeof Vr < "u"
      ? (St = Vr)
      : (St = Function("return this")());
    var sy = (0, ay.default)(St);
    Gr.default = sy;
  });
  var kr = l((Qt) => {
    "use strict";
    Qt.__esModule = !0;
    Qt.ActionTypes = void 0;
    Qt.default = Yo;
    var cy = Ur(),
      uy = zo(cy),
      ly = Xo(),
      Wo = zo(ly);
    function zo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ho = (Qt.ActionTypes = { INIT: "@@redux/INIT" });
    function Yo(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(Yo)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var a = e,
        i = t,
        o = [],
        s = o,
        c = !1;
      function f() {
        s === o && (s = o.slice());
      }
      function T() {
        return i;
      }
      function y(m) {
        if (typeof m != "function")
          throw new Error("Expected listener to be a function.");
        var A = !0;
        return (
          f(),
          s.push(m),
          function () {
            if (A) {
              (A = !1), f();
              var C = s.indexOf(m);
              s.splice(C, 1);
            }
          }
        );
      }
      function p(m) {
        if (!(0, uy.default)(m))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof m.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = a(i, m));
        } finally {
          c = !1;
        }
        for (var A = (o = s), b = 0; b < A.length; b++) A[b]();
        return m;
      }
      function h(m) {
        if (typeof m != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (a = m), p({ type: Ho.INIT });
      }
      function _() {
        var m,
          A = y;
        return (
          (m = {
            subscribe: function (C) {
              if (typeof C != "object")
                throw new TypeError("Expected the observer to be an object.");
              function R() {
                C.next && C.next(T());
              }
              R();
              var N = A(R);
              return { unsubscribe: N };
            },
          }),
          (m[Wo.default] = function () {
            return this;
          }),
          m
        );
      }
      return (
        p({ type: Ho.INIT }),
        (r = { dispatch: p, subscribe: y, getState: T, replaceReducer: h }),
        (r[Wo.default] = _),
        r
      );
    }
  });
  var Xr = l((Br) => {
    "use strict";
    Br.__esModule = !0;
    Br.default = fy;
    function fy(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Ko = l((Wr) => {
    "use strict";
    Wr.__esModule = !0;
    Wr.default = yy;
    var Qo = kr(),
      dy = Ur(),
      a6 = jo(dy),
      py = Xr(),
      o6 = jo(py);
    function jo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function gy(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Ey(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: Qo.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var a =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: a }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Qo.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function yy(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        typeof e[a] == "function" && (n[a] = e[a]);
      }
      var i = Object.keys(n);
      if (!1) var o;
      var s;
      try {
        Ey(n);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          T = arguments[1];
        if (s) throw s;
        if (!1) var y;
        for (var p = !1, h = {}, _ = 0; _ < i.length; _++) {
          var m = i[_],
            A = n[m],
            b = f[m],
            C = A(b, T);
          if (typeof C > "u") {
            var R = gy(m, T);
            throw new Error(R);
          }
          (h[m] = C), (p = p || C !== b);
        }
        return p ? h : f;
      };
    }
  });
  var Zo = l((Hr) => {
    "use strict";
    Hr.__esModule = !0;
    Hr.default = hy;
    function $o(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function hy(e, t) {
      if (typeof e == "function") return $o(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
        var i = n[a],
          o = e[i];
        typeof o == "function" && (r[i] = $o(o, t));
      }
      return r;
    }
  });
  var Yr = l((zr) => {
    "use strict";
    zr.__esModule = !0;
    zr.default = Iy;
    function Iy() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        a = t.slice(0, -1);
      return function () {
        return a.reduceRight(function (i, o) {
          return o(i);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var Jo = l((Qr) => {
    "use strict";
    Qr.__esModule = !0;
    var Ty =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    Qr.default = by;
    var vy = Yr(),
      my = _y(vy);
    function _y(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function by() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (a, i, o) {
          var s = r(a, i, o),
            c = s.dispatch,
            f = [],
            T = {
              getState: s.getState,
              dispatch: function (p) {
                return c(p);
              },
            };
          return (
            (f = t.map(function (y) {
              return y(T);
            })),
            (c = my.default.apply(void 0, f)(s.dispatch)),
            Ty({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var jr = l((De) => {
    "use strict";
    De.__esModule = !0;
    De.compose =
      De.applyMiddleware =
      De.bindActionCreators =
      De.combineReducers =
      De.createStore =
        void 0;
    var Oy = kr(),
      Sy = At(Oy),
      Ay = Ko(),
      Ry = At(Ay),
      Ly = Zo(),
      Cy = At(Ly),
      wy = Jo(),
      Ny = At(wy),
      Py = Yr(),
      My = At(Py),
      xy = Xr(),
      f6 = At(xy);
    function At(e) {
      return e && e.__esModule ? e : { default: e };
    }
    De.createStore = Sy.default;
    De.combineReducers = Ry.default;
    De.bindActionCreators = Cy.default;
    De.applyMiddleware = Ny.default;
    De.compose = My.default;
  });
  var es = l((Kr) => {
    "use strict";
    Object.defineProperty(Kr, "__esModule", { value: !0 });
    function Fy(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Fy(Kr, {
      EventAppliesTo: function () {
        return Uy;
      },
      EventBasedOn: function () {
        return qy;
      },
      EventContinuousMouseAxes: function () {
        return Vy;
      },
      EventLimitAffectedElements: function () {
        return Gy;
      },
      EventTypeConsts: function () {
        return Dy;
      },
      QuickEffectDirectionConsts: function () {
        return By;
      },
      QuickEffectIds: function () {
        return ky;
      },
    });
    var Dy = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      },
      Uy = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
      qy = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
      Vy = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
      Gy = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      },
      ky = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      },
      By = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      };
  });
  var Zr = l(($r) => {
    "use strict";
    Object.defineProperty($r, "__esModule", { value: !0 });
    function Xy(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Xy($r, {
      ActionAppliesTo: function () {
        return Hy;
      },
      ActionTypeConsts: function () {
        return Wy;
      },
    });
    var Wy = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      },
      Hy = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      };
  });
  var ts = l((Jr) => {
    "use strict";
    Object.defineProperty(Jr, "__esModule", { value: !0 });
    Object.defineProperty(Jr, "InteractionTypeConsts", {
      enumerable: !0,
      get: function () {
        return zy;
      },
    });
    var zy = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
  });
  var ns = l((ei) => {
    "use strict";
    Object.defineProperty(ei, "__esModule", { value: !0 });
    Object.defineProperty(ei, "ReducedMotionTypes", {
      enumerable: !0,
      get: function () {
        return th;
      },
    });
    var Yy = Zr(),
      {
        TRANSFORM_MOVE: Qy,
        TRANSFORM_SCALE: jy,
        TRANSFORM_ROTATE: Ky,
        TRANSFORM_SKEW: $y,
        STYLE_SIZE: Zy,
        STYLE_FILTER: Jy,
        STYLE_FONT_VARIATION: eh,
      } = Yy.ActionTypeConsts,
      th = {
        [Qy]: !0,
        [jy]: !0,
        [Ky]: !0,
        [$y]: !0,
        [Zy]: !0,
        [Jy]: !0,
        [eh]: !0,
      };
  });
  var rs = l((ti) => {
    "use strict";
    Object.defineProperty(ti, "__esModule", { value: !0 });
    function nh(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    nh(ti, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
        return Th;
      },
      IX2_ANIMATION_FRAME_CHANGED: function () {
        return ph;
      },
      IX2_CLEAR_REQUESTED: function () {
        return lh;
      },
      IX2_ELEMENT_STATE_CHANGED: function () {
        return Ih;
      },
      IX2_EVENT_LISTENER_ADDED: function () {
        return fh;
      },
      IX2_EVENT_STATE_CHANGED: function () {
        return dh;
      },
      IX2_INSTANCE_ADDED: function () {
        return Eh;
      },
      IX2_INSTANCE_REMOVED: function () {
        return hh;
      },
      IX2_INSTANCE_STARTED: function () {
        return yh;
      },
      IX2_MEDIA_QUERIES_DEFINED: function () {
        return mh;
      },
      IX2_PARAMETER_CHANGED: function () {
        return gh;
      },
      IX2_PLAYBACK_REQUESTED: function () {
        return ch;
      },
      IX2_PREVIEW_REQUESTED: function () {
        return sh;
      },
      IX2_RAW_DATA_IMPORTED: function () {
        return rh;
      },
      IX2_SESSION_INITIALIZED: function () {
        return ih;
      },
      IX2_SESSION_STARTED: function () {
        return ah;
      },
      IX2_SESSION_STOPPED: function () {
        return oh;
      },
      IX2_STOP_REQUESTED: function () {
        return uh;
      },
      IX2_TEST_FRAME_RENDERED: function () {
        return _h;
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function () {
        return vh;
      },
    });
    var rh = "IX2_RAW_DATA_IMPORTED",
      ih = "IX2_SESSION_INITIALIZED",
      ah = "IX2_SESSION_STARTED",
      oh = "IX2_SESSION_STOPPED",
      sh = "IX2_PREVIEW_REQUESTED",
      ch = "IX2_PLAYBACK_REQUESTED",
      uh = "IX2_STOP_REQUESTED",
      lh = "IX2_CLEAR_REQUESTED",
      fh = "IX2_EVENT_LISTENER_ADDED",
      dh = "IX2_EVENT_STATE_CHANGED",
      ph = "IX2_ANIMATION_FRAME_CHANGED",
      gh = "IX2_PARAMETER_CHANGED",
      Eh = "IX2_INSTANCE_ADDED",
      yh = "IX2_INSTANCE_STARTED",
      hh = "IX2_INSTANCE_REMOVED",
      Ih = "IX2_ELEMENT_STATE_CHANGED",
      Th = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      vh = "IX2_VIEWPORT_WIDTH_CHANGED",
      mh = "IX2_MEDIA_QUERIES_DEFINED",
      _h = "IX2_TEST_FRAME_RENDERED";
  });
  var is = l((ni) => {
    "use strict";
    Object.defineProperty(ni, "__esModule", { value: !0 });
    function bh(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    bh(ni, {
      ABSTRACT_NODE: function () {
        return mI;
      },
      AUTO: function () {
        return lI;
      },
      BACKGROUND: function () {
        return iI;
      },
      BACKGROUND_COLOR: function () {
        return rI;
      },
      BAR_DELIMITER: function () {
        return pI;
      },
      BORDER_COLOR: function () {
        return aI;
      },
      BOUNDARY_SELECTOR: function () {
        return Lh;
      },
      CHILDREN: function () {
        return gI;
      },
      COLON_DELIMITER: function () {
        return dI;
      },
      COLOR: function () {
        return oI;
      },
      COMMA_DELIMITER: function () {
        return fI;
      },
      CONFIG_UNIT: function () {
        return Dh;
      },
      CONFIG_VALUE: function () {
        return Ph;
      },
      CONFIG_X_UNIT: function () {
        return Mh;
      },
      CONFIG_X_VALUE: function () {
        return Ch;
      },
      CONFIG_Y_UNIT: function () {
        return xh;
      },
      CONFIG_Y_VALUE: function () {
        return wh;
      },
      CONFIG_Z_UNIT: function () {
        return Fh;
      },
      CONFIG_Z_VALUE: function () {
        return Nh;
      },
      DISPLAY: function () {
        return sI;
      },
      FILTER: function () {
        return Jh;
      },
      FLEX: function () {
        return cI;
      },
      FONT_VARIATION_SETTINGS: function () {
        return eI;
      },
      HEIGHT: function () {
        return nI;
      },
      HTML_ELEMENT: function () {
        return TI;
      },
      IMMEDIATE_CHILDREN: function () {
        return EI;
      },
      IX2_ID_DELIMITER: function () {
        return Oh;
      },
      OPACITY: function () {
        return Zh;
      },
      PARENT: function () {
        return hI;
      },
      PLAIN_OBJECT: function () {
        return vI;
      },
      PRESERVE_3D: function () {
        return II;
      },
      RENDER_GENERAL: function () {
        return bI;
      },
      RENDER_PLUGIN: function () {
        return SI;
      },
      RENDER_STYLE: function () {
        return OI;
      },
      RENDER_TRANSFORM: function () {
        return _I;
      },
      ROTATE_X: function () {
        return zh;
      },
      ROTATE_Y: function () {
        return Yh;
      },
      ROTATE_Z: function () {
        return Qh;
      },
      SCALE_3D: function () {
        return Hh;
      },
      SCALE_X: function () {
        return Bh;
      },
      SCALE_Y: function () {
        return Xh;
      },
      SCALE_Z: function () {
        return Wh;
      },
      SIBLINGS: function () {
        return yI;
      },
      SKEW: function () {
        return jh;
      },
      SKEW_X: function () {
        return Kh;
      },
      SKEW_Y: function () {
        return $h;
      },
      TRANSFORM: function () {
        return Uh;
      },
      TRANSLATE_3D: function () {
        return kh;
      },
      TRANSLATE_X: function () {
        return qh;
      },
      TRANSLATE_Y: function () {
        return Vh;
      },
      TRANSLATE_Z: function () {
        return Gh;
      },
      WF_PAGE: function () {
        return Sh;
      },
      WIDTH: function () {
        return tI;
      },
      WILL_CHANGE: function () {
        return uI;
      },
      W_MOD_IX: function () {
        return Rh;
      },
      W_MOD_JS: function () {
        return Ah;
      },
    });
    var Oh = "|",
      Sh = "data-wf-page",
      Ah = "w-mod-js",
      Rh = "w-mod-ix",
      Lh = ".w-dyn-item",
      Ch = "xValue",
      wh = "yValue",
      Nh = "zValue",
      Ph = "value",
      Mh = "xUnit",
      xh = "yUnit",
      Fh = "zUnit",
      Dh = "unit",
      Uh = "transform",
      qh = "translateX",
      Vh = "translateY",
      Gh = "translateZ",
      kh = "translate3d",
      Bh = "scaleX",
      Xh = "scaleY",
      Wh = "scaleZ",
      Hh = "scale3d",
      zh = "rotateX",
      Yh = "rotateY",
      Qh = "rotateZ",
      jh = "skew",
      Kh = "skewX",
      $h = "skewY",
      Zh = "opacity",
      Jh = "filter",
      eI = "font-variation-settings",
      tI = "width",
      nI = "height",
      rI = "backgroundColor",
      iI = "background",
      aI = "borderColor",
      oI = "color",
      sI = "display",
      cI = "flex",
      uI = "willChange",
      lI = "AUTO",
      fI = ",",
      dI = ":",
      pI = "|",
      gI = "CHILDREN",
      EI = "IMMEDIATE_CHILDREN",
      yI = "SIBLINGS",
      hI = "PARENT",
      II = "preserve-3d",
      TI = "HTML_ELEMENT",
      vI = "PLAIN_OBJECT",
      mI = "ABSTRACT_NODE",
      _I = "RENDER_TRANSFORM",
      bI = "RENDER_GENERAL",
      OI = "RENDER_STYLE",
      SI = "RENDER_PLUGIN";
  });
  var we = l((dt) => {
    "use strict";
    Object.defineProperty(dt, "__esModule", { value: !0 });
    function AI(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    AI(dt, {
      ActionTypeConsts: function () {
        return LI.ActionTypeConsts;
      },
      IX2EngineActionTypes: function () {
        return CI;
      },
      IX2EngineConstants: function () {
        return wI;
      },
      QuickEffectIds: function () {
        return RI.QuickEffectIds;
      },
    });
    var RI = _n(es(), dt),
      LI = _n(Zr(), dt);
    _n(ts(), dt);
    _n(ns(), dt);
    var CI = os(rs()),
      wI = os(is());
    function _n(e, t) {
      return (
        Object.keys(e).forEach(function (n) {
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(t, n) &&
            Object.defineProperty(t, n, {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            });
        }),
        e
      );
    }
    function as(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (as = function (r) {
        return r ? n : t;
      })(e);
    }
    function os(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = as(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var ss = l((ri) => {
    "use strict";
    Object.defineProperty(ri, "__esModule", { value: !0 });
    Object.defineProperty(ri, "ixData", {
      enumerable: !0,
      get: function () {
        return MI;
      },
    });
    var NI = we(),
      { IX2_RAW_DATA_IMPORTED: PI } = NI.IX2EngineActionTypes,
      MI = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case PI:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
  });
  var Rt = l((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    var xI =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    he.clone = On;
    he.addLast = ls;
    he.addFirst = fs;
    he.removeLast = ds;
    he.removeFirst = ps;
    he.insert = gs;
    he.removeAt = Es;
    he.replaceAt = ys;
    he.getIn = Sn;
    he.set = An;
    he.setIn = Rn;
    he.update = Is;
    he.updateIn = Ts;
    he.merge = vs;
    he.mergeDeep = ms;
    he.mergeIn = _s;
    he.omit = bs;
    he.addDefaults = Os;
    var cs = "INVALID_ARGS";
    function us(e) {
      throw new Error(e);
    }
    function ii(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var FI = {}.hasOwnProperty;
    function On(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ii(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        n[a] = e[a];
      }
      return n;
    }
    function Ne(e, t, n) {
      var r = n;
      r == null && us(cs);
      for (
        var a = !1, i = arguments.length, o = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        o[s - 3] = arguments[s];
      for (var c = 0; c < o.length; c++) {
        var f = o[c];
        if (f != null) {
          var T = ii(f);
          if (T.length)
            for (var y = 0; y <= T.length; y++) {
              var p = T[y];
              if (!(e && r[p] !== void 0)) {
                var h = f[p];
                t && bn(r[p]) && bn(h) && (h = Ne(e, t, r[p], h)),
                  !(h === void 0 || h === r[p]) &&
                    (a || ((a = !0), (r = On(r))), (r[p] = h));
              }
            }
        }
      }
      return r;
    }
    function bn(e) {
      var t = typeof e > "u" ? "undefined" : xI(e);
      return e != null && (t === "object" || t === "function");
    }
    function ls(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function fs(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function ds(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function ps(e) {
      return e.length ? e.slice(1) : e;
    }
    function gs(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function Es(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function ys(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, a = Array(r), i = 0; i < r; i++) a[i] = e[i];
      return (a[t] = n), a;
    }
    function Sn(e, t) {
      if ((!Array.isArray(t) && us(cs), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var a = t[r];
          if (((n = n?.[a]), n === void 0)) return n;
        }
        return n;
      }
    }
    function An(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        a = e ?? r;
      if (a[t] === n) return a;
      var i = On(a);
      return (i[t] = n), i;
    }
    function hs(e, t, n, r) {
      var a = void 0,
        i = t[r];
      if (r === t.length - 1) a = n;
      else {
        var o =
          bn(e) && bn(e[i]) ? e[i] : typeof t[r + 1] == "number" ? [] : {};
        a = hs(o, t, n, r + 1);
      }
      return An(e, i, a);
    }
    function Rn(e, t, n) {
      return t.length ? hs(e, t, n, 0) : n;
    }
    function Is(e, t, n) {
      var r = e?.[t],
        a = n(r);
      return An(e, t, a);
    }
    function Ts(e, t, n) {
      var r = Sn(e, t),
        a = n(r);
      return Rn(e, t, a);
    }
    function vs(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6;
        c < o;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Ne.call.apply(Ne, [null, !1, !1, e, t, n, r, a, i].concat(s))
        : Ne(!1, !1, e, t, n, r, a, i);
    }
    function ms(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6;
        c < o;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Ne.call.apply(Ne, [null, !1, !0, e, t, n, r, a, i].concat(s))
        : Ne(!1, !0, e, t, n, r, a, i);
    }
    function _s(e, t, n, r, a, i, o) {
      var s = Sn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          T = Array(f > 7 ? f - 7 : 0),
          y = 7;
        y < f;
        y++
      )
        T[y - 7] = arguments[y];
      return (
        T.length
          ? (c = Ne.call.apply(Ne, [null, !1, !1, s, n, r, a, i, o].concat(T)))
          : (c = Ne(!1, !1, s, n, r, a, i, o)),
        Rn(e, t, c)
      );
    }
    function bs(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, a = 0; a < n.length; a++)
        if (FI.call(e, n[a])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var i = {}, o = ii(e), s = 0; s < o.length; s++) {
        var c = o[s];
        n.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function Os(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6;
        c < o;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Ne.call.apply(Ne, [null, !0, !1, e, t, n, r, a, i].concat(s))
        : Ne(!0, !1, e, t, n, r, a, i);
    }
    var DI = {
      clone: On,
      addLast: ls,
      addFirst: fs,
      removeLast: ds,
      removeFirst: ps,
      insert: gs,
      removeAt: Es,
      replaceAt: ys,
      getIn: Sn,
      set: An,
      setIn: Rn,
      update: Is,
      updateIn: Ts,
      merge: vs,
      mergeDeep: ms,
      mergeIn: _s,
      omit: bs,
      addDefaults: Os,
    };
    he.default = DI;
  });
  var As = l((ai) => {
    "use strict";
    Object.defineProperty(ai, "__esModule", { value: !0 });
    Object.defineProperty(ai, "ixRequest", {
      enumerable: !0,
      get: function () {
        return WI;
      },
    });
    var UI = we(),
      qI = Rt(),
      {
        IX2_PREVIEW_REQUESTED: VI,
        IX2_PLAYBACK_REQUESTED: GI,
        IX2_STOP_REQUESTED: kI,
        IX2_CLEAR_REQUESTED: BI,
      } = UI.IX2EngineActionTypes,
      XI = { preview: {}, playback: {}, stop: {}, clear: {} },
      Ss = Object.create(null, {
        [VI]: { value: "preview" },
        [GI]: { value: "playback" },
        [kI]: { value: "stop" },
        [BI]: { value: "clear" },
      }),
      WI = (e = XI, t) => {
        if (t.type in Ss) {
          let n = [Ss[t.type]];
          return (0, qI.setIn)(e, [n], { ...t.payload });
        }
        return e;
      };
  });
  var Ls = l((oi) => {
    "use strict";
    Object.defineProperty(oi, "__esModule", { value: !0 });
    Object.defineProperty(oi, "ixSession", {
      enumerable: !0,
      get: function () {
        return rT;
      },
    });
    var HI = we(),
      He = Rt(),
      {
        IX2_SESSION_INITIALIZED: zI,
        IX2_SESSION_STARTED: YI,
        IX2_TEST_FRAME_RENDERED: QI,
        IX2_SESSION_STOPPED: jI,
        IX2_EVENT_LISTENER_ADDED: KI,
        IX2_EVENT_STATE_CHANGED: $I,
        IX2_ANIMATION_FRAME_CHANGED: ZI,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: JI,
        IX2_VIEWPORT_WIDTH_CHANGED: eT,
        IX2_MEDIA_QUERIES_DEFINED: tT,
      } = HI.IX2EngineActionTypes,
      Rs = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      nT = 20,
      rT = (e = Rs, t) => {
        switch (t.type) {
          case zI: {
            let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
            return (0, He.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
          }
          case YI:
            return (0, He.set)(e, "active", !0);
          case QI: {
            let {
              payload: { step: n = nT },
            } = t;
            return (0, He.set)(e, "tick", e.tick + n);
          }
          case jI:
            return Rs;
          case ZI: {
            let {
              payload: { now: n },
            } = t;
            return (0, He.set)(e, "tick", n);
          }
          case KI: {
            let n = (0, He.addLast)(e.eventListeners, t.payload);
            return (0, He.set)(e, "eventListeners", n);
          }
          case $I: {
            let { stateKey: n, newState: r } = t.payload;
            return (0, He.setIn)(e, ["eventState", n], r);
          }
          case JI: {
            let { actionListId: n, isPlaying: r } = t.payload;
            return (0, He.setIn)(e, ["playbackState", n], r);
          }
          case eT: {
            let { width: n, mediaQueries: r } = t.payload,
              a = r.length,
              i = null;
            for (let o = 0; o < a; o++) {
              let { key: s, min: c, max: f } = r[o];
              if (n >= c && n <= f) {
                i = s;
                break;
              }
            }
            return (0, He.merge)(e, { viewportWidth: n, mediaQueryKey: i });
          }
          case tT:
            return (0, He.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
  });
  var ws = l((O6, Cs) => {
    function iT() {
      (this.__data__ = []), (this.size = 0);
    }
    Cs.exports = iT;
  });
  var Ln = l((S6, Ns) => {
    function aT(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Ns.exports = aT;
  });
  var jt = l((A6, Ps) => {
    var oT = Ln();
    function sT(e, t) {
      for (var n = e.length; n--; ) if (oT(e[n][0], t)) return n;
      return -1;
    }
    Ps.exports = sT;
  });
  var xs = l((R6, Ms) => {
    var cT = jt(),
      uT = Array.prototype,
      lT = uT.splice;
    function fT(e) {
      var t = this.__data__,
        n = cT(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : lT.call(t, n, 1), --this.size, !0;
    }
    Ms.exports = fT;
  });
  var Ds = l((L6, Fs) => {
    var dT = jt();
    function pT(e) {
      var t = this.__data__,
        n = dT(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Fs.exports = pT;
  });
  var qs = l((C6, Us) => {
    var gT = jt();
    function ET(e) {
      return gT(this.__data__, e) > -1;
    }
    Us.exports = ET;
  });
  var Gs = l((w6, Vs) => {
    var yT = jt();
    function hT(e, t) {
      var n = this.__data__,
        r = yT(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    Vs.exports = hT;
  });
  var Kt = l((N6, ks) => {
    var IT = ws(),
      TT = xs(),
      vT = Ds(),
      mT = qs(),
      _T = Gs();
    function Lt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Lt.prototype.clear = IT;
    Lt.prototype.delete = TT;
    Lt.prototype.get = vT;
    Lt.prototype.has = mT;
    Lt.prototype.set = _T;
    ks.exports = Lt;
  });
  var Xs = l((P6, Bs) => {
    var bT = Kt();
    function OT() {
      (this.__data__ = new bT()), (this.size = 0);
    }
    Bs.exports = OT;
  });
  var Hs = l((M6, Ws) => {
    function ST(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    Ws.exports = ST;
  });
  var Ys = l((x6, zs) => {
    function AT(e) {
      return this.__data__.get(e);
    }
    zs.exports = AT;
  });
  var js = l((F6, Qs) => {
    function RT(e) {
      return this.__data__.has(e);
    }
    Qs.exports = RT;
  });
  var ze = l((D6, Ks) => {
    function LT(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Ks.exports = LT;
  });
  var si = l((U6, $s) => {
    var CT = rt(),
      wT = ze(),
      NT = "[object AsyncFunction]",
      PT = "[object Function]",
      MT = "[object GeneratorFunction]",
      xT = "[object Proxy]";
    function FT(e) {
      if (!wT(e)) return !1;
      var t = CT(e);
      return t == PT || t == MT || t == NT || t == xT;
    }
    $s.exports = FT;
  });
  var Js = l((q6, Zs) => {
    var DT = Be(),
      UT = DT["__core-js_shared__"];
    Zs.exports = UT;
  });
  var nc = l((V6, tc) => {
    var ci = Js(),
      ec = (function () {
        var e = /[^.]+$/.exec((ci && ci.keys && ci.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function qT(e) {
      return !!ec && ec in e;
    }
    tc.exports = qT;
  });
  var ui = l((G6, rc) => {
    var VT = Function.prototype,
      GT = VT.toString;
    function kT(e) {
      if (e != null) {
        try {
          return GT.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    rc.exports = kT;
  });
  var ac = l((k6, ic) => {
    var BT = si(),
      XT = nc(),
      WT = ze(),
      HT = ui(),
      zT = /[\\^$.*+?()[\]{}|]/g,
      YT = /^\[object .+?Constructor\]$/,
      QT = Function.prototype,
      jT = Object.prototype,
      KT = QT.toString,
      $T = jT.hasOwnProperty,
      ZT = RegExp(
        "^" +
          KT.call($T)
            .replace(zT, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function JT(e) {
      if (!WT(e) || XT(e)) return !1;
      var t = BT(e) ? ZT : YT;
      return t.test(HT(e));
    }
    ic.exports = JT;
  });
  var sc = l((B6, oc) => {
    function ev(e, t) {
      return e?.[t];
    }
    oc.exports = ev;
  });
  var it = l((X6, cc) => {
    var tv = ac(),
      nv = sc();
    function rv(e, t) {
      var n = nv(e, t);
      return tv(n) ? n : void 0;
    }
    cc.exports = rv;
  });
  var Cn = l((W6, uc) => {
    var iv = it(),
      av = Be(),
      ov = iv(av, "Map");
    uc.exports = ov;
  });
  var $t = l((H6, lc) => {
    var sv = it(),
      cv = sv(Object, "create");
    lc.exports = cv;
  });
  var pc = l((z6, dc) => {
    var fc = $t();
    function uv() {
      (this.__data__ = fc ? fc(null) : {}), (this.size = 0);
    }
    dc.exports = uv;
  });
  var Ec = l((Y6, gc) => {
    function lv(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    gc.exports = lv;
  });
  var hc = l((Q6, yc) => {
    var fv = $t(),
      dv = "__lodash_hash_undefined__",
      pv = Object.prototype,
      gv = pv.hasOwnProperty;
    function Ev(e) {
      var t = this.__data__;
      if (fv) {
        var n = t[e];
        return n === dv ? void 0 : n;
      }
      return gv.call(t, e) ? t[e] : void 0;
    }
    yc.exports = Ev;
  });
  var Tc = l((j6, Ic) => {
    var yv = $t(),
      hv = Object.prototype,
      Iv = hv.hasOwnProperty;
    function Tv(e) {
      var t = this.__data__;
      return yv ? t[e] !== void 0 : Iv.call(t, e);
    }
    Ic.exports = Tv;
  });
  var mc = l((K6, vc) => {
    var vv = $t(),
      mv = "__lodash_hash_undefined__";
    function _v(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = vv && t === void 0 ? mv : t),
        this
      );
    }
    vc.exports = _v;
  });
  var bc = l(($6, _c) => {
    var bv = pc(),
      Ov = Ec(),
      Sv = hc(),
      Av = Tc(),
      Rv = mc();
    function Ct(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Ct.prototype.clear = bv;
    Ct.prototype.delete = Ov;
    Ct.prototype.get = Sv;
    Ct.prototype.has = Av;
    Ct.prototype.set = Rv;
    _c.exports = Ct;
  });
  var Ac = l((Z6, Sc) => {
    var Oc = bc(),
      Lv = Kt(),
      Cv = Cn();
    function wv() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Oc(),
          map: new (Cv || Lv)(),
          string: new Oc(),
        });
    }
    Sc.exports = wv;
  });
  var Lc = l((J6, Rc) => {
    function Nv(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Rc.exports = Nv;
  });
  var Zt = l((e9, Cc) => {
    var Pv = Lc();
    function Mv(e, t) {
      var n = e.__data__;
      return Pv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    Cc.exports = Mv;
  });
  var Nc = l((t9, wc) => {
    var xv = Zt();
    function Fv(e) {
      var t = xv(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    wc.exports = Fv;
  });
  var Mc = l((n9, Pc) => {
    var Dv = Zt();
    function Uv(e) {
      return Dv(this, e).get(e);
    }
    Pc.exports = Uv;
  });
  var Fc = l((r9, xc) => {
    var qv = Zt();
    function Vv(e) {
      return qv(this, e).has(e);
    }
    xc.exports = Vv;
  });
  var Uc = l((i9, Dc) => {
    var Gv = Zt();
    function kv(e, t) {
      var n = Gv(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    Dc.exports = kv;
  });
  var wn = l((a9, qc) => {
    var Bv = Ac(),
      Xv = Nc(),
      Wv = Mc(),
      Hv = Fc(),
      zv = Uc();
    function wt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    wt.prototype.clear = Bv;
    wt.prototype.delete = Xv;
    wt.prototype.get = Wv;
    wt.prototype.has = Hv;
    wt.prototype.set = zv;
    qc.exports = wt;
  });
  var Gc = l((o9, Vc) => {
    var Yv = Kt(),
      Qv = Cn(),
      jv = wn(),
      Kv = 200;
    function $v(e, t) {
      var n = this.__data__;
      if (n instanceof Yv) {
        var r = n.__data__;
        if (!Qv || r.length < Kv - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new jv(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    Vc.exports = $v;
  });
  var li = l((s9, kc) => {
    var Zv = Kt(),
      Jv = Xs(),
      em = Hs(),
      tm = Ys(),
      nm = js(),
      rm = Gc();
    function Nt(e) {
      var t = (this.__data__ = new Zv(e));
      this.size = t.size;
    }
    Nt.prototype.clear = Jv;
    Nt.prototype.delete = em;
    Nt.prototype.get = tm;
    Nt.prototype.has = nm;
    Nt.prototype.set = rm;
    kc.exports = Nt;
  });
  var Xc = l((c9, Bc) => {
    var im = "__lodash_hash_undefined__";
    function am(e) {
      return this.__data__.set(e, im), this;
    }
    Bc.exports = am;
  });
  var Hc = l((u9, Wc) => {
    function om(e) {
      return this.__data__.has(e);
    }
    Wc.exports = om;
  });
  var Yc = l((l9, zc) => {
    var sm = wn(),
      cm = Xc(),
      um = Hc();
    function Nn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new sm(); ++t < n; ) this.add(e[t]);
    }
    Nn.prototype.add = Nn.prototype.push = cm;
    Nn.prototype.has = um;
    zc.exports = Nn;
  });
  var jc = l((f9, Qc) => {
    function lm(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    Qc.exports = lm;
  });
  var $c = l((d9, Kc) => {
    function fm(e, t) {
      return e.has(t);
    }
    Kc.exports = fm;
  });
  var fi = l((p9, Zc) => {
    var dm = Yc(),
      pm = jc(),
      gm = $c(),
      Em = 1,
      ym = 2;
    function hm(e, t, n, r, a, i) {
      var o = n & Em,
        s = e.length,
        c = t.length;
      if (s != c && !(o && c > s)) return !1;
      var f = i.get(e),
        T = i.get(t);
      if (f && T) return f == t && T == e;
      var y = -1,
        p = !0,
        h = n & ym ? new dm() : void 0;
      for (i.set(e, t), i.set(t, e); ++y < s; ) {
        var _ = e[y],
          m = t[y];
        if (r) var A = o ? r(m, _, y, t, e, i) : r(_, m, y, e, t, i);
        if (A !== void 0) {
          if (A) continue;
          p = !1;
          break;
        }
        if (h) {
          if (
            !pm(t, function (b, C) {
              if (!gm(h, C) && (_ === b || a(_, b, n, r, i))) return h.push(C);
            })
          ) {
            p = !1;
            break;
          }
        } else if (!(_ === m || a(_, m, n, r, i))) {
          p = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), p;
    }
    Zc.exports = hm;
  });
  var eu = l((g9, Jc) => {
    var Im = Be(),
      Tm = Im.Uint8Array;
    Jc.exports = Tm;
  });
  var nu = l((E9, tu) => {
    function vm(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, a) {
          n[++t] = [a, r];
        }),
        n
      );
    }
    tu.exports = vm;
  });
  var iu = l((y9, ru) => {
    function mm(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    ru.exports = mm;
  });
  var uu = l((h9, cu) => {
    var au = Ot(),
      ou = eu(),
      _m = Ln(),
      bm = fi(),
      Om = nu(),
      Sm = iu(),
      Am = 1,
      Rm = 2,
      Lm = "[object Boolean]",
      Cm = "[object Date]",
      wm = "[object Error]",
      Nm = "[object Map]",
      Pm = "[object Number]",
      Mm = "[object RegExp]",
      xm = "[object Set]",
      Fm = "[object String]",
      Dm = "[object Symbol]",
      Um = "[object ArrayBuffer]",
      qm = "[object DataView]",
      su = au ? au.prototype : void 0,
      di = su ? su.valueOf : void 0;
    function Vm(e, t, n, r, a, i, o) {
      switch (n) {
        case qm:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case Um:
          return !(e.byteLength != t.byteLength || !i(new ou(e), new ou(t)));
        case Lm:
        case Cm:
        case Pm:
          return _m(+e, +t);
        case wm:
          return e.name == t.name && e.message == t.message;
        case Mm:
        case Fm:
          return e == t + "";
        case Nm:
          var s = Om;
        case xm:
          var c = r & Am;
          if ((s || (s = Sm), e.size != t.size && !c)) return !1;
          var f = o.get(e);
          if (f) return f == t;
          (r |= Rm), o.set(e, t);
          var T = bm(s(e), s(t), r, a, i, o);
          return o.delete(e), T;
        case Dm:
          if (di) return di.call(e) == di.call(t);
      }
      return !1;
    }
    cu.exports = Vm;
  });
  var Pn = l((I9, lu) => {
    function Gm(e, t) {
      for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
      return e;
    }
    lu.exports = Gm;
  });
  var be = l((T9, fu) => {
    var km = Array.isArray;
    fu.exports = km;
  });
  var pi = l((v9, du) => {
    var Bm = Pn(),
      Xm = be();
    function Wm(e, t, n) {
      var r = t(e);
      return Xm(e) ? r : Bm(r, n(e));
    }
    du.exports = Wm;
  });
  var gu = l((m9, pu) => {
    function Hm(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
        var o = e[n];
        t(o, n, e) && (i[a++] = o);
      }
      return i;
    }
    pu.exports = Hm;
  });
  var gi = l((_9, Eu) => {
    function zm() {
      return [];
    }
    Eu.exports = zm;
  });
  var Ei = l((b9, hu) => {
    var Ym = gu(),
      Qm = gi(),
      jm = Object.prototype,
      Km = jm.propertyIsEnumerable,
      yu = Object.getOwnPropertySymbols,
      $m = yu
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                Ym(yu(e), function (t) {
                  return Km.call(e, t);
                }));
          }
        : Qm;
    hu.exports = $m;
  });
  var Tu = l((O9, Iu) => {
    function Zm(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    Iu.exports = Zm;
  });
  var mu = l((S9, vu) => {
    var Jm = rt(),
      e_ = Je(),
      t_ = "[object Arguments]";
    function n_(e) {
      return e_(e) && Jm(e) == t_;
    }
    vu.exports = n_;
  });
  var Jt = l((A9, Ou) => {
    var _u = mu(),
      r_ = Je(),
      bu = Object.prototype,
      i_ = bu.hasOwnProperty,
      a_ = bu.propertyIsEnumerable,
      o_ = _u(
        (function () {
          return arguments;
        })()
      )
        ? _u
        : function (e) {
            return r_(e) && i_.call(e, "callee") && !a_.call(e, "callee");
          };
    Ou.exports = o_;
  });
  var Au = l((R9, Su) => {
    function s_() {
      return !1;
    }
    Su.exports = s_;
  });
  var Mn = l((en, Pt) => {
    var c_ = Be(),
      u_ = Au(),
      Cu = typeof en == "object" && en && !en.nodeType && en,
      Ru = Cu && typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
      l_ = Ru && Ru.exports === Cu,
      Lu = l_ ? c_.Buffer : void 0,
      f_ = Lu ? Lu.isBuffer : void 0,
      d_ = f_ || u_;
    Pt.exports = d_;
  });
  var xn = l((L9, wu) => {
    var p_ = 9007199254740991,
      g_ = /^(?:0|[1-9]\d*)$/;
    function E_(e, t) {
      var n = typeof e;
      return (
        (t = t ?? p_),
        !!t &&
          (n == "number" || (n != "symbol" && g_.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    wu.exports = E_;
  });
  var Fn = l((C9, Nu) => {
    var y_ = 9007199254740991;
    function h_(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= y_;
    }
    Nu.exports = h_;
  });
  var Mu = l((w9, Pu) => {
    var I_ = rt(),
      T_ = Fn(),
      v_ = Je(),
      m_ = "[object Arguments]",
      __ = "[object Array]",
      b_ = "[object Boolean]",
      O_ = "[object Date]",
      S_ = "[object Error]",
      A_ = "[object Function]",
      R_ = "[object Map]",
      L_ = "[object Number]",
      C_ = "[object Object]",
      w_ = "[object RegExp]",
      N_ = "[object Set]",
      P_ = "[object String]",
      M_ = "[object WeakMap]",
      x_ = "[object ArrayBuffer]",
      F_ = "[object DataView]",
      D_ = "[object Float32Array]",
      U_ = "[object Float64Array]",
      q_ = "[object Int8Array]",
      V_ = "[object Int16Array]",
      G_ = "[object Int32Array]",
      k_ = "[object Uint8Array]",
      B_ = "[object Uint8ClampedArray]",
      X_ = "[object Uint16Array]",
      W_ = "[object Uint32Array]",
      Ee = {};
    Ee[D_] =
      Ee[U_] =
      Ee[q_] =
      Ee[V_] =
      Ee[G_] =
      Ee[k_] =
      Ee[B_] =
      Ee[X_] =
      Ee[W_] =
        !0;
    Ee[m_] =
      Ee[__] =
      Ee[x_] =
      Ee[b_] =
      Ee[F_] =
      Ee[O_] =
      Ee[S_] =
      Ee[A_] =
      Ee[R_] =
      Ee[L_] =
      Ee[C_] =
      Ee[w_] =
      Ee[N_] =
      Ee[P_] =
      Ee[M_] =
        !1;
    function H_(e) {
      return v_(e) && T_(e.length) && !!Ee[I_(e)];
    }
    Pu.exports = H_;
  });
  var Fu = l((N9, xu) => {
    function z_(e) {
      return function (t) {
        return e(t);
      };
    }
    xu.exports = z_;
  });
  var Uu = l((tn, Mt) => {
    var Y_ = xr(),
      Du = typeof tn == "object" && tn && !tn.nodeType && tn,
      nn = Du && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
      Q_ = nn && nn.exports === Du,
      yi = Q_ && Y_.process,
      j_ = (function () {
        try {
          var e = nn && nn.require && nn.require("util").types;
          return e || (yi && yi.binding && yi.binding("util"));
        } catch {}
      })();
    Mt.exports = j_;
  });
  var Dn = l((P9, Gu) => {
    var K_ = Mu(),
      $_ = Fu(),
      qu = Uu(),
      Vu = qu && qu.isTypedArray,
      Z_ = Vu ? $_(Vu) : K_;
    Gu.exports = Z_;
  });
  var hi = l((M9, ku) => {
    var J_ = Tu(),
      eb = Jt(),
      tb = be(),
      nb = Mn(),
      rb = xn(),
      ib = Dn(),
      ab = Object.prototype,
      ob = ab.hasOwnProperty;
    function sb(e, t) {
      var n = tb(e),
        r = !n && eb(e),
        a = !n && !r && nb(e),
        i = !n && !r && !a && ib(e),
        o = n || r || a || i,
        s = o ? J_(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || ob.call(e, f)) &&
          !(
            o &&
            (f == "length" ||
              (a && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              rb(f, c))
          ) &&
          s.push(f);
      return s;
    }
    ku.exports = sb;
  });
  var Un = l((x9, Bu) => {
    var cb = Object.prototype;
    function ub(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || cb;
      return e === n;
    }
    Bu.exports = ub;
  });
  var Wu = l((F9, Xu) => {
    var lb = Fr(),
      fb = lb(Object.keys, Object);
    Xu.exports = fb;
  });
  var qn = l((D9, Hu) => {
    var db = Un(),
      pb = Wu(),
      gb = Object.prototype,
      Eb = gb.hasOwnProperty;
    function yb(e) {
      if (!db(e)) return pb(e);
      var t = [];
      for (var n in Object(e)) Eb.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    Hu.exports = yb;
  });
  var pt = l((U9, zu) => {
    var hb = si(),
      Ib = Fn();
    function Tb(e) {
      return e != null && Ib(e.length) && !hb(e);
    }
    zu.exports = Tb;
  });
  var rn = l((q9, Yu) => {
    var vb = hi(),
      mb = qn(),
      _b = pt();
    function bb(e) {
      return _b(e) ? vb(e) : mb(e);
    }
    Yu.exports = bb;
  });
  var ju = l((V9, Qu) => {
    var Ob = pi(),
      Sb = Ei(),
      Ab = rn();
    function Rb(e) {
      return Ob(e, Ab, Sb);
    }
    Qu.exports = Rb;
  });
  var Zu = l((G9, $u) => {
    var Ku = ju(),
      Lb = 1,
      Cb = Object.prototype,
      wb = Cb.hasOwnProperty;
    function Nb(e, t, n, r, a, i) {
      var o = n & Lb,
        s = Ku(e),
        c = s.length,
        f = Ku(t),
        T = f.length;
      if (c != T && !o) return !1;
      for (var y = c; y--; ) {
        var p = s[y];
        if (!(o ? p in t : wb.call(t, p))) return !1;
      }
      var h = i.get(e),
        _ = i.get(t);
      if (h && _) return h == t && _ == e;
      var m = !0;
      i.set(e, t), i.set(t, e);
      for (var A = o; ++y < c; ) {
        p = s[y];
        var b = e[p],
          C = t[p];
        if (r) var R = o ? r(C, b, p, t, e, i) : r(b, C, p, e, t, i);
        if (!(R === void 0 ? b === C || a(b, C, n, r, i) : R)) {
          m = !1;
          break;
        }
        A || (A = p == "constructor");
      }
      if (m && !A) {
        var N = e.constructor,
          x = t.constructor;
        N != x &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof N == "function" &&
            N instanceof N &&
            typeof x == "function" &&
            x instanceof x
          ) &&
          (m = !1);
      }
      return i.delete(e), i.delete(t), m;
    }
    $u.exports = Nb;
  });
  var el = l((k9, Ju) => {
    var Pb = it(),
      Mb = Be(),
      xb = Pb(Mb, "DataView");
    Ju.exports = xb;
  });
  var nl = l((B9, tl) => {
    var Fb = it(),
      Db = Be(),
      Ub = Fb(Db, "Promise");
    tl.exports = Ub;
  });
  var il = l((X9, rl) => {
    var qb = it(),
      Vb = Be(),
      Gb = qb(Vb, "Set");
    rl.exports = Gb;
  });
  var Ii = l((W9, al) => {
    var kb = it(),
      Bb = Be(),
      Xb = kb(Bb, "WeakMap");
    al.exports = Xb;
  });
  var Vn = l((H9, dl) => {
    var Ti = el(),
      vi = Cn(),
      mi = nl(),
      _i = il(),
      bi = Ii(),
      fl = rt(),
      xt = ui(),
      ol = "[object Map]",
      Wb = "[object Object]",
      sl = "[object Promise]",
      cl = "[object Set]",
      ul = "[object WeakMap]",
      ll = "[object DataView]",
      Hb = xt(Ti),
      zb = xt(vi),
      Yb = xt(mi),
      Qb = xt(_i),
      jb = xt(bi),
      gt = fl;
    ((Ti && gt(new Ti(new ArrayBuffer(1))) != ll) ||
      (vi && gt(new vi()) != ol) ||
      (mi && gt(mi.resolve()) != sl) ||
      (_i && gt(new _i()) != cl) ||
      (bi && gt(new bi()) != ul)) &&
      (gt = function (e) {
        var t = fl(e),
          n = t == Wb ? e.constructor : void 0,
          r = n ? xt(n) : "";
        if (r)
          switch (r) {
            case Hb:
              return ll;
            case zb:
              return ol;
            case Yb:
              return sl;
            case Qb:
              return cl;
            case jb:
              return ul;
          }
        return t;
      });
    dl.exports = gt;
  });
  var vl = l((z9, Tl) => {
    var Oi = li(),
      Kb = fi(),
      $b = uu(),
      Zb = Zu(),
      pl = Vn(),
      gl = be(),
      El = Mn(),
      Jb = Dn(),
      eO = 1,
      yl = "[object Arguments]",
      hl = "[object Array]",
      Gn = "[object Object]",
      tO = Object.prototype,
      Il = tO.hasOwnProperty;
    function nO(e, t, n, r, a, i) {
      var o = gl(e),
        s = gl(t),
        c = o ? hl : pl(e),
        f = s ? hl : pl(t);
      (c = c == yl ? Gn : c), (f = f == yl ? Gn : f);
      var T = c == Gn,
        y = f == Gn,
        p = c == f;
      if (p && El(e)) {
        if (!El(t)) return !1;
        (o = !0), (T = !1);
      }
      if (p && !T)
        return (
          i || (i = new Oi()),
          o || Jb(e) ? Kb(e, t, n, r, a, i) : $b(e, t, c, n, r, a, i)
        );
      if (!(n & eO)) {
        var h = T && Il.call(e, "__wrapped__"),
          _ = y && Il.call(t, "__wrapped__");
        if (h || _) {
          var m = h ? e.value() : e,
            A = _ ? t.value() : t;
          return i || (i = new Oi()), a(m, A, n, r, i);
        }
      }
      return p ? (i || (i = new Oi()), Zb(e, t, n, r, a, i)) : !1;
    }
    Tl.exports = nO;
  });
  var Si = l((Y9, bl) => {
    var rO = vl(),
      ml = Je();
    function _l(e, t, n, r, a) {
      return e === t
        ? !0
        : e == null || t == null || (!ml(e) && !ml(t))
        ? e !== e && t !== t
        : rO(e, t, n, r, _l, a);
    }
    bl.exports = _l;
  });
  var Sl = l((Q9, Ol) => {
    var iO = li(),
      aO = Si(),
      oO = 1,
      sO = 2;
    function cO(e, t, n, r) {
      var a = n.length,
        i = a,
        o = !r;
      if (e == null) return !i;
      for (e = Object(e); a--; ) {
        var s = n[a];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++a < i; ) {
        s = n[a];
        var c = s[0],
          f = e[c],
          T = s[1];
        if (o && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var y = new iO();
          if (r) var p = r(f, T, c, e, t, y);
          if (!(p === void 0 ? aO(T, f, oO | sO, r, y) : p)) return !1;
        }
      }
      return !0;
    }
    Ol.exports = cO;
  });
  var Ai = l((j9, Al) => {
    var uO = ze();
    function lO(e) {
      return e === e && !uO(e);
    }
    Al.exports = lO;
  });
  var Ll = l((K9, Rl) => {
    var fO = Ai(),
      dO = rn();
    function pO(e) {
      for (var t = dO(e), n = t.length; n--; ) {
        var r = t[n],
          a = e[r];
        t[n] = [r, a, fO(a)];
      }
      return t;
    }
    Rl.exports = pO;
  });
  var Ri = l(($9, Cl) => {
    function gO(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    Cl.exports = gO;
  });
  var Nl = l((Z9, wl) => {
    var EO = Sl(),
      yO = Ll(),
      hO = Ri();
    function IO(e) {
      var t = yO(e);
      return t.length == 1 && t[0][2]
        ? hO(t[0][0], t[0][1])
        : function (n) {
            return n === e || EO(n, e, t);
          };
    }
    wl.exports = IO;
  });
  var an = l((J9, Pl) => {
    var TO = rt(),
      vO = Je(),
      mO = "[object Symbol]";
    function _O(e) {
      return typeof e == "symbol" || (vO(e) && TO(e) == mO);
    }
    Pl.exports = _O;
  });
  var kn = l((eP, Ml) => {
    var bO = be(),
      OO = an(),
      SO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      AO = /^\w*$/;
    function RO(e, t) {
      if (bO(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        OO(e)
        ? !0
        : AO.test(e) || !SO.test(e) || (t != null && e in Object(t));
    }
    Ml.exports = RO;
  });
  var Dl = l((tP, Fl) => {
    var xl = wn(),
      LO = "Expected a function";
    function Li(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(LO);
      var n = function () {
        var r = arguments,
          a = t ? t.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(a)) return i.get(a);
        var o = e.apply(this, r);
        return (n.cache = i.set(a, o) || i), o;
      };
      return (n.cache = new (Li.Cache || xl)()), n;
    }
    Li.Cache = xl;
    Fl.exports = Li;
  });
  var ql = l((nP, Ul) => {
    var CO = Dl(),
      wO = 500;
    function NO(e) {
      var t = CO(e, function (r) {
          return n.size === wO && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    Ul.exports = NO;
  });
  var Gl = l((rP, Vl) => {
    var PO = ql(),
      MO =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      xO = /\\(\\)?/g,
      FO = PO(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(MO, function (n, r, a, i) {
            t.push(a ? i.replace(xO, "$1") : r || n);
          }),
          t
        );
      });
    Vl.exports = FO;
  });
  var Ci = l((iP, kl) => {
    function DO(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
        a[n] = t(e[n], n, e);
      return a;
    }
    kl.exports = DO;
  });
  var Yl = l((aP, zl) => {
    var Bl = Ot(),
      UO = Ci(),
      qO = be(),
      VO = an(),
      GO = 1 / 0,
      Xl = Bl ? Bl.prototype : void 0,
      Wl = Xl ? Xl.toString : void 0;
    function Hl(e) {
      if (typeof e == "string") return e;
      if (qO(e)) return UO(e, Hl) + "";
      if (VO(e)) return Wl ? Wl.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -GO ? "-0" : t;
    }
    zl.exports = Hl;
  });
  var jl = l((oP, Ql) => {
    var kO = Yl();
    function BO(e) {
      return e == null ? "" : kO(e);
    }
    Ql.exports = BO;
  });
  var on = l((sP, Kl) => {
    var XO = be(),
      WO = kn(),
      HO = Gl(),
      zO = jl();
    function YO(e, t) {
      return XO(e) ? e : WO(e, t) ? [e] : HO(zO(e));
    }
    Kl.exports = YO;
  });
  var Ft = l((cP, $l) => {
    var QO = an(),
      jO = 1 / 0;
    function KO(e) {
      if (typeof e == "string" || QO(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -jO ? "-0" : t;
    }
    $l.exports = KO;
  });
  var Bn = l((uP, Zl) => {
    var $O = on(),
      ZO = Ft();
    function JO(e, t) {
      t = $O(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[ZO(t[n++])];
      return n && n == r ? e : void 0;
    }
    Zl.exports = JO;
  });
  var Xn = l((lP, Jl) => {
    var e1 = Bn();
    function t1(e, t, n) {
      var r = e == null ? void 0 : e1(e, t);
      return r === void 0 ? n : r;
    }
    Jl.exports = t1;
  });
  var tf = l((fP, ef) => {
    function n1(e, t) {
      return e != null && t in Object(e);
    }
    ef.exports = n1;
  });
  var rf = l((dP, nf) => {
    var r1 = on(),
      i1 = Jt(),
      a1 = be(),
      o1 = xn(),
      s1 = Fn(),
      c1 = Ft();
    function u1(e, t, n) {
      t = r1(t, e);
      for (var r = -1, a = t.length, i = !1; ++r < a; ) {
        var o = c1(t[r]);
        if (!(i = e != null && n(e, o))) break;
        e = e[o];
      }
      return i || ++r != a
        ? i
        : ((a = e == null ? 0 : e.length),
          !!a && s1(a) && o1(o, a) && (a1(e) || i1(e)));
    }
    nf.exports = u1;
  });
  var of = l((pP, af) => {
    var l1 = tf(),
      f1 = rf();
    function d1(e, t) {
      return e != null && f1(e, t, l1);
    }
    af.exports = d1;
  });
  var cf = l((gP, sf) => {
    var p1 = Si(),
      g1 = Xn(),
      E1 = of(),
      y1 = kn(),
      h1 = Ai(),
      I1 = Ri(),
      T1 = Ft(),
      v1 = 1,
      m1 = 2;
    function _1(e, t) {
      return y1(e) && h1(t)
        ? I1(T1(e), t)
        : function (n) {
            var r = g1(n, e);
            return r === void 0 && r === t ? E1(n, e) : p1(t, r, v1 | m1);
          };
    }
    sf.exports = _1;
  });
  var Wn = l((EP, uf) => {
    function b1(e) {
      return e;
    }
    uf.exports = b1;
  });
  var wi = l((yP, lf) => {
    function O1(e) {
      return function (t) {
        return t?.[e];
      };
    }
    lf.exports = O1;
  });
  var df = l((hP, ff) => {
    var S1 = Bn();
    function A1(e) {
      return function (t) {
        return S1(t, e);
      };
    }
    ff.exports = A1;
  });
  var gf = l((IP, pf) => {
    var R1 = wi(),
      L1 = df(),
      C1 = kn(),
      w1 = Ft();
    function N1(e) {
      return C1(e) ? R1(w1(e)) : L1(e);
    }
    pf.exports = N1;
  });
  var at = l((TP, Ef) => {
    var P1 = Nl(),
      M1 = cf(),
      x1 = Wn(),
      F1 = be(),
      D1 = gf();
    function U1(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? x1
        : typeof e == "object"
        ? F1(e)
          ? M1(e[0], e[1])
          : P1(e)
        : D1(e);
    }
    Ef.exports = U1;
  });
  var Ni = l((vP, yf) => {
    var q1 = at(),
      V1 = pt(),
      G1 = rn();
    function k1(e) {
      return function (t, n, r) {
        var a = Object(t);
        if (!V1(t)) {
          var i = q1(n, 3);
          (t = G1(t)),
            (n = function (s) {
              return i(a[s], s, a);
            });
        }
        var o = e(t, n, r);
        return o > -1 ? a[i ? t[o] : o] : void 0;
      };
    }
    yf.exports = k1;
  });
  var Pi = l((mP, hf) => {
    function B1(e, t, n, r) {
      for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    hf.exports = B1;
  });
  var Tf = l((_P, If) => {
    var X1 = /\s/;
    function W1(e) {
      for (var t = e.length; t-- && X1.test(e.charAt(t)); );
      return t;
    }
    If.exports = W1;
  });
  var mf = l((bP, vf) => {
    var H1 = Tf(),
      z1 = /^\s+/;
    function Y1(e) {
      return e && e.slice(0, H1(e) + 1).replace(z1, "");
    }
    vf.exports = Y1;
  });
  var Hn = l((OP, Of) => {
    var Q1 = mf(),
      _f = ze(),
      j1 = an(),
      bf = 0 / 0,
      K1 = /^[-+]0x[0-9a-f]+$/i,
      $1 = /^0b[01]+$/i,
      Z1 = /^0o[0-7]+$/i,
      J1 = parseInt;
    function e2(e) {
      if (typeof e == "number") return e;
      if (j1(e)) return bf;
      if (_f(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = _f(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = Q1(e);
      var n = $1.test(e);
      return n || Z1.test(e) ? J1(e.slice(2), n ? 2 : 8) : K1.test(e) ? bf : +e;
    }
    Of.exports = e2;
  });
  var Rf = l((SP, Af) => {
    var t2 = Hn(),
      Sf = 1 / 0,
      n2 = 17976931348623157e292;
    function r2(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = t2(e)), e === Sf || e === -Sf)) {
        var t = e < 0 ? -1 : 1;
        return t * n2;
      }
      return e === e ? e : 0;
    }
    Af.exports = r2;
  });
  var Mi = l((AP, Lf) => {
    var i2 = Rf();
    function a2(e) {
      var t = i2(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    Lf.exports = a2;
  });
  var wf = l((RP, Cf) => {
    var o2 = Pi(),
      s2 = at(),
      c2 = Mi(),
      u2 = Math.max;
    function l2(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = n == null ? 0 : c2(n);
      return a < 0 && (a = u2(r + a, 0)), o2(e, s2(t, 3), a);
    }
    Cf.exports = l2;
  });
  var xi = l((LP, Nf) => {
    var f2 = Ni(),
      d2 = wf(),
      p2 = f2(d2);
    Nf.exports = p2;
  });
  var Yn = l((Fi) => {
    "use strict";
    Object.defineProperty(Fi, "__esModule", { value: !0 });
    function g2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    g2(Fi, {
      ELEMENT_MATCHES: function () {
        return h2;
      },
      FLEX_PREFIXED: function () {
        return I2;
      },
      IS_BROWSER_ENV: function () {
        return Mf;
      },
      TRANSFORM_PREFIXED: function () {
        return xf;
      },
      TRANSFORM_STYLE_PREFIXED: function () {
        return T2;
      },
      withBrowser: function () {
        return zn;
      },
    });
    var E2 = y2(xi());
    function y2(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Mf = typeof window < "u",
      zn = (e, t) => (Mf ? e() : t),
      h2 = zn(() =>
        (0, E2.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector",
          ],
          (e) => e in Element.prototype
        )
      ),
      I2 = zn(() => {
        let e = document.createElement("i"),
          t = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box",
          ],
          n = "";
        try {
          let { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a];
            if (((e.style.display = i), e.style.display === i)) return i;
          }
          return n;
        } catch {
          return n;
        }
      }, "flex"),
      xf = zn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            n = "Transform",
            { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a] + n;
            if (e.style[i] !== void 0) return i;
          }
        }
        return "transform";
      }, "transform"),
      Pf = xf.split("transform")[0],
      T2 = Pf ? Pf + "TransformStyle" : "transformStyle";
  });
  var Di = l((wP, Vf) => {
    var v2 = 4,
      m2 = 0.001,
      _2 = 1e-7,
      b2 = 10,
      sn = 11,
      Qn = 1 / (sn - 1),
      O2 = typeof Float32Array == "function";
    function Ff(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Df(e, t) {
      return 3 * t - 6 * e;
    }
    function Uf(e) {
      return 3 * e;
    }
    function jn(e, t, n) {
      return ((Ff(t, n) * e + Df(t, n)) * e + Uf(t)) * e;
    }
    function qf(e, t, n) {
      return 3 * Ff(t, n) * e * e + 2 * Df(t, n) * e + Uf(t);
    }
    function S2(e, t, n, r, a) {
      var i,
        o,
        s = 0;
      do
        (o = t + (n - t) / 2), (i = jn(o, r, a) - e), i > 0 ? (n = o) : (t = o);
      while (Math.abs(i) > _2 && ++s < b2);
      return o;
    }
    function A2(e, t, n, r) {
      for (var a = 0; a < v2; ++a) {
        var i = qf(t, n, r);
        if (i === 0) return t;
        var o = jn(t, n, r) - e;
        t -= o / i;
      }
      return t;
    }
    Vf.exports = function (t, n, r, a) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = O2 ? new Float32Array(sn) : new Array(sn);
      if (t !== n || r !== a)
        for (var o = 0; o < sn; ++o) i[o] = jn(o * Qn, t, r);
      function s(c) {
        for (var f = 0, T = 1, y = sn - 1; T !== y && i[T] <= c; ++T) f += Qn;
        --T;
        var p = (c - i[T]) / (i[T + 1] - i[T]),
          h = f + p * Qn,
          _ = qf(h, t, r);
        return _ >= m2 ? A2(c, h, t, r) : _ === 0 ? h : S2(c, f, f + Qn, t, r);
      }
      return function (f) {
        return t === n && r === a
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : jn(s(f), n, a);
      };
    };
  });
  var qi = l((Ui) => {
    "use strict";
    Object.defineProperty(Ui, "__esModule", { value: !0 });
    function R2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    R2(Ui, {
      bounce: function () {
        return l7;
      },
      bouncePast: function () {
        return f7;
      },
      ease: function () {
        return C2;
      },
      easeIn: function () {
        return w2;
      },
      easeInOut: function () {
        return P2;
      },
      easeOut: function () {
        return N2;
      },
      inBack: function () {
        return t7;
      },
      inCirc: function () {
        return $2;
      },
      inCubic: function () {
        return D2;
      },
      inElastic: function () {
        return i7;
      },
      inExpo: function () {
        return Q2;
      },
      inOutBack: function () {
        return r7;
      },
      inOutCirc: function () {
        return J2;
      },
      inOutCubic: function () {
        return q2;
      },
      inOutElastic: function () {
        return o7;
      },
      inOutExpo: function () {
        return K2;
      },
      inOutQuad: function () {
        return F2;
      },
      inOutQuart: function () {
        return k2;
      },
      inOutQuint: function () {
        return W2;
      },
      inOutSine: function () {
        return Y2;
      },
      inQuad: function () {
        return M2;
      },
      inQuart: function () {
        return V2;
      },
      inQuint: function () {
        return B2;
      },
      inSine: function () {
        return H2;
      },
      outBack: function () {
        return n7;
      },
      outBounce: function () {
        return e7;
      },
      outCirc: function () {
        return Z2;
      },
      outCubic: function () {
        return U2;
      },
      outElastic: function () {
        return a7;
      },
      outExpo: function () {
        return j2;
      },
      outQuad: function () {
        return x2;
      },
      outQuart: function () {
        return G2;
      },
      outQuint: function () {
        return X2;
      },
      outSine: function () {
        return z2;
      },
      swingFrom: function () {
        return c7;
      },
      swingFromTo: function () {
        return s7;
      },
      swingTo: function () {
        return u7;
      },
    });
    var Kn = L2(Di());
    function L2(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var et = 1.70158,
      C2 = (0, Kn.default)(0.25, 0.1, 0.25, 1),
      w2 = (0, Kn.default)(0.42, 0, 1, 1),
      N2 = (0, Kn.default)(0, 0, 0.58, 1),
      P2 = (0, Kn.default)(0.42, 0, 0.58, 1);
    function M2(e) {
      return Math.pow(e, 2);
    }
    function x2(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function F2(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function D2(e) {
      return Math.pow(e, 3);
    }
    function U2(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function q2(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function V2(e) {
      return Math.pow(e, 4);
    }
    function G2(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function k2(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function B2(e) {
      return Math.pow(e, 5);
    }
    function X2(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function W2(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function H2(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function z2(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function Y2(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function Q2(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function j2(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function K2(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function $2(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function Z2(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function J2(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function e7(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function t7(e) {
      let t = et;
      return e * e * ((t + 1) * e - t);
    }
    function n7(e) {
      let t = et;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function r7(e) {
      let t = et;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function i7(e) {
      let t = et,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          -(
            r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / n)
          ));
    }
    function a7(e) {
      let t = et,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
            1);
    }
    function o7(e) {
      let t = et,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (n || (n = 0.3 * 1.5),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          e < 1
            ? -0.5 *
              (r *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n))
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                0.5 +
              1);
    }
    function s7(e) {
      let t = et;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function c7(e) {
      let t = et;
      return e * e * ((t + 1) * e - t);
    }
    function u7(e) {
      let t = et;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function l7(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function f7(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var ki = l((Gi) => {
    "use strict";
    Object.defineProperty(Gi, "__esModule", { value: !0 });
    function d7(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    d7(Gi, {
      applyEasing: function () {
        return h7;
      },
      createBezierEasing: function () {
        return y7;
      },
      optimizeFloat: function () {
        return Vi;
      },
    });
    var Gf = E7(qi()),
      p7 = g7(Di());
    function g7(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function kf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (kf = function (r) {
        return r ? n : t;
      })(e);
    }
    function E7(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = kf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    function Vi(e, t = 5, n = 10) {
      let r = Math.pow(n, t),
        a = Number(Math.round(e * r) / r);
      return Math.abs(a) > 1e-4 ? a : 0;
    }
    function y7(e) {
      return (0, p7.default)(...e);
    }
    function h7(e, t, n) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Vi(n ? (t > 0 ? n(t) : t) : t > 0 && e && Gf[e] ? Gf[e](t) : t);
    }
  });
  var Hf = l((Xi) => {
    "use strict";
    Object.defineProperty(Xi, "__esModule", { value: !0 });
    function I7(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    I7(Xi, {
      createElementState: function () {
        return Wf;
      },
      ixElements: function () {
        return P7;
      },
      mergeActionState: function () {
        return Bi;
      },
    });
    var $n = Rt(),
      Xf = we(),
      {
        HTML_ELEMENT: MP,
        PLAIN_OBJECT: T7,
        ABSTRACT_NODE: xP,
        CONFIG_X_VALUE: v7,
        CONFIG_Y_VALUE: m7,
        CONFIG_Z_VALUE: _7,
        CONFIG_VALUE: b7,
        CONFIG_X_UNIT: O7,
        CONFIG_Y_UNIT: S7,
        CONFIG_Z_UNIT: A7,
        CONFIG_UNIT: R7,
      } = Xf.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: L7,
        IX2_INSTANCE_ADDED: C7,
        IX2_ELEMENT_STATE_CHANGED: w7,
      } = Xf.IX2EngineActionTypes,
      Bf = {},
      N7 = "refState",
      P7 = (e = Bf, t = {}) => {
        switch (t.type) {
          case L7:
            return Bf;
          case C7: {
            let {
                elementId: n,
                element: r,
                origin: a,
                actionItem: i,
                refType: o,
              } = t.payload,
              { actionTypeId: s } = i,
              c = e;
            return (
              (0, $n.getIn)(c, [n, r]) !== r && (c = Wf(c, r, o, n, i)),
              Bi(c, n, s, a, i)
            );
          }
          case w7: {
            let {
              elementId: n,
              actionTypeId: r,
              current: a,
              actionItem: i,
            } = t.payload;
            return Bi(e, n, r, a, i);
          }
          default:
            return e;
        }
      };
    function Wf(e, t, n, r, a) {
      let i =
        n === T7 ? (0, $n.getIn)(a, ["config", "target", "objectId"]) : null;
      return (0, $n.mergeIn)(e, [r], { id: r, ref: t, refId: i, refType: n });
    }
    function Bi(e, t, n, r, a) {
      let i = x7(a),
        o = [t, N7, n];
      return (0, $n.mergeIn)(e, o, r, i);
    }
    var M7 = [
      [v7, O7],
      [m7, S7],
      [_7, A7],
      [b7, R7],
    ];
    function x7(e) {
      let { config: t } = e;
      return M7.reduce((n, r) => {
        let a = r[0],
          i = r[1],
          o = t[a],
          s = t[i];
        return o != null && s != null && (n[i] = s), n;
      }, {});
    }
  });
  var zf = l((Wi) => {
    "use strict";
    Object.defineProperty(Wi, "__esModule", { value: !0 });
    function F7(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    F7(Wi, {
      clearPlugin: function () {
        return B7;
      },
      createPluginInstance: function () {
        return G7;
      },
      getPluginConfig: function () {
        return D7;
      },
      getPluginDestination: function () {
        return V7;
      },
      getPluginDuration: function () {
        return U7;
      },
      getPluginOrigin: function () {
        return q7;
      },
      renderPlugin: function () {
        return k7;
      },
    });
    var D7 = (e) => e.value,
      U7 = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      q7 = (e) => e || { value: 0 },
      V7 = (e) => ({ value: e.value }),
      G7 = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      k7 = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      B7 = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var Qf = l((Hi) => {
    "use strict";
    Object.defineProperty(Hi, "__esModule", { value: !0 });
    function X7(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    X7(Hi, {
      clearPlugin: function () {
        return J7;
      },
      createPluginInstance: function () {
        return $7;
      },
      getPluginConfig: function () {
        return Y7;
      },
      getPluginDestination: function () {
        return K7;
      },
      getPluginDuration: function () {
        return Q7;
      },
      getPluginOrigin: function () {
        return j7;
      },
      renderPlugin: function () {
        return Z7;
      },
    });
    var W7 = (e) => document.querySelector(`[data-w-id="${e}"]`),
      H7 = () => window.Webflow.require("spline"),
      z7 = (e, t) => e.filter((n) => !t.includes(n)),
      Y7 = (e, t) => e.value[t],
      Q7 = () => null,
      Yf = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      j7 = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let i = Object.keys(e),
            o = z7(r, i);
          return o.length ? o.reduce((c, f) => ((c[f] = Yf[f]), c), e) : e;
        }
        return r.reduce((i, o) => ((i[o] = Yf[o]), i), {});
      },
      K7 = (e) => e.value,
      $7 = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? W7(n) : null;
      },
      Z7 = (e, t, n) => {
        let r = H7(),
          a = r.getInstance(e),
          i = n.config.target.objectId,
          o = (s) => {
            if (!s)
              throw new Error("Invalid spline app passed to renderSpline");
            let c = i && s.findObjectById(i);
            if (!c) return;
            let { PLUGIN_SPLINE: f } = t;
            f.positionX != null && (c.position.x = f.positionX),
              f.positionY != null && (c.position.y = f.positionY),
              f.positionZ != null && (c.position.z = f.positionZ),
              f.rotationX != null && (c.rotation.x = f.rotationX),
              f.rotationY != null && (c.rotation.y = f.rotationY),
              f.rotationZ != null && (c.rotation.z = f.rotationZ),
              f.scaleX != null && (c.scale.x = f.scaleX),
              f.scaleY != null && (c.scale.y = f.scaleY),
              f.scaleZ != null && (c.scale.z = f.scaleZ);
          };
        a ? o(a.spline) : r.setLoadHandler(e, o);
      },
      J7 = () => null;
  });
  var jf = l((Qi) => {
    "use strict";
    Object.defineProperty(Qi, "__esModule", { value: !0 });
    function eS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    eS(Qi, {
      clearPlugin: function () {
        return uS;
      },
      createPluginInstance: function () {
        return sS;
      },
      getPluginConfig: function () {
        return rS;
      },
      getPluginDestination: function () {
        return oS;
      },
      getPluginDuration: function () {
        return iS;
      },
      getPluginOrigin: function () {
        return aS;
      },
      renderPlugin: function () {
        return cS;
      },
    });
    var zi = "--wf-rive-fit",
      Yi = "--wf-rive-alignment",
      tS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      nS = () => window.Webflow.require("rive"),
      rS = (e, t) => e.value.inputs[t],
      iS = () => null,
      aS = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let a in r) r[a] == null && (n[a] = 0);
        return n;
      },
      oS = (e) => e.value.inputs ?? {},
      sS = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? tS(r) : null;
      },
      cS = (e, { PLUGIN_RIVE: t }, n) => {
        let r = nS(),
          a = r.getInstance(e),
          i = r.rive.StateMachineInputType,
          { name: o, inputs: s = {} } = n.config.value || {};
        function c(f) {
          if (f.loaded) T();
          else {
            let y = () => {
              T(), f?.off("load", y);
            };
            f?.on("load", y);
          }
          function T() {
            let y = f.stateMachineInputs(o);
            if (y != null) {
              if ((f.isPlaying || f.play(o, !1), zi in s || Yi in s)) {
                let p = f.layout,
                  h = s[zi] ?? p.fit,
                  _ = s[Yi] ?? p.alignment;
                (h !== p.fit || _ !== p.alignment) &&
                  (f.layout = p.copyWith({ fit: h, alignment: _ }));
              }
              for (let p in s) {
                if (p === zi || p === Yi) continue;
                let h = y.find((_) => _.name === p);
                if (h != null)
                  switch (h.type) {
                    case i.Boolean: {
                      if (s[p] != null) {
                        let _ = !!s[p];
                        h.value = _;
                      }
                      break;
                    }
                    case i.Number: {
                      let _ = t[p];
                      _ != null && (h.value = _);
                      break;
                    }
                    case i.Trigger: {
                      s[p] && h.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        a?.rive ? c(a.rive) : r.setLoadHandler(e, c);
      },
      uS = (e, t) => null;
  });
  var Ki = l((ji) => {
    "use strict";
    Object.defineProperty(ji, "__esModule", { value: !0 });
    Object.defineProperty(ji, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return lS;
      },
    });
    var Kf = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function lS(e) {
      let t,
        n,
        r,
        a = 1,
        i = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Kf[i] == "string" ? Kf[i].toLowerCase() : null) || i;
      if (s.startsWith("#")) {
        let c = s.substring(1);
        c.length === 3 || c.length === 4
          ? ((t = parseInt(c[0] + c[0], 16)),
            (n = parseInt(c[1] + c[1], 16)),
            (r = parseInt(c[2] + c[2], 16)),
            c.length === 4 && (a = parseInt(c[3] + c[3], 16) / 255))
          : (c.length === 6 || c.length === 8) &&
            ((t = parseInt(c.substring(0, 2), 16)),
            (n = parseInt(c.substring(2, 4), 16)),
            (r = parseInt(c.substring(4, 6), 16)),
            c.length === 8 && (a = parseInt(c.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let c = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(c[0], 10)),
          (n = parseInt(c[1], 10)),
          (r = parseInt(c[2], 10)),
          (a = parseFloat(c[3]));
      } else if (s.startsWith("rgb")) {
        let c = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(c[0], 10)),
          (n = parseInt(c[1], 10)),
          (r = parseInt(c[2], 10));
      } else if (s.startsWith("hsla")) {
        let c = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(c[0]),
          T = parseFloat(c[1].replace("%", "")) / 100,
          y = parseFloat(c[2].replace("%", "")) / 100;
        a = parseFloat(c[3]);
        let p = (1 - Math.abs(2 * y - 1)) * T,
          h = p * (1 - Math.abs(((f / 60) % 2) - 1)),
          _ = y - p / 2,
          m,
          A,
          b;
        f >= 0 && f < 60
          ? ((m = p), (A = h), (b = 0))
          : f >= 60 && f < 120
          ? ((m = h), (A = p), (b = 0))
          : f >= 120 && f < 180
          ? ((m = 0), (A = p), (b = h))
          : f >= 180 && f < 240
          ? ((m = 0), (A = h), (b = p))
          : f >= 240 && f < 300
          ? ((m = h), (A = 0), (b = p))
          : ((m = p), (A = 0), (b = h)),
          (t = Math.round((m + _) * 255)),
          (n = Math.round((A + _) * 255)),
          (r = Math.round((b + _) * 255));
      } else if (s.startsWith("hsl")) {
        let c = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(c[0]),
          T = parseFloat(c[1].replace("%", "")) / 100,
          y = parseFloat(c[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * y - 1)) * T,
          h = p * (1 - Math.abs(((f / 60) % 2) - 1)),
          _ = y - p / 2,
          m,
          A,
          b;
        f >= 0 && f < 60
          ? ((m = p), (A = h), (b = 0))
          : f >= 60 && f < 120
          ? ((m = h), (A = p), (b = 0))
          : f >= 120 && f < 180
          ? ((m = 0), (A = p), (b = h))
          : f >= 180 && f < 240
          ? ((m = 0), (A = h), (b = p))
          : f >= 240 && f < 300
          ? ((m = h), (A = 0), (b = p))
          : ((m = p), (A = 0), (b = h)),
          (t = Math.round((m + _) * 255)),
          (n = Math.round((A + _) * 255)),
          (r = Math.round((b + _) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: a };
    }
  });
  var $f = l(($i) => {
    "use strict";
    Object.defineProperty($i, "__esModule", { value: !0 });
    function fS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    fS($i, {
      clearPlugin: function () {
        return vS;
      },
      createPluginInstance: function () {
        return hS;
      },
      getPluginConfig: function () {
        return pS;
      },
      getPluginDestination: function () {
        return yS;
      },
      getPluginDuration: function () {
        return gS;
      },
      getPluginOrigin: function () {
        return ES;
      },
      renderPlugin: function () {
        return TS;
      },
    });
    var dS = Ki(),
      pS = (e, t) => e.value[t],
      gS = () => null,
      ES = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          a = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(a, 10) };
        if (n.unit === "%" || n.unit === "-") return { size: parseFloat(a) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, dS.normalizeColor)(a);
      },
      yS = (e) => e.value,
      hS = () => null,
      IS = {
        color: {
          match: ({ red: e, green: t, blue: n, alpha: r }) =>
            [e, t, n, r].every((a) => a != null),
          getValue: ({ red: e, green: t, blue: n, alpha: r }) =>
            `rgba(${e}, ${t}, ${n}, ${r})`,
        },
        size: {
          match: ({ size: e }) => e != null,
          getValue: ({ size: e }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`;
            }
          },
        },
      },
      TS = (e, t, n) => {
        let {
            target: { objectId: r },
            value: { unit: a },
          } = n.config,
          i = t.PLUGIN_VARIABLE,
          o = Object.values(IS).find((s) => s.match(i, a));
        o && document.documentElement.style.setProperty(r, o.getValue(i, a));
      },
      vS = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var Jf = l((Zi) => {
    "use strict";
    Object.defineProperty(Zi, "__esModule", { value: !0 });
    Object.defineProperty(Zi, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return SS;
      },
    });
    var Zn = we(),
      mS = Jn(zf()),
      _S = Jn(Qf()),
      bS = Jn(jf()),
      OS = Jn($f());
    function Zf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Zf = function (r) {
        return r ? n : t;
      })(e);
    }
    function Jn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Zf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var SS = new Map([
      [Zn.ActionTypeConsts.PLUGIN_LOTTIE, { ...mS }],
      [Zn.ActionTypeConsts.PLUGIN_SPLINE, { ..._S }],
      [Zn.ActionTypeConsts.PLUGIN_RIVE, { ...bS }],
      [Zn.ActionTypeConsts.PLUGIN_VARIABLE, { ...OS }],
    ]);
  });
  var ea = l((Ji) => {
    "use strict";
    Object.defineProperty(Ji, "__esModule", { value: !0 });
    function AS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    AS(Ji, {
      clearPlugin: function () {
        return FS;
      },
      createPluginInstance: function () {
        return MS;
      },
      getPluginConfig: function () {
        return CS;
      },
      getPluginDestination: function () {
        return PS;
      },
      getPluginDuration: function () {
        return NS;
      },
      getPluginOrigin: function () {
        return wS;
      },
      isPluginType: function () {
        return LS;
      },
      renderPlugin: function () {
        return xS;
      },
    });
    var RS = Yn(),
      ed = Jf();
    function LS(e) {
      return ed.pluginMethodMap.has(e);
    }
    var Et = (e) => (t) => {
        if (!RS.IS_BROWSER_ENV) return () => null;
        let n = ed.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      },
      CS = Et("getPluginConfig"),
      wS = Et("getPluginOrigin"),
      NS = Et("getPluginDuration"),
      PS = Et("getPluginDestination"),
      MS = Et("createPluginInstance"),
      xS = Et("renderPlugin"),
      FS = Et("clearPlugin");
  });
  var nd = l((XP, td) => {
    function DS(e, t) {
      return e == null || e !== e ? t : e;
    }
    td.exports = DS;
  });
  var id = l((WP, rd) => {
    function US(e, t, n, r) {
      var a = -1,
        i = e == null ? 0 : e.length;
      for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
      return n;
    }
    rd.exports = US;
  });
  var od = l((HP, ad) => {
    function qS(e) {
      return function (t, n, r) {
        for (var a = -1, i = Object(t), o = r(t), s = o.length; s--; ) {
          var c = o[e ? s : ++a];
          if (n(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    ad.exports = qS;
  });
  var cd = l((zP, sd) => {
    var VS = od(),
      GS = VS();
    sd.exports = GS;
  });
  var ta = l((YP, ud) => {
    var kS = cd(),
      BS = rn();
    function XS(e, t) {
      return e && kS(e, t, BS);
    }
    ud.exports = XS;
  });
  var fd = l((QP, ld) => {
    var WS = pt();
    function HS(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!WS(n)) return e(n, r);
        for (
          var a = n.length, i = t ? a : -1, o = Object(n);
          (t ? i-- : ++i < a) && r(o[i], i, o) !== !1;

        );
        return n;
      };
    }
    ld.exports = HS;
  });
  var na = l((jP, dd) => {
    var zS = ta(),
      YS = fd(),
      QS = YS(zS);
    dd.exports = QS;
  });
  var gd = l((KP, pd) => {
    function jS(e, t, n, r, a) {
      return (
        a(e, function (i, o, s) {
          n = r ? ((r = !1), i) : t(n, i, o, s);
        }),
        n
      );
    }
    pd.exports = jS;
  });
  var yd = l(($P, Ed) => {
    var KS = id(),
      $S = na(),
      ZS = at(),
      JS = gd(),
      eA = be();
    function tA(e, t, n) {
      var r = eA(e) ? KS : JS,
        a = arguments.length < 3;
      return r(e, ZS(t, 4), n, a, $S);
    }
    Ed.exports = tA;
  });
  var Id = l((ZP, hd) => {
    var nA = Pi(),
      rA = at(),
      iA = Mi(),
      aA = Math.max,
      oA = Math.min;
    function sA(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = r - 1;
      return (
        n !== void 0 &&
          ((a = iA(n)), (a = n < 0 ? aA(r + a, 0) : oA(a, r - 1))),
        nA(e, rA(t, 3), a, !0)
      );
    }
    hd.exports = sA;
  });
  var vd = l((JP, Td) => {
    var cA = Ni(),
      uA = Id(),
      lA = cA(uA);
    Td.exports = lA;
  });
  var _d = l((ra) => {
    "use strict";
    Object.defineProperty(ra, "__esModule", { value: !0 });
    Object.defineProperty(ra, "default", {
      enumerable: !0,
      get: function () {
        return dA;
      },
    });
    function md(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function fA(e, t) {
      if (md(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (let a = 0; a < n.length; a++)
        if (!Object.hasOwn(t, n[a]) || !md(e[n[a]], t[n[a]])) return !1;
      return !0;
    }
    var dA = fA;
  });
  var kd = l((da) => {
    "use strict";
    Object.defineProperty(da, "__esModule", { value: !0 });
    function pA(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    pA(da, {
      cleanupHTMLElement: function () {
        return dR;
      },
      clearAllStyles: function () {
        return fR;
      },
      clearObjectCache: function () {
        return PA;
      },
      getActionListProgress: function () {
        return gR;
      },
      getAffectedElements: function () {
        return la;
      },
      getComputedStyle: function () {
        return GA;
      },
      getDestinationValues: function () {
        return YA;
      },
      getElementId: function () {
        return DA;
      },
      getInstanceId: function () {
        return xA;
      },
      getInstanceOrigin: function () {
        return XA;
      },
      getItemConfigByKey: function () {
        return zA;
      },
      getMaxDurationItemIndex: function () {
        return Gd;
      },
      getNamespacedParameterId: function () {
        return hR;
      },
      getRenderType: function () {
        return Ud;
      },
      getStyleProp: function () {
        return QA;
      },
      mediaQueriesEqual: function () {
        return TR;
      },
      observeStore: function () {
        return VA;
      },
      reduceListToGroup: function () {
        return ER;
      },
      reifyState: function () {
        return UA;
      },
      renderHTMLElement: function () {
        return jA;
      },
      shallowEqual: function () {
        return wd.default;
      },
      shouldAllowMediaQuery: function () {
        return IR;
      },
      shouldNamespaceEventParameter: function () {
        return yR;
      },
      stringifyTarget: function () {
        return vR;
      },
    });
    var ot = rr(nd()),
      oa = rr(yd()),
      aa = rr(vd()),
      bd = Rt(),
      yt = we(),
      wd = rr(_d()),
      gA = ki(),
      EA = Ki(),
      je = ea(),
      Le = Yn();
    function rr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        BACKGROUND: yA,
        TRANSFORM: hA,
        TRANSLATE_3D: IA,
        SCALE_3D: TA,
        ROTATE_X: vA,
        ROTATE_Y: mA,
        ROTATE_Z: _A,
        SKEW: bA,
        PRESERVE_3D: OA,
        FLEX: SA,
        OPACITY: tr,
        FILTER: cn,
        FONT_VARIATION_SETTINGS: un,
        WIDTH: Ye,
        HEIGHT: Qe,
        BACKGROUND_COLOR: Nd,
        BORDER_COLOR: AA,
        COLOR: RA,
        CHILDREN: Od,
        IMMEDIATE_CHILDREN: LA,
        SIBLINGS: Sd,
        PARENT: CA,
        DISPLAY: nr,
        WILL_CHANGE: Dt,
        AUTO: st,
        COMMA_DELIMITER: ln,
        COLON_DELIMITER: wA,
        BAR_DELIMITER: ia,
        RENDER_TRANSFORM: Pd,
        RENDER_GENERAL: sa,
        RENDER_STYLE: ca,
        RENDER_PLUGIN: Md,
      } = yt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: Ut,
        TRANSFORM_SCALE: qt,
        TRANSFORM_ROTATE: Vt,
        TRANSFORM_SKEW: fn,
        STYLE_OPACITY: xd,
        STYLE_FILTER: dn,
        STYLE_FONT_VARIATION: pn,
        STYLE_SIZE: Gt,
        STYLE_BACKGROUND_COLOR: kt,
        STYLE_BORDER: Bt,
        STYLE_TEXT_COLOR: Xt,
        GENERAL_DISPLAY: ir,
        OBJECT_VALUE: NA,
      } = yt.ActionTypeConsts,
      Fd = (e) => e.trim(),
      ua = Object.freeze({ [kt]: Nd, [Bt]: AA, [Xt]: RA }),
      Dd = Object.freeze({
        [Le.TRANSFORM_PREFIXED]: hA,
        [Nd]: yA,
        [tr]: tr,
        [cn]: cn,
        [Ye]: Ye,
        [Qe]: Qe,
        [un]: un,
      }),
      er = new Map();
    function PA() {
      er.clear();
    }
    var MA = 1;
    function xA() {
      return "i" + MA++;
    }
    var FA = 1;
    function DA(e, t) {
      for (let n in e) {
        let r = e[n];
        if (r && r.ref === t) return r.id;
      }
      return "e" + FA++;
    }
    function UA({ events: e, actionLists: t, site: n } = {}) {
      let r = (0, oa.default)(
          e,
          (o, s) => {
            let { eventTypeId: c } = s;
            return o[c] || (o[c] = {}), (o[c][s.id] = s), o;
          },
          {}
        ),
        a = n && n.mediaQueries,
        i = [];
      return (
        a
          ? (i = a.map((o) => o.key))
          : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: r,
            mediaQueries: a,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var qA = (e, t) => e === t;
    function VA({ store: e, select: t, onChange: n, comparator: r = qA }) {
      let { getState: a, subscribe: i } = e,
        o = i(c),
        s = t(a());
      function c() {
        let f = t(a());
        if (f == null) {
          o();
          return;
        }
        r(f, s) || ((s = f), n(s, e));
      }
      return o;
    }
    function Ad(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        } = e;
        return {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        };
      }
      return {};
    }
    function la({
      config: e,
      event: t,
      eventTarget: n,
      elementRoot: r,
      elementApi: a,
    }) {
      if (!a) throw new Error("IX2 missing elementApi");
      let { targets: i } = e;
      if (Array.isArray(i) && i.length > 0)
        return i.reduce(
          (U, S) =>
            U.concat(
              la({
                config: { target: S },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: a,
              })
            ),
          []
        );
      let {
          getValidDocument: o,
          getQuerySelector: s,
          queryDocument: c,
          getChildElements: f,
          getSiblingElements: T,
          matchSelector: y,
          elementContains: p,
          isSiblingNode: h,
        } = a,
        { target: _ } = e;
      if (!_) return [];
      let {
        id: m,
        objectId: A,
        selector: b,
        selectorGuids: C,
        appliesTo: R,
        useEventTarget: N,
      } = Ad(_);
      if (A) return [er.has(A) ? er.get(A) : er.set(A, {}).get(A)];
      if (R === yt.EventAppliesTo.PAGE) {
        let U = o(m);
        return U ? [U] : [];
      }
      let w = (t?.action?.config?.affectedElements ?? {})[m || b] || {},
        X = !!(w.id || w.selector),
        H,
        z,
        K,
        te = t && s(Ad(t.target));
      if (
        (X
          ? ((H = w.limitAffectedElements), (z = te), (K = s(w)))
          : (z = K = s({ id: m, selector: b, selectorGuids: C })),
        t && N)
      ) {
        let U = n && (K || N === !0) ? [n] : c(te);
        if (K) {
          if (N === CA) return c(K).filter((S) => U.some((F) => p(S, F)));
          if (N === Od) return c(K).filter((S) => U.some((F) => p(F, S)));
          if (N === Sd) return c(K).filter((S) => U.some((F) => h(F, S)));
        }
        return U;
      }
      return z == null || K == null
        ? []
        : Le.IS_BROWSER_ENV && r
        ? c(K).filter((U) => r.contains(U))
        : H === Od
        ? c(z, K)
        : H === LA
        ? f(c(z)).filter(y(K))
        : H === Sd
        ? T(c(z)).filter(y(K))
        : c(K);
    }
    function GA({ element: e, actionItem: t }) {
      if (!Le.IS_BROWSER_ENV) return {};
      let { actionTypeId: n } = t;
      switch (n) {
        case Gt:
        case kt:
        case Bt:
        case Xt:
        case ir:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Rd = /px/,
      kA = (e, t) =>
        t.reduce(
          (n, r) => (n[r.type] == null && (n[r.type] = KA[r.type]), n),
          e || {}
        ),
      BA = (e, t) =>
        t.reduce(
          (n, r) => (
            n[r.type] == null &&
              (n[r.type] = $A[r.type] || r.defaultValue || 0),
            n
          ),
          e || {}
        );
    function XA(e, t = {}, n = {}, r, a) {
      let { getStyle: i } = a,
        { actionTypeId: o } = r;
      if ((0, je.isPluginType)(o)) return (0, je.getPluginOrigin)(o)(t[o], r);
      switch (r.actionTypeId) {
        case Ut:
        case qt:
        case Vt:
        case fn:
          return t[r.actionTypeId] || fa[r.actionTypeId];
        case dn:
          return kA(t[r.actionTypeId], r.config.filters);
        case pn:
          return BA(t[r.actionTypeId], r.config.fontVariations);
        case xd:
          return { value: (0, ot.default)(parseFloat(i(e, tr)), 1) };
        case Gt: {
          let s = i(e, Ye),
            c = i(e, Qe),
            f,
            T;
          return (
            r.config.widthUnit === st
              ? (f = Rd.test(s) ? parseFloat(s) : parseFloat(n.width))
              : (f = (0, ot.default)(parseFloat(s), parseFloat(n.width))),
            r.config.heightUnit === st
              ? (T = Rd.test(c) ? parseFloat(c) : parseFloat(n.height))
              : (T = (0, ot.default)(parseFloat(c), parseFloat(n.height))),
            { widthValue: f, heightValue: T }
          );
        }
        case kt:
        case Bt:
        case Xt:
          return cR({
            element: e,
            actionTypeId: r.actionTypeId,
            computedStyle: n,
            getStyle: i,
          });
        case ir:
          return { value: (0, ot.default)(i(e, nr), n.display) };
        case NA:
          return t[r.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var WA = (e, t) => (t && (e[t.type] = t.value || 0), e),
      HA = (e, t) => (t && (e[t.type] = t.value || 0), e),
      zA = (e, t, n) => {
        if ((0, je.isPluginType)(e)) return (0, je.getPluginConfig)(e)(n, t);
        switch (e) {
          case dn: {
            let r = (0, aa.default)(n.filters, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          case pn: {
            let r = (0, aa.default)(n.fontVariations, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          default:
            return n[t];
        }
      };
    function YA({ element: e, actionItem: t, elementApi: n }) {
      if ((0, je.isPluginType)(t.actionTypeId))
        return (0, je.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case Ut:
        case qt:
        case Vt:
        case fn: {
          let { xValue: r, yValue: a, zValue: i } = t.config;
          return { xValue: r, yValue: a, zValue: i };
        }
        case Gt: {
          let { getStyle: r, setStyle: a, getProperty: i } = n,
            { widthUnit: o, heightUnit: s } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!Le.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (o === st) {
            let T = r(e, Ye);
            a(e, Ye, ""), (c = i(e, "offsetWidth")), a(e, Ye, T);
          }
          if (s === st) {
            let T = r(e, Qe);
            a(e, Qe, ""), (f = i(e, "offsetHeight")), a(e, Qe, T);
          }
          return { widthValue: c, heightValue: f };
        }
        case kt:
        case Bt:
        case Xt: {
          let {
            rValue: r,
            gValue: a,
            bValue: i,
            aValue: o,
            globalSwatchId: s,
          } = t.config;
          if (s && s.startsWith("--")) {
            let { getStyle: c } = n,
              f = c(e, s),
              T = (0, EA.normalizeColor)(f);
            return {
              rValue: T.red,
              gValue: T.green,
              bValue: T.blue,
              aValue: T.alpha,
            };
          }
          return { rValue: r, gValue: a, bValue: i, aValue: o };
        }
        case dn:
          return t.config.filters.reduce(WA, {});
        case pn:
          return t.config.fontVariations.reduce(HA, {});
        default: {
          let { value: r } = t.config;
          return { value: r };
        }
      }
    }
    function Ud(e) {
      if (/^TRANSFORM_/.test(e)) return Pd;
      if (/^STYLE_/.test(e)) return ca;
      if (/^GENERAL_/.test(e)) return sa;
      if (/^PLUGIN_/.test(e)) return Md;
    }
    function QA(e, t) {
      return e === ca ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function jA(e, t, n, r, a, i, o, s, c) {
      switch (s) {
        case Pd:
          return eR(e, t, n, a, o);
        case ca:
          return uR(e, t, n, a, i, o);
        case sa:
          return lR(e, a, o);
        case Md: {
          let { actionTypeId: f } = a;
          if ((0, je.isPluginType)(f)) return (0, je.renderPlugin)(f)(c, t, a);
        }
      }
    }
    var fa = {
        [Ut]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [qt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Vt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [fn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      KA = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      $A = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      ZA = (e, t) => {
        let n = (0, aa.default)(t.filters, ({ type: r }) => r === e);
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      JA = Object.keys(fa);
    function eR(e, t, n, r, a) {
      let i = JA.map((s) => {
          let c = fa[s],
            {
              xValue: f = c.xValue,
              yValue: T = c.yValue,
              zValue: y = c.zValue,
              xUnit: p = "",
              yUnit: h = "",
              zUnit: _ = "",
            } = t[s] || {};
          switch (s) {
            case Ut:
              return `${IA}(${f}${p}, ${T}${h}, ${y}${_})`;
            case qt:
              return `${TA}(${f}${p}, ${T}${h}, ${y}${_})`;
            case Vt:
              return `${vA}(${f}${p}) ${mA}(${T}${h}) ${_A}(${y}${_})`;
            case fn:
              return `${bA}(${f}${p}, ${T}${h})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: o } = a;
      ht(e, Le.TRANSFORM_PREFIXED, a),
        o(e, Le.TRANSFORM_PREFIXED, i),
        rR(r, n) && o(e, Le.TRANSFORM_STYLE_PREFIXED, OA);
    }
    function tR(e, t, n, r) {
      let a = (0, oa.default)(t, (o, s, c) => `${o} ${c}(${s}${ZA(c, n)})`, ""),
        { setStyle: i } = r;
      ht(e, cn, r), i(e, cn, a);
    }
    function nR(e, t, n, r) {
      let a = (0, oa.default)(
          t,
          (o, s, c) => (o.push(`"${c}" ${s}`), o),
          []
        ).join(", "),
        { setStyle: i } = r;
      ht(e, un, r), i(e, un, a);
    }
    function rR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
      return (
        (e === Ut && r !== void 0) ||
        (e === qt && r !== void 0) ||
        (e === Vt && (t !== void 0 || n !== void 0))
      );
    }
    var iR = "\\(([^)]+)\\)",
      aR = /^rgb/,
      oR = RegExp(`rgba?${iR}`);
    function sR(e, t) {
      let n = e.exec(t);
      return n ? n[1] : "";
    }
    function cR({
      element: e,
      actionTypeId: t,
      computedStyle: n,
      getStyle: r,
    }) {
      let a = ua[t],
        i = r(e, a),
        o = aR.test(i) ? i : n[a],
        s = sR(oR, o).split(ln);
      return {
        rValue: (0, ot.default)(parseInt(s[0], 10), 255),
        gValue: (0, ot.default)(parseInt(s[1], 10), 255),
        bValue: (0, ot.default)(parseInt(s[2], 10), 255),
        aValue: (0, ot.default)(parseFloat(s[3]), 1),
      };
    }
    function uR(e, t, n, r, a, i) {
      let { setStyle: o } = i;
      switch (r.actionTypeId) {
        case Gt: {
          let { widthUnit: s = "", heightUnit: c = "" } = r.config,
            { widthValue: f, heightValue: T } = n;
          f !== void 0 &&
            (s === st && (s = "px"), ht(e, Ye, i), o(e, Ye, f + s)),
            T !== void 0 &&
              (c === st && (c = "px"), ht(e, Qe, i), o(e, Qe, T + c));
          break;
        }
        case dn: {
          tR(e, n, r.config, i);
          break;
        }
        case pn: {
          nR(e, n, r.config, i);
          break;
        }
        case kt:
        case Bt:
        case Xt: {
          let s = ua[r.actionTypeId],
            c = Math.round(n.rValue),
            f = Math.round(n.gValue),
            T = Math.round(n.bValue),
            y = n.aValue;
          ht(e, s, i),
            o(
              e,
              s,
              y >= 1 ? `rgb(${c},${f},${T})` : `rgba(${c},${f},${T},${y})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = r.config;
          ht(e, a, i), o(e, a, n.value + s);
          break;
        }
      }
    }
    function lR(e, t, n) {
      let { setStyle: r } = n;
      switch (t.actionTypeId) {
        case ir: {
          let { value: a } = t.config;
          a === SA && Le.IS_BROWSER_ENV
            ? r(e, nr, Le.FLEX_PREFIXED)
            : r(e, nr, a);
          return;
        }
      }
    }
    function ht(e, t, n) {
      if (!Le.IS_BROWSER_ENV) return;
      let r = Dd[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, Dt);
      if (!o) {
        i(e, Dt, r);
        return;
      }
      let s = o.split(ln).map(Fd);
      s.indexOf(r) === -1 && i(e, Dt, s.concat(r).join(ln));
    }
    function qd(e, t, n) {
      if (!Le.IS_BROWSER_ENV) return;
      let r = Dd[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, Dt);
      !o ||
        o.indexOf(r) === -1 ||
        i(
          e,
          Dt,
          o
            .split(ln)
            .map(Fd)
            .filter((s) => s !== r)
            .join(ln)
        );
    }
    function fR({ store: e, elementApi: t }) {
      let { ixData: n } = e.getState(),
        { events: r = {}, actionLists: a = {} } = n;
      Object.keys(r).forEach((i) => {
        let o = r[i],
          { config: s } = o.action,
          { actionListId: c } = s,
          f = a[c];
        f && Ld({ actionList: f, event: o, elementApi: t });
      }),
        Object.keys(a).forEach((i) => {
          Ld({ actionList: a[i], elementApi: t });
        });
    }
    function Ld({ actionList: e = {}, event: t, elementApi: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e;
      r &&
        r.forEach((i) => {
          Cd({ actionGroup: i, event: t, elementApi: n });
        }),
        a &&
          a.forEach((i) => {
            let { continuousActionGroups: o } = i;
            o.forEach((s) => {
              Cd({ actionGroup: s, event: t, elementApi: n });
            });
          });
    }
    function Cd({ actionGroup: e, event: t, elementApi: n }) {
      let { actionItems: r } = e;
      r.forEach((a) => {
        let { actionTypeId: i, config: o } = a,
          s;
        (0, je.isPluginType)(i)
          ? (s = (c) => (0, je.clearPlugin)(i)(c, a))
          : (s = Vd({ effect: pR, actionTypeId: i, elementApi: n })),
          la({ config: o, event: t, elementApi: n }).forEach(s);
      });
    }
    function dR(e, t, n) {
      let { setStyle: r, getStyle: a } = n,
        { actionTypeId: i } = t;
      if (i === Gt) {
        let { config: o } = t;
        o.widthUnit === st && r(e, Ye, ""), o.heightUnit === st && r(e, Qe, "");
      }
      a(e, Dt) && Vd({ effect: qd, actionTypeId: i, elementApi: n })(e);
    }
    var Vd =
      ({ effect: e, actionTypeId: t, elementApi: n }) =>
      (r) => {
        switch (t) {
          case Ut:
          case qt:
          case Vt:
          case fn:
            e(r, Le.TRANSFORM_PREFIXED, n);
            break;
          case dn:
            e(r, cn, n);
            break;
          case pn:
            e(r, un, n);
            break;
          case xd:
            e(r, tr, n);
            break;
          case Gt:
            e(r, Ye, n), e(r, Qe, n);
            break;
          case kt:
          case Bt:
          case Xt:
            e(r, ua[t], n);
            break;
          case ir:
            e(r, nr, n);
            break;
        }
      };
    function pR(e, t, n) {
      let { setStyle: r } = n;
      qd(e, t, n),
        r(e, t, ""),
        t === Le.TRANSFORM_PREFIXED && r(e, Le.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Gd(e) {
      let t = 0,
        n = 0;
      return (
        e.forEach((r, a) => {
          let { config: i } = r,
            o = i.delay + i.duration;
          o >= t && ((t = o), (n = a));
        }),
        n
      );
    }
    function gR(e, t) {
      let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
        { actionItem: a, verboseTimeElapsed: i = 0 } = t,
        o = 0,
        s = 0;
      return (
        n.forEach((c, f) => {
          if (r && f === 0) return;
          let { actionItems: T } = c,
            y = T[Gd(T)],
            { config: p, actionTypeId: h } = y;
          a.id === y.id && (s = o + i);
          let _ = Ud(h) === sa ? 0 : p.duration;
          o += p.delay + _;
        }),
        o > 0 ? (0, gA.optimizeFloat)(s / o) : 0
      );
    }
    function ER({ actionList: e, actionItemId: t, rawData: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e,
        i = [],
        o = (s) => (
          i.push((0, bd.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        r && r.some(({ actionItems: s }) => s.some(o)),
        a &&
          a.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: f }) => f.some(o));
          }),
        (0, bd.setIn)(n, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function yR(e, { basedOn: t }) {
      return (
        (e === yt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === yt.EventBasedOn.ELEMENT || t == null)) ||
        (e === yt.EventTypeConsts.MOUSE_MOVE && t === yt.EventBasedOn.ELEMENT)
      );
    }
    function hR(e, t) {
      return e + wA + t;
    }
    function IR(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function TR(e, t) {
      return (0, wd.default)(e && e.sort(), t && t.sort());
    }
    function vR(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + ia + e.objectId;
      if (e.objectId) return e.objectId;
      let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
      return t + ia + n + ia + r;
    }
  });
  var It = l((pa) => {
    "use strict";
    Object.defineProperty(pa, "__esModule", { value: !0 });
    function mR(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    mR(pa, {
      IX2BrowserSupport: function () {
        return _R;
      },
      IX2EasingUtils: function () {
        return OR;
      },
      IX2Easings: function () {
        return bR;
      },
      IX2ElementsReducer: function () {
        return SR;
      },
      IX2VanillaPlugins: function () {
        return AR;
      },
      IX2VanillaUtils: function () {
        return RR;
      },
    });
    var _R = Wt(Yn()),
      bR = Wt(qi()),
      OR = Wt(ki()),
      SR = Wt(Hf()),
      AR = Wt(ea()),
      RR = Wt(kd());
    function Bd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Bd = function (r) {
        return r ? n : t;
      })(e);
    }
    function Wt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Bd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var zd = l((Ea) => {
    "use strict";
    Object.defineProperty(Ea, "__esModule", { value: !0 });
    Object.defineProperty(Ea, "ixInstances", {
      enumerable: !0,
      get: function () {
        return GR;
      },
    });
    var Xd = we(),
      Wd = It(),
      Ht = Rt(),
      {
        IX2_RAW_DATA_IMPORTED: LR,
        IX2_SESSION_STOPPED: CR,
        IX2_INSTANCE_ADDED: wR,
        IX2_INSTANCE_STARTED: NR,
        IX2_INSTANCE_REMOVED: PR,
        IX2_ANIMATION_FRAME_CHANGED: MR,
      } = Xd.IX2EngineActionTypes,
      {
        optimizeFloat: ar,
        applyEasing: Hd,
        createBezierEasing: xR,
      } = Wd.IX2EasingUtils,
      { RENDER_GENERAL: FR } = Xd.IX2EngineConstants,
      {
        getItemConfigByKey: ga,
        getRenderType: DR,
        getStyleProp: UR,
      } = Wd.IX2VanillaUtils,
      qR = (e, t) => {
        let {
            position: n,
            parameterId: r,
            actionGroups: a,
            destinationKeys: i,
            smoothing: o,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: T,
            skipToValue: y,
          } = e,
          { parameters: p } = t.payload,
          h = Math.max(1 - o, 0.01),
          _ = p[r];
        _ == null && ((h = 1), (_ = s));
        let m = Math.max(_, 0) || 0,
          A = ar(m - n),
          b = T ? y : ar(n + A * h),
          C = b * 100;
        if (b === n && e.current) return e;
        let R, N, x, w;
        for (let H = 0, { length: z } = a; H < z; H++) {
          let { keyframe: K, actionItems: te } = a[H];
          if ((H === 0 && (R = te[0]), C >= K)) {
            R = te[0];
            let U = a[H + 1],
              S = U && C !== K;
            (N = S ? U.actionItems[0] : null),
              S && ((x = K / 100), (w = (U.keyframe - K) / 100));
          }
        }
        let X = {};
        if (R && !N)
          for (let H = 0, { length: z } = i; H < z; H++) {
            let K = i[H];
            X[K] = ga(c, K, R.config);
          }
        else if (R && N && x !== void 0 && w !== void 0) {
          let H = (b - x) / w,
            z = R.config.easing,
            K = Hd(z, H, f);
          for (let te = 0, { length: U } = i; te < U; te++) {
            let S = i[te],
              F = ga(c, S, R.config),
              ne = (ga(c, S, N.config) - F) * K + F;
            X[S] = ne;
          }
        }
        return (0, Ht.merge)(e, { position: b, current: X });
      },
      VR = (e, t) => {
        let {
            active: n,
            origin: r,
            start: a,
            immediate: i,
            renderType: o,
            verbose: s,
            actionItem: c,
            destination: f,
            destinationKeys: T,
            pluginDuration: y,
            instanceDelay: p,
            customEasingFn: h,
            skipMotion: _,
          } = e,
          m = c.config.easing,
          { duration: A, delay: b } = c.config;
        y != null && (A = y),
          (b = p ?? b),
          o === FR ? (A = 0) : (i || _) && (A = b = 0);
        let { now: C } = t.payload;
        if (n && r) {
          let R = C - (a + b);
          if (s) {
            let H = C - a,
              z = A + b,
              K = ar(Math.min(Math.max(0, H / z), 1));
            e = (0, Ht.set)(e, "verboseTimeElapsed", z * K);
          }
          if (R < 0) return e;
          let N = ar(Math.min(Math.max(0, R / A), 1)),
            x = Hd(m, N, h),
            w = {},
            X = null;
          return (
            T.length &&
              (X = T.reduce((H, z) => {
                let K = f[z],
                  te = parseFloat(r[z]) || 0,
                  S = (parseFloat(K) - te) * x + te;
                return (H[z] = S), H;
              }, {})),
            (w.current = X),
            (w.position = N),
            N === 1 && ((w.active = !1), (w.complete = !0)),
            (0, Ht.merge)(e, w)
          );
        }
        return e;
      },
      GR = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case LR:
            return t.payload.ixInstances || Object.freeze({});
          case CR:
            return Object.freeze({});
          case wR: {
            let {
                instanceId: n,
                elementId: r,
                actionItem: a,
                eventId: i,
                eventTarget: o,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                isCarrier: T,
                origin: y,
                destination: p,
                immediate: h,
                verbose: _,
                continuous: m,
                parameterId: A,
                actionGroups: b,
                smoothing: C,
                restingValue: R,
                pluginInstance: N,
                pluginDuration: x,
                instanceDelay: w,
                skipMotion: X,
                skipToValue: H,
              } = t.payload,
              { actionTypeId: z } = a,
              K = DR(z),
              te = UR(K, z),
              U = Object.keys(p).filter(
                (F) => p[F] != null && typeof p[F] != "string"
              ),
              { easing: S } = a.config;
            return (0, Ht.set)(e, n, {
              id: n,
              elementId: r,
              active: !1,
              position: 0,
              start: 0,
              origin: y,
              destination: p,
              destinationKeys: U,
              immediate: h,
              verbose: _,
              current: null,
              actionItem: a,
              actionTypeId: z,
              eventId: i,
              eventTarget: o,
              eventStateKey: s,
              actionListId: c,
              groupIndex: f,
              renderType: K,
              isCarrier: T,
              styleProp: te,
              continuous: m,
              parameterId: A,
              actionGroups: b,
              smoothing: C,
              restingValue: R,
              pluginInstance: N,
              pluginDuration: x,
              instanceDelay: w,
              skipMotion: X,
              skipToValue: H,
              customEasingFn:
                Array.isArray(S) && S.length === 4 ? xR(S) : void 0,
            });
          }
          case NR: {
            let { instanceId: n, time: r } = t.payload;
            return (0, Ht.mergeIn)(e, [n], {
              active: !0,
              complete: !1,
              start: r,
            });
          }
          case PR: {
            let { instanceId: n } = t.payload;
            if (!e[n]) return e;
            let r = {},
              a = Object.keys(e),
              { length: i } = a;
            for (let o = 0; o < i; o++) {
              let s = a[o];
              s !== n && (r[s] = e[s]);
            }
            return r;
          }
          case MR: {
            let n = e,
              r = Object.keys(e),
              { length: a } = r;
            for (let i = 0; i < a; i++) {
              let o = r[i],
                s = e[o],
                c = s.continuous ? qR : VR;
              n = (0, Ht.set)(n, o, c(s, t));
            }
            return n;
          }
          default:
            return e;
        }
      };
  });
  var Yd = l((ya) => {
    "use strict";
    Object.defineProperty(ya, "__esModule", { value: !0 });
    Object.defineProperty(ya, "ixParameters", {
      enumerable: !0,
      get: function () {
        return HR;
      },
    });
    var kR = we(),
      {
        IX2_RAW_DATA_IMPORTED: BR,
        IX2_SESSION_STOPPED: XR,
        IX2_PARAMETER_CHANGED: WR,
      } = kR.IX2EngineActionTypes,
      HR = (e = {}, t) => {
        switch (t.type) {
          case BR:
            return t.payload.ixParameters || {};
          case XR:
            return {};
          case WR: {
            let { key: n, value: r } = t.payload;
            return (e[n] = r), e;
          }
          default:
            return e;
        }
      };
  });
  var Qd = l((ha) => {
    "use strict";
    Object.defineProperty(ha, "__esModule", { value: !0 });
    Object.defineProperty(ha, "default", {
      enumerable: !0,
      get: function () {
        return e5;
      },
    });
    var zR = jr(),
      YR = ss(),
      QR = As(),
      jR = Ls(),
      KR = It(),
      $R = zd(),
      ZR = Yd(),
      { ixElements: JR } = KR.IX2ElementsReducer,
      e5 = (0, zR.combineReducers)({
        ixData: YR.ixData,
        ixRequest: QR.ixRequest,
        ixSession: jR.ixSession,
        ixElements: JR,
        ixInstances: $R.ixInstances,
        ixParameters: ZR.ixParameters,
      });
  });
  var Kd = l((oM, jd) => {
    var t5 = rt(),
      n5 = be(),
      r5 = Je(),
      i5 = "[object String]";
    function a5(e) {
      return typeof e == "string" || (!n5(e) && r5(e) && t5(e) == i5);
    }
    jd.exports = a5;
  });
  var Zd = l((sM, $d) => {
    var o5 = wi(),
      s5 = o5("length");
    $d.exports = s5;
  });
  var ep = l((cM, Jd) => {
    var c5 = "\\ud800-\\udfff",
      u5 = "\\u0300-\\u036f",
      l5 = "\\ufe20-\\ufe2f",
      f5 = "\\u20d0-\\u20ff",
      d5 = u5 + l5 + f5,
      p5 = "\\ufe0e\\ufe0f",
      g5 = "\\u200d",
      E5 = RegExp("[" + g5 + c5 + d5 + p5 + "]");
    function y5(e) {
      return E5.test(e);
    }
    Jd.exports = y5;
  });
  var up = l((uM, cp) => {
    var np = "\\ud800-\\udfff",
      h5 = "\\u0300-\\u036f",
      I5 = "\\ufe20-\\ufe2f",
      T5 = "\\u20d0-\\u20ff",
      v5 = h5 + I5 + T5,
      m5 = "\\ufe0e\\ufe0f",
      _5 = "[" + np + "]",
      Ia = "[" + v5 + "]",
      Ta = "\\ud83c[\\udffb-\\udfff]",
      b5 = "(?:" + Ia + "|" + Ta + ")",
      rp = "[^" + np + "]",
      ip = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      ap = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      O5 = "\\u200d",
      op = b5 + "?",
      sp = "[" + m5 + "]?",
      S5 = "(?:" + O5 + "(?:" + [rp, ip, ap].join("|") + ")" + sp + op + ")*",
      A5 = sp + op + S5,
      R5 = "(?:" + [rp + Ia + "?", Ia, ip, ap, _5].join("|") + ")",
      tp = RegExp(Ta + "(?=" + Ta + ")|" + R5 + A5, "g");
    function L5(e) {
      for (var t = (tp.lastIndex = 0); tp.test(e); ) ++t;
      return t;
    }
    cp.exports = L5;
  });
  var fp = l((lM, lp) => {
    var C5 = Zd(),
      w5 = ep(),
      N5 = up();
    function P5(e) {
      return w5(e) ? N5(e) : C5(e);
    }
    lp.exports = P5;
  });
  var pp = l((fM, dp) => {
    var M5 = qn(),
      x5 = Vn(),
      F5 = pt(),
      D5 = Kd(),
      U5 = fp(),
      q5 = "[object Map]",
      V5 = "[object Set]";
    function G5(e) {
      if (e == null) return 0;
      if (F5(e)) return D5(e) ? U5(e) : e.length;
      var t = x5(e);
      return t == q5 || t == V5 ? e.size : M5(e).length;
    }
    dp.exports = G5;
  });
  var Ep = l((dM, gp) => {
    var k5 = "Expected a function";
    function B5(e) {
      if (typeof e != "function") throw new TypeError(k5);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    gp.exports = B5;
  });
  var va = l((pM, yp) => {
    var X5 = it(),
      W5 = (function () {
        try {
          var e = X5(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    yp.exports = W5;
  });
  var ma = l((gM, Ip) => {
    var hp = va();
    function H5(e, t, n) {
      t == "__proto__" && hp
        ? hp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    Ip.exports = H5;
  });
  var vp = l((EM, Tp) => {
    var z5 = ma(),
      Y5 = Ln(),
      Q5 = Object.prototype,
      j5 = Q5.hasOwnProperty;
    function K5(e, t, n) {
      var r = e[t];
      (!(j5.call(e, t) && Y5(r, n)) || (n === void 0 && !(t in e))) &&
        z5(e, t, n);
    }
    Tp.exports = K5;
  });
  var bp = l((yM, _p) => {
    var $5 = vp(),
      Z5 = on(),
      J5 = xn(),
      mp = ze(),
      e4 = Ft();
    function t4(e, t, n, r) {
      if (!mp(e)) return e;
      t = Z5(t, e);
      for (var a = -1, i = t.length, o = i - 1, s = e; s != null && ++a < i; ) {
        var c = e4(t[a]),
          f = n;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (a != o) {
          var T = s[c];
          (f = r ? r(T, c, s) : void 0),
            f === void 0 && (f = mp(T) ? T : J5(t[a + 1]) ? [] : {});
        }
        $5(s, c, f), (s = s[c]);
      }
      return e;
    }
    _p.exports = t4;
  });
  var Sp = l((hM, Op) => {
    var n4 = Bn(),
      r4 = bp(),
      i4 = on();
    function a4(e, t, n) {
      for (var r = -1, a = t.length, i = {}; ++r < a; ) {
        var o = t[r],
          s = n4(e, o);
        n(s, o) && r4(i, i4(o, e), s);
      }
      return i;
    }
    Op.exports = a4;
  });
  var Rp = l((IM, Ap) => {
    var o4 = Pn(),
      s4 = Dr(),
      c4 = Ei(),
      u4 = gi(),
      l4 = Object.getOwnPropertySymbols,
      f4 = l4
        ? function (e) {
            for (var t = []; e; ) o4(t, c4(e)), (e = s4(e));
            return t;
          }
        : u4;
    Ap.exports = f4;
  });
  var Cp = l((TM, Lp) => {
    function d4(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    Lp.exports = d4;
  });
  var Np = l((vM, wp) => {
    var p4 = ze(),
      g4 = Un(),
      E4 = Cp(),
      y4 = Object.prototype,
      h4 = y4.hasOwnProperty;
    function I4(e) {
      if (!p4(e)) return E4(e);
      var t = g4(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !h4.call(e, r))) || n.push(r);
      return n;
    }
    wp.exports = I4;
  });
  var Mp = l((mM, Pp) => {
    var T4 = hi(),
      v4 = Np(),
      m4 = pt();
    function _4(e) {
      return m4(e) ? T4(e, !0) : v4(e);
    }
    Pp.exports = _4;
  });
  var Fp = l((_M, xp) => {
    var b4 = pi(),
      O4 = Rp(),
      S4 = Mp();
    function A4(e) {
      return b4(e, S4, O4);
    }
    xp.exports = A4;
  });
  var Up = l((bM, Dp) => {
    var R4 = Ci(),
      L4 = at(),
      C4 = Sp(),
      w4 = Fp();
    function N4(e, t) {
      if (e == null) return {};
      var n = R4(w4(e), function (r) {
        return [r];
      });
      return (
        (t = L4(t)),
        C4(e, n, function (r, a) {
          return t(r, a[0]);
        })
      );
    }
    Dp.exports = N4;
  });
  var Vp = l((OM, qp) => {
    var P4 = at(),
      M4 = Ep(),
      x4 = Up();
    function F4(e, t) {
      return x4(e, M4(P4(t)));
    }
    qp.exports = F4;
  });
  var kp = l((SM, Gp) => {
    var D4 = qn(),
      U4 = Vn(),
      q4 = Jt(),
      V4 = be(),
      G4 = pt(),
      k4 = Mn(),
      B4 = Un(),
      X4 = Dn(),
      W4 = "[object Map]",
      H4 = "[object Set]",
      z4 = Object.prototype,
      Y4 = z4.hasOwnProperty;
    function Q4(e) {
      if (e == null) return !0;
      if (
        G4(e) &&
        (V4(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          k4(e) ||
          X4(e) ||
          q4(e))
      )
        return !e.length;
      var t = U4(e);
      if (t == W4 || t == H4) return !e.size;
      if (B4(e)) return !D4(e).length;
      for (var n in e) if (Y4.call(e, n)) return !1;
      return !0;
    }
    Gp.exports = Q4;
  });
  var Xp = l((AM, Bp) => {
    var j4 = ma(),
      K4 = ta(),
      $4 = at();
    function Z4(e, t) {
      var n = {};
      return (
        (t = $4(t, 3)),
        K4(e, function (r, a, i) {
          j4(n, a, t(r, a, i));
        }),
        n
      );
    }
    Bp.exports = Z4;
  });
  var Hp = l((RM, Wp) => {
    function J4(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    Wp.exports = J4;
  });
  var Yp = l((LM, zp) => {
    var eL = Wn();
    function tL(e) {
      return typeof e == "function" ? e : eL;
    }
    zp.exports = tL;
  });
  var jp = l((CM, Qp) => {
    var nL = Hp(),
      rL = na(),
      iL = Yp(),
      aL = be();
    function oL(e, t) {
      var n = aL(e) ? nL : rL;
      return n(e, iL(t));
    }
    Qp.exports = oL;
  });
  var $p = l((wM, Kp) => {
    var sL = Be(),
      cL = function () {
        return sL.Date.now();
      };
    Kp.exports = cL;
  });
  var eg = l((NM, Jp) => {
    var uL = ze(),
      _a = $p(),
      Zp = Hn(),
      lL = "Expected a function",
      fL = Math.max,
      dL = Math.min;
    function pL(e, t, n) {
      var r,
        a,
        i,
        o,
        s,
        c,
        f = 0,
        T = !1,
        y = !1,
        p = !0;
      if (typeof e != "function") throw new TypeError(lL);
      (t = Zp(t) || 0),
        uL(n) &&
          ((T = !!n.leading),
          (y = "maxWait" in n),
          (i = y ? fL(Zp(n.maxWait) || 0, t) : i),
          (p = "trailing" in n ? !!n.trailing : p));
      function h(w) {
        var X = r,
          H = a;
        return (r = a = void 0), (f = w), (o = e.apply(H, X)), o;
      }
      function _(w) {
        return (f = w), (s = setTimeout(b, t)), T ? h(w) : o;
      }
      function m(w) {
        var X = w - c,
          H = w - f,
          z = t - X;
        return y ? dL(z, i - H) : z;
      }
      function A(w) {
        var X = w - c,
          H = w - f;
        return c === void 0 || X >= t || X < 0 || (y && H >= i);
      }
      function b() {
        var w = _a();
        if (A(w)) return C(w);
        s = setTimeout(b, m(w));
      }
      function C(w) {
        return (s = void 0), p && r ? h(w) : ((r = a = void 0), o);
      }
      function R() {
        s !== void 0 && clearTimeout(s), (f = 0), (r = c = a = s = void 0);
      }
      function N() {
        return s === void 0 ? o : C(_a());
      }
      function x() {
        var w = _a(),
          X = A(w);
        if (((r = arguments), (a = this), (c = w), X)) {
          if (s === void 0) return _(c);
          if (y) return clearTimeout(s), (s = setTimeout(b, t)), h(c);
        }
        return s === void 0 && (s = setTimeout(b, t)), o;
      }
      return (x.cancel = R), (x.flush = N), x;
    }
    Jp.exports = pL;
  });
  var ng = l((PM, tg) => {
    var gL = eg(),
      EL = ze(),
      yL = "Expected a function";
    function hL(e, t, n) {
      var r = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(yL);
      return (
        EL(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (a = "trailing" in n ? !!n.trailing : a)),
        gL(e, t, { leading: r, maxWait: t, trailing: a })
      );
    }
    tg.exports = hL;
  });
  var or = l((ba) => {
    "use strict";
    Object.defineProperty(ba, "__esModule", { value: !0 });
    function IL(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    IL(ba, {
      actionListPlaybackChanged: function () {
        return iC;
      },
      animationFrameChanged: function () {
        return ZL;
      },
      clearRequested: function () {
        return QL;
      },
      elementStateChanged: function () {
        return rC;
      },
      eventListenerAdded: function () {
        return jL;
      },
      eventStateChanged: function () {
        return $L;
      },
      instanceAdded: function () {
        return eC;
      },
      instanceRemoved: function () {
        return nC;
      },
      instanceStarted: function () {
        return tC;
      },
      mediaQueriesDefined: function () {
        return oC;
      },
      parameterChanged: function () {
        return JL;
      },
      playbackRequested: function () {
        return zL;
      },
      previewRequested: function () {
        return HL;
      },
      rawDataImported: function () {
        return kL;
      },
      sessionInitialized: function () {
        return BL;
      },
      sessionStarted: function () {
        return XL;
      },
      sessionStopped: function () {
        return WL;
      },
      stopRequested: function () {
        return YL;
      },
      testFrameRendered: function () {
        return KL;
      },
      viewportWidthChanged: function () {
        return aC;
      },
    });
    var rg = we(),
      TL = It(),
      {
        IX2_RAW_DATA_IMPORTED: vL,
        IX2_SESSION_INITIALIZED: mL,
        IX2_SESSION_STARTED: _L,
        IX2_SESSION_STOPPED: bL,
        IX2_PREVIEW_REQUESTED: OL,
        IX2_PLAYBACK_REQUESTED: SL,
        IX2_STOP_REQUESTED: AL,
        IX2_CLEAR_REQUESTED: RL,
        IX2_EVENT_LISTENER_ADDED: LL,
        IX2_TEST_FRAME_RENDERED: CL,
        IX2_EVENT_STATE_CHANGED: wL,
        IX2_ANIMATION_FRAME_CHANGED: NL,
        IX2_PARAMETER_CHANGED: PL,
        IX2_INSTANCE_ADDED: ML,
        IX2_INSTANCE_STARTED: xL,
        IX2_INSTANCE_REMOVED: FL,
        IX2_ELEMENT_STATE_CHANGED: DL,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: UL,
        IX2_VIEWPORT_WIDTH_CHANGED: qL,
        IX2_MEDIA_QUERIES_DEFINED: VL,
      } = rg.IX2EngineActionTypes,
      { reifyState: GL } = TL.IX2VanillaUtils,
      kL = (e) => ({ type: vL, payload: { ...GL(e) } }),
      BL = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
        type: mL,
        payload: { hasBoundaryNodes: e, reducedMotion: t },
      }),
      XL = () => ({ type: _L }),
      WL = () => ({ type: bL }),
      HL = ({ rawData: e, defer: t }) => ({
        type: OL,
        payload: { defer: t, rawData: e },
      }),
      zL = ({
        actionTypeId: e = rg.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: n,
        eventId: r,
        allowEvents: a,
        immediate: i,
        testManual: o,
        verbose: s,
        rawData: c,
      }) => ({
        type: SL,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: n,
          testManual: o,
          eventId: r,
          allowEvents: a,
          immediate: i,
          verbose: s,
          rawData: c,
        },
      }),
      YL = (e) => ({ type: AL, payload: { actionListId: e } }),
      QL = () => ({ type: RL }),
      jL = (e, t) => ({ type: LL, payload: { target: e, listenerParams: t } }),
      KL = (e = 1) => ({ type: CL, payload: { step: e } }),
      $L = (e, t) => ({ type: wL, payload: { stateKey: e, newState: t } }),
      ZL = (e, t) => ({ type: NL, payload: { now: e, parameters: t } }),
      JL = (e, t) => ({ type: PL, payload: { key: e, value: t } }),
      eC = (e) => ({ type: ML, payload: { ...e } }),
      tC = (e, t) => ({ type: xL, payload: { instanceId: e, time: t } }),
      nC = (e) => ({ type: FL, payload: { instanceId: e } }),
      rC = (e, t, n, r) => ({
        type: DL,
        payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
      }),
      iC = ({ actionListId: e, isPlaying: t }) => ({
        type: UL,
        payload: { actionListId: e, isPlaying: t },
      }),
      aC = ({ width: e, mediaQueries: t }) => ({
        type: qL,
        payload: { width: e, mediaQueries: t },
      }),
      oC = () => ({ type: VL });
  });
  var og = l((Sa) => {
    "use strict";
    Object.defineProperty(Sa, "__esModule", { value: !0 });
    function sC(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    sC(Sa, {
      elementContains: function () {
        return TC;
      },
      getChildElements: function () {
        return mC;
      },
      getClosestElement: function () {
        return bC;
      },
      getProperty: function () {
        return gC;
      },
      getQuerySelector: function () {
        return yC;
      },
      getRefType: function () {
        return OC;
      },
      getSiblingElements: function () {
        return _C;
      },
      getStyle: function () {
        return pC;
      },
      getValidDocument: function () {
        return hC;
      },
      isSiblingNode: function () {
        return vC;
      },
      matchSelector: function () {
        return EC;
      },
      queryDocument: function () {
        return IC;
      },
      setStyle: function () {
        return dC;
      },
    });
    var cC = It(),
      uC = we(),
      { ELEMENT_MATCHES: Oa } = cC.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: ig,
        HTML_ELEMENT: lC,
        PLAIN_OBJECT: fC,
        WF_PAGE: ag,
      } = uC.IX2EngineConstants;
    function dC(e, t, n) {
      e.style[t] = n;
    }
    function pC(e, t) {
      if (t.startsWith("--"))
        return window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(t);
      if (e.style instanceof CSSStyleDeclaration) return e.style[t];
    }
    function gC(e, t) {
      return e[t];
    }
    function EC(e) {
      return (t) => t[Oa](e);
    }
    function yC({ id: e, selector: t }) {
      if (e) {
        let n = e;
        if (e.indexOf(ig) !== -1) {
          let r = e.split(ig),
            a = r[0];
          if (((n = r[1]), a !== document.documentElement.getAttribute(ag)))
            return null;
        }
        return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
      }
      return t;
    }
    function hC(e) {
      return e == null || e === document.documentElement.getAttribute(ag)
        ? document
        : null;
    }
    function IC(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function TC(e, t) {
      return e.contains(t);
    }
    function vC(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function mC(e) {
      let t = [];
      for (let n = 0, { length: r } = e || []; n < r; n++) {
        let { children: a } = e[n],
          { length: i } = a;
        if (i) for (let o = 0; o < i; o++) t.push(a[o]);
      }
      return t;
    }
    function _C(e = []) {
      let t = [],
        n = [];
      for (let r = 0, { length: a } = e; r < a; r++) {
        let { parentNode: i } = e[r];
        if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1)
          continue;
        n.push(i);
        let o = i.firstElementChild;
        for (; o != null; )
          e.indexOf(o) === -1 && t.push(o), (o = o.nextElementSibling);
      }
      return t;
    }
    var bC = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let n = e;
          do {
            if (n[Oa] && n[Oa](t)) return n;
            n = n.parentNode;
          } while (n != null);
          return null;
        };
    function OC(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? lC
          : fC
        : null;
    }
  });
  var Aa = l((FM, cg) => {
    var SC = ze(),
      sg = Object.create,
      AC = (function () {
        function e() {}
        return function (t) {
          if (!SC(t)) return {};
          if (sg) return sg(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    cg.exports = AC;
  });
  var sr = l((DM, ug) => {
    function RC() {}
    ug.exports = RC;
  });
  var ur = l((UM, lg) => {
    var LC = Aa(),
      CC = sr();
    function cr(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    cr.prototype = LC(CC.prototype);
    cr.prototype.constructor = cr;
    lg.exports = cr;
  });
  var gg = l((qM, pg) => {
    var fg = Ot(),
      wC = Jt(),
      NC = be(),
      dg = fg ? fg.isConcatSpreadable : void 0;
    function PC(e) {
      return NC(e) || wC(e) || !!(dg && e && e[dg]);
    }
    pg.exports = PC;
  });
  var hg = l((VM, yg) => {
    var MC = Pn(),
      xC = gg();
    function Eg(e, t, n, r, a) {
      var i = -1,
        o = e.length;
      for (n || (n = xC), a || (a = []); ++i < o; ) {
        var s = e[i];
        t > 0 && n(s)
          ? t > 1
            ? Eg(s, t - 1, n, r, a)
            : MC(a, s)
          : r || (a[a.length] = s);
      }
      return a;
    }
    yg.exports = Eg;
  });
  var Tg = l((GM, Ig) => {
    var FC = hg();
    function DC(e) {
      var t = e == null ? 0 : e.length;
      return t ? FC(e, 1) : [];
    }
    Ig.exports = DC;
  });
  var mg = l((kM, vg) => {
    function UC(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    vg.exports = UC;
  });
  var Og = l((BM, bg) => {
    var qC = mg(),
      _g = Math.max;
    function VC(e, t, n) {
      return (
        (t = _g(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, a = -1, i = _g(r.length - t, 0), o = Array(i);
            ++a < i;

          )
            o[a] = r[t + a];
          a = -1;
          for (var s = Array(t + 1); ++a < t; ) s[a] = r[a];
          return (s[t] = n(o)), qC(e, this, s);
        }
      );
    }
    bg.exports = VC;
  });
  var Ag = l((XM, Sg) => {
    function GC(e) {
      return function () {
        return e;
      };
    }
    Sg.exports = GC;
  });
  var Cg = l((WM, Lg) => {
    var kC = Ag(),
      Rg = va(),
      BC = Wn(),
      XC = Rg
        ? function (e, t) {
            return Rg(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: kC(t),
              writable: !0,
            });
          }
        : BC;
    Lg.exports = XC;
  });
  var Ng = l((HM, wg) => {
    var WC = 800,
      HC = 16,
      zC = Date.now;
    function YC(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = zC(),
          a = HC - (r - n);
        if (((n = r), a > 0)) {
          if (++t >= WC) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    wg.exports = YC;
  });
  var Mg = l((zM, Pg) => {
    var QC = Cg(),
      jC = Ng(),
      KC = jC(QC);
    Pg.exports = KC;
  });
  var Fg = l((YM, xg) => {
    var $C = Tg(),
      ZC = Og(),
      JC = Mg();
    function ew(e) {
      return JC(ZC(e, void 0, $C), e + "");
    }
    xg.exports = ew;
  });
  var qg = l((QM, Ug) => {
    var Dg = Ii(),
      tw = Dg && new Dg();
    Ug.exports = tw;
  });
  var Gg = l((jM, Vg) => {
    function nw() {}
    Vg.exports = nw;
  });
  var Ra = l((KM, Bg) => {
    var kg = qg(),
      rw = Gg(),
      iw = kg
        ? function (e) {
            return kg.get(e);
          }
        : rw;
    Bg.exports = iw;
  });
  var Wg = l(($M, Xg) => {
    var aw = {};
    Xg.exports = aw;
  });
  var La = l((ZM, zg) => {
    var Hg = Wg(),
      ow = Object.prototype,
      sw = ow.hasOwnProperty;
    function cw(e) {
      for (
        var t = e.name + "", n = Hg[t], r = sw.call(Hg, t) ? n.length : 0;
        r--;

      ) {
        var a = n[r],
          i = a.func;
        if (i == null || i == e) return a.name;
      }
      return t;
    }
    zg.exports = cw;
  });
  var fr = l((JM, Yg) => {
    var uw = Aa(),
      lw = sr(),
      fw = 4294967295;
    function lr(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = fw),
        (this.__views__ = []);
    }
    lr.prototype = uw(lw.prototype);
    lr.prototype.constructor = lr;
    Yg.exports = lr;
  });
  var jg = l((e8, Qg) => {
    function dw(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    Qg.exports = dw;
  });
  var $g = l((t8, Kg) => {
    var pw = fr(),
      gw = ur(),
      Ew = jg();
    function yw(e) {
      if (e instanceof pw) return e.clone();
      var t = new gw(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = Ew(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Kg.exports = yw;
  });
  var e0 = l((n8, Jg) => {
    var hw = fr(),
      Zg = ur(),
      Iw = sr(),
      Tw = be(),
      vw = Je(),
      mw = $g(),
      _w = Object.prototype,
      bw = _w.hasOwnProperty;
    function dr(e) {
      if (vw(e) && !Tw(e) && !(e instanceof hw)) {
        if (e instanceof Zg) return e;
        if (bw.call(e, "__wrapped__")) return mw(e);
      }
      return new Zg(e);
    }
    dr.prototype = Iw.prototype;
    dr.prototype.constructor = dr;
    Jg.exports = dr;
  });
  var n0 = l((r8, t0) => {
    var Ow = fr(),
      Sw = Ra(),
      Aw = La(),
      Rw = e0();
    function Lw(e) {
      var t = Aw(e),
        n = Rw[t];
      if (typeof n != "function" || !(t in Ow.prototype)) return !1;
      if (e === n) return !0;
      var r = Sw(n);
      return !!r && e === r[0];
    }
    t0.exports = Lw;
  });
  var o0 = l((i8, a0) => {
    var r0 = ur(),
      Cw = Fg(),
      ww = Ra(),
      Ca = La(),
      Nw = be(),
      i0 = n0(),
      Pw = "Expected a function",
      Mw = 8,
      xw = 32,
      Fw = 128,
      Dw = 256;
    function Uw(e) {
      return Cw(function (t) {
        var n = t.length,
          r = n,
          a = r0.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var i = t[r];
          if (typeof i != "function") throw new TypeError(Pw);
          if (a && !o && Ca(i) == "wrapper") var o = new r0([], !0);
        }
        for (r = o ? r : n; ++r < n; ) {
          i = t[r];
          var s = Ca(i),
            c = s == "wrapper" ? ww(i) : void 0;
          c &&
          i0(c[0]) &&
          c[1] == (Fw | Mw | xw | Dw) &&
          !c[4].length &&
          c[9] == 1
            ? (o = o[Ca(c[0])].apply(o, c[3]))
            : (o = i.length == 1 && i0(i) ? o[s]() : o.thru(i));
        }
        return function () {
          var f = arguments,
            T = f[0];
          if (o && f.length == 1 && Nw(T)) return o.plant(T).value();
          for (var y = 0, p = n ? t[y].apply(this, f) : T; ++y < n; )
            p = t[y].call(this, p);
          return p;
        };
      });
    }
    a0.exports = Uw;
  });
  var c0 = l((a8, s0) => {
    var qw = o0(),
      Vw = qw();
    s0.exports = Vw;
  });
  var l0 = l((o8, u0) => {
    function Gw(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    u0.exports = Gw;
  });
  var d0 = l((s8, f0) => {
    var kw = l0(),
      wa = Hn();
    function Bw(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = wa(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = wa(t)), (t = t === t ? t : 0)),
        kw(wa(e), t, n)
      );
    }
    f0.exports = Bw;
  });
  var w0 = l((Da) => {
    "use strict";
    Object.defineProperty(Da, "__esModule", { value: !0 });
    Object.defineProperty(Da, "default", {
      enumerable: !0,
      get: function () {
        return ON;
      },
    });
    var Xw = Fa(c0()),
      Ww = Fa(Xn()),
      Hw = Fa(d0()),
      Tt = we(),
      Na = Ua(),
      pr = or(),
      zw = It();
    function Fa(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        MOUSE_CLICK: Yw,
        MOUSE_SECOND_CLICK: Qw,
        MOUSE_DOWN: jw,
        MOUSE_UP: Kw,
        MOUSE_OVER: $w,
        MOUSE_OUT: Zw,
        DROPDOWN_CLOSE: Jw,
        DROPDOWN_OPEN: eN,
        SLIDER_ACTIVE: tN,
        SLIDER_INACTIVE: nN,
        TAB_ACTIVE: rN,
        TAB_INACTIVE: iN,
        NAVBAR_CLOSE: aN,
        NAVBAR_OPEN: oN,
        MOUSE_MOVE: sN,
        PAGE_SCROLL_DOWN: m0,
        SCROLL_INTO_VIEW: _0,
        SCROLL_OUT_OF_VIEW: cN,
        PAGE_SCROLL_UP: uN,
        SCROLLING_IN_VIEW: lN,
        PAGE_FINISH: b0,
        ECOMMERCE_CART_CLOSE: fN,
        ECOMMERCE_CART_OPEN: dN,
        PAGE_START: O0,
        PAGE_SCROLL: pN,
      } = Tt.EventTypeConsts,
      Pa = "COMPONENT_ACTIVE",
      S0 = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: p0 } = Tt.IX2EngineConstants,
      { getNamespacedParameterId: g0 } = zw.IX2VanillaUtils,
      A0 = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      En = A0(({ element: e, nativeEvent: t }) => e === t.target),
      gN = A0(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      Ke = (0, Xw.default)([En, gN]),
      R0 = (e, t) => {
        if (t) {
          let { ixData: n } = e.getState(),
            { events: r } = n,
            a = r[t];
          if (a && !yN[a.eventTypeId]) return a;
        }
        return null;
      },
      EN = ({ store: e, event: t }) => {
        let { action: n } = t,
          { autoStopEventId: r } = n.config;
        return !!R0(e, r);
      },
      Pe = ({ store: e, event: t, element: n, eventStateKey: r }, a) => {
        let { action: i, id: o } = t,
          { actionListId: s, autoStopEventId: c } = i.config,
          f = R0(e, c);
        return (
          f &&
            (0, Na.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: c + p0 + r.split(p0)[1],
              actionListId: (0, Ww.default)(f, "action.config.actionListId"),
            }),
          (0, Na.stopActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: s,
          }),
          (0, Na.startActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: s,
          }),
          a
        );
      },
      Xe = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
      yn = { handler: Xe(Ke, Pe) },
      L0 = { ...yn, types: [Pa, S0].join(" ") },
      Ma = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      E0 = "mouseover mouseout",
      xa = { types: Ma },
      yN = { PAGE_START: O0, PAGE_FINISH: b0 },
      gn = (() => {
        let e = window.pageXOffset !== void 0,
          n =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : n.scrollLeft,
          scrollTop: e ? window.pageYOffset : n.scrollTop,
          stiffScrollTop: (0, Hw.default)(
            e ? window.pageYOffset : n.scrollTop,
            0,
            n.scrollHeight - window.innerHeight
          ),
          scrollWidth: n.scrollWidth,
          scrollHeight: n.scrollHeight,
          clientWidth: n.clientWidth,
          clientHeight: n.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      hN = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      IN = ({ element: e, nativeEvent: t }) => {
        let { type: n, target: r, relatedTarget: a } = t,
          i = e.contains(r);
        if (n === "mouseover" && i) return !0;
        let o = e.contains(a);
        return !!(n === "mouseout" && i && o);
      },
      TN = (e) => {
        let {
            element: t,
            event: { config: n },
          } = e,
          { clientWidth: r, clientHeight: a } = gn(),
          i = n.scrollOffsetValue,
          c = n.scrollOffsetUnit === "PX" ? i : (a * (i || 0)) / 100;
        return hN(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: r,
          bottom: a - c,
        });
      },
      C0 = (e) => (t, n) => {
        let { type: r } = t.nativeEvent,
          a = [Pa, S0].indexOf(r) !== -1 ? r === Pa : n.isActive,
          i = { ...n, isActive: a };
        return ((!n || i.isActive !== n.isActive) && e(t, i)) || i;
      },
      y0 = (e) => (t, n) => {
        let r = { elementHovered: IN(t) };
        return (
          ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
            e(t, r)) ||
          r
        );
      },
      vN = (e) => (t, n) => {
        let r = { ...n, elementVisible: TN(t) };
        return (
          ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
            e(t, r)) ||
          r
        );
      },
      h0 =
        (e) =>
        (t, n = {}) => {
          let { stiffScrollTop: r, scrollHeight: a, innerHeight: i } = gn(),
            {
              event: { config: o, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = o,
            T = f === "PX",
            y = a - i,
            p = Number((r / y).toFixed(2));
          if (n && n.percentTop === p) return n;
          let h = (T ? c : (i * (c || 0)) / 100) / y,
            _,
            m,
            A = 0;
          n &&
            ((_ = p > n.percentTop),
            (m = n.scrollingDown !== _),
            (A = m ? p : n.anchorTop));
          let b = s === m0 ? p >= A + h : p <= A - h,
            C = {
              ...n,
              percentTop: p,
              inBounds: b,
              anchorTop: A,
              scrollingDown: _,
            };
          return (n && b && (m || C.inBounds !== n.inBounds) && e(t, C)) || C;
        },
      mN = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      _N = (e) => (t, n) => {
        let r = { finished: document.readyState === "complete" };
        return r.finished && !(n && n.finshed) && e(t), r;
      },
      bN = (e) => (t, n) => {
        let r = { started: !0 };
        return n || e(t), r;
      },
      I0 =
        (e) =>
        (t, n = { clickCount: 0 }) => {
          let r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && e(t, r)) || r;
        },
      gr = (e = !0) => ({
        ...L0,
        handler: Xe(
          e ? Ke : En,
          C0((t, n) => (n.isActive ? yn.handler(t, n) : n))
        ),
      }),
      Er = (e = !0) => ({
        ...L0,
        handler: Xe(
          e ? Ke : En,
          C0((t, n) => (n.isActive ? n : yn.handler(t, n)))
        ),
      }),
      T0 = {
        ...xa,
        handler: vN((e, t) => {
          let { elementVisible: n } = t,
            { event: r, store: a } = e,
            { ixData: i } = a.getState(),
            { events: o } = i;
          return !o[r.action.config.autoStopEventId] && t.triggered
            ? t
            : (r.eventTypeId === _0) === n
            ? (Pe(e), { ...t, triggered: !0 })
            : t;
        }),
      },
      v0 = 0.05,
      ON = {
        [tN]: gr(),
        [nN]: Er(),
        [eN]: gr(),
        [Jw]: Er(),
        [oN]: gr(!1),
        [aN]: Er(!1),
        [rN]: gr(),
        [iN]: Er(),
        [dN]: { types: "ecommerce-cart-open", handler: Xe(Ke, Pe) },
        [fN]: { types: "ecommerce-cart-close", handler: Xe(Ke, Pe) },
        [Yw]: {
          types: "click",
          handler: Xe(
            Ke,
            I0((e, { clickCount: t }) => {
              EN(e) ? t === 1 && Pe(e) : Pe(e);
            })
          ),
        },
        [Qw]: {
          types: "click",
          handler: Xe(
            Ke,
            I0((e, { clickCount: t }) => {
              t === 2 && Pe(e);
            })
          ),
        },
        [jw]: { ...yn, types: "mousedown" },
        [Kw]: { ...yn, types: "mouseup" },
        [$w]: {
          types: E0,
          handler: Xe(
            Ke,
            y0((e, t) => {
              t.elementHovered && Pe(e);
            })
          ),
        },
        [Zw]: {
          types: E0,
          handler: Xe(
            Ke,
            y0((e, t) => {
              t.elementHovered || Pe(e);
            })
          ),
        },
        [sN]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: n,
              nativeEvent: r,
              eventStateKey: a,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: o,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: T = 0,
              } = n,
              {
                clientX: y = i.clientX,
                clientY: p = i.clientY,
                pageX: h = i.pageX,
                pageY: _ = i.pageY,
              } = r,
              m = s === "X_AXIS",
              A = r.type === "mouseout",
              b = T / 100,
              C = c,
              R = !1;
            switch (o) {
              case Tt.EventBasedOn.VIEWPORT: {
                b = m
                  ? Math.min(y, window.innerWidth) / window.innerWidth
                  : Math.min(p, window.innerHeight) / window.innerHeight;
                break;
              }
              case Tt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: N,
                  scrollTop: x,
                  scrollWidth: w,
                  scrollHeight: X,
                } = gn();
                b = m ? Math.min(N + h, w) / w : Math.min(x + _, X) / X;
                break;
              }
              case Tt.EventBasedOn.ELEMENT:
              default: {
                C = g0(a, c);
                let N = r.type.indexOf("mouse") === 0;
                if (N && Ke({ element: t, nativeEvent: r }) !== !0) break;
                let x = t.getBoundingClientRect(),
                  { left: w, top: X, width: H, height: z } = x;
                if (!N && !mN({ left: y, top: p }, x)) break;
                (R = !0), (b = m ? (y - w) / H : (p - X) / z);
                break;
              }
            }
            return (
              A && (b > 1 - v0 || b < v0) && (b = Math.round(b)),
              (o !== Tt.EventBasedOn.ELEMENT || R || R !== i.elementHovered) &&
                ((b = f ? 1 - b : b),
                e.dispatch((0, pr.parameterChanged)(C, b))),
              { elementHovered: R, clientX: y, clientY: p, pageX: h, pageY: _ }
            );
          },
        },
        [pN]: {
          types: Ma,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: n, reverse: r } = t,
              { scrollTop: a, scrollHeight: i, clientHeight: o } = gn(),
              s = a / (i - o);
            (s = r ? 1 - s : s), e.dispatch((0, pr.parameterChanged)(n, s));
          },
        },
        [lN]: {
          types: Ma,
          handler: (
            { element: e, store: t, eventConfig: n, eventStateKey: r },
            a = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: o,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: f,
              } = gn(),
              {
                basedOn: T,
                selectedAxis: y,
                continuousParameterGroupId: p,
                startsEntering: h,
                startsExiting: _,
                addEndOffset: m,
                addStartOffset: A,
                addOffsetValue: b = 0,
                endOffsetValue: C = 0,
              } = n,
              R = y === "X_AXIS";
            if (T === Tt.EventBasedOn.VIEWPORT) {
              let N = R ? i / s : o / c;
              return (
                N !== a.scrollPercent &&
                  t.dispatch((0, pr.parameterChanged)(p, N)),
                { scrollPercent: N }
              );
            } else {
              let N = g0(r, p),
                x = e.getBoundingClientRect(),
                w = (A ? b : 0) / 100,
                X = (m ? C : 0) / 100;
              (w = h ? w : 1 - w), (X = _ ? X : 1 - X);
              let H = x.top + Math.min(x.height * w, f),
                K = x.top + x.height * X - H,
                te = Math.min(f + K, c),
                S = Math.min(Math.max(0, f - H), te) / te;
              return (
                S !== a.scrollPercent &&
                  t.dispatch((0, pr.parameterChanged)(N, S)),
                { scrollPercent: S }
              );
            }
          },
        },
        [_0]: T0,
        [cN]: T0,
        [m0]: {
          ...xa,
          handler: h0((e, t) => {
            t.scrollingDown && Pe(e);
          }),
        },
        [uN]: {
          ...xa,
          handler: h0((e, t) => {
            t.scrollingDown || Pe(e);
          }),
        },
        [b0]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Xe(En, _N(Pe)),
        },
        [O0]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Xe(En, bN(Pe)),
        },
      };
  });
  var Ua = l((za) => {
    "use strict";
    Object.defineProperty(za, "__esModule", { value: !0 });
    function SN(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    SN(za, {
      observeRequests: function () {
        return JN;
      },
      startActionGroup: function () {
        return Xa;
      },
      startEngine: function () {
        return vr;
      },
      stopActionGroup: function () {
        return Ba;
      },
      stopAllActionGroups: function () {
        return G0;
      },
      stopEngine: function () {
        return mr;
      },
    });
    var AN = tt(xi()),
      ct = tt(Xn()),
      RN = tt(pp()),
      LN = tt(Vp()),
      CN = tt(kp()),
      wN = tt(Xp()),
      hn = tt(jp()),
      NN = tt(ng()),
      Ue = we(),
      M0 = It(),
      Te = or(),
      _e = MN(og()),
      PN = tt(w0());
    function tt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function x0(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (x0 = function (r) {
        return r ? n : t;
      })(e);
    }
    function MN(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = x0(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var xN = Object.keys(Ue.QuickEffectIds),
      qa = (e) => xN.includes(e),
      {
        COLON_DELIMITER: Va,
        BOUNDARY_SELECTOR: yr,
        HTML_ELEMENT: F0,
        RENDER_GENERAL: FN,
        W_MOD_IX: N0,
      } = Ue.IX2EngineConstants,
      {
        getAffectedElements: hr,
        getElementId: DN,
        getDestinationValues: Ga,
        observeStore: vt,
        getInstanceId: UN,
        renderHTMLElement: qN,
        clearAllStyles: D0,
        getMaxDurationItemIndex: VN,
        getComputedStyle: GN,
        getInstanceOrigin: kN,
        reduceListToGroup: BN,
        shouldNamespaceEventParameter: XN,
        getNamespacedParameterId: WN,
        shouldAllowMediaQuery: Ir,
        cleanupHTMLElement: HN,
        clearObjectCache: zN,
        stringifyTarget: YN,
        mediaQueriesEqual: QN,
        shallowEqual: jN,
      } = M0.IX2VanillaUtils,
      {
        isPluginType: Tr,
        createPluginInstance: ka,
        getPluginDuration: KN,
      } = M0.IX2VanillaPlugins,
      P0 = navigator.userAgent,
      $N = P0.match(/iPad/i) || P0.match(/iPhone/),
      ZN = 12;
    function JN(e) {
      vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: n3 }),
        vt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: r3,
        }),
        vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: i3 }),
        vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: a3 });
    }
    function e3(e) {
      vt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          mr(e),
            D0({ store: e, elementApi: _e }),
            vr({ store: e, allowEvents: !0 }),
            U0();
        },
      });
    }
    function t3(e, t) {
      let n = vt({
        store: e,
        select: ({ ixSession: r }) => r.tick,
        onChange: (r) => {
          t(r), n();
        },
      });
    }
    function n3({ rawData: e, defer: t }, n) {
      let r = () => {
        vr({ store: n, rawData: e, allowEvents: !0 }), U0();
      };
      t ? setTimeout(r, 0) : r();
    }
    function U0() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function r3(e, t) {
      let {
          actionTypeId: n,
          actionListId: r,
          actionItemId: a,
          eventId: i,
          allowEvents: o,
          immediate: s,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: T } = e;
      if (r && a && T && s) {
        let y = T.actionLists[r];
        y && (T = BN({ actionList: y, actionItemId: a, rawData: T }));
      }
      if (
        (vr({ store: t, rawData: T, allowEvents: o, testManual: c }),
        (r && n === Ue.ActionTypeConsts.GENERAL_START_ACTION) || qa(n))
      ) {
        Ba({ store: t, actionListId: r }),
          V0({ store: t, actionListId: r, eventId: i });
        let y = Xa({
          store: t,
          eventId: i,
          actionListId: r,
          immediate: s,
          verbose: f,
        });
        f &&
          y &&
          t.dispatch(
            (0, Te.actionListPlaybackChanged)({
              actionListId: r,
              isPlaying: !s,
            })
          );
      }
    }
    function i3({ actionListId: e }, t) {
      e ? Ba({ store: t, actionListId: e }) : G0({ store: t }), mr(t);
    }
    function a3(e, t) {
      mr(t), D0({ store: t, elementApi: _e });
    }
    function vr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
      let { ixSession: a } = e.getState();
      t && e.dispatch((0, Te.rawDataImported)(t)),
        a.active ||
          (e.dispatch(
            (0, Te.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(yr),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n &&
            (f3(e),
            o3(),
            e.getState().ixSession.hasDefinedMediaQueries && e3(e)),
          e.dispatch((0, Te.sessionStarted)()),
          s3(e, r));
    }
    function o3() {
      let { documentElement: e } = document;
      e.className.indexOf(N0) === -1 && (e.className += ` ${N0}`);
    }
    function s3(e, t) {
      let n = (r) => {
        let { ixSession: a, ixParameters: i } = e.getState();
        a.active &&
          (e.dispatch((0, Te.animationFrameChanged)(r, i)),
          t ? t3(e, n) : requestAnimationFrame(n));
      };
      n(window.performance.now());
    }
    function mr(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: n } = t;
        n.forEach(c3), zN(), e.dispatch((0, Te.sessionStopped)());
      }
    }
    function c3({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function u3({
      store: e,
      eventStateKey: t,
      eventTarget: n,
      eventId: r,
      eventConfig: a,
      actionListId: i,
      parameterGroup: o,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: T } = e.getState(),
        { events: y } = f,
        p = y[r],
        { eventTypeId: h } = p,
        _ = {},
        m = {},
        A = [],
        { continuousActionGroups: b } = o,
        { id: C } = o;
      XN(h, a) && (C = WN(t, C));
      let R = T.hasBoundaryNodes && n ? _e.getClosestElement(n, yr) : null;
      b.forEach((N) => {
        let { keyframe: x, actionItems: w } = N;
        w.forEach((X) => {
          let { actionTypeId: H } = X,
            { target: z } = X.config;
          if (!z) return;
          let K = z.boundaryMode ? R : null,
            te = YN(z) + Va + H;
          if (((m[te] = l3(m[te], x, X)), !_[te])) {
            _[te] = !0;
            let { config: U } = X;
            hr({
              config: U,
              event: p,
              eventTarget: n,
              elementRoot: K,
              elementApi: _e,
            }).forEach((S) => {
              A.push({ element: S, key: te });
            });
          }
        });
      }),
        A.forEach(({ element: N, key: x }) => {
          let w = m[x],
            X = (0, ct.default)(w, "[0].actionItems[0]", {}),
            { actionTypeId: H } = X,
            K = (
              H === Ue.ActionTypeConsts.PLUGIN_RIVE
                ? (X.config?.target?.selectorGuids || []).length === 0
                : Tr(H)
            )
              ? ka(H)(N, X)
              : null,
            te = Ga({ element: N, actionItem: X, elementApi: _e }, K);
          Wa({
            store: e,
            element: N,
            eventId: r,
            actionListId: i,
            actionItem: X,
            destination: te,
            continuous: !0,
            parameterId: C,
            actionGroups: w,
            smoothing: s,
            restingValue: c,
            pluginInstance: K,
          });
        });
    }
    function l3(e = [], t, n) {
      let r = [...e],
        a;
      return (
        r.some((i, o) => (i.keyframe === t ? ((a = o), !0) : !1)),
        a == null && ((a = r.length), r.push({ keyframe: t, actionItems: [] })),
        r[a].actionItems.push(n),
        r
      );
    }
    function f3(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: n } = t;
      q0(e),
        (0, hn.default)(n, (a, i) => {
          let o = PN.default[i];
          if (!o) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          h3({ logic: o, store: e, events: a });
        });
      let { ixSession: r } = e.getState();
      r.eventListeners.length && p3(e);
    }
    var d3 = ["resize", "orientationchange"];
    function p3(e) {
      let t = () => {
        q0(e);
      };
      d3.forEach((n) => {
        window.addEventListener(n, t),
          e.dispatch((0, Te.eventListenerAdded)(window, [n, t]));
      }),
        t();
    }
    function q0(e) {
      let { ixSession: t, ixData: n } = e.getState(),
        r = window.innerWidth;
      if (r !== t.viewportWidth) {
        let { mediaQueries: a } = n;
        e.dispatch((0, Te.viewportWidthChanged)({ width: r, mediaQueries: a }));
      }
    }
    var g3 = (e, t) => (0, LN.default)((0, wN.default)(e, t), CN.default),
      E3 = (e, t) => {
        (0, hn.default)(e, (n, r) => {
          n.forEach((a, i) => {
            let o = r + Va + i;
            t(a, r, o);
          });
        });
      },
      y3 = (e) => {
        let t = { target: e.target, targets: e.targets };
        return hr({ config: t, elementApi: _e });
      };
    function h3({ logic: e, store: t, events: n }) {
      I3(n);
      let { types: r, handler: a } = e,
        { ixData: i } = t.getState(),
        { actionLists: o } = i,
        s = g3(n, y3);
      if (!(0, RN.default)(s)) return;
      (0, hn.default)(s, (y, p) => {
        let h = n[p],
          { action: _, id: m, mediaQueries: A = i.mediaQueryKeys } = h,
          { actionListId: b } = _.config;
        QN(A, i.mediaQueryKeys) || t.dispatch((0, Te.mediaQueriesDefined)()),
          _.actionTypeId === Ue.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(h.config) ? h.config : [h.config]).forEach((R) => {
              let { continuousParameterGroupId: N } = R,
                x = (0, ct.default)(o, `${b}.continuousParameterGroups`, []),
                w = (0, AN.default)(x, ({ id: z }) => z === N),
                X = (R.smoothing || 0) / 100,
                H = (R.restingState || 0) / 100;
              w &&
                y.forEach((z, K) => {
                  let te = m + Va + K;
                  u3({
                    store: t,
                    eventStateKey: te,
                    eventTarget: z,
                    eventId: m,
                    eventConfig: R,
                    actionListId: b,
                    parameterGroup: w,
                    smoothing: X,
                    restingValue: H,
                  });
                });
            }),
          (_.actionTypeId === Ue.ActionTypeConsts.GENERAL_START_ACTION ||
            qa(_.actionTypeId)) &&
            V0({ store: t, actionListId: b, eventId: m });
      });
      let c = (y) => {
          let { ixSession: p } = t.getState();
          E3(s, (h, _, m) => {
            let A = n[_],
              b = p.eventState[m],
              { action: C, mediaQueries: R = i.mediaQueryKeys } = A;
            if (!Ir(R, p.mediaQueryKey)) return;
            let N = (x = {}) => {
              let w = a(
                {
                  store: t,
                  element: h,
                  event: A,
                  eventConfig: x,
                  nativeEvent: y,
                  eventStateKey: m,
                },
                b
              );
              jN(w, b) || t.dispatch((0, Te.eventStateChanged)(m, w));
            };
            C.actionTypeId === Ue.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(N)
              : N();
          });
        },
        f = (0, NN.default)(c, ZN),
        T = ({ target: y = document, types: p, throttle: h }) => {
          p.split(" ")
            .filter(Boolean)
            .forEach((_) => {
              let m = h ? f : c;
              y.addEventListener(_, m),
                t.dispatch((0, Te.eventListenerAdded)(y, [_, m]));
            });
        };
      Array.isArray(r) ? r.forEach(T) : typeof r == "string" && T(e);
    }
    function I3(e) {
      if (!$N) return;
      let t = {},
        n = "";
      for (let r in e) {
        let { eventTypeId: a, target: i } = e[r],
          o = _e.getQuerySelector(i);
        t[o] ||
          ((a === Ue.EventTypeConsts.MOUSE_CLICK ||
            a === Ue.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[o] = !0),
            (n += o + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (n) {
        let r = document.createElement("style");
        (r.textContent = n), document.body.appendChild(r);
      }
    }
    function V0({ store: e, actionListId: t, eventId: n }) {
      let { ixData: r, ixSession: a } = e.getState(),
        { actionLists: i, events: o } = r,
        s = o[n],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, ct.default)(c, "actionItemGroups[0].actionItems", []),
          T = (0, ct.default)(s, "mediaQueries", r.mediaQueryKeys);
        if (!Ir(T, a.mediaQueryKey)) return;
        f.forEach((y) => {
          let { config: p, actionTypeId: h } = y,
            _ =
              p?.target?.useEventTarget === !0 && p?.target?.objectId == null
                ? { target: s.target, targets: s.targets }
                : p,
            m = hr({ config: _, event: s, elementApi: _e }),
            A = Tr(h);
          m.forEach((b) => {
            let C = A ? ka(h)(b, y) : null;
            Wa({
              destination: Ga({ element: b, actionItem: y, elementApi: _e }, C),
              immediate: !0,
              store: e,
              element: b,
              eventId: n,
              actionItem: y,
              actionListId: t,
              pluginInstance: C,
            });
          });
        });
      }
    }
    function G0({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, hn.default)(t, (n) => {
        if (!n.continuous) {
          let { actionListId: r, verbose: a } = n;
          Ha(n, e),
            a &&
              e.dispatch(
                (0, Te.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Ba({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
    }) {
      let { ixInstances: i, ixSession: o } = e.getState(),
        s = o.hasBoundaryNodes && n ? _e.getClosestElement(n, yr) : null;
      (0, hn.default)(i, (c) => {
        let f = (0, ct.default)(c, "actionItem.config.target.boundaryMode"),
          T = r ? c.eventStateKey === r : !0;
        if (c.actionListId === a && c.eventId === t && T) {
          if (s && f && !_e.elementContains(s, c.element)) return;
          Ha(c, e),
            c.verbose &&
              e.dispatch(
                (0, Te.actionListPlaybackChanged)({
                  actionListId: a,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Xa({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
      groupIndex: i = 0,
      immediate: o,
      verbose: s,
    }) {
      let { ixData: c, ixSession: f } = e.getState(),
        { events: T } = c,
        y = T[t] || {},
        { mediaQueries: p = c.mediaQueryKeys } = y,
        h = (0, ct.default)(c, `actionLists.${a}`, {}),
        { actionItemGroups: _, useFirstGroupAsInitialState: m } = h;
      if (!_ || !_.length) return !1;
      i >= _.length && (0, ct.default)(y, "config.loop") && (i = 0),
        i === 0 && m && i++;
      let b =
          (i === 0 || (i === 1 && m)) && qa(y.action?.actionTypeId)
            ? y.config.delay
            : void 0,
        C = (0, ct.default)(_, [i, "actionItems"], []);
      if (!C.length || !Ir(p, f.mediaQueryKey)) return !1;
      let R = f.hasBoundaryNodes && n ? _e.getClosestElement(n, yr) : null,
        N = VN(C),
        x = !1;
      return (
        C.forEach((w, X) => {
          let { config: H, actionTypeId: z } = w,
            K = Tr(z),
            { target: te } = H;
          if (!te) return;
          let U = te.boundaryMode ? R : null;
          hr({
            config: H,
            event: y,
            eventTarget: n,
            elementRoot: U,
            elementApi: _e,
          }).forEach((F, Y) => {
            let W = K ? ka(z)(F, w) : null,
              ne = K ? KN(z)(F, w) : null;
            x = !0;
            let re = N === X && Y === 0,
              le = GN({ element: F, actionItem: w }),
              ve = Ga({ element: F, actionItem: w, elementApi: _e }, W);
            Wa({
              store: e,
              element: F,
              actionItem: w,
              eventId: t,
              eventTarget: n,
              eventStateKey: r,
              actionListId: a,
              groupIndex: i,
              isCarrier: re,
              computedStyle: le,
              destination: ve,
              immediate: o,
              verbose: s,
              pluginInstance: W,
              pluginDuration: ne,
              instanceDelay: b,
            });
          });
        }),
        x
      );
    }
    function Wa(e) {
      let { store: t, computedStyle: n, ...r } = e,
        {
          element: a,
          actionItem: i,
          immediate: o,
          pluginInstance: s,
          continuous: c,
          restingValue: f,
          eventId: T,
        } = r,
        y = !c,
        p = UN(),
        { ixElements: h, ixSession: _, ixData: m } = t.getState(),
        A = DN(h, a),
        { refState: b } = h[A] || {},
        C = _e.getRefType(a),
        R = _.reducedMotion && Ue.ReducedMotionTypes[i.actionTypeId],
        N;
      if (R && c)
        switch (m.events[T]?.eventTypeId) {
          case Ue.EventTypeConsts.MOUSE_MOVE:
          case Ue.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            N = f;
            break;
          default:
            N = 0.5;
            break;
        }
      let x = kN(a, b, n, i, _e, s);
      if (
        (t.dispatch(
          (0, Te.instanceAdded)({
            instanceId: p,
            elementId: A,
            origin: x,
            refType: C,
            skipMotion: R,
            skipToValue: N,
            ...r,
          })
        ),
        k0(document.body, "ix2-animation-started", p),
        o)
      ) {
        T3(t, p);
        return;
      }
      vt({ store: t, select: ({ ixInstances: w }) => w[p], onChange: B0 }),
        y && t.dispatch((0, Te.instanceStarted)(p, _.tick));
    }
    function Ha(e, t) {
      k0(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: n, actionItem: r } = e,
        { ixElements: a } = t.getState(),
        { ref: i, refType: o } = a[n] || {};
      o === F0 && HN(i, r, _e), t.dispatch((0, Te.instanceRemoved)(e.id));
    }
    function k0(e, t, n) {
      let r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
    }
    function T3(e, t) {
      let { ixParameters: n } = e.getState();
      e.dispatch((0, Te.instanceStarted)(t, 0)),
        e.dispatch((0, Te.animationFrameChanged)(performance.now(), n));
      let { ixInstances: r } = e.getState();
      B0(r[t], e);
    }
    function B0(e, t) {
      let {
          active: n,
          continuous: r,
          complete: a,
          elementId: i,
          actionItem: o,
          actionTypeId: s,
          renderType: c,
          current: f,
          groupIndex: T,
          eventId: y,
          eventTarget: p,
          eventStateKey: h,
          actionListId: _,
          isCarrier: m,
          styleProp: A,
          verbose: b,
          pluginInstance: C,
        } = e,
        { ixData: R, ixSession: N } = t.getState(),
        { events: x } = R,
        w = x && x[y] ? x[y] : {},
        { mediaQueries: X = R.mediaQueryKeys } = w;
      if (Ir(X, N.mediaQueryKey) && (r || n || a)) {
        if (f || (c === FN && a)) {
          t.dispatch((0, Te.elementStateChanged)(i, s, f, o));
          let { ixElements: H } = t.getState(),
            { ref: z, refType: K, refState: te } = H[i] || {},
            U = te && te[s];
          (K === F0 || Tr(s)) && qN(z, te, U, y, o, A, _e, c, C);
        }
        if (a) {
          if (m) {
            let H = Xa({
              store: t,
              eventId: y,
              eventTarget: p,
              eventStateKey: h,
              actionListId: _,
              groupIndex: T + 1,
              verbose: b,
            });
            b &&
              !H &&
              t.dispatch(
                (0, Te.actionListPlaybackChanged)({
                  actionListId: _,
                  isPlaying: !1,
                })
              );
          }
          Ha(e, t);
        }
      }
    }
  });
  var H0 = l((Qa) => {
    "use strict";
    Object.defineProperty(Qa, "__esModule", { value: !0 });
    function v3(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    v3(Qa, {
      actions: function () {
        return b3;
      },
      destroy: function () {
        return W0;
      },
      init: function () {
        return R3;
      },
      setEnv: function () {
        return A3;
      },
      store: function () {
        return _r;
      },
    });
    var m3 = jr(),
      _3 = O3(Qd()),
      Ya = Ua(),
      b3 = S3(or());
    function O3(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function X0(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (X0 = function (r) {
        return r ? n : t;
      })(e);
    }
    function S3(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = X0(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var _r = (0, m3.createStore)(_3.default);
    function A3(e) {
      e() && (0, Ya.observeRequests)(_r);
    }
    function R3(e) {
      W0(), (0, Ya.startEngine)({ store: _r, rawData: e, allowEvents: !0 });
    }
    function W0() {
      (0, Ya.stopEngine)(_r);
    }
  });
  var j0 = l((f8, Q0) => {
    "use strict";
    var z0 = Fe(),
      Y0 = H0();
    Y0.setEnv(z0.env);
    z0.define(
      "ix2",
      (Q0.exports = function () {
        return Y0;
      })
    );
  });
  var Z0 = l((d8, $0) => {
    "use strict";
    var ja = window.jQuery,
      $e = {},
      br = [],
      K0 = ".w-ix",
      Or = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ja(t).triggerHandler($e.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ja(t).triggerHandler($e.types.OUTRO));
        },
      };
    $e.triggers = {};
    $e.types = { INTRO: "w-ix-intro" + K0, OUTRO: "w-ix-outro" + K0 };
    $e.init = function () {
      for (var e = br.length, t = 0; t < e; t++) {
        var n = br[t];
        n[0](0, n[1]);
      }
      (br = []), ja.extend($e.triggers, Or);
    };
    $e.async = function () {
      for (var e in Or) {
        var t = Or[e];
        Or.hasOwnProperty(e) &&
          ($e.triggers[e] = function (n, r) {
            br.push([t, r]);
          });
      }
    };
    $e.async();
    $0.exports = $e;
  });
  var Ar = l((p8, tE) => {
    "use strict";
    var Ka = Z0();
    function J0(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var L3 = window.jQuery,
      Sr = {},
      eE = ".w-ix",
      C3 = {
        reset: function (e, t) {
          Ka.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ka.triggers.intro(e, t), J0(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ka.triggers.outro(e, t), J0(t, "COMPONENT_INACTIVE");
        },
      };
    Sr.triggers = {};
    Sr.types = { INTRO: "w-ix-intro" + eE, OUTRO: "w-ix-outro" + eE };
    L3.extend(Sr.triggers, C3);
    tE.exports = Sr;
  });
  var rE = l((g8, nE) => {
    "use strict";
    var ut = Fe(),
      w3 = Ar(),
      Oe = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    ut.define(
      "navbar",
      (nE.exports = function (e, t) {
        var n = {},
          r = e.tram,
          a = e(window),
          i = e(document),
          o = t.debounce,
          s,
          c,
          f,
          T,
          y = ut.env(),
          p = '<div class="w-nav-overlay" data-wf-ignore />',
          h = ".w-nav",
          _ = "w--open",
          m = "w--nav-dropdown-open",
          A = "w--nav-dropdown-toggle-open",
          b = "w--nav-dropdown-list-open",
          C = "w--nav-link-open",
          R = w3.triggers,
          N = e();
        (n.ready = n.design = n.preview = x),
          (n.destroy = function () {
            (N = e()), w(), c && c.length && c.each(K);
          });
        function x() {
          (f = y && ut.env("design")),
            (T = ut.env("editor")),
            (s = e(document.body)),
            (c = i.find(h)),
            c.length && (c.each(z), w(), X());
        }
        function w() {
          ut.resize.off(H);
        }
        function X() {
          ut.resize.on(H);
        }
        function H() {
          c.each(g);
        }
        function z(d, D) {
          var j = e(D),
            B = e.data(D, h);
          B ||
            (B = e.data(D, h, {
              open: !1,
              el: j,
              config: {},
              selectedIdx: -1,
            })),
            (B.menu = j.find(".w-nav-menu")),
            (B.links = B.menu.find(".w-nav-link")),
            (B.dropdowns = B.menu.find(".w-dropdown")),
            (B.dropdownToggle = B.menu.find(".w-dropdown-toggle")),
            (B.dropdownList = B.menu.find(".w-dropdown-list")),
            (B.button = j.find(".w-nav-button")),
            (B.container = j.find(".w-container")),
            (B.overlayContainerId = "w-nav-overlay-" + d),
            (B.outside = I(B));
          var de = j.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            B.button.attr("style", "-webkit-user-select: text;"),
            B.button.attr("aria-label") == null &&
              B.button.attr("aria-label", "menu"),
            B.button.attr("role", "button"),
            B.button.attr("tabindex", "0"),
            B.button.attr("aria-controls", B.overlayContainerId),
            B.button.attr("aria-haspopup", "menu"),
            B.button.attr("aria-expanded", "false"),
            B.el.off(h),
            B.button.off(h),
            B.menu.off(h),
            S(B),
            f
              ? (te(B), B.el.on("setting" + h, F(B)))
              : (U(B),
                B.button.on("click" + h, le(B)),
                B.menu.on("click" + h, "a", ve(B)),
                B.button.on("keydown" + h, Y(B)),
                B.el.on("keydown" + h, W(B))),
            g(d, D);
        }
        function K(d, D) {
          var j = e.data(D, h);
          j && (te(j), e.removeData(D, h));
        }
        function te(d) {
          d.overlay && (Q(d, !0), d.overlay.remove(), (d.overlay = null));
        }
        function U(d) {
          d.overlay ||
            ((d.overlay = e(p).appendTo(d.el)),
            d.overlay.attr("id", d.overlayContainerId),
            (d.parent = d.menu.parent()),
            Q(d, !0));
        }
        function S(d) {
          var D = {},
            j = d.config || {},
            B = (D.animation = d.el.attr("data-animation") || "default");
          (D.animOver = /^over/.test(B)),
            (D.animDirect = /left$/.test(B) ? -1 : 1),
            j.animation !== B && d.open && t.defer(re, d),
            (D.easing = d.el.attr("data-easing") || "ease"),
            (D.easing2 = d.el.attr("data-easing2") || "ease");
          var de = d.el.attr("data-duration");
          (D.duration = de != null ? Number(de) : 400),
            (D.docHeight = d.el.attr("data-doc-height")),
            (d.config = D);
        }
        function F(d) {
          return function (D, j) {
            j = j || {};
            var B = a.width();
            S(d),
              j.open === !0 && ae(d, !0),
              j.open === !1 && Q(d, !0),
              d.open &&
                t.defer(function () {
                  B !== a.width() && re(d);
                });
          };
        }
        function Y(d) {
          return function (D) {
            switch (D.keyCode) {
              case Oe.SPACE:
              case Oe.ENTER:
                return le(d)(), D.preventDefault(), D.stopPropagation();
              case Oe.ESCAPE:
                return Q(d), D.preventDefault(), D.stopPropagation();
              case Oe.ARROW_RIGHT:
              case Oe.ARROW_DOWN:
              case Oe.HOME:
              case Oe.END:
                return d.open
                  ? (D.keyCode === Oe.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    ne(d),
                    D.preventDefault(),
                    D.stopPropagation())
                  : (D.preventDefault(), D.stopPropagation());
            }
          };
        }
        function W(d) {
          return function (D) {
            if (d.open)
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                D.keyCode)
              ) {
                case Oe.HOME:
                case Oe.END:
                  return (
                    D.keyCode === Oe.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    ne(d),
                    D.preventDefault(),
                    D.stopPropagation()
                  );
                case Oe.ESCAPE:
                  return (
                    Q(d),
                    d.button.focus(),
                    D.preventDefault(),
                    D.stopPropagation()
                  );
                case Oe.ARROW_LEFT:
                case Oe.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    ne(d),
                    D.preventDefault(),
                    D.stopPropagation()
                  );
                case Oe.ARROW_RIGHT:
                case Oe.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    ne(d),
                    D.preventDefault(),
                    D.stopPropagation()
                  );
              }
          };
        }
        function ne(d) {
          if (d.links[d.selectedIdx]) {
            var D = d.links[d.selectedIdx];
            D.focus(), ve(D);
          }
        }
        function re(d) {
          d.open && (Q(d, !0), ae(d, !0));
        }
        function le(d) {
          return o(function () {
            d.open ? Q(d) : ae(d);
          });
        }
        function ve(d) {
          return function (D) {
            var j = e(this),
              B = j.attr("href");
            if (!ut.validClick(D.currentTarget)) {
              D.preventDefault();
              return;
            }
            B && B.indexOf("#") === 0 && d.open && Q(d);
          };
        }
        function I(d) {
          return (
            d.outside && i.off("click" + h, d.outside),
            function (D) {
              var j = e(D.target);
              (T && j.closest(".w-editor-bem-EditorOverlay").length) || q(d, j);
            }
          );
        }
        var q = o(function (d, D) {
          if (d.open) {
            var j = D.closest(".w-nav-menu");
            d.menu.is(j) || Q(d);
          }
        });
        function g(d, D) {
          var j = e.data(D, h),
            B = (j.collapsed = j.button.css("display") !== "none");
          if ((j.open && !B && !f && Q(j, !0), j.container.length)) {
            var de = G(j);
            j.links.each(de), j.dropdowns.each(de);
          }
          j.open && se(j);
        }
        var E = "max-width";
        function G(d) {
          var D = d.container.css(E);
          return (
            D === "none" && (D = ""),
            function (j, B) {
              (B = e(B)), B.css(E, ""), B.css(E) === "none" && B.css(E, D);
            }
          );
        }
        function V(d, D) {
          D.setAttribute("data-nav-menu-open", "");
        }
        function Z(d, D) {
          D.removeAttribute("data-nav-menu-open");
        }
        function ae(d, D) {
          if (d.open) return;
          (d.open = !0),
            d.menu.each(V),
            d.links.addClass(C),
            d.dropdowns.addClass(m),
            d.dropdownToggle.addClass(A),
            d.dropdownList.addClass(b),
            d.button.addClass(_);
          var j = d.config,
            B = j.animation;
          (B === "none" || !r.support.transform || j.duration <= 0) && (D = !0);
          var de = se(d),
            Se = d.menu.outerHeight(!0),
            Me = d.menu.outerWidth(!0),
            u = d.el.height(),
            v = d.el[0];
          if (
            (g(0, v),
            R.intro(0, v),
            ut.redraw.up(),
            f || i.on("click" + h, d.outside),
            D)
          ) {
            P();
            return;
          }
          var O = "transform " + j.duration + "ms " + j.easing;
          if (
            (d.overlay &&
              ((N = d.menu.prev()), d.overlay.show().append(d.menu)),
            j.animOver)
          ) {
            r(d.menu)
              .add(O)
              .set({ x: j.animDirect * Me, height: de })
              .start({ x: 0 })
              .then(P),
              d.overlay && d.overlay.width(Me);
            return;
          }
          var L = u + Se;
          r(d.menu).add(O).set({ y: -L }).start({ y: 0 }).then(P);
          function P() {
            d.button.attr("aria-expanded", "true");
          }
        }
        function se(d) {
          var D = d.config,
            j = D.docHeight ? i.height() : s.height();
          return (
            D.animOver
              ? d.menu.height(j)
              : d.el.css("position") !== "fixed" && (j -= d.el.outerHeight(!0)),
            d.overlay && d.overlay.height(j),
            j
          );
        }
        function Q(d, D) {
          if (!d.open) return;
          (d.open = !1), d.button.removeClass(_);
          var j = d.config;
          if (
            ((j.animation === "none" ||
              !r.support.transform ||
              j.duration <= 0) &&
              (D = !0),
            R.outro(0, d.el[0]),
            i.off("click" + h, d.outside),
            D)
          ) {
            r(d.menu).stop(), v();
            return;
          }
          var B = "transform " + j.duration + "ms " + j.easing2,
            de = d.menu.outerHeight(!0),
            Se = d.menu.outerWidth(!0),
            Me = d.el.height();
          if (j.animOver) {
            r(d.menu)
              .add(B)
              .start({ x: Se * j.animDirect })
              .then(v);
            return;
          }
          var u = Me + de;
          r(d.menu).add(B).start({ y: -u }).then(v);
          function v() {
            d.menu.height(""),
              r(d.menu).set({ x: 0, y: 0 }),
              d.menu.each(Z),
              d.links.removeClass(C),
              d.dropdowns.removeClass(m),
              d.dropdownToggle.removeClass(A),
              d.dropdownList.removeClass(b),
              d.overlay &&
                d.overlay.children().length &&
                (N.length ? d.menu.insertAfter(N) : d.menu.prependTo(d.parent),
                d.overlay.attr("style", "").hide()),
              d.el.triggerHandler("w-close"),
              d.button.attr("aria-expanded", "false");
          }
        }
        return n;
      })
    );
  });
  var iE = l(() => {
    "use strict";
    (function () {
      if (typeof window > "u") return;
      let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        t = e ? parseInt(e[1], 10) >= 16 : !1;
      if ("objectFit" in document.documentElement.style && !t) {
        window.objectFitPolyfill = function () {
          return !1;
        };
        return;
      }
      let r = function (s) {
          let c = window.getComputedStyle(s, null),
            f = c.getPropertyValue("position"),
            T = c.getPropertyValue("overflow"),
            y = c.getPropertyValue("display");
          (!f || f === "static") && (s.style.position = "relative"),
            T !== "hidden" && (s.style.overflow = "hidden"),
            (!y || y === "inline") && (s.style.display = "block"),
            s.clientHeight === 0 && (s.style.height = "100%"),
            s.className.indexOf("object-fit-polyfill") === -1 &&
              (s.className += " object-fit-polyfill");
        },
        a = function (s) {
          let c = window.getComputedStyle(s, null),
            f = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px",
            };
          for (let T in f)
            c.getPropertyValue(T) !== f[T] && (s.style[T] = f[T]);
        },
        i = function (s) {
          let c = s.parentNode;
          r(c),
            a(s),
            (s.style.position = "absolute"),
            (s.style.height = "100%"),
            (s.style.width = "auto"),
            s.clientWidth > c.clientWidth
              ? ((s.style.top = "0"),
                (s.style.marginTop = "0"),
                (s.style.left = "50%"),
                (s.style.marginLeft = s.clientWidth / -2 + "px"))
              : ((s.style.width = "100%"),
                (s.style.height = "auto"),
                (s.style.left = "0"),
                (s.style.marginLeft = "0"),
                (s.style.top = "50%"),
                (s.style.marginTop = s.clientHeight / -2 + "px"));
        },
        o = function (s) {
          if (typeof s > "u" || s instanceof Event)
            s = document.querySelectorAll("[data-object-fit]");
          else if (s && s.nodeName) s = [s];
          else if (typeof s == "object" && s.length && s[0].nodeName) s = s;
          else return !1;
          for (let c = 0; c < s.length; c++) {
            if (!s[c].nodeName) continue;
            let f = s[c].nodeName.toLowerCase();
            if (f === "img") {
              if (t) continue;
              s[c].complete
                ? i(s[c])
                : s[c].addEventListener("load", function () {
                    i(this);
                  });
            } else
              f === "video"
                ? s[c].readyState > 0
                  ? i(s[c])
                  : s[c].addEventListener("loadedmetadata", function () {
                      i(this);
                    })
                : i(s[c]);
          }
          return !0;
        };
      document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", o)
        : o(),
        window.addEventListener("resize", o),
        (window.objectFitPolyfill = o);
    })();
  });
  var aE = l(() => {
    "use strict";
    (function () {
      if (typeof window > "u") return;
      function e(r) {
        Webflow.env("design") ||
          ($("video").each(function () {
            r && $(this).prop("autoplay") ? this.play() : this.pause();
          }),
          $(".w-background-video--control").each(function () {
            r ? n($(this)) : t($(this));
          }));
      }
      function t(r) {
        r.find("> span").each(function (a) {
          $(this).prop("hidden", () => a === 0);
        });
      }
      function n(r) {
        r.find("> span").each(function (a) {
          $(this).prop("hidden", () => a === 1);
        });
      }
      $(document).ready(() => {
        let r = window.matchMedia("(prefers-reduced-motion: reduce)");
        r.addEventListener("change", (a) => {
          e(!a.matches);
        }),
          r.matches && e(!1),
          $("video:not([autoplay])").each(function () {
            $(this)
              .parent()
              .find(".w-background-video--control")
              .each(function () {
                t($(this));
              });
          }),
          $(document).on("click", ".w-background-video--control", function (a) {
            if (Webflow.env("design")) return;
            let i = $(a.currentTarget),
              o = $(`video#${i.attr("aria-controls")}`).get(0);
            if (o)
              if (o.paused) {
                let s = o.play();
                n(i),
                  s &&
                    typeof s.catch == "function" &&
                    s.catch(() => {
                      t(i);
                    });
              } else o.pause(), t(i);
          });
      });
    })();
  });
  var cE = l((T8, sE) => {
    "use strict";
    var lt = Fe(),
      N3 = Ar(),
      Ze = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      oE =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    lt.define(
      "slider",
      (sE.exports = function (e, t) {
        var n = {},
          r = e.tram,
          a = e(document),
          i,
          o,
          s = lt.env(),
          c = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          T =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          y = "w-slider-force-show",
          p = N3.triggers,
          h,
          _ = !1;
        (n.ready = function () {
          (o = lt.env("design")), m();
        }),
          (n.design = function () {
            (o = !0), setTimeout(m, 1e3);
          }),
          (n.preview = function () {
            (o = !1), m();
          }),
          (n.redraw = function () {
            (_ = !0), m(), (_ = !1);
          }),
          (n.destroy = A);
        function m() {
          (i = a.find(c)), i.length && (i.each(R), !h && (A(), b()));
        }
        function A() {
          lt.resize.off(C), lt.redraw.off(n.redraw);
        }
        function b() {
          lt.resize.on(C), lt.redraw.on(n.redraw);
        }
        function C() {
          i.filter(":visible").each(W);
        }
        function R(I, q) {
          var g = e(q),
            E = e.data(q, c);
          E ||
            (E = e.data(q, c, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: g,
              config: {},
            })),
            (E.mask = g.children(".w-slider-mask")),
            (E.left = g.children(".w-slider-arrow-left")),
            (E.right = g.children(".w-slider-arrow-right")),
            (E.nav = g.children(".w-slider-nav")),
            (E.slides = E.mask.children(".w-slide")),
            E.slides.each(p.reset),
            _ && (E.maskWidth = 0),
            g.attr("role") === void 0 && g.attr("role", "region"),
            g.attr("aria-label") === void 0 && g.attr("aria-label", "carousel");
          var G = E.mask.attr("id");
          if (
            (G || ((G = "w-slider-mask-" + I), E.mask.attr("id", G)),
            !o && !E.ariaLiveLabel && (E.ariaLiveLabel = e(T).appendTo(E.mask)),
            E.left.attr("role", "button"),
            E.left.attr("tabindex", "0"),
            E.left.attr("aria-controls", G),
            E.left.attr("aria-label") === void 0 &&
              E.left.attr("aria-label", "previous slide"),
            E.right.attr("role", "button"),
            E.right.attr("tabindex", "0"),
            E.right.attr("aria-controls", G),
            E.right.attr("aria-label") === void 0 &&
              E.right.attr("aria-label", "next slide"),
            !r.support.transform)
          ) {
            E.left.hide(), E.right.hide(), E.nav.hide(), (h = !0);
            return;
          }
          E.el.off(c),
            E.left.off(c),
            E.right.off(c),
            E.nav.off(c),
            N(E),
            o
              ? (E.el.on("setting" + c, S(E)), U(E), (E.hasTimer = !1))
              : (E.el.on("swipe" + c, S(E)),
                E.left.on("click" + c, H(E)),
                E.right.on("click" + c, z(E)),
                E.left.on("keydown" + c, X(E, H)),
                E.right.on("keydown" + c, X(E, z)),
                E.nav.on("keydown" + c, "> div", S(E)),
                E.config.autoplay &&
                  !E.hasTimer &&
                  ((E.hasTimer = !0), (E.timerCount = 1), te(E)),
                E.el.on("mouseenter" + c, w(E, !0, "mouse")),
                E.el.on("focusin" + c, w(E, !0, "keyboard")),
                E.el.on("mouseleave" + c, w(E, !1, "mouse")),
                E.el.on("focusout" + c, w(E, !1, "keyboard"))),
            E.nav.on("click" + c, "> div", S(E)),
            s ||
              E.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var V = g.filter(":hidden");
          V.addClass(y);
          var Z = g.parents(":hidden");
          Z.addClass(y), _ || W(I, q), V.removeClass(y), Z.removeClass(y);
        }
        function N(I) {
          var q = {};
          (q.crossOver = 0),
            (q.animation = I.el.attr("data-animation") || "slide"),
            q.animation === "outin" &&
              ((q.animation = "cross"), (q.crossOver = 0.5)),
            (q.easing = I.el.attr("data-easing") || "ease");
          var g = I.el.attr("data-duration");
          if (
            ((q.duration = g != null ? parseInt(g, 10) : 500),
            x(I.el.attr("data-infinite")) && (q.infinite = !0),
            x(I.el.attr("data-disable-swipe")) && (q.disableSwipe = !0),
            x(I.el.attr("data-hide-arrows"))
              ? (q.hideArrows = !0)
              : I.config.hideArrows && (I.left.show(), I.right.show()),
            x(I.el.attr("data-autoplay")))
          ) {
            (q.autoplay = !0),
              (q.delay = parseInt(I.el.attr("data-delay"), 10) || 2e3),
              (q.timerMax = parseInt(I.el.attr("data-autoplay-limit"), 10));
            var E = "mousedown" + c + " touchstart" + c;
            o ||
              I.el.off(E).one(E, function () {
                U(I);
              });
          }
          var G = I.right.width();
          (q.edge = G ? G + 40 : 100), (I.config = q);
        }
        function x(I) {
          return I === "1" || I === "true";
        }
        function w(I, q, g) {
          return function (E) {
            if (q) I.hasFocus[g] = q;
            else if (
              e.contains(I.el.get(0), E.relatedTarget) ||
              ((I.hasFocus[g] = q),
              (I.hasFocus.mouse && g === "keyboard") ||
                (I.hasFocus.keyboard && g === "mouse"))
            )
              return;
            q
              ? (I.ariaLiveLabel.attr("aria-live", "polite"),
                I.hasTimer && U(I))
              : (I.ariaLiveLabel.attr("aria-live", "off"), I.hasTimer && te(I));
          };
        }
        function X(I, q) {
          return function (g) {
            switch (g.keyCode) {
              case Ze.SPACE:
              case Ze.ENTER:
                return q(I)(), g.preventDefault(), g.stopPropagation();
            }
          };
        }
        function H(I) {
          return function () {
            Y(I, { index: I.index - 1, vector: -1 });
          };
        }
        function z(I) {
          return function () {
            Y(I, { index: I.index + 1, vector: 1 });
          };
        }
        function K(I, q) {
          var g = null;
          q === I.slides.length && (m(), ne(I)),
            t.each(I.anchors, function (E, G) {
              e(E.els).each(function (V, Z) {
                e(Z).index() === q && (g = G);
              });
            }),
            g != null && Y(I, { index: g, immediate: !0 });
        }
        function te(I) {
          U(I);
          var q = I.config,
            g = q.timerMax;
          (g && I.timerCount++ > g) ||
            (I.timerId = window.setTimeout(function () {
              I.timerId == null || o || (z(I)(), te(I));
            }, q.delay));
        }
        function U(I) {
          window.clearTimeout(I.timerId), (I.timerId = null);
        }
        function S(I) {
          return function (q, g) {
            g = g || {};
            var E = I.config;
            if (o && q.type === "setting") {
              if (g.select === "prev") return H(I)();
              if (g.select === "next") return z(I)();
              if ((N(I), ne(I), g.select == null)) return;
              K(I, g.select);
              return;
            }
            if (q.type === "swipe")
              return E.disableSwipe || lt.env("editor")
                ? void 0
                : g.direction === "left"
                ? z(I)()
                : g.direction === "right"
                ? H(I)()
                : void 0;
            if (I.nav.has(q.target).length) {
              var G = e(q.target).index();
              if (
                (q.type === "click" && Y(I, { index: G }), q.type === "keydown")
              )
                switch (q.keyCode) {
                  case Ze.ENTER:
                  case Ze.SPACE: {
                    Y(I, { index: G }), q.preventDefault();
                    break;
                  }
                  case Ze.ARROW_LEFT:
                  case Ze.ARROW_UP: {
                    F(I.nav, Math.max(G - 1, 0)), q.preventDefault();
                    break;
                  }
                  case Ze.ARROW_RIGHT:
                  case Ze.ARROW_DOWN: {
                    F(I.nav, Math.min(G + 1, I.pages)), q.preventDefault();
                    break;
                  }
                  case Ze.HOME: {
                    F(I.nav, 0), q.preventDefault();
                    break;
                  }
                  case Ze.END: {
                    F(I.nav, I.pages), q.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function F(I, q) {
          var g = I.children().eq(q).focus();
          I.children().not(g);
        }
        function Y(I, q) {
          q = q || {};
          var g = I.config,
            E = I.anchors;
          I.previous = I.index;
          var G = q.index,
            V = {};
          G < 0
            ? ((G = E.length - 1),
              g.infinite &&
                ((V.x = -I.endX), (V.from = 0), (V.to = E[0].width)))
            : G >= E.length &&
              ((G = 0),
              g.infinite &&
                ((V.x = E[E.length - 1].width),
                (V.from = -E[E.length - 1].x),
                (V.to = V.from - V.x))),
            (I.index = G);
          var Z = I.nav
            .children()
            .eq(G)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          I.nav
            .children()
            .not(Z)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            g.hideArrows &&
              (I.index === E.length - 1 ? I.right.hide() : I.right.show(),
              I.index === 0 ? I.left.hide() : I.left.show());
          var ae = I.offsetX || 0,
            se = (I.offsetX = -E[I.index].x),
            Q = { x: se, opacity: 1, visibility: "" },
            d = e(E[I.index].els),
            D = e(E[I.previous] && E[I.previous].els),
            j = I.slides.not(d),
            B = g.animation,
            de = g.easing,
            Se = Math.round(g.duration),
            Me = q.vector || (I.index > I.previous ? 1 : -1),
            u = "opacity " + Se + "ms " + de,
            v = "transform " + Se + "ms " + de;
          if (
            (d.find(oE).removeAttr("tabindex"),
            d.removeAttr("aria-hidden"),
            d.find("*").removeAttr("aria-hidden"),
            j.find(oE).attr("tabindex", "-1"),
            j.attr("aria-hidden", "true"),
            j.find("*").attr("aria-hidden", "true"),
            o || (d.each(p.intro), j.each(p.outro)),
            q.immediate && !_)
          ) {
            r(d).set(Q), P();
            return;
          }
          if (I.index === I.previous) return;
          if (
            (o || I.ariaLiveLabel.text(`Slide ${G + 1} of ${E.length}.`),
            B === "cross")
          ) {
            var O = Math.round(Se - Se * g.crossOver),
              L = Math.round(Se - O);
            (u = "opacity " + O + "ms " + de),
              r(D).set({ visibility: "" }).add(u).start({ opacity: 0 }),
              r(d)
                .set({ visibility: "", x: se, opacity: 0, zIndex: I.depth++ })
                .add(u)
                .wait(L)
                .then({ opacity: 1 })
                .then(P);
            return;
          }
          if (B === "fade") {
            r(D).set({ visibility: "" }).stop(),
              r(d)
                .set({ visibility: "", x: se, opacity: 0, zIndex: I.depth++ })
                .add(u)
                .start({ opacity: 1 })
                .then(P);
            return;
          }
          if (B === "over") {
            (Q = { x: I.endX }),
              r(D).set({ visibility: "" }).stop(),
              r(d)
                .set({
                  visibility: "",
                  zIndex: I.depth++,
                  x: se + E[I.index].width * Me,
                })
                .add(v)
                .start({ x: se })
                .then(P);
            return;
          }
          g.infinite && V.x
            ? (r(I.slides.not(D))
                .set({ visibility: "", x: V.x })
                .add(v)
                .start({ x: se }),
              r(D).set({ visibility: "", x: V.from }).add(v).start({ x: V.to }),
              (I.shifted = D))
            : (g.infinite &&
                I.shifted &&
                (r(I.shifted).set({ visibility: "", x: ae }),
                (I.shifted = null)),
              r(I.slides).set({ visibility: "" }).add(v).start({ x: se }));
          function P() {
            (d = e(E[I.index].els)),
              (j = I.slides.not(d)),
              B !== "slide" && (Q.visibility = "hidden"),
              r(j).set(Q);
          }
        }
        function W(I, q) {
          var g = e.data(q, c);
          if (g) {
            if (le(g)) return ne(g);
            o && ve(g) && ne(g);
          }
        }
        function ne(I) {
          var q = 1,
            g = 0,
            E = 0,
            G = 0,
            V = I.maskWidth,
            Z = V - I.config.edge;
          Z < 0 && (Z = 0),
            (I.anchors = [{ els: [], x: 0, width: 0 }]),
            I.slides.each(function (se, Q) {
              E - g > Z &&
                (q++,
                (g += V),
                (I.anchors[q - 1] = { els: [], x: E, width: 0 })),
                (G = e(Q).outerWidth(!0)),
                (E += G),
                (I.anchors[q - 1].width += G),
                I.anchors[q - 1].els.push(Q);
              var d = se + 1 + " of " + I.slides.length;
              e(Q).attr("aria-label", d), e(Q).attr("role", "group");
            }),
            (I.endX = E),
            o && (I.pages = null),
            I.nav.length && I.pages !== q && ((I.pages = q), re(I));
          var ae = I.index;
          ae >= q && (ae = q - 1), Y(I, { immediate: !0, index: ae });
        }
        function re(I) {
          var q = [],
            g,
            E = I.el.attr("data-nav-spacing");
          E && (E = parseFloat(E) + "px");
          for (var G = 0, V = I.pages; G < V; G++)
            (g = e(f)),
              g
                .attr("aria-label", "Show slide " + (G + 1) + " of " + V)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              I.nav.hasClass("w-num") && g.text(G + 1),
              E != null && g.css({ "margin-left": E, "margin-right": E }),
              q.push(g);
          I.nav.empty().append(q);
        }
        function le(I) {
          var q = I.mask.width();
          return I.maskWidth !== q ? ((I.maskWidth = q), !0) : !1;
        }
        function ve(I) {
          var q = 0;
          return (
            I.slides.each(function (g, E) {
              q += e(E).outerWidth(!0);
            }),
            I.slidesWidth !== q ? ((I.slidesWidth = q), !0) : !1
          );
        }
        return n;
      })
    );
  });
  var uE = l(($a) => {
    "use strict";
    Object.defineProperty($a, "__esModule", { value: !0 });
    Object.defineProperty($a, "default", {
      enumerable: !0,
      get: function () {
        return P3;
      },
    });
    function P3(e, t, n, r, a, i, o, s, c, f, T, y, p) {
      return function (h) {
        e(h);
        var _ = h.form,
          m = {
            name: _.attr("data-name") || _.attr("name") || "Untitled Form",
            pageId: _.attr("data-wf-page-id") || "",
            elementId: _.attr("data-wf-element-id") || "",
            domain: y("html").attr("data-wf-domain") || null,
            source: t.href,
            test: n.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              _.html()
            ),
            trackingCookies: r(),
          };
        let A = _.attr("data-wf-flow");
        A && (m.wfFlow = A), a(h);
        var b = i(_, m.fields);
        if (b) return o(b);
        if (((m.fileUploads = s(_)), c(h), !f)) {
          T(h);
          return;
        }
        y.ajax({
          url: p,
          type: "POST",
          data: m,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (C) {
            C && C.code === 200 && (h.success = !0), T(h);
          })
          .fail(function () {
            T(h);
          });
      };
    }
  });
  var fE = l((m8, lE) => {
    "use strict";
    var Rr = Fe(),
      M3 = (e, t, n, r) => {
        let a = document.createElement("div");
        t.appendChild(a),
          turnstile.render(a, {
            sitekey: e,
            callback: function (i) {
              n(i);
            },
            "error-callback": function () {
              r();
            },
          });
      };
    Rr.define(
      "forms",
      (lE.exports = function (e, t) {
        let n = "TURNSTILE_LOADED";
        var r = {},
          a = e(document),
          i,
          o = window.location,
          s = window.XDomainRequest && !window.atob,
          c = ".w-form",
          f,
          T = /e(-)?mail/i,
          y = /^\S+@\S+$/,
          p = window.alert,
          h = Rr.env(),
          _,
          m,
          A;
        let b = a.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          C;
        var R = /list-manage[1-9]?.com/i,
          N = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              w(), x(), !h && !_ && H();
            };
        function x() {
          (f = e("html").attr("data-wf-site")),
            (m = "https://webflow.com/api/v1/form/" + f),
            s &&
              m.indexOf("https://webflow.com") >= 0 &&
              (m = m.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (A = `${m}/signFile`),
            (i = e(c + " form")),
            i.length && i.each(X);
        }
        function w() {
          b &&
            ((C = document.createElement("script")),
            (C.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(C),
            (C.onload = () => {
              a.trigger(n);
            }));
        }
        function X(g, E) {
          var G = e(E),
            V = e.data(E, c);
          V || (V = e.data(E, c, { form: G })), z(V);
          var Z = G.closest("div.w-form");
          (V.done = Z.find("> .w-form-done")),
            (V.fail = Z.find("> .w-form-fail")),
            (V.fileUploads = Z.find(".w-file-upload")),
            V.fileUploads.each(function (Q) {
              ve(Q, V);
            }),
            b &&
              ((V.wait = !1),
              K(V),
              a.on(typeof turnstile < "u" ? "ready" : n, function () {
                M3(
                  b,
                  E,
                  (Q) => {
                    (V.turnstileToken = Q), z(V);
                  },
                  () => {
                    K(V);
                  }
                );
              }));
          var ae =
            V.form.attr("aria-label") || V.form.attr("data-name") || "Form";
          V.done.attr("aria-label") || V.form.attr("aria-label", ae),
            V.done.attr("tabindex", "-1"),
            V.done.attr("role", "region"),
            V.done.attr("aria-label") ||
              V.done.attr("aria-label", ae + " success"),
            V.fail.attr("tabindex", "-1"),
            V.fail.attr("role", "region"),
            V.fail.attr("aria-label") ||
              V.fail.attr("aria-label", ae + " failure");
          var se = (V.action = G.attr("action"));
          if (
            ((V.handler = null),
            (V.redirect = G.attr("data-redirect")),
            R.test(se))
          ) {
            V.handler = ne;
            return;
          }
          if (!se) {
            if (f) {
              V.handler = (() => {
                let Q = uE().default;
                return Q(z, o, Rr, F, le, te, p, U, K, f, re, e, m);
              })();
              return;
            }
            N();
          }
        }
        function H() {
          (_ = !0),
            a.on("submit", c + " form", function (Q) {
              var d = e.data(this, c);
              d.handler && ((d.evt = Q), d.handler(d));
            });
          let g = ".w-checkbox-input",
            E = ".w-radio-input",
            G = "w--redirected-checked",
            V = "w--redirected-focus",
            Z = "w--redirected-focus-visible",
            ae = ":focus-visible, [data-wf-focus-visible]",
            se = [
              ["checkbox", g],
              ["radio", E],
            ];
          a.on(
            "change",
            c + ' form input[type="checkbox"]:not(' + g + ")",
            (Q) => {
              e(Q.target).siblings(g).toggleClass(G);
            }
          ),
            a.on("change", c + ' form input[type="radio"]', (Q) => {
              e(`input[name="${Q.target.name}"]:not(${g})`).map((D, j) =>
                e(j).siblings(E).removeClass(G)
              );
              let d = e(Q.target);
              d.hasClass("w-radio-input") || d.siblings(E).addClass(G);
            }),
            se.forEach(([Q, d]) => {
              a.on(
                "focus",
                c + ` form input[type="${Q}"]:not(` + d + ")",
                (D) => {
                  e(D.target).siblings(d).addClass(V),
                    e(D.target).filter(ae).siblings(d).addClass(Z);
                }
              ),
                a.on(
                  "blur",
                  c + ` form input[type="${Q}"]:not(` + d + ")",
                  (D) => {
                    e(D.target).siblings(d).removeClass(`${V} ${Z}`);
                  }
                );
            });
        }
        function z(g) {
          var E = (g.btn = g.form.find(':input[type="submit"]'));
          (g.wait = g.btn.attr("data-wait") || null),
            (g.success = !1),
            E.prop("disabled", !!(b && !g.turnstileToken)),
            g.label && E.val(g.label);
        }
        function K(g) {
          var E = g.btn,
            G = g.wait;
          E.prop("disabled", !0), G && ((g.label = E.val()), E.val(G));
        }
        function te(g, E) {
          var G = null;
          return (
            (E = E || {}),
            g
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (V, Z) {
                var ae = e(Z),
                  se = ae.attr("type"),
                  Q =
                    ae.attr("data-name") ||
                    ae.attr("name") ||
                    "Field " + (V + 1);
                Q = encodeURIComponent(Q);
                var d = ae.val();
                if (se === "checkbox") d = ae.is(":checked");
                else if (se === "radio") {
                  if (E[Q] === null || typeof E[Q] == "string") return;
                  d =
                    g
                      .find('input[name="' + ae.attr("name") + '"]:checked')
                      .val() || null;
                }
                typeof d == "string" && (d = e.trim(d)),
                  (E[Q] = d),
                  (G = G || Y(ae, se, Q, d));
              }),
            G
          );
        }
        function U(g) {
          var E = {};
          return (
            g.find(':input[type="file"]').each(function (G, V) {
              var Z = e(V),
                ae = Z.attr("data-name") || Z.attr("name") || "File " + (G + 1),
                se = Z.attr("data-value");
              typeof se == "string" && (se = e.trim(se)), (E[ae] = se);
            }),
            E
          );
        }
        let S = { _mkto_trk: "marketo" };
        function F() {
          return document.cookie.split("; ").reduce(function (E, G) {
            let V = G.split("="),
              Z = V[0];
            if (Z in S) {
              let ae = S[Z],
                se = V.slice(1).join("=");
              E[ae] = se;
            }
            return E;
          }, {});
        }
        function Y(g, E, G, V) {
          var Z = null;
          return (
            E === "password"
              ? (Z = "Passwords cannot be submitted.")
              : g.attr("required")
              ? V
                ? T.test(g.attr("type")) &&
                  (y.test(V) ||
                    (Z = "Please enter a valid email address for: " + G))
                : (Z = "Please fill out the required field: " + G)
              : G === "g-recaptcha-response" &&
                !V &&
                (Z = "Please confirm you\u2019re not a robot."),
            Z
          );
        }
        function W(g) {
          le(g), re(g);
        }
        function ne(g) {
          z(g);
          var E = g.form,
            G = {};
          if (/^https/.test(o.href) && !/^https/.test(g.action)) {
            E.attr("method", "post");
            return;
          }
          le(g);
          var V = te(E, G);
          if (V) return p(V);
          K(g);
          var Z;
          t.each(G, function (d, D) {
            T.test(D) && (G.EMAIL = d),
              /^((full[ _-]?)?name)$/i.test(D) && (Z = d),
              /^(first[ _-]?name)$/i.test(D) && (G.FNAME = d),
              /^(last[ _-]?name)$/i.test(D) && (G.LNAME = d);
          }),
            Z &&
              !G.FNAME &&
              ((Z = Z.split(" ")),
              (G.FNAME = Z[0]),
              (G.LNAME = G.LNAME || Z[1]));
          var ae = g.action.replace("/post?", "/post-json?") + "&c=?",
            se = ae.indexOf("u=") + 2;
          se = ae.substring(se, ae.indexOf("&", se));
          var Q = ae.indexOf("id=") + 3;
          (Q = ae.substring(Q, ae.indexOf("&", Q))),
            (G["b_" + se + "_" + Q] = ""),
            e
              .ajax({ url: ae, data: G, dataType: "jsonp" })
              .done(function (d) {
                (g.success = d.result === "success" || /already/.test(d.msg)),
                  g.success || console.info("MailChimp error: " + d.msg),
                  re(g);
              })
              .fail(function () {
                re(g);
              });
        }
        function re(g) {
          var E = g.form,
            G = g.redirect,
            V = g.success;
          if (V && G) {
            Rr.location(G);
            return;
          }
          g.done.toggle(V),
            g.fail.toggle(!V),
            V ? g.done.focus() : g.fail.focus(),
            E.toggle(!V),
            z(g);
        }
        function le(g) {
          g.evt && g.evt.preventDefault(), (g.evt = null);
        }
        function ve(g, E) {
          if (!E.fileUploads || !E.fileUploads[g]) return;
          var G,
            V = e(E.fileUploads[g]),
            Z = V.find("> .w-file-upload-default"),
            ae = V.find("> .w-file-upload-uploading"),
            se = V.find("> .w-file-upload-success"),
            Q = V.find("> .w-file-upload-error"),
            d = Z.find(".w-file-upload-input"),
            D = Z.find(".w-file-upload-label"),
            j = D.children(),
            B = Q.find(".w-file-upload-error-msg"),
            de = se.find(".w-file-upload-file"),
            Se = se.find(".w-file-remove-link"),
            Me = de.find(".w-file-upload-file-name"),
            u = B.attr("data-w-size-error"),
            v = B.attr("data-w-type-error"),
            O = B.attr("data-w-generic-error");
          if (
            (h ||
              D.on("click keydown", function (ee) {
                (ee.type === "keydown" && ee.which !== 13 && ee.which !== 32) ||
                  (ee.preventDefault(), d.click());
              }),
            D.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Se.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            h)
          )
            d.on("click", function (ee) {
              ee.preventDefault();
            }),
              D.on("click", function (ee) {
                ee.preventDefault();
              }),
              j.on("click", function (ee) {
                ee.preventDefault();
              });
          else {
            Se.on("click keydown", function (ee) {
              if (ee.type === "keydown") {
                if (ee.which !== 13 && ee.which !== 32) return;
                ee.preventDefault();
              }
              d.removeAttr("data-value"),
                d.val(""),
                Me.html(""),
                Z.toggle(!0),
                se.toggle(!1),
                D.focus();
            }),
              d.on("change", function (ee) {
                (G = ee.target && ee.target.files && ee.target.files[0]),
                  G &&
                    (Z.toggle(!1),
                    Q.toggle(!1),
                    ae.toggle(!0),
                    ae.focus(),
                    Me.text(G.name),
                    oe() || K(E),
                    (E.fileUploads[g].uploading = !0),
                    I(G, M));
              });
            var L = D.outerHeight();
            d.height(L), d.width(1);
          }
          function P(ee) {
            var k = ee.responseJSON && ee.responseJSON.msg,
              ce = O;
            typeof k == "string" && k.indexOf("InvalidFileTypeError") === 0
              ? (ce = v)
              : typeof k == "string" &&
                k.indexOf("MaxFileSizeError") === 0 &&
                (ce = u),
              B.text(ce),
              d.removeAttr("data-value"),
              d.val(""),
              ae.toggle(!1),
              Z.toggle(!0),
              Q.toggle(!0),
              Q.focus(),
              (E.fileUploads[g].uploading = !1),
              oe() || z(E);
          }
          function M(ee, k) {
            if (ee) return P(ee);
            var ce = k.fileName,
              ue = k.postData,
              Ie = k.fileId,
              xe = k.s3Url;
            d.attr("data-value", Ie), q(xe, ue, G, ce, J);
          }
          function J(ee) {
            if (ee) return P(ee);
            ae.toggle(!1),
              se.css("display", "inline-block"),
              se.focus(),
              (E.fileUploads[g].uploading = !1),
              oe() || z(E);
          }
          function oe() {
            var ee = (E.fileUploads && E.fileUploads.toArray()) || [];
            return ee.some(function (k) {
              return k.uploading;
            });
          }
        }
        function I(g, E) {
          var G = new URLSearchParams({ name: g.name, size: g.size });
          e.ajax({ type: "GET", url: `${A}?${G}`, crossDomain: !0 })
            .done(function (V) {
              E(null, V);
            })
            .fail(function (V) {
              E(V);
            });
        }
        function q(g, E, G, V, Z) {
          var ae = new FormData();
          for (var se in E) ae.append(se, E[se]);
          ae.append("file", G, V),
            e
              .ajax({
                type: "POST",
                url: g,
                data: ae,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                Z(null);
              })
              .fail(function (Q) {
                Z(Q);
              });
        }
        return r;
      })
    );
  });
  lo();
  po();
  Eo();
  Io();
  vo();
  _o();
  Oo();
  j0();
  Ar();
  rE();
  iE();
  aE();
  cE();
  fE();
  Webflow.require("ix2").init({
    events: {
      e: {
        id: "e",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-2" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".rich-text",
          originalId:
            "6565fce350a68b672cbfe187|171e66d1-e092-65c1-38eb-2bae4bce2b91",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".rich-text",
            originalId:
              "6565fce350a68b672cbfe187|171e66d1-e092-65c1-38eb-2bae4bce2b91",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 25,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1701780860874,
      },
      "e-3": {
        id: "e-3",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-6",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727373868582,
      },
      "e-9": {
        id: "e-9",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-10",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".span",
          originalId:
            "65de337b3ad9d2821719f51d|bc3b1b15-dee5-fabd-8b78-9b5c98ea82a7",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".span",
            originalId:
              "65de337b3ad9d2821719f51d|bc3b1b15-dee5-fabd-8b78-9b5c98ea82a7",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 5,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1648061835163,
      },
      "e-11": {
        id: "e-11",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-12" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|1af93a0f-02ae-0fb1-39b8-a79c00b212e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|1af93a0f-02ae-0fb1-39b8-a79c00b212e1",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1726248995008,
      },
      "e-13": {
        id: "e-13",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-14" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|1af93a0f-02ae-0fb1-39b8-a79c00b212e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|1af93a0f-02ae-0fb1-39b8-a79c00b212e6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 350,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1726249002010,
      },
      "e-15": {
        id: "e-15",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-16" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|1af93a0f-02ae-0fb1-39b8-a79c00b212eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|1af93a0f-02ae-0fb1-39b8-a79c00b212eb",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 450,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1726249009412,
      },
      "e-17": {
        id: "e-17",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-18",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|73288c24-eeb7-39b2-85cd-763ff79ca8f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|73288c24-eeb7-39b2-85cd-763ff79ca8f2",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727378288980,
      },
      "e-19": {
        id: "e-19",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-20",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|1011e787-9224-20e9-bffc-5635b538b71b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|1011e787-9224-20e9-bffc-5635b538b71b",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727378524931,
      },
      "e-21": {
        id: "e-21",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-22",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|ae652382-6228-b150-45bd-6a95d930eecd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|ae652382-6228-b150-45bd-6a95d930eecd",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727378622149,
      },
      "e-30": {
        id: "e-30",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-36" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec28",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec28",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 650,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553214072,
      },
      "e-32": {
        id: "e-32",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-29" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec32",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 650,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553259755,
      },
      "e-35": {
        id: "e-35",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-46" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec26",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec26",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 550,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553205613,
      },
      "e-37": {
        id: "e-37",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-47" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec24",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 450,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553197891,
      },
      "e-38": {
        id: "e-38",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-42" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec2a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553222768,
      },
      "e-39": {
        id: "e-39",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-40" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec22",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec22",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 350,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553189911,
      },
      "e-43": {
        id: "e-43",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-33" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec2e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec2e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 450,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553239018,
      },
      "e-44": {
        id: "e-44",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-41" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec30",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec30",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 550,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553247041,
      },
      "e-48": {
        id: "e-48",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-34" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec20",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec20",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553179252,
      },
      "e-49": {
        id: "e-49",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-31" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec2c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|8c09f274-22f7-e716-7c2e-3f9c1e0aec2c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 350,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725553230612,
      },
      "e-50": {
        id: "e-50",
        name: "",
        animationType: "custom",
        eventTypeId: "SLIDER_ACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-10",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-51",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".slider",
          originalId:
            "6745c9e4cb456ce777facffa|c8d3a87a-6efb-560d-86b2-17f7537daef7",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".slider",
            originalId:
              "6745c9e4cb456ce777facffa|c8d3a87a-6efb-560d-86b2-17f7537daef7",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1717103377580,
      },
      "e-51": {
        id: "e-51",
        name: "",
        animationType: "custom",
        eventTypeId: "SLIDER_INACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-11",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-50",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".slider",
          originalId:
            "6745c9e4cb456ce777facffa|c8d3a87a-6efb-560d-86b2-17f7537daef7",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".slider",
            originalId:
              "6745c9e4cb456ce777facffa|c8d3a87a-6efb-560d-86b2-17f7537daef7",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1717103377582,
      },
      "e-60": {
        id: "e-60",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: !1,
          config: { actionListId: "growIn", autoStopEventId: "e-62" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|6919b5fe-8e6e-d3ed-6931-af96b353a9e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|6919b5fe-8e6e-d3ed-6931-af96b353a9e0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 450,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725146649616,
      },
      "e-64": {
        id: "e-64",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-65",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffb|55b3ef54-16cb-ea53-065b-530989df68e4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffb|55b3ef54-16cb-ea53-065b-530989df68e4",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727387910491,
      },
      "e-65": {
        id: "e-65",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-64",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffb|55b3ef54-16cb-ea53-065b-530989df68e4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffb|55b3ef54-16cb-ea53-065b-530989df68e4",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727387910491,
      },
      "e-66": {
        id: "e-66",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-12", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|232a72a8-66b3-0fe6-3e25-84cc3964b222",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|232a72a8-66b3-0fe6-3e25-84cc3964b222",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-12-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 90,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-12-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 90,
            restingState: 50,
          },
        ],
        createdOn: 1727449351828,
      },
      "e-67": {
        id: "e-67",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-68",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".works-card",
          originalId:
            "6745c9e4cb456ce777facffa|232a72a8-66b3-0fe6-3e25-84cc3964b222",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".works-card",
            originalId:
              "6745c9e4cb456ce777facffa|232a72a8-66b3-0fe6-3e25-84cc3964b222",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727449732045,
      },
      "e-68": {
        id: "e-68",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-67",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".works-card",
          originalId:
            "6745c9e4cb456ce777facffa|232a72a8-66b3-0fe6-3e25-84cc3964b222",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".works-card",
            originalId:
              "6745c9e4cb456ce777facffa|232a72a8-66b3-0fe6-3e25-84cc3964b222",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727449732045,
      },
      "e-84": {
        id: "e-84",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_OUT_OF_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-86",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".work-template-images",
          originalId:
            "6745c9e4cb456ce777facffc|babe0d67-8e76-80ee-1865-39d909ece252",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".work-template-images",
            originalId:
              "6745c9e4cb456ce777facffc|babe0d67-8e76-80ee-1865-39d909ece252",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1724416942237,
      },
      "e-86": {
        id: "e-86",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-84",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".work-template-images",
          originalId:
            "6745c9e4cb456ce777facffc|babe0d67-8e76-80ee-1865-39d909ece252",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".work-template-images",
            originalId:
              "6745c9e4cb456ce777facffc|babe0d67-8e76-80ee-1865-39d909ece252",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1724416942235,
      },
      "e-98": {
        id: "e-98",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-77",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffc|babe0d67-8e76-80ee-1865-39d909ece219",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffc|babe0d67-8e76-80ee-1865-39d909ece219",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1724416636247,
      },
      "e-99": {
        id: "e-99",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: !1,
          config: { actionListId: "growIn", autoStopEventId: "e-100" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffc|2fd84475-7086-ac59-b6e0-9a29ebe09771",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffc|2fd84475-7086-ac59-b6e0-9a29ebe09771",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 450,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1727541270248,
      },
      "e-101": {
        id: "e-101",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-102" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffc|2fd84475-7086-ac59-b6e0-9a29ebe09774",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffc|2fd84475-7086-ac59-b6e0-9a29ebe09774",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727541270248,
      },
      "e-103": {
        id: "e-103",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-104" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffc|2fd84475-7086-ac59-b6e0-9a29ebe0977d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffc|2fd84475-7086-ac59-b6e0-9a29ebe0977d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727541270248,
      },
      "e-105": {
        id: "e-105",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-12", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffd|6714fa55-0b82-8e19-61a2-7e872287be5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffd|6714fa55-0b82-8e19-61a2-7e872287be5a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-12-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 90,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-12-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 90,
            restingState: 50,
          },
        ],
        createdOn: 1727541793244,
      },
      "e-112": {
        id: "e-112",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-113" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffe|a51d9b64-bbeb-b439-510d-97f8f4a7d334",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffe|a51d9b64-bbeb-b439-510d-97f8f4a7d334",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 15,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1724524544565,
      },
      "e-120": {
        id: "e-120",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-121",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727550682155,
      },
      "e-122": {
        id: "e-122",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-123" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".text-images",
          originalId:
            "6745c9e4cb456ce777facffa|1af93a0f-02ae-0fb1-39b8-a79c00b212d4",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".text-images",
            originalId:
              "6745c9e4cb456ce777facffa|1af93a0f-02ae-0fb1-39b8-a79c00b212d4",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552132658,
      },
      "e-126": {
        id: "e-126",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-127" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".card",
          originalId:
            "6745c9e4cb456ce777facffa|73288c24-eeb7-39b2-85cd-763ff79ca8f2",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".card",
            originalId:
              "6745c9e4cb456ce777facffa|73288c24-eeb7-39b2-85cd-763ff79ca8f2",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552196035,
      },
      "e-128": {
        id: "e-128",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-129" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".header",
          originalId:
            "6745c9e4cb456ce777facffa|18f6b350-d7b7-37ca-f9a3-5b8ba99acb03",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".header",
            originalId:
              "6745c9e4cb456ce777facffa|18f6b350-d7b7-37ca-f9a3-5b8ba99acb03",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552276143,
      },
      "e-130": {
        id: "e-130",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-131" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".works-card",
          originalId:
            "6745c9e4cb456ce777facffa|232a72a8-66b3-0fe6-3e25-84cc3964b222",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".works-card",
            originalId:
              "6745c9e4cb456ce777facffa|232a72a8-66b3-0fe6-3e25-84cc3964b222",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552354917,
      },
      "e-132": {
        id: "e-132",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-133" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".slide-interaction",
          originalId:
            "6745c9e4cb456ce777facffa|b9a5c802-cd22-1880-c341-79869e9c1d06",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".slide-interaction",
            originalId:
              "6745c9e4cb456ce777facffa|b9a5c802-cd22-1880-c341-79869e9c1d06",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552378788,
      },
      "e-134": {
        id: "e-134",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-135" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".testimonial-slider",
          originalId:
            "6745c9e4cb456ce777facffa|c8d3a87a-6efb-560d-86b2-17f7537daef5",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".testimonial-slider",
            originalId:
              "6745c9e4cb456ce777facffa|c8d3a87a-6efb-560d-86b2-17f7537daef5",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552436938,
      },
      "e-136": {
        id: "e-136",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-137" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".footer-links-component",
          originalId:
            "6745c9e4cb456ce777facffa|1d022b61-81e4-141e-d6ca-0013375a3516",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".footer-links-component",
            originalId:
              "6745c9e4cb456ce777facffa|1d022b61-81e4-141e-d6ca-0013375a3516",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552506509,
      },
      "e-138": {
        id: "e-138",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-139" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".works-header",
          originalId:
            "6745c9e4cb456ce777facffd|0812e040-4285-e4b9-3353-d7ed62e9cf42",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".works-header",
            originalId:
              "6745c9e4cb456ce777facffd|0812e040-4285-e4b9-3353-d7ed62e9cf42",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552579145,
      },
      "e-140": {
        id: "e-140",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-177" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".hero-header",
          originalId:
            "6745c9e4cb456ce777facffe|6e2ce73c-7c83-09ef-4460-126e1b84e83c",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".hero-header",
            originalId:
              "6745c9e4cb456ce777facffe|6e2ce73c-7c83-09ef-4460-126e1b84e83c",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552632596,
      },
      "e-153": {
        id: "e-153",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-152",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facfff|085c4f7c-18da-e790-e18f-f4a2ad2ae1c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facfff|085c4f7c-18da-e790-e18f-f4a2ad2ae1c6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727710985807,
      },
      "e-155": {
        id: "e-155",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-154",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777fad000|8db2ffe2-1859-4541-aeaf-f4d4ef20fed5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777fad000|8db2ffe2-1859-4541-aeaf-f4d4ef20fed5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727710990323,
      },
      "e-160": {
        id: "e-160",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-159",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "6745c9e4cb456ce777facffa",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727773948820,
      },
      "e-161": {
        id: "e-161",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-28", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main"],
        target: {
          id: "6745c9e4cb456ce777facffa",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-28-p",
            selectedAxis: "X_AXIS",
            basedOn: "VIEWPORT",
            reverse: !1,
            smoothing: 97,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-28-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "VIEWPORT",
            reverse: !1,
            smoothing: 97,
            restingState: 50,
          },
        ],
        createdOn: 1727775194464,
      },
      "e-163": {
        id: "e-163",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-162",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727792250696,
      },
      "e-165": {
        id: "e-165",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-164",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|c08c31ce-33d2-82a1-d45c-c9af799b5687",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|c08c31ce-33d2-82a1-d45c-c9af799b5687",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727792534107,
      },
      "e-171": {
        id: "e-171",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-170",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffb|0d9e704d-6640-ab2b-1e03-3b010adc3c8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffb|0d9e704d-6640-ab2b-1e03-3b010adc3c8e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1727792580601,
      },
      "e-174": {
        id: "e-174",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-175",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffa|445b663f-fb71-ab9b-a255-6181c0aa2122",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6745c9e4cb456ce777facffa|445b663f-fb71-ab9b-a255-6181c0aa2122",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1728309519265,
      },
      "e-176": {
        id: "e-176",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-177" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".hero-header-2",
          originalId:
            "6744742830b7d3056fc428f7|6e2ce73c-7c83-09ef-4460-126e1b84e83c",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".hero-header-2",
            originalId:
              "6744742830b7d3056fc428f7|6e2ce73c-7c83-09ef-4460-126e1b84e83c",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1727552632596,
      },
      "e-178": {
        id: "e-178",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: !1,
          config: { actionListId: "growIn", autoStopEventId: "e-179" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffd|005f0288-0c94-7e49-a55c-919a87183b72",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 450,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1735486793922,
      },
      "e-181": {
        id: "e-181",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-180",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffd|a622a031-9ee1-46a1-67d0-12f432154e0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1735487012502,
      },
      "e-183": {
        id: "e-183",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-182",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffe|a126acb7-3ac8-11bc-f702-7f884398fe17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1735487039676,
      },
      "e-185": {
        id: "e-185",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-184",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffc|f08b5f2b-9790-341d-c89b-1ad95f13dd4b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1735487064911,
      },
      "e-186": {
        id: "e-186",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: !1,
          config: { actionListId: "growIn", autoStopEventId: "e-187" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745c9e4cb456ce777facffe|345dc414-e312-f98a-cf1d-c2526e5d987a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 450,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1735487372197,
      },
    },
    actionLists: {
      a: {
        id: "a",
        title: "\u26A1 Hero Marquee",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".hero-marquee",
                    selectorGuids: ["4e276b09-628d-e710-0b71-0388dc09dba3"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 4e4,
                  target: {
                    selector: ".hero-marquee",
                    selectorGuids: ["4e276b09-628d-e710-0b71-0388dc09dba3"],
                  },
                  xValue: -103.7,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".hero-marquee",
                    selectorGuids: ["4e276b09-628d-e710-0b71-0388dc09dba3"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1727373871961,
      },
      "a-4": {
        id: "a-4",
        title: "\u26A1 Span image into view",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-4-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "65de337b3ad9d2821719f51d|bc3b1b15-dee5-fabd-8b78-9b5c98ea82a7",
                  },
                  widthValue: 0,
                  widthUnit: "rem",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
              {
                id: "a-4-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "65de337b3ad9d2821719f51d|bc3b1b15-dee5-fabd-8b78-9b5c98ea82a7",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-4-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 1300,
                  target: {
                    useEventTarget: !0,
                    id: "65de337b3ad9d2821719f51d|bc3b1b15-dee5-fabd-8b78-9b5c98ea82a7",
                  },
                  widthUnit: "AUTO",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
              {
                id: "a-4-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: !0,
                    id: "65de337b3ad9d2821719f51d|bc3b1b15-dee5-fabd-8b78-9b5c98ea82a7",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1648061837415,
      },
      "a-5": {
        id: "a-5",
        title: "\u261D\uFE0F Card 1 - Hover In",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-5-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "6745c9e4cb456ce777facffa|73288c24-eeb7-39b2-85cd-763ff79ca8f2",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-5-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".number",
                    selectorGuids: ["7ecfd9eb-d387-ca20-79e1-0d91008d4c15"],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-5-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".number",
                    selectorGuids: ["7ecfd9eb-d387-ca20-79e1-0d91008d4c15"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-5-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".number.second",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "b2d31cb3-64bb-e201-2fba-c9f8c9317c4c",
                    ],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
              {
                id: "a-5-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".number.third",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "8e083ae9-b490-44f2-880d-f5ad5fc84963",
                    ],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1727378294353,
      },
      "a-6": {
        id: "a-6",
        title: "\u261D\uFE0F Card 2 - Hover In",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-6-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "6745c9e4cb456ce777facffa|1011e787-9224-20e9-bffc-5635b538b71b",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".number.second",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "b2d31cb3-64bb-e201-2fba-c9f8c9317c4c",
                    ],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-6-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".number.second",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "b2d31cb3-64bb-e201-2fba-c9f8c9317c4c",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-6-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".number.first",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "f2a12fd9-9df9-b66b-4b18-0a63e3b90cf3",
                    ],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
              {
                id: "a-6-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".number.third",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "8e083ae9-b490-44f2-880d-f5ad5fc84963",
                    ],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1727378294353,
      },
      "a-7": {
        id: "a-7",
        title: "\u261D\uFE0F Card 3 - Hover In",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-7-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "6745c9e4cb456ce777facffa|ae652382-6228-b150-45bd-6a95d930eecd",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-7-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".number.third",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "8e083ae9-b490-44f2-880d-f5ad5fc84963",
                    ],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-7-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".number.third",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "8e083ae9-b490-44f2-880d-f5ad5fc84963",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-7-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".number.first",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "f2a12fd9-9df9-b66b-4b18-0a63e3b90cf3",
                    ],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
              {
                id: "a-7-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".number.second",
                    selectorGuids: [
                      "7ecfd9eb-d387-ca20-79e1-0d91008d4c15",
                      "b2d31cb3-64bb-e201-2fba-c9f8c9317c4c",
                    ],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
              {
                id: "a-7-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".card",
                    selectorGuids: ["987ab981-61df-1752-ec48-ba2955038105"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1727378294353,
      },
      "a-10": {
        id: "a-10",
        title: "\u261D\uFE0F Slider Changer",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-10-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 700,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-image",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e97"],
                  },
                  xValue: null,
                  yValue: 0,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-10-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "outCubic",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-text",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e96"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-10-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 300,
                  easing: "outCubic",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-text",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e96"],
                  },
                  yValue: 1,
                  locked: !1,
                },
              },
              {
                id: "a-10-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 300,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-text",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e96"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-10-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "outCubic",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".quote",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7ea3"],
                  },
                  xValue: null,
                  yValue: 0,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-10-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "outCubic",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".name",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e99"],
                  },
                  xValue: null,
                  yValue: 0,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-10-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "outCubic",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".slider-star",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7eaa"],
                  },
                  xValue: null,
                  yValue: 0,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1717103380397,
      },
      "a-11": {
        id: "a-11",
        title: "\u261D\uFE0F Slider Changer Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-11-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 700,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-image",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e97"],
                  },
                  xValue: null,
                  yValue: -100,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 700,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".quote",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7ea3"],
                  },
                  xValue: null,
                  yValue: -100,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 700,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".name",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e99"],
                  },
                  xValue: null,
                  yValue: -100,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 700,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-text",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e96"],
                  },
                  xValue: null,
                  yValue: 1.1,
                  locked: !1,
                },
              },
              {
                id: "a-11-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 700,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-text",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e96"],
                  },
                  yValue: -6,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 100,
                  easing: "outCubic",
                  duration: 350,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-text",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e96"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-11-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-image",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e97"],
                  },
                  xValue: null,
                  yValue: 100,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".quote",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7ea3"],
                  },
                  xValue: null,
                  yValue: 100,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".name",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e99"],
                  },
                  xValue: null,
                  yValue: 100,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".testimonial-text",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7e96"],
                  },
                  yValue: 6,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1717103380397,
      },
      "a-2": {
        id: "a-2",
        title: "\u261D\uFE0F Button - Hover",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-2-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-line-animation",
                    selectorGuids: ["c70cdf94-b263-523d-0e58-b13b0a0334f4"],
                  },
                  widthValue: 30,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-2-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 700,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-line-animation",
                    selectorGuids: ["c70cdf94-b263-523d-0e58-b13b0a0334f4"],
                  },
                  widthValue: 100,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1700776521361,
      },
      "a-3": {
        id: "a-3",
        title: "\u261D\uFE0F Button - Hover out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-3-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-line-animation",
                    selectorGuids: ["c70cdf94-b263-523d-0e58-b13b0a0334f4"],
                  },
                  widthValue: 30,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1700776521361,
      },
      "a-12": {
        id: "a-12",
        title: "\u26A1 Works Card - Hover Follow",
        continuousParameterGroups: [
          {
            id: "a-12-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".works-hover-follow",
                        selectorGuids: ["4a591494-1bad-6052-db6e-4aac89d7f9bf"],
                      },
                      xValue: -25,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".font-move",
                        selectorGuids: ["b64cf0c8-e307-7ad1-e4b8-f583b04431dc"],
                      },
                      xValue: -5,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".works-hover-follow",
                        selectorGuids: ["4a591494-1bad-6052-db6e-4aac89d7f9bf"],
                      },
                      xValue: 25,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".font-move",
                        selectorGuids: ["b64cf0c8-e307-7ad1-e4b8-f583b04431dc"],
                      },
                      xValue: 5,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-12-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-12-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".works-hover-follow",
                        selectorGuids: ["4a591494-1bad-6052-db6e-4aac89d7f9bf"],
                      },
                      yValue: -25,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".font-move",
                        selectorGuids: ["b64cf0c8-e307-7ad1-e4b8-f583b04431dc"],
                      },
                      yValue: -25,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-12-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".works-hover-follow",
                        selectorGuids: ["4a591494-1bad-6052-db6e-4aac89d7f9bf"],
                      },
                      yValue: 25,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".font-move",
                        selectorGuids: ["b64cf0c8-e307-7ad1-e4b8-f583b04431dc"],
                      },
                      yValue: 25,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1727449355128,
      },
      "a-13": {
        id: "a-13",
        title: "\u261D\uFE0F Works Card - Hover In",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-13-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".works-hover-follow",
                    selectorGuids: ["4a591494-1bad-6052-db6e-4aac89d7f9bf"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-13-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".image",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7ea5"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".works-hover-follow",
                    selectorGuids: ["4a591494-1bad-6052-db6e-4aac89d7f9bf"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-13-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".image",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7ea5"],
                  },
                  xValue: 1.03,
                  yValue: 1.03,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1727449735843,
      },
      "a-14": {
        id: "a-14",
        title: "\u261D\uFE0F Works Card - Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-14-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outExpo",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".works-hover-follow",
                    selectorGuids: ["4a591494-1bad-6052-db6e-4aac89d7f9bf"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-14-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outExpo",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".image",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7ea5"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1727449735843,
      },
      "a-19": {
        id: "a-19",
        title: "\u26A1 Mask Frame",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-19-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".image",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7ea5"],
                  },
                  xValue: 1.2,
                  yValue: 1.2,
                  locked: !0,
                },
              },
              {
                id: "a-19-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".mask-frame",
                    selectorGuids: ["573ce2ad-b81e-3dbf-8081-cc5e40b611a2"],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-19-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  xValue: 1.2,
                  yValue: 1.2,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-19-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".image",
                    selectorGuids: ["6357d95a-79db-5daf-d4e5-7b47bcab7ea5"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-19-n-5",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".mask-frame",
                    selectorGuids: ["573ce2ad-b81e-3dbf-8081-cc5e40b611a2"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-19-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {},
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1724358645389,
      },
      "a-22": {
        id: "a-22",
        title: "\u26A1 Hero",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-22-n-13",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-big-text",
                    selectorGuids: ["97a2c95a-890f-bbd2-3410-72353f926601"],
                  },
                  yValue: 15,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-15",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-big-text",
                    selectorGuids: ["97a2c95a-890f-bbd2-3410-72353f926601"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-22-n-17",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-content",
                    selectorGuids: ["404e41ce-8374-0c83-59f2-ce25b87a86ea"],
                  },
                  yValue: 15,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-19",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-content",
                    selectorGuids: ["404e41ce-8374-0c83-59f2-ce25b87a86ea"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-22-n-21",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".tag-wrapper",
                    selectorGuids: ["5c9a235a-f29a-9d64-6a77-32ce5694c1b7"],
                  },
                  yValue: 10,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-23",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".tag-wrapper",
                    selectorGuids: ["5c9a235a-f29a-9d64-6a77-32ce5694c1b7"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-22-n-27",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading",
                    selectorGuids: ["ebbd97a5-f06e-dff3-14ed-eac8806fbdde"],
                  },
                  yValue: 10,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-28",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading",
                    selectorGuids: ["ebbd97a5-f06e-dff3-14ed-eac8806fbdde"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-22-n-14",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".hero-big-text",
                    selectorGuids: ["97a2c95a-890f-bbd2-3410-72353f926601"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-18",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".hero-content",
                    selectorGuids: ["404e41ce-8374-0c83-59f2-ce25b87a86ea"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".hero-big-text",
                    selectorGuids: ["97a2c95a-890f-bbd2-3410-72353f926601"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-22-n-20",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".hero-content",
                    selectorGuids: ["404e41ce-8374-0c83-59f2-ce25b87a86ea"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-22-n-22",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".tag-wrapper",
                    selectorGuids: ["5c9a235a-f29a-9d64-6a77-32ce5694c1b7"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-25",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 600,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".heading",
                    selectorGuids: ["ebbd97a5-f06e-dff3-14ed-eac8806fbdde"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-22-n-24",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 800,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".tag-wrapper",
                    selectorGuids: ["5c9a235a-f29a-9d64-6a77-32ce5694c1b7"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-22-n-26",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 1e3,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".heading",
                    selectorGuids: ["ebbd97a5-f06e-dff3-14ed-eac8806fbdde"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1727550691772,
      },
      "a-23": {
        id: "a-23",
        title: "\u261D\uFE0F Navbar - Home Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-23-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    id: "66a271444304cbd65ce7d717|558ebe4a-c96a-9c49-afa2-42e9f56f7195",
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-23-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: { id: "30ddc5a2-f02e-0392-5a0d-3d7d6db48b5a" },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1717425003490,
      },
      "a-27": {
        id: "a-27",
        title: "\u26A1 Hero Cards",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-27-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-27-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  xValue: 1.3,
                  yValue: 1.3,
                  locked: !0,
                },
              },
              {
                id: "a-27-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-27-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  xValue: 1.3,
                  yValue: 1.3,
                  locked: !0,
                },
              },
              {
                id: "a-27-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-27-n-8",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  xValue: 1.3,
                  yValue: 1.3,
                  locked: !0,
                },
              },
              {
                id: "a-27-n-19",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-27-n-23",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-27-n-24",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-27-n-22",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 800,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-27-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 900,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-27-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 900,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-27-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 1500,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-27-n-10",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 1500,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-27-n-21",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 1500,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-27-n-20",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 2e3,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-27-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 2e3,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-27-n-12",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 2e3,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1727773952979,
      },
      "a-28": {
        id: "a-28",
        title: "\u26A1 Hero - Cards Open",
        continuousParameterGroups: [
          {
            id: "a-28-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-28-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.first",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                        ],
                      },
                      xValue: -10,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-9",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.first",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                        ],
                      },
                      zValue: -4.89,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.third",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "88383eee-0614-4e80-fa92-ac158945085f",
                        ],
                      },
                      xValue: 10,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-11",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.third",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "88383eee-0614-4e80-fa92-ac158945085f",
                        ],
                      },
                      zValue: 3.712,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-13",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.second",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "0494e819-9780-9eb1-931a-451fc148ce5e",
                        ],
                      },
                      zValue: -0.463,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.second",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "0494e819-9780-9eb1-931a-451fc148ce5e",
                        ],
                      },
                      xValue: 1.5,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-28-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.first",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                        ],
                      },
                      xValue: 10,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.third",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "88383eee-0614-4e80-fa92-ac158945085f",
                        ],
                      },
                      xValue: -10,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.first",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                        ],
                      },
                      zValue: 4.89,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-12",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.third",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "88383eee-0614-4e80-fa92-ac158945085f",
                        ],
                      },
                      zValue: -3.712,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-14",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.second",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "0494e819-9780-9eb1-931a-451fc148ce5e",
                        ],
                      },
                      zValue: 0.463,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-16",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-card.second",
                        selectorGuids: [
                          "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                          "0494e819-9780-9eb1-931a-451fc148ce5e",
                        ],
                      },
                      xValue: -1.5,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-28-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [],
          },
        ],
        createdOn: 1727775202595,
      },
      "a-29": {
        id: "a-29",
        title: "\u26A1 Hero Cards - Mobile",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-29-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  xValue: 1.3,
                  yValue: 1.3,
                  locked: !0,
                },
              },
              {
                id: "a-29-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  xValue: 1.3,
                  yValue: 1.3,
                  locked: !0,
                },
              },
              {
                id: "a-29-n-20",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  zValue: -0.463,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-29-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-19",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  zValue: -4.89,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-29-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  xValue: 1.3,
                  yValue: 1.3,
                  locked: !0,
                },
              },
              {
                id: "a-29-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-29-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-29-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-29-n-21",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  zValue: 3.712,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-29-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 800,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-29-n-11",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 900,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-29-n-12",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 900,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.third",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "88383eee-0614-4e80-fa92-ac158945085f",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-13",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 1500,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-14",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 1500,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-29-n-15",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 1500,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero-card.second",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "0494e819-9780-9eb1-931a-451fc148ce5e",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-29-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 2e3,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-29-n-17",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 2e3,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vh",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-18",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 2e3,
                  easing: "swingTo",
                  duration: 1200,
                  target: {
                    selector: ".hero-card.first",
                    selectorGuids: [
                      "ec334ab6-83ca-bd60-ebe0-26ab2407ce1f",
                      "30a38ede-e382-edfe-ca44-9c24b7c4f69d",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1727773952979,
      },
      "a-30": {
        id: "a-30",
        title: "\u261D\uFE0F Close Modal",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-30-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "PARENT",
                    selector: ".delete-this",
                    selectorGuids: ["fc8b4d43-b77b-1425-49b7-28dff195f4e9"],
                  },
                  value: "flex",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-30-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "PARENT",
                    selector: ".delete-this",
                    selectorGuids: ["fc8b4d43-b77b-1425-49b7-28dff195f4e9"],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1728309522111,
      },
      fadeIn: {
        id: "fadeIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
      slideInBottom: {
        id: "slideInBottom",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 0,
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 0,
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
      growIn: {
        id: "growIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 0.7500000000000001,
                  yValue: 0.7500000000000001,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 1,
                  yValue: 1,
                },
              },
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
