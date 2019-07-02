module.exports = (a) => {
  for (let c = -1, b = 0, d = !1, f = () => {
    c++;
    a.funcs[c] ? (b++, a.funcs[c]((a) => {
      b--;
      setTimeout(f, 8);
    })) : b || d || (a.done(), d = !0, setTimeout(() => {
      a = b = d = null;
    }, 8));
  }, e = 0; e < a.size; e++) {
    f(e);
  }
};
