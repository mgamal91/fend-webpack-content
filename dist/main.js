var Client;
(() => {
    "use strict";
    var e = { d: (t, n) => { for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: n[o] }) }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } },
        t = {};

    function n(e) {
        console.log("::: Running checkForName :::", e);
        ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"].includes(e) && alert("Welcome, Captain!")
    }

    function o(e) {
        e.preventDefault();
        let t = document.getElementById("name").value;
        Client.checkForName(t), console.log("::: Form Submitted :::"), fetch("http://localhost:8081/test").then((e => e.json())).then((function(e) { document.getElementById("results").innerHTML = e.message }))
    }
    e.r(t), e.d(t, { checkForName: () => n, handleSubmit: () => o }), Client = t
})();