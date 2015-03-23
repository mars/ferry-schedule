var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var RouterState = Router.State;
var Navigation = Router.Navigation;
var immutableUpdate = React.addons.update;

var Map = React.createClass({
  mixins: [ RouterState, Navigation ],

  propTypes: {
    runningInBrowser: React.PropTypes.bool,
    foundPosition: React.PropTypes.bool,
    locationsByDistance: React.PropTypes.array
  },
  
  render: function() {
    var nearestFerryStop = this.nearestFerryStop();
    return <div className='map screen'>
      <h1 className="masthead">Tiburon-San Francisco Ferry Schedules</h1>
      <svg version="1.1"
        viewBox="0 0 325 404"
        className='route-map'
        data-zoom-to={this.getQuery()['location-name']}
        data-nearest-ferry-stop={nearestFerryStop && nearestFerryStop.id}>
      <g id="Layer_8">
        <g>
          <polygon className="st2" points="265.667,393.501 264.556,390.834 58.162,390.834 59,399.501 0,399.501 0,404.5 324.667,404.5 
            324.667,393.501     "/>
          <polygon className="st2" points="92.667,5 198.333,2.168 198.333,5.501 324.667,5.501 324.667,0.5 0,0.5 0,5.501 92.821,5.501    "/>
          <polygon className="st0" points="198.333,8.835 207,13.501 208.333,23.501 207,30.835 217.667,32.168 222.333,37.501 223,54.835 
            233.667,64.168 247.667,66.835 260.333,86.835 257,106.168 266.333,109.501 270.333,104.835 277,108.834 293.667,114.834 
            302.334,112.168 310.334,108.834 323.667,108.834 324.667,108.834 324.667,5.501 198.333,5.501     "/>
          <polygon className="st0" points="19,273.501 25.667,297.501 31.667,288.168 44.333,282.168 63.667,284.5 79.167,286.5 92.667,278 
            108.167,278 114.667,266.5 122.167,263.5 118.667,250.5 113.167,231.5 113.167,222.5 112.667,216 100.667,202.5 86.167,191 
            71.167,182.5 59.667,172 43.167,159.5 39.167,150 37.667,139 43.667,144 56.667,154.5 80.167,174.5 83.167,171 73.667,154 
            72.167,140 94.167,137.5 104.167,147.5 123.167,157.5 150.167,185 167.667,176 167.667,169.5 172.167,167.5 177.667,163.5 
            166.667,150 160.667,141.5 147.667,138 115.667,120.5 117.167,110.5 113.667,98 101.667,87 83.167,81 70.667,65.5 67.167,36.5 
            94.167,50 105.167,45.5 92.821,5.501 0,5.501 0,264.301 13,269.501    "/>
          <polygon className="st0" points="262.333,375.501 261.667,364.834 259.667,355.501 257,346.168 251.667,335.501 240.333,325.501 
            235,319.501 228.333,314.834 213,312.834 195,317.501 182.334,319.501 165.667,316.834 150.334,322.168 134.334,322.834 
            128.334,318.168 119.667,313.501 113,320.834 99,356.834 81,359.501 63.667,361.501 55.667,364.834 53,372.834 57,378.834 
            58.162,390.834 264.556,390.834 262.333,385.501    "/>
          <polygon className="st6" points="58.162,390.834 57,378.834 53,372.834 55.667,364.834 63.667,361.501 81,359.501 99,356.834 
            113,320.834 119.667,313.501 128.334,318.168 134.334,322.834 150.334,322.168 165.667,316.834 182.334,319.501 195,317.501 
            213,312.834 228.333,314.834 235,319.501 240.333,325.501 251.667,335.501 257,346.168 259.667,355.501 261.667,364.834 
            262.333,375.501 262.333,385.501 264.556,390.834 265.667,393.501 324.667,393.501 324.667,108.834 323.667,108.834 
            310.334,108.834 302.334,112.168 293.667,114.834 277,108.834 270.333,104.835 266.333,109.501 257,106.168 260.333,86.835 
            247.667,66.835 233.667,64.168 223,54.835 222.333,37.501 217.667,32.168 207,30.835 208.333,23.501 207,13.501 198.333,8.835 
            198.333,5.501 198.333,2.168 92.667,5 92.821,5.501 105.167,45.5 94.167,50 67.167,36.5 70.667,65.5 83.167,81 101.667,87 
            113.667,98 117.167,110.5 115.667,120.5 147.667,138 160.667,141.5 166.667,150 177.667,163.5 172.167,167.5 167.667,169.5 
            167.667,176 150.167,185 123.167,157.5 104.167,147.5 94.167,137.5 72.167,140 73.667,154 83.167,171 80.167,174.5 56.667,154.5 
            43.667,144 37.667,139 39.167,150 43.167,159.5 59.667,172 71.167,182.5 86.167,191 100.667,202.5 112.667,216 113.167,222.5 
            113.167,231.5 118.667,250.5 122.167,263.5 114.667,266.5 108.167,278 92.667,278 79.167,286.5 63.667,284.5 44.333,282.168 
            31.667,288.168 25.667,297.501 19,273.501 13,269.501 0,264.301 0,399.501 59,399.501    "/>
        </g>
      </g>
      <g id="Layer_3">
        <g>
          <path className="st1" d="M165.628,86.399h-1.429v-0.322c0-0.659-0.28-1.205-1.009-1.205c-0.784,0-0.966,0.63-0.966,1.289
            c0,0.771,0.07,1.037,0.812,1.331l1.092,0.434c1.261,0.477,1.499,1.275,1.499,2.731c0,1.681-0.616,2.928-2.465,2.928
            c-1.387,0-2.438-1.022-2.438-2.367v-0.532h1.429v0.448c0,0.518,0.28,1.022,1.009,1.022c0.966,0,1.037-0.574,1.037-1.485
            c0-1.064-0.126-1.232-0.827-1.513l-1.022-0.42c-1.233-0.504-1.555-1.316-1.555-2.563c0-1.513,0.812-2.731,2.451-2.731
            c1.429,0,2.381,1.149,2.381,2.255V86.399z"/>
          <path className="st1" d="M169.309,92.773h-0.028c-0.378,0.519-0.686,0.812-1.373,0.812c-0.658,0-1.541-0.322-1.541-1.891
            c0-1.625,0.462-2.409,2.255-2.409c0.196,0,0.392,0.028,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.714-0.841
            c-0.364,0-0.729,0.252-0.812,0.714h-1.387c0.042-0.63,0.266-1.163,0.644-1.541c0.378-0.378,0.911-0.603,1.555-0.603
            c1.19,0,2.143,0.756,2.143,2.241v4.945h-1.429V92.773z M169.309,90.448c-0.154-0.028-0.266-0.042-0.393-0.042
            c-0.616,0-1.121,0.252-1.121,1.009c0,0.546,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V90.448z"/>
          <path className="st1" d="M171.785,86.399h1.429v0.687h0.028c0.294-0.448,0.687-0.771,1.345-0.771c0.714,0,1.471,0.462,1.471,1.737
            v5.449h-1.429v-4.917c0-0.519-0.252-0.841-0.7-0.841c-0.532,0-0.714,0.351-0.714,0.981v4.776h-1.429V86.399z"/>
          <path className="st1" d="M179.919,83.528h4.258v1.345h-2.83v3.026h2.465v1.345h-2.465v4.258h-1.429V83.528z"/>
          <path className="st1" d="M184.765,86.399h1.429v0.757c0.588-0.519,1.064-0.841,1.891-0.841v1.513c-0.14-0.056-0.28-0.084-0.435-0.084
            c-0.602,0-1.457,0.378-1.457,1.541v4.216h-1.429V86.399z"/>
          <path className="st1" d="M191.279,92.773h-0.028c-0.378,0.519-0.686,0.812-1.373,0.812c-0.658,0-1.541-0.322-1.541-1.891
            c0-1.625,0.462-2.409,2.255-2.409c0.196,0,0.392,0.028,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.714-0.841
            c-0.364,0-0.729,0.252-0.812,0.714h-1.387c0.042-0.63,0.266-1.163,0.644-1.541c0.378-0.378,0.911-0.603,1.555-0.603
            c1.19,0,2.143,0.756,2.143,2.241v4.945h-1.429V92.773z M191.279,90.448c-0.154-0.028-0.266-0.042-0.393-0.042
            c-0.616,0-1.121,0.252-1.121,1.009c0,0.546,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V90.448z"/>
          <path className="st1" d="M193.755,86.399h1.429v0.687h0.028c0.294-0.448,0.687-0.771,1.345-0.771c0.714,0,1.471,0.462,1.471,1.737
            v5.449h-1.429v-4.917c0-0.519-0.252-0.841-0.7-0.841c-0.532,0-0.714,0.351-0.714,0.981v4.776h-1.429V86.399z"/>
          <path className="st1" d="M200.714,91.457c0,0.448,0.266,0.7,0.7,0.7c0.546,0,0.673-0.406,0.701-0.714h1.429
            c0,0.588-0.21,1.135-0.574,1.513c-0.378,0.392-0.896,0.63-1.555,0.63c-0.868,0-1.526-0.406-1.863-1.022
            c-0.196-0.364-0.266-0.869-0.266-1.443v-2.339c0-0.574,0.07-1.079,0.266-1.442c0.336-0.617,0.995-1.023,1.863-1.023
            c1.317,0,2.129,0.953,2.129,2.27h-1.429c0-0.575-0.266-0.841-0.701-0.841c-0.434,0-0.7,0.28-0.7,0.812V91.457z"/>
          <path className="st1" d="M204.381,83.528h1.429v1.429h-1.429V83.528z M204.381,86.399h1.429v7.102h-1.429V86.399z"/>
          <path className="st1" d="M209.576,88.389c-0.014-0.476-0.35-0.729-0.729-0.729c-0.448,0-0.7,0.35-0.7,0.714
            c0,0.266,0.07,0.519,0.603,0.729l0.84,0.336c1.064,0.406,1.401,1.163,1.401,2.003c0,1.177-0.896,2.143-2.129,2.143
            c-1.121,0-2.073-0.742-2.129-2.143h1.345c0.056,0.392,0.238,0.798,0.771,0.798c0.406,0,0.799-0.294,0.799-0.771
            c0-0.392-0.168-0.658-0.715-0.868l-0.686-0.252c-0.896-0.336-1.443-1.008-1.443-1.961c0-1.205,0.953-2.073,2.101-2.073
            c1.163,0,2.003,0.896,2.017,2.073H209.576z"/>
          <path className="st1" d="M213.425,91.457c0,0.448,0.266,0.7,0.701,0.7c0.546,0,0.672-0.406,0.7-0.714h1.429
            c0,0.588-0.21,1.135-0.574,1.513c-0.378,0.392-0.896,0.63-1.555,0.63c-0.869,0-1.527-0.406-1.863-1.022
            c-0.196-0.364-0.266-0.869-0.266-1.443v-2.339c0-0.574,0.07-1.079,0.266-1.442c0.336-0.617,0.995-1.023,1.863-1.023
            c1.316,0,2.129,0.953,2.129,2.27h-1.429c0-0.575-0.266-0.841-0.7-0.841c-0.435,0-0.701,0.28-0.701,0.812V91.457z"/>
          <path className="st1" d="M216.967,88.781c0-0.574,0.07-1.079,0.266-1.442c0.336-0.617,0.995-1.023,1.863-1.023
            c0.869,0,1.527,0.406,1.863,1.023c0.196,0.364,0.266,0.868,0.266,1.442v2.339c0,0.574-0.07,1.079-0.266,1.443
            c-0.336,0.616-0.995,1.022-1.863,1.022c-0.868,0-1.527-0.406-1.863-1.022c-0.196-0.364-0.266-0.869-0.266-1.443V88.781z
             M218.396,91.344c0,0.532,0.266,0.812,0.7,0.812c0.435,0,0.701-0.28,0.701-0.812v-2.788c0-0.532-0.266-0.812-0.701-0.812
            c-0.434,0-0.7,0.28-0.7,0.812V91.344z"/>
          <path className="st1" d="M224.96,83.528h2.087c1.849,0,2.536,1.219,2.536,2.521v0.364c0,1.064-0.35,1.457-0.98,1.849
            c0.672,0.322,0.98,0.924,0.98,1.961v0.561c0,1.737-0.827,2.717-2.675,2.717h-1.947V83.528z M226.389,87.618h0.645
            c0.953,0,1.205-0.49,1.205-1.401c0-0.882-0.322-1.345-1.261-1.345h-0.588V87.618z M226.389,92.073h0.616
            c1.149,0,1.233-0.7,1.233-1.681c0-0.994-0.182-1.513-1.219-1.513h-0.63V92.073z"/>
          <path className="st1" d="M233.544,92.773h-0.028c-0.378,0.519-0.687,0.812-1.373,0.812c-0.659,0-1.541-0.322-1.541-1.891
            c0-1.625,0.462-2.409,2.255-2.409c0.196,0,0.392,0.028,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.715-0.841
            c-0.364,0-0.728,0.252-0.812,0.714h-1.387c0.042-0.63,0.266-1.163,0.644-1.541c0.378-0.378,0.911-0.603,1.555-0.603
            c1.191,0,2.144,0.756,2.144,2.241v4.945h-1.429V92.773z M233.544,90.448c-0.154-0.028-0.267-0.042-0.393-0.042
            c-0.616,0-1.121,0.252-1.121,1.009c0,0.546,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V90.448z"/>
          <path className="st1" d="M236.764,86.399l0.98,4.427h0.028l0.966-4.427h1.471l-2.045,8.334c-0.308,1.275-1.121,1.639-1.975,1.639
            h-0.392v-1.345h0.322c0.574,0,0.756-0.196,1.079-1.849l-1.947-6.78H236.764z"/>
        </g>
        <g>
          <path className="st1" d="M16.005,328.527h2.143c0.785,0,1.359,0.183,1.849,0.701c0.49,0.518,0.645,1.148,0.645,2.34
            c0,0.867-0.07,1.456-0.406,2.002c-0.393,0.645-1.023,1.037-2.073,1.037h-0.729v3.895h-1.429V328.527z M17.434,333.263h0.687
            c1.163,0,1.177-0.687,1.177-1.681c0-0.939,0-1.709-1.121-1.709h-0.743V333.263z"/>
          <path className="st1" d="M24.155,337.773h-0.028c-0.378,0.518-0.687,0.812-1.373,0.812c-0.659,0-1.541-0.322-1.541-1.892
            c0-1.624,0.462-2.409,2.255-2.409c0.196,0,0.392,0.027,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.715-0.841
            c-0.364,0-0.728,0.252-0.812,0.715h-1.387c0.042-0.631,0.266-1.163,0.644-1.541c0.378-0.379,0.911-0.603,1.555-0.603
            c1.191,0,2.144,0.757,2.144,2.241v4.945h-1.429V337.773z M24.155,335.447c-0.154-0.027-0.267-0.041-0.393-0.041
            c-0.616,0-1.121,0.252-1.121,1.008c0,0.547,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V335.447z"/>
          <path className="st1" d="M28.145,336.457c0,0.447,0.266,0.699,0.7,0.699c0.546,0,0.673-0.406,0.701-0.714h1.429
            c0,0.589-0.21,1.135-0.574,1.513c-0.378,0.393-0.896,0.631-1.555,0.631c-0.868,0-1.526-0.406-1.863-1.023
            c-0.196-0.363-0.266-0.868-0.266-1.442v-2.339c0-0.574,0.07-1.079,0.266-1.443c0.336-0.616,0.995-1.022,1.863-1.022
            c1.317,0,2.129,0.952,2.129,2.27h-1.429c0-0.575-0.266-0.841-0.701-0.841c-0.434,0-0.7,0.28-0.7,0.812V336.457z"/>
          <path className="st1" d="M31.812,328.527h1.429v1.43h-1.429V328.527z M31.812,331.399h1.429v7.103h-1.429V331.399z"/>
          <path className="st1" d="M34.598,332.52h-0.701v-1.12h0.701v-0.966c0-1.373,0.91-1.906,1.835-1.906h0.658v1.346h-0.644
            c-0.266,0-0.42,0.182-0.42,0.49v1.036h1.064v1.12h-1.064v5.982h-1.429V332.52z"/>
          <path className="st1" d="M37.523,328.527h1.429v1.43h-1.429V328.527z M37.523,331.399h1.429v7.103h-1.429V331.399z"/>
          <path className="st1" d="M41.64,336.457c0,0.447,0.266,0.699,0.701,0.699c0.546,0,0.672-0.406,0.7-0.714h1.429
            c0,0.589-0.21,1.135-0.574,1.513c-0.378,0.393-0.896,0.631-1.555,0.631c-0.869,0-1.527-0.406-1.863-1.023
            c-0.196-0.363-0.266-0.868-0.266-1.442v-2.339c0-0.574,0.07-1.079,0.266-1.443c0.336-0.616,0.995-1.022,1.863-1.022
            c1.316,0,2.129,0.952,2.129,2.27h-1.429c0-0.575-0.266-0.841-0.7-0.841c-0.435,0-0.701,0.28-0.701,0.812V336.457z"/>
          <path className="st1" d="M47.911,330.881c0-1.625,1.232-2.438,2.395-2.438s2.396,0.812,2.396,2.438v5.268
            c0,1.625-1.233,2.438-2.396,2.438s-2.395-0.812-2.395-2.438V330.881z M49.34,336.148c0,0.686,0.448,1.008,0.966,1.008
            c0.519,0,0.967-0.322,0.967-1.008v-5.268c0-0.686-0.448-1.008-0.967-1.008c-0.518,0-0.966,0.322-0.966,1.008V336.148z"/>
          <path className="st1" d="M55.388,336.457c0,0.447,0.266,0.699,0.7,0.699c0.546,0,0.673-0.406,0.701-0.714h1.429
            c0,0.589-0.21,1.135-0.574,1.513c-0.378,0.393-0.896,0.631-1.555,0.631c-0.868,0-1.526-0.406-1.863-1.023
            c-0.196-0.363-0.266-0.868-0.266-1.442v-2.339c0-0.574,0.07-1.079,0.266-1.443c0.336-0.616,0.995-1.022,1.863-1.022
            c1.317,0,2.129,0.952,2.129,2.27h-1.429c0-0.575-0.266-0.841-0.701-0.841c-0.434,0-0.7,0.28-0.7,0.812V336.457z"/>
          <path className="st1" d="M60.357,335.49v0.967c0,0.447,0.266,0.699,0.7,0.699c0.546,0,0.672-0.406,0.701-0.714h1.429
            c0,0.589-0.21,1.135-0.575,1.513c-0.378,0.393-0.896,0.631-1.555,0.631c-0.868,0-1.527-0.406-1.863-1.023
            c-0.196-0.363-0.266-0.868-0.266-1.442v-2.339c0-0.574,0.07-1.079,0.266-1.443c0.336-0.616,0.995-1.022,1.863-1.022
            c1.317,0,2.129,0.967,2.129,2.214v1.961H60.357z M60.357,334.369h1.401v-0.812c0-0.532-0.266-0.812-0.701-0.812
            c-0.434,0-0.7,0.28-0.7,0.812V334.369z"/>
          <path className="st1" d="M66.938,337.773H66.91c-0.378,0.518-0.687,0.812-1.373,0.812c-0.659,0-1.541-0.322-1.541-1.892
            c0-1.624,0.462-2.409,2.255-2.409c0.196,0,0.392,0.027,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.715-0.841
            c-0.364,0-0.728,0.252-0.812,0.715h-1.387c0.042-0.631,0.266-1.163,0.644-1.541c0.378-0.379,0.911-0.603,1.555-0.603
            c1.191,0,2.144,0.757,2.144,2.241v4.945h-1.429V337.773z M66.938,335.447c-0.154-0.027-0.267-0.041-0.393-0.041
            c-0.616,0-1.121,0.252-1.121,1.008c0,0.547,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V335.447z"/>
          <path className="st1" d="M69.415,331.399h1.429v0.687h0.028c0.294-0.448,0.687-0.771,1.345-0.771c0.714,0,1.471,0.462,1.471,1.737
            v5.449h-1.429v-4.917c0-0.519-0.252-0.841-0.7-0.841c-0.532,0-0.714,0.351-0.714,0.98v4.777h-1.429V331.399z"/>
        </g>
        <g>
          <path className="st1" d="M134.128,351.899h-1.429v-0.321c0-0.659-0.28-1.205-1.009-1.205c-0.784,0-0.966,0.63-0.966,1.289
            c0,0.77,0.07,1.036,0.812,1.33l1.092,0.434c1.261,0.477,1.499,1.275,1.499,2.732c0,1.681-0.616,2.928-2.465,2.928
            c-1.387,0-2.438-1.023-2.438-2.367v-0.533h1.429v0.449c0,0.518,0.28,1.021,1.009,1.021c0.966,0,1.037-0.574,1.037-1.484
            c0-1.064-0.126-1.232-0.827-1.513l-1.022-0.421c-1.233-0.504-1.555-1.316-1.555-2.562c0-1.514,0.812-2.732,2.451-2.732
            c1.429,0,2.381,1.149,2.381,2.256V351.899z"/>
          <path className="st1" d="M137.809,358.273h-0.028c-0.378,0.518-0.686,0.812-1.373,0.812c-0.658,0-1.541-0.322-1.541-1.892
            c0-1.624,0.462-2.409,2.255-2.409c0.196,0,0.392,0.027,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.714-0.841
            c-0.364,0-0.729,0.252-0.812,0.715h-1.387c0.042-0.631,0.266-1.163,0.644-1.541c0.378-0.379,0.911-0.603,1.555-0.603
            c1.19,0,2.143,0.757,2.143,2.241v4.945h-1.429V358.273z M137.809,355.947c-0.154-0.027-0.266-0.041-0.393-0.041
            c-0.616,0-1.121,0.252-1.121,1.008c0,0.547,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V355.947z"/>
          <path className="st1" d="M140.285,351.899h1.429v0.687h0.028c0.294-0.448,0.687-0.771,1.345-0.771c0.714,0,1.471,0.462,1.471,1.737
            v5.449h-1.429v-4.917c0-0.519-0.252-0.841-0.7-0.841c-0.532,0-0.714,0.351-0.714,0.98v4.777h-1.429V351.899z"/>
          <path className="st1" d="M148.419,349.027h4.258v1.346h-2.83v3.025h2.465v1.345h-2.465v4.259h-1.429V349.027z"/>
          <path className="st1" d="M153.265,351.899h1.429v0.757c0.588-0.519,1.064-0.841,1.891-0.841v1.513c-0.14-0.056-0.28-0.084-0.435-0.084
            c-0.602,0-1.457,0.379-1.457,1.541v4.217h-1.429V351.899z"/>
          <path className="st1" d="M159.779,358.273h-0.028c-0.378,0.518-0.686,0.812-1.373,0.812c-0.658,0-1.541-0.322-1.541-1.892
            c0-1.624,0.462-2.409,2.255-2.409c0.196,0,0.392,0.027,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.714-0.841
            c-0.364,0-0.729,0.252-0.812,0.715h-1.387c0.042-0.631,0.266-1.163,0.644-1.541c0.378-0.379,0.911-0.603,1.555-0.603
            c1.19,0,2.143,0.757,2.143,2.241v4.945h-1.429V358.273z M159.779,355.947c-0.154-0.027-0.266-0.041-0.393-0.041
            c-0.616,0-1.121,0.252-1.121,1.008c0,0.547,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V355.947z"/>
          <path className="st1" d="M162.255,351.899h1.429v0.687h0.028c0.294-0.448,0.687-0.771,1.345-0.771c0.714,0,1.471,0.462,1.471,1.737
            v5.449h-1.429v-4.917c0-0.519-0.252-0.841-0.7-0.841c-0.532,0-0.714,0.351-0.714,0.98v4.777h-1.429V351.899z"/>
          <path className="st1" d="M169.214,356.957c0,0.447,0.266,0.699,0.7,0.699c0.546,0,0.673-0.406,0.701-0.714h1.429
            c0,0.589-0.21,1.135-0.574,1.513c-0.378,0.393-0.896,0.631-1.555,0.631c-0.868,0-1.526-0.406-1.863-1.023
            c-0.196-0.363-0.266-0.868-0.266-1.442v-2.339c0-0.574,0.07-1.079,0.266-1.443c0.336-0.616,0.995-1.022,1.863-1.022
            c1.317,0,2.129,0.952,2.129,2.27h-1.429c0-0.575-0.266-0.841-0.701-0.841c-0.434,0-0.7,0.28-0.7,0.812V356.957z"/>
          <path className="st1" d="M172.881,349.027h1.429v1.43h-1.429V349.027z M172.881,351.899h1.429v7.103h-1.429V351.899z"/>
          <path className="st1" d="M178.076,353.889c-0.014-0.477-0.35-0.729-0.729-0.729c-0.448,0-0.7,0.35-0.7,0.715
            c0,0.266,0.07,0.518,0.603,0.729l0.84,0.336c1.064,0.406,1.401,1.162,1.401,2.003c0,1.177-0.896,2.144-2.129,2.144
            c-1.121,0-2.073-0.742-2.129-2.144h1.345c0.056,0.392,0.238,0.798,0.771,0.798c0.406,0,0.799-0.293,0.799-0.77
            c0-0.393-0.168-0.658-0.715-0.869l-0.686-0.252c-0.896-0.336-1.443-1.008-1.443-1.961c0-1.205,0.953-2.073,2.101-2.073
            c1.163,0,2.003,0.896,2.017,2.073H178.076z"/>
          <path className="st1" d="M181.925,356.957c0,0.447,0.266,0.699,0.701,0.699c0.546,0,0.672-0.406,0.7-0.714h1.429
            c0,0.589-0.21,1.135-0.574,1.513c-0.378,0.393-0.896,0.631-1.555,0.631c-0.869,0-1.527-0.406-1.863-1.023
            c-0.196-0.363-0.266-0.868-0.266-1.442v-2.339c0-0.574,0.07-1.079,0.266-1.443c0.336-0.616,0.995-1.022,1.863-1.022
            c1.316,0,2.129,0.952,2.129,2.27h-1.429c0-0.575-0.266-0.841-0.7-0.841c-0.435,0-0.701,0.28-0.701,0.812V356.957z"/>
          <path className="st1" d="M185.467,354.281c0-0.574,0.07-1.079,0.266-1.443c0.336-0.616,0.995-1.022,1.863-1.022
            c0.869,0,1.527,0.406,1.863,1.022c0.196,0.364,0.266,0.869,0.266,1.443v2.339c0,0.574-0.07,1.079-0.266,1.442
            c-0.336,0.617-0.995,1.023-1.863,1.023c-0.868,0-1.527-0.406-1.863-1.023c-0.196-0.363-0.266-0.868-0.266-1.442V354.281z
             M186.896,356.844c0,0.533,0.266,0.812,0.7,0.812c0.435,0,0.701-0.279,0.701-0.812v-2.787c0-0.532-0.266-0.812-0.701-0.812
            c-0.434,0-0.7,0.28-0.7,0.812V356.844z"/>
        </g>
      </g>
      <g id="Layer_4">
        <g>
          <path d="M12.597,33.861h1.429v8.545h2.83v1.429h-4.258V33.861z"/>
          <path d="M20.396,43.106h-0.028c-0.378,0.519-0.687,0.812-1.373,0.812c-0.659,0-1.541-0.322-1.541-1.891
            c0-1.625,0.462-2.409,2.255-2.409c0.196,0,0.392,0.028,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.715-0.841
            c-0.364,0-0.728,0.252-0.812,0.714h-1.387c0.042-0.63,0.266-1.163,0.644-1.541c0.378-0.378,0.911-0.603,1.555-0.603
            c1.191,0,2.144,0.756,2.144,2.241v4.945h-1.429V43.106z M20.396,40.781c-0.154-0.028-0.267-0.042-0.393-0.042
            c-0.616,0-1.121,0.252-1.121,1.009c0,0.546,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V40.781z"/>
          <path d="M22.873,36.733h1.429v0.757c0.588-0.519,1.064-0.841,1.891-0.841v1.513c-0.14-0.056-0.28-0.084-0.434-0.084
            c-0.603,0-1.457,0.378-1.457,1.541v4.216h-1.429V36.733z"/>
          <path d="M26.765,33.861h1.429v5.967h0.028l1.723-3.096h1.429l-1.695,2.886l2.045,4.216h-1.555l-1.289-3.068l-0.687,1.079v1.989
            h-1.429V33.861z"/>
          <path d="M34.802,38.722c-0.014-0.476-0.35-0.729-0.729-0.729c-0.448,0-0.7,0.35-0.7,0.714c0,0.266,0.07,0.519,0.602,0.729
            l0.841,0.336c1.064,0.406,1.4,1.163,1.4,2.003c0,1.177-0.896,2.143-2.129,2.143c-1.121,0-2.073-0.742-2.129-2.143h1.345
            c0.056,0.392,0.238,0.798,0.77,0.798c0.406,0,0.798-0.294,0.798-0.771c0-0.392-0.168-0.658-0.714-0.868l-0.686-0.252
            c-0.896-0.336-1.443-1.008-1.443-1.961c0-1.205,0.953-2.073,2.101-2.073c1.163,0,2.003,0.896,2.017,2.073H34.802z"/>
          <path d="M37.139,36.733h1.429v0.645c0.364-0.406,0.645-0.729,1.359-0.729c0.574,0,0.995,0.21,1.247,0.672
            c0.168,0.308,0.238,0.743,0.238,1.527v2.704c0,1.022-0.042,1.429-0.224,1.723c-0.238,0.378-0.588,0.645-1.275,0.645
            c-0.561,0-1.009-0.266-1.317-0.729h-0.028v3.516h-1.429V36.733z M39.982,39.044c0-0.574-0.21-0.967-0.7-0.967
            c-0.434,0-0.714,0.364-0.714,0.883v2.759c0,0.448,0.308,0.771,0.714,0.771c0.546,0,0.7-0.392,0.7-0.84V39.044z"/>
          <path d="M46.857,43.835h-1.429v-0.687H45.4c-0.294,0.448-0.687,0.771-1.345,0.771c-0.714,0-1.471-0.462-1.471-1.737v-5.449h1.429
            v4.917c0,0.518,0.252,0.84,0.7,0.84c0.533,0,0.714-0.35,0.714-0.98v-4.777h1.429V43.835z"/>
          <path d="M48.031,36.733h1.429v0.757c0.588-0.519,1.064-0.841,1.891-0.841v1.513c-0.14-0.056-0.28-0.084-0.435-0.084
            c-0.602,0-1.457,0.378-1.457,1.541v4.216h-1.429V36.733z"/>
        </g>
        <g>
          <path d="M136.282,156.206h-1.653v-1.345h4.734v1.345h-1.653v8.629h-1.429V156.206z"/>
          <path d="M139.658,154.861h1.429v1.429h-1.429V154.861z M139.658,157.732h1.429v7.102h-1.429V157.732z"/>
          <path d="M142.261,154.861h1.429v3.516h0.028c0.308-0.462,0.756-0.729,1.317-0.729c0.687,0,1.037,0.266,1.275,0.645
            c0.182,0.294,0.224,0.7,0.224,1.723v2.703c0,0.785-0.07,1.219-0.238,1.527c-0.252,0.462-0.672,0.672-1.247,0.672
            c-0.714,0-0.995-0.322-1.359-0.729v0.645h-1.429V154.861z M145.104,159.918c0-0.448-0.154-0.841-0.7-0.841
            c-0.406,0-0.714,0.322-0.714,0.771v2.76c0,0.518,0.28,0.882,0.714,0.882c0.49,0,0.7-0.392,0.7-0.966V159.918z"/>
          <path d="M151.98,164.834h-1.429v-0.687h-0.028c-0.294,0.448-0.687,0.771-1.345,0.771c-0.714,0-1.471-0.462-1.471-1.737v-5.449
            h1.429v4.917c0,0.518,0.252,0.84,0.7,0.84c0.532,0,0.714-0.35,0.714-0.98v-4.777h1.429V164.834z"/>
          <path d="M153.153,157.732h1.429v0.757c0.588-0.519,1.064-0.841,1.891-0.841v1.513c-0.14-0.056-0.28-0.084-0.435-0.084
            c-0.602,0-1.457,0.378-1.457,1.541v4.216h-1.429V157.732z"/>
          <path d="M156.837,160.114c0-0.574,0.07-1.079,0.266-1.442c0.336-0.617,0.995-1.023,1.863-1.023c0.869,0,1.527,0.406,1.863,1.023
            c0.196,0.364,0.266,0.868,0.266,1.442v2.339c0,0.574-0.07,1.079-0.266,1.443c-0.336,0.616-0.995,1.022-1.863,1.022
            c-0.868,0-1.527-0.406-1.863-1.022c-0.196-0.364-0.266-0.869-0.266-1.443V160.114z M158.266,162.677
            c0,0.532,0.266,0.812,0.7,0.812c0.435,0,0.701-0.28,0.701-0.812v-2.788c0-0.532-0.266-0.812-0.701-0.812
            c-0.434,0-0.7,0.28-0.7,0.812V162.677z"/>
          <path d="M162.143,157.732h1.429v0.687h0.028c0.294-0.448,0.687-0.771,1.345-0.771c0.714,0,1.471,0.462,1.471,1.737v5.449h-1.429
            v-4.917c0-0.519-0.252-0.841-0.7-0.841c-0.532,0-0.714,0.351-0.714,0.981v4.776h-1.429V157.732z"/>
        </g>
        <g>
          <path d="M46.801,202.566h-1.429v-0.322c0-0.659-0.28-1.205-1.009-1.205c-0.784,0-0.966,0.63-0.966,1.289
            c0,0.771,0.07,1.037,0.812,1.331l1.092,0.434c1.261,0.477,1.499,1.275,1.499,2.731c0,1.681-0.616,2.928-2.465,2.928
            c-1.387,0-2.438-1.022-2.438-2.367v-0.532h1.429v0.448c0,0.518,0.28,1.022,1.009,1.022c0.966,0,1.037-0.574,1.037-1.485
            c0-1.064-0.126-1.232-0.827-1.513l-1.022-0.42c-1.233-0.504-1.555-1.316-1.555-2.563c0-1.513,0.812-2.731,2.451-2.731
            c1.429,0,2.381,1.149,2.381,2.255V202.566z"/>
          <path d="M50.482,208.94h-0.028c-0.378,0.519-0.686,0.812-1.373,0.812c-0.658,0-1.541-0.322-1.541-1.891
            c0-1.625,0.462-2.409,2.255-2.409c0.196,0,0.392,0.028,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.714-0.841
            c-0.364,0-0.729,0.252-0.812,0.714h-1.387c0.042-0.63,0.266-1.163,0.644-1.541c0.378-0.378,0.911-0.603,1.555-0.603
            c1.19,0,2.143,0.756,2.143,2.241v4.945h-1.429V208.94z M50.482,206.615c-0.154-0.028-0.266-0.042-0.393-0.042
            c-0.616,0-1.121,0.252-1.121,1.009c0,0.546,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V206.615z"/>
          <path d="M57.23,209.668h-1.429v-0.687h-0.028c-0.294,0.448-0.687,0.771-1.345,0.771c-0.714,0-1.471-0.462-1.471-1.737v-5.449
            h1.429v4.917c0,0.518,0.252,0.84,0.7,0.84c0.532,0,0.714-0.35,0.714-0.98v-4.777h1.429V209.668z"/>
          <path d="M60.995,204.556c-0.014-0.476-0.35-0.729-0.729-0.729c-0.448,0-0.7,0.35-0.7,0.714c0,0.266,0.07,0.519,0.603,0.729
            l0.84,0.336c1.064,0.406,1.401,1.163,1.401,2.003c0,1.177-0.896,2.143-2.129,2.143c-1.121,0-2.073-0.742-2.129-2.143h1.345
            c0.056,0.392,0.238,0.798,0.771,0.798c0.406,0,0.799-0.294,0.799-0.771c0-0.392-0.168-0.658-0.715-0.868l-0.686-0.252
            c-0.896-0.336-1.443-1.008-1.443-1.961c0-1.205,0.953-2.073,2.101-2.073c1.163,0,2.003,0.896,2.017,2.073H60.995z"/>
          <path d="M66.035,208.94h-0.028c-0.378,0.519-0.687,0.812-1.373,0.812c-0.659,0-1.541-0.322-1.541-1.891
            c0-1.625,0.462-2.409,2.255-2.409c0.196,0,0.392,0.028,0.687,0.042v-0.742c0-0.477-0.182-0.841-0.715-0.841
            c-0.364,0-0.728,0.252-0.812,0.714h-1.387c0.042-0.63,0.266-1.163,0.644-1.541c0.378-0.378,0.911-0.603,1.555-0.603
            c1.191,0,2.144,0.756,2.144,2.241v4.945h-1.429V208.94z M66.035,206.615c-0.154-0.028-0.267-0.042-0.393-0.042
            c-0.616,0-1.121,0.252-1.121,1.009c0,0.546,0.28,0.91,0.743,0.91c0.476,0,0.771-0.336,0.771-0.91V206.615z"/>
          <path d="M68.428,199.695h1.429v7.971c0,0.532,0.154,0.686,0.7,0.742v1.345c-1.316,0-2.129-0.336-2.129-1.989V199.695z"/>
          <path d="M71.116,199.695h1.429v1.429h-1.429V199.695z M71.116,202.566h1.429v7.102h-1.429V202.566z"/>
          <path d="M73.719,200.41h1.429v2.157h0.882v1.121h-0.882v3.937c0,0.658,0.252,0.7,0.882,0.7v1.345h-0.588
            c-1.289,0-1.723-0.911-1.723-1.667v-4.314h-0.714v-1.121h0.714V200.41z"/>
          <path d="M76.449,204.948c0-0.574,0.07-1.079,0.266-1.442c0.336-0.617,0.995-1.023,1.863-1.023c0.869,0,1.527,0.406,1.863,1.023
            c0.196,0.364,0.266,0.868,0.266,1.442v2.339c0,0.574-0.07,1.079-0.266,1.443c-0.336,0.616-0.995,1.022-1.863,1.022
            c-0.868,0-1.527-0.406-1.863-1.022c-0.196-0.364-0.266-0.869-0.266-1.443V204.948z M77.878,207.511c0,0.532,0.266,0.812,0.7,0.812
            c0.435,0,0.701-0.28,0.701-0.812v-2.788c0-0.532-0.266-0.812-0.701-0.812c-0.434,0-0.7,0.28-0.7,0.812V207.511z"/>
        </g>
        <g>
          <path d="M181.279,328.695h2.143c0.785,0,1.359,0.182,1.849,0.701c0.49,0.518,0.645,1.148,0.645,2.339
            c0,0.868-0.07,1.456-0.406,2.003c-0.393,0.645-1.023,1.037-2.073,1.037h-0.729v3.894h-1.429V328.695z M182.708,333.43h0.687
            c1.163,0,1.177-0.686,1.177-1.681c0-0.938,0-1.709-1.121-1.709h-0.743V333.43z"/>
          <path d="M186.893,328.695h1.429v1.43h-1.429V328.695z M186.893,331.566h1.429v7.103h-1.429V331.566z"/>
          <path d="M190.799,335.657v0.967c0,0.448,0.266,0.7,0.7,0.7c0.546,0,0.672-0.406,0.701-0.715h1.429c0,0.589-0.21,1.135-0.574,1.514
            c-0.378,0.392-0.896,0.63-1.555,0.63c-0.868,0-1.527-0.406-1.863-1.022c-0.196-0.364-0.266-0.869-0.266-1.443v-2.339
            c0-0.574,0.07-1.079,0.266-1.442c0.336-0.617,0.995-1.023,1.863-1.023c1.317,0,2.129,0.967,2.129,2.214v1.961H190.799z
             M190.799,334.537h1.401v-0.812c0-0.533-0.267-0.812-0.701-0.812s-0.7,0.279-0.7,0.812V334.537z"/>
          <path d="M194.677,331.566h1.429v0.758c0.588-0.52,1.064-0.842,1.891-0.842v1.514c-0.14-0.057-0.28-0.084-0.434-0.084
            c-0.603,0-1.457,0.378-1.457,1.541v4.216h-1.429V331.566z"/>
          <path d="M203.554,337.184h-2.844v-1.344l2.059-7.145h1.513l-2.144,7.145h1.415v-2.844h1.429v2.844h0.687v1.344h-0.687v1.485
            h-1.429V337.184z"/>
          <path d="M207.963,330.209l-1.429,1.05v-1.513l1.429-1.051h1.429v9.974h-1.429V330.209z"/>
        </g>
        <g>
          <path d="M207.038,349.029h4.258v1.345h-2.83v3.026h2.465v1.344h-2.465v4.259h-1.429V349.029z"/>
          <path d="M213.187,355.991v0.967c0,0.448,0.266,0.7,0.7,0.7c0.546,0,0.672-0.406,0.701-0.715h1.429c0,0.589-0.21,1.135-0.574,1.514
            c-0.378,0.392-0.896,0.63-1.555,0.63c-0.868,0-1.527-0.406-1.863-1.022c-0.196-0.364-0.266-0.869-0.266-1.443v-2.339
            c0-0.574,0.07-1.079,0.266-1.442c0.336-0.617,0.995-1.023,1.863-1.023c1.317,0,2.129,0.967,2.129,2.214v1.961H213.187z
             M213.187,354.871h1.401v-0.812c0-0.533-0.267-0.812-0.701-0.812s-0.7,0.279-0.7,0.812V354.871z"/>
          <path d="M217.064,351.9h1.429v0.758c0.588-0.52,1.064-0.842,1.891-0.842v1.514c-0.14-0.057-0.28-0.084-0.434-0.084
            c-0.603,0-1.457,0.378-1.457,1.541v4.216h-1.429V351.9z"/>
          <path d="M220.957,351.9h1.429v0.758c0.588-0.52,1.064-0.842,1.891-0.842v1.514c-0.14-0.057-0.28-0.084-0.435-0.084
            c-0.602,0-1.457,0.378-1.457,1.541v4.216h-1.429V351.9z"/>
          <path d="M226.009,351.9l0.98,4.428h0.028l0.966-4.428h1.471l-2.045,8.335c-0.308,1.274-1.121,1.64-1.975,1.64h-0.392v-1.346h0.322
            c0.574,0,0.756-0.195,1.079-1.849l-1.947-6.78H226.009z"/>
          <path d="M232.714,349.029h2.087c1.849,0,2.536,1.219,2.536,2.521v0.364c0,1.064-0.35,1.457-0.98,1.849
            c0.672,0.322,0.98,0.925,0.98,1.961v0.561c0,1.737-0.827,2.718-2.675,2.718h-1.947V349.029z M234.143,353.119h0.645
            c0.952,0,1.205-0.49,1.205-1.4c0-0.883-0.322-1.345-1.261-1.345h-0.588V353.119z M234.143,357.574h0.616
            c1.149,0,1.233-0.7,1.233-1.682c0-0.994-0.182-1.512-1.219-1.512h-0.63V357.574z"/>
          <path d="M238.51,349.029h1.429V357c0,0.532,0.154,0.686,0.7,0.742v1.345c-1.316,0-2.129-0.336-2.129-1.989V349.029z"/>
          <path d="M244.041,358.358c-0.364,0.406-0.644,0.729-1.358,0.729c-0.574,0-0.995-0.21-1.247-0.673
            c-0.168-0.308-0.238-0.742-0.238-1.526v-2.703c0-1.022,0.042-1.429,0.224-1.724c0.238-0.378,0.588-0.645,1.274-0.645
            c0.561,0,1.009,0.267,1.317,0.729h0.028v-3.516h1.429v9.974h-1.429V358.358z M242.626,356.691c0,0.574,0.21,0.967,0.7,0.967
            c0.435,0,0.714-0.364,0.714-0.883v-2.76c0-0.447-0.308-0.77-0.714-0.77c-0.546,0-0.7,0.393-0.7,0.84V356.691z"/>
          <path d="M248.072,359.83c0.014,0.336,0.266,0.699,0.756,0.699c0.462,0,0.658-0.322,0.658-0.77v-1.401h-0.028
            c-0.308,0.462-0.756,0.729-1.331,0.729s-0.995-0.21-1.247-0.673c-0.168-0.308-0.238-0.742-0.238-1.526v-2.703
            c0-1.022,0.042-1.429,0.224-1.724c0.238-0.378,0.588-0.645,1.274-0.645c0.701,0,0.981,0.322,1.345,0.729V351.9h1.429v7.971
            c0,0.967-0.63,2.088-2.144,2.088c-0.868,0-1.947-0.505-2.129-2.129H248.072z M248.072,356.818c0,0.447,0.154,0.84,0.7,0.84
            c0.406,0,0.714-0.322,0.714-0.771v-2.759c0-0.52-0.28-0.883-0.714-0.883c-0.49,0-0.7,0.393-0.7,0.967V356.818z"/>
        </g>
      </g>
      <g id="Layer_5">
        <g>
          <path className="st1" d="M130.141,32.085c0-1.331,0.995-2.144,2.129-2.144s2.129,0.812,2.129,2.144v5.854
            c0,1.331-0.994,2.144-2.129,2.144s-2.129-0.812-2.129-2.144V32.085z M131.57,37.939c0,0.406,0.294,0.715,0.7,0.715
            s0.7-0.309,0.7-0.715v-5.854c0-0.406-0.294-0.715-0.7-0.715s-0.7,0.309-0.7,0.715V37.939z"/>
        </g>
        <g>
          <path className="st1" d="M204.141,38.654l2.578-4.86c0.252-0.49,0.252-0.771,0.252-1.317c0-0.504,0-1.106-0.7-1.106
            c-0.42,0-0.7,0.252-0.7,0.715v0.812h-1.429v-0.785c0-1.19,0.953-2.171,2.144-2.171c1.484,0,2.115,1.177,2.115,2.508
            c0,0.966-0.028,1.219-0.476,2.073l-2.101,4.048h2.577v1.429h-4.258V38.654z"/>
          <path className="st1" d="M209.461,38.57h1.429v1.429h-1.429V38.57z"/>
          <path className="st1" d="M216.211,31.37h-2.829v2.689c0.266-0.252,0.686-0.462,1.19-0.462c0.966,0,1.639,0.616,1.639,1.765v2.577
            c0,1.331-0.994,2.144-2.129,2.144s-2.129-0.812-2.129-2.144v-0.42h1.429v0.364c0,0.49,0.308,0.771,0.728,0.771
            c0.42,0,0.672-0.28,0.672-0.742v-2.34c0-0.392-0.28-0.714-0.672-0.714c-0.49,0-0.644,0.378-0.728,0.546h-1.261v-5.379h4.09V31.37z
            "/>
        </g>
        <g>
          <path className="st1" d="M283.399,31.37h-2.829v2.689c0.266-0.252,0.686-0.462,1.19-0.462c0.966,0,1.639,0.616,1.639,1.765v2.577
            c0,1.331-0.994,2.144-2.129,2.144s-2.129-0.812-2.129-2.144v-0.42h1.429v0.364c0,0.49,0.308,0.771,0.728,0.771
            c0.42,0,0.672-0.28,0.672-0.742v-2.34c0-0.392-0.28-0.714-0.672-0.714c-0.49,0-0.644,0.378-0.728,0.546h-1.261v-5.379h4.09V31.37z
            "/>
          <path className="st1" d="M287.065,32.897h1.429v0.687h0.028c0.294-0.448,0.687-0.771,1.345-0.771c0.617,0,1.023,0.364,1.275,0.714
            c0.35-0.392,0.729-0.714,1.485-0.714c0.714,0,1.555,0.462,1.555,1.736v5.449h-1.429v-4.917c0-0.518-0.252-0.84-0.7-0.84
            c-0.532,0-0.714,0.35-0.714,0.98v4.776h-1.429v-4.917c0-0.518-0.252-0.84-0.7-0.84c-0.532,0-0.714,0.35-0.714,0.98v4.776h-1.429
            V32.897z"/>
          <path className="st1" d="M295.353,30.025h1.429v1.429h-1.429V30.025z M295.353,32.897h1.429v7.102h-1.429V32.897z"/>
          <path className="st1" d="M297.873,30.025h1.429v7.971c0,0.532,0.154,0.687,0.7,0.742v1.345c-1.316,0-2.129-0.336-2.129-1.989V30.025z"/>
          <path className="st1" d="M301.864,36.987v0.967c0,0.448,0.266,0.7,0.7,0.7c0.546,0,0.672-0.406,0.701-0.715h1.429
            c0,0.589-0.21,1.135-0.574,1.514c-0.378,0.392-0.896,0.63-1.555,0.63c-0.868,0-1.527-0.406-1.863-1.022
            c-0.196-0.364-0.266-0.868-0.266-1.442v-2.34c0-0.574,0.07-1.078,0.266-1.442c0.336-0.616,0.995-1.022,1.863-1.022
            c1.317,0,2.129,0.966,2.129,2.213v1.961H301.864z M301.864,35.867h1.401v-0.812c0-0.532-0.267-0.812-0.701-0.812
            s-0.7,0.28-0.7,0.812V35.867z"/>
          <path className="st1" d="M308.332,34.887c-0.014-0.477-0.35-0.729-0.729-0.729c-0.448,0-0.7,0.35-0.7,0.714
            c0,0.267,0.07,0.519,0.603,0.729l0.84,0.336c1.064,0.406,1.401,1.163,1.401,2.003c0,1.177-0.896,2.144-2.129,2.144
            c-1.121,0-2.073-0.742-2.129-2.144h1.345c0.056,0.393,0.238,0.799,0.771,0.799c0.406,0,0.799-0.294,0.799-0.771
            c0-0.392-0.168-0.658-0.715-0.868l-0.686-0.252c-0.896-0.337-1.443-1.009-1.443-1.961c0-1.205,0.953-2.073,2.101-2.073
            c1.163,0,2.003,0.896,2.017,2.073H308.332z"/>
        </g>
        <path className="st3" d="M280.166,47.999 M205.165,47.999h75.001v-4 M131.165,43.999v4h74v-4"/>
      </g>
      <g id="Layer_2">
        <polyline data-ferry-route="larkspur sf-ferry-bldg" points="79.167,48.333 256.833,226 256.833,324.333   "/>
        <polyline data-ferry-route="sausalito sf-ferry-bldg" points="251.167,321.5 251.167,280 175.167,204 111.667,204   "/>
        <polyline data-ferry-route="sausalito sf-pier-41" points="111.167,209.5 156.667,209.5 205.917,258.75 205.917,301.5  "/>
        <polyline data-ferry-route="sausalito tiburon" points="111.667,198.5 129.167,198.5 135.417,192.25  "/>
        <polyline data-ferry-route="tiburon sf-ferry-bldg" points="155.167,192 245.667,282.5 245.667,323   "/>
        <polyline data-ferry-route="tiburon sf-pier-41" points="151.167,196 211.417,256.25 211.417,302  "/>
        <circle data-ferry-stop="larkspur" cx="69.167" cy="39" r="12.5"/>
        <circle data-ferry-stop="tiburon" cx="144.667" cy="183.5" r="12.5" onClick={this.selectStop} onTouchEnd={this.selectStop}/>
        <circle data-ferry-stop="sausalito" cx="99.167" cy="204" r="12.5"/>
        <circle data-ferry-stop="sf-pier-41" cx="209.167" cy="313" r="12.5" onClick={this.selectStop} onTouchEnd={this.selectStop}/>
        <circle data-ferry-stop="sf-ferry-bldg" cx="251.667" cy="334" r="12.5" onClick={this.selectStop} onTouchEnd={this.selectStop}/>
      </g>
      </svg>
    </div>;
  },

  selectStop: function(event) {
    var queryForLocation = immutableUpdate(this.getQuery(), {$merge: {
      'location-name': event.target.dataset.ferryStop
    }});
    //this.transitionTo('map', this.getParams(), queryForLocation);
    this.transitionTo('listing', this.getParams(), queryForLocation);
  },

  nearestFerryStop: function() {
    return this.props.foundPosition &&
      this.props.locationsByDistance &&
      this.props.locationsByDistance[0];
  }

});

module.exports = Map;
