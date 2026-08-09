//#region src/components/drawer/drawer.ts
function e(e) {
	let t = e.closest(".drawer-container") || e, n = t.querySelectorAll(".drawer__close, .drawer-overlay");
	function r() {
		t.classList.add("is-open");
	}
	function i() {
		t.classList.remove("is-open");
	}
	return n.forEach((e) => {
		e.addEventListener("click", i);
	}), {
		open: r,
		close: i
	};
}
//#endregion
//#region src/components/form-input/form-input.ts
function t(e) {
	let t = e.querySelector("input"), n = e.querySelector(".form-input-toggle");
	!t || !n || n.addEventListener("click", () => {
		let e = t.type === "password";
		t.type = e ? "text" : "password";
	});
}
//#endregion
export { e as createDrawer, t as createPasswordToggle };

//# sourceMappingURL=foundation.js.map