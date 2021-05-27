(self["webpackChunkrichardlovelace_devportfolio"] = self["webpackChunkrichardlovelace_devportfolio"] || []).push([["nav"],{

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ (() => {

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item"); // Set Initial State Of Menu

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show")); // Set Menu State

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show")); // Set Menu State

    showMenu = false;
  }
}

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active"); // If there's no active class

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    } // Add the active class to the current/clicked button


    this.className += " active";
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/nav.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWNoYXJkbG92ZWxhY2UtZGV2cG9ydGZvbGlvLy4vc3JjL25hdi5qcyJdLCJuYW1lcyI6WyJtZW51QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsIm1lbnVOYXYiLCJtZW51QnJhbmRpbmciLCJuYXZJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzaG93TWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVNZW51IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJpIiwibGVuZ3RoIiwiY3VycmVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLE1BQU1FLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsTUFBTUcsWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsTUFBTUksUUFBUSxHQUFHTCxRQUFRLENBQUNNLGdCQUFULENBQTBCLFdBQTFCLENBQWpCLEMsQ0FFQTs7QUFDQSxJQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUVBUixPQUFPLENBQUNTLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDQyxVQUFsQzs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQ3BCLE1BQUksQ0FBQ0YsUUFBTCxFQUFlO0FBQ2JSLFdBQU8sQ0FBQ1csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsT0FBdEI7QUFDQVQsUUFBSSxDQUFDUSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQVIsV0FBTyxDQUFDTyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixNQUF0QjtBQUNBUCxnQkFBWSxDQUFDTSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixNQUEzQjtBQUNBTixZQUFRLENBQUNPLE9BQVQsQ0FBa0JDLElBQUQsSUFBVUEsSUFBSSxDQUFDSCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkIsQ0FBM0IsRUFMYSxDQU9iOztBQUNBSixZQUFRLEdBQUcsSUFBWDtBQUNELEdBVEQsTUFTTztBQUNMUixXQUFPLENBQUNXLFNBQVIsQ0FBa0JJLE1BQWxCLENBQXlCLE9BQXpCO0FBQ0FaLFFBQUksQ0FBQ1EsU0FBTCxDQUFlSSxNQUFmLENBQXNCLE1BQXRCO0FBQ0FYLFdBQU8sQ0FBQ08sU0FBUixDQUFrQkksTUFBbEIsQ0FBeUIsTUFBekI7QUFDQVYsZ0JBQVksQ0FBQ00sU0FBYixDQUF1QkksTUFBdkIsQ0FBOEIsTUFBOUI7QUFDQVQsWUFBUSxDQUFDTyxPQUFULENBQWtCQyxJQUFELElBQVVBLElBQUksQ0FBQ0gsU0FBTCxDQUFlSSxNQUFmLENBQXNCLE1BQXRCLENBQTNCLEVBTEssQ0FPTDs7QUFDQVAsWUFBUSxHQUFHLEtBQVg7QUFDRDtBQUNGOztBQUVELEtBQUssSUFBSVEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2hCLE9BQU8sQ0FBQ2lCLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDaEIsU0FBTyxDQUFDZ0IsQ0FBRCxDQUFQLENBQVdQLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQVk7QUFDL0MsUUFBSVMsT0FBTyxHQUFHakIsUUFBUSxDQUFDa0Isc0JBQVQsQ0FBZ0MsUUFBaEMsQ0FBZCxDQUQrQyxDQUcvQzs7QUFDQSxRQUFJRCxPQUFPLENBQUNELE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJDLGFBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsU0FBWCxHQUF1QkYsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxTQUFYLENBQXFCQyxPQUFyQixDQUE2QixTQUE3QixFQUF3QyxFQUF4QyxDQUF2QjtBQUNELEtBTjhDLENBUS9DOzs7QUFDQSxTQUFLRCxTQUFMLElBQWtCLFNBQWxCO0FBQ0QsR0FWRDtBQVdELEMiLCJmaWxlIjoibmF2LmRiYTQxOTMwMjkwZTY4MjcxMGEzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5jb25zdCBtZW51TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW5hdlwiKTtcclxuY29uc3QgbWVudUJyYW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJyYW5kaW5nXCIpO1xyXG5jb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWl0ZW1cIik7XHJcblxyXG4vLyBTZXQgSW5pdGlhbCBTdGF0ZSBPZiBNZW51XHJcbmxldCBzaG93TWVudSA9IGZhbHNlO1xyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTWVudSk7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gIGlmICghc2hvd01lbnUpIHtcclxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgIG1lbnVOYXYuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICBtZW51QnJhbmRpbmcuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpKTtcclxuXHJcbiAgICAvLyBTZXQgTWVudSBTdGF0ZVxyXG4gICAgc2hvd01lbnUgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZVwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICBtZW51TmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgbWVudUJyYW5kaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKSk7XHJcblxyXG4gICAgLy8gU2V0IE1lbnUgU3RhdGVcclxuICAgIHNob3dNZW51ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVCdG4ubGVuZ3RoOyBpKyspIHtcclxuICBtZW51QnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgLy8gSWYgdGhlcmUncyBubyBhY3RpdmUgY2xhc3NcclxuICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxyXG4gICAgdGhpcy5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==