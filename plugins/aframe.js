require('aframe')
require('aframe-slice9-component')
require('aframe-event-set-component')
require('aframe-look-at-component')
AFRAME.registerComponent("hide-in-ar-mode", {
    // Невидимость обьекта в режиме AR.
    init: function () {
        this.el.sceneEl.addEventListener("enter-vr", (ev) => {
            this.wasVisible = this.el.getAttribute("visible");
            if (this.el.sceneEl.is("ar-mode")) {
                this.el.setAttribute("visible", false);
            }
        });
        this.el.sceneEl.addEventListener("exit-vr", (ev) => {
            if (this.wasVisible) this.el.setAttribute("visible", true);
        });
    },
});