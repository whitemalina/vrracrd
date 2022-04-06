
<template>
    <div>
        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        <script src="https://unpkg.com/aframe-slice9-component/dist/aframe-slice9-component.min.js"></script>
        <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
        <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
        <script>
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
        </script>
        <a-scene>
                <a-assets>
                    <img id="city" crossorigin=null  :src="scene.bg" />
                    <img id="my-image" crossorigin=null :src="scene.img" alt="" />
                </a-assets>

                <a-sky hide-in-ar-mode id="image-360" rotation="0 -112.49 0" radius="100" src="#city"> </a-sky>
                <a-image
                    look-at="[camera]"
                    src="#my-image"
                    animation=" dir: alternate; property: position; to: 2.97812 1 -4.121; dur: 800; easing: easeInOutQuad; loop: true"
                    id="cake"
                    rotation="-1.263944896058596 -31.961304685782714 1.9239922760493042"
                    scale="1.72429 1.72429 1.72429"
                    position="2.97812 0.68661 -4.121"
                ></a-image>
                <a-entity
                    look-at="[camera]"
                    id="text2"
                    geometry="primitive: plane"
                    :text="`lineHeight: 50;width: 3;whiteSpace: pre;align: center; value: ${title} \n\n ${content}; font: /Roboto-Regular-msdf.json; negate: false; baseline:center;`"
                    slice9="opacity: 0.7;color: white;padding: 0.03;width: 3; height: 4; left: 20; right: 43; top: 20; bottom: 43; src: /tooltip.png"
                    position="0 1 -4"
                >
                </a-entity>
            </a-scene>
    </div>
</template>

<style lang="scss">
    
</style>


<script>
const HOST = process.env.HOST;
export default {
  layout: "empty",
   async beforeMount(){

      console.log(this.$route.params.url);
      
        await fetch(HOST + 'card/' + this.$route.params.url).then(res => res.json()).then(json => {
            let data = json.data[0]
            this.title = data.title
            this.content = data.content
            this.scene.bg = data.scene[0].bg_path
            this.scene.img = data.scene[0].text
          console.log(json);
         })
        
      
  },
  mounted() {
    this.getbg()
  },
  data() {
    return {
      title : '123456',
      content : '123',
      scene : {
        bg : 'https://raw.githubusercontent.com/whitemalina/bop/main/city.jpeg',
        img : 'https://raw.githubusercontent.com/whitemalina/bop/main/pngegg.png'
      }
    };
  },
  methods: {
    async getbg() {
          await fetch(HOST + 'card/' + this.$route.params.url).then(res => res.json()).then(json => {
            let data = json.data[0]
            this.title = data.title
            this.content = data.content
            this.scene.bg = data.scene[0].bg_path
            this.scene.img = data.scene[0].text
          console.log(json);
         })
    }
  }
};
</script>