'use strict';

var React = require('react');

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Galaxy = function Galaxy(props) {
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    stars = _useState2[0],
    setStars = _useState2[1];
  var _useState3 = React.useState(props.attract || 0.5),
    _useState4 = _slicedToArray(_useState3, 1),
    ATTRACT_SPEED = _useState4[0];
  var _useState5 = React.useState(props.repulse || 0.2),
    _useState6 = _slicedToArray(_useState5, 1),
    REPULSE_SPEED = _useState6[0];
  var _useState7 = React.useState(props.quantity || 400),
    _useState8 = _slicedToArray(_useState7, 1),
    STAR_NUMBER = _useState8[0];
  var _useState9 = React.useState(props.color || "white"),
    _useState10 = _slicedToArray(_useState9, 1),
    STAR_COLOR = _useState10[0];
  var mousePosition = useMousePosition();
  var w = window.innerWidth;
  var h = window.innerHeight;
  var _useState11 = React.useState(Date.now()),
    _useState12 = _slicedToArray(_useState11, 2),
    time = _useState12[0],
    setTime = _useState12[1];
  React.useEffect(function () {
    setInterval(function () {
      return setTime(Date.now());
    }, 10);
  }, []);
  window.addEventListener('load', function () {
    var createStars = [];
    for (var i = 0; i < STAR_NUMBER; i++) {
      var size = Math.ceil(Math.random() * 3) + 2;
      var x = Math.ceil(Math.random() * w);
      var y = Math.ceil(Math.random() * h);
      createStars.push({
        x: x,
        y: y,
        defaultX: x,
        defaultY: y,
        color: STAR_COLOR,
        size: "".concat(size, "px"),
        attracted: false
      });
    }
    setStars(createStars);
  });
  React.useEffect(function () {
    var moveStar = function moveStar(star, mouse) {
      if (!(Math.abs(mousePosition.x - star.x) < 5 && Math.abs(mousePosition.y - star.y) < 5)) {
        if (star.x > mouse.x) {
          star.x -= ATTRACT_SPEED;
        } else {
          star.x += ATTRACT_SPEED;
        }
        if (star.y > mouse.y) {
          star.y -= ATTRACT_SPEED;
        } else {
          star.y += ATTRACT_SPEED;
        }
      }
    };
    var repulseStars = function repulseStars(star) {
      if (!(star.x === star.defaultX && star.y === star.defaultY)) {
        if (star.x < star.defaultX) {
          star.x += REPULSE_SPEED;
        } else {
          star.x -= REPULSE_SPEED;
        }
        if (star.y < star.defaultY) {
          star.y += REPULSE_SPEED;
        } else {
          star.y -= REPULSE_SPEED;
        }
      } else {
        star.attracted = false;
      }
    };
    if (stars.length === STAR_NUMBER) {
      for (var i = 0; i < STAR_NUMBER; i++) {
        if (Math.abs(mousePosition.x - stars[i].x) < 100 && Math.abs(mousePosition.y - stars[i].y) < 100) {
          moveStar(stars[i], mousePosition);
          stars[i].attracted = true;
        } else {
          if (stars[i].attracted) {
            repulseStars(stars[i]);
          }
        }
      }
    }
  }, [time, ATTRACT_SPEED, REPULSE_SPEED, mousePosition, STAR_NUMBER, stars]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      zIndex: '0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      position: "relative"
    }
  }, stars.length === STAR_NUMBER && stars.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: '50%',
        position: 'absolute',
        top: '0',
        left: '0',
        marginLeft: item.x + 'px',
        marginTop: item.y + "px",
        width: item.size,
        height: item.size,
        backgroundColor: item.color
      }
    });
  })));
};
var useMousePosition = function useMousePosition() {
  var _useState13 = React.useState({
      x: null,
      y: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    mousePosition = _useState14[0],
    setMousePosition = _useState14[1];
  React.useEffect(function () {
    window.addEventListener('mousemove', function (ev) {
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY
      });
    });
  }, []);
  return mousePosition;
};

exports.Galaxy = Galaxy;
//# sourceMappingURL=index.js.map
