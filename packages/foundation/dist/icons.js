// Framework-neutral built icons module (minimal).
function attrString(attrs) {
  if (!attrs) return "";
  return Object.entries(attrs).map(([k, v]) => `${k}="${String(v)}"`).join(" ");
}

export function getIconSvg(name, attrs) {
  const svg = `<svg ${attrString(attrs)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="24" height="24" fill="currentColor"/></svg>`;
  return svg;
}

export const availableIcons = ["placeholder"];

export default getIconSvg;
		if (e == null) return e;
		var r = [], i = 0;
		return k(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function j(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var M = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, N = {
		map: A,
		forEach: function(e, t, n) {
			A(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return A(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return A(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!w(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = N, e.Component = h, e.Fragment = r, e.Profiler = a, e.PureComponent = _, e.StrictMode = i, e.Suspense = l, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = b, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return b.H.useMemoCache(e);
		}
	}, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = ne({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !x.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return S(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) x.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return S(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = w, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: j
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = b.T, n = {};
		b.T = n;
		try {
			var r = e(), i = b.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(y, M);
		} catch (e) {
			M(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), b.T = t;
		}
	}, e.unstable_useCacheRefresh = function() {
		return b.H.useCacheRefresh();
	}, e.use = function(e) {
		return b.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return b.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return b.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return b.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return b.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return b.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return b.H.useEffectEvent(e);
	}, e.useId = function() {
		return b.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return b.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return b.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return b.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return b.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return b.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return b.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return b.H.useRef(e);
	}, e.useState = function(e) {
		return b.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return b.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return b.H.useTransition();
	}, e.version = "19.2.8";
})), i = /* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			Object.defineProperty(a.prototype, e, { get: function() {
				console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
			} });
		}
		function r(e) {
			return typeof e != "object" || !e ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function i(e, t) {
			e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
			var n = e + "." + t;
			me[n] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, e), me[n] = !0);
		}
		function a(e, t, n) {
			this.props = e, this.context = t, this.refs = _e, this.updater = n || he;
		}
		function o() {}
		function s(e, t, n) {
			this.props = e, this.context = t, this.refs = _e, this.updater = n || he;
		}
		function c() {}
		function l(e) {
			return "" + e;
		}
		function u(e) {
			try {
				l(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, r = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", r), l(e);
			}
		}
		function d(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === ye ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case N: return "Fragment";
				case ae: return "Profiler";
				case ie: return "StrictMode";
				case le: return "Suspense";
				case ue: return "SuspenseList";
				case fe: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case M: return "Portal";
				case se: return e.displayName || "Context";
				case oe: return (e._context.displayName || "Context") + ".Consumer";
				case ce:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case de: return t = e.displayName || null, t === null ? d(e.type) || "Memo" : t;
				case P:
					t = e._payload, e = e._init;
					try {
						return d(e(t));
					} catch {}
			}
			return null;
		}
		function f(e) {
			if (e === N) return "<>";
			if (typeof e == "object" && e && e.$$typeof === P) return "<...>";
			try {
				var t = d(e);
				return t ? "<" + t + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function p() {
			var e = I.A;
			return e === null ? null : e.getOwner();
		}
		function ee() {
			return Error("react-stack-top-frame");
		}
		function te(e) {
			if (L.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function ne(e, t) {
			function n() {
				xe || (xe = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function m() {
			var e = d(this.type);
			return Ce[e] || (Ce[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function h(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: j,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: m
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function g(e, t) {
			return t = h(e.type, t, e.props, e._owner, e._debugStack, e._debugTask), e._store && (t._store.validated = e._store.validated), t;
		}
		function _(e) {
			v(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === P && (e._payload.status === "fulfilled" ? v(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function v(e) {
			return typeof e == "object" && !!e && e.$$typeof === j;
		}
		function re(e) {
			var t = {
				"=": "=0",
				":": "=2"
			};
			return "$" + e.replace(/[=:]/g, function(e) {
				return t[e];
			});
		}
		function y(e, t) {
			return typeof e == "object" && e && e.key != null ? (u(e.key), re("" + e.key)) : t.toString(36);
		}
		function b(e) {
			switch (e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
				default: switch (typeof e.status == "string" ? e.then(c, c) : (e.status = "pending", e.then(function(t) {
					e.status === "pending" && (e.status = "fulfilled", e.value = t);
				}, function(t) {
					e.status === "pending" && (e.status = "rejected", e.reason = t);
				})), e.status) {
					case "fulfilled": return e.value;
					case "rejected": throw e.reason;
				}
			}
			throw e;
		}
		function x(e, t, n, i, a) {
			var o = typeof e;
			(o === "undefined" || o === "boolean") && (e = null);
			var s = !1;
			if (e === null) s = !0;
			else switch (o) {
				case "bigint":
				case "string":
				case "number":
					s = !0;
					break;
				case "object": switch (e.$$typeof) {
					case j:
					case M:
						s = !0;
						break;
					case P: return s = e._init, x(s(e._payload), t, n, i, a);
				}
			}
			if (s) {
				s = e, a = a(s);
				var c = i === "" ? "." + y(s, 0) : i;
				return ve(a) ? (n = "", c != null && (n = c.replace(De, "$&/") + "/"), x(a, t, n, "", function(e) {
					return e;
				})) : a != null && (v(a) && (a.key != null && (s && s.key === a.key || u(a.key)), n = g(a, n + (a.key == null || s && s.key === a.key ? "" : ("" + a.key).replace(De, "$&/") + "/") + c), i !== "" && s != null && v(s) && s.key == null && s._store && !s._store.validated && (n._store.validated = 2), a = n), t.push(a)), 1;
			}
			if (s = 0, c = i === "" ? "." : i + ":", ve(e)) for (var l = 0; l < e.length; l++) i = e[l], o = c + y(i, l), s += x(i, t, n, o, a);
			else if (l = r(e), typeof l == "function") for (l === e.entries && (Ee || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ee = !0), e = l.call(e), l = 0; !(i = e.next()).done;) i = i.value, o = c + y(i, l++), s += x(i, t, n, o, a);
			else if (o === "object") {
				if (typeof e.then == "function") return x(b(e), t, n, i, a);
				throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
			}
			return s;
		}
		function S(e, t, n) {
			if (e == null) return e;
			var r = [], i = 0;
			return x(e, r, "", "", function(e) {
				return t.call(n, e, i++);
			}), r;
		}
		function C(e) {
			if (e._status === -1) {
				var t = e._ioInfo;
				t != null && (t.start = t.end = performance.now()), t = e._result;
				var n = t();
				if (n.then(function(t) {
					if (e._status === 0 || e._status === -1) {
						e._status = 1, e._result = t;
						var r = e._ioInfo;
						r != null && (r.end = performance.now()), n.status === void 0 && (n.status = "fulfilled", n.value = t);
					}
				}, function(t) {
					if (e._status === 0 || e._status === -1) {
						e._status = 2, e._result = t;
						var r = e._ioInfo;
						r != null && (r.end = performance.now()), n.status === void 0 && (n.status = "rejected", n.reason = t);
					}
				}), t = e._ioInfo, t != null) {
					t.value = n;
					var r = n.displayName;
					typeof r == "string" && (t.name = r);
				}
				e._status === -1 && (e._status = 0, e._result = n);
			}
			if (e._status === 1) return t = e._result, t === void 0 && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", t), "default" in t || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", t), t.default;
			throw e._result;
		}
		function w() {
			var e = I.H;
			return e === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e;
		}
		function T() {
			I.asyncTransitions--;
		}
		function E(e) {
			if (R === null) try {
				var n = ("require" + Math.random()).slice(0, 7);
				R = (t && t[n]).call(t, "timers").setImmediate;
			} catch {
				R = function(e) {
					!1 === ke && (ke = !0, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
					var t = new MessageChannel();
					t.port1.onmessage = e, t.port2.postMessage(void 0);
				};
			}
			return R(e);
		}
		function D(e) {
			return 1 < e.length && typeof AggregateError == "function" ? AggregateError(e) : e[0];
		}
		function O(e, t) {
			t !== z - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), z = t;
		}
		function k(e, t, n) {
			var r = I.actQueue;
			if (r !== null) {
				if (r.length !== 0) try {
					A(r), E(function() {
						return k(e, t, n);
					});
					return;
				} catch (e) {
					I.thrownErrors.push(e);
				}
				else I.actQueue = null;
			}
			0 < I.thrownErrors.length ? (r = D(I.thrownErrors), I.thrownErrors.length = 0, n(r)) : t(e);
		}
		function A(e) {
			if (!Ae) {
				Ae = !0;
				var t = 0;
				try {
					for (; t < e.length; t++) {
						var n = e[t];
						do {
							I.didUsePromise = !1;
							var r = n(!1);
							if (r !== null) {
								if (I.didUsePromise) {
									e[t] = n, e.splice(0, t);
									return;
								}
								n = r;
							} else break;
						} while (1);
					}
					e.length = 0;
				} catch (n) {
					e.splice(0, t + 1), I.thrownErrors.push(n);
				} finally {
					Ae = !1;
				}
			}
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var j = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), se = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), pe = Symbol.iterator, me = {}, he = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function(e) {
				i(e, "forceUpdate");
			},
			enqueueReplaceState: function(e) {
				i(e, "replaceState");
			},
			enqueueSetState: function(e) {
				i(e, "setState");
			}
		}, ge = Object.assign, _e = {};
		Object.freeze(_e), a.prototype.isReactComponent = {}, a.prototype.setState = function(e, t) {
			if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, e, t, "setState");
		}, a.prototype.forceUpdate = function(e) {
			this.updater.enqueueForceUpdate(this, e, "forceUpdate");
		};
		var F = {
			isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
			replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
		};
		for (V in F) F.hasOwnProperty(V) && n(V, F[V]);
		o.prototype = a.prototype, F = s.prototype = new o(), F.constructor = s, ge(F, a.prototype), F.isPureReactComponent = !0;
		var ve = Array.isArray, ye = Symbol.for("react.client.reference"), I = {
			H: null,
			A: null,
			T: null,
			S: null,
			actQueue: null,
			asyncTransitions: 0,
			isBatchingLegacy: !1,
			didScheduleLegacyUpdate: !1,
			didUsePromise: !1,
			thrownErrors: [],
			getCurrentStack: null,
			recentlyCreatedOwnerStacks: 0
		}, L = Object.prototype.hasOwnProperty, be = console.createTask ? console.createTask : function() {
			return null;
		};
		F = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var xe, Se, Ce = {}, we = F.react_stack_bottom_frame.bind(F, ee)(), Te = be(f(ee)), Ee = !1, De = /\/+/g, Oe = typeof reportError == "function" ? reportError : function(e) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var t = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
					error: e
				});
				if (!window.dispatchEvent(t)) return;
			} else if (typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", e);
				return;
			}
			console.error(e);
		}, ke = !1, R = null, z = 0, B = !1, Ae = !1, je = typeof queueMicrotask == "function" ? function(e) {
			queueMicrotask(function() {
				return queueMicrotask(e);
			});
		} : E;
		F = Object.freeze({
			__proto__: null,
			c: function(e) {
				return w().useMemoCache(e);
			}
		});
		var V = {
			map: S,
			forEach: function(e, t, n) {
				S(e, function() {
					t.apply(this, arguments);
				}, n);
			},
			count: function(e) {
				var t = 0;
				return S(e, function() {
					t++;
				}), t;
			},
			toArray: function(e) {
				return S(e, function(e) {
					return e;
				}) || [];
			},
			only: function(e) {
				if (!v(e)) throw Error("React.Children.only expected to receive a single React element child.");
				return e;
			}
		};
		e.Activity = fe, e.Children = V, e.Component = a, e.Fragment = N, e.Profiler = ae, e.PureComponent = s, e.StrictMode = ie, e.Suspense = le, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, e.__COMPILER_RUNTIME = F, e.act = function(e) {
			var t = I.actQueue, n = z;
			z++;
			var r = I.actQueue = t === null ? [] : t, i = !1;
			try {
				var a = e();
			} catch (e) {
				I.thrownErrors.push(e);
			}
			if (0 < I.thrownErrors.length) throw O(t, n), e = D(I.thrownErrors), I.thrownErrors.length = 0, e;
			if (typeof a == "object" && a && typeof a.then == "function") {
				var o = a;
				return je(function() {
					i || B || (B = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
				}), { then: function(e, a) {
					i = !0, o.then(function(i) {
						if (O(t, n), n === 0) {
							try {
								A(r), E(function() {
									return k(i, e, a);
								});
							} catch (e) {
								I.thrownErrors.push(e);
							}
							if (0 < I.thrownErrors.length) {
								var o = D(I.thrownErrors);
								I.thrownErrors.length = 0, a(o);
							}
						} else e(i);
					}, function(e) {
						O(t, n), 0 < I.thrownErrors.length ? (e = D(I.thrownErrors), I.thrownErrors.length = 0, a(e)) : a(e);
					});
				} };
			}
			var s = a;
			if (O(t, n), n === 0 && (A(r), r.length !== 0 && je(function() {
				i || B || (B = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
			}), I.actQueue = null), 0 < I.thrownErrors.length) throw e = D(I.thrownErrors), I.thrownErrors.length = 0, e;
			return { then: function(e, t) {
				i = !0, n === 0 ? (I.actQueue = r, E(function() {
					return k(s, e, t);
				})) : e(s);
			} };
		}, e.cache = function(e) {
			return function() {
				return e.apply(null, arguments);
			};
		}, e.cacheSignal = function() {
			return null;
		}, e.captureOwnerStack = function() {
			var e = I.getCurrentStack;
			return e === null ? null : e();
		}, e.cloneElement = function(e, t, n) {
			if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
			var r = ge({}, e.props), i = e.key, a = e._owner;
			if (t != null) {
				var o;
				a: {
					if (L.call(t, "ref") && (o = Object.getOwnPropertyDescriptor(t, "ref").get) && o.isReactWarning) {
						o = !1;
						break a;
					}
					o = t.ref !== void 0;
				}
				for (s in o && (a = p()), te(t) && (u(t.key), i = "" + t.key), t) !L.call(t, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && t.ref === void 0 || (r[s] = t[s]);
			}
			var s = arguments.length - 2;
			if (s === 1) r.children = n;
			else if (1 < s) {
				o = Array(s);
				for (var c = 0; c < s; c++) o[c] = arguments[c + 2];
				r.children = o;
			}
			for (r = h(e.type, i, r, a, e._debugStack, e._debugTask), i = 2; i < arguments.length; i++) _(arguments[i]);
			return r;
		}, e.createContext = function(e) {
			return e = {
				$$typeof: se,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			}, e.Provider = e, e.Consumer = {
				$$typeof: oe,
				_context: e
			}, e._currentRenderer = null, e._currentRenderer2 = null, e;
		}, e.createElement = function(e, t, n) {
			for (var r = 2; r < arguments.length; r++) _(arguments[r]);
			r = {};
			var i = null;
			if (t != null) for (c in Se || !("__self" in t) || "key" in t || (Se = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), te(t) && (u(t.key), i = "" + t.key), t) L.call(t, c) && c !== "key" && c !== "__self" && c !== "__source" && (r[c] = t[c]);
			var a = arguments.length - 2;
			if (a === 1) r.children = n;
			else if (1 < a) {
				for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
				Object.freeze && Object.freeze(o), r.children = o;
			}
			if (e && e.defaultProps) for (c in a = e.defaultProps, a) r[c] === void 0 && (r[c] = a[c]);
			i && ne(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e);
			var c = 1e4 > I.recentlyCreatedOwnerStacks++;
			return h(e, i, r, p(), c ? Error("react-stack-top-frame") : we, c ? be(f(e)) : Te);
		}, e.createRef = function() {
			var e = { current: null };
			return Object.seal(e), e;
		}, e.forwardRef = function(e) {
			e != null && e.$$typeof === de ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e == "function" ? e.length !== 0 && e.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.") : console.error("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e), e != null && e.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
			var t = {
				$$typeof: ce,
				render: e
			}, n;
			return Object.defineProperty(t, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return n;
				},
				set: function(t) {
					n = t, e.name || e.displayName || (Object.defineProperty(e, "name", { value: t }), e.displayName = t);
				}
			}), t;
		}, e.isValidElement = v, e.lazy = function(e) {
			e = {
				_status: -1,
				_result: e
			};
			var t = {
				$$typeof: P,
				_payload: e,
				_init: C
			}, n = {
				name: "lazy",
				start: -1,
				end: -1,
				value: null,
				owner: null,
				debugStack: Error("react-stack-top-frame"),
				debugTask: console.createTask ? console.createTask("lazy()") : null
			};
			return e._ioInfo = n, t._debugInfo = [{ awaited: n }], t;
		}, e.memo = function(e, t) {
			e ?? console.error("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e), t = {
				$$typeof: de,
				type: e,
				compare: t === void 0 ? null : t
			};
			var n;
			return Object.defineProperty(t, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return n;
				},
				set: function(t) {
					n = t, e.name || e.displayName || (Object.defineProperty(e, "name", { value: t }), e.displayName = t);
				}
			}), t;
		}, e.startTransition = function(e) {
			var t = I.T, n = {};
			n._updatedFibers = /* @__PURE__ */ new Set(), I.T = n;
			try {
				var r = e(), i = I.S;
				i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && (I.asyncTransitions++, r.then(T, T), r.then(c, Oe));
			} catch (e) {
				Oe(e);
			} finally {
				t === null && n._updatedFibers && (e = n._updatedFibers.size, n._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), t !== null && n.types !== null && (t.types !== null && t.types !== n.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), t.types = n.types), I.T = t;
			}
		}, e.unstable_useCacheRefresh = function() {
			return w().useCacheRefresh();
		}, e.use = function(e) {
			return w().use(e);
		}, e.useActionState = function(e, t, n) {
			return w().useActionState(e, t, n);
		}, e.useCallback = function(e, t) {
			return w().useCallback(e, t);
		}, e.useContext = function(e) {
			var t = w();
			return e.$$typeof === oe && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), t.useContext(e);
		}, e.useDebugValue = function(e, t) {
			return w().useDebugValue(e, t);
		}, e.useDeferredValue = function(e, t) {
			return w().useDeferredValue(e, t);
		}, e.useEffect = function(e, t) {
			return e ?? console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"), w().useEffect(e, t);
		}, e.useEffectEvent = function(e) {
			return w().useEffectEvent(e);
		}, e.useId = function() {
			return w().useId();
		}, e.useImperativeHandle = function(e, t, n) {
			return w().useImperativeHandle(e, t, n);
		}, e.useInsertionEffect = function(e, t) {
			return e ?? console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"), w().useInsertionEffect(e, t);
		}, e.useLayoutEffect = function(e, t) {
			return e ?? console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"), w().useLayoutEffect(e, t);
		}, e.useMemo = function(e, t) {
			return w().useMemo(e, t);
		}, e.useOptimistic = function(e, t) {
			return w().useOptimistic(e, t);
		}, e.useReducer = function(e, t, n) {
			return w().useReducer(e, t, n);
		}, e.useRef = function(e) {
			return w().useRef(e);
		}, e.useState = function(e) {
			return w().useState(e);
		}, e.useSyncExternalStore = function(e, t, n) {
			return w().useSyncExternalStore(e, t, n);
		}, e.useTransition = function() {
			return w().useTransition();
		}, e.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), a = /* @__PURE__ */ t(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? r() : i();
})), o = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), s = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), c = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), l = (e) => {
	let t = c(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, u = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, d = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, f = a(), p = (0, f.createContext)({});
function ee({ children: e, size: t, color: n, strokeWidth: r, absoluteStrokeWidth: i, className: a }) {
	let o = (0, f.useMemo)(() => ({
		size: t,
		color: n,
		strokeWidth: r,
		absoluteStrokeWidth: i,
		className: a
	}), [
		t,
		n,
		r,
		i,
		a
	]);
	return (0, f.createElement)(p.Provider, { value: o }, e);
}
var te = () => (0, f.useContext)(p), ne = (0, f.forwardRef)(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: s, ...c }, l) => {
	let { size: p = 24, strokeWidth: ee = 2, absoluteStrokeWidth: ne = !1, color: m = "currentColor", className: h = "" } = te() ?? {}, g = r ?? ne ? Number(n ?? ee) * 24 / Number(t ?? p) : n ?? ee;
	return (0, f.createElement)("svg", {
		ref: l,
		...u,
		width: t ?? p ?? u.width,
		height: t ?? p ?? u.height,
		stroke: e ?? m,
		strokeWidth: g,
		className: o("lucide", h, i),
		...!a && !d(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => (0, f.createElement)(e, t)), ...Array.isArray(a) ? a : [a]]);
}), m = (e, t) => {
	let n = (0, f.forwardRef)(({ className: n, ...r }, i) => (0, f.createElement)(ne, {
		ref: i,
		iconNode: t,
		className: o(`lucide-${s(l(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = l(e), n;
}, h = m("a-arrow-down", [
	["path", {
		d: "m14 12 4 4 4-4",
		key: "buelq4"
	}],
	["path", {
		d: "M18 16V7",
		key: "ty0viw"
	}],
	["path", {
		d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",
		key: "d5nyq2"
	}],
	["path", {
		d: "M3.304 13h6.392",
		key: "1q3zxz"
	}]
]), g = m("a-arrow-up", [
	["path", {
		d: "m14 11 4-4 4 4",
		key: "1pu57t"
	}],
	["path", {
		d: "M18 16V7",
		key: "ty0viw"
	}],
	["path", {
		d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",
		key: "d5nyq2"
	}],
	["path", {
		d: "M3.304 13h6.392",
		key: "1q3zxz"
	}]
]), _ = m("a-large-small", [
	["path", {
		d: "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16",
		key: "xik6mr"
	}],
	["path", {
		d: "M15.697 14h5.606",
		key: "1stdlc"
	}],
	["path", {
		d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",
		key: "d5nyq2"
	}],
	["path", {
		d: "M3.304 13h6.392",
		key: "1q3zxz"
	}]
]), v = m("accessibility", [
	["circle", {
		cx: "16",
		cy: "4",
		r: "1",
		key: "1grugj"
	}],
	["path", {
		d: "m18 19 1-7-6 1",
		key: "r0i19z"
	}],
	["path", {
		d: "m5 8 3-3 5.5 3-2.36 3.5",
		key: "9ptxx2"
	}],
	["path", {
		d: "M4.24 14.5a5 5 0 0 0 6.88 6",
		key: "10kmtu"
	}],
	["path", {
		d: "M13.76 17.5a5 5 0 0 0-6.88-6",
		key: "2qq6rc"
	}]
]), re = m("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]), y = m("ad", [
	["path", {
		d: "M10 13H6",
		key: "18d9xh"
	}],
	["path", {
		d: "M10 15v-4a2 2 0 0 0-4 0v4",
		key: "ss28p3"
	}],
	["path", {
		d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z",
		key: "b3f847"
	}],
	["rect", {
		x: "2",
		y: "5",
		width: "20",
		height: "14",
		rx: "2",
		key: "qneu4z"
	}]
]), b = m("air-vent", [
	["path", {
		d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12",
		key: "yd12zl"
	}],
	["path", {
		d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
		key: "larmp2"
	}],
	["path", {
		d: "M6 8h12",
		key: "6g4wlu"
	}],
	["path", {
		d: "M6.6 15.572A2 2 0 1 0 10 17v-5",
		key: "1x1kqn"
	}]
]), x = m("airplay", [["path", {
	d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
	key: "ns4c3b"
}], ["path", {
	d: "m12 15 5 6H7Z",
	key: "14qnn2"
}]]), S = m("alarm-clock-check", [
	["circle", {
		cx: "12",
		cy: "13",
		r: "8",
		key: "3y4lt7"
	}],
	["path", {
		d: "M5 3 2 6",
		key: "18tl5t"
	}],
	["path", {
		d: "m22 6-3-3",
		key: "1opdir"
	}],
	["path", {
		d: "M6.38 18.7 4 21",
		key: "17xu3x"
	}],
	["path", {
		d: "M17.64 18.67 20 21",
		key: "kv2oe2"
	}],
	["path", {
		d: "m9 13 2 2 4-4",
		key: "6343dt"
	}]
]), C = m("alarm-clock-minus", [
	["circle", {
		cx: "12",
		cy: "13",
		r: "8",
		key: "3y4lt7"
	}],
	["path", {
		d: "M5 3 2 6",
		key: "18tl5t"
	}],
	["path", {
		d: "m22 6-3-3",
		key: "1opdir"
	}],
	["path", {
		d: "M6.38 18.7 4 21",
		key: "17xu3x"
	}],
	["path", {
		d: "M17.64 18.67 20 21",
		key: "kv2oe2"
	}],
	["path", {
		d: "M9 13h6",
		key: "1uhe8q"
	}]
]), w = m("alarm-clock-off", [
	["path", {
		d: "M6.87 6.87a8 8 0 1 0 11.26 11.26",
		key: "3on8tj"
	}],
	["path", {
		d: "M19.9 14.25a8 8 0 0 0-9.15-9.15",
		key: "15ghsc"
	}],
	["path", {
		d: "m22 6-3-3",
		key: "1opdir"
	}],
	["path", {
		d: "M6.26 18.67 4 21",
		key: "yzmioq"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M4 4 2 6",
		key: "1ycko6"
	}]
]), T = m("alarm-clock-plus", [
	["circle", {
		cx: "12",
		cy: "13",
		r: "8",
		key: "3y4lt7"
	}],
	["path", {
		d: "M5 3 2 6",
		key: "18tl5t"
	}],
	["path", {
		d: "m22 6-3-3",
		key: "1opdir"
	}],
	["path", {
		d: "M6.38 18.7 4 21",
		key: "17xu3x"
	}],
	["path", {
		d: "M17.64 18.67 20 21",
		key: "kv2oe2"
	}],
	["path", {
		d: "M12 10v6",
		key: "1bos4e"
	}],
	["path", {
		d: "M9 13h6",
		key: "1uhe8q"
	}]
]), E = m("alarm-smoke", [
	["path", {
		d: "M11 21c0-2.5 2-2.5 2-5",
		key: "1sicvv"
	}],
	["path", {
		d: "M16 21c0-2.5 2-2.5 2-5",
		key: "1o3eny"
	}],
	["path", {
		d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",
		key: "1bvca4"
	}],
	["path", {
		d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",
		key: "x3qr1j"
	}],
	["path", {
		d: "M6 21c0-2.5 2-2.5 2-5",
		key: "i3w1gp"
	}]
]), D = m("alarm-clock", [
	["circle", {
		cx: "12",
		cy: "13",
		r: "8",
		key: "3y4lt7"
	}],
	["path", {
		d: "M12 9v4l2 2",
		key: "1c63tq"
	}],
	["path", {
		d: "M5 3 2 6",
		key: "18tl5t"
	}],
	["path", {
		d: "m22 6-3-3",
		key: "1opdir"
	}],
	["path", {
		d: "M6.38 18.7 4 21",
		key: "17xu3x"
	}],
	["path", {
		d: "M17.64 18.67 20 21",
		key: "kv2oe2"
	}]
]), O = m("album", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	ry: "2",
	key: "1m3agn"
}], ["polyline", {
	points: "11 3 11 11 14 8 17 11 17 3",
	key: "1wcwz3"
}]]), k = m("align-center-horizontal", [
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",
		key: "11f1s0"
	}],
	["path", {
		d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",
		key: "t14dx9"
	}],
	["path", {
		d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",
		key: "1w07xs"
	}],
	["path", {
		d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",
		key: "1apec2"
	}]
]), A = m("align-end-horizontal", [
	["rect", {
		width: "6",
		height: "16",
		x: "4",
		y: "2",
		rx: "2",
		key: "z5wdxg"
	}],
	["rect", {
		width: "6",
		height: "9",
		x: "14",
		y: "9",
		rx: "2",
		key: "um7a8w"
	}],
	["path", {
		d: "M22 22H2",
		key: "19qnx5"
	}]
]), j = m("align-end-vertical", [
	["rect", {
		width: "16",
		height: "6",
		x: "2",
		y: "4",
		rx: "2",
		key: "10wcwx"
	}],
	["rect", {
		width: "9",
		height: "6",
		x: "9",
		y: "14",
		rx: "2",
		key: "4p5bwg"
	}],
	["path", {
		d: "M22 22V2",
		key: "12ipfv"
	}]
]), M = m("align-center-vertical", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",
		key: "14d6g8"
	}],
	["path", {
		d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",
		key: "1e2lrw"
	}],
	["path", {
		d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",
		key: "1fkdwx"
	}],
	["path", {
		d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",
		key: "1euafb"
	}]
]), N = m("align-horizontal-distribute-center", [
	["rect", {
		width: "6",
		height: "14",
		x: "4",
		y: "5",
		rx: "2",
		key: "1wwnby"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "14",
		y: "7",
		rx: "2",
		key: "1fe6j6"
	}],
	["path", {
		d: "M17 22v-5",
		key: "4b6g73"
	}],
	["path", {
		d: "M17 7V2",
		key: "hnrr36"
	}],
	["path", {
		d: "M7 22v-3",
		key: "1r4jpn"
	}],
	["path", {
		d: "M7 5V2",
		key: "liy1u9"
	}]
]), ie = m("align-horizontal-distribute-end", [
	["rect", {
		width: "6",
		height: "14",
		x: "4",
		y: "5",
		rx: "2",
		key: "1wwnby"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "14",
		y: "7",
		rx: "2",
		key: "1fe6j6"
	}],
	["path", {
		d: "M10 2v20",
		key: "uyc634"
	}],
	["path", {
		d: "M20 2v20",
		key: "1tx262"
	}]
]), ae = m("align-horizontal-distribute-start", [
	["rect", {
		width: "6",
		height: "14",
		x: "4",
		y: "5",
		rx: "2",
		key: "1wwnby"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "14",
		y: "7",
		rx: "2",
		key: "1fe6j6"
	}],
	["path", {
		d: "M4 2v20",
		key: "gtpd5x"
	}],
	["path", {
		d: "M14 2v20",
		key: "tg6bpw"
	}]
]), oe = m("align-horizontal-justify-center", [
	["rect", {
		width: "6",
		height: "14",
		x: "2",
		y: "5",
		rx: "2",
		key: "dy24zr"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "16",
		y: "7",
		rx: "2",
		key: "13zkjt"
	}],
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}]
]), se = m("align-horizontal-justify-end", [
	["rect", {
		width: "6",
		height: "14",
		x: "2",
		y: "5",
		rx: "2",
		key: "dy24zr"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "12",
		y: "7",
		rx: "2",
		key: "1ht384"
	}],
	["path", {
		d: "M22 2v20",
		key: "40qfg1"
	}]
]), ce = m("align-horizontal-justify-start", [
	["rect", {
		width: "6",
		height: "14",
		x: "6",
		y: "5",
		rx: "2",
		key: "hsirpf"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "16",
		y: "7",
		rx: "2",
		key: "13zkjt"
	}],
	["path", {
		d: "M2 2v20",
		key: "1ivd8o"
	}]
]), le = m("align-horizontal-space-around", [
	["rect", {
		width: "6",
		height: "10",
		x: "9",
		y: "7",
		rx: "2",
		key: "yn7j0q"
	}],
	["path", {
		d: "M4 22V2",
		key: "tsjzd3"
	}],
	["path", {
		d: "M20 22V2",
		key: "1bnhr8"
	}]
]), ue = m("align-horizontal-space-between", [
	["rect", {
		width: "6",
		height: "14",
		x: "3",
		y: "5",
		rx: "2",
		key: "j77dae"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "15",
		y: "7",
		rx: "2",
		key: "bq30hj"
	}],
	["path", {
		d: "M3 2v20",
		key: "1d2pfg"
	}],
	["path", {
		d: "M21 2v20",
		key: "p059bm"
	}]
]), de = m("align-start-horizontal", [
	["rect", {
		width: "6",
		height: "16",
		x: "4",
		y: "6",
		rx: "2",
		key: "1n4dg1"
	}],
	["rect", {
		width: "6",
		height: "9",
		x: "14",
		y: "6",
		rx: "2",
		key: "17khns"
	}],
	["path", {
		d: "M22 2H2",
		key: "fhrpnj"
	}]
]), P = m("align-start-vertical", [
	["rect", {
		width: "9",
		height: "6",
		x: "6",
		y: "14",
		rx: "2",
		key: "lpm2y7"
	}],
	["rect", {
		width: "16",
		height: "6",
		x: "6",
		y: "4",
		rx: "2",
		key: "rdj6ps"
	}],
	["path", {
		d: "M2 2v20",
		key: "1ivd8o"
	}]
]), fe = m("align-vertical-distribute-center", [
	["path", {
		d: "M22 17h-3",
		key: "1lwga1"
	}],
	["path", {
		d: "M22 7h-5",
		key: "o2endc"
	}],
	["path", {
		d: "M5 17H2",
		key: "1gx9xc"
	}],
	["path", {
		d: "M7 7H2",
		key: "6bq26l"
	}],
	["rect", {
		x: "5",
		y: "14",
		width: "14",
		height: "6",
		rx: "2",
		key: "1qrzuf"
	}],
	["rect", {
		x: "7",
		y: "4",
		width: "10",
		height: "6",
		rx: "2",
		key: "we8e9z"
	}]
]), pe = m("align-vertical-distribute-end", [
	["rect", {
		width: "14",
		height: "6",
		x: "5",
		y: "14",
		rx: "2",
		key: "jmoj9s"
	}],
	["rect", {
		width: "10",
		height: "6",
		x: "7",
		y: "4",
		rx: "2",
		key: "aza5on"
	}],
	["path", {
		d: "M2 20h20",
		key: "owomy5"
	}],
	["path", {
		d: "M2 10h20",
		key: "1ir3d8"
	}]
]), me = m("align-vertical-distribute-start", [
	["rect", {
		width: "14",
		height: "6",
		x: "5",
		y: "14",
		rx: "2",
		key: "jmoj9s"
	}],
	["rect", {
		width: "10",
		height: "6",
		x: "7",
		y: "4",
		rx: "2",
		key: "aza5on"
	}],
	["path", {
		d: "M2 14h20",
		key: "myj16y"
	}],
	["path", {
		d: "M2 4h20",
		key: "mda7wb"
	}]
]), he = m("align-vertical-justify-center", [
	["rect", {
		width: "14",
		height: "6",
		x: "5",
		y: "16",
		rx: "2",
		key: "1i8z2d"
	}],
	["rect", {
		width: "10",
		height: "6",
		x: "7",
		y: "2",
		rx: "2",
		key: "ypihtt"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]), ge = m("align-vertical-justify-start", [
	["rect", {
		width: "14",
		height: "6",
		x: "5",
		y: "16",
		rx: "2",
		key: "1i8z2d"
	}],
	["rect", {
		width: "10",
		height: "6",
		x: "7",
		y: "6",
		rx: "2",
		key: "13squh"
	}],
	["path", {
		d: "M2 2h20",
		key: "1ennik"
	}]
]), _e = m("align-vertical-justify-end", [
	["rect", {
		width: "14",
		height: "6",
		x: "5",
		y: "12",
		rx: "2",
		key: "4l4tp2"
	}],
	["rect", {
		width: "10",
		height: "6",
		x: "7",
		y: "2",
		rx: "2",
		key: "ypihtt"
	}],
	["path", {
		d: "M2 22h20",
		key: "272qi7"
	}]
]), F = m("align-vertical-space-around", [
	["rect", {
		width: "10",
		height: "6",
		x: "7",
		y: "9",
		rx: "2",
		key: "b1zbii"
	}],
	["path", {
		d: "M22 20H2",
		key: "1p1f7z"
	}],
	["path", {
		d: "M22 4H2",
		key: "1b7qnq"
	}]
]), ve = m("align-vertical-space-between", [
	["rect", {
		width: "14",
		height: "6",
		x: "5",
		y: "15",
		rx: "2",
		key: "1w91an"
	}],
	["rect", {
		width: "10",
		height: "6",
		x: "7",
		y: "3",
		rx: "2",
		key: "17wqzy"
	}],
	["path", {
		d: "M2 21h20",
		key: "1nyx9w"
	}],
	["path", {
		d: "M2 3h20",
		key: "91anmk"
	}]
]), ye = m("ambulance", [
	["path", {
		d: "M10 10H6",
		key: "1bsnug"
	}],
	["path", {
		d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
		key: "wrbu53"
	}],
	["path", {
		d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
		key: "lrkjwd"
	}],
	["path", {
		d: "M8 8v4",
		key: "1fwk8c"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["circle", {
		cx: "17",
		cy: "18",
		r: "2",
		key: "332jqn"
	}],
	["circle", {
		cx: "7",
		cy: "18",
		r: "2",
		key: "19iecd"
	}]
]), I = m("ampersand", [["path", {
	d: "M16 12h3",
	key: "4uvgyw"
}], ["path", {
	d: "M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",
	key: "nfoe1t"
}]]), L = m("ampersands", [["path", {
	d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
	key: "12lh1k"
}], ["path", {
	d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
	key: "173c68"
}]]), be = m("amphora", [
	["path", {
		d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",
		key: "1h8rid"
	}],
	["path", {
		d: "M10 5H8a2 2 0 0 0 0 4h.68",
		key: "3ezsi6"
	}],
	["path", {
		d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",
		key: "yt6q09"
	}],
	["path", {
		d: "M14 5h2a2 2 0 0 1 0 4h-.68",
		key: "8f95yk"
	}],
	["path", {
		d: "M18 22H6",
		key: "mg6kv4"
	}],
	["path", {
		d: "M9 2h6",
		key: "1jrp98"
	}]
]), xe = m("anchor", [
	["path", {
		d: "M12 6v16",
		key: "nqf5sj"
	}],
	["path", {
		d: "m19 13 2-1a9 9 0 0 1-18 0l2 1",
		key: "y7qv08"
	}],
	["path", {
		d: "M9 11h6",
		key: "1fldmi"
	}],
	["circle", {
		cx: "12",
		cy: "4",
		r: "2",
		key: "muu5ef"
	}]
]), Se = m("antenna", [
	["path", {
		d: "M2 12 7 2",
		key: "117k30"
	}],
	["path", {
		d: "m7 12 5-10",
		key: "1tvx22"
	}],
	["path", {
		d: "m12 12 5-10",
		key: "ev1o1a"
	}],
	["path", {
		d: "m17 12 5-10",
		key: "1e4ti3"
	}],
	["path", {
		d: "M4.5 7h15",
		key: "vlsxkz"
	}],
	["path", {
		d: "M12 16v6",
		key: "c8a4gj"
	}]
]), Ce = m("anvil", [
	["path", {
		d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",
		key: "1hjpb6"
	}],
	["path", {
		d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",
		key: "1qn45f"
	}],
	["path", {
		d: "M9 12v5",
		key: "3anwtq"
	}],
	["path", {
		d: "M15 12v5",
		key: "5xh3zn"
	}],
	["path", {
		d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",
		key: "1fi4x8"
	}]
]), we = m("aperture", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m14.31 8 5.74 9.94",
		key: "1y6ab4"
	}],
	["path", {
		d: "M9.69 8h11.48",
		key: "1wxppr"
	}],
	["path", {
		d: "m7.38 12 5.74-9.94",
		key: "1grp0k"
	}],
	["path", {
		d: "M9.69 16 3.95 6.06",
		key: "libnyf"
	}],
	["path", {
		d: "M14.31 16H2.83",
		key: "x5fava"
	}],
	["path", {
		d: "m16.62 12-5.74 9.94",
		key: "1vwawt"
	}]
]), Te = m("app-window-mac", [
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}],
	["path", {
		d: "M6 8h.01",
		key: "x9i8wu"
	}],
	["path", {
		d: "M10 8h.01",
		key: "1r9ogq"
	}],
	["path", {
		d: "M14 8h.01",
		key: "1primd"
	}]
]), Ee = m("app-window", [
	["rect", {
		x: "2",
		y: "4",
		width: "20",
		height: "16",
		rx: "2",
		key: "izxlao"
	}],
	["path", {
		d: "M10 4v4",
		key: "pp8u80"
	}],
	["path", {
		d: "M2 8h20",
		key: "d11cs7"
	}],
	["path", {
		d: "M6 4v4",
		key: "1svtjw"
	}]
]), De = m("apple", [["path", {
	d: "M12 6.528V3a1 1 0 0 1 1-1h0",
	key: "11qiee"
}], ["path", {
	d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",
	key: "110c12"
}]]), Oe = m("archive-restore", [
	["rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1",
		key: "1wp1u1"
	}],
	["path", {
		d: "M4 8v11a2 2 0 0 0 2 2h2",
		key: "tvwodi"
	}],
	["path", {
		d: "M20 8v11a2 2 0 0 1-2 2h-2",
		key: "1gkqxj"
	}],
	["path", {
		d: "m9 15 3-3 3 3",
		key: "1pd0qc"
	}],
	["path", {
		d: "M12 12v9",
		key: "192myk"
	}]
]), ke = m("archive-x", [
	["rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1",
		key: "1wp1u1"
	}],
	["path", {
		d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
		key: "1s80jp"
	}],
	["path", {
		d: "m9.5 17 5-5",
		key: "nakeu6"
	}],
	["path", {
		d: "m9.5 12 5 5",
		key: "1hccrj"
	}]
]), R = m("archive", [
	["rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1",
		key: "1wp1u1"
	}],
	["path", {
		d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
		key: "1s80jp"
	}],
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}]
]), z = m("armchair", [
	["path", {
		d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",
		key: "irtipd"
	}],
	["path", {
		d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
		key: "1qyhux"
	}],
	["path", {
		d: "M5 18v2",
		key: "ppbyun"
	}],
	["path", {
		d: "M19 18v2",
		key: "gy7782"
	}]
]), B = m("arrow-big-down-dash", [["path", {
	d: "M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z",
	key: "1b91ra"
}], ["path", {
	d: "M9 4h6",
	key: "10am2s"
}]]), Ae = m("arrow-big-down", [["path", {
	d: "M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z",
	key: "1o3tkq"
}]]), je = m("arrow-big-left-dash", [["path", {
	d: "M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z",
	key: "17jy80"
}], ["path", {
	d: "M20 9v6",
	key: "14roy0"
}]]), V = m("arrow-big-left", [["path", {
	d: "M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z",
	key: "qbhtmx"
}]]), Me = m("arrow-big-right-dash", [["path", {
	d: "M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
	key: "9idyso"
}], ["path", {
	d: "M4 9v6",
	key: "bns7oa"
}]]), Ne = m("arrow-big-right", [["path", {
	d: "M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z",
	key: "zee3eo"
}]]), Pe = m("arrow-big-up", [["path", {
	d: "M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z",
	key: "106j91"
}]]), Fe = m("arrow-big-up-dash", [["path", {
	d: "M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z",
	key: "q57loy"
}], ["path", {
	d: "M9 20h6",
	key: "s66wpe"
}]]), Ie = m("arrow-down-0-1", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 20V4",
		key: "1yoxec"
	}],
	["rect", {
		x: "15",
		y: "4",
		width: "4",
		height: "6",
		ry: "2",
		key: "1bwicg"
	}],
	["path", {
		d: "M17 20v-6h-2",
		key: "1qp1so"
	}],
	["path", {
		d: "M15 20h4",
		key: "1j968p"
	}]
]), Le = m("arrow-down-1-0", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 20V4",
		key: "1yoxec"
	}],
	["path", {
		d: "M17 10V4h-2",
		key: "zcsr5x"
	}],
	["path", {
		d: "M15 10h4",
		key: "id2lce"
	}],
	["rect", {
		x: "15",
		y: "14",
		width: "4",
		height: "6",
		ry: "2",
		key: "33xykx"
	}]
]), Re = m("arrow-down-a-z", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 20V4",
		key: "1yoxec"
	}],
	["path", {
		d: "M20 8h-5",
		key: "1vsyxs"
	}],
	["path", {
		d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
		key: "ag13bf"
	}],
	["path", {
		d: "M15 14h5l-5 6h5",
		key: "ur5jdg"
	}]
]), ze = m("arrow-down-left", [["path", {
	d: "M17 7 7 17",
	key: "15tmo1"
}], ["path", {
	d: "M17 17H7V7",
	key: "1org7z"
}]]), Be = m("arrow-down-from-line", [
	["path", {
		d: "M19 3H5",
		key: "1236rx"
	}],
	["path", {
		d: "M12 21V7",
		key: "gj6g52"
	}],
	["path", {
		d: "m6 15 6 6 6-6",
		key: "h15q88"
	}]
]), Ve = m("arrow-down-right", [["path", {
	d: "m7 7 10 10",
	key: "1fmybs"
}], ["path", {
	d: "M17 7v10H7",
	key: "6fjiku"
}]]), He = m("arrow-down-narrow-wide", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 20V4",
		key: "1yoxec"
	}],
	["path", {
		d: "M11 4h4",
		key: "6d7r33"
	}],
	["path", {
		d: "M11 8h7",
		key: "djye34"
	}],
	["path", {
		d: "M11 12h10",
		key: "1438ji"
	}]
]), Ue = m("arrow-down-to-dot", [
	["path", {
		d: "M12 2v14",
		key: "jyx4ut"
	}],
	["path", {
		d: "m19 9-7 7-7-7",
		key: "1oe3oy"
	}],
	["circle", {
		cx: "12",
		cy: "21",
		r: "1",
		key: "o0uj5v"
	}]
]), We = m("arrow-down-to-line", [
	["path", {
		d: "M12 17V3",
		key: "1cwfxf"
	}],
	["path", {
		d: "m6 11 6 6 6-6",
		key: "12ii2o"
	}],
	["path", {
		d: "M19 21H5",
		key: "150jfl"
	}]
]), Ge = m("arrow-down-up", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 20V4",
		key: "1yoxec"
	}],
	["path", {
		d: "m21 8-4-4-4 4",
		key: "1c9v7m"
	}],
	["path", {
		d: "M17 4v16",
		key: "7dpous"
	}]
]), Ke = m("arrow-down-wide-narrow", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 20V4",
		key: "1yoxec"
	}],
	["path", {
		d: "M11 4h10",
		key: "1w87gc"
	}],
	["path", {
		d: "M11 8h7",
		key: "djye34"
	}],
	["path", {
		d: "M11 12h4",
		key: "q8tih4"
	}]
]), qe = m("arrow-down-z-a", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}],
	["path", {
		d: "M15 4h5l-5 6h5",
		key: "8asdl1"
	}],
	["path", {
		d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",
		key: "r6l5cz"
	}],
	["path", {
		d: "M20 18h-5",
		key: "18j1r2"
	}]
]), Je = m("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Ye = m("arrow-left-from-line", [
	["path", {
		d: "m9 6-6 6 6 6",
		key: "7v63n9"
	}],
	["path", {
		d: "M3 12h14",
		key: "13k4hi"
	}],
	["path", {
		d: "M21 19V5",
		key: "b4bplr"
	}]
]), Xe = m("arrow-left-right", [
	["path", {
		d: "M8 3 4 7l4 4",
		key: "9rb6wj"
	}],
	["path", {
		d: "M4 7h16",
		key: "6tx8e3"
	}],
	["path", {
		d: "m16 21 4-4-4-4",
		key: "siv7j2"
	}],
	["path", {
		d: "M20 17H4",
		key: "h6l3hr"
	}]
]), Ze = m("arrow-left-to-line", [
	["path", {
		d: "M3 19V5",
		key: "rwsyhb"
	}],
	["path", {
		d: "m13 6-6 6 6 6",
		key: "1yhaz7"
	}],
	["path", {
		d: "M7 12h14",
		key: "uoisry"
	}]
]), Qe = m("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), $e = m("arrow-right-from-line", [
	["path", {
		d: "M3 5v14",
		key: "1nt18q"
	}],
	["path", {
		d: "M21 12H7",
		key: "13ipq5"
	}],
	["path", {
		d: "m15 18 6-6-6-6",
		key: "6tx3qv"
	}]
]), et = m("arrow-right-left", [
	["path", {
		d: "m16 3 4 4-4 4",
		key: "1x1c3m"
	}],
	["path", {
		d: "M20 7H4",
		key: "zbl0bi"
	}],
	["path", {
		d: "m8 21-4-4 4-4",
		key: "h9nckh"
	}],
	["path", {
		d: "M4 17h16",
		key: "g4d7ey"
	}]
]), tt = m("arrow-right-to-line", [
	["path", {
		d: "M17 12H3",
		key: "8awo09"
	}],
	["path", {
		d: "m11 18 6-6-6-6",
		key: "8c2y43"
	}],
	["path", {
		d: "M21 5v14",
		key: "nzette"
	}]
]), nt = m("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]), rt = m("arrow-up-1-0", [
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}],
	["path", {
		d: "M17 10V4h-2",
		key: "zcsr5x"
	}],
	["path", {
		d: "M15 10h4",
		key: "id2lce"
	}],
	["rect", {
		x: "15",
		y: "14",
		width: "4",
		height: "6",
		ry: "2",
		key: "33xykx"
	}]
]), it = m("arrow-up-a-z", [
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}],
	["path", {
		d: "M20 8h-5",
		key: "1vsyxs"
	}],
	["path", {
		d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
		key: "ag13bf"
	}],
	["path", {
		d: "M15 14h5l-5 6h5",
		key: "ur5jdg"
	}]
]), at = m("arrow-up-0-1", [
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}],
	["rect", {
		x: "15",
		y: "4",
		width: "4",
		height: "6",
		ry: "2",
		key: "1bwicg"
	}],
	["path", {
		d: "M17 20v-6h-2",
		key: "1qp1so"
	}],
	["path", {
		d: "M15 20h4",
		key: "1j968p"
	}]
]), ot = m("arrow-up-down", [
	["path", {
		d: "m21 16-4 4-4-4",
		key: "f6ql7i"
	}],
	["path", {
		d: "M17 20V4",
		key: "1ejh1v"
	}],
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}]
]), st = m("arrow-up-from-dot", [
	["path", {
		d: "m5 9 7-7 7 7",
		key: "1hw5ic"
	}],
	["path", {
		d: "M12 16V2",
		key: "ywoabb"
	}],
	["circle", {
		cx: "12",
		cy: "21",
		r: "1",
		key: "o0uj5v"
	}]
]), ct = m("arrow-up-from-line", [
	["path", {
		d: "m18 9-6-6-6 6",
		key: "kcunyi"
	}],
	["path", {
		d: "M12 3v14",
		key: "7cf3v8"
	}],
	["path", {
		d: "M5 21h14",
		key: "11awu3"
	}]
]), lt = m("arrow-up-left", [["path", {
	d: "M7 17V7h10",
	key: "11bw93"
}], ["path", {
	d: "M17 17 7 7",
	key: "2786uv"
}]]), ut = m("arrow-up-narrow-wide", [
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}],
	["path", {
		d: "M11 12h4",
		key: "q8tih4"
	}],
	["path", {
		d: "M11 16h7",
		key: "uosisv"
	}],
	["path", {
		d: "M11 20h10",
		key: "jvxblo"
	}]
]), dt = m("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]), ft = m("arrow-up-to-line", [
	["path", {
		d: "M5 3h14",
		key: "7usisc"
	}],
	["path", {
		d: "m18 13-6-6-6 6",
		key: "1kf1n9"
	}],
	["path", {
		d: "M12 7v14",
		key: "1akyts"
	}]
]), pt = m("arrow-up-z-a", [
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}],
	["path", {
		d: "M15 4h5l-5 6h5",
		key: "8asdl1"
	}],
	["path", {
		d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",
		key: "r6l5cz"
	}],
	["path", {
		d: "M20 18h-5",
		key: "18j1r2"
	}]
]), mt = m("arrow-up-wide-narrow", [
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}],
	["path", {
		d: "M11 12h10",
		key: "1438ji"
	}],
	["path", {
		d: "M11 16h7",
		key: "uosisv"
	}],
	["path", {
		d: "M11 20h4",
		key: "1krc32"
	}]
]), ht = m("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), gt = m("arrows-up-from-line", [
	["path", {
		d: "m4 6 3-3 3 3",
		key: "9aidw8"
	}],
	["path", {
		d: "M7 17V3",
		key: "19qxw1"
	}],
	["path", {
		d: "m14 6 3-3 3 3",
		key: "6iy689"
	}],
	["path", {
		d: "M17 17V3",
		key: "o0fmgi"
	}],
	["path", {
		d: "M4 21h16",
		key: "1h09gz"
	}]
]), _t = m("asterisk", [
	["path", {
		d: "M12 6v12",
		key: "1vza4d"
	}],
	["path", {
		d: "M17.196 9 6.804 15",
		key: "1ah31z"
	}],
	["path", {
		d: "m6.804 9 10.392 6",
		key: "1b6pxd"
	}]
]), vt = m("astroid", [["path", {
	d: "M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203",
	key: "1tipus"
}]]), yt = m("atom", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["path", {
		d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
		key: "1l2ple"
	}],
	["path", {
		d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
		key: "1wam0m"
	}]
]), bt = m("at-sign", [["circle", {
	cx: "12",
	cy: "12",
	r: "4",
	key: "4exip2"
}], ["path", {
	d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",
	key: "7n84p3"
}]]), xt = m("audio-lines-x", [
	["path", {
		d: "M10 3v18",
		key: "yhl04a"
	}],
	["path", {
		d: "M14 8v6.35",
		key: "1ubbml"
	}],
	["path", {
		d: "m17 17 5 5",
		key: "p7ous7"
	}],
	["path", {
		d: "M18 5v8.1",
		key: "1icuhc"
	}],
	["path", {
		d: "M2 10v3",
		key: "1fnikh"
	}],
	["path", {
		d: "M22 10v3",
		key: "154ddg"
	}],
	["path", {
		d: "m22 17-5 5",
		key: "gqnmv0"
	}],
	["path", {
		d: "M6 6v11",
		key: "11sgs0"
	}]
]), St = m("audio-lines", [
	["path", {
		d: "M2 10v3",
		key: "1fnikh"
	}],
	["path", {
		d: "M6 6v11",
		key: "11sgs0"
	}],
	["path", {
		d: "M10 3v18",
		key: "yhl04a"
	}],
	["path", {
		d: "M14 8v7",
		key: "3a1oy3"
	}],
	["path", {
		d: "M18 5v13",
		key: "123xd1"
	}],
	["path", {
		d: "M22 10v3",
		key: "154ddg"
	}]
]), Ct = m("audio-waveform", [["path", {
	d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
	key: "57tc96"
}]]), wt = m("award", [["path", {
	d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
	key: "1yiouv"
}], ["circle", {
	cx: "12",
	cy: "8",
	r: "6",
	key: "1vp47v"
}]]), Tt = m("axe", [["path", {
	d: "m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9",
	key: "5z9253"
}], ["path", {
	d: "M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",
	key: "19zklq"
}]]), Et = m("baby", [
	["path", {
		d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
		key: "1u7htd"
	}],
	["path", {
		d: "M15 12h.01",
		key: "1k8ypt"
	}],
	["path", {
		d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
		key: "11xh7x"
	}],
	["path", {
		d: "M9 12h.01",
		key: "157uk2"
	}]
]), Dt = m("axis-3d", [
	["path", {
		d: "M13.5 10.5 15 9",
		key: "1nsxvm"
	}],
	["path", {
		d: "M4 4v15a1 1 0 0 0 1 1h15",
		key: "1w6lkd"
	}],
	["path", {
		d: "M4.293 19.707 6 18",
		key: "3g1p8c"
	}],
	["path", {
		d: "m9 15 1.5-1.5",
		key: "1xfbes"
	}]
]), Ot = m("backpack", [
	["path", {
		d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",
		key: "1ol0lm"
	}],
	["path", {
		d: "M8 10h8",
		key: "c7uz4u"
	}],
	["path", {
		d: "M8 18h8",
		key: "1no2b1"
	}],
	["path", {
		d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",
		key: "1fr6do"
	}],
	["path", {
		d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
		key: "donm21"
	}]
]), kt = m("badge-alert", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]), At = m("badge-cent", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "M12 7v10",
		key: "jspqdw"
	}],
	["path", {
		d: "M15.4 10a4 4 0 1 0 0 4",
		key: "2eqtx8"
	}]
]), jt = m("badge-check", [["path", {
	d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
	key: "3c2336"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), Mt = m("badge-dollar-sign", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
		key: "1h4pet"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}]
]), Nt = m("badge-euro", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "M7 12h5",
		key: "gblrwe"
	}],
	["path", {
		d: "M15 9.4a4 4 0 1 0 0 5.2",
		key: "1makmb"
	}]
]), Pt = m("badge-indian-rupee", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "M8 8h8",
		key: "1bis0t"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "m13 17-5-1h1a4 4 0 0 0 0-8",
		key: "nu2bwa"
	}]
]), Ft = m("badge-info", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "16",
		y2: "12",
		key: "1y1yb1"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "8",
		y2: "8",
		key: "110wyk"
	}]
]), It = m("badge-japanese-yen", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "m9 8 3 3v7",
		key: "17yadx"
	}],
	["path", {
		d: "m12 11 3-3",
		key: "p4cfq1"
	}],
	["path", {
		d: "M9 12h6",
		key: "1c52cq"
	}],
	["path", {
		d: "M9 16h6",
		key: "8wimt3"
	}]
]), Lt = m("badge-minus", [["path", {
	d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
	key: "3c2336"
}], ["line", {
	x1: "8",
	x2: "16",
	y1: "12",
	y2: "12",
	key: "1jonct"
}]]), Rt = m("badge-plus", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "16",
		key: "10p56q"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12",
		key: "1jonct"
	}]
]), zt = m("badge-percent", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M9 9h.01",
		key: "1q5me6"
	}],
	["path", {
		d: "M15 15h.01",
		key: "lqbp3k"
	}]
]), Bt = m("badge-pound-sterling", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "M8 12h4",
		key: "qz6y1c"
	}],
	["path", {
		d: "M10 16V9.5a2.5 2.5 0 0 1 5 0",
		key: "3mlbjk"
	}],
	["path", {
		d: "M8 16h7",
		key: "sbedsn"
	}]
]), Vt = m("badge-question-mark", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "17",
		y2: "17",
		key: "io3f8k"
	}]
]), Ht = m("badge-russian-ruble", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "M9 16h5",
		key: "1syiyw"
	}],
	["path", {
		d: "M9 12h5a2 2 0 1 0 0-4h-3v9",
		key: "1ge9c1"
	}]
]), Ut = m("badge-swiss-franc", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "M11 17V8h4",
		key: "1bfq6y"
	}],
	["path", {
		d: "M11 12h3",
		key: "2eqnfz"
	}],
	["path", {
		d: "M9 16h4",
		key: "1skf3a"
	}]
]), Wt = m("badge-turkish-lira", [
	["path", {
		d: "M11 7v10a5 5 0 0 0 5-5",
		key: "1ja3ih"
	}],
	["path", {
		d: "m15 8-6 3",
		key: "4x0uwz"
	}],
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76",
		key: "18242g"
	}]
]), Gt = m("badge-x", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["line", {
		x1: "15",
		x2: "9",
		y1: "9",
		y2: "15",
		key: "f7djnv"
	}],
	["line", {
		x1: "9",
		x2: "15",
		y1: "9",
		y2: "15",
		key: "1shsy8"
	}]
]), Kt = m("badge", [["path", {
	d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
	key: "3c2336"
}]]), qt = m("baggage-claim", [
	["path", {
		d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",
		key: "4irg2o"
	}],
	["path", {
		d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",
		key: "14fcyx"
	}],
	["rect", {
		width: "13",
		height: "8",
		x: "8",
		y: "6",
		rx: "1",
		key: "o6oiis"
	}],
	["circle", {
		cx: "18",
		cy: "20",
		r: "2",
		key: "t9985n"
	}],
	["circle", {
		cx: "9",
		cy: "20",
		r: "2",
		key: "e5v82j"
	}]
]), Jt = m("balloon", [
	["path", {
		d: "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1",
		key: "2nz4b"
	}],
	["path", {
		d: "M12 6a2 2 0 0 1 2 2",
		key: "7y7d82"
	}],
	["path", {
		d: "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0",
		key: "vqb5s3"
	}]
]), Yt = m("ban", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M4.929 4.929 19.07 19.071",
	key: "196cmz"
}]]), Xt = m("banana", [["path", {
	d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",
	key: "1cscit"
}], ["path", {
	d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
	key: "1y1nbv"
}]]), Zt = m("bandage", [
	["path", {
		d: "M10 10.01h.01",
		key: "1e9xi7"
	}],
	["path", {
		d: "M10 14.01h.01",
		key: "ac23bv"
	}],
	["path", {
		d: "M14 10.01h.01",
		key: "2wfrvf"
	}],
	["path", {
		d: "M14 14.01h.01",
		key: "8tw8yn"
	}],
	["path", {
		d: "M18 6v12",
		key: "1bcixs"
	}],
	["path", {
		d: "M6 6v12",
		key: "vkc79e"
	}],
	["rect", {
		x: "2",
		y: "6",
		width: "20",
		height: "12",
		rx: "2",
		key: "1wpnh2"
	}]
]), Qt = m("banknote-arrow-down", [
	["path", {
		d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",
		key: "x6cv4u"
	}],
	["path", {
		d: "m16 19 3 3 3-3",
		key: "1ibux0"
	}],
	["path", {
		d: "M18 12h.01",
		key: "yjnet6"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M6 12h.01",
		key: "c2rlol"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), $t = m("banknote-arrow-up", [
	["path", {
		d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",
		key: "x6cv4u"
	}],
	["path", {
		d: "M18 12h.01",
		key: "yjnet6"
	}],
	["path", {
		d: "M19 22v-6",
		key: "qhmiwi"
	}],
	["path", {
		d: "m22 19-3-3-3 3",
		key: "rn6bg2"
	}],
	["path", {
		d: "M6 12h.01",
		key: "c2rlol"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), en = m("banknote-check", [
	["path", {
		d: "M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875",
		key: "t4e5a5"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}],
	["path", {
		d: "M18 12h.01",
		key: "yjnet6"
	}],
	["path", {
		d: "M6 12h.01",
		key: "c2rlol"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), tn = m("banknote-x", [
	["path", {
		d: "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",
		key: "16nib6"
	}],
	["path", {
		d: "m17 17 5 5",
		key: "p7ous7"
	}],
	["path", {
		d: "M18 12h.01",
		key: "yjnet6"
	}],
	["path", {
		d: "m22 17-5 5",
		key: "gqnmv0"
	}],
	["path", {
		d: "M6 12h.01",
		key: "c2rlol"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), nn = m("banknote", [
	["rect", {
		width: "20",
		height: "12",
		x: "2",
		y: "6",
		rx: "2",
		key: "9lu3g6"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "M6 12h.01M18 12h.01",
		key: "113zkx"
	}]
]), rn = m("barcode", [
	["path", {
		d: "M3 5v14",
		key: "1nt18q"
	}],
	["path", {
		d: "M8 5v14",
		key: "1ybrkv"
	}],
	["path", {
		d: "M12 5v14",
		key: "s699le"
	}],
	["path", {
		d: "M17 5v14",
		key: "ycjyhj"
	}],
	["path", {
		d: "M21 5v14",
		key: "nzette"
	}]
]), an = m("baseline", [
	["path", {
		d: "M4 20h16",
		key: "14thso"
	}],
	["path", {
		d: "m6 16 6-12 6 12",
		key: "1b4byz"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}]
]), on = m("barrel", [
	["path", {
		d: "M10 3a41 41 0 000 18",
		key: "1f9k6x"
	}],
	["path", {
		d: "M14 3a41 41 0 010 18",
		key: "1qo28r"
	}],
	["path", {
		d: "M16.997 21a2 2 0 001.68-.92 15.25 15.25 0 000-16.16 2 2 0 00-1.68-.92h-10a2 2 0 00-1.681.92 15.25 15.25 0 000 16.16 2 2 0 001.681.92z",
		key: "1nrwe5"
	}],
	["path", {
		d: "M3.54 16h16.914",
		key: "jntgtt"
	}],
	["path", {
		d: "M3.54 8h16.914",
		key: "14pf7i"
	}]
]), sn = m("bath", [
	["path", {
		d: "M10 4 8 6",
		key: "1rru8s"
	}],
	["path", {
		d: "M17 19v2",
		key: "ts1sot"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "M7 19v2",
		key: "12npes"
	}],
	["path", {
		d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
		key: "14ym8i"
	}]
]), cn = m("battery-low", [
	["path", {
		d: "M22 14v-4",
		key: "14q9d5"
	}],
	["path", {
		d: "M6 14v-4",
		key: "14a6bd"
	}],
	["rect", {
		x: "2",
		y: "6",
		width: "16",
		height: "12",
		rx: "2",
		key: "13zb55"
	}]
]), ln = m("battery-full", [
	["path", {
		d: "M10 10v4",
		key: "1mb2ec"
	}],
	["path", {
		d: "M14 10v4",
		key: "1nt88p"
	}],
	["path", {
		d: "M22 14v-4",
		key: "14q9d5"
	}],
	["path", {
		d: "M6 10v4",
		key: "1n77qd"
	}],
	["rect", {
		x: "2",
		y: "6",
		width: "16",
		height: "12",
		rx: "2",
		key: "13zb55"
	}]
]), un = m("battery-charging", [
	["path", {
		d: "m11 7-3 5h4l-3 5",
		key: "b4a64w"
	}],
	["path", {
		d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",
		key: "lre1cr"
	}],
	["path", {
		d: "M22 14v-4",
		key: "14q9d5"
	}],
	["path", {
		d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",
		key: "13q5k0"
	}]
]), dn = m("battery-medium", [
	["path", {
		d: "M10 14v-4",
		key: "suye4c"
	}],
	["path", {
		d: "M22 14v-4",
		key: "14q9d5"
	}],
	["path", {
		d: "M6 14v-4",
		key: "14a6bd"
	}],
	["rect", {
		x: "2",
		y: "6",
		width: "16",
		height: "12",
		rx: "2",
		key: "13zb55"
	}]
]), fn = m("battery-plus", [
	["path", {
		d: "M10 9v6",
		key: "17i7lo"
	}],
	["path", {
		d: "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605",
		key: "o09yah"
	}],
	["path", {
		d: "M22 14v-4",
		key: "14q9d5"
	}],
	["path", {
		d: "M7 12h6",
		key: "iekk3h"
	}],
	["path", {
		d: "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606",
		key: "xyqvf1"
	}]
]), pn = m("battery-warning", [
	["path", {
		d: "M10 17h.01",
		key: "nbq80n"
	}],
	["path", {
		d: "M10 7v6",
		key: "nne03l"
	}],
	["path", {
		d: "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2",
		key: "1m83kb"
	}],
	["path", {
		d: "M22 14v-4",
		key: "14q9d5"
	}],
	["path", {
		d: "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",
		key: "h8lgfh"
	}]
]), mn = m("beaker", [
	["path", {
		d: "M4.5 3h15",
		key: "c7n0jr"
	}],
	["path", {
		d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",
		key: "m1uhx7"
	}],
	["path", {
		d: "M6 14h12",
		key: "4cwo0f"
	}]
]), hn = m("battery", [["path", {
	d: "M 22 14 L 22 10",
	key: "nqc4tb"
}], ["rect", {
	x: "2",
	y: "6",
	width: "16",
	height: "12",
	rx: "2",
	key: "13zb55"
}]]), gn = m("bean-off", [
	["path", {
		d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
		key: "bq3udt"
	}],
	["path", {
		d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",
		key: "17ccse"
	}],
	["path", {
		d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
		key: "18zqgq"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), _n = m("bean", [["path", {
	d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
	key: "1tvzk7"
}], ["path", {
	d: "M5.341 10.62a4 4 0 1 0 5.279-5.28",
	key: "2cyri2"
}]]), vn = m("bed-double", [
	["path", {
		d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",
		key: "1k78r4"
	}],
	["path", {
		d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
		key: "fb3tl2"
	}],
	["path", {
		d: "M12 4v6",
		key: "1dcgq2"
	}],
	["path", {
		d: "M2 18h20",
		key: "ajqnye"
	}]
]), yn = m("bed-single", [
	["path", {
		d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",
		key: "1wm6mi"
	}],
	["path", {
		d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",
		key: "4k93s5"
	}],
	["path", {
		d: "M3 18h18",
		key: "1h113x"
	}]
]), bn = m("bed", [
	["path", {
		d: "M2 4v16",
		key: "vw9hq8"
	}],
	["path", {
		d: "M2 8h18a2 2 0 0 1 2 2v10",
		key: "1dgv2r"
	}],
	["path", {
		d: "M2 17h20",
		key: "18nfp3"
	}],
	["path", {
		d: "M6 8v9",
		key: "1yriud"
	}]
]), xn = m("beef-off", [
	["path", {
		d: "M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12",
		key: "3w1grc"
	}],
	["path", {
		d: "M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04",
		key: "1xgl7b"
	}],
	["path", {
		d: "M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
		key: "3m3yc0"
	}],
	["path", {
		d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393",
		key: "1rvkn7"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151",
		key: "54713r"
	}]
]), Sn = m("beef", [
	["path", {
		d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3",
		key: "cisjcv"
	}],
	["path", {
		d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
		key: "5byaag"
	}],
	["circle", {
		cx: "12.5",
		cy: "8.5",
		r: "2.5",
		key: "9738u8"
	}]
]), Cn = m("beer-off", [
	["path", {
		d: "M13 13v5",
		key: "igwfh0"
	}],
	["path", {
		d: "M17 11.47V8",
		key: "16yw0g"
	}],
	["path", {
		d: "M17 11h1a3 3 0 0 1 2.745 4.211",
		key: "1xbt65"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",
		key: "c55o3e"
	}],
	["path", {
		d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",
		key: "1ydug7"
	}],
	["path", {
		d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",
		key: "q81o7q"
	}],
	["path", {
		d: "M9 14.6V18",
		key: "20ek98"
	}]
]), wn = m("beer", [
	["path", {
		d: "M17 11h1a3 3 0 0 1 0 6h-1",
		key: "1yp76v"
	}],
	["path", {
		d: "M9 12v6",
		key: "1u1cab"
	}],
	["path", {
		d: "M13 12v6",
		key: "1sugkk"
	}],
	["path", {
		d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
		key: "1510fo"
	}],
	["path", {
		d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",
		key: "19jb7n"
	}]
]), Tn = m("bell-dot", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348",
		key: "xaq59h"
	}],
	["circle", {
		cx: "18",
		cy: "5",
		r: "3",
		key: "gq8acd"
	}]
]), En = m("bell-check", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "m15 8 2 2 4-4",
		key: "sbrgsm"
	}],
	["path", {
		d: "M16.8607 4.4824A6 6 0 0 0 6 8C6 12.499 4.589 13.956 3.262 15.326",
		key: "qcog4a"
	}],
	["path", {
		d: "M3.262 15.326A1 1 0 0 0 4 17H20A1 1 0 0 0 20.74 15.327C20.209 14.779 19.665 14.218 19.203 13.454",
		key: "mxnnoh"
	}]
]), Dn = m("bell-electric", [
	["path", {
		d: "M18.518 17.347A7 7 0 0 1 14 19",
		key: "1emhpo"
	}],
	["path", {
		d: "M18.8 4A11 11 0 0 1 20 9",
		key: "127b67"
	}],
	["path", {
		d: "M9 9h.01",
		key: "1q5me6"
	}],
	["circle", {
		cx: "20",
		cy: "16",
		r: "2",
		key: "1v9bxh"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "7",
		key: "p2h5vp"
	}],
	["rect", {
		x: "4",
		y: "16",
		width: "10",
		height: "6",
		rx: "2",
		key: "bfnviv"
	}]
]), On = m("bell-minus", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "M15 8h6",
		key: "8ybuxh"
	}],
	["path", {
		d: "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12",
		key: "bdwj86"
	}]
]), kn = m("bell-off", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
		key: "178tsu"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",
		key: "1hqiys"
	}]
]), An = m("bell-plus", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "M15 8h6",
		key: "8ybuxh"
	}],
	["path", {
		d: "M18 5v6",
		key: "g5ayrv"
	}],
	["path", {
		d: "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332",
		key: "1abcvy"
	}]
]), jn = m("bell-ring", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "M22 8c0-2.3-.8-4.3-2-6",
		key: "5bb3ad"
	}],
	["path", {
		d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
		key: "11g9vi"
	}],
	["path", {
		d: "M4 2C2.8 3.7 2 5.7 2 8",
		key: "tap9e0"
	}]
]), Mn = m("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]), Nn = m("between-horizontal-start", [
	["rect", {
		width: "13",
		height: "7",
		x: "8",
		y: "3",
		rx: "1",
		key: "pkso9a"
	}],
	["path", {
		d: "m2 9 3 3-3 3",
		key: "1agib5"
	}],
	["rect", {
		width: "13",
		height: "7",
		x: "8",
		y: "14",
		rx: "1",
		key: "1q5fc1"
	}]
]), Pn = m("between-horizontal-end", [
	["rect", {
		width: "13",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "11xb64"
	}],
	["path", {
		d: "m22 15-3-3 3-3",
		key: "26chmm"
	}],
	["rect", {
		width: "13",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "k6ky7n"
	}]
]), Fn = m("between-vertical-end", [
	["rect", {
		width: "7",
		height: "13",
		x: "3",
		y: "3",
		rx: "1",
		key: "1fdu0f"
	}],
	["path", {
		d: "m9 22 3-3 3 3",
		key: "17z65a"
	}],
	["rect", {
		width: "7",
		height: "13",
		x: "14",
		y: "3",
		rx: "1",
		key: "1squn4"
	}]
]), In = m("between-vertical-start", [
	["rect", {
		width: "7",
		height: "13",
		x: "3",
		y: "8",
		rx: "1",
		key: "1fjrkv"
	}],
	["path", {
		d: "m15 2-3 3-3-3",
		key: "1uh6eb"
	}],
	["rect", {
		width: "7",
		height: "13",
		x: "14",
		y: "8",
		rx: "1",
		key: "w3fjg8"
	}]
]), Ln = m("biceps-flexed", [
	["path", {
		d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",
		key: "1pmlyh"
	}],
	["path", {
		d: "M15 14a5 5 0 0 0-7.584 2",
		key: "5rb254"
	}],
	["path", {
		d: "M9.964 6.825C8.019 7.977 9.5 13 8 15",
		key: "kbvsx9"
	}]
]), Rn = m("bike", [
	["circle", {
		cx: "18.5",
		cy: "17.5",
		r: "3.5",
		key: "15x4ox"
	}],
	["circle", {
		cx: "5.5",
		cy: "17.5",
		r: "3.5",
		key: "1noe27"
	}],
	["circle", {
		cx: "15",
		cy: "5",
		r: "1",
		key: "19l28e"
	}],
	["path", {
		d: "M12 17.5V14l-3-3 4-3 2 3h2",
		key: "1npguv"
	}]
]), zn = m("binary", [
	["rect", {
		x: "14",
		y: "14",
		width: "4",
		height: "6",
		rx: "2",
		key: "p02svl"
	}],
	["rect", {
		x: "6",
		y: "4",
		width: "4",
		height: "6",
		rx: "2",
		key: "xm4xkj"
	}],
	["path", {
		d: "M6 20h4",
		key: "1i6q5t"
	}],
	["path", {
		d: "M14 10h4",
		key: "ru81e7"
	}],
	["path", {
		d: "M6 14h2v6",
		key: "16z9wg"
	}],
	["path", {
		d: "M14 4h2v6",
		key: "1idq9u"
	}]
]), Bn = m("binoculars", [
	["path", {
		d: "M10 10h4",
		key: "tcdvrf"
	}],
	["path", {
		d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",
		key: "3apit1"
	}],
	["path", {
		d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",
		key: "rhpgnw"
	}],
	["path", {
		d: "M 22 16 L 2 16",
		key: "14lkq7"
	}],
	["path", {
		d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",
		key: "104b3k"
	}],
	["path", {
		d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",
		key: "14fczp"
	}]
]), Vn = m("biohazard", [
	["circle", {
		cx: "12",
		cy: "11.9",
		r: "2",
		key: "e8h31w"
	}],
	["path", {
		d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",
		key: "17bolr"
	}],
	["path", {
		d: "m8.9 10.1 1.4.8",
		key: "15ezny"
	}],
	["path", {
		d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",
		key: "wtwa5u"
	}],
	["path", {
		d: "m15.1 10.1-1.4.8",
		key: "1r0b28"
	}],
	["path", {
		d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",
		key: "m7qszh"
	}],
	["path", {
		d: "M12 13.9v1.6",
		key: "zfyyim"
	}],
	["path", {
		d: "M13.5 5.4c-1-.2-2-.2-3 0",
		key: "1bi9q0"
	}],
	["path", {
		d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5",
		key: "1rhjqw"
	}],
	["path", {
		d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5",
		key: "8gsud3"
	}]
]), Hn = m("bird", [
	["path", {
		d: "M16 7h.01",
		key: "1kdx03"
	}],
	["path", {
		d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",
		key: "oj1oa8"
	}],
	["path", {
		d: "m20 7 2 .5-2 .5",
		key: "12nv4d"
	}],
	["path", {
		d: "M10 18v3",
		key: "1yea0a"
	}],
	["path", {
		d: "M14 17.75V21",
		key: "1pymcb"
	}],
	["path", {
		d: "M7 18a6 6 0 0 0 3.84-10.61",
		key: "1npnn0"
	}]
]), Un = m("birdhouse", [
	["path", {
		d: "M12 18v4",
		key: "jadmvz"
	}],
	["path", {
		d: "m17 18 1.956-11.468",
		key: "l5n2ro"
	}],
	["path", {
		d: "m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8",
		key: "1sy6n7"
	}],
	["path", {
		d: "M4 18h16",
		key: "19g7jn"
	}],
	["path", {
		d: "M7 18 5.044 6.532",
		key: "1uqdf2"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "2",
		key: "1yojzk"
	}]
]), Wn = m("bitcoin", [["path", {
	d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
	key: "yr8idg"
}]]), Gn = m("blend", [["circle", {
	cx: "9",
	cy: "9",
	r: "7",
	key: "p2h5vp"
}], ["circle", {
	cx: "15",
	cy: "15",
	r: "7",
	key: "19ennj"
}]]), Kn = m("blender", [
	["path", {
		d: "M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z",
		key: "11zxmj"
	}],
	["path", {
		d: "m17 2-1 12",
		key: "nxm2fw"
	}],
	["path", {
		d: "M8.006 14 7 2",
		key: "13bxiv"
	}],
	["path", {
		d: "M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75",
		key: "1s61ad"
	}],
	["path", {
		d: "M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5",
		key: "gel3rg"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}]
]), qn = m("blocks", [["path", {
	d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",
	key: "1ah6g2"
}], ["rect", {
	x: "14",
	y: "2",
	width: "8",
	height: "8",
	rx: "1",
	key: "88lufb"
}]]), Jn = m("blinds", [
	["path", {
		d: "M3 3h18",
		key: "o7r712"
	}],
	["path", {
		d: "M20 7H8",
		key: "gd2fo2"
	}],
	["path", {
		d: "M20 11H8",
		key: "1ynp89"
	}],
	["path", {
		d: "M10 19h10",
		key: "19hjk5"
	}],
	["path", {
		d: "M8 15h12",
		key: "1yqzne"
	}],
	["path", {
		d: "M4 3v14",
		key: "fggqzn"
	}],
	["circle", {
		cx: "4",
		cy: "19",
		r: "2",
		key: "p3m9r0"
	}]
]), Yn = m("bluetooth-connected", [
	["path", {
		d: "m7 7 10 10-5 5V2l5 5L7 17",
		key: "1q5490"
	}],
	["line", {
		x1: "18",
		x2: "21",
		y1: "12",
		y2: "12",
		key: "1rsjjs"
	}],
	["line", {
		x1: "3",
		x2: "6",
		y1: "12",
		y2: "12",
		key: "11yl8c"
	}]
]), Xn = m("bluetooth-off", [
	["path", {
		d: "m17 17-5 5V12l-5 5",
		key: "v5aci6"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M14.5 9.5 17 7l-5-5v4.5",
		key: "1kddfz"
	}]
]), Zn = m("bluetooth-searching", [
	["path", {
		d: "m7 7 10 10-5 5V2l5 5L7 17",
		key: "1q5490"
	}],
	["path", {
		d: "M20.83 14.83a4 4 0 0 0 0-5.66",
		key: "k8tn1j"
	}],
	["path", {
		d: "M18 12h.01",
		key: "yjnet6"
	}]
]), Qn = m("bluetooth", [["path", {
	d: "m7 7 10 10-5 5V2l5 5L7 17",
	key: "1q5490"
}]]), $n = m("bold", [["path", {
	d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
	key: "mg9rjx"
}]]), er = m("bolt", [["path", {
	d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
	key: "yt0hxn"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "4",
	key: "4exip2"
}]]), tr = m("bone-fracture", [
	["path", {
		d: "M14 4.5a1 1 0 0 1 5 0 .5.5 0 0 0 .5.5 1 1 0 0 1 0 5c-.81 0-1.8-.7-2.5 0l-1.958 1.957a.15.15 0 0 1-.252-.072l-.493-2.07a.15.15 0 0 0-.111-.112l-2.072-.494a.15.15 0 0 1-.072-.252L14 7c.7-.7 0-1.69 0-2.5",
		key: "1c7o5b"
	}],
	["path", {
		d: "m16 20-1-2",
		key: "5348lt"
	}],
	["path", {
		d: "m20 16-2-1",
		key: "2c7pv5"
	}],
	["path", {
		d: "m4 8 2 1",
		key: "rpj1x4"
	}],
	["path", {
		d: "m8 4 1 2",
		key: "1r4zbp"
	}],
	["path", {
		d: "M9.698 14.19a.15.15 0 0 0 .112.112l2.074.489a.15.15 0 0 1 .072.252L10 17c-.7.7 0 1.69 0 2.5a1 1 0 0 1-5 0 .495.495 0 0 0-.5-.5 1 1 0 0 1 0-5c.81 0 1.8.7 2.5 0l1.956-1.957a.15.15 0 0 1 .252.072z",
		key: "3u61yx"
	}]
]), nr = m("bomb", [
	["circle", {
		cx: "11",
		cy: "13",
		r: "9",
		key: "hd149"
	}],
	["path", {
		d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
		key: "jp4j1b"
	}],
	["path", {
		d: "m22 2-1.5 1.5",
		key: "ay92ug"
	}]
]), rr = m("bone", [["path", {
	d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
	key: "w610uw"
}]]), ir = m("book-a", [
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "m8 13 4-7 4 7",
		key: "4rari8"
	}],
	["path", {
		d: "M9.1 11h5.7",
		key: "1gkovt"
	}]
]), ar = m("book-alert", [
	["path", {
		d: "M12 13h.01",
		key: "y0uutt"
	}],
	["path", {
		d: "M12 6v3",
		key: "1m4b9j"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}]
]), or = m("book-audio", [
	["path", {
		d: "M12 6v7",
		key: "1f6ttz"
	}],
	["path", {
		d: "M16 8v3",
		key: "gejaml"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "M8 8v3",
		key: "1qzp49"
	}]
]), sr = m("book-check", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}], ["path", {
	d: "m9 9.5 2 2 4-4",
	key: "1dth82"
}]]), cr = m("book-dashed", [
	["path", {
		d: "M12 17h1.5",
		key: "1gkc67"
	}],
	["path", {
		d: "M12 22h1.5",
		key: "1my7sn"
	}],
	["path", {
		d: "M12 2h1.5",
		key: "19tvb7"
	}],
	["path", {
		d: "M17.5 22H19a1 1 0 0 0 1-1",
		key: "10akbh"
	}],
	["path", {
		d: "M17.5 2H19a1 1 0 0 1 1 1v1.5",
		key: "1vrfjs"
	}],
	["path", {
		d: "M20 14v3h-2.5",
		key: "1naeju"
	}],
	["path", {
		d: "M20 8.5V10",
		key: "1ctpfu"
	}],
	["path", {
		d: "M4 10V8.5",
		key: "1o3zg5"
	}],
	["path", {
		d: "M4 19.5V14",
		key: "ob81pf"
	}],
	["path", {
		d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8",
		key: "s8vcyb"
	}],
	["path", {
		d: "M8 22H6.5a1 1 0 0 1 0-5H8",
		key: "1cu73q"
	}]
]), lr = m("book-down", [
	["path", {
		d: "M12 13V7",
		key: "h0r20n"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "m9 10 3 3 3-3",
		key: "zt5b4y"
	}]
]), ur = m("book-copy", [
	["path", {
		d: "M5 7a2 2 0 0 0-2 2v11",
		key: "1yhqjt"
	}],
	["path", {
		d: "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21",
		key: "edzzo5"
	}],
	["path", {
		d: "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10",
		key: "1nwzrg"
	}]
]), dr = m("book-headphones", [
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "M8 12v-2a4 4 0 0 1 8 0v2",
		key: "1vsqkj"
	}],
	["circle", {
		cx: "15",
		cy: "12",
		r: "1",
		key: "1tmaij"
	}],
	["circle", {
		cx: "9",
		cy: "12",
		r: "1",
		key: "1vctgf"
	}]
]), fr = m("book-heart", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}], ["path", {
	d: "M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
	key: "9v40y5"
}]]), pr = m("book-image", [
	["path", {
		d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17",
		key: "q6ojf0"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "2",
		key: "2qkj4p"
	}]
]), mr = m("book-key", [
	["path", {
		d: "M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15",
		key: "4azifu"
	}],
	["path", {
		d: "M17 2v6",
		key: "qgmh37"
	}],
	["path", {
		d: "M17 4h2",
		key: "13vrzo"
	}],
	["path", {
		d: "M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "192hzx"
	}],
	["circle", {
		cx: "17",
		cy: "10",
		r: "2",
		key: "y0i25j"
	}]
]), hr = m("book-lock", [
	["path", {
		d: "M18 6V4a2 2 0 1 0-4 0v2",
		key: "1aquzs"
	}],
	["path", {
		d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "1rkj32"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",
		key: "18wgow"
	}],
	["rect", {
		x: "12",
		y: "6",
		width: "8",
		height: "5",
		rx: "1",
		key: "73l30o"
	}]
]), gr = m("book-minus", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}], ["path", {
	d: "M9 10h6",
	key: "9gxzsh"
}]]), _r = m("book-marked", [["path", {
	d: "M10 2v8l3-3 3 3V2",
	key: "sqw3rj"
}], ["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]), vr = m("book-open-check", [
	["path", {
		d: "M12 5v16",
		key: "1f6ucr"
	}],
	["path", {
		d: "m16 12 2 2 4-4",
		key: "mdajum"
	}],
	["path", {
		d: "M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344",
		key: "144kbk"
	}]
]), yr = m("book-open-text", [
	["path", {
		d: "M12 5v16",
		key: "1f6ucr"
	}],
	["path", {
		d: "M16 13h2",
		key: "weia3s"
	}],
	["path", {
		d: "M16 9h2",
		key: "1n7gjm"
	}],
	["path", {
		d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
		key: "1fyvmf"
	}],
	["path", {
		d: "M6 13h2",
		key: "1cckiz"
	}],
	["path", {
		d: "M6 9h2",
		key: "1k7j9f"
	}]
]), br = m("book-plus", [
	["path", {
		d: "M12 7v6",
		key: "lw1j43"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "M9 10h6",
		key: "9gxzsh"
	}]
]), xr = m("book-open", [["path", {
	d: "M12 5v16",
	key: "1f6ucr"
}], ["path", {
	d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
	key: "1fyvmf"
}]]), Sr = m("book-search", [
	["path", {
		d: "M11 22H5.5a1 1 0 0 1 0-5h4.501",
		key: "mcbepb"
	}],
	["path", {
		d: "m21 22-1.879-1.878",
		key: "12q7x1"
	}],
	["path", {
		d: "M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8",
		key: "olfd5n"
	}],
	["circle", {
		cx: "17",
		cy: "18",
		r: "3",
		key: "82mm0e"
	}]
]), Cr = m("book-text", [
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "M8 11h8",
		key: "vwpz6n"
	}],
	["path", {
		d: "M8 7h6",
		key: "1f0q6e"
	}]
]), wr = m("book-type", [
	["path", {
		d: "M10 13h4",
		key: "ytezjc"
	}],
	["path", {
		d: "M12 6v7",
		key: "1f6ttz"
	}],
	["path", {
		d: "M16 8V6H8v2",
		key: "x8j6u4"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}]
]), Tr = m("book-up", [
	["path", {
		d: "M12 13V7",
		key: "h0r20n"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "m9 10 3-3 3 3",
		key: "11gsxs"
	}]
]), Er = m("book-up-2", [
	["path", {
		d: "M12 13V7",
		key: "h0r20n"
	}],
	["path", {
		d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "161d7n"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",
		key: "1lorq7"
	}],
	["path", {
		d: "m9 10 3-3 3 3",
		key: "11gsxs"
	}],
	["path", {
		d: "m9 5 3-3 3 3",
		key: "l8vdw6"
	}]
]), Dr = m("book-user", [
	["path", {
		d: "M15 13a3 3 0 1 0-6 0",
		key: "10j68g"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["circle", {
		cx: "12",
		cy: "8",
		r: "2",
		key: "1822b1"
	}]
]), Or = m("book-x", [
	["path", {
		d: "m14.5 7-5 5",
		key: "dy991v"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "m9.5 7 5 5",
		key: "s45iea"
	}]
]), kr = m("book", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]), Ar = m("bookmark-check", [["path", {
	d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
	key: "oz39mx"
}], ["path", {
	d: "m9 10 2 2 4-4",
	key: "1gnqz4"
}]]), jr = m("bookmark-minus", [["path", {
	d: "M15 10H9",
	key: "o6yqo3"
}], ["path", {
	d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
	key: "oz39mx"
}]]), Mr = m("bookmark-off", [
	["path", {
		d: "M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5",
		key: "nigmce"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.656 3H17a2 2 0 0 1 2 2v8.344",
		key: "hlvsa"
	}]
]), Nr = m("bookmark-plus", [
	["path", {
		d: "M12 7v6",
		key: "lw1j43"
	}],
	["path", {
		d: "M15 10H9",
		key: "o6yqo3"
	}],
	["path", {
		d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
		key: "oz39mx"
	}]
]), Pr = m("bookmark-x", [
	["path", {
		d: "m14.5 7.5-5 5",
		key: "3lb6iw"
	}],
	["path", {
		d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
		key: "oz39mx"
	}],
	["path", {
		d: "m9.5 7.5 5 5",
		key: "ko136h"
	}]
]), Fr = m("bookmark", [["path", {
	d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
	key: "oz39mx"
}]]), Ir = m("boom-box", [
	["path", {
		d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
		key: "vvzvr1"
	}],
	["path", {
		d: "M8 8v1",
		key: "xcqmfk"
	}],
	["path", {
		d: "M12 8v1",
		key: "1rj8u4"
	}],
	["path", {
		d: "M16 8v1",
		key: "1q12zr"
	}],
	["rect", {
		width: "20",
		height: "12",
		x: "2",
		y: "9",
		rx: "2",
		key: "igpb89"
	}],
	["circle", {
		cx: "8",
		cy: "15",
		r: "2",
		key: "fa4a8s"
	}],
	["circle", {
		cx: "16",
		cy: "15",
		r: "2",
		key: "14c3ya"
	}]
]), Lr = m("bot-message-square", [
	["path", {
		d: "M12 6V2H8",
		key: "1155em"
	}],
	["path", {
		d: "M15 11v2",
		key: "i11awn"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z",
		key: "11gyqh"
	}],
	["path", {
		d: "M9 11v2",
		key: "1ueba0"
	}]
]), Rr = m("bot-off", [
	["path", {
		d: "M13.67 8H18a2 2 0 0 1 2 2v4.33",
		key: "7az073"
	}],
	["path", {
		d: "M2 14h2",
		key: "vft8re"
	}],
	["path", {
		d: "M20 14h2",
		key: "4cs60a"
	}],
	["path", {
		d: "M22 22 2 2",
		key: "1r8tn9"
	}],
	["path", {
		d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",
		key: "s09a7a"
	}],
	["path", {
		d: "M9 13v2",
		key: "rq6x2g"
	}],
	["path", {
		d: "M9.67 4H12v2.33",
		key: "110xot"
	}]
]), zr = m("bot", [
	["path", {
		d: "M12 8V4H8",
		key: "hb8ula"
	}],
	["rect", {
		width: "16",
		height: "12",
		x: "4",
		y: "8",
		rx: "2",
		key: "enze0r"
	}],
	["path", {
		d: "M2 14h2",
		key: "vft8re"
	}],
	["path", {
		d: "M20 14h2",
		key: "4cs60a"
	}],
	["path", {
		d: "M15 13v2",
		key: "1xurst"
	}],
	["path", {
		d: "M9 13v2",
		key: "rq6x2g"
	}]
]), Br = m("bottle-wine", [["path", {
	d: "M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z",
	key: "blqgoc"
}], ["path", {
	d: "M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4",
	key: "43jbee"
}]]), Vr = m("bow-arrow", [
	["path", {
		d: "M17 3h4v4",
		key: "19p9u1"
	}],
	["path", {
		d: "M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17",
		key: "12t3w9"
	}],
	["path", {
		d: "M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05",
		key: "ogng5l"
	}],
	["path", {
		d: "M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z",
		key: "8v3fy2"
	}],
	["path", {
		d: "M9.707 14.293 21 3",
		key: "ydm3bn"
	}]
]), Hr = m("box", [
	["path", {
		d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
		key: "hh9hay"
	}],
	["path", {
		d: "m3.3 7 8.7 5 8.7-5",
		key: "g66t2b"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}]
]), Ur = m("braces", [["path", {
	d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
	key: "ezmyqa"
}], ["path", {
	d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
	key: "e1hn23"
}]]), Wr = m("boxes", [
	["path", {
		d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
		key: "lc1i9w"
	}],
	["path", {
		d: "m7 16.5-4.74-2.85",
		key: "1o9zyk"
	}],
	["path", {
		d: "m7 16.5 5-3",
		key: "va8pkn"
	}],
	["path", {
		d: "M7 16.5v5.17",
		key: "jnp8gn"
	}],
	["path", {
		d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
		key: "8zsnat"
	}],
	["path", {
		d: "m17 16.5-5-3",
		key: "8arw3v"
	}],
	["path", {
		d: "m17 16.5 4.74-2.85",
		key: "8rfmw"
	}],
	["path", {
		d: "M17 16.5v5.17",
		key: "k6z78m"
	}],
	["path", {
		d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
		key: "1xygjf"
	}],
	["path", {
		d: "M12 8 7.26 5.15",
		key: "1vbdud"
	}],
	["path", {
		d: "m12 8 4.74-2.85",
		key: "3rx089"
	}],
	["path", {
		d: "M12 13.5V8",
		key: "1io7kd"
	}]
]), Gr = m("brackets", [["path", {
	d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3",
	key: "1kt8lf"
}], ["path", {
	d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3",
	key: "gduv9"
}]]), Kr = m("brain-circuit", [
	["path", {
		d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
		key: "l5xja"
	}],
	["path", {
		d: "M9 13a4.5 4.5 0 0 0 3-4",
		key: "10igwf"
	}],
	["path", {
		d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
		key: "105sqy"
	}],
	["path", {
		d: "M3.477 10.896a4 4 0 0 1 .585-.396",
		key: "ql3yin"
	}],
	["path", {
		d: "M6 18a4 4 0 0 1-1.967-.516",
		key: "2e4loj"
	}],
	["path", {
		d: "M12 13h4",
		key: "1ku699"
	}],
	["path", {
		d: "M12 18h6a2 2 0 0 1 2 2v1",
		key: "105ag5"
	}],
	["path", {
		d: "M12 8h8",
		key: "1lhi5i"
	}],
	["path", {
		d: "M16 8V5a2 2 0 0 1 2-2",
		key: "u6izg6"
	}],
	["circle", {
		cx: "16",
		cy: "13",
		r: ".5",
		key: "ry7gng"
	}],
	["circle", {
		cx: "18",
		cy: "3",
		r: ".5",
		key: "1aiba7"
	}],
	["circle", {
		cx: "20",
		cy: "21",
		r: ".5",
		key: "yhc1fs"
	}],
	["circle", {
		cx: "20",
		cy: "8",
		r: ".5",
		key: "1e43v0"
	}]
]), qr = m("brain-cog", [
	["path", {
		d: "m10.852 14.772-.383.923",
		key: "11vil6"
	}],
	["path", {
		d: "m10.852 9.228-.383-.923",
		key: "1fjppe"
	}],
	["path", {
		d: "m13.148 14.772.382.924",
		key: "je3va1"
	}],
	["path", {
		d: "m13.531 8.305-.383.923",
		key: "18epck"
	}],
	["path", {
		d: "m14.772 10.852.923-.383",
		key: "k9m8cz"
	}],
	["path", {
		d: "m14.772 13.148.923.383",
		key: "1xvhww"
	}],
	["path", {
		d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771",
		key: "jcbbz1"
	}],
	["path", {
		d: "M17.998 5.125a4 4 0 0 1 2.525 5.771",
		key: "1kkn7e"
	}],
	["path", {
		d: "M19.505 10.294a4 4 0 0 1-1.5 7.706",
		key: "18bmuc"
	}],
	["path", {
		d: "M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516",
		key: "uozx0d"
	}],
	["path", {
		d: "M4.5 10.291A4 4 0 0 0 6 18",
		key: "whdemb"
	}],
	["path", {
		d: "M6.002 5.125a3 3 0 0 0 .4 1.375",
		key: "1kqy2g"
	}],
	["path", {
		d: "m9.228 10.852-.923-.383",
		key: "1wtb30"
	}],
	["path", {
		d: "m9.228 13.148-.923.383",
		key: "1a830x"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}]
]), Jr = m("brain", [
	["path", {
		d: "M12 18V5",
		key: "adv99a"
	}],
	["path", {
		d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
		key: "1e3is1"
	}],
	["path", {
		d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
		key: "1gqd8o"
	}],
	["path", {
		d: "M17.997 5.125a4 4 0 0 1 2.526 5.77",
		key: "iwvgf7"
	}],
	["path", {
		d: "M18 18a4 4 0 0 0 2-7.464",
		key: "efp6ie"
	}],
	["path", {
		d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
		key: "1gq6am"
	}],
	["path", {
		d: "M6 18a4 4 0 0 1-2-7.464",
		key: "k1g0md"
	}],
	["path", {
		d: "M6.003 5.125a4 4 0 0 0-2.526 5.77",
		key: "q97ue3"
	}]
]), Yr = m("brick-wall-fire", [
	["path", {
		d: "M16 3v2.107",
		key: "gq8xun"
	}],
	["path", {
		d: "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9",
		key: "1l2pih"
	}],
	["path", {
		d: "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938",
		key: "jrnqjp"
	}],
	["path", {
		d: "M3 15h5.253",
		key: "xqg7rb"
	}],
	["path", {
		d: "M3 9h8.228",
		key: "1ppb70"
	}],
	["path", {
		d: "M8 15v6",
		key: "1stoo3"
	}],
	["path", {
		d: "M8 3v6",
		key: "vlvjmk"
	}]
]), Xr = m("brick-wall-shield", [
	["path", {
		d: "M12 9v1.258",
		key: "iwpddn"
	}],
	["path", {
		d: "M16 3v5.46",
		key: "d7ew98"
	}],
	["path", {
		d: "M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75",
		key: "137t5x"
	}],
	["path", {
		d: "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z",
		key: "16j3tf"
	}],
	["path", {
		d: "M3 15h7",
		key: "1qldh6"
	}],
	["path", {
		d: "M3 9h12.142",
		key: "1yjd6m"
	}],
	["path", {
		d: "M8 15v6",
		key: "1stoo3"
	}],
	["path", {
		d: "M8 3v6",
		key: "vlvjmk"
	}]
]), Zr = m("brick-wall", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M12 9v6",
		key: "199k2o"
	}],
	["path", {
		d: "M16 15v6",
		key: "8rj2es"
	}],
	["path", {
		d: "M16 3v6",
		key: "1j6rpj"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 15v6",
		key: "1stoo3"
	}],
	["path", {
		d: "M8 3v6",
		key: "vlvjmk"
	}]
]), Qr = m("briefcase-business", [
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
		key: "1ksdt3"
	}],
	["path", {
		d: "M22 13a18.15 18.15 0 0 1-20 0",
		key: "12hx5q"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "6",
		rx: "2",
		key: "i6l2r4"
	}]
]), $r = m("briefcase-conveyor-belt", [
	["path", {
		d: "M10 20v2",
		key: "1n8e1g"
	}],
	["path", {
		d: "M14 20v2",
		key: "1lq872"
	}],
	["path", {
		d: "M18 20v2",
		key: "10uadw"
	}],
	["path", {
		d: "M21 20H3",
		key: "kdqkdp"
	}],
	["path", {
		d: "M6 20v2",
		key: "a9bc87"
	}],
	["path", {
		d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12",
		key: "17n9tx"
	}],
	["rect", {
		x: "4",
		y: "6",
		width: "16",
		height: "10",
		rx: "2",
		key: "1097i5"
	}]
]), ei = m("briefcase", [["path", {
	d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
	key: "jecpp"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "6",
	rx: "2",
	key: "i6l2r4"
}]]), ti = m("briefcase-medical", [
	["path", {
		d: "M12 11v4",
		key: "a6ujw6"
	}],
	["path", {
		d: "M14 13h-4",
		key: "1pl8zg"
	}],
	["path", {
		d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
		key: "1ksdt3"
	}],
	["path", {
		d: "M18 6v14",
		key: "1mu4gy"
	}],
	["path", {
		d: "M6 6v14",
		key: "1s15cj"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "6",
		rx: "2",
		key: "i6l2r4"
	}]
]), ni = m("bring-to-front", [
	["rect", {
		x: "8",
		y: "8",
		width: "8",
		height: "8",
		rx: "2",
		key: "yj20xf"
	}],
	["path", {
		d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",
		key: "1ltk23"
	}],
	["path", {
		d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",
		key: "1q24h9"
	}]
]), ri = m("broccoli", [
	["path", {
		d: "M10 13a3 3 0 0 1-2.121-5.121",
		key: "1oqad0"
	}],
	["path", {
		d: "M15.606 14.204c-3.5 1.5-5.899 4.503-8.899 7.503A1 1 0 0 1 6 22c-2 0-4-2-4-4a1 1 0 0 1 .293-.707c1.911-1.911 3.823-3.578 5.347-5.441",
		key: "c93qjr"
	}],
	["path", {
		d: "M16.573 14.737A4 4 0 0 1 14 11",
		key: "1ymr17"
	}],
	["path", {
		d: "M7.14 10.907a4 4 0 1 1 2.756-7.43A4 4 0 0 1 16.7 4.48a2 2 0 0 1 2.82 2.82 4 4 0 0 1 1.002 6.805A4 4 0 1 1 13 16",
		key: "1kbgad"
	}]
]), ii = m("broom-sparkles", [
	["path", {
		d: "M11 2v2",
		key: "1539x4"
	}],
	["path", {
		d: "M12 3h-2",
		key: "1su5n0"
	}],
	["path", {
		d: "M13.5 10.5 22 2",
		key: "1yxz6l"
	}],
	["path", {
		d: "M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z",
		key: "1q75r6"
	}],
	["path", {
		d: "M20 15v4",
		key: "nmhudv"
	}],
	["path", {
		d: "M22 17h-4",
		key: "1sj068"
	}],
	["path", {
		d: "M4 4v4",
		key: "a4sqb9"
	}],
	["path", {
		d: "m5 18 2-2",
		key: "11qwpn"
	}],
	["path", {
		d: "M6 6H2",
		key: "1cli1h"
	}],
	["path", {
		d: "m7.699 10.7 5.602 5.601",
		key: "1rehuz"
	}]
]), ai = m("broom", [
	["path", {
		d: "M13.5 10.5 22 2",
		key: "1yxz6l"
	}],
	["path", {
		d: "M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z",
		key: "1q75r6"
	}],
	["path", {
		d: "m5 18 2-2",
		key: "11qwpn"
	}],
	["path", {
		d: "m7.699 10.7 5.602 5.601",
		key: "1rehuz"
	}]
]), oi = m("brush-cleaning", [
	["path", {
		d: "m16 22-1-4",
		key: "1ow2iv"
	}],
	["path", {
		d: "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1",
		key: "11gii7"
	}],
	["path", {
		d: "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z",
		key: "bju7h4"
	}],
	["path", {
		d: "m8 22 1-4",
		key: "s3unb"
	}]
]), si = m("brush", [
	["path", {
		d: "m11 10 3 3",
		key: "fzmg1i"
	}],
	["path", {
		d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",
		key: "p4q2r7"
	}],
	["path", {
		d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",
		key: "wy6l02"
	}]
]), ci = m("bubbles", [
	["path", {
		d: "M7.001 15.085A1.5 1.5 0 0 1 9 16.5",
		key: "y44lvh"
	}],
	["circle", {
		cx: "18.5",
		cy: "8.5",
		r: "3.5",
		key: "1wadoa"
	}],
	["circle", {
		cx: "7.5",
		cy: "16.5",
		r: "5.5",
		key: "6mdt3g"
	}],
	["circle", {
		cx: "7.5",
		cy: "4.5",
		r: "2.5",
		key: "637s54"
	}]
]), li = m("bug-off", [
	["path", {
		d: "M12 20v-8",
		key: "i3yub9"
	}],
	["path", {
		d: "M12.656 7H14a4 4 0 0 1 4 4v1.344",
		key: "vvueyn"
	}],
	["path", {
		d: "M14.12 3.88 16 2",
		key: "qol33r"
	}],
	["path", {
		d: "M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287",
		key: "1cu21y"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M21 5a4 4 0 0 1-3.55 3.97",
		key: "5cxbf6"
	}],
	["path", {
		d: "M22 13h-3.344",
		key: "qb08am"
	}],
	["path", {
		d: "M3 21a4 4 0 0 1 3.81-4",
		key: "1fjd4g"
	}],
	["path", {
		d: "M3 5a4 4 0 0 0 3.55 3.97",
		key: "1d7oge"
	}],
	["path", {
		d: "M6 13H2",
		key: "82j7cp"
	}],
	["path", {
		d: "m8 2 1.88 1.88",
		key: "fmnt4t"
	}],
	["path", {
		d: "M9.712 4.06A3 3 0 0 1 15 6v1.13",
		key: "1bvup6"
	}]
]), ui = m("bug-play", [
	["path", {
		d: "M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97",
		key: "1gnv52"
	}],
	["path", {
		d: "M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",
		key: "1weqy9"
	}],
	["path", {
		d: "M14.12 3.88 16 2",
		key: "qol33r"
	}],
	["path", {
		d: "M21 5a4 4 0 0 1-3.55 3.97",
		key: "5cxbf6"
	}],
	["path", {
		d: "M3 21a4 4 0 0 1 3.81-4",
		key: "1fjd4g"
	}],
	["path", {
		d: "M3 5a4 4 0 0 0 3.55 3.97",
		key: "1d7oge"
	}],
	["path", {
		d: "M6 13H2",
		key: "82j7cp"
	}],
	["path", {
		d: "m8 2 1.88 1.88",
		key: "fmnt4t"
	}],
	["path", {
		d: "M9 7.13V6a3 3 0 1 1 6 0v1.13",
		key: "1vgav8"
	}]
]), di = m("bug", [
	["path", {
		d: "M12 20v-9",
		key: "1qisl0"
	}],
	["path", {
		d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",
		key: "uouzyp"
	}],
	["path", {
		d: "M14.12 3.88 16 2",
		key: "qol33r"
	}],
	["path", {
		d: "M21 21a4 4 0 0 0-3.81-4",
		key: "1b0z45"
	}],
	["path", {
		d: "M21 5a4 4 0 0 1-3.55 3.97",
		key: "5cxbf6"
	}],
	["path", {
		d: "M22 13h-4",
		key: "1jl80f"
	}],
	["path", {
		d: "M3 21a4 4 0 0 1 3.81-4",
		key: "1fjd4g"
	}],
	["path", {
		d: "M3 5a4 4 0 0 0 3.55 3.97",
		key: "1d7oge"
	}],
	["path", {
		d: "M6 13H2",
		key: "82j7cp"
	}],
	["path", {
		d: "m8 2 1.88 1.88",
		key: "fmnt4t"
	}],
	["path", {
		d: "M9 7.13V6a3 3 0 1 1 6 0v1.13",
		key: "1vgav8"
	}]
]), fi = m("building-2", [
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}],
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
		key: "secmi2"
	}],
	["path", {
		d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
		key: "16ra0t"
	}]
]), pi = m("building", [
	["path", {
		d: "M12 10h.01",
		key: "1nrarc"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M12 6h.01",
		key: "1vi96p"
	}],
	["path", {
		d: "M16 10h.01",
		key: "1m94wz"
	}],
	["path", {
		d: "M16 14h.01",
		key: "1gbofw"
	}],
	["path", {
		d: "M16 6h.01",
		key: "1x0f13"
	}],
	["path", {
		d: "M8 10h.01",
		key: "19clt8"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M8 6h.01",
		key: "1dz90k"
	}],
	["path", {
		d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",
		key: "cabbwy"
	}],
	["rect", {
		x: "4",
		y: "2",
		width: "16",
		height: "20",
		rx: "2",
		key: "1uxh74"
	}]
]), mi = m("bus-front", [
	["path", {
		d: "M4 6 2 7",
		key: "1mqr15"
	}],
	["path", {
		d: "M10 6h4",
		key: "1itunk"
	}],
	["path", {
		d: "m22 7-2-1",
		key: "1umjhc"
	}],
	["rect", {
		width: "16",
		height: "16",
		x: "4",
		y: "3",
		rx: "2",
		key: "1wxw4b"
	}],
	["path", {
		d: "M4 11h16",
		key: "mpoxn0"
	}],
	["path", {
		d: "M8 15h.01",
		key: "a7atzg"
	}],
	["path", {
		d: "M16 15h.01",
		key: "rnfrdf"
	}],
	["path", {
		d: "M6 19v2",
		key: "1loha6"
	}],
	["path", {
		d: "M18 21v-2",
		key: "sqyl04"
	}]
]), hi = m("bus", [
	["path", {
		d: "M8 6v6",
		key: "18i7km"
	}],
	["path", {
		d: "M15 6v6",
		key: "1sg6z9"
	}],
	["path", {
		d: "M2 12h19.6",
		key: "de5uta"
	}],
	["path", {
		d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
		key: "1wwztk"
	}],
	["circle", {
		cx: "7",
		cy: "18",
		r: "2",
		key: "19iecd"
	}],
	["path", {
		d: "M9 18h5",
		key: "lrx6i"
	}],
	["circle", {
		cx: "16",
		cy: "18",
		r: "2",
		key: "1v4tcr"
	}]
]), gi = m("cable-car", [
	["path", {
		d: "M10 3h.01",
		key: "lbucoy"
	}],
	["path", {
		d: "M14 2h.01",
		key: "1k8aa1"
	}],
	["path", {
		d: "m2 9 20-5",
		key: "1kz0j5"
	}],
	["path", {
		d: "M12 12V6.5",
		key: "1vbrij"
	}],
	["rect", {
		width: "16",
		height: "10",
		x: "4",
		y: "12",
		rx: "3",
		key: "if91er"
	}],
	["path", {
		d: "M9 12v5",
		key: "3anwtq"
	}],
	["path", {
		d: "M15 12v5",
		key: "5xh3zn"
	}],
	["path", {
		d: "M4 17h16",
		key: "g4d7ey"
	}]
]), _i = m("cable", [
	["path", {
		d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",
		key: "trhst0"
	}],
	["path", {
		d: "M17 21v-2",
		key: "ds4u3f"
	}],
	["path", {
		d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",
		key: "1mo9zo"
	}],
	["path", {
		d: "M21 21v-2",
		key: "eo0ou"
	}],
	["path", {
		d: "M3 5V3",
		key: "1k5hjh"
	}],
	["path", {
		d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",
		key: "1dd30t"
	}],
	["path", {
		d: "M7 5V3",
		key: "1t1388"
	}]
]), vi = m("cake-slice", [
	["path", {
		d: "M16 13H3",
		key: "1wpj08"
	}],
	["path", {
		d: "M16 17H3",
		key: "3lvfcd"
	}],
	["path", {
		d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6",
		key: "1gmhf7"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "2",
		key: "1305pl"
	}]
]), yi = m("cake", [
	["path", {
		d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",
		key: "1w3rig"
	}],
	["path", {
		d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
		key: "n2jgmb"
	}],
	["path", {
		d: "M2 21h20",
		key: "1nyx9w"
	}],
	["path", {
		d: "M7 8v3",
		key: "1qtyvj"
	}],
	["path", {
		d: "M12 8v3",
		key: "hwp4zt"
	}],
	["path", {
		d: "M17 8v3",
		key: "1i6e5u"
	}],
	["path", {
		d: "M7 4h.01",
		key: "1bh4kh"
	}],
	["path", {
		d: "M12 4h.01",
		key: "1ujb9j"
	}],
	["path", {
		d: "M17 4h.01",
		key: "1upcoc"
	}]
]), bi = m("calculator", [
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "6",
		y2: "6",
		key: "x4nwl0"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "14",
		y2: "18",
		key: "wjye3r"
	}],
	["path", {
		d: "M16 10h.01",
		key: "1m94wz"
	}],
	["path", {
		d: "M12 10h.01",
		key: "1nrarc"
	}],
	["path", {
		d: "M8 10h.01",
		key: "19clt8"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}]
]), xi = m("calendar-1", [
	["path", {
		d: "M11 13h1v4",
		key: "10p4bv"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), Si = m("calendar-arrow-up", [
	["path", {
		d: "m14 17 4-4 4 4",
		key: "1qa3u6"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M18 21v-8",
		key: "1ao88k"
	}],
	["path", {
		d: "M21 10.343V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h9",
		key: "185mot"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), Ci = m("calendar-arrow-down", [
	["path", {
		d: "m14 17 4 4 4-4",
		key: "17qdjf"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M18 13v8",
		key: "1a00n0"
	}],
	["path", {
		d: "M21 10.354V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.343",
		key: "1qsorh"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), wi = m("calendar-check-2", [
	["path", {
		d: "M 19 3 L 5 3",
		key: "1xn3iy"
	}],
	["path", {
		d: "M 21 13 L 21 5",
		key: "102s58"
	}],
	["path", {
		d: "M 21 5 A2 2 0 0 0 19 3",
		key: "1xylja"
	}],
	["path", {
		d: "M 3 19 A2 2 0 0 0 5 21",
		key: "19jxbv"
	}],
	["path", {
		d: "M 3 5 L 3 19",
		key: "1yylhw"
	}],
	["path", {
		d: "M 5 3 A2 2 0 0 0 3 5",
		key: "164twa"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M5 21 L12.5 21",
		key: "1n38e0"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), Ti = m("calendar-check", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "m9 15 2 2 4-4",
		key: "1grp1n"
	}]
]), Ei = m("calendar-clock", [
	["path", {
		d: "M16 14v2.2l1.6 1",
		key: "fo4ql5"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",
		key: "7hb8p4"
	}],
	["path", {
		d: "M3 9h5.859",
		key: "numkqi"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["circle", {
		cx: "16",
		cy: "16",
		r: "6",
		key: "qoo3c4"
	}]
]), Di = m("calendar-cog", [
	["path", {
		d: "m15.228 16.852-.923-.383",
		key: "npixar"
	}],
	["path", {
		d: "m15.228 19.148-.923.383",
		key: "51cr3n"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "m16.47 14.305.382.923",
		key: "obybxd"
	}],
	["path", {
		d: "m16.852 20.772-.383.924",
		key: "dpfhf9"
	}],
	["path", {
		d: "m19.148 15.228.383-.923",
		key: "1reyyz"
	}],
	["path", {
		d: "m19.53 21.696-.382-.924",
		key: "1goivc"
	}],
	["path", {
		d: "m20.773 16.852.924-.383",
		key: "ybmb4k"
	}],
	["path", {
		d: "m20.773 19.148.924.383",
		key: "1c2d3p"
	}],
	["path", {
		d: "M21 10.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.5",
		key: "1e6z1y"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}]
]), Oi = m("calendar-days", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 13h.01",
		key: "1sbv64"
	}],
	["path", {
		d: "M12 13h.01",
		key: "y0uutt"
	}],
	["path", {
		d: "M16 13h.01",
		key: "wip0gl"
	}],
	["path", {
		d: "M8 17h.01",
		key: "p3bg7i"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}],
	["path", {
		d: "M16 17h.01",
		key: "ql8jdd"
	}]
]), ki = m("calendar-fold", [
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10v-5a1 1 0 011-1za2.4 2.4 0 01-.706 1.706l-3.588 3.588A2.4 2.4 0 0115 21",
		key: "4uit17"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), Ai = m("calendar-minus-2", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M10 15h4",
		key: "192ueg"
	}]
]), ji = m("calendar-minus", [
	["path", {
		d: "M16 18h6",
		key: "987eiv"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M21 14V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3",
		key: "gcu0od"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), Mi = m("calendar-heart", [
	["path", {
		d: "M12.127 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.125",
		key: "1fsxpc"
	}],
	["path", {
		d: "M14.62 17.8A2.25 2.25 0 1118 14.836a2.25 2.25 0 113.38 2.966l-2.626 2.856a.998.998 0 01-1.507 0z",
		key: "1gk3ue"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), Ni = m("calendar-off", [
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M21 9h-5.5",
		key: "1g344v"
	}],
	["path", {
		d: "M3 9h6",
		key: "1q2djq"
	}],
	["path", {
		d: "M3.586 3.586A2 2 0 003 5v14a2 2 0 002 2h14a2 2 0 001.414-.586",
		key: "1g7ltu"
	}],
	["path", {
		d: "M8.656 3H19a2 2 0 012 2v10.344",
		key: "1bwpd1"
	}]
]), Pi = m("calendar-plus-2", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M10 15h4",
		key: "192ueg"
	}],
	["path", {
		d: "M12 13v4",
		key: "1il4po"
	}]
]), Fi = m("calendar-plus", [
	["path", {
		d: "M16 18h6",
		key: "987eiv"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M19 15v6",
		key: "10aioa"
	}],
	["path", {
		d: "M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3",
		key: "jgwkxf"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), Ii = m("calendar-range", [
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M17 13h-6",
		key: "1qbiup"
	}],
	["path", {
		d: "M13 17H7",
		key: "1x38vv"
	}],
	["path", {
		d: "M7 13h.01",
		key: "1vezk1"
	}],
	["path", {
		d: "M17 17h.01",
		key: "1sd3ek"
	}]
]), Li = m("calendar-search", [
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M21 10.69V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.25",
		key: "h6gkkz"
	}],
	["path", {
		d: "m22 21-1.875-1.875",
		key: "1dzjql"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["circle", {
		cx: "18",
		cy: "17",
		r: "3",
		key: "1hty4x"
	}]
]), Ri = m("calendar-sync", [
	["path", {
		d: "M11 10v4h4",
		key: "172dkj"
	}],
	["path", {
		d: "m11 14 1.535-1.605a5 5 0 018 1.5",
		key: "jekqcd"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "m21 18-1.535 1.605a5 5 0 01-8-1.5",
		key: "n107hu"
	}],
	["path", {
		d: "M21 22v-4h-4",
		key: "hrummi"
	}],
	["path", {
		d: "M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517",
		key: "yafrba"
	}],
	["path", {
		d: "M3 9h4",
		key: "rnfnj5"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), zi = m("calendar-x-2", [
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "m17 16 5 5",
		key: "1a37d9"
	}],
	["path", {
		d: "m17 21 5-5",
		key: "1b797a"
	}],
	["path", {
		d: "M21 12V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8",
		key: "14ws7l"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}]
]), Bi = m("calendar-x", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "m14 13-4 4",
		key: "1gib57"
	}],
	["path", {
		d: "m10 13 4 4",
		key: "153uiq"
	}]
]), Vi = m("calendars", [
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2",
		key: "j6srht"
	}],
	["path", {
		d: "M18 2v2",
		key: "1kh14s"
	}],
	["path", {
		d: "M2 13h2",
		key: "13gyu8"
	}],
	["path", {
		d: "M8 8h14",
		key: "12jxz2"
	}],
	["rect", {
		x: "8",
		y: "3",
		width: "14",
		height: "14",
		rx: "2",
		key: "nsru6w"
	}]
]), Hi = m("calendar", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}]
]), Ui = m("camera-off", [
	["path", {
		d: "M14.564 14.558a3 3 0 1 1-4.122-4.121",
		key: "1rnrzw"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175",
		key: "1x3arw"
	}],
	["path", {
		d: "M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344",
		key: "1i84u0"
	}]
]), Wi = m("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]), Gi = m("candy-cane", [
	["path", {
		d: "m10.8 5 2.111 4.223",
		key: "11kb8w"
	}],
	["path", {
		d: "M17.75 7 15 2.1",
		key: "12x7e8"
	}],
	["path", {
		d: "m4.874 14.647 2.12 4.24",
		key: "ccpt4b"
	}],
	["path", {
		d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z",
		key: "u5e8z4"
	}],
	["path", {
		d: "m7.906 9.712 2.005 4.411",
		key: "1k0qph"
	}]
]), Ki = m("candy-off", [
	["path", {
		d: "M10 10v7.9",
		key: "m8g9tt"
	}],
	["path", {
		d: "M11.802 6.145a5 5 0 0 1 6.053 6.053",
		key: "dn87i3"
	}],
	["path", {
		d: "M14 6.1v2.243",
		key: "1kzysn"
	}],
	["path", {
		d: "m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965",
		key: "3sxy18"
	}],
	["path", {
		d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",
		key: "gpb6xx"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",
		key: "qexcha"
	}]
]), qi = m("candy", [
	["path", {
		d: "M10 7v10.9",
		key: "1gynux"
	}],
	["path", {
		d: "M14 6.1V17",
		key: "116kdf"
	}],
	["path", {
		d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",
		key: "gpb6xx"
	}],
	["path", {
		d: "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",
		key: "1tsln4"
	}],
	["path", {
		d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",
		key: "qexcha"
	}]
]), Ji = m("cannabis-off", [
	["path", {
		d: "M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5",
		key: "1bqfb7"
	}],
	["path", {
		d: "M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9",
		key: "1p520n"
	}],
	["path", {
		d: "M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684",
		key: "q2itvb"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907",
		key: "j9amvs"
	}],
	["path", {
		d: "M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3",
		key: "8gmd5g"
	}]
]), Yi = m("cannabis", [["path", {
	d: "M12 22v-4",
	key: "1utk9m"
}], ["path", {
	d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",
	key: "1mezod"
}]]), Xi = m("captions-off", [
	["path", {
		d: "M10.5 5H19a2 2 0 0 1 2 2v8.5",
		key: "jqtk4d"
	}],
	["path", {
		d: "M17 11h-.5",
		key: "1961ue"
	}],
	["path", {
		d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",
		key: "1keqsi"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M7 11h4",
		key: "1o1z6v"
	}],
	["path", {
		d: "M7 15h2.5",
		key: "1ina1g"
	}]
]), Zi = m("captions", [["rect", {
	width: "18",
	height: "14",
	x: "3",
	y: "5",
	rx: "2",
	ry: "2",
	key: "12ruh7"
}], ["path", {
	d: "M7 15h4M15 15h2M7 11h2M13 11h4",
	key: "1ueiar"
}]]), Qi = m("car-front", [
	["path", {
		d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",
		key: "1imjwt"
	}],
	["path", {
		d: "M7 14h.01",
		key: "1qa3f1"
	}],
	["path", {
		d: "M17 14h.01",
		key: "7oqj8z"
	}],
	["rect", {
		width: "18",
		height: "8",
		x: "3",
		y: "10",
		rx: "2",
		key: "a7itu8"
	}],
	["path", {
		d: "M5 18v2",
		key: "ppbyun"
	}],
	["path", {
		d: "M19 18v2",
		key: "gy7782"
	}]
]), $i = m("car-taxi-front", [
	["path", {
		d: "M10 2h4",
		key: "n1abiw"
	}],
	["path", {
		d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",
		key: "1imjwt"
	}],
	["path", {
		d: "M7 14h.01",
		key: "1qa3f1"
	}],
	["path", {
		d: "M17 14h.01",
		key: "7oqj8z"
	}],
	["rect", {
		width: "18",
		height: "8",
		x: "3",
		y: "10",
		rx: "2",
		key: "a7itu8"
	}],
	["path", {
		d: "M5 18v2",
		key: "ppbyun"
	}],
	["path", {
		d: "M19 18v2",
		key: "gy7782"
	}]
]), ea = m("car", [
	["path", {
		d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
		key: "5owen"
	}],
	["circle", {
		cx: "7",
		cy: "17",
		r: "2",
		key: "u2ysq9"
	}],
	["path", {
		d: "M9 17h6",
		key: "r8uit2"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "2",
		key: "axvx0g"
	}]
]), ta = m("caravan", [
	["path", {
		d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",
		key: "19jm3t"
	}],
	["path", {
		d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",
		key: "13hakp"
	}],
	["path", {
		d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",
		key: "1crci8"
	}],
	["circle", {
		cx: "8",
		cy: "19",
		r: "2",
		key: "t8fc5s"
	}]
]), na = m("card-sim", [
	["path", {
		d: "M12 14v4",
		key: "1thi36"
	}],
	["path", {
		d: "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
		key: "1o66bk"
	}],
	["path", {
		d: "M8 14h8",
		key: "1fgep2"
	}],
	["rect", {
		x: "8",
		y: "10",
		width: "8",
		height: "8",
		rx: "1",
		key: "1aonk6"
	}]
]), ra = m("carrot", [
	["path", {
		d: "M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3",
		key: "1ta62j"
	}],
	["path", {
		d: "M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7",
		key: "1svf7i"
	}],
	["path", {
		d: "m8 15-2.58-2.58",
		key: "7t238r"
	}]
]), ia = m("case-lower", [
	["path", {
		d: "M10 9v7",
		key: "ylp826"
	}],
	["path", {
		d: "M14 6v10",
		key: "1jy4vg"
	}],
	["circle", {
		cx: "17.5",
		cy: "12.5",
		r: "3.5",
		key: "1a9481"
	}],
	["circle", {
		cx: "6.5",
		cy: "12.5",
		r: "3.5",
		key: "2jlv1r"
	}]
]), aa = m("case-sensitive", [
	["path", {
		d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",
		key: "d5nyq2"
	}],
	["path", {
		d: "M22 9v7",
		key: "pvm9v3"
	}],
	["path", {
		d: "M3.304 13h6.392",
		key: "1q3zxz"
	}],
	["circle", {
		cx: "18.5",
		cy: "12.5",
		r: "3.5",
		key: "z97x68"
	}]
]), oa = m("case-upper", [
	["path", {
		d: "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5",
		key: "nxs35"
	}],
	["path", {
		d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",
		key: "d5nyq2"
	}],
	["path", {
		d: "M3.304 13h6.392",
		key: "1q3zxz"
	}]
]), sa = m("cassette-tape", [
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}],
	["circle", {
		cx: "8",
		cy: "10",
		r: "2",
		key: "1xl4ub"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["circle", {
		cx: "16",
		cy: "10",
		r: "2",
		key: "r14t7q"
	}],
	["path", {
		d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",
		key: "l01ucn"
	}]
]), ca = m("cast", [
	["path", {
		d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
		key: "3zrzxg"
	}],
	["path", {
		d: "M2 12a9 9 0 0 1 8 8",
		key: "g6cvee"
	}],
	["path", {
		d: "M2 16a5 5 0 0 1 4 4",
		key: "1y1dii"
	}],
	["line", {
		x1: "2",
		x2: "2.01",
		y1: "20",
		y2: "20",
		key: "xu2jvo"
	}]
]), la = m("castle", [
	["path", {
		d: "M10 5V3",
		key: "1y54qe"
	}],
	["path", {
		d: "M14 5V3",
		key: "m6isi"
	}],
	["path", {
		d: "M15 21v-3a3 3 0 0 0-6 0v3",
		key: "lbp5hj"
	}],
	["path", {
		d: "M18 3v8",
		key: "2ollhf"
	}],
	["path", {
		d: "M18 5H6",
		key: "98imr9"
	}],
	["path", {
		d: "M22 11H2",
		key: "1lmjae"
	}],
	["path", {
		d: "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9",
		key: "1rly83"
	}],
	["path", {
		d: "M6 3v8",
		key: "csox7g"
	}]
]), ua = m("cat", [
	["path", {
		d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
		key: "x6xyqk"
	}],
	["path", {
		d: "M8 14v.5",
		key: "1nzgdb"
	}],
	["path", {
		d: "M16 14v.5",
		key: "1lajdz"
	}],
	["path", {
		d: "M11.25 16.25h1.5L12 17l-.75-.75Z",
		key: "12kq1m"
	}]
]), da = m("cctv-off", [
	["path", {
		d: "m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448",
		key: "e75roo"
	}],
	["path", {
		d: "m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037",
		key: "1h9o5r"
	}],
	["path", {
		d: "M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902",
		key: "1askrb"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M2 21v-4",
		key: "l40lih"
	}],
	["path", {
		d: "M7 9h.01",
		key: "19b3jx"
	}]
]), fa = m("cctv", [
	["path", {
		d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",
		key: "ir91b5"
	}],
	["path", {
		d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",
		key: "jlp8i1"
	}],
	["path", {
		d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",
		key: "19bib8"
	}],
	["path", {
		d: "M2 21v-4",
		key: "l40lih"
	}],
	["path", {
		d: "M7 9h.01",
		key: "19b3jx"
	}]
]), pa = m("chart-area", [["path", {
	d: "M3 3v16a2 2 0 0 0 2 2h16",
	key: "c24i48"
}], ["path", {
	d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",
	key: "q0gr47"
}]]), ma = m("chart-bar-big", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["rect", {
		x: "7",
		y: "13",
		width: "9",
		height: "4",
		rx: "1",
		key: "1iip1u"
	}],
	["rect", {
		x: "7",
		y: "5",
		width: "12",
		height: "4",
		rx: "1",
		key: "1anskk"
	}]
]), ha = m("chart-bar-increasing", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M7 11h8",
		key: "1feolt"
	}],
	["path", {
		d: "M7 16h12",
		key: "wsnu98"
	}],
	["path", {
		d: "M7 6h3",
		key: "w9rmul"
	}]
]), ga = m("chart-bar-decreasing", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M7 11h8",
		key: "1feolt"
	}],
	["path", {
		d: "M7 16h3",
		key: "ur6vzw"
	}],
	["path", {
		d: "M7 6h12",
		key: "sz5b0d"
	}]
]), _a = m("chart-bar-stacked", [
	["path", {
		d: "M11 13v4",
		key: "vyy2rb"
	}],
	["path", {
		d: "M15 5v4",
		key: "1gx88a"
	}],
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["rect", {
		x: "7",
		y: "13",
		width: "9",
		height: "4",
		rx: "1",
		key: "1iip1u"
	}],
	["rect", {
		x: "7",
		y: "5",
		width: "12",
		height: "4",
		rx: "1",
		key: "1anskk"
	}]
]), va = m("chart-bar", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M7 16h8",
		key: "srdodz"
	}],
	["path", {
		d: "M7 11h12",
		key: "127s9w"
	}],
	["path", {
		d: "M7 6h3",
		key: "w9rmul"
	}]
]), ya = m("chart-candlestick", [
	["path", {
		d: "M9 5v4",
		key: "14uxtq"
	}],
	["rect", {
		width: "4",
		height: "6",
		x: "7",
		y: "9",
		rx: "1",
		key: "f4fvz0"
	}],
	["path", {
		d: "M9 15v2",
		key: "r5rk32"
	}],
	["path", {
		d: "M17 3v2",
		key: "1l2re6"
	}],
	["rect", {
		width: "4",
		height: "8",
		x: "15",
		y: "5",
		rx: "1",
		key: "z38je5"
	}],
	["path", {
		d: "M17 13v3",
		key: "5l0wba"
	}],
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}]
]), ba = m("chart-column-big", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["rect", {
		x: "15",
		y: "5",
		width: "4",
		height: "12",
		rx: "1",
		key: "q8uenq"
	}],
	["rect", {
		x: "7",
		y: "8",
		width: "4",
		height: "9",
		rx: "1",
		key: "sr5ea"
	}]
]), xa = m("chart-column-decreasing", [
	["path", {
		d: "M13 17V9",
		key: "1fwyjl"
	}],
	["path", {
		d: "M18 17v-3",
		key: "1sqioe"
	}],
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M8 17V5",
		key: "1wzmnc"
	}]
]), Sa = m("chart-column-increasing", [
	["path", {
		d: "M13 17V9",
		key: "1fwyjl"
	}],
	["path", {
		d: "M18 17V5",
		key: "sfb6ij"
	}],
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M8 17v-3",
		key: "17ska0"
	}]
]), Ca = m("chart-column-stacked", [
	["path", {
		d: "M11 13H7",
		key: "t0o9gq"
	}],
	["path", {
		d: "M19 9h-4",
		key: "rera1j"
	}],
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["rect", {
		x: "15",
		y: "5",
		width: "4",
		height: "12",
		rx: "1",
		key: "q8uenq"
	}],
	["rect", {
		x: "7",
		y: "8",
		width: "4",
		height: "9",
		rx: "1",
		key: "sr5ea"
	}]
]), wa = m("chart-column", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M18 17V9",
		key: "2bz60n"
	}],
	["path", {
		d: "M13 17V5",
		key: "1frdt8"
	}],
	["path", {
		d: "M8 17v-3",
		key: "17ska0"
	}]
]), Ta = m("chart-gantt", [
	["path", {
		d: "M10 6h8",
		key: "zvc2xc"
	}],
	["path", {
		d: "M12 16h6",
		key: "yi5mkt"
	}],
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M8 11h7",
		key: "wz2hg0"
	}]
]), Ea = m("chart-line", [["path", {
	d: "M3 3v16a2 2 0 0 0 2 2h16",
	key: "c24i48"
}], ["path", {
	d: "m19 9-5 5-4-4-3 3",
	key: "2osh9i"
}]]), Da = m("chart-network", [
	["path", {
		d: "m13.11 7.664 1.78 2.672",
		key: "go2gg9"
	}],
	["path", {
		d: "m14.162 12.788-3.324 1.424",
		key: "11x848"
	}],
	["path", {
		d: "m20 4-6.06 1.515",
		key: "1wxxh7"
	}],
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["circle", {
		cx: "12",
		cy: "6",
		r: "2",
		key: "1jj5th"
	}],
	["circle", {
		cx: "16",
		cy: "12",
		r: "2",
		key: "4ma0v8"
	}],
	["circle", {
		cx: "9",
		cy: "15",
		r: "2",
		key: "lf2ghp"
	}]
]), Oa = m("chart-no-axes-column-decreasing", [
	["path", {
		d: "M5 21V3",
		key: "clc1r8"
	}],
	["path", {
		d: "M12 21V9",
		key: "uvy0l4"
	}],
	["path", {
		d: "M19 21v-6",
		key: "tkawy9"
	}]
]), ka = m("chart-no-axes-column-increasing", [
	["path", {
		d: "M5 21v-6",
		key: "1hz6c0"
	}],
	["path", {
		d: "M12 21V9",
		key: "uvy0l4"
	}],
	["path", {
		d: "M19 21V3",
		key: "11j9sm"
	}]
]), Aa = m("chart-no-axes-column", [
	["path", {
		d: "M5 21v-6",
		key: "1hz6c0"
	}],
	["path", {
		d: "M12 21V3",
		key: "1lcnhd"
	}],
	["path", {
		d: "M19 21V9",
		key: "unv183"
	}]
]), ja = m("chart-no-axes-combined", [
	["path", {
		d: "M12 16v5",
		key: "zza2cw"
	}],
	["path", {
		d: "M16 14.639V21",
		key: "1s85h0"
	}],
	["path", {
		d: "M20 10.656V21",
		key: "q45596"
	}],
	["path", {
		d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",
		key: "1fw8x9"
	}],
	["path", {
		d: "M4 18.463V21",
		key: "1otddq"
	}],
	["path", {
		d: "M8 14.656V21",
		key: "1t2idw"
	}]
]), Ma = m("chart-no-axes-gantt", [
	["path", {
		d: "M6 5h12",
		key: "fvfigv"
	}],
	["path", {
		d: "M4 12h10",
		key: "oujl3d"
	}],
	["path", {
		d: "M12 19h8",
		key: "baeox8"
	}]
]), Na = m("chart-pie", [["path", {
	d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
	key: "pzmjnu"
}], ["path", {
	d: "M21.21 15.89A10 10 0 1 1 8 2.83",
	key: "k2fpak"
}]]), Pa = m("chart-scatter", [
	["circle", {
		cx: "7.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "kqv944"
	}],
	["circle", {
		cx: "18.5",
		cy: "5.5",
		r: ".5",
		fill: "currentColor",
		key: "lysivs"
	}],
	["circle", {
		cx: "11.5",
		cy: "11.5",
		r: ".5",
		fill: "currentColor",
		key: "byv1b8"
	}],
	["circle", {
		cx: "7.5",
		cy: "16.5",
		r: ".5",
		fill: "currentColor",
		key: "nkw3mc"
	}],
	["circle", {
		cx: "17.5",
		cy: "14.5",
		r: ".5",
		fill: "currentColor",
		key: "1gjh6j"
	}],
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}]
]), Fa = m("chart-spline", [["path", {
	d: "M3 3v16a2 2 0 0 0 2 2h16",
	key: "c24i48"
}], ["path", {
	d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",
	key: "lw07rv"
}]]), Ia = m("check-check", [["path", {
	d: "M18 6 7 17l-5-5",
	key: "116fxf"
}], ["path", {
	d: "m22 10-7.5 7.5L13 16",
	key: "ke71qq"
}]]), La = m("check-line", [
	["path", {
		d: "M20 4L9 15",
		key: "1qkx8z"
	}],
	["path", {
		d: "M21 19L3 19",
		key: "100sma"
	}],
	["path", {
		d: "M9 15L4 10",
		key: "9zxff7"
	}]
]), Ra = m("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), za = m("chef-hat", [["path", {
	d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
	key: "1qvrer"
}], ["path", {
	d: "M6 17h12",
	key: "1jwigz"
}]]), Ba = m("cherry", [
	["path", {
		d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
		key: "cvxqlc"
	}],
	["path", {
		d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
		key: "1ostrc"
	}],
	["path", {
		d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",
		key: "hqx58h"
	}],
	["path", {
		d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",
		key: "eykp1o"
	}]
]), Va = m("chess-bishop", [
	["path", {
		d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",
		key: "b89hwq"
	}],
	["path", {
		d: "M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18",
		key: "8jdkhx"
	}],
	["path", {
		d: "m16 7-2.5 2.5",
		key: "1jq90w"
	}],
	["path", {
		d: "M9 2h6",
		key: "1jrp98"
	}]
]), Ha = m("chess-knight", [
	["path", {
		d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",
		key: "b89hwq"
	}],
	["path", {
		d: "M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456",
		key: "axbnlq"
	}],
	["path", {
		d: "m15 5 1.425-1.425",
		key: "15xz8w"
	}],
	["path", {
		d: "m17 8 1.53-1.53",
		key: "15zhqh"
	}],
	["path", {
		d: "M9.713 12.185 7 18",
		key: "1ocm0l"
	}]
]), Ua = m("chess-king", [
	["path", {
		d: "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z",
		key: "mqzwx6"
	}],
	["path", {
		d: "m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1",
		key: "1gdt1g"
	}],
	["path", {
		d: "M10 4h4",
		key: "1xpv9s"
	}],
	["path", {
		d: "M12 2v6.818",
		key: "b17a49"
	}]
]), Wa = m("chess-pawn", [
	["path", {
		d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",
		key: "b89hwq"
	}],
	["path", {
		d: "m14.5 10 1.5 8",
		key: "cim3qy"
	}],
	["path", {
		d: "M7 10h10",
		key: "1101jm"
	}],
	["path", {
		d: "m8 18 1.5-8",
		key: "ja3yjd"
	}],
	["circle", {
		cx: "12",
		cy: "6",
		r: "4",
		key: "1frrej"
	}]
]), Ga = m("chess-queen", [
	["path", {
		d: "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z",
		key: "mqzwx6"
	}],
	["path", {
		d: "m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402",
		key: "1js4gl"
	}],
	["path", {
		d: "m20 9-3 9",
		key: "r75r3f"
	}],
	["path", {
		d: "m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34",
		key: "1joj19"
	}],
	["path", {
		d: "M7 18 4 9",
		key: "1mfzj8"
	}],
	["circle", {
		cx: "12",
		cy: "4",
		r: "2",
		key: "muu5ef"
	}],
	["circle", {
		cx: "20",
		cy: "7",
		r: "2",
		key: "9w7p1x"
	}],
	["circle", {
		cx: "4",
		cy: "7",
		r: "2",
		key: "1d9wy8"
	}]
]), Ka = m("chess-rook", [
	["path", {
		d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",
		key: "b89hwq"
	}],
	["path", {
		d: "M10 2v2",
		key: "7u0qdc"
	}],
	["path", {
		d: "M14 2v2",
		key: "6buw04"
	}],
	["path", {
		d: "m17 18-1-9",
		key: "10nd7q"
	}],
	["path", {
		d: "M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2",
		key: "uxf4yx"
	}],
	["path", {
		d: "M6 4h12",
		key: "1x2ag7"
	}],
	["path", {
		d: "m7 18 1-9",
		key: "1si9vq"
	}]
]), qa = m("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Ja = m("chevron-first", [["path", {
	d: "m17 18-6-6 6-6",
	key: "1yerx2"
}], ["path", {
	d: "M7 6v12",
	key: "1p53r6"
}]]), Ya = m("chevron-last", [["path", {
	d: "m7 18 6-6-6-6",
	key: "lwmzdw"
}], ["path", {
	d: "M17 6v12",
	key: "1o0aio"
}]]), Xa = m("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), Za = m("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Qa = m("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), $a = m("chevrons-down-up", [["path", {
	d: "m7 20 5-5 5 5",
	key: "13a0gw"
}], ["path", {
	d: "m7 4 5 5 5-5",
	key: "1kwcof"
}]]), eo = m("chevrons-down", [["path", {
	d: "m7 6 5 5 5-5",
	key: "1lc07p"
}], ["path", {
	d: "m7 13 5 5 5-5",
	key: "1d48rs"
}]]), to = m("chevrons-left-right-ellipsis", [
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M16 12h.01",
		key: "1l6xoz"
	}],
	["path", {
		d: "m17 7 5 5-5 5",
		key: "1xlxn0"
	}],
	["path", {
		d: "m7 7-5 5 5 5",
		key: "19njba"
	}],
	["path", {
		d: "M8 12h.01",
		key: "czm47f"
	}]
]), no = m("chevrons-left-right", [["path", {
	d: "m9 7-5 5 5 5",
	key: "j5w590"
}], ["path", {
	d: "m15 7 5 5-5 5",
	key: "1bl6da"
}]]), ro = m("chevrons-left", [["path", {
	d: "m11 17-5-5 5-5",
	key: "13zhaf"
}], ["path", {
	d: "m18 17-5-5 5-5",
	key: "h8a8et"
}]]), io = m("chevrons-right-left", [["path", {
	d: "m20 17-5-5 5-5",
	key: "30x0n2"
}], ["path", {
	d: "m4 17 5-5-5-5",
	key: "16spf4"
}]]), ao = m("chevrons-right", [["path", {
	d: "m6 17 5-5-5-5",
	key: "xnjwq"
}], ["path", {
	d: "m13 17 5-5-5-5",
	key: "17xmmf"
}]]), oo = m("chevrons-up-down", [["path", {
	d: "m7 15 5 5 5-5",
	key: "1hf1tw"
}], ["path", {
	d: "m7 9 5-5 5 5",
	key: "sgt6xg"
}]]), so = m("chevrons-up", [["path", {
	d: "m17 11-5-5-5 5",
	key: "e8nh98"
}], ["path", {
	d: "m17 18-5-5-5 5",
	key: "2avn1x"
}]]), co = m("church", [
	["path", {
		d: "M10 9h4",
		key: "u4k05v"
	}],
	["path", {
		d: "M12 7v5",
		key: "ma6bk"
	}],
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9",
		key: "flvdwo"
	}],
	["path", {
		d: "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14",
		key: "a5i0n2"
	}]
]), lo = m("cigarette", [
	["path", {
		d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14",
		key: "1mb5g1"
	}],
	["path", {
		d: "M18 8c0-2.5-2-2.5-2-5",
		key: "1il607"
	}],
	["path", {
		d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
		key: "1yl5r7"
	}],
	["path", {
		d: "M22 8c0-2.5-2-2.5-2-5",
		key: "1gah44"
	}],
	["path", {
		d: "M7 12v4",
		key: "jqww69"
	}]
]), uo = m("cigarette-off", [
	["path", {
		d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",
		key: "1gdiyg"
	}],
	["path", {
		d: "M18 8c0-2.5-2-2.5-2-5",
		key: "1il607"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",
		key: "166zjj"
	}],
	["path", {
		d: "M22 8c0-2.5-2-2.5-2-5",
		key: "1gah44"
	}],
	["path", {
		d: "M7 12v4",
		key: "jqww69"
	}]
]), fo = m("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]), po = m("circle-arrow-down", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}],
	["path", {
		d: "m8 12 4 4 4-4",
		key: "k98ssh"
	}]
]), mo = m("circle-arrow-left", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m12 8-4 4 4 4",
		key: "15vm53"
	}],
	["path", {
		d: "M16 12H8",
		key: "1fr5h0"
	}]
]), ho = m("circle-arrow-out-down-left", [
	["path", {
		d: "M2 12a10 10 0 1 1 10 10",
		key: "1yn6ov"
	}],
	["path", {
		d: "m2 22 10-10",
		key: "28ilpk"
	}],
	["path", {
		d: "M8 22H2v-6",
		key: "sulq54"
	}]
]), go = m("circle-arrow-out-down-right", [
	["path", {
		d: "M12 22a10 10 0 1 1 10-10",
		key: "130bv5"
	}],
	["path", {
		d: "M22 22 12 12",
		key: "131aw7"
	}],
	["path", {
		d: "M22 16v6h-6",
		key: "1gvm70"
	}]
]), _o = m("circle-arrow-out-up-left", [
	["path", {
		d: "M2 8V2h6",
		key: "hiwtdz"
	}],
	["path", {
		d: "m2 2 10 10",
		key: "1oh8rs"
	}],
	["path", {
		d: "M12 2A10 10 0 1 1 2 12",
		key: "rrk4fa"
	}]
]), vo = m("circle-arrow-out-up-right", [
	["path", {
		d: "M22 12A10 10 0 1 1 12 2",
		key: "1fm58d"
	}],
	["path", {
		d: "M22 2 12 12",
		key: "yg2myt"
	}],
	["path", {
		d: "M16 2h6v6",
		key: "zan5cs"
	}]
]), yo = m("circle-arrow-right", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m12 16 4-4-4-4",
		key: "1i9zcv"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}]
]), bo = m("circle-arrow-up", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m16 12-4-4-4 4",
		key: "177agl"
	}],
	["path", {
		d: "M12 16V8",
		key: "1sbj14"
	}]
]), xo = m("circle-check-big", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]), So = m("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), Co = m("circle-chevron-left", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m14 16-4-4 4-4",
	key: "ojs7w8"
}]]), wo = m("circle-chevron-down", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m16 10-4 4-4-4",
	key: "894hmk"
}]]), To = m("circle-chevron-right", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m10 8 4 4-4 4",
	key: "1wy4r4"
}]]), Eo = m("circle-chevron-up", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m8 14 4-4 4 4",
	key: "fy2ptz"
}]]), Do = m("circle-dashed", [
	["path", {
		d: "M10.1 2.182a10 10 0 0 1 3.8 0",
		key: "5ilxe3"
	}],
	["path", {
		d: "M13.9 21.818a10 10 0 0 1-3.8 0",
		key: "11zvb9"
	}],
	["path", {
		d: "M17.609 3.721a10 10 0 0 1 2.69 2.7",
		key: "1iw5b2"
	}],
	["path", {
		d: "M2.182 13.9a10 10 0 0 1 0-3.8",
		key: "c0bmvh"
	}],
	["path", {
		d: "M20.279 17.609a10 10 0 0 1-2.7 2.69",
		key: "1ruxm7"
	}],
	["path", {
		d: "M21.818 10.1a10 10 0 0 1 0 3.8",
		key: "qkgqxc"
	}],
	["path", {
		d: "M3.721 6.391a10 10 0 0 1 2.7-2.69",
		key: "1mcia2"
	}],
	["path", {
		d: "M6.391 20.279a10 10 0 0 1-2.69-2.7",
		key: "1fvljs"
	}]
]), Oo = m("circle-divide", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12",
		key: "1jonct"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "16",
		y2: "16",
		key: "aqc6ln"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "8",
		key: "1mkcni"
	}]
]), ko = m("circle-dollar-sign", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
		key: "1h4pet"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}]
]), Ao = m("circle-dot-dashed", [
	["path", {
		d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0",
		key: "1qdqn0"
	}],
	["path", {
		d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",
		key: "1bq7p6"
	}],
	["path", {
		d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8",
		key: "1rlaqf"
	}],
	["path", {
		d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",
		key: "1xk03u"
	}],
	["path", {
		d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0",
		key: "l7re25"
	}],
	["path", {
		d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",
		key: "1v18p6"
	}],
	["path", {
		d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8",
		key: "xdo6bj"
	}],
	["path", {
		d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",
		key: "1jjmaz"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}]
]), jo = m("circle-ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M17 12h.01",
		key: "1m0b6t"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M7 12h.01",
		key: "eqddd0"
	}]
]), Mo = m("circle-dot", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "1",
	key: "41hilf"
}]]), No = m("circle-equal", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M7 10h10",
		key: "1101jm"
	}],
	["path", {
		d: "M7 14h10",
		key: "1mhdw3"
	}]
]), Po = m("circle-euro", [
	["path", {
		d: "M15 9.4a4 4 0 1 0 0 5.2",
		key: "1makmb"
	}],
	["path", {
		d: "M7 12h5",
		key: "gblrwe"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), Fo = m("circle-fading-arrow-up", [
	["path", {
		d: "M12 2a10 10 0 0 1 7.38 16.75",
		key: "175t95"
	}],
	["path", {
		d: "m16 12-4-4-4 4",
		key: "177agl"
	}],
	["path", {
		d: "M12 16V8",
		key: "1sbj14"
	}],
	["path", {
		d: "M2.5 8.875a10 10 0 0 0-.5 3",
		key: "1vce0s"
	}],
	["path", {
		d: "M2.83 16a10 10 0 0 0 2.43 3.4",
		key: "o3fkw4"
	}],
	["path", {
		d: "M4.636 5.235a10 10 0 0 1 .891-.857",
		key: "1szpfk"
	}],
	["path", {
		d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
		key: "9yhvd4"
	}]
]), Io = m("circle-fading-plus", [
	["path", {
		d: "M12 2a10 10 0 0 1 7.38 16.75",
		key: "175t95"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}],
	["path", {
		d: "M16 12H8",
		key: "1fr5h0"
	}],
	["path", {
		d: "M2.5 8.875a10 10 0 0 0-.5 3",
		key: "1vce0s"
	}],
	["path", {
		d: "M2.83 16a10 10 0 0 0 2.43 3.4",
		key: "o3fkw4"
	}],
	["path", {
		d: "M4.636 5.235a10 10 0 0 1 .891-.857",
		key: "1szpfk"
	}],
	["path", {
		d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
		key: "9yhvd4"
	}]
]), Lo = m("circle-gauge", [
	["path", {
		d: "M15.6 2.7a10 10 0 1 0 5.7 5.7",
		key: "1e0p6d"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "M13.4 10.6 19 5",
		key: "1kr7tw"
	}]
]), Ro = m("circle-minus", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M8 12h8",
	key: "1wcyev"
}]]), zo = m("circle-off", [
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.35 2.69A10 10 0 0 1 21.3 15.65",
		key: "1pfsoa"
	}],
	["path", {
		d: "M19.08 19.08A10 10 0 1 1 4.92 4.92",
		key: "1ablyi"
	}]
]), Bo = m("circle-parking-off", [
	["path", {
		d: "M12.656 7H13a3 3 0 0 1 2.984 3.307",
		key: "1sjx87"
	}],
	["path", {
		d: "M13 13H9",
		key: "e2beee"
	}],
	["path", {
		d: "M19.071 19.071A1 1 0 0 1 4.93 4.93",
		key: "1kb595"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.357 2.687a10 10 0 0 1 12.956 12.956",
		key: "5bsfdx"
	}],
	["path", {
		d: "M9 17V9",
		key: "ojradj"
	}]
]), Vo = m("circle-parking", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M9 17V7h4a3 3 0 0 1 0 6H9",
	key: "1dfk2c"
}]]), Ho = m("circle-pause", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "10",
		x2: "10",
		y1: "15",
		y2: "9",
		key: "c1nkhi"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "15",
		y2: "9",
		key: "h65svq"
	}]
]), Uo = m("circle-percent", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M9 9h.01",
		key: "1q5me6"
	}],
	["path", {
		d: "M15 15h.01",
		key: "lqbp3k"
	}]
]), Wo = m("circle-pile", [
	["circle", {
		cx: "12",
		cy: "19",
		r: "2",
		key: "13j0tp"
	}],
	["circle", {
		cx: "12",
		cy: "5",
		r: "2",
		key: "f1ur92"
	}],
	["circle", {
		cx: "16",
		cy: "12",
		r: "2",
		key: "4ma0v8"
	}],
	["circle", {
		cx: "20",
		cy: "19",
		r: "2",
		key: "1obnsp"
	}],
	["circle", {
		cx: "4",
		cy: "19",
		r: "2",
		key: "p3m9r0"
	}],
	["circle", {
		cx: "8",
		cy: "12",
		r: "2",
		key: "1nvbw3"
	}]
]), Go = m("circle-plus", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}]
]), Ko = m("circle-play", [["path", {
	d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
	key: "kmsa83"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), qo = m("circle-pound-sterling", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M10 16V9.5a1 1 0 0 1 5 0",
		key: "1i1are"
	}],
	["path", {
		d: "M8 12h4",
		key: "qz6y1c"
	}],
	["path", {
		d: "M8 16h7",
		key: "sbedsn"
	}]
]), Jo = m("circle-power", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 7v4",
		key: "xawao1"
	}],
	["path", {
		d: "M7.998 9.003a5 5 0 1 0 8-.005",
		key: "1pek45"
	}]
]), H = m("circle-question-mark", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), Yo = m("circle-slash", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["line", {
	x1: "9",
	x2: "15",
	y1: "15",
	y2: "9",
	key: "1dfufj"
}]]), Xo = m("circle-slash-2", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M22 2 2 22",
	key: "y4kqgn"
}]]), Zo = m("circle-small", [["circle", {
	cx: "12",
	cy: "12",
	r: "6",
	key: "1vlfrh"
}]]), Qo = m("circle-star", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z",
	key: "285bvi"
}]]), $o = m("circle-stop", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["rect", {
	x: "9",
	y: "9",
	width: "6",
	height: "6",
	rx: "1",
	key: "1ssd4o"
}]]), es = m("circle-user-round", [
	["path", {
		d: "M17.925 20.056a6 6 0 0 0-11.851.001",
		key: "z69sun"
	}],
	["circle", {
		cx: "12",
		cy: "11",
		r: "4",
		key: "1gt34v"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), ts = m("circle-user", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["path", {
		d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
		key: "154egf"
	}]
]), ns = m("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), rs = m("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), is = m("circuit-board", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M11 9h4a2 2 0 0 0 2-2V3",
		key: "1ve2rv"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "M7 21v-4a2 2 0 0 1 2-2h4",
		key: "1fwkro"
	}],
	["circle", {
		cx: "15",
		cy: "15",
		r: "2",
		key: "3i40o0"
	}]
]), as = m("citrus", [
	["path", {
		d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
		key: "4ite01"
	}],
	["path", {
		d: "M19.65 15.66A8 8 0 0 1 8.35 4.34",
		key: "1gxipu"
	}],
	["path", {
		d: "m14 10-5.5 5.5",
		key: "92pfem"
	}],
	["path", {
		d: "M14 17.85V10H6.15",
		key: "xqmtsk"
	}]
]), os = m("clapperboard", [
	["path", {
		d: "m12.296 3.464 3.02 3.956",
		key: "qash78"
	}],
	["path", {
		d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",
		key: "1h7j8b"
	}],
	["path", {
		d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
		key: "4lm6w1"
	}],
	["path", {
		d: "m6.18 5.276 3.1 3.899",
		key: "zjj9t3"
	}]
]), ss = m("clipboard-check", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "m9 14 2 2 4-4",
		key: "df797q"
	}]
]), cs = m("clipboard-clock", [
	["path", {
		d: "M16 14v2.2l1.6 1",
		key: "fo4ql5"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v.832",
		key: "1ujtp2"
	}],
	["path", {
		d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",
		key: "qvpao1"
	}],
	["circle", {
		cx: "16",
		cy: "16",
		r: "6",
		key: "qoo3c4"
	}],
	["rect", {
		x: "8",
		y: "2",
		width: "8",
		height: "4",
		rx: "1",
		key: "ublpy"
	}]
]), ls = m("clipboard-list", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "M12 11h4",
		key: "1jrz19"
	}],
	["path", {
		d: "M12 16h4",
		key: "n85exb"
	}],
	["path", {
		d: "M8 11h.01",
		key: "1dfujw"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}]
]), us = m("clipboard-copy", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
		key: "4jdomd"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v4",
		key: "3hqy98"
	}],
	["path", {
		d: "M21 14H11",
		key: "1bme5i"
	}],
	["path", {
		d: "m15 10-4 4 4 4",
		key: "5dvupr"
	}]
]), ds = m("clipboard-minus", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "M9 14h6",
		key: "159ibu"
	}]
]), fs = m("clipboard-paste", [
	["path", {
		d: "M11 14h10",
		key: "1w8e9d"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v1.344",
		key: "1e62lh"
	}],
	["path", {
		d: "m17 18 4-4-4-4",
		key: "z2g111"
	}],
	["path", {
		d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",
		key: "bjbb7m"
	}],
	["rect", {
		x: "8",
		y: "2",
		width: "8",
		height: "4",
		rx: "1",
		key: "ublpy"
	}]
]), ps = m("clipboard-pen-line", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		key: "1oijnt"
	}],
	["path", {
		d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",
		key: "1but9f"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 1.73 1",
		key: "1p8n7l"
	}],
	["path", {
		d: "M8 18h1",
		key: "13wk12"
	}],
	["path", {
		d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
		key: "2t3380"
	}]
]), ms = m("clipboard-pen", [
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v2",
		key: "j91f56"
	}],
	["path", {
		d: "M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
		key: "16fuwn"
	}],
	["path", {
		d: "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "120tdm"
	}],
	["rect", {
		x: "8",
		y: "2",
		width: "8",
		height: "4",
		rx: "1",
		key: "ublpy"
	}]
]), hs = m("clipboard-plus", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "M9 14h6",
		key: "159ibu"
	}],
	["path", {
		d: "M12 17v-6",
		key: "1y8rbf"
	}]
]), gs = m("clipboard-type", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "M9 12v-1h6v1",
		key: "iehl6m"
	}],
	["path", {
		d: "M11 17h2",
		key: "12w5me"
	}],
	["path", {
		d: "M12 11v6",
		key: "1bwqyc"
	}]
]), _s = m("clipboard-x", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "m15 11-6 6",
		key: "1toa9n"
	}],
	["path", {
		d: "m9 11 6 6",
		key: "wlibny"
	}]
]), vs = m("clipboard", [["rect", {
	width: "8",
	height: "4",
	x: "8",
	y: "2",
	rx: "1",
	ry: "1",
	key: "tgr4d6"
}], ["path", {
	d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
	key: "116196"
}]]), ys = m("clock-1", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l2-4",
	key: "miptyd"
}]]), bs = m("clock-10", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l-4-2",
	key: "cedpoo"
}]]), xs = m("clock-11", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l-2-4",
	key: "ns39ag"
}]]), Ss = m("clock-12", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6",
	key: "1ipuwl"
}]]), Cs = m("clock-2", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4-2",
	key: "1r2kuh"
}]]), ws = m("clock-3", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6h4",
	key: "135r8i"
}]]), Ts = m("clock-4", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]), Es = m("clock-6", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v10",
	key: "wf7rdh"
}]]), Ds = m("clock-5", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l2 4",
	key: "1287s9"
}]]), Os = m("clock-7", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l-2 4",
	key: "1095bu"
}]]), ks = m("clock-8", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l-4 2",
	key: "imc3wl"
}]]), As = m("clock-9", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6H8",
	key: "u39vzm"
}]]), js = m("clock-alert", [
	["path", {
		d: "M12 6v6l4 2",
		key: "mmk7yg"
	}],
	["path", {
		d: "M20 12v5",
		key: "12wsvk"
	}],
	["path", {
		d: "M20 21h.01",
		key: "1p6o6n"
	}],
	["path", {
		d: "M21.25 8.2A10 10 0 1 0 16 21.16",
		key: "17fp9f"
	}]
]), Ms = m("clock-arrow-down", [
	["path", {
		d: "M12 6v6l2 1",
		key: "19cm8n"
	}],
	["path", {
		d: "M12.337 21.994a10 10 0 1 1 9.588-8.767",
		key: "28moa"
	}],
	["path", {
		d: "m14 18 4 4 4-4",
		key: "1waygx"
	}],
	["path", {
		d: "M18 14v8",
		key: "irew45"
	}]
]), Ns = m("clock-arrow-right", [
	["path", {
		d: "M12 6v6l2 1",
		key: "19cm8n"
	}],
	["path", {
		d: "M13.5 21.885A10 10 0 1 1 22 12",
		key: "xgp8as"
	}],
	["path", {
		d: "M14 18h8",
		key: "1le3fr"
	}],
	["path", {
		d: "m18 22 4-4-4-4",
		key: "mordo3"
	}]
]), Ps = m("clock-arrow-left", [
	["path", {
		d: "M12 6v6l1.5.8",
		key: "uc7jki"
	}],
	["path", {
		d: "M12.338 21.994a10 10 0 1 1 9.587-8.767",
		key: "1lz5pu"
	}],
	["path", {
		d: "M14 18h8",
		key: "1le3fr"
	}],
	["path", {
		d: "m18 22-4-4 4-4",
		key: "dh5o1f"
	}]
]), Fs = m("clock-arrow-up", [
	["path", {
		d: "M12 6v6l1.56.78",
		key: "14ed3g"
	}],
	["path", {
		d: "M13.227 21.925a10 10 0 1 1 8.767-9.588",
		key: "jwkls1"
	}],
	["path", {
		d: "m14 18 4-4 4 4",
		key: "ftkppy"
	}],
	["path", {
		d: "M18 22v-8",
		key: "su0gjh"
	}]
]), Is = m("clock-check", [
	["path", {
		d: "M12 6v6l4 2",
		key: "mmk7yg"
	}],
	["path", {
		d: "M22 12a10 10 0 1 0-11 9.95",
		key: "17dhok"
	}],
	["path", {
		d: "m22 16-5.5 5.5L14 19",
		key: "1eibut"
	}]
]), Ls = m("clock-fading", [
	["path", {
		d: "M12 2a10 10 0 0 1 7.38 16.75",
		key: "175t95"
	}],
	["path", {
		d: "M12 6v6l4 2",
		key: "mmk7yg"
	}],
	["path", {
		d: "M2.5 8.875a10 10 0 0 0-.5 3",
		key: "1vce0s"
	}],
	["path", {
		d: "M2.83 16a10 10 0 0 0 2.43 3.4",
		key: "o3fkw4"
	}],
	["path", {
		d: "M4.636 5.235a10 10 0 0 1 .891-.857",
		key: "1szpfk"
	}],
	["path", {
		d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
		key: "9yhvd4"
	}]
]), Rs = m("clock-plus", [
	["path", {
		d: "M12 6v6l3.644 1.822",
		key: "1jmett"
	}],
	["path", {
		d: "M16 19h6",
		key: "xwg31i"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M21.92 13.267a10 10 0 1 0-8.653 8.653",
		key: "1u0osk"
	}]
]), zs = m("closed-caption", [
	["path", {
		d: "M10 9.17a3 3 0 1 0 0 5.66",
		key: "h9wayk"
	}],
	["path", {
		d: "M17 9.17a3 3 0 1 0 0 5.66",
		key: "1v6zke"
	}],
	["rect", {
		x: "2",
		y: "5",
		width: "20",
		height: "14",
		rx: "2",
		key: "qneu4z"
	}]
]), Bs = m("cloud-alert", [
	["path", {
		d: "M12 12v4",
		key: "tww15h"
	}],
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642",
		key: "1namsd"
	}]
]), Vs = m("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]), Hs = m("cloud-backup", [
	["path", {
		d: "M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607",
		key: "xpoh9y"
	}],
	["path", {
		d: "M7 11v4h4",
		key: "q9yh32"
	}],
	["path", {
		d: "M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15",
		key: "1xm8iu"
	}]
]), Us = m("cloud-check", [["path", {
	d: "m17 15-5.5 5.5L9 18",
	key: "15q87x"
}], ["path", {
	d: "M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327",
	key: "1xtj56"
}]]), Ws = m("cloud-cog", [
	["path", {
		d: "m10.852 19.772-.383.924",
		key: "r7sl7d"
	}],
	["path", {
		d: "m13.148 14.228.383-.923",
		key: "1d5zpm"
	}],
	["path", {
		d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923",
		key: "1ydik7"
	}],
	["path", {
		d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544",
		key: "1m1vsf"
	}],
	["path", {
		d: "m14.772 15.852.923-.383",
		key: "660p6e"
	}],
	["path", {
		d: "m14.772 18.148.923.383",
		key: "hrcpis"
	}],
	["path", {
		d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",
		key: "j2q98n"
	}],
	["path", {
		d: "m9.228 15.852-.923-.383",
		key: "1p9ong"
	}],
	["path", {
		d: "m9.228 18.148-.923.383",
		key: "6558rz"
	}]
]), Gs = m("cloud-download", [
	["path", {
		d: "M12 13v8l-4-4",
		key: "1f5nwf"
	}],
	["path", {
		d: "m12 21 4-4",
		key: "1lfcce"
	}],
	["path", {
		d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
		key: "ui1hmy"
	}]
]), Ks = m("cloud-drizzle", [
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "M8 19v1",
		key: "1dk2by"
	}],
	["path", {
		d: "M8 14v1",
		key: "84yxot"
	}],
	["path", {
		d: "M16 19v1",
		key: "v220m7"
	}],
	["path", {
		d: "M16 14v1",
		key: "g12gj6"
	}],
	["path", {
		d: "M12 21v1",
		key: "q8vafk"
	}],
	["path", {
		d: "M12 16v1",
		key: "1mx6rx"
	}]
]), qs = m("cloud-fog", [
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "M16 17H7",
		key: "pygtm1"
	}],
	["path", {
		d: "M17 21H9",
		key: "1u2q02"
	}]
]), Js = m("cloud-hail", [
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "M16 14v2",
		key: "a1is7l"
	}],
	["path", {
		d: "M8 14v2",
		key: "1e9m6t"
	}],
	["path", {
		d: "M16 20h.01",
		key: "xwek51"
	}],
	["path", {
		d: "M8 20h.01",
		key: "1vjney"
	}],
	["path", {
		d: "M12 16v2",
		key: "z66u1j"
	}],
	["path", {
		d: "M12 22h.01",
		key: "1urd7a"
	}]
]), Ys = m("cloud-lightning", [["path", {
	d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",
	key: "1cez44"
}], ["path", {
	d: "m13 12-3 5h4l-3 5",
	key: "1t22er"
}]]), Xs = m("cloud-moon-rain", [
	["path", {
		d: "M11 20v2",
		key: "174qtz"
	}],
	["path", {
		d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36",
		key: "zwnc1e"
	}],
	["path", {
		d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
		key: "1qmrp3"
	}],
	["path", {
		d: "M7 19v2",
		key: "12npes"
	}]
]), Zs = m("cloud-off", [
	["path", {
		d: "M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",
		key: "1uxyv8"
	}],
	["path", {
		d: "M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",
		key: "99tcn7"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Qs = m("cloud-moon", [["path", {
	d: "M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z",
	key: "ie2ih4"
}], ["path", {
	d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36",
	key: "zwnc1e"
}]]), $s = m("cloud-rain-wind", [
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "m9.2 22 3-7",
		key: "sb5f6j"
	}],
	["path", {
		d: "m9 13-3 7",
		key: "500co5"
	}],
	["path", {
		d: "m17 13-3 7",
		key: "8t2fiy"
	}]
]), ec = m("cloud-rain", [
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "M16 14v6",
		key: "1j4efv"
	}],
	["path", {
		d: "M8 14v6",
		key: "17c4r9"
	}],
	["path", {
		d: "M12 16v6",
		key: "c8a4gj"
	}]
]), tc = m("cloud-snow", [
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "M8 15h.01",
		key: "a7atzg"
	}],
	["path", {
		d: "M8 19h.01",
		key: "puxtts"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}],
	["path", {
		d: "M12 21h.01",
		key: "h35vbk"
	}],
	["path", {
		d: "M16 15h.01",
		key: "rnfrdf"
	}],
	["path", {
		d: "M16 19h.01",
		key: "1vcnzz"
	}]
]), nc = m("cloud-sun-rain", [
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}],
	["path", {
		d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
		key: "dpwdj0"
	}],
	["path", {
		d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
		key: "1qmrp3"
	}],
	["path", {
		d: "M11 20v2",
		key: "174qtz"
	}],
	["path", {
		d: "M7 19v2",
		key: "12npes"
	}]
]), rc = m("cloud-sun", [
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}],
	["path", {
		d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
		key: "dpwdj0"
	}],
	["path", {
		d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",
		key: "s09mg5"
	}]
]), ic = m("cloud-sync", [
	["path", {
		d: "m17 18-1.535 1.605a5 5 0 0 1-8-1.5",
		key: "adpv5j"
	}],
	["path", {
		d: "M17 22v-4h-4",
		key: "ex1ofj"
	}],
	["path", {
		d: "M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607",
		key: "ziqt14"
	}],
	["path", {
		d: "M7 10v4h4",
		key: "1j6gx1"
	}],
	["path", {
		d: "m7 14 1.535-1.605a5 5 0 0 1 8 1.5",
		key: "19q5h7"
	}]
]), ac = m("cloud", [["path", {
	d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
	key: "p7xjir"
}]]), oc = m("cloud-upload", [
	["path", {
		d: "M12 13v8",
		key: "1l5pq0"
	}],
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "m8 17 4-4 4 4",
		key: "1quai1"
	}]
]), sc = m("cloudy", [["path", {
	d: "M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z",
	key: "44yre2"
}], ["path", {
	d: "M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61",
	key: "leugyv"
}]]), cc = m("clover", [
	["path", {
		d: "M16.17 7.83 2 22",
		key: "t58vo8"
	}],
	["path", {
		d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",
		key: "17k36q"
	}],
	["path", {
		d: "m7.83 7.83 8.34 8.34",
		key: "1d7sxk"
	}]
]), lc = m("club", [["path", {
	d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",
	key: "27yuqz"
}], ["path", {
	d: "M12 17.66L12 22",
	key: "ogfahf"
}]]), uc = m("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]), dc = m("code", [["path", {
	d: "m16 18 6-6-6-6",
	key: "eg8j8"
}], ["path", {
	d: "m8 6-6 6 6 6",
	key: "ppft3o"
}]]), fc = m("coffee", [
	["path", {
		d: "M10 2v2",
		key: "7u0qdc"
	}],
	["path", {
		d: "M14 2v2",
		key: "6buw04"
	}],
	["path", {
		d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
		key: "pwadti"
	}],
	["path", {
		d: "M6 2v2",
		key: "colzsn"
	}]
]), pc = m("cog", [
	["path", {
		d: "M11 10.27 7 3.34",
		key: "16pf9h"
	}],
	["path", {
		d: "m11 13.73-4 6.93",
		key: "794ttg"
	}],
	["path", {
		d: "M12 22v-2",
		key: "1osdcq"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M14 12h8",
		key: "4f43i9"
	}],
	["path", {
		d: "m17 20.66-1-1.73",
		key: "eq3orb"
	}],
	["path", {
		d: "m17 3.34-1 1.73",
		key: "2wel8s"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "m20.66 17-1.73-1",
		key: "sg0v6f"
	}],
	["path", {
		d: "m20.66 7-1.73 1",
		key: "1ow05n"
	}],
	["path", {
		d: "m3.34 17 1.73-1",
		key: "nuk764"
	}],
	["path", {
		d: "m3.34 7 1.73 1",
		key: "1ulond"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "8",
		key: "46899m"
	}]
]), mc = m("coins", [
	["path", {
		d: "M13.744 17.736a6 6 0 1 1-7.48-7.48",
		key: "bq4yh3"
	}],
	["path", {
		d: "M15 6h1v4",
		key: "11y1tn"
	}],
	["path", {
		d: "m6.134 14.768.866-.5 2 3.464",
		key: "17snzx"
	}],
	["circle", {
		cx: "16",
		cy: "8",
		r: "6",
		key: "14bfc9"
	}]
]), hc = m("columns-2", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M12 3v18",
	key: "108xh3"
}]]), U = m("columns-3-cog", [
	["path", {
		d: "M10.6 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.6",
		key: "19s2bv"
	}],
	["path", {
		d: "m14.305 19.53.923-.382",
		key: "3m78fa"
	}],
	["path", {
		d: "M15 3v7.6",
		key: "mv9izd"
	}],
	["path", {
		d: "m15.229 16.852-.924-.383",
		key: "qpfz85"
	}],
	["path", {
		d: "m16.852 15.228-.383-.923",
		key: "5xggr7"
	}],
	["path", {
		d: "m16.852 20.772-.383.924",
		key: "dpfhf9"
	}],
	["path", {
		d: "m19.148 15.228.383-.923",
		key: "1reyyz"
	}],
	["path", {
		d: "m19.53 21.696-.382-.924",
		key: "1goivc"
	}],
	["path", {
		d: "m20.773 16.852.922-.383",
		key: "59dfo2"
	}],
	["path", {
		d: "m20.773 19.148.922.383",
		key: "1lk755"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}]
]), gc = m("columns-3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}]
]), _c = m("columns-4", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7.5 3v18",
		key: "w0wo6v"
	}],
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["path", {
		d: "M16.5 3v18",
		key: "10tjh1"
	}]
]), vc = m("combine", [
	["path", {
		d: "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
		key: "1l7d7l"
	}],
	["path", {
		d: "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
		key: "9955pe"
	}],
	["path", {
		d: "m7 15 3 3",
		key: "4hkfgk"
	}],
	["path", {
		d: "m7 21 3-3H5a2 2 0 0 1-2-2v-2",
		key: "1xljwe"
	}],
	["rect", {
		x: "14",
		y: "14",
		width: "7",
		height: "7",
		rx: "1",
		key: "1cdgtw"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "7",
		height: "7",
		rx: "1",
		key: "zi3rio"
	}]
]), yc = m("command", [["path", {
	d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
	key: "11bfej"
}]]), bc = m("compass", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
	key: "9ktpf1"
}]]), xc = m("component", [
	["path", {
		d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
		key: "1uwlt4"
	}],
	["path", {
		d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",
		key: "10291m"
	}],
	["path", {
		d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",
		key: "1tqoq1"
	}],
	["path", {
		d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
		key: "1x6lto"
	}]
]), Sc = m("computer", [
	["rect", {
		width: "14",
		height: "8",
		x: "5",
		y: "2",
		rx: "2",
		key: "wc9tft"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		key: "w68u3i"
	}],
	["path", {
		d: "M6 18h2",
		key: "rwmk9e"
	}],
	["path", {
		d: "M12 18h6",
		key: "aqd8w3"
	}]
]), Cc = m("concierge-bell", [
	["path", {
		d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",
		key: "1pvr1r"
	}],
	["path", {
		d: "M20 16a8 8 0 1 0-16 0",
		key: "1pa543"
	}],
	["path", {
		d: "M12 4v4",
		key: "1bq03y"
	}],
	["path", {
		d: "M10 4h4",
		key: "1xpv9s"
	}]
]), wc = m("cone", [["path", {
	d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",
	key: "53pte7"
}], ["ellipse", {
	cx: "12",
	cy: "19",
	rx: "9",
	ry: "3",
	key: "1ji25f"
}]]), Tc = m("construction", [
	["rect", {
		x: "2",
		y: "6",
		width: "20",
		height: "8",
		rx: "1",
		key: "1estib"
	}],
	["path", {
		d: "M17 14v7",
		key: "7m2elx"
	}],
	["path", {
		d: "M7 14v7",
		key: "1cm7wv"
	}],
	["path", {
		d: "M17 3v3",
		key: "1v4jwn"
	}],
	["path", {
		d: "M7 3v3",
		key: "7o6guu"
	}],
	["path", {
		d: "M10 14 2.3 6.3",
		key: "1023jk"
	}],
	["path", {
		d: "m14 6 7.7 7.7",
		key: "1s8pl2"
	}],
	["path", {
		d: "m8 6 8 8",
		key: "hl96qh"
	}]
]), Ec = m("contact-round", [
	["path", {
		d: "M16 2v2",
		key: "scm5qe"
	}],
	["path", {
		d: "M17.915 21a6 6 0 10-12 0",
		key: "13n4mv"
	}],
	["path", {
		d: "M8 2v2",
		key: "pbkmx"
	}],
	["circle", {
		cx: "12",
		cy: "11",
		r: "4",
		key: "1gt34v"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), Dc = m("container", [
	["path", {
		d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
		key: "1t2lqe"
	}],
	["path", {
		d: "M10 21.9V14L2.1 9.1",
		key: "o7czzq"
	}],
	["path", {
		d: "m10 14 11.9-6.9",
		key: "zm5e20"
	}],
	["path", {
		d: "M14 19.8v-8.1",
		key: "159ecu"
	}],
	["path", {
		d: "M18 17.5V9.4",
		key: "11uown"
	}]
]), Oc = m("contact", [
	["path", {
		d: "M16 2v2",
		key: "scm5qe"
	}],
	["path", {
		d: "M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2",
		key: "k82dct"
	}],
	["path", {
		d: "M8 2v2",
		key: "pbkmx"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), kc = m("contrast", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 18a6 6 0 0 0 0-12v12z",
	key: "j4l70d"
}]]), Ac = m("cookie", [
	["path", {
		d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
		key: "laymnq"
	}],
	["path", {
		d: "M8.5 8.5v.01",
		key: "ue8clq"
	}],
	["path", {
		d: "M16 15.5v.01",
		key: "14dtrp"
	}],
	["path", {
		d: "M12 12v.01",
		key: "u5ubse"
	}],
	["path", {
		d: "M11 17v.01",
		key: "1hyl5a"
	}],
	["path", {
		d: "M7 14v.01",
		key: "uct60s"
	}]
]), jc = m("cooking-pot", [
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",
		key: "u0tga0"
	}],
	["path", {
		d: "m4 8 16-4",
		key: "16g0ng"
	}],
	["path", {
		d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",
		key: "12cejc"
	}]
]), Mc = m("copy-check", [
	["path", {
		d: "m12 15 2 2 4-4",
		key: "2c609p"
	}],
	["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}],
	["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]
]), Nc = m("copy-minus", [
	["line", {
		x1: "12",
		x2: "18",
		y1: "15",
		y2: "15",
		key: "1nscbv"
	}],
	["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}],
	["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]
]), Pc = m("copy-plus", [
	["line", {
		x1: "15",
		x2: "15",
		y1: "12",
		y2: "18",
		key: "1p7wdc"
	}],
	["line", {
		x1: "12",
		x2: "18",
		y1: "15",
		y2: "15",
		key: "1nscbv"
	}],
	["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}],
	["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]
]), Fc = m("copy-slash", [
	["line", {
		x1: "12",
		x2: "18",
		y1: "18",
		y2: "12",
		key: "ebkxgr"
	}],
	["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}],
	["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]
]), Ic = m("copy-x", [
	["line", {
		x1: "12",
		x2: "18",
		y1: "12",
		y2: "18",
		key: "1rg63v"
	}],
	["line", {
		x1: "12",
		x2: "18",
		y1: "18",
		y2: "12",
		key: "ebkxgr"
	}],
	["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}],
	["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]
]), Lc = m("copyleft", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M9.17 14.83a4 4 0 1 0 0-5.66",
	key: "1sveal"
}]]), Rc = m("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]), zc = m("copyright", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M14.83 14.83a4 4 0 1 1 0-5.66",
	key: "1i56pz"
}]]), Bc = m("corner-down-left", [["path", {
	d: "M20 4v7a4 4 0 0 1-4 4H4",
	key: "6o5b7l"
}], ["path", {
	d: "m9 10-5 5 5 5",
	key: "1kshq7"
}]]), Vc = m("corner-down-right", [["path", {
	d: "m15 10 5 5-5 5",
	key: "qqa56n"
}], ["path", {
	d: "M4 4v7a4 4 0 0 0 4 4h12",
	key: "z08zvw"
}]]), Hc = m("corner-left-down", [["path", {
	d: "m14 15-5 5-5-5",
	key: "1eia93"
}], ["path", {
	d: "M20 4h-7a4 4 0 0 0-4 4v12",
	key: "nbpdq2"
}]]), Uc = m("corner-left-up", [["path", {
	d: "M14 9 9 4 4 9",
	key: "1af5af"
}], ["path", {
	d: "M20 20h-7a4 4 0 0 1-4-4V4",
	key: "1blwi3"
}]]), Wc = m("corner-right-down", [["path", {
	d: "m10 15 5 5 5-5",
	key: "1hpjnr"
}], ["path", {
	d: "M4 4h7a4 4 0 0 1 4 4v12",
	key: "wcbgct"
}]]), Gc = m("corner-right-up", [["path", {
	d: "m10 9 5-5 5 5",
	key: "9ctzwi"
}], ["path", {
	d: "M4 20h7a4 4 0 0 0 4-4V4",
	key: "1plgdj"
}]]), Kc = m("corner-up-left", [["path", {
	d: "M20 20v-7a4 4 0 0 0-4-4H4",
	key: "1nkjon"
}], ["path", {
	d: "M9 14 4 9l5-5",
	key: "102s5s"
}]]), qc = m("corner-up-right", [["path", {
	d: "m15 14 5-5-5-5",
	key: "12vg1m"
}], ["path", {
	d: "M4 20v-7a4 4 0 0 1 4-4h12",
	key: "1lu4f8"
}]]), Jc = m("cpu", [
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M17 20v2",
		key: "1rnc9c"
	}],
	["path", {
		d: "M17 2v2",
		key: "11trls"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M2 17h2",
		key: "7oei6x"
	}],
	["path", {
		d: "M2 7h2",
		key: "asdhe0"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "M20 17h2",
		key: "1fpfkl"
	}],
	["path", {
		d: "M20 7h2",
		key: "1o8tra"
	}],
	["path", {
		d: "M7 20v2",
		key: "4gnj0m"
	}],
	["path", {
		d: "M7 2v2",
		key: "1i4yhu"
	}],
	["rect", {
		x: "4",
		y: "4",
		width: "16",
		height: "16",
		rx: "2",
		key: "1vbyd7"
	}],
	["rect", {
		x: "8",
		y: "8",
		width: "8",
		height: "8",
		rx: "1",
		key: "z9xiuo"
	}]
]), Yc = m("creative-commons", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",
		key: "1ss3eq"
	}],
	["path", {
		d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",
		key: "1od56t"
	}]
]), Xc = m("credit-card", [["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "2",
	key: "ynyp8z"
}], ["line", {
	x1: "2",
	x2: "22",
	y1: "10",
	y2: "10",
	key: "1b3vmo"
}]]), Zc = m("croissant", [
	["path", {
		d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487",
		key: "14kkz9"
	}],
	["path", {
		d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132",
		key: "1g7v07"
	}],
	["path", {
		d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42",
		key: "ratg6b"
	}],
	["path", {
		d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14",
		key: "4454f0"
	}],
	["path", {
		d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676",
		key: "qmemie"
	}]
]), Qc = m("crop", [["path", {
	d: "M6 2v14a2 2 0 0 0 2 2h14",
	key: "ron5a4"
}], ["path", {
	d: "M18 22V8a2 2 0 0 0-2-2H2",
	key: "7s9ehn"
}]]), $c = m("cross", [["path", {
	d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",
	key: "1xbrqy"
}]]), el = m("crosshair", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "22",
		x2: "18",
		y1: "12",
		y2: "12",
		key: "l9bcsi"
	}],
	["line", {
		x1: "6",
		x2: "2",
		y1: "12",
		y2: "12",
		key: "13hhkx"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "6",
		y2: "2",
		key: "10w3f3"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "22",
		y2: "18",
		key: "15g9kq"
	}]
]), tl = m("crown", [["path", {
	d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
	key: "1vdc57"
}], ["path", {
	d: "M5 21h14",
	key: "11awu3"
}]]), nl = m("cuboid", [
	["path", {
		d: "M10 22v-8",
		key: "1f8443"
	}],
	["path", {
		d: "M2.336 8.89 10 14l11.715-7.029",
		key: "1qnufy"
	}],
	["path", {
		d: "M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z",
		key: "670npk"
	}]
]), rl = m("cup-soda", [
	["path", {
		d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",
		key: "8166m8"
	}],
	["path", {
		d: "M5 8h14",
		key: "pcz4l3"
	}],
	["path", {
		d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
		key: "yjz344"
	}],
	["path", {
		d: "m12 8 1-6h2",
		key: "3ybfa4"
	}]
]), il = m("currency", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "8",
		key: "46899m"
	}],
	["line", {
		x1: "3",
		x2: "6",
		y1: "3",
		y2: "6",
		key: "1jkytn"
	}],
	["line", {
		x1: "21",
		x2: "18",
		y1: "3",
		y2: "6",
		key: "14zfjt"
	}],
	["line", {
		x1: "3",
		x2: "6",
		y1: "21",
		y2: "18",
		key: "iusuec"
	}],
	["line", {
		x1: "21",
		x2: "18",
		y1: "21",
		y2: "18",
		key: "yj2dd7"
	}]
]), al = m("cylinder", [["ellipse", {
	cx: "12",
	cy: "5",
	rx: "9",
	ry: "3",
	key: "msslwz"
}], ["path", {
	d: "M3 5v14a9 3 0 0 0 18 0V5",
	key: "aqi0yr"
}]]), ol = m("dam", [
	["path", {
		d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
		key: "157kva"
	}],
	["path", {
		d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
		key: "d7q6m6"
	}],
	["path", {
		d: "M2 10h4",
		key: "l0bgd4"
	}],
	["path", {
		d: "M2 14h4",
		key: "1gsvsf"
	}],
	["path", {
		d: "M2 18h4",
		key: "1bu2t1"
	}],
	["path", {
		d: "M2 6h4",
		key: "aawbzj"
	}],
	["path", {
		d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",
		key: "pr6s65"
	}]
]), sl = m("database-arrow-down", [
	["path", {
		d: "m16 19 3 3 3-3",
		key: "1ibux0"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M21 12.536V5",
		key: "zeza6i"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 15.182 14.806",
		key: "11e5wb"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 13.318 21.968",
		key: "1lyu4j"
	}],
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}]
]), cl = m("database-arrow-up", [
	["path", {
		d: "M19 22v-6",
		key: "qhmiwi"
	}],
	["path", {
		d: "M21 12.536V5",
		key: "zeza6i"
	}],
	["path", {
		d: "m22 19-3-3-3 3",
		key: "rn6bg2"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 14.457 14.886",
		key: "1941vg"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 13.318 21.968",
		key: "1lyu4j"
	}],
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}]
]), ll = m("database-backup", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 12a9 3 0 0 0 5 2.69",
		key: "1ui2ym"
	}],
	["path", {
		d: "M21 9.3V5",
		key: "6k6cib"
	}],
	["path", {
		d: "M3 5v14a9 3 0 0 0 6.47 2.88",
		key: "i62tjy"
	}],
	["path", {
		d: "M12 12v4h4",
		key: "1bxaet"
	}],
	["path", {
		d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
		key: "1f4ei9"
	}]
]), ul = m("database-check", [
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}],
	["path", {
		d: "M21 13.127V5",
		key: "59o5vz"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 13.318 21.968",
		key: "1lyu4j"
	}],
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}]
]), dl = m("database-minus", [
	["path", {
		d: "M21 15V5",
		key: "1lbg5w"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 13.318 21.968",
		key: "1lyu4j"
	}],
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}]
]), fl = m("database-plus", [
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M21 12.536V5",
		key: "zeza6i"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 15.1824 14.8061",
		key: "ukc3b1"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 13.318 21.968",
		key: "1lyu4j"
	}],
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}]
]), pl = m("database-search", [
	["path", {
		d: "M21 11.693V5",
		key: "175m1t"
	}],
	["path", {
		d: "m22 22-1.875-1.875",
		key: "13zax7"
	}],
	["path", {
		d: "M3 12a9 3 0 0 0 8.697 2.998",
		key: "151u9p"
	}],
	["path", {
		d: "M3 5v14a9 3 0 0 0 9.28 2.999",
		key: "q2rs2p"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}]
]), ml = m("database-x", [
	["path", {
		d: "m17 17 5 5",
		key: "p7ous7"
	}],
	["path", {
		d: "M19.323 13.744A9 3 0 0 0 21 12",
		key: "hmry77"
	}],
	["path", {
		d: "M21 13.127V5",
		key: "59o5vz"
	}],
	["path", {
		d: "m22 17-5 5",
		key: "gqnmv0"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 13.563 14.954",
		key: "1rmyhq"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 13 21.981",
		key: "159k2m"
	}],
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}]
]), hl = m("database-zap", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 15 21.84",
		key: "14ibmq"
	}],
	["path", {
		d: "M21 5V8",
		key: "1marbg"
	}],
	["path", {
		d: "M21 12L18 17H22L19 22",
		key: "zafso"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 14.59 14.87",
		key: "1y4wr8"
	}]
]), gl = m("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]), _l = m("decimals-arrow-left", [
	["path", {
		d: "m13 21-3-3 3-3",
		key: "s3o1nf"
	}],
	["path", {
		d: "M20 18H10",
		key: "14r3mt"
	}],
	["path", {
		d: "M3 11h.01",
		key: "1eifu7"
	}],
	["rect", {
		x: "6",
		y: "3",
		width: "5",
		height: "8",
		rx: "2.5",
		key: "v9paqo"
	}]
]), vl = m("delete", [
	["path", {
		d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
		key: "1yo7s0"
	}],
	["path", {
		d: "m12 9 6 6",
		key: "anjzzh"
	}],
	["path", {
		d: "m18 9-6 6",
		key: "1fp51s"
	}]
]), yl = m("decimals-arrow-right", [
	["path", {
		d: "M10 18h10",
		key: "1y5s8o"
	}],
	["path", {
		d: "m17 21 3-3-3-3",
		key: "1ammt0"
	}],
	["path", {
		d: "M3 11h.01",
		key: "1eifu7"
	}],
	["rect", {
		x: "15",
		y: "3",
		width: "5",
		height: "8",
		rx: "2.5",
		key: "76md6a"
	}],
	["rect", {
		x: "6",
		y: "3",
		width: "5",
		height: "8",
		rx: "2.5",
		key: "v9paqo"
	}]
]), bl = m("dessert", [
	["path", {
		d: "M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826",
		key: "xi88qy"
	}],
	["path", {
		d: "M20.804 14.869a9 9 0 0 1-17.608 0",
		key: "1r28rg"
	}],
	["circle", {
		cx: "12",
		cy: "4",
		r: "2",
		key: "muu5ef"
	}]
]), xl = m("diameter", [
	["circle", {
		cx: "19",
		cy: "19",
		r: "2",
		key: "17f5cg"
	}],
	["circle", {
		cx: "5",
		cy: "5",
		r: "2",
		key: "1gwv83"
	}],
	["path", {
		d: "M6.48 3.66a10 10 0 0 1 13.86 13.86",
		key: "xr8kdq"
	}],
	["path", {
		d: "m6.41 6.41 11.18 11.18",
		key: "uhpjw7"
	}],
	["path", {
		d: "M3.66 6.48a10 10 0 0 0 13.86 13.86",
		key: "cldpwv"
	}]
]), Sl = m("diamond-minus", [["path", {
	d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",
	key: "1ey20j"
}], ["path", {
	d: "M8 12h8",
	key: "1wcyev"
}]]), Cl = m("diamond-percent", [
	["path", {
		d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
		key: "1tpxz2"
	}],
	["path", {
		d: "M9.2 9.2h.01",
		key: "1b7bvt"
	}],
	["path", {
		d: "m14.5 9.5-5 5",
		key: "17q4r4"
	}],
	["path", {
		d: "M14.7 14.8h.01",
		key: "17nsh4"
	}]
]), wl = m("diamond-plus", [
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}],
	["path", {
		d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",
		key: "1ey20j"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}]
]), Tl = m("diamond", [["path", {
	d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
	key: "1f1r0c"
}]]), El = m("dice-1", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	ry: "2",
	key: "1m3agn"
}], ["path", {
	d: "M12 12h.01",
	key: "1mp3jc"
}]]), Dl = m("dice-2", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["path", {
		d: "M15 9h.01",
		key: "x1ddxp"
	}],
	["path", {
		d: "M9 15h.01",
		key: "fzyn71"
	}]
]), Ol = m("dice-4", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["path", {
		d: "M16 8h.01",
		key: "cr5u4v"
	}],
	["path", {
		d: "M8 8h.01",
		key: "1e4136"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}],
	["path", {
		d: "M16 16h.01",
		key: "1f9h7w"
	}]
]), kl = m("dice-3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["path", {
		d: "M16 8h.01",
		key: "cr5u4v"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}]
]), Al = m("dice-5", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["path", {
		d: "M16 8h.01",
		key: "cr5u4v"
	}],
	["path", {
		d: "M8 8h.01",
		key: "1e4136"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}],
	["path", {
		d: "M16 16h.01",
		key: "1f9h7w"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}]
]), jl = m("dice-6", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["path", {
		d: "M16 8h.01",
		key: "cr5u4v"
	}],
	["path", {
		d: "M16 12h.01",
		key: "1l6xoz"
	}],
	["path", {
		d: "M16 16h.01",
		key: "1f9h7w"
	}],
	["path", {
		d: "M8 8h.01",
		key: "1e4136"
	}],
	["path", {
		d: "M8 12h.01",
		key: "czm47f"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}]
]), Ml = m("dices", [
	["rect", {
		width: "12",
		height: "12",
		x: "2",
		y: "10",
		rx: "2",
		ry: "2",
		key: "6agr2n"
	}],
	["path", {
		d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
		key: "1o487t"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "M10 14h.01",
		key: "ssrbsk"
	}],
	["path", {
		d: "M15 6h.01",
		key: "cblpky"
	}],
	["path", {
		d: "M18 9h.01",
		key: "2061c0"
	}]
]), Nl = m("diff", [
	["path", {
		d: "M12 3v14",
		key: "7cf3v8"
	}],
	["path", {
		d: "M5 10h14",
		key: "elsbfy"
	}],
	["path", {
		d: "M5 21h14",
		key: "11awu3"
	}]
]), Pl = m("disc-2", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}]
]), Fl = m("disc-3", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M6 12c0-1.7.7-3.2 1.8-4.2",
		key: "oqkarx"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "M18 12c0 1.7-.7 3.2-1.8 4.2",
		key: "1eah9h"
	}]
]), Il = m("disc-album", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "5",
		key: "nd82uf"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}]
]), Ll = m("disc", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "2",
	key: "1c9p78"
}]]), Rl = m("divide", [
	["circle", {
		cx: "12",
		cy: "6",
		r: "1",
		key: "1bh7o1"
	}],
	["line", {
		x1: "5",
		x2: "19",
		y1: "12",
		y2: "12",
		key: "13b5wn"
	}],
	["circle", {
		cx: "12",
		cy: "18",
		r: "1",
		key: "lqb9t5"
	}]
]), zl = m("dna-off", [
	["path", {
		d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",
		key: "1bivrr"
	}],
	["path", {
		d: "m17 6-2.891-2.891",
		key: "xu6p2f"
	}],
	["path", {
		d: "M2 15c3.333-3 6.667-3 10-3",
		key: "nxix30"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "m20 9 .891.891",
		key: "3xwk7g"
	}],
	["path", {
		d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",
		key: "18cutr"
	}],
	["path", {
		d: "M3.109 14.109 4 15",
		key: "q76aoh"
	}],
	["path", {
		d: "m6.5 12.5 1 1",
		key: "cs35ky"
	}],
	["path", {
		d: "m7 18 2.891 2.891",
		key: "1sisit"
	}],
	["path", {
		d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",
		key: "rlvei3"
	}]
]), Bl = m("dna", [
	["path", {
		d: "m10 16 1.5 1.5",
		key: "11lckj"
	}],
	["path", {
		d: "m14 8-1.5-1.5",
		key: "1ohn8i"
	}],
	["path", {
		d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",
		key: "80uv8i"
	}],
	["path", {
		d: "m16.5 10.5 1 1",
		key: "696xn5"
	}],
	["path", {
		d: "m17 6-2.891-2.891",
		key: "xu6p2f"
	}],
	["path", {
		d: "M2 15c6.667-6 13.333 0 20-6",
		key: "1pyr53"
	}],
	["path", {
		d: "m20 9 .891.891",
		key: "3xwk7g"
	}],
	["path", {
		d: "M3.109 14.109 4 15",
		key: "q76aoh"
	}],
	["path", {
		d: "m6.5 12.5 1 1",
		key: "cs35ky"
	}],
	["path", {
		d: "m7 18 2.891 2.891",
		key: "1sisit"
	}],
	["path", {
		d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993",
		key: "q3hbxp"
	}]
]), Vl = m("dock", [
	["path", {
		d: "M2 8h20",
		key: "d11cs7"
	}],
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}],
	["path", {
		d: "M6 16h12",
		key: "u522kt"
	}]
]), Hl = m("dog", [
	["path", {
		d: "M11.25 16.25h1.5L12 17z",
		key: "w7jh35"
	}],
	["path", {
		d: "M16 14v.5",
		key: "1lajdz"
	}],
	["path", {
		d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",
		key: "u7s9ue"
	}],
	["path", {
		d: "M8 14v.5",
		key: "1nzgdb"
	}],
	["path", {
		d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
		key: "v8hric"
	}]
]), Ul = m("dollar-sign", [["line", {
	x1: "12",
	x2: "12",
	y1: "2",
	y2: "22",
	key: "7eqyqh"
}], ["path", {
	d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
	key: "1b0p4s"
}]]), Wl = m("donut", [["path", {
	d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",
	key: "19sr3x"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Gl = m("door-closed-locked", [
	["path", {
		d: "M10 12h.01",
		key: "1kxr2c"
	}],
	["path", {
		d: "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",
		key: "1bnhmg"
	}],
	["path", {
		d: "M2 20h8",
		key: "10ntw1"
	}],
	["path", {
		d: "M20 17v-2a2 2 0 1 0-4 0v2",
		key: "pwaxnr"
	}],
	["rect", {
		x: "14",
		y: "17",
		width: "8",
		height: "5",
		rx: "1",
		key: "15pjcy"
	}]
]), Kl = m("door-closed", [
	["path", {
		d: "M10 12h.01",
		key: "1kxr2c"
	}],
	["path", {
		d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",
		key: "36qu9e"
	}],
	["path", {
		d: "M2 20h20",
		key: "owomy5"
	}]
]), ql = m("door-open", [
	["path", {
		d: "M11 20H2",
		key: "nlcfvz"
	}],
	["path", {
		d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
		key: "au4z13"
	}],
	["path", {
		d: "M11 4H8a2 2 0 0 0-2 2v14",
		key: "74r1mk"
	}],
	["path", {
		d: "M14 12h.01",
		key: "1jfl7z"
	}],
	["path", {
		d: "M22 20h-3",
		key: "vhrsz"
	}]
]), Jl = m("dot", [["circle", {
	cx: "12",
	cy: "12",
	r: "1",
	key: "41hilf"
}]]), Yl = m("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]), Xl = m("drafting-compass", [
	["path", {
		d: "m12.99 6.74 1.93 3.44",
		key: "iwagvd"
	}],
	["path", {
		d: "M19.136 12a10 10 0 0 1-14.271 0",
		key: "ppmlo4"
	}],
	["path", {
		d: "m21 21-2.16-3.84",
		key: "vylbct"
	}],
	["path", {
		d: "m3 21 8.02-14.26",
		key: "1ssaw4"
	}],
	["circle", {
		cx: "12",
		cy: "5",
		r: "2",
		key: "f1ur92"
	}]
]), Zl = m("drill", [
	["path", {
		d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z",
		key: "ioqxb1"
	}],
	["path", {
		d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",
		key: "1rs59n"
	}],
	["path", {
		d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",
		key: "105ega"
	}],
	["path", {
		d: "M18 6h4",
		key: "66u95g"
	}],
	["path", {
		d: "m5 10-2 8",
		key: "xt2lic"
	}],
	["path", {
		d: "m7 18 2-8",
		key: "1bzku2"
	}]
]), Ql = m("drama", [
	["path", {
		d: "M10 11h.01",
		key: "d2at3l"
	}],
	["path", {
		d: "M14 6h.01",
		key: "k028ub"
	}],
	["path", {
		d: "M18 6h.01",
		key: "1v4wsw"
	}],
	["path", {
		d: "M6.5 13.1h.01",
		key: "1748ia"
	}],
	["path", {
		d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",
		key: "172yzv"
	}],
	["path", {
		d: "M17.4 9.9c-.8.8-2 .8-2.8 0",
		key: "1obv0w"
	}],
	["path", {
		d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",
		key: "rqjl8i"
	}],
	["path", {
		d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",
		key: "1mr6wy"
	}]
]), $l = m("droplet-off", [
	["path", {
		d: "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586",
		key: "8suz2t"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208",
		key: "19dw9m"
	}]
]), eu = m("drone", [
	["path", {
		d: "M10 10 7 7",
		key: "zp14k7"
	}],
	["path", {
		d: "m10 14-3 3",
		key: "1jrpxk"
	}],
	["path", {
		d: "m14 10 3-3",
		key: "7tigam"
	}],
	["path", {
		d: "m14 14 3 3",
		key: "vm23p3"
	}],
	["path", {
		d: "M14.205 4.139a4 4 0 1 1 5.439 5.863",
		key: "1tm5p2"
	}],
	["path", {
		d: "M19.637 14a4 4 0 1 1-5.432 5.868",
		key: "16egi2"
	}],
	["path", {
		d: "M4.367 10a4 4 0 1 1 5.438-5.862",
		key: "1wta6a"
	}],
	["path", {
		d: "M9.795 19.862a4 4 0 1 1-5.429-5.873",
		key: "q39hpv"
	}],
	["rect", {
		x: "10",
		y: "8",
		width: "4",
		height: "8",
		rx: "1",
		key: "phrjt1"
	}]
]), tu = m("droplet", [["path", {
	d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
	key: "c7niix"
}]]), nu = m("droplets", [["path", {
	d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
	key: "1ptgy4"
}], ["path", {
	d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
	key: "1sl1rz"
}]]), ru = m("drum", [
	["path", {
		d: "m2 2 8 8",
		key: "1v6059"
	}],
	["path", {
		d: "m22 2-8 8",
		key: "173r8a"
	}],
	["ellipse", {
		cx: "12",
		cy: "9",
		rx: "10",
		ry: "5",
		key: "liohsx"
	}],
	["path", {
		d: "M7 13.4v7.9",
		key: "1yi6u9"
	}],
	["path", {
		d: "M12 14v8",
		key: "1tn2tj"
	}],
	["path", {
		d: "M17 13.4v7.9",
		key: "eqz2v3"
	}],
	["path", {
		d: "M2 9v8a10 5 0 0 0 20 0V9",
		key: "1750ul"
	}]
]), iu = m("drumstick", [["path", {
	d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",
	key: "1dtqwm"
}], ["path", {
	d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",
	key: "1oq1fw"
}]]), au = m("dumbbell", [
	["path", {
		d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",
		key: "9m4mmf"
	}],
	["path", {
		d: "m2.5 21.5 1.4-1.4",
		key: "17g3f0"
	}],
	["path", {
		d: "m20.1 3.9 1.4-1.4",
		key: "1qn309"
	}],
	["path", {
		d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",
		key: "1t2c92"
	}],
	["path", {
		d: "m9.6 14.4 4.8-4.8",
		key: "6umqxw"
	}]
]), ou = m("ear-off", [
	["path", {
		d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",
		key: "1qngmn"
	}],
	["path", {
		d: "M6 8.5c0-.75.13-1.47.36-2.14",
		key: "b06bma"
	}],
	["path", {
		d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",
		key: "g10hsz"
	}],
	["path", {
		d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",
		key: "ygzou7"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), su = m("ear", [["path", {
	d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",
	key: "1dfaln"
}], ["path", {
	d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",
	key: "1qnva7"
}]]), cu = m("earth", [
	["path", {
		d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
		key: "1djwo0"
	}],
	["path", {
		d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
		key: "1tzkfa"
	}],
	["path", {
		d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
		key: "14pb5j"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), lu = m("earth-lock", [
	["path", {
		d: "M7 3.34V5a3 3 0 0 0 3 3",
		key: "w732o8"
	}],
	["path", {
		d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
		key: "f02343"
	}],
	["path", {
		d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
		key: "1djwo0"
	}],
	["path", {
		d: "M12 2a10 10 0 1 0 9.54 13",
		key: "zjsr6q"
	}],
	["path", {
		d: "M20 6V4a2 2 0 1 0-4 0v2",
		key: "1of5e8"
	}],
	["rect", {
		width: "8",
		height: "5",
		x: "14",
		y: "6",
		rx: "1",
		key: "1fmf51"
	}]
]), uu = m("eclipse", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 2a7 7 0 1 0 10 10",
	key: "1yuj32"
}]]), du = m("egg-fried", [["circle", {
	cx: "11.5",
	cy: "12.5",
	r: "3.5",
	key: "1cl1mi"
}], ["path", {
	d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
	key: "165ef9"
}]]), fu = m("egg-off", [
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19",
		key: "13g2jy"
	}],
	["path", {
		d: "M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568",
		key: "1581id"
	}]
]), pu = m("egg", [["path", {
	d: "M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12",
	key: "1le142"
}]]), mu = m("ellipse", [["ellipse", {
	cx: "12",
	cy: "12",
	rx: "10",
	ry: "6",
	key: "swdkt4"
}]]), hu = m("ellipsis-vertical", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "12",
		cy: "5",
		r: "1",
		key: "gxeob9"
	}],
	["circle", {
		cx: "12",
		cy: "19",
		r: "1",
		key: "lyex9k"
	}]
]), gu = m("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]), _u = m("equal-approximately", [["path", {
	d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",
	key: "yrdkhy"
}], ["path", {
	d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",
	key: "gzkvyz"
}]]), vu = m("equal-not", [
	["line", {
		x1: "5",
		x2: "19",
		y1: "9",
		y2: "9",
		key: "1nwqeh"
	}],
	["line", {
		x1: "5",
		x2: "19",
		y1: "15",
		y2: "15",
		key: "g8yjpy"
	}],
	["line", {
		x1: "19",
		x2: "5",
		y1: "5",
		y2: "19",
		key: "1x9vlm"
	}]
]), yu = m("equal", [["line", {
	x1: "5",
	x2: "19",
	y1: "9",
	y2: "9",
	key: "1nwqeh"
}], ["line", {
	x1: "5",
	x2: "19",
	y1: "15",
	y2: "15",
	key: "g8yjpy"
}]]), bu = m("eraser", [["path", {
	d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
	key: "g5wo59"
}], ["path", {
	d: "m5.082 11.09 8.828 8.828",
	key: "1wx5vj"
}]]), xu = m("euro", [
	["path", {
		d: "M4 10h12",
		key: "1y6xl8"
	}],
	["path", {
		d: "M4 14h9",
		key: "1loblj"
	}],
	["path", {
		d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
		key: "1j6lzo"
	}]
]), Su = m("ethernet-port", [
	["path", {
		d: "M10 8v1",
		key: "1talb4"
	}],
	["path", {
		d: "M14 8v1",
		key: "1rsfgr"
	}],
	["path", {
		d: "M18 8v1",
		key: "gnkwox"
	}],
	["path", {
		d: "M19 17a2 2 0 00-1.765 1.059l-.47.882A2 2 0 0115 20H9a2 2 0 01-1.765-1.059l-.47-.882A2 2 0 005 17H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2z",
		key: "v5qa57"
	}],
	["path", {
		d: "M6 8v1",
		key: "1636ez"
	}]
]), Cu = m("ev-charger", [
	["path", {
		d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5",
		key: "1wtuz0"
	}],
	["path", {
		d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16",
		key: "e09ifn"
	}],
	["path", {
		d: "M2 21h13",
		key: "1x0fut"
	}],
	["path", {
		d: "M3 7h11",
		key: "19efrr"
	}],
	["path", {
		d: "m9 11-2 3h3l-2 3",
		key: "lmzxi1"
	}]
]), wu = m("expand", [
	["path", {
		d: "m15 15 6 6",
		key: "1s409w"
	}],
	["path", {
		d: "m15 9 6-6",
		key: "ko1vev"
	}],
	["path", {
		d: "M21 16v5h-5",
		key: "1ck2sf"
	}],
	["path", {
		d: "M21 8V3h-5",
		key: "1qoq8a"
	}],
	["path", {
		d: "M3 16v5h5",
		key: "1t08am"
	}],
	["path", {
		d: "m3 21 6-6",
		key: "wwnumi"
	}],
	["path", {
		d: "M3 8V3h5",
		key: "1ln10m"
	}],
	["path", {
		d: "M9 9 3 3",
		key: "v551iv"
	}]
]), Tu = m("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), Eu = m("eye-closed", [
	["path", {
		d: "m15 18-.722-3.25",
		key: "1j64jw"
	}],
	["path", {
		d: "M2 8a10.645 10.645 0 0 0 20 0",
		key: "1e7gxb"
	}],
	["path", {
		d: "m20 15-1.726-2.05",
		key: "1cnuld"
	}],
	["path", {
		d: "m4 15 1.726-2.05",
		key: "1dsqqd"
	}],
	["path", {
		d: "m9 18 .722-3.25",
		key: "ypw2yx"
	}]
]), Du = m("eye-dashed", [
	["path", {
		d: "M13.054 18.946a11 11 0 0 1-2.11 0",
		key: "1lgjj0"
	}],
	["path", {
		d: "M13.054 5.054a11 11 0 0 0-2.11-.001",
		key: "f7voaa"
	}],
	["path", {
		d: "M17.072 6.274a11 11 0 0 1 1.753 1.173",
		key: "1rga24"
	}],
	["path", {
		d: "M18.825 16.552a11 11 0 0 1-1.753 1.174",
		key: "jfvai2"
	}],
	["path", {
		d: "M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955",
		key: "1deed4"
	}],
	["path", {
		d: "M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954",
		key: "1k4xil"
	}],
	["path", {
		d: "M5.173 7.448a11 11 0 0 1 1.753-1.174",
		key: "mwd8rq"
	}],
	["path", {
		d: "M6.926 17.726a11 11 0 0 1-1.753-1.174",
		key: "15rpim"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}]
]), Ou = m("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), ku = m("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Au = m("face-angry", [
	["path", {
		d: "M15 11V9.416",
		key: "v2ax0h"
	}],
	["path", {
		d: "M17 9a5 5 0 00-3 1",
		key: "1d2djj"
	}],
	["path", {
		d: "M7 9a5 5 0 013 1",
		key: "y5n5ez"
	}],
	["path", {
		d: "M9 11V9.416",
		key: "1t25y0"
	}],
	["path", {
		d: "M9 16a5 5 0 016.001 0",
		key: "111vmx"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), ju = m("face-grinning", [
	["path", {
		d: "M15 10V9",
		key: "4dkmfx"
	}],
	["path", {
		d: "M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302",
		key: "1ad3z7"
	}],
	["path", {
		d: "M9 10V9",
		key: "1lazqi"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), Mu = m("face-expressionless", [
	["path", {
		d: "M14 10h2",
		key: "1lstlu"
	}],
	["path", {
		d: "M8 10h2",
		key: "66od0"
	}],
	["path", {
		d: "M8 16h8",
		key: "10ke2u"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), Nu = m("face-neutral", [
	["path", {
		d: "M15 10V9",
		key: "4dkmfx"
	}],
	["path", {
		d: "M8 16h8",
		key: "10ke2u"
	}],
	["path", {
		d: "M9 10V9",
		key: "1lazqi"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), Pu = m("face-slightly-frowning", [
	["path", {
		d: "M15 10V9",
		key: "4dkmfx"
	}],
	["path", {
		d: "M9 10V9",
		key: "1lazqi"
	}],
	["path", {
		d: "M9 16a5 5 0 016 0",
		key: "34mdxb"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), Fu = m("face-slightly-smiling-plus", [
	["path", {
		d: "M13.267 2.08a10 10 0 108.653 8.653",
		key: "1wbpyh"
	}],
	["path", {
		d: "M15 10V9",
		key: "4dkmfx"
	}],
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M16.472 15a6 6 0 01-8.943 0",
		key: "7qomzy"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M9 10V9",
		key: "1lazqi"
	}]
]), Iu = m("face-slightly-smiling", [
	["path", {
		d: "M15 10V9",
		key: "4dkmfx"
	}],
	["path", {
		d: "M16.472 15a6 6 0 01-8.943 0",
		key: "7qomzy"
	}],
	["path", {
		d: "M9 10V9",
		key: "1lazqi"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), Lu = m("factory", [
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}],
	["path", {
		d: "M16 16h.01",
		key: "1f9h7w"
	}],
	["path", {
		d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
		key: "1iv0i2"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}]
]), Ru = m("fan", [["path", {
	d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
	key: "484a7f"
}], ["path", {
	d: "M12 12v.01",
	key: "u5ubse"
}]]), zu = m("fast-forward", [["path", {
	d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",
	key: "b19h5q"
}], ["path", {
	d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",
	key: "h7h5ge"
}]]), Bu = m("feather", [
	["path", {
		d: "M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z",
		key: "1nq9jb"
	}],
	["path", {
		d: "M16 8 2 22",
		key: "vp34q"
	}],
	["path", {
		d: "M17.488 15H9",
		key: "16yirz"
	}]
]), Vu = m("fence", [
	["path", {
		d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",
		key: "1n2rgs"
	}],
	["path", {
		d: "M6 8h4",
		key: "utf9t1"
	}],
	["path", {
		d: "M6 18h4",
		key: "12yh4b"
	}],
	["path", {
		d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",
		key: "3ha7mj"
	}],
	["path", {
		d: "M14 8h4",
		key: "1r8wg2"
	}],
	["path", {
		d: "M14 18h4",
		key: "1t3kbu"
	}],
	["path", {
		d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",
		key: "dfd4e2"
	}]
]), Hu = m("ferris-wheel", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "M12 2v4",
		key: "3427ic"
	}],
	["path", {
		d: "m6.8 15-3.5 2",
		key: "hjy98k"
	}],
	["path", {
		d: "m20.7 7-3.5 2",
		key: "f08gto"
	}],
	["path", {
		d: "M6.8 9 3.3 7",
		key: "1aevh4"
	}],
	["path", {
		d: "m20.7 17-3.5-2",
		key: "1liqo3"
	}],
	["path", {
		d: "m9 22 3-8 3 8",
		key: "wees03"
	}],
	["path", {
		d: "M8 22h8",
		key: "rmew8v"
	}],
	["path", {
		d: "M18 18.7a9 9 0 1 0-12 0",
		key: "dhzg4g"
	}]
]), Uu = m("file-archive", [
	["path", {
		d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",
		key: "4pqfef"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 12v-1",
		key: "1ej8lb"
	}],
	["path", {
		d: "M8 18v-2",
		key: "qcmpov"
	}],
	["path", {
		d: "M8 7V6",
		key: "1nbb54"
	}],
	["circle", {
		cx: "8",
		cy: "20",
		r: "2",
		key: "ckkr5m"
	}]
]), Wu = m("file-badge", [
	["path", {
		d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3",
		key: "cvl1xm"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88",
		key: "1ff7gj"
	}],
	["circle", {
		cx: "6",
		cy: "14",
		r: "3",
		key: "a1xfv6"
	}]
]), Gu = m("file-axis-3d", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m8 18 4-4",
		key: "12zab0"
	}],
	["path", {
		d: "M8 10v8h8",
		key: "tlaukw"
	}]
]), Ku = m("file-box", [
	["path", {
		d: "M14 2v5a1 1 0 001 1h5",
		key: "9v5fu7"
	}],
	["path", {
		d: "M14.692 22H18a2 2 0 002-2V8a2.4 2.4 0 00-.706-1.706l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v3.804",
		key: "1ne0j7"
	}],
	["path", {
		d: "M2.264 13.752 7 16.5l4.737-2.748",
		key: "t73mg3"
	}],
	["path", {
		d: "M2.995 13.014A2 2 0 002 14.744v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0012 18.26v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z",
		key: "h4qck"
	}],
	["path", {
		d: "M7 16.5V22",
		key: "1i1gou"
	}]
]), qu = m("file-braces", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
		key: "1oajmo"
	}],
	["path", {
		d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
		key: "mpwhp6"
	}]
]), Ju = m("file-chart-column-increasing", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 18v-2",
		key: "qcmpov"
	}],
	["path", {
		d: "M12 18v-4",
		key: "q1q25u"
	}],
	["path", {
		d: "M16 18v-6",
		key: "15y0np"
	}]
]), Yu = m("file-braces-corner", [
	["path", {
		d: "M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",
		key: "14cnrg"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1",
		key: "sr0ebq"
	}],
	["path", {
		d: "M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1",
		key: "w793db"
	}]
]), Xu = m("file-chart-column", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 18v-1",
		key: "zg0ygc"
	}],
	["path", {
		d: "M12 18v-6",
		key: "17g6i2"
	}],
	["path", {
		d: "M16 18v-3",
		key: "j5jt4h"
	}]
]), Zu = m("file-chart-pie", [
	["path", {
		d: "M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512",
		key: "13hoie"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M4.017 11.512a6 6 0 1 0 8.466 8.475",
		key: "s6vs5t"
	}],
	["path", {
		d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",
		key: "1dl6s6"
	}]
]), Qu = m("file-chart-line", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m16 13-3.5 3.5-2-2L8 17",
		key: "zz7yod"
	}]
]), $u = m("file-check-corner", [
	["path", {
		d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",
		key: "g5mvt7"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m14 20 2 2 4-4",
		key: "15kota"
	}]
]), ed = m("file-check", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m9 15 2 2 4-4",
		key: "1grp1n"
	}]
]), td = m("file-clock", [
	["path", {
		d: "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85",
		key: "ryk6xj"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 14v2.2l1.6 1",
		key: "6m4bie"
	}],
	["circle", {
		cx: "8",
		cy: "16",
		r: "6",
		key: "10v15b"
	}]
]), nd = m("file-code", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 12.5 8 15l2 2.5",
		key: "1tg20x"
	}],
	["path", {
		d: "m14 12.5 2 2.5-2 2.5",
		key: "yinavb"
	}]
]), rd = m("file-code-corner", [
	["path", {
		d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
		key: "1wthlu"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m5 16-3 3 3 3",
		key: "331omg"
	}],
	["path", {
		d: "m9 22 3-3-3-3",
		key: "lsp7cz"
	}]
]), id = m("file-cog", [
	["path", {
		d: "M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z",
		key: "1ckgky"
	}],
	["path", {
		d: "M20 8v12a2 2 0 0 1-2 2h-4.182",
		key: "1726p0"
	}],
	["path", {
		d: "m3.305 19.53.923-.382",
		key: "ao1pio"
	}],
	["path", {
		d: "M4 10.592V4a2 2 0 0 1 2-2h8",
		key: "1foop0"
	}],
	["path", {
		d: "m4.228 16.852-.924-.383",
		key: "1fv9zy"
	}],
	["path", {
		d: "m5.852 15.228-.383-.923",
		key: "1a9hc2"
	}],
	["path", {
		d: "m5.852 20.772-.383.924",
		key: "1sh9ke"
	}],
	["path", {
		d: "m8.148 15.228.383-.923",
		key: "4yu6lf"
	}],
	["path", {
		d: "m8.53 21.696-.382-.924",
		key: "18b0s9"
	}],
	["path", {
		d: "m9.773 16.852.922-.383",
		key: "ti6xop"
	}],
	["path", {
		d: "m9.773 19.148.922.383",
		key: "rws47d"
	}],
	["circle", {
		cx: "7",
		cy: "18",
		r: "3",
		key: "lvkj7j"
	}]
]), ad = m("file-diff", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M9 10h6",
		key: "9gxzsh"
	}],
	["path", {
		d: "M12 13V7",
		key: "h0r20n"
	}],
	["path", {
		d: "M9 17h6",
		key: "r8uit2"
	}]
]), od = m("file-digit", [
	["path", {
		d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2",
		key: "jrl274"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 16h2v6",
		key: "1bxocy"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}],
	["rect", {
		x: "2",
		y: "16",
		width: "4",
		height: "6",
		rx: "2",
		key: "r45zd0"
	}]
]), sd = m("file-down", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M12 18v-6",
		key: "17g6i2"
	}],
	["path", {
		d: "m9 15 3 3 3-3",
		key: "1npd3o"
	}]
]), cd = m("file-exclamation-point", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), W = m("file-headphone", [
	["path", {
		d: "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343",
		key: "1vfytu"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0",
		key: "1etmh7"
	}]
]), ld = m("file-heart", [
	["path", {
		d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7",
		key: "oagw2b"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z",
		key: "rg3psg"
	}]
]), ud = m("file-image", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["circle", {
		cx: "10",
		cy: "12",
		r: "2",
		key: "737tya"
	}],
	["path", {
		d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",
		key: "wt3hpn"
	}]
]), dd = m("file-input", [
	["path", {
		d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1",
		key: "1q9hii"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M2 15h10",
		key: "jfw4w8"
	}],
	["path", {
		d: "m9 18 3-3-3-3",
		key: "112psh"
	}]
]), fd = m("file-key", [
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M4 12v6",
		key: "bg1pfk"
	}],
	["path", {
		d: "M4 14h2",
		key: "1sf9f8"
	}],
	["path", {
		d: "M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4",
		key: "d56i0q"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]), pd = m("file-lock", [
	["path", {
		d: "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3",
		key: "1432pc"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M9 17v-2a2 2 0 0 0-4 0v2",
		key: "168m41"
	}],
	["rect", {
		width: "8",
		height: "5",
		x: "3",
		y: "17",
		rx: "1",
		key: "o8vfew"
	}]
]), md = m("file-minus-corner", [
	["path", {
		d: "M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12",
		key: "l9p8hp"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M14 18h6",
		key: "1m8k6r"
	}]
]), hd = m("file-minus", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M9 15h6",
		key: "cctwl0"
	}]
]), gd = m("file-music", [
	["path", {
		d: "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35",
		key: "5ad7z2"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 20v-7l3 1.474",
		key: "1ggyb9"
	}],
	["circle", {
		cx: "6",
		cy: "20",
		r: "2",
		key: "j7wjp0"
	}]
]), _d = m("file-output", [
	["path", {
		d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127",
		key: "wfxp4w"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m5 11-3 3",
		key: "1dgrs4"
	}],
	["path", {
		d: "m5 17-3-3h10",
		key: "1mvvaf"
	}]
]), vd = m("file-pen-line", [
	["path", {
		d: "M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z",
		key: "ukzhwg"
	}],
	["path", {
		d: "M14.487 7.858A1 1 0 0 1 14 7V2",
		key: "1klhew"
	}],
	["path", {
		d: "M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516",
		key: "rxaxab"
	}],
	["path", {
		d: "M8 18h1",
		key: "13wk12"
	}]
]), yd = m("file-pen", [
	["path", {
		d: "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",
		key: "o6klzx"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",
		key: "zhnas1"
	}]
]), bd = m("file-play", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z",
		key: "1tzo1f"
	}]
]), xd = m("file-plus", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M9 15h6",
		key: "cctwl0"
	}],
	["path", {
		d: "M12 18v-6",
		key: "17g6i2"
	}]
]), Sd = m("file-plus-corner", [
	["path", {
		d: "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35",
		key: "17jvcc"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M14 19h6",
		key: "bvotb8"
	}],
	["path", {
		d: "M17 16v6",
		key: "18yu1i"
	}]
]), Cd = m("file-question-mark", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}],
	["path", {
		d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",
		key: "mhlwft"
	}]
]), wd = m("file-scan", [
	["path", {
		d: "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35",
		key: "1cdjst"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M16 14a2 2 0 0 0-2 2",
		key: "ceaadl"
	}],
	["path", {
		d: "M16 22a2 2 0 0 1-2-2",
		key: "1wqh5n"
	}],
	["path", {
		d: "M20 14a2 2 0 0 1 2 2",
		key: "1ny6zw"
	}],
	["path", {
		d: "M20 22a2 2 0 0 0 2-2",
		key: "1l9q4k"
	}]
]), Td = m("file-search-corner", [
	["path", {
		d: "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25",
		key: "uh4ikj"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m21 22-2.88-2.88",
		key: "9dd25w"
	}],
	["circle", {
		cx: "16",
		cy: "17",
		r: "3",
		key: "11br10"
	}]
]), Ed = m("file-search", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["circle", {
		cx: "11.5",
		cy: "14.5",
		r: "2.5",
		key: "1bq0ko"
	}],
	["path", {
		d: "M13.3 16.3 15 18",
		key: "2quom7"
	}]
]), Dd = m("file-signal", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 15h.01",
		key: "a7atzg"
	}],
	["path", {
		d: "M11.5 13.5a2.5 2.5 0 0 1 0 3",
		key: "1fccat"
	}],
	["path", {
		d: "M15 12a5 5 0 0 1 0 6",
		key: "ps46cm"
	}]
]), Od = m("file-sliders", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "M10 11v2",
		key: "1s651w"
	}],
	["path", {
		d: "M8 17h8",
		key: "wh5c61"
	}],
	["path", {
		d: "M14 16v2",
		key: "12fp5e"
	}]
]), kd = m("file-spreadsheet", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M8 13h2",
		key: "yr2amv"
	}],
	["path", {
		d: "M14 13h2",
		key: "un5t4a"
	}],
	["path", {
		d: "M8 17h2",
		key: "2yhykz"
	}],
	["path", {
		d: "M14 17h2",
		key: "10kma7"
	}]
]), Ad = m("file-stack", [
	["path", {
		d: "M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1",
		key: "likhh7"
	}],
	["path", {
		d: "M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1",
		key: "17ky3x"
	}],
	["path", {
		d: "M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z",
		key: "1hyeo0"
	}]
]), jd = m("file-symlink", [
	["path", {
		d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
		key: "huwfnr"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m10 18 3-3-3-3",
		key: "18f6ys"
	}]
]), Md = m("file-terminal", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m8 16 2-2-2-2",
		key: "10vzyd"
	}],
	["path", {
		d: "M12 18h4",
		key: "1wd2n7"
	}]
]), Nd = m("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]), Pd = m("file-type-corner", [
	["path", {
		d: "M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",
		key: "15usau"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16",
		key: "s1gz5"
	}],
	["path", {
		d: "M6 22h2",
		key: "194x9m"
	}],
	["path", {
		d: "M7 14v8",
		key: "11ixej"
	}]
]), Fd = m("file-type", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M11 18h2",
		key: "12mj7e"
	}],
	["path", {
		d: "M12 12v6",
		key: "3ahymv"
	}],
	["path", {
		d: "M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5",
		key: "qbrxap"
	}]
]), Id = m("file-up", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M12 12v6",
		key: "3ahymv"
	}],
	["path", {
		d: "m15 15-3-3-3 3",
		key: "15xj92"
	}]
]), Ld = m("file-user", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M16 22a4 4 0 0 0-8 0",
		key: "7a83pg"
	}],
	["circle", {
		cx: "12",
		cy: "15",
		r: "3",
		key: "g36mzq"
	}]
]), Rd = m("file-video-camera", [
	["path", {
		d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2",
		key: "jrl274"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157",
		key: "17aeo9"
	}],
	["rect", {
		width: "7",
		height: "6",
		x: "3",
		y: "16",
		rx: "1",
		key: "s27ndx"
	}]
]), zd = m("file-volume", [
	["path", {
		d: "M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95",
		key: "44gpjv"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M12 15a5 5 0 0 1 0 6",
		key: "oxg87a"
	}],
	["path", {
		d: "M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z",
		key: "8rtoi1"
	}]
]), Bd = m("file-x-corner", [
	["path", {
		d: "M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5",
		key: "1jo35a"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m15 17 5 5",
		key: "36xl1x"
	}],
	["path", {
		d: "m20 17-5 5",
		key: "vdz27y"
	}]
]), Vd = m("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]), Hd = m("file-x", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m14.5 12.5-5 5",
		key: "b62r18"
	}],
	["path", {
		d: "m9.5 12.5 5 5",
		key: "1rk7el"
	}]
]), Ud = m("files", [
	["path", {
		d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",
		key: "14sh0y"
	}],
	["path", {
		d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",
		key: "1970lx"
	}],
	["path", {
		d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",
		key: "l4dndm"
	}]
]), Wd = m("film", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7 3v18",
		key: "bbkbws"
	}],
	["path", {
		d: "M3 7.5h4",
		key: "zfgn84"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["path", {
		d: "M3 16.5h4",
		key: "1230mu"
	}],
	["path", {
		d: "M17 3v18",
		key: "in4fa5"
	}],
	["path", {
		d: "M17 7.5h4",
		key: "myr1c1"
	}],
	["path", {
		d: "M17 16.5h4",
		key: "go4c1d"
	}]
]), Gd = m("fingerprint-pattern", [
	["path", {
		d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
		key: "1nerag"
	}],
	["path", {
		d: "M14 13.12c0 2.38 0 6.38-1 8.88",
		key: "o46ks0"
	}],
	["path", {
		d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
		key: "ptglia"
	}],
	["path", {
		d: "M2 12a10 10 0 0 1 18-6",
		key: "ydlgp0"
	}],
	["path", {
		d: "M2 16h.01",
		key: "1gqxmh"
	}],
	["path", {
		d: "M21.8 16c.2-2 .131-5.354 0-6",
		key: "drycrb"
	}],
	["path", {
		d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
		key: "1tidbn"
	}],
	["path", {
		d: "M8.65 22c.21-.66.45-1.32.57-2",
		key: "13wd9y"
	}],
	["path", {
		d: "M9 6.8a6 6 0 0 1 9 5.2v2",
		key: "1fr1j5"
	}]
]), Kd = m("fire-extinguisher", [
	["path", {
		d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",
		key: "sqyvz"
	}],
	["path", {
		d: "M9 18h8",
		key: "i7pszb"
	}],
	["path", {
		d: "M18 3h-3",
		key: "7idoqj"
	}],
	["path", {
		d: "M11 3a6 6 0 0 0-6 6v11",
		key: "1v5je3"
	}],
	["path", {
		d: "M5 13h4",
		key: "svpcxo"
	}],
	["path", {
		d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",
		key: "vsjego"
	}]
]), qd = m("fish-off", [
	["path", {
		d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",
		key: "1j1hse"
	}],
	["path", {
		d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",
		key: "1q46z8"
	}],
	["path", {
		d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",
		key: "1407gh"
	}]
]), Jd = m("fish-symbol", [["path", {
	d: "M2 16s9-15 20-4C11 23 2 8 2 8",
	key: "h4oh4o"
}]]), Yd = m("fish", [
	["path", {
		d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
		key: "15baut"
	}],
	["path", {
		d: "M18 12v.5",
		key: "18hhni"
	}],
	["path", {
		d: "M16 17.93a9.77 9.77 0 0 1 0-11.86",
		key: "16dt7o"
	}],
	["path", {
		d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
		key: "l9di03"
	}],
	["path", {
		d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",
		key: "1kjonw"
	}],
	["path", {
		d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",
		key: "1zlm23"
	}]
]), Xd = m("fishing-hook", [
	["path", {
		d: "m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10",
		key: "157y8s"
	}],
	["path", {
		d: "M20.414 8.586 22 7",
		key: "5g2s34"
	}],
	["circle", {
		cx: "19",
		cy: "10",
		r: "2",
		key: "7363ft"
	}]
]), Zd = m("fishing-rod", [
	["path", {
		d: "M4 11h1",
		key: "13eipc"
	}],
	["path", {
		d: "M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4",
		key: "1hs3im"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "2",
		key: "1emm8v"
	}]
]), Qd = m("flag-off", [
	["path", {
		d: "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
		key: "1q158e"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M4 22V4",
		key: "1plyxx"
	}],
	["path", {
		d: "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347",
		key: "xj1b71"
	}]
]), $d = m("flag-triangle-left", [["path", {
	d: "M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5",
	key: "rbbtmw"
}]]), ef = m("flag-triangle-right", [["path", {
	d: "M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5",
	key: "kfjsu0"
}]]), tf = m("flag", [["path", {
	d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
	key: "1jaruq"
}]]), nf = m("flame-kindling", [
	["path", {
		d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
		key: "1ir223"
	}],
	["path", {
		d: "m5 22 14-4",
		key: "1brv4h"
	}],
	["path", {
		d: "m5 18 14 4",
		key: "lgyyje"
	}]
]), rf = m("flame", [["path", {
	d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
	key: "1slcih"
}]]), af = m("flashlight-off", [
	["path", {
		d: "M11.652 6H18",
		key: "voqkpr"
	}],
	["path", {
		d: "M12 13v1",
		key: "176q98"
	}],
	["path", {
		d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6",
		key: "dzyf92"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007",
		key: "1hvcfn"
	}]
]), of = m("flashlight", [
	["path", {
		d: "M12 13v1",
		key: "176q98"
	}],
	["path", {
		d: "M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z",
		key: "17vh7j"
	}],
	["path", {
		d: "M6 6h12",
		key: "n6hhss"
	}]
]), sf = m("flask-conical", [
	["path", {
		d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
		key: "18mbvz"
	}],
	["path", {
		d: "M6.453 15h11.094",
		key: "3shlmq"
	}],
	["path", {
		d: "M8.5 2h7",
		key: "csnxdl"
	}]
]), cf = m("flask-conical-off", [
	["path", {
		d: "M10 2v2.343",
		key: "15t272"
	}],
	["path", {
		d: "M14 2v6.343",
		key: "sxr80q"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563",
		key: "k0duyd"
	}],
	["path", {
		d: "M6.453 15H15",
		key: "1f0z33"
	}],
	["path", {
		d: "M8.5 2h7",
		key: "csnxdl"
	}]
]), lf = m("flip-horizontal-2", [
	["path", {
		d: "m3 7 5 5-5 5V7",
		key: "couhi7"
	}],
	["path", {
		d: "m21 7-5 5 5 5V7",
		key: "6ouia7"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "M12 14v2",
		key: "8jcxud"
	}],
	["path", {
		d: "M12 8v2",
		key: "1woqiv"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}]
]), uf = m("flask-round", [
	["path", {
		d: "M10 2v6.292a7 7 0 1 0 4 0V2",
		key: "1s42pc"
	}],
	["path", {
		d: "M5 15h14",
		key: "m0yey3"
	}],
	["path", {
		d: "M8.5 2h7",
		key: "csnxdl"
	}]
]), df = m("flip-vertical-2", [
	["path", {
		d: "m17 3-5 5-5-5h10",
		key: "1ftt6x"
	}],
	["path", {
		d: "m17 21-5-5-5 5h10",
		key: "1m0wmu"
	}],
	["path", {
		d: "M4 12H2",
		key: "rhcxmi"
	}],
	["path", {
		d: "M10 12H8",
		key: "s88cx1"
	}],
	["path", {
		d: "M16 12h-2",
		key: "10asgb"
	}],
	["path", {
		d: "M22 12h-2",
		key: "14jgyd"
	}]
]), ff = m("flower-2", [
	["path", {
		d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
		key: "3pnvol"
	}],
	["circle", {
		cx: "12",
		cy: "8",
		r: "2",
		key: "1822b1"
	}],
	["path", {
		d: "M12 10v12",
		key: "6ubwww"
	}],
	["path", {
		d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
		key: "9hd38g"
	}],
	["path", {
		d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",
		key: "ufn41s"
	}]
]), pf = m("flower", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["path", {
		d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",
		key: "14wa3c"
	}],
	["path", {
		d: "M12 7.5V9",
		key: "1oy5b0"
	}],
	["path", {
		d: "M7.5 12H9",
		key: "eltsq1"
	}],
	["path", {
		d: "M16.5 12H15",
		key: "vk5kw4"
	}],
	["path", {
		d: "M12 16.5V15",
		key: "k7eayi"
	}],
	["path", {
		d: "m8 8 1.88 1.88",
		key: "nxy4qf"
	}],
	["path", {
		d: "M14.12 9.88 16 8",
		key: "1lst6k"
	}],
	["path", {
		d: "m8 16 1.88-1.88",
		key: "h2eex1"
	}],
	["path", {
		d: "M14.12 14.12 16 16",
		key: "uqkrx3"
	}]
]), mf = m("fold-vertical", [
	["path", {
		d: "M12 22v-6",
		key: "6o8u61"
	}],
	["path", {
		d: "M12 8V2",
		key: "1wkif3"
	}],
	["path", {
		d: "M4 12H2",
		key: "rhcxmi"
	}],
	["path", {
		d: "M10 12H8",
		key: "s88cx1"
	}],
	["path", {
		d: "M16 12h-2",
		key: "10asgb"
	}],
	["path", {
		d: "M22 12h-2",
		key: "14jgyd"
	}],
	["path", {
		d: "m15 19-3-3-3 3",
		key: "e37ymu"
	}],
	["path", {
		d: "m15 5-3 3-3-3",
		key: "19d6lf"
	}]
]), hf = m("fold-horizontal", [
	["path", {
		d: "M2 12h6",
		key: "1wqiqv"
	}],
	["path", {
		d: "M22 12h-6",
		key: "1eg9hc"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 8v2",
		key: "1woqiv"
	}],
	["path", {
		d: "M12 14v2",
		key: "8jcxud"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m19 9-3 3 3 3",
		key: "12ol22"
	}],
	["path", {
		d: "m5 15 3-3-3-3",
		key: "1kdhjc"
	}]
]), gf = m("focus", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}]
]), _f = m("folder-archive", [
	["circle", {
		cx: "15",
		cy: "19",
		r: "2",
		key: "u2pros"
	}],
	["path", {
		d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
		key: "1jj40k"
	}],
	["path", {
		d: "M15 11v-1",
		key: "cntcp"
	}],
	["path", {
		d: "M15 17v-2",
		key: "1279jj"
	}]
]), vf = m("folder-bookmark", [["path", {
	d: "M12 6v8l3-3 3 3V6",
	key: "11pvqx"
}], ["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",
	key: "1u1bxd"
}]]), yf = m("folder-check", [["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
	key: "1kt360"
}], ["path", {
	d: "m9 13 2 2 4-4",
	key: "6343dt"
}]]), bf = m("folder-clock", [
	["path", {
		d: "M16 14v2.2l1.6 1",
		key: "fo4ql5"
	}],
	["path", {
		d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",
		key: "1urifu"
	}],
	["circle", {
		cx: "16",
		cy: "16",
		r: "6",
		key: "qoo3c4"
	}]
]), xf = m("folder-closed", [["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
	key: "1kt360"
}], ["path", {
	d: "M2 10h20",
	key: "1ir3d8"
}]]), Sf = m("folder-code", [
	["path", {
		d: "M10 10.5 8 13l2 2.5",
		key: "m4t9c1"
	}],
	["path", {
		d: "m14 10.5 2 2.5-2 2.5",
		key: "14w2eb"
	}],
	["path", {
		d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",
		key: "1u1bxd"
	}]
]), Cf = m("folder-cog", [
	["path", {
		d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3",
		key: "128dxu"
	}],
	["path", {
		d: "m14.305 19.53.923-.382",
		key: "3m78fa"
	}],
	["path", {
		d: "m15.228 16.852-.923-.383",
		key: "npixar"
	}],
	["path", {
		d: "m16.852 15.228-.383-.923",
		key: "5xggr7"
	}],
	["path", {
		d: "m16.852 20.772-.383.924",
		key: "dpfhf9"
	}],
	["path", {
		d: "m19.148 15.228.383-.923",
		key: "1reyyz"
	}],
	["path", {
		d: "m19.53 21.696-.382-.924",
		key: "1goivc"
	}],
	["path", {
		d: "m20.772 16.852.924-.383",
		key: "htqkph"
	}],
	["path", {
		d: "m20.772 19.148.924.383",
		key: "9w9pjp"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}]
]), wf = m("folder-dot", [["path", {
	d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
	key: "1fr9dc"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "1",
	key: "49l61u"
}]]), Tf = m("folder-down", [
	["path", {
		d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
		key: "1kt360"
	}],
	["path", {
		d: "M12 10v6",
		key: "1bos4e"
	}],
	["path", {
		d: "m15 13-3 3-3-3",
		key: "6j2sf0"
	}]
]), Ef = m("folder-git-2", [
	["path", {
		d: "M18 19a5 5 0 0 1-5-5v8",
		key: "sz5oeg"
	}],
	["path", {
		d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
		key: "1w6njk"
	}],
	["circle", {
		cx: "13",
		cy: "12",
		r: "2",
		key: "1j92g6"
	}],
	["circle", {
		cx: "20",
		cy: "19",
		r: "2",
		key: "1obnsp"
	}]
]), Df = m("folder-git", [
	["circle", {
		cx: "12",
		cy: "13",
		r: "2",
		key: "1c1ljs"
	}],
	["path", {
		d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
		key: "1kt360"
	}],
	["path", {
		d: "M14 13h3",
		key: "1dgedf"
	}],
	["path", {
		d: "M7 13h3",
		key: "1pygq7"
	}]
]), Of = m("folder-heart", [["path", {
	d: "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417",
	key: "10r6g4"
}], ["path", {
	d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
	key: "15cy7q"
}]]), kf = m("folder-input", [
	["path", {
		d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
		key: "fm4g5t"
	}],
	["path", {
		d: "M2 13h10",
		key: "pgb2dq"
	}],
	["path", {
		d: "m9 16 3-3-3-3",
		key: "6m91ic"
	}]
]), Af = m("folder-kanban", [
	["path", {
		d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
		key: "1fr9dc"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M12 10v2",
		key: "hh53o1"
	}],
	["path", {
		d: "M16 10v6",
		key: "1d6xys"
	}]
]), jf = m("folder-key", [
	["path", {
		d: "M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36",
		key: "1shsnm"
	}],
	["path", {
		d: "M19 12v6",
		key: "kflna4"
	}],
	["path", {
		d: "M19 14h2",
		key: "wp2qbk"
	}],
	["circle", {
		cx: "19",
		cy: "20",
		r: "2",
		key: "1jfyz6"
	}]
]), Mf = m("folder-lock", [
	["rect", {
		width: "8",
		height: "5",
		x: "14",
		y: "17",
		rx: "1",
		key: "19aais"
	}],
	["path", {
		d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
		key: "1w6v7t"
	}],
	["path", {
		d: "M20 17v-2a2 2 0 1 0-4 0v2",
		key: "pwaxnr"
	}]
]), Nf = m("folder-minus", [["path", {
	d: "M9 13h6",
	key: "1uhe8q"
}], ["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
	key: "1kt360"
}]]), Pf = m("folder-open-dot", [["path", {
	d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
	key: "1nmvlm"
}], ["circle", {
	cx: "14",
	cy: "15",
	r: "1",
	key: "1gm4qj"
}]]), Ff = m("folder-open", [["path", {
	d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
	key: "usdka0"
}]]), If = m("folder-output", [
	["path", {
		d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",
		key: "1yk7aj"
	}],
	["path", {
		d: "M2 13h10",
		key: "pgb2dq"
	}],
	["path", {
		d: "m5 10-3 3 3 3",
		key: "1r8ie0"
	}]
]), Lf = m("folder-pen", [["path", {
	d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
	key: "a8xqs0"
}], ["path", {
	d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
	key: "1saktj"
}]]), Rf = m("folder-plus", [
	["path", {
		d: "M12 10v6",
		key: "1bos4e"
	}],
	["path", {
		d: "M9 13h6",
		key: "1uhe8q"
	}],
	["path", {
		d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
		key: "1kt360"
	}]
]), zf = m("folder-root", [
	["path", {
		d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
		key: "1fr9dc"
	}],
	["circle", {
		cx: "12",
		cy: "13",
		r: "2",
		key: "1c1ljs"
	}],
	["path", {
		d: "M12 15v5",
		key: "11xva1"
	}]
]), Bf = m("folder-search-2", [
	["circle", {
		cx: "11.5",
		cy: "12.5",
		r: "2.5",
		key: "1ea5ju"
	}],
	["path", {
		d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
		key: "1kt360"
	}],
	["path", {
		d: "M13.3 14.3 15 16",
		key: "1y4v1n"
	}]
]), Vf = m("folder-search", [
	["path", {
		d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
		key: "1bw5m7"
	}],
	["path", {
		d: "m21 21-1.9-1.9",
		key: "1g2n9r"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "3",
		key: "18b49y"
	}]
]), Hf = m("folder-symlink", [["path", {
	d: "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
	key: "y8kt7d"
}], ["path", {
	d: "m8 16 3-3-3-3",
	key: "rlqrt1"
}]]), Uf = m("folder-sync", [
	["path", {
		d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",
		key: "1dkoa9"
	}],
	["path", {
		d: "M12 10v4h4",
		key: "1czhmt"
	}],
	["path", {
		d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5",
		key: "lvuxfi"
	}],
	["path", {
		d: "M22 22v-4h-4",
		key: "1ewp4q"
	}],
	["path", {
		d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5",
		key: "14ync0"
	}]
]), Wf = m("folder-tree", [
	["path", {
		d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
		key: "hod4my"
	}],
	["path", {
		d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
		key: "w4yl2u"
	}],
	["path", {
		d: "M3 5a2 2 0 0 0 2 2h3",
		key: "f2jnh7"
	}],
	["path", {
		d: "M3 3v13a2 2 0 0 0 2 2h3",
		key: "k8epm1"
	}]
]), Gf = m("folder-up", [
	["path", {
		d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
		key: "1kt360"
	}],
	["path", {
		d: "M12 10v6",
		key: "1bos4e"
	}],
	["path", {
		d: "m9 13 3-3 3 3",
		key: "1pxg3c"
	}]
]), Kf = m("folder-x", [
	["path", {
		d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
		key: "1kt360"
	}],
	["path", {
		d: "m9.5 10.5 5 5",
		key: "ra9qjz"
	}],
	["path", {
		d: "m14.5 10.5-5 5",
		key: "l2rkpq"
	}]
]), qf = m("folders", [["path", {
	d: "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z",
	key: "a4852j"
}], ["path", {
	d: "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1",
	key: "yxbcw3"
}]]), Jf = m("folder", [["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
	key: "1kt360"
}]]), Yf = m("footprints", [
	["path", {
		d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
		key: "1dudjm"
	}],
	["path", {
		d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
		key: "l2t8xc"
	}],
	["path", {
		d: "M16 17h4",
		key: "1dejxt"
	}],
	["path", {
		d: "M4 13h4",
		key: "1bwh8b"
	}]
]), Xf = m("form", [
	["path", {
		d: "M4 14h6",
		key: "77gv2w"
	}],
	["path", {
		d: "M4 2h10",
		key: "a2b314"
	}],
	["rect", {
		x: "4",
		y: "18",
		width: "16",
		height: "4",
		rx: "1",
		key: "sybzq6"
	}],
	["rect", {
		x: "4",
		y: "6",
		width: "16",
		height: "4",
		rx: "1",
		key: "1osc9e"
	}]
]), Zf = m("forward", [["path", {
	d: "m15 17 5-5-5-5",
	key: "nf172w"
}], ["path", {
	d: "M4 18v-2a4 4 0 0 1 4-4h12",
	key: "jmiej9"
}]]), Qf = m("forklift", [
	["path", {
		d: "M12 12H5a2 2 0 0 0-2 2v5",
		key: "7zsz91"
	}],
	["path", {
		d: "M15 19h7",
		key: "1askl3"
	}],
	["path", {
		d: "M16 19V2",
		key: "1gf9nk"
	}],
	["path", {
		d: "M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828",
		key: "enx9tf"
	}],
	["path", {
		d: "M7 19h4",
		key: "fumhkk"
	}],
	["circle", {
		cx: "13",
		cy: "19",
		r: "2",
		key: "wjnkru"
	}],
	["circle", {
		cx: "5",
		cy: "19",
		r: "2",
		key: "v8kfzx"
	}]
]), $f = m("frame", [
	["line", {
		x1: "22",
		x2: "2",
		y1: "6",
		y2: "6",
		key: "15w7dq"
	}],
	["line", {
		x1: "22",
		x2: "2",
		y1: "18",
		y2: "18",
		key: "1ip48p"
	}],
	["line", {
		x1: "6",
		x2: "6",
		y1: "2",
		y2: "22",
		key: "a2lnyx"
	}],
	["line", {
		x1: "18",
		x2: "18",
		y1: "2",
		y2: "22",
		key: "8vb6jd"
	}]
]), ep = m("fuel", [
	["path", {
		d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5",
		key: "1wtuz0"
	}],
	["path", {
		d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16",
		key: "e09ifn"
	}],
	["path", {
		d: "M2 21h13",
		key: "1x0fut"
	}],
	["path", {
		d: "M3 9h11",
		key: "1p7c0w"
	}]
]), tp = m("funnel-x", [
	["path", {
		d: "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473",
		key: "ol2ft2"
	}],
	["path", {
		d: "m16.5 3.5 5 5",
		key: "15e6fa"
	}],
	["path", {
		d: "m21.5 3.5-5 5",
		key: "m0lwru"
	}]
]), np = m("fullscreen", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["rect", {
		width: "10",
		height: "8",
		x: "7",
		y: "8",
		rx: "1",
		key: "vys8me"
	}]
]), rp = m("funnel-plus", [
	["path", {
		d: "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348",
		key: "8mvsmf"
	}],
	["path", {
		d: "M16 6h6",
		key: "1dogtp"
	}],
	["path", {
		d: "M19 3v6",
		key: "1ytpjt"
	}]
]), ip = m("funnel", [["path", {
	d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
	key: "sc7q7i"
}]]), ap = m("gallery-horizontal-end", [
	["path", {
		d: "M2 7v10",
		key: "a2pl2d"
	}],
	["path", {
		d: "M6 5v14",
		key: "1kq3d7"
	}],
	["rect", {
		width: "12",
		height: "18",
		x: "10",
		y: "3",
		rx: "2",
		key: "13i7bc"
	}]
]), op = m("gallery-horizontal", [
	["path", {
		d: "M2 3v18",
		key: "pzttux"
	}],
	["rect", {
		width: "12",
		height: "18",
		x: "6",
		y: "3",
		rx: "2",
		key: "btr8bg"
	}],
	["path", {
		d: "M22 3v18",
		key: "6jf3v"
	}]
]), sp = m("gallery-thumbnails", [
	["rect", {
		width: "18",
		height: "14",
		x: "3",
		y: "3",
		rx: "2",
		key: "74y24f"
	}],
	["path", {
		d: "M4 21h1",
		key: "16zlid"
	}],
	["path", {
		d: "M9 21h1",
		key: "15o7lz"
	}],
	["path", {
		d: "M14 21h1",
		key: "v9vybs"
	}],
	["path", {
		d: "M19 21h1",
		key: "edywat"
	}]
]), cp = m("gallery-vertical-end", [
	["path", {
		d: "M7 2h10",
		key: "nczekb"
	}],
	["path", {
		d: "M5 6h14",
		key: "u2x4p"
	}],
	["rect", {
		width: "18",
		height: "12",
		x: "3",
		y: "10",
		rx: "2",
		key: "l0tzu3"
	}]
]), lp = m("gallery-vertical", [
	["path", {
		d: "M3 2h18",
		key: "15qxfx"
	}],
	["rect", {
		width: "18",
		height: "12",
		x: "3",
		y: "6",
		rx: "2",
		key: "1439r6"
	}],
	["path", {
		d: "M3 22h18",
		key: "8prr45"
	}]
]), up = m("gamepad-directional", [
	["path", {
		d: "M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z",
		key: "1re2og"
	}],
	["path", {
		d: "M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z",
		key: "1pchrj"
	}],
	["path", {
		d: "M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z",
		key: "16mt4c"
	}],
	["path", {
		d: "M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z",
		key: "19ox6c"
	}]
]), dp = m("gamepad-2", [
	["line", {
		x1: "6",
		x2: "10",
		y1: "11",
		y2: "11",
		key: "1gktln"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "9",
		y2: "13",
		key: "qnk9ow"
	}],
	["line", {
		x1: "15",
		x2: "15.01",
		y1: "12",
		y2: "12",
		key: "krot7o"
	}],
	["line", {
		x1: "18",
		x2: "18.01",
		y1: "10",
		y2: "10",
		key: "1lcuu1"
	}],
	["path", {
		d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
		key: "mfqc10"
	}]
]), fp = m("gauge", [["path", {
	d: "m12 14 4-4",
	key: "9kzdfg"
}], ["path", {
	d: "M3.34 19a10 10 0 1 1 17.32 0",
	key: "19p75a"
}]]), pp = m("gamepad", [
	["line", {
		x1: "6",
		x2: "10",
		y1: "12",
		y2: "12",
		key: "161bw2"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "10",
		y2: "14",
		key: "1i6ji0"
	}],
	["line", {
		x1: "15",
		x2: "15.01",
		y1: "13",
		y2: "13",
		key: "dqpgro"
	}],
	["line", {
		x1: "18",
		x2: "18.01",
		y1: "11",
		y2: "11",
		key: "meh2c"
	}],
	["rect", {
		width: "20",
		height: "12",
		x: "2",
		y: "6",
		rx: "2",
		key: "9lu3g6"
	}]
]), mp = m("gavel", [
	["path", {
		d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",
		key: "pgg06f"
	}],
	["path", {
		d: "m16 16 6-6",
		key: "vzrcl6"
	}],
	["path", {
		d: "m21.5 10.5-8-8",
		key: "a17d9x"
	}],
	["path", {
		d: "m8 8 6-6",
		key: "18bi4p"
	}],
	["path", {
		d: "m8.5 7.5 8 8",
		key: "1oyaui"
	}]
]), hp = m("gem", [
	["path", {
		d: "M10.5 3 8 9l4 13 4-13-2.5-6",
		key: "b3dvk1"
	}],
	["path", {
		d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",
		key: "7w4byz"
	}],
	["path", {
		d: "M2 9h20",
		key: "16fsjt"
	}]
]), gp = m("georgian-lari", [
	["path", {
		d: "M11.5 21a7.5 7.5 0 1 1 7.35-9",
		key: "1gyj8k"
	}],
	["path", {
		d: "M13 12V3",
		key: "18om2a"
	}],
	["path", {
		d: "M4 21h16",
		key: "1h09gz"
	}],
	["path", {
		d: "M9 12V3",
		key: "geutu0"
	}]
]), _p = m("gift", [
	["path", {
		d: "M12 7v14",
		key: "1akyts"
	}],
	["path", {
		d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",
		key: "1sqzm4"
	}],
	["path", {
		d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",
		key: "kc0143"
	}],
	["rect", {
		x: "3",
		y: "7",
		width: "18",
		height: "4",
		rx: "1",
		key: "1hberx"
	}]
]), vp = m("ghost", [
	["path", {
		d: "M9 10h.01",
		key: "qbtxuw"
	}],
	["path", {
		d: "M15 10h.01",
		key: "1qmjsl"
	}],
	["path", {
		d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
		key: "uwwb07"
	}]
]), yp = m("git-branch-minus", [
	["path", {
		d: "M15 6a9 9 0 0 0-9 9V3",
		key: "1cii5b"
	}],
	["path", {
		d: "M21 18h-6",
		key: "139f0c"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}]
]), bp = m("git-branch-plus", [
	["path", {
		d: "M6 3v12",
		key: "qpgusn"
	}],
	["path", {
		d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
		key: "1d02ji"
	}],
	["path", {
		d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
		key: "chk6ph"
	}],
	["path", {
		d: "M15 6a9 9 0 0 0-9 9",
		key: "or332x"
	}],
	["path", {
		d: "M18 15v6",
		key: "9wciyi"
	}],
	["path", {
		d: "M21 18h-6",
		key: "139f0c"
	}]
]), xp = m("git-branch", [
	["path", {
		d: "M15 6a9 9 0 0 0-9 9V3",
		key: "1cii5b"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}]
]), Sp = m("git-commit-horizontal", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["line", {
		x1: "3",
		x2: "9",
		y1: "12",
		y2: "12",
		key: "1dyftd"
	}],
	["line", {
		x1: "15",
		x2: "21",
		y1: "12",
		y2: "12",
		key: "oup4p8"
	}]
]), Cp = m("git-commit-vertical", [
	["path", {
		d: "M12 3v6",
		key: "1holv5"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["path", {
		d: "M12 15v6",
		key: "a9ows0"
	}]
]), wp = m("git-compare-arrows", [
	["circle", {
		cx: "5",
		cy: "6",
		r: "3",
		key: "1qnov2"
	}],
	["path", {
		d: "M12 6h5a2 2 0 0 1 2 2v7",
		key: "1yj91y"
	}],
	["path", {
		d: "m15 9-3-3 3-3",
		key: "1lwv8l"
	}],
	["circle", {
		cx: "19",
		cy: "18",
		r: "3",
		key: "1qljk2"
	}],
	["path", {
		d: "M12 18H7a2 2 0 0 1-2-2V9",
		key: "16sdep"
	}],
	["path", {
		d: "m9 15 3 3-3 3",
		key: "1m3kbl"
	}]
]), Tp = m("git-compare", [
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M13 6h3a2 2 0 0 1 2 2v7",
		key: "1yeb86"
	}],
	["path", {
		d: "M11 18H8a2 2 0 0 1-2-2V9",
		key: "19pyzm"
	}]
]), Ep = m("git-fork", [
	["circle", {
		cx: "12",
		cy: "18",
		r: "3",
		key: "1mpf1b"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["path", {
		d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",
		key: "1uq4wg"
	}],
	["path", {
		d: "M12 12v3",
		key: "158kv8"
	}]
]), Dp = m("git-graph", [
	["circle", {
		cx: "5",
		cy: "6",
		r: "3",
		key: "1qnov2"
	}],
	["path", {
		d: "M5 9v6",
		key: "158jrl"
	}],
	["circle", {
		cx: "5",
		cy: "18",
		r: "3",
		key: "104gr9"
	}],
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["circle", {
		cx: "19",
		cy: "6",
		r: "3",
		key: "108a5v"
	}],
	["path", {
		d: "M16 15.7A9 9 0 0 0 19 9",
		key: "1e3vqb"
	}]
]), Op = m("git-merge-conflict", [
	["path", {
		d: "M12 6h4a2 2 0 0 1 2 2v7",
		key: "18ej7s"
	}],
	["path", {
		d: "M6 12v9",
		key: "9e33v1"
	}],
	["path", {
		d: "M9 3 3 9",
		key: "ahyygn"
	}],
	["path", {
		d: "M9 9 3 3",
		key: "v551iv"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}]
]), kp = m("git-merge", [
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M6 21V9a9 9 0 0 0 9 9",
		key: "7kw0sc"
	}]
]), Ap = m("git-pull-request-arrow", [
	["circle", {
		cx: "5",
		cy: "6",
		r: "3",
		key: "1qnov2"
	}],
	["path", {
		d: "M5 9v12",
		key: "ih889a"
	}],
	["circle", {
		cx: "19",
		cy: "18",
		r: "3",
		key: "1qljk2"
	}],
	["path", {
		d: "m15 9-3-3 3-3",
		key: "1lwv8l"
	}],
	["path", {
		d: "M12 6h5a2 2 0 0 1 2 2v7",
		key: "1yj91y"
	}]
]), jp = m("git-pull-request-closed", [
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M6 9v12",
		key: "1sc30k"
	}],
	["path", {
		d: "m21 3-6 6",
		key: "16nqsk"
	}],
	["path", {
		d: "m21 9-6-6",
		key: "9j17rh"
	}],
	["path", {
		d: "M18 11.5V15",
		key: "65xf6f"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}]
]), Mp = m("git-pull-request-create-arrow", [
	["circle", {
		cx: "5",
		cy: "6",
		r: "3",
		key: "1qnov2"
	}],
	["path", {
		d: "M5 9v12",
		key: "ih889a"
	}],
	["path", {
		d: "m15 9-3-3 3-3",
		key: "1lwv8l"
	}],
	["path", {
		d: "M12 6h5a2 2 0 0 1 2 2v3",
		key: "1rbwk6"
	}],
	["path", {
		d: "M19 15v6",
		key: "10aioa"
	}],
	["path", {
		d: "M22 18h-6",
		key: "1d5gi5"
	}]
]), Np = m("git-pull-request-create", [
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M6 9v12",
		key: "1sc30k"
	}],
	["path", {
		d: "M13 6h3a2 2 0 0 1 2 2v3",
		key: "1jb6z3"
	}],
	["path", {
		d: "M18 15v6",
		key: "9wciyi"
	}],
	["path", {
		d: "M21 18h-6",
		key: "139f0c"
	}]
]), Pp = m("git-pull-request-draft", [
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M18 6V5",
		key: "1oao2s"
	}],
	["path", {
		d: "M18 11v-1",
		key: "11c8tz"
	}],
	["line", {
		x1: "6",
		x2: "6",
		y1: "9",
		y2: "21",
		key: "rroup"
	}]
]), Fp = m("git-pull-request", [
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M13 6h3a2 2 0 0 1 2 2v7",
		key: "1yeb86"
	}],
	["line", {
		x1: "6",
		x2: "6",
		y1: "9",
		y2: "21",
		key: "rroup"
	}]
]), Ip = m("glass-water", [["path", {
	d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",
	key: "p55z4y"
}], ["path", {
	d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",
	key: "mjntcy"
}]]), Lp = m("glasses", [
	["circle", {
		cx: "6",
		cy: "15",
		r: "4",
		key: "vux9w4"
	}],
	["circle", {
		cx: "18",
		cy: "15",
		r: "4",
		key: "18o8ve"
	}],
	["path", {
		d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",
		key: "1ag4bs"
	}],
	["path", {
		d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2",
		key: "1hm1gs"
	}],
	["path", {
		d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2",
		key: "1r31ai"
	}]
]), Rp = m("globe-check", [["path", {
	d: "m15 6 2 2 4-4",
	key: "levio8"
}], ["path", {
	d: "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10",
	key: "46evmv"
}]]), zp = m("globe-lock", [
	["path", {
		d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
		key: "qkt0x6"
	}],
	["path", {
		d: "M2 12h8.5",
		key: "ovaggd"
	}],
	["path", {
		d: "M20 6V4a2 2 0 1 0-4 0v2",
		key: "1of5e8"
	}],
	["rect", {
		width: "8",
		height: "5",
		x: "14",
		y: "6",
		rx: "1",
		key: "1fmf51"
	}]
]), Bp = m("globe-off", [
	["path", {
		d: "M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643",
		key: "1jq2r7"
	}],
	["path", {
		d: "M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929",
		key: "1ohfya"
	}],
	["path", {
		d: "M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687",
		key: "1fyh9w"
	}],
	["path", {
		d: "M17.656 12H22",
		key: "1ttse4"
	}],
	["path", {
		d: "M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45",
		key: "rmtjzo"
	}],
	["path", {
		d: "M2 12h10",
		key: "19562f"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Vp = m("globe-x", [
	["path", {
		d: "m16 3 5 5",
		key: "1husv6"
	}],
	["path", {
		d: "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10",
		key: "46evmv"
	}],
	["path", {
		d: "m21 3-5 5",
		key: "1g5oa7"
	}]
]), Hp = m("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]), Up = m("goal", [
	["path", {
		d: "M12 13V2l8 4-8 4",
		key: "5wlwwj"
	}],
	["path", {
		d: "M20.561 10.222a9 9 0 1 1-12.55-5.29",
		key: "1c0wjv"
	}],
	["path", {
		d: "M8.002 9.997a5 5 0 1 0 8.9 2.02",
		key: "gb1g7m"
	}]
]), Wp = m("gpu", [
	["path", {
		d: "M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2",
		key: "hpo31w"
	}],
	["path", {
		d: "M2 21V3",
		key: "1bzk4w"
	}],
	["path", {
		d: "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3",
		key: "5hbqbf"
	}],
	["circle", {
		cx: "16",
		cy: "11",
		r: "2",
		key: "qt15rb"
	}],
	["circle", {
		cx: "8",
		cy: "11",
		r: "2",
		key: "ssideg"
	}]
]), Gp = m("graduation-cap", [
	["path", {
		d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
		key: "j76jl0"
	}],
	["path", {
		d: "M22 10v6",
		key: "1lu8f3"
	}],
	["path", {
		d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
		key: "1r8lef"
	}]
]), Kp = m("grape", [
	["path", {
		d: "M22 5V2l-5.89 5.89",
		key: "1eenpo"
	}],
	["circle", {
		cx: "16.6",
		cy: "15.89",
		r: "3",
		key: "xjtalx"
	}],
	["circle", {
		cx: "8.11",
		cy: "7.4",
		r: "3",
		key: "u2fv6i"
	}],
	["circle", {
		cx: "12.35",
		cy: "11.65",
		r: "3",
		key: "i6i8g7"
	}],
	["circle", {
		cx: "13.91",
		cy: "5.85",
		r: "3",
		key: "6ye0dv"
	}],
	["circle", {
		cx: "18.15",
		cy: "10.09",
		r: "3",
		key: "snx9no"
	}],
	["circle", {
		cx: "6.56",
		cy: "13.2",
		r: "3",
		key: "17x4xg"
	}],
	["circle", {
		cx: "10.8",
		cy: "17.44",
		r: "3",
		key: "1hogw9"
	}],
	["circle", {
		cx: "5",
		cy: "19",
		r: "3",
		key: "1sn6vo"
	}]
]), qp = m("grid-2x2-check", [["path", {
	d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
	key: "11za1p"
}], ["path", {
	d: "m16 19 2 2 4-4",
	key: "1b14m6"
}]]), Jp = m("grid-2x2-plus", [
	["path", {
		d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
		key: "11za1p"
	}],
	["path", {
		d: "M16 19h6",
		key: "xwg31i"
	}],
	["path", {
		d: "M19 22v-6",
		key: "qhmiwi"
	}]
]), Yp = m("grid-2x2-x", [
	["path", {
		d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
		key: "11za1p"
	}],
	["path", {
		d: "m16 16 5 5",
		key: "8tpb07"
	}],
	["path", {
		d: "m16 21 5-5",
		key: "193jll"
	}]
]), Xp = m("grid-2x2", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), Zp = m("grid-3x2", [
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), Qp = m("grip-horizontal", [
	["circle", {
		cx: "12",
		cy: "9",
		r: "1",
		key: "124mty"
	}],
	["circle", {
		cx: "19",
		cy: "9",
		r: "1",
		key: "1ruzo2"
	}],
	["circle", {
		cx: "5",
		cy: "9",
		r: "1",
		key: "1a8b28"
	}],
	["circle", {
		cx: "12",
		cy: "15",
		r: "1",
		key: "1e56xg"
	}],
	["circle", {
		cx: "19",
		cy: "15",
		r: "1",
		key: "1a92ep"
	}],
	["circle", {
		cx: "5",
		cy: "15",
		r: "1",
		key: "5r1jwy"
	}]
]), G = m("grid-3x3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}]
]), $p = m("grip", [
	["circle", {
		cx: "12",
		cy: "5",
		r: "1",
		key: "gxeob9"
	}],
	["circle", {
		cx: "19",
		cy: "5",
		r: "1",
		key: "w8mnmm"
	}],
	["circle", {
		cx: "5",
		cy: "5",
		r: "1",
		key: "lttvr7"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}],
	["circle", {
		cx: "12",
		cy: "19",
		r: "1",
		key: "lyex9k"
	}],
	["circle", {
		cx: "19",
		cy: "19",
		r: "1",
		key: "shf9b7"
	}],
	["circle", {
		cx: "5",
		cy: "19",
		r: "1",
		key: "bfqh0e"
	}]
]), em = m("group", [
	["path", {
		d: "M3 7V5c0-1.1.9-2 2-2h2",
		key: "adw53z"
	}],
	["path", {
		d: "M17 3h2c1.1 0 2 .9 2 2v2",
		key: "an4l38"
	}],
	["path", {
		d: "M21 17v2c0 1.1-.9 2-2 2h-2",
		key: "144t0e"
	}],
	["path", {
		d: "M7 21H5c-1.1 0-2-.9-2-2v-2",
		key: "rtnfgi"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "7",
		y: "7",
		rx: "1",
		key: "1eyiv7"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "10",
		y: "12",
		rx: "1",
		key: "1qlmkx"
	}]
]), tm = m("grip-vertical", [
	["circle", {
		cx: "9",
		cy: "12",
		r: "1",
		key: "1vctgf"
	}],
	["circle", {
		cx: "9",
		cy: "5",
		r: "1",
		key: "hp0tcf"
	}],
	["circle", {
		cx: "9",
		cy: "19",
		r: "1",
		key: "fkjjf6"
	}],
	["circle", {
		cx: "15",
		cy: "12",
		r: "1",
		key: "1tmaij"
	}],
	["circle", {
		cx: "15",
		cy: "5",
		r: "1",
		key: "19l28e"
	}],
	["circle", {
		cx: "15",
		cy: "19",
		r: "1",
		key: "f4zoj3"
	}]
]), nm = m("guitar", [
	["path", {
		d: "m11.9 12.1 4.514-4.514",
		key: "109xqo"
	}],
	["path", {
		d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",
		key: "txyc8t"
	}],
	["path", {
		d: "m6 16 2 2",
		key: "16qmzd"
	}],
	["path", {
		d: "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",
		key: "1de1vg"
	}]
]), rm = m("ham", [
	["path", {
		d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",
		key: "1k1t7q"
	}],
	["path", {
		d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",
		key: "153t1g"
	}],
	["path", {
		d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",
		key: "gzrt0n"
	}],
	["path", {
		d: "m8.5 16.5-1-1",
		key: "otr954"
	}]
]), im = m("hamburger", [
	["path", {
		d: "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25",
		key: "5dloqd"
	}],
	["path", {
		d: "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2",
		key: "1vl3my"
	}],
	["path", {
		d: "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0",
		key: "1us75o"
	}],
	["path", {
		d: "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",
		key: "qqzweh"
	}]
]), am = m("hammer", [
	["path", {
		d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",
		key: "1hayfq"
	}],
	["path", {
		d: "m18 15 4-4",
		key: "16gjal"
	}],
	["path", {
		d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
		key: "15ts47"
	}]
]), om = m("hand-coins", [
	["path", {
		d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",
		key: "geh8rc"
	}],
	["path", {
		d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
		key: "1fto5m"
	}],
	["path", {
		d: "m2 16 6 6",
		key: "1pfhp9"
	}],
	["circle", {
		cx: "16",
		cy: "9",
		r: "2.9",
		key: "1n0dlu"
	}],
	["circle", {
		cx: "6",
		cy: "5",
		r: "3",
		key: "151irh"
	}]
]), sm = m("hand-fist", [
	["path", {
		d: "M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0",
		key: "1ff7rl"
	}],
	["path", {
		d: "M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5",
		key: "1xmd21"
	}],
	["path", {
		d: "M9 5A2 2 0 1 0 5 5V10",
		key: "f3wfjw"
	}],
	["path", {
		d: "M9 7V4A2 2 0 1 1 13 4V7.268",
		key: "eaoucv"
	}]
]), cm = m("hand-grab", [
	["path", {
		d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",
		key: "edstyy"
	}],
	["path", {
		d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",
		key: "19wdwo"
	}],
	["path", {
		d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",
		key: "1lugqo"
	}],
	["path", {
		d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
		key: "1hbeus"
	}],
	["path", {
		d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",
		key: "1etffm"
	}]
]), lm = m("hand-heart", [
	["path", {
		d: "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",
		key: "1v1a37"
	}],
	["path", {
		d: "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95",
		key: "fhfbnt"
	}],
	["path", {
		d: "m2 15 6 6",
		key: "10dquu"
	}],
	["path", {
		d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91",
		key: "1x6kdw"
	}]
]), um = m("hand-helping", [
	["path", {
		d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",
		key: "1j4xps"
	}],
	["path", {
		d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
		key: "uospg8"
	}],
	["path", {
		d: "m2 13 6 6",
		key: "16e5sb"
	}]
]), dm = m("hand-metal", [
	["path", {
		d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",
		key: "wc6myp"
	}],
	["path", {
		d: "M14 11V9a2 2 0 1 0-4 0v2",
		key: "94qvcw"
	}],
	["path", {
		d: "M10 10.5V5a2 2 0 1 0-4 0v9",
		key: "m1ah89"
	}],
	["path", {
		d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
		key: "t1skq1"
	}]
]), fm = m("hand-platter", [
	["path", {
		d: "M12 3V2",
		key: "ar7q03"
	}],
	["path", {
		d: "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5",
		key: "n2g93r"
	}],
	["path", {
		d: "M2 14h12a2 2 0 0 1 0 4h-2",
		key: "1o2jem"
	}],
	["path", {
		d: "M4 10h16",
		key: "img6z1"
	}],
	["path", {
		d: "M5 10a7 7 0 0 1 14 0",
		key: "1ega1o"
	}],
	["path", {
		d: "M5 14v6a1 1 0 0 1-1 1H2",
		key: "1hescx"
	}]
]), pm = m("hand", [
	["path", {
		d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
		key: "1fvzgz"
	}],
	["path", {
		d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",
		key: "1kc0my"
	}],
	["path", {
		d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",
		key: "10h0bg"
	}],
	["path", {
		d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
		key: "1s1gnw"
	}]
]), mm = m("handbag", [["path", {
	d: "M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z",
	key: "1qbui5"
}], ["path", {
	d: "M8 11V6a4 4 0 0 1 8 0v5",
	key: "tcht90"
}]]), hm = m("handshake", [
	["path", {
		d: "m11 17 2 2a1 1 0 1 0 3-3",
		key: "efffak"
	}],
	["path", {
		d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
		key: "9pr0kb"
	}],
	["path", {
		d: "m21 3 1 11h-2",
		key: "1tisrp"
	}],
	["path", {
		d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
		key: "1uvwmv"
	}],
	["path", {
		d: "M3 4h8",
		key: "1ep09j"
	}]
]), gm = m("hard-drive-download", [
	["path", {
		d: "M12 2v8",
		key: "1q4o3n"
	}],
	["path", {
		d: "m16 6-4 4-4-4",
		key: "6wukr"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		key: "w68u3i"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "M10 18h.01",
		key: "h775k"
	}]
]), _m = m("hard-drive-upload", [
	["path", {
		d: "m16 6-4-4-4 4",
		key: "13yo43"
	}],
	["path", {
		d: "M12 2v8",
		key: "1q4o3n"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		key: "w68u3i"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "M10 18h.01",
		key: "h775k"
	}]
]), vm = m("hard-drive", [
	["path", {
		d: "M10 16h.01",
		key: "1bzywj"
	}],
	["path", {
		d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
		key: "18tbho"
	}],
	["path", {
		d: "M21.946 12.013H2.054",
		key: "zqlbp7"
	}],
	["path", {
		d: "M6 16h.01",
		key: "1pmjb7"
	}]
]), ym = m("hard-hat", [
	["path", {
		d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
		key: "1p9q5i"
	}],
	["path", {
		d: "M14 6a6 6 0 0 1 6 6v3",
		key: "1hnv84"
	}],
	["path", {
		d: "M4 15v-3a6 6 0 0 1 6-6",
		key: "9ciidu"
	}],
	["rect", {
		x: "2",
		y: "15",
		width: "20",
		height: "4",
		rx: "1",
		key: "g3x8cw"
	}]
]), bm = m("hash", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9",
		key: "4lhtct"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15",
		key: "vyu0kd"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21",
		key: "1ggp8o"
	}],
	["line", {
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21",
		key: "weycgp"
	}]
]), xm = m("hat-glasses", [
	["path", {
		d: "M14 18a2 2 0 0 0-4 0",
		key: "1v8fkw"
	}],
	["path", {
		d: "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11",
		key: "1fkr7p"
	}],
	["path", {
		d: "M2 11h20",
		key: "3eubbj"
	}],
	["circle", {
		cx: "17",
		cy: "18",
		r: "3",
		key: "82mm0e"
	}],
	["circle", {
		cx: "7",
		cy: "18",
		r: "3",
		key: "lvkj7j"
	}]
]), Sm = m("hd", [
	["path", {
		d: "M10 12H6",
		key: "15f2ro"
	}],
	["path", {
		d: "M10 15V9",
		key: "1lckn7"
	}],
	["path", {
		d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z",
		key: "b3f847"
	}],
	["path", {
		d: "M6 15V9",
		key: "12stmj"
	}],
	["rect", {
		x: "2",
		y: "5",
		width: "20",
		height: "14",
		rx: "2",
		key: "qneu4z"
	}]
]), Cm = m("haze", [
	["path", {
		d: "m5.2 6.2 1.4 1.4",
		key: "17imol"
	}],
	["path", {
		d: "M2 13h2",
		key: "13gyu8"
	}],
	["path", {
		d: "M20 13h2",
		key: "16rner"
	}],
	["path", {
		d: "m17.4 7.6 1.4-1.4",
		key: "t4xlah"
	}],
	["path", {
		d: "M22 17H2",
		key: "1gtaj3"
	}],
	["path", {
		d: "M22 21H2",
		key: "1gy6en"
	}],
	["path", {
		d: "M16 13a4 4 0 0 0-8 0",
		key: "1dyczq"
	}],
	["path", {
		d: "M12 5V2.5",
		key: "1vytko"
	}]
]), wm = m("hdmi-port", [["path", {
	d: "M22 9a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h.5a2 2 0 011.6.8l.3.4A2 2 0 007 16h10a2 2 0 001.6-.8l.3-.4a2 2 0 011.6-.8h.5a1 1 0 001-1z",
	key: "1kwg9h"
}], ["path", {
	d: "M8 12h8",
	key: "1wcyev"
}]]), Tm = m("heading-1", [
	["path", {
		d: "M4 12h8",
		key: "17cfdx"
	}],
	["path", {
		d: "M4 18V6",
		key: "1rz3zl"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}],
	["path", {
		d: "m17 12 3-2v8",
		key: "1hhhft"
	}]
]), Em = m("heading-2", [
	["path", {
		d: "M4 12h8",
		key: "17cfdx"
	}],
	["path", {
		d: "M4 18V6",
		key: "1rz3zl"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}],
	["path", {
		d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",
		key: "9jr5yi"
	}]
]), Dm = m("heading-3", [
	["path", {
		d: "M4 12h8",
		key: "17cfdx"
	}],
	["path", {
		d: "M4 18V6",
		key: "1rz3zl"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}],
	["path", {
		d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",
		key: "68ncm8"
	}],
	["path", {
		d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",
		key: "1ejuhz"
	}]
]), Om = m("heading-4", [
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}],
	["path", {
		d: "M17 10v3a1 1 0 0 0 1 1h3",
		key: "tj5zdr"
	}],
	["path", {
		d: "M21 10v8",
		key: "1kdml4"
	}],
	["path", {
		d: "M4 12h8",
		key: "17cfdx"
	}],
	["path", {
		d: "M4 18V6",
		key: "1rz3zl"
	}]
]), km = m("heading-5", [
	["path", {
		d: "M4 12h8",
		key: "17cfdx"
	}],
	["path", {
		d: "M4 18V6",
		key: "1rz3zl"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}],
	["path", {
		d: "M17 13v-3h4",
		key: "1nvgqp"
	}],
	["path", {
		d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",
		key: "2nebdn"
	}]
]), Am = m("heading-6", [
	["path", {
		d: "M4 12h8",
		key: "17cfdx"
	}],
	["path", {
		d: "M4 18V6",
		key: "1rz3zl"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}],
	["circle", {
		cx: "19",
		cy: "16",
		r: "2",
		key: "15mx69"
	}],
	["path", {
		d: "M20 10c-2 2-3 3.5-3 6",
		key: "f35dl0"
	}]
]), jm = m("heading", [
	["path", {
		d: "M6 12h12",
		key: "8npq4p"
	}],
	["path", {
		d: "M6 20V4",
		key: "1w1bmo"
	}],
	["path", {
		d: "M18 20V4",
		key: "o2hl4u"
	}]
]), Mm = m("headphones", [["path", {
	d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
	key: "1xhozi"
}]]), Nm = m("headphone-off", [
	["path", {
		d: "M21 14h-1.343",
		key: "1jdnxi"
	}],
	["path", {
		d: "M9.128 3.47A9 9 0 0 1 21 12v3.343",
		key: "6kipu2"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3",
		key: "9x50f4"
	}],
	["path", {
		d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",
		key: "1bkxnm"
	}]
]), Pm = m("headset", [["path", {
	d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
	key: "12oyoe"
}], ["path", {
	d: "M21 16v2a4 4 0 0 1-4 4h-5",
	key: "1x7m43"
}]]), Fm = m("heart-crack", [["path", {
	d: "M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15",
	key: "idzbju"
}], ["path", {
	d: "M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z",
	key: "1su70f"
}]]), Im = m("heart-handshake", [["path", {
	d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
	key: "17lmqv"
}]]), Lm = m("heart-off", [
	["path", {
		d: "M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655",
		key: "1inpfl"
	}],
	["path", {
		d: "m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761",
		key: "vbc6x7"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Rm = m("heart-plus", [
	["path", {
		d: "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49",
		key: "wg5jx"
	}],
	["path", {
		d: "M15 15h6",
		key: "1u4692"
	}],
	["path", {
		d: "M18 12v6",
		key: "1houu1"
	}]
]), zm = m("heart-minus", [["path", {
	d: "m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572",
	key: "15yztm"
}], ["path", {
	d: "M15 15h6",
	key: "1u4692"
}]]), Bm = m("heart-pulse", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}], ["path", {
	d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
	key: "auskq0"
}]]), Vm = m("heart-x", [
	["path", {
		d: "m15.5 12.5 5 5",
		key: "15wbfr"
	}],
	["path", {
		d: "m20.5 12.5-5 5",
		key: "o012pn"
	}],
	["path", {
		d: "M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352",
		key: "c1obtn"
	}]
]), Hm = m("heater", [
	["path", {
		d: "M11 8c2-3-2-3 0-6",
		key: "1ldv5m"
	}],
	["path", {
		d: "M15.5 8c2-3-2-3 0-6",
		key: "1otqoz"
	}],
	["path", {
		d: "M6 10h.01",
		key: "1lbq93"
	}],
	["path", {
		d: "M6 14h.01",
		key: "zudwn7"
	}],
	["path", {
		d: "M10 16v-4",
		key: "1c25yv"
	}],
	["path", {
		d: "M14 16v-4",
		key: "1dkbt8"
	}],
	["path", {
		d: "M18 16v-4",
		key: "1yg9me"
	}],
	["path", {
		d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",
		key: "1ubg90"
	}],
	["path", {
		d: "M5 20v2",
		key: "1abpe8"
	}],
	["path", {
		d: "M19 20v2",
		key: "kqn6ft"
	}]
]), Um = m("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]), Wm = m("helicopter", [
	["path", {
		d: "M11 17v4",
		key: "14wq8k"
	}],
	["path", {
		d: "M14 3v8a2 2 0 0 0 2 2h5.865",
		key: "12oo5h"
	}],
	["path", {
		d: "M17 17v4",
		key: "hdt4hh"
	}],
	["path", {
		d: "M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z",
		key: "yynif"
	}],
	["path", {
		d: "M2 10v5",
		key: "sa5akn"
	}],
	["path", {
		d: "M6 3h16",
		key: "27qw71"
	}],
	["path", {
		d: "M7 21h14",
		key: "1ugz0u"
	}],
	["path", {
		d: "M8 13H2",
		key: "1thz1o"
	}]
]), Gm = m("hexagon", [["path", {
	d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
	key: "yt0hxn"
}]]), Km = m("highlighter", [["path", {
	d: "m9 11-6 6v3h9l3-3",
	key: "1a3l36"
}], ["path", {
	d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",
	key: "14a9rk"
}]]), qm = m("hop-off", [
	["path", {
		d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",
		key: "qyzcap"
	}],
	["path", {
		d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",
		key: "y078lb"
	}],
	["path", {
		d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",
		key: "1utre3"
	}],
	["path", {
		d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",
		key: "17o9hm"
	}],
	["path", {
		d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",
		key: "1d1n4p"
	}],
	["path", {
		d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",
		key: "9uv3tt"
	}],
	["path", {
		d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",
		key: "1292wz"
	}],
	["path", {
		d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",
		key: "7ozu9p"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Jm = m("hop", [
	["path", {
		d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",
		key: "18lxf1"
	}],
	["path", {
		d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",
		key: "vtfxrw"
	}],
	["path", {
		d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",
		key: "13hl71"
	}],
	["path", {
		d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",
		key: "1sl8oj"
	}],
	["path", {
		d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",
		key: "19c6kt"
	}],
	["path", {
		d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",
		key: "85ghs3"
	}],
	["path", {
		d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1",
		key: "x087yj"
	}],
	["path", {
		d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",
		key: "11xdqo"
	}]
]), Ym = m("hospital", [
	["path", {
		d: "M12 7v4",
		key: "xawao1"
	}],
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M14 9h-4",
		key: "1w2s2s"
	}],
	["path", {
		d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
		key: "1tthqt"
	}],
	["path", {
		d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16",
		key: "dw4p4i"
	}]
]), Xm = m("hourglass", [
	["path", {
		d: "M5 22h14",
		key: "ehvnwv"
	}],
	["path", {
		d: "M5 2h14",
		key: "pdyrp9"
	}],
	["path", {
		d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
		key: "1d314k"
	}],
	["path", {
		d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
		key: "1vvvr6"
	}]
]), Zm = m("hotel", [
	["path", {
		d: "M10 22v-6.57",
		key: "1wmca3"
	}],
	["path", {
		d: "M12 11h.01",
		key: "z322tv"
	}],
	["path", {
		d: "M12 7h.01",
		key: "1ivr5q"
	}],
	["path", {
		d: "M14 15.43V22",
		key: "1q2vjd"
	}],
	["path", {
		d: "M15 16a5 5 0 0 0-6 0",
		key: "o9wqvi"
	}],
	["path", {
		d: "M16 11h.01",
		key: "xkw8gn"
	}],
	["path", {
		d: "M16 7h.01",
		key: "1kdx03"
	}],
	["path", {
		d: "M8 11h.01",
		key: "1dfujw"
	}],
	["path", {
		d: "M8 7h.01",
		key: "1vti4s"
	}],
	["rect", {
		x: "4",
		y: "2",
		width: "16",
		height: "20",
		rx: "2",
		key: "1uxh74"
	}]
]), Qm = m("house-heart", [["path", {
	d: "M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
	key: "n9s7kx"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]), $m = m("house-plug", [
	["path", {
		d: "M10 12V8.964",
		key: "1vll13"
	}],
	["path", {
		d: "M14 12V8.964",
		key: "1x3qvg"
	}],
	["path", {
		d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",
		key: "ppykja"
	}],
	["path", {
		d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",
		key: "365xoy"
	}]
]), eh = m("house-plus", [
	["path", {
		d: "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35",
		key: "8ek5ge"
	}],
	["path", {
		d: "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8",
		key: "1rbg29"
	}],
	["path", {
		d: "M15 18h6",
		key: "3b3c90"
	}],
	["path", {
		d: "M18 15v6",
		key: "9wciyi"
	}]
]), th = m("house-wifi", [
	["path", {
		d: "M9.5 13.866a4 4 0 0 1 5 .01",
		key: "1wy54i"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}],
	["path", {
		d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
		key: "r6nss1"
	}],
	["path", {
		d: "M7 10.754a8 8 0 0 1 10 0",
		key: "exoy2g"
	}]
]), nh = m("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]), rh = m("ice-cream-bowl", [
	["path", {
		d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
		key: "1uxfcu"
	}],
	["path", {
		d: "M12.14 11a3.5 3.5 0 1 1 6.71 0",
		key: "4k3m1s"
	}],
	["path", {
		d: "M15.5 6.5a3.5 3.5 0 1 0-7 0",
		key: "zmuahr"
	}]
]), ih = m("ice-cream-cone", [
	["path", {
		d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",
		key: "1v6356"
	}],
	["path", {
		d: "M17 7A5 5 0 0 0 7 7",
		key: "151p3v"
	}],
	["path", {
		d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",
		key: "1sdaij"
	}]
]), ah = m("id-card-lanyard", [
	["path", {
		d: "M13.5 8h-3",
		key: "xvov4w"
	}],
	["path", {
		d: "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3",
		key: "16uttc"
	}],
	["path", {
		d: "M16.899 22A5 5 0 0 0 7.1 22",
		key: "1d0ppr"
	}],
	["path", {
		d: "m9 2 3 6",
		key: "1o7bd9"
	}],
	["circle", {
		cx: "12",
		cy: "15",
		r: "3",
		key: "g36mzq"
	}]
]), oh = m("id-card", [
	["path", {
		d: "M16 10h2",
		key: "8sgtl7"
	}],
	["path", {
		d: "M16 14h2",
		key: "epxaof"
	}],
	["path", {
		d: "M6.17 15a3 3 0 0 1 5.66 0",
		key: "n6f512"
	}],
	["circle", {
		cx: "9",
		cy: "11",
		r: "2",
		key: "yxgjnd"
	}],
	["rect", {
		x: "2",
		y: "5",
		width: "20",
		height: "14",
		rx: "2",
		key: "qneu4z"
	}]
]), sh = m("image-down", [
	["path", {
		d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
		key: "9csbqa"
	}],
	["path", {
		d: "m14 19 3 3v-5.5",
		key: "9ldu5r"
	}],
	["path", {
		d: "m17 22 3-3",
		key: "1nkfve"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), ch = m("image-minus", [
	["path", {
		d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
		key: "m87ecr"
	}],
	["line", {
		x1: "16",
		x2: "22",
		y1: "5",
		y2: "5",
		key: "ez7e4s"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]), lh = m("image-play", [
	["path", {
		d: "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",
		key: "nrt1m3"
	}],
	["path", {
		d: "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
		key: "99hgts"
	}],
	["path", {
		d: "m6 21 5-5",
		key: "1wyjai"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), uh = m("image-off", [
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}],
	["path", {
		d: "M10.41 10.41a2 2 0 1 1-2.83-2.83",
		key: "1bzlo9"
	}],
	["line", {
		x1: "13.5",
		x2: "6",
		y1: "13.5",
		y2: "21",
		key: "1q0aeu"
	}],
	["line", {
		x1: "18",
		x2: "21",
		y1: "12",
		y2: "15",
		key: "5mozeu"
	}],
	["path", {
		d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
		key: "mmje98"
	}],
	["path", {
		d: "M21 15V5a2 2 0 0 0-2-2H9",
		key: "43el77"
	}]
]), dh = m("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), fh = m("image-up", [
	["path", {
		d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
		key: "9csbqa"
	}],
	["path", {
		d: "m14 19.5 3-3 3 3",
		key: "9vmjn0"
	}],
	["path", {
		d: "M17 22v-5.5",
		key: "1aa6fl"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), ph = m("image-upscale", [
	["path", {
		d: "M16 3h5v5",
		key: "1806ms"
	}],
	["path", {
		d: "M17 21h2a2 2 0 0 0 2-2",
		key: "130fy9"
	}],
	["path", {
		d: "M21 12v3",
		key: "1wzk3p"
	}],
	["path", {
		d: "m21 3-5 5",
		key: "1g5oa7"
	}],
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2",
		key: "kk3yz1"
	}],
	["path", {
		d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19",
		key: "fyekpt"
	}],
	["path", {
		d: "M9 3h3",
		key: "d52fa"
	}],
	["rect", {
		x: "3",
		y: "11",
		width: "10",
		height: "10",
		rx: "1",
		key: "1wpmix"
	}]
]), mh = m("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]), hh = m("images", [
	["path", {
		d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",
		key: "9kzy35"
	}],
	["path", {
		d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",
		key: "1t0f0t"
	}],
	["circle", {
		cx: "13",
		cy: "7",
		r: "1",
		fill: "currentColor",
		key: "1obus6"
	}],
	["rect", {
		x: "8",
		y: "2",
		width: "14",
		height: "14",
		rx: "2",
		key: "1gvhby"
	}]
]), gh = m("import", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m8 11 4 4 4-4",
		key: "1dohi6"
	}],
	["path", {
		d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
		key: "1ywtjm"
	}]
]), _h = m("inbox", [["polyline", {
	points: "22 12 16 12 14 15 10 15 8 12 2 12",
	key: "o97t9d"
}], ["path", {
	d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
	key: "oot6mr"
}]]), vh = m("indian-rupee", [
	["path", {
		d: "M6 3h12",
		key: "ggurg9"
	}],
	["path", {
		d: "M6 8h12",
		key: "6g4wlu"
	}],
	["path", {
		d: "m6 13 8.5 8",
		key: "u1kupk"
	}],
	["path", {
		d: "M6 13h3",
		key: "wdp6ag"
	}],
	["path", {
		d: "M9 13c6.667 0 6.667-10 0-10",
		key: "1nkvk2"
	}]
]), yh = m("infinity", [["path", {
	d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",
	key: "18ogeb"
}]]), bh = m("inspection-panel", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7 7h.01",
		key: "7u93v4"
	}],
	["path", {
		d: "M17 7h.01",
		key: "14a9sn"
	}],
	["path", {
		d: "M7 17h.01",
		key: "19xn7k"
	}],
	["path", {
		d: "M17 17h.01",
		key: "1sd3ek"
	}]
]), xh = m("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]), Sh = m("italic", [
	["line", {
		x1: "19",
		x2: "10",
		y1: "4",
		y2: "4",
		key: "15jd3p"
	}],
	["line", {
		x1: "14",
		x2: "5",
		y1: "20",
		y2: "20",
		key: "bu0au3"
	}],
	["line", {
		x1: "15",
		x2: "9",
		y1: "4",
		y2: "20",
		key: "uljnxc"
	}]
]), Ch = m("iteration-ccw", [["path", {
	d: "m16 14 4 4-4 4",
	key: "hkso8o"
}], ["path", {
	d: "M20 10a8 8 0 1 0-8 8h8",
	key: "1bik7b"
}]]), wh = m("iteration-cw", [["path", {
	d: "M4 10a8 8 0 1 1 8 8H4",
	key: "svv66n"
}], ["path", {
	d: "m8 22-4-4 4-4",
	key: "6g7gki"
}]]), Th = m("japanese-yen", [
	["path", {
		d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3",
		key: "2ej80x"
	}],
	["path", {
		d: "M6 15h12",
		key: "1hwgt5"
	}],
	["path", {
		d: "M6 11h12",
		key: "wf4gp6"
	}]
]), Eh = m("kanban", [
	["path", {
		d: "M5 3v14",
		key: "9nsxs2"
	}],
	["path", {
		d: "M12 3v8",
		key: "1h2ygw"
	}],
	["path", {
		d: "M19 3v18",
		key: "1sk56x"
	}]
]), Dh = m("joystick", [
	["path", {
		d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
		key: "jg2n2t"
	}],
	["path", {
		d: "M6 15v-2",
		key: "gd6mvg"
	}],
	["path", {
		d: "M12 15V9",
		key: "8c7uyn"
	}],
	["circle", {
		cx: "12",
		cy: "6",
		r: "3",
		key: "1gm2ql"
	}]
]), Oh = m("kayak", [
	["path", {
		d: "M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z",
		key: "skzb1g"
	}],
	["path", {
		d: "M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61",
		key: "cv9jm7"
	}],
	["path", {
		d: "m6.707 6.707 10.586 10.586",
		key: "d2l993"
	}],
	["path", {
		d: "M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z",
		key: "i0et4n"
	}]
]), kh = m("key-round", [["path", {
	d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
	key: "1s6t7t"
}], ["circle", {
	cx: "16.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "w0ekpg"
}]]), Ah = m("key-square", [
	["path", {
		d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",
		key: "165ttr"
	}],
	["path", {
		d: "m14 7 3 3",
		key: "1r5n42"
	}],
	["path", {
		d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",
		key: "1ubxi2"
	}]
]), jh = m("keyboard-music", [
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}],
	["path", {
		d: "M6 8h4",
		key: "utf9t1"
	}],
	["path", {
		d: "M14 8h.01",
		key: "1primd"
	}],
	["path", {
		d: "M18 8h.01",
		key: "emo2bl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "M6 12v4",
		key: "dy92yo"
	}],
	["path", {
		d: "M10 12v4",
		key: "1fxnav"
	}],
	["path", {
		d: "M14 12v4",
		key: "1hft58"
	}],
	["path", {
		d: "M18 12v4",
		key: "tjjnbz"
	}]
]), Mh = m("key", [
	["path", {
		d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
		key: "g0fldk"
	}],
	["path", {
		d: "m21 2-9.6 9.6",
		key: "1j0ho8"
	}],
	["circle", {
		cx: "7.5",
		cy: "15.5",
		r: "5.5",
		key: "yqb3hr"
	}]
]), Nh = m("keyboard-off", [
	["path", {
		d: "M 20 4 A2 2 0 0 1 22 6",
		key: "1g1fkt"
	}],
	["path", {
		d: "M 22 6 L 22 16.41",
		key: "1qjg3w"
	}],
	["path", {
		d: "M 7 16 L 16 16",
		key: "n0yqwb"
	}],
	["path", {
		d: "M 9.69 4 L 20 4",
		key: "kbpcgx"
	}],
	["path", {
		d: "M14 8h.01",
		key: "1primd"
	}],
	["path", {
		d: "M18 8h.01",
		key: "emo2bl"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",
		key: "s23sx2"
	}],
	["path", {
		d: "M6 8h.01",
		key: "x9i8wu"
	}],
	["path", {
		d: "M8 12h.01",
		key: "czm47f"
	}]
]), Ph = m("keyboard", [
	["path", {
		d: "M10 8h.01",
		key: "1r9ogq"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M14 8h.01",
		key: "1primd"
	}],
	["path", {
		d: "M16 12h.01",
		key: "1l6xoz"
	}],
	["path", {
		d: "M18 8h.01",
		key: "emo2bl"
	}],
	["path", {
		d: "M6 8h.01",
		key: "x9i8wu"
	}],
	["path", {
		d: "M7 16h10",
		key: "wp8him"
	}],
	["path", {
		d: "M8 12h.01",
		key: "czm47f"
	}],
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}]
]), Fh = m("lamp-ceiling", [
	["path", {
		d: "M12 2v5",
		key: "nd4vlx"
	}],
	["path", {
		d: "M14.829 15.998a3 3 0 1 1-5.658 0",
		key: "1pybiy"
	}],
	["path", {
		d: "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z",
		key: "ma1wor"
	}]
]), Ih = m("lamp-desk", [
	["path", {
		d: "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z",
		key: "sb8slu"
	}],
	["path", {
		d: "m14.207 4.793-3.414 3.414",
		key: "m2x3oj"
	}],
	["path", {
		d: "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z",
		key: "8b3myj"
	}],
	["path", {
		d: "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18",
		key: "43s6cu"
	}]
]), Lh = m("lamp-floor", [
	["path", {
		d: "M12 10v12",
		key: "6ubwww"
	}],
	["path", {
		d: "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z",
		key: "1o95gh"
	}],
	["path", {
		d: "M9 22h6",
		key: "1rlq3v"
	}]
]), Rh = m("lamp-wall-down", [
	["path", {
		d: "M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z",
		key: "u4w2d7"
	}],
	["path", {
		d: "M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
		key: "15356w"
	}],
	["path", {
		d: "M8 6h4a2 2 0 0 1 2 2v5",
		key: "1m6m7x"
	}]
]), zh = m("lamp-wall-up", [
	["path", {
		d: "M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z",
		key: "1uvrbf"
	}],
	["path", {
		d: "M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
		key: "154r2a"
	}],
	["path", {
		d: "M8 18h4a2 2 0 0 0 2-2v-5",
		key: "z9mbu0"
	}]
]), Bh = m("lamp", [
	["path", {
		d: "M12 12v6",
		key: "3ahymv"
	}],
	["path", {
		d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",
		key: "1l7kg2"
	}],
	["path", {
		d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z",
		key: "1mmzpi"
	}]
]), Vh = m("land-plot", [
	["path", {
		d: "m12 8 6-3-6-3v10",
		key: "mvpnpy"
	}],
	["path", {
		d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
		key: "ek95tt"
	}],
	["path", {
		d: "m6.49 12.85 11.02 6.3",
		key: "1kt42w"
	}],
	["path", {
		d: "M17.51 12.85 6.5 19.15",
		key: "v55bdg"
	}]
]), Hh = m("landmark", [
	["path", {
		d: "M10 18v-7",
		key: "wt116b"
	}],
	["path", {
		d: "M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",
		key: "yxxwt6"
	}],
	["path", {
		d: "M14 18v-7",
		key: "vav6t3"
	}],
	["path", {
		d: "M18 18v-7",
		key: "aexdmj"
	}],
	["path", {
		d: "M3 22h18",
		key: "8prr45"
	}],
	["path", {
		d: "M6 18v-7",
		key: "1ivflk"
	}]
]), Uh = m("laptop-minimal-check", [
	["path", {
		d: "M2 20h20",
		key: "owomy5"
	}],
	["path", {
		d: "m9 10 2 2 4-4",
		key: "1gnqz4"
	}],
	["rect", {
		x: "3",
		y: "4",
		width: "18",
		height: "12",
		rx: "2",
		key: "8ur36m"
	}]
]), Wh = m("laptop-minimal", [["rect", {
	width: "18",
	height: "12",
	x: "3",
	y: "4",
	rx: "2",
	ry: "2",
	key: "1qhy41"
}], ["line", {
	x1: "2",
	x2: "22",
	y1: "20",
	y2: "20",
	key: "ni3hll"
}]]), Gh = m("languages", [
	["path", {
		d: "m5 8 6 6",
		key: "1wu5hv"
	}],
	["path", {
		d: "m4 14 6-6 2-3",
		key: "1k1g8d"
	}],
	["path", {
		d: "M2 5h12",
		key: "or177f"
	}],
	["path", {
		d: "M7 2h1",
		key: "1t2jsx"
	}],
	["path", {
		d: "m22 22-5-10-5 10",
		key: "don7ne"
	}],
	["path", {
		d: "M14 18h6",
		key: "1m8k6r"
	}]
]), Kh = m("lasso-select", [
	["path", {
		d: "M7 22a5 5 0 0 1-2-4",
		key: "umushi"
	}],
	["path", {
		d: "M7 16.93c.96.43 1.96.74 2.99.91",
		key: "ybbtv3"
	}],
	["path", {
		d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
		key: "gt5e1w"
	}],
	["path", {
		d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
		key: "bq3ynw"
	}],
	["path", {
		d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",
		key: "72q637"
	}]
]), qh = m("laptop", [["path", {
	d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
	key: "1pdavp"
}], ["path", {
	d: "M20.054 15.987H3.946",
	key: "14rxg9"
}]]), Jh = m("lasso", [
	["path", {
		d: "M3.704 14.467a10 8 0 1 1 3.115 2.375",
		key: "wxgc5m"
	}],
	["path", {
		d: "M7 22a5 5 0 0 1-2-3.994",
		key: "1xp6a4"
	}],
	["circle", {
		cx: "5",
		cy: "16",
		r: "2",
		key: "18csp3"
	}]
]), Yh = m("layer-arrow-down", [
	["path", {
		d: "M12 10v10",
		key: "1ogziz"
	}],
	["path", {
		d: "M22 10a1 1 0 01-.59.92l-5.077 2.308",
		key: "q38q1t"
	}],
	["path", {
		d: "M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316",
		key: "h1p4gn"
	}],
	["path", {
		d: "m9 17 3 3 3-3",
		key: "l18qqt"
	}]
]), Xh = m("layer-arrow-up", [
	["path", {
		d: "M12 14V4",
		key: "1t7zjg"
	}],
	["path", {
		d: "M7.674 10.774 2.58 13.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308",
		key: "1cy4ex"
	}],
	["path", {
		d: "m9 7 3-3 3 3",
		key: "8sjys4"
	}]
]), Zh = m("layers-2", [["path", {
	d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z",
	key: "15q6uc"
}], ["path", {
	d: "m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845",
	key: "byia6g"
}]]), Qh = m("layers-arrow-up", [
	["path", {
		d: "M12 12V2",
		key: "17ugg4"
	}],
	["path", {
		d: "M2 17.002a1 1 0 00.58.91l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92",
		key: "1ke1hd"
	}],
	["path", {
		d: "M7.674 8.774 2.58 11.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308",
		key: "hlro1u"
	}],
	["path", {
		d: "m9 5 3-3 3 3",
		key: "l8vdw6"
	}]
]), $h = m("layers-arrow-down", [
	["path", {
		d: "M12 7v15",
		key: "1onnba"
	}],
	["path", {
		d: "M2 12a1 1 0 00.58.91l5.093 2.316",
		key: "xofxlj"
	}],
	["path", {
		d: "M22 12a1 1 0 01-.59.92l-5.077 2.308",
		key: "cc7swz"
	}],
	["path", {
		d: "M8 10.37 2.6 7.91a1 1 0 010-1.831l8.57-3.9a2 2 0 011.66.001l8.59 3.91a1 1 0 010 1.831l-5.392 2.45",
		key: "kdwjlb"
	}],
	["path", {
		d: "m9 19 3 3 3-3",
		key: "1fhphp"
	}]
]), eg = m("layers-minus", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.832z",
		key: "tq134k"
	}],
	["path", {
		d: "M16 17h6",
		key: "1ook5g"
	}],
	["path", {
		d: "M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18",
		key: "8mjqed"
	}],
	["path", {
		d: "M2.003 16.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l2.11-.96",
		key: "7vwz41"
	}],
	["path", {
		d: "M22.018 12.004a1 1 0 0 1-.598.916l-.177.08",
		key: "bm5b9y"
	}]
]), tg = m("layers-plus", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",
		key: "zzgyd3"
	}],
	["path", {
		d: "M16 17h6",
		key: "1ook5g"
	}],
	["path", {
		d: "M19 14v6",
		key: "1ckrd5"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",
		key: "1ia9y3"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",
		key: "jksky3"
	}]
]), ng = m("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]), rg = m("layout-dashboard", [
	["rect", {
		width: "7",
		height: "9",
		x: "3",
		y: "3",
		rx: "1",
		key: "10lvy0"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "14",
		y: "3",
		rx: "1",
		key: "16une8"
	}],
	["rect", {
		width: "7",
		height: "9",
		x: "14",
		y: "12",
		rx: "1",
		key: "1hutg5"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "ldoo1y"
	}]
]), ig = m("layout-freeform", [
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "1g98yp"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "4",
		rx: "1",
		key: "n7b4zl"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "4",
		y: "14",
		rx: "1",
		key: "1ngf42"
	}]
]), ag = m("layout-grid", [
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "1g98yp"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "3",
		rx: "1",
		key: "6d4xhi"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "14",
		rx: "1",
		key: "nxv5o0"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "1bb6yr"
	}]
]), og = m("layout-list", [
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "1g98yp"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "1bb6yr"
	}],
	["path", {
		d: "M14 4h7",
		key: "3xa0d5"
	}],
	["path", {
		d: "M14 9h7",
		key: "1icrd9"
	}],
	["path", {
		d: "M14 15h7",
		key: "1mj8o2"
	}],
	["path", {
		d: "M14 20h7",
		key: "11slyb"
	}]
]), sg = m("layout-panel-left", [
	["rect", {
		width: "7",
		height: "18",
		x: "3",
		y: "3",
		rx: "1",
		key: "2obqm"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "3",
		rx: "1",
		key: "6d4xhi"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "14",
		rx: "1",
		key: "nxv5o0"
	}]
]), cg = m("layout-panel-top", [
	["rect", {
		width: "18",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "f1a2em"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "1bb6yr"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "14",
		rx: "1",
		key: "nxv5o0"
	}]
]), lg = m("layout-template", [
	["rect", {
		width: "18",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "f1a2em"
	}],
	["rect", {
		width: "9",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "jqznyg"
	}],
	["rect", {
		width: "5",
		height: "7",
		x: "16",
		y: "14",
		rx: "1",
		key: "q5h2i8"
	}]
]), ug = m("leaf", [["path", {
	d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
	key: "nnexq3"
}], ["path", {
	d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
	key: "mt58a7"
}]]), dg = m("leafy-green", [["path", {
	d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
	key: "1134nt"
}], ["path", {
	d: "M2 22 17 7",
	key: "1q7jp2"
}]]), fg = m("lectern", [
	["path", {
		d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",
		key: "13jjxg"
	}],
	["path", {
		d: "M18 6V3a1 1 0 0 0-1-1h-3",
		key: "1550fe"
	}],
	["rect", {
		width: "8",
		height: "12",
		x: "8",
		y: "10",
		rx: "1",
		key: "qmu8b6"
	}]
]), pg = m("lens-concave", [["path", {
	d: "M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z",
	key: "109j23"
}]]), mg = m("lens-convex", [["path", {
	d: "M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z",
	key: "cq67go"
}]]), hg = m("library-big", [
	["rect", {
		width: "8",
		height: "18",
		x: "3",
		y: "3",
		rx: "1",
		key: "oynpb5"
	}],
	["path", {
		d: "M7 3v18",
		key: "bbkbws"
	}],
	["path", {
		d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
		key: "1qboyk"
	}]
]), gg = m("library", [
	["path", {
		d: "m16 6 4 14",
		key: "ji33uf"
	}],
	["path", {
		d: "M12 6v14",
		key: "1n7gus"
	}],
	["path", {
		d: "M8 8v12",
		key: "1gg7y9"
	}],
	["path", {
		d: "M4 4v16",
		key: "6qkkli"
	}]
]), _g = m("life-buoy", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m4.93 4.93 4.24 4.24",
		key: "1ymg45"
	}],
	["path", {
		d: "m14.83 9.17 4.24-4.24",
		key: "1cb5xl"
	}],
	["path", {
		d: "m14.83 14.83 4.24 4.24",
		key: "q42g0n"
	}],
	["path", {
		d: "m9.17 14.83-4.24 4.24",
		key: "bqpfvv"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}]
]), vg = m("ligature", [
	["path", {
		d: "M14 12h2v8",
		key: "c1fccl"
	}],
	["path", {
		d: "M14 20h4",
		key: "lzx1xo"
	}],
	["path", {
		d: "M6 12h4",
		key: "a4o3ry"
	}],
	["path", {
		d: "M6 20h4",
		key: "1i6q5t"
	}],
	["path", {
		d: "M8 20V8a4 4 0 0 1 7.464-2",
		key: "wk9t6r"
	}]
]), yg = m("lightbulb-off", [
	["path", {
		d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",
		key: "1fkcox"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",
		key: "10m8kw"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]), bg = m("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]), xg = m("line-dot-right-horizontal", [["path", {
	d: "M 3 12 L 15 12",
	key: "ymhu98"
}], ["circle", {
	cx: "18",
	cy: "12",
	r: "3",
	key: "1kchzo"
}]]), Sg = m("line-squiggle", [["path", {
	d: "M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2",
	key: "1lrphd"
}]]), Cg = m("line-style", [
	["path", {
		d: "M11 5h2",
		key: "1s6z07"
	}],
	["path", {
		d: "M15 12h6",
		key: "upa0zy"
	}],
	["path", {
		d: "M19 5h2",
		key: "fjylsg"
	}],
	["path", {
		d: "M3 12h6",
		key: "ra68u1"
	}],
	["path", {
		d: "M3 19h18",
		key: "awlh7x"
	}],
	["path", {
		d: "M3 5h2",
		key: "1qgu90"
	}]
]), wg = m("link-2-off", [
	["path", {
		d: "M9 17H7A5 5 0 0 1 7 7",
		key: "10o201"
	}],
	["path", {
		d: "M15 7h2a5 5 0 0 1 4 8",
		key: "1d3206"
	}],
	["line", {
		x1: "8",
		x2: "12",
		y1: "12",
		y2: "12",
		key: "rvw6j4"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), Tg = m("link-2", [
	["path", {
		d: "M9 17H7A5 5 0 0 1 7 7h2",
		key: "8i5ue5"
	}],
	["path", {
		d: "M15 7h2a5 5 0 1 1 0 10h-2",
		key: "1b9ql8"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12",
		key: "1jonct"
	}]
]), Eg = m("list-check", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M16 12H3",
		key: "1a2rj7"
	}],
	["path", {
		d: "M11 19H3",
		key: "zflm78"
	}],
	["path", {
		d: "m15 18 2 2 4-4",
		key: "1szwhi"
	}]
]), Dg = m("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]), Og = m("list-checks", [
	["path", {
		d: "M13 5h8",
		key: "a7qcls"
	}],
	["path", {
		d: "M13 12h8",
		key: "h98zly"
	}],
	["path", {
		d: "M13 19h8",
		key: "c3s6r1"
	}],
	["path", {
		d: "m3 17 2 2 4-4",
		key: "1jhpwq"
	}],
	["path", {
		d: "m3 7 2 2 4-4",
		key: "1obspn"
	}]
]), kg = m("list-chevrons-down-up", [
	["path", {
		d: "M3 5h8",
		key: "18g2rq"
	}],
	["path", {
		d: "M3 12h8",
		key: "1xfjp6"
	}],
	["path", {
		d: "M3 19h8",
		key: "fpbke4"
	}],
	["path", {
		d: "m15 5 3 3 3-3",
		key: "1t4thf"
	}],
	["path", {
		d: "m15 19 3-3 3 3",
		key: "y4ckd2"
	}]
]), Ag = m("list-chevrons-up-down", [
	["path", {
		d: "M3 5h8",
		key: "18g2rq"
	}],
	["path", {
		d: "M3 12h8",
		key: "1xfjp6"
	}],
	["path", {
		d: "M3 19h8",
		key: "fpbke4"
	}],
	["path", {
		d: "m15 8 3-3 3 3",
		key: "bc4io6"
	}],
	["path", {
		d: "m15 16 3 3 3-3",
		key: "9wmg1l"
	}]
]), jg = m("list-collapse", [
	["path", {
		d: "M10 5h11",
		key: "1hkqpe"
	}],
	["path", {
		d: "M10 12h11",
		key: "6m4ad9"
	}],
	["path", {
		d: "M10 19h11",
		key: "14g2nv"
	}],
	["path", {
		d: "m3 10 3-3-3-3",
		key: "i7pm08"
	}],
	["path", {
		d: "m3 20 3-3-3-3",
		key: "20gx1n"
	}]
]), Mg = m("list-end", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M16 12H3",
		key: "1a2rj7"
	}],
	["path", {
		d: "M9 19H3",
		key: "s61nz1"
	}],
	["path", {
		d: "m16 16-3 3 3 3",
		key: "117b85"
	}],
	["path", {
		d: "M21 5v12a2 2 0 0 1-2 2h-6",
		key: "hey24a"
	}]
]), Ng = m("list-filter-plus", [
	["path", {
		d: "M12 5H2",
		key: "1o22fu"
	}],
	["path", {
		d: "M6 12h12",
		key: "8npq4p"
	}],
	["path", {
		d: "M9 19h6",
		key: "456am0"
	}],
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 8V2",
		key: "1wcffq"
	}]
]), Pg = m("list-filter", [
	["path", {
		d: "M2 5h20",
		key: "1fs1ex"
	}],
	["path", {
		d: "M6 12h12",
		key: "8npq4p"
	}],
	["path", {
		d: "M9 19h6",
		key: "456am0"
	}]
]), K = m("list-indent-decrease", [
	["path", {
		d: "M21 5H11",
		key: "us1j55"
	}],
	["path", {
		d: "M21 12H11",
		key: "wd7e0v"
	}],
	["path", {
		d: "M21 19H11",
		key: "saa85w"
	}],
	["path", {
		d: "m7 8-4 4 4 4",
		key: "o5hrat"
	}]
]), q = m("list-indent-increase", [
	["path", {
		d: "M21 5H11",
		key: "us1j55"
	}],
	["path", {
		d: "M21 12H11",
		key: "wd7e0v"
	}],
	["path", {
		d: "M21 19H11",
		key: "saa85w"
	}],
	["path", {
		d: "m3 8 4 4-4 4",
		key: "1a3j6y"
	}]
]), Fg = m("list-minus", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M11 12H3",
		key: "51ecnj"
	}],
	["path", {
		d: "M16 19H3",
		key: "zzsher"
	}],
	["path", {
		d: "M21 12h-6",
		key: "bt1uis"
	}]
]), Ig = m("list-music", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M11 12H3",
		key: "51ecnj"
	}],
	["path", {
		d: "M11 19H3",
		key: "zflm78"
	}],
	["path", {
		d: "M21 16V5",
		key: "yxg4q8"
	}],
	["circle", {
		cx: "18",
		cy: "16",
		r: "3",
		key: "1hluhg"
	}]
]), Lg = m("list-ordered", [
	["path", {
		d: "M11 5h10",
		key: "1cz7ny"
	}],
	["path", {
		d: "M11 12h10",
		key: "1438ji"
	}],
	["path", {
		d: "M11 19h10",
		key: "11t30w"
	}],
	["path", {
		d: "M4 4h1v5",
		key: "10yrso"
	}],
	["path", {
		d: "M4 9h2",
		key: "r1h2o0"
	}],
	["path", {
		d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
		key: "xtkcd5"
	}]
]), Rg = m("list-plus", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M11 12H3",
		key: "51ecnj"
	}],
	["path", {
		d: "M16 19H3",
		key: "zzsher"
	}],
	["path", {
		d: "M18 9v6",
		key: "1twb98"
	}],
	["path", {
		d: "M21 12h-6",
		key: "bt1uis"
	}]
]), zg = m("list-restart", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M7 12H3",
		key: "13ou7f"
	}],
	["path", {
		d: "M7 19H3",
		key: "wbqt3n"
	}],
	["path", {
		d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
		key: "qth677"
	}],
	["path", {
		d: "M11 10v4h4",
		key: "172dkj"
	}]
]), Bg = m("list-sort-ascending", [
	["path", {
		d: "M3 19h18",
		key: "awlh7x"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M9 5H3",
		key: "15j2za"
	}]
]), Vg = m("list-sort-descending", [
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M3 5h18",
		key: "1u36vt"
	}],
	["path", {
		d: "M9 19H3",
		key: "s61nz1"
	}]
]), Hg = m("list-start", [
	["path", {
		d: "M3 5h6",
		key: "1ltk0q"
	}],
	["path", {
		d: "M3 12h13",
		key: "ppymz1"
	}],
	["path", {
		d: "M3 19h13",
		key: "bpdczq"
	}],
	["path", {
		d: "m16 8-3-3 3-3",
		key: "1pjpp6"
	}],
	["path", {
		d: "M21 19V7a2 2 0 0 0-2-2h-6",
		key: "4zzq67"
	}]
]), Ug = m("list-tree", [
	["path", {
		d: "M8 5h13",
		key: "1pao27"
	}],
	["path", {
		d: "M13 12h8",
		key: "h98zly"
	}],
	["path", {
		d: "M13 19h8",
		key: "c3s6r1"
	}],
	["path", {
		d: "M3 10a2 2 0 0 0 2 2h3",
		key: "1npucw"
	}],
	["path", {
		d: "M3 5v12a2 2 0 0 0 2 2h3",
		key: "x1gjn2"
	}]
]), Wg = m("list-todo", [
	["path", {
		d: "M13 5h8",
		key: "a7qcls"
	}],
	["path", {
		d: "M13 12h8",
		key: "h98zly"
	}],
	["path", {
		d: "M13 19h8",
		key: "c3s6r1"
	}],
	["path", {
		d: "m3 17 2 2 4-4",
		key: "1jhpwq"
	}],
	["rect", {
		x: "3",
		y: "4",
		width: "6",
		height: "6",
		rx: "1",
		key: "cif1o7"
	}]
]), Gg = m("list-video", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M10 12H3",
		key: "1ulcyk"
	}],
	["path", {
		d: "M10 19H3",
		key: "108z41"
	}],
	["path", {
		d: "M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",
		key: "ms4nik"
	}]
]), Kg = m("list-x", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M11 12H3",
		key: "51ecnj"
	}],
	["path", {
		d: "M16 19H3",
		key: "zzsher"
	}],
	["path", {
		d: "m15.5 9.5 5 5",
		key: "ytk86i"
	}],
	["path", {
		d: "m20.5 9.5-5 5",
		key: "17o44f"
	}]
]), qg = m("list", [
	["path", {
		d: "M3 5h.01",
		key: "18ugdj"
	}],
	["path", {
		d: "M3 12h.01",
		key: "nlz23k"
	}],
	["path", {
		d: "M3 19h.01",
		key: "noohij"
	}],
	["path", {
		d: "M8 5h13",
		key: "1pao27"
	}],
	["path", {
		d: "M8 12h13",
		key: "1za7za"
	}],
	["path", {
		d: "M8 19h13",
		key: "m83p4d"
	}]
]), Jg = m("loader-pinwheel", [
	["path", {
		d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0",
		key: "1lzz15"
	}],
	["path", {
		d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",
		key: "1gnrpi"
	}],
	["path", {
		d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",
		key: "u9yy5q"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), Yg = m("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), Xg = m("loader", [
	["path", {
		d: "M12 2v4",
		key: "3427ic"
	}],
	["path", {
		d: "m16.2 7.8 2.9-2.9",
		key: "r700ao"
	}],
	["path", {
		d: "M18 12h4",
		key: "wj9ykh"
	}],
	["path", {
		d: "m16.2 16.2 2.9 2.9",
		key: "1bxg5t"
	}],
	["path", {
		d: "M12 18v4",
		key: "jadmvz"
	}],
	["path", {
		d: "m4.9 19.1 2.9-2.9",
		key: "bwix9q"
	}],
	["path", {
		d: "M2 12h4",
		key: "j09sii"
	}],
	["path", {
		d: "m4.9 4.9 2.9 2.9",
		key: "giyufr"
	}]
]), Zg = m("locate-off", [
	["path", {
		d: "M12 19v3",
		key: "npa21l"
	}],
	["path", {
		d: "M12 2v3",
		key: "qbqxhf"
	}],
	["path", {
		d: "M18.89 13.24a7 7 0 0 0-8.13-8.13",
		key: "1v9jrh"
	}],
	["path", {
		d: "M19 12h3",
		key: "osuazr"
	}],
	["path", {
		d: "M2 12h3",
		key: "1wrr53"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M7.05 7.05a7 7 0 0 0 9.9 9.9",
		key: "rc5l2e"
	}]
]), Qg = m("locate-fixed", [
	["line", {
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12",
		key: "bvdh0s"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12",
		key: "1tbv5k"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5",
		key: "11lu5j"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22",
		key: "x3vr5v"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "7",
		key: "fim9np"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}]
]), $g = m("locate", [
	["line", {
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12",
		key: "bvdh0s"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12",
		key: "1tbv5k"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5",
		key: "11lu5j"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22",
		key: "x3vr5v"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "7",
		key: "fim9np"
	}]
]), e_ = m("lock-keyhole-open", [
	["circle", {
		cx: "12",
		cy: "16",
		r: "1",
		key: "1au0dj"
	}],
	["rect", {
		width: "18",
		height: "12",
		x: "3",
		y: "10",
		rx: "2",
		key: "l0tzu3"
	}],
	["path", {
		d: "M7 10V7a5 5 0 0 1 9.33-2.5",
		key: "car5b7"
	}]
]), t_ = m("lock-open", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 9.9-1",
	key: "1mm8w8"
}]]), n_ = m("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]), r_ = m("lock-keyhole", [
	["circle", {
		cx: "12",
		cy: "16",
		r: "1",
		key: "1au0dj"
	}],
	["rect", {
		x: "3",
		y: "10",
		width: "18",
		height: "12",
		rx: "2",
		key: "6s8ecr"
	}],
	["path", {
		d: "M7 10V7a5 5 0 0 1 10 0v3",
		key: "1pqi11"
	}]
]), i_ = m("log-in", [
	["path", {
		d: "m10 17 5-5-5-5",
		key: "1bsop3"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
		key: "u53s6r"
	}]
]), a_ = m("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]), o_ = m("logs", [
	["path", {
		d: "M3 5h1",
		key: "1mv5vm"
	}],
	["path", {
		d: "M3 12h1",
		key: "lp3yf2"
	}],
	["path", {
		d: "M3 19h1",
		key: "w6f3n9"
	}],
	["path", {
		d: "M8 5h1",
		key: "1nxr5w"
	}],
	["path", {
		d: "M8 12h1",
		key: "1con00"
	}],
	["path", {
		d: "M8 19h1",
		key: "k7p10e"
	}],
	["path", {
		d: "M13 5h8",
		key: "a7qcls"
	}],
	["path", {
		d: "M13 12h8",
		key: "h98zly"
	}],
	["path", {
		d: "M13 19h8",
		key: "c3s6r1"
	}]
]), s_ = m("lollipop", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}],
	["path", {
		d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",
		key: "107gwy"
	}]
]), c_ = m("magnet", [
	["path", {
		d: "m12 15 4 4",
		key: "lnac28"
	}],
	["path", {
		d: "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",
		key: "nlhkjb"
	}],
	["path", {
		d: "m5 8 4 4",
		key: "j6kj7e"
	}]
]), l_ = m("luggage", [
	["path", {
		d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
		key: "1m57jg"
	}],
	["path", {
		d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",
		key: "1l99gc"
	}],
	["path", {
		d: "M10 20h4",
		key: "ni2waw"
	}],
	["circle", {
		cx: "16",
		cy: "20",
		r: "2",
		key: "1vifvg"
	}],
	["circle", {
		cx: "8",
		cy: "20",
		r: "2",
		key: "ckkr5m"
	}]
]), u_ = m("mail-check", [
	["path", {
		d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
		key: "12jkf8"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}]
]), d_ = m("mail-minus", [
	["path", {
		d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
		key: "fuxbkv"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "M16 19h6",
		key: "xwg31i"
	}]
]), f_ = m("mail-plus", [
	["path", {
		d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
		key: "12jkf8"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M16 19h6",
		key: "xwg31i"
	}]
]), p_ = m("mail-open", [["path", {
	d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
	key: "1jhwl8"
}], ["path", {
	d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",
	key: "1qfld7"
}]]), m_ = m("mail-question-mark", [
	["path", {
		d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
		key: "e61zoh"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
		key: "7z9rxb"
	}],
	["path", {
		d: "M20 22v.01",
		key: "12bgn6"
	}]
]), h_ = m("mail-search", [
	["path", {
		d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",
		key: "w80f2v"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		key: "8lzu5m"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["path", {
		d: "m22 22-1.5-1.5",
		key: "1x83k4"
	}]
]), g_ = m("mail-warning", [
	["path", {
		d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
		key: "e61zoh"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "M20 14v4",
		key: "1hm744"
	}],
	["path", {
		d: "M20 22v.01",
		key: "12bgn6"
	}]
]), __ = m("mail-x", [
	["path", {
		d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",
		key: "1j9vog"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "m17 17 4 4",
		key: "1b3523"
	}],
	["path", {
		d: "m21 17-4 4",
		key: "uinynz"
	}]
]), v_ = m("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), y_ = m("mailbox", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
		key: "1lbycx"
	}],
	["polyline", {
		points: "15,9 18,9 18,11",
		key: "1pm9c0"
	}],
	["path", {
		d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2",
		key: "15i455"
	}],
	["line", {
		x1: "6",
		x2: "7",
		y1: "10",
		y2: "10",
		key: "1e2scm"
	}]
]), b_ = m("mails", [
	["path", {
		d: "M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732",
		key: "1vyzll"
	}],
	["path", {
		d: "m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5",
		key: "k7ramc"
	}],
	["rect", {
		x: "7",
		y: "3",
		width: "15",
		height: "12",
		rx: "2",
		key: "17196g"
	}]
]), x_ = m("map-minus", [
	["path", {
		d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14",
		key: "40pylx"
	}],
	["path", {
		d: "M15 5.764V14",
		key: "1bab71"
	}],
	["path", {
		d: "M21 18h-6",
		key: "139f0c"
	}],
	["path", {
		d: "M9 3.236v15",
		key: "1uimfh"
	}]
]), S_ = m("map-pin-check-inside", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["path", {
	d: "m9 10 2 2 4-4",
	key: "1gnqz4"
}]]), C_ = m("map-pin-check", [
	["path", {
		d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",
		key: "1dq61d"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["path", {
		d: "m16 18 2 2 4-4",
		key: "1mkfmb"
	}]
]), w_ = m("map-pin-minus-inside", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["path", {
	d: "M9 10h6",
	key: "9gxzsh"
}]]), T_ = m("map-pin-house", [
	["path", {
		d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",
		key: "1p1rcz"
	}],
	["path", {
		d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",
		key: "mcbcs9"
	}],
	["path", {
		d: "M18 22v-3",
		key: "1t1ugv"
	}],
	["circle", {
		cx: "10",
		cy: "10",
		r: "3",
		key: "1ns7v1"
	}]
]), E_ = m("map-pin-minus", [
	["path", {
		d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",
		key: "11uxia"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["path", {
		d: "M16 18h6",
		key: "987eiv"
	}]
]), D_ = m("map-pin-off", [
	["path", {
		d: "M12.75 7.09a3 3 0 0 1 2.16 2.16",
		key: "1d4wjd"
	}],
	["path", {
		d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",
		key: "12yil7"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533",
		key: "lhrkcz"
	}],
	["path", {
		d: "M9.13 9.13a3 3 0 0 0 3.74 3.74",
		key: "13wojd"
	}]
]), O_ = m("map-pin-plus-inside", [
	["path", {
		d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
		key: "1r0f0z"
	}],
	["path", {
		d: "M12 7v6",
		key: "lw1j43"
	}],
	["path", {
		d: "M9 10h6",
		key: "9gxzsh"
	}]
]), k_ = m("map-pin-pen", [
	["path", {
		d: "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468",
		key: "1fahp3"
	}],
	["path", {
		d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
		key: "1817ys"
	}],
	["circle", {
		cx: "10",
		cy: "10",
		r: "3",
		key: "1ns7v1"
	}]
]), A_ = m("map-pin-plus", [
	["path", {
		d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",
		key: "fcdtly"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["path", {
		d: "M16 18h6",
		key: "987eiv"
	}],
	["path", {
		d: "M19 15v6",
		key: "10aioa"
	}]
]), j_ = m("map-pin-search", [
	["path", {
		d: "M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262",
		key: "1jho5b"
	}],
	["path", {
		d: "m22 22-1.88-1.88",
		key: "1bgjp0"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}]
]), M_ = m("map-pin-x-inside", [
	["path", {
		d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
		key: "1r0f0z"
	}],
	["path", {
		d: "m14.5 7.5-5 5",
		key: "3lb6iw"
	}],
	["path", {
		d: "m9.5 7.5 5 5",
		key: "ko136h"
	}]
]), N_ = m("map-pin-x", [
	["path", {
		d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",
		key: "y0ewhp"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["path", {
		d: "m21.5 15.5-5 5",
		key: "11iqnx"
	}],
	["path", {
		d: "m21.5 20.5-5-5",
		key: "1bylgx"
	}]
]), P_ = m("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]), F_ = m("map-pinned", [
	["path", {
		d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
		key: "11u0oz"
	}],
	["circle", {
		cx: "12",
		cy: "8",
		r: "2",
		key: "1822b1"
	}],
	["path", {
		d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
		key: "q8zwxj"
	}]
]), I_ = m("map-plus", [
	["path", {
		d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12",
		key: "svfegj"
	}],
	["path", {
		d: "M15 5.764V12",
		key: "1ocw4k"
	}],
	["path", {
		d: "M18 15v6",
		key: "9wciyi"
	}],
	["path", {
		d: "M21 18h-6",
		key: "139f0c"
	}],
	["path", {
		d: "M9 3.236v15",
		key: "1uimfh"
	}]
]), L_ = m("map", [
	["path", {
		d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
		key: "169xi5"
	}],
	["path", {
		d: "M15 5.764v15",
		key: "1pn4in"
	}],
	["path", {
		d: "M9 3.236v15",
		key: "1uimfh"
	}]
]), R_ = m("mars", [
	["path", {
		d: "M16 3h5v5",
		key: "1806ms"
	}],
	["path", {
		d: "m21 3-6.75 6.75",
		key: "pv0uzu"
	}],
	["circle", {
		cx: "10",
		cy: "14",
		r: "6",
		key: "1qwbdc"
	}]
]), z_ = m("mars-stroke", [
	["path", {
		d: "m14 6 4 4",
		key: "1q72g9"
	}],
	["path", {
		d: "M17 3h4v4",
		key: "19p9u1"
	}],
	["path", {
		d: "m21 3-7.75 7.75",
		key: "1cjbfd"
	}],
	["circle", {
		cx: "9",
		cy: "15",
		r: "6",
		key: "bx5svt"
	}]
]), B_ = m("martini", [
	["path", {
		d: "M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z",
		key: "vxdekd"
	}],
	["path", {
		d: "M12 12v10",
		key: "1nesaz"
	}],
	["path", {
		d: "M7 22h10",
		key: "10w4w3"
	}]
]), V_ = m("maximize-2", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "m21 3-7 7",
		key: "1l2asr"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M9 21H3v-6",
		key: "wtvkvv"
	}]
]), H_ = m("maximize", [
	["path", {
		d: "M8 3H5a2 2 0 0 0-2 2v3",
		key: "1dcmit"
	}],
	["path", {
		d: "M21 8V5a2 2 0 0 0-2-2h-3",
		key: "1e4gt3"
	}],
	["path", {
		d: "M3 16v3a2 2 0 0 0 2 2h3",
		key: "wsl5sc"
	}],
	["path", {
		d: "M16 21h3a2 2 0 0 0 2-2v-3",
		key: "18trek"
	}]
]), U_ = m("medal", [
	["path", {
		d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
		key: "143lza"
	}],
	["path", {
		d: "M11 12 5.12 2.2",
		key: "qhuxz6"
	}],
	["path", {
		d: "m13 12 5.88-9.8",
		key: "hbye0f"
	}],
	["path", {
		d: "M8 7h8",
		key: "i86dvs"
	}],
	["circle", {
		cx: "12",
		cy: "17",
		r: "5",
		key: "qbz8iq"
	}],
	["path", {
		d: "M12 18v-2h-.5",
		key: "fawc4q"
	}]
]), W_ = m("megaphone-off", [
	["path", {
		d: "M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344",
		key: "bycexp"
	}],
	["path", {
		d: "M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1",
		key: "1t17s6"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
		key: "1853fq"
	}],
	["path", {
		d: "M8 8v6",
		key: "aieo6v"
	}]
]), G_ = m("megaphone", [
	["path", {
		d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
		key: "q8bfy3"
	}],
	["path", {
		d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
		key: "1853fq"
	}],
	["path", {
		d: "M8 6v8",
		key: "15ugcq"
	}]
]), K_ = m("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]), q_ = m("memory-stick", [
	["path", {
		d: "M12 12v-2",
		key: "fwoke6"
	}],
	["path", {
		d: "M12 18v-2",
		key: "qj6yno"
	}],
	["path", {
		d: "M16 12v-2",
		key: "heuere"
	}],
	["path", {
		d: "M16 18v-2",
		key: "s1ct0w"
	}],
	["path", {
		d: "M2 11h1.5",
		key: "15p63e"
	}],
	["path", {
		d: "M20 18v-2",
		key: "12ehxp"
	}],
	["path", {
		d: "M20.5 11H22",
		key: "khsy7a"
	}],
	["path", {
		d: "M4 18v-2",
		key: "1c3oqr"
	}],
	["path", {
		d: "M8 12v-2",
		key: "1mwtfd"
	}],
	["path", {
		d: "M8 18v-2",
		key: "qcmpov"
	}],
	["rect", {
		x: "2",
		y: "6",
		width: "20",
		height: "10",
		rx: "2",
		key: "1qcswk"
	}]
]), J_ = m("merge", [
	["path", {
		d: "m8 6 4-4 4 4",
		key: "ybng9g"
	}],
	["path", {
		d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",
		key: "1hyw0i"
	}],
	["path", {
		d: "m20 22-5-5",
		key: "1m27yz"
	}]
]), Y_ = m("message-circle-check", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), X_ = m("message-circle-dashed", [
	["path", {
		d: "M10.1 2.182a10 10 0 0 1 3.8 0",
		key: "5ilxe3"
	}],
	["path", {
		d: "M13.9 21.818a10 10 0 0 1-3.8 0",
		key: "11zvb9"
	}],
	["path", {
		d: "M17.609 3.72a10 10 0 0 1 2.69 2.7",
		key: "jiglxs"
	}],
	["path", {
		d: "M2.182 13.9a10 10 0 0 1 0-3.8",
		key: "c0bmvh"
	}],
	["path", {
		d: "M20.28 17.61a10 10 0 0 1-2.7 2.69",
		key: "elg7ff"
	}],
	["path", {
		d: "M21.818 10.1a10 10 0 0 1 0 3.8",
		key: "qkgqxc"
	}],
	["path", {
		d: "M3.721 6.391a10 10 0 0 1 2.7-2.69",
		key: "1mcia2"
	}],
	["path", {
		d: "m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98",
		key: "1qsu07"
	}]
]), Z_ = m("message-circle-code", [
	["path", {
		d: "m10 9-3 3 3 3",
		key: "1oro0q"
	}],
	["path", {
		d: "m14 15 3-3-3-3",
		key: "bz13h7"
	}],
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}]
]), Q_ = m("message-circle-heart", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}], ["path", {
	d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z",
	key: "hoo97p"
}]]), $_ = m("message-circle-more", [
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}],
	["path", {
		d: "M8 12h.01",
		key: "czm47f"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M16 12h.01",
		key: "1l6xoz"
	}]
]), ev = m("message-circle-off", [
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989",
		key: "7il5tn"
	}],
	["path", {
		d: "M8.35 2.69A10 10 0 0 1 21.3 15.65",
		key: "1pfsoa"
	}]
]), tv = m("message-circle-plus", [
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}]
]), nv = m("message-circle-question-mark", [
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), rv = m("message-circle-reply", [
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}],
	["path", {
		d: "m10 15-3-3 3-3",
		key: "1pgupc"
	}],
	["path", {
		d: "M7 12h8a2 2 0 0 1 2 2v1",
		key: "89sh1g"
	}]
]), iv = m("message-circle-warning", [
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}],
	["path", {
		d: "M12 8v4",
		key: "1got3b"
	}],
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}]
]), av = m("message-circle-x", [
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), ov = m("message-square-check", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "m0kn7k"
}], ["path", {
	d: "m9 11 2 2 4-4",
	key: "kz4plv"
}]]), sv = m("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]), cv = m("message-square-code", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "m10 8-3 3 3 3",
		key: "fp6dz7"
	}],
	["path", {
		d: "m14 14 3-3-3-3",
		key: "1yrceu"
	}]
]), lv = m("message-square-dashed", [
	["path", {
		d: "M14 3h2",
		key: "1d12a5"
	}],
	["path", {
		d: "M16 19h-2",
		key: "1agirb"
	}],
	["path", {
		d: "M2 12v-2",
		key: "1ey295"
	}],
	["path", {
		d: "M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149",
		key: "120k8q"
	}],
	["path", {
		d: "M20 19a2 2 0 0 0 2-2v-1",
		key: "ior8tn"
	}],
	["path", {
		d: "M22 10v2",
		key: "rmlecy"
	}],
	["path", {
		d: "M22 6V5a2 2 0 0 0-2-2",
		key: "sp3k6r"
	}],
	["path", {
		d: "M4 3a2 2 0 0 0-2 2v1",
		key: "11zt7s"
	}],
	["path", {
		d: "M8 19h2",
		key: "jnunrx"
	}],
	["path", {
		d: "M8 3h2",
		key: "ysbsee"
	}]
]), uv = m("message-square-diff", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "M10 15h4",
		key: "192ueg"
	}],
	["path", {
		d: "M10 9h4",
		key: "u4k05v"
	}],
	["path", {
		d: "M12 7v4",
		key: "xawao1"
	}]
]), dv = m("message-square-dot", [["path", {
	d: "M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7",
	key: "wjb7ig"
}], ["circle", {
	cx: "19",
	cy: "6",
	r: "3",
	key: "108a5v"
}]]), fv = m("message-square-heart", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}], ["path", {
	d: "M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5",
	key: "1faxuh"
}]]), pv = m("message-square-lock", [
	["path", {
		d: "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10",
		key: "fu6chl"
	}],
	["path", {
		d: "M20 15v-2a2 2 0 0 0-4 0v2",
		key: "vl8a78"
	}],
	["rect", {
		x: "14",
		y: "15",
		width: "8",
		height: "5",
		rx: "1",
		key: "37aafw"
	}]
]), mv = m("message-square-off", [
	["path", {
		d: "M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826",
		key: "1wyg69"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.656 3H20a2 2 0 0 1 2 2v11.344",
		key: "mhl4k6"
	}]
]), hv = m("message-square-more", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "M12 11h.01",
		key: "z322tv"
	}],
	["path", {
		d: "M16 11h.01",
		key: "xkw8gn"
	}],
	["path", {
		d: "M8 11h.01",
		key: "1dfujw"
	}]
]), gv = m("message-square-plus", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "M12 8v6",
		key: "1ib9pf"
	}],
	["path", {
		d: "M9 11h6",
		key: "1fldmi"
	}]
]), _v = m("message-square-reply", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "m10 8-3 3 3 3",
		key: "fp6dz7"
	}],
	["path", {
		d: "M17 14v-1a2 2 0 0 0-2-2H7",
		key: "1tkjnz"
	}]
]), vv = m("message-square-share", [
	["path", {
		d: "M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4",
		key: "11da1y"
	}],
	["path", {
		d: "M16 3h6v6",
		key: "1bx56c"
	}],
	["path", {
		d: "m16 9 6-6",
		key: "m4dnic"
	}]
]), yv = m("message-square-quote", [
	["path", {
		d: "M14 14a2 2 0 0 0 2-2V8h-2",
		key: "1r06pg"
	}],
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "M8 14a2 2 0 0 0 2-2V8H8",
		key: "1jzu5j"
	}]
]), bv = m("message-square-text", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "M7 11h10",
		key: "1twpyw"
	}],
	["path", {
		d: "M7 15h6",
		key: "d9of3u"
	}],
	["path", {
		d: "M7 7h8",
		key: "af5zfr"
	}]
]), xv = m("message-square-warning", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "M12 15h.01",
		key: "q59x07"
	}],
	["path", {
		d: "M12 7v4",
		key: "xawao1"
	}]
]), Sv = m("message-square-x", [
	["path", {
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
		key: "18887p"
	}],
	["path", {
		d: "m14.5 8.5-5 5",
		key: "19tnj2"
	}],
	["path", {
		d: "m9.5 8.5 5 5",
		key: "1oa8ql"
	}]
]), Cv = m("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), wv = m("metronome", [
	["path", {
		d: "M12 11.4V9.1",
		key: "audfby"
	}],
	["path", {
		d: "m12 17 6.59-6.59",
		key: "c0sb7j"
	}],
	["path", {
		d: "m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2",
		key: "1pkfrk"
	}],
	["circle", {
		cx: "20",
		cy: "9",
		r: "2",
		key: "1udoqf"
	}]
]), Tv = m("messages-square", [["path", {
	d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
	key: "1n2ejm"
}], ["path", {
	d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",
	key: "1qfcsi"
}]]), Ev = m("mic-audio-lines", [
	["path", {
		d: "M10 3v2.341",
		key: "d00509"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M14 5v.341",
		key: "72nt6x"
	}],
	["path", {
		d: "M18 5v13",
		key: "123xd1"
	}],
	["path", {
		d: "M2 10v3",
		key: "1fnikh"
	}],
	["path", {
		d: "M22 10v3",
		key: "154ddg"
	}],
	["path", {
		d: "M6 6v11",
		key: "11sgs0"
	}],
	["path", {
		d: "M9 21h6",
		key: "1udhl7"
	}],
	["rect", {
		width: "4",
		height: "8",
		x: "10",
		y: "9",
		rx: "2",
		key: "1d9qhd"
	}]
]), Dv = m("mic-off", [
	["path", {
		d: "M12 19v3",
		key: "npa21l"
	}],
	["path", {
		d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
		key: "1gzdoj"
	}],
	["path", {
		d: "M16.95 16.95A7 7 0 0 1 5 12v-2",
		key: "cqa7eg"
	}],
	["path", {
		d: "M18.89 13.23A7 7 0 0 0 19 12v-2",
		key: "16hl24"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M9 9v3a3 3 0 0 0 5.12 2.12",
		key: "r2i35w"
	}]
]), Ov = m("mic-signal", [
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M18 11a6 6 0 00-3-5.197",
		key: "1lvu40"
	}],
	["path", {
		d: "M2 11a10 10 0 015-8.662",
		key: "bida4p"
	}],
	["path", {
		d: "M22 11a10 10 0 00-5-8.662",
		key: "idvinr"
	}],
	["path", {
		d: "M6 11a6 6 0 013-5.197",
		key: "17n2ii"
	}],
	["path", {
		d: "M9 21h6",
		key: "1udhl7"
	}],
	["rect", {
		x: "10",
		y: "9",
		width: "4",
		height: "8",
		rx: "2",
		key: "1l8p2f"
	}]
]), kv = m("mic", [
	["path", {
		d: "M12 19v3",
		key: "npa21l"
	}],
	["path", {
		d: "M19 10v2a7 7 0 0 1-14 0v-2",
		key: "1vc78b"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "13",
		rx: "3",
		key: "s6n7sd"
	}]
]), Av = m("microchip", [
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}],
	["path", {
		d: "M10 17h4",
		key: "pvmtpo"
	}],
	["path", {
		d: "M10 7h4",
		key: "1vgcok"
	}],
	["path", {
		d: "M18 12h2",
		key: "quuxs7"
	}],
	["path", {
		d: "M18 18h2",
		key: "4scel"
	}],
	["path", {
		d: "M18 6h2",
		key: "1ptzki"
	}],
	["path", {
		d: "M4 12h2",
		key: "1ltxp0"
	}],
	["path", {
		d: "M4 18h2",
		key: "1xrofg"
	}],
	["path", {
		d: "M4 6h2",
		key: "1cx33n"
	}],
	["rect", {
		x: "6",
		y: "2",
		width: "12",
		height: "20",
		rx: "2",
		key: "749fme"
	}]
]), jv = m("mic-vocal", [
	["path", {
		d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
		key: "80a601"
	}],
	["path", {
		d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
		key: "j0ngtp"
	}],
	["circle", {
		cx: "16",
		cy: "7",
		r: "5",
		key: "d08jfb"
	}]
]), Mv = m("microscope", [
	["path", {
		d: "M6 18h8",
		key: "1borvv"
	}],
	["path", {
		d: "M3 22h18",
		key: "8prr45"
	}],
	["path", {
		d: "M14 22a7 7 0 1 0 0-14h-1",
		key: "1jwaiy"
	}],
	["path", {
		d: "M9 14h2",
		key: "197e7h"
	}],
	["path", {
		d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",
		key: "1bmzmy"
	}],
	["path", {
		d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
		key: "1drr47"
	}]
]), Nv = m("microwave", [
	["rect", {
		width: "20",
		height: "15",
		x: "2",
		y: "4",
		rx: "2",
		key: "2no95f"
	}],
	["rect", {
		width: "8",
		height: "7",
		x: "6",
		y: "8",
		rx: "1",
		key: "zh9wx"
	}],
	["path", {
		d: "M18 8v7",
		key: "o5zi4n"
	}],
	["path", {
		d: "M6 19v2",
		key: "1loha6"
	}],
	["path", {
		d: "M18 19v2",
		key: "1dawf0"
	}]
]), Pv = m("milestone", [
	["path", {
		d: "M12 13v8",
		key: "1l5pq0"
	}],
	["path", {
		d: "M12 3v3",
		key: "1n5kay"
	}],
	["path", {
		d: "M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
		key: "8gz4t4"
	}]
]), Fv = m("milk-off", [
	["path", {
		d: "M8 2h8",
		key: "1ssgc1"
	}],
	["path", {
		d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
		key: "y0ejgx"
	}],
	["path", {
		d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",
		key: "iaxqsy"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), Iv = m("milk", [
	["path", {
		d: "M8 2h8",
		key: "1ssgc1"
	}],
	["path", {
		d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
		key: "qtp12x"
	}],
	["path", {
		d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
		key: "ygeh44"
	}]
]), Lv = m("minimize", [
	["path", {
		d: "M8 3v3a2 2 0 0 1-2 2H3",
		key: "hohbtr"
	}],
	["path", {
		d: "M21 8h-3a2 2 0 0 1-2-2V3",
		key: "5jw1f3"
	}],
	["path", {
		d: "M3 16h3a2 2 0 0 1 2 2v3",
		key: "198tvr"
	}],
	["path", {
		d: "M16 21v-3a2 2 0 0 1 2-2h3",
		key: "ph8mxp"
	}]
]), Rv = m("minimize-2", [
	["path", {
		d: "m14 10 7-7",
		key: "oa77jy"
	}],
	["path", {
		d: "M20 10h-6V4",
		key: "mjg0md"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M4 14h6v6",
		key: "rmj7iw"
	}]
]), zv = m("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Bv = m("mirror-rectangular", [
	["path", {
		d: "M11 6 8 9",
		key: "7zt14w"
	}],
	["path", {
		d: "m16 7-8 8",
		key: "tkgtvu"
	}],
	["rect", {
		x: "4",
		y: "2",
		width: "16",
		height: "20",
		rx: "2",
		key: "1uxh74"
	}]
]), Vv = m("mirror-round", [
	["path", {
		d: "M10 6.6 8.6 8",
		key: "itrr7k"
	}],
	["path", {
		d: "M12 18v4",
		key: "jadmvz"
	}],
	["path", {
		d: "M15 7.5 9.5 13",
		key: "1vyrsv"
	}],
	["path", {
		d: "M7 22h10",
		key: "10w4w3"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "8",
		key: "1gshiw"
	}]
]), Hv = m("monitor-check", [
	["path", {
		d: "m9 10 2 2 4-4",
		key: "1gnqz4"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}]
]), Uv = m("monitor-cloud", [
	["path", {
		d: "M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z",
		key: "1da4q6"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["rect", {
		x: "2",
		y: "3",
		width: "20",
		height: "14",
		rx: "2",
		key: "x3v2xh"
	}]
]), Wv = m("monitor-cog", [
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "m14.305 7.53.923-.382",
		key: "1mlnsw"
	}],
	["path", {
		d: "m15.228 4.852-.923-.383",
		key: "82mpwg"
	}],
	["path", {
		d: "m16.852 3.228-.383-.924",
		key: "ln4sir"
	}],
	["path", {
		d: "m16.852 8.772-.383.923",
		key: "1dejw0"
	}],
	["path", {
		d: "m19.148 3.228.383-.924",
		key: "192kgf"
	}],
	["path", {
		d: "m19.53 9.696-.382-.924",
		key: "fiavlr"
	}],
	["path", {
		d: "m20.772 4.852.924-.383",
		key: "1j8mgp"
	}],
	["path", {
		d: "m20.772 7.148.924.383",
		key: "zix9be"
	}],
	["path", {
		d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
		key: "1tnzv8"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}]
]), Gv = m("monitor-dot", [
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693",
		key: "1dx6ho"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["circle", {
		cx: "19",
		cy: "6",
		r: "3",
		key: "108a5v"
	}]
]), Kv = m("monitor-down", [
	["path", {
		d: "M12 13V7",
		key: "h0r20n"
	}],
	["path", {
		d: "m15 10-3 3-3-3",
		key: "lzhmyn"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}]
]), qv = m("monitor-off", [
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826",
		key: "cv7jms"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["path", {
		d: "M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042",
		key: "z8ni2w"
	}]
]), Jv = m("monitor-pause", [
	["path", {
		d: "M10 13V7",
		key: "1u13u9"
	}],
	["path", {
		d: "M14 13V7",
		key: "1vj9om"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}]
]), Yv = m("monitor-smartphone", [
	["path", {
		d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
		key: "10dyio"
	}],
	["path", {
		d: "M10 19v-3.96 3.15",
		key: "1irgej"
	}],
	["path", {
		d: "M7 19h5",
		key: "qswx4l"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "16",
		y: "12",
		rx: "2",
		key: "1egngj"
	}]
]), Xv = m("monitor-play", [
	["path", {
		d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",
		key: "vbtd3f"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["rect", {
		x: "2",
		y: "3",
		width: "20",
		height: "14",
		rx: "2",
		key: "x3v2xh"
	}]
]), Zv = m("monitor-speaker", [
	["path", {
		d: "M5.5 20H8",
		key: "1k40s5"
	}],
	["path", {
		d: "M17 9h.01",
		key: "1j24nn"
	}],
	["rect", {
		width: "10",
		height: "16",
		x: "12",
		y: "4",
		rx: "2",
		key: "ixliua"
	}],
	["path", {
		d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",
		key: "1mp6e1"
	}],
	["circle", {
		cx: "17",
		cy: "15",
		r: "1",
		key: "tqvash"
	}]
]), Qv = m("monitor-stop", [
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["rect", {
		x: "2",
		y: "3",
		width: "20",
		height: "14",
		rx: "2",
		key: "x3v2xh"
	}],
	["rect", {
		x: "9",
		y: "7",
		width: "6",
		height: "6",
		rx: "1",
		key: "5m2oou"
	}]
]), $v = m("monitor-up", [
	["path", {
		d: "m9 10 3-3 3 3",
		key: "11gsxs"
	}],
	["path", {
		d: "M12 13V7",
		key: "h0r20n"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}]
]), ey = m("monitor-x", [
	["path", {
		d: "m14.5 12.5-5-5",
		key: "1jahn5"
	}],
	["path", {
		d: "m9.5 12.5 5-5",
		key: "1k2t7b"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}]
]), ty = m("monitor", [
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "21",
		y2: "21",
		key: "1svkeh"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "17",
		y2: "21",
		key: "vw1qmm"
	}]
]), ny = m("moon-star", [
	["path", {
		d: "M18 5h4",
		key: "1lhgn2"
	}],
	["path", {
		d: "M20 3v4",
		key: "1olli1"
	}],
	["path", {
		d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
		key: "kfwtm"
	}]
]), ry = m("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), iy = m("motorbike", [
	["path", {
		d: "m18 14-1-3",
		key: "bdajw9"
	}],
	["path", {
		d: "m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81",
		key: "f5fotj"
	}],
	["path", {
		d: "M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5",
		key: "3i90e2"
	}],
	["circle", {
		cx: "19",
		cy: "17",
		r: "3",
		key: "1otbdv"
	}],
	["circle", {
		cx: "5",
		cy: "17",
		r: "3",
		key: "1d8p0c"
	}]
]), ay = m("mosque", [
	["path", {
		d: "M12.268 2a2 2 0 003.465 2",
		key: "3in8xp"
	}],
	["path", {
		d: "M14 5 L14 8",
		key: "1fhhfb"
	}],
	["path", {
		d: "M16 22v-3a2 2 0 00-4 0v3",
		key: "1p6nbd"
	}],
	["path", {
		d: "M21 13c-.662-1.497-1.666-2.753-2.9-3.63C16.825 8.47 15.422 8 14 8s-2.826.47-4.1 1.37C8.668 10.248 7.663 11.504 7 13z",
		key: "ck3r5y"
	}],
	["path", {
		d: "M3 9h4",
		key: "rnfnj5"
	}],
	["path", {
		d: "M7 22V6a5 5 0 00-2-4 5 5 0 00-2 4v14a2 2 0 002 2h14a2 2 0 002-2v-7",
		key: "28kgc3"
	}]
]), oy = m("mountain-snow", [["path", {
	d: "m8 3 4 8 5-5 5 15H2L8 3z",
	key: "otkl63"
}], ["path", {
	d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",
	key: "1pvmmp"
}]]), sy = m("mountain", [["path", {
	d: "m8 3 4 8 5-5 5 15H2L8 3z",
	key: "otkl63"
}]]), cy = m("mouse-left", [
	["path", {
		d: "M12 7.318V10",
		key: "17s7lh"
	}],
	["path", {
		d: "M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7",
		key: "imk5ea"
	}],
	["circle", {
		cx: "7",
		cy: "4",
		r: "2",
		key: "ra7k3"
	}]
]), ly = m("mouse-off", [
	["path", {
		d: "M12 6v.343",
		key: "1gyhex"
	}],
	["path", {
		d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",
		key: "ukzz01"
	}],
	["path", {
		d: "M19 13.343V9A7 7 0 0 0 8.56 2.902",
		key: "104jy9"
	}],
	["path", {
		d: "M22 22 2 2",
		key: "1r8tn9"
	}]
]), uy = m("mouse-pointer-2-off", [
	["path", {
		d: "m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551",
		key: "1qoshx"
	}],
	["path", {
		d: "M22 2 2 22",
		key: "y4kqgn"
	}],
	["path", {
		d: "m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779",
		key: "mymuvk"
	}]
]), dy = m("mouse-pointer-2", [["path", {
	d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
	key: "edeuup"
}]]), fy = m("mouse-pointer-ban", [
	["path", {
		d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",
		key: "11pp1i"
	}],
	["circle", {
		cx: "16",
		cy: "16",
		r: "6",
		key: "qoo3c4"
	}],
	["path", {
		d: "m11.8 11.8 8.4 8.4",
		key: "oogvdj"
	}]
]), py = m("mouse-pointer-click", [
	["path", {
		d: "M14 4.1 12 6",
		key: "ita8i4"
	}],
	["path", {
		d: "m5.1 8-2.9-.8",
		key: "1go3kf"
	}],
	["path", {
		d: "m6 12-1.9 2",
		key: "mnht97"
	}],
	["path", {
		d: "M7.2 2.2 8 5.1",
		key: "1cfko1"
	}],
	["path", {
		d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
		key: "s0h3yz"
	}]
]), my = m("mouse-pointer", [["path", {
	d: "M12.586 12.586 19 19",
	key: "ea5xo7"
}], ["path", {
	d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
	key: "277e5u"
}]]), hy = m("mouse-right", [
	["path", {
		d: "M12 7.318V10",
		key: "17s7lh"
	}],
	["path", {
		d: "M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7",
		key: "2es5nn"
	}],
	["circle", {
		cx: "17",
		cy: "4",
		r: "2",
		key: "y5j2s2"
	}]
]), gy = m("move-3d", [
	["path", {
		d: "M5 3v16h16",
		key: "1mqmf9"
	}],
	["path", {
		d: "m5 19 6-6",
		key: "jh6hbb"
	}],
	["path", {
		d: "m2 6 3-3 3 3",
		key: "tkyvxa"
	}],
	["path", {
		d: "m18 16 3 3-3 3",
		key: "1d4glt"
	}]
]), _y = m("mouse", [["rect", {
	x: "5",
	y: "2",
	width: "14",
	height: "20",
	rx: "7",
	key: "11ol66"
}], ["path", {
	d: "M12 6v4",
	key: "16clxf"
}]]), vy = m("move-diagonal", [
	["path", {
		d: "M11 19H5v-6",
		key: "8awifj"
	}],
	["path", {
		d: "M13 5h6v6",
		key: "7voy1q"
	}],
	["path", {
		d: "M19 5 5 19",
		key: "wwaj1z"
	}]
]), yy = m("move-diagonal-2", [
	["path", {
		d: "M19 13v6h-6",
		key: "1hxl6d"
	}],
	["path", {
		d: "M5 11V5h6",
		key: "12e2xe"
	}],
	["path", {
		d: "m5 5 14 14",
		key: "11anup"
	}]
]), by = m("move-down-right", [["path", {
	d: "M19 13V19H13",
	key: "10vkzq"
}], ["path", {
	d: "M5 5L19 19",
	key: "5zm2fv"
}]]), xy = m("move-down-left", [["path", {
	d: "M11 19H5V13",
	key: "1akmht"
}], ["path", {
	d: "M19 5L5 19",
	key: "72u4yj"
}]]), Sy = m("move-horizontal", [
	["path", {
		d: "m18 8 4 4-4 4",
		key: "1ak13k"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}]
]), Cy = m("move-down", [["path", {
	d: "M8 18L12 22L16 18",
	key: "cskvfv"
}], ["path", {
	d: "M12 2V22",
	key: "r89rzk"
}]]), wy = m("move-left", [["path", {
	d: "M6 8L2 12L6 16",
	key: "kyvwex"
}], ["path", {
	d: "M2 12H22",
	key: "1m8cig"
}]]), Ty = m("move-right", [["path", {
	d: "M18 8L22 12L18 16",
	key: "1r0oui"
}], ["path", {
	d: "M2 12H22",
	key: "1m8cig"
}]]), Ey = m("move-up-left", [["path", {
	d: "M5 11V5H11",
	key: "3q78g9"
}], ["path", {
	d: "M5 5L19 19",
	key: "5zm2fv"
}]]), Dy = m("move-up-right", [["path", {
	d: "M13 5H19V11",
	key: "1n1gyv"
}], ["path", {
	d: "M19 5L5 19",
	key: "72u4yj"
}]]), Oy = m("move-up", [["path", {
	d: "M8 6L12 2L16 6",
	key: "1yvkyx"
}], ["path", {
	d: "M12 2V22",
	key: "r89rzk"
}]]), ky = m("move-vertical", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "m8 18 4 4 4-4",
		key: "bh5tu3"
	}],
	["path", {
		d: "m8 6 4-4 4 4",
		key: "ybng9g"
	}]
]), Ay = m("move", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "m15 19-3 3-3-3",
		key: "11eu04"
	}],
	["path", {
		d: "m19 9 3 3-3 3",
		key: "1mg7y2"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "m5 9-3 3 3 3",
		key: "j64kie"
	}],
	["path", {
		d: "m9 5 3-3 3 3",
		key: "l8vdw6"
	}]
]), jy = m("music-2", [["circle", {
	cx: "8",
	cy: "18",
	r: "4",
	key: "1fc0mg"
}], ["path", {
	d: "M12 18V2l7 4",
	key: "g04rme"
}]]), My = m("music-3", [["circle", {
	cx: "12",
	cy: "18",
	r: "4",
	key: "m3r9ws"
}], ["path", {
	d: "M16 18V2",
	key: "40x2m5"
}]]), Ny = m("music-4", [
	["path", {
		d: "M9 18V5l12-2v13",
		key: "1jmyc2"
	}],
	["path", {
		d: "m9 9 12-2",
		key: "1e64n2"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}],
	["circle", {
		cx: "18",
		cy: "16",
		r: "3",
		key: "1hluhg"
	}]
]), Py = m("music", [
	["path", {
		d: "M9 18V5l12-2v13",
		key: "1jmyc2"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}],
	["circle", {
		cx: "18",
		cy: "16",
		r: "3",
		key: "1hluhg"
	}]
]), Fy = m("navigation-2-off", [
	["path", {
		d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17",
		key: "qoq2o2"
	}],
	["path", {
		d: "M14.53 8.88 12 2l-1.17 3.17",
		key: "k3sjzy"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), Iy = m("navigation-2", [["polygon", {
	points: "12 2 19 21 12 17 5 21 12 2",
	key: "x8c0qg"
}]]), Ly = m("navigation-off", [
	["path", {
		d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43",
		key: "1vdtb7"
	}],
	["path", {
		d: "M17.39 11.73 22 2l-9.73 4.61",
		key: "tya3r6"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), Ry = m("navigation", [["polygon", {
	points: "3 11 22 2 13 21 11 13 3 11",
	key: "1ltx0t"
}]]), zy = m("network", [
	["rect", {
		x: "16",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "4q2zg0"
	}],
	["rect", {
		x: "2",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "8cvhb9"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "6",
		rx: "1",
		key: "1egb70"
	}],
	["path", {
		d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
		key: "1jsf9p"
	}],
	["path", {
		d: "M12 12V8",
		key: "2874zd"
	}]
]), By = m("newspaper", [
	["path", {
		d: "M15 18h-5",
		key: "95g1m2"
	}],
	["path", {
		d: "M18 14h-8",
		key: "sponae"
	}],
	["path", {
		d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
		key: "39pd36"
	}],
	["rect", {
		width: "8",
		height: "4",
		x: "10",
		y: "6",
		rx: "1",
		key: "aywv1n"
	}]
]), Vy = m("nfc", [
	["path", {
		d: "M6 8.32a7.43 7.43 0 0 1 0 7.36",
		key: "9iaqei"
	}],
	["path", {
		d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58",
		key: "1yha7l"
	}],
	["path", {
		d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",
		key: "4iu2gk"
	}],
	["path", {
		d: "M16.37 2a20.16 20.16 0 0 1 0 20",
		key: "sap9u2"
	}]
]), Hy = m("notebook-pen", [
	["path", {
		d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
		key: "re6nr2"
	}],
	["path", {
		d: "M2 6h4",
		key: "aawbzj"
	}],
	["path", {
		d: "M2 10h4",
		key: "l0bgd4"
	}],
	["path", {
		d: "M2 14h4",
		key: "1gsvsf"
	}],
	["path", {
		d: "M2 18h4",
		key: "1bu2t1"
	}],
	["path", {
		d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
		key: "pqwjuv"
	}]
]), Uy = m("non-binary", [
	["path", {
		d: "M12 2v10",
		key: "mnfbl"
	}],
	["path", {
		d: "m8.5 4 7 4",
		key: "m1xjk3"
	}],
	["path", {
		d: "m8.5 8 7-4",
		key: "t0m5j6"
	}],
	["circle", {
		cx: "12",
		cy: "17",
		r: "5",
		key: "qbz8iq"
	}]
]), Wy = m("notebook-tabs", [
	["path", {
		d: "M2 6h4",
		key: "aawbzj"
	}],
	["path", {
		d: "M2 10h4",
		key: "l0bgd4"
	}],
	["path", {
		d: "M2 14h4",
		key: "1gsvsf"
	}],
	["path", {
		d: "M2 18h4",
		key: "1bu2t1"
	}],
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["path", {
		d: "M15 2v20",
		key: "dcj49h"
	}],
	["path", {
		d: "M15 7h5",
		key: "1xj5lc"
	}],
	["path", {
		d: "M15 12h5",
		key: "w5shd9"
	}],
	["path", {
		d: "M15 17h5",
		key: "1qaofu"
	}]
]), Gy = m("notebook-text", [
	["path", {
		d: "M2 6h4",
		key: "aawbzj"
	}],
	["path", {
		d: "M2 10h4",
		key: "l0bgd4"
	}],
	["path", {
		d: "M2 14h4",
		key: "1gsvsf"
	}],
	["path", {
		d: "M2 18h4",
		key: "1bu2t1"
	}],
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["path", {
		d: "M9.5 8h5",
		key: "11mslq"
	}],
	["path", {
		d: "M9.5 12H16",
		key: "ktog6x"
	}],
	["path", {
		d: "M9.5 16H14",
		key: "p1seyn"
	}]
]), Ky = m("notebook", [
	["path", {
		d: "M2 6h4",
		key: "aawbzj"
	}],
	["path", {
		d: "M2 10h4",
		key: "l0bgd4"
	}],
	["path", {
		d: "M2 14h4",
		key: "1gsvsf"
	}],
	["path", {
		d: "M2 18h4",
		key: "1bu2t1"
	}],
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["path", {
		d: "M16 2v20",
		key: "rotuqe"
	}]
]), qy = m("notepad-text-dashed", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M12 2v4",
		key: "3427ic"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v2",
		key: "j91f56"
	}],
	["path", {
		d: "M20 12v2",
		key: "w8o0tu"
	}],
	["path", {
		d: "M20 18v2a2 2 0 0 1-2 2h-1",
		key: "1c9ggx"
	}],
	["path", {
		d: "M13 22h-2",
		key: "191ugt"
	}],
	["path", {
		d: "M7 22H6a2 2 0 0 1-2-2v-2",
		key: "1rt9px"
	}],
	["path", {
		d: "M4 14v-2",
		key: "1v0sqh"
	}],
	["path", {
		d: "M4 8V6a2 2 0 0 1 2-2h2",
		key: "1mwabg"
	}],
	["path", {
		d: "M8 10h6",
		key: "3oa6kw"
	}],
	["path", {
		d: "M8 14h8",
		key: "1fgep2"
	}],
	["path", {
		d: "M8 18h5",
		key: "17enja"
	}]
]), Jy = m("notepad-text", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M12 2v4",
		key: "3427ic"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "16",
		height: "18",
		x: "4",
		y: "4",
		rx: "2",
		key: "1u9h20"
	}],
	["path", {
		d: "M8 10h6",
		key: "3oa6kw"
	}],
	["path", {
		d: "M8 14h8",
		key: "1fgep2"
	}],
	["path", {
		d: "M8 18h5",
		key: "17enja"
	}]
]), Yy = m("nut-off", [
	["path", {
		d: "M12 4V2",
		key: "1k5q1u"
	}],
	["path", {
		d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
		key: "1xcvy9"
	}],
	["path", {
		d: "M19 10v3.343",
		key: "163tfc"
	}],
	["path", {
		d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
		key: "17914v"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), Xy = m("nut", [
	["path", {
		d: "M12 4V2",
		key: "1k5q1u"
	}],
	["path", {
		d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
		key: "1tgyif"
	}],
	["path", {
		d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
		key: "tnsqj"
	}]
]), Zy = m("octagon-alert", [
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}],
	["path", {
		d: "M12 8v4",
		key: "1got3b"
	}],
	["path", {
		d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
		key: "1fd625"
	}]
]), Qy = m("octagon-minus", [["path", {
	d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
	key: "2d38gg"
}], ["path", {
	d: "M8 12h8",
	key: "1wcyev"
}]]), $y = m("octagon-pause", [
	["path", {
		d: "M10 15V9",
		key: "1lckn7"
	}],
	["path", {
		d: "M14 15V9",
		key: "1muqhk"
	}],
	["path", {
		d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
		key: "2d38gg"
	}]
]), eb = m("octagon", [["path", {
	d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
	key: "2d38gg"
}]]), tb = m("octagon-x", [
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
		key: "2d38gg"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), nb = m("omega", [["path", {
	d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",
	key: "1x94xo"
}]]), rb = m("option", [["path", {
	d: "M14 3h7",
	key: "16f0ms"
}], ["path", {
	d: "M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21",
	key: "1qf1im"
}]]), ib = m("orbit", [
	["path", {
		d: "M20.341 6.484A10 10 0 0 1 10.266 21.85",
		key: "1enhxb"
	}],
	["path", {
		d: "M3.659 17.516A10 10 0 0 1 13.74 2.152",
		key: "1crzgf"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["circle", {
		cx: "19",
		cy: "5",
		r: "2",
		key: "mhkx31"
	}],
	["circle", {
		cx: "5",
		cy: "19",
		r: "2",
		key: "v8kfzx"
	}]
]), ab = m("origami", [
	["path", {
		d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",
		key: "1bx4vc"
	}],
	["path", {
		d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",
		key: "1h3km6"
	}],
	["path", {
		d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",
		key: "1hj4wg"
	}]
]), ob = m("package-2", [
	["path", {
		d: "M12 3v6",
		key: "1holv5"
	}],
	["path", {
		d: "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z",
		key: "187q7i"
	}],
	["path", {
		d: "M3.054 9.013h17.893",
		key: "grwhos"
	}]
]), sb = m("package-check", [
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["path", {
		d: "m16 17 2 2 4-4",
		key: "uh5qu3"
	}],
	["path", {
		d: "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",
		key: "kpkbpo"
	}],
	["path", {
		d: "M3.29 7 12 12l8.71-5",
		key: "19ckod"
	}],
	["path", {
		d: "m7.5 4.27 8.997 5.148",
		key: "9yrvtv"
	}]
]), cb = m("package-minus", [
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["path", {
		d: "M16 17h6",
		key: "1ook5g"
	}],
	["path", {
		d: "M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",
		key: "zu9avd"
	}],
	["path", {
		d: "M3.29 7 12 12l8.71-5",
		key: "19ckod"
	}],
	["path", {
		d: "m7.5 4.27 8.997 5.148",
		key: "9yrvtv"
	}]
]), lb = m("package-open", [
	["path", {
		d: "M12 22v-9",
		key: "x3hkom"
	}],
	["path", {
		d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
		key: "2ntwy6"
	}],
	["path", {
		d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
		key: "1pmm1c"
	}],
	["path", {
		d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
		key: "12ttoo"
	}]
]), ub = m("package-plus", [
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["path", {
		d: "M16 17h6",
		key: "1ook5g"
	}],
	["path", {
		d: "M19 14v6",
		key: "1ckrd5"
	}],
	["path", {
		d: "M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",
		key: "28k6lz"
	}],
	["path", {
		d: "M3.29 7 12 12l8.71-5",
		key: "19ckod"
	}],
	["path", {
		d: "m7.5 4.27 8.997 5.148",
		key: "9yrvtv"
	}]
]), db = m("package-x", [
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["path", {
		d: "m16.5 14.5 5 5",
		key: "ozpm51"
	}],
	["path", {
		d: "m16.5 19.5 5-5",
		key: "syf6b9"
	}],
	["path", {
		d: "M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074",
		key: "isw6gs"
	}],
	["path", {
		d: "M3.29 7 12 12l8.71-5",
		key: "19ckod"
	}],
	["path", {
		d: "m7.5 4.27 8.997 5.148",
		key: "9yrvtv"
	}]
]), fb = m("package-search", [
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["path", {
		d: "M20.27 18.27 22 20",
		key: "er2am"
	}],
	["path", {
		d: "M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559",
		key: "tok1h1"
	}],
	["path", {
		d: "M3.29 7 12 12l8.71-5",
		key: "19ckod"
	}],
	["path", {
		d: "m7.5 4.27 8.997 5.148",
		key: "9yrvtv"
	}],
	["circle", {
		cx: "18.5",
		cy: "16.5",
		r: "2.5",
		key: "ke13xx"
	}]
]), pb = m("package", [
	["path", {
		d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
		key: "1a0edw"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["polyline", {
		points: "3.29 7 12 12 20.71 7",
		key: "ousv84"
	}],
	["path", {
		d: "m7.5 4.27 9 5.15",
		key: "1c824w"
	}]
]), mb = m("paint-bucket", [
	["path", {
		d: "M11 7 6 2",
		key: "1jwth8"
	}],
	["path", {
		d: "M18.992 12H2.041",
		key: "xw1gg"
	}],
	["path", {
		d: "M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",
		key: "1nkol4"
	}],
	["path", {
		d: "m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",
		key: "1nk1rd"
	}]
]), hb = m("paint-roller", [
	["rect", {
		width: "16",
		height: "6",
		x: "2",
		y: "2",
		rx: "2",
		key: "jcyz7m"
	}],
	["path", {
		d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
		key: "1b9h7c"
	}],
	["rect", {
		width: "4",
		height: "6",
		x: "8",
		y: "16",
		rx: "1",
		key: "d6e7yl"
	}]
]), gb = m("paintbrush-vertical", [
	["path", {
		d: "M10 2v2",
		key: "7u0qdc"
	}],
	["path", {
		d: "M14 2v4",
		key: "qmzblu"
	}],
	["path", {
		d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",
		key: "ycvu00"
	}],
	["path", {
		d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",
		key: "iw4wnp"
	}]
]), _b = m("paintbrush", [
	["path", {
		d: "m14.622 17.897-10.68-2.913",
		key: "vj2p1u"
	}],
	["path", {
		d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
		key: "18tc5c"
	}],
	["path", {
		d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
		key: "ytzfxy"
	}]
]), vb = m("palette", [
	["path", {
		d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
		key: "e79jfc"
	}],
	["circle", {
		cx: "13.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor",
		key: "1okk4w"
	}],
	["circle", {
		cx: "17.5",
		cy: "10.5",
		r: ".5",
		fill: "currentColor",
		key: "f64h9f"
	}],
	["circle", {
		cx: "6.5",
		cy: "12.5",
		r: ".5",
		fill: "currentColor",
		key: "qy21gx"
	}],
	["circle", {
		cx: "8.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "fotxhn"
	}]
]), yb = m("panda", [
	["path", {
		d: "M11.25 17.25h1.5L12 18z",
		key: "1wmwwj"
	}],
	["path", {
		d: "m15 12 2 2",
		key: "k60wz4"
	}],
	["path", {
		d: "M18 6.5a.5.5 0 0 0-.5-.5",
		key: "1ch4h4"
	}],
	["path", {
		d: "M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83",
		key: "1c660l"
	}],
	["path", {
		d: "M6 6.5a.495.495 0 0 1 .5-.5",
		key: "eviuep"
	}],
	["path", {
		d: "m9 12-2 2",
		key: "326nkw"
	}]
]), bb = m("panel-bottom-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "m15 8-3 3-3-3",
		key: "1oxy1z"
	}]
]), xb = m("panel-bottom-dashed", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M14 15h1",
		key: "171nev"
	}],
	["path", {
		d: "M19 15h2",
		key: "1vnucp"
	}],
	["path", {
		d: "M3 15h2",
		key: "8bym0q"
	}],
	["path", {
		d: "M9 15h1",
		key: "1tg3ks"
	}]
]), Sb = m("panel-bottom-open", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "m9 10 3-3 3 3",
		key: "11gsxs"
	}]
]), Cb = m("panel-bottom", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M3 15h18",
	key: "5xshup"
}]]), wb = m("panel-left-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "m16 15-3-3 3-3",
		key: "14y99z"
	}]
]), Tb = m("panel-left-dashed", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M9 14v1",
		key: "askpd8"
	}],
	["path", {
		d: "M9 19v2",
		key: "16tejx"
	}],
	["path", {
		d: "M9 3v2",
		key: "1noubl"
	}],
	["path", {
		d: "M9 9v1",
		key: "19ebxg"
	}]
]), Eb = m("panel-left-open", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "m14 9 3 3-3 3",
		key: "8010ee"
	}]
]), Db = m("panel-left-right-dashed", [
	["path", {
		d: "M15 10V9",
		key: "4dkmfx"
	}],
	["path", {
		d: "M15 15v-1",
		key: "6a4afx"
	}],
	["path", {
		d: "M15 21v-2",
		key: "1qshmc"
	}],
	["path", {
		d: "M15 5V3",
		key: "1fk0mb"
	}],
	["path", {
		d: "M9 10V9",
		key: "1lazqi"
	}],
	["path", {
		d: "M9 15v-1",
		key: "9lx740"
	}],
	["path", {
		d: "M9 21v-2",
		key: "1fwk0n"
	}],
	["path", {
		d: "M9 5V3",
		key: "2q8zi6"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), Ob = m("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]), kb = m("panel-right-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}],
	["path", {
		d: "m8 9 3 3-3 3",
		key: "12hl5m"
	}]
]), Ab = m("panel-right-dashed", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M15 14v1",
		key: "ilsfch"
	}],
	["path", {
		d: "M15 19v2",
		key: "1fst2f"
	}],
	["path", {
		d: "M15 3v2",
		key: "z204g4"
	}],
	["path", {
		d: "M15 9v1",
		key: "z2a8b1"
	}]
]), jb = m("panel-right-open", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}],
	["path", {
		d: "m10 15-3-3 3-3",
		key: "1pgupc"
	}]
]), Mb = m("panel-right", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M15 3v18",
	key: "14nvp0"
}]]), Nb = m("panel-top-bottom-dashed", [
	["path", {
		d: "M14 15h1",
		key: "171nev"
	}],
	["path", {
		d: "M14 9h1",
		key: "l0svgy"
	}],
	["path", {
		d: "M19 15h2",
		key: "1vnucp"
	}],
	["path", {
		d: "M19 9h2",
		key: "te2zfg"
	}],
	["path", {
		d: "M3 15h2",
		key: "8bym0q"
	}],
	["path", {
		d: "M3 9h2",
		key: "1h4ldw"
	}],
	["path", {
		d: "M9 15h1",
		key: "1tg3ks"
	}],
	["path", {
		d: "M9 9h1",
		key: "15jzuz"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), Pb = m("panel-top-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "m9 16 3-3 3 3",
		key: "1idcnm"
	}]
]), Fb = m("panel-top-dashed", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M14 9h1",
		key: "l0svgy"
	}],
	["path", {
		d: "M19 9h2",
		key: "te2zfg"
	}],
	["path", {
		d: "M3 9h2",
		key: "1h4ldw"
	}],
	["path", {
		d: "M9 9h1",
		key: "15jzuz"
	}]
]), Ib = m("panel-top-open", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "m15 14-3 3-3-3",
		key: "g215vf"
	}]
]), Lb = m("panel-top", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M3 9h18",
	key: "1pudct"
}]]), Rb = m("panels-left-bottom", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "M9 15h12",
		key: "5ijen5"
	}]
]), zb = m("panels-right-bottom", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 15h12",
		key: "1wkqb3"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}]
]), Bb = m("paper-bag", [["path", {
	d: "M5.364 3.848C4 6 3 9.652 3 12.652V19a2 2 0 002 2h14a2 2 0 002-2v-5c0-2.334-1.816-4.668-2.622-7.002",
	key: "vlsvfu"
}], ["path", {
	d: "M7 3h11.379a2 2 0 011.789 1.106l.723 1.447A1 1 0 0119.997 7h-8.525a2 2 0 01-1.789-1.106L8.79 4.105a2 2 0 10-3.579 1.789l2.261 4.522A5 5 0 018 12.652V21",
	key: "12exh5"
}]]), Vb = m("panels-top-left", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M9 21V9",
		key: "1oto5p"
	}]
]), Hb = m("paperclip", [["path", {
	d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
	key: "1miecu"
}]]), Ub = m("parasol", [
	["path", {
		d: "M12.5 11.134 18.196 21",
		key: "gf58kt"
	}],
	["path", {
		d: "M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413",
		key: "znqfe4"
	}],
	["path", {
		d: "M21 21H3",
		key: "oafrgs"
	}]
]), Wb = m("parking-meter", [
	["path", {
		d: "M11 15h2",
		key: "199qp6"
	}],
	["path", {
		d: "M12 12v3",
		key: "158kv8"
	}],
	["path", {
		d: "M12 19v3",
		key: "npa21l"
	}],
	["path", {
		d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",
		key: "1jofit"
	}],
	["path", {
		d: "M9 9a3 3 0 1 1 6 0",
		key: "jdoeu8"
	}]
]), Gb = m("party-popper", [
	["path", {
		d: "M5.8 11.3 2 22l10.7-3.79",
		key: "gwxi1d"
	}],
	["path", {
		d: "M4 3h.01",
		key: "1vcuye"
	}],
	["path", {
		d: "M22 8h.01",
		key: "1mrtc2"
	}],
	["path", {
		d: "M15 2h.01",
		key: "1cjtqr"
	}],
	["path", {
		d: "M22 20h.01",
		key: "1mrys2"
	}],
	["path", {
		d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
		key: "hbicv8"
	}],
	["path", {
		d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",
		key: "1i94pl"
	}],
	["path", {
		d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",
		key: "1cofks"
	}],
	["path", {
		d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
		key: "4kbmks"
	}]
]), Kb = m("parentheses", [["path", {
	d: "M8 21s-4-3-4-9 4-9 4-9",
	key: "uto9ud"
}], ["path", {
	d: "M16 3s4 3 4 9-4 9-4 9",
	key: "4w2vsq"
}]]), qb = m("pause", [["rect", {
	x: "14",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "kaeet6"
}], ["rect", {
	x: "5",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "1wsw3u"
}]]), Jb = m("paw-print", [
	["circle", {
		cx: "11",
		cy: "4",
		r: "2",
		key: "vol9p0"
	}],
	["circle", {
		cx: "18",
		cy: "8",
		r: "2",
		key: "17gozi"
	}],
	["circle", {
		cx: "20",
		cy: "16",
		r: "2",
		key: "1v9bxh"
	}],
	["path", {
		d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
		key: "1ydw1z"
	}]
]), Yb = m("pc-case", [
	["rect", {
		width: "14",
		height: "20",
		x: "5",
		y: "2",
		rx: "2",
		key: "1uq1d7"
	}],
	["path", {
		d: "M15 14h.01",
		key: "1kp3bh"
	}],
	["path", {
		d: "M9 6h6",
		key: "dgm16u"
	}],
	["path", {
		d: "M9 10h6",
		key: "9gxzsh"
	}]
]), Xb = m("pen-off", [
	["path", {
		d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",
		key: "bjo8r8"
	}],
	["path", {
		d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",
		key: "16h5ne"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Zb = m("pen-line", [["path", {
	d: "M13 21h8",
	key: "1jsn5i"
}], ["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}]]), Qb = m("pen-tool", [
	["path", {
		d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
		key: "nt11vn"
	}],
	["path", {
		d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
		key: "15qc1e"
	}],
	["path", {
		d: "m2.3 2.3 7.286 7.286",
		key: "1wuzzi"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "2",
		key: "xmgehs"
	}]
]), $b = m("pen", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}]]), ex = m("pencil-line", [
	["path", {
		d: "M13 21h8",
		key: "1jsn5i"
	}],
	["path", {
		d: "m15 5 4 4",
		key: "1mk7zo"
	}],
	["path", {
		d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
		key: "1a8usu"
	}]
]), tx = m("pencil-off", [
	["path", {
		d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",
		key: "bjo8r8"
	}],
	["path", {
		d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",
		key: "16h5ne"
	}],
	["path", {
		d: "m15 5 4 4",
		key: "1mk7zo"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), nx = m("pencil-ruler", [
	["path", {
		d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",
		key: "orapub"
	}],
	["path", {
		d: "m8 6 2-2",
		key: "115y1s"
	}],
	["path", {
		d: "m18 16 2-2",
		key: "ee94s4"
	}],
	["path", {
		d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
		key: "cfq27r"
	}],
	["path", {
		d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
		key: "1a8usu"
	}],
	["path", {
		d: "m15 5 4 4",
		key: "1mk7zo"
	}]
]), rx = m("pencil-sparkles", [
	["path", {
		d: "M10 3H8",
		key: "mzdi2d"
	}],
	["path", {
		d: "m15.007 5.008 3.987 3.986",
		key: "1scubj"
	}],
	["path", {
		d: "M20 15v4",
		key: "nmhudv"
	}],
	["path", {
		d: "M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
		key: "fs0856"
	}],
	["path", {
		d: "M22 17h-4",
		key: "1sj068"
	}],
	["path", {
		d: "M4 5v4",
		key: "13jjxc"
	}],
	["path", {
		d: "M6 7H2",
		key: "8zbtv0"
	}],
	["path", {
		d: "M9 2v2",
		key: "165o2o"
	}]
]), ix = m("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), ax = m("pentagon", [["path", {
	d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",
	key: "2hea0t"
}]]), ox = m("percent", [
	["line", {
		x1: "19",
		x2: "5",
		y1: "5",
		y2: "19",
		key: "1x9vlm"
	}],
	["circle", {
		cx: "6.5",
		cy: "6.5",
		r: "2.5",
		key: "4mh3h7"
	}],
	["circle", {
		cx: "17.5",
		cy: "17.5",
		r: "2.5",
		key: "1mdrzq"
	}]
]), sx = m("phi", [["path", {
	d: "M12 2v20",
	key: "t6zp3m"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "7",
	key: "fim9np"
}]]), cx = m("person-standing", [
	["circle", {
		cx: "12",
		cy: "5",
		r: "1",
		key: "gxeob9"
	}],
	["path", {
		d: "m9 20 3-6 3 6",
		key: "se2kox"
	}],
	["path", {
		d: "m6 8 6 2 6-2",
		key: "4o3us4"
	}],
	["path", {
		d: "M12 10v4",
		key: "1kjpxc"
	}]
]), lx = m("philippine-peso", [
	["path", {
		d: "M20 11H4",
		key: "6ut86h"
	}],
	["path", {
		d: "M20 7H4",
		key: "zbl0bi"
	}],
	["path", {
		d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",
		key: "1ana5r"
	}]
]), ux = m("phone-call", [
	["path", {
		d: "M13 2a9 9 0 0 1 9 9",
		key: "1itnx2"
	}],
	["path", {
		d: "M13 6a5 5 0 0 1 5 5",
		key: "11nki7"
	}],
	["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]
]), dx = m("phone-forwarded", [
	["path", {
		d: "M14 6h8",
		key: "yd68k4"
	}],
	["path", {
		d: "m18 2 4 4-4 4",
		key: "pucp1d"
	}],
	["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]
]), fx = m("phone-missed", [
	["path", {
		d: "m16 2 6 6",
		key: "1gw87d"
	}],
	["path", {
		d: "m22 2-6 6",
		key: "6f0sa0"
	}],
	["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]
]), px = m("phone-incoming", [
	["path", {
		d: "M16 2v6h6",
		key: "1mfrl5"
	}],
	["path", {
		d: "m22 2-6 6",
		key: "6f0sa0"
	}],
	["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]
]), mx = m("phone-off", [
	["path", {
		d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",
		key: "1wngk7"
	}],
	["path", {
		d: "M22 2 2 22",
		key: "y4kqgn"
	}],
	["path", {
		d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",
		key: "10hv5p"
	}]
]), hx = m("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]), gx = m("phone-outgoing", [
	["path", {
		d: "m16 8 6-6",
		key: "oawc05"
	}],
	["path", {
		d: "M22 8V2h-6",
		key: "oqy2zc"
	}],
	["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]
]), _x = m("pi", [
	["line", {
		x1: "9",
		x2: "9",
		y1: "4",
		y2: "20",
		key: "ovs5a5"
	}],
	["path", {
		d: "M4 7c0-1.7 1.3-3 3-3h13",
		key: "10pag4"
	}],
	["path", {
		d: "M18 20c-1.7 0-3-1.3-3-3V4",
		key: "1gaosr"
	}]
]), vx = m("piano", [
	["path", {
		d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",
		key: "lag0yf"
	}],
	["path", {
		d: "M2 14h20",
		key: "myj16y"
	}],
	["path", {
		d: "M6 14v4",
		key: "9ng0ue"
	}],
	["path", {
		d: "M10 14v4",
		key: "1v8uk5"
	}],
	["path", {
		d: "M14 14v4",
		key: "1tqops"
	}],
	["path", {
		d: "M18 14v4",
		key: "18uqwm"
	}]
]), yx = m("pickaxe", [
	["path", {
		d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999",
		key: "1lw9ds"
	}],
	["path", {
		d: "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024",
		key: "ffj4ej"
	}],
	["path", {
		d: "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069",
		key: "8tj4zw"
	}],
	["path", {
		d: "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z",
		key: "hh6h97"
	}]
]), bx = m("picture-in-picture-2", [["path", {
	d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",
	key: "daa4of"
}], ["rect", {
	width: "10",
	height: "7",
	x: "12",
	y: "13",
	rx: "2",
	key: "1nb8gs"
}]]), xx = m("picture-in-picture", [
	["path", {
		d: "M2 10h6V4",
		key: "zwrco"
	}],
	["path", {
		d: "m2 4 6 6",
		key: "ug085t"
	}],
	["path", {
		d: "M21 10V7a2 2 0 0 0-2-2h-7",
		key: "git5jr"
	}],
	["path", {
		d: "M3 14v2a2 2 0 0 0 2 2h3",
		key: "1f7fh3"
	}],
	["rect", {
		x: "12",
		y: "14",
		width: "10",
		height: "7",
		rx: "1",
		key: "1wjs3o"
	}]
]), Sx = m("piggy-bank", [
	["path", {
		d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
		key: "1piglc"
	}],
	["path", {
		d: "M16 10h.01",
		key: "1m94wz"
	}],
	["path", {
		d: "M2 8v1a2 2 0 0 0 2 2h1",
		key: "1env43"
	}]
]), Cx = m("pilcrow-left", [
	["path", {
		d: "M14 3v11",
		key: "mlfb7b"
	}],
	["path", {
		d: "M14 9h-3a3 3 0 0 1 0-6h9",
		key: "1ulc19"
	}],
	["path", {
		d: "M18 3v11",
		key: "1phi0r"
	}],
	["path", {
		d: "M22 18H2l4-4",
		key: "yt65j9"
	}],
	["path", {
		d: "m6 22-4-4",
		key: "6jgyf5"
	}]
]), wx = m("pilcrow", [
	["path", {
		d: "M13 4v16",
		key: "8vvj80"
	}],
	["path", {
		d: "M17 4v16",
		key: "7dpous"
	}],
	["path", {
		d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13",
		key: "sh4n9v"
	}]
]), Tx = m("pilcrow-right", [
	["path", {
		d: "M10 3v11",
		key: "o3l5kj"
	}],
	["path", {
		d: "M10 9H7a1 1 0 0 1 0-6h8",
		key: "1wb1nc"
	}],
	["path", {
		d: "M14 3v11",
		key: "mlfb7b"
	}],
	["path", {
		d: "m18 14 4 4H2",
		key: "4r8io1"
	}],
	["path", {
		d: "m22 18-4 4",
		key: "1hjjrd"
	}]
]), Ex = m("pill-bottle", [
	["path", {
		d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",
		key: "17ldeb"
	}],
	["path", {
		d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",
		key: "nc37y6"
	}],
	["rect", {
		width: "16",
		height: "5",
		x: "4",
		y: "2",
		rx: "1",
		key: "3jeezo"
	}]
]), Dx = m("pill", [["path", {
	d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
	key: "wa1lgi"
}], ["path", {
	d: "m8.5 8.5 7 7",
	key: "rvfmvr"
}]]), Ox = m("pin-off", [
	["path", {
		d: "M12 17v5",
		key: "bb1du9"
	}],
	["path", {
		d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",
		key: "znwnzq"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
		key: "c9qhm2"
	}]
]), kx = m("pipette", [
	["path", {
		d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",
		key: "1y3wsu"
	}],
	["path", {
		d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",
		key: "110lr1"
	}],
	["path", {
		d: "m2 22 .414-.414",
		key: "jhxm08"
	}]
]), Ax = m("pin", [["path", {
	d: "M12 17v5",
	key: "bb1du9"
}], ["path", {
	d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
	key: "1nkz8b"
}]]), jx = m("pizza", [
	["path", {
		d: "m12 14-1 1",
		key: "11onhr"
	}],
	["path", {
		d: "m13.75 18.25-1.25 1.42",
		key: "1yisr3"
	}],
	["path", {
		d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",
		key: "1qtqk6"
	}],
	["path", {
		d: "M18.8 9.3a1 1 0 0 0 2.1 7.7",
		key: "fbbbr2"
	}],
	["path", {
		d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",
		key: "1hyfdd"
	}]
]), Mx = m("plane-landing", [["path", {
	d: "M2 22h20",
	key: "272qi7"
}], ["path", {
	d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
	key: "1ma21e"
}]]), Nx = m("plane", [["path", {
	d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
	key: "1v9wt8"
}]]), Px = m("plane-takeoff", [["path", {
	d: "M2 22h20",
	key: "272qi7"
}], ["path", {
	d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
	key: "fkigj9"
}]]), Fx = m("play-off", [
	["path", {
		d: "m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23",
		key: "fdtkwz"
	}],
	["path", {
		d: "m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5",
		key: "1c8hxg"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Ix = m("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]), Lx = m("plug-2", [
	["path", {
		d: "M9 2v6",
		key: "17ngun"
	}],
	["path", {
		d: "M15 2v6",
		key: "s7yy2p"
	}],
	["path", {
		d: "M12 17v5",
		key: "bb1du9"
	}],
	["path", {
		d: "M5 8h14",
		key: "pcz4l3"
	}],
	["path", {
		d: "M6 11V8h12v3a6 6 0 1 1-12 0Z",
		key: "wtfw2c"
	}]
]), Rx = m("plug-zap", [
	["path", {
		d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
		key: "goz73y"
	}],
	["path", {
		d: "m2 22 3-3",
		key: "19mgm9"
	}],
	["path", {
		d: "M7.5 13.5 10 11",
		key: "7xgeeb"
	}],
	["path", {
		d: "M10.5 16.5 13 14",
		key: "10btkg"
	}],
	["path", {
		d: "m18 3-4 4h6l-4 4",
		key: "16psg9"
	}]
]), zx = m("plug", [
	["path", {
		d: "M12 22v-5",
		key: "1ega77"
	}],
	["path", {
		d: "M15 8V2",
		key: "18g5xt"
	}],
	["path", {
		d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",
		key: "1xoxul"
	}],
	["path", {
		d: "M9 8V2",
		key: "14iosj"
	}]
]), Bx = m("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), Vx = m("pocket-knife", [
	["path", {
		d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",
		key: "19w3oe"
	}],
	["path", {
		d: "M18 6h.01",
		key: "1v4wsw"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",
		key: "6fykxj"
	}],
	["path", {
		d: "M18 11.66V22a4 4 0 0 0 4-4V6",
		key: "1utzek"
	}]
]), Hx = m("podium", [
	["path", {
		d: "M12 6V2h-1",
		key: "1hv4eo"
	}],
	["path", {
		d: "M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1",
		key: "1jvw5n"
	}],
	["path", {
		d: "M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10",
		key: "rgi5dp"
	}]
]), Ux = m("pointer-off", [
	["path", {
		d: "M10 4.5V4a2 2 0 0 0-2.41-1.957",
		key: "jsi14n"
	}],
	["path", {
		d: "M13.9 8.4a2 2 0 0 0-1.26-1.295",
		key: "hirc7f"
	}],
	["path", {
		d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",
		key: "1jxb2e"
	}],
	["path", {
		d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",
		key: "10r7hm"
	}],
	["path", {
		d: "M6 6v8",
		key: "tv5xkp"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Wx = m("pointer", [
	["path", {
		d: "M22 14a8 8 0 0 1-8 8",
		key: "56vcr3"
	}],
	["path", {
		d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
		key: "1agjmk"
	}],
	["path", {
		d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",
		key: "wdbh2u"
	}],
	["path", {
		d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",
		key: "1ibuk9"
	}],
	["path", {
		d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
		key: "g6ys72"
	}]
]), Gx = m("popcorn", [
	["path", {
		d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
		key: "10td1f"
	}],
	["path", {
		d: "M10 22 9 8",
		key: "yjptiv"
	}],
	["path", {
		d: "m14 22 1-14",
		key: "8jwc8b"
	}],
	["path", {
		d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
		key: "1qo33t"
	}]
]), Kx = m("popsicle", [["path", {
	d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",
	key: "1o68ps"
}], ["path", {
	d: "m22 22-5.5-5.5",
	key: "17o70y"
}]]), qx = m("pound-sterling", [
	["path", {
		d: "M18 7c0-5.333-8-5.333-8 0",
		key: "1prm2n"
	}],
	["path", {
		d: "M10 7v14",
		key: "18tmcs"
	}],
	["path", {
		d: "M6 21h12",
		key: "4dkmi1"
	}],
	["path", {
		d: "M6 13h10",
		key: "ybwr4a"
	}]
]), Jx = m("power-off", [
	["path", {
		d: "M18.36 6.64A9 9 0 0 1 20.77 15",
		key: "dxknvb"
	}],
	["path", {
		d: "M6.16 6.16a9 9 0 1 0 12.68 12.68",
		key: "1x7qb5"
	}],
	["path", {
		d: "M12 2v4",
		key: "3427ic"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Yx = m("power", [["path", {
	d: "M12 2v10",
	key: "mnfbl"
}], ["path", {
	d: "M18.4 6.6a9 9 0 1 1-12.77.04",
	key: "obofu9"
}]]), Xx = m("presentation", [
	["path", {
		d: "M2 3h20",
		key: "91anmk"
	}],
	["path", {
		d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",
		key: "2k9sn8"
	}],
	["path", {
		d: "m7 21 5-5 5 5",
		key: "bip4we"
	}]
]), Zx = m("printer-check", [
	["path", {
		d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",
		key: "qeb09x"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}],
	["path", {
		d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",
		key: "1md90i"
	}],
	["path", {
		d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
		key: "1itne7"
	}]
]), Qx = m("printer-x", [
	["path", {
		d: "M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377",
		key: "1w39xo"
	}],
	["path", {
		d: "m16.5 16.5 5 5",
		key: "zc9lw7"
	}],
	["path", {
		d: "m16.5 21.5 5-5",
		key: "1fr29m"
	}],
	["path", {
		d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5",
		key: "18he39"
	}],
	["path", {
		d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
		key: "1itne7"
	}]
]), $x = m("printer", [
	["path", {
		d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
		key: "143wyd"
	}],
	["path", {
		d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
		key: "1itne7"
	}],
	["rect", {
		x: "6",
		y: "14",
		width: "12",
		height: "8",
		rx: "1",
		key: "1ue0tg"
	}]
]), eS = m("projector", [
	["path", {
		d: "M5 7 3 5",
		key: "1yys58"
	}],
	["path", {
		d: "M9 6V3",
		key: "1ptz9u"
	}],
	["path", {
		d: "m13 7 2-2",
		key: "1w3vmq"
	}],
	["circle", {
		cx: "9",
		cy: "13",
		r: "3",
		key: "1mma13"
	}],
	["path", {
		d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
		key: "2frwzc"
	}],
	["path", {
		d: "M16 16h2",
		key: "dnq2od"
	}]
]), tS = m("proportions", [
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}],
	["path", {
		d: "M12 9v11",
		key: "1fnkrn"
	}],
	["path", {
		d: "M2 9h13a2 2 0 0 1 2 2v9",
		key: "11z3ex"
	}]
]), nS = m("puzzle", [["path", {
	d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
	key: "w46dr5"
}]]), rS = m("pyramid", [["path", {
	d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
	key: "aenxs0"
}], ["path", {
	d: "M12 2v20",
	key: "t6zp3m"
}]]), iS = m("qr-code", [
	["rect", {
		width: "5",
		height: "5",
		x: "3",
		y: "3",
		rx: "1",
		key: "1tu5fj"
	}],
	["rect", {
		width: "5",
		height: "5",
		x: "16",
		y: "3",
		rx: "1",
		key: "1v8r4q"
	}],
	["rect", {
		width: "5",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "1x03jg"
	}],
	["path", {
		d: "M21 16h-3a2 2 0 0 0-2 2v3",
		key: "177gqh"
	}],
	["path", {
		d: "M21 21v.01",
		key: "ents32"
	}],
	["path", {
		d: "M12 7v3a2 2 0 0 1-2 2H7",
		key: "8crl2c"
	}],
	["path", {
		d: "M3 12h.01",
		key: "nlz23k"
	}],
	["path", {
		d: "M12 3h.01",
		key: "n36tog"
	}],
	["path", {
		d: "M12 16v.01",
		key: "133mhm"
	}],
	["path", {
		d: "M16 12h1",
		key: "1slzba"
	}],
	["path", {
		d: "M21 12v.01",
		key: "1lwtk9"
	}],
	["path", {
		d: "M12 21v-1",
		key: "1880an"
	}]
]), aS = m("quote", [["path", {
	d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "rib7q0"
}], ["path", {
	d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "1ymkrd"
}]]), oS = m("rabbit", [
	["path", {
		d: "M13 16a3 3 0 0 1 2.24 5",
		key: "1epib5"
	}],
	["path", {
		d: "M18 12h.01",
		key: "yjnet6"
	}],
	["path", {
		d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
		key: "ue9ozu"
	}],
	["path", {
		d: "M20 8.54V4a2 2 0 1 0-4 0v3",
		key: "49iql8"
	}],
	["path", {
		d: "M7.612 12.524a3 3 0 1 0-1.6 4.3",
		key: "1e33i0"
	}]
]), sS = m("radar", [
	["path", {
		d: "M19.07 4.93A10 10 0 0 0 6.99 3.34",
		key: "z3du51"
	}],
	["path", {
		d: "M4 6h.01",
		key: "oypzma"
	}],
	["path", {
		d: "M2.29 9.62A10 10 0 1 0 21.31 8.35",
		key: "qzzz0"
	}],
	["path", {
		d: "M16.24 7.76A6 6 0 1 0 8.23 16.67",
		key: "1yjesh"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M17.99 11.66A6 6 0 0 1 15.77 16.67",
		key: "1u2y91"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "m13.41 10.59 5.66-5.66",
		key: "mhq4k0"
	}]
]), cS = m("radiation", [
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z",
		key: "1y4lzb"
	}],
	["path", {
		d: "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z",
		key: "163ggk"
	}],
	["path", {
		d: "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z",
		key: "1l9i0b"
	}]
]), lS = m("radical", [["path", {
	d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",
	key: "1mqj8i"
}]]), uS = m("radio-off", [
	["path", {
		d: "M13.414 13.414a2 2 0 1 1-2.828-2.828",
		key: "srl686"
	}],
	["path", {
		d: "M16.247 7.761a6 6 0 0 1 1.744 4.572",
		key: "1h86sp"
	}],
	["path", {
		d: "M19.075 4.933a10 10 0 0 1 2.234 10.72",
		key: "1n13k4"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M4.925 19.067a10 10 0 0 1 0-14.134",
		key: "1q22gi"
	}],
	["path", {
		d: "M7.753 16.239a6 6 0 0 1 0-8.478",
		key: "r2q7qm"
	}]
]), dS = m("radio-receiver", [
	["path", {
		d: "M5 16v2",
		key: "g5qcv5"
	}],
	["path", {
		d: "M19 16v2",
		key: "1gbaio"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "8",
		rx: "2",
		key: "vjsjur"
	}],
	["path", {
		d: "M18 12h.01",
		key: "yjnet6"
	}]
]), fS = m("radio-tower", [
	["path", {
		d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9",
		key: "s0qx1y"
	}],
	["path", {
		d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",
		key: "1idnkw"
	}],
	["circle", {
		cx: "12",
		cy: "9",
		r: "2",
		key: "1092wv"
	}],
	["path", {
		d: "M16.2 4.8c2 2 2.26 5.11.8 7.47",
		key: "ojru2q"
	}],
	["path", {
		d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1",
		key: "rhi7fg"
	}],
	["path", {
		d: "M9.5 18h5",
		key: "mfy3pd"
	}],
	["path", {
		d: "m8 22 4-11 4 11",
		key: "25yftu"
	}]
]), pS = m("radio", [
	["path", {
		d: "M16.247 7.761a6 6 0 0 1 0 8.478",
		key: "1fwjs5"
	}],
	["path", {
		d: "M19.075 4.933a10 10 0 0 1 0 14.134",
		key: "ehdyv1"
	}],
	["path", {
		d: "M4.925 19.067a10 10 0 0 1 0-14.134",
		key: "1q22gi"
	}],
	["path", {
		d: "M7.753 16.239a6 6 0 0 1 0-8.478",
		key: "r2q7qm"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), mS = m("radius", [
	["path", {
		d: "M20.34 17.52a10 10 0 1 0-2.82 2.82",
		key: "fydyku"
	}],
	["circle", {
		cx: "19",
		cy: "19",
		r: "2",
		key: "17f5cg"
	}],
	["path", {
		d: "m13.41 13.41 4.18 4.18",
		key: "1gqbwc"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), hS = m("rainbow", [
	["path", {
		d: "M22 17a10 10 0 0 0-20 0",
		key: "ozegv"
	}],
	["path", {
		d: "M6 17a6 6 0 0 1 12 0",
		key: "5giftw"
	}],
	["path", {
		d: "M10 17a2 2 0 0 1 4 0",
		key: "gnsikk"
	}]
]), gS = m("rat", [
	["path", {
		d: "M13 22H4a2 2 0 0 1 0-4h12",
		key: "bt3f23"
	}],
	["path", {
		d: "M13.236 18a3 3 0 0 0-2.2-5",
		key: "1tbvmo"
	}],
	["path", {
		d: "M16 9h.01",
		key: "1bdo4e"
	}],
	["path", {
		d: "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",
		key: "9ch7kn"
	}],
	["path", {
		d: "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18",
		key: "3s7e9i"
	}]
]), _S = m("ratio", [["rect", {
	width: "12",
	height: "20",
	x: "6",
	y: "2",
	rx: "2",
	key: "1oxtiu"
}], ["rect", {
	width: "20",
	height: "12",
	x: "2",
	y: "6",
	rx: "2",
	key: "9lu3g6"
}]]), vS = m("receipt-cent", [
	["path", {
		d: "M12 7v10",
		key: "jspqdw"
	}],
	["path", {
		d: "M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0",
		key: "qvqont"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}]
]), yS = m("receipt-euro", [
	["path", {
		d: "M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0",
		key: "16zdw4"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}],
	["path", {
		d: "M8 12h5",
		key: "1g6qi8"
	}]
]), bS = m("receipt-indian-rupee", [
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}],
	["path", {
		d: "M8 11h8",
		key: "vwpz6n"
	}],
	["path", {
		d: "M8 7h8",
		key: "i86dvs"
	}],
	["path", {
		d: "M9 7a4 4 0 0 1 0 8H8l3 2",
		key: "1xaco0"
	}]
]), xS = m("receipt-japanese-yen", [
	["path", {
		d: "m12 10 3-3",
		key: "1mc12w"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}],
	["path", {
		d: "M9 11h6",
		key: "1fldmi"
	}],
	["path", {
		d: "M9 15h6",
		key: "cctwl0"
	}],
	["path", {
		d: "m9 7 3 3v7",
		key: "1x0cue"
	}]
]), SS = m("receipt-pound-sterling", [
	["path", {
		d: "M10 17V9.5a1 1 0 0 1 5 0",
		key: "td22vl"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}],
	["path", {
		d: "M8 13h5",
		key: "1k9z8w"
	}],
	["path", {
		d: "M8 17h7",
		key: "8mjdqu"
	}]
]), CS = m("receipt-russian-ruble", [
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}],
	["path", {
		d: "M8 11h5a2 2 0 0 0 0-4h-3v10",
		key: "agnv0r"
	}],
	["path", {
		d: "M8 15h5",
		key: "vxg57a"
	}]
]), wS = m("receipt-swiss-franc", [
	["path", {
		d: "M10 11h4",
		key: "1i0mka"
	}],
	["path", {
		d: "M10 17V7h5",
		key: "k7jq18"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}],
	["path", {
		d: "M8 15h5",
		key: "vxg57a"
	}]
]), TS = m("receipt-text", [
	["path", {
		d: "M13 16H8",
		key: "wsln4y"
	}],
	["path", {
		d: "M14 8H8",
		key: "1l3xfs"
	}],
	["path", {
		d: "M16 12H8",
		key: "1fr5h0"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}]
]), ES = m("receipt-turkish-lira", [
	["path", {
		d: "M10 7v10a5 5 0 0 0 5-5",
		key: "1blmz7"
	}],
	["path", {
		d: "m14 8-6 3",
		key: "2tb98i"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}]
]), DS = m("receipt", [
	["path", {
		d: "M12 17V7",
		key: "pyj7ub"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",
		key: "1elt7d"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}]
]), OS = m("rectangle-circle", [["path", {
	d: "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z",
	key: "1m5n7q"
}], ["circle", {
	cx: "14",
	cy: "12",
	r: "8",
	key: "1pag6k"
}]]), kS = m("rectangle-ellipsis", [
	["rect", {
		width: "20",
		height: "12",
		x: "2",
		y: "6",
		rx: "2",
		key: "9lu3g6"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M17 12h.01",
		key: "1m0b6t"
	}],
	["path", {
		d: "M7 12h.01",
		key: "eqddd0"
	}]
]), AS = m("rectangle-goggles", [["path", {
	d: "M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
	key: "d5y1f"
}]]), jS = m("rectangle-vertical", [["rect", {
	width: "12",
	height: "20",
	x: "6",
	y: "2",
	rx: "2",
	key: "1oxtiu"
}]]), MS = m("rectangle-horizontal", [["rect", {
	width: "20",
	height: "12",
	x: "2",
	y: "6",
	rx: "2",
	key: "9lu3g6"
}]]), NS = m("recycle", [
	["path", {
		d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
		key: "x6z5xu"
	}],
	["path", {
		d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
		key: "1x4zh5"
	}],
	["path", {
		d: "m14 16-3 3 3 3",
		key: "f6jyew"
	}],
	["path", {
		d: "M8.293 13.596 7.196 9.5 3.1 10.598",
		key: "wf1obh"
	}],
	["path", {
		d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
		key: "9tzpgr"
	}],
	["path", {
		d: "m13.378 9.633 4.096 1.098 1.097-4.096",
		key: "1oe83g"
	}]
]), PS = m("redo-dot", [
	["circle", {
		cx: "12",
		cy: "17",
		r: "1",
		key: "1ixnty"
	}],
	["path", {
		d: "M21 7v6h-6",
		key: "3ptur4"
	}],
	["path", {
		d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",
		key: "1kgawr"
	}]
]), FS = m("redo-2", [["path", {
	d: "m15 14 5-5-5-5",
	key: "12vg1m"
}], ["path", {
	d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
	key: "6uklza"
}]]), IS = m("redo", [["path", {
	d: "M21 7v6h-6",
	key: "3ptur4"
}], ["path", {
	d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",
	key: "1kgawr"
}]]), LS = m("refresh-ccw-dot", [
	["path", {
		d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "14sxne"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
		key: "1hlbsb"
	}],
	["path", {
		d: "M16 16h5v5",
		key: "ccwih5"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}]
]), RS = m("refresh-ccw", [
	["path", {
		d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "14sxne"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
		key: "1hlbsb"
	}],
	["path", {
		d: "M16 16h5v5",
		key: "ccwih5"
	}]
]), zS = m("refresh-cw-off", [
	["path", {
		d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",
		key: "1krf6h"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}],
	["path", {
		d: "M3 12C3 9.51 4 7.26 5.64 5.64",
		key: "ruvoct"
	}],
	["path", {
		d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",
		key: "19q130"
	}],
	["path", {
		d: "M21 12c0 1-.16 1.97-.47 2.87",
		key: "4w8emr"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M22 22 2 2",
		key: "1r8tn9"
	}]
]), BS = m("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]), VS = m("refrigerator", [
	["path", {
		d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",
		key: "fpq118"
	}],
	["path", {
		d: "M5 10h14",
		key: "elsbfy"
	}],
	["path", {
		d: "M15 7v6",
		key: "1nx30x"
	}]
]), HS = m("regex", [
	["path", {
		d: "M17 3v10",
		key: "15fgeh"
	}],
	["path", {
		d: "m12.67 5.5 8.66 5",
		key: "1gpheq"
	}],
	["path", {
		d: "m12.67 10.5 8.66-5",
		key: "1dkfa6"
	}],
	["path", {
		d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",
		key: "swwfx4"
	}]
]), US = m("remove-formatting", [
	["path", {
		d: "M4 7V4h16v3",
		key: "9msm58"
	}],
	["path", {
		d: "M5 20h6",
		key: "1h6pxn"
	}],
	["path", {
		d: "M13 4 8 20",
		key: "kqq6aj"
	}],
	["path", {
		d: "m15 15 5 5",
		key: "me55sn"
	}],
	["path", {
		d: "m20 15-5 5",
		key: "11p7ol"
	}]
]), WS = m("repeat-1", [
	["path", {
		d: "m17 2 4 4-4 4",
		key: "nntrym"
	}],
	["path", {
		d: "M3 11v-1a4 4 0 0 1 4-4h14",
		key: "84bu3i"
	}],
	["path", {
		d: "m7 22-4-4 4-4",
		key: "1wqhfi"
	}],
	["path", {
		d: "M21 13v1a4 4 0 0 1-4 4H3",
		key: "1rx37r"
	}],
	["path", {
		d: "M11 10h1v4",
		key: "70cz1p"
	}]
]), GS = m("repeat-2", [
	["path", {
		d: "m2 9 3-3 3 3",
		key: "1ltn5i"
	}],
	["path", {
		d: "M13 18H7a2 2 0 0 1-2-2V6",
		key: "1r6tfw"
	}],
	["path", {
		d: "m22 15-3 3-3-3",
		key: "4rnwn2"
	}],
	["path", {
		d: "M11 6h6a2 2 0 0 1 2 2v10",
		key: "2f72bc"
	}]
]), KS = m("repeat-off", [
	["path", {
		d: "M11.656 6H21l-4-4",
		key: "w9pozh"
	}],
	["path", {
		d: "M17.898 17.898A4 4 0 0 1 17 18H3l4-4",
		key: "156mfe"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M21 13v1a4 4 0 0 1-.171 1.159",
		key: "2p1713"
	}],
	["path", {
		d: "m21 6-4 4",
		key: "p7opkf"
	}],
	["path", {
		d: "M3 11v-1a4 4 0 0 1 3.102-3.898",
		key: "8cius9"
	}],
	["path", {
		d: "m7 22-4-4",
		key: "1kl3a3"
	}]
]), qS = m("repeat", [
	["path", {
		d: "m17 2 4 4-4 4",
		key: "nntrym"
	}],
	["path", {
		d: "M3 11v-1a4 4 0 0 1 4-4h14",
		key: "84bu3i"
	}],
	["path", {
		d: "m7 22-4-4 4-4",
		key: "1wqhfi"
	}],
	["path", {
		d: "M21 13v1a4 4 0 0 1-4 4H3",
		key: "1rx37r"
	}]
]), JS = m("replace-all", [
	["path", {
		d: "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
		key: "zg1ipl"
	}],
	["path", {
		d: "M14 4a1 1 0 0 1 1-1",
		key: "dhj8ez"
	}],
	["path", {
		d: "M15 10a1 1 0 0 1-1-1",
		key: "1mnyi5"
	}],
	["path", {
		d: "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
		key: "txt6k4"
	}],
	["path", {
		d: "M21 4a1 1 0 0 0-1-1",
		key: "sfs9ap"
	}],
	["path", {
		d: "M21 9a1 1 0 0 1-1 1",
		key: "mp6qeo"
	}],
	["path", {
		d: "m3 7 3 3 3-3",
		key: "x25e72"
	}],
	["path", {
		d: "M6 10V5a2 2 0 0 1 2-2h2",
		key: "15xut4"
	}],
	["rect", {
		x: "3",
		y: "14",
		width: "7",
		height: "7",
		rx: "1",
		key: "1bkyp8"
	}]
]), YS = m("replace", [
	["path", {
		d: "M14 4a1 1 0 0 1 1-1",
		key: "dhj8ez"
	}],
	["path", {
		d: "M15 10a1 1 0 0 1-1-1",
		key: "1mnyi5"
	}],
	["path", {
		d: "M21 4a1 1 0 0 0-1-1",
		key: "sfs9ap"
	}],
	["path", {
		d: "M21 9a1 1 0 0 1-1 1",
		key: "mp6qeo"
	}],
	["path", {
		d: "m3 7 3 3 3-3",
		key: "x25e72"
	}],
	["path", {
		d: "M6 10V5a2 2 0 0 1 2-2h2",
		key: "15xut4"
	}],
	["rect", {
		x: "3",
		y: "14",
		width: "7",
		height: "7",
		rx: "1",
		key: "1bkyp8"
	}]
]), XS = m("reply-all", [
	["path", {
		d: "m12 17-5-5 5-5",
		key: "1s3y5u"
	}],
	["path", {
		d: "M22 18v-2a4 4 0 0 0-4-4H7",
		key: "1fcyog"
	}],
	["path", {
		d: "m7 17-5-5 5-5",
		key: "1ed8i2"
	}]
]), ZS = m("reply", [["path", {
	d: "M20 18v-2a4 4 0 0 0-4-4H4",
	key: "5vmcpk"
}], ["path", {
	d: "m9 17-5-5 5-5",
	key: "nvlc11"
}]]), QS = m("rewind", [["path", {
	d: "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z",
	key: "2a1g8i"
}], ["path", {
	d: "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z",
	key: "rg3s36"
}]]), $S = m("ribbon", [
	["path", {
		d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",
		key: "1rnhq3"
	}],
	["path", {
		d: "m12 18 2.57-3.5",
		key: "116vt7"
	}],
	["path", {
		d: "M6.243 9.016a7 7 0 0 1 11.507-.009",
		key: "10dq0b"
	}],
	["path", {
		d: "M9.35 14.53 12 11.22",
		key: "tdsyp2"
	}],
	["path", {
		d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",
		key: "nmifey"
	}]
]), eC = m("road", [
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M12 5V3",
		key: "vd5es"
	}],
	["path", {
		d: "M12 9v3",
		key: "qyerrc"
	}],
	["path", {
		d: "M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z",
		key: "1cuxct"
	}]
]), tC = m("rocket", [
	["path", {
		d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
		key: "qeys4"
	}],
	["path", {
		d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
		key: "u4xsad"
	}],
	["path", {
		d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
		key: "676m9"
	}],
	["path", {
		d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
		key: "92ym6u"
	}]
]), nC = m("rocking-chair", [
	["path", {
		d: "m15 13 3.708 7.416",
		key: "1edxn9"
	}],
	["path", {
		d: "M3 19a15 15 0 0 0 18 0",
		key: "d0d1c4"
	}],
	["path", {
		d: "m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18",
		key: "tpa4et"
	}],
	["path", {
		d: "m9 13-3.708 7.416",
		key: "1oplxx"
	}]
]), rC = m("roller-coaster", [
	["path", {
		d: "M6 19V5",
		key: "1r845m"
	}],
	["path", {
		d: "M10 19V6.8",
		key: "9j2tfs"
	}],
	["path", {
		d: "M14 19v-7.8",
		key: "10s8qv"
	}],
	["path", {
		d: "M18 5v4",
		key: "1tajlv"
	}],
	["path", {
		d: "M18 19v-6",
		key: "ielfq3"
	}],
	["path", {
		d: "M22 19V9",
		key: "158nzp"
	}],
	["path", {
		d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",
		key: "1930oh"
	}]
]), iC = m("rose", [
	["path", {
		d: "M17 10h-1a4 4 0 1 1 4-4v.534",
		key: "7qf5zm"
	}],
	["path", {
		d: "M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31",
		key: "1et29u"
	}],
	["path", {
		d: "M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2",
		key: "kiv2lz"
	}],
	["path", {
		d: "M9.77 12C4 15 2 22 2 22",
		key: "h28rw0"
	}],
	["circle", {
		cx: "17",
		cy: "8",
		r: "2",
		key: "1330xn"
	}]
]), aC = m("rotate-3d", [
	["path", {
		d: "m15.194 13.707 3.814 1.86-1.86 3.814",
		key: "16shm9"
	}],
	["path", {
		d: "M16.47214 7.52786 A 5 10 0 1 0 13 21.79796",
		key: "1245p8"
	}],
	["path", {
		d: "M21.79796 11 A 10 5 0 1 0 19 15.57071",
		key: "1i40ks"
	}]
]), oC = m("rotate-ccw-clock", [
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}]
]), sC = m("rotate-ccw-key", [
	["path", {
		d: "M12 7v6",
		key: "lw1j43"
	}],
	["path", {
		d: "M12 9h2",
		key: "1lpap9"
	}],
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8",
		key: "g2jlw"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["circle", {
		cx: "12",
		cy: "15",
		r: "2",
		key: "1vpstw"
	}]
]), cC = m("rotate-ccw-square", [
	["path", {
		d: "M20 9V7a2 2 0 0 0-2-2h-6",
		key: "19z8uc"
	}],
	["path", {
		d: "m15 2-3 3 3 3",
		key: "177bxs"
	}],
	["path", {
		d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",
		key: "d36hnl"
	}]
]), lC = m("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]), uC = m("rotate-cw-fading-clock", [
	["path", {
		d: "M12 3a9.75 9.75 0 0 1 6.74 2.74",
		key: "1k3kxf"
	}],
	["path", {
		d: "M18.74 5.74 21 8",
		key: "1eb40o"
	}],
	["path", {
		d: "M21 8V3",
		key: "1et280"
	}],
	["path", {
		d: "M7.5 19.794c-6-3.464-6-12.124 0-15.588",
		key: "19r0lp"
	}],
	["path", {
		d: "M7.5 4.206A9 9 0 0 1 12 3",
		key: "s8r11"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}],
	["path", {
		d: "M14 20.775A9 9 0 0 1 12 21",
		key: "184rgu"
	}],
	["path", {
		d: "M19 17.656a9 9 0 0 1-1.5 1.456",
		key: "7qgp6l"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-.228 2",
		key: "1h378y"
	}],
	["path", {
		d: "M21 8h-5",
		key: "k0yzmk"
	}]
]), dC = m("rotate-cw-square", [
	["path", {
		d: "M12 5H6a2 2 0 0 0-2 2v3",
		key: "l96uqu"
	}],
	["path", {
		d: "m9 8 3-3-3-3",
		key: "1gzgc3"
	}],
	["path", {
		d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
		key: "1w2k5h"
	}]
]), fC = m("rotate-cw", [["path", {
	d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
	key: "1p45f6"
}], ["path", {
	d: "M21 3v5h-5",
	key: "1q7to0"
}]]), pC = m("route-off", [
	["circle", {
		cx: "6",
		cy: "19",
		r: "3",
		key: "1kj8tv"
	}],
	["path", {
		d: "M9 19h8.5c.4 0 .9-.1 1.3-.2",
		key: "1effex"
	}],
	["path", {
		d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",
		key: "k9y2ds"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3",
		key: "11nlu2"
	}],
	["path", {
		d: "M15 5h-4.3",
		key: "6537je"
	}],
	["circle", {
		cx: "18",
		cy: "5",
		r: "3",
		key: "gq8acd"
	}]
]), mC = m("route", [
	["circle", {
		cx: "6",
		cy: "19",
		r: "3",
		key: "1kj8tv"
	}],
	["path", {
		d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
		key: "1d8sl"
	}],
	["circle", {
		cx: "18",
		cy: "5",
		r: "3",
		key: "gq8acd"
	}]
]), hC = m("rows-2", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M3 12h18",
	key: "1i2n21"
}]]), gC = m("router", [
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		key: "w68u3i"
	}],
	["path", {
		d: "M6.01 18H6",
		key: "19vcac"
	}],
	["path", {
		d: "M10.01 18H10",
		key: "uamcmx"
	}],
	["path", {
		d: "M15 10v4",
		key: "qjz1xs"
	}],
	["path", {
		d: "M17.84 7.17a4 4 0 0 0-5.66 0",
		key: "1rif40"
	}],
	["path", {
		d: "M20.66 4.34a8 8 0 0 0-11.31 0",
		key: "6a5xfq"
	}]
]), _C = m("rows-3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M21 9H3",
		key: "1338ky"
	}],
	["path", {
		d: "M21 15H3",
		key: "9uk58r"
	}]
]), vC = m("rows-4", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M21 7.5H3",
		key: "1hm9pq"
	}],
	["path", {
		d: "M21 12H3",
		key: "2avoz0"
	}],
	["path", {
		d: "M21 16.5H3",
		key: "n7jzkj"
	}]
]), yC = m("rss", [
	["path", {
		d: "M4 11a9 9 0 0 1 9 9",
		key: "pv89mb"
	}],
	["path", {
		d: "M4 4a16 16 0 0 1 16 16",
		key: "k0647b"
	}],
	["circle", {
		cx: "5",
		cy: "19",
		r: "1",
		key: "bfqh0e"
	}]
]), bC = m("ruler-dimension-line", [
	["path", {
		d: "M10 15v-3",
		key: "1pjskw"
	}],
	["path", {
		d: "M14 15v-3",
		key: "1o1mqj"
	}],
	["path", {
		d: "M18 15v-3",
		key: "cws6he"
	}],
	["path", {
		d: "M2 8V4",
		key: "3jv1jz"
	}],
	["path", {
		d: "M22 6H2",
		key: "1iqbfk"
	}],
	["path", {
		d: "M22 8V4",
		key: "16f4ou"
	}],
	["path", {
		d: "M6 15v-3",
		key: "1ij1qe"
	}],
	["rect", {
		x: "2",
		y: "12",
		width: "20",
		height: "8",
		rx: "2",
		key: "1tqiko"
	}]
]), xC = m("ruler", [
	["path", {
		d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
		key: "icamh8"
	}],
	["path", {
		d: "m14.5 12.5 2-2",
		key: "inckbg"
	}],
	["path", {
		d: "m11.5 9.5 2-2",
		key: "fmmyf7"
	}],
	["path", {
		d: "m8.5 6.5 2-2",
		key: "vc6u1g"
	}],
	["path", {
		d: "m17.5 15.5 2-2",
		key: "wo5hmg"
	}]
]), SC = m("russian-ruble", [["path", {
	d: "M6 11h8a4 4 0 0 0 0-8H9v18",
	key: "18ai8t"
}], ["path", {
	d: "M6 15h8",
	key: "1y8f6l"
}]]), CC = m("sailboat", [
	["path", {
		d: "M10 2v15",
		key: "1qf71f"
	}],
	["path", {
		d: "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z",
		key: "1pxcvx"
	}],
	["path", {
		d: "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z",
		key: "5oog16"
	}]
]), wC = m("sandwich", [
	["path", {
		d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",
		key: "f1wd0e"
	}],
	["path", {
		d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",
		key: "1pfu07"
	}],
	["path", {
		d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",
		key: "1oq9qw"
	}],
	["path", {
		d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",
		key: "1fnwu5"
	}],
	["rect", {
		width: "20",
		height: "4",
		x: "2",
		y: "11",
		rx: "1",
		key: "itshg"
	}]
]), TC = m("salad", [
	["path", {
		d: "M7 21h10",
		key: "1b0cd5"
	}],
	["path", {
		d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",
		key: "4rw317"
	}],
	["path", {
		d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
		key: "10xrj0"
	}],
	["path", {
		d: "m13 12 4-4",
		key: "1hckqy"
	}],
	["path", {
		d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",
		key: "1p4srx"
	}]
]), EC = m("satellite-dish", [
	["path", {
		d: "M4 10a7.31 7.31 0 0 0 10 10Z",
		key: "1fzpp3"
	}],
	["path", {
		d: "m9 15 3-3",
		key: "88sc13"
	}],
	["path", {
		d: "M17 13a6 6 0 0 0-6-6",
		key: "15cc6u"
	}],
	["path", {
		d: "M21 13A10 10 0 0 0 11 3",
		key: "11nf8s"
	}]
]), DC = m("satellite", [
	["path", {
		d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",
		key: "dzhfyz"
	}],
	["path", {
		d: "M16.5 7.5 19 5",
		key: "1ltcjm"
	}],
	["path", {
		d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",
		key: "nfoymv"
	}],
	["path", {
		d: "M9 21a6 6 0 0 0-6-6",
		key: "1iajcf"
	}],
	["path", {
		d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",
		key: "nv9zqy"
	}]
]), OC = m("saudi-riyal", [
	["path", {
		d: "m20 19.5-5.5 1.2",
		key: "1aenhr"
	}],
	["path", {
		d: "M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2",
		key: "2rtezt"
	}],
	["path", {
		d: "m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2",
		key: "1kbm92"
	}],
	["path", {
		d: "M20 10 4 13.5",
		key: "8nums9"
	}]
]), kC = m("save-all", [
	["path", {
		d: "M10 2v3a1 1 0 0 0 1 1h5",
		key: "1xspal"
	}],
	["path", {
		d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",
		key: "1ra60u"
	}],
	["path", {
		d: "M18 22H4a2 2 0 0 1-2-2V6",
		key: "pblm9e"
	}],
	["path", {
		d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",
		key: "1yve0x"
	}]
]), AC = m("save-check", [
	["path", {
		d: "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35",
		key: "6jbevg"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}],
	["path", {
		d: "M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1bzeol"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]), jC = m("save-off", [
	["path", {
		d: "M13 13H8a1 1 0 0 0-1 1v7",
		key: "h8g396"
	}],
	["path", {
		d: "M14 8h1",
		key: "1lfen6"
	}],
	["path", {
		d: "M17 21v-4",
		key: "1yknxs"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",
		key: "1t4vdl"
	}],
	["path", {
		d: "M29.5 11.5s5 5 4 5",
		key: "zzn4i6"
	}],
	["path", {
		d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",
		key: "24cby9"
	}]
]), MC = m("save-pen", [
	["path", {
		d: "M13.33 13H8a1 1 0 00-1 1v7",
		key: "60fs50"
	}],
	["path", {
		d: "M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z",
		key: "dpj1he"
	}],
	["path", {
		d: "M7 3v4a1 1 0 001 1h7",
		key: "vkun1b"
	}],
	["path", {
		d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3",
		key: "1oj3yb"
	}]
]), NC = m("save-plus", [
	["path", {
		d: "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12",
		key: "bhibzn"
	}],
	["path", {
		d: "M16 13H8a1 1 0 0 0-1 1v7",
		key: "164ge7"
	}],
	["path", {
		d: "M19 22v-6",
		key: "qhmiwi"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]), PC = m("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]), FC = m("scale-3d", [
	["path", {
		d: "M5 7v11a1 1 0 0 0 1 1h11",
		key: "13dt1j"
	}],
	["path", {
		d: "M5.293 18.707 11 13",
		key: "ezgbsx"
	}],
	["circle", {
		cx: "19",
		cy: "19",
		r: "2",
		key: "17f5cg"
	}],
	["circle", {
		cx: "5",
		cy: "5",
		r: "2",
		key: "1gwv83"
	}]
]), IC = m("scale", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["path", {
		d: "m19 8 3 8a5 5 0 0 1-6 0zV7",
		key: "zcdpyk"
	}],
	["path", {
		d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",
		key: "1yorad"
	}],
	["path", {
		d: "m5 8 3 8a5 5 0 0 1-6 0zV7",
		key: "eua70x"
	}],
	["path", {
		d: "M7 21h10",
		key: "1b0cd5"
	}]
]), LC = m("scaling", [
	["path", {
		d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
		key: "1m0v6g"
	}],
	["path", {
		d: "M14 15H9v-5",
		key: "pi4jk9"
	}],
	["path", {
		d: "M16 3h5v5",
		key: "1806ms"
	}],
	["path", {
		d: "M21 3 9 15",
		key: "15kdhq"
	}]
]), RC = m("scan-barcode", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["path", {
		d: "M8 7v10",
		key: "23sfjj"
	}],
	["path", {
		d: "M12 7v10",
		key: "jspqdw"
	}],
	["path", {
		d: "M17 7v10",
		key: "578dap"
	}]
]), zC = m("scan-box", [
	["path", {
		d: "M12 12v5.5",
		key: "1fezw7"
	}],
	["path", {
		d: "M17 3h2a2 2 0 012 2v2",
		key: "sxhzt8"
	}],
	["path", {
		d: "M21 17v2a2 2 0 01-2 2h-2",
		key: "b4b27w"
	}],
	["path", {
		d: "M3 7V5a2 2 0 012-2h2",
		key: "5quapj"
	}],
	["path", {
		d: "M7 21H5a2 2 0 01-2-2v-2",
		key: "rx7q13"
	}],
	["path", {
		d: "M7.264 9.252 12 12l4.737-2.748",
		key: "176tmc"
	}],
	["path", {
		d: "M7.995 8.514A2 2 0 007 10.244v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0017 13.76v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z",
		key: "7zy66p"
	}]
]), BC = m("scan-eye", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["path", {
		d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
		key: "11ak4c"
	}]
]), VC = m("scan-face", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["path", {
		d: "M8 14s1.5 2 4 2 4-2 4-2",
		key: "1y1vjs"
	}],
	["path", {
		d: "M9 9h.01",
		key: "1q5me6"
	}],
	["path", {
		d: "M15 9h.01",
		key: "x1ddxp"
	}]
]), HC = m("scan-heart", [
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["path", {
		d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z",
		key: "1ak1ef"
	}]
]), UC = m("scan-line", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["path", {
		d: "M7 12h10",
		key: "b7w52i"
	}]
]), WC = m("scan-qr-code", [
	["path", {
		d: "M17 12v4a1 1 0 0 1-1 1h-4",
		key: "uk4fdo"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M17 8V7",
		key: "q2g9wo"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M7 17h.01",
		key: "19xn7k"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["rect", {
		x: "7",
		y: "7",
		width: "5",
		height: "5",
		rx: "1",
		key: "m9kyts"
	}]
]), GC = m("scan-square", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["rect", {
		width: "8",
		height: "8",
		x: "8",
		y: "8",
		rx: "1",
		key: "69yp3k"
	}]
]), KC = m("scan-search", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["path", {
		d: "m16 16-1.9-1.9",
		key: "1dq9hf"
	}]
]), qC = m("scan-text", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["path", {
		d: "M7 8h8",
		key: "1jbsf9"
	}],
	["path", {
		d: "M7 12h10",
		key: "b7w52i"
	}],
	["path", {
		d: "M7 16h6",
		key: "1vyc9m"
	}]
]), JC = m("scan", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}]
]), YC = m("scissors-line-dashed", [
	["path", {
		d: "M5.42 9.42 8 12",
		key: "12pkuq"
	}],
	["circle", {
		cx: "4",
		cy: "8",
		r: "2",
		key: "107mxr"
	}],
	["path", {
		d: "m14 6-8.58 8.58",
		key: "gvzu5l"
	}],
	["circle", {
		cx: "4",
		cy: "16",
		r: "2",
		key: "1ehqvc"
	}],
	["path", {
		d: "M10.8 14.8 14 18",
		key: "ax7m9r"
	}],
	["path", {
		d: "M16 12h-2",
		key: "10asgb"
	}],
	["path", {
		d: "M22 12h-2",
		key: "14jgyd"
	}]
]), XC = m("school", [
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M18 4.933V21",
		key: "tjwmp4"
	}],
	["path", {
		d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",
		key: "zywc2d"
	}],
	["path", {
		d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",
		key: "1d4ql0"
	}],
	["path", {
		d: "M6 4.933V21",
		key: "1ufz1j"
	}],
	["circle", {
		cx: "12",
		cy: "9",
		r: "2",
		key: "1092wv"
	}]
]), ZC = m("scissors", [
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M8.12 8.12 12 12",
		key: "1alkpv"
	}],
	["path", {
		d: "M20 4 8.12 15.88",
		key: "xgtan2"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}],
	["path", {
		d: "M14.8 14.8 20 20",
		key: "ptml3r"
	}]
]), QC = m("screen-share-off", [
	["path", {
		d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
		key: "i8wdob"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "m22 3-5 5",
		key: "12jva0"
	}],
	["path", {
		d: "m17 3 5 5",
		key: "k36vhe"
	}]
]), $C = m("screen-share", [
	["path", {
		d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
		key: "i8wdob"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "m17 8 5-5",
		key: "fqif7o"
	}],
	["path", {
		d: "M17 3h5v5",
		key: "1o3tu8"
	}]
]), ew = m("scooter", [
	["path", {
		d: "M21 4h-3.5l2 11.05",
		key: "1gktiw"
	}],
	["path", {
		d: "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009",
		key: "1bq3u3"
	}],
	["circle", {
		cx: "19.5",
		cy: "17.5",
		r: "2.5",
		key: "e4zhv9"
	}],
	["circle", {
		cx: "4.5",
		cy: "17.5",
		r: "2.5",
		key: "50vk4p"
	}]
]), tw = m("scroll-text", [
	["path", {
		d: "M15 12h-5",
		key: "r7krc0"
	}],
	["path", {
		d: "M15 8h-5",
		key: "1khuty"
	}],
	["path", {
		d: "M19 17V5a2 2 0 0 0-2-2H4",
		key: "zz82l3"
	}],
	["path", {
		d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
		key: "1ph1d7"
	}]
]), nw = m("scroll", [["path", {
	d: "M19 17V5a2 2 0 0 0-2-2H4",
	key: "zz82l3"
}], ["path", {
	d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
	key: "1ph1d7"
}]]), rw = m("search-alert", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}],
	["path", {
		d: "M11 7v4",
		key: "m2edmq"
	}],
	["path", {
		d: "M11 15h.01",
		key: "k85uqc"
	}]
]), iw = m("search-check", [
	["path", {
		d: "m8 11 2 2 4-4",
		key: "1sed1v"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}]
]), aw = m("search-code", [
	["path", {
		d: "m13 13.5 2-2.5-2-2.5",
		key: "1rvxrh"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}],
	["path", {
		d: "M9 8.5 7 11l2 2.5",
		key: "6ffwbx"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}]
]), ow = m("search-slash", [
	["path", {
		d: "m13.5 8.5-5 5",
		key: "1cs55j"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}]
]), sw = m("search-x", [
	["path", {
		d: "m13.5 8.5-5 5",
		key: "1cs55j"
	}],
	["path", {
		d: "m8.5 8.5 5 5",
		key: "a8mexj"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}]
]), cw = m("section", [["path", {
	d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",
	key: "vqan6v"
}], ["path", {
	d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",
	key: "wdjd8o"
}]]), lw = m("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), uw = m("send-horizontal", [["path", {
	d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
	key: "117uat"
}], ["path", {
	d: "M6 12h16",
	key: "s4cdu5"
}]]), dw = m("send-to-back", [
	["rect", {
		x: "14",
		y: "14",
		width: "8",
		height: "8",
		rx: "2",
		key: "1b0bso"
	}],
	["rect", {
		x: "2",
		y: "2",
		width: "8",
		height: "8",
		rx: "2",
		key: "1x09vl"
	}],
	["path", {
		d: "M7 14v1a2 2 0 0 0 2 2h1",
		key: "pao6x6"
	}],
	["path", {
		d: "M14 7h1a2 2 0 0 1 2 2v1",
		key: "19tdru"
	}]
]), fw = m("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]), pw = m("separator-horizontal", [
	["path", {
		d: "m16 16-4 4-4-4",
		key: "3dv8je"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["path", {
		d: "m8 8 4-4 4 4",
		key: "2bscm2"
	}]
]), mw = m("separator-vertical", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["path", {
		d: "m16 16 4-4-4-4",
		key: "1js579"
	}],
	["path", {
		d: "m8 8-4 4 4 4",
		key: "1whems"
	}]
]), hw = m("server-cog", [
	["path", {
		d: "m10.852 14.772-.383.923",
		key: "11vil6"
	}],
	["path", {
		d: "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923",
		key: "1v3clb"
	}],
	["path", {
		d: "m13.148 9.228.383-.923",
		key: "t2zzyc"
	}],
	["path", {
		d: "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544",
		key: "1bxfiv"
	}],
	["path", {
		d: "m14.772 10.852.923-.383",
		key: "k9m8cz"
	}],
	["path", {
		d: "m14.772 13.148.923.383",
		key: "1xvhww"
	}],
	["path", {
		d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
		key: "tn8das"
	}],
	["path", {
		d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
		key: "1g2pve"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "M6 6h.01",
		key: "1utrut"
	}],
	["path", {
		d: "m9.228 10.852-.923-.383",
		key: "1wtb30"
	}],
	["path", {
		d: "m9.228 13.148-.923.383",
		key: "1a830x"
	}]
]), gw = m("server-crash", [
	["path", {
		d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
		key: "4b9dqc"
	}],
	["path", {
		d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
		key: "22nnkd"
	}],
	["path", {
		d: "M6 6h.01",
		key: "1utrut"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "m13 6-4 6h6l-4 6",
		key: "14hqih"
	}]
]), _w = m("server-off", [
	["path", {
		d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",
		key: "bt2siv"
	}],
	["path", {
		d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",
		key: "1hjrv1"
	}],
	["path", {
		d: "M22 17v-1a2 2 0 0 0-2-2h-1",
		key: "1iynyr"
	}],
	["path", {
		d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",
		key: "161ggg"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), vw = m("server-plus", [
	["path", {
		d: "M12.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",
		key: "s66i12"
	}],
	["path", {
		d: "M16 12h6",
		key: "15xry1"
	}],
	["path", {
		d: "M19 9v6",
		key: "1kf5t6"
	}],
	["path", {
		d: "M22 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8.5",
		key: "lo70fm"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "M6 6h.01",
		key: "1utrut"
	}]
]), yw = m("server", [
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "2",
		rx: "2",
		ry: "2",
		key: "ngkwjq"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		ry: "2",
		key: "iecqi9"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "6",
		y2: "6",
		key: "16zg32"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "18",
		y2: "18",
		key: "nzw8ys"
	}]
]), bw = m("settings-2", [
	["path", {
		d: "M14 17H5",
		key: "gfn3mx"
	}],
	["path", {
		d: "M19 7h-9",
		key: "6i9tg"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "3",
		key: "18b49y"
	}],
	["circle", {
		cx: "7",
		cy: "7",
		r: "3",
		key: "dfmy0x"
	}]
]), xw = m("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Sw = m("shapes", [
	["path", {
		d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
		key: "1bo67w"
	}],
	["rect", {
		x: "3",
		y: "14",
		width: "7",
		height: "7",
		rx: "1",
		key: "1bkyp8"
	}],
	["circle", {
		cx: "17.5",
		cy: "17.5",
		r: "3.5",
		key: "w3z12y"
	}]
]), Cw = m("share-2", [
	["circle", {
		cx: "18",
		cy: "5",
		r: "3",
		key: "gq8acd"
	}],
	["circle", {
		cx: "6",
		cy: "12",
		r: "3",
		key: "w7nqdw"
	}],
	["circle", {
		cx: "18",
		cy: "19",
		r: "3",
		key: "1xt0gg"
	}],
	["line", {
		x1: "8.59",
		x2: "15.42",
		y1: "13.51",
		y2: "17.49",
		key: "47mynk"
	}],
	["line", {
		x1: "15.41",
		x2: "8.59",
		y1: "6.51",
		y2: "10.49",
		key: "1n3mei"
	}]
]), ww = m("share", [
	["path", {
		d: "M12 2v13",
		key: "1km8f5"
	}],
	["path", {
		d: "m16 6-4-4-4 4",
		key: "13yo43"
	}],
	["path", {
		d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
		key: "1b2hhj"
	}]
]), Tw = m("sheet", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["line", {
		x1: "3",
		x2: "21",
		y1: "9",
		y2: "9",
		key: "1vqk6q"
	}],
	["line", {
		x1: "3",
		x2: "21",
		y1: "15",
		y2: "15",
		key: "o2sbyz"
	}],
	["line", {
		x1: "9",
		x2: "9",
		y1: "9",
		y2: "21",
		key: "1ib60c"
	}],
	["line", {
		x1: "15",
		x2: "15",
		y1: "9",
		y2: "21",
		key: "1n26ft"
	}]
]), Ew = m("shell", [["path", {
	d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
	key: "1cn552"
}]]), Dw = m("shelving-unit", [
	["path", {
		d: "M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
		key: "wiz68x"
	}],
	["path", {
		d: "M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",
		key: "1b59c4"
	}],
	["path", {
		d: "M20 22V2",
		key: "1bnhr8"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 20h16",
		key: "14thso"
	}],
	["path", {
		d: "M4 2v20",
		key: "gtpd5x"
	}],
	["path", {
		d: "M4 4h16",
		key: "1bkgr1"
	}]
]), Ow = m("shield-alert", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M12 8v4",
		key: "1got3b"
	}],
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}]
]), kw = m("shield-ban", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m4.243 5.21 14.39 12.472",
	key: "1c9a7c"
}]]), Aw = m("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), jw = m("shield-cog-corner", [
	["path", {
		d: "M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4",
		key: "hf1sz5"
	}],
	["path", {
		d: "M14.923 16.547 14 16.164",
		key: "41f878"
	}],
	["path", {
		d: "m14.923 18.843-.923.383",
		key: "82rvv5"
	}],
	["path", {
		d: "M16.547 14.923 16.164 14",
		key: "1r7ypn"
	}],
	["path", {
		d: "m16.547 20.467-.383.924",
		key: "au4kyj"
	}],
	["path", {
		d: "m18.843 14.923.383-.923",
		key: "1cbrwq"
	}],
	["path", {
		d: "m19.225 21.391-.382-.924",
		key: "1u2bh9"
	}],
	["path", {
		d: "m20.467 16.547.923-.383",
		key: "cprboc"
	}],
	["path", {
		d: "m20.467 18.843.923.383",
		key: "inm8l2"
	}],
	["circle", {
		cx: "17.695",
		cy: "17.695",
		r: "3",
		key: "1i1rmh"
	}]
]), Mw = m("shield-cog", [
	["path", {
		d: "m10.929 14.467-.383.924",
		key: "hdyevy"
	}],
	["path", {
		d: "M10.929 8.923 10.546 8",
		key: "1nr44d"
	}],
	["path", {
		d: "M13.225 8.923 13.608 8",
		key: "aewley"
	}],
	["path", {
		d: "m13.607 15.391-.382-.924",
		key: "m37gf1"
	}],
	["path", {
		d: "m14.849 10.547.923-.383",
		key: "1d3c4q"
	}],
	["path", {
		d: "m14.849 12.843.923.383",
		key: "lmvhy3"
	}],
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "m9.305 10.547-.923-.383",
		key: "1d13ox"
	}],
	["path", {
		d: "m9.305 12.843-.923.383",
		key: "7wxwh5"
	}],
	["circle", {
		cx: "12.077",
		cy: "11.695",
		r: "3",
		key: "fse9k8"
	}]
]), Nw = m("shield-ellipsis", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M8 12h.01",
		key: "czm47f"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M16 12h.01",
		key: "1l6xoz"
	}]
]), Pw = m("shield-half", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "M12 22V2",
	key: "zs6s6o"
}]]), Fw = m("shield-keyhole", [
	["path", {
		d: "M12 13v3",
		key: "gkc6qb"
	}],
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z",
		key: "1buusj"
	}],
	["circle", {
		cx: "12",
		cy: "11",
		r: "2",
		key: "1yggc4"
	}]
]), Iw = m("shield-lock", [
	["path", {
		d: "M20 9.807V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 3.88 2.107 6.254 5 7.796",
		key: "1gl1o4"
	}],
	["path", {
		d: "M19 17v-2a2 2 0 00-4 0v2",
		key: "uefur0"
	}],
	["rect", {
		x: "13",
		y: "17",
		width: "8",
		height: "5",
		rx: "1",
		key: "2y8vuh"
	}]
]), Lw = m("shield-minus", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "M9 12h6",
	key: "1c52cq"
}]]), Rw = m("shield-plus", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M9 12h6",
		key: "1c52cq"
	}],
	["path", {
		d: "M12 9v6",
		key: "199k2o"
	}]
]), zw = m("shield-off", [
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
		key: "1jlk70"
	}],
	["path", {
		d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
		key: "18rp1v"
	}]
]), Bw = m("shield-question-mark", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",
		key: "mhlwft"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), Vw = m("shield-user", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M6.376 18.91a6 6 0 0 1 11.249.003",
		key: "hnjrf2"
	}],
	["circle", {
		cx: "12",
		cy: "11",
		r: "4",
		key: "1gt34v"
	}]
]), Hw = m("shield-x", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "m14.5 9.5-5 5",
		key: "17q4r4"
	}],
	["path", {
		d: "m9.5 9.5 5 5",
		key: "18nt4w"
	}]
]), Uw = m("shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]), Ww = m("ship-wheel", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "8",
		key: "46899m"
	}],
	["path", {
		d: "M12 2v7.5",
		key: "1e5rl5"
	}],
	["path", {
		d: "m19 5-5.23 5.23",
		key: "1ezxxf"
	}],
	["path", {
		d: "M22 12h-7.5",
		key: "le1719"
	}],
	["path", {
		d: "m19 19-5.23-5.23",
		key: "p3fmgn"
	}],
	["path", {
		d: "M12 14.5V22",
		key: "dgcmos"
	}],
	["path", {
		d: "M10.23 13.77 5 19",
		key: "qwopd4"
	}],
	["path", {
		d: "M9.5 12H2",
		key: "r7bup8"
	}],
	["path", {
		d: "M10.23 10.23 5 5",
		key: "k2y7lj"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2.5",
		key: "ix0uyj"
	}]
]), Gw = m("ship", [
	["path", {
		d: "M12 10.189V14",
		key: "1p8cqu"
	}],
	["path", {
		d: "M12 2v3",
		key: "qbqxhf"
	}],
	["path", {
		d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",
		key: "qpkstq"
	}],
	["path", {
		d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",
		key: "7tigtc"
	}],
	["path", {
		d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
		key: "1924j5"
	}]
]), Kw = m("shirt", [["path", {
	d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
	key: "1wgbhj"
}]]), qw = m("shopping-bag", [
	["path", {
		d: "M16 10a4 4 0 0 1-8 0",
		key: "1ltviw"
	}],
	["path", {
		d: "M3.103 6.034h17.794",
		key: "awc11p"
	}],
	["path", {
		d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
		key: "o988cm"
	}]
]), Jw = m("shopping-basket", [
	["path", {
		d: "m15 11-1 9",
		key: "5wnq3a"
	}],
	["path", {
		d: "m19 11-4-7",
		key: "cnml18"
	}],
	["path", {
		d: "M2 11h20",
		key: "3eubbj"
	}],
	["path", {
		d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
		key: "yiazzp"
	}],
	["path", {
		d: "M4.5 15.5h15",
		key: "13mye1"
	}],
	["path", {
		d: "m5 11 4-7",
		key: "116ra9"
	}],
	["path", {
		d: "m9 11 1 9",
		key: "1ojof7"
	}]
]), Yw = m("shopping-cart", [
	["circle", {
		cx: "8",
		cy: "21",
		r: "1",
		key: "jimo8o"
	}],
	["circle", {
		cx: "19",
		cy: "21",
		r: "1",
		key: "13723u"
	}],
	["path", {
		d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
		key: "9zh506"
	}]
]), Xw = m("shovel", [
	["path", {
		d: "M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z",
		key: "1gcedi"
	}],
	["path", {
		d: "M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z",
		key: "pg9kv3"
	}],
	["path", {
		d: "m9 15 7.879-7.878",
		key: "1o1zgh"
	}]
]), Zw = m("shower-head", [
	["path", {
		d: "m4 4 2.5 2.5",
		key: "uv2vmf"
	}],
	["path", {
		d: "M13.5 6.5a4.95 4.95 0 0 0-7 7",
		key: "frdkwv"
	}],
	["path", {
		d: "M15 5 5 15",
		key: "1ag8rq"
	}],
	["path", {
		d: "M14 17v.01",
		key: "eokfpp"
	}],
	["path", {
		d: "M10 16v.01",
		key: "14uyyl"
	}],
	["path", {
		d: "M13 13v.01",
		key: "1v1k97"
	}],
	["path", {
		d: "M16 10v.01",
		key: "5169yg"
	}],
	["path", {
		d: "M11 20v.01",
		key: "cj92p8"
	}],
	["path", {
		d: "M17 14v.01",
		key: "11cswd"
	}],
	["path", {
		d: "M20 11v.01",
		key: "19e0od"
	}]
]), Qw = m("shrimp", [
	["path", {
		d: "M11 12h.01",
		key: "1lr4k6"
	}],
	["path", {
		d: "M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1",
		key: "fatpdi"
	}],
	["path", {
		d: "M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8",
		key: "kehrqe"
	}],
	["path", {
		d: "M14 8a8.5 8.5 0 0 1 0 8",
		key: "1imjx2"
	}],
	["path", {
		d: "M16 16c2 0 4.5-4 4-6",
		key: "z0nejz"
	}]
]), $w = m("shredder", [
	["path", {
		d: "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5",
		key: "1eob4r"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 22v-5",
		key: "sfixh4"
	}],
	["path", {
		d: "M14 19v-2",
		key: "pdve8j"
	}],
	["path", {
		d: "M18 20v-3",
		key: "uox2gk"
	}],
	["path", {
		d: "M2 13h20",
		key: "5evz65"
	}],
	["path", {
		d: "M6 20v-3",
		key: "c6pdcb"
	}]
]), eT = m("shrink", [
	["path", {
		d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8",
		key: "17vawe"
	}],
	["path", {
		d: "M9 19.8V15m0 0H4.2M9 15l-6 6",
		key: "chjx8e"
	}],
	["path", {
		d: "M15 4.2V9m0 0h4.8M15 9l6-6",
		key: "lav6yq"
	}],
	["path", {
		d: "M9 4.2V9m0 0H4.2M9 9 3 3",
		key: "1pxi2q"
	}]
]), tT = m("shrub", [
	["path", {
		d: "M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5",
		key: "1p17fm"
	}],
	["path", {
		d: "M14.5 14.5 12 17",
		key: "dy5w4y"
	}],
	["path", {
		d: "M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z",
		key: "6z7b3o"
	}]
]), nT = m("shuffle", [
	["path", {
		d: "m18 14 4 4-4 4",
		key: "10pe0f"
	}],
	["path", {
		d: "m18 2 4 4-4 4",
		key: "pucp1d"
	}],
	["path", {
		d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
		key: "1ailkh"
	}],
	["path", {
		d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
		key: "km57vx"
	}],
	["path", {
		d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
		key: "os18l9"
	}]
]), rT = m("sigma", [["path", {
	d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
	key: "wuwx1p"
}]]), iT = m("signal-high", [
	["path", {
		d: "M2 20h.01",
		key: "4haj6o"
	}],
	["path", {
		d: "M7 20v-4",
		key: "j294jx"
	}],
	["path", {
		d: "M12 20v-8",
		key: "i3yub9"
	}],
	["path", {
		d: "M17 20V8",
		key: "1tkaf5"
	}]
]), aT = m("signal-low", [["path", {
	d: "M2 20h.01",
	key: "4haj6o"
}], ["path", {
	d: "M7 20v-4",
	key: "j294jx"
}]]), oT = m("signal-medium", [
	["path", {
		d: "M2 20h.01",
		key: "4haj6o"
	}],
	["path", {
		d: "M7 20v-4",
		key: "j294jx"
	}],
	["path", {
		d: "M12 20v-8",
		key: "i3yub9"
	}]
]), sT = m("signal-zero", [["path", {
	d: "M2 20h.01",
	key: "4haj6o"
}]]), cT = m("signal", [
	["path", {
		d: "M2 20h.01",
		key: "4haj6o"
	}],
	["path", {
		d: "M7 20v-4",
		key: "j294jx"
	}],
	["path", {
		d: "M12 20v-8",
		key: "i3yub9"
	}],
	["path", {
		d: "M17 20V8",
		key: "1tkaf5"
	}],
	["path", {
		d: "M22 4v16",
		key: "sih9yq"
	}]
]), lT = m("signature", [["path", {
	d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",
	key: "y32ogt"
}], ["path", {
	d: "M3 21h18",
	key: "itz85i"
}]]), uT = m("signpost-big", [
	["path", {
		d: "M10 9H4L2 7l2-2h6",
		key: "1hq7x2"
	}],
	["path", {
		d: "M14 5h6l2 2-2 2h-6",
		key: "bv62ej"
	}],
	["path", {
		d: "M10 22V4a2 2 0 1 1 4 0v18",
		key: "eqpcf2"
	}],
	["path", {
		d: "M8 22h8",
		key: "rmew8v"
	}]
]), dT = m("signpost", [
	["path", {
		d: "M12 13v8",
		key: "1l5pq0"
	}],
	["path", {
		d: "M12 3v3",
		key: "1n5kay"
	}],
	["path", {
		d: "M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z",
		key: "1tm261"
	}]
]), fT = m("siren", [
	["path", {
		d: "M7 18v-6a5 5 0 1 1 10 0v6",
		key: "pcx96s"
	}],
	["path", {
		d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
		key: "1b4s83"
	}],
	["path", {
		d: "M21 12h1",
		key: "jtio3y"
	}],
	["path", {
		d: "M18.5 4.5 18 5",
		key: "g5sp9y"
	}],
	["path", {
		d: "M2 12h1",
		key: "1uaihz"
	}],
	["path", {
		d: "M12 2v1",
		key: "11qlp1"
	}],
	["path", {
		d: "m4.929 4.929.707.707",
		key: "1i51kw"
	}],
	["path", {
		d: "M12 12v6",
		key: "3ahymv"
	}]
]), pT = m("skip-back", [["path", {
	d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
	key: "15892j"
}], ["path", {
	d: "M3 20V4",
	key: "1ptbpl"
}]]), mT = m("skip-forward", [["path", {
	d: "M21 4v16",
	key: "7j8fe9"
}], ["path", {
	d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
	key: "zs4d6"
}]]), hT = m("skull", [
	["path", {
		d: "m12.5 17-.5-1-.5 1h1z",
		key: "3me087"
	}],
	["path", {
		d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
		key: "1o5pge"
	}],
	["circle", {
		cx: "15",
		cy: "12",
		r: "1",
		key: "1tmaij"
	}],
	["circle", {
		cx: "9",
		cy: "12",
		r: "1",
		key: "1vctgf"
	}]
]), gT = m("slash", [["path", {
	d: "M22 2 2 22",
	key: "y4kqgn"
}]]), _T = m("slice", [["path", {
	d: "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",
	key: "1sllp5"
}]]), vT = m("sliders-horizontal", [
	["path", {
		d: "M10 5H3",
		key: "1qgfaw"
	}],
	["path", {
		d: "M12 19H3",
		key: "yhmn1j"
	}],
	["path", {
		d: "M14 3v4",
		key: "1sua03"
	}],
	["path", {
		d: "M16 17v4",
		key: "1q0r14"
	}],
	["path", {
		d: "M21 12h-9",
		key: "1o4lsq"
	}],
	["path", {
		d: "M21 19h-5",
		key: "1rlt1p"
	}],
	["path", {
		d: "M21 5h-7",
		key: "1oszz2"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M8 12H3",
		key: "a7s4jb"
	}]
]), yT = m("sliders-vertical", [
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M12 21v-9",
		key: "17s77i"
	}],
	["path", {
		d: "M12 8V3",
		key: "13r4qs"
	}],
	["path", {
		d: "M17 16h4",
		key: "h1uq16"
	}],
	["path", {
		d: "M19 12V3",
		key: "o1uvq1"
	}],
	["path", {
		d: "M19 21v-5",
		key: "qua636"
	}],
	["path", {
		d: "M3 14h4",
		key: "bcjad9"
	}],
	["path", {
		d: "M5 10V3",
		key: "cb8scm"
	}],
	["path", {
		d: "M5 21v-7",
		key: "1w1uti"
	}]
]), bT = m("smartphone-charging", [["rect", {
	width: "14",
	height: "20",
	x: "5",
	y: "2",
	rx: "2",
	ry: "2",
	key: "1yt0o3"
}], ["path", {
	d: "M12.667 8 10 12h4l-2.667 4",
	key: "h9lk2d"
}]]), xT = m("smartphone-nfc", [
	["rect", {
		width: "7",
		height: "12",
		x: "2",
		y: "6",
		rx: "1",
		key: "5nje8w"
	}],
	["path", {
		d: "M13 8.32a7.43 7.43 0 0 1 0 7.36",
		key: "1g306n"
	}],
	["path", {
		d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58",
		key: "uqvjvo"
	}],
	["path", {
		d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",
		key: "ujntz3"
	}]
]), ST = m("smartphone", [["rect", {
	width: "14",
	height: "20",
	x: "5",
	y: "2",
	rx: "2",
	ry: "2",
	key: "1yt0o3"
}], ["path", {
	d: "M12 18h.01",
	key: "mhygvu"
}]]), CT = m("snail", [
	["path", {
		d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",
		key: "hneq2s"
	}],
	["circle", {
		cx: "10",
		cy: "13",
		r: "8",
		key: "194lz3"
	}],
	["path", {
		d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",
		key: "ixqyt7"
	}],
	["path", {
		d: "M18 3 19.1 5.2",
		key: "9tjm43"
	}],
	["path", {
		d: "M22 3 20.9 5.2",
		key: "j3odrs"
	}]
]), wT = m("snowflake", [
	["path", {
		d: "m10 20-1.25-2.5L6 18",
		key: "18frcb"
	}],
	["path", {
		d: "M10 4 8.75 6.5 6 6",
		key: "7mghy3"
	}],
	["path", {
		d: "m14 20 1.25-2.5L18 18",
		key: "1chtki"
	}],
	["path", {
		d: "m14 4 1.25 2.5L18 6",
		key: "1b4wsy"
	}],
	["path", {
		d: "m17 21-3-6h-4",
		key: "15hhxa"
	}],
	["path", {
		d: "m17 3-3 6 1.5 3",
		key: "11697g"
	}],
	["path", {
		d: "M2 12h6.5L10 9",
		key: "kv9z4n"
	}],
	["path", {
		d: "m20 10-1.5 2 1.5 2",
		key: "1swlpi"
	}],
	["path", {
		d: "M22 12h-6.5L14 15",
		key: "1mxi28"
	}],
	["path", {
		d: "m4 10 1.5 2L4 14",
		key: "k9enpj"
	}],
	["path", {
		d: "m7 21 3-6-1.5-3",
		key: "j8hb9u"
	}],
	["path", {
		d: "m7 3 3 6h4",
		key: "1otusx"
	}]
]), TT = m("soap-dispenser-droplet", [
	["path", {
		d: "M10.5 2v4",
		key: "1xt6in"
	}],
	["path", {
		d: "M14 2H7a2 2 0 0 0-2 2",
		key: "e6xig3"
	}],
	["path", {
		d: "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19",
		key: "adq7uc"
	}],
	["path", {
		d: "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
		key: "t9hm96"
	}]
]), ET = m("sofa", [
	["path", {
		d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",
		key: "1dgpiv"
	}],
	["path", {
		d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
		key: "xacw8m"
	}],
	["path", {
		d: "M4 18v2",
		key: "jwo5n2"
	}],
	["path", {
		d: "M20 18v2",
		key: "1ar1qi"
	}],
	["path", {
		d: "M12 4v9",
		key: "oqhhn3"
	}]
]), DT = m("solar-panel", [
	["path", {
		d: "M11 2h2",
		key: "isr7bz"
	}],
	["path", {
		d: "m14.28 14-4.56 8",
		key: "4anwcf"
	}],
	["path", {
		d: "m21 22-1.558-4H4.558",
		key: "enk13h"
	}],
	["path", {
		d: "M3 10v2",
		key: "w8mti9"
	}],
	["path", {
		d: "M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z",
		key: "pouggg"
	}],
	["path", {
		d: "M7 2a4 4 0 0 1-4 4",
		key: "78s8of"
	}],
	["path", {
		d: "m8.66 7.66 1.41 1.41",
		key: "1vaqj8"
	}]
]), OT = m("soup", [
	["path", {
		d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",
		key: "4rw317"
	}],
	["path", {
		d: "M7 21h10",
		key: "1b0cd5"
	}],
	["path", {
		d: "M19.5 12 22 6",
		key: "shfsr5"
	}],
	["path", {
		d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
		key: "rpc6vp"
	}],
	["path", {
		d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
		key: "1lf63m"
	}],
	["path", {
		d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",
		key: "97tijn"
	}]
]), kT = m("space", [["path", {
	d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",
	key: "lt2kga"
}]]), AT = m("spade", [["path", {
	d: "M12 18v4",
	key: "jadmvz"
}], ["path", {
	d: "M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5",
	key: "1aw2pz"
}]]), jT = m("sparkle", [["path", {
	d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
	key: "1s2grr"
}]]), MT = m("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]), NT = m("speaker", [
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["path", {
		d: "M12 6h.01",
		key: "1vi96p"
	}],
	["circle", {
		cx: "12",
		cy: "14",
		r: "4",
		key: "1jruaj"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}]
]), PT = m("speech", [
	["path", {
		d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
		key: "11atix"
	}],
	["path", {
		d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",
		key: "yol142"
	}],
	["path", {
		d: "M17 15a3.5 3.5 0 0 0-.025-4.975",
		key: "ssbmkc"
	}]
]), FT = m("spell-check-2", [
	["path", {
		d: "m6 16 6-12 6 12",
		key: "1b4byz"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",
		key: "8mdmtu"
	}]
]), IT = m("spell-check", [
	["path", {
		d: "m6 16 6-12 6 12",
		key: "1b4byz"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "m16 20 2 2 4-4",
		key: "13tcca"
	}]
]), LT = m("spline-pointer", [
	["path", {
		d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
		key: "xwnzip"
	}],
	["path", {
		d: "M5 17A12 12 0 0 1 17 5",
		key: "1okkup"
	}],
	["circle", {
		cx: "19",
		cy: "5",
		r: "2",
		key: "mhkx31"
	}],
	["circle", {
		cx: "5",
		cy: "19",
		r: "2",
		key: "v8kfzx"
	}]
]), RT = m("spline", [
	["circle", {
		cx: "19",
		cy: "5",
		r: "2",
		key: "mhkx31"
	}],
	["circle", {
		cx: "5",
		cy: "19",
		r: "2",
		key: "v8kfzx"
	}],
	["path", {
		d: "M5 17A12 12 0 0 1 17 5",
		key: "1okkup"
	}]
]), zT = m("split", [
	["path", {
		d: "M16 3h5v5",
		key: "1806ms"
	}],
	["path", {
		d: "M8 3H3v5",
		key: "15dfkv"
	}],
	["path", {
		d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",
		key: "1qrqzj"
	}],
	["path", {
		d: "m15 9 6-6",
		key: "ko1vev"
	}]
]), BT = m("sport-shoe", [
	["path", {
		d: "m15 10.42 4.8-5.07",
		key: "10at9d"
	}],
	["path", {
		d: "M19 18h3",
		key: "nnkd4d"
	}],
	["path", {
		d: "M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14",
		key: "v410ed"
	}]
]), VT = m("spool", [["path", {
	d: "M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66",
	key: "13vns8"
}], ["path", {
	d: "m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178",
	key: "s8x3u0"
}]]), HT = m("spotlight", [
	["path", {
		d: "M15.295 19.562 16 22",
		key: "31jsb7"
	}],
	["path", {
		d: "m17 16 3.758 2.098",
		key: "121ar7"
	}],
	["path", {
		d: "m19 12.5 3.026-.598",
		key: "19ukd3"
	}],
	["path", {
		d: "M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z",
		key: "lwb9l9"
	}],
	["path", {
		d: "M8 9V2",
		key: "1xa0v7"
	}]
]), UT = m("spray-can", [
	["path", {
		d: "M3 3h.01",
		key: "159qn6"
	}],
	["path", {
		d: "M7 5h.01",
		key: "1hq22a"
	}],
	["path", {
		d: "M11 7h.01",
		key: "1osv80"
	}],
	["path", {
		d: "M3 7h.01",
		key: "1xzrh3"
	}],
	["path", {
		d: "M7 9h.01",
		key: "19b3jx"
	}],
	["path", {
		d: "M3 11h.01",
		key: "1eifu7"
	}],
	["rect", {
		width: "4",
		height: "4",
		x: "15",
		y: "5",
		key: "mri9e4"
	}],
	["path", {
		d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",
		key: "aib6hk"
	}],
	["path", {
		d: "m13 14 8-2",
		key: "1d7bmk"
	}],
	["path", {
		d: "m13 19 8-2",
		key: "1y2vml"
	}]
]), WT = m("sprout", [
	["path", {
		d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
		key: "139s4v"
	}],
	["path", {
		d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",
		key: "1dlkgp"
	}],
	["path", {
		d: "M5 21h14",
		key: "11awu3"
	}]
]), GT = m("square-activity", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M17 12h-2l-2 5-2-10-2 5H7",
	key: "15hlnc"
}]]), KT = m("square-arrow-down-left", [
	["path", {
		d: "M15 15H9l6-6",
		key: "1w52wt"
	}],
	["path", {
		d: "M9 15V9",
		key: "1kwqze"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), qT = m("square-arrow-down-right", [
	["path", {
		d: "M15 15 9 9",
		key: "qb9ybb"
	}],
	["path", {
		d: "M9 15h6V9",
		key: "1wezwn"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), JT = m("square-arrow-down", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}],
	["path", {
		d: "m8 12 4 4 4-4",
		key: "k98ssh"
	}]
]), YT = m("square-arrow-left", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "m12 8-4 4 4 4",
		key: "15vm53"
	}],
	["path", {
		d: "M16 12H8",
		key: "1fr5h0"
	}]
]), XT = m("square-arrow-out-down-left", [
	["path", {
		d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",
		key: "14qz4y"
	}],
	["path", {
		d: "m3 21 9-9",
		key: "1jfql5"
	}],
	["path", {
		d: "M9 21H3v-6",
		key: "wtvkvv"
	}]
]), ZT = m("square-arrow-out-down-right", [
	["path", {
		d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
		key: "14rsvq"
	}],
	["path", {
		d: "m21 21-9-9",
		key: "1et2py"
	}],
	["path", {
		d: "M21 15v6h-6",
		key: "1jko0i"
	}]
]), QT = m("square-arrow-out-up-left", [
	["path", {
		d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",
		key: "14mv1t"
	}],
	["path", {
		d: "m3 3 9 9",
		key: "rks13r"
	}],
	["path", {
		d: "M3 9V3h6",
		key: "ira0h2"
	}]
]), $T = m("square-arrow-out-up-right", [
	["path", {
		d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",
		key: "y09zxi"
	}],
	["path", {
		d: "m21 3-9 9",
		key: "mpx6sq"
	}],
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}]
]), eE = m("square-arrow-right-enter", [
	["path", {
		d: "m10 16 4-4-4-4",
		key: "w9835o"
	}],
	["path", {
		d: "M3 12h11",
		key: "pmja8f"
	}],
	["path", {
		d: "M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",
		key: "1bqs5q"
	}]
]), tE = m("square-arrow-right-exit", [
	["path", {
		d: "M10 12h11",
		key: "6m4ad9"
	}],
	["path", {
		d: "m17 16 4-4-4-4",
		key: "iin4zf"
	}],
	["path", {
		d: "M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344",
		key: "1ojbhp"
	}]
]), nE = m("square-arrow-right", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "m12 16 4-4-4-4",
		key: "1i9zcv"
	}]
]), rE = m("square-arrow-up-left", [
	["path", {
		d: "M15 15 9 9",
		key: "qb9ybb"
	}],
	["path", {
		d: "M9 15V9h6",
		key: "1pdr5l"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), iE = m("square-arrow-up-right", [
	["path", {
		d: "M15 15V9H9",
		key: "vxyd2h"
	}],
	["path", {
		d: "m9 15 6-6",
		key: "1ygkhp"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), aE = m("square-arrow-up", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "m16 12-4-4-4 4",
		key: "177agl"
	}],
	["path", {
		d: "M12 16V8",
		key: "1sbj14"
	}]
]), oE = m("square-asterisk", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}],
	["path", {
		d: "m8.5 14 7-4",
		key: "12hpby"
	}],
	["path", {
		d: "m8.5 10 7 4",
		key: "wwy2dy"
	}]
]), sE = m("square-bottom-dashed-scissors", [
	["path", {
		d: "M14 21h1",
		key: "v9vybs"
	}],
	["path", {
		d: "m17 17-2.18-2.18",
		key: "1y7dt1"
	}],
	["path", {
		d: "M5 21a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2",
		key: "2q1jq4"
	}],
	["path", {
		d: "M9 21h1",
		key: "15o7lz"
	}],
	["path", {
		d: "M9.56 14.44 17 7",
		key: "ue8l15"
	}],
	["path", {
		d: "M9.56 9.56 12 12",
		key: "rml9qv"
	}],
	["circle", {
		cx: "8.5",
		cy: "15.5",
		r: "1.5",
		key: "12hfy1"
	}],
	["circle", {
		cx: "8.5",
		cy: "8.5",
		r: "1.5",
		key: "cn5opk"
	}]
]), cE = m("square-centerline-dashed-horizontal", [
	["path", {
		d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",
		key: "1i73f7"
	}],
	["path", {
		d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",
		key: "saxlbk"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "M12 14v2",
		key: "8jcxud"
	}],
	["path", {
		d: "M12 8v2",
		key: "1woqiv"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}]
]), lE = m("square-centerline-dashed-vertical", [
	["path", {
		d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",
		key: "14bfxa"
	}],
	["path", {
		d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",
		key: "14rx03"
	}],
	["path", {
		d: "M4 12H2",
		key: "rhcxmi"
	}],
	["path", {
		d: "M10 12H8",
		key: "s88cx1"
	}],
	["path", {
		d: "M16 12h-2",
		key: "10asgb"
	}],
	["path", {
		d: "M22 12h-2",
		key: "14jgyd"
	}]
]), J = m("square-chart-gantt", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M9 8h7",
		key: "kbo1nt"
	}],
	["path", {
		d: "M8 12h6",
		key: "ikassy"
	}],
	["path", {
		d: "M11 16h5",
		key: "oq65wt"
	}]
]), uE = m("square-check-big", [["path", {
	d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
	key: "2acyp4"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]), dE = m("square-check", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), fE = m("square-chevron-down", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "m16 10-4 4-4-4",
	key: "894hmk"
}]]), pE = m("square-chevron-right", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "m10 8 4 4-4 4",
	key: "1wy4r4"
}]]), mE = m("square-chevron-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "m14 16-4-4 4-4",
	key: "ojs7w8"
}]]), hE = m("square-chevron-up", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "m8 14 4-4 4 4",
	key: "fy2ptz"
}]]), gE = m("square-code", [
	["path", {
		d: "m10 9-3 3 3 3",
		key: "1oro0q"
	}],
	["path", {
		d: "m14 15 3-3-3-3",
		key: "bz13h7"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), _E = m("square-dashed-bottom", [
	["path", {
		d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",
		key: "as5y1o"
	}],
	["path", {
		d: "M9 21h1",
		key: "15o7lz"
	}],
	["path", {
		d: "M14 21h1",
		key: "v9vybs"
	}]
]), vE = m("square-dashed-bottom-code", [
	["path", {
		d: "M10 9.5 8 12l2 2.5",
		key: "3mjy60"
	}],
	["path", {
		d: "M14 21h1",
		key: "v9vybs"
	}],
	["path", {
		d: "m14 9.5 2 2.5-2 2.5",
		key: "1bir2l"
	}],
	["path", {
		d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",
		key: "as5y1o"
	}],
	["path", {
		d: "M9 21h1",
		key: "15o7lz"
	}]
]), yE = m("square-dashed-kanban", [
	["path", {
		d: "M8 7v7",
		key: "1x2jlm"
	}],
	["path", {
		d: "M12 7v4",
		key: "xawao1"
	}],
	["path", {
		d: "M16 7v9",
		key: "1hp2iy"
	}],
	["path", {
		d: "M5 3a2 2 0 0 0-2 2",
		key: "y57alp"
	}],
	["path", {
		d: "M9 3h1",
		key: "1yesri"
	}],
	["path", {
		d: "M14 3h1",
		key: "1ec4yj"
	}],
	["path", {
		d: "M19 3a2 2 0 0 1 2 2",
		key: "18rm91"
	}],
	["path", {
		d: "M21 9v1",
		key: "mxsmne"
	}],
	["path", {
		d: "M21 14v1",
		key: "169vum"
	}],
	["path", {
		d: "M21 19a2 2 0 0 1-2 2",
		key: "1j7049"
	}],
	["path", {
		d: "M14 21h1",
		key: "v9vybs"
	}],
	["path", {
		d: "M9 21h1",
		key: "15o7lz"
	}],
	["path", {
		d: "M5 21a2 2 0 0 1-2-2",
		key: "sbafld"
	}],
	["path", {
		d: "M3 14v1",
		key: "vnatye"
	}],
	["path", {
		d: "M3 9v1",
		key: "1r0deq"
	}]
]), bE = m("square-dashed-mouse-pointer", [
	["path", {
		d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
		key: "xwnzip"
	}],
	["path", {
		d: "M5 3a2 2 0 0 0-2 2",
		key: "y57alp"
	}],
	["path", {
		d: "M19 3a2 2 0 0 1 2 2",
		key: "18rm91"
	}],
	["path", {
		d: "M5 21a2 2 0 0 1-2-2",
		key: "sbafld"
	}],
	["path", {
		d: "M9 3h1",
		key: "1yesri"
	}],
	["path", {
		d: "M9 21h2",
		key: "1qve2z"
	}],
	["path", {
		d: "M14 3h1",
		key: "1ec4yj"
	}],
	["path", {
		d: "M3 9v1",
		key: "1r0deq"
	}],
	["path", {
		d: "M21 9v2",
		key: "p14lih"
	}],
	["path", {
		d: "M3 14v1",
		key: "vnatye"
	}]
]), Y = m("square-dashed-text", [
	["path", {
		d: "M14 21h1",
		key: "v9vybs"
	}],
	["path", {
		d: "M14 3h1",
		key: "1ec4yj"
	}],
	["path", {
		d: "M19 3a2 2 0 0 1 2 2",
		key: "18rm91"
	}],
	["path", {
		d: "M21 14v1",
		key: "169vum"
	}],
	["path", {
		d: "M21 19a2 2 0 0 1-2 2",
		key: "1j7049"
	}],
	["path", {
		d: "M21 9v1",
		key: "mxsmne"
	}],
	["path", {
		d: "M3 14v1",
		key: "vnatye"
	}],
	["path", {
		d: "M3 9v1",
		key: "1r0deq"
	}],
	["path", {
		d: "M5 21a2 2 0 0 1-2-2",
		key: "sbafld"
	}],
	["path", {
		d: "M5 3a2 2 0 0 0-2 2",
		key: "y57alp"
	}],
	["path", {
		d: "M7 12h10",
		key: "b7w52i"
	}],
	["path", {
		d: "M7 16h6",
		key: "1vyc9m"
	}],
	["path", {
		d: "M7 8h8",
		key: "1jbsf9"
	}],
	["path", {
		d: "M9 21h1",
		key: "15o7lz"
	}],
	["path", {
		d: "M9 3h1",
		key: "1yesri"
	}]
]), xE = m("square-dashed-top-solid", [
	["path", {
		d: "M14 21h1",
		key: "v9vybs"
	}],
	["path", {
		d: "M21 14v1",
		key: "169vum"
	}],
	["path", {
		d: "M21 19a2 2 0 0 1-2 2",
		key: "1j7049"
	}],
	["path", {
		d: "M21 9v1",
		key: "mxsmne"
	}],
	["path", {
		d: "M3 14v1",
		key: "vnatye"
	}],
	["path", {
		d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",
		key: "89voep"
	}],
	["path", {
		d: "M3 9v1",
		key: "1r0deq"
	}],
	["path", {
		d: "M5 21a2 2 0 0 1-2-2",
		key: "sbafld"
	}],
	["path", {
		d: "M9 21h1",
		key: "15o7lz"
	}]
]), SE = m("square-dashed", [
	["path", {
		d: "M5 3a2 2 0 0 0-2 2",
		key: "y57alp"
	}],
	["path", {
		d: "M19 3a2 2 0 0 1 2 2",
		key: "18rm91"
	}],
	["path", {
		d: "M21 19a2 2 0 0 1-2 2",
		key: "1j7049"
	}],
	["path", {
		d: "M5 21a2 2 0 0 1-2-2",
		key: "sbafld"
	}],
	["path", {
		d: "M9 3h1",
		key: "1yesri"
	}],
	["path", {
		d: "M9 21h1",
		key: "15o7lz"
	}],
	["path", {
		d: "M14 3h1",
		key: "1ec4yj"
	}],
	["path", {
		d: "M14 21h1",
		key: "v9vybs"
	}],
	["path", {
		d: "M3 9v1",
		key: "1r0deq"
	}],
	["path", {
		d: "M21 9v1",
		key: "mxsmne"
	}],
	["path", {
		d: "M3 14v1",
		key: "vnatye"
	}],
	["path", {
		d: "M21 14v1",
		key: "169vum"
	}]
]), CE = m("square-divide", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12",
		key: "1jonct"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "16",
		y2: "16",
		key: "aqc6ln"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "8",
		key: "1mkcni"
	}]
]), wE = m("square-dot", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "1",
	key: "41hilf"
}]]), TE = m("square-equal", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7 10h10",
		key: "1101jm"
	}],
	["path", {
		d: "M7 14h10",
		key: "1mhdw3"
	}]
]), EE = m("square-function", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["path", {
		d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",
		key: "m1af9g"
	}],
	["path", {
		d: "M9 11.2h5.7",
		key: "3zgcl2"
	}]
]), DE = m("square-kanban", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M8 7v7",
		key: "1x2jlm"
	}],
	["path", {
		d: "M12 7v4",
		key: "xawao1"
	}],
	["path", {
		d: "M16 7v9",
		key: "1hp2iy"
	}]
]), OE = m("square-library", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7 7v10",
		key: "d5nglc"
	}],
	["path", {
		d: "M11 7v10",
		key: "pptsnr"
	}],
	["path", {
		d: "m15 7 2 10",
		key: "1m7qm5"
	}]
]), kE = m("square-m", [["path", {
	d: "M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16",
	key: "1ywlsj"
}], ["rect", {
	x: "3",
	y: "3",
	width: "18",
	height: "18",
	rx: "2",
	key: "h1oib"
}]]), AE = m("square-menu", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7 8h10",
		key: "1jw688"
	}],
	["path", {
		d: "M7 12h10",
		key: "b7w52i"
	}],
	["path", {
		d: "M7 16h10",
		key: "wp8him"
	}]
]), jE = m("square-minus", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M8 12h8",
	key: "1wcyev"
}]]), ME = m("square-mouse-pointer", [["path", {
	d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
	key: "xwnzip"
}], ["path", {
	d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
	key: "14rsvq"
}]]), NE = m("square-off", [
	["path", {
		d: "M20.4 20.4a2 2 0 01-1.4.6H5a2 2 0 01-2-2V5a2 2 0 01.59-1.41",
		key: "7ym6nm"
	}],
	["path", {
		d: "M21 15.3V5a2 2 0 00-2-2H8.7",
		key: "m4nk5y"
	}],
	["path", {
		d: "M22 22 2 2",
		key: "1r8tn9"
	}]
]), PE = m("square-parking-off", [
	["path", {
		d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",
		key: "9l1ft6"
	}],
	["path", {
		d: "M3 8.7V19a2 2 0 0 0 2 2h10.3",
		key: "17knke"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M13 13a3 3 0 1 0 0-6H9v2",
		key: "uoagbd"
	}],
	["path", {
		d: "M9 17v-2.3",
		key: "1jxgo2"
	}]
]), FE = m("square-parking", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 17V7h4a3 3 0 0 1 0 6H9",
	key: "1dfk2c"
}]]), IE = m("square-pause", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["line", {
		x1: "10",
		x2: "10",
		y1: "15",
		y2: "9",
		key: "c1nkhi"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "15",
		y2: "9",
		key: "h65svq"
	}]
]), X = m("square-pen", [["path", {
	d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
	key: "1m0v6g"
}], ["path", {
	d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
	key: "ohrbg2"
}]]), LE = m("square-percent", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M9 9h.01",
		key: "1q5me6"
	}],
	["path", {
		d: "M15 15h.01",
		key: "lqbp3k"
	}]
]), RE = m("square-pi", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7 7h10",
		key: "udp07y"
	}],
	["path", {
		d: "M10 7v10",
		key: "i1d9ee"
	}],
	["path", {
		d: "M16 17a2 2 0 0 1-2-2V7",
		key: "ftwdc7"
	}]
]), zE = m("square-pilcrow", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17",
		key: "1l9586"
	}],
	["path", {
		d: "M12 7v10",
		key: "jspqdw"
	}],
	["path", {
		d: "M16 7v10",
		key: "lavkr4"
	}]
]), BE = m("square-play", [["rect", {
	x: "3",
	y: "3",
	width: "18",
	height: "18",
	rx: "2",
	key: "h1oib"
}], ["path", {
	d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
	key: "kmsa83"
}]]), VE = m("square-plus", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}]
]), HE = m("square-power", [
	["path", {
		d: "M12 7v4",
		key: "xawao1"
	}],
	["path", {
		d: "M7.998 9.003a5 5 0 1 0 8-.005",
		key: "1pek45"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), UE = m("square-radical", [["path", {
	d: "M7 12h2l2 5 2-10h4",
	key: "1fxv6h"
}], ["rect", {
	x: "3",
	y: "3",
	width: "18",
	height: "18",
	rx: "2",
	key: "h1oib"
}]]), WE = m("square-round-corner", [["path", {
	d: "M21 11a8 8 0 0 0-8-8",
	key: "1lxwo5"
}], ["path", {
	d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
	key: "1dv2y5"
}]]), GE = m("square-scissors", [
	["path", {
		d: "m17 17-2.18-2.18",
		key: "1y7dt1"
	}],
	["path", {
		d: "M9.56 14.44 17 7",
		key: "ue8l15"
	}],
	["path", {
		d: "M9.56 9.56 12 12",
		key: "rml9qv"
	}],
	["circle", {
		cx: "8.5",
		cy: "15.5",
		r: "1.5",
		key: "12hfy1"
	}],
	["circle", {
		cx: "8.5",
		cy: "8.5",
		r: "1.5",
		key: "cn5opk"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), KE = m("square-sigma", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M16 8.9V7H8l4 5-4 5h8v-1.9",
	key: "9nih0i"
}]]), qE = m("square-slash", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["line", {
	x1: "9",
	x2: "15",
	y1: "15",
	y2: "9",
	key: "1dfufj"
}]]), JE = m("square-split-horizontal", [
	["path", {
		d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",
		key: "lubmu8"
	}],
	["path", {
		d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",
		key: "1ag34g"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "4",
		y2: "20",
		key: "1tx1rr"
	}]
]), YE = m("square-split-vertical", [
	["path", {
		d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",
		key: "1pi83i"
	}],
	["path", {
		d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",
		key: "ido5k7"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}]
]), XE = m("square-square", [["rect", {
	x: "3",
	y: "3",
	width: "18",
	height: "18",
	rx: "2",
	key: "h1oib"
}], ["rect", {
	x: "8",
	y: "8",
	width: "8",
	height: "8",
	rx: "1",
	key: "z9xiuo"
}]]), ZE = m("square-stack", [
	["path", {
		d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",
		key: "4i38lg"
	}],
	["path", {
		d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",
		key: "mlte4a"
	}],
	["rect", {
		width: "8",
		height: "8",
		x: "14",
		y: "14",
		rx: "2",
		key: "1fa9i4"
	}]
]), QE = m("square-stop", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["rect", {
	x: "9",
	y: "9",
	width: "6",
	height: "6",
	rx: "1",
	key: "1ssd4o"
}]]), $E = m("square-terminal", [
	["path", {
		d: "m7 11 2-2-2-2",
		key: "1lz0vl"
	}],
	["path", {
		d: "M11 13h4",
		key: "1p7l4v"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}]
]), eD = m("square-user-round", [
	["path", {
		d: "M18 21a6 6 0 0 0-12 0",
		key: "kaz2du"
	}],
	["circle", {
		cx: "12",
		cy: "11",
		r: "4",
		key: "1gt34v"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}]
]), tD = m("square-star", [["path", {
	d: "M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z",
	key: "13edca"
}], ["rect", {
	x: "3",
	y: "3",
	width: "18",
	height: "18",
	rx: "2",
	key: "h1oib"
}]]), nD = m("square-user", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["path", {
		d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
		key: "1m6ac2"
	}]
]), Z = m("square-x", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), rD = m("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), iD = m("squares-intersect", [
	["path", {
		d: "M10 22a2 2 0 0 1-2-2",
		key: "i7yj1i"
	}],
	["path", {
		d: "M14 2a2 2 0 0 1 2 2",
		key: "170a0m"
	}],
	["path", {
		d: "M16 22h-2",
		key: "18d249"
	}],
	["path", {
		d: "M2 10V8",
		key: "7yj4fe"
	}],
	["path", {
		d: "M2 4a2 2 0 0 1 2-2",
		key: "ddgnws"
	}],
	["path", {
		d: "M20 8a2 2 0 0 1 2 2",
		key: "1770vt"
	}],
	["path", {
		d: "M22 14v2",
		key: "iot8ja"
	}],
	["path", {
		d: "M22 20a2 2 0 0 1-2 2",
		key: "qj8q6g"
	}],
	["path", {
		d: "M4 16a2 2 0 0 1-2-2",
		key: "1dnafg"
	}],
	["path", {
		d: "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z",
		key: "ci6f0b"
	}],
	["path", {
		d: "M8 2h2",
		key: "1gmkwm"
	}]
]), aD = m("squares-exclude", [["path", {
	d: "M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0",
	key: "1mcohs"
}], ["path", {
	d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2",
	key: "1r1efp"
}]]), oD = m("squares-subtract", [
	["path", {
		d: "M10 22a2 2 0 0 1-2-2",
		key: "i7yj1i"
	}],
	["path", {
		d: "M16 22h-2",
		key: "18d249"
	}],
	["path", {
		d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z",
		key: "1njgbb"
	}],
	["path", {
		d: "M20 8a2 2 0 0 1 2 2",
		key: "1770vt"
	}],
	["path", {
		d: "M22 14v2",
		key: "iot8ja"
	}],
	["path", {
		d: "M22 20a2 2 0 0 1-2 2",
		key: "qj8q6g"
	}]
]), sD = m("squares-unite", [["path", {
	d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z",
	key: "17jnth"
}]]), cD = m("squircle-dashed", [
	["path", {
		d: "M13.77 3.043a34 34 0 0 0-3.54 0",
		key: "1oaobr"
	}],
	["path", {
		d: "M13.771 20.956a33 33 0 0 1-3.541.001",
		key: "95iq0j"
	}],
	["path", {
		d: "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44",
		key: "1u6qty"
	}],
	["path", {
		d: "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438",
		key: "1ew6g6"
	}],
	["path", {
		d: "M20.957 10.23a33 33 0 0 1 0 3.54",
		key: "1l9npr"
	}],
	["path", {
		d: "M3.043 10.23a34 34 0 0 0 .001 3.541",
		key: "1it6jm"
	}],
	["path", {
		d: "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438",
		key: "14uchd"
	}],
	["path", {
		d: "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44",
		key: "8k4agb"
	}]
]), lD = m("squircle", [["path", {
	d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",
	key: "garfkc"
}]]), uD = m("squirrel", [
	["path", {
		d: "M15.236 22a3 3 0 0 0-2.2-5",
		key: "21bitc"
	}],
	["path", {
		d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",
		key: "oh0fg0"
	}],
	["path", {
		d: "M18 13h.01",
		key: "9veqaj"
	}],
	["path", {
		d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
		key: "980v8a"
	}]
]), dD = m("stamp", [
	["path", {
		d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13",
		key: "i9gjdv"
	}],
	["path", {
		d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",
		key: "1vzg3v"
	}],
	["path", {
		d: "M5 22h14",
		key: "ehvnwv"
	}]
]), fD = m("star-check", [["path", {
	d: "m19.06 12.501 2.78-2.707a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014",
	key: "14g7km"
}], ["path", {
	d: "m15 18 2 2 4-4",
	key: "1szwhi"
}]]), pD = m("star-half", [["path", {
	d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
	key: "2ksp49"
}]]), mD = m("star-minus", [["path", {
	d: "M15 18h6",
	key: "3b3c90"
}], ["path", {
	d: "M17.688 14a2.1 2.1 0 0 1 .416-.568l3.736-3.638a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014",
	key: "rwo527"
}]]), hD = m("star-off", [
	["path", {
		d: "m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152",
		key: "19ctli"
	}],
	["path", {
		d: "m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099",
		key: "ptqqvy"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), gD = m("star-plus", [
	["path", {
		d: "M11.013 18.582 6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5",
		key: "1hs8rk"
	}],
	["path", {
		d: "M15 18h6",
		key: "3b3c90"
	}],
	["path", {
		d: "M18 15v6",
		key: "9wciyi"
	}]
]), _D = m("star-x", [
	["path", {
		d: "m15.5 15.5 5 5",
		key: "1ky94l"
	}],
	["path", {
		d: "m20.063 11.525 1.777-1.731a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428a2.1 2.1 0 0 1 .987-.243 2 2 0 0 1 .132.004",
		key: "6uuto3"
	}],
	["path", {
		d: "m20.5 15.5-5 5",
		key: "1w5am3"
	}]
]), vD = m("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]), yD = m("step-back", [["path", {
	d: "M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
	key: "19qhus"
}], ["path", {
	d: "M21 20V4",
	key: "cb8qj8"
}]]), bD = m("step-forward", [["path", {
	d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
	key: "1ystz2"
}], ["path", {
	d: "M3 4v16",
	key: "1ph11n"
}]]), xD = m("sticker", [
	["path", {
		d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
		key: "1dfntj"
	}],
	["path", {
		d: "M15 3v5a1 1 0 0 0 1 1h5",
		key: "6s6qgf"
	}],
	["path", {
		d: "M8 13h.01",
		key: "1sbv64"
	}],
	["path", {
		d: "M16 13h.01",
		key: "wip0gl"
	}],
	["path", {
		d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1",
		key: "1vvgv3"
	}]
]), SD = m("stethoscope", [
	["path", {
		d: "M11 2v2",
		key: "1539x4"
	}],
	["path", {
		d: "M5 2v2",
		key: "1yf1q8"
	}],
	["path", {
		d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
		key: "rb5t3r"
	}],
	["path", {
		d: "M8 15a6 6 0 0 0 12 0v-3",
		key: "x18d4x"
	}],
	["circle", {
		cx: "20",
		cy: "10",
		r: "2",
		key: "ts1r5v"
	}]
]), CD = m("sticky-note-check", [
	["path", {
		d: "m15 19 2 2 4-4",
		key: "1wqv71"
	}],
	["path", {
		d: "M15 3v5a1 1 0 0 0 1 1h5",
		key: "6s6qgf"
	}],
	["path", {
		d: "M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5",
		key: "1onoss"
	}]
]), wD = m("sticky-note-off", [
	["path", {
		d: "M15 3v5a1 1 0 0 0 1 1h5",
		key: "6s6qgf"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586",
		key: "12nghy"
	}],
	["path", {
		d: "M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344",
		key: "134c6x"
	}]
]), TD = m("sticky-note-minus", [
	["path", {
		d: "M15 3v5a1 1 0 0 0 1 1h5",
		key: "6s6qgf"
	}],
	["path", {
		d: "M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35",
		key: "g18rj4"
	}],
	["path", {
		d: "M21 18h-6",
		key: "139f0c"
	}]
]), ED = m("sticky-note-plus", [
	["path", {
		d: "M15 3v5a1 1 0 0 0 1 1h5",
		key: "6s6qgf"
	}],
	["path", {
		d: "M18 15v6",
		key: "9wciyi"
	}],
	["path", {
		d: "M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355",
		key: "12ish9"
	}],
	["path", {
		d: "M21 18h-6",
		key: "139f0c"
	}]
]), DD = m("sticky-note-x", [
	["path", {
		d: "M15 3v5a1 1 0 0 0 1 1h5",
		key: "6s6qgf"
	}],
	["path", {
		d: "m16 16 5 5",
		key: "8tpb07"
	}],
	["path", {
		d: "M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",
		key: "156tez"
	}],
	["path", {
		d: "m21 16-5 5",
		key: "kplof2"
	}]
]), OD = m("sticky-note", [["path", {
	d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
	key: "1dfntj"
}], ["path", {
	d: "M15 3v5a1 1 0 0 0 1 1h5",
	key: "6s6qgf"
}]]), kD = m("sticky-notes", [
	["path", {
		d: "M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z",
		key: "19nc0g"
	}],
	["path", {
		d: "M10 8v5a1 1 0 0 0 1 1h5",
		key: "m3law1"
	}],
	["path", {
		d: "M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2",
		key: "1iu1qd"
	}],
	["path", {
		d: "M16 2v5a1 1 0 0 0 1 1h5",
		key: "af171p"
	}]
]), AD = m("store", [
	["path", {
		d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",
		key: "slp6dd"
	}],
	["path", {
		d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
		key: "o0xfot"
	}],
	["path", {
		d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",
		key: "wn3emo"
	}]
]), jD = m("stone", [
	["path", {
		d: "M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z",
		key: "1si4ox"
	}],
	["path", {
		d: "M11.99 22 14 12l7.822 3.184",
		key: "1u8to0"
	}],
	["path", {
		d: "M14 12 8.47 2.302",
		key: "guo3d5"
	}]
]), MD = m("stretch-horizontal", [["rect", {
	width: "20",
	height: "6",
	x: "2",
	y: "4",
	rx: "2",
	key: "qdearl"
}], ["rect", {
	width: "20",
	height: "6",
	x: "2",
	y: "14",
	rx: "2",
	key: "1xrn6j"
}]]), ND = m("stretch-vertical", [["rect", {
	width: "6",
	height: "20",
	x: "4",
	y: "2",
	rx: "2",
	key: "19qu7m"
}], ["rect", {
	width: "6",
	height: "20",
	x: "14",
	y: "2",
	rx: "2",
	key: "24v0nk"
}]]), PD = m("strikethrough", [
	["path", {
		d: "M16 4H9a3 3 0 0 0-2.83 4",
		key: "43sutm"
	}],
	["path", {
		d: "M14 12a4 4 0 0 1 0 8H6",
		key: "nlfj13"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}]
]), FD = m("subscript", [
	["path", {
		d: "m4 5 8 8",
		key: "1eunvl"
	}],
	["path", {
		d: "m12 5-8 8",
		key: "1ah0jp"
	}],
	["path", {
		d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
		key: "e8ta8j"
	}]
]), ID = m("summary", [
	["path", {
		d: "M15 4H7",
		key: "oyc4c8"
	}],
	["path", {
		d: "m18 16 3 3-3 3",
		key: "1d4glt"
	}],
	["path", {
		d: "M3 4v13a2 2 0 0 0 2 2h16",
		key: "o3n0ii"
	}],
	["path", {
		d: "M7 14h7",
		key: "16kgpy"
	}],
	["path", {
		d: "M7 9h12",
		key: "ihq7ma"
	}]
]), LD = m("sun-dim", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 4h.01",
		key: "1ujb9j"
	}],
	["path", {
		d: "M20 12h.01",
		key: "1ykeid"
	}],
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M4 12h.01",
		key: "158zrr"
	}],
	["path", {
		d: "M17.657 6.343h.01",
		key: "31pqzk"
	}],
	["path", {
		d: "M17.657 17.657h.01",
		key: "jehnf4"
	}],
	["path", {
		d: "M6.343 17.657h.01",
		key: "gdk6ow"
	}],
	["path", {
		d: "M6.343 6.343h.01",
		key: "1uurf0"
	}]
]), RD = m("sun-medium", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 3v1",
		key: "1asbbs"
	}],
	["path", {
		d: "M12 20v1",
		key: "1wcdkc"
	}],
	["path", {
		d: "M3 12h1",
		key: "lp3yf2"
	}],
	["path", {
		d: "M20 12h1",
		key: "1vloll"
	}],
	["path", {
		d: "m18.364 5.636-.707.707",
		key: "1hakh0"
	}],
	["path", {
		d: "m6.343 17.657-.707.707",
		key: "18m9nf"
	}],
	["path", {
		d: "m5.636 5.636.707.707",
		key: "1xv1c5"
	}],
	["path", {
		d: "m17.657 17.657.707.707",
		key: "vl76zb"
	}]
]), zD = m("sun-moon", [
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715",
		key: "xlf6rm"
	}],
	["path", {
		d: "M16 12a4 4 0 0 0-4-4",
		key: "6vsxu"
	}],
	["path", {
		d: "m19 5-1.256 1.256",
		key: "1yg6a6"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}]
]), BD = m("sun-snow", [
	["path", {
		d: "M10 21v-1",
		key: "1u8rkd"
	}],
	["path", {
		d: "M10 4V3",
		key: "pkzwkn"
	}],
	["path", {
		d: "M10 9a3 3 0 0 0 0 6",
		key: "gv75dk"
	}],
	["path", {
		d: "m14 20 1.25-2.5L18 18",
		key: "1chtki"
	}],
	["path", {
		d: "m14 4 1.25 2.5L18 6",
		key: "1b4wsy"
	}],
	["path", {
		d: "m17 21-3-6 1.5-3H22",
		key: "o5qa3v"
	}],
	["path", {
		d: "m17 3-3 6 1.5 3",
		key: "11697g"
	}],
	["path", {
		d: "M2 12h1",
		key: "1uaihz"
	}],
	["path", {
		d: "m20 10-1.5 2 1.5 2",
		key: "1swlpi"
	}],
	["path", {
		d: "m3.64 18.36.7-.7",
		key: "105rm9"
	}],
	["path", {
		d: "m4.34 6.34-.7-.7",
		key: "d3unjp"
	}]
]), VD = m("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]), HD = m("sunrise", [
	["path", {
		d: "M12 2v8",
		key: "1q4o3n"
	}],
	["path", {
		d: "m4.93 10.93 1.41 1.41",
		key: "2a7f42"
	}],
	["path", {
		d: "M2 18h2",
		key: "j10viu"
	}],
	["path", {
		d: "M20 18h2",
		key: "wocana"
	}],
	["path", {
		d: "m19.07 10.93-1.41 1.41",
		key: "15zs5n"
	}],
	["path", {
		d: "M22 22H2",
		key: "19qnx5"
	}],
	["path", {
		d: "m8 6 4-4 4 4",
		key: "ybng9g"
	}],
	["path", {
		d: "M16 18a4 4 0 0 0-8 0",
		key: "1lzouq"
	}]
]), UD = m("sunset", [
	["path", {
		d: "M12 10V2",
		key: "16sf7g"
	}],
	["path", {
		d: "m4.93 10.93 1.41 1.41",
		key: "2a7f42"
	}],
	["path", {
		d: "M2 18h2",
		key: "j10viu"
	}],
	["path", {
		d: "M20 18h2",
		key: "wocana"
	}],
	["path", {
		d: "m19.07 10.93-1.41 1.41",
		key: "15zs5n"
	}],
	["path", {
		d: "M22 22H2",
		key: "19qnx5"
	}],
	["path", {
		d: "m16 6-4 4-4-4",
		key: "6wukr"
	}],
	["path", {
		d: "M16 18a4 4 0 0 0-8 0",
		key: "1lzouq"
	}]
]), WD = m("swatch-book", [
	["path", {
		d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",
		key: "1ldrpk"
	}],
	["path", {
		d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",
		key: "11i5po"
	}],
	["path", {
		d: "M 7 17h.01",
		key: "1euzgo"
	}],
	["path", {
		d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",
		key: "o2gii7"
	}]
]), GD = m("superscript", [
	["path", {
		d: "m4 19 8-8",
		key: "hr47gm"
	}],
	["path", {
		d: "m12 19-8-8",
		key: "1dhhmo"
	}],
	["path", {
		d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
		key: "1dfcux"
	}]
]), KD = m("swiss-franc", [
	["path", {
		d: "M10 21V3h8",
		key: "br2l0g"
	}],
	["path", {
		d: "M6 16h9",
		key: "2py0wn"
	}],
	["path", {
		d: "M10 9.5h7",
		key: "13dmhz"
	}]
]), qD = m("switch-camera", [
	["path", {
		d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",
		key: "mtk2lu"
	}],
	["path", {
		d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",
		key: "120jsl"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["path", {
		d: "m18 22-3-3 3-3",
		key: "kgdoj7"
	}],
	["path", {
		d: "m6 2 3 3-3 3",
		key: "1fnbkv"
	}]
]), JD = m("sword", [
	["path", {
		d: "m11 19-6-6",
		key: "s7kpr"
	}],
	["path", {
		d: "m5 21-2-2",
		key: "1kw20b"
	}],
	["path", {
		d: "m8 16-4 4",
		key: "1oqv8h"
	}],
	["path", {
		d: "M9.5 17.5 21 6V3h-3L6.5 14.5",
		key: "pkxemp"
	}]
]), YD = m("swords", [
	["polyline", {
		points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
		key: "1hfsw2"
	}],
	["line", {
		x1: "13",
		x2: "19",
		y1: "19",
		y2: "13",
		key: "1vrmhu"
	}],
	["line", {
		x1: "16",
		x2: "20",
		y1: "16",
		y2: "20",
		key: "1bron3"
	}],
	["line", {
		x1: "19",
		x2: "21",
		y1: "21",
		y2: "19",
		key: "13pww6"
	}],
	["polyline", {
		points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
		key: "hbey2j"
	}],
	["line", {
		x1: "5",
		x2: "9",
		y1: "14",
		y2: "18",
		key: "1hf58s"
	}],
	["line", {
		x1: "7",
		x2: "4",
		y1: "17",
		y2: "20",
		key: "pidxm4"
	}],
	["line", {
		x1: "3",
		x2: "5",
		y1: "19",
		y2: "21",
		key: "1pehsh"
	}]
]), XD = m("syringe", [
	["path", {
		d: "m18 2 4 4",
		key: "22kx64"
	}],
	["path", {
		d: "m17 7 3-3",
		key: "1w1zoj"
	}],
	["path", {
		d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",
		key: "1exhtz"
	}],
	["path", {
		d: "m9 11 4 4",
		key: "rovt3i"
	}],
	["path", {
		d: "m5 19-3 3",
		key: "59f2uf"
	}],
	["path", {
		d: "m14 4 6 6",
		key: "yqp9t2"
	}]
]), ZD = m("table-2", [["path", {
	d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
	key: "gugj83"
}]]), QD = m("table-cells-merge", [
	["path", {
		d: "M12 21v-6",
		key: "lihzve"
	}],
	["path", {
		d: "M12 9V3",
		key: "da5inc"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}]
]), $D = m("table-cells-split", [
	["path", {
		d: "M12 15V9",
		key: "8c7uyn"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}]
]), eO = m("table-columns-split", [
	["path", {
		d: "M14 14v2",
		key: "w2a1xv"
	}],
	["path", {
		d: "M14 20v2",
		key: "1lq872"
	}],
	["path", {
		d: "M14 2v2",
		key: "6buw04"
	}],
	["path", {
		d: "M14 8v2",
		key: "i67w9a"
	}],
	["path", {
		d: "M2 15h8",
		key: "82wtch"
	}],
	["path", {
		d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",
		key: "up0l64"
	}],
	["path", {
		d: "M2 9h8",
		key: "yelfik"
	}],
	["path", {
		d: "M22 15h-4",
		key: "1es58f"
	}],
	["path", {
		d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",
		key: "pdjoqf"
	}],
	["path", {
		d: "M22 9h-4",
		key: "1luja7"
	}],
	["path", {
		d: "M5 3v18",
		key: "14hmio"
	}]
]), tO = m("table-of-contents", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M16 12H3",
		key: "1a2rj7"
	}],
	["path", {
		d: "M16 19H3",
		key: "zzsher"
	}],
	["path", {
		d: "M21 5h.01",
		key: "wa75ra"
	}],
	["path", {
		d: "M21 12h.01",
		key: "msek7k"
	}],
	["path", {
		d: "M21 19h.01",
		key: "qvbq2j"
	}]
]), nO = m("table-properties", [
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M21 9H3",
		key: "1338ky"
	}],
	["path", {
		d: "M21 15H3",
		key: "9uk58r"
	}]
]), rO = m("table-rows-split", [
	["path", {
		d: "M14 10h2",
		key: "1lstlu"
	}],
	["path", {
		d: "M15 22v-8",
		key: "1fwwgm"
	}],
	["path", {
		d: "M15 2v4",
		key: "1044rn"
	}],
	["path", {
		d: "M2 10h2",
		key: "1r8dkt"
	}],
	["path", {
		d: "M20 10h2",
		key: "1ug425"
	}],
	["path", {
		d: "M3 19h18",
		key: "awlh7x"
	}],
	["path", {
		d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",
		key: "ibqhof"
	}],
	["path", {
		d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",
		key: "1uenja"
	}],
	["path", {
		d: "M8 10h2",
		key: "66od0"
	}],
	["path", {
		d: "M9 22v-8",
		key: "fmnu31"
	}],
	["path", {
		d: "M9 2v4",
		key: "j1yeou"
	}]
]), iO = m("table", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}]
]), aO = m("tablet-smartphone", [
	["rect", {
		width: "10",
		height: "14",
		x: "3",
		y: "8",
		rx: "2",
		key: "1vrsiq"
	}],
	["path", {
		d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",
		key: "1j4zmg"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}]
]), oO = m("tablet", [["rect", {
	width: "16",
	height: "20",
	x: "4",
	y: "2",
	rx: "2",
	ry: "2",
	key: "76otgf"
}], ["line", {
	x1: "12",
	x2: "12.01",
	y1: "18",
	y2: "18",
	key: "1dp563"
}]]), sO = m("tablets", [
	["circle", {
		cx: "7",
		cy: "7",
		r: "5",
		key: "x29byf"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "5",
		key: "1op1d2"
	}],
	["path", {
		d: "M12 17h10",
		key: "ls21zv"
	}],
	["path", {
		d: "m3.46 10.54 7.08-7.08",
		key: "1rehiu"
	}]
]), cO = m("tag-plus", [
	["path", {
		d: "M16 13h6",
		key: "1um0mj"
	}],
	["path", {
		d: "m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79",
		key: "dp0yc9"
	}],
	["path", {
		d: "M19 10v6",
		key: "13mz7b"
	}],
	["circle", {
		cx: "7.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "kqv944"
	}]
]), lO = m("tag-x", [
	["path", {
		d: "m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79",
		key: "hu94c9"
	}],
	["path", {
		d: "m16.5 10.5 5 5",
		key: "1jo8bf"
	}],
	["path", {
		d: "m21.5 10.5-5 5",
		key: "jzei60"
	}],
	["circle", {
		cx: "7.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "kqv944"
	}]
]), uO = m("tag", [["path", {
	d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
	key: "vktsd0"
}], ["circle", {
	cx: "7.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "kqv944"
}]]), dO = m("tags", [
	["path", {
		d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",
		key: "16rjxf"
	}],
	["path", {
		d: "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",
		key: "178nd4"
	}],
	["circle", {
		cx: "10.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor",
		key: "12ikhr"
	}]
]), fO = m("tally-1", [["path", {
	d: "M4 4v16",
	key: "6qkkli"
}]]), pO = m("tally-2", [["path", {
	d: "M4 4v16",
	key: "6qkkli"
}], ["path", {
	d: "M9 4v16",
	key: "81ygyz"
}]]), mO = m("tally-3", [
	["path", {
		d: "M4 4v16",
		key: "6qkkli"
	}],
	["path", {
		d: "M9 4v16",
		key: "81ygyz"
	}],
	["path", {
		d: "M14 4v16",
		key: "12vmem"
	}]
]), hO = m("tally-5", [
	["path", {
		d: "M4 4v16",
		key: "6qkkli"
	}],
	["path", {
		d: "M9 4v16",
		key: "81ygyz"
	}],
	["path", {
		d: "M14 4v16",
		key: "12vmem"
	}],
	["path", {
		d: "M19 4v16",
		key: "8ij5ei"
	}],
	["path", {
		d: "M22 6 2 18",
		key: "h9moai"
	}]
]), gO = m("tally-4", [
	["path", {
		d: "M4 4v16",
		key: "6qkkli"
	}],
	["path", {
		d: "M9 4v16",
		key: "81ygyz"
	}],
	["path", {
		d: "M14 4v16",
		key: "12vmem"
	}],
	["path", {
		d: "M19 4v16",
		key: "8ij5ei"
	}]
]), _O = m("tangent", [
	["circle", {
		cx: "17",
		cy: "4",
		r: "2",
		key: "y5j2s2"
	}],
	["path", {
		d: "M15.59 5.41 5.41 15.59",
		key: "l0vprr"
	}],
	["circle", {
		cx: "4",
		cy: "17",
		r: "2",
		key: "9p4efm"
	}],
	["path", {
		d: "M12 22s-4-9-1.5-11.5S22 12 22 12",
		key: "1twk4o"
	}]
]), vO = m("target", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), yO = m("telescope", [
	["path", {
		d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
		key: "k4qptu"
	}],
	["path", {
		d: "m13.56 11.747 4.332-.924",
		key: "19l80z"
	}],
	["path", {
		d: "m16 21-3.105-6.21",
		key: "7oh9d"
	}],
	["path", {
		d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
		key: "m7xp4m"
	}],
	["path", {
		d: "m6.158 8.633 1.114 4.456",
		key: "74o979"
	}],
	["path", {
		d: "m8 21 3.105-6.21",
		key: "1fvxut"
	}],
	["circle", {
		cx: "12",
		cy: "13",
		r: "2",
		key: "1c1ljs"
	}]
]), bO = m("tent-tree", [
	["circle", {
		cx: "4",
		cy: "4",
		r: "2",
		key: "bt5ra8"
	}],
	["path", {
		d: "m14 5 3-3 3 3",
		key: "1sorif"
	}],
	["path", {
		d: "m14 10 3-3 3 3",
		key: "1jyi9h"
	}],
	["path", {
		d: "M17 14V2",
		key: "8ymqnk"
	}],
	["path", {
		d: "M17 14H7l-5 8h20Z",
		key: "13ar7p"
	}],
	["path", {
		d: "M8 14v8",
		key: "1ghmqk"
	}],
	["path", {
		d: "m9 14 5 8",
		key: "13pgi6"
	}]
]), xO = m("tent", [
	["path", {
		d: "M3.5 21 14 3",
		key: "1szst5"
	}],
	["path", {
		d: "M20.5 21 10 3",
		key: "1310c3"
	}],
	["path", {
		d: "M15.5 21 12 15l-3.5 6",
		key: "1ddtfw"
	}],
	["path", {
		d: "M2 21h20",
		key: "1nyx9w"
	}]
]), SO = m("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]), CO = m("test-tube-diagonal", [
	["path", {
		d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",
		key: "1ub6xw"
	}],
	["path", {
		d: "m16 2 6 6",
		key: "1gw87d"
	}],
	["path", {
		d: "M12 16H4",
		key: "1cjfip"
	}]
]), wO = m("test-tube", [
	["path", {
		d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",
		key: "125lnx"
	}],
	["path", {
		d: "M8.5 2h7",
		key: "csnxdl"
	}],
	["path", {
		d: "M14.5 16h-5",
		key: "1ox875"
	}]
]), TO = m("test-tubes", [
	["path", {
		d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",
		key: "1hjrqt"
	}],
	["path", {
		d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",
		key: "16lc8n"
	}],
	["path", {
		d: "M3 2h7",
		key: "7s29d5"
	}],
	["path", {
		d: "M14 2h7",
		key: "7sicin"
	}],
	["path", {
		d: "M9 16H4",
		key: "1bfye3"
	}],
	["path", {
		d: "M20 16h-5",
		key: "ddnjpe"
	}]
]), EO = m("text-align-center", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M17 12H7",
		key: "16if0g"
	}],
	["path", {
		d: "M19 19H5",
		key: "vjpgq2"
	}]
]), DO = m("text-align-end", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M21 19H7",
		key: "4cu937"
	}]
]), OO = m("text-align-justify", [
	["path", {
		d: "M3 5h18",
		key: "1u36vt"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["path", {
		d: "M3 19h18",
		key: "awlh7x"
	}]
]), Q = m("text-align-start", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M17 19H3",
		key: "z6ezky"
	}]
]), kO = m("text-cursor-input", [
	["path", {
		d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6",
		key: "1528k5"
	}],
	["path", {
		d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",
		key: "13ksps"
	}],
	["path", {
		d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",
		key: "1n9rhb"
	}],
	["path", {
		d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1",
		key: "1mj8rg"
	}],
	["path", {
		d: "M9 6v12",
		key: "velyjx"
	}]
]), AO = m("text-cursor", [
	["path", {
		d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",
		key: "uvaxm9"
	}],
	["path", {
		d: "M7 22h1a4 4 0 0 0 4-4",
		key: "1l7xii"
	}],
	["path", {
		d: "M7 2h1a4 4 0 0 1 4 4",
		key: "1vrvvh"
	}]
]), jO = m("text-initial", [
	["path", {
		d: "M15 5h6",
		key: "1pr8yx"
	}],
	["path", {
		d: "M15 12h6",
		key: "upa0zy"
	}],
	["path", {
		d: "M3 19h18",
		key: "awlh7x"
	}],
	["path", {
		d: "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12",
		key: "6lvno8"
	}],
	["path", {
		d: "M3.92 10h6.16",
		key: "1tl8ex"
	}]
]), MO = m("text-quote", [
	["path", {
		d: "M17 5H3",
		key: "1cn7zz"
	}],
	["path", {
		d: "M21 12H8",
		key: "scolzb"
	}],
	["path", {
		d: "M21 19H8",
		key: "13qgcb"
	}],
	["path", {
		d: "M3 12v7",
		key: "1ri8j3"
	}]
]), NO = m("text-search", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M10 12H3",
		key: "1ulcyk"
	}],
	["path", {
		d: "M10 19H3",
		key: "108z41"
	}],
	["circle", {
		cx: "17",
		cy: "15",
		r: "3",
		key: "1upz2a"
	}],
	["path", {
		d: "m21 19-1.9-1.9",
		key: "dwi7p8"
	}]
]), PO = m("text-wrap", [
	["path", {
		d: "m16 16-3 3 3 3",
		key: "117b85"
	}],
	["path", {
		d: "M3 12h14.5a1 1 0 0 1 0 7H13",
		key: "18xa6z"
	}],
	["path", {
		d: "M3 19h6",
		key: "1ygdsz"
	}],
	["path", {
		d: "M3 5h18",
		key: "1u36vt"
	}]
]), FO = m("theater", [
	["path", {
		d: "M2 10s3-3 3-8",
		key: "3xiif0"
	}],
	["path", {
		d: "M22 10s-3-3-3-8",
		key: "ioaa5q"
	}],
	["path", {
		d: "M10 2c0 4.4-3.6 8-8 8",
		key: "16fkpi"
	}],
	["path", {
		d: "M14 2c0 4.4 3.6 8 8 8",
		key: "b9eulq"
	}],
	["path", {
		d: "M2 10s2 2 2 5",
		key: "1au1lb"
	}],
	["path", {
		d: "M22 10s-2 2-2 5",
		key: "qi2y5e"
	}],
	["path", {
		d: "M8 15h8",
		key: "45n4r"
	}],
	["path", {
		d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",
		key: "1vsc2m"
	}],
	["path", {
		d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",
		key: "hrha4u"
	}]
]), IO = m("thermometer-snowflake", [
	["path", {
		d: "m10 20-1.25-2.5L6 18",
		key: "18frcb"
	}],
	["path", {
		d: "M10 4 8.75 6.5 6 6",
		key: "7mghy3"
	}],
	["path", {
		d: "M10.585 15H10",
		key: "4nqulp"
	}],
	["path", {
		d: "M2 12h6.5L10 9",
		key: "kv9z4n"
	}],
	["path", {
		d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",
		key: "yu0u2z"
	}],
	["path", {
		d: "m4 10 1.5 2L4 14",
		key: "k9enpj"
	}],
	["path", {
		d: "m7 21 3-6-1.5-3",
		key: "j8hb9u"
	}],
	["path", {
		d: "m7 3 3 6h2",
		key: "1bbqgq"
	}]
]), LO = m("thermometer", [["path", {
	d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
	key: "17jzev"
}]]), RO = m("thermometer-sun", [
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 8a4 4 0 0 0-1.645 7.647",
		key: "wz5p04"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",
		key: "yu0u2z"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}]
]), zO = m("thumbs-down", [["path", {
	d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
	key: "m61m77"
}], ["path", {
	d: "M17 14V2",
	key: "8ymqnk"
}]]), BO = m("thumbs-up", [["path", {
	d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
	key: "emmmcr"
}], ["path", {
	d: "M7 10v12",
	key: "1qc93n"
}]]), VO = m("ticket-check", [["path", {
	d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
	key: "qn84l0"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), HO = m("ticket-minus", [["path", {
	d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
	key: "qn84l0"
}], ["path", {
	d: "M9 12h6",
	key: "1c52cq"
}]]), UO = m("ticket-percent", [
	["path", {
		d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
		key: "1l48ns"
	}],
	["path", {
		d: "M9 9h.01",
		key: "1q5me6"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M15 15h.01",
		key: "lqbp3k"
	}]
]), WO = m("ticket-plus", [
	["path", {
		d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
		key: "qn84l0"
	}],
	["path", {
		d: "M9 12h6",
		key: "1c52cq"
	}],
	["path", {
		d: "M12 9v6",
		key: "199k2o"
	}]
]), GO = m("ticket-slash", [["path", {
	d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
	key: "qn84l0"
}], ["path", {
	d: "m9.5 14.5 5-5",
	key: "qviqfa"
}]]), KO = m("ticket-x", [
	["path", {
		d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
		key: "qn84l0"
	}],
	["path", {
		d: "m9.5 14.5 5-5",
		key: "qviqfa"
	}],
	["path", {
		d: "m9.5 9.5 5 5",
		key: "18nt4w"
	}]
]), qO = m("ticket", [
	["path", {
		d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
		key: "qn84l0"
	}],
	["path", {
		d: "M13 5v2",
		key: "dyzc3o"
	}],
	["path", {
		d: "M13 17v2",
		key: "1ont0d"
	}],
	["path", {
		d: "M13 11v2",
		key: "1wjjxi"
	}]
]), JO = m("tickets-plane", [
	["path", {
		d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12",
		key: "16muxl"
	}],
	["path", {
		d: "m12 13.5 3.794.506",
		key: "6v5z87"
	}],
	["path", {
		d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8",
		key: "15hfpj"
	}],
	["path", {
		d: "M6 10V8",
		key: "1y41hn"
	}],
	["path", {
		d: "M6 14v1",
		key: "cao2tf"
	}],
	["path", {
		d: "M6 19v2",
		key: "1loha6"
	}],
	["rect", {
		x: "2",
		y: "8",
		width: "20",
		height: "13",
		rx: "2",
		key: "p3bz5l"
	}]
]), YO = m("tickets", [
	["path", {
		d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8",
		key: "15hfpj"
	}],
	["path", {
		d: "M6 10V8",
		key: "1y41hn"
	}],
	["path", {
		d: "M6 14v1",
		key: "cao2tf"
	}],
	["path", {
		d: "M6 19v2",
		key: "1loha6"
	}],
	["rect", {
		x: "2",
		y: "8",
		width: "20",
		height: "13",
		rx: "2",
		key: "p3bz5l"
	}]
]), XO = m("timeline", [
	["path", {
		d: "M4 12h.01",
		key: "158zrr"
	}],
	["path", {
		d: "M4 16h.01",
		key: "jrnfb7"
	}],
	["path", {
		d: "M4 20h.01",
		key: "orx0iu"
	}],
	["path", {
		d: "M4 4h.01",
		key: "cieki8"
	}],
	["path", {
		d: "M4 8h.01",
		key: "43g258"
	}],
	["path", {
		d: "M9.414 13.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 12z",
		key: "1pvxkf"
	}],
	["path", {
		d: "M9.414 21.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 20z",
		key: "1k13gh"
	}],
	["path", {
		d: "M9.414 5.414A2 2 0 0 0 10.828 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 4z",
		key: "12x0hd"
	}]
]), ZO = m("timer-off", [
	["path", {
		d: "M10 2h4",
		key: "n1abiw"
	}],
	["path", {
		d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",
		key: "10he05"
	}],
	["path", {
		d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",
		key: "15f7sh"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M12 12v-2",
		key: "fwoke6"
	}]
]), QO = m("timer-reset", [
	["path", {
		d: "M10 2h4",
		key: "n1abiw"
	}],
	["path", {
		d: "M12 14v-4",
		key: "1evpnu"
	}],
	["path", {
		d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",
		key: "1ts96g"
	}],
	["path", {
		d: "M9 17H4v5",
		key: "8t5av"
	}]
]), $O = m("timer", [
	["line", {
		x1: "10",
		x2: "14",
		y1: "2",
		y2: "2",
		key: "14vaq8"
	}],
	["line", {
		x1: "12",
		x2: "15",
		y1: "14",
		y2: "11",
		key: "17fdiu"
	}],
	["circle", {
		cx: "12",
		cy: "14",
		r: "8",
		key: "1e1u0o"
	}]
]), ek = m("toggle-left", [["circle", {
	cx: "9",
	cy: "12",
	r: "3",
	key: "u3jwor"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "7",
	key: "g7kal2"
}]]), tk = m("toggle-right", [["circle", {
	cx: "15",
	cy: "12",
	r: "3",
	key: "1afu0r"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "7",
	key: "g7kal2"
}]]), nk = m("tool-case", [
	["path", {
		d: "M10 15h4",
		key: "192ueg"
	}],
	["path", {
		d: "m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27",
		key: "xbnumr"
	}],
	["path", {
		d: "m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122",
		key: "eaw7gc"
	}],
	["path", {
		d: "M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",
		key: "1vaooh"
	}]
]), rk = m("toilet", [["path", {
	d: "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",
	key: "kc4kqr"
}], ["path", {
	d: "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",
	key: "1tqs57"
}]]), ik = m("toolbox", [
	["path", {
		d: "M16 12v4",
		key: "vf1vip"
	}],
	["path", {
		d: "M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2",
		key: "llnzfg"
	}],
	["path", {
		d: "M17 6a2 2 0 011.414.586l3 3A2 2 0 0122 11v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 01.586-1.414l3-3A2 2 0 017 6z",
		key: "1hprxj"
	}],
	["path", {
		d: "M2 14h20",
		key: "myj16y"
	}],
	["path", {
		d: "M8 12v4",
		key: "1w4uao"
	}]
]), ak = m("tornado", [
	["path", {
		d: "M21 4H3",
		key: "1hwok0"
	}],
	["path", {
		d: "M18 8H6",
		key: "41n648"
	}],
	["path", {
		d: "M19 12H9",
		key: "1g4lpz"
	}],
	["path", {
		d: "M16 16h-6",
		key: "1j5d54"
	}],
	["path", {
		d: "M11 20H9",
		key: "39obr8"
	}]
]), ok = m("torus", [["ellipse", {
	cx: "12",
	cy: "11",
	rx: "3",
	ry: "2",
	key: "1b2qxu"
}], ["ellipse", {
	cx: "12",
	cy: "12.5",
	rx: "10",
	ry: "8.5",
	key: "h8emeu"
}]]), sk = m("touchpad", [
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}],
	["path", {
		d: "M2 14h20",
		key: "myj16y"
	}],
	["path", {
		d: "M12 20v-6",
		key: "1rm09r"
	}]
]), ck = m("touchpad-off", [
	["path", {
		d: "M12 20v-6",
		key: "1rm09r"
	}],
	["path", {
		d: "M19.656 14H22",
		key: "170xzr"
	}],
	["path", {
		d: "M2 14h12",
		key: "d8icqz"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",
		key: "s23sx2"
	}],
	["path", {
		d: "M9.656 4H20a2 2 0 0 1 2 2v10.344",
		key: "ovjcvl"
	}]
]), lk = m("towel-rack", [
	["path", {
		d: "M22 7h-2",
		key: "1okbx2"
	}],
	["path", {
		d: "M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4",
		key: "kc32tg"
	}],
	["path", {
		d: "M9 7H2",
		key: "ahf7b7"
	}]
]), uk = m("tower-control", [
	["path", {
		d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",
		key: "1pledb"
	}],
	["path", {
		d: "M8 13v9",
		key: "hmv0ci"
	}],
	["path", {
		d: "M16 22v-9",
		key: "ylnf1u"
	}],
	["path", {
		d: "m9 6 1 7",
		key: "dpdgam"
	}],
	["path", {
		d: "m15 6-1 7",
		key: "ls7zgu"
	}],
	["path", {
		d: "M12 6V2",
		key: "1pj48d"
	}],
	["path", {
		d: "M13 2h-2",
		key: "mj6ths"
	}]
]), dk = m("toy-brick", [
	["rect", {
		width: "18",
		height: "12",
		x: "3",
		y: "8",
		rx: "1",
		key: "158fvp"
	}],
	["path", {
		d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",
		key: "s0042v"
	}],
	["path", {
		d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",
		key: "9wmeh2"
	}]
]), fk = m("tractor", [
	["path", {
		d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",
		key: "she1j9"
	}],
	["path", {
		d: "M16 18h-5",
		key: "bq60fd"
	}],
	["path", {
		d: "M18 5a1 1 0 0 0-1 1v5.573",
		key: "1kv8ia"
	}],
	["path", {
		d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",
		key: "1q1ert"
	}],
	["path", {
		d: "M4 11V4",
		key: "9ft8pt"
	}],
	["path", {
		d: "M7 15h.01",
		key: "k5ht0j"
	}],
	["path", {
		d: "M8 10.1V4",
		key: "1jgyzo"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "2",
		key: "1emm8v"
	}],
	["circle", {
		cx: "7",
		cy: "15",
		r: "5",
		key: "ddtuc"
	}]
]), pk = m("traffic-cone", [
	["path", {
		d: "M16.05 10.966a5 2.5 0 0 1-8.1 0",
		key: "m5jpwb"
	}],
	["path", {
		d: "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04",
		key: "rbg3g8"
	}],
	["path", {
		d: "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z",
		key: "vap8c8"
	}],
	["path", {
		d: "M9.194 6.57a5 2.5 0 0 0 5.61 0",
		key: "15hn5c"
	}]
]), mk = m("train-front-tunnel", [
	["path", {
		d: "M2 22V12a10 10 0 1 1 20 0v10",
		key: "o0fyp0"
	}],
	["path", {
		d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",
		key: "m8q3n9"
	}],
	["path", {
		d: "M10 15h.01",
		key: "44in9x"
	}],
	["path", {
		d: "M14 15h.01",
		key: "5mohn5"
	}],
	["path", {
		d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",
		key: "hckbmu"
	}],
	["path", {
		d: "m9 19-2 3",
		key: "iij7hm"
	}],
	["path", {
		d: "m15 19 2 3",
		key: "npx8sa"
	}]
]), hk = m("train-front", [
	["path", {
		d: "M8 3.1V7a4 4 0 0 0 8 0V3.1",
		key: "1v71zp"
	}],
	["path", {
		d: "m9 15-1-1",
		key: "1yrq24"
	}],
	["path", {
		d: "m15 15 1-1",
		key: "1t0d6s"
	}],
	["path", {
		d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",
		key: "1p0hjs"
	}],
	["path", {
		d: "m8 19-2 3",
		key: "13i0xs"
	}],
	["path", {
		d: "m16 19 2 3",
		key: "xo31yx"
	}]
]), gk = m("train-track", [
	["path", {
		d: "M2 17 17 2",
		key: "18b09t"
	}],
	["path", {
		d: "m2 14 8 8",
		key: "1gv9hu"
	}],
	["path", {
		d: "m5 11 8 8",
		key: "189pqp"
	}],
	["path", {
		d: "m8 8 8 8",
		key: "1imecy"
	}],
	["path", {
		d: "m11 5 8 8",
		key: "ummqn6"
	}],
	["path", {
		d: "m14 2 8 8",
		key: "1vk7dn"
	}],
	["path", {
		d: "M7 22 22 7",
		key: "15mb1i"
	}]
]), _k = m("tram-front", [
	["rect", {
		width: "16",
		height: "16",
		x: "4",
		y: "3",
		rx: "2",
		key: "1wxw4b"
	}],
	["path", {
		d: "M4 11h16",
		key: "mpoxn0"
	}],
	["path", {
		d: "M12 3v8",
		key: "1h2ygw"
	}],
	["path", {
		d: "m8 19-2 3",
		key: "13i0xs"
	}],
	["path", {
		d: "m18 22-2-3",
		key: "1p0ohu"
	}],
	["path", {
		d: "M8 15h.01",
		key: "a7atzg"
	}],
	["path", {
		d: "M16 15h.01",
		key: "rnfrdf"
	}]
]), vk = m("transgender", [
	["path", {
		d: "M12 16v6",
		key: "c8a4gj"
	}],
	["path", {
		d: "M14 20h-4",
		key: "m8m19d"
	}],
	["path", {
		d: "M18 2h4v4",
		key: "1341mj"
	}],
	["path", {
		d: "m2 2 7.17 7.17",
		key: "13q8l2"
	}],
	["path", {
		d: "M2 5.355V2h3.357",
		key: "18136r"
	}],
	["path", {
		d: "m22 2-7.17 7.17",
		key: "1epvy4"
	}],
	["path", {
		d: "M8 5 5 8",
		key: "mgbjhz"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}]
]), yk = m("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), bk = m("trash", [
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), xk = m("tree-deciduous", [["path", {
	d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
	key: "oadzkq"
}], ["path", {
	d: "M12 19v3",
	key: "npa21l"
}]]), Sk = m("tree-palm", [
	["path", {
		d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",
		key: "foxbe7"
	}],
	["path", {
		d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",
		key: "18arnh"
	}],
	["path", {
		d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",
		key: "ywahnh"
	}],
	["path", {
		d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",
		key: "ft0feo"
	}]
]), Ck = m("tree-pine", [["path", {
	d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
	key: "cpyugq"
}], ["path", {
	d: "M12 22v-3",
	key: "kmzjlo"
}]]), wk = m("trees", [
	["path", {
		d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
		key: "1l6gj6"
	}],
	["path", {
		d: "M7 16v6",
		key: "1a82de"
	}],
	["path", {
		d: "M13 19v3",
		key: "13sx9i"
	}],
	["path", {
		d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
		key: "1sj9kv"
	}]
]), Tk = m("trending-down", [["path", {
	d: "M16 17h6v-6",
	key: "t6n2it"
}], ["path", {
	d: "m22 17-8.5-8.5-5 5L2 7",
	key: "x473p"
}]]), Ek = m("trending-up-down", [
	["path", {
		d: "M14.828 14.828 21 21",
		key: "ar5fw7"
	}],
	["path", {
		d: "M21 16v5h-5",
		key: "1ck2sf"
	}],
	["path", {
		d: "m21 3-9 9-4-4-6 6",
		key: "1h02xo"
	}],
	["path", {
		d: "M21 8V3h-5",
		key: "1qoq8a"
	}]
]), Dk = m("trending-up", [["path", {
	d: "M16 7h6v6",
	key: "box55l"
}], ["path", {
	d: "m22 7-8.5 8.5-5-5L2 17",
	key: "1t1m79"
}]]), Ok = m("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), kk = m("triangle-dashed", [
	["path", {
		d: "M10.17 4.193a2 2 0 0 1 3.666.013",
		key: "pltmmw"
	}],
	["path", {
		d: "M14 21h2",
		key: "v4qezv"
	}],
	["path", {
		d: "m15.874 7.743 1 1.732",
		key: "10m0iw"
	}],
	["path", {
		d: "m18.849 12.952 1 1.732",
		key: "zadnam"
	}],
	["path", {
		d: "M21.824 18.18a2 2 0 0 1-1.835 2.824",
		key: "fvwuk4"
	}],
	["path", {
		d: "M4.024 21a2 2 0 0 1-1.839-2.839",
		key: "1e1kah"
	}],
	["path", {
		d: "m5.136 12.952-1 1.732",
		key: "1u4ldi"
	}],
	["path", {
		d: "M8 21h2",
		key: "i9zjee"
	}],
	["path", {
		d: "m8.102 7.743-1 1.732",
		key: "1zzo4u"
	}]
]), Ak = m("triangle-right", [["path", {
	d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",
	key: "183wce"
}]]), jk = m("triangle", [["path", {
	d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
	key: "14u9p9"
}]]), Mk = m("trophy", [
	["path", {
		d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",
		key: "pwuv1l"
	}],
	["path", {
		d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",
		key: "1y54w1"
	}],
	["path", {
		d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",
		key: "e30mpu"
	}],
	["path", {
		d: "M4 22h16",
		key: "57wxv0"
	}],
	["path", {
		d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
		key: "1mhfuq"
	}],
	["path", {
		d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",
		key: "i0yafy"
	}]
]), Nk = m("truck-electric", [
	["path", {
		d: "M14 19V7a2 2 0 0 0-2-2H9",
		key: "15peso"
	}],
	["path", {
		d: "M15 19H9",
		key: "18q6dt"
	}],
	["path", {
		d: "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14",
		key: "1dkp3j"
	}],
	["path", {
		d: "M2 13v5a1 1 0 0 0 1 1h2",
		key: "pkmmzz"
	}],
	["path", {
		d: "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02",
		key: "1n26pd"
	}],
	["circle", {
		cx: "17",
		cy: "19",
		r: "2",
		key: "1nxcgd"
	}],
	["circle", {
		cx: "7",
		cy: "19",
		r: "2",
		key: "gzo7y7"
	}]
]), Pk = m("turkish-lira", [
	["path", {
		d: "M15 4 5 9",
		key: "14bkc9"
	}],
	["path", {
		d: "m15 8.5-10 5",
		key: "1grtsx"
	}],
	["path", {
		d: "M18 12a9 9 0 0 1-9 9V3",
		key: "1sst7f"
	}]
]), Fk = m("truck", [
	["path", {
		d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
		key: "wrbu53"
	}],
	["path", {
		d: "M15 18H9",
		key: "1lyqi6"
	}],
	["path", {
		d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
		key: "lysw3i"
	}],
	["circle", {
		cx: "17",
		cy: "18",
		r: "2",
		key: "332jqn"
	}],
	["circle", {
		cx: "7",
		cy: "18",
		r: "2",
		key: "19iecd"
	}]
]), Ik = m("turntable", [
	["path", {
		d: "M10 12.01h.01",
		key: "7rp0yl"
	}],
	["path", {
		d: "M18 8v4a8 8 0 0 1-1.07 4",
		key: "1st48v"
	}],
	["circle", {
		cx: "10",
		cy: "12",
		r: "4",
		key: "19levz"
	}],
	["rect", {
		x: "2",
		y: "4",
		width: "20",
		height: "16",
		rx: "2",
		key: "izxlao"
	}]
]), Lk = m("turtle", [
	["path", {
		d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
		key: "1lbbv7"
	}],
	["path", {
		d: "M4.82 7.9 8 10",
		key: "m9wose"
	}],
	["path", {
		d: "M15.18 7.9 12 10",
		key: "p8dp2u"
	}],
	["path", {
		d: "M16.93 10H20a2 2 0 0 1 0 4H2",
		key: "12nsm7"
	}]
]), Rk = m("tv-minimal-play", [
	["path", {
		d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",
		key: "vbtd3f"
	}],
	["path", {
		d: "M7 21h10",
		key: "1b0cd5"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}]
]), zk = m("tv-minimal", [["path", {
	d: "M7 21h10",
	key: "1b0cd5"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "3",
	rx: "2",
	key: "48i651"
}]]), Bk = m("tv", [["path", {
	d: "m17 2-5 5-5-5",
	key: "16satq"
}], ["rect", {
	width: "20",
	height: "15",
	x: "2",
	y: "7",
	rx: "2",
	key: "1e6viu"
}]]), Vk = m("type-outline", [["path", {
	d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",
	key: "1reda3"
}]]), Hk = m("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]), Uk = m("umbrella-off", [
	["path", {
		d: "M12 13v7a2 2 0 0 0 4 0",
		key: "rpgb42"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51",
		key: "yawknk"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10",
		key: "5sfalc"
	}]
]), Wk = m("umbrella", [
	["path", {
		d: "M12 13v7a2 2 0 0 0 4 0",
		key: "rpgb42"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",
		key: "124nyo"
	}]
]), Gk = m("underline", [["path", {
	d: "M6 4v6a6 6 0 0 0 12 0V4",
	key: "9kb039"
}], ["line", {
	x1: "4",
	x2: "20",
	y1: "20",
	y2: "20",
	key: "nun2al"
}]]), Kk = m("undo-dot", [
	["path", {
		d: "M21 17a9 9 0 0 0-15-6.7L3 13",
		key: "8mp6z9"
	}],
	["path", {
		d: "M3 7v6h6",
		key: "1v2h90"
	}],
	["circle", {
		cx: "12",
		cy: "17",
		r: "1",
		key: "1ixnty"
	}]
]), qk = m("undo-2", [["path", {
	d: "M9 14 4 9l5-5",
	key: "102s5s"
}], ["path", {
	d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
	key: "f3b9sd"
}]]), Jk = m("undo", [["path", {
	d: "M3 7v6h6",
	key: "1v2h90"
}], ["path", {
	d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",
	key: "1r6uu6"
}]]), Yk = m("unfold-horizontal", [
	["path", {
		d: "M16 12h6",
		key: "15xry1"
	}],
	["path", {
		d: "M8 12H2",
		key: "1jqql6"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 8v2",
		key: "1woqiv"
	}],
	["path", {
		d: "M12 14v2",
		key: "8jcxud"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m19 15 3-3-3-3",
		key: "wjy7rq"
	}],
	["path", {
		d: "m5 9-3 3 3 3",
		key: "j64kie"
	}]
]), Xk = m("unfold-vertical", [
	["path", {
		d: "M12 22v-6",
		key: "6o8u61"
	}],
	["path", {
		d: "M12 8V2",
		key: "1wkif3"
	}],
	["path", {
		d: "M4 12H2",
		key: "rhcxmi"
	}],
	["path", {
		d: "M10 12H8",
		key: "s88cx1"
	}],
	["path", {
		d: "M16 12h-2",
		key: "10asgb"
	}],
	["path", {
		d: "M22 12h-2",
		key: "14jgyd"
	}],
	["path", {
		d: "m15 19-3 3-3-3",
		key: "11eu04"
	}],
	["path", {
		d: "m15 5-3-3-3 3",
		key: "itvq4r"
	}]
]), Zk = m("ungroup", [["rect", {
	x: "11",
	y: "14",
	width: "10",
	height: "7",
	rx: "2",
	key: "nfm8rk"
}], ["rect", {
	x: "3",
	y: "3",
	width: "10",
	height: "7",
	rx: "2",
	key: "1ljebb"
}]]), Qk = m("university", [
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M18 12h.01",
		key: "yjnet6"
	}],
	["path", {
		d: "M18 16h.01",
		key: "plv8zi"
	}],
	["path", {
		d: "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z",
		key: "1ogmi3"
	}],
	["path", {
		d: "M6 12h.01",
		key: "c2rlol"
	}],
	["path", {
		d: "M6 16h.01",
		key: "1pmjb7"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "2",
		key: "1yojzk"
	}]
]), $k = m("unlink-2", [["path", {
	d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",
	key: "1re2ne"
}]]), eA = m("unlink", [
	["path", {
		d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
		key: "yqzxt4"
	}],
	["path", {
		d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
		key: "4qinb0"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "2",
		y2: "5",
		key: "1041cp"
	}],
	["line", {
		x1: "2",
		x2: "5",
		y1: "8",
		y2: "8",
		key: "14m1p5"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "19",
		y2: "22",
		key: "rzdirn"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "16",
		y2: "16",
		key: "ox905f"
	}]
]), tA = m("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]), nA = m("unplug", [
	["path", {
		d: "m19 5 3-3",
		key: "yk6iyv"
	}],
	["path", {
		d: "m2 22 3-3",
		key: "19mgm9"
	}],
	["path", {
		d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
		key: "goz73y"
	}],
	["path", {
		d: "M7.5 13.5 10 11",
		key: "7xgeeb"
	}],
	["path", {
		d: "M10.5 16.5 13 14",
		key: "10btkg"
	}],
	["path", {
		d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",
		key: "1snsnr"
	}]
]), rA = m("usb", [
	["circle", {
		cx: "10",
		cy: "7",
		r: "1",
		key: "dypaad"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "1",
		key: "22iqad"
	}],
	["path", {
		d: "M4.7 19.3 19 5",
		key: "1enqfc"
	}],
	["path", {
		d: "m21 3-3 1 2 2Z",
		key: "d3ov82"
	}],
	["path", {
		d: "M9.26 7.68 5 12l2 5",
		key: "1esawj"
	}],
	["path", {
		d: "m10 14 5 2 3.5-3.5",
		key: "v8oal5"
	}],
	["path", {
		d: "m18 12 1-1 1 1-1 1Z",
		key: "1bh22v"
	}]
]), iA = m("user-check", [
	["path", {
		d: "m16 11 2 2 4-4",
		key: "9rsbq5"
	}],
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]), aA = m("user-cog", [
	["path", {
		d: "M10 15H6a4 4 0 0 0-4 4v2",
		key: "1nfge6"
	}],
	["path", {
		d: "m14.305 16.53.923-.382",
		key: "1itpsq"
	}],
	["path", {
		d: "m15.228 13.852-.923-.383",
		key: "eplpkm"
	}],
	["path", {
		d: "m16.852 12.228-.383-.923",
		key: "13v3q0"
	}],
	["path", {
		d: "m16.852 17.772-.383.924",
		key: "1i8mnm"
	}],
	["path", {
		d: "m19.148 12.228.383-.923",
		key: "1q8j1v"
	}],
	["path", {
		d: "m19.53 18.696-.382-.924",
		key: "vk1qj3"
	}],
	["path", {
		d: "m20.772 13.852.924-.383",
		key: "n880s0"
	}],
	["path", {
		d: "m20.772 16.148.924.383",
		key: "1g6xey"
	}],
	["circle", {
		cx: "18",
		cy: "15",
		r: "3",
		key: "gjjjvw"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]), oA = m("user-key", [
	["path", {
		d: "M20 11v6",
		key: "d77pzp"
	}],
	["path", {
		d: "M20 13h2",
		key: "16rner"
	}],
	["path", {
		d: "M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578",
		key: "1yxgtw"
	}],
	["circle", {
		cx: "10",
		cy: "7",
		r: "4",
		key: "e45bow"
	}],
	["circle", {
		cx: "20",
		cy: "19",
		r: "2",
		key: "1obnsp"
	}]
]), sA = m("user-lock", [
	["path", {
		d: "M19 16v-2a2 2 0 0 0-4 0v2",
		key: "17sujf"
	}],
	["path", {
		d: "M9.5 15H7a4 4 0 0 0-4 4v2",
		key: "9it25y"
	}],
	["circle", {
		cx: "10",
		cy: "7",
		r: "4",
		key: "e45bow"
	}],
	["rect", {
		x: "13",
		y: "16",
		width: "8",
		height: "5",
		rx: ".899",
		key: "ur80nz"
	}]
]), cA = m("user-minus", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "11",
		y2: "11",
		key: "1shjgl"
	}]
]), lA = m("user-pen", [
	["path", {
		d: "M11.5 15H7a4 4 0 0 0-4 4v2",
		key: "15lzij"
	}],
	["path", {
		d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
		key: "1817ys"
	}],
	["circle", {
		cx: "10",
		cy: "7",
		r: "4",
		key: "e45bow"
	}]
]), uA = m("user-plus", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["line", {
		x1: "19",
		x2: "19",
		y1: "8",
		y2: "14",
		key: "1bvyxn"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "11",
		y2: "11",
		key: "1shjgl"
	}]
]), dA = m("user-round-arrow-left", [
	["path", {
		d: "m19 16-3 3",
		key: "lp3y45"
	}],
	["path", {
		d: "M2 21a8 8 0 0 1 12.664-6.5",
		key: "1ap0vn"
	}],
	["path", {
		d: "M22 19h-6l3 3",
		key: "13fjle"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}]
]), fA = m("user-round-cog", [
	["path", {
		d: "m14.305 19.53.923-.382",
		key: "3m78fa"
	}],
	["path", {
		d: "m15.228 16.852-.923-.383",
		key: "npixar"
	}],
	["path", {
		d: "m16.852 15.228-.383-.923",
		key: "5xggr7"
	}],
	["path", {
		d: "m16.852 20.772-.383.924",
		key: "dpfhf9"
	}],
	["path", {
		d: "m19.148 15.228.383-.923",
		key: "1reyyz"
	}],
	["path", {
		d: "m19.53 21.696-.382-.924",
		key: "1goivc"
	}],
	["path", {
		d: "M2 21a8 8 0 0 1 10.434-7.62",
		key: "1yezr2"
	}],
	["path", {
		d: "m20.772 16.852.924-.383",
		key: "htqkph"
	}],
	["path", {
		d: "m20.772 19.148.924.383",
		key: "9w9pjp"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}]
]), pA = m("user-round-check", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}]
]), mA = m("user-round-key", [
	["path", {
		d: "M19 11v6",
		key: "rcqigv"
	}],
	["path", {
		d: "M19 13h2",
		key: "1gch44"
	}],
	["path", {
		d: "M2 21a8 8 0 0 1 12.868-6.349",
		key: "1lryzn"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["circle", {
		cx: "19",
		cy: "19",
		r: "2",
		key: "17f5cg"
	}]
]), hA = m("user-round-minus", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}]
]), gA = m("user-round-pen", [
	["path", {
		d: "M2 21a8 8 0 0 1 10.821-7.487",
		key: "1c8h7z"
	}],
	["path", {
		d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
		key: "1817ys"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}]
]), _A = m("user-round-plus", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}]
]), vA = m("user-round-search", [
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M2 21a8 8 0 0 1 10.434-7.62",
		key: "1yezr2"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["path", {
		d: "m22 22-1.9-1.9",
		key: "1e5ubv"
	}]
]), yA = m("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]), bA = m("user-round-x", [
	["path", {
		d: "M2 21a8 8 0 0 1 11.873-7",
		key: "74fkxq"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "m17 17 5 5",
		key: "p7ous7"
	}],
	["path", {
		d: "m22 17-5 5",
		key: "gqnmv0"
	}]
]), xA = m("user-search", [
	["circle", {
		cx: "10",
		cy: "7",
		r: "4",
		key: "e45bow"
	}],
	["path", {
		d: "M10.3 15H7a4 4 0 0 0-4 4v2",
		key: "3bnktk"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "3",
		key: "18b49y"
	}],
	["path", {
		d: "m21 21-1.9-1.9",
		key: "1g2n9r"
	}]
]), SA = m("user-shield", [
	["path", {
		d: "M10 15H6a4 4 0 0 0-4 4v2",
		key: "1nfge6"
	}],
	["path", {
		d: "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z",
		key: "16j3tf"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]), CA = m("user-star", [
	["path", {
		d: "M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z",
		key: "1m8t9f"
	}],
	["path", {
		d: "M8 15H7a4 4 0 0 0-4 4v2",
		key: "l9tmp8"
	}],
	["circle", {
		cx: "10",
		cy: "7",
		r: "4",
		key: "e45bow"
	}]
]), wA = m("user-x", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["line", {
		x1: "17",
		x2: "22",
		y1: "8",
		y2: "13",
		key: "3nzzx3"
	}],
	["line", {
		x1: "22",
		x2: "17",
		y1: "8",
		y2: "13",
		key: "1swrse"
	}]
]), TA = m("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]), EA = m("users-round", [
	["path", {
		d: "M18 21a8 8 0 0 0-16 0",
		key: "3ypg7q"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
		key: "10s06x"
	}]
]), DA = m("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]), OA = m("utensils-crossed", [
	["path", {
		d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
		key: "n7qcjb"
	}],
	["path", {
		d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
		key: "d0u48b"
	}],
	["path", {
		d: "m2.1 21.8 6.4-6.3",
		key: "yn04lh"
	}],
	["path", {
		d: "m19 5-7 7",
		key: "194lzd"
	}]
]), kA = m("utensils", [
	["path", {
		d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
		key: "cjf0a3"
	}],
	["path", {
		d: "M7 2v20",
		key: "1473qp"
	}],
	["path", {
		d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
		key: "j28e5"
	}]
]), AA = m("utility-pole", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "M2 5h20",
		key: "1fs1ex"
	}],
	["path", {
		d: "M3 3v2",
		key: "9imdir"
	}],
	["path", {
		d: "M7 3v2",
		key: "n0os7"
	}],
	["path", {
		d: "M17 3v2",
		key: "1l2re6"
	}],
	["path", {
		d: "M21 3v2",
		key: "1duuac"
	}],
	["path", {
		d: "m19 5-7 7-7-7",
		key: "133zxf"
	}]
]), jA = m("van", [
	["path", {
		d: "M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3",
		key: "k3s650"
	}],
	["path", {
		d: "M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2",
		key: "fnd93u"
	}],
	["path", {
		d: "M9 18h5",
		key: "lrx6i"
	}],
	["circle", {
		cx: "16",
		cy: "18",
		r: "2",
		key: "1v4tcr"
	}],
	["circle", {
		cx: "7",
		cy: "18",
		r: "2",
		key: "19iecd"
	}]
]), MA = m("variable", [
	["path", {
		d: "M8 21s-4-3-4-9 4-9 4-9",
		key: "uto9ud"
	}],
	["path", {
		d: "M16 3s4 3 4 9-4 9-4 9",
		key: "4w2vsq"
	}],
	["line", {
		x1: "15",
		x2: "9",
		y1: "9",
		y2: "15",
		key: "f7djnv"
	}],
	["line", {
		x1: "9",
		x2: "15",
		y1: "9",
		y2: "15",
		key: "1shsy8"
	}]
]), NA = m("vault", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["circle", {
		cx: "7.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "kqv944"
	}],
	["path", {
		d: "m7.9 7.9 2.7 2.7",
		key: "hpeyl3"
	}],
	["circle", {
		cx: "16.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "w0ekpg"
	}],
	["path", {
		d: "m13.4 10.6 2.7-2.7",
		key: "264c1n"
	}],
	["circle", {
		cx: "7.5",
		cy: "16.5",
		r: ".5",
		fill: "currentColor",
		key: "nkw3mc"
	}],
	["path", {
		d: "m7.9 16.1 2.7-2.7",
		key: "p81g5e"
	}],
	["circle", {
		cx: "16.5",
		cy: "16.5",
		r: ".5",
		fill: "currentColor",
		key: "fubopw"
	}],
	["path", {
		d: "m13.4 13.4 2.7 2.7",
		key: "abhel3"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), PA = m("vector-square", [
	["path", {
		d: "M19.5 7a24 24 0 0 1 0 10",
		key: "8n60xe"
	}],
	["path", {
		d: "M4.5 7a24 24 0 0 0 0 10",
		key: "2lmadr"
	}],
	["path", {
		d: "M7 19.5a24 24 0 0 0 10 0",
		key: "1q94o2"
	}],
	["path", {
		d: "M7 4.5a24 24 0 0 1 10 0",
		key: "2z8ypa"
	}],
	["rect", {
		x: "17",
		y: "17",
		width: "5",
		height: "5",
		rx: "1",
		key: "1ac74s"
	}],
	["rect", {
		x: "17",
		y: "2",
		width: "5",
		height: "5",
		rx: "1",
		key: "1e7h5j"
	}],
	["rect", {
		x: "2",
		y: "17",
		width: "5",
		height: "5",
		rx: "1",
		key: "1t4eah"
	}],
	["rect", {
		x: "2",
		y: "2",
		width: "5",
		height: "5",
		rx: "1",
		key: "940dhs"
	}]
]), FA = m("vegan", [
	["path", {
		d: "M16 8q6 0 6-6-6 0-6 6",
		key: "qsyyc4"
	}],
	["path", {
		d: "M17.41 3.59a10 10 0 1 0 3 3",
		key: "41m9h7"
	}],
	["path", {
		d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",
		key: "qiv7li"
	}]
]), IA = m("venetian-mask", [
	["path", {
		d: "M18 11c-1.5 0-2.5.5-3 2",
		key: "1fod00"
	}],
	["path", {
		d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",
		key: "d70hit"
	}],
	["path", {
		d: "M6 11c1.5 0 2.5.5 3 2",
		key: "136fht"
	}]
]), LA = m("venus-and-mars", [
	["path", {
		d: "M10 20h4",
		key: "ni2waw"
	}],
	["path", {
		d: "M12 16v6",
		key: "c8a4gj"
	}],
	["path", {
		d: "M17 2h4v4",
		key: "vhe59"
	}],
	["path", {
		d: "m21 2-5.46 5.46",
		key: "19kypf"
	}],
	["circle", {
		cx: "12",
		cy: "11",
		r: "5",
		key: "16gxyc"
	}]
]), RA = m("vibrate-off", [
	["path", {
		d: "m2 8 2 2-2 2 2 2-2 2",
		key: "sv1b1"
	}],
	["path", {
		d: "m22 8-2 2 2 2-2 2 2 2",
		key: "101i4y"
	}],
	["path", {
		d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",
		key: "1hbad5"
	}],
	["path", {
		d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34",
		key: "1x5tf0"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), zA = m("venus", [
	["path", {
		d: "M12 15v7",
		key: "t2xh3l"
	}],
	["path", {
		d: "M9 19h6",
		key: "456am0"
	}],
	["circle", {
		cx: "12",
		cy: "9",
		r: "6",
		key: "1nw4tq"
	}]
]), BA = m("vibrate", [
	["path", {
		d: "m2 8 2 2-2 2 2 2-2 2",
		key: "sv1b1"
	}],
	["path", {
		d: "m22 8-2 2 2 2-2 2 2 2",
		key: "101i4y"
	}],
	["rect", {
		width: "8",
		height: "14",
		x: "8",
		y: "5",
		rx: "1",
		key: "1oyrl4"
	}]
]), VA = m("video-off", [
	["path", {
		d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",
		key: "w8jjjt"
	}],
	["path", {
		d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",
		key: "1xawa7"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), HA = m("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]), UA = m("videotape", [
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}],
	["path", {
		d: "M2 8h20",
		key: "d11cs7"
	}],
	["circle", {
		cx: "8",
		cy: "14",
		r: "2",
		key: "1k2qr5"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["circle", {
		cx: "16",
		cy: "14",
		r: "2",
		key: "14k7lr"
	}]
]), WA = m("view", [
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",
		key: "mrq65r"
	}],
	["path", {
		d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",
		key: "be3xqs"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["path", {
		d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
		key: "11ak4c"
	}]
]), GA = m("voicemail", [
	["circle", {
		cx: "6",
		cy: "12",
		r: "4",
		key: "1ehtga"
	}],
	["circle", {
		cx: "18",
		cy: "12",
		r: "4",
		key: "4vafl8"
	}],
	["line", {
		x1: "6",
		x2: "18",
		y1: "16",
		y2: "16",
		key: "pmt8us"
	}]
]), KA = m("volleyball", [
	["path", {
		d: "M11 7a16 16 20 0 1 10.98 4.362",
		key: "1mmfx7"
	}],
	["path", {
		d: "M12 12a13 13 0 0 1-8.66 5",
		key: "14sm5y"
	}],
	["path", {
		d: "M16.83 13.634a16 16 0 0 1-9.267 7.328",
		key: "j0eyj5"
	}],
	["path", {
		d: "M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10",
		key: "qaetsw"
	}],
	["path", {
		d: "M8.17 15.366a16 16 0 0 1-1.713-11.69",
		key: "17ewdd"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), qA = m("volume-1", [["path", {
	d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
	key: "uqj9uw"
}], ["path", {
	d: "M16 9a5 5 0 0 1 0 6",
	key: "1q6k2b"
}]]), JA = m("volume-2", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["path", {
		d: "M16 9a5 5 0 0 1 0 6",
		key: "1q6k2b"
	}],
	["path", {
		d: "M19.364 18.364a9 9 0 0 0 0-12.728",
		key: "ijwkga"
	}]
]), YA = m("volume-off", [
	["path", {
		d: "M16 9a5 5 0 0 1 .95 2.293",
		key: "1fgyg8"
	}],
	["path", {
		d: "M19.364 5.636a9 9 0 0 1 1.889 9.96",
		key: "l3zxae"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",
		key: "1gbwow"
	}],
	["path", {
		d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686",
		key: "s2je0y"
	}]
]), XA = m("volume-x", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "9",
		y2: "15",
		key: "1ewh16"
	}],
	["line", {
		x1: "16",
		x2: "22",
		y1: "9",
		y2: "15",
		key: "5ykzw1"
	}]
]), ZA = m("volume", [["path", {
	d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
	key: "uqj9uw"
}]]), QA = m("wallet-cards", [
	["path", {
		d: "M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21",
		key: "1vwh6y"
	}],
	["path", {
		d: "M3 7h18",
		key: "1uiuf2"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), $A = m("vote", [
	["path", {
		d: "m9 12 2 2 4-4",
		key: "dzmm74"
	}],
	["path", {
		d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",
		key: "1ezoue"
	}],
	["path", {
		d: "M22 19H2",
		key: "nuriw5"
	}]
]), ej = m("wallet-minimal", [["path", {
	d: "M17 14h.01",
	key: "7oqj8z"
}], ["path", {
	d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
	key: "u1rqew"
}]]), tj = m("wallet", [["path", {
	d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
	key: "18etb6"
}], ["path", {
	d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
	key: "xoc0q4"
}]]), nj = m("wallpaper", [
	["path", {
		d: "M12 17v4",
		key: "1riwvh"
	}],
	["path", {
		d: "M8 21h8",
		key: "1ev6f3"
	}],
	["path", {
		d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15",
		key: "1sl52q"
	}],
	["circle", {
		cx: "8",
		cy: "9",
		r: "2",
		key: "gjzl9d"
	}],
	["rect", {
		x: "2",
		y: "3",
		width: "20",
		height: "14",
		rx: "2",
		key: "x3v2xh"
	}]
]), rj = m("wand-sparkles", [
	["path", {
		d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
		key: "ul74o6"
	}],
	["path", {
		d: "m14 7 3 3",
		key: "1r5n42"
	}],
	["path", {
		d: "M5 6v4",
		key: "ilb8ba"
	}],
	["path", {
		d: "M19 14v4",
		key: "blhpug"
	}],
	["path", {
		d: "M10 2v2",
		key: "7u0qdc"
	}],
	["path", {
		d: "M7 8H3",
		key: "zfb6yr"
	}],
	["path", {
		d: "M21 16h-4",
		key: "1cnmox"
	}],
	["path", {
		d: "M11 3H9",
		key: "1obp7u"
	}]
]), ij = m("wand", [
	["path", {
		d: "M15 4V2",
		key: "z1p9b7"
	}],
	["path", {
		d: "M15 16v-2",
		key: "px0unx"
	}],
	["path", {
		d: "M8 9h2",
		key: "1g203m"
	}],
	["path", {
		d: "M20 9h2",
		key: "19tzq7"
	}],
	["path", {
		d: "M17.8 11.8 19 13",
		key: "yihg8r"
	}],
	["path", {
		d: "M15 9h.01",
		key: "x1ddxp"
	}],
	["path", {
		d: "M17.8 6.2 19 5",
		key: "fd4us0"
	}],
	["path", {
		d: "m3 21 9-9",
		key: "1jfql5"
	}],
	["path", {
		d: "M12.2 6.2 11 5",
		key: "i3da3b"
	}]
]), aj = m("warehouse", [
	["path", {
		d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11",
		key: "pb2vm6"
	}],
	["path", {
		d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z",
		key: "doq5xv"
	}],
	["path", {
		d: "M6 13h12",
		key: "yf64js"
	}],
	["path", {
		d: "M6 17h12",
		key: "1jwigz"
	}]
]), oj = m("washing-machine", [
	["path", {
		d: "M3 6h3",
		key: "155dbl"
	}],
	["path", {
		d: "M17 6h.01",
		key: "e2y6kg"
	}],
	["rect", {
		width: "18",
		height: "20",
		x: "3",
		y: "2",
		rx: "2",
		key: "od3kk9"
	}],
	["circle", {
		cx: "12",
		cy: "13",
		r: "5",
		key: "nlbqau"
	}],
	["path", {
		d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",
		key: "17lach"
	}]
]), sj = m("watch", [
	["path", {
		d: "M12 10v2.2l1.6 1",
		key: "n3r21l"
	}],
	["path", {
		d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",
		key: "18k57s"
	}],
	["path", {
		d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",
		key: "16ny36"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}]
]), cj = m("waves-arrow-up", [
	["path", {
		d: "M12 2v8",
		key: "1q4o3n"
	}],
	["path", {
		d: "M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
		key: "1p9f19"
	}],
	["path", {
		d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
		key: "vbxynw"
	}],
	["path", {
		d: "m8 6 4-4 4 4",
		key: "ybng9g"
	}]
]), lj = m("waves-arrow-down", [
	["path", {
		d: "M12 10L12 2",
		key: "jvb0aw"
	}],
	["path", {
		d: "M16 6L12 10L8 6",
		key: "9j6vje"
	}],
	["path", {
		d: "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15",
		key: "s2zepw"
	}],
	["path", {
		d: "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21",
		key: "u68omc"
	}]
]), $ = m("waves-horizontal", [
	["path", {
		d: "M2 12q2.5 2 5 0t5 0 5 0 5 0",
		key: "8ddzzs"
	}],
	["path", {
		d: "M2 19q2.5 2 5 0t5 0 5 0 5 0",
		key: "1wj4st"
	}],
	["path", {
		d: "M2 5q2.5 2 5 0t5 0 5 0 5 0",
		key: "69x50u"
	}]
]), uj = m("waves-ladder", [
	["path", {
		d: "M19 5a2 2 0 0 0-2 2v11",
		key: "s41o68"
	}],
	["path", {
		d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
		key: "rd2r6e"
	}],
	["path", {
		d: "M7 13h10",
		key: "1rwob1"
	}],
	["path", {
		d: "M7 9h10",
		key: "12czzb"
	}],
	["path", {
		d: "M9 5a2 2 0 0 0-2 2v11",
		key: "x0q4gh"
	}]
]), dj = m("waves-vertical", [
	["path", {
		d: "M12 2q2 2.5 0 5t0 5 0 5 0 5",
		key: "13jdbg"
	}],
	["path", {
		d: "M19 2q2 2.5 0 5t0 5 0 5 0 5",
		key: "1ozhzu"
	}],
	["path", {
		d: "M5 2q2 2.5 0 5t0 5 0 5 0 5",
		key: "1bi6v5"
	}]
]), fj = m("waypoints", [
	["path", {
		d: "m10.586 5.414-5.172 5.172",
		key: "4mc350"
	}],
	["path", {
		d: "m18.586 13.414-5.172 5.172",
		key: "8c96vv"
	}],
	["path", {
		d: "M6 12h12",
		key: "8npq4p"
	}],
	["circle", {
		cx: "12",
		cy: "20",
		r: "2",
		key: "144qzu"
	}],
	["circle", {
		cx: "12",
		cy: "4",
		r: "2",
		key: "muu5ef"
	}],
	["circle", {
		cx: "20",
		cy: "12",
		r: "2",
		key: "1xzzfp"
	}],
	["circle", {
		cx: "4",
		cy: "12",
		r: "2",
		key: "1hvhnz"
	}]
]), pj = m("webcam-off", [
	["path", {
		d: "M12 22v-4",
		key: "1utk9m"
	}],
	["path", {
		d: "M12.754 7.096a3 3 0 0 1 2.15 2.15",
		key: "1v0qsm"
	}],
	["path", {
		d: "M12.863 12.873a3 3 0 0 1-3.736-3.735",
		key: "13aqxl"
	}],
	["path", {
		d: "M16.566 16.57A8 8 0 0 1 5.43 5.433",
		key: "1hliph"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M7 22h10",
		key: "10w4w3"
	}],
	["path", {
		d: "M8.478 2.817a8 8 0 0 1 10.705 10.705",
		key: "r097k8"
	}]
]), mj = m("webcam", [
	["circle", {
		cx: "12",
		cy: "10",
		r: "8",
		key: "1gshiw"
	}],
	["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}],
	["path", {
		d: "M7 22h10",
		key: "10w4w3"
	}],
	["path", {
		d: "M12 22v-4",
		key: "1utk9m"
	}]
]), hj = m("webhook", [
	["path", {
		d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
		key: "q3hayz"
	}],
	["path", {
		d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
		key: "1go1hn"
	}],
	["path", {
		d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
		key: "qlwsc0"
	}]
]), gj = m("webhook-off", [
	["path", {
		d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",
		key: "1tvl6x"
	}],
	["path", {
		d: "M9 3.4a4 4 0 0 1 6.52.66",
		key: "q04jfq"
	}],
	["path", {
		d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",
		key: "azowf0"
	}],
	["path", {
		d: "M20.3 20.3a4 4 0 0 1-2.3.7",
		key: "5joiws"
	}],
	["path", {
		d: "M18.6 13a4 4 0 0 1 3.357 3.414",
		key: "cangb8"
	}],
	["path", {
		d: "m12 6 .6 1",
		key: "tpjl1n"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), _j = m("weight-tilde", [
	["path", {
		d: "M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z",
		key: "1wl739"
	}],
	["path", {
		d: "M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0",
		key: "1egezo"
	}],
	["circle", {
		cx: "12",
		cy: "5",
		r: "3",
		key: "rqqgnr"
	}]
]), vj = m("weight", [["circle", {
	cx: "12",
	cy: "5",
	r: "3",
	key: "rqqgnr"
}], ["path", {
	d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
	key: "56o5sh"
}]]), yj = m("wheat-off", [
	["path", {
		d: "m2 22 10-10",
		key: "28ilpk"
	}],
	["path", {
		d: "m16 8-1.17 1.17",
		key: "1qqm82"
	}],
	["path", {
		d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
		key: "1rdhi6"
	}],
	["path", {
		d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",
		key: "4wz8re"
	}],
	["path", {
		d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",
		key: "rves66"
	}],
	["path", {
		d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",
		key: "19rau1"
	}],
	["path", {
		d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
		key: "tc8ph9"
	}],
	["path", {
		d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
		key: "ak46r"
	}],
	["path", {
		d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
		key: "1tw520"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), bj = m("whole-word", [
	["circle", {
		cx: "7",
		cy: "12",
		r: "3",
		key: "12clwm"
	}],
	["path", {
		d: "M10 9v6",
		key: "17i7lo"
	}],
	["circle", {
		cx: "17",
		cy: "12",
		r: "3",
		key: "gl7c2s"
	}],
	["path", {
		d: "M14 7v8",
		key: "dl84cr"
	}],
	["path", {
		d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",
		key: "lt2kga"
	}]
]), xj = m("wheat", [
	["path", {
		d: "M2 22 16 8",
		key: "60hf96"
	}],
	["path", {
		d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
		key: "1rdhi6"
	}],
	["path", {
		d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
		key: "1sdzmb"
	}],
	["path", {
		d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
		key: "eoatbi"
	}],
	["path", {
		d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",
		key: "19rau1"
	}],
	["path", {
		d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
		key: "tc8ph9"
	}],
	["path", {
		d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
		key: "2m8kc5"
	}],
	["path", {
		d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
		key: "vex3ng"
	}]
]), Sj = m("wifi-cog", [
	["path", {
		d: "m14.305 19.53.923-.382",
		key: "3m78fa"
	}],
	["path", {
		d: "m15.228 16.852-.923-.383",
		key: "npixar"
	}],
	["path", {
		d: "m16.852 15.228-.383-.923",
		key: "5xggr7"
	}],
	["path", {
		d: "m16.852 20.772-.383.924",
		key: "dpfhf9"
	}],
	["path", {
		d: "m19.148 15.228.383-.923",
		key: "1reyyz"
	}],
	["path", {
		d: "m19.53 21.696-.382-.924",
		key: "1goivc"
	}],
	["path", {
		d: "M2 7.82a15 15 0 0 1 20 0",
		key: "1ovjuk"
	}],
	["path", {
		d: "m20.772 16.852.924-.383",
		key: "htqkph"
	}],
	["path", {
		d: "m20.772 19.148.924.383",
		key: "9w9pjp"
	}],
	["path", {
		d: "M5 11.858a10 10 0 0 1 11.5-1.785",
		key: "3sn16i"
	}],
	["path", {
		d: "M8.5 15.429a5 5 0 0 1 2.413-1.31",
		key: "1pxovh"
	}],
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}]
]), Cj = m("wifi-high", [
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M5 12.859a10 10 0 0 1 14 0",
		key: "1x1e6c"
	}],
	["path", {
		d: "M8.5 16.429a5 5 0 0 1 7 0",
		key: "1bycff"
	}]
]), wj = m("wifi-low", [["path", {
	d: "M12 20h.01",
	key: "zekei9"
}], ["path", {
	d: "M8.5 16.429a5 5 0 0 1 7 0",
	key: "1bycff"
}]]), Tj = m("wifi-off", [
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M8.5 16.429a5 5 0 0 1 7 0",
		key: "1bycff"
	}],
	["path", {
		d: "M5 12.859a10 10 0 0 1 5.17-2.69",
		key: "1dl1wf"
	}],
	["path", {
		d: "M19 12.859a10 10 0 0 0-2.007-1.523",
		key: "4k23kn"
	}],
	["path", {
		d: "M2 8.82a15 15 0 0 1 4.177-2.643",
		key: "1grhjp"
	}],
	["path", {
		d: "M22 8.82a15 15 0 0 0-11.288-3.764",
		key: "z3jwby"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Ej = m("wifi-pen", [
	["path", {
		d: "M2 8.82a15 15 0 0 1 20 0",
		key: "dnpr2z"
	}],
	["path", {
		d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
		key: "1817ys"
	}],
	["path", {
		d: "M5 12.859a10 10 0 0 1 10.5-2.222",
		key: "rpb7oy"
	}],
	["path", {
		d: "M8.5 16.429a5 5 0 0 1 3-1.406",
		key: "r8bmzl"
	}]
]), Dj = m("wifi-sync", [
	["path", {
		d: "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5",
		key: "1immaq"
	}],
	["path", {
		d: "M11.965 14.105h4",
		key: "uejny8"
	}],
	["path", {
		d: "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5",
		key: "1i3a7e"
	}],
	["path", {
		d: "M2 8.82a15 15 0 0 1 20 0",
		key: "dnpr2z"
	}],
	["path", {
		d: "M21.965 22.105v-4",
		key: "1ku6vx"
	}],
	["path", {
		d: "M5 12.86a10 10 0 0 1 3-2.032",
		key: "pemdtu"
	}],
	["path", {
		d: "M8.5 16.429h.01",
		key: "2bm739"
	}]
]), Oj = m("wifi-zero", [["path", {
	d: "M12 20h.01",
	key: "zekei9"
}]]), kj = m("wifi", [
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M2 8.82a15 15 0 0 1 20 0",
		key: "dnpr2z"
	}],
	["path", {
		d: "M5 12.859a10 10 0 0 1 14 0",
		key: "1x1e6c"
	}],
	["path", {
		d: "M8.5 16.429a5 5 0 0 1 7 0",
		key: "1bycff"
	}]
]), Aj = m("wind-arrow-down", [
	["path", {
		d: "M10 2v8",
		key: "d4bbey"
	}],
	["path", {
		d: "M12.8 21.6A2 2 0 1 0 14 18H2",
		key: "19kp1d"
	}],
	["path", {
		d: "M17.5 10a2.5 2.5 0 1 1 2 4H2",
		key: "19kpjc"
	}],
	["path", {
		d: "m6 6 4 4 4-4",
		key: "k13n16"
	}]
]), jj = m("wind", [
	["path", {
		d: "M12.8 19.6A2 2 0 1 0 14 16H2",
		key: "148xed"
	}],
	["path", {
		d: "M17.5 8a2.5 2.5 0 1 1 2 4H2",
		key: "1u4tom"
	}],
	["path", {
		d: "M9.8 4.4A2 2 0 1 1 11 8H2",
		key: "75valh"
	}]
]), Mj = m("wine-off", [
	["path", {
		d: "M8 22h8",
		key: "rmew8v"
	}],
	["path", {
		d: "M7 10h3m7 0h-1.343",
		key: "v48bem"
	}],
	["path", {
		d: "M12 15v7",
		key: "t2xh3l"
	}],
	["path", {
		d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
		key: "1ymjlu"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), Nj = m("wine", [
	["path", {
		d: "M8 22h8",
		key: "rmew8v"
	}],
	["path", {
		d: "M7 10h10",
		key: "1101jm"
	}],
	["path", {
		d: "M12 15v7",
		key: "t2xh3l"
	}],
	["path", {
		d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",
		key: "10ffi3"
	}]
]), Pj = m("workflow", [
	["rect", {
		width: "8",
		height: "8",
		x: "3",
		y: "3",
		rx: "2",
		key: "by2w9f"
	}],
	["path", {
		d: "M7 11v4a2 2 0 0 0 2 2h4",
		key: "xkn7yn"
	}],
	["rect", {
		width: "8",
		height: "8",
		x: "13",
		y: "13",
		rx: "2",
		key: "1cgmvn"
	}]
]), Fj = m("worm", [
	["path", {
		d: "m19 12-1.5 3",
		key: "9bcu4o"
	}],
	["path", {
		d: "M19.63 18.81 22 20",
		key: "121v98"
	}],
	["path", {
		d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",
		key: "1tij6q"
	}]
]), Ij = m("wrench-off", [
	["path", {
		d: "M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842",
		key: "sded7h"
	}],
	["path", {
		d: "m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88",
		key: "66etnh"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Lj = m("wrench", [["path", {
	d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
	key: "1ngwbx"
}]]), Rj = m("x-line-top", [
	["path", {
		d: "M18 4H6",
		key: "1hsngl"
	}],
	["path", {
		d: "M18 8 6 20",
		key: "xspwia"
	}],
	["path", {
		d: "m6 8 12 12",
		key: "qb1veh"
	}]
]), zj = m("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Bj = m("zap-off", [
	["path", {
		d: "M10.768 5.111 13.44 2.44a1.5 1.5 0 012.474 1.561l-1.633 4.625",
		key: "l6h226"
	}],
	["path", {
		d: "m18.889 13.232.672-.672A1.5 1.5 0 0018.5 10h-2.844",
		key: "1717b9"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "m7.94 7.94-3.5 3.499A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l5.5-5.5",
		key: "1bjzrh"
	}]
]), Vj = m("zodiac-aquarius", [["path", {
	d: "m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10",
	key: "1o8iok"
}], ["path", {
	d: "m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002",
	key: "112qy7"
}]]), Hj = m("zap", [["path", {
	d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
	key: "1v7up4"
}]]), Uj = m("zodiac-aries", [["path", {
	d: "M12 7.5a4.5 4.5 0 1 1 5 4.5",
	key: "k987hv"
}], ["path", {
	d: "M7 12a4.5 4.5 0 1 1 5-4.5V21",
	key: "mjup0w"
}]]), Wj = m("zodiac-cancer", [
	["path", {
		d: "M21 14.5A9 6.5 0 0 1 5.5 19",
		key: "1xj2o6"
	}],
	["path", {
		d: "M3 9.5A9 6.5 0 0 1 18.5 5",
		key: "1gln3t"
	}],
	["circle", {
		cx: "17.5",
		cy: "14.5",
		r: "3.5",
		key: "1ccu1t"
	}],
	["circle", {
		cx: "6.5",
		cy: "9.5",
		r: "3.5",
		key: "x5tc2d"
	}]
]), Gj = m("zodiac-capricorn", [
	["path", {
		d: "M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0",
		key: "1kkncs"
	}],
	["path", {
		d: "M7 19V6a3 3 0 0 0-3-3h0",
		key: "1jg5y1"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "3",
		key: "18b49y"
	}]
]), Kj = m("zodiac-gemini", [
	["path", {
		d: "M16 4.525v14.948",
		key: "bgoxo0"
	}],
	["path", {
		d: "M20 3A17 17 0 0 1 4 3",
		key: "1djemw"
	}],
	["path", {
		d: "M4 21a17 17 0 0 1 16 0",
		key: "onoyo7"
	}],
	["path", {
		d: "M8 4.525v14.948",
		key: "u5iyof"
	}]
]), qj = m("zodiac-leo", [["path", {
	d: "M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0",
	key: "1qj6nb"
}], ["circle", {
	cx: "7",
	cy: "16",
	r: "3",
	key: "yyv3zl"
}]]), Jj = m("zodiac-ophiuchus", [["path", {
	d: "M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10",
	key: "13lfmc"
}], ["path", {
	d: "M6 3v12a6 6 0 0 0 12 0V3",
	key: "1jnivp"
}]]), Yj = m("zodiac-libra", [["path", {
	d: "M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21",
	key: "1novf0"
}], ["path", {
	d: "M3 20h18",
	key: "1l19wn"
}]]), Xj = m("zodiac-pisces", [
	["path", {
		d: "M19 21a15 15 0 0 1 0-18",
		key: "br2vug"
	}],
	["path", {
		d: "M20 12H4",
		key: "1mtusc"
	}],
	["path", {
		d: "M5 3a15 15 0 0 1 0 18",
		key: "1w7hae"
	}]
]), Zj = m("zodiac-sagittarius", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M21 3 3 21",
		key: "1011np"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), Qj = m("zodiac-scorpio", [
	["path", {
		d: "M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3",
		key: "1w8g0z"
	}],
	["path", {
		d: "m22 19-3 3",
		key: "1ix4wq"
	}],
	["path", {
		d: "M5 19V5.5a1 1 0 0 1 5 0",
		key: "1d4oa3"
	}],
	["path", {
		d: "M5 5.5A2.5 2.5 0 0 0 2.5 3",
		key: "gp646f"
	}]
]), $j = m("zodiac-taurus", [["circle", {
	cx: "12",
	cy: "15",
	r: "6",
	key: "lhqcmb"
}], ["path", {
	d: "M18 3A6 6 0 0 1 6 3",
	key: "1p399e"
}]]), eM = m("zoom-in", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["line", {
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65",
		key: "13gj7c"
	}],
	["line", {
		x1: "11",
		x2: "11",
		y1: "8",
		y2: "14",
		key: "1vmskp"
	}],
	["line", {
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11",
		key: "durymu"
	}]
]), tM = m("zodiac-virgo", [
	["path", {
		d: "M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5",
		key: "1szkuh"
	}],
	["path", {
		d: "M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5",
		key: "pyq0k2"
	}],
	["path", {
		d: "M6 19V6a3 3 0 0 0-3-3h0",
		key: "pvee4g"
	}],
	["path", {
		d: "M6 5.5a1 1 0 0 1 5 0V19",
		key: "vncctg"
	}]
]), nM = m("zoom-out", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["line", {
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65",
		key: "13gj7c"
	}],
	["line", {
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11",
		key: "durymu"
	}]
]), rM = /* @__PURE__ */ n({
	AArrowDown: () => h,
	AArrowUp: () => g,
	ALargeSmall: () => _,
	Accessibility: () => v,
	Activity: () => re,
	Ad: () => y,
	AirVent: () => b,
	Airplay: () => x,
	AlarmClock: () => D,
	AlarmClockCheck: () => S,
	AlarmClockMinus: () => C,
	AlarmClockOff: () => w,
	AlarmClockPlus: () => T,
	AlarmSmoke: () => E,
	Album: () => O,
	AlignCenterHorizontal: () => k,
	AlignCenterVertical: () => M,
	AlignEndHorizontal: () => A,
	AlignEndVertical: () => j,
	AlignHorizontalDistributeCenter: () => N,
	AlignHorizontalDistributeEnd: () => ie,
	AlignHorizontalDistributeStart: () => ae,
	AlignHorizontalJustifyCenter: () => oe,
	AlignHorizontalJustifyEnd: () => se,
	AlignHorizontalJustifyStart: () => ce,
	AlignHorizontalSpaceAround: () => le,
	AlignHorizontalSpaceBetween: () => ue,
	AlignStartHorizontal: () => de,
	AlignStartVertical: () => P,
	AlignVerticalDistributeCenter: () => fe,
	AlignVerticalDistributeEnd: () => pe,
	AlignVerticalDistributeStart: () => me,
	AlignVerticalJustifyCenter: () => he,
	AlignVerticalJustifyEnd: () => _e,
	AlignVerticalJustifyStart: () => ge,
	AlignVerticalSpaceAround: () => F,
	AlignVerticalSpaceBetween: () => ve,
	Ambulance: () => ye,
	Ampersand: () => I,
	Ampersands: () => L,
	Amphora: () => be,
	Anchor: () => xe,
	Antenna: () => Se,
	Anvil: () => Ce,
	Aperture: () => we,
	AppWindow: () => Ee,
	AppWindowMac: () => Te,
	Apple: () => De,
	Archive: () => R,
	ArchiveRestore: () => Oe,
	ArchiveX: () => ke,
	Armchair: () => z,
	ArrowBigDown: () => Ae,
	ArrowBigDownDash: () => B,
	ArrowBigLeft: () => V,
	ArrowBigLeftDash: () => je,
	ArrowBigRight: () => Ne,
	ArrowBigRightDash: () => Me,
	ArrowBigUp: () => Pe,
	ArrowBigUpDash: () => Fe,
	ArrowDown: () => Je,
	ArrowDown01: () => Ie,
	ArrowDown10: () => Le,
	ArrowDownAZ: () => Re,
	ArrowDownFromLine: () => Be,
	ArrowDownLeft: () => ze,
	ArrowDownNarrowWide: () => He,
	ArrowDownRight: () => Ve,
	ArrowDownToDot: () => Ue,
	ArrowDownToLine: () => We,
	ArrowDownUp: () => Ge,
	ArrowDownWideNarrow: () => Ke,
	ArrowDownZA: () => qe,
	ArrowLeft: () => Qe,
	ArrowLeftFromLine: () => Ye,
	ArrowLeftRight: () => Xe,
	ArrowLeftToLine: () => Ze,
	ArrowRight: () => nt,
	ArrowRightFromLine: () => $e,
	ArrowRightLeft: () => et,
	ArrowRightToLine: () => tt,
	ArrowUp: () => ht,
	ArrowUp01: () => at,
	ArrowUp10: () => rt,
	ArrowUpAZ: () => it,
	ArrowUpDown: () => ot,
	ArrowUpFromDot: () => st,
	ArrowUpFromLine: () => ct,
	ArrowUpLeft: () => lt,
	ArrowUpNarrowWide: () => ut,
	ArrowUpRight: () => dt,
	ArrowUpToLine: () => ft,
	ArrowUpWideNarrow: () => mt,
	ArrowUpZA: () => pt,
	ArrowsUpFromLine: () => gt,
	Asterisk: () => _t,
	Astroid: () => vt,
	AtSign: () => bt,
	Atom: () => yt,
	AudioLines: () => St,
	AudioLinesX: () => xt,
	AudioWaveform: () => Ct,
	Award: () => wt,
	Axe: () => Tt,
	Axis3d: () => Dt,
	Baby: () => Et,
	Backpack: () => Ot,
	Badge: () => Kt,
	BadgeAlert: () => kt,
	BadgeCent: () => At,
	BadgeCheck: () => jt,
	BadgeDollarSign: () => Mt,
	BadgeEuro: () => Nt,
	BadgeIndianRupee: () => Pt,
	BadgeInfo: () => Ft,
	BadgeJapaneseYen: () => It,
	BadgeMinus: () => Lt,
	BadgePercent: () => zt,
	BadgePlus: () => Rt,
	BadgePoundSterling: () => Bt,
	BadgeQuestionMark: () => Vt,
	BadgeRussianRuble: () => Ht,
	BadgeSwissFranc: () => Ut,
	BadgeTurkishLira: () => Wt,
	BadgeX: () => Gt,
	BaggageClaim: () => qt,
	Balloon: () => Jt,
	Ban: () => Yt,
	Banana: () => Xt,
	Bandage: () => Zt,
	Banknote: () => nn,
	BanknoteArrowDown: () => Qt,
	BanknoteArrowUp: () => $t,
	BanknoteCheck: () => en,
	BanknoteX: () => tn,
	Barcode: () => rn,
	Barrel: () => on,
	Baseline: () => an,
	Bath: () => sn,
	Battery: () => hn,
	BatteryCharging: () => un,
	BatteryFull: () => ln,
	BatteryLow: () => cn,
	BatteryMedium: () => dn,
	BatteryPlus: () => fn,
	BatteryWarning: () => pn,
	Beaker: () => mn,
	Bean: () => _n,
	BeanOff: () => gn,
	Bed: () => bn,
	BedDouble: () => vn,
	BedSingle: () => yn,
	Beef: () => Sn,
	BeefOff: () => xn,
	Beer: () => wn,
	BeerOff: () => Cn,
	Bell: () => Mn,
	BellCheck: () => En,
	BellDot: () => Tn,
	BellElectric: () => Dn,
	BellMinus: () => On,
	BellOff: () => kn,
	BellPlus: () => An,
	BellRing: () => jn,
	BetweenHorizontalEnd: () => Pn,
	BetweenHorizontalStart: () => Nn,
	BetweenVerticalEnd: () => Fn,
	BetweenVerticalStart: () => In,
	BicepsFlexed: () => Ln,
	Bike: () => Rn,
	Binary: () => zn,
	Binoculars: () => Bn,
	Biohazard: () => Vn,
	Bird: () => Hn,
	Birdhouse: () => Un,
	Bitcoin: () => Wn,
	Blend: () => Gn,
	Blender: () => Kn,
	Blinds: () => Jn,
	Blocks: () => qn,
	Bluetooth: () => Qn,
	BluetoothConnected: () => Yn,
	BluetoothOff: () => Xn,
	BluetoothSearching: () => Zn,
	Bold: () => $n,
	Bolt: () => er,
	Bomb: () => nr,
	Bone: () => rr,
	BoneFracture: () => tr,
	Book: () => kr,
	BookA: () => ir,
	BookAlert: () => ar,
	BookAudio: () => or,
	BookCheck: () => sr,
	BookCopy: () => ur,
	BookDashed: () => cr,
	BookDown: () => lr,
	BookHeadphones: () => dr,
	BookHeart: () => fr,
	BookImage: () => pr,
	BookKey: () => mr,
	BookLock: () => hr,
	BookMarked: () => _r,
	BookMinus: () => gr,
	BookOpen: () => xr,
	BookOpenCheck: () => vr,
	BookOpenText: () => yr,
	BookPlus: () => br,
	BookSearch: () => Sr,
	BookText: () => Cr,
	BookType: () => wr,
	BookUp: () => Tr,
	BookUp2: () => Er,
	BookUser: () => Dr,
	BookX: () => Or,
	Bookmark: () => Fr,
	BookmarkCheck: () => Ar,
	BookmarkMinus: () => jr,
	BookmarkOff: () => Mr,
	BookmarkPlus: () => Nr,
	BookmarkX: () => Pr,
	BoomBox: () => Ir,
	Bot: () => zr,
	BotMessageSquare: () => Lr,
	BotOff: () => Rr,
	BottleWine: () => Br,
	BowArrow: () => Vr,
	Box: () => Hr,
	Boxes: () => Wr,
	Braces: () => Ur,
	Brackets: () => Gr,
	Brain: () => Jr,
	BrainCircuit: () => Kr,
	BrainCog: () => qr,
	BrickWall: () => Zr,
	BrickWallFire: () => Yr,
	BrickWallShield: () => Xr,
	Briefcase: () => ei,
	BriefcaseBusiness: () => Qr,
	BriefcaseConveyorBelt: () => $r,
	BriefcaseMedical: () => ti,
	BringToFront: () => ni,
	Broccoli: () => ri,
	Broom: () => ai,
	BroomSparkles: () => ii,
	Brush: () => si,
	BrushCleaning: () => oi,
	Bubbles: () => ci,
	Bug: () => di,
	BugOff: () => li,
	BugPlay: () => ui,
	Building: () => pi,
	Building2: () => fi,
	Bus: () => hi,
	BusFront: () => mi,
	Cable: () => _i,
	CableCar: () => gi,
	Cake: () => yi,
	CakeSlice: () => vi,
	Calculator: () => bi,
	Calendar: () => Hi,
	Calendar1: () => xi,
	CalendarArrowDown: () => Ci,
	CalendarArrowUp: () => Si,
	CalendarCheck: () => Ti,
	CalendarCheck2: () => wi,
	CalendarClock: () => Ei,
	CalendarCog: () => Di,
	CalendarDays: () => Oi,
	CalendarFold: () => ki,
	CalendarHeart: () => Mi,
	CalendarMinus: () => ji,
	CalendarMinus2: () => Ai,
	CalendarOff: () => Ni,
	CalendarPlus: () => Fi,
	CalendarPlus2: () => Pi,
	CalendarRange: () => Ii,
	CalendarSearch: () => Li,
	CalendarSync: () => Ri,
	CalendarX: () => Bi,
	CalendarX2: () => zi,
	Calendars: () => Vi,
	Camera: () => Wi,
	CameraOff: () => Ui,
	Candy: () => qi,
	CandyCane: () => Gi,
	CandyOff: () => Ki,
	Cannabis: () => Yi,
	CannabisOff: () => Ji,
	Captions: () => Zi,
	CaptionsOff: () => Xi,
	Car: () => ea,
	CarFront: () => Qi,
	CarTaxiFront: () => $i,
	Caravan: () => ta,
	CardSim: () => na,
	Carrot: () => ra,
	CaseLower: () => ia,
	CaseSensitive: () => aa,
	CaseUpper: () => oa,
	CassetteTape: () => sa,
	Cast: () => ca,
	Castle: () => la,
	Cat: () => ua,
	Cctv: () => fa,
	CctvOff: () => da,
	ChartArea: () => pa,
	ChartBar: () => va,
	ChartBarBig: () => ma,
	ChartBarDecreasing: () => ga,
	ChartBarIncreasing: () => ha,
	ChartBarStacked: () => _a,
	ChartCandlestick: () => ya,
	ChartColumn: () => wa,
	ChartColumnBig: () => ba,
	ChartColumnDecreasing: () => xa,
	ChartColumnIncreasing: () => Sa,
	ChartColumnStacked: () => Ca,
	ChartGantt: () => Ta,
	ChartLine: () => Ea,
	ChartNetwork: () => Da,
	ChartNoAxesColumn: () => Aa,
	ChartNoAxesColumnDecreasing: () => Oa,
	ChartNoAxesColumnIncreasing: () => ka,
	ChartNoAxesCombined: () => ja,
	ChartNoAxesGantt: () => Ma,
	ChartPie: () => Na,
	ChartScatter: () => Pa,
	ChartSpline: () => Fa,
	Check: () => Ra,
	CheckCheck: () => Ia,
	CheckLine: () => La,
	ChefHat: () => za,
	Cherry: () => Ba,
	ChessBishop: () => Va,
	ChessKing: () => Ua,
	ChessKnight: () => Ha,
	ChessPawn: () => Wa,
	ChessQueen: () => Ga,
	ChessRook: () => Ka,
	ChevronDown: () => qa,
	ChevronFirst: () => Ja,
	ChevronLast: () => Ya,
	ChevronLeft: () => Xa,
	ChevronRight: () => Za,
	ChevronUp: () => Qa,
	ChevronsDown: () => eo,
	ChevronsDownUp: () => $a,
	ChevronsLeft: () => ro,
	ChevronsLeftRight: () => no,
	ChevronsLeftRightEllipsis: () => to,
	ChevronsRight: () => ao,
	ChevronsRightLeft: () => io,
	ChevronsUp: () => so,
	ChevronsUpDown: () => oo,
	Church: () => co,
	Cigarette: () => lo,
	CigaretteOff: () => uo,
	Circle: () => rs,
	CircleAlert: () => fo,
	CircleArrowDown: () => po,
	CircleArrowLeft: () => mo,
	CircleArrowOutDownLeft: () => ho,
	CircleArrowOutDownRight: () => go,
	CircleArrowOutUpLeft: () => _o,
	CircleArrowOutUpRight: () => vo,
	CircleArrowRight: () => yo,
	CircleArrowUp: () => bo,
	CircleCheck: () => So,
	CircleCheckBig: () => xo,
	CircleChevronDown: () => wo,
	CircleChevronLeft: () => Co,
	CircleChevronRight: () => To,
	CircleChevronUp: () => Eo,
	CircleDashed: () => Do,
	CircleDivide: () => Oo,
	CircleDollarSign: () => ko,
	CircleDot: () => Mo,
	CircleDotDashed: () => Ao,
	CircleEllipsis: () => jo,
	CircleEqual: () => No,
	CircleEuro: () => Po,
	CircleFadingArrowUp: () => Fo,
	CircleFadingPlus: () => Io,
	CircleGauge: () => Lo,
	CircleMinus: () => Ro,
	CircleOff: () => zo,
	CircleParking: () => Vo,
	CircleParkingOff: () => Bo,
	CirclePause: () => Ho,
	CirclePercent: () => Uo,
	CirclePile: () => Wo,
	CirclePlay: () => Ko,
	CirclePlus: () => Go,
	CirclePoundSterling: () => qo,
	CirclePower: () => Jo,
	CircleQuestionMark: () => H,
	CircleSlash: () => Yo,
	CircleSlash2: () => Xo,
	CircleSmall: () => Zo,
	CircleStar: () => Qo,
	CircleStop: () => $o,
	CircleUser: () => ts,
	CircleUserRound: () => es,
	CircleX: () => ns,
	CircuitBoard: () => is,
	Citrus: () => as,
	Clapperboard: () => os,
	Clipboard: () => vs,
	ClipboardCheck: () => ss,
	ClipboardClock: () => cs,
	ClipboardCopy: () => us,
	ClipboardList: () => ls,
	ClipboardMinus: () => ds,
	ClipboardPaste: () => fs,
	ClipboardPen: () => ms,
	ClipboardPenLine: () => ps,
	ClipboardPlus: () => hs,
	ClipboardType: () => gs,
	ClipboardX: () => _s,
	Clock: () => Vs,
	Clock1: () => ys,
	Clock10: () => bs,
	Clock11: () => xs,
	Clock12: () => Ss,
	Clock2: () => Cs,
	Clock3: () => ws,
	Clock4: () => Ts,
	Clock5: () => Ds,
	Clock6: () => Es,
	Clock7: () => Os,
	Clock8: () => ks,
	Clock9: () => As,
	ClockAlert: () => js,
	ClockArrowDown: () => Ms,
	ClockArrowLeft: () => Ps,
	ClockArrowRight: () => Ns,
	ClockArrowUp: () => Fs,
	ClockCheck: () => Is,
	ClockFading: () => Ls,
	ClockPlus: () => Rs,
	ClosedCaption: () => zs,
	Cloud: () => ac,
	CloudAlert: () => Bs,
	CloudBackup: () => Hs,
	CloudCheck: () => Us,
	CloudCog: () => Ws,
	CloudDownload: () => Gs,
	CloudDrizzle: () => Ks,
	CloudFog: () => qs,
	CloudHail: () => Js,
	CloudLightning: () => Ys,
	CloudMoon: () => Qs,
	CloudMoonRain: () => Xs,
	CloudOff: () => Zs,
	CloudRain: () => ec,
	CloudRainWind: () => $s,
	CloudSnow: () => tc,
	CloudSun: () => rc,
	CloudSunRain: () => nc,
	CloudSync: () => ic,
	CloudUpload: () => oc,
	Cloudy: () => sc,
	Clover: () => cc,
	Club: () => lc,
	Code: () => dc,
	CodeXml: () => uc,
	Coffee: () => fc,
	Cog: () => pc,
	Coins: () => mc,
	Columns2: () => hc,
	Columns3: () => gc,
	Columns3Cog: () => U,
	Columns4: () => _c,
	Combine: () => vc,
	Command: () => yc,
	Compass: () => bc,
	Component: () => xc,
	Computer: () => Sc,
	ConciergeBell: () => Cc,
	Cone: () => wc,
	Construction: () => Tc,
	Contact: () => Oc,
	ContactRound: () => Ec,
	Container: () => Dc,
	Contrast: () => kc,
	Cookie: () => Ac,
	CookingPot: () => jc,
	Copy: () => Rc,
	CopyCheck: () => Mc,
	CopyMinus: () => Nc,
	CopyPlus: () => Pc,
	CopySlash: () => Fc,
	CopyX: () => Ic,
	Copyleft: () => Lc,
	Copyright: () => zc,
	CornerDownLeft: () => Bc,
	CornerDownRight: () => Vc,
	CornerLeftDown: () => Hc,
	CornerLeftUp: () => Uc,
	CornerRightDown: () => Wc,
	CornerRightUp: () => Gc,
	CornerUpLeft: () => Kc,
	CornerUpRight: () => qc,
	Cpu: () => Jc,
	CreativeCommons: () => Yc,
	CreditCard: () => Xc,
	Croissant: () => Zc,
	Crop: () => Qc,
	Cross: () => $c,
	Crosshair: () => el,
	Crown: () => tl,
	Cuboid: () => nl,
	CupSoda: () => rl,
	Currency: () => il,
	Cylinder: () => al,
	Dam: () => ol,
	Database: () => gl,
	DatabaseArrowDown: () => sl,
	DatabaseArrowUp: () => cl,
	DatabaseBackup: () => ll,
	DatabaseCheck: () => ul,
	DatabaseMinus: () => dl,
	DatabasePlus: () => fl,
	DatabaseSearch: () => pl,
	DatabaseX: () => ml,
	DatabaseZap: () => hl,
	DecimalsArrowLeft: () => _l,
	DecimalsArrowRight: () => yl,
	Delete: () => vl,
	Dessert: () => bl,
	Diameter: () => xl,
	Diamond: () => Tl,
	DiamondMinus: () => Sl,
	DiamondPercent: () => Cl,
	DiamondPlus: () => wl,
	Dice1: () => El,
	Dice2: () => Dl,
	Dice3: () => kl,
	Dice4: () => Ol,
	Dice5: () => Al,
	Dice6: () => jl,
	Dices: () => Ml,
	Diff: () => Nl,
	Disc: () => Ll,
	Disc2: () => Pl,
	Disc3: () => Fl,
	DiscAlbum: () => Il,
	Divide: () => Rl,
	Dna: () => Bl,
	DnaOff: () => zl,
	Dock: () => Vl,
	Dog: () => Hl,
	DollarSign: () => Ul,
	Donut: () => Wl,
	DoorClosed: () => Kl,
	DoorClosedLocked: () => Gl,
	DoorOpen: () => ql,
	Dot: () => Jl,
	Download: () => Yl,
	DraftingCompass: () => Xl,
	Drama: () => Ql,
	Drill: () => Zl,
	Drone: () => eu,
	Droplet: () => tu,
	DropletOff: () => $l,
	Droplets: () => nu,
	Drum: () => ru,
	Drumstick: () => iu,
	Dumbbell: () => au,
	Ear: () => su,
	EarOff: () => ou,
	Earth: () => cu,
	EarthLock: () => lu,
	Eclipse: () => uu,
	Egg: () => pu,
	EggFried: () => du,
	EggOff: () => fu,
	Ellipse: () => mu,
	Ellipsis: () => gu,
	EllipsisVertical: () => hu,
	Equal: () => yu,
	EqualApproximately: () => _u,
	EqualNot: () => vu,
	Eraser: () => bu,
	EthernetPort: () => Su,
	Euro: () => xu,
	EvCharger: () => Cu,
	Expand: () => wu,
	ExternalLink: () => Tu,
	Eye: () => ku,
	EyeClosed: () => Eu,
	EyeDashed: () => Du,
	EyeOff: () => Ou,
	FaceAngry: () => Au,
	FaceExpressionless: () => Mu,
	FaceGrinning: () => ju,
	FaceNeutral: () => Nu,
	FaceSlightlyFrowning: () => Pu,
	FaceSlightlySmiling: () => Iu,
	FaceSlightlySmilingPlus: () => Fu,
	Factory: () => Lu,
	Fan: () => Ru,
	FastForward: () => zu,
	Feather: () => Bu,
	Fence: () => Vu,
	FerrisWheel: () => Hu,
	File: () => Vd,
	FileArchive: () => Uu,
	FileAxis3d: () => Gu,
	FileBadge: () => Wu,
	FileBox: () => Ku,
	FileBraces: () => qu,
	FileBracesCorner: () => Yu,
	FileChartColumn: () => Xu,
	FileChartColumnIncreasing: () => Ju,
	FileChartLine: () => Qu,
	FileChartPie: () => Zu,
	FileCheck: () => ed,
	FileCheckCorner: () => $u,
	FileClock: () => td,
	FileCode: () => nd,
	FileCodeCorner: () => rd,
	FileCog: () => id,
	FileDiff: () => ad,
	FileDigit: () => od,
	FileDown: () => sd,
	FileExclamationPoint: () => cd,
	FileHeadphone: () => W,
	FileHeart: () => ld,
	FileImage: () => ud,
	FileInput: () => dd,
	FileKey: () => fd,
	FileLock: () => pd,
	FileMinus: () => hd,
	FileMinusCorner: () => md,
	FileMusic: () => gd,
	FileOutput: () => _d,
	FilePen: () => yd,
	FilePenLine: () => vd,
	FilePlay: () => bd,
	FilePlus: () => xd,
	FilePlusCorner: () => Sd,
	FileQuestionMark: () => Cd,
	FileScan: () => wd,
	FileSearch: () => Ed,
	FileSearchCorner: () => Td,
	FileSignal: () => Dd,
	FileSliders: () => Od,
	FileSpreadsheet: () => kd,
	FileStack: () => Ad,
	FileSymlink: () => jd,
	FileTerminal: () => Md,
	FileText: () => Nd,
	FileType: () => Fd,
	FileTypeCorner: () => Pd,
	FileUp: () => Id,
	FileUser: () => Ld,
	FileVideoCamera: () => Rd,
	FileVolume: () => zd,
	FileX: () => Hd,
	FileXCorner: () => Bd,
	Files: () => Ud,
	Film: () => Wd,
	FingerprintPattern: () => Gd,
	FireExtinguisher: () => Kd,
	Fish: () => Yd,
	FishOff: () => qd,
	FishSymbol: () => Jd,
	FishingHook: () => Xd,
	FishingRod: () => Zd,
	Flag: () => tf,
	FlagOff: () => Qd,
	FlagTriangleLeft: () => $d,
	FlagTriangleRight: () => ef,
	Flame: () => rf,
	FlameKindling: () => nf,
	Flashlight: () => of,
	FlashlightOff: () => af,
	FlaskConical: () => sf,
	FlaskConicalOff: () => cf,
	FlaskRound: () => uf,
	FlipHorizontal2: () => lf,
	FlipVertical2: () => df,
	Flower: () => pf,
	Flower2: () => ff,
	Focus: () => gf,
	FoldHorizontal: () => hf,
	FoldVertical: () => mf,
	Folder: () => Jf,
	FolderArchive: () => _f,
	FolderBookmark: () => vf,
	FolderCheck: () => yf,
	FolderClock: () => bf,
	FolderClosed: () => xf,
	FolderCode: () => Sf,
	FolderCog: () => Cf,
	FolderDot: () => wf,
	FolderDown: () => Tf,
	FolderGit: () => Df,
	FolderGit2: () => Ef,
	FolderHeart: () => Of,
	FolderInput: () => kf,
	FolderKanban: () => Af,
	FolderKey: () => jf,
	FolderLock: () => Mf,
	FolderMinus: () => Nf,
	FolderOpen: () => Ff,
	FolderOpenDot: () => Pf,
	FolderOutput: () => If,
	FolderPen: () => Lf,
	FolderPlus: () => Rf,
	FolderRoot: () => zf,
	FolderSearch: () => Vf,
	FolderSearch2: () => Bf,
	FolderSymlink: () => Hf,
	FolderSync: () => Uf,
	FolderTree: () => Wf,
	FolderUp: () => Gf,
	FolderX: () => Kf,
	Folders: () => qf,
	Footprints: () => Yf,
	Forklift: () => Qf,
	Form: () => Xf,
	Forward: () => Zf,
	Frame: () => $f,
	Fuel: () => ep,
	Fullscreen: () => np,
	Funnel: () => ip,
	FunnelPlus: () => rp,
	FunnelX: () => tp,
	GalleryHorizontal: () => op,
	GalleryHorizontalEnd: () => ap,
	GalleryThumbnails: () => sp,
	GalleryVertical: () => lp,
	GalleryVerticalEnd: () => cp,
	Gamepad: () => pp,
	Gamepad2: () => dp,
	GamepadDirectional: () => up,
	Gauge: () => fp,
	Gavel: () => mp,
	Gem: () => hp,
	GeorgianLari: () => gp,
	Ghost: () => vp,
	Gift: () => _p,
	GitBranch: () => xp,
	GitBranchMinus: () => yp,
	GitBranchPlus: () => bp,
	GitCommitHorizontal: () => Sp,
	GitCommitVertical: () => Cp,
	GitCompare: () => Tp,
	GitCompareArrows: () => wp,
	GitFork: () => Ep,
	GitGraph: () => Dp,
	GitMerge: () => kp,
	GitMergeConflict: () => Op,
	GitPullRequest: () => Fp,
	GitPullRequestArrow: () => Ap,
	GitPullRequestClosed: () => jp,
	GitPullRequestCreate: () => Np,
	GitPullRequestCreateArrow: () => Mp,
	GitPullRequestDraft: () => Pp,
	GlassWater: () => Ip,
	Glasses: () => Lp,
	Globe: () => Hp,
	GlobeCheck: () => Rp,
	GlobeLock: () => zp,
	GlobeOff: () => Bp,
	GlobeX: () => Vp,
	Goal: () => Up,
	Gpu: () => Wp,
	GraduationCap: () => Gp,
	Grape: () => Kp,
	Grid2x2: () => Xp,
	Grid2x2Check: () => qp,
	Grid2x2Plus: () => Jp,
	Grid2x2X: () => Yp,
	Grid3x2: () => Zp,
	Grid3x3: () => G,
	Grip: () => $p,
	GripHorizontal: () => Qp,
	GripVertical: () => tm,
	Group: () => em,
	Guitar: () => nm,
	Ham: () => rm,
	Hamburger: () => im,
	Hammer: () => am,
	Hand: () => pm,
	HandCoins: () => om,
	HandFist: () => sm,
	HandGrab: () => cm,
	HandHeart: () => lm,
	HandHelping: () => um,
	HandMetal: () => dm,
	HandPlatter: () => fm,
	Handbag: () => mm,
	Handshake: () => hm,
	HardDrive: () => vm,
	HardDriveDownload: () => gm,
	HardDriveUpload: () => _m,
	HardHat: () => ym,
	Hash: () => bm,
	HatGlasses: () => xm,
	Haze: () => Cm,
	Hd: () => Sm,
	HdmiPort: () => wm,
	Heading: () => jm,
	Heading1: () => Tm,
	Heading2: () => Em,
	Heading3: () => Dm,
	Heading4: () => Om,
	Heading5: () => km,
	Heading6: () => Am,
	HeadphoneOff: () => Nm,
	Headphones: () => Mm,
	Headset: () => Pm,
	Heart: () => Um,
	HeartCrack: () => Fm,
	HeartHandshake: () => Im,
	HeartMinus: () => zm,
	HeartOff: () => Lm,
	HeartPlus: () => Rm,
	HeartPulse: () => Bm,
	HeartX: () => Vm,
	Heater: () => Hm,
	Helicopter: () => Wm,
	Hexagon: () => Gm,
	Highlighter: () => Km,
	Hop: () => Jm,
	HopOff: () => qm,
	Hospital: () => Ym,
	Hotel: () => Zm,
	Hourglass: () => Xm,
	House: () => nh,
	HouseHeart: () => Qm,
	HousePlug: () => $m,
	HousePlus: () => eh,
	HouseWifi: () => th,
	IceCreamBowl: () => rh,
	IceCreamCone: () => ih,
	IdCard: () => oh,
	IdCardLanyard: () => ah,
	Image: () => mh,
	ImageDown: () => sh,
	ImageMinus: () => ch,
	ImageOff: () => uh,
	ImagePlay: () => lh,
	ImagePlus: () => dh,
	ImageUp: () => fh,
	ImageUpscale: () => ph,
	Images: () => hh,
	Import: () => gh,
	Inbox: () => _h,
	IndianRupee: () => vh,
	Infinity: () => yh,
	Info: () => xh,
	InspectionPanel: () => bh,
	Italic: () => Sh,
	IterationCcw: () => Ch,
	IterationCw: () => wh,
	JapaneseYen: () => Th,
	Joystick: () => Dh,
	Kanban: () => Eh,
	Kayak: () => Oh,
	Key: () => Mh,
	KeyRound: () => kh,
	KeySquare: () => Ah,
	Keyboard: () => Ph,
	KeyboardMusic: () => jh,
	KeyboardOff: () => Nh,
	Lamp: () => Bh,
	LampCeiling: () => Fh,
	LampDesk: () => Ih,
	LampFloor: () => Lh,
	LampWallDown: () => Rh,
	LampWallUp: () => zh,
	LandPlot: () => Vh,
	Landmark: () => Hh,
	Languages: () => Gh,
	Laptop: () => qh,
	LaptopMinimal: () => Wh,
	LaptopMinimalCheck: () => Uh,
	Lasso: () => Jh,
	LassoSelect: () => Kh,
	LayerArrowDown: () => Yh,
	LayerArrowUp: () => Xh,
	Layers: () => ng,
	Layers2: () => Zh,
	LayersArrowDown: () => $h,
	LayersArrowUp: () => Qh,
	LayersMinus: () => eg,
	LayersPlus: () => tg,
	LayoutDashboard: () => rg,
	LayoutFreeform: () => ig,
	LayoutGrid: () => ag,
	LayoutList: () => og,
	LayoutPanelLeft: () => sg,
	LayoutPanelTop: () => cg,
	LayoutTemplate: () => lg,
	Leaf: () => ug,
	LeafyGreen: () => dg,
	Lectern: () => fg,
	LensConcave: () => pg,
	LensConvex: () => mg,
	Library: () => gg,
	LibraryBig: () => hg,
	LifeBuoy: () => _g,
	Ligature: () => vg,
	Lightbulb: () => bg,
	LightbulbOff: () => yg,
	LineDotRightHorizontal: () => xg,
	LineSquiggle: () => Sg,
	LineStyle: () => Cg,
	Link: () => Dg,
	Link2: () => Tg,
	Link2Off: () => wg,
	List: () => qg,
	ListCheck: () => Eg,
	ListChecks: () => Og,
	ListChevronsDownUp: () => kg,
	ListChevronsUpDown: () => Ag,
	ListCollapse: () => jg,
	ListEnd: () => Mg,
	ListFilter: () => Pg,
	ListFilterPlus: () => Ng,
	ListIndentDecrease: () => K,
	ListIndentIncrease: () => q,
	ListMinus: () => Fg,
	ListMusic: () => Ig,
	ListOrdered: () => Lg,
	ListPlus: () => Rg,
	ListRestart: () => zg,
	ListSortAscending: () => Bg,
	ListSortDescending: () => Vg,
	ListStart: () => Hg,
	ListTodo: () => Wg,
	ListTree: () => Ug,
	ListVideo: () => Gg,
	ListX: () => Kg,
	Loader: () => Xg,
	LoaderCircle: () => Yg,
	LoaderPinwheel: () => Jg,
	Locate: () => $g,
	LocateFixed: () => Qg,
	LocateOff: () => Zg,
	Lock: () => n_,
	LockKeyhole: () => r_,
	LockKeyholeOpen: () => e_,
	LockOpen: () => t_,
	LogIn: () => i_,
	LogOut: () => a_,
	Logs: () => o_,
	Lollipop: () => s_,
	Luggage: () => l_,
	Magnet: () => c_,
	Mail: () => v_,
	MailCheck: () => u_,
	MailMinus: () => d_,
	MailOpen: () => p_,
	MailPlus: () => f_,
	MailQuestionMark: () => m_,
	MailSearch: () => h_,
	MailWarning: () => g_,
	MailX: () => __,
	Mailbox: () => y_,
	Mails: () => b_,
	Map: () => L_,
	MapMinus: () => x_,
	MapPin: () => P_,
	MapPinCheck: () => C_,
	MapPinCheckInside: () => S_,
	MapPinHouse: () => T_,
	MapPinMinus: () => E_,
	MapPinMinusInside: () => w_,
	MapPinOff: () => D_,
	MapPinPen: () => k_,
	MapPinPlus: () => A_,
	MapPinPlusInside: () => O_,
	MapPinSearch: () => j_,
	MapPinX: () => N_,
	MapPinXInside: () => M_,
	MapPinned: () => F_,
	MapPlus: () => I_,
	Mars: () => R_,
	MarsStroke: () => z_,
	Martini: () => B_,
	Maximize: () => H_,
	Maximize2: () => V_,
	Medal: () => U_,
	Megaphone: () => G_,
	MegaphoneOff: () => W_,
	MemoryStick: () => q_,
	Menu: () => K_,
	Merge: () => J_,
	MessageCircle: () => sv,
	MessageCircleCheck: () => Y_,
	MessageCircleCode: () => Z_,
	MessageCircleDashed: () => X_,
	MessageCircleHeart: () => Q_,
	MessageCircleMore: () => $_,
	MessageCircleOff: () => ev,
	MessageCirclePlus: () => tv,
	MessageCircleQuestionMark: () => nv,
	MessageCircleReply: () => rv,
	MessageCircleWarning: () => iv,
	MessageCircleX: () => av,
	MessageSquare: () => Cv,
	MessageSquareCheck: () => ov,
	MessageSquareCode: () => cv,
	MessageSquareDashed: () => lv,
	MessageSquareDiff: () => uv,
	MessageSquareDot: () => dv,
	MessageSquareHeart: () => fv,
	MessageSquareLock: () => pv,
	MessageSquareMore: () => hv,
	MessageSquareOff: () => mv,
	MessageSquarePlus: () => gv,
	MessageSquareQuote: () => yv,
	MessageSquareReply: () => _v,
	MessageSquareShare: () => vv,
	MessageSquareText: () => bv,
	MessageSquareWarning: () => xv,
	MessageSquareX: () => Sv,
	MessagesSquare: () => Tv,
	Metronome: () => wv,
	Mic: () => kv,
	MicAudioLines: () => Ev,
	MicOff: () => Dv,
	MicSignal: () => Ov,
	MicVocal: () => jv,
	Microchip: () => Av,
	Microscope: () => Mv,
	Microwave: () => Nv,
	Milestone: () => Pv,
	Milk: () => Iv,
	MilkOff: () => Fv,
	Minimize: () => Lv,
	Minimize2: () => Rv,
	Minus: () => zv,
	MirrorRectangular: () => Bv,
	MirrorRound: () => Vv,
	Monitor: () => ty,
	MonitorCheck: () => Hv,
	MonitorCloud: () => Uv,
	MonitorCog: () => Wv,
	MonitorDot: () => Gv,
	MonitorDown: () => Kv,
	MonitorOff: () => qv,
	MonitorPause: () => Jv,
	MonitorPlay: () => Xv,
	MonitorSmartphone: () => Yv,
	MonitorSpeaker: () => Zv,
	MonitorStop: () => Qv,
	MonitorUp: () => $v,
	MonitorX: () => ey,
	Moon: () => ry,
	MoonStar: () => ny,
	Mosque: () => ay,
	Motorbike: () => iy,
	Mountain: () => sy,
	MountainSnow: () => oy,
	Mouse: () => _y,
	MouseLeft: () => cy,
	MouseOff: () => ly,
	MousePointer: () => my,
	MousePointer2: () => dy,
	MousePointer2Off: () => uy,
	MousePointerBan: () => fy,
	MousePointerClick: () => py,
	MouseRight: () => hy,
	Move: () => Ay,
	Move3d: () => gy,
	MoveDiagonal: () => vy,
	MoveDiagonal2: () => yy,
	MoveDown: () => Cy,
	MoveDownLeft: () => xy,
	MoveDownRight: () => by,
	MoveHorizontal: () => Sy,
	MoveLeft: () => wy,
	MoveRight: () => Ty,
	MoveUp: () => Oy,
	MoveUpLeft: () => Ey,
	MoveUpRight: () => Dy,
	MoveVertical: () => ky,
	Music: () => Py,
	Music2: () => jy,
	Music3: () => My,
	Music4: () => Ny,
	Navigation: () => Ry,
	Navigation2: () => Iy,
	Navigation2Off: () => Fy,
	NavigationOff: () => Ly,
	Network: () => zy,
	Newspaper: () => By,
	Nfc: () => Vy,
	NonBinary: () => Uy,
	Notebook: () => Ky,
	NotebookPen: () => Hy,
	NotebookTabs: () => Wy,
	NotebookText: () => Gy,
	NotepadText: () => Jy,
	NotepadTextDashed: () => qy,
	Nut: () => Xy,
	NutOff: () => Yy,
	Octagon: () => eb,
	OctagonAlert: () => Zy,
	OctagonMinus: () => Qy,
	OctagonPause: () => $y,
	OctagonX: () => tb,
	Omega: () => nb,
	Option: () => rb,
	Orbit: () => ib,
	Origami: () => ab,
	Package: () => pb,
	Package2: () => ob,
	PackageCheck: () => sb,
	PackageMinus: () => cb,
	PackageOpen: () => lb,
	PackagePlus: () => ub,
	PackageSearch: () => fb,
	PackageX: () => db,
	PaintBucket: () => mb,
	PaintRoller: () => hb,
	Paintbrush: () => _b,
	PaintbrushVertical: () => gb,
	Palette: () => vb,
	Panda: () => yb,
	PanelBottom: () => Cb,
	PanelBottomClose: () => bb,
	PanelBottomDashed: () => xb,
	PanelBottomOpen: () => Sb,
	PanelLeft: () => Ob,
	PanelLeftClose: () => wb,
	PanelLeftDashed: () => Tb,
	PanelLeftOpen: () => Eb,
	PanelLeftRightDashed: () => Db,
	PanelRight: () => Mb,
	PanelRightClose: () => kb,
	PanelRightDashed: () => Ab,
	PanelRightOpen: () => jb,
	PanelTop: () => Lb,
	PanelTopBottomDashed: () => Nb,
	PanelTopClose: () => Pb,
	PanelTopDashed: () => Fb,
	PanelTopOpen: () => Ib,
	PanelsLeftBottom: () => Rb,
	PanelsRightBottom: () => zb,
	PanelsTopLeft: () => Vb,
	PaperBag: () => Bb,
	Paperclip: () => Hb,
	Parasol: () => Ub,
	Parentheses: () => Kb,
	ParkingMeter: () => Wb,
	PartyPopper: () => Gb,
	Pause: () => qb,
	PawPrint: () => Jb,
	PcCase: () => Yb,
	Pen: () => $b,
	PenLine: () => Zb,
	PenOff: () => Xb,
	PenTool: () => Qb,
	Pencil: () => ix,
	PencilLine: () => ex,
	PencilOff: () => tx,
	PencilRuler: () => nx,
	PencilSparkles: () => rx,
	Pentagon: () => ax,
	Percent: () => ox,
	PersonStanding: () => cx,
	Phi: () => sx,
	PhilippinePeso: () => lx,
	Phone: () => hx,
	PhoneCall: () => ux,
	PhoneForwarded: () => dx,
	PhoneIncoming: () => px,
	PhoneMissed: () => fx,
	PhoneOff: () => mx,
	PhoneOutgoing: () => gx,
	Pi: () => _x,
	Piano: () => vx,
	Pickaxe: () => yx,
	PictureInPicture: () => xx,
	PictureInPicture2: () => bx,
	PiggyBank: () => Sx,
	Pilcrow: () => wx,
	PilcrowLeft: () => Cx,
	PilcrowRight: () => Tx,
	Pill: () => Dx,
	PillBottle: () => Ex,
	Pin: () => Ax,
	PinOff: () => Ox,
	Pipette: () => kx,
	Pizza: () => jx,
	Plane: () => Nx,
	PlaneLanding: () => Mx,
	PlaneTakeoff: () => Px,
	Play: () => Ix,
	PlayOff: () => Fx,
	Plug: () => zx,
	Plug2: () => Lx,
	PlugZap: () => Rx,
	Plus: () => Bx,
	PocketKnife: () => Vx,
	Podium: () => Hx,
	Pointer: () => Wx,
	PointerOff: () => Ux,
	Popcorn: () => Gx,
	Popsicle: () => Kx,
	PoundSterling: () => qx,
	Power: () => Yx,
	PowerOff: () => Jx,
	Presentation: () => Xx,
	Printer: () => $x,
	PrinterCheck: () => Zx,
	PrinterX: () => Qx,
	Projector: () => eS,
	Proportions: () => tS,
	Puzzle: () => nS,
	Pyramid: () => rS,
	QrCode: () => iS,
	Quote: () => aS,
	Rabbit: () => oS,
	Radar: () => sS,
	Radiation: () => cS,
	Radical: () => lS,
	Radio: () => pS,
	RadioOff: () => uS,
	RadioReceiver: () => dS,
	RadioTower: () => fS,
	Radius: () => mS,
	Rainbow: () => hS,
	Rat: () => gS,
	Ratio: () => _S,
	Receipt: () => DS,
	ReceiptCent: () => vS,
	ReceiptEuro: () => yS,
	ReceiptIndianRupee: () => bS,
	ReceiptJapaneseYen: () => xS,
	ReceiptPoundSterling: () => SS,
	ReceiptRussianRuble: () => CS,
	ReceiptSwissFranc: () => wS,
	ReceiptText: () => TS,
	ReceiptTurkishLira: () => ES,
	RectangleCircle: () => OS,
	RectangleEllipsis: () => kS,
	RectangleGoggles: () => AS,
	RectangleHorizontal: () => MS,
	RectangleVertical: () => jS,
	Recycle: () => NS,
	Redo: () => IS,
	Redo2: () => FS,
	RedoDot: () => PS,
	RefreshCcw: () => RS,
	RefreshCcwDot: () => LS,
	RefreshCw: () => BS,
	RefreshCwOff: () => zS,
	Refrigerator: () => VS,
	Regex: () => HS,
	RemoveFormatting: () => US,
	Repeat: () => qS,
	Repeat1: () => WS,
	Repeat2: () => GS,
	RepeatOff: () => KS,
	Replace: () => YS,
	ReplaceAll: () => JS,
	Reply: () => ZS,
	ReplyAll: () => XS,
	Rewind: () => QS,
	Ribbon: () => $S,
	Road: () => eC,
	Rocket: () => tC,
	RockingChair: () => nC,
	RollerCoaster: () => rC,
	Rose: () => iC,
	Rotate3d: () => aC,
	RotateCcw: () => lC,
	RotateCcwClock: () => oC,
	RotateCcwKey: () => sC,
	RotateCcwSquare: () => cC,
	RotateCw: () => fC,
	RotateCwFadingClock: () => uC,
	RotateCwSquare: () => dC,
	Route: () => mC,
	RouteOff: () => pC,
	Router: () => gC,
	Rows2: () => hC,
	Rows3: () => _C,
	Rows4: () => vC,
	Rss: () => yC,
	Ruler: () => xC,
	RulerDimensionLine: () => bC,
	RussianRuble: () => SC,
	Sailboat: () => CC,
	Salad: () => TC,
	Sandwich: () => wC,
	Satellite: () => DC,
	SatelliteDish: () => EC,
	SaudiRiyal: () => OC,
	Save: () => PC,
	SaveAll: () => kC,
	SaveCheck: () => AC,
	SaveOff: () => jC,
	SavePen: () => MC,
	SavePlus: () => NC,
	Scale: () => IC,
	Scale3d: () => FC,
	Scaling: () => LC,
	Scan: () => JC,
	ScanBarcode: () => RC,
	ScanBox: () => zC,
	ScanEye: () => BC,
	ScanFace: () => VC,
	ScanHeart: () => HC,
	ScanLine: () => UC,
	ScanQrCode: () => WC,
	ScanSearch: () => KC,
	ScanSquare: () => GC,
	ScanText: () => qC,
	School: () => XC,
	Scissors: () => ZC,
	ScissorsLineDashed: () => YC,
	Scooter: () => ew,
	ScreenShare: () => $C,
	ScreenShareOff: () => QC,
	Scroll: () => nw,
	ScrollText: () => tw,
	Search: () => lw,
	SearchAlert: () => rw,
	SearchCheck: () => iw,
	SearchCode: () => aw,
	SearchSlash: () => ow,
	SearchX: () => sw,
	Section: () => cw,
	Send: () => fw,
	SendHorizontal: () => uw,
	SendToBack: () => dw,
	SeparatorHorizontal: () => pw,
	SeparatorVertical: () => mw,
	Server: () => yw,
	ServerCog: () => hw,
	ServerCrash: () => gw,
	ServerOff: () => _w,
	ServerPlus: () => vw,
	Settings: () => xw,
	Settings2: () => bw,
	Shapes: () => Sw,
	Share: () => ww,
	Share2: () => Cw,
	Sheet: () => Tw,
	Shell: () => Ew,
	ShelvingUnit: () => Dw,
	Shield: () => Uw,
	ShieldAlert: () => Ow,
	ShieldBan: () => kw,
	ShieldCheck: () => Aw,
	ShieldCog: () => Mw,
	ShieldCogCorner: () => jw,
	ShieldEllipsis: () => Nw,
	ShieldHalf: () => Pw,
	ShieldKeyhole: () => Fw,
	ShieldLock: () => Iw,
	ShieldMinus: () => Lw,
	ShieldOff: () => zw,
	ShieldPlus: () => Rw,
	ShieldQuestionMark: () => Bw,
	ShieldUser: () => Vw,
	ShieldX: () => Hw,
	Ship: () => Gw,
	ShipWheel: () => Ww,
	Shirt: () => Kw,
	ShoppingBag: () => qw,
	ShoppingBasket: () => Jw,
	ShoppingCart: () => Yw,
	Shovel: () => Xw,
	ShowerHead: () => Zw,
	Shredder: () => $w,
	Shrimp: () => Qw,
	Shrink: () => eT,
	Shrub: () => tT,
	Shuffle: () => nT,
	Sigma: () => rT,
	Signal: () => cT,
	SignalHigh: () => iT,
	SignalLow: () => aT,
	SignalMedium: () => oT,
	SignalZero: () => sT,
	Signature: () => lT,
	Signpost: () => dT,
	SignpostBig: () => uT,
	Siren: () => fT,
	SkipBack: () => pT,
	SkipForward: () => mT,
	Skull: () => hT,
	Slash: () => gT,
	Slice: () => _T,
	SlidersHorizontal: () => vT,
	SlidersVertical: () => yT,
	Smartphone: () => ST,
	SmartphoneCharging: () => bT,
	SmartphoneNfc: () => xT,
	Snail: () => CT,
	Snowflake: () => wT,
	SoapDispenserDroplet: () => TT,
	Sofa: () => ET,
	SolarPanel: () => DT,
	Soup: () => OT,
	Space: () => kT,
	Spade: () => AT,
	Sparkle: () => jT,
	Sparkles: () => MT,
	Speaker: () => NT,
	Speech: () => PT,
	SpellCheck: () => IT,
	SpellCheck2: () => FT,
	Spline: () => RT,
	SplinePointer: () => LT,
	Split: () => zT,
	Spool: () => VT,
	SportShoe: () => BT,
	Spotlight: () => HT,
	SprayCan: () => UT,
	Sprout: () => WT,
	Square: () => rD,
	SquareActivity: () => GT,
	SquareArrowDown: () => JT,
	SquareArrowDownLeft: () => KT,
	SquareArrowDownRight: () => qT,
	SquareArrowLeft: () => YT,
	SquareArrowOutDownLeft: () => XT,
	SquareArrowOutDownRight: () => ZT,
	SquareArrowOutUpLeft: () => QT,
	SquareArrowOutUpRight: () => $T,
	SquareArrowRight: () => nE,
	SquareArrowRightEnter: () => eE,
	SquareArrowRightExit: () => tE,
	SquareArrowUp: () => aE,
	SquareArrowUpLeft: () => rE,
	SquareArrowUpRight: () => iE,
	SquareAsterisk: () => oE,
	SquareBottomDashedScissors: () => sE,
	SquareCenterlineDashedHorizontal: () => cE,
	SquareCenterlineDashedVertical: () => lE,
	SquareChartGantt: () => J,
	SquareCheck: () => dE,
	SquareCheckBig: () => uE,
	SquareChevronDown: () => fE,
	SquareChevronLeft: () => mE,
	SquareChevronRight: () => pE,
	SquareChevronUp: () => hE,
	SquareCode: () => gE,
	SquareDashed: () => SE,
	SquareDashedBottom: () => _E,
	SquareDashedBottomCode: () => vE,
	SquareDashedKanban: () => yE,
	SquareDashedMousePointer: () => bE,
	SquareDashedText: () => Y,
	SquareDashedTopSolid: () => xE,
	SquareDivide: () => CE,
	SquareDot: () => wE,
	SquareEqual: () => TE,
	SquareFunction: () => EE,
	SquareKanban: () => DE,
	SquareLibrary: () => OE,
	SquareM: () => kE,
	SquareMenu: () => AE,
	SquareMinus: () => jE,
	SquareMousePointer: () => ME,
	SquareOff: () => NE,
	SquareParking: () => FE,
	SquareParkingOff: () => PE,
	SquarePause: () => IE,
	SquarePen: () => X,
	SquarePercent: () => LE,
	SquarePi: () => RE,
	SquarePilcrow: () => zE,
	SquarePlay: () => BE,
	SquarePlus: () => VE,
	SquarePower: () => HE,
	SquareRadical: () => UE,
	SquareRoundCorner: () => WE,
	SquareScissors: () => GE,
	SquareSigma: () => KE,
	SquareSlash: () => qE,
	SquareSplitHorizontal: () => JE,
	SquareSplitVertical: () => YE,
	SquareSquare: () => XE,
	SquareStack: () => ZE,
	SquareStar: () => tD,
	SquareStop: () => QE,
	SquareTerminal: () => $E,
	SquareUser: () => nD,
	SquareUserRound: () => eD,
	SquareX: () => Z,
	SquaresExclude: () => aD,
	SquaresIntersect: () => iD,
	SquaresSubtract: () => oD,
	SquaresUnite: () => sD,
	Squircle: () => lD,
	SquircleDashed: () => cD,
	Squirrel: () => uD,
	Stamp: () => dD,
	Star: () => vD,
	StarCheck: () => fD,
	StarHalf: () => pD,
	StarMinus: () => mD,
	StarOff: () => hD,
	StarPlus: () => gD,
	StarX: () => _D,
	StepBack: () => yD,
	StepForward: () => bD,
	Stethoscope: () => SD,
	Sticker: () => xD,
	StickyNote: () => OD,
	StickyNoteCheck: () => CD,
	StickyNoteMinus: () => TD,
	StickyNoteOff: () => wD,
	StickyNotePlus: () => ED,
	StickyNoteX: () => DD,
	StickyNotes: () => kD,
	Stone: () => jD,
	Store: () => AD,
	StretchHorizontal: () => MD,
	StretchVertical: () => ND,
	Strikethrough: () => PD,
	Subscript: () => FD,
	Summary: () => ID,
	Sun: () => VD,
	SunDim: () => LD,
	SunMedium: () => RD,
	SunMoon: () => zD,
	SunSnow: () => BD,
	Sunrise: () => HD,
	Sunset: () => UD,
	Superscript: () => GD,
	SwatchBook: () => WD,
	SwissFranc: () => KD,
	SwitchCamera: () => qD,
	Sword: () => JD,
	Swords: () => YD,
	Syringe: () => XD,
	Table: () => iO,
	Table2: () => ZD,
	TableCellsMerge: () => QD,
	TableCellsSplit: () => $D,
	TableColumnsSplit: () => eO,
	TableOfContents: () => tO,
	TableProperties: () => nO,
	TableRowsSplit: () => rO,
	Tablet: () => oO,
	TabletSmartphone: () => aO,
	Tablets: () => sO,
	Tag: () => uO,
	TagPlus: () => cO,
	TagX: () => lO,
	Tags: () => dO,
	Tally1: () => fO,
	Tally2: () => pO,
	Tally3: () => mO,
	Tally4: () => gO,
	Tally5: () => hO,
	Tangent: () => _O,
	Target: () => vO,
	Telescope: () => yO,
	Tent: () => xO,
	TentTree: () => bO,
	Terminal: () => SO,
	TestTube: () => wO,
	TestTubeDiagonal: () => CO,
	TestTubes: () => TO,
	TextAlignCenter: () => EO,
	TextAlignEnd: () => DO,
	TextAlignJustify: () => OO,
	TextAlignStart: () => Q,
	TextCursor: () => AO,
	TextCursorInput: () => kO,
	TextInitial: () => jO,
	TextQuote: () => MO,
	TextSearch: () => NO,
	TextWrap: () => PO,
	Theater: () => FO,
	Thermometer: () => LO,
	ThermometerSnowflake: () => IO,
	ThermometerSun: () => RO,
	ThumbsDown: () => zO,
	ThumbsUp: () => BO,
	Ticket: () => qO,
	TicketCheck: () => VO,
	TicketMinus: () => HO,
	TicketPercent: () => UO,
	TicketPlus: () => WO,
	TicketSlash: () => GO,
	TicketX: () => KO,
	Tickets: () => YO,
	TicketsPlane: () => JO,
	Timeline: () => XO,
	Timer: () => $O,
	TimerOff: () => ZO,
	TimerReset: () => QO,
	ToggleLeft: () => ek,
	ToggleRight: () => tk,
	Toilet: () => rk,
	ToolCase: () => nk,
	Toolbox: () => ik,
	Tornado: () => ak,
	Torus: () => ok,
	Touchpad: () => sk,
	TouchpadOff: () => ck,
	TowelRack: () => lk,
	TowerControl: () => uk,
	ToyBrick: () => dk,
	Tractor: () => fk,
	TrafficCone: () => pk,
	TrainFront: () => hk,
	TrainFrontTunnel: () => mk,
	TrainTrack: () => gk,
	TramFront: () => _k,
	Transgender: () => vk,
	Trash: () => bk,
	Trash2: () => yk,
	TreeDeciduous: () => xk,
	TreePalm: () => Sk,
	TreePine: () => Ck,
	Trees: () => wk,
	TrendingDown: () => Tk,
	TrendingUp: () => Dk,
	TrendingUpDown: () => Ek,
	Triangle: () => jk,
	TriangleAlert: () => Ok,
	TriangleDashed: () => kk,
	TriangleRight: () => Ak,
	Trophy: () => Mk,
	Truck: () => Fk,
	TruckElectric: () => Nk,
	TurkishLira: () => Pk,
	Turntable: () => Ik,
	Turtle: () => Lk,
	Tv: () => Bk,
	TvMinimal: () => zk,
	TvMinimalPlay: () => Rk,
	Type: () => Hk,
	TypeOutline: () => Vk,
	Umbrella: () => Wk,
	UmbrellaOff: () => Uk,
	Underline: () => Gk,
	Undo: () => Jk,
	Undo2: () => qk,
	UndoDot: () => Kk,
	UnfoldHorizontal: () => Yk,
	UnfoldVertical: () => Xk,
	Ungroup: () => Zk,
	University: () => Qk,
	Unlink: () => eA,
	Unlink2: () => $k,
	Unplug: () => nA,
	Upload: () => tA,
	Usb: () => rA,
	User: () => TA,
	UserCheck: () => iA,
	UserCog: () => aA,
	UserKey: () => oA,
	UserLock: () => sA,
	UserMinus: () => cA,
	UserPen: () => lA,
	UserPlus: () => uA,
	UserRound: () => yA,
	UserRoundArrowLeft: () => dA,
	UserRoundCheck: () => pA,
	UserRoundCog: () => fA,
	UserRoundKey: () => mA,
	UserRoundMinus: () => hA,
	UserRoundPen: () => gA,
	UserRoundPlus: () => _A,
	UserRoundSearch: () => vA,
	UserRoundX: () => bA,
	UserSearch: () => xA,
	UserShield: () => SA,
	UserStar: () => CA,
	UserX: () => wA,
	Users: () => DA,
	UsersRound: () => EA,
	Utensils: () => kA,
	UtensilsCrossed: () => OA,
	UtilityPole: () => AA,
	Van: () => jA,
	Variable: () => MA,
	Vault: () => NA,
	VectorSquare: () => PA,
	Vegan: () => FA,
	VenetianMask: () => IA,
	Venus: () => zA,
	VenusAndMars: () => LA,
	Vibrate: () => BA,
	VibrateOff: () => RA,
	Video: () => HA,
	VideoOff: () => VA,
	Videotape: () => UA,
	View: () => WA,
	Voicemail: () => GA,
	Volleyball: () => KA,
	Volume: () => ZA,
	Volume1: () => qA,
	Volume2: () => JA,
	VolumeOff: () => YA,
	VolumeX: () => XA,
	Vote: () => $A,
	Wallet: () => tj,
	WalletCards: () => QA,
	WalletMinimal: () => ej,
	Wallpaper: () => nj,
	Wand: () => ij,
	WandSparkles: () => rj,
	Warehouse: () => aj,
	WashingMachine: () => oj,
	Watch: () => sj,
	WavesArrowDown: () => lj,
	WavesArrowUp: () => cj,
	WavesHorizontal: () => $,
	WavesLadder: () => uj,
	WavesVertical: () => dj,
	Waypoints: () => fj,
	Webcam: () => mj,
	WebcamOff: () => pj,
	Webhook: () => hj,
	WebhookOff: () => gj,
	Weight: () => vj,
	WeightTilde: () => _j,
	Wheat: () => xj,
	WheatOff: () => yj,
	WholeWord: () => bj,
	Wifi: () => kj,
	WifiCog: () => Sj,
	WifiHigh: () => Cj,
	WifiLow: () => wj,
	WifiOff: () => Tj,
	WifiPen: () => Ej,
	WifiSync: () => Dj,
	WifiZero: () => Oj,
	Wind: () => jj,
	WindArrowDown: () => Aj,
	Wine: () => Nj,
	WineOff: () => Mj,
	Workflow: () => Pj,
	Worm: () => Fj,
	Wrench: () => Lj,
	WrenchOff: () => Ij,
	X: () => zj,
	XLineTop: () => Rj,
	Zap: () => Hj,
	ZapOff: () => Bj,
	ZodiacAquarius: () => Vj,
	ZodiacAries: () => Uj,
	ZodiacCancer: () => Wj,
	ZodiacCapricorn: () => Gj,
	ZodiacGemini: () => Kj,
	ZodiacLeo: () => qj,
	ZodiacLibra: () => Yj,
	ZodiacOphiuchus: () => Jj,
	ZodiacPisces: () => Xj,
	ZodiacSagittarius: () => Zj,
	ZodiacScorpio: () => Qj,
	ZodiacTaurus: () => $j,
	ZodiacVirgo: () => tM,
	ZoomIn: () => eM,
	ZoomOut: () => nM
});
//#endregion
export { h as AArrowDown, h as AArrowDownIcon, h as LucideAArrowDown, g as AArrowUp, g as AArrowUpIcon, g as LucideAArrowUp, _ as ALargeSmall, _ as ALargeSmallIcon, _ as LucideALargeSmall, v as Accessibility, v as AccessibilityIcon, v as LucideAccessibility, re as Activity, re as ActivityIcon, re as LucideActivity, GT as ActivitySquare, GT as ActivitySquareIcon, GT as LucideActivitySquare, GT as LucideSquareActivity, GT as SquareActivity, GT as SquareActivityIcon, y as Ad, y as AdIcon, y as LucideAd, b as AirVent, b as AirVentIcon, b as LucideAirVent, x as Airplay, x as AirplayIcon, x as LucideAirplay, S as AlarmCheck, S as AlarmCheckIcon, S as AlarmClockCheck, S as AlarmClockCheckIcon, S as LucideAlarmCheck, S as LucideAlarmClockCheck, D as AlarmClock, D as AlarmClockIcon, D as LucideAlarmClock, C as AlarmClockMinus, C as AlarmClockMinusIcon, C as AlarmMinus, C as AlarmMinusIcon, C as LucideAlarmClockMinus, C as LucideAlarmMinus, w as AlarmClockOff, w as AlarmClockOffIcon, w as LucideAlarmClockOff, T as AlarmClockPlus, T as AlarmClockPlusIcon, T as AlarmPlus, T as AlarmPlusIcon, T as LucideAlarmClockPlus, T as LucideAlarmPlus, E as AlarmSmoke, E as AlarmSmokeIcon, E as LucideAlarmSmoke, O as Album, O as AlbumIcon, O as LucideAlbum, fo as AlertCircle, fo as AlertCircleIcon, fo as CircleAlert, fo as CircleAlertIcon, fo as LucideAlertCircle, fo as LucideCircleAlert, Zy as AlertOctagon, Zy as AlertOctagonIcon, Zy as LucideAlertOctagon, Zy as LucideOctagonAlert, Zy as OctagonAlert, Zy as OctagonAlertIcon, Ok as AlertTriangle, Ok as AlertTriangleIcon, Ok as LucideAlertTriangle, Ok as LucideTriangleAlert, Ok as TriangleAlert, Ok as TriangleAlertIcon, EO as AlignCenter, EO as AlignCenterIcon, EO as LucideAlignCenter, EO as LucideTextAlignCenter, EO as TextAlignCenter, EO as TextAlignCenterIcon, k as AlignCenterHorizontal, k as AlignCenterHorizontalIcon, k as LucideAlignCenterHorizontal, M as AlignCenterVertical, M as AlignCenterVerticalIcon, M as LucideAlignCenterVertical, A as AlignEndHorizontal, A as AlignEndHorizontalIcon, A as LucideAlignEndHorizontal, j as AlignEndVertical, j as AlignEndVerticalIcon, j as LucideAlignEndVertical, N as AlignHorizontalDistributeCenter, N as AlignHorizontalDistributeCenterIcon, N as LucideAlignHorizontalDistributeCenter, ie as AlignHorizontalDistributeEnd, ie as AlignHorizontalDistributeEndIcon, ie as LucideAlignHorizontalDistributeEnd, ae as AlignHorizontalDistributeStart, ae as AlignHorizontalDistributeStartIcon, ae as LucideAlignHorizontalDistributeStart, oe as AlignHorizontalJustifyCenter, oe as AlignHorizontalJustifyCenterIcon, oe as LucideAlignHorizontalJustifyCenter, se as AlignHorizontalJustifyEnd, se as AlignHorizontalJustifyEndIcon, se as LucideAlignHorizontalJustifyEnd, ce as AlignHorizontalJustifyStart, ce as AlignHorizontalJustifyStartIcon, ce as LucideAlignHorizontalJustifyStart, le as AlignHorizontalSpaceAround, le as AlignHorizontalSpaceAroundIcon, le as LucideAlignHorizontalSpaceAround, ue as AlignHorizontalSpaceBetween, ue as AlignHorizontalSpaceBetweenIcon, ue as LucideAlignHorizontalSpaceBetween, OO as AlignJustify, OO as AlignJustifyIcon, OO as LucideAlignJustify, OO as LucideTextAlignJustify, OO as TextAlignJustify, OO as TextAlignJustifyIcon, Q as AlignLeft, Q as AlignLeftIcon, Q as LucideAlignLeft, Q as LucideText, Q as LucideTextAlignStart, Q as Text, Q as TextAlignStart, Q as TextAlignStartIcon, Q as TextIcon, DO as AlignRight, DO as AlignRightIcon, DO as LucideAlignRight, DO as LucideTextAlignEnd, DO as TextAlignEnd, DO as TextAlignEndIcon, de as AlignStartHorizontal, de as AlignStartHorizontalIcon, de as LucideAlignStartHorizontal, P as AlignStartVertical, P as AlignStartVerticalIcon, P as LucideAlignStartVertical, fe as AlignVerticalDistributeCenter, fe as AlignVerticalDistributeCenterIcon, fe as LucideAlignVerticalDistributeCenter, pe as AlignVerticalDistributeEnd, pe as AlignVerticalDistributeEndIcon, pe as LucideAlignVerticalDistributeEnd, me as AlignVerticalDistributeStart, me as AlignVerticalDistributeStartIcon, me as LucideAlignVerticalDistributeStart, he as AlignVerticalJustifyCenter, he as AlignVerticalJustifyCenterIcon, he as LucideAlignVerticalJustifyCenter, _e as AlignVerticalJustifyEnd, _e as AlignVerticalJustifyEndIcon, _e as LucideAlignVerticalJustifyEnd, ge as AlignVerticalJustifyStart, ge as AlignVerticalJustifyStartIcon, ge as LucideAlignVerticalJustifyStart, F as AlignVerticalSpaceAround, F as AlignVerticalSpaceAroundIcon, F as LucideAlignVerticalSpaceAround, ve as AlignVerticalSpaceBetween, ve as AlignVerticalSpaceBetweenIcon, ve as LucideAlignVerticalSpaceBetween, ye as Ambulance, ye as AmbulanceIcon, ye as LucideAmbulance, I as Ampersand, I as AmpersandIcon, I as LucideAmpersand, L as Ampersands, L as AmpersandsIcon, L as LucideAmpersands, be as Amphora, be as AmphoraIcon, be as LucideAmphora, xe as Anchor, xe as AnchorIcon, xe as LucideAnchor, Au as Angry, Au as AngryIcon, Au as FaceAngry, Au as FaceAngryIcon, Au as LucideAngry, Au as LucideFaceAngry, Mu as Annoyed, Mu as AnnoyedIcon, Mu as FaceExpressionless, Mu as FaceExpressionlessIcon, Mu as LucideAnnoyed, Mu as LucideFaceExpressionless, Se as Antenna, Se as AntennaIcon, Se as LucideAntenna, Ce as Anvil, Ce as AnvilIcon, Ce as LucideAnvil, we as Aperture, we as ApertureIcon, we as LucideAperture, Ee as AppWindow, Ee as AppWindowIcon, Ee as LucideAppWindow, Te as AppWindowMac, Te as AppWindowMacIcon, Te as LucideAppWindowMac, De as Apple, De as AppleIcon, De as LucideApple, R as Archive, R as ArchiveIcon, R as LucideArchive, Oe as ArchiveRestore, Oe as ArchiveRestoreIcon, Oe as LucideArchiveRestore, ke as ArchiveX, ke as ArchiveXIcon, ke as LucideArchiveX, pa as AreaChart, pa as AreaChartIcon, pa as ChartArea, pa as ChartAreaIcon, pa as LucideAreaChart, pa as LucideChartArea, z as Armchair, z as ArmchairIcon, z as LucideArmchair, Ae as ArrowBigDown, Ae as ArrowBigDownIcon, Ae as LucideArrowBigDown, B as ArrowBigDownDash, B as ArrowBigDownDashIcon, B as LucideArrowBigDownDash, V as ArrowBigLeft, V as ArrowBigLeftIcon, V as LucideArrowBigLeft, je as ArrowBigLeftDash, je as ArrowBigLeftDashIcon, je as LucideArrowBigLeftDash, Ne as ArrowBigRight, Ne as ArrowBigRightIcon, Ne as LucideArrowBigRight, Me as ArrowBigRightDash, Me as ArrowBigRightDashIcon, Me as LucideArrowBigRightDash, Pe as ArrowBigUp, Pe as ArrowBigUpIcon, Pe as LucideArrowBigUp, Fe as ArrowBigUpDash, Fe as ArrowBigUpDashIcon, Fe as LucideArrowBigUpDash, Je as ArrowDown, Je as ArrowDownIcon, Je as LucideArrowDown, Ie as ArrowDown01, Ie as ArrowDown01Icon, Ie as LucideArrowDown01, Le as ArrowDown10, Le as ArrowDown10Icon, Le as LucideArrowDown10, Re as ArrowDownAZ, Re as ArrowDownAZIcon, Re as ArrowDownAz, Re as ArrowDownAzIcon, Re as LucideArrowDownAZ, Re as LucideArrowDownAz, po as ArrowDownCircle, po as ArrowDownCircleIcon, po as CircleArrowDown, po as CircleArrowDownIcon, po as LucideArrowDownCircle, po as LucideCircleArrowDown, Be as ArrowDownFromLine, Be as ArrowDownFromLineIcon, Be as LucideArrowDownFromLine, ze as ArrowDownLeft, ze as ArrowDownLeftIcon, ze as LucideArrowDownLeft, ho as ArrowDownLeftFromCircle, ho as ArrowDownLeftFromCircleIcon, ho as CircleArrowOutDownLeft, ho as CircleArrowOutDownLeftIcon, ho as LucideArrowDownLeftFromCircle, ho as LucideCircleArrowOutDownLeft, XT as ArrowDownLeftFromSquare, XT as ArrowDownLeftFromSquareIcon, XT as LucideArrowDownLeftFromSquare, XT as LucideSquareArrowOutDownLeft, XT as SquareArrowOutDownLeft, XT as SquareArrowOutDownLeftIcon, KT as ArrowDownLeftSquare, KT as ArrowDownLeftSquareIcon, KT as LucideArrowDownLeftSquare, KT as LucideSquareArrowDownLeft, KT as SquareArrowDownLeft, KT as SquareArrowDownLeftIcon, He as ArrowDownNarrowWide, He as ArrowDownNarrowWideIcon, He as LucideArrowDownNarrowWide, Ve as ArrowDownRight, Ve as ArrowDownRightIcon, Ve as LucideArrowDownRight, go as ArrowDownRightFromCircle, go as ArrowDownRightFromCircleIcon, go as CircleArrowOutDownRight, go as CircleArrowOutDownRightIcon, go as LucideArrowDownRightFromCircle, go as LucideCircleArrowOutDownRight, ZT as ArrowDownRightFromSquare, ZT as ArrowDownRightFromSquareIcon, ZT as LucideArrowDownRightFromSquare, ZT as LucideSquareArrowOutDownRight, ZT as SquareArrowOutDownRight, ZT as SquareArrowOutDownRightIcon, qT as ArrowDownRightSquare, qT as ArrowDownRightSquareIcon, qT as LucideArrowDownRightSquare, qT as LucideSquareArrowDownRight, qT as SquareArrowDownRight, qT as SquareArrowDownRightIcon, JT as ArrowDownSquare, JT as ArrowDownSquareIcon, JT as LucideArrowDownSquare, JT as LucideSquareArrowDown, JT as SquareArrowDown, JT as SquareArrowDownIcon, Ue as ArrowDownToDot, Ue as ArrowDownToDotIcon, Ue as LucideArrowDownToDot, We as ArrowDownToLine, We as ArrowDownToLineIcon, We as LucideArrowDownToLine, Ge as ArrowDownUp, Ge as ArrowDownUpIcon, Ge as LucideArrowDownUp, Ke as ArrowDownWideNarrow, Ke as ArrowDownWideNarrowIcon, Ke as LucideArrowDownWideNarrow, Ke as LucideSortDesc, Ke as SortDesc, Ke as SortDescIcon, qe as ArrowDownZA, qe as ArrowDownZAIcon, qe as ArrowDownZa, qe as ArrowDownZaIcon, qe as LucideArrowDownZA, qe as LucideArrowDownZa, Qe as ArrowLeft, Qe as ArrowLeftIcon, Qe as LucideArrowLeft, mo as ArrowLeftCircle, mo as ArrowLeftCircleIcon, mo as CircleArrowLeft, mo as CircleArrowLeftIcon, mo as LucideArrowLeftCircle, mo as LucideCircleArrowLeft, Ye as ArrowLeftFromLine, Ye as ArrowLeftFromLineIcon, Ye as LucideArrowLeftFromLine, Xe as ArrowLeftRight, Xe as ArrowLeftRightIcon, Xe as LucideArrowLeftRight, YT as ArrowLeftSquare, YT as ArrowLeftSquareIcon, YT as LucideArrowLeftSquare, YT as LucideSquareArrowLeft, YT as SquareArrowLeft, YT as SquareArrowLeftIcon, Ze as ArrowLeftToLine, Ze as ArrowLeftToLineIcon, Ze as LucideArrowLeftToLine, nt as ArrowRight, nt as ArrowRightIcon, nt as LucideArrowRight, yo as ArrowRightCircle, yo as ArrowRightCircleIcon, yo as CircleArrowRight, yo as CircleArrowRightIcon, yo as LucideArrowRightCircle, yo as LucideCircleArrowRight, $e as ArrowRightFromLine, $e as ArrowRightFromLineIcon, $e as LucideArrowRightFromLine, et as ArrowRightLeft, et as ArrowRightLeftIcon, et as LucideArrowRightLeft, nE as ArrowRightSquare, nE as ArrowRightSquareIcon, nE as LucideArrowRightSquare, nE as LucideSquareArrowRight, nE as SquareArrowRight, nE as SquareArrowRightIcon, tt as ArrowRightToLine, tt as ArrowRightToLineIcon, tt as LucideArrowRightToLine, ht as ArrowUp, ht as ArrowUpIcon, ht as LucideArrowUp, at as ArrowUp01, at as ArrowUp01Icon, at as LucideArrowUp01, rt as ArrowUp10, rt as ArrowUp10Icon, rt as LucideArrowUp10, it as ArrowUpAZ, it as ArrowUpAZIcon, it as ArrowUpAz, it as ArrowUpAzIcon, it as LucideArrowUpAZ, it as LucideArrowUpAz, bo as ArrowUpCircle, bo as ArrowUpCircleIcon, bo as CircleArrowUp, bo as CircleArrowUpIcon, bo as LucideArrowUpCircle, bo as LucideCircleArrowUp, ot as ArrowUpDown, ot as ArrowUpDownIcon, ot as LucideArrowUpDown, st as ArrowUpFromDot, st as ArrowUpFromDotIcon, st as LucideArrowUpFromDot, ct as ArrowUpFromLine, ct as ArrowUpFromLineIcon, ct as LucideArrowUpFromLine, lt as ArrowUpLeft, lt as ArrowUpLeftIcon, lt as LucideArrowUpLeft, _o as ArrowUpLeftFromCircle, _o as ArrowUpLeftFromCircleIcon, _o as CircleArrowOutUpLeft, _o as CircleArrowOutUpLeftIcon, _o as LucideArrowUpLeftFromCircle, _o as LucideCircleArrowOutUpLeft, QT as ArrowUpLeftFromSquare, QT as ArrowUpLeftFromSquareIcon, QT as LucideArrowUpLeftFromSquare, QT as LucideSquareArrowOutUpLeft, QT as SquareArrowOutUpLeft, QT as SquareArrowOutUpLeftIcon, rE as ArrowUpLeftSquare, rE as ArrowUpLeftSquareIcon, rE as LucideArrowUpLeftSquare, rE as LucideSquareArrowUpLeft, rE as SquareArrowUpLeft, rE as SquareArrowUpLeftIcon, ut as ArrowUpNarrowWide, ut as ArrowUpNarrowWideIcon, ut as LucideArrowUpNarrowWide, ut as LucideSortAsc, ut as SortAsc, ut as SortAscIcon, dt as ArrowUpRight, dt as ArrowUpRightIcon, dt as LucideArrowUpRight, vo as ArrowUpRightFromCircle, vo as ArrowUpRightFromCircleIcon, vo as CircleArrowOutUpRight, vo as CircleArrowOutUpRightIcon, vo as LucideArrowUpRightFromCircle, vo as LucideCircleArrowOutUpRight, $T as ArrowUpRightFromSquare, $T as ArrowUpRightFromSquareIcon, $T as LucideArrowUpRightFromSquare, $T as LucideSquareArrowOutUpRight, $T as SquareArrowOutUpRight, $T as SquareArrowOutUpRightIcon, iE as ArrowUpRightSquare, iE as ArrowUpRightSquareIcon, iE as LucideArrowUpRightSquare, iE as LucideSquareArrowUpRight, iE as SquareArrowUpRight, iE as SquareArrowUpRightIcon, aE as ArrowUpSquare, aE as ArrowUpSquareIcon, aE as LucideArrowUpSquare, aE as LucideSquareArrowUp, aE as SquareArrowUp, aE as SquareArrowUpIcon, ft as ArrowUpToLine, ft as ArrowUpToLineIcon, ft as LucideArrowUpToLine, mt as ArrowUpWideNarrow, mt as ArrowUpWideNarrowIcon, mt as LucideArrowUpWideNarrow, pt as ArrowUpZA, pt as ArrowUpZAIcon, pt as ArrowUpZa, pt as ArrowUpZaIcon, pt as LucideArrowUpZA, pt as LucideArrowUpZa, gt as ArrowsUpFromLine, gt as ArrowsUpFromLineIcon, gt as LucideArrowsUpFromLine, _t as Asterisk, _t as AsteriskIcon, _t as LucideAsterisk, oE as AsteriskSquare, oE as AsteriskSquareIcon, oE as LucideAsteriskSquare, oE as LucideSquareAsterisk, oE as SquareAsterisk, oE as SquareAsteriskIcon, vt as Astroid, vt as AstroidIcon, vt as LucideAstroid, bt as AtSign, bt as AtSignIcon, bt as LucideAtSign, yt as Atom, yt as AtomIcon, yt as LucideAtom, St as AudioLines, St as AudioLinesIcon, St as LucideAudioLines, xt as AudioLinesX, xt as AudioLinesXIcon, xt as LucideAudioLinesX, Ct as AudioWaveform, Ct as AudioWaveformIcon, Ct as LucideAudioWaveform, wt as Award, wt as AwardIcon, wt as LucideAward, Tt as Axe, Tt as AxeIcon, Tt as LucideAxe, Dt as Axis3D, Dt as Axis3DIcon, Dt as Axis3d, Dt as Axis3dIcon, Dt as LucideAxis3D, Dt as LucideAxis3d, Et as Baby, Et as BabyIcon, Et as LucideBaby, Ot as Backpack, Ot as BackpackIcon, Ot as LucideBackpack, Kt as Badge, Kt as BadgeIcon, Kt as LucideBadge, kt as BadgeAlert, kt as BadgeAlertIcon, kt as LucideBadgeAlert, At as BadgeCent, At as BadgeCentIcon, At as LucideBadgeCent, jt as BadgeCheck, jt as BadgeCheckIcon, jt as LucideBadgeCheck, jt as LucideVerified, jt as Verified, jt as VerifiedIcon, Mt as BadgeDollarSign, Mt as BadgeDollarSignIcon, Mt as LucideBadgeDollarSign, Nt as BadgeEuro, Nt as BadgeEuroIcon, Nt as LucideBadgeEuro, Vt as BadgeHelp, Vt as BadgeHelpIcon, Vt as BadgeQuestionMark, Vt as BadgeQuestionMarkIcon, Vt as LucideBadgeHelp, Vt as LucideBadgeQuestionMark, Pt as BadgeIndianRupee, Pt as BadgeIndianRupeeIcon, Pt as LucideBadgeIndianRupee, Ft as BadgeInfo, Ft as BadgeInfoIcon, Ft as LucideBadgeInfo, It as BadgeJapaneseYen, It as BadgeJapaneseYenIcon, It as LucideBadgeJapaneseYen, Lt as BadgeMinus, Lt as BadgeMinusIcon, Lt as LucideBadgeMinus, zt as BadgePercent, zt as BadgePercentIcon, zt as LucideBadgePercent, Rt as BadgePlus, Rt as BadgePlusIcon, Rt as LucideBadgePlus, Bt as BadgePoundSterling, Bt as BadgePoundSterlingIcon, Bt as LucideBadgePoundSterling, Ht as BadgeRussianRuble, Ht as BadgeRussianRubleIcon, Ht as LucideBadgeRussianRuble, Ut as BadgeSwissFranc, Ut as BadgeSwissFrancIcon, Ut as LucideBadgeSwissFranc, Wt as BadgeTurkishLira, Wt as BadgeTurkishLiraIcon, Wt as LucideBadgeTurkishLira, Gt as BadgeX, Gt as BadgeXIcon, Gt as LucideBadgeX, qt as BaggageClaim, qt as BaggageClaimIcon, qt as LucideBaggageClaim, Jt as Balloon, Jt as BalloonIcon, Jt as LucideBalloon, Yt as Ban, Yt as BanIcon, Yt as LucideBan, Xt as Banana, Xt as BananaIcon, Xt as LucideBanana, Zt as Bandage, Zt as BandageIcon, Zt as LucideBandage, nn as Banknote, nn as BanknoteIcon, nn as LucideBanknote, Qt as BanknoteArrowDown, Qt as BanknoteArrowDownIcon, Qt as LucideBanknoteArrowDown, $t as BanknoteArrowUp, $t as BanknoteArrowUpIcon, $t as LucideBanknoteArrowUp, en as BanknoteCheck, en as BanknoteCheckIcon, en as LucideBanknoteCheck, tn as BanknoteX, tn as BanknoteXIcon, tn as LucideBanknoteX, ka as BarChart, ka as BarChartIcon, ka as ChartNoAxesColumnIncreasing, ka as ChartNoAxesColumnIncreasingIcon, ka as LucideBarChart, ka as LucideChartNoAxesColumnIncreasing, Aa as BarChart2, Aa as BarChart2Icon, Aa as ChartNoAxesColumn, Aa as ChartNoAxesColumnIcon, Aa as LucideBarChart2, Aa as LucideChartNoAxesColumn, wa as BarChart3, wa as BarChart3Icon, wa as ChartColumn, wa as ChartColumnIcon, wa as LucideBarChart3, wa as LucideChartColumn, Sa as BarChart4, Sa as BarChart4Icon, Sa as ChartColumnIncreasing, Sa as ChartColumnIncreasingIcon, Sa as LucideBarChart4, Sa as LucideChartColumnIncreasing, ba as BarChartBig, ba as BarChartBigIcon, ba as ChartColumnBig, ba as ChartColumnBigIcon, ba as LucideBarChartBig, ba as LucideChartColumnBig, va as BarChartHorizontal, va as BarChartHorizontalIcon, va as ChartBar, va as ChartBarIcon, va as LucideBarChartHorizontal, va as LucideChartBar, ma as BarChartHorizontalBig, ma as BarChartHorizontalBigIcon, ma as ChartBarBig, ma as ChartBarBigIcon, ma as LucideBarChartHorizontalBig, ma as LucideChartBarBig, rn as Barcode, rn as BarcodeIcon, rn as LucideBarcode, on as Barrel, on as BarrelIcon, on as LucideBarrel, an as Baseline, an as BaselineIcon, an as LucideBaseline, sn as Bath, sn as BathIcon, sn as LucideBath, hn as Battery, hn as BatteryIcon, hn as LucideBattery, un as BatteryCharging, un as BatteryChargingIcon, un as LucideBatteryCharging, ln as BatteryFull, ln as BatteryFullIcon, ln as LucideBatteryFull, cn as BatteryLow, cn as BatteryLowIcon, cn as LucideBatteryLow, dn as BatteryMedium, dn as BatteryMediumIcon, dn as LucideBatteryMedium, fn as BatteryPlus, fn as BatteryPlusIcon, fn as LucideBatteryPlus, pn as BatteryWarning, pn as BatteryWarningIcon, pn as LucideBatteryWarning, mn as Beaker, mn as BeakerIcon, mn as LucideBeaker, _n as Bean, _n as BeanIcon, _n as LucideBean, gn as BeanOff, gn as BeanOffIcon, gn as LucideBeanOff, bn as Bed, bn as BedIcon, bn as LucideBed, vn as BedDouble, vn as BedDoubleIcon, vn as LucideBedDouble, yn as BedSingle, yn as BedSingleIcon, yn as LucideBedSingle, Sn as Beef, Sn as BeefIcon, Sn as LucideBeef, xn as BeefOff, xn as BeefOffIcon, xn as LucideBeefOff, wn as Beer, wn as BeerIcon, wn as LucideBeer, Cn as BeerOff, Cn as BeerOffIcon, Cn as LucideBeerOff, Mn as Bell, Mn as BellIcon, Mn as LucideBell, En as BellCheck, En as BellCheckIcon, En as LucideBellCheck, Tn as BellDot, Tn as BellDotIcon, Tn as LucideBellDot, Dn as BellElectric, Dn as BellElectricIcon, Dn as LucideBellElectric, On as BellMinus, On as BellMinusIcon, On as LucideBellMinus, kn as BellOff, kn as BellOffIcon, kn as LucideBellOff, An as BellPlus, An as BellPlusIcon, An as LucideBellPlus, jn as BellRing, jn as BellRingIcon, jn as LucideBellRing, Pn as BetweenHorizonalEnd, Pn as BetweenHorizonalEndIcon, Pn as BetweenHorizontalEnd, Pn as BetweenHorizontalEndIcon, Pn as LucideBetweenHorizonalEnd, Pn as LucideBetweenHorizontalEnd, Nn as BetweenHorizonalStart, Nn as BetweenHorizonalStartIcon, Nn as BetweenHorizontalStart, Nn as BetweenHorizontalStartIcon, Nn as LucideBetweenHorizonalStart, Nn as LucideBetweenHorizontalStart, Fn as BetweenVerticalEnd, Fn as BetweenVerticalEndIcon, Fn as LucideBetweenVerticalEnd, In as BetweenVerticalStart, In as BetweenVerticalStartIcon, In as LucideBetweenVerticalStart, Ln as BicepsFlexed, Ln as BicepsFlexedIcon, Ln as LucideBicepsFlexed, Rn as Bike, Rn as BikeIcon, Rn as LucideBike, zn as Binary, zn as BinaryIcon, zn as LucideBinary, Bn as Binoculars, Bn as BinocularsIcon, Bn as LucideBinoculars, Vn as Biohazard, Vn as BiohazardIcon, Vn as LucideBiohazard, Hn as Bird, Hn as BirdIcon, Hn as LucideBird, Un as Birdhouse, Un as BirdhouseIcon, Un as LucideBirdhouse, Wn as Bitcoin, Wn as BitcoinIcon, Wn as LucideBitcoin, Gn as Blend, Gn as BlendIcon, Gn as LucideBlend, Kn as Blender, Kn as BlenderIcon, Kn as LucideBlender, Jn as Blinds, Jn as BlindsIcon, Jn as LucideBlinds, qn as Blocks, qn as BlocksIcon, qn as LucideBlocks, Qn as Bluetooth, Qn as BluetoothIcon, Qn as LucideBluetooth, Yn as BluetoothConnected, Yn as BluetoothConnectedIcon, Yn as LucideBluetoothConnected, Xn as BluetoothOff, Xn as BluetoothOffIcon, Xn as LucideBluetoothOff, Zn as BluetoothSearching, Zn as BluetoothSearchingIcon, Zn as LucideBluetoothSearching, $n as Bold, $n as BoldIcon, $n as LucideBold, er as Bolt, er as BoltIcon, er as LucideBolt, nr as Bomb, nr as BombIcon, nr as LucideBomb, rr as Bone, rr as BoneIcon, rr as LucideBone, tr as BoneFracture, tr as BoneFractureIcon, tr as LucideBoneFracture, kr as Book, kr as BookIcon, kr as LucideBook, ir as BookA, ir as BookAIcon, ir as LucideBookA, ar as BookAlert, ar as BookAlertIcon, ar as LucideBookAlert, or as BookAudio, or as BookAudioIcon, or as LucideBookAudio, sr as BookCheck, sr as BookCheckIcon, sr as LucideBookCheck, ur as BookCopy, ur as BookCopyIcon, ur as LucideBookCopy, cr as BookDashed, cr as BookDashedIcon, cr as BookTemplate, cr as BookTemplateIcon, cr as LucideBookDashed, cr as LucideBookTemplate, lr as BookDown, lr as BookDownIcon, lr as LucideBookDown, dr as BookHeadphones, dr as BookHeadphonesIcon, dr as LucideBookHeadphones, fr as BookHeart, fr as BookHeartIcon, fr as LucideBookHeart, pr as BookImage, pr as BookImageIcon, pr as LucideBookImage, mr as BookKey, mr as BookKeyIcon, mr as LucideBookKey, hr as BookLock, hr as BookLockIcon, hr as LucideBookLock, _r as BookMarked, _r as BookMarkedIcon, _r as LucideBookMarked, gr as BookMinus, gr as BookMinusIcon, gr as LucideBookMinus, xr as BookOpen, xr as BookOpenIcon, xr as LucideBookOpen, vr as BookOpenCheck, vr as BookOpenCheckIcon, vr as LucideBookOpenCheck, yr as BookOpenText, yr as BookOpenTextIcon, yr as LucideBookOpenText, br as BookPlus, br as BookPlusIcon, br as LucideBookPlus, Sr as BookSearch, Sr as BookSearchIcon, Sr as LucideBookSearch, Cr as BookText, Cr as BookTextIcon, Cr as LucideBookText, wr as BookType, wr as BookTypeIcon, wr as LucideBookType, Tr as BookUp, Tr as BookUpIcon, Tr as LucideBookUp, Er as BookUp2, Er as BookUp2Icon, Er as LucideBookUp2, Dr as BookUser, Dr as BookUserIcon, Dr as LucideBookUser, Or as BookX, Or as BookXIcon, Or as LucideBookX, Fr as Bookmark, Fr as BookmarkIcon, Fr as LucideBookmark, Ar as BookmarkCheck, Ar as BookmarkCheckIcon, Ar as LucideBookmarkCheck, jr as BookmarkMinus, jr as BookmarkMinusIcon, jr as LucideBookmarkMinus, Mr as BookmarkOff, Mr as BookmarkOffIcon, Mr as LucideBookmarkOff, Nr as BookmarkPlus, Nr as BookmarkPlusIcon, Nr as LucideBookmarkPlus, Pr as BookmarkX, Pr as BookmarkXIcon, Pr as LucideBookmarkX, Ir as BoomBox, Ir as BoomBoxIcon, Ir as LucideBoomBox, zr as Bot, zr as BotIcon, zr as LucideBot, Lr as BotMessageSquare, Lr as BotMessageSquareIcon, Lr as LucideBotMessageSquare, Rr as BotOff, Rr as BotOffIcon, Rr as LucideBotOff, Br as BottleWine, Br as BottleWineIcon, Br as LucideBottleWine, Vr as BowArrow, Vr as BowArrowIcon, Vr as LucideBowArrow, Hr as Box, Hr as BoxIcon, Hr as LucideBox, SE as BoxSelect, SE as BoxSelectIcon, SE as LucideBoxSelect, SE as LucideSquareDashed, SE as SquareDashed, SE as SquareDashedIcon, Wr as Boxes, Wr as BoxesIcon, Wr as LucideBoxes, Ur as Braces, Ur as BracesIcon, Ur as CurlyBraces, Ur as CurlyBracesIcon, Ur as LucideBraces, Ur as LucideCurlyBraces, Gr as Brackets, Gr as BracketsIcon, Gr as LucideBrackets, Jr as Brain, Jr as BrainIcon, Jr as LucideBrain, Kr as BrainCircuit, Kr as BrainCircuitIcon, Kr as LucideBrainCircuit, qr as BrainCog, qr as BrainCogIcon, qr as LucideBrainCog, Zr as BrickWall, Zr as BrickWallIcon, Zr as LucideBrickWall, Yr as BrickWallFire, Yr as BrickWallFireIcon, Yr as LucideBrickWallFire, Xr as BrickWallShield, Xr as BrickWallShieldIcon, Xr as LucideBrickWallShield, ei as Briefcase, ei as BriefcaseIcon, ei as LucideBriefcase, Qr as BriefcaseBusiness, Qr as BriefcaseBusinessIcon, Qr as LucideBriefcaseBusiness, $r as BriefcaseConveyorBelt, $r as BriefcaseConveyorBeltIcon, $r as LucideBriefcaseConveyorBelt, ti as BriefcaseMedical, ti as BriefcaseMedicalIcon, ti as LucideBriefcaseMedical, ni as BringToFront, ni as BringToFrontIcon, ni as LucideBringToFront, ri as Broccoli, ri as BroccoliIcon, ri as LucideBroccoli, ai as Broom, ai as BroomIcon, ai as LucideBroom, ii as BroomSparkles, ii as BroomSparklesIcon, ii as LucideBroomSparkles, si as Brush, si as BrushIcon, si as LucideBrush, oi as BrushCleaning, oi as BrushCleaningIcon, oi as LucideBrushCleaning, ci as Bubbles, ci as BubblesIcon, ci as LucideBubbles, di as Bug, di as BugIcon, di as LucideBug, li as BugOff, li as BugOffIcon, li as LucideBugOff, ui as BugPlay, ui as BugPlayIcon, ui as LucideBugPlay, pi as Building, pi as BuildingIcon, pi as LucideBuilding, fi as Building2, fi as Building2Icon, fi as LucideBuilding2, hi as Bus, hi as BusIcon, hi as LucideBus, mi as BusFront, mi as BusFrontIcon, mi as LucideBusFront, _i as Cable, _i as CableIcon, _i as LucideCable, gi as CableCar, gi as CableCarIcon, gi as LucideCableCar, yi as Cake, yi as CakeIcon, yi as LucideCake, vi as CakeSlice, vi as CakeSliceIcon, vi as LucideCakeSlice, bi as Calculator, bi as CalculatorIcon, bi as LucideCalculator, Hi as Calendar, Hi as CalendarIcon, Hi as LucideCalendar, xi as Calendar1, xi as Calendar1Icon, xi as LucideCalendar1, Ci as CalendarArrowDown, Ci as CalendarArrowDownIcon, Ci as LucideCalendarArrowDown, Si as CalendarArrowUp, Si as CalendarArrowUpIcon, Si as LucideCalendarArrowUp, Ti as CalendarCheck, Ti as CalendarCheckIcon, Ti as LucideCalendarCheck, wi as CalendarCheck2, wi as CalendarCheck2Icon, wi as LucideCalendarCheck2, Ei as CalendarClock, Ei as CalendarClockIcon, Ei as LucideCalendarClock, Di as CalendarCog, Di as CalendarCogIcon, Di as LucideCalendarCog, Oi as CalendarDays, Oi as CalendarDaysIcon, Oi as LucideCalendarDays, ki as CalendarFold, ki as CalendarFoldIcon, ki as LucideCalendarFold, Mi as CalendarHeart, Mi as CalendarHeartIcon, Mi as LucideCalendarHeart, ji as CalendarMinus, ji as CalendarMinusIcon, ji as LucideCalendarMinus, Ai as CalendarMinus2, Ai as CalendarMinus2Icon, Ai as LucideCalendarMinus2, Ni as CalendarOff, Ni as CalendarOffIcon, Ni as LucideCalendarOff, Fi as CalendarPlus, Fi as CalendarPlusIcon, Fi as LucideCalendarPlus, Pi as CalendarPlus2, Pi as CalendarPlus2Icon, Pi as LucideCalendarPlus2, Ii as CalendarRange, Ii as CalendarRangeIcon, Ii as LucideCalendarRange, Li as CalendarSearch, Li as CalendarSearchIcon, Li as LucideCalendarSearch, Ri as CalendarSync, Ri as CalendarSyncIcon, Ri as LucideCalendarSync, Bi as CalendarX, Bi as CalendarXIcon, Bi as LucideCalendarX, zi as CalendarX2, zi as CalendarX2Icon, zi as LucideCalendarX2, Vi as Calendars, Vi as CalendarsIcon, Vi as LucideCalendars, Wi as Camera, Wi as CameraIcon, Wi as LucideCamera, Ui as CameraOff, Ui as CameraOffIcon, Ui as LucideCameraOff, ya as CandlestickChart, ya as CandlestickChartIcon, ya as ChartCandlestick, ya as ChartCandlestickIcon, ya as LucideCandlestickChart, ya as LucideChartCandlestick, qi as Candy, qi as CandyIcon, qi as LucideCandy, Gi as CandyCane, Gi as CandyCaneIcon, Gi as LucideCandyCane, Ki as CandyOff, Ki as CandyOffIcon, Ki as LucideCandyOff, Yi as Cannabis, Yi as CannabisIcon, Yi as LucideCannabis, Ji as CannabisOff, Ji as CannabisOffIcon, Ji as LucideCannabisOff, Zi as Captions, Zi as CaptionsIcon, Zi as LucideCaptions, Zi as LucideSubtitles, Zi as Subtitles, Zi as SubtitlesIcon, Xi as CaptionsOff, Xi as CaptionsOffIcon, Xi as LucideCaptionsOff, ea as Car, ea as CarIcon, ea as LucideCar, Qi as CarFront, Qi as CarFrontIcon, Qi as LucideCarFront, $i as CarTaxiFront, $i as CarTaxiFrontIcon, $i as LucideCarTaxiFront, ta as Caravan, ta as CaravanIcon, ta as LucideCaravan, na as CardSim, na as CardSimIcon, na as LucideCardSim, ra as Carrot, ra as CarrotIcon, ra as LucideCarrot, ia as CaseLower, ia as CaseLowerIcon, ia as LucideCaseLower, aa as CaseSensitive, aa as CaseSensitiveIcon, aa as LucideCaseSensitive, oa as CaseUpper, oa as CaseUpperIcon, oa as LucideCaseUpper, sa as CassetteTape, sa as CassetteTapeIcon, sa as LucideCassetteTape, ca as Cast, ca as CastIcon, ca as LucideCast, la as Castle, la as CastleIcon, la as LucideCastle, ua as Cat, ua as CatIcon, ua as LucideCat, fa as Cctv, fa as CctvIcon, fa as LucideCctv, da as CctvOff, da as CctvOffIcon, da as LucideCctvOff, ga as ChartBarDecreasing, ga as ChartBarDecreasingIcon, ga as LucideChartBarDecreasing, ha as ChartBarIncreasing, ha as ChartBarIncreasingIcon, ha as LucideChartBarIncreasing, _a as ChartBarStacked, _a as ChartBarStackedIcon, _a as LucideChartBarStacked, xa as ChartColumnDecreasing, xa as ChartColumnDecreasingIcon, xa as LucideChartColumnDecreasing, Ca as ChartColumnStacked, Ca as ChartColumnStackedIcon, Ca as LucideChartColumnStacked, Ta as ChartGantt, Ta as ChartGanttIcon, Ta as LucideChartGantt, Ea as ChartLine, Ea as ChartLineIcon, Ea as LineChart, Ea as LineChartIcon, Ea as LucideChartLine, Ea as LucideLineChart, Da as ChartNetwork, Da as ChartNetworkIcon, Da as LucideChartNetwork, Oa as ChartNoAxesColumnDecreasing, Oa as ChartNoAxesColumnDecreasingIcon, Oa as LucideChartNoAxesColumnDecreasing, ja as ChartNoAxesCombined, ja as ChartNoAxesCombinedIcon, ja as LucideChartNoAxesCombined, Ma as ChartNoAxesGantt, Ma as ChartNoAxesGanttIcon, Ma as GanttChart, Ma as GanttChartIcon, Ma as LucideChartNoAxesGantt, Ma as LucideGanttChart, Na as ChartPie, Na as ChartPieIcon, Na as LucideChartPie, Na as LucidePieChart, Na as PieChart, Na as PieChartIcon, Pa as ChartScatter, Pa as ChartScatterIcon, Pa as LucideChartScatter, Pa as LucideScatterChart, Pa as ScatterChart, Pa as ScatterChartIcon, Fa as ChartSpline, Fa as ChartSplineIcon, Fa as LucideChartSpline, Ra as Check, Ra as CheckIcon, Ra as LucideCheck, Ia as CheckCheck, Ia as CheckCheckIcon, Ia as LucideCheckCheck, xo as CheckCircle, xo as CheckCircleIcon, xo as CircleCheckBig, xo as CircleCheckBigIcon, xo as LucideCheckCircle, xo as LucideCircleCheckBig, So as CheckCircle2, So as CheckCircle2Icon, So as CircleCheck, So as CircleCheckIcon, So as LucideCheckCircle2, So as LucideCircleCheck, La as CheckLine, La as CheckLineIcon, La as LucideCheckLine, uE as CheckSquare, uE as CheckSquareIcon, uE as LucideCheckSquare, uE as LucideSquareCheckBig, uE as SquareCheckBig, uE as SquareCheckBigIcon, dE as CheckSquare2, dE as CheckSquare2Icon, dE as LucideCheckSquare2, dE as LucideSquareCheck, dE as SquareCheck, dE as SquareCheckIcon, za as ChefHat, za as ChefHatIcon, za as LucideChefHat, Ba as Cherry, Ba as CherryIcon, Ba as LucideCherry, Va as ChessBishop, Va as ChessBishopIcon, Va as LucideChessBishop, Ua as ChessKing, Ua as ChessKingIcon, Ua as LucideChessKing, Ha as ChessKnight, Ha as ChessKnightIcon, Ha as LucideChessKnight, Wa as ChessPawn, Wa as ChessPawnIcon, Wa as LucideChessPawn, Ga as ChessQueen, Ga as ChessQueenIcon, Ga as LucideChessQueen, Ka as ChessRook, Ka as ChessRookIcon, Ka as LucideChessRook, qa as ChevronDown, qa as ChevronDownIcon, qa as LucideChevronDown, wo as ChevronDownCircle, wo as ChevronDownCircleIcon, wo as CircleChevronDown, wo as CircleChevronDownIcon, wo as LucideChevronDownCircle, wo as LucideCircleChevronDown, fE as ChevronDownSquare, fE as ChevronDownSquareIcon, fE as LucideChevronDownSquare, fE as LucideSquareChevronDown, fE as SquareChevronDown, fE as SquareChevronDownIcon, Ja as ChevronFirst, Ja as ChevronFirstIcon, Ja as LucideChevronFirst, Ya as ChevronLast, Ya as ChevronLastIcon, Ya as LucideChevronLast, Xa as ChevronLeft, Xa as ChevronLeftIcon, Xa as LucideChevronLeft, Co as ChevronLeftCircle, Co as ChevronLeftCircleIcon, Co as CircleChevronLeft, Co as CircleChevronLeftIcon, Co as LucideChevronLeftCircle, Co as LucideCircleChevronLeft, mE as ChevronLeftSquare, mE as ChevronLeftSquareIcon, mE as LucideChevronLeftSquare, mE as LucideSquareChevronLeft, mE as SquareChevronLeft, mE as SquareChevronLeftIcon, Za as ChevronRight, Za as ChevronRightIcon, Za as LucideChevronRight, To as ChevronRightCircle, To as ChevronRightCircleIcon, To as CircleChevronRight, To as CircleChevronRightIcon, To as LucideChevronRightCircle, To as LucideCircleChevronRight, pE as ChevronRightSquare, pE as ChevronRightSquareIcon, pE as LucideChevronRightSquare, pE as LucideSquareChevronRight, pE as SquareChevronRight, pE as SquareChevronRightIcon, Qa as ChevronUp, Qa as ChevronUpIcon, Qa as LucideChevronUp, Eo as ChevronUpCircle, Eo as ChevronUpCircleIcon, Eo as CircleChevronUp, Eo as CircleChevronUpIcon, Eo as LucideChevronUpCircle, Eo as LucideCircleChevronUp, hE as ChevronUpSquare, hE as ChevronUpSquareIcon, hE as LucideChevronUpSquare, hE as LucideSquareChevronUp, hE as SquareChevronUp, hE as SquareChevronUpIcon, eo as ChevronsDown, eo as ChevronsDownIcon, eo as LucideChevronsDown, $a as ChevronsDownUp, $a as ChevronsDownUpIcon, $a as LucideChevronsDownUp, ro as ChevronsLeft, ro as ChevronsLeftIcon, ro as LucideChevronsLeft, no as ChevronsLeftRight, no as ChevronsLeftRightIcon, no as LucideChevronsLeftRight, to as ChevronsLeftRightEllipsis, to as ChevronsLeftRightEllipsisIcon, to as LucideChevronsLeftRightEllipsis, ao as ChevronsRight, ao as ChevronsRightIcon, ao as LucideChevronsRight, io as ChevronsRightLeft, io as ChevronsRightLeftIcon, io as LucideChevronsRightLeft, so as ChevronsUp, so as ChevronsUpIcon, so as LucideChevronsUp, oo as ChevronsUpDown, oo as ChevronsUpDownIcon, oo as LucideChevronsUpDown, co as Church, co as ChurchIcon, co as LucideChurch, lo as Cigarette, lo as CigaretteIcon, lo as LucideCigarette, uo as CigaretteOff, uo as CigaretteOffIcon, uo as LucideCigaretteOff, rs as Circle, rs as CircleIcon, rs as LucideCircle, Do as CircleDashed, Do as CircleDashedIcon, Do as LucideCircleDashed, Oo as CircleDivide, Oo as CircleDivideIcon, Oo as DivideCircle, Oo as DivideCircleIcon, Oo as LucideCircleDivide, Oo as LucideDivideCircle, ko as CircleDollarSign, ko as CircleDollarSignIcon, ko as LucideCircleDollarSign, Mo as CircleDot, Mo as CircleDotIcon, Mo as LucideCircleDot, Ao as CircleDotDashed, Ao as CircleDotDashedIcon, Ao as LucideCircleDotDashed, jo as CircleEllipsis, jo as CircleEllipsisIcon, jo as LucideCircleEllipsis, No as CircleEqual, No as CircleEqualIcon, No as LucideCircleEqual, Po as CircleEuro, Po as CircleEuroIcon, Po as LucideCircleEuro, Fo as CircleFadingArrowUp, Fo as CircleFadingArrowUpIcon, Fo as LucideCircleFadingArrowUp, Io as CircleFadingPlus, Io as CircleFadingPlusIcon, Io as LucideCircleFadingPlus, Lo as CircleGauge, Lo as CircleGaugeIcon, Lo as GaugeCircle, Lo as GaugeCircleIcon, Lo as LucideCircleGauge, Lo as LucideGaugeCircle, H as CircleHelp, H as CircleHelpIcon, H as CircleQuestionMark, H as CircleQuestionMarkIcon, H as HelpCircle, H as HelpCircleIcon, H as LucideCircleHelp, H as LucideCircleQuestionMark, H as LucideHelpCircle, Ro as CircleMinus, Ro as CircleMinusIcon, Ro as LucideCircleMinus, Ro as LucideMinusCircle, Ro as MinusCircle, Ro as MinusCircleIcon, zo as CircleOff, zo as CircleOffIcon, zo as LucideCircleOff, Vo as CircleParking, Vo as CircleParkingIcon, Vo as LucideCircleParking, Vo as LucideParkingCircle, Vo as ParkingCircle, Vo as ParkingCircleIcon, Bo as CircleParkingOff, Bo as CircleParkingOffIcon, Bo as LucideCircleParkingOff, Bo as LucideParkingCircleOff, Bo as ParkingCircleOff, Bo as ParkingCircleOffIcon, Ho as CirclePause, Ho as CirclePauseIcon, Ho as LucideCirclePause, Ho as LucidePauseCircle, Ho as PauseCircle, Ho as PauseCircleIcon, Uo as CirclePercent, Uo as CirclePercentIcon, Uo as LucideCirclePercent, Uo as LucidePercentCircle, Uo as PercentCircle, Uo as PercentCircleIcon, Wo as CirclePile, Wo as CirclePileIcon, Wo as LucideCirclePile, Ko as CirclePlay, Ko as CirclePlayIcon, Ko as LucideCirclePlay, Ko as LucidePlayCircle, Ko as PlayCircle, Ko as PlayCircleIcon, Go as CirclePlus, Go as CirclePlusIcon, Go as LucideCirclePlus, Go as LucidePlusCircle, Go as PlusCircle, Go as PlusCircleIcon, qo as CirclePoundSterling, qo as CirclePoundSterlingIcon, qo as LucideCirclePoundSterling, Jo as CirclePower, Jo as CirclePowerIcon, Jo as LucideCirclePower, Jo as LucidePowerCircle, Jo as PowerCircle, Jo as PowerCircleIcon, Yo as CircleSlash, Yo as CircleSlashIcon, Yo as LucideCircleSlash, Xo as CircleSlash2, Xo as CircleSlash2Icon, Xo as CircleSlashed, Xo as CircleSlashedIcon, Xo as LucideCircleSlash2, Xo as LucideCircleSlashed, Zo as CircleSmall, Zo as CircleSmallIcon, Zo as LucideCircleSmall, Qo as CircleStar, Qo as CircleStarIcon, Qo as LucideCircleStar, $o as CircleStop, $o as CircleStopIcon, $o as LucideCircleStop, $o as LucideStopCircle, $o as StopCircle, $o as StopCircleIcon, ts as CircleUser, ts as CircleUserIcon, ts as LucideCircleUser, ts as LucideUserCircle, ts as UserCircle, ts as UserCircleIcon, es as CircleUserRound, es as CircleUserRoundIcon, es as LucideCircleUserRound, es as LucideUserCircle2, es as UserCircle2, es as UserCircle2Icon, ns as CircleX, ns as CircleXIcon, ns as LucideCircleX, ns as LucideXCircle, ns as XCircle, ns as XCircleIcon, is as CircuitBoard, is as CircuitBoardIcon, is as LucideCircuitBoard, as as Citrus, as as CitrusIcon, as as LucideCitrus, os as Clapperboard, os as ClapperboardIcon, os as LucideClapperboard, vs as Clipboard, vs as ClipboardIcon, vs as LucideClipboard, ss as ClipboardCheck, ss as ClipboardCheckIcon, ss as LucideClipboardCheck, cs as ClipboardClock, cs as ClipboardClockIcon, cs as LucideClipboardClock, us as ClipboardCopy, us as ClipboardCopyIcon, us as LucideClipboardCopy, ms as ClipboardEdit, ms as ClipboardEditIcon, ms as ClipboardPen, ms as ClipboardPenIcon, ms as LucideClipboardEdit, ms as LucideClipboardPen, ls as ClipboardList, ls as ClipboardListIcon, ls as LucideClipboardList, ds as ClipboardMinus, ds as ClipboardMinusIcon, ds as LucideClipboardMinus, fs as ClipboardPaste, fs as ClipboardPasteIcon, fs as LucideClipboardPaste, ps as ClipboardPenLine, ps as ClipboardPenLineIcon, ps as ClipboardSignature, ps as ClipboardSignatureIcon, ps as LucideClipboardPenLine, ps as LucideClipboardSignature, hs as ClipboardPlus, hs as ClipboardPlusIcon, hs as LucideClipboardPlus, gs as ClipboardType, gs as ClipboardTypeIcon, gs as LucideClipboardType, _s as ClipboardX, _s as ClipboardXIcon, _s as LucideClipboardX, Vs as Clock, Vs as ClockIcon, Vs as LucideClock, ys as Clock1, ys as Clock1Icon, ys as LucideClock1, bs as Clock10, bs as Clock10Icon, bs as LucideClock10, xs as Clock11, xs as Clock11Icon, xs as LucideClock11, Ss as Clock12, Ss as Clock12Icon, Ss as LucideClock12, Cs as Clock2, Cs as Clock2Icon, Cs as LucideClock2, ws as Clock3, ws as Clock3Icon, ws as LucideClock3, Ts as Clock4, Ts as Clock4Icon, Ts as LucideClock4, Ds as Clock5, Ds as Clock5Icon, Ds as LucideClock5, Es as Clock6, Es as Clock6Icon, Es as LucideClock6, Os as Clock7, Os as Clock7Icon, Os as LucideClock7, ks as Clock8, ks as Clock8Icon, ks as LucideClock8, As as Clock9, As as Clock9Icon, As as LucideClock9, js as ClockAlert, js as ClockAlertIcon, js as LucideClockAlert, Ms as ClockArrowDown, Ms as ClockArrowDownIcon, Ms as LucideClockArrowDown, Ps as ClockArrowLeft, Ps as ClockArrowLeftIcon, Ps as LucideClockArrowLeft, Ns as ClockArrowRight, Ns as ClockArrowRightIcon, Ns as LucideClockArrowRight, Fs as ClockArrowUp, Fs as ClockArrowUpIcon, Fs as LucideClockArrowUp, Is as ClockCheck, Is as ClockCheckIcon, Is as LucideClockCheck, Ls as ClockFading, Ls as ClockFadingIcon, Ls as LucideClockFading, Rs as ClockPlus, Rs as ClockPlusIcon, Rs as LucideClockPlus, zs as ClosedCaption, zs as ClosedCaptionIcon, zs as LucideClosedCaption, ac as Cloud, ac as CloudIcon, ac as LucideCloud, Bs as CloudAlert, Bs as CloudAlertIcon, Bs as LucideCloudAlert, Hs as CloudBackup, Hs as CloudBackupIcon, Hs as LucideCloudBackup, Us as CloudCheck, Us as CloudCheckIcon, Us as LucideCloudCheck, Ws as CloudCog, Ws as CloudCogIcon, Ws as LucideCloudCog, Gs as CloudDownload, Gs as CloudDownloadIcon, Gs as DownloadCloud, Gs as DownloadCloudIcon, Gs as LucideCloudDownload, Gs as LucideDownloadCloud, Ks as CloudDrizzle, Ks as CloudDrizzleIcon, Ks as LucideCloudDrizzle, qs as CloudFog, qs as CloudFogIcon, qs as LucideCloudFog, Js as CloudHail, Js as CloudHailIcon, Js as LucideCloudHail, Ys as CloudLightning, Ys as CloudLightningIcon, Ys as LucideCloudLightning, Qs as CloudMoon, Qs as CloudMoonIcon, Qs as LucideCloudMoon, Xs as CloudMoonRain, Xs as CloudMoonRainIcon, Xs as LucideCloudMoonRain, Zs as CloudOff, Zs as CloudOffIcon, Zs as LucideCloudOff, ec as CloudRain, ec as CloudRainIcon, ec as LucideCloudRain, $s as CloudRainWind, $s as CloudRainWindIcon, $s as LucideCloudRainWind, tc as CloudSnow, tc as CloudSnowIcon, tc as LucideCloudSnow, rc as CloudSun, rc as CloudSunIcon, rc as LucideCloudSun, nc as CloudSunRain, nc as CloudSunRainIcon, nc as LucideCloudSunRain, ic as CloudSync, ic as CloudSyncIcon, ic as LucideCloudSync, oc as CloudUpload, oc as CloudUploadIcon, oc as LucideCloudUpload, oc as LucideUploadCloud, oc as UploadCloud, oc as UploadCloudIcon, sc as Cloudy, sc as CloudyIcon, sc as LucideCloudy, cc as Clover, cc as CloverIcon, cc as LucideClover, lc as Club, lc as ClubIcon, lc as LucideClub, dc as Code, dc as CodeIcon, dc as LucideCode, uc as Code2, uc as Code2Icon, uc as CodeXml, uc as CodeXmlIcon, uc as LucideCode2, uc as LucideCodeXml, gE as CodeSquare, gE as CodeSquareIcon, gE as LucideCodeSquare, gE as LucideSquareCode, gE as SquareCode, gE as SquareCodeIcon, fc as Coffee, fc as CoffeeIcon, fc as LucideCoffee, pc as Cog, pc as CogIcon, pc as LucideCog, mc as Coins, mc as CoinsIcon, mc as LucideCoins, hc as Columns, hc as Columns2, hc as Columns2Icon, hc as ColumnsIcon, hc as LucideColumns, hc as LucideColumns2, gc as Columns3, gc as Columns3Icon, gc as LucideColumns3, gc as LucidePanelsLeftRight, gc as PanelsLeftRight, gc as PanelsLeftRightIcon, U as Columns3Cog, U as Columns3CogIcon, U as ColumnsSettings, U as ColumnsSettingsIcon, U as LucideColumns3Cog, U as LucideColumnsSettings, U as LucideTableConfig, U as TableConfig, U as TableConfigIcon, _c as Columns4, _c as Columns4Icon, _c as LucideColumns4, vc as Combine, vc as CombineIcon, vc as LucideCombine, yc as Command, yc as CommandIcon, yc as LucideCommand, bc as Compass, bc as CompassIcon, bc as LucideCompass, xc as Component, xc as ComponentIcon, xc as LucideComponent, Sc as Computer, Sc as ComputerIcon, Sc as LucideComputer, Cc as ConciergeBell, Cc as ConciergeBellIcon, Cc as LucideConciergeBell, wc as Cone, wc as ConeIcon, wc as LucideCone, Tc as Construction, Tc as ConstructionIcon, Tc as LucideConstruction, Oc as Contact, Oc as ContactIcon, Oc as LucideContact, Ec as Contact2, Ec as Contact2Icon, Ec as ContactRound, Ec as ContactRoundIcon, Ec as LucideContact2, Ec as LucideContactRound, Dc as Container, Dc as ContainerIcon, Dc as LucideContainer, kc as Contrast, kc as ContrastIcon, kc as LucideContrast, Ac as Cookie, Ac as CookieIcon, Ac as LucideCookie, jc as CookingPot, jc as CookingPotIcon, jc as LucideCookingPot, Rc as Copy, Rc as CopyIcon, Rc as LucideCopy, Mc as CopyCheck, Mc as CopyCheckIcon, Mc as LucideCopyCheck, Nc as CopyMinus, Nc as CopyMinusIcon, Nc as LucideCopyMinus, Pc as CopyPlus, Pc as CopyPlusIcon, Pc as LucideCopyPlus, Fc as CopySlash, Fc as CopySlashIcon, Fc as LucideCopySlash, Ic as CopyX, Ic as CopyXIcon, Ic as LucideCopyX, Lc as Copyleft, Lc as CopyleftIcon, Lc as LucideCopyleft, zc as Copyright, zc as CopyrightIcon, zc as LucideCopyright, Bc as CornerDownLeft, Bc as CornerDownLeftIcon, Bc as LucideCornerDownLeft, Vc as CornerDownRight, Vc as CornerDownRightIcon, Vc as LucideCornerDownRight, Hc as CornerLeftDown, Hc as CornerLeftDownIcon, Hc as LucideCornerLeftDown, Uc as CornerLeftUp, Uc as CornerLeftUpIcon, Uc as LucideCornerLeftUp, Wc as CornerRightDown, Wc as CornerRightDownIcon, Wc as LucideCornerRightDown, Gc as CornerRightUp, Gc as CornerRightUpIcon, Gc as LucideCornerRightUp, Kc as CornerUpLeft, Kc as CornerUpLeftIcon, Kc as LucideCornerUpLeft, qc as CornerUpRight, qc as CornerUpRightIcon, qc as LucideCornerUpRight, Jc as Cpu, Jc as CpuIcon, Jc as LucideCpu, Yc as CreativeCommons, Yc as CreativeCommonsIcon, Yc as LucideCreativeCommons, Xc as CreditCard, Xc as CreditCardIcon, Xc as LucideCreditCard, Zc as Croissant, Zc as CroissantIcon, Zc as LucideCroissant, Qc as Crop, Qc as CropIcon, Qc as LucideCrop, $c as Cross, $c as CrossIcon, $c as LucideCross, el as Crosshair, el as CrosshairIcon, el as LucideCrosshair, tl as Crown, tl as CrownIcon, tl as LucideCrown, nl as Cuboid, nl as CuboidIcon, nl as LucideCuboid, rl as CupSoda, rl as CupSodaIcon, rl as LucideCupSoda, il as Currency, il as CurrencyIcon, il as LucideCurrency, al as Cylinder, al as CylinderIcon, al as LucideCylinder, ol as Dam, ol as DamIcon, ol as LucideDam, gl as Database, gl as DatabaseIcon, gl as LucideDatabase, sl as DatabaseArrowDown, sl as DatabaseArrowDownIcon, sl as LucideDatabaseArrowDown, cl as DatabaseArrowUp, cl as DatabaseArrowUpIcon, cl as LucideDatabaseArrowUp, ll as DatabaseBackup, ll as DatabaseBackupIcon, ll as LucideDatabaseBackup, ul as DatabaseCheck, ul as DatabaseCheckIcon, ul as LucideDatabaseCheck, dl as DatabaseMinus, dl as DatabaseMinusIcon, dl as LucideDatabaseMinus, fl as DatabasePlus, fl as DatabasePlusIcon, fl as LucideDatabasePlus, pl as DatabaseSearch, pl as DatabaseSearchIcon, pl as LucideDatabaseSearch, ml as DatabaseX, ml as DatabaseXIcon, ml as LucideDatabaseX, hl as DatabaseZap, hl as DatabaseZapIcon, hl as LucideDatabaseZap, _l as DecimalsArrowLeft, _l as DecimalsArrowLeftIcon, _l as LucideDecimalsArrowLeft, yl as DecimalsArrowRight, yl as DecimalsArrowRightIcon, yl as LucideDecimalsArrowRight, vl as Delete, vl as DeleteIcon, vl as LucideDelete, bl as Dessert, bl as DessertIcon, bl as LucideDessert, xl as Diameter, xl as DiameterIcon, xl as LucideDiameter, Tl as Diamond, Tl as DiamondIcon, Tl as LucideDiamond, Sl as DiamondMinus, Sl as DiamondMinusIcon, Sl as LucideDiamondMinus, Cl as DiamondPercent, Cl as DiamondPercentIcon, Cl as LucideDiamondPercent, Cl as LucidePercentDiamond, Cl as PercentDiamond, Cl as PercentDiamondIcon, wl as DiamondPlus, wl as DiamondPlusIcon, wl as LucideDiamondPlus, El as Dice1, El as Dice1Icon, El as LucideDice1, Dl as Dice2, Dl as Dice2Icon, Dl as LucideDice2, kl as Dice3, kl as Dice3Icon, kl as LucideDice3, Ol as Dice4, Ol as Dice4Icon, Ol as LucideDice4, Al as Dice5, Al as Dice5Icon, Al as LucideDice5, jl as Dice6, jl as Dice6Icon, jl as LucideDice6, Ml as Dices, Ml as DicesIcon, Ml as LucideDices, Nl as Diff, Nl as DiffIcon, Nl as LucideDiff, Ll as Disc, Ll as DiscIcon, Ll as LucideDisc, Pl as Disc2, Pl as Disc2Icon, Pl as LucideDisc2, Fl as Disc3, Fl as Disc3Icon, Fl as LucideDisc3, Il as DiscAlbum, Il as DiscAlbumIcon, Il as LucideDiscAlbum, Rl as Divide, Rl as DivideIcon, Rl as LucideDivide, CE as DivideSquare, CE as DivideSquareIcon, CE as LucideDivideSquare, CE as LucideSquareDivide, CE as SquareDivide, CE as SquareDivideIcon, Bl as Dna, Bl as DnaIcon, Bl as LucideDna, zl as DnaOff, zl as DnaOffIcon, zl as LucideDnaOff, Vl as Dock, Vl as DockIcon, Vl as LucideDock, Hl as Dog, Hl as DogIcon, Hl as LucideDog, Ul as DollarSign, Ul as DollarSignIcon, Ul as LucideDollarSign, Wl as Donut, Wl as DonutIcon, Wl as LucideDonut, Kl as DoorClosed, Kl as DoorClosedIcon, Kl as LucideDoorClosed, Gl as DoorClosedLocked, Gl as DoorClosedLockedIcon, Gl as LucideDoorClosedLocked, ql as DoorOpen, ql as DoorOpenIcon, ql as LucideDoorOpen, Jl as Dot, Jl as DotIcon, Jl as LucideDot, wE as DotSquare, wE as DotSquareIcon, wE as LucideDotSquare, wE as LucideSquareDot, wE as SquareDot, wE as SquareDotIcon, Yl as Download, Yl as DownloadIcon, Yl as LucideDownload, Xl as DraftingCompass, Xl as DraftingCompassIcon, Xl as LucideDraftingCompass, Ql as Drama, Ql as DramaIcon, Ql as LucideDrama, Zl as Drill, Zl as DrillIcon, Zl as LucideDrill, eu as Drone, eu as DroneIcon, eu as LucideDrone, tu as Droplet, tu as DropletIcon, tu as LucideDroplet, $l as DropletOff, $l as DropletOffIcon, $l as LucideDropletOff, nu as Droplets, nu as DropletsIcon, nu as LucideDroplets, ru as Drum, ru as DrumIcon, ru as LucideDrum, iu as Drumstick, iu as DrumstickIcon, iu as LucideDrumstick, au as Dumbbell, au as DumbbellIcon, au as LucideDumbbell, su as Ear, su as EarIcon, su as LucideEar, ou as EarOff, ou as EarOffIcon, ou as LucideEarOff, cu as Earth, cu as EarthIcon, cu as Globe2, cu as Globe2Icon, cu as LucideEarth, cu as LucideGlobe2, lu as EarthLock, lu as EarthLockIcon, lu as LucideEarthLock, uu as Eclipse, uu as EclipseIcon, uu as LucideEclipse, X as Edit, X as EditIcon, X as LucideEdit, X as LucidePenBox, X as LucidePenSquare, X as LucideSquarePen, X as PenBox, X as PenBoxIcon, X as PenSquare, X as PenSquareIcon, X as SquarePen, X as SquarePenIcon, $b as Edit2, $b as Edit2Icon, $b as LucideEdit2, $b as LucidePen, $b as Pen, $b as PenIcon, Zb as Edit3, Zb as Edit3Icon, Zb as LucideEdit3, Zb as LucidePenLine, Zb as PenLine, Zb as PenLineIcon, pu as Egg, pu as EggIcon, pu as LucideEgg, du as EggFried, du as EggFriedIcon, du as LucideEggFried, fu as EggOff, fu as EggOffIcon, fu as LucideEggOff, mu as Ellipse, mu as EllipseIcon, mu as LucideEllipse, gu as Ellipsis, gu as EllipsisIcon, gu as LucideEllipsis, gu as LucideMoreHorizontal, gu as MoreHorizontal, gu as MoreHorizontalIcon, hu as EllipsisVertical, hu as EllipsisVerticalIcon, hu as LucideEllipsisVertical, hu as LucideMoreVertical, hu as MoreVertical, hu as MoreVerticalIcon, yu as Equal, yu as EqualIcon, yu as LucideEqual, _u as EqualApproximately, _u as EqualApproximatelyIcon, _u as LucideEqualApproximately, vu as EqualNot, vu as EqualNotIcon, vu as LucideEqualNot, TE as EqualSquare, TE as EqualSquareIcon, TE as LucideEqualSquare, TE as LucideSquareEqual, TE as SquareEqual, TE as SquareEqualIcon, bu as Eraser, bu as EraserIcon, bu as LucideEraser, Su as EthernetPort, Su as EthernetPortIcon, Su as LucideEthernetPort, xu as Euro, xu as EuroIcon, xu as LucideEuro, Cu as EvCharger, Cu as EvChargerIcon, Cu as LucideEvCharger, wu as Expand, wu as ExpandIcon, wu as LucideExpand, Tu as ExternalLink, Tu as ExternalLinkIcon, Tu as LucideExternalLink, ku as Eye, ku as EyeIcon, ku as LucideEye, Eu as EyeClosed, Eu as EyeClosedIcon, Eu as LucideEyeClosed, Du as EyeDashed, Du as EyeDashedIcon, Du as LucideEyeDashed, Ou as EyeOff, Ou as EyeOffIcon, Ou as LucideEyeOff, ju as FaceGrinning, ju as FaceGrinningIcon, ju as Laugh, ju as LaughIcon, ju as LucideFaceGrinning, ju as LucideLaugh, Nu as FaceNeutral, Nu as FaceNeutralIcon, Nu as LucideFaceNeutral, Nu as LucideMeh, Nu as Meh, Nu as MehIcon, Pu as FaceSlightlyFrowning, Pu as FaceSlightlyFrowningIcon, Pu as Frown, Pu as FrownIcon, Pu as LucideFaceSlightlyFrowning, Pu as LucideFrown, Iu as FaceSlightlySmiling, Iu as FaceSlightlySmilingIcon, Iu as LucideFaceSlightlySmiling, Iu as LucideSmile, Iu as Smile, Iu as SmileIcon, Fu as FaceSlightlySmilingPlus, Fu as FaceSlightlySmilingPlusIcon, Fu as LucideFaceSlightlySmilingPlus, Fu as LucideSmilePlus, Fu as SmilePlus, Fu as SmilePlusIcon, Lu as Factory, Lu as FactoryIcon, Lu as LucideFactory, Ru as Fan, Ru as FanIcon, Ru as LucideFan, zu as FastForward, zu as FastForwardIcon, zu as LucideFastForward, Bu as Feather, Bu as FeatherIcon, Bu as LucideFeather, Vu as Fence, Vu as FenceIcon, Vu as LucideFence, Hu as FerrisWheel, Hu as FerrisWheelIcon, Hu as LucideFerrisWheel, Vd as File, Vd as FileIcon, Vd as LucideFile, Uu as FileArchive, Uu as FileArchiveIcon, Uu as LucideFileArchive, W as FileAudio, W as FileAudio2, W as FileAudio2Icon, W as FileAudioIcon, W as FileHeadphone, W as FileHeadphoneIcon, W as LucideFileAudio, W as LucideFileAudio2, W as LucideFileHeadphone, Gu as FileAxis3D, Gu as FileAxis3DIcon, Gu as FileAxis3d, Gu as FileAxis3dIcon, Gu as LucideFileAxis3D, Gu as LucideFileAxis3d, Wu as FileBadge, Wu as FileBadge2, Wu as FileBadge2Icon, Wu as FileBadgeIcon, Wu as LucideFileBadge, Wu as LucideFileBadge2, Ju as FileBarChart, Ju as FileBarChartIcon, Ju as FileChartColumnIncreasing, Ju as FileChartColumnIncreasingIcon, Ju as LucideFileBarChart, Ju as LucideFileChartColumnIncreasing, Xu as FileBarChart2, Xu as FileBarChart2Icon, Xu as FileChartColumn, Xu as FileChartColumnIcon, Xu as LucideFileBarChart2, Xu as LucideFileChartColumn, Ku as FileBox, Ku as FileBoxIcon, Ku as LucideFileBox, qu as FileBraces, qu as FileBracesIcon, qu as FileJson, qu as FileJsonIcon, qu as LucideFileBraces, qu as LucideFileJson, Yu as FileBracesCorner, Yu as FileBracesCornerIcon, Yu as FileJson2, Yu as FileJson2Icon, Yu as LucideFileBracesCorner, Yu as LucideFileJson2, Qu as FileChartLine, Qu as FileChartLineIcon, Qu as FileLineChart, Qu as FileLineChartIcon, Qu as LucideFileChartLine, Qu as LucideFileLineChart, Zu as FileChartPie, Zu as FileChartPieIcon, Zu as FilePieChart, Zu as FilePieChartIcon, Zu as LucideFileChartPie, Zu as LucideFilePieChart, ed as FileCheck, ed as FileCheckIcon, ed as LucideFileCheck, $u as FileCheck2, $u as FileCheck2Icon, $u as FileCheckCorner, $u as FileCheckCornerIcon, $u as LucideFileCheck2, $u as LucideFileCheckCorner, td as FileClock, td as FileClockIcon, td as LucideFileClock, nd as FileCode, nd as FileCodeIcon, nd as LucideFileCode, rd as FileCode2, rd as FileCode2Icon, rd as FileCodeCorner, rd as FileCodeCornerIcon, rd as LucideFileCode2, rd as LucideFileCodeCorner, id as FileCog, id as FileCog2, id as FileCog2Icon, id as FileCogIcon, id as LucideFileCog, id as LucideFileCog2, ad as FileDiff, ad as FileDiffIcon, ad as LucideFileDiff, od as FileDigit, od as FileDigitIcon, od as LucideFileDigit, sd as FileDown, sd as FileDownIcon, sd as LucideFileDown, yd as FileEdit, yd as FileEditIcon, yd as FilePen, yd as FilePenIcon, yd as LucideFileEdit, yd as LucideFilePen, cd as FileExclamationPoint, cd as FileExclamationPointIcon, cd as FileWarning, cd as FileWarningIcon, cd as LucideFileExclamationPoint, cd as LucideFileWarning, ld as FileHeart, ld as FileHeartIcon, ld as LucideFileHeart, ud as FileImage, ud as FileImageIcon, ud as LucideFileImage, dd as FileInput, dd as FileInputIcon, dd as LucideFileInput, fd as FileKey, fd as FileKey2, fd as FileKey2Icon, fd as FileKeyIcon, fd as LucideFileKey, fd as LucideFileKey2, pd as FileLock, pd as FileLock2, pd as FileLock2Icon, pd as FileLockIcon, pd as LucideFileLock, pd as LucideFileLock2, hd as FileMinus, hd as FileMinusIcon, hd as LucideFileMinus, md as FileMinus2, md as FileMinus2Icon, md as FileMinusCorner, md as FileMinusCornerIcon, md as LucideFileMinus2, md as LucideFileMinusCorner, gd as FileMusic, gd as FileMusicIcon, gd as LucideFileMusic, _d as FileOutput, _d as FileOutputIcon, _d as LucideFileOutput, vd as FilePenLine, vd as FilePenLineIcon, vd as FileSignature, vd as FileSignatureIcon, vd as LucideFilePenLine, vd as LucideFileSignature, bd as FilePlay, bd as FilePlayIcon, bd as FileVideo, bd as FileVideoIcon, bd as LucideFilePlay, bd as LucideFileVideo, xd as FilePlus, xd as FilePlusIcon, xd as LucideFilePlus, Sd as FilePlus2, Sd as FilePlus2Icon, Sd as FilePlusCorner, Sd as FilePlusCornerIcon, Sd as LucideFilePlus2, Sd as LucideFilePlusCorner, Cd as FileQuestion, Cd as FileQuestionIcon, Cd as FileQuestionMark, Cd as FileQuestionMarkIcon, Cd as LucideFileQuestion, Cd as LucideFileQuestionMark, wd as FileScan, wd as FileScanIcon, wd as LucideFileScan, Ed as FileSearch, Ed as FileSearchIcon, Ed as LucideFileSearch, Td as FileSearch2, Td as FileSearch2Icon, Td as FileSearchCorner, Td as FileSearchCornerIcon, Td as LucideFileSearch2, Td as LucideFileSearchCorner, Dd as FileSignal, Dd as FileSignalIcon, Dd as FileVolume2, Dd as FileVolume2Icon, Dd as LucideFileSignal, Dd as LucideFileVolume2, Od as FileSliders, Od as FileSlidersIcon, Od as LucideFileSliders, kd as FileSpreadsheet, kd as FileSpreadsheetIcon, kd as LucideFileSpreadsheet, Ad as FileStack, Ad as FileStackIcon, Ad as LucideFileStack, jd as FileSymlink, jd as FileSymlinkIcon, jd as LucideFileSymlink, Md as FileTerminal, Md as FileTerminalIcon, Md as LucideFileTerminal, Nd as FileText, Nd as FileTextIcon, Nd as LucideFileText, Fd as FileType, Fd as FileTypeIcon, Fd as LucideFileType, Pd as FileType2, Pd as FileType2Icon, Pd as FileTypeCorner, Pd as FileTypeCornerIcon, Pd as LucideFileType2, Pd as LucideFileTypeCorner, Id as FileUp, Id as FileUpIcon, Id as LucideFileUp, Ld as FileUser, Ld as FileUserIcon, Ld as LucideFileUser, Rd as FileVideo2, Rd as FileVideo2Icon, Rd as FileVideoCamera, Rd as FileVideoCameraIcon, Rd as LucideFileVideo2, Rd as LucideFileVideoCamera, zd as FileVolume, zd as FileVolumeIcon, zd as LucideFileVolume, Hd as FileX, Hd as FileXIcon, Hd as LucideFileX, Bd as FileX2, Bd as FileX2Icon, Bd as FileXCorner, Bd as FileXCornerIcon, Bd as LucideFileX2, Bd as LucideFileXCorner, Ud as Files, Ud as FilesIcon, Ud as LucideFiles, Wd as Film, Wd as FilmIcon, Wd as LucideFilm, ip as Filter, ip as FilterIcon, ip as Funnel, ip as FunnelIcon, ip as LucideFilter, ip as LucideFunnel, tp as FilterX, tp as FilterXIcon, tp as FunnelX, tp as FunnelXIcon, tp as LucideFilterX, tp as LucideFunnelX, Gd as Fingerprint, Gd as FingerprintIcon, Gd as FingerprintPattern, Gd as FingerprintPatternIcon, Gd as LucideFingerprint, Gd as LucideFingerprintPattern, Kd as FireExtinguisher, Kd as FireExtinguisherIcon, Kd as LucideFireExtinguisher, Yd as Fish, Yd as FishIcon, Yd as LucideFish, qd as FishOff, qd as FishOffIcon, qd as LucideFishOff, Jd as FishSymbol, Jd as FishSymbolIcon, Jd as LucideFishSymbol, Xd as FishingHook, Xd as FishingHookIcon, Xd as LucideFishingHook, Zd as FishingRod, Zd as FishingRodIcon, Zd as LucideFishingRod, tf as Flag, tf as FlagIcon, tf as LucideFlag, Qd as FlagOff, Qd as FlagOffIcon, Qd as LucideFlagOff, $d as FlagTriangleLeft, $d as FlagTriangleLeftIcon, $d as LucideFlagTriangleLeft, ef as FlagTriangleRight, ef as FlagTriangleRightIcon, ef as LucideFlagTriangleRight, rf as Flame, rf as FlameIcon, rf as LucideFlame, nf as FlameKindling, nf as FlameKindlingIcon, nf as LucideFlameKindling, of as Flashlight, of as FlashlightIcon, of as LucideFlashlight, af as FlashlightOff, af as FlashlightOffIcon, af as LucideFlashlightOff, sf as FlaskConical, sf as FlaskConicalIcon, sf as LucideFlaskConical, cf as FlaskConicalOff, cf as FlaskConicalOffIcon, cf as LucideFlaskConicalOff, uf as FlaskRound, uf as FlaskRoundIcon, uf as LucideFlaskRound, cE as FlipHorizontal, cE as FlipHorizontalIcon, cE as LucideFlipHorizontal, cE as LucideSquareCenterlineDashedHorizontal, cE as SquareCenterlineDashedHorizontal, cE as SquareCenterlineDashedHorizontalIcon, lf as FlipHorizontal2, lf as FlipHorizontal2Icon, lf as LucideFlipHorizontal2, lE as FlipVertical, lE as FlipVerticalIcon, lE as LucideFlipVertical, lE as LucideSquareCenterlineDashedVertical, lE as SquareCenterlineDashedVertical, lE as SquareCenterlineDashedVerticalIcon, df as FlipVertical2, df as FlipVertical2Icon, df as LucideFlipVertical2, pf as Flower, pf as FlowerIcon, pf as LucideFlower, ff as Flower2, ff as Flower2Icon, ff as LucideFlower2, gf as Focus, gf as FocusIcon, gf as LucideFocus, hf as FoldHorizontal, hf as FoldHorizontalIcon, hf as LucideFoldHorizontal, mf as FoldVertical, mf as FoldVerticalIcon, mf as LucideFoldVertical, Jf as Folder, Jf as FolderIcon, Jf as LucideFolder, _f as FolderArchive, _f as FolderArchiveIcon, _f as LucideFolderArchive, vf as FolderBookmark, vf as FolderBookmarkIcon, vf as LucideFolderBookmark, yf as FolderCheck, yf as FolderCheckIcon, yf as LucideFolderCheck, bf as FolderClock, bf as FolderClockIcon, bf as LucideFolderClock, xf as FolderClosed, xf as FolderClosedIcon, xf as LucideFolderClosed, Sf as FolderCode, Sf as FolderCodeIcon, Sf as LucideFolderCode, Cf as FolderCog, Cf as FolderCog2, Cf as FolderCog2Icon, Cf as FolderCogIcon, Cf as LucideFolderCog, Cf as LucideFolderCog2, wf as FolderDot, wf as FolderDotIcon, wf as LucideFolderDot, Tf as FolderDown, Tf as FolderDownIcon, Tf as LucideFolderDown, Lf as FolderEdit, Lf as FolderEditIcon, Lf as FolderPen, Lf as FolderPenIcon, Lf as LucideFolderEdit, Lf as LucideFolderPen, Df as FolderGit, Df as FolderGitIcon, Df as LucideFolderGit, Ef as FolderGit2, Ef as FolderGit2Icon, Ef as LucideFolderGit2, Of as FolderHeart, Of as FolderHeartIcon, Of as LucideFolderHeart, kf as FolderInput, kf as FolderInputIcon, kf as LucideFolderInput, Af as FolderKanban, Af as FolderKanbanIcon, Af as LucideFolderKanban, jf as FolderKey, jf as FolderKeyIcon, jf as LucideFolderKey, Mf as FolderLock, Mf as FolderLockIcon, Mf as LucideFolderLock, Nf as FolderMinus, Nf as FolderMinusIcon, Nf as LucideFolderMinus, Ff as FolderOpen, Ff as FolderOpenIcon, Ff as LucideFolderOpen, Pf as FolderOpenDot, Pf as FolderOpenDotIcon, Pf as LucideFolderOpenDot, If as FolderOutput, If as FolderOutputIcon, If as LucideFolderOutput, Rf as FolderPlus, Rf as FolderPlusIcon, Rf as LucideFolderPlus, zf as FolderRoot, zf as FolderRootIcon, zf as LucideFolderRoot, Vf as FolderSearch, Vf as FolderSearchIcon, Vf as LucideFolderSearch, Bf as FolderSearch2, Bf as FolderSearch2Icon, Bf as LucideFolderSearch2, Hf as FolderSymlink, Hf as FolderSymlinkIcon, Hf as LucideFolderSymlink, Uf as FolderSync, Uf as FolderSyncIcon, Uf as LucideFolderSync, Wf as FolderTree, Wf as FolderTreeIcon, Wf as LucideFolderTree, Gf as FolderUp, Gf as FolderUpIcon, Gf as LucideFolderUp, Kf as FolderX, Kf as FolderXIcon, Kf as LucideFolderX, qf as Folders, qf as FoldersIcon, qf as LucideFolders, Yf as Footprints, Yf as FootprintsIcon, Yf as LucideFootprints, kA as ForkKnife, kA as ForkKnifeIcon, kA as LucideForkKnife, kA as LucideUtensils, kA as Utensils, kA as UtensilsIcon, OA as ForkKnifeCrossed, OA as ForkKnifeCrossedIcon, OA as LucideForkKnifeCrossed, OA as LucideUtensilsCrossed, OA as UtensilsCrossed, OA as UtensilsCrossedIcon, Qf as Forklift, Qf as ForkliftIcon, Qf as LucideForklift, Xf as Form, Xf as FormIcon, Xf as LucideForm, kS as FormInput, kS as FormInputIcon, kS as LucideFormInput, kS as LucideRectangleEllipsis, kS as RectangleEllipsis, kS as RectangleEllipsisIcon, Zf as Forward, Zf as ForwardIcon, Zf as LucideForward, $f as Frame, $f as FrameIcon, $f as LucideFrame, ep as Fuel, ep as FuelIcon, ep as LucideFuel, np as Fullscreen, np as FullscreenIcon, np as LucideFullscreen, EE as FunctionSquare, EE as FunctionSquareIcon, EE as LucideFunctionSquare, EE as LucideSquareFunction, EE as SquareFunction, EE as SquareFunctionIcon, rp as FunnelPlus, rp as FunnelPlusIcon, rp as LucideFunnelPlus, op as GalleryHorizontal, op as GalleryHorizontalIcon, op as LucideGalleryHorizontal, ap as GalleryHorizontalEnd, ap as GalleryHorizontalEndIcon, ap as LucideGalleryHorizontalEnd, sp as GalleryThumbnails, sp as GalleryThumbnailsIcon, sp as LucideGalleryThumbnails, lp as GalleryVertical, lp as GalleryVerticalIcon, lp as LucideGalleryVertical, cp as GalleryVerticalEnd, cp as GalleryVerticalEndIcon, cp as LucideGalleryVerticalEnd, pp as Gamepad, pp as GamepadIcon, pp as LucideGamepad, dp as Gamepad2, dp as Gamepad2Icon, dp as LucideGamepad2, up as GamepadDirectional, up as GamepadDirectionalIcon, up as LucideGamepadDirectional, J as GanttChartSquare, J as GanttChartSquareIcon, J as LucideGanttChartSquare, J as LucideSquareChartGantt, J as LucideSquareGanttChart, J as SquareChartGantt, J as SquareChartGanttIcon, J as SquareGanttChart, J as SquareGanttChartIcon, fp as Gauge, fp as GaugeIcon, fp as LucideGauge, mp as Gavel, mp as GavelIcon, mp as LucideGavel, hp as Gem, hp as GemIcon, hp as LucideGem, gp as GeorgianLari, gp as GeorgianLariIcon, gp as LucideGeorgianLari, vp as Ghost, vp as GhostIcon, vp as LucideGhost, _p as Gift, _p as GiftIcon, _p as LucideGift, xp as GitBranch, xp as GitBranchIcon, xp as LucideGitBranch, yp as GitBranchMinus, yp as GitBranchMinusIcon, yp as LucideGitBranchMinus, bp as GitBranchPlus, bp as GitBranchPlusIcon, bp as LucideGitBranchPlus, Sp as GitCommit, Sp as GitCommitHorizontal, Sp as GitCommitHorizontalIcon, Sp as GitCommitIcon, Sp as LucideGitCommit, Sp as LucideGitCommitHorizontal, Cp as GitCommitVertical, Cp as GitCommitVerticalIcon, Cp as LucideGitCommitVertical, Tp as GitCompare, Tp as GitCompareIcon, Tp as LucideGitCompare, wp as GitCompareArrows, wp as GitCompareArrowsIcon, wp as LucideGitCompareArrows, Ep as GitFork, Ep as GitForkIcon, Ep as LucideGitFork, Dp as GitGraph, Dp as GitGraphIcon, Dp as LucideGitGraph, kp as GitMerge, kp as GitMergeIcon, kp as LucideGitMerge, Op as GitMergeConflict, Op as GitMergeConflictIcon, Op as LucideGitMergeConflict, Fp as GitPullRequest, Fp as GitPullRequestIcon, Fp as LucideGitPullRequest, Ap as GitPullRequestArrow, Ap as GitPullRequestArrowIcon, Ap as LucideGitPullRequestArrow, jp as GitPullRequestClosed, jp as GitPullRequestClosedIcon, jp as LucideGitPullRequestClosed, Np as GitPullRequestCreate, Np as GitPullRequestCreateIcon, Np as LucideGitPullRequestCreate, Mp as GitPullRequestCreateArrow, Mp as GitPullRequestCreateArrowIcon, Mp as LucideGitPullRequestCreateArrow, Pp as GitPullRequestDraft, Pp as GitPullRequestDraftIcon, Pp as LucideGitPullRequestDraft, Ip as GlassWater, Ip as GlassWaterIcon, Ip as LucideGlassWater, Lp as Glasses, Lp as GlassesIcon, Lp as LucideGlasses, Hp as Globe, Hp as GlobeIcon, Hp as LucideGlobe, Rp as GlobeCheck, Rp as GlobeCheckIcon, Rp as LucideGlobeCheck, zp as GlobeLock, zp as GlobeLockIcon, zp as LucideGlobeLock, Bp as GlobeOff, Bp as GlobeOffIcon, Bp as LucideGlobeOff, Vp as GlobeX, Vp as GlobeXIcon, Vp as LucideGlobeX, Up as Goal, Up as GoalIcon, Up as LucideGoal, Wp as Gpu, Wp as GpuIcon, Wp as LucideGpu, cm as Grab, cm as GrabIcon, cm as HandGrab, cm as HandGrabIcon, cm as LucideGrab, cm as LucideHandGrab, Gp as GraduationCap, Gp as GraduationCapIcon, Gp as LucideGraduationCap, Kp as Grape, Kp as GrapeIcon, Kp as LucideGrape, G as Grid, G as Grid3X3, G as Grid3X3Icon, G as Grid3x3, G as Grid3x3Icon, G as GridIcon, G as LucideGrid, G as LucideGrid3X3, G as LucideGrid3x3, Xp as Grid2X2, Xp as Grid2X2Icon, Xp as Grid2x2, Xp as Grid2x2Icon, Xp as LucideGrid2X2, Xp as LucideGrid2x2, qp as Grid2X2Check, qp as Grid2X2CheckIcon, qp as Grid2x2Check, qp as Grid2x2CheckIcon, qp as LucideGrid2X2Check, qp as LucideGrid2x2Check, Jp as Grid2X2Plus, Jp as Grid2X2PlusIcon, Jp as Grid2x2Plus, Jp as Grid2x2PlusIcon, Jp as LucideGrid2X2Plus, Jp as LucideGrid2x2Plus, Yp as Grid2X2X, Yp as Grid2X2XIcon, Yp as Grid2x2X, Yp as Grid2x2XIcon, Yp as LucideGrid2X2X, Yp as LucideGrid2x2X, Zp as Grid3x2, Zp as Grid3x2Icon, Zp as LucideGrid3x2, $p as Grip, $p as GripIcon, $p as LucideGrip, Qp as GripHorizontal, Qp as GripHorizontalIcon, Qp as LucideGripHorizontal, tm as GripVertical, tm as GripVerticalIcon, tm as LucideGripVertical, em as Group, em as GroupIcon, em as LucideGroup, nm as Guitar, nm as GuitarIcon, nm as LucideGuitar, rm as Ham, rm as HamIcon, rm as LucideHam, im as Hamburger, im as HamburgerIcon, im as LucideHamburger, am as Hammer, am as HammerIcon, am as LucideHammer, pm as Hand, pm as HandIcon, pm as LucideHand, om as HandCoins, om as HandCoinsIcon, om as LucideHandCoins, sm as HandFist, sm as HandFistIcon, sm as LucideHandFist, lm as HandHeart, lm as HandHeartIcon, lm as LucideHandHeart, um as HandHelping, um as HandHelpingIcon, um as HelpingHand, um as HelpingHandIcon, um as LucideHandHelping, um as LucideHelpingHand, dm as HandMetal, dm as HandMetalIcon, dm as LucideHandMetal, fm as HandPlatter, fm as HandPlatterIcon, fm as LucideHandPlatter, mm as Handbag, mm as HandbagIcon, mm as LucideHandbag, hm as Handshake, hm as HandshakeIcon, hm as LucideHandshake, vm as HardDrive, vm as HardDriveIcon, vm as LucideHardDrive, gm as HardDriveDownload, gm as HardDriveDownloadIcon, gm as LucideHardDriveDownload, _m as HardDriveUpload, _m as HardDriveUploadIcon, _m as LucideHardDriveUpload, ym as HardHat, ym as HardHatIcon, ym as LucideHardHat, bm as Hash, bm as HashIcon, bm as LucideHash, xm as HatGlasses, xm as HatGlassesIcon, xm as LucideHatGlasses, Cm as Haze, Cm as HazeIcon, Cm as LucideHaze, Sm as Hd, Sm as HdIcon, Sm as LucideHd, wm as HdmiPort, wm as HdmiPortIcon, wm as LucideHdmiPort, jm as Heading, jm as HeadingIcon, jm as LucideHeading, Tm as Heading1, Tm as Heading1Icon, Tm as LucideHeading1, Em as Heading2, Em as Heading2Icon, Em as LucideHeading2, Dm as Heading3, Dm as Heading3Icon, Dm as LucideHeading3, Om as Heading4, Om as Heading4Icon, Om as LucideHeading4, km as Heading5, km as Heading5Icon, km as LucideHeading5, Am as Heading6, Am as Heading6Icon, Am as LucideHeading6, Nm as HeadphoneOff, Nm as HeadphoneOffIcon, Nm as LucideHeadphoneOff, Mm as Headphones, Mm as HeadphonesIcon, Mm as LucideHeadphones, Pm as Headset, Pm as HeadsetIcon, Pm as LucideHeadset, Um as Heart, Um as HeartIcon, Um as LucideHeart, Fm as HeartCrack, Fm as HeartCrackIcon, Fm as LucideHeartCrack, Im as HeartHandshake, Im as HeartHandshakeIcon, Im as LucideHeartHandshake, zm as HeartMinus, zm as HeartMinusIcon, zm as LucideHeartMinus, Lm as HeartOff, Lm as HeartOffIcon, Lm as LucideHeartOff, Rm as HeartPlus, Rm as HeartPlusIcon, Rm as LucideHeartPlus, Bm as HeartPulse, Bm as HeartPulseIcon, Bm as LucideHeartPulse, Vm as HeartX, Vm as HeartXIcon, Vm as LucideHeartX, Hm as Heater, Hm as HeaterIcon, Hm as LucideHeater, Wm as Helicopter, Wm as HelicopterIcon, Wm as LucideHelicopter, Gm as Hexagon, Gm as HexagonIcon, Gm as LucideHexagon, Km as Highlighter, Km as HighlighterIcon, Km as LucideHighlighter, oC as History, oC as HistoryIcon, oC as LucideHistory, oC as LucideRotateCcwClock, oC as RotateCcwClock, oC as RotateCcwClockIcon, nh as Home, nh as HomeIcon, nh as House, nh as HouseIcon, nh as LucideHome, nh as LucideHouse, Jm as Hop, Jm as HopIcon, Jm as LucideHop, qm as HopOff, qm as HopOffIcon, qm as LucideHopOff, Ym as Hospital, Ym as HospitalIcon, Ym as LucideHospital, Zm as Hotel, Zm as HotelIcon, Zm as LucideHotel, Xm as Hourglass, Xm as HourglassIcon, Xm as LucideHourglass, Qm as HouseHeart, Qm as HouseHeartIcon, Qm as LucideHouseHeart, $m as HousePlug, $m as HousePlugIcon, $m as LucideHousePlug, eh as HousePlus, eh as HousePlusIcon, eh as LucideHousePlus, th as HouseWifi, th as HouseWifiIcon, th as LucideHouseWifi, ih as IceCream, ih as IceCreamCone, ih as IceCreamConeIcon, ih as IceCreamIcon, ih as LucideIceCream, ih as LucideIceCreamCone, rh as IceCream2, rh as IceCream2Icon, rh as IceCreamBowl, rh as IceCreamBowlIcon, rh as LucideIceCream2, rh as LucideIceCreamBowl, ne as Icon, oh as IdCard, oh as IdCardIcon, oh as LucideIdCard, ah as IdCardLanyard, ah as IdCardLanyardIcon, ah as LucideIdCardLanyard, mh as Image, mh as ImageIcon, mh as LucideImage, sh as ImageDown, sh as ImageDownIcon, sh as LucideImageDown, ch as ImageMinus, ch as ImageMinusIcon, ch as LucideImageMinus, uh as ImageOff, uh as ImageOffIcon, uh as LucideImageOff, lh as ImagePlay, lh as ImagePlayIcon, lh as LucideImagePlay, dh as ImagePlus, dh as ImagePlusIcon, dh as LucideImagePlus, fh as ImageUp, fh as ImageUpIcon, fh as LucideImageUp, ph as ImageUpscale, ph as ImageUpscaleIcon, ph as LucideImageUpscale, hh as Images, hh as ImagesIcon, hh as LucideImages, gh as Import, gh as ImportIcon, gh as LucideImport, _h as Inbox, _h as InboxIcon, _h as LucideInbox, q as Indent, q as IndentIcon, q as IndentIncrease, q as IndentIncreaseIcon, q as ListIndentIncrease, q as ListIndentIncreaseIcon, q as LucideIndent, q as LucideIndentIncrease, q as LucideListIndentIncrease, K as IndentDecrease, K as IndentDecreaseIcon, K as ListIndentDecrease, K as ListIndentDecreaseIcon, K as LucideIndentDecrease, K as LucideListIndentDecrease, K as LucideOutdent, K as Outdent, K as OutdentIcon, vh as IndianRupee, vh as IndianRupeeIcon, vh as LucideIndianRupee, yh as Infinity, yh as InfinityIcon, yh as LucideInfinity, xh as Info, xh as InfoIcon, xh as LucideInfo, ME as Inspect, ME as InspectIcon, ME as LucideInspect, ME as LucideSquareMousePointer, ME as SquareMousePointer, ME as SquareMousePointerIcon, bh as InspectionPanel, bh as InspectionPanelIcon, bh as LucideInspectionPanel, Sh as Italic, Sh as ItalicIcon, Sh as LucideItalic, Ch as IterationCcw, Ch as IterationCcwIcon, Ch as LucideIterationCcw, wh as IterationCw, wh as IterationCwIcon, wh as LucideIterationCw, Th as JapaneseYen, Th as JapaneseYenIcon, Th as LucideJapaneseYen, Dh as Joystick, Dh as JoystickIcon, Dh as LucideJoystick, Eh as Kanban, Eh as KanbanIcon, Eh as LucideKanban, DE as KanbanSquare, DE as KanbanSquareIcon, DE as LucideKanbanSquare, DE as LucideSquareKanban, DE as SquareKanban, DE as SquareKanbanIcon, yE as KanbanSquareDashed, yE as KanbanSquareDashedIcon, yE as LucideKanbanSquareDashed, yE as LucideSquareDashedKanban, yE as SquareDashedKanban, yE as SquareDashedKanbanIcon, Oh as Kayak, Oh as KayakIcon, Oh as LucideKayak, Mh as Key, Mh as KeyIcon, Mh as LucideKey, kh as KeyRound, kh as KeyRoundIcon, kh as LucideKeyRound, Ah as KeySquare, Ah as KeySquareIcon, Ah as LucideKeySquare, Ph as Keyboard, Ph as KeyboardIcon, Ph as LucideKeyboard, jh as KeyboardMusic, jh as KeyboardMusicIcon, jh as LucideKeyboardMusic, Nh as KeyboardOff, Nh as KeyboardOffIcon, Nh as LucideKeyboardOff, Bh as Lamp, Bh as LampIcon, Bh as LucideLamp, Fh as LampCeiling, Fh as LampCeilingIcon, Fh as LucideLampCeiling, Ih as LampDesk, Ih as LampDeskIcon, Ih as LucideLampDesk, Lh as LampFloor, Lh as LampFloorIcon, Lh as LucideLampFloor, Rh as LampWallDown, Rh as LampWallDownIcon, Rh as LucideLampWallDown, zh as LampWallUp, zh as LampWallUpIcon, zh as LucideLampWallUp, Vh as LandPlot, Vh as LandPlotIcon, Vh as LucideLandPlot, Hh as Landmark, Hh as LandmarkIcon, Hh as LucideLandmark, Gh as Languages, Gh as LanguagesIcon, Gh as LucideLanguages, qh as Laptop, qh as LaptopIcon, qh as LucideLaptop, Wh as Laptop2, Wh as Laptop2Icon, Wh as LaptopMinimal, Wh as LaptopMinimalIcon, Wh as LucideLaptop2, Wh as LucideLaptopMinimal, Uh as LaptopMinimalCheck, Uh as LaptopMinimalCheckIcon, Uh as LucideLaptopMinimalCheck, Jh as Lasso, Jh as LassoIcon, Jh as LucideLasso, Kh as LassoSelect, Kh as LassoSelectIcon, Kh as LucideLassoSelect, Yh as LayerArrowDown, Yh as LayerArrowDownIcon, Yh as LucideLayerArrowDown, Xh as LayerArrowUp, Xh as LayerArrowUpIcon, Xh as LucideLayerArrowUp, ng as Layers, ng as Layers3, ng as Layers3Icon, ng as LayersIcon, ng as LucideLayers, ng as LucideLayers3, Zh as Layers2, Zh as Layers2Icon, Zh as LucideLayers2, $h as LayersArrowDown, $h as LayersArrowDownIcon, $h as LucideLayersArrowDown, Qh as LayersArrowUp, Qh as LayersArrowUpIcon, Qh as LucideLayersArrowUp, eg as LayersMinus, eg as LayersMinusIcon, eg as LucideLayersMinus, tg as LayersPlus, tg as LayersPlusIcon, tg as LucideLayersPlus, Vb as Layout, Vb as LayoutIcon, Vb as LucideLayout, Vb as LucidePanelsTopLeft, Vb as PanelsTopLeft, Vb as PanelsTopLeftIcon, rg as LayoutDashboard, rg as LayoutDashboardIcon, rg as LucideLayoutDashboard, ig as LayoutFreeform, ig as LayoutFreeformIcon, ig as LucideLayoutFreeform, ag as LayoutGrid, ag as LayoutGridIcon, ag as LucideLayoutGrid, og as LayoutList, og as LayoutListIcon, og as LucideLayoutList, sg as LayoutPanelLeft, sg as LayoutPanelLeftIcon, sg as LucideLayoutPanelLeft, cg as LayoutPanelTop, cg as LayoutPanelTopIcon, cg as LucideLayoutPanelTop, lg as LayoutTemplate, lg as LayoutTemplateIcon, lg as LucideLayoutTemplate, ug as Leaf, ug as LeafIcon, ug as LucideLeaf, dg as LeafyGreen, dg as LeafyGreenIcon, dg as LucideLeafyGreen, fg as Lectern, fg as LecternIcon, fg as LucideLectern, pg as LensConcave, pg as LensConcaveIcon, pg as LucideLensConcave, mg as LensConvex, mg as LensConvexIcon, mg as LucideLensConvex, jO as LetterText, jO as LetterTextIcon, jO as LucideLetterText, jO as LucideTextInitial, jO as TextInitial, jO as TextInitialIcon, gg as Library, gg as LibraryIcon, gg as LucideLibrary, hg as LibraryBig, hg as LibraryBigIcon, hg as LucideLibraryBig, OE as LibrarySquare, OE as LibrarySquareIcon, OE as LucideLibrarySquare, OE as LucideSquareLibrary, OE as SquareLibrary, OE as SquareLibraryIcon, _g as LifeBuoy, _g as LifeBuoyIcon, _g as LucideLifeBuoy, vg as Ligature, vg as LigatureIcon, vg as LucideLigature, bg as Lightbulb, bg as LightbulbIcon, bg as LucideLightbulb, yg as LightbulbOff, yg as LightbulbOffIcon, yg as LucideLightbulbOff, xg as LineDotRightHorizontal, xg as LineDotRightHorizontalIcon, xg as LucideLineDotRightHorizontal, Sg as LineSquiggle, Sg as LineSquiggleIcon, Sg as LucideLineSquiggle, Cg as LineStyle, Cg as LineStyleIcon, Cg as LucideLineStyle, Dg as Link, Dg as LinkIcon, Dg as LucideLink, Tg as Link2, Tg as Link2Icon, Tg as LucideLink2, wg as Link2Off, wg as Link2OffIcon, wg as LucideLink2Off, qg as List, qg as ListIcon, qg as LucideList, Eg as ListCheck, Eg as ListCheckIcon, Eg as LucideListCheck, Og as ListChecks, Og as ListChecksIcon, Og as LucideListChecks, kg as ListChevronsDownUp, kg as ListChevronsDownUpIcon, kg as LucideListChevronsDownUp, Ag as ListChevronsUpDown, Ag as ListChevronsUpDownIcon, Ag as LucideListChevronsUpDown, jg as ListCollapse, jg as ListCollapseIcon, jg as LucideListCollapse, Mg as ListEnd, Mg as ListEndIcon, Mg as LucideListEnd, Pg as ListFilter, Pg as ListFilterIcon, Pg as LucideListFilter, Ng as ListFilterPlus, Ng as ListFilterPlusIcon, Ng as LucideListFilterPlus, Fg as ListMinus, Fg as ListMinusIcon, Fg as LucideListMinus, Ig as ListMusic, Ig as ListMusicIcon, Ig as LucideListMusic, Lg as ListOrdered, Lg as ListOrderedIcon, Lg as LucideListOrdered, Rg as ListPlus, Rg as ListPlusIcon, Rg as LucideListPlus, zg as ListRestart, zg as ListRestartIcon, zg as LucideListRestart, Bg as ListSortAscending, Bg as ListSortAscendingIcon, Bg as LucideListSortAscending, Vg as ListSortDescending, Vg as ListSortDescendingIcon, Vg as LucideListSortDescending, Hg as ListStart, Hg as ListStartIcon, Hg as LucideListStart, Wg as ListTodo, Wg as ListTodoIcon, Wg as LucideListTodo, Ug as ListTree, Ug as ListTreeIcon, Ug as LucideListTree, Gg as ListVideo, Gg as ListVideoIcon, Gg as LucideListVideo, Kg as ListX, Kg as ListXIcon, Kg as LucideListX, Xg as Loader, Xg as LoaderIcon, Xg as LucideLoader, Yg as Loader2, Yg as Loader2Icon, Yg as LoaderCircle, Yg as LoaderCircleIcon, Yg as LucideLoader2, Yg as LucideLoaderCircle, Jg as LoaderPinwheel, Jg as LoaderPinwheelIcon, Jg as LucideLoaderPinwheel, $g as Locate, $g as LocateIcon, $g as LucideLocate, Qg as LocateFixed, Qg as LocateFixedIcon, Qg as LucideLocateFixed, Zg as LocateOff, Zg as LocateOffIcon, Zg as LucideLocateOff, k_ as LocationEdit, k_ as LocationEditIcon, k_ as LucideLocationEdit, k_ as LucideMapPinPen, k_ as MapPinPen, k_ as MapPinPenIcon, n_ as Lock, n_ as LockIcon, n_ as LucideLock, r_ as LockKeyhole, r_ as LockKeyholeIcon, r_ as LucideLockKeyhole, e_ as LockKeyholeOpen, e_ as LockKeyholeOpenIcon, e_ as LucideLockKeyholeOpen, e_ as LucideUnlockKeyhole, e_ as UnlockKeyhole, e_ as UnlockKeyholeIcon, t_ as LockOpen, t_ as LockOpenIcon, t_ as LucideLockOpen, t_ as LucideUnlock, t_ as Unlock, t_ as UnlockIcon, i_ as LogIn, i_ as LogInIcon, i_ as LucideLogIn, a_ as LogOut, a_ as LogOutIcon, a_ as LucideLogOut, o_ as Logs, o_ as LogsIcon, o_ as LucideLogs, s_ as Lollipop, s_ as LollipopIcon, s_ as LucideLollipop, l_ as LucideLuggage, l_ as Luggage, l_ as LuggageIcon, kE as LucideMSquare, kE as LucideSquareM, kE as MSquare, kE as MSquareIcon, kE as SquareM, kE as SquareMIcon, c_ as LucideMagnet, c_ as Magnet, c_ as MagnetIcon, v_ as LucideMail, v_ as Mail, v_ as MailIcon, u_ as LucideMailCheck, u_ as MailCheck, u_ as MailCheckIcon, d_ as LucideMailMinus, d_ as MailMinus, d_ as MailMinusIcon, p_ as LucideMailOpen, p_ as MailOpen, p_ as MailOpenIcon, f_ as LucideMailPlus, f_ as MailPlus, f_ as MailPlusIcon, m_ as LucideMailQuestion, m_ as LucideMailQuestionMark, m_ as MailQuestion, m_ as MailQuestionIcon, m_ as MailQuestionMark, m_ as MailQuestionMarkIcon, h_ as LucideMailSearch, h_ as MailSearch, h_ as MailSearchIcon, g_ as LucideMailWarning, g_ as MailWarning, g_ as MailWarningIcon, __ as LucideMailX, __ as MailX, __ as MailXIcon, y_ as LucideMailbox, y_ as Mailbox, y_ as MailboxIcon, b_ as LucideMails, b_ as Mails, b_ as MailsIcon, L_ as LucideMap, L_ as Map, L_ as MapIcon, x_ as LucideMapMinus, x_ as MapMinus, x_ as MapMinusIcon, P_ as LucideMapPin, P_ as MapPin, P_ as MapPinIcon, C_ as LucideMapPinCheck, C_ as MapPinCheck, C_ as MapPinCheckIcon, S_ as LucideMapPinCheckInside, S_ as MapPinCheckInside, S_ as MapPinCheckInsideIcon, T_ as LucideMapPinHouse, T_ as MapPinHouse, T_ as MapPinHouseIcon, E_ as LucideMapPinMinus, E_ as MapPinMinus, E_ as MapPinMinusIcon, w_ as LucideMapPinMinusInside, w_ as MapPinMinusInside, w_ as MapPinMinusInsideIcon, D_ as LucideMapPinOff, D_ as MapPinOff, D_ as MapPinOffIcon, A_ as LucideMapPinPlus, A_ as MapPinPlus, A_ as MapPinPlusIcon, O_ as LucideMapPinPlusInside, O_ as MapPinPlusInside, O_ as MapPinPlusInsideIcon, j_ as LucideMapPinSearch, j_ as MapPinSearch, j_ as MapPinSearchIcon, N_ as LucideMapPinX, N_ as MapPinX, N_ as MapPinXIcon, M_ as LucideMapPinXInside, M_ as MapPinXInside, M_ as MapPinXInsideIcon, F_ as LucideMapPinned, F_ as MapPinned, F_ as MapPinnedIcon, I_ as LucideMapPlus, I_ as MapPlus, I_ as MapPlusIcon, R_ as LucideMars, R_ as Mars, R_ as MarsIcon, z_ as LucideMarsStroke, z_ as MarsStroke, z_ as MarsStrokeIcon, B_ as LucideMartini, B_ as Martini, B_ as MartiniIcon, H_ as LucideMaximize, H_ as Maximize, H_ as MaximizeIcon, V_ as LucideMaximize2, V_ as Maximize2, V_ as Maximize2Icon, U_ as LucideMedal, U_ as Medal, U_ as MedalIcon, G_ as LucideMegaphone, G_ as Megaphone, G_ as MegaphoneIcon, W_ as LucideMegaphoneOff, W_ as MegaphoneOff, W_ as MegaphoneOffIcon, q_ as LucideMemoryStick, q_ as MemoryStick, q_ as MemoryStickIcon, K_ as LucideMenu, K_ as Menu, K_ as MenuIcon, AE as LucideMenuSquare, AE as LucideSquareMenu, AE as MenuSquare, AE as MenuSquareIcon, AE as SquareMenu, AE as SquareMenuIcon, J_ as LucideMerge, J_ as Merge, J_ as MergeIcon, sv as LucideMessageCircle, sv as MessageCircle, sv as MessageCircleIcon, Y_ as LucideMessageCircleCheck, Y_ as MessageCircleCheck, Y_ as MessageCircleCheckIcon, Z_ as LucideMessageCircleCode, Z_ as MessageCircleCode, Z_ as MessageCircleCodeIcon, X_ as LucideMessageCircleDashed, X_ as MessageCircleDashed, X_ as MessageCircleDashedIcon, Q_ as LucideMessageCircleHeart, Q_ as MessageCircleHeart, Q_ as MessageCircleHeartIcon, $_ as LucideMessageCircleMore, $_ as MessageCircleMore, $_ as MessageCircleMoreIcon, ev as LucideMessageCircleOff, ev as MessageCircleOff, ev as MessageCircleOffIcon, tv as LucideMessageCirclePlus, tv as MessageCirclePlus, tv as MessageCirclePlusIcon, nv as LucideMessageCircleQuestion, nv as LucideMessageCircleQuestionMark, nv as MessageCircleQuestion, nv as MessageCircleQuestionIcon, nv as MessageCircleQuestionMark, nv as MessageCircleQuestionMarkIcon, rv as LucideMessageCircleReply, rv as MessageCircleReply, rv as MessageCircleReplyIcon, iv as LucideMessageCircleWarning, iv as MessageCircleWarning, iv as MessageCircleWarningIcon, av as LucideMessageCircleX, av as MessageCircleX, av as MessageCircleXIcon, Cv as LucideMessageSquare, Cv as MessageSquare, Cv as MessageSquareIcon, ov as LucideMessageSquareCheck, ov as MessageSquareCheck, ov as MessageSquareCheckIcon, cv as LucideMessageSquareCode, cv as MessageSquareCode, cv as MessageSquareCodeIcon, lv as LucideMessageSquareDashed, lv as MessageSquareDashed, lv as MessageSquareDashedIcon, uv as LucideMessageSquareDiff, uv as MessageSquareDiff, uv as MessageSquareDiffIcon, dv as LucideMessageSquareDot, dv as MessageSquareDot, dv as MessageSquareDotIcon, fv as LucideMessageSquareHeart, fv as MessageSquareHeart, fv as MessageSquareHeartIcon, pv as LucideMessageSquareLock, pv as MessageSquareLock, pv as MessageSquareLockIcon, hv as LucideMessageSquareMore, hv as MessageSquareMore, hv as MessageSquareMoreIcon, mv as LucideMessageSquareOff, mv as MessageSquareOff, mv as MessageSquareOffIcon, gv as LucideMessageSquarePlus, gv as MessageSquarePlus, gv as MessageSquarePlusIcon, yv as LucideMessageSquareQuote, yv as MessageSquareQuote, yv as MessageSquareQuoteIcon, _v as LucideMessageSquareReply, _v as MessageSquareReply, _v as MessageSquareReplyIcon, vv as LucideMessageSquareShare, vv as MessageSquareShare, vv as MessageSquareShareIcon, bv as LucideMessageSquareText, bv as MessageSquareText, bv as MessageSquareTextIcon, xv as LucideMessageSquareWarning, xv as MessageSquareWarning, xv as MessageSquareWarningIcon, Sv as LucideMessageSquareX, Sv as MessageSquareX, Sv as MessageSquareXIcon, Tv as LucideMessagesSquare, Tv as MessagesSquare, Tv as MessagesSquareIcon, wv as LucideMetronome, wv as Metronome, wv as MetronomeIcon, kv as LucideMic, kv as Mic, kv as MicIcon, jv as LucideMic2, jv as LucideMicVocal, jv as Mic2, jv as Mic2Icon, jv as MicVocal, jv as MicVocalIcon, Ev as LucideMicAudioLines, Ev as MicAudioLines, Ev as MicAudioLinesIcon, Dv as LucideMicOff, Dv as MicOff, Dv as MicOffIcon, Ov as LucideMicSignal, Ov as LucidePodcast, Ov as MicSignal, Ov as MicSignalIcon, Ov as Podcast, Ov as PodcastIcon, Av as LucideMicrochip, Av as Microchip, Av as MicrochipIcon, Mv as LucideMicroscope, Mv as Microscope, Mv as MicroscopeIcon, Nv as LucideMicrowave, Nv as Microwave, Nv as MicrowaveIcon, Pv as LucideMilestone, Pv as Milestone, Pv as MilestoneIcon, Iv as LucideMilk, Iv as Milk, Iv as MilkIcon, Fv as LucideMilkOff, Fv as MilkOff, Fv as MilkOffIcon, Lv as LucideMinimize, Lv as Minimize, Lv as MinimizeIcon, Rv as LucideMinimize2, Rv as Minimize2, Rv as Minimize2Icon, zv as LucideMinus, zv as Minus, zv as MinusIcon, jE as LucideMinusSquare, jE as LucideSquareMinus, jE as MinusSquare, jE as MinusSquareIcon, jE as SquareMinus, jE as SquareMinusIcon, Bv as LucideMirrorRectangular, Bv as MirrorRectangular, Bv as MirrorRectangularIcon, Vv as LucideMirrorRound, Vv as MirrorRound, Vv as MirrorRoundIcon, ty as LucideMonitor, ty as Monitor, ty as MonitorIcon, Hv as LucideMonitorCheck, Hv as MonitorCheck, Hv as MonitorCheckIcon, Uv as LucideMonitorCloud, Uv as MonitorCloud, Uv as MonitorCloudIcon, Wv as LucideMonitorCog, Wv as MonitorCog, Wv as MonitorCogIcon, Gv as LucideMonitorDot, Gv as MonitorDot, Gv as MonitorDotIcon, Kv as LucideMonitorDown, Kv as MonitorDown, Kv as MonitorDownIcon, qv as LucideMonitorOff, qv as MonitorOff, qv as MonitorOffIcon, Jv as LucideMonitorPause, Jv as MonitorPause, Jv as MonitorPauseIcon, Xv as LucideMonitorPlay, Xv as MonitorPlay, Xv as MonitorPlayIcon, Yv as LucideMonitorSmartphone, Yv as MonitorSmartphone, Yv as MonitorSmartphoneIcon, Zv as LucideMonitorSpeaker, Zv as MonitorSpeaker, Zv as MonitorSpeakerIcon, Qv as LucideMonitorStop, Qv as MonitorStop, Qv as MonitorStopIcon, $v as LucideMonitorUp, $v as MonitorUp, $v as MonitorUpIcon, ey as LucideMonitorX, ey as MonitorX, ey as MonitorXIcon, ry as LucideMoon, ry as Moon, ry as MoonIcon, ny as LucideMoonStar, ny as MoonStar, ny as MoonStarIcon, ay as LucideMosque, ay as Mosque, ay as MosqueIcon, iy as LucideMotorbike, iy as Motorbike, iy as MotorbikeIcon, sy as LucideMountain, sy as Mountain, sy as MountainIcon, oy as LucideMountainSnow, oy as MountainSnow, oy as MountainSnowIcon, _y as LucideMouse, _y as Mouse, _y as MouseIcon, cy as LucideMouseLeft, cy as MouseLeft, cy as MouseLeftIcon, ly as LucideMouseOff, ly as MouseOff, ly as MouseOffIcon, my as LucideMousePointer, my as MousePointer, my as MousePointerIcon, dy as LucideMousePointer2, dy as MousePointer2, dy as MousePointer2Icon, uy as LucideMousePointer2Off, uy as MousePointer2Off, uy as MousePointer2OffIcon, fy as LucideMousePointerBan, fy as MousePointerBan, fy as MousePointerBanIcon, py as LucideMousePointerClick, py as MousePointerClick, py as MousePointerClickIcon, bE as LucideMousePointerSquareDashed, bE as LucideSquareDashedMousePointer, bE as MousePointerSquareDashed, bE as MousePointerSquareDashedIcon, bE as SquareDashedMousePointer, bE as SquareDashedMousePointerIcon, hy as LucideMouseRight, hy as MouseRight, hy as MouseRightIcon, Ay as LucideMove, Ay as Move, Ay as MoveIcon, gy as LucideMove3D, gy as LucideMove3d, gy as Move3D, gy as Move3DIcon, gy as Move3d, gy as Move3dIcon, vy as LucideMoveDiagonal, vy as MoveDiagonal, vy as MoveDiagonalIcon, yy as LucideMoveDiagonal2, yy as MoveDiagonal2, yy as MoveDiagonal2Icon, Cy as LucideMoveDown, Cy as MoveDown, Cy as MoveDownIcon, xy as LucideMoveDownLeft, xy as MoveDownLeft, xy as MoveDownLeftIcon, by as LucideMoveDownRight, by as MoveDownRight, by as MoveDownRightIcon, Sy as LucideMoveHorizontal, Sy as MoveHorizontal, Sy as MoveHorizontalIcon, wy as LucideMoveLeft, wy as MoveLeft, wy as MoveLeftIcon, Ty as LucideMoveRight, Ty as MoveRight, Ty as MoveRightIcon, Oy as LucideMoveUp, Oy as MoveUp, Oy as MoveUpIcon, Ey as LucideMoveUpLeft, Ey as MoveUpLeft, Ey as MoveUpLeftIcon, Dy as LucideMoveUpRight, Dy as MoveUpRight, Dy as MoveUpRightIcon, ky as LucideMoveVertical, ky as MoveVertical, ky as MoveVerticalIcon, Py as LucideMusic, Py as Music, Py as MusicIcon, jy as LucideMusic2, jy as Music2, jy as Music2Icon, My as LucideMusic3, My as Music3, My as Music3Icon, Ny as LucideMusic4, Ny as Music4, Ny as Music4Icon, Ry as LucideNavigation, Ry as Navigation, Ry as NavigationIcon, Iy as LucideNavigation2, Iy as Navigation2, Iy as Navigation2Icon, Fy as LucideNavigation2Off, Fy as Navigation2Off, Fy as Navigation2OffIcon, Ly as LucideNavigationOff, Ly as NavigationOff, Ly as NavigationOffIcon, zy as LucideNetwork, zy as Network, zy as NetworkIcon, By as LucideNewspaper, By as Newspaper, By as NewspaperIcon, Vy as LucideNfc, Vy as Nfc, Vy as NfcIcon, Uy as LucideNonBinary, Uy as NonBinary, Uy as NonBinaryIcon, Ky as LucideNotebook, Ky as Notebook, Ky as NotebookIcon, Hy as LucideNotebookPen, Hy as NotebookPen, Hy as NotebookPenIcon, Wy as LucideNotebookTabs, Wy as NotebookTabs, Wy as NotebookTabsIcon, Gy as LucideNotebookText, Gy as NotebookText, Gy as NotebookTextIcon, Jy as LucideNotepadText, Jy as NotepadText, Jy as NotepadTextIcon, qy as LucideNotepadTextDashed, qy as NotepadTextDashed, qy as NotepadTextDashedIcon, Xy as LucideNut, Xy as Nut, Xy as NutIcon, Yy as LucideNutOff, Yy as NutOff, Yy as NutOffIcon, eb as LucideOctagon, eb as Octagon, eb as OctagonIcon, Qy as LucideOctagonMinus, Qy as OctagonMinus, Qy as OctagonMinusIcon, $y as LucideOctagonPause, $y as LucidePauseOctagon, $y as OctagonPause, $y as OctagonPauseIcon, $y as PauseOctagon, $y as PauseOctagonIcon, tb as LucideOctagonX, tb as LucideXOctagon, tb as OctagonX, tb as OctagonXIcon, tb as XOctagon, tb as XOctagonIcon, nb as LucideOmega, nb as Omega, nb as OmegaIcon, rb as LucideOption, rb as Option, rb as OptionIcon, ib as LucideOrbit, ib as Orbit, ib as OrbitIcon, ab as LucideOrigami, ab as Origami, ab as OrigamiIcon, pb as LucidePackage, pb as Package, pb as PackageIcon, ob as LucidePackage2, ob as Package2, ob as Package2Icon, sb as LucidePackageCheck, sb as PackageCheck, sb as PackageCheckIcon, cb as LucidePackageMinus, cb as PackageMinus, cb as PackageMinusIcon, lb as LucidePackageOpen, lb as PackageOpen, lb as PackageOpenIcon, ub as LucidePackagePlus, ub as PackagePlus, ub as PackagePlusIcon, fb as LucidePackageSearch, fb as PackageSearch, fb as PackageSearchIcon, db as LucidePackageX, db as PackageX, db as PackageXIcon, mb as LucidePaintBucket, mb as PaintBucket, mb as PaintBucketIcon, hb as LucidePaintRoller, hb as PaintRoller, hb as PaintRollerIcon, _b as LucidePaintbrush, _b as Paintbrush, _b as PaintbrushIcon, gb as LucidePaintbrush2, gb as LucidePaintbrushVertical, gb as Paintbrush2, gb as Paintbrush2Icon, gb as PaintbrushVertical, gb as PaintbrushVerticalIcon, vb as LucidePalette, vb as Palette, vb as PaletteIcon, Sk as LucidePalmtree, Sk as LucideTreePalm, Sk as Palmtree, Sk as PalmtreeIcon, Sk as TreePalm, Sk as TreePalmIcon, yb as LucidePanda, yb as Panda, yb as PandaIcon, Cb as LucidePanelBottom, Cb as PanelBottom, Cb as PanelBottomIcon, bb as LucidePanelBottomClose, bb as PanelBottomClose, bb as PanelBottomCloseIcon, xb as LucidePanelBottomDashed, xb as LucidePanelBottomInactive, xb as PanelBottomDashed, xb as PanelBottomDashedIcon, xb as PanelBottomInactive, xb as PanelBottomInactiveIcon, Sb as LucidePanelBottomOpen, Sb as PanelBottomOpen, Sb as PanelBottomOpenIcon, Ob as LucidePanelLeft, Ob as LucideSidebar, Ob as PanelLeft, Ob as PanelLeftIcon, Ob as Sidebar, Ob as SidebarIcon, wb as LucidePanelLeftClose, wb as LucideSidebarClose, wb as PanelLeftClose, wb as PanelLeftCloseIcon, wb as SidebarClose, wb as SidebarCloseIcon, Tb as LucidePanelLeftDashed, Tb as LucidePanelLeftInactive, Tb as PanelLeftDashed, Tb as PanelLeftDashedIcon, Tb as PanelLeftInactive, Tb as PanelLeftInactiveIcon, Eb as LucidePanelLeftOpen, Eb as LucideSidebarOpen, Eb as PanelLeftOpen, Eb as PanelLeftOpenIcon, Eb as SidebarOpen, Eb as SidebarOpenIcon, Db as LucidePanelLeftRightDashed, Db as PanelLeftRightDashed, Db as PanelLeftRightDashedIcon, Mb as LucidePanelRight, Mb as PanelRight, Mb as PanelRightIcon, kb as LucidePanelRightClose, kb as PanelRightClose, kb as PanelRightCloseIcon, Ab as LucidePanelRightDashed, Ab as LucidePanelRightInactive, Ab as PanelRightDashed, Ab as PanelRightDashedIcon, Ab as PanelRightInactive, Ab as PanelRightInactiveIcon, jb as LucidePanelRightOpen, jb as PanelRightOpen, jb as PanelRightOpenIcon, Lb as LucidePanelTop, Lb as PanelTop, Lb as PanelTopIcon, Nb as LucidePanelTopBottomDashed, Nb as PanelTopBottomDashed, Nb as PanelTopBottomDashedIcon, Pb as LucidePanelTopClose, Pb as PanelTopClose, Pb as PanelTopCloseIcon, Fb as LucidePanelTopDashed, Fb as LucidePanelTopInactive, Fb as PanelTopDashed, Fb as PanelTopDashedIcon, Fb as PanelTopInactive, Fb as PanelTopInactiveIcon, Ib as LucidePanelTopOpen, Ib as PanelTopOpen, Ib as PanelTopOpenIcon, Rb as LucidePanelsLeftBottom, Rb as PanelsLeftBottom, Rb as PanelsLeftBottomIcon, zb as LucidePanelsRightBottom, zb as PanelsRightBottom, zb as PanelsRightBottomIcon, _C as LucidePanelsTopBottom, _C as LucideRows3, _C as PanelsTopBottom, _C as PanelsTopBottomIcon, _C as Rows3, _C as Rows3Icon, Bb as LucidePaperBag, Bb as PaperBag, Bb as PaperBagIcon, Hb as LucidePaperclip, Hb as Paperclip, Hb as PaperclipIcon, Ub as LucideParasol, Ub as Parasol, Ub as ParasolIcon, Kb as LucideParentheses, Kb as Parentheses, Kb as ParenthesesIcon, Wb as LucideParkingMeter, Wb as ParkingMeter, Wb as ParkingMeterIcon, FE as LucideParkingSquare, FE as LucideSquareParking, FE as ParkingSquare, FE as ParkingSquareIcon, FE as SquareParking, FE as SquareParkingIcon, PE as LucideParkingSquareOff, PE as LucideSquareParkingOff, PE as ParkingSquareOff, PE as ParkingSquareOffIcon, PE as SquareParkingOff, PE as SquareParkingOffIcon, Gb as LucidePartyPopper, Gb as PartyPopper, Gb as PartyPopperIcon, qb as LucidePause, qb as Pause, qb as PauseIcon, Jb as LucidePawPrint, Jb as PawPrint, Jb as PawPrintIcon, Yb as LucidePcCase, Yb as PcCase, Yb as PcCaseIcon, Xb as LucidePenOff, Xb as PenOff, Xb as PenOffIcon, Qb as LucidePenTool, Qb as PenTool, Qb as PenToolIcon, ix as LucidePencil, ix as Pencil, ix as PencilIcon, ex as LucidePencilLine, ex as PencilLine, ex as PencilLineIcon, tx as LucidePencilOff, tx as PencilOff, tx as PencilOffIcon, nx as LucidePencilRuler, nx as PencilRuler, nx as PencilRulerIcon, rx as LucidePencilSparkles, rx as PencilSparkles, rx as PencilSparklesIcon, ax as LucidePentagon, ax as Pentagon, ax as PentagonIcon, ox as LucidePercent, ox as Percent, ox as PercentIcon, LE as LucidePercentSquare, LE as LucideSquarePercent, LE as PercentSquare, LE as PercentSquareIcon, LE as SquarePercent, LE as SquarePercentIcon, cx as LucidePersonStanding, cx as PersonStanding, cx as PersonStandingIcon, sx as LucidePhi, sx as Phi, sx as PhiIcon, lx as LucidePhilippinePeso, lx as PhilippinePeso, lx as PhilippinePesoIcon, hx as LucidePhone, hx as Phone, hx as PhoneIcon, ux as LucidePhoneCall, ux as PhoneCall, ux as PhoneCallIcon, dx as LucidePhoneForwarded, dx as PhoneForwarded, dx as PhoneForwardedIcon, px as LucidePhoneIncoming, px as PhoneIncoming, px as PhoneIncomingIcon, fx as LucidePhoneMissed, fx as PhoneMissed, fx as PhoneMissedIcon, mx as LucidePhoneOff, mx as PhoneOff, mx as PhoneOffIcon, gx as LucidePhoneOutgoing, gx as PhoneOutgoing, gx as PhoneOutgoingIcon, _x as LucidePi, _x as Pi, _x as PiIcon, RE as LucidePiSquare, RE as LucideSquarePi, RE as PiSquare, RE as PiSquareIcon, RE as SquarePi, RE as SquarePiIcon, vx as LucidePiano, vx as Piano, vx as PianoIcon, yx as LucidePickaxe, yx as Pickaxe, yx as PickaxeIcon, xx as LucidePictureInPicture, xx as PictureInPicture, xx as PictureInPictureIcon, bx as LucidePictureInPicture2, bx as PictureInPicture2, bx as PictureInPicture2Icon, Sx as LucidePiggyBank, Sx as PiggyBank, Sx as PiggyBankIcon, wx as LucidePilcrow, wx as Pilcrow, wx as PilcrowIcon, Cx as LucidePilcrowLeft, Cx as PilcrowLeft, Cx as PilcrowLeftIcon, Tx as LucidePilcrowRight, Tx as PilcrowRight, Tx as PilcrowRightIcon, zE as LucidePilcrowSquare, zE as LucideSquarePilcrow, zE as PilcrowSquare, zE as PilcrowSquareIcon, zE as SquarePilcrow, zE as SquarePilcrowIcon, Dx as LucidePill, Dx as Pill, Dx as PillIcon, Ex as LucidePillBottle, Ex as PillBottle, Ex as PillBottleIcon, Ax as LucidePin, Ax as Pin, Ax as PinIcon, Ox as LucidePinOff, Ox as PinOff, Ox as PinOffIcon, kx as LucidePipette, kx as Pipette, kx as PipetteIcon, jx as LucidePizza, jx as Pizza, jx as PizzaIcon, Nx as LucidePlane, Nx as Plane, Nx as PlaneIcon, Mx as LucidePlaneLanding, Mx as PlaneLanding, Mx as PlaneLandingIcon, Px as LucidePlaneTakeoff, Px as PlaneTakeoff, Px as PlaneTakeoffIcon, Ix as LucidePlay, Ix as Play, Ix as PlayIcon, Fx as LucidePlayOff, Fx as PlayOff, Fx as PlayOffIcon, BE as LucidePlaySquare, BE as LucideSquarePlay, BE as PlaySquare, BE as PlaySquareIcon, BE as SquarePlay, BE as SquarePlayIcon, zx as LucidePlug, zx as Plug, zx as PlugIcon, Lx as LucidePlug2, Lx as Plug2, Lx as Plug2Icon, Rx as LucidePlugZap, Rx as LucidePlugZap2, Rx as PlugZap, Rx as PlugZap2, Rx as PlugZap2Icon, Rx as PlugZapIcon, Bx as LucidePlus, Bx as Plus, Bx as PlusIcon, VE as LucidePlusSquare, VE as LucideSquarePlus, VE as PlusSquare, VE as PlusSquareIcon, VE as SquarePlus, VE as SquarePlusIcon, Vx as LucidePocketKnife, Vx as PocketKnife, Vx as PocketKnifeIcon, Hx as LucidePodium, Hx as Podium, Hx as PodiumIcon, Wx as LucidePointer, Wx as Pointer, Wx as PointerIcon, Ux as LucidePointerOff, Ux as PointerOff, Ux as PointerOffIcon, Gx as LucidePopcorn, Gx as Popcorn, Gx as PopcornIcon, Kx as LucidePopsicle, Kx as Popsicle, Kx as PopsicleIcon, qx as LucidePoundSterling, qx as PoundSterling, qx as PoundSterlingIcon, Yx as LucidePower, Yx as Power, Yx as PowerIcon, Jx as LucidePowerOff, Jx as PowerOff, Jx as PowerOffIcon, HE as LucidePowerSquare, HE as LucideSquarePower, HE as PowerSquare, HE as PowerSquareIcon, HE as SquarePower, HE as SquarePowerIcon, Xx as LucidePresentation, Xx as Presentation, Xx as PresentationIcon, $x as LucidePrinter, $x as Printer, $x as PrinterIcon, Zx as LucidePrinterCheck, Zx as PrinterCheck, Zx as PrinterCheckIcon, Qx as LucidePrinterX, Qx as PrinterX, Qx as PrinterXIcon, eS as LucideProjector, eS as Projector, eS as ProjectorIcon, tS as LucideProportions, tS as Proportions, tS as ProportionsIcon, ee as LucideProvider, nS as LucidePuzzle, nS as Puzzle, nS as PuzzleIcon, rS as LucidePyramid, rS as Pyramid, rS as PyramidIcon, iS as LucideQrCode, iS as QrCode, iS as QrCodeIcon, aS as LucideQuote, aS as Quote, aS as QuoteIcon, oS as LucideRabbit, oS as Rabbit, oS as RabbitIcon, sS as LucideRadar, sS as Radar, sS as RadarIcon, cS as LucideRadiation, cS as Radiation, cS as RadiationIcon, lS as LucideRadical, lS as Radical, lS as RadicalIcon, pS as LucideRadio, pS as Radio, pS as RadioIcon, uS as LucideRadioOff, uS as RadioOff, uS as RadioOffIcon, dS as LucideRadioReceiver, dS as RadioReceiver, dS as RadioReceiverIcon, fS as LucideRadioTower, fS as RadioTower, fS as RadioTowerIcon, mS as LucideRadius, mS as Radius, mS as RadiusIcon, hS as LucideRainbow, hS as Rainbow, hS as RainbowIcon, gS as LucideRat, gS as Rat, gS as RatIcon, _S as LucideRatio, _S as Ratio, _S as RatioIcon, DS as LucideReceipt, DS as Receipt, DS as ReceiptIcon, vS as LucideReceiptCent, vS as ReceiptCent, vS as ReceiptCentIcon, yS as LucideReceiptEuro, yS as ReceiptEuro, yS as ReceiptEuroIcon, bS as LucideReceiptIndianRupee, bS as ReceiptIndianRupee, bS as ReceiptIndianRupeeIcon, xS as LucideReceiptJapaneseYen, xS as ReceiptJapaneseYen, xS as ReceiptJapaneseYenIcon, SS as LucideReceiptPoundSterling, SS as ReceiptPoundSterling, SS as ReceiptPoundSterlingIcon, CS as LucideReceiptRussianRuble, CS as ReceiptRussianRuble, CS as ReceiptRussianRubleIcon, wS as LucideReceiptSwissFranc, wS as ReceiptSwissFranc, wS as ReceiptSwissFrancIcon, TS as LucideReceiptText, TS as ReceiptText, TS as ReceiptTextIcon, ES as LucideReceiptTurkishLira, ES as ReceiptTurkishLira, ES as ReceiptTurkishLiraIcon, OS as LucideRectangleCircle, OS as RectangleCircle, OS as RectangleCircleIcon, AS as LucideRectangleGoggles, AS as RectangleGoggles, AS as RectangleGogglesIcon, MS as LucideRectangleHorizontal, MS as RectangleHorizontal, MS as RectangleHorizontalIcon, jS as LucideRectangleVertical, jS as RectangleVertical, jS as RectangleVerticalIcon, NS as LucideRecycle, NS as Recycle, NS as RecycleIcon, IS as LucideRedo, IS as Redo, IS as RedoIcon, FS as LucideRedo2, FS as Redo2, FS as Redo2Icon, PS as LucideRedoDot, PS as RedoDot, PS as RedoDotIcon, RS as LucideRefreshCcw, RS as RefreshCcw, RS as RefreshCcwIcon, LS as LucideRefreshCcwDot, LS as RefreshCcwDot, LS as RefreshCcwDotIcon, BS as LucideRefreshCw, BS as RefreshCw, BS as RefreshCwIcon, zS as LucideRefreshCwOff, zS as RefreshCwOff, zS as RefreshCwOffIcon, VS as LucideRefrigerator, VS as Refrigerator, VS as RefrigeratorIcon, HS as LucideRegex, HS as Regex, HS as RegexIcon, US as LucideRemoveFormatting, US as RemoveFormatting, US as RemoveFormattingIcon, qS as LucideRepeat, qS as Repeat, qS as RepeatIcon, WS as LucideRepeat1, WS as Repeat1, WS as Repeat1Icon, GS as LucideRepeat2, GS as Repeat2, GS as Repeat2Icon, KS as LucideRepeatOff, KS as RepeatOff, KS as RepeatOffIcon, YS as LucideReplace, YS as Replace, YS as ReplaceIcon, JS as LucideReplaceAll, JS as ReplaceAll, JS as ReplaceAllIcon, ZS as LucideReply, ZS as Reply, ZS as ReplyIcon, XS as LucideReplyAll, XS as ReplyAll, XS as ReplyAllIcon, QS as LucideRewind, QS as Rewind, QS as RewindIcon, $S as LucideRibbon, $S as Ribbon, $S as RibbonIcon, eC as LucideRoad, eC as Road, eC as RoadIcon, tC as LucideRocket, tC as Rocket, tC as RocketIcon, nC as LucideRockingChair, nC as RockingChair, nC as RockingChairIcon, rC as LucideRollerCoaster, rC as RollerCoaster, rC as RollerCoasterIcon, iC as LucideRose, iC as Rose, iC as RoseIcon, aC as LucideRotate3D, aC as LucideRotate3d, aC as Rotate3D, aC as Rotate3DIcon, aC as Rotate3d, aC as Rotate3dIcon, lC as LucideRotateCcw, lC as RotateCcw, lC as RotateCcwIcon, sC as LucideRotateCcwKey, sC as RotateCcwKey, sC as RotateCcwKeyIcon, cC as LucideRotateCcwSquare, cC as RotateCcwSquare, cC as RotateCcwSquareIcon, fC as LucideRotateCw, fC as RotateCw, fC as RotateCwIcon, uC as LucideRotateCwFadingClock, uC as RotateCwFadingClock, uC as RotateCwFadingClockIcon, dC as LucideRotateCwSquare, dC as RotateCwSquare, dC as RotateCwSquareIcon, mC as LucideRoute, mC as Route, mC as RouteIcon, pC as LucideRouteOff, pC as RouteOff, pC as RouteOffIcon, gC as LucideRouter, gC as Router, gC as RouterIcon, hC as LucideRows, hC as LucideRows2, hC as Rows, hC as Rows2, hC as Rows2Icon, hC as RowsIcon, vC as LucideRows4, vC as Rows4, vC as Rows4Icon, yC as LucideRss, yC as Rss, yC as RssIcon, xC as LucideRuler, xC as Ruler, xC as RulerIcon, bC as LucideRulerDimensionLine, bC as RulerDimensionLine, bC as RulerDimensionLineIcon, SC as LucideRussianRuble, SC as RussianRuble, SC as RussianRubleIcon, CC as LucideSailboat, CC as Sailboat, CC as SailboatIcon, TC as LucideSalad, TC as Salad, TC as SaladIcon, wC as LucideSandwich, wC as Sandwich, wC as SandwichIcon, DC as LucideSatellite, DC as Satellite, DC as SatelliteIcon, EC as LucideSatelliteDish, EC as SatelliteDish, EC as SatelliteDishIcon, OC as LucideSaudiRiyal, OC as SaudiRiyal, OC as SaudiRiyalIcon, PC as LucideSave, PC as Save, PC as SaveIcon, kC as LucideSaveAll, kC as SaveAll, kC as SaveAllIcon, AC as LucideSaveCheck, AC as SaveCheck, AC as SaveCheckIcon, jC as LucideSaveOff, jC as SaveOff, jC as SaveOffIcon, MC as LucideSavePen, MC as SavePen, MC as SavePenIcon, NC as LucideSavePlus, NC as SavePlus, NC as SavePlusIcon, IC as LucideScale, IC as Scale, IC as ScaleIcon, FC as LucideScale3D, FC as LucideScale3d, FC as Scale3D, FC as Scale3DIcon, FC as Scale3d, FC as Scale3dIcon, LC as LucideScaling, LC as Scaling, LC as ScalingIcon, JC as LucideScan, JC as Scan, JC as ScanIcon, RC as LucideScanBarcode, RC as ScanBarcode, RC as ScanBarcodeIcon, zC as LucideScanBox, zC as ScanBox, zC as ScanBoxIcon, BC as LucideScanEye, BC as ScanEye, BC as ScanEyeIcon, VC as LucideScanFace, VC as ScanFace, VC as ScanFaceIcon, HC as LucideScanHeart, HC as ScanHeart, HC as ScanHeartIcon, UC as LucideScanLine, UC as ScanLine, UC as ScanLineIcon, WC as LucideScanQrCode, WC as ScanQrCode, WC as ScanQrCodeIcon, KC as LucideScanSearch, KC as ScanSearch, KC as ScanSearchIcon, GC as LucideScanSquare, GC as ScanSquare, GC as ScanSquareIcon, qC as LucideScanText, qC as ScanText, qC as ScanTextIcon, XC as LucideSchool, XC as School, XC as SchoolIcon, Qk as LucideSchool2, Qk as LucideUniversity, Qk as School2, Qk as School2Icon, Qk as University, Qk as UniversityIcon, ZC as LucideScissors, ZC as Scissors, ZC as ScissorsIcon, YC as LucideScissorsLineDashed, YC as ScissorsLineDashed, YC as ScissorsLineDashedIcon, GE as LucideScissorsSquare, GE as LucideSquareScissors, GE as ScissorsSquare, GE as ScissorsSquareIcon, GE as SquareScissors, GE as SquareScissorsIcon, sE as LucideScissorsSquareDashedBottom, sE as LucideSquareBottomDashedScissors, sE as ScissorsSquareDashedBottom, sE as ScissorsSquareDashedBottomIcon, sE as SquareBottomDashedScissors, sE as SquareBottomDashedScissorsIcon, ew as LucideScooter, ew as Scooter, ew as ScooterIcon, $C as LucideScreenShare, $C as ScreenShare, $C as ScreenShareIcon, QC as LucideScreenShareOff, QC as ScreenShareOff, QC as ScreenShareOffIcon, nw as LucideScroll, nw as Scroll, nw as ScrollIcon, tw as LucideScrollText, tw as ScrollText, tw as ScrollTextIcon, lw as LucideSearch, lw as Search, lw as SearchIcon, rw as LucideSearchAlert, rw as SearchAlert, rw as SearchAlertIcon, iw as LucideSearchCheck, iw as SearchCheck, iw as SearchCheckIcon, aw as LucideSearchCode, aw as SearchCode, aw as SearchCodeIcon, ow as LucideSearchSlash, ow as SearchSlash, ow as SearchSlashIcon, sw as LucideSearchX, sw as SearchX, sw as SearchXIcon, cw as LucideSection, cw as Section, cw as SectionIcon, fw as LucideSend, fw as Send, fw as SendIcon, uw as LucideSendHorizonal, uw as LucideSendHorizontal, uw as SendHorizonal, uw as SendHorizonalIcon, uw as SendHorizontal, uw as SendHorizontalIcon, dw as LucideSendToBack, dw as SendToBack, dw as SendToBackIcon, pw as LucideSeparatorHorizontal, pw as SeparatorHorizontal, pw as SeparatorHorizontalIcon, mw as LucideSeparatorVertical, mw as SeparatorVertical, mw as SeparatorVerticalIcon, yw as LucideServer, yw as Server, yw as ServerIcon, hw as LucideServerCog, hw as ServerCog, hw as ServerCogIcon, gw as LucideServerCrash, gw as ServerCrash, gw as ServerCrashIcon, _w as LucideServerOff, _w as ServerOff, _w as ServerOffIcon, vw as LucideServerPlus, vw as ServerPlus, vw as ServerPlusIcon, xw as LucideSettings, xw as Settings, xw as SettingsIcon, bw as LucideSettings2, bw as Settings2, bw as Settings2Icon, Sw as LucideShapes, Sw as Shapes, Sw as ShapesIcon, ww as LucideShare, ww as Share, ww as ShareIcon, Cw as LucideShare2, Cw as Share2, Cw as Share2Icon, Tw as LucideSheet, Tw as Sheet, Tw as SheetIcon, Ew as LucideShell, Ew as Shell, Ew as ShellIcon, Dw as LucideShelvingUnit, Dw as ShelvingUnit, Dw as ShelvingUnitIcon, Uw as LucideShield, Uw as Shield, Uw as ShieldIcon, Ow as LucideShieldAlert, Ow as ShieldAlert, Ow as ShieldAlertIcon, kw as LucideShieldBan, kw as ShieldBan, kw as ShieldBanIcon, Aw as LucideShieldCheck, Aw as ShieldCheck, Aw as ShieldCheckIcon, Hw as LucideShieldClose, Hw as LucideShieldX, Hw as ShieldClose, Hw as ShieldCloseIcon, Hw as ShieldX, Hw as ShieldXIcon, Mw as LucideShieldCog, Mw as ShieldCog, Mw as ShieldCogIcon, jw as LucideShieldCogCorner, jw as ShieldCogCorner, jw as ShieldCogCornerIcon, Nw as LucideShieldEllipsis, Nw as ShieldEllipsis, Nw as ShieldEllipsisIcon, Pw as LucideShieldHalf, Pw as ShieldHalf, Pw as ShieldHalfIcon, Fw as LucideShieldKeyhole, Fw as ShieldKeyhole, Fw as ShieldKeyholeIcon, Iw as LucideShieldLock, Iw as ShieldLock, Iw as ShieldLockIcon, Lw as LucideShieldMinus, Lw as ShieldMinus, Lw as ShieldMinusIcon, zw as LucideShieldOff, zw as ShieldOff, zw as ShieldOffIcon, Rw as LucideShieldPlus, Rw as ShieldPlus, Rw as ShieldPlusIcon, Bw as LucideShieldQuestion, Bw as LucideShieldQuestionMark, Bw as ShieldQuestion, Bw as ShieldQuestionIcon, Bw as ShieldQuestionMark, Bw as ShieldQuestionMarkIcon, Vw as LucideShieldUser, Vw as ShieldUser, Vw as ShieldUserIcon, Gw as LucideShip, Gw as Ship, Gw as ShipIcon, Ww as LucideShipWheel, Ww as ShipWheel, Ww as ShipWheelIcon, Kw as LucideShirt, Kw as Shirt, Kw as ShirtIcon, qw as LucideShoppingBag, qw as ShoppingBag, qw as ShoppingBagIcon, Jw as LucideShoppingBasket, Jw as ShoppingBasket, Jw as ShoppingBasketIcon, Yw as LucideShoppingCart, Yw as ShoppingCart, Yw as ShoppingCartIcon, Xw as LucideShovel, Xw as Shovel, Xw as ShovelIcon, Zw as LucideShowerHead, Zw as ShowerHead, Zw as ShowerHeadIcon, $w as LucideShredder, $w as Shredder, $w as ShredderIcon, Qw as LucideShrimp, Qw as Shrimp, Qw as ShrimpIcon, eT as LucideShrink, eT as Shrink, eT as ShrinkIcon, tT as LucideShrub, tT as Shrub, tT as ShrubIcon, nT as LucideShuffle, nT as Shuffle, nT as ShuffleIcon, rT as LucideSigma, rT as Sigma, rT as SigmaIcon, KE as LucideSigmaSquare, KE as LucideSquareSigma, KE as SigmaSquare, KE as SigmaSquareIcon, KE as SquareSigma, KE as SquareSigmaIcon, cT as LucideSignal, cT as Signal, cT as SignalIcon, iT as LucideSignalHigh, iT as SignalHigh, iT as SignalHighIcon, aT as LucideSignalLow, aT as SignalLow, aT as SignalLowIcon, oT as LucideSignalMedium, oT as SignalMedium, oT as SignalMediumIcon, sT as LucideSignalZero, sT as SignalZero, sT as SignalZeroIcon, lT as LucideSignature, lT as Signature, lT as SignatureIcon, dT as LucideSignpost, dT as Signpost, dT as SignpostIcon, uT as LucideSignpostBig, uT as SignpostBig, uT as SignpostBigIcon, fT as LucideSiren, fT as Siren, fT as SirenIcon, pT as LucideSkipBack, pT as SkipBack, pT as SkipBackIcon, mT as LucideSkipForward, mT as SkipForward, mT as SkipForwardIcon, hT as LucideSkull, hT as Skull, hT as SkullIcon, gT as LucideSlash, gT as Slash, gT as SlashIcon, qE as LucideSlashSquare, qE as LucideSquareSlash, qE as SlashSquare, qE as SlashSquareIcon, qE as SquareSlash, qE as SquareSlashIcon, _T as LucideSlice, _T as Slice, _T as SliceIcon, yT as LucideSliders, yT as LucideSlidersVertical, yT as Sliders, yT as SlidersIcon, yT as SlidersVertical, yT as SlidersVerticalIcon, vT as LucideSlidersHorizontal, vT as SlidersHorizontal, vT as SlidersHorizontalIcon, ST as LucideSmartphone, ST as Smartphone, ST as SmartphoneIcon, bT as LucideSmartphoneCharging, bT as SmartphoneCharging, bT as SmartphoneChargingIcon, xT as LucideSmartphoneNfc, xT as SmartphoneNfc, xT as SmartphoneNfcIcon, CT as LucideSnail, CT as Snail, CT as SnailIcon, wT as LucideSnowflake, wT as Snowflake, wT as SnowflakeIcon, TT as LucideSoapDispenserDroplet, TT as SoapDispenserDroplet, TT as SoapDispenserDropletIcon, ET as LucideSofa, ET as Sofa, ET as SofaIcon, DT as LucideSolarPanel, DT as SolarPanel, DT as SolarPanelIcon, OT as LucideSoup, OT as Soup, OT as SoupIcon, kT as LucideSpace, kT as Space, kT as SpaceIcon, AT as LucideSpade, AT as Spade, AT as SpadeIcon, jT as LucideSparkle, jT as Sparkle, jT as SparkleIcon, MT as LucideSparkles, MT as LucideStars, MT as Sparkles, MT as SparklesIcon, MT as Stars, MT as StarsIcon, NT as LucideSpeaker, NT as Speaker, NT as SpeakerIcon, PT as LucideSpeech, PT as Speech, PT as SpeechIcon, IT as LucideSpellCheck, IT as SpellCheck, IT as SpellCheckIcon, FT as LucideSpellCheck2, FT as SpellCheck2, FT as SpellCheck2Icon, RT as LucideSpline, RT as Spline, RT as SplineIcon, LT as LucideSplinePointer, LT as SplinePointer, LT as SplinePointerIcon, zT as LucideSplit, zT as Split, zT as SplitIcon, JE as LucideSplitSquareHorizontal, JE as LucideSquareSplitHorizontal, JE as SplitSquareHorizontal, JE as SplitSquareHorizontalIcon, JE as SquareSplitHorizontal, JE as SquareSplitHorizontalIcon, YE as LucideSplitSquareVertical, YE as LucideSquareSplitVertical, YE as SplitSquareVertical, YE as SplitSquareVerticalIcon, YE as SquareSplitVertical, YE as SquareSplitVerticalIcon, VT as LucideSpool, VT as Spool, VT as SpoolIcon, BT as LucideSportShoe, BT as SportShoe, BT as SportShoeIcon, HT as LucideSpotlight, HT as Spotlight, HT as SpotlightIcon, UT as LucideSprayCan, UT as SprayCan, UT as SprayCanIcon, WT as LucideSprout, WT as Sprout, WT as SproutIcon, rD as LucideSquare, rD as Square, rD as SquareIcon, eE as LucideSquareArrowRightEnter, eE as SquareArrowRightEnter, eE as SquareArrowRightEnterIcon, tE as LucideSquareArrowRightExit, tE as SquareArrowRightExit, tE as SquareArrowRightExitIcon, _E as LucideSquareDashedBottom, _E as SquareDashedBottom, _E as SquareDashedBottomIcon, vE as LucideSquareDashedBottomCode, vE as SquareDashedBottomCode, vE as SquareDashedBottomCodeIcon, Y as LucideSquareDashedText, Y as LucideTextSelect, Y as LucideTextSelection, Y as SquareDashedText, Y as SquareDashedTextIcon, Y as TextSelect, Y as TextSelectIcon, Y as TextSelection, Y as TextSelectionIcon, xE as LucideSquareDashedTopSolid, xE as SquareDashedTopSolid, xE as SquareDashedTopSolidIcon, NE as LucideSquareOff, NE as SquareOff, NE as SquareOffIcon, IE as LucideSquarePause, IE as SquarePause, IE as SquarePauseIcon, UE as LucideSquareRadical, UE as SquareRadical, UE as SquareRadicalIcon, WE as LucideSquareRoundCorner, WE as SquareRoundCorner, WE as SquareRoundCornerIcon, XE as LucideSquareSquare, XE as SquareSquare, XE as SquareSquareIcon, ZE as LucideSquareStack, ZE as SquareStack, ZE as SquareStackIcon, tD as LucideSquareStar, tD as SquareStar, tD as SquareStarIcon, QE as LucideSquareStop, QE as SquareStop, QE as SquareStopIcon, $E as LucideSquareTerminal, $E as LucideTerminalSquare, $E as SquareTerminal, $E as SquareTerminalIcon, $E as TerminalSquare, $E as TerminalSquareIcon, nD as LucideSquareUser, nD as LucideUserSquare, nD as SquareUser, nD as SquareUserIcon, nD as UserSquare, nD as UserSquareIcon, eD as LucideSquareUserRound, eD as LucideUserSquare2, eD as SquareUserRound, eD as SquareUserRoundIcon, eD as UserSquare2, eD as UserSquare2Icon, Z as LucideSquareX, Z as LucideXSquare, Z as SquareX, Z as SquareXIcon, Z as XSquare, Z as XSquareIcon, aD as LucideSquaresExclude, aD as SquaresExclude, aD as SquaresExcludeIcon, iD as LucideSquaresIntersect, iD as SquaresIntersect, iD as SquaresIntersectIcon, oD as LucideSquaresSubtract, oD as SquaresSubtract, oD as SquaresSubtractIcon, sD as LucideSquaresUnite, sD as SquaresUnite, sD as SquaresUniteIcon, lD as LucideSquircle, lD as Squircle, lD as SquircleIcon, cD as LucideSquircleDashed, cD as SquircleDashed, cD as SquircleDashedIcon, uD as LucideSquirrel, uD as Squirrel, uD as SquirrelIcon, dD as LucideStamp, dD as Stamp, dD as StampIcon, vD as LucideStar, vD as Star, vD as StarIcon, fD as LucideStarCheck, fD as StarCheck, fD as StarCheckIcon, pD as LucideStarHalf, pD as StarHalf, pD as StarHalfIcon, mD as LucideStarMinus, mD as StarMinus, mD as StarMinusIcon, hD as LucideStarOff, hD as StarOff, hD as StarOffIcon, gD as LucideStarPlus, gD as StarPlus, gD as StarPlusIcon, _D as LucideStarX, _D as StarX, _D as StarXIcon, yD as LucideStepBack, yD as StepBack, yD as StepBackIcon, bD as LucideStepForward, bD as StepForward, bD as StepForwardIcon, SD as LucideStethoscope, SD as Stethoscope, SD as StethoscopeIcon, xD as LucideSticker, xD as Sticker, xD as StickerIcon, OD as LucideStickyNote, OD as StickyNote, OD as StickyNoteIcon, CD as LucideStickyNoteCheck, CD as StickyNoteCheck, CD as StickyNoteCheckIcon, TD as LucideStickyNoteMinus, TD as StickyNoteMinus, TD as StickyNoteMinusIcon, wD as LucideStickyNoteOff, wD as StickyNoteOff, wD as StickyNoteOffIcon, ED as LucideStickyNotePlus, ED as StickyNotePlus, ED as StickyNotePlusIcon, DD as LucideStickyNoteX, DD as StickyNoteX, DD as StickyNoteXIcon, kD as LucideStickyNotes, kD as StickyNotes, kD as StickyNotesIcon, jD as LucideStone, jD as Stone, jD as StoneIcon, AD as LucideStore, AD as Store, AD as StoreIcon, MD as LucideStretchHorizontal, MD as StretchHorizontal, MD as StretchHorizontalIcon, ND as LucideStretchVertical, ND as StretchVertical, ND as StretchVerticalIcon, PD as LucideStrikethrough, PD as Strikethrough, PD as StrikethroughIcon, FD as LucideSubscript, FD as Subscript, FD as SubscriptIcon, ID as LucideSummary, ID as Summary, ID as SummaryIcon, VD as LucideSun, VD as Sun, VD as SunIcon, LD as LucideSunDim, LD as SunDim, LD as SunDimIcon, RD as LucideSunMedium, RD as SunMedium, RD as SunMediumIcon, zD as LucideSunMoon, zD as SunMoon, zD as SunMoonIcon, BD as LucideSunSnow, BD as SunSnow, BD as SunSnowIcon, HD as LucideSunrise, HD as Sunrise, HD as SunriseIcon, UD as LucideSunset, UD as Sunset, UD as SunsetIcon, GD as LucideSuperscript, GD as Superscript, GD as SuperscriptIcon, WD as LucideSwatchBook, WD as SwatchBook, WD as SwatchBookIcon, KD as LucideSwissFranc, KD as SwissFranc, KD as SwissFrancIcon, qD as LucideSwitchCamera, qD as SwitchCamera, qD as SwitchCameraIcon, JD as LucideSword, JD as Sword, JD as SwordIcon, YD as LucideSwords, YD as Swords, YD as SwordsIcon, XD as LucideSyringe, XD as Syringe, XD as SyringeIcon, iO as LucideTable, iO as Table, iO as TableIcon, ZD as LucideTable2, ZD as Table2, ZD as Table2Icon, QD as LucideTableCellsMerge, QD as TableCellsMerge, QD as TableCellsMergeIcon, $D as LucideTableCellsSplit, $D as TableCellsSplit, $D as TableCellsSplitIcon, eO as LucideTableColumnsSplit, eO as TableColumnsSplit, eO as TableColumnsSplitIcon, tO as LucideTableOfContents, tO as TableOfContents, tO as TableOfContentsIcon, nO as LucideTableProperties, nO as TableProperties, nO as TablePropertiesIcon, rO as LucideTableRowsSplit, rO as TableRowsSplit, rO as TableRowsSplitIcon, oO as LucideTablet, oO as Tablet, oO as TabletIcon, aO as LucideTabletSmartphone, aO as TabletSmartphone, aO as TabletSmartphoneIcon, sO as LucideTablets, sO as Tablets, sO as TabletsIcon, uO as LucideTag, uO as Tag, uO as TagIcon, cO as LucideTagPlus, cO as TagPlus, cO as TagPlusIcon, lO as LucideTagX, lO as TagX, lO as TagXIcon, dO as LucideTags, dO as Tags, dO as TagsIcon, fO as LucideTally1, fO as Tally1, fO as Tally1Icon, pO as LucideTally2, pO as Tally2, pO as Tally2Icon, mO as LucideTally3, mO as Tally3, mO as Tally3Icon, gO as LucideTally4, gO as Tally4, gO as Tally4Icon, hO as LucideTally5, hO as Tally5, hO as Tally5Icon, _O as LucideTangent, _O as Tangent, _O as TangentIcon, vO as LucideTarget, vO as Target, vO as TargetIcon, yO as LucideTelescope, yO as Telescope, yO as TelescopeIcon, xO as LucideTent, xO as Tent, xO as TentIcon, bO as LucideTentTree, bO as TentTree, bO as TentTreeIcon, SO as LucideTerminal, SO as Terminal, SO as TerminalIcon, wO as LucideTestTube, wO as TestTube, wO as TestTubeIcon, CO as LucideTestTube2, CO as LucideTestTubeDiagonal, CO as TestTube2, CO as TestTube2Icon, CO as TestTubeDiagonal, CO as TestTubeDiagonalIcon, TO as LucideTestTubes, TO as TestTubes, TO as TestTubesIcon, AO as LucideTextCursor, AO as TextCursor, AO as TextCursorIcon, kO as LucideTextCursorInput, kO as TextCursorInput, kO as TextCursorInputIcon, MO as LucideTextQuote, MO as TextQuote, MO as TextQuoteIcon, NO as LucideTextSearch, NO as TextSearch, NO as TextSearchIcon, PO as LucideTextWrap, PO as LucideWrapText, PO as TextWrap, PO as TextWrapIcon, PO as WrapText, PO as WrapTextIcon, FO as LucideTheater, FO as Theater, FO as TheaterIcon, LO as LucideThermometer, LO as Thermometer, LO as ThermometerIcon, IO as LucideThermometerSnowflake, IO as ThermometerSnowflake, IO as ThermometerSnowflakeIcon, RO as LucideThermometerSun, RO as ThermometerSun, RO as ThermometerSunIcon, zO as LucideThumbsDown, zO as ThumbsDown, zO as ThumbsDownIcon, BO as LucideThumbsUp, BO as ThumbsUp, BO as ThumbsUpIcon, qO as LucideTicket, qO as Ticket, qO as TicketIcon, VO as LucideTicketCheck, VO as TicketCheck, VO as TicketCheckIcon, HO as LucideTicketMinus, HO as TicketMinus, HO as TicketMinusIcon, UO as LucideTicketPercent, UO as TicketPercent, UO as TicketPercentIcon, WO as LucideTicketPlus, WO as TicketPlus, WO as TicketPlusIcon, GO as LucideTicketSlash, GO as TicketSlash, GO as TicketSlashIcon, KO as LucideTicketX, KO as TicketX, KO as TicketXIcon, YO as LucideTickets, YO as Tickets, YO as TicketsIcon, JO as LucideTicketsPlane, JO as TicketsPlane, JO as TicketsPlaneIcon, XO as LucideTimeline, XO as Timeline, XO as TimelineIcon, $O as LucideTimer, $O as Timer, $O as TimerIcon, ZO as LucideTimerOff, ZO as TimerOff, ZO as TimerOffIcon, QO as LucideTimerReset, QO as TimerReset, QO as TimerResetIcon, ek as LucideToggleLeft, ek as ToggleLeft, ek as ToggleLeftIcon, tk as LucideToggleRight, tk as ToggleRight, tk as ToggleRightIcon, rk as LucideToilet, rk as Toilet, rk as ToiletIcon, nk as LucideToolCase, nk as ToolCase, nk as ToolCaseIcon, ik as LucideToolbox, ik as Toolbox, ik as ToolboxIcon, ak as LucideTornado, ak as Tornado, ak as TornadoIcon, ok as LucideTorus, ok as Torus, ok as TorusIcon, sk as LucideTouchpad, sk as Touchpad, sk as TouchpadIcon, ck as LucideTouchpadOff, ck as TouchpadOff, ck as TouchpadOffIcon, lk as LucideTowelRack, lk as TowelRack, lk as TowelRackIcon, uk as LucideTowerControl, uk as TowerControl, uk as TowerControlIcon, dk as LucideToyBrick, dk as ToyBrick, dk as ToyBrickIcon, fk as LucideTractor, fk as Tractor, fk as TractorIcon, pk as LucideTrafficCone, pk as TrafficCone, pk as TrafficConeIcon, _k as LucideTrain, _k as LucideTramFront, _k as Train, _k as TrainIcon, _k as TramFront, _k as TramFrontIcon, hk as LucideTrainFront, hk as TrainFront, hk as TrainFrontIcon, mk as LucideTrainFrontTunnel, mk as TrainFrontTunnel, mk as TrainFrontTunnelIcon, gk as LucideTrainTrack, gk as TrainTrack, gk as TrainTrackIcon, vk as LucideTransgender, vk as Transgender, vk as TransgenderIcon, bk as LucideTrash, bk as Trash, bk as TrashIcon, yk as LucideTrash2, yk as Trash2, yk as Trash2Icon, xk as LucideTreeDeciduous, xk as TreeDeciduous, xk as TreeDeciduousIcon, Ck as LucideTreePine, Ck as TreePine, Ck as TreePineIcon, wk as LucideTrees, wk as Trees, wk as TreesIcon, Tk as LucideTrendingDown, Tk as TrendingDown, Tk as TrendingDownIcon, Dk as LucideTrendingUp, Dk as TrendingUp, Dk as TrendingUpIcon, Ek as LucideTrendingUpDown, Ek as TrendingUpDown, Ek as TrendingUpDownIcon, jk as LucideTriangle, jk as Triangle, jk as TriangleIcon, kk as LucideTriangleDashed, kk as TriangleDashed, kk as TriangleDashedIcon, Ak as LucideTriangleRight, Ak as TriangleRight, Ak as TriangleRightIcon, Mk as LucideTrophy, Mk as Trophy, Mk as TrophyIcon, Fk as LucideTruck, Fk as Truck, Fk as TruckIcon, Nk as LucideTruckElectric, Nk as TruckElectric, Nk as TruckElectricIcon, Pk as LucideTurkishLira, Pk as TurkishLira, Pk as TurkishLiraIcon, Ik as LucideTurntable, Ik as Turntable, Ik as TurntableIcon, Lk as LucideTurtle, Lk as Turtle, Lk as TurtleIcon, Bk as LucideTv, Bk as Tv, Bk as TvIcon, zk as LucideTv2, zk as LucideTvMinimal, zk as Tv2, zk as Tv2Icon, zk as TvMinimal, zk as TvMinimalIcon, Rk as LucideTvMinimalPlay, Rk as TvMinimalPlay, Rk as TvMinimalPlayIcon, Hk as LucideType, Hk as Type, Hk as TypeIcon, Vk as LucideTypeOutline, Vk as TypeOutline, Vk as TypeOutlineIcon, Wk as LucideUmbrella, Wk as Umbrella, Wk as UmbrellaIcon, Uk as LucideUmbrellaOff, Uk as UmbrellaOff, Uk as UmbrellaOffIcon, Gk as LucideUnderline, Gk as Underline, Gk as UnderlineIcon, Jk as LucideUndo, Jk as Undo, Jk as UndoIcon, qk as LucideUndo2, qk as Undo2, qk as Undo2Icon, Kk as LucideUndoDot, Kk as UndoDot, Kk as UndoDotIcon, Yk as LucideUnfoldHorizontal, Yk as UnfoldHorizontal, Yk as UnfoldHorizontalIcon, Xk as LucideUnfoldVertical, Xk as UnfoldVertical, Xk as UnfoldVerticalIcon, Zk as LucideUngroup, Zk as Ungroup, Zk as UngroupIcon, eA as LucideUnlink, eA as Unlink, eA as UnlinkIcon, $k as LucideUnlink2, $k as Unlink2, $k as Unlink2Icon, nA as LucideUnplug, nA as Unplug, nA as UnplugIcon, tA as LucideUpload, tA as Upload, tA as UploadIcon, rA as LucideUsb, rA as Usb, rA as UsbIcon, TA as LucideUser, TA as User, TA as UserIcon, yA as LucideUser2, yA as LucideUserRound, yA as User2, yA as User2Icon, yA as UserRound, yA as UserRoundIcon, iA as LucideUserCheck, iA as UserCheck, iA as UserCheckIcon, pA as LucideUserCheck2, pA as LucideUserRoundCheck, pA as UserCheck2, pA as UserCheck2Icon, pA as UserRoundCheck, pA as UserRoundCheckIcon, aA as LucideUserCog, aA as UserCog, aA as UserCogIcon, fA as LucideUserCog2, fA as LucideUserRoundCog, fA as UserCog2, fA as UserCog2Icon, fA as UserRoundCog, fA as UserRoundCogIcon, oA as LucideUserKey, oA as UserKey, oA as UserKeyIcon, sA as LucideUserLock, sA as UserLock, sA as UserLockIcon, cA as LucideUserMinus, cA as UserMinus, cA as UserMinusIcon, hA as LucideUserMinus2, hA as LucideUserRoundMinus, hA as UserMinus2, hA as UserMinus2Icon, hA as UserRoundMinus, hA as UserRoundMinusIcon, lA as LucideUserPen, lA as UserPen, lA as UserPenIcon, uA as LucideUserPlus, uA as UserPlus, uA as UserPlusIcon, _A as LucideUserPlus2, _A as LucideUserRoundPlus, _A as UserPlus2, _A as UserPlus2Icon, _A as UserRoundPlus, _A as UserRoundPlusIcon, dA as LucideUserRoundArrowLeft, dA as UserRoundArrowLeft, dA as UserRoundArrowLeftIcon, mA as LucideUserRoundKey, mA as UserRoundKey, mA as UserRoundKeyIcon, gA as LucideUserRoundPen, gA as UserRoundPen, gA as UserRoundPenIcon, vA as LucideUserRoundSearch, vA as UserRoundSearch, vA as UserRoundSearchIcon, bA as LucideUserRoundX, bA as LucideUserX2, bA as UserRoundX, bA as UserRoundXIcon, bA as UserX2, bA as UserX2Icon, xA as LucideUserSearch, xA as UserSearch, xA as UserSearchIcon, SA as LucideUserShield, SA as UserShield, SA as UserShieldIcon, CA as LucideUserStar, CA as UserStar, CA as UserStarIcon, wA as LucideUserX, wA as UserX, wA as UserXIcon, DA as LucideUsers, DA as Users, DA as UsersIcon, EA as LucideUsers2, EA as LucideUsersRound, EA as Users2, EA as Users2Icon, EA as UsersRound, EA as UsersRoundIcon, AA as LucideUtilityPole, AA as UtilityPole, AA as UtilityPoleIcon, jA as LucideVan, jA as Van, jA as VanIcon, MA as LucideVariable, MA as Variable, MA as VariableIcon, NA as LucideVault, NA as Vault, NA as VaultIcon, PA as LucideVectorSquare, PA as VectorSquare, PA as VectorSquareIcon, FA as LucideVegan, FA as Vegan, FA as VeganIcon, IA as LucideVenetianMask, IA as VenetianMask, IA as VenetianMaskIcon, zA as LucideVenus, zA as Venus, zA as VenusIcon, LA as LucideVenusAndMars, LA as VenusAndMars, LA as VenusAndMarsIcon, BA as LucideVibrate, BA as Vibrate, BA as VibrateIcon, RA as LucideVibrateOff, RA as VibrateOff, RA as VibrateOffIcon, HA as LucideVideo, HA as Video, HA as VideoIcon, VA as LucideVideoOff, VA as VideoOff, VA as VideoOffIcon, UA as LucideVideotape, UA as Videotape, UA as VideotapeIcon, WA as LucideView, WA as View, WA as ViewIcon, GA as LucideVoicemail, GA as Voicemail, GA as VoicemailIcon, KA as LucideVolleyball, KA as Volleyball, KA as VolleyballIcon, ZA as LucideVolume, ZA as Volume, ZA as VolumeIcon, qA as LucideVolume1, qA as Volume1, qA as Volume1Icon, JA as LucideVolume2, JA as Volume2, JA as Volume2Icon, YA as LucideVolumeOff, YA as VolumeOff, YA as VolumeOffIcon, XA as LucideVolumeX, XA as VolumeX, XA as VolumeXIcon, $A as LucideVote, $A as Vote, $A as VoteIcon, tj as LucideWallet, tj as Wallet, tj as WalletIcon, ej as LucideWallet2, ej as LucideWalletMinimal, ej as Wallet2, ej as Wallet2Icon, ej as WalletMinimal, ej as WalletMinimalIcon, QA as LucideWalletCards, QA as WalletCards, QA as WalletCardsIcon, nj as LucideWallpaper, nj as Wallpaper, nj as WallpaperIcon, ij as LucideWand, ij as Wand, ij as WandIcon, rj as LucideWand2, rj as LucideWandSparkles, rj as Wand2, rj as Wand2Icon, rj as WandSparkles, rj as WandSparklesIcon, aj as LucideWarehouse, aj as Warehouse, aj as WarehouseIcon, oj as LucideWashingMachine, oj as WashingMachine, oj as WashingMachineIcon, sj as LucideWatch, sj as Watch, sj as WatchIcon, $ as LucideWaves, $ as LucideWavesHorizontal, $ as Waves, $ as WavesHorizontal, $ as WavesHorizontalIcon, $ as WavesIcon, lj as LucideWavesArrowDown, lj as WavesArrowDown, lj as WavesArrowDownIcon, cj as LucideWavesArrowUp, cj as WavesArrowUp, cj as WavesArrowUpIcon, uj as LucideWavesLadder, uj as WavesLadder, uj as WavesLadderIcon, dj as LucideWavesVertical, dj as WavesVertical, dj as WavesVerticalIcon, fj as LucideWaypoints, fj as Waypoints, fj as WaypointsIcon, mj as LucideWebcam, mj as Webcam, mj as WebcamIcon, pj as LucideWebcamOff, pj as WebcamOff, pj as WebcamOffIcon, hj as LucideWebhook, hj as Webhook, hj as WebhookIcon, gj as LucideWebhookOff, gj as WebhookOff, gj as WebhookOffIcon, vj as LucideWeight, vj as Weight, vj as WeightIcon, _j as LucideWeightTilde, _j as WeightTilde, _j as WeightTildeIcon, xj as LucideWheat, xj as Wheat, xj as WheatIcon, yj as LucideWheatOff, yj as WheatOff, yj as WheatOffIcon, bj as LucideWholeWord, bj as WholeWord, bj as WholeWordIcon, kj as LucideWifi, kj as Wifi, kj as WifiIcon, Sj as LucideWifiCog, Sj as WifiCog, Sj as WifiCogIcon, Cj as LucideWifiHigh, Cj as WifiHigh, Cj as WifiHighIcon, wj as LucideWifiLow, wj as WifiLow, wj as WifiLowIcon, Tj as LucideWifiOff, Tj as WifiOff, Tj as WifiOffIcon, Ej as LucideWifiPen, Ej as WifiPen, Ej as WifiPenIcon, Dj as LucideWifiSync, Dj as WifiSync, Dj as WifiSyncIcon, Oj as LucideWifiZero, Oj as WifiZero, Oj as WifiZeroIcon, jj as LucideWind, jj as Wind, jj as WindIcon, Aj as LucideWindArrowDown, Aj as WindArrowDown, Aj as WindArrowDownIcon, Nj as LucideWine, Nj as Wine, Nj as WineIcon, Mj as LucideWineOff, Mj as WineOff, Mj as WineOffIcon, Pj as LucideWorkflow, Pj as Workflow, Pj as WorkflowIcon, Fj as LucideWorm, Fj as Worm, Fj as WormIcon, Lj as LucideWrench, Lj as Wrench, Lj as WrenchIcon, Ij as LucideWrenchOff, Ij as WrenchOff, Ij as WrenchOffIcon, zj as LucideX, zj as X, zj as XIcon, Rj as LucideXLineTop, Rj as XLineTop, Rj as XLineTopIcon, Hj as LucideZap, Hj as Zap, Hj as ZapIcon, Bj as LucideZapOff, Bj as ZapOff, Bj as ZapOffIcon, Vj as LucideZodiacAquarius, Vj as ZodiacAquarius, Vj as ZodiacAquariusIcon, Uj as LucideZodiacAries, Uj as ZodiacAries, Uj as ZodiacAriesIcon, Wj as LucideZodiacCancer, Wj as ZodiacCancer, Wj as ZodiacCancerIcon, Gj as LucideZodiacCapricorn, Gj as ZodiacCapricorn, Gj as ZodiacCapricornIcon, Kj as LucideZodiacGemini, Kj as ZodiacGemini, Kj as ZodiacGeminiIcon, qj as LucideZodiacLeo, qj as ZodiacLeo, qj as ZodiacLeoIcon, Yj as LucideZodiacLibra, Yj as ZodiacLibra, Yj as ZodiacLibraIcon, Jj as LucideZodiacOphiuchus, Jj as ZodiacOphiuchus, Jj as ZodiacOphiuchusIcon, Xj as LucideZodiacPisces, Xj as ZodiacPisces, Xj as ZodiacPiscesIcon, Zj as LucideZodiacSagittarius, Zj as ZodiacSagittarius, Zj as ZodiacSagittariusIcon, Qj as LucideZodiacScorpio, Qj as ZodiacScorpio, Qj as ZodiacScorpioIcon, $j as LucideZodiacTaurus, $j as ZodiacTaurus, $j as ZodiacTaurusIcon, tM as LucideZodiacVirgo, tM as ZodiacVirgo, tM as ZodiacVirgoIcon, eM as LucideZoomIn, eM as ZoomIn, eM as ZoomInIcon, nM as LucideZoomOut, nM as ZoomOut, nM as ZoomOutIcon, m as createLucideIcon, rM as icons, te as useLucideContext };

//# sourceMappingURL=icons.js.map