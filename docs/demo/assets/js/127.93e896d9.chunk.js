(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{576:function(n,e,t){"use strict";t.r(e),e.default='/* globals spritevue */\nconst Vue = spritevue.Vue;\n\nVue.component(\'traffic-light\', {\n  props: [\n    \'color\',\n    \'radius\',\n    \'x\',\n    \'y\',\n  ],\n  template: `<sprite ref="circle" anchor="0.5" :x="x" :y="y" :size="[2*radius, 2*radius]" :bgcolor="color" \n:borderRadius="radius"></sprite>`,\n});\n\nnew Vue({\n  el: \'#app\',\n  data() {\n    return {\n      state: true,\n    };\n  },\n  mounted() {\n    setInterval(() => { this.state = !this.state }, 3000);\n  },\n});'}}]);