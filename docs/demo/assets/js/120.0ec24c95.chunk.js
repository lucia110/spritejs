(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{569:function(i,t,e){"use strict";e.r(t),t.default='<div id="app">\n  <scene id="container" :viewport="[300, 300]" :resolution="[600, 600]">\n    <layer>\n      <s-transition :enter="[\'fade-in\', 600]" exit="fade-out">\n        <traffic-light v-if="state===\'stop\'" radius="50" x="150" y="300" color="red" key="stop"></traffic-light>\n        <traffic-light v-else-if="state===\'warn\'" radius="50" x="300" y="300" color="orange" key="warn"></traffic-light>\n        <traffic-light v-else radius="50" x="450" y="300" color="green" key="pass"></traffic-light>\n      </s-transition>\n    </layer>\n  </scene>  \n</div>'}}]);