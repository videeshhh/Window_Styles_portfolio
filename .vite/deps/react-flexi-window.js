import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { t as require_react } from "./react.js";
//#region node_modules/react-flexi-window/dist/index.esm.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var dA = { exports: {} };
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var pA = {};
/**
* @license React
* react-jsx-runtime.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var kA;
function qA() {
	return kA || (kA = 1, function() {
		function i(A) {
			if (A == null) return null;
			if (typeof A == "function") return A.$$typeof === y ? null : A.displayName || A.name || null;
			if (typeof A == "string") return A;
			switch (A) {
				case H: return "Fragment";
				case G: return "Profiler";
				case V: return "StrictMode";
				case q: return "Suspense";
				case w: return "SuspenseList";
				case z: return "Activity";
			}
			if (typeof A == "object") switch (typeof A.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), A.$$typeof) {
				case R: return "Portal";
				case T: return (A.displayName || "Context") + ".Provider";
				case x: return (A._context.displayName || "Context") + ".Consumer";
				case X:
					var r = A.render;
					return A = A.displayName, A || (A = r.displayName || r.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
				case lA: return r = A.displayName || null, r !== null ? r : i(A.type) || "Memo";
				case m:
					r = A._payload, A = A._init;
					try {
						return i(A(r));
					} catch {}
			}
			return null;
		}
		function n(A) {
			return "" + A;
		}
		function l(A) {
			try {
				n(A);
				var r = !1;
			} catch {
				r = !0;
			}
			if (r) {
				r = console;
				var g = r.error, p = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
				return g.call(r, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", p), n(A);
			}
		}
		function s(A) {
			if (A === H) return "<>";
			if (typeof A == "object" && A !== null && A.$$typeof === m) return "<...>";
			try {
				var r = i(A);
				return r ? "<" + r + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var A = N.A;
			return A === null ? null : A.getOwner();
		}
		function t() {
			return Error("react-stack-top-frame");
		}
		function a(A) {
			if (J.call(A, "key")) {
				var r = Object.getOwnPropertyDescriptor(A, "key").get;
				if (r && r.isReactWarning) return !1;
			}
			return A.key !== void 0;
		}
		function B(A, r) {
			function g() {
				W || (W = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", r));
			}
			g.isReactWarning = !0, Object.defineProperty(A, "key", {
				get: g,
				configurable: !0
			});
		}
		function S() {
			var A = i(this.type);
			return K[A] || (K[A] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), A = this.props.ref, A !== void 0 ? A : null;
		}
		function b(A, r, g, p, P, f, _, v) {
			return g = f.ref, A = {
				$$typeof: M,
				type: A,
				key: r,
				props: f,
				_owner: P
			}, (g !== void 0 ? g : null) !== null ? Object.defineProperty(A, "ref", {
				enumerable: !1,
				get: S
			}) : Object.defineProperty(A, "ref", {
				enumerable: !1,
				value: null
			}), A._store = {}, Object.defineProperty(A._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(A, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(A, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: _
			}), Object.defineProperty(A, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: v
			}), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
		}
		function d(A, r, g, p, P, f, _, v) {
			var Q = r.children;
			if (Q !== void 0) if (p) if (aA(Q)) {
				for (p = 0; p < Q.length; p++) D(Q[p]);
				Object.freeze && Object.freeze(Q);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else D(Q);
			if (J.call(r, "key")) {
				Q = i(A);
				var j = Object.keys(r).filter(function(BA) {
					return BA !== "key";
				});
				p = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", eA[Q + p] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, p, Q, j, Q), eA[Q + p] = !0);
			}
			if (Q = null, g !== void 0 && (l(g), Q = "" + g), a(r) && (l(r.key), Q = "" + r.key), "key" in r) {
				g = {};
				for (var cA in r) cA !== "key" && (g[cA] = r[cA]);
			} else g = r;
			return Q && B(g, typeof A == "function" ? A.displayName || A.name || "Unknown" : A), b(A, Q, f, P, o(), g, _, v);
		}
		function D(A) {
			typeof A == "object" && A !== null && A.$$typeof === M && A._store && (A._store.validated = 1);
		}
		var U = import_react.default, M = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), T = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), lA = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), y = Symbol.for("react.client.reference"), N = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, aA = Array.isArray, C = console.createTask ? console.createTask : function() {
			return null;
		};
		U = { "react-stack-bottom-frame": function(A) {
			return A();
		} };
		var W, K = {}, AA = U["react-stack-bottom-frame"].bind(U, t)(), gA = C(s(t)), eA = {};
		pA.Fragment = H, pA.jsx = function(A, r, g, p, P) {
			var f = 1e4 > N.recentlyCreatedOwnerStacks++;
			return d(A, r, g, !1, p, P, f ? Error("react-stack-top-frame") : AA, f ? C(s(A)) : gA);
		}, pA.jsxs = function(A, r, g, p, P) {
			var f = 1e4 > N.recentlyCreatedOwnerStacks++;
			return d(A, r, g, !0, p, P, f ? Error("react-stack-top-frame") : AA, f ? C(s(A)) : gA);
		};
	}()), pA;
}
var SA;
function WA() {
	return SA || (SA = 1, dA.exports = qA()), dA.exports;
}
var I = WA();
var KA = "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";
var MA = null;
var hA = null;
var CA = null;
function Ae(i) {
	const n = atob(i), l = new Uint8Array(n.length);
	for (let s = 0; s < n.length; s++) l[s] = n.charCodeAt(s);
	return l;
}
function GA() {
	return CA || (CA = (async () => {
		if (typeof WebAssembly > "u") return null;
		try {
			const i = Ae(KA);
			hA = new WebAssembly.Memory({ initial: 16 });
			const { instance: n } = await WebAssembly.instantiate(i, { env: { memory: hA } });
			return MA = {
				compute_displacement_map: n.exports.compute_displacement_map,
				compute_specular_map: n.exports.compute_specular_map,
				get_map_pixel_size: n.exports.get_map_pixel_size,
				memory: n.exports.memory || hA
			}, MA;
		} catch (i) {
			return console.error("[react-flexi-window] WASM glass engine failed to initialize:", i), CA = null, null;
		}
	})(), CA);
}
typeof WebAssembly < "u" && GA().catch(() => {});
function L(i, n, l, s = 0, o = 0, t, a) {
	const B = document.createElement("canvas"), S = t || n, b = a || l;
	B.width = S, B.height = b;
	const d = B.getContext("2d"), D = new ImageData(i, n, l);
	return d.putImageData(D, -s, -o), B.toDataURL();
}
function RA(i, n, l, s, o) {
	const t = s * o, a = 1 * o;
	return {
		topLeft: L(i, n, l, 0, 0, t, t),
		top: L(i, n, l, t, 0, a, t),
		topRight: L(i, n, l, t + a, 0, t, t),
		left: L(i, n, l, 0, t, t, a),
		center: L(i, n, l, t, t, a, a),
		right: L(i, n, l, t + a, t, t, a),
		bottomLeft: L(i, n, l, 0, t + a, t, t),
		bottom: L(i, n, l, t, t + a, a, t),
		bottomRight: L(i, n, l, t + a, t + a, t, t)
	};
}
var ee = typeof window < "u" ? import_react.useLayoutEffect : import_react.useEffect;
var DA = (0, import_react.memo)(({ parts: i, width: n, height: l, cornerWidth: s, result: o }) => {
	if (!i) return null;
	const t = n - s, a = l - s;
	return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.topLeft,
			x: 0,
			y: 0,
			width: s,
			height: s,
			result: `${o}_topLeft`,
			preserveAspectRatio: "none"
		}),
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.top,
			x: 0,
			y: 0,
			width: n,
			height: s,
			result: `${o}_top`,
			preserveAspectRatio: "none"
		}),
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.topRight,
			x: t,
			y: 0,
			width: s,
			height: s,
			result: `${o}_topRight`,
			preserveAspectRatio: "none"
		}),
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.left,
			x: 0,
			y: 0,
			width: s,
			height: l,
			result: `${o}_left`,
			preserveAspectRatio: "none"
		}),
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.right,
			x: t,
			y: 0,
			width: s,
			height: l,
			result: `${o}_right`,
			preserveAspectRatio: "none"
		}),
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.bottomLeft,
			x: 0,
			y: a,
			width: s,
			height: s,
			result: `${o}_bottomLeft`,
			preserveAspectRatio: "none"
		}),
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.bottom,
			x: 0,
			y: a,
			width: n,
			height: s,
			result: `${o}_bottom`,
			preserveAspectRatio: "none"
		}),
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.bottomRight,
			x: t,
			y: a,
			width: s,
			height: s,
			result: `${o}_bottomRight`,
			preserveAspectRatio: "none"
		}),
		/* @__PURE__ */ I.jsx("feImage", {
			href: i.center,
			x: 0,
			y: 0,
			width: n,
			height: l,
			result: `${o}_base`,
			preserveAspectRatio: "none"
		}),
		[
			"top",
			"left",
			"right",
			"bottom",
			"topLeft",
			"topRight",
			"bottomLeft",
			"bottomRight"
		].map((S, b, d) => /* @__PURE__ */ I.jsx("feComposite", {
			operator: "over",
			in: `${o}_${S}`,
			in2: b === 0 ? `${o}_base` : `${o}_composite_${b}`,
			result: b === d.length - 1 ? o : `${o}_composite_${b}`
		}, S))
	] });
});
DA.displayName = "CompositeParts";
var PA = (0, import_react.memo)(({ filterId: i, width: n, height: l, radius: s, blur: o, bezelWidth: t }) => {
	const [a, B] = (0, import_react.useState)(null), [S, b] = (0, import_react.useState)(null), [d, D] = (0, import_react.useState)(0), U = (0, import_react.useRef)(""), M = Math.max(s, t), R = 6;
	if (ee(() => {
		if (n <= 0 || l <= 0) return;
		const V = `${s}-${o}-${t}`;
		if (V === U.current && a) return;
		U.current = V;
		let G = !1;
		return (async () => {
			const x = await GA();
			if (!x || G) return;
			const T = M * 2 + 1, X = x.get_map_pixel_size(T, R), q = X, w = X * q * 4, lA = w * 2, z = x.memory.buffer.byteLength, y = 16384;
			if (y + lA > z) {
				const A = Math.ceil((y + lA - z) / 65536);
				x.memory.grow(A);
			}
			const N = y, J = x.compute_displacement_map(N, T, T, s, t, 70, 1.5, R);
			if (G) return;
			const aA = new Uint8ClampedArray(x.memory.buffer, N, w), C = new Uint8ClampedArray(aA), W = y + w;
			if (x.compute_specular_map(W, T, T, s, R), G) return;
			const K = new Uint8ClampedArray(x.memory.buffer, W, w), AA = new Uint8ClampedArray(K), gA = RA(C, X, q, M, R), eA = RA(AA, X, q, M, R);
			G || (B(gA), b(eA), D(J));
		})(), () => {
			G = !0;
		};
	}, [
		s,
		o,
		t,
		n,
		l,
		M,
		R,
		a
	]), !a || !S) return null;
	const H = d * 1;
	return /* @__PURE__ */ I.jsx("svg", {
		colorInterpolationFilters: "sRGB",
		style: {
			display: "none",
			position: "absolute",
			width: 0,
			height: 0
		},
		children: /* @__PURE__ */ I.jsx("defs", { children: /* @__PURE__ */ I.jsxs("filter", {
			id: i,
			children: [
				/* @__PURE__ */ I.jsx("feGaussianBlur", {
					in: "SourceGraphic",
					stdDeviation: o,
					result: "blurred_source"
				}),
				/* @__PURE__ */ I.jsx(DA, {
					parts: a,
					width: n,
					height: l,
					cornerWidth: M,
					result: "displacement_map"
				}),
				/* @__PURE__ */ I.jsx(DA, {
					parts: S,
					width: n,
					height: l,
					cornerWidth: M,
					result: "specular_map"
				}),
				/* @__PURE__ */ I.jsx("feDisplacementMap", {
					in: "blurred_source",
					in2: "displacement_map",
					scale: H,
					xChannelSelector: "R",
					yChannelSelector: "G",
					result: "displaced_source"
				}),
				/* @__PURE__ */ I.jsx("feColorMatrix", {
					in: "specular_map",
					type: "luminanceToAlpha",
					result: "specular_alpha"
				}),
				/* @__PURE__ */ I.jsx("feComponentTransfer", {
					in: "specular_alpha",
					result: "specular_with_opacity",
					children: /* @__PURE__ */ I.jsx("feFuncA", {
						type: "linear",
						slope: .5
					})
				}),
				/* @__PURE__ */ I.jsx("feFlood", {
					floodColor: "white",
					result: "white_layer"
				}),
				/* @__PURE__ */ I.jsx("feComposite", {
					in: "white_layer",
					in2: "specular_with_opacity",
					operator: "in",
					result: "masked_specular"
				}),
				/* @__PURE__ */ I.jsx("feComposite", {
					in: "masked_specular",
					in2: "displaced_source",
					operator: "over"
				})
			]
		}) })
	});
});
PA.displayName = "LiquidGlassFilter";
var te = (0, import_react.memo)(() => /* @__PURE__ */ I.jsx("style", { children: `
      /* Utility class to hide scrollbars while preserving functionality */
      .flexi-window-hide-scrollbar::-webkit-scrollbar {
        display: none; /* For Chrome, Safari, and Opera */
      }
      .flexi-window-hide-scrollbar {
        -ms-overflow-style: none;  /* For Internet Explorer and Edge */
        scrollbar-width: none;  /* For Firefox */
      }
    ` }));
function re({ w: i = "auto", h: n = "auto", x: l = 50, y: s = 50, minW: o = 1, minH: t = 1, boundary: a = !1, overflow: B = "auto", overflowY: S = "auto", overflowX: b = "auto", maxW: d = 1 / 0, maxH: D = 1 / 0, hideScrollbar: U = !1, className: M = "", windowColor: R = "", windowBorderColor: H = "", windowBorderRadius: V = "", windowBorder: G = 0, windowShadow: x = "", windowBackgroundBlur: T = "", windowBackgroundSaturation: X = "100", zIndex: q = 1, material: w, children: lA }) {
	const [m, z] = (0, import_react.useState)({
		x: l,
		y: s
	}), [y, N] = (0, import_react.useState)({
		w: i,
		h: n
	}), [J, aA] = (0, import_react.useState)(!1), [C, W] = (0, import_react.useState)({
		width: typeof window < "u" ? window.innerWidth : 0,
		height: typeof window < "u" ? window.innerHeight : 0
	}), [K, AA] = (0, import_react.useState)({
		width: 0,
		height: 0
	}), eA = "flexi-glass-" + (0, import_react.useId)().replace(/:/g, ""), A = (0, import_react.useRef)(null), r = (0, import_react.useRef)(null), g = (0, import_react.useRef)(null), p = (0, import_react.useRef)(null), P = (e) => e.touches && e.touches.length > 0 ? {
		clientX: e.touches[0].clientX,
		clientY: e.touches[0].clientY,
		target: e.touches[0].target
	} : {
		clientX: e.clientX,
		clientY: e.clientY,
		target: e.target
	}, f = (0, import_react.useCallback)((e, c) => {
		const { clientX: u, clientY: E, target: k } = P(e);
		if (c === "drag" && ([
			"INPUT",
			"TEXTAREA",
			"BUTTON",
			"SELECT",
			"A"
		].includes(k.tagName) || k.isContentEditable || k.closest("a[href], button")) || (e.preventDefault(), e.stopPropagation(), !r.current)) return;
		const { offsetWidth: h, offsetHeight: F } = r.current;
		A.current = {
			type: c,
			startX: u,
			startY: E,
			initialWidth: h,
			initialHeight: F,
			initialX: m.x,
			initialY: m.y
		}, aA(!0);
	}, [m]), _ = (0, import_react.useCallback)((e) => {
		if (!A.current) return;
		e.cancelable && e.preventDefault();
		const { clientX: c, clientY: u } = P(e), E = c - A.current.startX, k = u - A.current.startY, { type: h, initialX: F, initialY: Y, initialWidth: O, initialHeight: $ } = A.current;
		if (h === "drag") {
			let tA = F + E, rA = Y + k;
			a && (tA = Math.max(0, Math.min(tA, C.width - O)), rA = Math.max(0, Math.min(rA, C.height - $))), z({
				x: tA,
				y: rA
			});
		} else if (h.startsWith("resize")) {
			let tA = O, rA = $, iA = F, nA = Y;
			h.includes("right") && (tA = O + E), h.includes("left") && (tA = O - E), h.includes("bottom") && (rA = $ + k), h.includes("top") && (rA = $ - k);
			const YA = d === "viewport" ? C.width : d, OA = D === "viewport" ? C.height : D;
			let oA = Math.max(o, Math.min(tA, YA)), sA = Math.max(t, Math.min(rA, OA));
			h.includes("left") && (iA = F + (O - oA)), h.includes("top") && (nA = Y + ($ - sA)), a && (iA < 0 && (oA += iA, iA = 0), nA < 0 && (sA += nA, nA = 0), iA + oA > C.width && (oA = C.width - iA), nA + sA > C.height && (sA = C.height - nA), oA = Math.max(o, oA), sA = Math.max(t, sA)), N({
				w: oA,
				h: sA
			}), z({
				x: iA,
				y: nA
			});
		}
	}, [
		o,
		t,
		d,
		D,
		C,
		a
	]), v = (0, import_react.useCallback)(() => {
		clearTimeout(g.current), p.current = null, A.current = null, aA(!1);
	}, []), Q = (0, import_react.useCallback)(() => {
		clearTimeout(g.current), p.current = null;
	}, []), j = (0, import_react.useCallback)((e) => {
		p.current = {
			x: e.touches[0].clientX,
			y: e.touches[0].clientY
		}, g.current = setTimeout(() => f(e, "drag"), 200);
	}, [f]), cA = (0, import_react.useCallback)((e) => {
		if (!p.current) return;
		const c = 10, u = Math.abs(e.touches[0].clientX - p.current.x), E = Math.abs(e.touches[0].clientY - p.current.y);
		(u > c || E > c) && Q();
	}, [Q]);
	(0, import_react.useEffect)(() => {
		const e = () => W({
			width: window.innerWidth,
			height: window.innerHeight
		});
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), (0, import_react.useEffect)(() => {
		if (!w || !r.current) return;
		const e = new ResizeObserver((c) => {
			for (const u of c) {
				const E = u.borderBoxSize?.[0];
				AA(E ? {
					width: E.inlineSize,
					height: E.blockSize
				} : {
					width: u.contentRect.width,
					height: u.contentRect.height
				});
			}
		});
		return e.observe(r.current), () => e.disconnect();
	}, [w]), (0, import_react.useEffect)(() => {
		if (!r.current) return;
		const { offsetWidth: e, offsetHeight: c } = r.current;
		let u = m.x, E = m.y, k = y.w, h = y.h, F = !1, Y = !1;
		const O = d === "viewport" ? C.width : d, $ = D === "viewport" ? C.height : D;
		typeof k == "number" && k > O && (k = O, Y = !0), typeof h == "number" && h > $ && (h = $, Y = !0), a && (u < 0 && (u = 0, F = !0), E < 0 && (E = 0, F = !0), u + e > C.width && (u = C.width - e, F = !0), E + c > C.height && (E = C.height - c, F = !0)), F && z({
			x: u,
			y: E
		}), Y && N({
			w: k,
			h
		});
	}, [
		C,
		a,
		d,
		D,
		y.w,
		y.h,
		m.x,
		m.y
	]), (0, import_react.useEffect)(() => (J && (window.addEventListener("mousemove", _), window.addEventListener("mouseup", v), window.addEventListener("mouseleave", v), window.addEventListener("touchmove", _, { passive: !1 }), window.addEventListener("touchend", v)), () => {
		window.removeEventListener("mousemove", _), window.removeEventListener("mouseup", v), window.removeEventListener("mouseleave", v), window.removeEventListener("touchmove", _), window.removeEventListener("touchend", v);
	}), [
		J,
		_,
		v
	]);
	const BA = (e) => typeof e == "number" ? `${e}px` : e === "full" ? "100%" : e, vA = {
		"red-50": "254 242 242",
		"red-100": "254 226 226",
		"red-200": "252 165 165",
		"red-300": "248 113 113",
		"red-400": "239 68 68",
		"red-500": "239 68 68",
		"red-600": "220 38 38",
		"red-700": "185 28 28",
		"red-800": "153 27 27",
		"red-900": "127 29 29",
		"blue-50": "239 246 255",
		"blue-100": "219 234 254",
		"blue-200": "191 219 254",
		"blue-300": "147 197 253",
		"blue-400": "96 165 250",
		"blue-500": "59 130 246",
		"blue-600": "37 99 235",
		"blue-700": "29 78 216",
		"blue-800": "30 64 175",
		"blue-900": "30 58 138",
		"green-50": "240 253 244",
		"green-100": "220 252 231",
		"green-200": "187 247 208",
		"green-300": "134 239 172",
		"green-400": "74 222 128",
		"green-500": "34 197 94",
		"green-600": "22 163 74",
		"green-700": "21 128 61",
		"green-800": "22 101 52",
		"green-900": "20 83 45",
		"yellow-50": "254 252 232",
		"yellow-100": "254 249 195",
		"yellow-200": "254 240 138",
		"yellow-300": "253 224 71",
		"yellow-400": "250 204 21",
		"yellow-500": "234 179 8",
		"yellow-600": "202 138 4",
		"yellow-700": "161 98 7",
		"yellow-800": "133 77 14",
		"yellow-900": "113 63 18",
		"purple-50": "250 245 255",
		"purple-100": "243 232 255",
		"purple-200": "233 213 255",
		"purple-300": "196 181 253",
		"purple-400": "167 139 250",
		"purple-500": "139 92 246",
		"purple-600": "124 58 237",
		"purple-700": "109 40 217",
		"purple-800": "91 33 182",
		"purple-900": "76 29 149",
		"pink-50": "253 242 248",
		"pink-100": "252 231 243",
		"pink-200": "251 207 232",
		"pink-300": "249 168 212",
		"pink-400": "244 114 182",
		"pink-500": "236 72 153",
		"pink-600": "219 39 119",
		"pink-700": "190 24 93",
		"pink-800": "157 23 77",
		"pink-900": "131 24 67",
		"indigo-50": "238 242 255",
		"indigo-100": "224 231 255",
		"indigo-200": "199 210 254",
		"indigo-300": "165 180 252",
		"indigo-400": "129 140 248",
		"indigo-500": "99 102 241",
		"indigo-600": "79 70 229",
		"indigo-700": "67 56 202",
		"indigo-800": "55 48 163",
		"indigo-900": "49 46 129",
		"gray-50": "249 250 251",
		"gray-100": "243 244 246",
		"gray-200": "229 231 235",
		"gray-300": "209 213 219",
		"gray-400": "156 163 175",
		"gray-500": "107 114 128",
		"gray-600": "75 85 99",
		"gray-700": "55 65 81",
		"gray-800": "31 41 55",
		"gray-900": "17 24 39",
		"slate-50": "248 250 252",
		"slate-100": "241 245 249",
		"slate-200": "226 232 240",
		"slate-300": "203 213 225",
		"slate-400": "148 163 184",
		"slate-500": "100 116 139",
		"slate-600": "71 85 105",
		"slate-700": "51 65 85",
		"slate-800": "30 41 59",
		"slate-900": "15 23 42",
		"zinc-50": "250 250 250",
		"zinc-100": "244 244 245",
		"zinc-200": "228 228 231",
		"zinc-300": "212 212 216",
		"zinc-400": "161 161 170",
		"zinc-500": "113 113 122",
		"zinc-600": "82 82 91",
		"zinc-700": "63 63 70",
		"zinc-800": "39 39 42",
		"zinc-900": "24 24 27",
		"emerald-50": "236 253 245",
		"emerald-100": "209 250 229",
		"emerald-200": "167 243 208",
		"emerald-300": "110 231 183",
		"emerald-400": "52 211 153",
		"emerald-500": "16 185 129",
		"emerald-600": "5 150 105",
		"emerald-700": "4 120 87",
		"emerald-800": "6 95 70",
		"emerald-900": "6 78 59"
	}, yA = (e) => {
		if (!e) return;
		const [c, u = "100"] = e.split("/");
		return `rgba(${(vA[c] || "107 114 128").split(" ").join(", ")}, ${parseInt(u, 10) / 100})`;
	}, FA = {
		none: "0",
		sm: "0.125rem",
		"": "0.25rem",
		md: "0.375rem",
		lg: "0.5rem",
		xl: "0.75rem",
		"2xl": "1rem",
		"3xl": "1.5rem",
		"4xl": "2rem",
		"5xl": "2.5rem",
		"6xl": "3rem",
		"7xl": "3.5rem",
		"8xl": "4rem",
		"9xl": "4.5rem",
		"10xl": "5rem",
		"11xl": "5.5rem",
		"12xl": "6rem",
		full: "9999px"
	}, UA = (e) => FA[e] || "0.25rem", bA = {
		none: "none",
		sm: (e) => `0 1px 2px 0 rgb(0 0 0 / ${e})`,
		"": (e) => `0 1px 3px 0 rgb(0 0 0 / ${e}), 0 1px 2px -1px rgb(0 0 0 / ${e * .1})`,
		md: (e) => `0 4px 6px -1px rgb(0 0 0 / ${e}), 0 2px 4px -2px rgb(0 0 0 / ${e * .1})`,
		lg: (e) => `0 10px 15px -3px rgb(0 0 0 / ${e}), 0 4px 6px -4px rgb(0 0 0 / ${e * .1})`,
		xl: (e) => `0 20px 25px -5px rgb(0 0 0 / ${e}), 0 8px 10px -6px rgb(0 0 0 / ${e * .1})`,
		"2xl": (e) => `0 25px 50px -12px rgb(0 0 0 / ${e})`,
		"3xl": (e) => `0 35px 60px -15px rgb(0 0 0 / ${e})`,
		"4xl": (e) => `0 45px 70px -20px rgb(0 0 0 / ${e})`,
		"5xl": (e) => `0 55px 80px -25px rgb(0 0 0 / ${e})`,
		"6xl": (e) => `0 65px 90px -30px rgb(0 0 0 / ${e})`,
		"7xl": (e) => `0 75px 100px -35px rgb(0 0 0 / ${e})`
	}, TA = (e) => {
		if (!e) return;
		const [c, u = "50"] = e.split("/"), E = parseInt(u, 10) / 100;
		return (bA[c] || bA[""])(E);
	}, NA = {
		none: "none",
		sm: "blur(4px)",
		"": "blur(8px)",
		md: "blur(12px)",
		lg: "blur(16px)",
		xl: "blur(24px)",
		"2xl": "blur(40px)",
		"3xl": "blur(64px)",
		"4xl": "blur(96px)",
		"5xl": "blur(128px)",
		"6xl": "blur(160px)",
		"7xl": "blur(192px)"
	}, JA = (e, c) => {
		const u = [];
		return e && u.push(NA[e] || "blur(8px)"), c && c !== "100" && u.push(`saturate(${c}%)`), u.length ? u.join(" ") : void 0;
	}, wA = w && w.type === "liquidGlass", _A = {
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		userSelect: J ? "none" : "auto",
		position: "absolute",
		width: BA(y.w),
		height: BA(y.h),
		transform: `translate(${m.x}px, ${m.y}px)`,
		display: "flex",
		flexDirection: "column",
		zIndex: q,
		backgroundColor: yA(R),
		borderColor: yA(H || R),
		borderWidth: G ? `${G}px` : void 0,
		borderStyle: G ? "solid" : void 0,
		borderRadius: wA ? `${w.radius}px` : V ? UA(V) : void 0,
		boxShadow: TA(x),
		backdropFilter: wA ? `url(#${eA})` : JA(T, X),
		overflow: "hidden"
	}, LA = {
		overflow: B,
		overflowX: b,
		overflowY: S,
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		cursor: "move",
		touchAction: "pan-y"
	}, XA = [
		{
			type: "resize-top",
			style: {
				position: "absolute",
				height: "8px",
				width: "100%",
				top: "-4px",
				left: "0",
				cursor: "n-resize",
				zIndex: 10
			}
		},
		{
			type: "resize-bottom",
			style: {
				position: "absolute",
				height: "8px",
				width: "100%",
				bottom: "-4px",
				left: "0",
				cursor: "s-resize",
				zIndex: 10
			}
		},
		{
			type: "resize-left",
			style: {
				position: "absolute",
				width: "8px",
				height: "100%",
				top: "0",
				left: "-4px",
				cursor: "w-resize",
				zIndex: 10
			}
		},
		{
			type: "resize-right",
			style: {
				position: "absolute",
				width: "8px",
				height: "100%",
				top: "0",
				right: "-4px",
				cursor: "e-resize",
				zIndex: 10
			}
		},
		{
			type: "resize-top-left",
			style: {
				position: "absolute",
				width: "16px",
				height: "16px",
				top: "-8px",
				left: "-8px",
				cursor: "nw-resize",
				zIndex: 11
			}
		},
		{
			type: "resize-top-right",
			style: {
				position: "absolute",
				width: "16px",
				height: "16px",
				top: "-8px",
				right: "-8px",
				cursor: "ne-resize",
				zIndex: 11
			}
		},
		{
			type: "resize-bottom-left",
			style: {
				position: "absolute",
				width: "16px",
				height: "16px",
				bottom: "-8px",
				left: "-8px",
				cursor: "sw-resize",
				zIndex: 11
			}
		},
		{
			type: "resize-bottom-right",
			style: {
				position: "absolute",
				width: "16px",
				height: "16px",
				bottom: "-8px",
				right: "-8px",
				cursor: "se-resize",
				zIndex: 11
			}
		}
	], fA = {
		position: "absolute",
		width: "40px",
		height: "40px",
		backgroundColor: "rgba(59, 130, 246, 0.0)",
		borderRadius: "10px",
		zIndex: 12
	}, zA = [
		{
			type: "resize-top-left",
			style: {
				...fA,
				top: "-20px",
				left: "-20px",
				cursor: "nw-resize"
			}
		},
		{
			type: "resize-top-right",
			style: {
				...fA,
				top: "-20px",
				right: "-20px",
				cursor: "ne-resize"
			}
		},
		{
			type: "resize-bottom-left",
			style: {
				...fA,
				bottom: "-20px",
				left: "-20px",
				cursor: "sw-resize"
			}
		},
		{
			type: "resize-bottom-right",
			style: {
				...fA,
				bottom: "-20px",
				right: "-20px",
				cursor: "se-resize"
			}
		}
	], jA = J ? zA : XA;
	return /* @__PURE__ */ I.jsxs("div", {
		ref: r,
		className: `${M} ${U ? "flexi-window-hide-scrollbar" : ""}`,
		style: _A,
		role: "dialog",
		"aria-label": "Draggable and resizable window",
		children: [
			/* @__PURE__ */ I.jsx(te, {}),
			wA && /* @__PURE__ */ I.jsx(PA, {
				filterId: eA,
				width: K.width,
				height: K.height,
				radius: w.radius,
				blur: w.blur,
				bezelWidth: w.bezelWidth
			}),
			/* @__PURE__ */ I.jsx("div", {
				className: `${U ? "flexi-window-hide-scrollbar" : ""}`,
				style: LA,
				onMouseDown: (e) => f(e, "drag"),
				onTouchStart: j,
				onTouchEnd: Q,
				onTouchMove: cA,
				role: "region",
				"aria-label": "Window content area",
				children: lA
			}),
			jA.map((e) => /* @__PURE__ */ I.jsx("div", {
				style: e.style,
				onMouseDown: (c) => f(c, e.type),
				onTouchStart: (c) => f(c, e.type),
				role: "button",
				"aria-label": `Resize ${e.type.replace("resize-", "").replace("-", " ")}`,
				tabIndex: -1
			}, e.type))
		]
	});
}
re.displayName = "WindowComponent";
function ne(i = 12, n = 4, l = 10) {
	return {
		type: "liquidGlass",
		radius: Math.max(0, Number(i) || 0),
		blur: Math.max(0, Number(n) || 0),
		bezelWidth: Math.max(0, Number(l) || 0)
	};
}
//#endregion
export { re as WindowComponent, re as default, ne as liquidGlass };
