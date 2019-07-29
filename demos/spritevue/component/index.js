/* globals spritevue */
const Vue = spritevue.Vue;

function randomColor() {
  const r = Math.random() * 255 | 0,
    g = Math.random() * 192 | 0,
    b = Math.random() * 128 | 0;
  return `rgb(${r},${g},${b})`;
}

Vue.component('my-circle', {
  props: [
    'color',
    'radius',
    'x',
    'y',
  ],
  methods: {
    click() {
      this.color = randomColor();
    },
  },
  template: '<sprite anchor="0.5" :x="x" :y="y" :size="[2*radius, 2*radius]" :bgcolor="color" :borderRadius="radius" @click="click"></sprite>',
});

new Vue({
  el: '#app',
  data() {
    return {
      font: '48px Arial',
      fillColor: '#f50',
    };
  },
});