export default function throttle(func, ms, leading) {
    let isThrottled = false;
    let lastThis;
    let lastArgs;
  
    function throttled() {
      if (isThrottled) {
        if (leading) {
          lastThis = this;
          lastArgs = arguments;
        }
        return;
      }
  
      func.apply(this, arguments);
      isThrottled = true;
  
      setTimeout(function () {
        isThrottled = false;
        if (lastArgs) {
          throttled.apply(lastThis, lastArgs);
          lastThis = null;
          lastArgs = null;
        }
      }, ms);
    }
  
    return throttled;
  }