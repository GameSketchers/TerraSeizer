
function a() {
  var b;
  var c;
  function d(e) {
    c = "";
    try {
      window.removeEventListener("error", d);
      c = e.lineno + " " + e.colno + "|" + f(e);
      if (performance.memory) {
        var g = [];
        g.push(Math.floor(performance.memory.jsHeapSizeLimit / 100000));
        g.push(Math.floor(performance.memory.totalJSHeapSize / 100000));
        g.push(Math.floor(performance.memory.usedJSHeapSize / 100000));
        c = c + "|" + g.join(" ");
      }
      if (h) {
        c = c + "|R" + h.i + "," + h.j + "," + h.k.toFixed(2);
      }
      c = c + "|" + e.message;
      if (l && l.m === 1) {
        c = l.n + "|" + o.p.join(",") + "|" + c;
        if (e.lineno < 43) {
          q();
          return;
        }
        var r = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!";
        r += "<br>Error Message: " + c;
        o.s();
        t.u(4, 5, new v("🤖 Beep Boop! An error occurred.", r, true, [new w("Close", function () {
          t.x();
          t.y.z();
        }), new w("Reload", function () {
          a0.a1.a2();
        })]));
      }
    } catch (e) {
      c = "SE|" + c + "|" + e;
      console.log(c);
      alert(c);
    }
    q();
  }
  function q() {
    b = new WebSocket("wss://territorial.io/s52/");
    b.onopen = a3;
    b.onclose = function () {
      a4();
    };
  }
  function f(e) {
    if (!e.error) {
      return "NoStack";
    }
    var stack = e.error.stack;
    if (!stack || !stack.length) {
      return "NoStack";
    }
    var a5 = new RegExp(":([0-9]+):([0-9]+)", "g");
    var result = [];
    var match;
    while ((match = a5.exec(stack)) !== null) {
      result.push(parseInt(match[1], 10));
      result.push(parseInt(match[2], 10));
    }
    if (!result.length) {
      return "NoStack";
    }
    return result.join(" ");
  }
  function a3() {
    if (!b || b.readyState !== b.OPEN) {
      return;
    }
    var i = new a6();
    i.a7(1608);
    i.a8(1, 0);
    i.a8(6, 7);
    i.a8(2, a0 ? a0.id : 3);
    i.a8(1, l.a9 ? 1 : 0);
    i.a8(1, l.aA ? 1 : 0);
    i.a8(1, l ? l.m : 0);
    for (var aB = 0; aB < c.length && aB < 228; aB++) {
      i.a8(7, c.charCodeAt(aB) % 128);
    }
    b.send(i.aC);
    a4();
  }
  function a4() {
    if (!b) {
      return;
    }
    b.onclose = null;
    b.onopen = null;
    b = null;
  }
  window.addEventListener("error", d);
}
a();
var l;
var aD;
var aE;
var aF;
var aG;
var aH;
var aI;
var aJ;
var aK;
var aL;
var aM;
var aN;
var aO;
var aP;
var aQ;
var aR;
var aS;
var aT;
var aU;
var aV;
var aW;
var aX;
var aY;
var aZ;
var aa;
var ab;
var ac;
var ad;
var ae;
var af;
var ag;
var ah;
var ai;
var aj;
var ak;
var al;
var am;
var an;
var ao;
var ap;
var aq;
var ar;
var at;
var au;
var av;
var aw;
var ax;
var h;
var ay;
var az;
var b0;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var bA;
var bB;
var bC;
var bD;
var bE;
var bF;
var bG;
var bH;
var bI;
var bJ;
var bK;
var bL;
var bM;
var bN;
var bO;
var bP;
var bQ;
var bR;
var bS;
var bT;
var t;
var bU;
var bV;
var bW;
var bX;
var bY;
var bZ;
var ba;
var bb;
var bc;
var bd;
var be;
var bf;
var bg;
var bh;
var a0;
var bi;
var bj;
var bk;
var o;
var bl;
var bm;
var bn;
var bo;
var bp;
var bq;
var br;
var bs;
function bt(bu) {
  if (l && !bu) {
    return;
  }
  function bv() {
    bw();
    bL = new bx();
    bK = new by();
    bA = new bz();
    bB = new c0();
    aD = new c1();
    b7 = new c2();
    bF = new c3();
    bG = new c4();
    aE = new c5();
    aF = new c6();
    aG = new c7();
    aH = new c8();
    aI = new c9();
    aJ = new cA();
    aK = new cB();
    aL = new cC();
    aM = new cD();
    aN = new cE();
    aO = new cF();
    aP = new cG();
    aQ = new cH();
    aR = new cI();
    aS = new cJ();
    aT = new cK();
    aU = new cL();
    aV = new cM();
    aW = new cN();
    aX = new cO();
    aY = new cP();
    aZ = new cQ();
    aa = new cR();
    ab = new cS();
    ac = new cT();
    ak = new cU();
    al = new cV();
    an = new cW();
    am = new cX();
    ad = new cY();
    ae = new cZ();
    ah = new ca();
    af = new cb();
    ag = new cc();
    ai = new cd();
    az = new ce();
    aj = new cf();
    ap = new cg();
    aq = new ch();
    ar = new ci();
    b0 = new cj();
    ay = new ck();
    ao = new cl();
    at = new cm();
    au = new cn();
    av = new co();
    h = new cp();
    aw = new cq();
    ax = new cr();
    b1 = new cs();
    b2 = new ct();
    b3 = new cu();
    b4 = new cv();
    b5 = new cw();
    b6 = new cx();
    b8 = new cy();
    b9 = new cz();
    bC = new d0();
    bD = new a6();
    bE = new d1();
    bH = new d2();
    bI = new d3();
    bJ = new d4();
    bM = new d5();
    bN = new d6();
    bO = new d7();
    bP = new d8();
    bQ = new d9();
    bR = new dA();
    bS = new dB();
    bT = new dC();
    t = new dD();
    bU = new dE();
    a0 = new dF();
    l = new dG();
    bi = new dH();
    bj = new dI();
    bg = new dJ();
    bh = new dK();
    ba = new dL();
    bb = new dM();
    bV = new dN();
    bW = new dO();
    bd = new dP();
    be = new dQ();
    bf = new dR();
    bk = new dS();
    bc = new dT();
    o = new dU();
    bl = new dV();
    bm = new dW();
    bn = new dX();
    bp = new dY();
    bq = new dZ();
    br = new da();
    bs = new db();
  }
  function dc() {
    l.dd();
    a0.dd();
    h.de();
    bj.dd();
    b7.dd();
    b7.df();
    bX = new dg();
    bX.dd();
    bA.dd();
    bV.dd();
    b0.dd();
    bF.dd();
    bG.dd();
    bS.dd();
    t.dd();
    bY = new dh();
    h.dd();
    a0.a1.di();
    bf.dd();
    bc.dd();
    bW.dd();
    bZ = new dj();
    ay.dd();
    ae.dk();
    bU.dd();
    ap.dd();
    aa.dd();
    aT.dd();
    ai.dd();
    bJ.dd();
    ab.dd();
    bf.dl = true;
    setTimeout(function () {
      bS.a7(2, 14071);
    }, 0);
    t.u(5, 5);
    if (!bI.dm()) {
      a0.a1.dn();
    }
    h.dp();
  }
  bv();
  dc();
  l.m = 1;
}
function dG() {
  this.dq = 1112;
  this.n = 2119;
  this.rVersion = 15;
  this.dr = 0;
  this.dd = function () {
    this.ds = 2;
    var dt = bL.du(this.n, 10) % 100;
    this.dv = "28 Aug 2025 [" + bL.du(this.n, 1000) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]";
    this.a9 = window.location.hostname.toLowerCase().indexOf("territorial.io") >= 0;
    this.aA = dw();
    this.dx = new Date().getTime() % 1048576;
  };
  this.m = 0;
  function dw() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
}
function dy() {
  var dz = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)];
  var e0 = [100, 60, 30, 15, 6, 1];
  var e1 = [[0, 0, 0, 0, 0], [0, 1, 1, 1, 1], [1, 2, 1, 1, 1], [1, 3, 2, 1, 2], [1, 4, 2, 2, 3], [1, 4, 3, 3, 4], [1, 5, 3, 3, 5]];
  var e2 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "];
  var e3 = ["👢", "🔇", "✂️", "Elo Deduction", "Gold Seizure", "🚩 Report"];
  var e4 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
  this.e5 = [["", "", ""], ["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"], ["1 Minute", "1 Hour", "1 Day"], ["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"], ["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"], ["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]];
  this.e6 = function (id, e7, e8) {
    var aB = this.e9(e7);
    return +(e1[aB][id] > e8);
  };
  this.e9 = function (e7) {
    for (var aB = 0; aB < e0.length; aB++) {
      if (e7 >= e0[aB]) {
        return aB;
      }
    }
    return e0.length;
  };
  this.eA = function (e7) {
    return dz[this.e9(e7)];
  };
  this.eB = function (id, eC) {
    return e2[id].replace(new RegExp("x", "g"), eC);
  };
  this.eD = function (id, eC) {
    return e4[id].replace(new RegExp("x", "g"), eC);
  };
  this.eE = function (id, eF) {
    return e3[id] + (this.e5[id][eF].length ? " (" + this.e5[id][eF] + ")" : "");
  };
}
function dE() {
  this.eG = new eH();
  this.dd = function () {
    a0.a1.eI();
  };
  this.eJ = function () {
    return bj.eK.data[160].value;
  };
}
function eH() {
  var eL = 20000;
  this.show = function () {
    if (bf.eM < eL) {
      return false;
    }
    var dt = 1350000;
    eL = bf.eM + dt;
    if (l.ds !== 2) {
      return;
    }
    a0.a1.eN(Math.floor(dt));
  };
}
function cX() {
  this.eO = new eP();
}
function eP() {
  this.eQ = function (eR) {
    if (!bS.eS(bS.eT)) {
      return 0;
    }
    if (!aD.data.passableMountains) {
      return 0;
    }
    var eU = ac.eV(eR);
    if (!this.eW(aD.eX, eU) && !this.eY(aD.eX, eU)) {
      return 0;
    }
    var eZ = ea(bM.eb(eR));
    if (eZ === 0) {
      return 0;
    }
    var ec = bM.ed(eZ);
    if (ac.ee(ec)) {
      return eZ;
    }
    var player = ac.ef(ec);
    if (player === aD.eX) {
      return 0;
    }
    if (bs.eg(player, aD.eX)) {
      return eZ;
    }
    return 0;
  };
  this.eh = function (player, eZ) {
    var eR = bM.ed(eZ);
    if (!ac.ei(eR)) {
      return false;
    }
    if (ac.ee(eR)) {
      bO.ej[0] = aD.ek;
    } else if (ac.ef(eR) !== bO.ej[0]) {
      return false;
    }
    var el = em(eR);
    var en = el.length;
    for (var aB = 0; aB < en; aB++) {
      if (!this.eW(player, el[aB]) && !this.eY(player, el[aB])) {
        continue;
      }
      bO.eo[0] = bO.eo[aB];
      return true;
    }
    return false;
  };
  function em(eR) {
    var ep = ac.ep;
    var el = [];
    loop: for (var eq = 3; eq >= 0; eq--) {
      var er = eR + ep[eq];
      if (ac.es(er)) {
        var id = ac.eV(er);
        for (var aB = 0; aB < el.length; aB++) {
          if (id === el[aB]) {
            continue loop;
          }
        }
        bO.eo[el.length] = er;
        el.push(id);
      }
    }
    return el;
  }
  function ea(et) {
    var eu = bM.ev(et);
    var ew = bM.ex(et);
    var max = Math.max(bS.ey, bS.ez) - 2;
    var f0 = max * max;
    var f1 = false;
    var f2 = 0;
    for (var f3 = 0; f3 < max; f3++) {
      var eZ = dm(eu, ew, f3);
      if (!eZ) {
        continue;
      }
      var f4 = bM.f5(eu, ew, eZ);
      if (f4 < f0) {
        f2 = eZ;
        f0 = f4;
        if (!f1) {
          f1 = true;
          max = Math.floor(Math.sqrt(f4)) + 1;
        }
      }
    }
    return f2;
  }
  function dm(eu, ew, f3) {
    for (var aB = 0; aB <= f3; aB++) {
      for (var f6 = -1; f6 < 2; f6 += 2) {
        for (var f7 = -1; f7 < 2; f7 += 2) {
          for (var f8 = 0; f8 < 2; f8++) {
            var eR = f9(eu + f8 * f6 * aB + (1 - f8) * f7 * f3, ew + f8 * f7 * f3 + (1 - f8) * f6 * aB);
            if (eR) {
              return eR;
            }
          }
        }
      }
    }
    return 0;
  }
  function f9(eu, ew) {
    if (!bM.fA(eu, ew)) {
      return 0;
    }
    var eZ = bM.fB(eu, ew);
    var eR = bM.ed(eZ);
    if (ac.ei(eR) && ac.fC(eR)) {
      return eZ;
    }
    return 0;
  }
  this.eW = function (player, eU) {
    var fD = ag.fD[player];
    var en = fD.length;
    var fE = Math.max(bL.du(en, 12), 1);
    var ep = ac.ep;
    for (var aB = 0; aB < en; aB += fE) {
      var ec = fD[aB];
      for (var eq = 3; eq >= 0; eq--) {
        var er = ec + ep[eq];
        if (ac.es(er) && eU === ac.eV(er)) {
          return true;
        }
      }
    }
    return false;
  };
  this.eY = function (player, eU) {
    var fD = ag.fD[player];
    var en = fD.length;
    var ep = ac.ep;
    for (var aB = 0; aB < en; aB++) {
      var ec = fD[aB];
      for (var eq = 3; eq >= 0; eq--) {
        var er = ec + ep[eq];
        if (ac.es(er) && eU === ac.eV(er)) {
          return true;
        }
      }
    }
    return false;
  };
}
self.aiCommand746 = function (fF) {
  if (fF === 0) {
    bt();
    return;
  }
  if (fF === 1) {
    if (!a0) {
      return;
    }
    if (a0.id !== 1 || a0.dv < 14) {
      return;
    }
    bJ.fG();
  }
};
function d7() {
  this.g = new Array(4);
  this.fH = new Uint16Array(2);
  this.fI = new Uint16Array(2);
  this.fJ = new Int32Array(2);
  this.fK = new Uint32Array(2);
  this.fL = new Uint32Array(2);
  this.fM = new Uint8Array(4);
  this.fN = new Uint8Array(4);
  this.eo = new Uint32Array(4);
  this.fO = new Uint32Array(5);
  this.ej = new Uint32Array(8);
  this.fP = new Uint32Array(8);
  this.fQ = new Uint16Array(16);
  this.fR = new Uint16Array(512);
  this.fS = new Uint16Array(512);
  this.fT = new Uint16Array(512);
  this.fU = new Uint16Array(0);
  this.dd = function () {
    var en = bS.ey * bS.ez;
    if (this.fU.length !== en) {
      this.fU = new Uint16Array(en);
    }
  };
  this.fV = function (g, fW) {
    g[0] = fW;
    return g;
  };
  this.fX = function (g, fW, fY) {
    g[0] = fW;
    g[1] = fY;
    return g;
  };
  this.fZ = function (g, fW, fY, fa) {
    g[0] = fW;
    g[1] = fY;
    g[2] = fa;
    return g;
  };
  this.fb = function (g, fW, fY, fa, fc) {
    g[0] = fW;
    g[1] = fY;
    g[2] = fa;
    g[3] = fc;
    return g;
  };
}
var fd;
var fe;
var ff;
var fg;
var fh;
var fi;
var fj;
var fk;
var fl;
var fm;
var fn;
var fo;
var fp;
function fq() {
  fj = 0;
  fk = 2048;
  fl = new Uint32Array(fk * 4);
  fm = 0;
  fn = new Uint32Array(fk);
  fo = new Uint8Array(bS.ey * bS.ez);
}
function fr(player) {
  fe = player;
  fp = false;
  fs();
  ft();
  for (var aB = ad.fu(fe) - 1; aB >= 0; aB--) {
    fd = aB;
    fv();
  }
  if (fp) {
    fw();
  }
}
function fw() {
  bs.fx();
  bs.fy();
}
function fv() {
  fi = ad.fz(fe, fd);
  ff = ad.g0(fe, fd);
  fg = ad.g1(fe, fd);
  g2();
  if (fj === 0) {
    g3();
    return;
  }
  g4();
  if (!g5()) {
    g3();
    return;
  }
  g6();
}
function g5() {
  fh = bL.du(ff, fj);
  if (fh > aD.g7) {
    return true;
  }
  if (!fg) {
    return false;
  }
  var g8 = fj * (1 + aD.g7);
  ff += bA.g9.gA(fe, g8 - ff);
  fh = bL.du(ff, fj);
  return true;
}
function g4() {
  var aB;
  for (aB = fj - 1; aB >= 0; aB--) {
    fo[bL.du(fl[aB], 4)] = 0;
  }
}
function g3() {
  if (ad.fu(fe) === 1) {
    aF.gB(fe);
  }
  var dt = bA.g9.gC(fe, ff);
  bd.gD(fe, ff - dt, 12);
  ad.gE(fe, fd);
}
function fs() {
  var player = fe;
  var gF = ag.gF;
  var en = Math.min(gF[player].length, fk);
  var gG = 0;
  var gH = fn;
  for (var aB = en - 1; aB >= 0; aB--) {
    gH[gG++] = gF[player][aB];
  }
  fm = gG;
}
function ft() {
  var aB;
  for (aB = ag.gF[fe].length - 1; aB >= 0; aB--) {
    if (ac.ei(ag.gF[fe][aB])) {
      ac.gI(ag.gF[fe][aB], fe);
    }
  }
  ag.gF[fe] = [];
}
function g2() {
  fj = 0;
  if (fi === aD.ek) {
    gJ();
  } else {
    gK();
  }
}
function gK() {
  var gL;
  var gM;
  var eq;
  var aB;
  var ep = ac.ep;
  for (eq = 3; eq >= 0; eq--) {
    for (aB = fm - 1; aB >= 0; aB--) {
      gL = fn[aB] + ep[eq];
      gM = bL.du(gL, 4);
      if (fo[gM] === 0 && ac.gN(gL) && ac.ef(gL) === fi) {
        fo[gM] = 1;
        fl[fj++] = gL;
      }
    }
  }
}
function gJ() {
  var gL;
  var gM;
  var eq;
  var aB;
  var ep = ac.ep;
  for (eq = 3; eq >= 0; eq--) {
    for (aB = fm - 1; aB >= 0; aB--) {
      gL = fn[aB] + ep[eq];
      gM = bL.du(gL, 4);
      if (fo[gM] === 0 && ac.ee(gL)) {
        fo[gM] = 1;
        fl[fj++] = gL;
      }
    }
  }
}
function g6() {
  if (gO()) {
    gP();
    if (fi !== aD.ek) {
      gQ();
    }
  } else {
    g3();
  }
}
function gQ() {
  bs.gR();
  bs.gS(ag.gT[fi]);
  bs.gS(ag.gU[fi]);
  if (bS.eS(bS.eT)) {
    bs.gS(ag.fD[fi]);
  }
  bs.gV(ag.gF[fi]);
  bs.gW(ag.gU[fi]);
  bs.gW(ag.fD[fi]);
  bs.gX();
  bs.gY();
}
function gP() {
  fp = true;
  ad.gZ(fe, fd, ff);
  ad.ga(fe, fd);
  ag.gb[fe] += fj;
  bs.gc();
  gd();
}
function gO() {
  if (fi === aD.ek) {
    return ge();
  } else {
    return gf();
  }
}
function gf() {
  var gg = fj * aD.g7;
  var gh = gi();
  var gj = gk();
  var gl = gg + gh * 2 + gj;
  var gm = fh * fj;
  if (gm > gl) {
    ff -= gl;
    bd.gD(fe, gl, 13);
    gn(gl - gg, gj);
    return true;
  } else {
    if (fg && gj === 0) {
      ff -= gm;
      gm += bA.g9.gA(fe, gl - gm + 1);
      bd.gD(fe, gm, 13);
      gn(gm - gg, 0);
      return true;
    }
    ff -= gm;
    bd.gD(fe, gm, 13);
    gn(gm - gg, gj);
    return false;
  }
}
function gn(gm, gj) {
  if (gj > 0) {
    if (gm <= gj) {
      bd.gD(fi, gm, 13);
      ad.go(fi, fe, gj - gm);
      return;
    }
    ad.go(fi, fe, 0);
    gm -= gj;
  }
  gm = bL.du(gm, 2);
  gm = Math.min(ag.gp[fi], gm);
  bd.gD(fi, gm, 13);
  ag.gp[fi] -= gm;
}
function gk() {
  return ad.gq(fi, fe);
}
function gi() {
  return bL.du(fj * ag.gp[fi], 1 + bL.du(ag.gb[fi] * 10, 16));
}
function ge() {
  var gr = fj * aD.g7;
  ff -= gr;
  bd.gD(fe, gr, 13);
  return true;
}
function gd() {
  for (var aB = fj - 1; aB >= 0; aB--) {
    ag.gF[fe].push(fl[aB]);
    ag.gT[fe].push(fl[aB]);
    ac.gI(fl[aB], fe);
  }
}
function dC() {
  var gs = 0;
  var gt = 0;
  this.gu = function (eu, ew) {
    gs = eu;
    gt = ew;
  };
  this.gv = function (code) {
    if (aD.gw || aM.gx) {
      return;
    }
    if (!bA.g9.gy(0) && !bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(aD.eX)) {
      return;
    }
    if (aR.h0(gs, gt)) {
      aR.h1 = false;
      return;
    }
    if (aP.h0(gs, gt)) {
      return;
    }
    var h2 = bM.h3(gs);
    var h4 = bM.h5(gt);
    var eZ = bM.fB(h2, h4);
    if (!bM.h6(h2, h4)) {
      return;
    }
    if (code === 0) {
      h7(eZ);
    } else if (code === 1) {
      h8(eZ);
    } else if (code === 2) {
      h9(eZ);
    }
  };
  function h7(eZ) {
    var hA;
    if (aD.hB) {
      hA = br.hC(eZ);
      if (hA === -1) {
        return;
      }
      b8.hD.hE(eZ);
      return;
    }
    var eR = bM.ed(eZ);
    if (ac.es(eR)) {
      hA = am.eO.eQ(eR);
      if (hA) {
        var ec = bM.ed(hA);
        var hF = ac.ee(ec) ? aD.ek : ac.ef(ec);
        b8.hD.hG(aR.hH(), hA, hF);
      }
      return;
    }
    hA = br.hI(eZ);
    if (hA < 0) {
      return;
    }
    eR = bM.ed(hA);
    if (ac.ee(eR)) {
      if (bs.hJ(aD.eX)) {
        b8.hD.hK(aR.hH(), aD.ek);
      } else if (ad.fu(aD.eX)) {
        b1.hL(aD.ek, aR.hH());
      }
      return;
    }
    var player = ac.ef(eR);
    if (!bs.eg(player, aD.eX)) {
      return;
    }
    if (bs.hM(aD.eX, player)) {
      b8.hD.hK(aR.hH(), player);
    } else if (ad.fu(aD.eX)) {
      b1.hL(player, aR.hH());
    }
  }
  function h8(eZ) {
    if (bN.hN.hO(aD.eX, eZ)) {
      b8.hD.hP(aR.hH(), bO.fP[7]);
    }
  }
  function h9(eZ) {
    if (bN.hQ.hR(aD.eX, eZ)) {
      b8.hD.hS(aR.hH());
    }
  }
  this.hT = function () {
    if (aD.gw || aM.gx) {
      return;
    }
    if (!bA.g9.gy(1)) {
      return;
    }
    var gL = aD.eX;
    if (!bA.g9.gz(gL)) {
      return;
    }
    var en = ad.fu(gL);
    if (en < 1) {
      hU();
      return;
    }
    var hV = 0;
    var hW = ad.g0(gL, 0);
    for (var aB = 1; aB < en; aB++) {
      var hX = ad.g0(gL, aB);
      if (hX < hW) {
        hW = hX;
        hV = aB;
      }
    }
    b8.hD.hK(aR.hH(), ad.fz(gL, hV));
  };
  this.hY = function () {
    if (aD.gw || aM.gx) {
      return;
    }
    if (!bA.g9.gz(aD.eX)) {
      return;
    }
    if (!bA.g9.gy(1)) {
      return;
    }
    if (aw.hZ) {
      if (!aw.ha(aD.eX)) {
        return;
      }
      b8.hD.hb(1);
      return;
    }
    if (!aw.hc(aD.eX)) {
      return;
    }
    b8.hD.hY();
  };
  function hU() {
    var gL = aD.eX;
    if (bs.hJ(gL)) {
      b8.hD.hK(aR.hH(), aD.ek);
      return;
    }
    var ep = ac.ep;
    var gT = ag.gT;
    var en = gT[gL].length;
    var hd = Math.floor(Math.random() * en);
    for (var aB = 0; aB < en; aB++) {
      for (var he = 3; he >= 0; he--) {
        var hf = gT[gL][(aB + hd) % en] + ep[he];
        if (ac.gN(hf)) {
          var hg = ac.ef(hf);
          if (hg !== gL && (!aD.hh || bs.eg(gL, hg))) {
            b8.hD.hK(aR.hH(), hg);
            return;
          }
        }
      }
    }
  }
}
function hi(hj, size, hk, hl, font) {
  function dd() {
    var aB;
    var hm;
    var hn;
    var ho = 0.2;
    var canvas = document.createElement("canvas");
    var hp = canvas.getContext("2d", {
      alpha: false
    });
    canvas.width = hj;
    canvas.height = hj;
    hp.font = size + font;
    hp.textAlign = "center";
    hp.textBaseline = "middle";
    hp.fillStyle = "red";
    for (aB = 0; aB < hk.length; aB++) {
      hp.fillText(hk[aB], hj * 0.5, hj * 0.5);
    }
    hm = hp.getImageData(0, 0, hj, hj);
    hn = hq(hm);
    if (hn > -1) {
      ho = (hn - hj * 0.5 + size * 0.1) / size;
    }
    return Math.max(ho, 0);
  }
  function hq(hm) {
    var aB;
    var e7;
    var eq = hm.data;
    for (aB = eq.length - 4; aB >= 0; aB -= 4) {
      e7 = eq[aB];
      if (e7 >= hl) {
        return Math.floor(aB / (hj * 4));
      }
    }
    return -1;
  }
  return dd();
}
function d5() {
  this.hr = new Int16Array(4);
  this.hs = new Int16Array(4);
  this.ht = null;
  this.dd = function () {
    var aB;
    this.hr[0] = -bS.ey;
    this.hr[1] = 1;
    this.hr[2] = bS.ey;
    this.hr[3] = -1;
    this.ht = new Int16Array([-bS.ey, -bS.ey + 1, 1, bS.ey + 1, bS.ey, bS.ey - 1, -1, -bS.ey - 1]);
    for (aB = 0; aB < 4; aB++) {
      this.hs[aB] = this.hr[aB] * 4;
    }
  };
  this.hu = function () {
    return bL.hv(Math.floor((1 + a0.a1.hw() * 0.25) * 0.15 * h.hx / hy), 4, 128);
  };
  this.hz = function (eR, id) {
    var i0 = this.hs;
    for (var aB = 0; aB < 4; aB++) {
      var ec = eR + i0[aB];
      if (ac.i1(ec) && ac.eV(ec) === id) {
        return true;
      }
    }
    return false;
  };
  this.i2 = function (player, eR) {
    if (ac.ee(eR)) {
      return false;
    }
    if (player === ac.ef(eR)) {
      return true;
    }
    return false;
  };
  this.f5 = function (h2, h4, eZ) {
    h2 -= this.ev(eZ);
    h4 -= this.ex(eZ);
    return h2 * h2 + h4 * h4;
  };
  this.i3 = function (i4, i5, i6) {
    var i7 = this.i8(i4) - this.i9(i6);
    var iA = this.iB(i5) - this.iC(i6);
    return Math.sqrt(i7 * i7 + iA * iA);
  };
  this.iD = function (iE, iF) {
    var i7 = this.ev(iE) - this.ev(iF);
    var iA = this.ex(iE) - this.ex(iF);
    return ~~Math.sqrt(i7 * i7 + iA * iA + 0.5);
  };
  this.iG = function (iE, iF) {
    var i7 = this.ev(iE) - this.ev(iF);
    var iA = this.ex(iE) - this.ex(iF);
    return i7 * i7 + iA * iA;
  };
  this.iH = function (iI, iJ, iK, iL) {
    iI -= iK;
    iJ -= iL;
    return iI * iI + iJ * iJ;
  };
  this.iM = function (gL, iN) {
    return bL.du(iN * ag.gp[gL], 1000);
  };
  this.i8 = function (i4) {
    return (i4 + iO) * 16 / hy;
  };
  this.iB = function (i5) {
    return (i5 + iP) * 16 / hy;
  };
  this.iQ = function (eq) {
    return eq * 16 / hy;
  };
  this.h3 = function (i4) {
    return Math.floor((i4 + iO) / hy);
  };
  this.h5 = function (i5) {
    return Math.floor((i5 + iP) / hy);
  };
  this.h6 = function (h2, h4) {
    return h2 >= 1 && h4 >= 1 && h2 < bS.ey - 1 && h4 < bS.ez - 1;
  };
  this.ev = function (eZ) {
    return eZ % bS.ey;
  };
  this.ex = function (eZ) {
    return bL.du(eZ, bS.ey);
  };
  this.fB = function (h2, h4) {
    return h4 * bS.ey + h2;
  };
  this.iR = function (h2, h4) {
    return this.fB(h2, h4) * 4;
  };
  this.iS = function (eZ) {
    return this.fA(this.ev(eZ), this.ex(eZ));
  };
  this.fA = function (h2, h4) {
    return h2 > 0 && h2 < bS.ey - 1 && h4 > 0 && h4 < bS.ez - 1;
  };
  this.ed = function (eZ) {
    return eZ << 2;
  };
  this.eb = function (eR) {
    return eR >> 2;
  };
  this.iT = function (eZ) {
    return bS.ey * this.ex(eZ) * 256 + (this.ev(eZ) << 4);
  };
  this.iU = function (eZ) {
    return this.iT(eZ) + 8 + (bS.ey << 7);
  };
  this.iV = function (i6) {
    return bS.ey * (this.iC(i6) >> 4) + (this.i9(i6) >> 4);
  };
  this.iW = function (i6) {
    var eZ = this.iV(i6);
    return (this.ev(eZ) >> 5) + bN.iX.iY * (this.ex(eZ) >> 5);
  };
  this.i9 = function (i6) {
    return i6 % (bS.ey << 4);
  };
  this.iC = function (i6) {
    return bL.du(i6, bS.ey << 4);
  };
  this.iZ = function (eZ, he) {
    return eZ + this.hr[he];
  };
  this.ia = function (eR, he) {
    return eR + this.hs[he];
  };
  this.ib = function (iE, iF) {
    var i7 = this.ev(iF) - this.ev(iE);
    var iA = this.ex(iF) - this.ex(iE);
    if (Math.abs(i7) >= Math.abs(iA)) {
      return 1 + (i7 < 0) * 2;
    }
    return (iA > 0) * 2;
  };
  this.ic = function (player) {
    return this.fB(ag.ie[player] + ag.ig[player] >> 1, ag.ih[player] + ag.ii[player] >> 1);
  };
  this.ij = function (player) {
    return this.fB(ay.ik(ag.ie[player], ag.ig[player]), ay.ik(ag.ih[player], ag.ii[player]));
  };
}
function cl() {
  this.il = new im();
  this.io = new ip();
  this.iq = new ir();
  this.performance = new is();
  this.it = new iu();
  this.iv = new iw();
  this.ix = new iy();
  this.iz = new j0();
  this.j1 = new j2();
  this.dd = function () {
    this.il.dd();
    this.iq.dd();
    this.performance.dd();
    this.it.dd();
    this.iv.dd();
  };
  this.j3 = function () {
    this.performance.j3();
    this.il.j3();
    this.iq.j4();
  };
}
function iu() {
  var j5;
  var j6 = 8;
  var j7 = new Uint16Array(j6);
  this.dd = function () {
    j5 = 0;
  };
  this.j8 = function (player, j9) {
    bO.ej[1] = ag.gF[player].length;
    if (bO.ej[0] === aD.ek) {
      ao.it.jA(player);
    } else {
      this.jB(player, bO.ej[0]);
    }
    if (bO.ej[1] === 0 && ag.gF[player].length === 0) {
      return false;
    }
    if (!j9 && bO.ej[1] === ag.gF[player].length) {
      return false;
    }
    if (bO.ej[0] === aD.ek) {
      ag.jC[player]++;
    } else {
      ag.jD[player]++;
    }
    return true;
  };
  this.jE = function (player) {
    jF(bO.ej[1], player);
    ad.jG(player, bO.fK[0], bO.ej[0]);
    aF.jH(player, false);
  };
  this.jI = function (player, jJ, en, hW) {
    var jK = bL.du(ag.gp[player] * 12, 1024);
    hW -= hW >= bL.du(ag.gp[player], 2) ? jK : 0;
    jF(en, player);
    ad.jG(player, hW, jJ);
    ag.gp[player] -= hW + jK;
    aF.jH(player, false);
  };
  this.jB = function (player, jJ) {
    var aB;
    var he;
    var ep = ac.ep;
    for (aB = ag.gT[player].length - 1; aB >= 0; aB--) {
      if (ac.jL(ag.gT[player][aB])) {
        for (he = 3; he >= 0; he--) {
          if (ac.gN(ag.gT[player][aB] + ep[he]) && ac.ef(ag.gT[player][aB] + ep[he]) === jJ) {
            ag.gF[player].push(ag.gT[player][aB]);
            break;
          }
        }
      }
    }
  };
  function jF(size, player) {
    for (var aB = ag.gF[player].length - 1; aB >= size; aB--) {
      ac.jM(ag.gF[player][aB], player);
    }
  }
  this.jA = function (player) {
    var ep = ac.ep;
    for (var aB = ag.gT[player].length - 1; aB >= 0; aB--) {
      if (ac.jL(ag.gT[player][aB])) {
        for (var he = 3; he >= 0; he--) {
          if (ac.ee(ag.gT[player][aB] + ep[he])) {
            ag.gF[player].push(ag.gT[player][aB]);
            break;
          }
        }
      }
    }
  };
  this.jN = function (player, jO) {
    var aB;
    var f6;
    var he;
    var hg;
    var en = ag.gT[player].length;
    var jP = en >= 256 ? 12 : en >= 32 ? 6 : 1;
    var jQ = en - 1 - ay.jR(jP);
    var ep = ac.ep;
    j5 = 0;
    loop: for (aB = jQ; aB >= 0; aB -= jP) {
      for (he = 3; he >= 0; he--) {
        hg = ac.ee(ag.gT[player][aB] + ep[he]) ? aD.ek : ac.ef(ag.gT[player][aB] + ep[he]);
        if (hg === aD.ek || ac.gN(ag.gT[player][aB] + ep[he]) && hg !== player && (jO || bs.eg(player, hg))) {
          for (f6 = j5 - 1; f6 >= 0; f6--) {
            if (j7[f6] === hg) {
              continue loop;
            }
          }
          j7[j5] = hg;
          if (++j5 >= j6) {
            return true;
          }
        }
      }
    }
    return j5 > 0;
  };
  this.jS = function (player, jO) {
    var aB;
    var he;
    var hg;
    var ep = ac.ep;
    j5 = 0;
    for (aB = ag.gT[player].length - 1; aB >= 0; aB--) {
      for (he = 3; he >= 0; he--) {
        hg = ac.ee(ag.gT[player][aB] + ep[he]) ? aD.ek : ac.ef(ag.gT[player][aB] + ep[he]);
        if (hg === aD.ek || ac.gN(ag.gT[player][aB] + ep[he]) && hg !== player && (jO || bs.eg(player, hg))) {
          j7[j5++] = hg;
          return true;
        }
      }
    }
    return false;
  };
  this.jT = function () {
    var aB;
    var f7;
    for (aB = j5 - 1; aB >= 0; aB--) {
      if (j7[aB] === aD.ek) {
        j5--;
        for (f7 = aB; f7 < j5; f7++) {
          j7[f7] = j7[f7 + 1];
        }
        return true;
      }
    }
    return false;
  };
  this.jU = function (player) {
    var aB;
    var f7;
    for (aB = j5 - 1; aB >= 0; aB--) {
      if (ad.jV(player, j7[aB])) {
        j5--;
        for (f7 = aB; f7 < j5; f7++) {
          j7[f7] = j7[f7 + 1];
        }
      }
    }
    return j5 === 0;
  };
  this.jW = function () {
    var aB;
    for (aB = j5 - 1; aB >= 0; aB--) {
      if (bA.g9.jX(j7[aB])) {
        return true;
      }
    }
    return false;
  };
  this.jY = function () {
    var aB;
    for (aB = j5 - 1; aB >= 0; aB--) {
      if (!bA.g9.jX(j7[aB])) {
        j7[aB] = j7[--j5];
      }
    }
    return j5 > 0;
  };
  this.jZ = function (player) {
    var aB;
    var f7;
    var ja = j7[0];
    var jb = ag.gp[ja] + ad.gq(ja, player);
    for (aB = j5 - 1; aB >= 1; aB--) {
      f7 = ag.gp[j7[aB]] + ad.gq(j7[aB], player);
      if (f7 < jb) {
        ja = j7[aB];
        jb = f7;
      }
    }
    return ja;
  };
  this.jc = function (player) {
    var aB;
    var j;
    var jd = j7[0];
    if (j5 === 1) {
      return jd;
    }
    var je = bL.du(ag.ig[player] + ag.ie[player], 2);
    var jf = bL.du(ag.ii[player] + ag.ih[player], 2);
    var f3 = jg(je - bL.du(ag.ig[jd] + ag.ie[jd], 2)) + jg(jf - bL.du(ag.ii[jd] + ag.ih[jd], 2));
    for (aB = j5 - 1; aB >= 1; aB--) {
      j = jg(je - bL.du(ag.ig[j7[aB]] + ag.ie[j7[aB]], 2)) + jg(jf - bL.du(ag.ii[j7[aB]] + ag.ih[j7[aB]], 2));
      if (j < f3) {
        f3 = j;
        jd = j7[aB];
      }
    }
    return jd;
  };
  this.jh = function () {
    var ji = j7;
    var jj = ji[0];
    var gp = ag.gp;
    var jk = gp[jj];
    for (var aB = j5 - 1; aB >= 1; aB--) {
      var gL = ji[aB];
      var f7 = gp[gL];
      if (f7 > jk) {
        jj = gL;
        jk = f7;
      }
    }
    return jj;
  };
  this.jl = function () {
    return j7[ay.jR(j5)];
  };
}
function iw() {
  this.jm = new Uint8Array(aD.ek);
  this.dd = function () {
    this.jm.fill(0);
  };
  this.jn = function (player, hW) {
    if (!ad.jo(player)) {
      return;
    }
    var jp = ae.jq(player);
    var jr = aE.hW[player];
    if (jr >= 3 && jr < 6) {
      hW = Math.max(ag.gp[player] - jp, hW);
    }
    var js = ag.gU[player].length;
    var jt = ag.gT[player].length;
    if (ag.gb[player] * 30 > aD.ju && jv[player] < 10 && js >= jt * 100) {
      aE.jw(player, 10);
    }
    if (aD.hh) {
      jx(player, hW, jr, jp);
      return;
    }
    if (!jt || js && (js < jt && !ay.jR(10) || js >= jt * 100 && ay.jR(3) || !ay.jR(8))) {
      if (bN.jy.j3(player)) {
        return;
      }
    }
    jz(player, hW, jr);
  };
  function jx(player, hW, jr, jp) {
    var jJ;
    if (ao.it.jN(player, false) || ao.it.jS(player, false)) {
      if (ao.it.jU(player)) {
        return;
      }
      if (ao.it.jT()) {
        k0(player, hW);
        k1(player, aD.ek, jr);
        return;
      }
      if (ay.k2(aE.k3[jr])) {
        jJ = ao.it.jZ(player);
        k4(player, hW, jJ, jr);
      } else {
        if (ao.it.jW() && ay.k2(aE.k5[jr])) {
          ao.it.jY();
        }
        if (jr === 6) {
          k4(player, hW, ao.it.jl(), jr);
          return;
        }
        jJ = ao.it.jc(player);
        k4(player, hW, jJ, jr);
      }
      k1(player, jJ, jr);
      return;
    }
    if (bN.jy.j3(player)) {
      return;
    }
    if (ao.ix.j3(player)) {
      return;
    }
    k6(player, hW, jr, jp);
  }
  function k1(player, jJ, jr) {
    if (jr >= 3 && bf.k7() > 2142 && (jJ === aD.ek || ag.gp[jJ] < bL.du(ag.gp[player], 20))) {
      aE.jw(player, 20);
    }
  }
  function k6(player, hW, jr, jp) {
    var jm = ao.iv.jm;
    jm[player] = 0;
    var el = bg.el;
    var k8 = el[player];
    if (k8 === 0) {
      return;
    }
    var gp = ag.gp;
    var k9 = gp[player];
    var gb = ag.gb;
    if (player < aD.kA) {
      hW = k9;
    }
    if (k9 < gb[player]) {
      return;
    }
    if (jr === 5 && k9 < jp || jr === 4 && k9 < bL.du(jp, 2)) {
      return;
    }
    bh.kB(k8);
    var en = bO.fI[0];
    var fR = bO.fR;
    var aB = ay.jR(en);
    for (var f7 = 0; f7 < en; f7++) {
      var f8 = fR[(f7 + aB) % en];
      if (jm[f8]) {
        b8.kC.kD(player, f8, hW);
        return;
      }
    }
    var kE = bN.y.kE;
    for (f7 = 0; f7 < en; f7++) {
      f8 = fR[(f7 + aB) % en];
      if (kE[f8] && f8 !== player) {
        b8.kC.kD(player, f8, hW);
        return;
      }
    }
  }
  function jz(player, hW, jr) {
    if (!ao.it.jN(player, true) && !ao.it.jS(player, true)) {
      ao.ix.j3(player);
      return;
    }
    if (ao.it.jU(player)) {
      return;
    }
    if (ao.it.jT()) {
      k0(player, hW);
      return;
    }
    if (ay.k2(aE.k3[jr])) {
      k4(player, hW, ao.it.jZ(player), jr);
      return;
    }
    if (jr === 5) {
      k4(player, hW, ao.it.jh(), jr);
      return;
    }
    if (ao.it.jW() && ay.k2(aE.k5[jr])) {
      ao.it.jY();
    }
    if (jr === 6) {
      k4(player, hW, ao.it.jl(), jr);
      return;
    }
    k4(player, hW, ao.it.jc(player), jr);
  }
  function k4(player, hW, jJ, jr) {
    if (jr >= 3 && jr < 6 && bL.du(ag.gp[player], 8) > ag.gp[jJ]) {
      hW = Math.max(bL.du(ag.gp[jJ] * 11, 5), bL.du(ag.gp[player], 10));
    }
    var en = ag.gF[player].length;
    ao.it.jB(player, jJ);
    ao.it.jI(player, jJ, en, hW);
  }
  function k0(player, hW) {
    var jJ = aD.ek;
    var en = ag.gF[player].length;
    ao.it.jA(player);
    if (ag.gF[player].length !== en) {
      ao.it.jI(player, jJ, en, hW);
      return true;
    }
    return false;
  }
}
function c5() {
  var kF = new Uint8Array(aD.ek);
  var kG = new Uint16Array(aD.ek);
  var kH = new Uint16Array(aD.ek);
  var kI = new Uint8Array(aD.ek);
  this.hW = new Uint8Array(aD.ek);
  var kJ = new Uint16Array(aD.ek);
  var kK = new Uint16Array(aD.ek);
  this.kL = null;
  this.k5 = [97, 94, 70, 40, 20, 0, 100];
  this.kM = [500, 450, 400, 300, 80, 50, 100];
  this.k3 = [0, 0, 5, 25, 50, 100, 0];
  this.kN = [60, 74, 112, 200, 256, 512, 512];
  this.kO = [1, 2, 3, 4, 6, 8, 1];
  this.kP = [500, 450, 400, 300, 80, 50, 100];
  this.kQ = [100, 150, 250, 400, 600, 1000, 100];
  this.de = function () {
    this.kL = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"];
  };
  this.dd = function () {
    var aB;
    kF.fill(0);
    kG.fill(0);
    kH.fill(0);
    kI.fill(0);
    this.hW.fill(0);
    kJ.fill(0);
    kK.fill(0);
    var kR = aD.kA;
    if (aD.kS === 9) {
      this.kT();
    } else if (!aD.kU) {
      var kV = aD.kS === 8 ? 1 : 0;
      for (aB = aD.kW - 1; aB >= 0; aB--) {
        this.hW[aB + kR] = kV;
      }
    } else if (aD.data.botDifficultyType === 3) {
      for (aB = aD.kW - 1; aB >= 0; aB--) {
        var hf = aB + kR;
        this.hW[hf] = aD.data.botDifficultyData[hf];
      }
    } else if (aD.data.botDifficultyType === 2) {
      for (aB = aD.kW - 1; aB >= 0; aB--) {
        hf = aB + kR;
        this.hW[hf] = aD.data.botDifficultyTeam[bg.kX[bg.el[hf]]];
      }
    } else if (aD.data.botDifficultyType === 1) {
      var kY = this.kL.length;
      for (aB = aD.kW - 1; aB >= 0; aB--) {
        this.hW[aB + kR] = aB % kY;
      }
    } else {
      kY = aD.data.botDifficultyValue;
      for (aB = aD.kW - 1; aB >= 0; aB--) {
        this.hW[aB + kR] = kY;
      }
    }
    for (aB = 0; aB < kR; aB++) {
      this.hW[aB] = 6;
    }
    var en = aD.ek;
    for (aB = 0; aB < en; aB++) {
      if (this.hW[aB] <= 2) {
        kI[aB] = 5;
        kJ[aB] = kK[aB] = 1040;
        if (this.hW[aB] === 0) {
          kG[aB] = 980;
          kH[aB] = 980;
        } else if (this.hW[aB] === 1) {
          kG[aB] = 980;
          kH[aB] = 920;
          kJ[aB] = kK[aB] = 1100;
        } else {
          kG[aB] = 825;
          kH[aB] = 750;
        }
        kZ(aB);
        continue;
      }
      if (this.hW[aB] <= 4) {
        kI[aB] = 1 + ay.jR(20);
        if (this.hW[aB] === 3) {
          kG[aB] = kH[aB] = 500;
          kJ[aB] = kK[aB] = 1000;
        } else {
          kK[aB] = 250 + ay.jR(1501);
          kJ[aB] = 500 + ay.jR(501);
          kG[aB] = 300 + ay.jR(201);
          kH[aB] = 100 + ay.jR(201);
        }
        kZ(aB);
        continue;
      }
      if (this.hW[aB] <= 5) {
        kJ[aB] = 1000;
        kK[aB] = 1000;
        kI[aB] = 35 + ay.jR(16);
        kG[aB] = 300 + ay.jR(201);
        kH[aB] = 50 + ay.jR(101);
        kZ(aB);
        continue;
      }
      kJ[aB] = kK[aB] = 800;
      kI[aB] = 5;
      kG[aB] = 10;
      kH[aB] = 250;
      kZ(aB);
    }
  };
  this.kT = function () {
    var eR = az.ka;
    var kR = aD.kA;
    for (var aB = eR - 1; aB >= 0; aB--) {
      this.hW[aB + kR] = 0;
    }
    for (var f7 = 0; f7 < 6; f7++) {
      for (aB = eR + az.kb[f7] - 1; aB >= eR; aB--) {
        this.hW[aB + kR] = f7;
      }
      eR += az.kb[f7];
    }
  };
  function kZ(aB) {
    kF[aB] = 1 + bL.du(kJ[aB] * ay.random(), ay.value(100) * 10);
  }
  this.jw = function (gL, value) {
    kF[gL] = Math.min(value, kF[gL]);
  };
  this.j3 = function (gL) {
    if (--kF[gL] === 0) {
      kc(gL);
    }
  };
  function kc(gL) {
    kd(gL);
    ao.iv.jn(gL, bL.du(kG[gL] * ag.gp[gL], 1000));
  }
  function kd(gL) {
    if (kJ[gL] !== kK[gL]) {
      kJ[gL] += kJ[gL] < kK[gL] ? 3 : -3;
    }
    if (kG[gL] !== kH[gL]) {
      kG[gL] += kG[gL] < kH[gL] ? kI[gL] : -kI[gL];
      kG[gL] = Math.abs(kG[gL] - kH[gL]) <= kI[gL] ? kH[gL] : kG[gL];
    }
    kF[gL] = bL.du(kJ[gL], 10);
  }
  this.ke = function (gL, gG) {
    kJ[gL] = kK[gL] = gG;
  };
}
function ir() {
  var kf = new Uint16Array(aD.ek);
  this.dd = function () {
    kf.fill(aD.ek);
  };
  this.j4 = function () {
    if (bf.k7() % 109 !== 9) {
      return;
    }
    if (al.kg < 20) {
      return;
    }
    if (!aD.hh) {
      return;
    }
    if (bh.kh() < bL.du(aD.ju * 8, 10)) {
      return;
    }
    var ki = bh.kj();
    if (!bg.kX[ki]) {
      return;
    }
    bh.kk(ki);
    var en = bO.fI[0];
    if (en === 0) {
      return;
    }
    var g = bO.fR;
    var kl = al.kl;
    var kg = al.kg;
    var km = kf;
    var hf = ay.jR(en);
    for (var aB = 0; aB < kg; aB++) {
      var hF = kl[aB];
      var kn = g[hf];
      if (bA.g9.ko(hF, kn) && km[hF] === 512) {
        km[hF] = kn;
        hf = (hf + 1) % en;
      }
    }
  };
  this.j3 = function (player) {
    var kp = kq(player);
    kr(player);
    if (bO.fI[0] === 0) {
      return false;
    }
    var ks = bM.ij(player);
    var kt = ku(player, ks);
    var kv = kw(kt, ks);
    if (kv > 0 && bN.kx.ky(player, bN.kz.l0(kv, ks))) {
      l1(player, ks, kt, kp);
      return true;
    }
    var l2 = l3(player, ks);
    if (l2 > 0 && bN.kx.ky(player, bN.kz.l0(l2, ks))) {
      l1(player, ks, ac.ef(l2 << 2), kp);
      return true;
    }
    kv = kw(kp, ks);
    if (kv > 0 && bN.kx.ky(player, bN.kz.l0(kv, ks))) {
      return true;
    }
    return false;
  };
  function kr(player) {
    var l4 = al.kl;
    var l5 = al.kg;
    var en = Math.min(l5, l5 < 17 && ay.jR(20) === 5 ? 1 : 16);
    var gM = ay.jR(l5);
    var fQ = bO.fQ;
    var gU = ag.gU;
    var gG = 0;
    for (var aB = 0; aB < en; aB++) {
      var gL = l4[(aB + gM) % l5];
      if (gL !== player && gU[gL].length) {
        fQ[gG++] = gL;
      }
    }
    bO.fI[0] = gG;
  }
  function ku(player, ks) {
    var en = bO.fI[0];
    var fQ = bO.fQ;
    var l6 = -1;
    var l7 = aD.ek;
    for (var aB = 0; aB < en; aB++) {
      var gL = fQ[aB];
      if (!bs.eg(player, gL)) {
        continue;
      }
      var f3 = bM.iG(ks, bM.ic(gL));
      if (l6 === -1 || f3 < l6) {
        l6 = f3;
        l7 = gL;
      }
    }
    return l7;
  }
  function kw(kt, ks) {
    if (kt === aD.ek) {
      return 0;
    }
    var gU = ag.gU[kt];
    var l5 = gU.length;
    if (l5 === 0) {
      return 0;
    }
    var en = Math.min(l5, 10);
    var l7 = 0;
    var l6 = bM.iG(gU[l7] >> 2, ks);
    for (var aB = 0; aB < en; aB++) {
      var hf = ay.jR(l5);
      var f3 = bM.iG(gU[hf] >> 2, ks);
      if (f3 < l6) {
        l6 = f3;
        l7 = hf;
      }
    }
    return gU[l7] >> 2;
  }
  function l3(player, ks) {
    var en = bO.fI[0];
    var fQ = bO.fQ;
    var km = kf;
    var gM = 0;
    for (var aB = 0; aB < en; aB++) {
      var gL = fQ[aB];
      var jJ = km[gL];
      if (jJ === aD.ek) {
        continue;
      }
      if (!bA.g9.l8(jJ)) {
        continue;
      }
      if (player === jJ) {
        continue;
      }
      if (!bs.eg(player, jJ)) {
        continue;
      }
      fQ[gM++] = jJ;
    }
    bO.fI[0] = gM;
    if (gM === 0) {
      return 0;
    }
    var kt = ku(player, ks);
    return kw(kt, ks);
  }
  function kq(player) {
    var jJ = kf[player];
    if (jJ === aD.ek) {
      return aD.ek;
    }
    if (!bA.g9.l8(jJ) || !ag.gU[jJ]) {
      kf[player] = aD.ek;
      return aD.ek;
    }
    return jJ;
  }
  function l1(player, ks, jJ, l9) {
    if (l9 === aD.ek) {
      kf[player] = jJ;
      return;
    }
    var lA = bM.ic(jJ);
    var lB = bM.ic(l9);
    if (bM.iG(ks, lA) < bM.iG(ks, lB)) {
      kf[player] = jJ;
    }
  }
}
function iy() {
  this.j3 = function (player) {
    if (!bS.eS(bS.eT)) {
      return false;
    }
    if (!aD.data.passableMountains) {
      return false;
    }
    if (ag.fD[player].length === 0) {
      return false;
    }
    return lC(player);
  };
  function lC(player) {
    var lD = lE(player);
    if (lD === null) {
      return false;
    }
    lF(player);
    var lG = lH(lD.id);
    if (lG === null) {
      return lI(player, lD.id);
    }
    lJ(player, lG);
    return true;
  }
  function lI(player, eU) {
    var en = ao.il.lK;
    if (en === 0) {
      return false;
    }
    var eR = ao.il.eK[ay.jR(en)] << 2;
    var ep = ac.ep;
    var eq = ay.jR(4);
    while (true) {
      eR += ep[eq];
      if (ac.es(eR)) {
        if (ac.eV(eR) === eU) {
          lJ(player, {
            eR: eR,
            gL: aD.ek
          });
          return true;
        }
        break;
      }
      if (!ac.ee(eR)) {
        break;
      }
    }
    return false;
  }
  function lE(player) {
    var fD = ag.fD[player];
    var en = fD.length;
    var fE = Math.max(bL.du(en, 12), 1);
    var ep = ac.ep;
    var e7 = ay.jR(en);
    for (var aB = 0; aB < en; aB += fE) {
      var ec = fD[(aB + e7) % en];
      for (var eq = 3; eq >= 0; eq--) {
        var er = ec + ep[eq];
        if (ac.es(er)) {
          return {
            eR: er,
            id: ac.eV(er),
            gL: player
          };
        }
      }
    }
    return null;
  }
  function lF(player) {
    var kl = al.kl;
    var kg = al.kg;
    var en = Math.min(kg, 12);
    var gM = ay.jR(kg);
    var fQ = bO.fQ;
    var fD = ag.fD;
    var gG = 0;
    for (var aB = 0; aB < en; aB++) {
      var gL = kl[(aB + gM) % kg];
      if (gL !== player && fD[gL].length && bs.eg(player, gL)) {
        fQ[gG++] = gL;
      }
    }
    bO.fI[0] = gG;
  }
  function lH(eU) {
    var en = bO.fI[0];
    var fQ = bO.fQ;
    for (var aB = 0; aB < en; aB++) {
      var lL = lE(fQ[aB]);
      if (lL === null) {
        continue;
      }
      if (lL.id === eU) {
        return lL;
      }
    }
    return null;
  }
  function lJ(player, lL) {
    var hW = bA.g9.lM(player, aE.kP[aE.hW[player]]);
    ag.gF[player].push(lL.eR);
    ad.jG(player, hW, lL.gL);
    aF.jH(player, true);
  }
}
function ip() {
  this.j3 = function (player) {
    return bN.kx.ky(player, lN(player));
  };
  function lN(player) {
    var en = ao.il.lK;
    if (en === 0) {
      return -1;
    }
    var l5 = Math.min(en, ao.performance.lO ? en : 10);
    var eK = ao.il.eK;
    var jQ = bL.du(ay.random() * en, ay.value(100));
    var e = jQ + l5;
    var lP = ay.ik(ag.ie[player], ag.ig[player]);
    var lQ = ay.ik(ag.ih[player], ag.ii[player]);
    var l7 = -1;
    var f3 = bM.iH(0, 0, bS.ey, bS.ez);
    for (var aB = jQ; aB < e; aB++) {
      var gM = aB % en;
      var lR = bM.f5(lP, lQ, eK[gM]);
      if (lR < f3) {
        f3 = lR;
        l7 = gM;
      }
    }
    if (l7 === -1) {
      return -1;
    }
    return lS(eK[l7], lP, lQ);
  }
  function lS(eZ, lP, lQ) {
    var h2 = bM.ev(eZ);
    var h4 = bM.ex(eZ);
    var i7 = lP - h2;
    var iA = lQ - h4;
    if (Math.abs(i7) >= Math.abs(iA)) {
      iA = 0;
      i7 = Math.sign(i7);
    } else {
      i7 = 0;
      iA = Math.sign(iA);
    }
    if (i7 === iA) {
      i7 = 1;
    }
    while (true) {
      h2 += i7;
      h4 += iA;
      if (!bM.fA(h2, h4)) {
        break;
      }
      eZ = bM.fB(h2, h4);
      if (ac.i1(bM.ed(eZ))) {
        return eZ;
      }
    }
    return -1;
  }
}
function j0() {
  this.j3 = function (player) {
    var lT = lU(player);
    if (lT === -1) {
      return false;
    }
    var lV = bN.lW.get(lT);
    if (bN.kz.lX(player, lV)) {
      return false;
    }
    bO.g[0] = lV;
    return true;
  };
  function lU(player) {
    var lW = bN.lW.lY();
    var en = lW.length;
    var l5 = Math.min(en, 32);
    var hf = ay.jR(en);
    for (var aB = 0; aB < l5; aB++) {
      var lT = (aB + hf) % en;
      var lV = lW[lT];
      var iE = lV[0];
      var iF = lV[lV.length - 1];
      if (bN.kz.lZ(player, iE) && bN.kz.la(player, iF)) {
        return lT;
      }
      if (bN.kz.lZ(player, iF) && bN.kz.la(player, iE)) {
        lT = bN.lW.lb(iF, iE);
        if (lT >= 0) {
          return lT;
        }
        if (bN.lW.lc()) {
          return -1;
        }
        return bN.lW.ld(bN.lW.le(lV));
      }
    }
    return -1;
  }
}
function is() {
  this.lO = 0;
  this.dd = function () {
    this.lO = 0;
  };
  this.j3 = function () {
    if (this.lO) {
      return;
    }
    if (!lf()) {
      return;
    }
    lg();
  };
  function lf() {
    if (bf.k7() % 30 !== 7) {
      return false;
    }
    if (bA.g9.lh(80)) {
      ao.performance.lO = 1;
      return true;
    }
    return false;
  }
  function lg() {
    if (aD.hh) {
      li();
    }
    lj();
  }
  function li() {
    var ki = bh.kj();
    if (!bg.kX[ki]) {
      return;
    }
    bh.kB(ki);
    var g = bO.fR;
    var en = bO.fI[0];
    if (en === 0) {
      return;
    }
    var lk = Math.min(100 + (en - 1) * 10, 400);
    for (var aB = 0; aB < en; aB++) {
      aE.ke(g[aB], lk);
    }
  }
  function lj() {
    aE.ke(ll[0], 100);
  }
}
function im() {
  var lm = 0;
  var ln = 0;
  var lo = 300;
  var lp = 300;
  var lq = 0;
  this.lK = 0;
  this.eK = new Uint32Array(512);
  this.dd = function () {
    lm = 0;
    ln = 0;
    this.lK = 0;
    lq = 0;
  };
  this.j3 = function () {
    if (!lr()) {
      return;
    }
    if (lm >= lo) {
      ls();
      return;
    }
    lt();
  };
  function ls() {
    var lu = ao.il.lK;
    if (lu) {
      if (bf.k7() % 350 !== 1) {
        return;
      }
      if (lq !== lu) {
        lq = lu;
        return;
      }
      if (!bA.g9.jX(ll[0])) {
        return;
      }
    } else if (bf.k7() % 12 !== 8) {
      return;
    }
    if (bA.g9.lv()) {
      return;
    }
    ao.il.dd();
  }
  function lr() {
    var en = ao.il.lK;
    if (en === 0) {
      return true;
    }
    var eK = ao.il.eK;
    if (bf.k7() % 35 !== 6) {
      return en < eK.length;
    }
    for (var aB = en - 1; aB >= 0; aB--) {
      if (!ac.ee(eK[aB] << 2)) {
        en--;
        eK[aB] = eK[en];
      }
    }
    ao.il.lK = en;
    return en < eK.length;
  }
  function lt() {
    var i = bS.ey;
    var lw = i - 2;
    var en = lw * (bS.ez - 2);
    var lx = lo;
    var eK = ao.il.eK;
    var l5 = ao.il.lK;
    var ly = eK.length;
    var gM = Math.min(ln + lx * ((1 + ao.performance.lO * 19) * lp), en);
    var aB;
    for (aB = ln; aB < gM; aB += lx) {
      var eR = (aB % lw + (bL.du(aB, lw) + 1) * i + 1) * 4;
      if (ac.ee(eR)) {
        eK[l5] = eR >> 2;
        l5++;
        if (l5 === ly) {
          aB += lx;
          break;
        }
      }
    }
    ln = aB;
    if (ln >= en) {
      lm++;
      ln = lm;
    }
    ao.il.lK = l5;
  }
}
function j2() {
  this.j3 = function () {
    if (bf.k7() % 51 !== 45) {
      return;
    }
    lz();
  };
  function lz() {
    var en = bN.y.m0;
    var m1 = bN.y.m1;
    var m2 = bN.y.m2;
    var m3 = bN.y.m3;
    var m4 = bN.y.m4;
    var kQ = aE.kQ;
    var hW = aE.hW;
    for (var aB = 0; aB < en; aB++) {
      var m5 = m1[aB];
      if (m5 % 64 === 6) {
        continue;
      }
      var lV = m2[aB];
      var player = bN.kz.m6(lV[lV.length - 1]);
      if (player < 0 || !bA.g9.ko(player, m4[aB] >> 3)) {
        continue;
      }
      if (ay.jR(1000) >= kQ[hW[player]]) {
        continue;
      }
      if (!m7(aB, lV)) {
        continue;
      }
      var m8 = m3[aB];
      if (m5 >= 64 && bN.m9.mA(player, m8)) {
        continue;
      }
      mB(player, lV, m8, aB, m5);
    }
  }
  function m7(mC, lV) {
    var en = lV.length - 1;
    var mD = bN.y.mE[mC];
    var f3 = 0;
    for (var aB = mD + 1; aB < en; aB++) {
      f3 += bM.iD(lV[aB], lV[aB + 1]);
    }
    f3 += bM.iD(bM.iV(bN.y.mF[mC]), lV[mD + 1]);
    return f3 <= 60;
  }
  function mB(player, lV, m8, mC, m5) {
    if (!bN.mG.mH(player)) {
      return;
    }
    if (!bA.g9.mI(player, aE.kM[aE.hW[player]], 32, 0)) {
      return;
    }
    bN.y.m1[mC] = 64 + m5 % 64;
    bN.m9.jG(m8, bN.y.mJ);
    bO.g[0] = bN.lW.le(lV);
    bO.fP[1] = 6;
    bA.g9.mK(player);
    bN.y.mL(player);
  }
}
function mM() {
  aN.j3();
  af.j3();
  aW.mN();
  b0.y.j3();
}
function mO() {
  b1.j3();
  aG.j3();
  an.j3();
  ae.j3();
  b4.j3();
  aF.j3();
  ao.j3();
  bN.y.j3();
  al.mP();
  aV.j3();
  az.j3();
  bV.j3();
  af.j3();
  af.mQ();
  aW.j3();
  bP.j3();
  aU.j3();
  aP.j3();
  aN.j3();
  b5.j3();
  aR.j3();
  aw.j3();
  bd.j3();
  bh.j3();
  b0.y.j3();
  b0.mR.j3();
  t.j3();
  b9.j3();
  bf.j3();
}
function mS() {
  aH.j3();
  aX.j3();
  aQ.j3();
  av.j3();
  bC.j3();
  ax.mT();
}
function mU() {
  aV.mV(false);
  aP.mV();
  aW.mV(false);
  aU.mV();
  aR.mV();
  aw.mV();
  af.mV(false);
  bh.mW();
}
function mX() {
  if (af.mV(false)) {
    bf.dl = true;
  }
  b0.y.j3();
}
function c6() {
  var mY;
  var mZ;
  var ma;
  this.dd = function () {
    mY = 0;
    mZ = new Uint16Array(aD.ek);
    ma = new Uint8Array(aD.ek);
  };
  this.j3 = function () {
    for (var aB = mY - 1; aB >= 0; aB--) {
      if (ma[mZ[aB]] === 64) {
        mb(mZ[aB]);
      } else if (ma[mZ[aB]]-- === 0) {
        mb(mZ[aB]);
        fr(mZ[aB]);
      }
    }
    if (ag.gb[ll[0]] >= 160000) {
      mc(160000);
      if (ag.gb[ll[0]] >= 300000) {
        mc(300000);
      }
    }
    md();
  };
  function mc(me) {
    for (var aB = mY - 1; aB >= 0; aB--) {
      if (ma[mZ[aB]] === 0 && ag.gb[mZ[aB]] >= me) {
        fr(mZ[aB]);
      }
    }
  }
  function md() {
    if (!bA.g9.l8(aD.eX)) {
      return;
    }
    bd.mf[7] = Math.max(ag.gb[aD.eX], bd.mf[7]);
  }
  function mb(player) {
    if (ma[player] === 64) {
      ma[player] = 6;
    } else {
      var dt = ag.gb[player];
      if (dt < 1000) {
        ma[player] = 3;
      } else if (dt < 10000) {
        ma[player] = 2;
      } else if (dt < 60000) {
        ma[player] = 1;
      } else {
        ma[player] = 0;
      }
    }
  }
  this.gB = function (player) {
    var f6;
    var aB;
    for (aB = mY - 1; aB >= 0; aB--) {
      if (player === mZ[aB]) {
        mY--;
        for (f6 = aB; f6 < mY; f6++) {
          mZ[f6] = mZ[f6 + 1];
        }
        return;
      }
    }
  };
  this.jH = function (player, mg) {
    for (var aB = mY - 1; aB >= 0; aB--) {
      if (player === mZ[aB]) {
        return;
      }
    }
    mZ[mY++] = player;
    ma[player] = mg ? 2 : 64;
  };
}
function c7() {
  var size;
  var jy;
  this.dd = function () {
    size = aD.kW;
    jy = new Uint16Array(aD.ek);
    var kA = aD.kA;
    for (var aB = aD.kW - 1; aB >= 0; aB--) {
      jy[aB] = kA + aB;
    }
  };
  this.j3 = function () {
    ao.j1.j3();
    mh();
  };
  this.mi = function (gL) {
    jy[size++] = gL;
  };
  function mh() {
    for (var aB = size - 1; aB >= 0; aB--) {
      if (ag.mj[jy[aB]] === 0) {
        mk(aB);
        continue;
      }
      aE.j3(jy[aB]);
    }
  }
  function mk(f6) {
    size--;
    jy[f6] = jy[size];
  }
}
function c8() {
  var ml;
  var mm;
  var mn;
  var mo;
  var mp;
  var mq;
  var mr;
  var ms;
  var mt;
  var mu;
  var mv;
  var mw;
  var mx;
  var my = false;
  var mz = false;
  function n0(eF) {
    mw = bf.eM;
    mx = 33;
    mm = 0;
    mo = 0;
    mn = 0;
    mp = mx / eF;
    ml = 1 / (eF / mx / 4);
    mq = (h.i / 2 + iO) / hy;
    mr = (h.j / 2 + iP) / hy;
    ms = hy;
  }
  this.n1 = function () {
    return my;
  };
  this.n2 = function () {
    n0(1);
    this.n3(0, 0, bS.ey - 1, bS.ez - 1);
    if (!aD.hB && !aD.gw) {
      this.n4(aD.eX, 3000, true, 0.3);
    }
  };
  this.n5 = function (player, n6) {
    n7(bN.kz.n8(player, n6));
  };
  function n7(aB) {
    if (aB === -1) {
      return;
    }
    var eZ = bM.iV(bN.y.mF[aB]);
    var n9 = bM.ev(eZ) - 15;
    var nA = bM.ex(eZ) - 15;
    aH.n3(n9, nA, n9 + 29, nA + 29);
  }
  this.n4 = function (player, eF, nB, zoom) {
    if (aD.nC || my && !nB && mz) {
      return;
    }
    if (ag.gb[player] === 0) {
      n7(bN.kz.nD(player));
      return;
    }
    aS.nE = false;
    mz = nB;
    n0(eF);
    nF(player);
    nG(zoom, player);
    my = true;
    ar.nH();
  };
  this.nI = function (eF) {
    if (aD.gw || aD.nC) {
      return;
    }
    aS.nE = false;
    mz = false;
    n0(eF);
    nJ(0, 0, bS.ey - 1, bS.ez - 1);
    nK(7 / 8);
    my = true;
    ar.nH();
  };
  function nF(player) {
    mt = (ag.ie[player] + ag.ig[player] + 1) / 2;
    mu = (ag.ih[player] + ag.ii[player] + 1) / 2;
  }
  function nG(zoom, player) {
    var i7 = ag.ig[player] - ag.ie[player] + 1;
    var iA = ag.ii[player] - ag.ih[player] + 1;
    var f6 = h.i / i7;
    var f7 = h.j / iA;
    mv = f6 < f7 ? f6 : f7;
    var nL = zoom !== 0 ? zoom : i7 < 20 && iA < 20 ? 0.5 : 0.9;
    mv *= nL;
    nK(7 / 8);
  }
  function nK(eC) {
    if (Math.abs(Math.log(mv / ms)) < 0.125) {
      mv = eC * ms;
    }
  }
  function nJ(n9, nA, nM, nN) {
    mt = (n9 + nM + 1) / 2;
    mu = (nA + nN + 1) / 2;
    var i7 = nM - n9 + 1;
    var iA = nN - nA + 1;
    var f6 = h.i / i7;
    var f7 = h.j / iA;
    mv = (f6 < f7 ? f6 : f7) * 0.9;
  }
  this.n3 = function (n9, nA, nM, nN) {
    my = false;
    nJ(n9, nA, nM, nN);
    hy = mv;
    aS.nO(mt, h.i / 2);
    aS.nP(mu, h.j / 2);
    ba.nQ();
    bf.dl = true;
  };
  this.nR = function () {
    if (my && mz) {
      return false;
    }
    my = false;
    return true;
  };
  this.j3 = function () {
    if (my) {
      nS();
    }
  };
  function nS() {
    if (mm < 0.5) {
      if (mo < mp) {
        mo += mp * ml;
        mn = mm;
      }
    } else if (mm > 1 - mn) {
      mo -= mp * ml;
      mo = mo < mp * ml ? mp * ml : mo;
    }
    mw = mw >= bf.eM ? bf.eM - 1 : mw;
    var eq = bf.eM - mw;
    if (eq > 1000) {
      mm = 1;
    } else {
      mm += mo * eq / mx;
      mm = mm > 1 ? 1 : mm;
    }
    mw = bf.eM;
    var nT = hy;
    var nU = iO;
    var nV = iP;
    hy = ms * Math.pow(mv / ms, mm);
    var nW = hy / nT;
    var nX = ms * Math.pow(mv / ms, 1 - mm);
    var nY = 1 - (nX - ms) / (mv - ms);
    aS.nO(mq + nY * (mt - mq), h.i / 2);
    aS.nP(mr + nY * (mu - mr), h.j / 2);
    af.zoom(nW, (nU * nW - iO) / (1 - nW), (nV * nW - iP) / (1 - nW));
    ba.nQ();
    if (mm >= 1) {
      my = false;
      bb.nZ = true;
    }
    bf.dl = true;
  }
}
function c0() {
  var f8 = bA.color;
  this.na = f8.nb(0, 0, 0);
  this.nc = f8.nd(0, 0, 0, 0.7);
  this.ne = f8.nd(0, 0, 0, 0.5);
  this.nf = f8.nd(0, 0, 0, 0.85);
  this.ng = f8.nd(0, 0, 0, 0.75);
  this.nh = f8.nd(0, 0, 0, 0.6);
  this.ni = f8.nd(0, 0, 0, 0.35);
  this.nj = f8.nb(255, 255, 255);
  this.nk = f8.nd(255, 255, 255, 0.3);
  this.nl = f8.nd(255, 255, 255, 0.6);
  this.nm = f8.nd(255, 255, 255, 0.4);
  this.nn = f8.nd(255, 255, 255, 0.25);
  this.no = f8.nd(255, 255, 255, 0.85);
  this.np = f8.nd(255, 255, 255, 0.75);
  this.nq = f8.nd(255, 255, 255, 0.15);
  this.nr = f8.nd(255, 255, 255, 0.11);
  this.ns = f8.nb(128, 128, 128);
  this.nt = f8.nd(64, 64, 64, 0.75);
  this.nu = f8.nd(88, 88, 88, 0.83);
  this.nv = f8.nd(60, 60, 60, 0.85);
  this.nw = f8.nd(80, 60, 60, 0.85);
  this.nx = f8.nb(170, 170, 170);
  this.ny = f8.nb(200, 235, 245);
  this.nz = f8.nb(30, 255, 30);
  this.o0 = f8.nb(0, 200, 0);
  this.o1 = f8.nb(128, 255, 128);
  this.o2 = f8.nd(10, 65, 10, 0.75);
  this.o3 = f8.nd(0, 255, 0, 0.6);
  this.o4 = f8.nd(0, 255, 0, 0.5);
  this.o5 = f8.nd(0, 200, 0, 0.5);
  this.o6 = f8.nd(0, 100, 0, 0.75);
  this.o7 = f8.nd(0, 60, 0, 0.8);
  this.o8 = f8.nd(0, 255, 0, 0.3);
  this.o9 = f8.nd(0, 180, 0, 0.6);
  this.oA = f8.nd(0, 120, 0, 0.85);
  this.oB = f8.nb(0, 120, 0);
  this.oC = f8.nd(0, 70, 0, 0.85);
  this.oD = f8.nb(190, 230, 190);
  this.oE = f8.nb(0, 255, 0);
  this.oF = f8.nb(255, 120, 120);
  this.oG = f8.nb(255, 160, 160);
  this.oH = f8.nb(255, 70, 70);
  this.oI = f8.nb(230, 0, 0);
  this.oJ = f8.nd(220, 0, 0, 0.6);
  this.oK = f8.nd(255, 100, 100, 0.8);
  this.oL = f8.nd(100, 0, 0, 0.85);
  this.oM = f8.nd(60, 0, 0, 0.85);
  this.oN = f8.nd(200, 0, 0, 0.6);
  this.oO = f8.nd(120, 0, 0, 0.85);
  this.oP = f8.nb(255, 70, 10);
  this.oQ = f8.nb(230, 190, 190);
  this.oR = f8.nb(255, 0, 0);
  this.oS = f8.nb(255, 0, 255);
  this.oT = f8.nd(60, 0, 60, 0.85);
  this.oU = f8.nd(0, 60, 60, 0.85);
  this.oV = f8.nd(10, 60, 60, 0.9);
  this.oW = f8.nd(0, 96, 96, 0.75);
  this.oX = f8.nb(0, 255, 255);
  this.oY = f8.nb(160, 160, 255);
  this.oZ = f8.nd(0, 40, 90, 0.75);
  this.oa = f8.nd(0, 0, 255, 0.6);
  this.ob = f8.nb(200, 200, 255);
  this.oc = f8.nd(50, 50, 255, 0.83);
  this.od = f8.nb(255, 120, 100);
  this.oe = f8.nd(255, 255, 0, 0.5);
  this.og = f8.nd(255, 255, 150, 0.2);
  this.oh = f8.nb(255, 255, 0);
  this.oi = f8.nb(255, 255, 200);
  this.oj = f8.nd(200, 200, 0, 0.6);
  this.ok = f8.nd(140, 120, 0, 0.75);
  this.ol = f8.nd(180, 160, 40, 0.75);
  this.om = f8.nd(70, 50, 20, 0.85);
  this.on = f8.nd(30, 30, 0, 0.85);
  this.oo = f8.nd(60, 60, 0, 0.85);
  this.op = f8.nb(255, 255, 100);
  this.oq = f8.nd(255, 140, 0, 0.75);
  this.or = f8.nd(70, 40, 0, 0.85);
  this.os = f8.nb(220, 120, 0);
  this.ot = f8.nd(255, 200, 80, 0.85);
  this.ou = f8.nb(255, 150, 120);
  this.ov = f8.nd(0, 0, 0, 0);
  this.ow = f8.nd(255, 255, 255, 0);
  this.ox = f8.nd(254, 254, 254, 0);
  f8 = null;
}
function cy() {
  this.hD = new oy();
  this.g9 = new oz();
  this.p0 = new p1();
  this.p2 = new p3();
  this.kC = new p4();
}
function oy() {
  this.hE = function (eZ) {
    if (aD.kU) {
      b8.p0.hE(aD.eX, eZ);
    } else {
      b0.p5.p6(eZ);
    }
  };
  this.hK = function (iN, jJ) {
    if (aD.kU) {
      b8.p0.hK(aD.eX, iN, jJ);
    } else {
      b0.p5.p7(iN, jJ);
    }
  };
  this.p8 = function (iN, p9) {
    if (aD.kU) {
      b8.p0.pA(aD.eX, iN, p9);
    } else {
      b0.p5.pB(iN, p9);
    }
  };
  this.hP = function (iN, eZ) {
    var pC = (eZ << 3) + bO.fP[6];
    if (aD.kU) {
      b8.p0.hP(aD.eX, iN, pC);
    } else {
      if (!bN.mG.mH(aD.eX)) {
        return;
      }
      b0.p5.pD(iN, pC);
    }
  };
  this.hS = function (iN) {
    if (iN === 849) {
      iN = 850;
    }
    var n6 = bO.fP[3];
    if (aD.kU) {
      b8.p0.hS(aD.eX, iN, n6);
    } else {
      if (!bN.hQ.pE(aD.eX, n6)) {
        return;
      }
      b0.p5.pF(iN, n6);
    }
  };
  this.pG = function (n6) {
    if (aD.kU) {
      b8.p0.pG(aD.eX, n6);
    } else {
      b0.p5.pF(849, n6);
    }
  };
  this.pH = function (jJ) {
    if (aD.kU) {
      b8.p0.pH(aD.eX, jJ);
    } else {
      b0.p5.pI(jJ);
    }
  };
  this.pJ = function (pK) {
    if (aD.kU) {
      b8.p0.pL(aD.eX, pK);
    } else {
      b0.p5.pM(pK);
    }
  };
  this.hb = function (pN) {
    if (aD.kU) {
      b8.p0.hb(aD.eX, pN);
    } else {
      b0.p5.pO(pN);
    }
  };
  this.pP = function () {
    if (aD.kU) {
      b8.p0.pP(aD.eX);
    } else {
      b0.p5.pQ();
    }
  };
  this.hY = function () {
    if (aD.kU) {
      b8.p0.hY(aD.eX);
    } else {
      b0.p5.pI(513);
    }
  };
  this.hG = function (iN, eZ, jJ) {
    if (aD.kU) {
      b8.p0.hG(aD.eX, iN, eZ, jJ);
    } else {
      b0.p5.pR(iN, eZ, jJ);
    }
  };
}
function p4() {
  this.kD = function (player, p9, hW) {
    if (!bA.g9.pS(player, hW, p9)) {
      return;
    }
    ae.p8(player, p9);
    if (!bA.g9.jX(p9) && ao.iv.jm[p9]) {
      ao.iv.jm[p9]--;
    }
  };
  this.pT = function (player, p9, hW) {
    if (!bA.g9.pU(hW, p9)) {
      bd.gD(player, hW, 12);
      return;
    }
    if (!an.jG(p9, bO.fK[0])) {
      return;
    }
    bq.pV(player, p9, bO.fK[0], 1);
    bA.g9.gC(p9, bO.fK[0]);
    bd.pW(player, p9);
    af.pX(p9, bO.fK[0]);
  };
}
function oz() {
  this.pY = function (pK, player) {
    aN.pJ(aD.eX, player, pK);
    b0.p5.pZ(pK, player);
  };
  this.pa = function (player) {
    aN.pb(player, 0);
    b0.p5.pc(player);
  };
  this.pd = function (pe, player) {
    aN.pf(pe, player);
    b0.p5.pg(pe, player);
  };
  this.ph = function () {
    if (aD.kU || aD.gw) {
      return;
    }
    b0.pi.ph();
  };
}
function p3() {
  this.j3 = function (aC) {
    var id;
    var fW;
    var nR;
    bH.dd(aC);
    bH.e8 += 2;
    nR = bH.size * 8;
    while (bH.e8 + 8 <= nR) {
      id = bH.pj(4);
      fW = bH.pj(9);
      if (id === 0) {
        this.pk(id, fW, bH.pj(22));
      } else if (id === 1) {
        this.pk(id, fW, bH.pj(10), bH.pj(10));
      } else if (id === 2) {
        this.pk(id, fW, bH.pj(10), bH.pj(9));
      } else if (id === 3) {
        this.pk(id, fW, bH.pj(10), bH.pj(27));
      } else if (id === 4) {
        this.pk(id, fW, bH.pj(10), bH.pj(16));
      } else if (id === 5) {
        this.pk(id, fW, bH.pj(10));
      } else if (id === 6) {
        this.pk(id, fW, bH.pj(10));
      } else if (id === 7) {
        this.pk(id, fW, bH.pj(1));
      } else if (id === 10) {
        this.pk(id, fW, bH.pj(20), bH.pj(22));
      } else {
        this.pk(id, fW);
      }
    }
  };
  this.pl = [];
  this.pm = function () {
    var pn = 0;
    var po = 0;
    var pp = 0;
    var pq = 0;
    var pr = 0;
    var ps = 0;
    var pt = 0;
    var aB;
    var en = 512;
    for (aB = 0; aB < en; aB++) {
      po += ag.mj[aB];
      pp += ag.gb[aB];
      pq += ag.gp[aB];
      pr += bN.y.kE[aB];
    }
    ps += bN.y.m0;
    pt += al.kg;
    pn = po + pp + pr + ps + pt;
    pn = pq % 1073741824 * 4 + pn % 4;
    this.pl.push(pn);
  };
  this.pk = function (id, fW, fY, fa) {
    if (id === 0) {
      b8.p0.hE(fW, fY);
    } else if (id === 1) {
      b8.p0.hK(fW, fY, fa);
    } else if (id === 2) {
      b8.p0.pA(fW, fY, fa);
    } else if (id === 3) {
      b8.p0.hP(fW, fY, fa);
    } else if (id === 4) {
      b8.p0.hS(fW, fY, fa);
    } else if (id === 5) {
      b8.p0.pH(fW, fY);
    } else if (id === 6) {
      b8.p0.pL(fW, fY);
    } else if (id === 7) {
      b8.p0.hb(fW, fY);
    } else if (id === 8) {
      b8.p0.pP(fW);
    } else if (id === 9) {
      b8.p0.pu(fW);
    } else if (id === 10) {
      b8.p0.hG(fW, fY >> 10, fa, fY % 1024);
    }
  };
}
function p1() {
  this.hE = function (player, eZ) {
    if (!bA.g9.gy(0)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    if (!bM.iS(eZ)) {
      return;
    }
    b9.pv.pw(0, player, eZ);
    aD.px.jG(player, eZ);
  };
  this.hK = function (player, iN, jJ) {
    if (!bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    if (!bA.g9.py(player, jJ)) {
      return;
    }
    if (!bA.g9.mI(player, iN, 12, 0)) {
      return;
    }
    if (!bA.g9.pz(player, jJ)) {
      return;
    }
    var j9 = ad.jV(player, bO.ej[0]);
    if (!j9 && !ad.jo(player)) {
      return;
    }
    ag.q0[player]++;
    b9.pv.pw(1, player, iN, bO.ej[0]);
    if (!ao.it.j8(player, j9)) {
      return;
    }
    bA.g9.mK(player);
    bd.q1(player, iN);
    ao.it.jE(player);
  };
  this.pA = function (player, iN, p9) {
    if (!bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    if (!aD.hh) {
      return;
    }
    if (!bA.g9.py(player, p9)) {
      return;
    }
    if (!bA.g9.q2(player, p9)) {
      return;
    }
    if (!bA.g9.pS(player, bA.g9.iM(player, iN), p9)) {
      return;
    }
    if (!an.jG(p9, bO.fK[0])) {
      return;
    }
    b9.pv.pw(2, player, iN, p9);
    ae.p8(player, p9);
  };
  this.hP = function (player, iN, pC) {
    bO.fP[1] = pC & 7;
    var eZ = pC >> 3;
    if (!bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    if (!bM.iS(eZ)) {
      return;
    }
    if (!bN.mG.mH(player)) {
      return;
    }
    if (!bN.mG.q3(eZ)) {
      return;
    }
    if (!bA.g9.mI(player, iN, 32, 0)) {
      return;
    }
    if (!bN.kx.q4(player, eZ, 1)) {
      return;
    }
    bd.q5(player);
    b9.pv.pw(3, player, iN, pC);
    bA.g9.mK(player);
    bl.q6.hP(player);
    bN.y.mL(player);
  };
  this.hS = function (player, iN, n6) {
    if (iN === 849) {
      this.pG(player, n6);
      return;
    }
    if (!bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    if (!bA.g9.mI(player, iN, 32, 0)) {
      return;
    }
    if (!bN.hQ.q7(player, n6)) {
      return;
    }
    bd.q5(player);
    b9.pv.pw(4, player, iN, n6);
    bA.g9.mK(player);
    bl.q6.hS(player);
    bN.y.mL(player);
  };
  this.pG = function (player, n6) {
    if (!bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    if (!bN.q8.j3(player, n6)) {
      return;
    }
    b9.pv.pw(4, player, 849, n6);
  };
  this.pH = function (player, jJ) {
    if (jJ === 513) {
      this.hY(player);
      return;
    }
    if (!bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    jJ = Math.min(jJ, aD.ek);
    if (!ad.jV(player, jJ)) {
      return;
    }
    b9.pv.pw(5, player, jJ);
    ad.q9(player, jJ);
  };
  this.pL = function (player, pK) {
    if (!bA.g9.gy(1) && !bA.g9.gy(2)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    pK = bL.hv(pK, 0, 1023);
    b9.pv.pw(6, player, pK);
    af.qA(player, 0, pK);
  };
  this.hb = function (player, pN) {
    if (!aw.ha(player)) {
      return;
    }
    b9.pv.pw(7, player, pN);
    aw.qB(player, pN);
  };
  this.pP = function (player) {
    if (!bA.g9.gy(0) && !bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    if (!aM.qC(player)) {
      return;
    }
    b9.pv.pw(8, player);
    bQ.pP(player);
  };
  this.pu = function (player) {
    b9.pv.pw(9, player);
    bQ.pu(player);
  };
  this.hY = function (player) {
    if (!aw.hc(player)) {
      return;
    }
    b9.pv.pw(5, player, 513);
    aw.hY(player);
  };
  this.hG = function (player, iN, eZ, jJ) {
    if (!bA.g9.gy(1)) {
      return;
    }
    if (!bA.g9.gz(player)) {
      return;
    }
    if (!bA.g9.py(player, jJ)) {
      return;
    }
    if (!bA.g9.pz(player, jJ)) {
      return;
    }
    if (!bM.iS(eZ)) {
      return;
    }
    if (!am.eO.eh(player, eZ)) {
      return;
    }
    if (!ad.jV(player, bO.ej[0]) && !ad.jo(player)) {
      return;
    }
    b9.pv.pw(10, player, (iN << 10) + bO.ej[0], eZ);
    var hW = bA.g9.lM(player, iN);
    ag.gF[player].push(bO.eo[0]);
    ad.jG(player, hW, bO.ej[0]);
    aF.jH(player, true);
    bd.qD(player);
  };
}
function qE() {
  this.qF = [];
  this.qG = document.createElement("div");
  function dd(qG) {
    qG.style.position = "absolute";
    qG.style.height = "auto";
    qG.style.padding = "0.5em";
  }
  this.qH = function (qI, marginTop) {
    var title = document.createElement("h2");
    title.textContent = qI;
    title.style.margin = "0";
    title.style.marginBottom = "0.6em";
    if (marginTop) {
      title.style.marginTop = marginTop;
    }
    title.style.fontSize = "1.4em";
    title.style.overflowWrap = "break-word";
    this.qG.appendChild(title);
    return title;
  };
  this.qJ = function (qI, marginBottom) {
    var qK = document.createElement("p");
    qK.textContent = qI;
    qK.style.fontSize = "0.75em";
    qK.style.lineHeight = "1.2em";
    qK.style.marginBottom = marginBottom || "0";
    this.qG.appendChild(qK);
    return qK;
  };
  this.qL = function (qI) {
    var qM = document.createElement("p");
    qM.textContent = qI;
    qM.style.fontSize = "1em";
    qM.style.marginBottom = "0";
    qM.style.whiteSpace = "pre-wrap";
    qM.style.overflowWrap = "break-word";
    this.qG.appendChild(qM);
    return qM;
  };
  this.qN = function (qO, fontSize) {
    var qG = document.createElement("div");
    qG.innerHTML = qO;
    qG.style.fontSize = fontSize || "1em";
    qG.style.lineHeight = "1.2em";
    this.qG.appendChild(qG);
    return qG;
  };
  this.qP = function (qQ) {
    var aB;
    var qR = qQ.qR;
    var en = qR.length;
    for (aB = 0; aB < en; aB++) {
      this.qG.appendChild(qR[aB]);
    }
  };
  this.qS = function (qT) {
    this.qF.push(qT);
    this.qG.appendChild(qT.e);
    return qT;
  };
  this.resize = function () {
    var en = this.qF.length;
    for (var aB = 0; aB < en; aB++) {
      if (this.qF[aB].resize) {
        this.qF[aB].resize();
      }
    }
  };
  dd(this.qG);
}
function qU(qV, qW) {
  var qG = document.createElement("div");
  this.qX = qG;
  this.qY = qW;
  function dd() {
    qG.style.width = "100%";
    qG.style.maxWidth = "100%";
    qV.style.lineHeight = "1.5em";
    qV.style.overflowX = "hidden";
    qV.style.overflowY = "auto";
    for (var aB = 0; aB < qW.length; aB++) {
      qG.appendChild(qW[aB].qG);
    }
    qV.appendChild(qG);
  }
  function qZ(qa) {
    var i = bA.qb.qc(0.6) * 0.25 * h.hx;
    return Math.max(Math.floor(qa / i), 1);
  }
  this.resize = function () {
    qd();
    qe();
    qe();
  };
  function qd() {
    var aB;
    for (aB = 0; aB < qW.length; aB++) {
      qW[aB].resize();
    }
  }
  function qe() {
    var aB;
    var qf;
    var j;
    var gM;
    var eq;
    var qa = h.k * qG.offsetWidth;
    var qg = new Float64Array(qZ(qa));
    var qh = bc.qh;
    var qi = (qa - (qg.length + 1) * bc.gap) / (qg.length * h.k);
    qg.fill(qh);
    for (aB = 0; aB < qW.length; aB++) {
      eq = qW[aB].qG;
      qf = eq.style;
      j = bA.qj.min(qg);
      gM = qg.indexOf(j);
      qf.top = bA.qb.qk(j);
      qf.left = bA.qb.qk(qh + gM * (qi + qh));
      qf.width = bA.qb.qk(qi);
      bA.qb.ql(eq, 5);
      qg[gM] += eq.offsetHeight + qh * 3;
    }
    qG.style.height = bA.qb.qk(bA.qj.max(qg) - qh * 2);
  }
  dd();
}
function w(qm, qn, qo, qp, qq) {
  var qr = document.createElement("button");
  this.button = qr;
  this.qs = qn;
  this.qt = qo;
  function qu(self) {
    qr.innerHTML = qm;
    qr.style.color = qq ? bB.oh : bB.nj;
    qr.style.userSelect = "none";
    qr.style.outline = "none";
    qr.style.overflowWrap = "break-word";
    self.qv(qo);
    qr.style.border = "none";
    qr.style.font = "inherit";
    self.qw(0);
    qr.style.padding = "0em 0.3em";
    qr.onclick = qx;
    qr.addEventListener("mouseover", qy);
    qr.addEventListener("mouseout", qz);
    qr.addEventListener("focus", qy);
    qr.addEventListener("blur", r0);
  }
  this.qw = function (r1) {
    var r2 = 1.1 - Math.min(qm.length * 0.01, 0.6) + r1 * 0.2;
    qr.style.fontSize = r2.toFixed(1) + "em";
  };
  this.qv = function (f8) {
    if (!f8) {
      qp = 0;
      f8 = bB.nf;
    } else if (f8 === 1) {
      f8 = bB.nv;
    } else if (f8 === 2) {
      qp = 1;
      f8 = bB.nv;
    }
    this.qt = qo = f8;
    qr.style.backgroundColor = f8;
  };
  function qy() {
    if (bJ.r3()) {
      return;
    }
    var r4 = bA.color.r5(qo);
    if (qp !== false) {
      if (r4[0] > 0 && r4[0] < 255 && r4[0] === r4[1] && r4[0] === r4[2]) {
        return;
      }
    }
    qr.style.backgroundColor = bA.color.r6(qo, r4[3] && r4[3] < 120 ? 150 : 50);
  }
  function qx() {
    if (qp) {
      var r4 = bA.color.r5(qo);
      if (r4[0] === r4[1] && r4[0] === r4[2]) {
        return;
      }
    }
    if (qn) {
      var r7 = qn(this);
      if (!r7) {
        r8(this);
      } else if (r7 === 2) {
        qy();
      }
    }
  }
  function r0() {
    this.style.backgroundColor = qo;
  }
  function qz() {
    r8(this);
  }
  function r8(eq) {
    eq.style.backgroundColor = qo;
    eq.blur();
  }
  qu(this);
}
function r9(rA, qV) {
  var qG;
  function dd() {
    qG = document.createElement("div");
    qG.style.display = "grid";
    qG.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))";
    qG.style.overflowY = "auto";
    qG.style.gridAutoRows = "5.3em";
    qG.style.maxHeight = "100%";
    rB();
  }
  function rB() {
    for (var aB = 0; aB < rA.length; aB++) {
      rA[aB].qw(1);
      qG.appendChild(rA[aB].button);
    }
    qV.appendChild(qG);
  }
  this.resize = function () {
    var aB;
    for (aB = 0; aB < rA.length; aB++) {
      bA.qb.ql(rA[aB].button);
    }
    qG.style.gap = qG.style.padding = bA.qb.qk(bc.qh);
  };
  dd();
}
function rC(rD, rE, rF) {
  this.eu = 0;
  this.ew = 0;
  this.i = 0;
  this.j = 0;
  this.resize = function () {
    this.j = Math.min(bA.qb.qc(rF || 0.5) * rD[1] * h.hx, h.j - bc.gap * 2);
    this.i = Math.min(this.j * (rD[0] / rD[1]), h.i - bc.gap * 2);
    this.j = rD[1] * this.i / rD[0];
    this.eu = bc.gap + rE[0] * (h.i - this.i - bc.gap * 2);
    this.ew = bc.gap + rE[1] * (h.j - this.j - bc.gap * 2);
  };
  this.rG = function () {
    return this.eu + this.i * 0.5;
  };
}
function rH(rI, rJ) {
  var rK = document.createElement("div");
  var rL = document.createElement("div");
  var rM = document.createElement("div");
  var rN = null;
  this.rO = new rP({
    value: "",
    e8: -1
  }, 0, rQ, rR);
  var rS;
  var rT = 0;
  var rU = 1;
  var rV = 0;
  var rW = 1048575;
  function qu(self) {
    self.rO.e.rX = 127;
    rK.style.position = "absolute";
    rK.style.left = "0";
    rK.style.width = "100%";
    rK.style.overflowX = "hidden";
    rK.style.overflowY = "auto";
    rK.style.font = "inherit";
    rK.style.backgroundColor = bB.nh;
    rK.addEventListener("scroll", function () {
      rV = rK.scrollTop;
      if (rV < rK.scrollHeight - rK.clientHeight - 2) {
        rU = 0;
      } else {
        rU = 1;
      }
    });
    rL.style.font = "inherit";
    rM.style.position = "absolute";
    rM.style.left = "0";
    rM.style.width = "100%";
    self.rO.e.setAttribute("placeholder", L(13));
    self.rO.e.style.position = "absolute";
    self.rO.e.style.top = "0";
    self.rO.e.style.left = "0";
    self.rO.e.style.height = "100%";
    self.rO.e.style.backgroundColor = bB.ne;
    self.rO.e.style.textAlign = "center";
    rS = new w(L(14), rQ);
    rS.button.top = "0";
    rS.button.style.position = "absolute";
    rS.button.style.height = "100%";
    rS.qv(bB.ow);
    rN = new rY("127", rS.button, 1, 1);
    rK.appendChild(rL);
    rM.appendChild(self.rO.e);
    rM.appendChild(rS.button);
  }
  function rQ() {
    rI();
    rN.rZ.textContent = 127;
  }
  function rR(e) {
    e.target.value = bA.ra.rb(e.target.value);
    rN.rZ.textContent = 127 - e.target.value.length;
  }
  this.rc = function (rd) {
    rW = 1048575;
    rL.textContent = "";
    if (!rd) {
      this.mW();
    }
  };
  this.mW = function () {
    var re = bn.y.rf[0];
    var rg = bn.y.rh[re];
    var ri = rg.ri;
    var en = ri.length;
    var jQ = rW === 1048575 ? 0 : en - (rg.rj - rW + 1048575) % 1048575;
    rW = rg.rj;
    jQ = Math.max(jQ, 0);
    if (jQ >= en) {
      return;
    }
    var rk = document.createDocumentFragment();
    for (var aB = jQ; aB < en; aB++) {
      rl(rk, bn.kz.rm(ri[aB], bn.kz.rn(ri[aB])));
    }
    rL.appendChild(rk);
    ro();
  };
  this.rp = function (r) {
    var rk = document.createDocumentFragment();
    rl(rk, r);
    rL.appendChild(rk);
    ro();
  };
  function rl(rk, qT) {
    if (!qT) {
      return;
    }
    qT.rq = 1;
    rk.appendChild(bn.rr.transform(qT));
  }
  function ro(bu) {
    if (rU) {
      rK.scrollTop = rK.scrollHeight;
    } else if (bu) {
      rK.scrollTop = rV;
    }
  }
  this.show = function (qV) {
    qV.appendChild(rK);
    qV.appendChild(rM);
    this.resize(qV);
  };
  this.rs = function (qV) {
    t.removeChild(qV, rK);
    t.removeChild(qV, rM);
  };
  this.resize = function (qV) {
    rT = qV ? qV.offsetHeight : rT;
    var rt = bA.qb.ru(0.04, 0.75);
    var rv = Math.max(rt, rT - rt);
    var rw = h.i / h.k;
    var rx = rw * 0.7;
    var ry = bA.qb.qk(rT - rt - rv);
    rM.style.height = bA.qb.qk(rt);
    rK.style.height = bA.qb.qk(rv);
    if (h.j > h.i || a0.a1.hw()) {
      rM.style.top = ry;
      rK.style.top = bA.qb.qk(rT - rv);
      bA.qb.ql(rK, 8);
    } else {
      rK.style.top = ry;
      rM.style.top = bA.qb.qk(rT - rt);
      bA.qb.ql(rK, 2);
    }
    this.rO.e.style.width = bA.qb.qk(rx);
    this.rO.e.style.fontSize = rS.button.style.fontSize = bA.qb.qk(rt * 0.5);
    bA.qb.ql(this.rO.e, 6);
    rS.button.style.left = bA.qb.qk(rx);
    rS.button.style.width = bA.qb.qk(rw - rx);
    var rz = rt * 0.385;
    if (a0.a1.hw()) {
      rz *= 0.8 - (h.i > h.j) * 0.12;
    }
    rL.style.marginLeft = rL.style.marginRight = bA.qb.qk(rz * 0.5);
    rL.style.fontSize = bA.qb.qk(rz);
    ro(1);
  };
  qu(this);
}
function s0(s1, qm, s2) {
  qm = qm || L(15);
  this.e = document.createElement("p");
  function dd(e) {
    e.textContent = (s1.value ? "🟩 " : "⬜ ") + qm;
    e.style.margin = "0";
    e.style.marginBottom = "0.5em";
    e.style.cursor = "pointer";
    e.addEventListener("click", click);
  }
  function click() {
    var value = 1 - s1.value;
    this.textContent = (value ? "🟩 " : "⬜ ") + qm;
    if (s1.e8 !== undefined) {
      bj.s3.s4(s1.e8, value);
    } else {
      s1.value = value;
    }
    if (s2) {
      s2(value);
    }
  }
  dd(this.e);
}
function s5(qV, qO) {
  var qG = document.createElement("div");
  this.qX = qG;
  function dd() {
    qV.style.overflowX = "hidden";
    qV.style.overflowY = "auto";
    qG.innerHTML = qO;
    qV.appendChild(qG);
  }
  this.resize = function () {
    qG.style.padding = bA.qb.qk(bc.qh);
    qG.style.lineHeight = bA.qb.qk(bA.qb.ru(0.035));
  };
  dd();
}
function s6(s7) {
  var qG = document.createElement("div");
  this.e = qG;
  this.s8 = s7;
  function dd() {
    var aB;
    var en = s7.length;
    qG.style.width = "100%";
    qG.style.height = "2.7em";
    qG.style.marginTop = "0.6em";
    qG.style.border = "inherit";
    for (aB = 0; aB < en; aB++) {
      s7[aB].style.verticalAlign = "top";
      s7[aB].style.width = (100 / en).toFixed(2) + "%";
      s7[aB].style.height = "100%";
      s7[aB].style.fontSize = "0.75em";
      qG.appendChild(s7[aB]);
    }
  }
  this.resize = function () {
    var aB;
    var en = s7.length;
    for (aB = 1; aB < en; aB++) {
      bA.qb.ql(s7[aB], 4);
    }
  };
  dd();
}
function s9(sA, qo, sB) {
  this.qG = document.createElement("div");
  this.rA = sA;
  var sC = 0;
  function qu(sD) {
    sD.qG.style.height = sD.qG.style.maxHeight = "100%";
    for (var aB = 0; aB < sA.length; aB++) {
      sA[aB].qv(qo);
      sA[aB].button.style.height = "100%";
      sA[aB].button.style.padding = "0.0em 0.9em";
      sD.qG.appendChild(sA[aB].button);
    }
  }
  this.resize = function (qV, sE) {
    var en = sA.length;
    if (!sB) {
      for (var aB = 1; aB < en; aB++) {
        bA.qb.ql(sA[aB].button, 4);
      }
    }
    var sF = 0;
    for (aB = 0; aB < en; aB++) {
      sF += sA[aB].button.offsetWidth;
    }
    if (qV) {
      sC = qV.offsetWidth;
    }
    if (sE && sF < sC) {
      for (aB = 0; aB < en; aB++) {
        sA[aB].button.style.width = (sA[aB].button.offsetWidth * 100 / sF).toFixed(2) + "%";
      }
    } else {
      for (aB = 0; aB < en; aB++) {
        sA[aB].button.style.width = "auto";
      }
    }
    if (!sE) {
      this.resize(qV, 1);
    }
  };
  qu(this);
}
function sG() {
  this.e = document.createElement("hr");
  function qu(e) {
    e.style.marginBottom = e.style.marginTop = "0.65em";
    e.style.marginLeft = e.style.marginRight = "-4%";
    e.style.border = "none";
  }
  this.resize = function () {
    bA.qb.ql(this.e, 8, bB.ns);
  };
  qu(this.e);
}
function sH() {
  var sI = document.createElement("div");
  var sJ = 0;
  var sK = 0;
  var sL;
  var sM;
  function qu() {
    sI.style.position = "absolute";
    sI.style.backgroundColor = bB.nf;
    sI.style.color = bB.nj;
    sI.style.pointerEvents = "none";
    sI.style.zIndex = "5";
    sI.style.maxWidth = "100%";
  }
  this.show = function (eu, ew, qI, sN, sO) {
    if (sJ) {
      if (sN) {
        this.rs();
      } else {
        return;
      }
    }
    if (eu === ew && eu === -1) {
      eu = sL;
      ew = sM;
    } else {
      sL = eu;
      sM = ew;
    }
    if (!sO) {
      sK = sN;
    }
    sJ = 1;
    var sP = h.i / h.k;
    sI.style.whiteSpace = "pre";
    sI.textContent = qI;
    bA.qb.ql(sI, 5);
    sI.style.font = bA.qb.sQ(0, bA.qb.ru(0.015));
    sI.style.padding = "0.3em 0.6em";
    sI.style.left = eu + "px";
    sI.style.top = "0px";
    document.body.appendChild(sI);
    var jP = eu + sI.offsetWidth - sP;
    if (jP > 0) {
      var sR = eu - jP;
      sI.style.left = sR + "px";
      if (sR < 5) {
        sI.style.whiteSpace = "pre-wrap";
      }
    }
    sI.style.top = ew - sI.offsetHeight + sK * bc.sS + "px";
  };
  this.rs = function (sT) {
    if (!sJ) {
      return 1;
    }
    if (sT && sK) {
      return 0;
    }
    sJ = 0;
    t.removeChild(document.body, sI);
    return 1;
  };
  qu();
}
function rP(sU, type, sV, sW) {
  this.e = document.createElement("input");
  function dd(e) {
    e.type = type ? "number" : "text";
    e.id = "input" + t.y.sX++;
    e.value = sU.value;
    e.style.width = "100%";
    e.style.userSelect = "none";
    e.style.outline = "none";
    e.style.resize = "none";
    e.style.border = "inherit";
    e.style.font = "inherit";
    e.style.color = bB.nj;
    e.style.backgroundColor = bB.nc;
    e.style.fontSize = "1em";
    e.style.padding = "0.1em 0.2em";
    e.addEventListener("focus", function () {
      h.sY++;
    });
    e.addEventListener("blur", function () {
      h.sY--;
      if (sU.e8 !== -1) {
        bj.s3.s4(sU.e8, e.value);
      }
    });
    e.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        if (sU.e8 !== -1) {
          bj.s3.s4(sU.e8, e.value);
        }
        if (sV) {
          sV();
        } else {
          e.blur();
        }
      }
    });
    if (sW) {
      e.addEventListener("input", function (qT) {
        sW(qT);
      });
    }
  }
  dd(this.e);
}
function sZ(qV, data) {
  var en = data.sa.length;
  var sb = document.createElement("div");
  var sc = document.createElement("div");
  var sd = document.createElement("div");
  var se = new Array(en);
  var qW = new Array(en);
  var sf = new Array(data.sg.length);
  var sh = bA.color.nd(70, 70, 0, 0.35);
  function dd() {
    qV.style.display = "flex";
    qV.style.flexDirection = "column";
    sc.style.overflowX = "hidden";
    sc.style.overflowY = "auto";
    sc.addEventListener("scroll", function () {
      this.si = this.scrollTop;
    });
    sj();
    rB();
  }
  function sj() {
    var eq;
    var aB;
    var sa = data.sa;
    var l5 = en ? sa[0].length : 0;
    for (aB = 0; aB < en; aB++) {
      se[aB] = document.createElement("div");
      se[aB].style.backgroundColor = sk(aB);
      se[aB].style.width = "100%";
      se[aB].style.display = "flex";
      qW[aB] = new Array(l5);
      for (var f6 = 0; f6 < l5; f6++) {
        qW[aB][f6] = eq = document.createElement("div");
        eq.style.display = "flex";
        eq.style.justifyContent = "center";
        eq.style.wordBreak = "break-all";
        eq.style.padding = "0.4em 0em";
        eq.style.width = data.sl[f6] + "%";
        eq.innerHTML = sa[aB][f6].fF;
        if (sa[aB][f6].dt === 1) {
          eq.name = "" + aB;
          eq.style.color = bB.oh;
          eq.style.backgroundColor = sh;
          eq.addEventListener("mouseover", r6);
          eq.addEventListener("mouseout", sm);
          sn(eq, sa[aB][f6].so, sa[aB][f6].sp);
        }
        se[aB].appendChild(eq);
      }
    }
    sb.style.display = "flex";
    sb.style.backgroundColor = bA.color.nd(0, 120, 0, 0.35);
    for (aB = 0; aB < sf.length; aB++) {
      sf[aB] = eq = document.createElement("div");
      eq.style.display = "flex";
      eq.style.justifyContent = "center";
      eq.style.wordBreak = "break-all";
      eq.style.padding = "0.4em 0em";
      eq.style.width = data.sl[aB] + "%";
      eq.innerHTML = data.sg[aB];
      sb.appendChild(eq);
    }
  }
  function sn(eq, so, sp) {
    if (sp === 2147483647) {
      return;
    }
    eq.addEventListener("click", function () {
      bD.a7(30);
      bD.a8(30, so);
      bH.dd(bD.aC);
      this.style.backgroundColor = sh;
      t.u(8, t.sq, new sr(25, {
        ss: 0,
        so: bF.st.su(bF.st.sv(5)),
        sp: sp
      }));
    });
  }
  function r6() {
    this.style.backgroundColor = bA.color.r6(sh, 160);
  }
  function sm() {
    this.style.backgroundColor = sh;
  }
  function rB() {
    for (var aB = 0; aB < en; aB++) {
      sd.appendChild(se[aB]);
    }
    sc.appendChild(sd);
    qV.appendChild(sb);
    qV.appendChild(sc);
  }
  function sk(aB) {
    if (aB % 2 === 1) {
      return bA.color.nd(130, 130, 130, 0.35);
    } else {
      return bB.ni;
    }
  }
  this.resize = function () {
    qe();
    qe();
  };
  function qe() {
    var aB;
    var f6;
    qV.style.font = bA.qb.sQ(0, bA.qb.sw(0.026, 0.5, 0.03));
    for (aB = 1; aB < sf.length; aB++) {
      bA.qb.ql(sf[aB], 4);
    }
    bA.qb.ql(sb, 2);
    if (!en) {
      return;
    }
    var sx = sb.offsetWidth;
    var sy = sd.offsetWidth;
    var hF;
    for (aB = 0; aB < sf.length; aB++) {
      hF = data.sl[aB] * 0.01 * sy;
      sf[aB].style.width = (hF * 100 / sx).toFixed(2) + "%";
    }
    var l5 = data.sa[0].length;
    for (aB = 0; aB < en; aB++) {
      bA.qb.ql(se[aB], 2);
      for (f6 = 1; f6 < l5; f6++) {
        bA.qb.ql(qW[aB][f6], 4);
      }
    }
    if (sc.si) {
      sc.scrollTop = sc.si;
    }
  }
  dd();
}
function sz() {
  var t0 = document.createElement("div");
  var t1 = document.createElement("div");
  var t2 = document.createElement("div");
  var sd = document.createElement("div");
  var rA = [];
  var t3;
  var t4;
  var e3 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)];
  var t5 = [1, 2, 3, 0, 9, 10, 11];
  function dd() {
    t0.style.position = "absolute";
    t1.style.width = "25%";
    t1.style.height = "100%";
    t1.style.backgroundColor = bB.nf;
    t2.style.position = "absolute";
    t2.style.width = "75%";
    t2.style.height = "100%";
    t2.style.backgroundColor = bB.nf;
    t2.style.top = t2.style.right = bA.qb.qk(0);
    bA.qb.t6(t2);
    sd.style.height = sd.style.maxHeight = "100%";
    rA.push(new w("", function () {
      t7(0);
    }, bB.oT));
    rA.push(new w("", function () {
      t7(1);
    }, bB.oU));
    rA.push(new w("", function () {
      t7(2);
    }, bB.oM));
    rA.push(new w("", function () {
      t7(3);
    }, bB.o7));
    rA.push(new w("", function () {
      t7(4);
    }, bB.or));
    rA.push(new w("", function () {
      t7(5);
    }, bB.oo));
    rA.push(new w("", function () {
      t7(6);
    }, bB.or));
    t3 = new Array(rA.length);
    for (var aB = 0; aB < rA.length; aB++) {
      rA[aB].button.style.position = "absolute";
      t3[aB] = [new t8(e3[aB], rA[aB].button, 0.25, 0.45), new t8("", rA[aB].button, 0.53, 0.84, 1)];
      rA[aB].button.style.height = rA[aB].button.style.maxHeight = "100%";
      rA[aB].button.top = bA.qb.qk(0);
      sd.appendChild(rA[aB].button);
    }
    t2.appendChild(sd);
    t0.appendChild(t1);
    t0.appendChild(t2);
  }
  function t7(aB) {
    t.u(8, 0, new sr(21, {
      t9: t5[aB],
      tA: 0,
      tB: 10
    }));
  }
  this.show = function () {
    this.s4(t.y.tC);
    document.body.appendChild(t0);
  };
  this.rs = function () {
    t.removeChild(document.body, t0);
  };
  this.s4 = function (tC) {
    var tD = [3, 0, 1, 2, 4, 5, 6];
    for (var aB = 0; aB < rA.length; aB++) {
      var i = tC[aB];
      i = i ? i : "";
      t3[tD[aB]][1].rZ.textContent = i;
    }
  };
  this.resize = function () {
    var aB;
    var tE = bc.gap;
    var j = bA.qb.tF(0.085);
    var i = Math.min(j * 4, h.i - tE * 2);
    var en = rA.length;
    bA.qb.tG(t0, tE, h.j - tE - j, i, j);
    bA.qb.ql(t0);
    bA.qb.ql(t1, 6);
    for (aB = 0; aB < en - 1; aB++) {
      bA.qb.ql(rA[aB].button, 6);
    }
    for (aB = 0; aB < en; aB++) {
      t3[aB][0].resize();
      t3[aB][1].resize();
    }
    rA[0].eu = 0;
    rA[0].button.style.left = bA.qb.qk(rA[0].eu);
    rA[0].button.style.width = bA.qb.tH(j * 1.7);
    for (aB = 1; aB < en; aB++) {
      rA[aB].eu = rA[aB - 1].eu + rA[aB - 1].button.offsetWidth;
      rA[aB].button.style.left = bA.qb.qk(rA[aB].eu);
    }
    if (!t4) {
      if (!ab.tI()) {
        return;
      }
      t4 = ab.get(14);
      t4.style.width = "24%";
      t4.style.position = "absolute";
      t1.appendChild(t4);
    }
    t4.style.left = bA.qb.qk(0);
    t4.style.top = "7%";
    if (t2.tJ) {
      t2.scrollLeft = t2.tJ;
    }
  };
  dd();
}
function tK(tL, tM, tN, tO, rI, rJ) {
  var tP = document.createElement("div");
  var tQ = document.createElement("div");
  var tR = document.createElement("div");
  var tS = document.createElement("div");
  var tT = document.createElement("div");
  var tU = document.createElement("div");
  var tV = document.createElement("div");
  var tW = document.createElement("div");
  var tX = document.createElement("span");
  var tY = document.createElement("div");
  this.tZ = new rH(rI, rJ);
  this.ta = new tb(rJ);
  this.tc = [tL, tM, tN, tO];
  function qu(self) {
    tP.style.position = "absolute";
    tP.style.top = "0";
    tP.style.left = "0";
    tP.style.width = "100%";
    tP.style.height = "100%";
    tP.style.backgroundColor = bB.ni;
    if (!bJ.r3()) {
      tP.style.backdropFilter = "blur(4px)";
      tP.style.webkitBackdropFilter = "blur(4px)";
    }
    tQ.style.position = "absolute";
    tQ.style.top = "0";
    tQ.style.left = "0";
    tQ.style.width = "100%";
    tQ.style.display = "flex";
    tQ.style.alignItems = "center";
    var g = [tR, tS, tT, tY];
    for (var aB = 0; aB < g.length; aB++) {
      g[aB].style.position = "absolute";
      g[aB].style.left = "0";
      g[aB].style.width = "100%";
      bA.qb.t6(g[aB]);
    }
    tU.style.position = "absolute";
    tU.style.left = "0";
    tU.style.width = "100%";
    tU.style.font = "inherit";
    tV.style.position = "absolute";
    tV.style.left = "0";
    tV.style.width = "100%";
    tW.style.position = "absolute";
    tW.style.top = "0";
    tW.style.left = "0";
    tW.style.height = "100%";
    tW.style.width = "50%";
    tW.style.backgroundColor = bB.o5;
    tX.innerHTML = "";
    tX.style.position = "absolute";
    tX.style.top = "50%";
    tX.style.left = "50%";
    tX.style.transform = "translate(-50%, -50%)";
    td();
    self.ta.show(tU);
  }
  function td() {
    tQ.appendChild(te());
    tR.appendChild(tL.qG);
    tS.appendChild(tM.qG);
    tT.appendChild(tN.qG);
    tV.appendChild(tW);
    tV.appendChild(tX);
    tY.appendChild(tO.qG);
    tP.appendChild(tQ);
    tP.appendChild(tR);
    tP.appendChild(tS);
    tP.appendChild(tT);
    tP.appendChild(tU);
    tP.appendChild(tV);
    tP.appendChild(tY);
  }
  function te() {
    var tf = document.createElement("h1");
    tf.textContent = L(23);
    tf.style.margin = "0 auto 0.15em auto";
    tf.style.fontFamily = "Arial Black, sans-serif";
    tf.style.fontSize = "inherit";
    tf.style.fontWeight = "inherit";
    return tf;
  }
  this.tg = function (th) {
    var qI = (th / 10).toFixed(1) + "%";
    tW.style.width = qI;
    tX.innerHTML = qI;
  };
  this.ti = function () {
    this.ta.rs(tU);
    this.tZ.show(tU);
  };
  this.tj = function () {
    this.tZ.rs(tU);
    this.ta.show(tU);
  };
  this.tk = function () {
    return tQ;
  };
  this.show = function () {
    document.body.appendChild(tP);
  };
  this.rs = function () {
    t.removeChild(document.body, tP);
  };
  this.resize = function (tl) {
    var tm = 1 - a0.a1.hw() * 0.4 * (h.i > h.j * 1.6);
    var tn = bA.qb.ru(tm * 0.05);
    var to = h.j > h.i;
    var tp = bA.qb.ru(tm * 0.07 + to * 0.03);
    var tq = bA.qb.ru(0.04 + to * 0.02);
    var tr = bA.qb.ru(tm * 0.02 + to * 0.01);
    var ts = bA.qb.ru(0.025);
    tP.style.font = bA.qb.sQ(0, ts);
    if (tm < 1) {
      var tt = bA.qb.sQ(0, tm * ts);
      tR.style.font = tt;
      tT.style.font = tt;
      tY.style.font = tt;
      tV.style.font = tt;
      tS.style.font = tt;
    }
    tQ.style.height = bA.qb.qk(tn);
    tQ.style.font = bA.qb.sQ(0, tn * 0.72);
    bA.qb.ql(tQ, 2);
    tR.style.top = bA.qb.qk(tn);
    tR.style.height = bA.qb.qk(tp);
    bA.qb.ql(tR, 2);
    tS.style.font = bA.qb.sQ(0, tm * bA.qb.ru(0.02));
    tS.style.top = bA.qb.qk(tn + tp);
    tS.style.height = bA.qb.qk(tq);
    bA.qb.ql(tS, 2);
    tT.style.top = bA.qb.qk(tn + tp + tq);
    tT.style.height = bA.qb.qk(tp);
    bA.qb.ql(tT, 2);
    tU.style.top = bA.qb.qk(tn + tp + tq + tp);
    tU.style.height = bA.qb.qk(h.j / h.k - tn - tp * 3 - tq - tr);
    tV.style.top = bA.qb.qk(h.j / h.k - tp - tr);
    tV.style.height = bA.qb.qk(tr);
    bA.qb.ql(tV, 8);
    tX.style.font = bA.qb.sQ(0, tr * 0.8);
    tY.style.top = bA.qb.qk(h.j / h.k - tp);
    tY.style.height = bA.qb.qk(tp);
    bA.qb.ql(tY, 8);
    tL.resize(tR);
    tM.resize(tR);
    tN.resize(tR);
    tO.resize(tR);
    if (tl) {
      this.tZ.resize(tU);
    } else {
      this.ta.resize();
    }
  };
  qu(this);
}
function tb(rJ) {
  var tP = document.createElement("div");
  var tU = document.createElement("div");
  function qu() {
    tP.style.top = "0";
    tP.style.left = "0";
    tP.style.width = tP.style.height = "100%";
    tP.style.overflowX = "hidden";
    tP.style.overflowY = "auto";
    tP.style.font = "inherit";
    tU.style.font = "inherit";
    tU.style.margin = "0.4em";
    tP.appendChild(tU);
  }
  this.mW = function () {
    tU.textContent = "";
    bn.tu.rs(1);
    var rk = document.createDocumentFragment();
    var tv = bn.y.rf[0];
    var tw = bn.tw.tx[tv];
    var ty = bn.tw.ty[tv];
    for (var aB = 0; aB < tw.length; aB++) {
      tz(rk, tw[aB], aB < ty, tv);
    }
    tU.appendChild(rk);
  };
  function tz(rk, qT, u0, tv) {
    var rZ = document.createElement("span");
    rZ.textContent = (u0 ? "🟢 " : "⚪ ") + bn.kz.u1(qT, tv);
    rZ.style.color = bn.kz.u2(qT.u3);
    rZ.style.cursor = "pointer";
    rZ.style.margin = "0.2em 0.2em 0.2em 0.2em";
    rZ.style.width = rZ.style.maxWidth = tv === 2 ? "10em" : "9em";
    rZ.style.height = rZ.style.maxHeight = "1.4em";
    rZ.style.whiteSpace = "nowrap";
    rZ.style.overflow = "hidden";
    rZ.style.textOverflow = "ellipsis";
    rZ.style.font = "inherit";
    rZ.style.display = "inline-block";
    if (bn.kz.u4(qT)) {
      rZ.style.textDecoration = "underline";
    }
    if (qT.u5) {
      rZ.style.textDecorationLine = "underline";
      rZ.style.textDecorationStyle = "dotted";
    }
    rZ.onclick = function (e) {
      rJ(e, qT);
    };
    if (!bJ.r3()) {
      rZ.onmouseover = function (e) {
        bn.tu.u6(e, qT, 1);
      };
    }
    rk.appendChild(rZ);
  }
  this.show = function (qV) {
    qV.appendChild(tP);
  };
  this.rs = function (qV) {
    t.removeChild(qV, tP);
  };
  this.resize = function () {
    tU.style.fontSize = bA.qb.qk(bA.qb.ru(0.02, 0.3));
  };
  qu();
}
function u7(u8) {
  var tP = document.createElement("div");
  var rM = document.createElement("div");
  var u9 = [];
  function qu() {
    tP.style.position = "absolute";
    tP.style.color = bB.nj;
    tP.style.zIndex = "3";
    tP.style.right = "0";
    tP.style.top = "0";
    rM.style.position = "absolute";
    rM.style.height = "auto";
    rM.style.color = bB.nj;
    rM.style.backgroundColor = bB.nf;
    rM.style.left = "0";
    rM.style.width = "100%";
    rM.style.overflowWrap = "break-word";
    tP.appendChild(rM);
    for (var aB = 0; aB < 4; aB++) {
      u9[aB] = document.createElement("div");
      u9[aB].style.position = "absolute";
      u9[aB].style.backgroundColor = bB.nf;
      u9[aB].style.color = bB.nj;
      u9[aB].style.top = "0";
      u9[aB].style.display = "flex";
      u9[aB].style.justifyContent = "center";
      u9[aB].style.alignItems = "center";
      u9[aB].style.userSelect = "none";
      u9[aB].style.outline = "none";
      u9[aB].style.font = "inherit";
      u9[aB].uA = aB;
      if (aB !== 2) {
        u9[aB].onclick = u8;
        u9[aB].onmouseover = qy;
        u9[aB].onmouseout = qz;
      }
      tP.appendChild(u9[aB]);
    }
    u9[0].textContent = "◀";
    u9[1].textContent = "▶";
    u9[3].textContent = "✖";
  }
  this.s4 = function (uB, uC) {
    u9[2].textContent = uB + 1 + " / " + uC;
  };
  function qy() {
    if (bJ.r3()) {
      return;
    }
    this.style.backgroundColor = bA.color.r6(bB.nf, 50);
  }
  function qz() {
    this.style.backgroundColor = bB.nf;
  }
  this.show = function (qT) {
    rM.appendChild(bn.rr.transform(bn.kz.rm(qT, bn.kz.rn(qT))));
    document.body.appendChild(tP);
  };
  this.resize = function () {
    var j = bA.qb.ru(0.03, 0.5);
    tP.style.width = j * 10 + "px";
    tP.style.font = bA.qb.sQ(1, j * 0.75);
    bA.qb.ql(tP, 4);
    rM.style.top = j + "px";
    rM.style.font = bA.qb.sQ(0, j * 0.55);
    bA.qb.ql(rM, 2);
    tP.style.height = j + rM.offsetHeight + "px";
    for (var aB = 0; aB < 3; aB++) {
      bA.qb.ql(u9[aB], 6);
      u9[[0, 1, 3][aB]].style.width = j * 2 + "px";
    }
    for (aB = 0; aB < 4; aB++) {
      u9[aB].style.height = j + "px";
      bA.qb.ql(u9[aB], 2);
    }
    u9[2].style.width = j * 4 + "px";
    u9[1].style.left = j * 2 + "px";
    u9[2].style.left = j * 4 + "px";
    u9[3].style.left = j * 8 + "px";
  };
  this.uD = function () {
    for (var aB = 0; aB < 4; aB++) {
      u9[aB].onclick = null;
      u9[aB].onmouseover = null;
      u9[aB].onmouseout = null;
    }
    t.removeChild(document.body, tP);
    tP = rM = u9 = null;
  };
  qu();
}
function uE(u8) {
  var sI = document.createElement("div");
  function qu() {
    sI.style.position = "absolute";
    qz();
    sI.style.color = bB.nj;
    sI.style.zIndex = "3";
    sI.style.right = "0";
    sI.style.top = "0";
    sI.style.display = "flex";
    sI.style.justifyContent = "center";
    sI.style.alignItems = "center";
    sI.style.userSelect = "none";
    sI.style.outline = "none";
    sI.onclick = u8;
    sI.onmouseover = qy;
    sI.onmouseout = qz;
  }
  function qy() {
    if (bJ.r3()) {
      return;
    }
    sI.style.backgroundColor = bA.color.r6(bB.nf, 50);
  }
  function qz() {
    sI.style.backgroundColor = bB.nf;
  }
  this.s4 = function (uC) {
    sI.textContent = uC;
  };
  this.show = function () {
    document.body.appendChild(sI);
  };
  this.resize = function () {
    var j = bA.qb.ru(0.03, 0.5);
    sI.style.width = j * 2 + "px";
    sI.style.height = j + "px";
    sI.style.font = bA.qb.sQ(1, j * 0.75);
    bA.qb.ql(sI, 4);
    bA.qb.ql(sI, 2);
  };
  this.uD = function () {
    sI.onclick = null;
    sI.onmouseover = null;
    sI.onmouseout = null;
    t.removeChild(document.body, sI);
    sI = null;
  };
  qu();
}
function uF(sA) {
  var tP = document.createElement("div");
  var uG = document.createElement("div");
  this.eu = 0;
  this.ew = 0;
  var sJ = 0;
  this.rA = sA;
  function qu() {
    for (var aB = 0; aB < sA.length; aB++) {
      new rY("" + (1 + aB), sA[aB].button, 0, 1);
    }
    tP.style.position = "fixed";
    tP.style.top = "0";
    tP.style.left = "0";
    tP.style.width = "100%";
    tP.style.height = "100%";
    tP.style.zIndex = "5";
    uG.style.position = "absolute";
    uH();
    tP.appendChild(uG);
    tP.addEventListener("click", uI);
  }
  function uI() {
    bn.uJ.rs();
  }
  function uH() {
    var uK = (100 / sA.length).toFixed(2) + "%";
    for (var aB = 0; aB < sA.length; aB++) {
      sA[aB].button.style.width = "100%";
      sA[aB].button.style.height = sA[aB].button.style.maxHeight = uK;
      sA[aB].button.style.padding = "0.0em 0.9em";
      uG.appendChild(sA[aB].button);
    }
  }
  this.show = function (eu, ew, uL) {
    if (sJ) {
      return [0, 0];
    }
    sJ = 1;
    this.eu = eu;
    this.ew = ew;
    uM(this, uL);
    document.body.appendChild(tP);
  };
  this.rs = function () {
    if (!sJ) {
      return;
    }
    sJ = 0;
    tP.removeEventListener("click", uI);
    t.removeChild(document.body, tP);
  };
  function uM(self, uL) {
    var i = bA.qb.ru(0.16, 0.7);
    var j = sA.length * i / 3;
    var uN = h.i / h.k;
    var uO = h.j / h.k;
    var nL = Math.min(1, Math.min(uN / i, uO / j));
    i *= nL;
    j *= nL;
    if (uL) {
      self.eu += bA.qb.ru(0.03, 0.5);
    }
    self.eu = bL.hv(self.eu, 0, uN - i);
    self.ew = bL.hv(self.ew, 0, uO - j);
    uG.style.left = self.eu + "px";
    uG.style.top = self.ew + "px";
    uG.style.width = i + "px";
    uG.style.height = j + "px";
    uG.style.font = bA.qb.sQ(0, j * 0.34 / sA.length);
    bA.qb.ql(uG, 5);
    for (var aB = 1; aB < sA.length; aB++) {
      bA.qb.ql(sA[aB].button, 8);
    }
  }
  qu();
}
function uP(sU, uQ) {
  this.qR = [];
  var uR = this.qR;
  function dd() {
    var uS;
    var en = sU.uT.length;
    for (var aB = 0; aB < en; aB++) {
      uS = document.createElement("p");
      uS.textContent = "⚪ " + sU.uT[aB];
      uS.style.margin = "0";
      uS.name = "" + aB;
      uS.style.cursor = "pointer";
      uS.style.fontSize = "1em";
      uS.addEventListener("click", click);
      uR.push(uS);
    }
    uR[sU.value].textContent = uR[sU.value].textContent.replace("⚪", "🟢");
  }
  function click() {
    for (var aB = 0; aB < uR.length; aB++) {
      uR[aB].textContent = uR[aB].textContent.replace("🟢", "⚪");
    }
    this.textContent = this.textContent.replace("⚪", "🟢");
    var e8 = parseInt(this.name);
    if (sU.e8 !== undefined) {
      bj.s3.s4(sU.e8, e8);
    }
    if (uQ) {
      uQ(e8);
    }
  }
  dd();
}
function uU(title, uV, uW) {
  var t0 = document.createElement("div");
  var uX = document.createElement("div");
  var sd = document.createElement("div");
  var uY = document.createElement("div");
  var uZ = document.createElement("div");
  this.ua = sd;
  this.ub = uV;
  function dd() {
    t0.style.position = "absolute";
    t0.style.top = "0";
    t0.style.left = "0";
    t0.style.width = "100%";
    t0.style.height = "100%";
    uX.style.position = "absolute";
    uX.style.top = "0";
    uX.style.left = "0";
    uX.style.width = "100%";
    uX.style.display = "flex";
    uX.style.backgroundColor = bB.nf;
    uY.style.position = "absolute";
    uY.style.left = "0";
    uY.style.width = "100%";
    bA.qb.t6(uY);
    uZ.style.height = uZ.style.maxHeight = "100%";
    sd.style.position = "absolute";
    sd.style.width = "100%";
    sd.style.backgroundColor = bB.nf;
    uc();
    rB();
  }
  function uc() {
    for (var aB = 0; aB < uV.length; aB++) {
      uV[aB].button.style.height = "100%";
      uV[aB].button.style.padding = "0.0em 0.9em";
    }
  }
  function rB() {
    for (var aB = 0; aB < uV.length; aB++) {
      uZ.appendChild(uV[aB].button);
    }
    uX.appendChild(ud());
    uY.appendChild(uZ);
    if (uW !== false) {
      t0.appendChild(sd);
      t0.appendChild(uX);
      t0.appendChild(uY);
    }
  }
  function ud() {
    var ue = document.createElement("h1");
    ue.textContent = title;
    ue.style.margin = "auto";
    ue.style.fontSize = title.length >= 18 && h.j > h.i ? "1.8em" : "2.3em";
    ue.style.fontFamily = "Arial Black, sans-serif";
    return ue;
  }
  this.show = function () {
    if (uW !== false) {
      document.body.appendChild(t0);
    } else {
      document.body.appendChild(uX);
      document.body.appendChild(uY);
    }
  };
  this.rs = function () {
    if (uW !== false) {
      t.removeChild(document.body, t0);
    } else {
      t.removeChild(document.body, uX);
      t.removeChild(document.body, uY);
    }
  };
  this.uf = function () {
    var rv = bA.qb.ru(0.1);
    var rt = bA.qb.ru(0.08 + (h.ug < 1) * 0.04, 0.3);
    var uh = h.j / h.k - rv - rt;
    return {
      rv: rv,
      rt: rt,
      uh: uh
    };
  };
  this.resize = function (sE) {
    var aB;
    var e;
    var en = uV.length;
    var ui = this.uf();
    var rv = ui.rv;
    var rt = ui.rt;
    uX.style.height = bA.qb.qk(rv);
    bA.qb.ql(uX, 2);
    uY.style.top = bA.qb.qk(h.j / h.k - rt);
    uY.style.height = bA.qb.qk(rt);
    bA.qb.ql(uY, 8);
    sd.style.top = bA.qb.qk(rv);
    sd.style.height = sd.style.maxHeight = bA.qb.qk(ui.uh);
    uX.style.font = bA.qb.sQ(0, bA.qb.ru(0.02, 0.15));
    uY.style.font = bA.qb.sQ(0, bA.qb.ru(0.02, 0.7));
    sd.style.font = bA.qb.sQ(0, bA.qb.ru(0.02, 0.35));
    for (aB = 1; aB < en; aB++) {
      bA.qb.ql(uV[aB].button, 4);
    }
    var sF = 0;
    for (aB = 0; aB < en; aB++) {
      sF += uV[aB].button.offsetWidth;
    }
    if (sE && sF < uY.offsetWidth) {
      for (aB = 0; aB < en; aB++) {
        e = uV[aB].button;
        e.style.width = (uV[aB].button.offsetWidth * 100 / sF).toFixed(2) + "%";
      }
    } else {
      for (aB = 0; aB < en; aB++) {
        e = uV[aB].button;
        e.style.width = "auto";
      }
    }
    if (uY.tJ) {
      uY.scrollLeft = uY.tJ;
    }
    if (!sE) {
      this.resize(true);
    }
  };
  this.uj = function () {
    var ui = this.uf();
    var f8 = h.k;
    uk.fillStyle = bB.nf;
    uk.fillRect(0, f8 * ui.rv, h.i, f8 * ui.uh);
  };
  dd();
}
function rY(ul, um, un, uo) {
  this.rZ = document.createElement("span");
  function qu(self) {
    self.rZ.textContent = ul;
    self.rZ.style.color = bB.nj;
    self.rZ.style.position = "absolute";
    self.rZ.style.font = "inherit";
    if (uo) {
      self.rZ.style.bottom = "0.06em";
    } else {
      self.rZ.style.top = "0.12em";
    }
    if (un) {
      self.rZ.style.left = "0.2em";
    } else {
      self.rZ.style.right = "0.2em";
    }
    self.rZ.style.fontSize = "0.6em";
    self.rZ.style.pointerEvents = "none";
    self.rZ.style.whiteSpace = "pre";
    um.style.position = "relative";
    um.style.overflow = "hidden";
    um.appendChild(self.rZ);
  }
  qu(this);
}
function t8(ul, um, up, uq, ur) {
  this.rZ = document.createElement("span");
  function qu(self) {
    self.rZ.textContent = ul;
    self.rZ.style.color = bB.nj;
    self.rZ.style.font = "inherit";
    self.rZ.style.margin = "0.1em 0.6em";
    self.rZ.style.pointerEvents = "none";
    if (ur) {
      self.rZ.style.fontWeight = "bold";
    }
    self.rZ.style.whiteSpace = "nowrap";
    self.rZ.style.display = "block";
    um.appendChild(self.rZ);
  }
  this.resize = function () {
    this.rZ.style.fontSize = ((uq - up) * um.offsetHeight).toFixed(1) + "px";
  };
  qu(this);
}
function us(ut, uu, uv, uw) {
  var ux = document.createElement("textarea");
  this.e = ux;
  var uy = true;
  function dd() {
    ux.setAttribute("id", "textArea" + t.y.sX++);
    ux.setAttribute("autocomplete", "off");
    if (ut) {
      ux.setAttribute("placeholder", ut);
    }
    ux.style.top = "0";
    ux.style.left = "0";
    ux.style.width = "100%";
    ux.style.height = "100%";
    ux.style.userSelect = "none";
    ux.style.outline = "none";
    ux.style.resize = "none";
    ux.style.border = "none";
    ux.style.color = bB.nj;
    ux.style.backgroundColor = bB.nc;
    if (uw) {
      ux.style.fontSize = "1em";
      ux.rows = 6;
      ux.style.padding = "0.25em";
    } else {
      ux.style.padding = "0.45em";
      ux.style.fontSize = "1.2em";
    }
    if (uv) {
      ux.addEventListener("input", function (e) {
        uv(e);
      });
    }
    ux.addEventListener("focus", function () {
      h.sY++;
    });
    ux.addEventListener("blur", function () {
      h.sY--;
    });
  }
  this.resize = function () {
    if (uu) {
      bA.qb.ql(ux, 5);
    }
  };
  this.uz = function (v0) {
    ux.value = v0;
  };
  this.v1 = function () {
    return ux.value;
  };
  this.v2 = function () {
    ux.select();
  };
  this.clear = function () {
    ux.value = "";
  };
  this.v3 = function () {
    if (uy && navigator.clipboard) {
      ux.select();
      navigator.clipboard.writeText(ux.value).catch(function () {
        uy = false;
        v4();
      });
      return;
    }
    v4();
  };
  function v4() {
    ux.select();
    document.execCommand("copy");
  }
  dd();
}
function dI() {
  this.qs = new v5();
  this.eK = new v6();
  this.s3 = new v7();
  this.y = new v8();
  this.v9 = new vA();
  this.dd = function () {
    this.eK.dd();
    new vB().dd();
    this.v9.dd();
  };
}
function v6() {
  this.data = [];
  this.dd = function () {
    vC(0, 1, 0, 5);
    vC(1, 1, 1);
    vC(2, 0);
    vD(3, 2);
    vC(4, 1);
    vD(5, 2, "sans-serif", 1);
    vC(6, 0);
    vC(7, 0, 0);
    vC(8, 0);
    vC(9, 1, 1);
    vC(10, 1);
    vC(11, 1, 1);
    vD(12, 2, navigator.language);
    vC(13);
    vC(14);
    vE(100);
    vD(100, 2);
    vD(101, 2);
    vD(102, 2);
    vD(103, 2);
    vD(104, 2);
    vD(105, 2);
    vD(106, 2);
    vC(107);
    vC(108);
    vC(109);
    vD(110, 2);
    vC(111);
    vC(112);
    vC(113);
    vD(114, 2);
    vC(115);
    vD(116, 2);
    vC(117, 1);
    vD(118, 2, "", 2);
    vC(119, 1, 0, 1);
    vD(120, 2);
    vC(121, 1, ~~(Math.random() * 262144));
    vD(122, 2, "Player " + Math.floor(Math.random() * 1000));
    vC(123);
    vD(124);
    vC(125, 1);
    vD(126, 2);
    vC(127, 0, 1);
    vC(128);
    vC(129);
    vC(130);
    vC(131);
    vC(132);
    vD(133, 2);
    vC(134, 0, 5);
    vD(135, 2);
    vD(136, 2);
    vC(137);
    vC(138);
    vC(139);
    vC(140);
    vC(141);
    vC(142);
    vC(143);
    vC(144);
    vD(145, 2);
    vC(146);
    vC(147);
    vD(148, 2);
    vC(149);
    vC(150, 0, 1);
    vD(151, 2);
    vC(152, 0, 5);
    vC(153, 1);
    vC(154, 1);
    vD(155, 2);
    vD(156, 2);
    vC(157);
    vC(158);
    vC(159);
    vC(160);
    vD(161, 2);
    vE(180);
    vC(180, 0);
    vC(181, 0);
  };
  this.s4 = function (e8, value) {
    this.data[e8].value = value;
  };
  this.vF = function (e8, value) {
    this.s4(e8, value);
    bj.qs.save(e8, String(value));
    bj.qs.save(e8, String(this.data[e8].dv), true);
  };
  this.vG = function () {
    var aB;
    for (aB = 0; aB < this.data.length; aB++) {
      if (this.data[aB]) {
        bj.qs.save(aB, String(this.data[aB].value));
        bj.qs.save(aB, String(this.data[aB].dv), true);
      }
    }
  };
  this.vH = function (e8) {
    return Number(this.data[e8].value);
  };
  this.vI = function (e8) {
    return String(this.data[e8].value);
  };
  function vC(aB, type, vJ, dv) {
    bj.eK.data.push({
      e8: aB,
      type: type || 0,
      value: vJ || 0,
      vJ: vJ || 0,
      dv: dv || 0
    });
  }
  function vD(aB, type, vJ, dv) {
    bj.eK.data.push({
      e8: aB,
      type: type,
      value: vJ || "",
      vJ: vJ || "",
      dv: dv || 0
    });
  }
  function vE(nR) {
    var aB;
    for (aB = bj.eK.data.length; aB < nR; aB++) {
      bj.eK.data.push(null);
    }
  }
}
function vA() {
  var vK = [];
  this.dd = function () {
    var qI = bj.eK.data[161].value;
    if (qI.length) {
      vK = qI.split(";");
    }
  };
  this.get = function () {
    return vK;
  };
  this.vL = function () {
    return {
      uT: vK,
      value: 0
    };
  };
  this.u5 = function (so) {
    return bA.qj.has(vK, so);
  };
  this.vM = function (so) {
    if (vN(so)) {
      return 0;
    }
    vO(so);
    return 1;
  };
  this.mW = function (so) {
    if (vN(so)) {
      vO(so);
    }
  };
  function vO(so) {
    vK.unshift(so);
    bj.s3.s4(161, vK.join(";"));
  }
  this.vP = function (e8) {
    if (e8 < vK.length) {
      vK.splice(e8, 1);
      bj.s3.s4(161, vK.join(";"));
    }
  };
  function vN(so) {
    var vQ = vK;
    var en = vQ.length;
    for (var aB = 0; aB < en; aB++) {
      if (vQ[aB] === so) {
        vQ.splice(aB, 1);
        bj.s3.s4(161, vQ.join(";"));
        return true;
      }
    }
    return false;
  }
}
function v5() {
  this.vR = function (e8, dv) {
    return Number(this.vS(e8, dv));
  };
  this.vS = function (e8, dv) {
    var fF = null;
    if (a0.id === 0) {
      if (a0.vT) {
        fF = a0.vT.getItem((dv ? "v" : "d") + e8);
      }
    } else if (a0.id === 1) {
      fF = a0.vU.loadString((dv ? 1000 : 2000) + e8);
    } else if (a0.id === 2) {
      fF = a0.vV[(dv ? "v" : "d") + e8];
    }
    if (!fF || fF.length === 0) {
      return null;
    }
    return fF;
  };
  this.vW = function (en, vX) {
    var aB;
    var g = [];
    var vY = vX ? "e" : "l";
    if (a0.id === 0) {
      if (a0.vT) {
        for (aB = 0; aB < en; aB++) {
          g.push(a0.vT.getItem(vY + aB));
        }
      }
    } else if (a0.id === 1) {
      var vZ = vX ? 5000 : 3000;
      for (aB = 0; aB < en; aB++) {
        g.push(a0.vU.loadString(vZ + aB));
      }
    } else if (a0.id === 2) {
      for (aB = 0; aB < en; aB++) {
        g.push(a0.vV[vY + aB]);
      }
    }
    return g;
  };
  this.save = function (e8, value, dv) {
    var va = (dv ? "v" : "d") + e8;
    if (a0.id === 0) {
      if (a0.vT && bj.eK.data[140].value) {
        try {
          a0.vT.setItem(va, value);
        } catch (e) {
          console.log(e);
        }
      }
      return;
    }
    if (a0.id === 1) {
      a0.vU.saveString((dv ? 1000 : 2000) + e8, value);
      return;
    }
    if (a0.id === 2) {
      a0.vV[va] = value;
      a0.vb.postMessage(va + " " + value);
    }
  };
  this.vc = function (g, vX) {
    var aB;
    var en = g.length;
    var vY = vX ? "e" : "l";
    if (a0.id === 0) {
      if (a0.vT && bj.eK.data[140].value) {
        try {
          for (aB = 0; aB < en; aB++) {
            a0.vT.setItem(vY + aB, g[aB]);
          }
        } catch (e) {
          console.log(e);
        }
      }
    } else if (a0.id === 1) {
      var vZ = vX ? 5000 : 3000;
      for (aB = 0; aB < en; aB++) {
        a0.vU.saveString(vZ + aB, g[aB]);
      }
    } else if (a0.id === 2) {
      for (aB = 0; aB < en; aB++) {
        a0.vV[vY + aB] = g[aB];
        a0.vb.postMessage(vY + aB + " " + g[aB]);
      }
    }
  };
}
function vB() {
  this.dd = function () {
    vd();
    ve();
  };
  function vd() {
    var data = bj.eK.data;
    if (data[2].dv === 0 && (h.j > h.i || a0.id !== 0)) {
      data[2].value = data[2].vJ = 1;
    }
    if (data[100].dv === 0) {
      data[100].value = data[100].vJ = (a0.id === 0 ? "Player " : a0.id === 1 ? "Android User " : "iOS User ") + Math.floor(Math.random() * 1000);
    }
  }
  function ve() {
    var aB;
    var fF;
    var data = bj.eK.data;
    var en = data.length;
    for (aB = 0; aB < en; aB++) {
      if (data[aB] && data[aB].dv === bj.qs.vR(aB, true)) {
        fF = bj.qs.vS(aB);
        data[aB].value = fF === null ? data[aB].vJ : data[aB].type === 2 ? fF : Number(fF);
      }
    }
  }
}
function v8() {
  this.vf = function () {
    if (!bj.eK.data[110].value.length) {
      return;
    }
    bj.eK.data[106].value = bj.eK.data[110];
    bj.s3.s4(110, "");
    this.vg();
  };
  this.vg = function () {
    var aB;
    var g = bj.eK.data[116].value.split(";");
    if (g.length % 2 === 1) {
      g.pop();
    }
    g.unshift(bj.eK.data[106].value);
    g.unshift(bj.eK.data[105].value);
    for (aB = 2; aB < g.length; aB += 2) {
      if (g[aB] === g[0]) {
        g.splice(aB, 2);
        break;
      }
    }
    var vh = [];
    for (aB = 0; aB < g.length; aB += 2) {
      vh.push(g[aB]);
    }
    vi(g);
    bj.eK.data[117].value = 0;
    bj.eK.data[117].uT = vh;
  };
  this.vj = function (e8) {
    bj.eK.data[117].uT.splice(e8, 1);
    bj.eK.data[117].value = Math.min(e8, bj.eK.data[117].uT.length - 1);
    var g = bj.eK.data[116].value.split(";");
    g.splice(e8 * 2, 2);
    vi(g);
  };
  this.vk = function (e8) {
    var g = bj.eK.data[116].value.split(";");
    return {
      so: g[e8 * 2],
      password: g[e8 * 2 + 1]
    };
  };
  function vi(g) {
    if (g.length === 0) {
      bj.s3.s4(116, "");
      return;
    }
    var vl = g[0];
    for (var aB = 1; aB < g.length; aB++) {
      vl += ";" + g[aB];
    }
    bj.s3.s4(116, vl);
  }
  this.vm = function () {
    var fF = bL.hv(bj.eK.data[121].value, -1, 262143);
    if (fF === -1) {
      fF = ~~(Math.random() * 262144);
    }
    return fF;
  };
}
function v7() {
  this.s4 = function (e8, value) {
    if (bj.eK.data[e8].value === value) {
      return;
    }
    bj.eK.vF(e8, value);
    if (e8 === 0) {
      t.x();
      b7.dd();
      t.u(2);
      return;
    }
    if (e8 === 1) {
      h.dp(1);
      return;
    }
    if (e8 === 2) {
      h.dp(0);
      return;
    }
    if (e8 === 5) {
      bA.qb.vn();
      h.dp(0);
      return;
    }
  };
  this.vo = function () {
    var aB;
    var data = bj.eK.data;
    for (aB = 0; aB < 100; aB++) {
      if (data[aB]) {
        bj.eK.vF(aB, data[aB].vJ);
      }
    }
    bA.qb.vn();
    h.dp(1);
  };
  this.vp = function () {
    var data = bj.eK.data;
    for (var aB = 0; aB < data.length; aB++) {
      if (data[aB]) {
        bj.eK.s4(aB, data[aB].vJ);
      }
    }
  };
  this.vq = function () {
    var aB;
    var f7 = bj.eK;
    for (aB = 128; aB < 135; aB++) {
      f7.vF(aB, f7.data[aB].vJ);
    }
  };
  this.vr = function (data) {
    bj.s3.s4(109, data.sp);
    bj.s3.s4(107, data.vs);
    bj.s3.s4(108, data.vt);
    bj.s3.s4(112, data.vu);
    bj.s3.s4(111, data.vv);
    bj.s3.s4(113, data.vw);
    bj.s3.s4(135, data.vx);
    bj.s3.s4(136, data.vy);
    bj.s3.s4(137, data.vz);
    bj.s3.s4(138, data.w0);
    bj.s3.s4(139, data.w1);
    bj.s3.s4(141, data.w2);
    bj.s3.s4(142, data.w3);
    bj.s3.s4(143, data.w4);
    bj.s3.s4(144, data.w5);
  };
}
function c4() {
  this.st = new w6();
  this.w7 = new w8();
  this.w9 = new wA();
  this.dd = function () {
    this.st.dd();
  };
}
function w8() {
  this.wB = function (size) {
    var wC = bH;
    var g = [];
    for (var aB = 0; aB < size; aB++) {
      g.push(String.fromCharCode(wC.pj(16)));
    }
    return g.join("");
  };
  this.wD = function (qI) {
    qI = qI.trim();
    if (qI.length > 20) {
      return qI.substring(0, 20);
    }
    return qI;
  };
}
function w6() {
  var wE = new Uint8Array(78);
  this.dd = function () {
    var aB;
    wE[50] = 37;
    for (aB = 0; aB < 10; aB++) {
      wE[aB + 3] = aB + 1;
    }
    for (aB = 0; aB < 26; aB++) {
      wE[aB + 20] = aB + 11;
      wE[aB + 52] = aB + 38;
    }
  };
  this.wF = function (qI) {
    return qI.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-");
  };
  this.wG = function (qI, size) {
    qI = this.wF(qI);
    if (qI.length > size) {
      return qI.substring(0, size);
    }
    while (qI.length < size) {
      qI = "-" + qI;
    }
    return qI;
  };
  this.wH = function (qI) {
    var wI = wE;
    var en = qI.length;
    var g = new Uint8Array(en);
    for (var aB = 0; aB < en; aB++) {
      g[aB] = wI[qI.charCodeAt(aB) - 45];
    }
    return g;
  };
  this.wJ = function (wK) {
    bD.a7(wK.length * 6);
    this.wL(wK);
    bH.dd(bD.aC);
  };
  this.wL = function (wK) {
    var en = wK.length;
    var i = bD;
    for (var aB = 0; aB < en; aB++) {
      i.a8(6, wK[aB]);
    }
  };
  this.wM = function (qI) {
    this.wL(this.wH(qI));
  };
  this.wN = function (qI, size) {
    this.wL(this.wH(this.wG(qI, size)));
  };
  this.wO = function (qI, size) {
    var g = this.wH(this.wG(qI, size));
    var fF = 0;
    var nL = 1;
    for (var aB = g.length - 1; aB >= 0; aB--) {
      fF += nL * g[aB];
      nL *= 64;
    }
    return fF;
  };
}
function wP() {
  var i;
  var j;
  var wQ;
  this.wR = function (qI) {
    var aB;
    var wS;
    var en;
    var l5;
    var gL;
    var wT;
    var wU;
    var wV;
    var wC = bH;
    bG.st.wJ(bG.st.wH(qI));
    bS.wW.wX[bS.eT].i = bS.ey = i = wC.pj(12);
    bS.wW.wX[bS.eT].j = bS.ez = j = wC.pj(12);
    wQ = [-i, -1, i, 1];
    wY();
    en = wC.pj(12);
    wS = wC.pj(5);
    wT = wZ(i * j - 1);
    for (aB = 0; aB < en; aB++) {
      l5 = wC.pj(wS);
      gL = wC.pj(wT);
      wU = wC.pj(1) === 1;
      wV = wC.pj(1) === 1;
      wa(l5, gL, wU, wV);
    }
    wb();
    bS.wc.putImageData(bS.wd, 0, 0);
    bS.we = true;
    bS.wf.dd();
    bf.dl = true;
  };
  function wY() {
    bS.wg = document.createElement("canvas");
    bS.wg.width = bS.ey;
    bS.wg.height = bS.ez;
    bS.wc = bS.wg.getContext("2d", {
      alpha: false
    });
    bS.wd = bS.wh = null;
    bS.wd = bS.wc.getImageData(0, 0, bS.ey, bS.ez);
    bS.wh = bS.wd.data;
    bA.qj.wi(bS.wh);
  }
  function wa(l5, gL, wU, wV) {
    var aB;
    var eq;
    var wC = bH;
    var wj = bS.wh;
    var wk = gL;
    var wl = gL;
    var wm = 0;
    var wn = 1 + wU;
    var wo = 2 - wU;
    wj[gL << 2] = wn;
    for (aB = 0; aB < l5; aB++) {
      eq = wC.pj(2);
      gL = wp(gL, eq);
      if (wj[gL << 2] === wn) {
        if (wm % 2 === 1) {
          wq(wl, wm + wV * 2 + 3, wo, wV, wj);
        }
      } else {
        wj[gL << 2] = wn;
      }
      wq(gL, eq, wo, wV, wj);
      wq(wl, eq, wo, wV, wj);
      wl = gL;
      wm = eq;
    }
    if (wp(gL, 0) === wk) {
      wq(gL, 0, wo, wV, wj);
      wq(wk, 0, wo, wV, wj);
    } else if (wp(gL, 1) === wk) {
      wq(gL, 0, wo, wV, wj);
      wq(wk, 2, wo, wV, wj);
    }
    if (l5 === 0) {
      wq(wk, 0, wo, wV, wj);
      wq(wk, 2, wo, wV, wj);
    }
  }
  function wq(hF, eq, wo, wV, wj) {
    var kn = wp(hF, eq + 1 + wV * 2 & 3);
    if (!wr(hF, kn) && wj[kn << 2] === 0) {
      wj[kn << 2] = wo;
    }
  }
  function wr(hF, kn) {
    return Math.abs(ws(hF) - ws(kn)) > 1 || Math.abs(wt(hF) - wt(kn)) > 1;
  }
  function ws(gL) {
    return gL % i;
  }
  function wt(gL) {
    return Math.floor((gL + 0.5) / i) % j;
  }
  function wp(gL, eq) {
    return gL + wQ[eq];
  }
  function wb() {
    var eu;
    var ew;
    var hf;
    var wu;
    var wv;
    var ww;
    var wj = bS.wh;
    var wx = true;
    var wy = bS.wW.wX[bS.eT].wy;
    var wz = bS.wW.wX[bS.eT].wz;
    for (ew = 0; ew < j; ew++) {
      wu = true;
      wv = wx;
      ww = 0;
      for (eu = 0; eu < i; eu++) {
        hf = ew * 4 * i + eu * 4;
        if (eu >= ww && wj[hf] > 0) {
          wv = wj[hf] === 2;
          if (wu) {
            wu = false;
            if (wv !== wx) {
              wx = wv;
              ww = eu + 1;
              eu = -1;
              continue;
            }
          }
        }
        if (wv) {
          wj[hf] = wz[0];
          wj[hf + 1] = wz[1];
          wj[hf + 2] = wz[2];
          wj[hf + 3] = 255;
        } else {
          wj[hf] = wy[0];
          wj[hf + 1] = wy[1];
          wj[hf + 2] = wy[2];
          wj[hf + 3] = 255;
        }
      }
    }
  }
}
function wA() {
  this.wR = function (x0) {
    var wC = bH;
    var size = wC.pj(x0);
    var x1 = 7 + wC.pj(1) * 9;
    var g = [];
    for (var aB = 0; aB < size; aB++) {
      g.push(String.fromCharCode(wC.pj(x1)));
    }
    return g.join("");
  };
}
function c9() {
  var sL;
  var sM;
  var x2;
  var x3;
  var x4;
  var x5;
  var x6;
  var x7;
  var x8;
  var x9;
  this.dd = function () {
    x9 = new Array(12);
    x7 = 6;
    x4 = 10;
    x2 = bL.du(bS.ey, x4);
    x3 = bL.du(bS.ez, x4);
    x5 = bL.du(bS.ey - x4 * x2, 2);
    x6 = bL.du(bS.ez - x4 * x3, 2);
    if (aD.hB) {
      for (var aB = 0; aB < aD.kA; aB++) {
        x8 = aB;
        xA();
        ag.mj[x8] = 1;
      }
    }
    if (aD.data.spawningType === 0) {
      xB();
    } else if (aD.data.spawningType === 1) {
      xB();
      xC();
    } else {
      xD();
    }
    bd.mf[7] = ag.gb[aD.eX];
  };
  function xB() {
    var xE = aD.xE;
    for (x8 = xE; x8 < aD.ek; x8++) {
      xA();
    }
    for (x8 = aD.hB ? aD.kA : 0; x8 < xE; x8++) {
      if (xF()) {
        var xG = x5 + sL * x4 + bL.du(x4, 2);
        var xH = x6 + sM * x4 + bL.du(x4, 2);
        xI(xG, xH);
      } else {
        aD.xJ = x8;
        for (var f7 = x8; f7 < xE; f7++) {
          x8 = f7;
          xA();
        }
        return;
      }
    }
  }
  function xC() {
    var xK = aD.xL;
    if (!aD.xM) {
      xK++;
    }
    if (xK < 3) {
      return;
    }
    var data = aD.data;
    var jQ = (aD.hB ? aD.kA : 0) + data.teamPlayerCount[0];
    var nR = aD.xJ;
    var xN = new Uint32Array(xK);
    var xO = new Uint32Array(xK);
    var xP = new Uint16Array(xK);
    var xQ = new Uint16Array(xK);
    var el = bg.el;
    var ie = ag.ie;
    var ih = ag.ih;
    var ig = ag.ig;
    var ii = ag.ii;
    var fS = bO.fS;
    var fT = bO.fT;
    for (var aB = jQ; aB < nR; aB++) {
      fS[aB] = ie[aB] + ig[aB] >> 1;
      fT[aB] = ih[aB] + ii[aB] >> 1;
    }
    for (aB = jQ; aB < nR; aB++) {
      var id = el[aB];
      xN[id] += fS[aB];
      xO[id] += fT[aB];
    }
    var kX = bg.kX;
    for (aB = 1; aB < xK; aB++) {
      var gG = Math.max(data.teamPlayerCount[kX[aB]], 1);
      xP[aB] = bL.du(xN[aB], gG);
      xQ[aB] = bL.du(xO[aB], gG);
    }
    var xR = bg.xR;
    var xS = bg.xS;
    var xT = bg.xT;
    var fR = bO.fR;
    for (aB = 0; aB < 512; aB++) {
      fR[aB] = aB;
    }
    for (var e7 = 0; e7 < 2 + (xK >= 4); e7++) {
      for (aB = jQ; aB < nR; aB++) {
        var hF = aB;
        var xU = fR[hF];
        var xV = 1;
        var f3 = bL.xW(fS[xU] - xP[1], fT[xU] - xQ[1]);
        for (var f6 = 2; f6 < xK; f6++) {
          var xX = bL.xW(fS[xU] - xP[f6], fT[xU] - xQ[f6]);
          if (xX < f3) {
            f3 = xX;
            xV = f6;
          }
        }
        var xY = el[hF];
        if (xV === xY) {
          continue;
        }
        if (e7 === 2 && xK >= 4) {
          var xZ = Math.max((xV + 1) % xK, 1);
          var xa = bL.xW(fS[xU] - xP[xZ], fT[xU] - xQ[xZ]);
          for (f6 = 1; f6 < xK; f6++) {
            xX = bL.xW(fS[xU] - xP[f6], fT[xU] - xQ[f6]);
            if (xX > f3 && xX < xa) {
              xa = xX;
              xZ = f6;
            }
          }
          if (xZ !== xY && bL.xW(xP[xY] - xP[xZ], xQ[xY] - xQ[xZ]) < bL.xW(xP[xY] - xP[xV], xQ[xY] - xQ[xV])) {
            xV = xZ;
          }
        }
        var xb = kX[xV];
        var xc = xS[xb] + (aD.hB ? 0 : xT[xb]);
        var kn = xR[xc];
        var xd = fR[kn];
        var xe = xS[xb + 1];
        f3 = bL.xW(fS[xd] - xP[xY], fT[xd] - xQ[xY]);
        for (var f8 = xc + 1; f8 < xe; f8++) {
          var xf = xR[f8];
          var xg = fR[xf];
          xX = bL.xW(fS[xg] - xP[xY], fT[xg] - xQ[xY]);
          if (xX < f3) {
            f3 = xX;
            kn = xf;
          }
        }
        if (kn < jQ || kn >= nR) {
          continue;
        }
        xd = fR[kn];
        xN[xY] += fS[xd] - fS[xU];
        xO[xY] += fT[xd] - fT[xU];
        xN[xV] += fS[xU] - fS[xd];
        xO[xV] += fT[xU] - fT[xd];
        gG = data.teamPlayerCount[kX[xY]];
        xP[xY] = bL.du(xN[xY], gG);
        xQ[xY] = bL.du(xO[xY], gG);
        gG = data.teamPlayerCount[xb];
        xP[xV] = bL.du(xN[xV], gG);
        xQ[xV] = bL.du(xO[xV], gG);
        fR[hF] = xd;
        fR[kn] = xU;
      }
    }
    xh();
  }
  function xh() {
    var fR = bO.fR;
    var ie = ag.ie;
    var ih = ag.ih;
    var ig = ag.ig;
    var ii = ag.ii;
    var gb = ag.gb;
    var xi = ag.xi;
    var gT = ag.gT;
    var gU = ag.gU;
    var fD = ag.fD;
    for (var aB = 0; aB < 512; aB++) {
      var xj = fR[aB];
      if (xj === aB) {
        continue;
      }
      xk(ie, aB, xj);
      xk(ih, aB, xj);
      xk(ig, aB, xj);
      xk(ii, aB, xj);
      xk(gb, aB, xj);
      xk(xi, aB, xj);
      xk(gT, aB, xj);
      xk(gU, aB, xj);
      xk(fD, aB, xj);
      xl(aB);
      xl(xj);
      fR[aB] = aB;
      var j = xj;
      var gM = fR[j];
      while (gM !== aB) {
        j = gM;
        gM = fR[gM];
      }
      fR[j] = xj;
    }
  }
  function xl(player) {
    var ie = ag.ie;
    var ih = ag.ih;
    var ig = ag.ig;
    var ii = ag.ii;
    for (var ew = ih[player]; ew <= ii[player]; ew++) {
      for (var eu = ie[player]; eu <= ig[player]; eu++) {
        var eR = ac.xm(eu, ew);
        if (!ac.gN(eR)) {
          continue;
        }
        if (ac.jL(eR)) {
          ac.gI(eR, player);
        } else {
          ac.xn(eR, player);
        }
      }
    }
  }
  function xk(g, tA, tB) {
    var dt = g[tA];
    g[tA] = g[tB];
    g[tB] = dt;
  }
  function xD() {
    var xE = aD.xE;
    for (x8 = xE; x8 < aD.ek; x8++) {
      xA();
    }
    for (x8 = aD.hB ? aD.kA : 0; x8 < xE; x8++) {
      if (xo()) {
        continue;
      }
      if (xF()) {
        var xG = x5 + sL * x4 + bL.du(x4, 2);
        var xH = x6 + sM * x4 + bL.du(x4, 2);
        xI(xG, xH);
        continue;
      }
      aD.xJ = x8;
      for (var f7 = x8; f7 < xE; f7++) {
        x8 = f7;
        xA();
      }
      return;
    }
  }
  function xF() {
    return xp() || xq();
  }
  function xo() {
    var spawningData = aD.data.spawningData;
    var xG = spawningData[x8 * 2] + 1;
    var xH = spawningData[x8 * 2 + 1] + 1;
    if (xG > 3 && xG < bS.ey - 5 && xH > 3 && xH < bS.ez - 5) {
      if (ac.ei(ac.xm(xG, xH)) && xr(xG + 3, xH + 3)) {
        xI(xG + 1, xH + 1);
        return true;
      }
    }
    return false;
  }
  function xp() {
    var aB;
    for (aB = 0; aB < 8; aB++) {
      sL = bL.du(x2 * ay.random(), ay.value(100));
      sM = bL.du(x3 * ay.random(), ay.value(100));
      if (xs()) {
        return true;
      }
    }
    return false;
  }
  function xq() {
    var i7;
    var iA;
    var f6;
    var xH;
    var f7;
    var xG;
    i7 = bL.du(x2 * ay.random(), ay.value(100));
    iA = bL.du(x3 * ay.random(), ay.value(100));
    for (f6 = 40; f6 >= 1; f6--) {
      for (xH = x3 - f6; xH >= 0; xH -= 40) {
        sM = (xH + iA) % x3;
        for (f7 = 40; f7 >= 1; f7--) {
          for (xG = x2 - f7; xG >= 0; xG -= 40) {
            sL = (xG + i7) % x2;
            if (xs()) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  function xs() {
    var gL;
    var xt;
    var xu;
    var gap = bL.du(x4 - x7, 2);
    var xv = x6 + sM * x4 + gap;
    var xw = x5 + sL * x4 + gap;
    for (xt = xv + x7 - 1; xt >= xv; xt--) {
      for (xu = xw + x7 - 1; xu >= xw; xu--) {
        gL = ac.xm(xu, xt);
        if (!ac.ei(gL) || ac.jL(gL)) {
          return false;
        }
      }
    }
    return true;
  }
  function xI(xG, xH) {
    xA();
    xx(xG - 2, xH - 2);
  }
  function xA() {
    ag.mj[x8] = 0;
    ag.gb[x8] = ag.xi[x8] = 0;
    ag.gF[x8] = [];
    ag.gT[x8] = [];
    ag.gU[x8] = [];
    ag.fD[x8] = [];
    ag.ie[x8] = ag.ih[x8] = ag.ig[x8] = ag.ii[x8] = 0;
  }
  function xx(xG, xH) {
    ag.mj[x8] = 1;
    ag.ie[x8] = xG + 10;
    ag.ih[x8] = xH + 10;
    ag.ii[x8] = ag.ig[x8] = 0;
    var gL;
    var aB;
    var xy;
    var xz;
    for (xy = xG; xy < xG + 4; xy++) {
      for (xz = xH; xz < xH + 4; xz++) {
        if (xy > xG && xy < xG + 3 || xz > xH && xz < xH + 3) {
          gL = ac.xm(xy, xz);
          if (ac.ei(gL)) {
            ag.ie[x8] = Math.min(xy, ag.ie[x8]);
            ag.ig[x8] = Math.max(xy, ag.ig[x8]);
            ag.ih[x8] = Math.min(xz, ag.ih[x8]);
            ag.ii[x8] = Math.max(xz, ag.ii[x8]);
            x9[ag.gb[x8]] = gL;
            ag.gb[x8]++;
            ac.xn(gL, x8);
          }
        }
      }
    }
    ag.xi[x8] = ag.gb[x8];
    for (aB = ag.gb[x8] - 1; aB >= 0; aB--) {
      if (ac.y0(x9[aB], x8)) {
        ac.gI(x9[aB], x8);
        ag.gT[x8].push(x9[aB]);
      } else if (ac.y1(x9[aB])) {
        ac.gI(x9[aB], x8);
        ag.gU[x8].push(x9[aB]);
      } else if (ac.y2(x9[aB])) {
        ac.gI(x9[aB], x8);
        ag.fD[x8].push(x9[aB]);
      }
    }
  }
  this.y3 = function (jJ, y4, y5) {
    var aB;
    var xG;
    var xH;
    x8 = jJ;
    for (aB = 0; aB < 20; aB++) {
      for (xG = y4 + aB; xG >= y4 - aB; xG--) {
        for (xH = y5 + aB; xH >= y5 - aB; xH--) {
          if (xG === y4 + aB || xG === y4 - aB || xH === y5 + aB || xH === y5 - aB) {
            if (xG > 3 && xG < bS.ey - 5 && xH > 3 && xH < bS.ez - 5) {
              if (ac.ei(ac.xm(xG, xH)) && y6(xG + 3, xH + 3)) {
                if (ag.gb[x8] > 0) {
                  y7();
                  xA();
                }
                xx(xG - 1, xH - 1);
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  };
  function y7() {
    var gL;
    var sL;
    var sM;
    for (sL = ag.ig[x8]; sL >= ag.ie[x8]; sL--) {
      for (sM = ag.ii[x8]; sM >= ag.ih[x8]; sM--) {
        gL = (sM * bS.ey + sL) * 4;
        if (ac.y8(x8, gL)) {
          ac.y9(gL);
          ag.gb[x8]--;
        }
      }
    }
  }
  this.yA = function (jJ) {
    x8 = jJ;
    if (xF()) {
      var xG = x5 + sL * x4 + bL.du(x4, 2);
      var xH = x6 + sM * x4 + bL.du(x4, 2);
      xI(xG, xH);
    } else {
      xA();
    }
  };
  function xr(xG, xH) {
    var gL;
    var xu;
    var xt;
    for (xt = xH; xt > xH - 6; xt--) {
      for (xu = xG; xu > xG - 6; xu--) {
        gL = ac.xm(xu, xt);
        if (ac.jL(gL)) {
          return false;
        }
      }
    }
    return true;
  }
  function y6(xG, xH) {
    var gL;
    var xu;
    var xt;
    for (xt = xH; xt > xH - 6; xt--) {
      for (xu = xG; xu > xG - 6; xu--) {
        gL = ac.xm(xu, xt);
        if (ac.jL(gL) && !ac.yB(x8, gL)) {
          return false;
        }
      }
    }
    return true;
  }
}
function yC() {
  at.yD();
  uk.setTransform(hy, 0, 0, hy, 0, 0);
  uk.imageSmoothingEnabled = hy < 3;
  uk.drawImage(bS.wg, aS.yE(), aS.yF());
  bP.yG.uj();
  uk.drawImage(yH, aS.yE(), aS.yF());
  at.uj();
  bN.uj();
  af.uj();
  if (aD.nC) {
    bh.uj();
    bC.uj();
    t.uj();
    return;
  }
  aN.uj();
  aV.uj();
  aR.uj();
  bC.uj();
  aw.uj();
  aW.uj();
  aS.uj();
  aQ.uj();
  bh.uj();
  aU.uj();
  aP.uj();
  aM.uj();
  aL.uj();
  aX.uj();
  be.uj();
  av.uj();
  t.uj();
}
function yI(yJ, i, j) {
  yJ.clearRect(0, 0, i, j);
  yJ.fillStyle = bB.ng;
  yJ.fillRect(0, 0, i, j);
}
function yK(yJ, i, j, yL) {
  yJ.fillStyle = bB.nj;
  yJ.fillRect(0, 0, i, yL);
  yJ.fillRect(0, 0, yL, j);
  yJ.fillRect(i - yL, 0, yL, j);
  yJ.fillRect(0, j - yL, i, yL);
}
function yM(yJ, eu, ew, hj, yL, gL, yN) {
  yJ.fillStyle = bB.nj;
  var sx = Math.floor(hj * gL);
  sx += (sx - yL) % 2;
  var sy = Math.floor((sx - yL) / 2);
  var yO = Math.floor((hj - sx) / 2);
  yJ.fillRect(eu + yO, ew + yO + sy, sx, yL);
  if (yN) {
    yJ.fillRect(eu + yO + sy, ew + yO, yL, sx);
  }
}
function yP() {
  this.dd = function () {
    if (aD.kS !== 8) {
      return;
    }
    aN.yQ();
  };
  this.yR = function (yS) {
    var elo = aD.data.elo;
    var jP = (elo[yS] - elo[1 - yS]) / 10;
    var yT = 8 / (1 + Math.pow(2, jP / 32));
    yT = Math.floor(yT * 10 + 0.5);
    var yU = elo[yS] + yT;
    var yV = this.yW(yU);
    var yX = this.yW(elo[1 - yS] - yT);
    if (yS === 0) {
      aN.yY(yV, yX, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]);
    } else {
      aN.yY(yX, yV, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]);
    }
    var yZ = ((1 + aD.ya) * yU / 500).toFixed(2);
    if (yS === aD.eX) {
      aN.yb(640, L(24, [yZ]), 40, 0, bB.nj, bB.ng, -1, false);
    } else {
      aN.yb(640, L(25, [ag.yc[yS], yZ]), 40, 0, bB.nj, bB.ng, -1, false);
    }
  };
  this.yW = function (elo) {
    elo = bL.hv(elo, 0, 16000);
    if (elo === 16000) {
      return "Unknown";
    }
    return (elo / 10).toFixed(1);
  };
}
function cf() {
  this.rr = new yd();
  this.wj = new ye();
}
function ye() {
  this.hZ = false;
  var n9;
  var nA;
  var gap;
  var hj;
  var yf;
  var yg = 10;
  var yh = 1;
  this.yi = [];
  this.yj = 100;
  var yk = 0;
  var yl = new Array(9);
  var ym = [];
  var yn = [];
  var yo = 0;
  var yp = 0;
  var yq = 0;
  var yr = 0;
  this.dd = function () {
    var aB;
    var ys = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6];
    for (aB = 0; aB < ys.length; aB++) {
      var color = ys[aB] === 6 ? bB.o9 : bB.nh;
      this.yi.push(bA.canvas.yt(ab.get(3), ys[aB], color));
    }
    for (aB = 0; aB < aj.rr.yu; aB++) {
      yn.push(aj.rr.yv - aj.rr.yu + aB);
    }
    for (aB = 0; aB < aj.rr.yw; aB++) {
      yn.push(aj.rr.yx + aB);
    }
    var yy = aj.rr.yz(bK.yy);
    for (aB = 0; aB < yy.length; aB++) {
      yn.push(yy[aB]);
    }
    z0();
  };
  function z0() {
    var aB;
    var qI = bj.eK.data[120].value;
    var g = qI.split(",");
    if (g.length !== 18) {
      for (aB = 0; aB < 9; aB++) {
        yl[aB] = {
          pK: 1015 + aB,
          kF: 0
        };
      }
      return;
    }
    for (aB = 0; aB < 9; aB++) {
      var fF = parseInt(g[aB]);
      fF = fF >= 0 && fF < aj.rr.yv ? fF : 0;
      var f8 = parseInt(g[aB + 9]);
      f8 = f8 >= 0 && f8 < 1000 ? f8 : 0;
      yl[aB] = {
        pK: fF,
        kF: f8
      };
    }
  }
  function z1() {
    var aB;
    ym = [];
    if (yk === 0) {
      for (aB = 0; aB < 9; aB++) {
        ym.push(yl[aB].pK);
      }
    } else {
      var f7 = yk * 49;
      var f6 = f7 - 49;
      if (f6 >= yn.length) {
        yk = 1;
        f6 = 0;
        f7 = 49;
      }
      f7 = Math.min(f7, yn.length);
      f6 = f7 - 49;
      for (aB = f6; aB < f7; aB++) {
        ym.push(yn[aB]);
      }
    }
    ym.push(1024);
  }
  function z2(pK) {
    var aB;
    for (aB = 0; aB < 9; aB++) {
      yl[aB].kF = Math.floor(yl[aB].kF * 0.99);
    }
    for (aB = 0; aB < 9; aB++) {
      if (pK === yl[aB].pK) {
        yl[aB].kF = Math.min(yl[aB].kF + 30, 999);
        z3();
        return;
      }
    }
    yl.splice(5, 0, {
      pK: pK,
      kF: Math.max(yl[4].kF, 30)
    });
    yl.pop();
    z3();
  }
  function z3() {
    var aB;
    yl.sort(function (f6, f7) {
      return f7.kF - f6.kF;
    });
    var qI = "" + yl[0].pK;
    for (aB = 1; aB < 9; aB++) {
      qI += "," + yl[aB].pK;
    }
    for (aB = 0; aB < 9; aB++) {
      qI += "," + yl[aB].kF;
    }
    bj.eK.vF(120, qI);
  }
  this.show = function (lP, lQ, z4) {
    yo = lP;
    yp = lQ;
    yk = z4 || 0;
    this.hZ = true;
    z1();
    var gG = ym.length;
    hj = Math.floor((a0.a1.hw() ? 0.075 : 0.0468) * h.hx);
    gap = Math.floor(hj / 3);
    yf = hj + gap;
    yq = yg * yf;
    if (yq > h.i) {
      yq = h.i;
      yf = yq / yg;
      hj = yf * 3 / 4;
      gap = yf - hj;
    }
    yh = bL.du(gG, yg) + !!(gG % yg);
    yr = yh * yf;
    if (yr > h.j) {
      yr = h.j;
      yf = yr / yh;
      hj = yf * 3 / 4;
      gap = yf - hj;
    }
    var z5 = gap * 0.5;
    n9 = Math.min(Math.max(lP - yq * 0.5 + z5, z5), h.i - yq + z5);
    nA = Math.min(Math.max(lQ - yr * 0.5 + z5, z5), h.j - yr + z5);
  };
  this.h0 = function (lP, lQ, player) {
    if (!this.hZ) {
      return false;
    }
    if (this.z6(lP, lQ)) {
      var e8 = bL.hv(bL.du(lP - n9 + gap * 0.5, yf), 0, yg - 1);
      e8 += yg * bL.hv(bL.du(lQ - nA + gap * 0.5, yf), 0, yg - 1);
      if (e8 >= ym.length) {
        aL.rs();
        return true;
      }
      var pK = ym[e8];
      if (pK === 1024) {
        this.show(yo, yp, yk + 1);
        return true;
      }
      z2(pK);
      if (player === aD.eX) {
        b8.hD.pJ(pK);
      } else {
        b8.g9.pY(pK, player);
      }
    }
    aL.rs();
    return true;
  };
  this.z6 = function (lP, lQ) {
    return !(lP < n9 - gap * 0.5) && !(lQ < nA - gap * 0.5) && !(lP >= n9 + yq - gap * 0.5) && !(lQ >= nA + yr - gap * 0.5);
  };
  this.uj = function () {
    uk.fillStyle = bB.ng;
    uk.fillRect(n9 - gap * 0.5, nA - gap * 0.5, yq, yr);
    var hf = bc.z7 * 0.5;
    uk.lineWidth = bc.z7;
    uk.strokeStyle = uk.fillStyle = bB.nj;
    uk.strokeRect(n9 - gap * 0.5 + hf, nA - gap * 0.5 + hf, yq - hf * 2, yr - hf * 2);
    uk.imageSmoothingEnabled = true;
    var en = ym.length;
    for (var aB = 0; aB < en; aB++) {
      this.z8(ym[aB], uk, n9 + aB % yg * yf, nA + bL.du(aB, yg) * yf, hj);
    }
    uk.imageSmoothingEnabled = false;
  };
  this.z8 = function (pK, hp, eu, ew, hj) {
    if (pK >= 1024 - aj.rr.yu) {
      var eR = hj / this.yj;
      hp.setTransform(eR, 0, 0, eR, eu, ew);
      hp.drawImage(this.yi[pK - 1024 + aj.rr.yu], 0, 0);
      hp.setTransform(1, 0, 0, 1, 0, 0);
      return;
    }
    bA.qb.textAlign(hp, 1);
    bA.qb.textBaseline(hp, 1);
    hp.font = bA.qb.sQ(0, hj * 0.89);
    hp.fillText(aj.rr.z9(pK), eu + hj * 0.5, ew + (0.56 + (0.35 - bA.qb.zA)) * hj);
  };
}
function yd() {
  this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉", "🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"];
  this.yu = 13;
  this.yw = this.emojis.length;
  this.yx = 676;
  this.yv = 1024;
  this.zB = this.emojis.indexOf("💀");
  this.zC = this.zB + 1;
  this.zD = this.emojis.indexOf("🥇");
  this.zE = this.emojis.indexOf("😊");
  this.z9 = function (fF) {
    if (fF < this.yx) {
      return String.fromCharCode(55356, 56806 + bL.du(fF, 26), 55356, 56806 + fF % 26);
    }
    return this.emojis[Math.min(fF - this.yx, this.yw - 1)];
  };
  this.yz = function (qI) {
    var en = qI.length - 2;
    var g = [];
    for (var aB = 0; aB < en; aB++) {
      var zF = qI.charCodeAt(aB) - 56806;
      var zG = qI.charCodeAt(aB + 2) - 56806;
      if (zF >= 0 && zF < 26 && zG >= 0 && zG < 26) {
        g.push(zF * 26 + zG);
        aB += 3;
      }
    }
    return g;
  };
  this.zH = function (fF) {
    return fF < this.yx;
  };
  this.zI = function (fF) {
    return fF >= 1024 - this.yu;
  };
  this.zJ = function (fF) {
    return fF >= this.yx && fF < this.yx + this.zC;
  };
}
function c3() {
  this.st = new zK();
  this.w7 = new zL();
  this.w9 = new zM();
  this.dd = function () {
    this.st.dd();
  };
}
function zL() {
  this.wM = function (qI) {
    var en = qI.length;
    var i = bD;
    for (var aB = 0; aB < en; aB++) {
      i.a8(16, qI.charCodeAt(aB));
    }
  };
}
function zK() {
  var zN = new Uint8Array(64);
  this.dd = function () {
    var aB;
    zN[0] = 45;
    zN[37] = 95;
    for (aB = 0; aB < 10; aB++) {
      zN[aB + 1] = 48 + aB;
    }
    for (aB = 0; aB < 26; aB++) {
      zN[aB + 11] = 65 + aB;
      zN[aB + 38] = 97 + aB;
    }
  };
  this.sv = function (zO) {
    var wC = bH;
    var wK = new Uint8Array(zO);
    for (var aB = 0; aB < zO; aB++) {
      wK[aB] = wC.pj(6);
    }
    return wK;
  };
  this.su = function (wK) {
    var en = wK.length;
    var zP = zN;
    var g = [];
    for (var aB = 0; aB < en; aB++) {
      g.push(String.fromCharCode(zP[wK[aB]]));
    }
    return g.join("");
  };
  this.zQ = function (value, zR) {
    var zP = zN;
    var g = [];
    for (var aB = 0; aB < zR; aB++) {
      g.push(String.fromCharCode(zP[value >> (zR - 1 - aB) * 6 & 63]));
    }
    return g.join("");
  };
}
function cB() {
  var zS;
  var zT;
  var zU;
  function zV() {
    zS = [32, 65, 191, 913, 931];
    zT = [64, 127, 688, 930, 1155];
    zU = new Array(zS.length + 1);
    for (var aB = 0; aB < zU.length; aB++) {
      zU[aB] = 0;
      for (var f6 = aB - 1; f6 >= 0; f6--) {
        zU[aB] += zT[f6] - zS[f6];
      }
    }
  }
  zV();
  this.wD = function (qI) {
    qI = qI.trim();
    if (qI.indexOf("Bot ") === 0) {
      return false;
    }
    if (qI.indexOf("[Bot] ") === 0) {
      return false;
    }
    return zW(qI, 3, 20);
  };
  function zW(qI, zX, zY) {
    qI = qI.trim();
    var en = qI.length;
    if (en < zX || en > zY) {
      return false;
    }
    var zZ = 0;
    var f8;
    for (var aB = 0; aB < en; aB++) {
      f8 = qI.charCodeAt(aB);
      zZ += f8 >= 65 && f8 <= 90 || f8 >= 1040 && f8 <= 1071 ? 1 : 0;
      if (za(f8) === -1) {
        return false;
      }
    }
    if (zZ > 3 && zZ > Math.floor(en / 2)) {
      return false;
    }
    return true;
  }
  this.zb = function (qI) {
    qI = qI.trim();
    var en = qI.length;
    var g = [];
    var f8;
    for (var aB = 0; aB < en; aB++) {
      f8 = qI.charCodeAt(aB);
      var gL = za(f8);
      g.push(zU[gL] + f8 - zS[gL]);
    }
    return g;
  };
  this.wR = function (g) {
    var qI = "";
    var en = g.length;
    var f8;
    var f7;
    for (var aB = 0; aB < en; aB++) {
      for (f7 = 1; f7 < zU.length; f7++) {
        if (g[aB] < zU[f7]) {
          f8 = zS[f7 - 1] + g[aB] - zU[f7 - 1];
          qI += String.fromCharCode(f8);
          break;
        }
      }
    }
    return qI;
  };
  function za(f8) {
    for (var aB = zS.length - 1; aB >= 0; aB--) {
      if (f8 >= zS[aB] && f8 < zT[aB]) {
        return aB;
      }
    }
    return -1;
  }
  this.zc = function (qI) {
    var g = this.zb(qI);
    var result = "";
    for (var aB = 0; aB < g.length; aB++) {
      result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "";
      result += g[aB].toString(10);
    }
    return result;
  };
  this.zd = function (qI) {
    var g = new Array(Math.floor(qI.length / 3));
    for (var aB = 0; aB < qI.length; aB += 3) {
      g[Math.floor(aB / 3)] = parseInt(qI.substring(aB, aB + 3));
    }
    return this.wR(g);
  };
  this.ze = function (qI) {
    var aB;
    var fF;
    var g = [qI.length];
    for (aB = 0; aB < qI.length; aB++) {
      g[aB] = qI.charCodeAt(aB) - 48;
    }
    var result = "";
    for (aB = 0; aB < qI.length; aB++) {
      if (aB === qI.length - 1 || g[aB] * 10 + g[aB + 1] > 51) {
        result += g[aB].toString();
      } else {
        fF = g[aB] * 10 + g[aB + 1];
        result += String.fromCharCode(fF + (fF < 26 ? 65 : 71));
        aB++;
      }
    }
    return result;
  };
  this.zf = function (qI) {
    var result = "";
    var f8;
    for (var aB = 0; aB < qI.length; aB++) {
      f8 = qI.charCodeAt(aB);
      if (f8 >= 48 && f8 < 58) {
        result += String.fromCharCode(f8);
      } else if (f8 >= 65 && f8 < 75) {
        result += "0" + (f8 - 65).toString();
      } else if (f8 >= 75 && f8 < 91) {
        result += (f8 - 65).toString();
      } else if (f8 >= 97 && f8 < 123) {
        result += (f8 - 71).toString();
      }
    }
    return result;
  };
  this.zg = function (qI) {
    var en = qI.length;
    var f8;
    var aB;
    var g = [];
    for (aB = 0; aB < en; aB++) {
      f8 = qI.charCodeAt(aB);
      if (f8 < 58) {
        g.push(qI[aB]);
        continue;
      } else if (f8 < 91) {
        f8 -= 65;
      } else {
        f8 -= 71;
      }
      g.push(String(bL.du(f8, 10)));
      g.push(String(f8 - bL.du(f8, 10) * 10));
    }
    en = g.length - 2;
    f8 = 0;
    var wK = [];
    for (aB = 0; aB < en; aB += 3) {
      wK[f8++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
    }
    return wK;
  };
  this.zh = function () {
    var aB;
    var e7;
    var zi = "";
    for (aB = 0; aB < 6; aB++) {
      e7 = 48 + ay.random() % 36;
      e7 += e7 >= 58 ? 39 : 0;
      zi += String.fromCharCode(e7);
    }
    return zi;
  };
}
function zM() {
  this.zb = function (qI, x0, zj) {
    var zk = [];
    var en = qI.length;
    var max = 0;
    for (var aB = 0; aB < en; aB++) {
      var fF = qI.charCodeAt(aB);
      zk.push(fF);
      max = Math.max(max, fF);
    }
    var x1 = max < 128 ? 7 : 16;
    zj.a8(x0, en);
    zj.a8(1, +(x1 === 16));
    for (aB = 0; aB < en; aB++) {
      zj.a8(x1, zk[aB]);
    }
  };
}
function dA() {
  this.zl = new zm();
  this.result = new zn();
  this.zo = new zp();
  this.zq = new zr();
  this.zs = new zt();
  this.zu = new zv();
  this.dd = function () {
    this.result.dd();
  };
}
function zp() {
  this.zw = function () {
    var en = al.kg;
    var zx = al.kl;
    var zy = [];
    for (var aB = 0; aB < en; aB++) {
      var gL = zx[aB];
      if (bA.g9.zz(gL)) {
        zy.push(gL);
      }
    }
    return zy;
  };
  this.a00 = function () {
    if (bg.kX[aD.a01] === 0) {
      return this.a02();
    }
    bh.kB(aD.a01);
    var zy = [];
    var en = bO.fI[0];
    var fR = bO.fR;
    for (var aB = 0; aB < en; aB++) {
      var gL = fR[aB];
      if (bA.g9.zz(gL)) {
        zy.push(gL);
      }
    }
    return zy;
  };
  this.a02 = function () {
    var gL = ll[0];
    if (bA.g9.zz(gL)) {
      return [gL];
    }
    return [];
  };
  this.a03 = function (zy) {
    var en = zy.length;
    var dt = 0;
    var gb = ag.gb;
    for (var aB = 0; aB < en; aB++) {
      dt += gb[zy[aB]];
    }
    return dt;
  };
}
function zm() {
  this.a04 = function () {
    if (a05()) {
      return;
    }
    aD.a06 = 2;
    a07();
  };
  this.a08 = function () {
    if (a05()) {
      return;
    }
    aD.a06 = 1;
    a07();
  };
  function a05() {
    if (aD.a09 === 2) {
      return true;
    }
    aw.a0A();
    aD.a09 = 2;
    aD.a0B = aD.a0C;
    return false;
  }
  function a07() {
    bR.zs.a0D();
    aX.show(aD.a0E === 1, false, aD.a0E === 2);
    bR.result.a0D();
    bR.zu.j3();
    bR.zq.j3();
    aN.a0F(true);
    aN.a0G(247);
    aN.a0G(956);
    aN.a0G(957);
    aV.mV(true);
    aW.mV(true);
    aw.mV();
    bC.a0H();
    if (aD.gw) {
      bf.a0I.a0J();
    }
    bf.dl = true;
    bb.a0K();
    a0.a1.setState(0);
  }
}
function zr() {
  this.j3 = function () {
    if (aD.a06 === 2) {
      aN.a0L(0, 59);
      aH.nI(2700);
      return;
    }
    if (aD.kS < 7) {
      a0M();
      return;
    }
    if (aD.kS === 8) {
      a0N();
      return;
    }
    if (aD.kS === 9) {
      a0O();
      return;
    }
    a0P();
  };
  function a0N() {
    if (aD.a0E) {
      aN.a0L(aD.a0Q, 2);
    } else {
      aN.a0L(1 - aD.eX, 3);
    }
    aD.a0R.yR(aD.a0Q);
    aH.n4(aD.a0Q, 2700, false, 0);
  }
  function a0M() {
    var a0S = bg.kX[aD.a01];
    var a0T = bg.a0U[a0S];
    aQ.a0V(L(26, [a0T]), 2, 1, 12);
    aN.yb(0, L(27, [a0T]), 40, 0, bB.nj, bB.ng, -1, false);
    aH.nI(2700);
  }
  function a0O() {
    aN.a0W();
    aH.nI(2700);
  }
  function a0P() {
    aN.a0X(aD.a0Q);
    aH.n4(aD.a0Q, 2700, false, 0);
  }
}
function zv() {
  this.j3 = function () {
    if (bR.result.a0Y === 0 || bR.result.zy.length === 0 || aD.kS === 8) {
      if (bA.g9.gz(aD.eX)) {
        a0Z();
      }
      return;
    }
    var a0a = a0b();
    a0c(a0a);
    if (aD.a06 === 2 || aD.kS >= 7) {
      return;
    }
    a0d(a0a);
  };
  this.a0e = function () {
    if (aD.kU) {
      return;
    }
    var a0f = ag;
    var wk = aD.eX;
    if (a0f.a0g[wk] === 0 || a0f.jD[wk] < 1 || a0f.q0[wk] * 2 > (a0f.jC[wk] + a0f.jD[wk]) * 3) {
      return;
    }
    a0Z();
  };
  function a0h() {
    if (aD.kS === 8) {
      return 0;
    }
    var tE = Math.floor(ag.a0i[aD.eX] / 50);
    tE = Math.min(tE, 400);
    return tE / 100;
  }
  function a0Z() {
    var tE = a0h();
    if (tE === 0) {
      return;
    }
    aN.yb(440, L(28, [tE.toFixed(2)]), 40, 0, bB.o1, bB.ng, -1, false);
  }
  function a0b() {
    aN.yb(520, L(29), 40, 0, bB.nj, bB.ng, -1, false);
    var zy = bR.result.zy;
    var en = zy.length;
    var gb = ag.gb;
    var g = [];
    for (var aB = 0; aB < en; aB++) {
      var gL = zy[aB];
      g.push({
        gL: gL,
        dt: gb[gL]
      });
    }
    g.sort((f6, f7) => f7.dt - f6.dt);
    var a0U = ag.yc;
    var dt = bR.result.a0j;
    var tE = bR.result.a0Y;
    var qI = "";
    var a0k = "";
    var a0a = 0;
    for (aB = 0; aB < en; aB++) {
      var hX = g[aB].dt * tE / (dt * 100);
      var a0l = a0U[g[aB].gL] + ": " + hX.toFixed(2) + "   ";
      a0k += a0l;
      if (g[aB].gL === aD.eX) {
        a0a = hX;
      }
      if (aB > 2 && en !== 4) {
        if (aB === 3) {
          qI += "(" + L(30, [en - 3]) + ")";
        }
        continue;
      }
      qI += a0l;
    }
    aN.yb(560, bA.ra.a0m(qI), 40, 0, bB.o1, bB.ng, -1, false);
    if (a0a) {
      aN.yb(580, L(31, [a0a.toFixed(2) + " + " + a0h().toFixed(2)]), 40, 0, bB.o1, bB.ng, -1, false);
    } else if (bA.g9.gz(aD.eX)) {
      a0Z();
    }
    return a0a;
  }
  function a0c(a0a) {
    if (aD.kS !== 7 && aD.kS !== 10) {
      return;
    }
    if (aD.a0E === 0) {
      return;
    }
    if (!a0a) {
      return;
    }
    aN.yb(600, L(32, [a0a.toFixed(2)]), 40, 0, bB.nj, bB.ng, -1, false);
  }
  function a0d(a0a) {
    var zy = bR.result.zy;
    var en = zy.length;
    var a0n = ag.a0n;
    var gb = ag.gb;
    var a0o = [];
    loop: for (var aB = 0; aB < en; aB++) {
      var gL = zy[aB];
      var a0p = bA.ra.a0q(a0n[gL]);
      if (a0p === null) {
        continue;
      }
      var a0r = gb[gL];
      for (var f7 = a0o.length - 1; f7 >= 0; f7--) {
        if (a0p === a0o[f7].name) {
          a0o[f7].dt += a0r;
          a0o[f7].g.push({
            gL: gL,
            dt: a0r
          });
          continue loop;
        }
      }
      a0o.push({
        name: a0p,
        dt: a0r,
        g: [{
          gL: gL,
          dt: a0r
        }]
      });
    }
    if (a0o.length === 0) {
      return;
    }
    a0o.sort((f6, f7) => f7.dt - f6.dt);
    var g = a0o[0].g;
    g.sort((f6, f7) => f7.dt - f6.dt);
    var a0s = "[" + a0o[0].name + "]";
    var tE = bR.result.a0Y;
    var a0t = tE * 512 / 26214400;
    aN.yb(0, L(33, [a0s, a0t.toFixed(4)]), 40, 0, bB.nj, bB.ng, -1, false);
    var l5 = g.length;
    var wI = a0o[0].dt;
    var a0u = a0t * 10000;
    for (aB = 0; aB < l5; aB++) {
      if (g[aB].gL === aD.eX) {
        aN.yb(600, L(34, [(a0u * g[aB].dt / (wI * 10)).toFixed(2)]), 40, 0, bB.nj, bB.ng, -1, false);
        aN.yb(640, L(35, [(a0a * 0.2).toFixed(2), a0s]), 40, 0, bB.nj, bB.ng, -1, false);
        break;
      }
    }
    if (!aD.gw) {
      aN.yb(720, L(36) + bK.a0v, 736, 0, bB.nj, bB.o7, -1, false);
    }
  }
}
function zn() {
  this.dd = function () {
    this.a0w = 0;
    this.zy = [];
    this.a0j = 0;
    this.a0Y = 0;
  };
  this.a0D = function () {
    if (aD.kU) {
      return;
    }
    a0x(this);
  };
  function a0x(sD) {
    if (aD.a06 === 2) {
      sD.zy = bR.zo.zw();
    } else if (aD.hh) {
      sD.zy = bR.zo.a00();
    } else {
      sD.zy = bR.zo.a02();
    }
    sD.a0w = bi.a0y.a0z();
    sD.a0j = Math.max(1, bR.zo.a03(sD.zy));
    b8.g9.ph();
    if (aD.kS === 8) {
      a10();
      return;
    }
    sD.a0Y = bR.result.a0w * 100 * (1 + aD.ya);
  }
  function a10() {
    bR.result.a0Y = 0;
  }
}
function zt() {
  this.a0D = function () {
    if (aD.a06 === 2) {
      aD.a0E = 2;
      return;
    }
    a11();
  };
  function a11() {
    if (aD.kS === 8) {
      if (bA.g9.jX(0) || ag.mj[0] === 0) {
        aD.a0Q = 1;
      } else if (bA.g9.jX(1) || ag.mj[1] === 0) {
        aD.a0Q = 0;
      } else {
        aD.a0Q = +(ag.gb[1] > ag.gb[0]);
      }
      aD.a0E = +(aD.a0Q === aD.eX);
      return;
    }
    if (aD.hh) {
      var ki = bh.a12();
      aD.a01 = ki;
      if (bg.kX[ki]) {
        aD.a0E = +(bg.el[aD.eX] === ki);
        return;
      }
    }
    aD.a0Q = ll[0];
    aD.a0E = +(aD.a0Q === aD.eX);
  }
}
function dF() {
  this.id = 0;
  this.dv = 0;
  this.vT = null;
  this.vU = null;
  this.vV = null;
  this.vb = null;
  this.a1 = new a13();
  this.dd = function () {
    a14(this);
    a15(this);
    a16(this);
  };
  function a16(self) {
    var vT;
    try {
      vT = window.localStorage;
      if (!vT) {
        return;
      }
      vT.setItem("tls7", "1");
      vT.removeItem("tls7");
    } catch (error) {
      return;
    }
    self.vT = vT;
  }
  function a14(self) {
    var dv;
    if (typeof Android === "undefined") {
      return;
    }
    if (typeof Android.getVersion !== "function") {
      return;
    }
    dv = Android.getVersion();
    if (dv < 12) {
      return;
    }
    self.dv = dv;
    self.id = 1;
    self.vU = Android;
  }
  function a15(self) {
    var dv;
    if (typeof mwIOSdataX === "undefined") {
      return;
    }
    if (!window.webkit || !window.webkit.messageHandlers || !window.webkit.messageHandlers.iosCommandA) {
      return;
    }
    self.id = 2;
    self.vV = mwIOSdataX;
    self.vb = window.webkit.messageHandlers.iosCommandA;
    dv = self.vV.version;
    self.dv = dv ? Number(dv) : 0;
  }
}
function a13() {
  this.a17 = function () {
    bj.s3.vo();
    bj.s3.vp();
    b0.y.close(0, 3255);
    if (a0.id === 0) {
      if (a0.vT) {
        a0.vT.clear();
      }
      return;
    }
    if (a0.id === 1) {
      a0.vU.saveString(199, "");
      return;
    }
    if (a0.id === 2) {
      a0.vb.postMessage("clear");
    }
  };
  this.a18 = function () {
    if (a0.id === 2) {
      a0.vb.postMessage("showConsentForm");
      return;
    }
    if (a0.id === 1) {
      a0.vU.setState(7);
      return;
    }
  };
  this.a19 = function () {
    this.setState(14);
  };
  this.hw = function () {
    return bj.eK.vH(2) === 1;
  };
  this.a1A = function () {
    var qI = "";
    bj.eK.vF(102, qI);
  };
  this.setState = function (a1B) {
    if (a0.id !== 1) {
      return;
    }
    if (a0.dv >= 5) {
      a0.vU.setState(a1B);
    }
  };
  this.a2 = function () {
    var a1C;
    if (a0.id === 1 && a0.dv >= 7) {
      a0.vU.setState(5);
      return;
    }
    a1C = new URL(window.location);
    a1C.searchParams.set("v", "" + Math.floor(Math.random() * 1000));
    window.location.href = a1C.toString();
  };
  this.di = function () {
    if (a0.id !== 1 || a0.dv < 17) {
      return;
    }
    a0.vU.saveString(23, document.documentElement.outerHTML);
  };
  this.eI = function () {
    if (a0.id === 0) {
      return;
    }
    if (a0.id === 1) {
      a0.vU.prepareAd("1688441405");
      return;
    }
    if (a0.id === 2) {
      if (a0.dv === 0) {
        a0.vb.postMessage("prepare ad 1770251391");
      } else {
        a0.vb.postMessage("loadAds 1770251391");
      }
    }
  };
  this.eN = function (dt) {
    if (a0.id === 0) {
      return false;
    }
    if (a0.id === 1) {
      return false;
    }
    if (a0.id === 2) {
      if (a0.dv === 0) {
        a0.vb.postMessage("show ad " + dt);
      } else {
        a0.vb.postMessage("showAd");
      }
      return true;
    }
    return false;
  };
  this.dn = function () {
    if (a0.id === 2 && a0.dv < 23) {
      t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a1D + "' target='_blank'>" + bK.a1D + "</a>", true, [new w("⬅️ " + L(37), function () {
        t.u(0);
      }, bB.oO)]));
    }
  };
}
function dU() {
  this.p = [];
  this.a1E = function (a1F, e) {
    this.p.push(e);
    if (t.sq === 8 && a1F === 0) {
      if (e === 4211) {
        a1G(e);
      } else {
        if (bn.a1H && (e === 4495 || e === 4480) && b0.y.a1I !== a1F) {
          t.a1J();
          return;
        }
        if (aa.a1K() !== 8) {
          a1L();
        }
        if (e === 4480) {
          a1M();
          return;
        }
        t.u(4, 0, new v(L(38), a1N(e), true));
      }
      return;
    }
    var a1B = aa.a1K();
    if (a1B === 6) {
      if (e === 4211) {
        a1G(e);
        return;
      } else if (e !== 4215 && e !== 4516 && e !== 4527 && e !== 4533 && e !== 4528) {
        aZ.a1O(a1F);
        return;
      }
    } else if (bn.a1H) {
      if (a1F !== b0.y.a1I) {
        return;
      }
    } else if (a1B === 8) {
      if (a1F === b0.y.a1P && !aD.kU && aD.a09 === 1 && !aD.gw) {
        aN.a1Q(L(39, [e]));
      }
      return;
    } else {
      return;
    }
    a1R(e);
  };
  this.a1S = function (e) {
    this.p.push(e);
    if (aa.a1K() === 8) {
      if (!aD.kU && aD.a09 === 1) {
        aN.a1Q(L(39, [e]));
      }
      return;
    }
    a1R(e);
  };
  this.s = function () {
    var e = 3268;
    this.p.push(e);
    lU(e);
  };
  function a1M() {
    bj.s3.vq();
    t.u(4, 0, new v(L(40), L(41), true));
  }
  function a1G(e) {
    lU(e);
    t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game.", true, [new w("⬅️ " + L(37), function () {
      t.a1J();
    }), new w("🔄 Reload", function () {
      a0.a1.a2();
    }, bB.o6)]));
  }
  function a1R(e) {
    lU(e);
    t.u(4, 5, new v(L(38), a1N(e), true));
  }
  function a1N(e) {
    var qI = " [" + e + "]";
    if (e === 3249 || e === 1006) {
      return "No Internet / No Server Response" + qI;
    }
    if (e === 4527) {
      return "Player already in lobby" + qI;
    }
    if (e === 4530) {
      return "Lobby Timeout" + qI;
    }
    if (e === 4528) {
      return "Lobby Kick: Another login detected." + qI;
    }
    if (e === 4540) {
      return "You have been kicked." + qI;
    }
    if (e === 4495) {
      return "Account doesn't exist.";
    }
    if (e === 4229) {
      return "Bad Internet / Unresponsive Client" + qI;
    }
    if (e === 4555) {
      return "Invalid Account Error. Please Try Again." + qI;
    }
    return "Unknown error" + qI;
  }
  function lU(e) {
    a1L(e);
    t.y.z();
  }
  function a1L(e) {
    var a1B = aa.a1K();
    if (a1B === 6) {
      b0.y.a1T(e);
    } else if (bn.a1H) {
      t.x();
      bn.uD();
      b0.y.close(b0.y.a1I, 3256);
    } else if (a1B === 8) {
      aD.a1U(true);
    }
  }
}
function d4() {
  var a1V;
  var a1W;
  var a1X = -15000;
  var a1Y = false;
  this.a1Z = 0;
  this.a1a = "";
  this.a1b = false;
  this.dd = function () {
    a1c.addEventListener("mousedown", h0, {
      passive: false
    });
    a1c.addEventListener("mousemove", a1d, {
      passive: false
    });
    a1c.addEventListener("mouseup", a1e, {
      passive: false
    });
    a1c.addEventListener("click", click, {
      passive: false
    });
    a1c.addEventListener("mouseleave", a1f, {
      passive: false
    });
    a1c.addEventListener("wheel", a1g, {
      passive: false
    });
    a1c.addEventListener("touchstart", a1h, {
      passive: false
    });
    a1c.addEventListener("touchmove", a1i, {
      passive: false
    });
    a1c.addEventListener("touchend", a1j, {
      passive: false
    });
    a1c.addEventListener("touchcancel", a1k, {
      passive: false
    });
    a1c.addEventListener("dragover", a1l);
    a1c.addEventListener("drop", a1m);
    a1c.addEventListener("dblclick", a1n);
    document.addEventListener("contextmenu", a1o);
    document.addEventListener("keydown", a1p);
    document.addEventListener("keyup", a1q);
    document.addEventListener("visibilitychange", a1r);
    window.addEventListener("resize", resize);
  };
  function h0(e) {
    if (a1s()) {
      return;
    }
    a1Y = true;
    a1t(e, 1);
    b0.y.a1u(b0.y.a1P);
    a1v(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY));
  }
  function a1h(e) {
    a1X = bf.eM;
    a1t(e, 1);
    b0.y.a1u(b0.y.a1P);
    if (e.touches.length > 0) {
      a1V = Math.floor(h.k * e.touches[0].clientX);
      a1W = Math.floor(h.k * e.touches[0].clientY);
      if (!au.a1h(e)) {
        a1v(a1V, a1W);
      }
    }
  }
  function a1v(eu, ew) {
    t.h0(eu, ew);
    if (aD.a09 === 0) {
      aa.h0(eu, ew);
      return;
    }
    if (bC.a1w(eu, ew)) {
      return;
    }
    if (be.h0(eu, ew)) {
      return;
    }
    if (aX.h0(eu, ew)) {
      return;
    }
    if (aL.a1x(eu, ew)) {
      return;
    }
    if (aP.h0(eu, ew)) {
      return;
    }
    if (aM.h0(eu, ew) >= 0) {
      return;
    }
    if (aw.h0(eu, ew)) {
      return;
    }
    if (bJ.a1y(eu, ew)) {
      return;
    }
    aL.a1z(eu, ew);
  }
  this.a1y = function (eu, ew) {
    if (bC.h0(eu, ew)) {
      return true;
    }
    if (aV.h0(eu, ew)) {
      return true;
    }
    if (aS.h0(eu, ew)) {
      return true;
    }
    if (aR.h0(eu, ew)) {
      return true;
    }
    if (aN.h0(eu, ew)) {
      return true;
    }
    return false;
  };
  function a1d(e) {
    if (a1s()) {
      return;
    }
    a1Y = true;
    a1t(e, 1);
    a20(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY));
  }
  function a1i(e) {
    a1X = bf.eM;
    a1t(e, 1);
    if (e.touches.length > 0) {
      a1V = Math.floor(h.k * e.touches[0].clientX);
      a1W = Math.floor(h.k * e.touches[0].clientY);
      if (!au.a1i(e)) {
        a20(a1V, a1W);
      }
    }
  }
  function a20(eu, ew) {
    t.a1d(eu, ew);
    if (aD.a09 === 0) {
      aa.a1d(eu, ew);
      return;
    }
    bT.gu(eu, ew);
    if (be.a1d(eu, ew)) {
      return;
    }
    aM.a1d(eu, ew);
    if (aL.hZ()) {
      aL.a1d(eu, ew);
      return;
    }
    if (aR.h1) {
      if (aR.a1d(eu)) {
        bf.dl = true;
      }
      return;
    }
    aV.a1d(eu, ew);
    if (aS.nE) {
      if (aS.a1d(eu, ew)) {
        bf.dl = true;
      }
      return;
    }
  }
  function a1f(e) {
    if (a1s()) {
      return;
    }
    a1t(e, 1);
    a21();
    if (aD.a09 === 0) {
      aa.click(-1024, -1024);
      aT.rc();
      return;
    }
    aV.a22(-1024, -1024);
    aM.a1d(-1024, -1024);
    aR.a23();
    aS.nE = false;
  }
  function a1e(e) {
    if (a1s()) {
      return;
    }
    a1t(e, 1);
    a24(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), e.button === 2);
    if (bJ.a1b) {
      bJ.a1b = false;
      e.preventDefault();
    }
  }
  function click(e) {
    if (a1s()) {
      return;
    }
    a1t(e, 1);
  }
  function a1j(e) {
    a1X = bf.eM;
    a1t(e, 1);
    if (e && e.touches && e.touches.length > 0 && aD.a09 !== 0) {
      aS.nE = false;
      return;
    }
    if (au.a25()) {
      return;
    }
    a24(a1V, a1W, false);
    if (bJ.a1b) {
      bJ.a1b = false;
      e.preventDefault();
    }
  }
  function a1k(e) {
    a1X = bf.eM;
    a1t(e, 1);
    a24(a1V, a1W, false);
    if (bJ.a1b) {
      bJ.a1b = false;
      e.preventDefault();
    }
  }
  function a1l(e) { }
  function a1m(e) { }
  function a1n(e) {
    if (a1s()) {
      return;
    }
    a1t(e, 0);
  }
  function a24(eu, ew, a26) {
    a21();
    if (aD.a09 === 0) {
      aa.click(eu, ew);
      return;
    }
    aV.a22(eu, ew);
    be.a22();
    aR.a23();
    aS.nE = false;
    if (aL.click(eu, ew, a26)) {
      bf.dl = true;
      return;
    }
    if (aM.a1e(eu, ew)) {
      return;
    }
  }
  function a21() {
    t.a21();
  }
  function a1g(e) {
    if (a1s()) {
      return;
    }
    a1t(e, 1);
    b0.y.a1u(b0.y.a1P);
    var eu = Math.floor(h.k * e.clientX);
    var ew = Math.floor(h.k * e.clientY);
    var deltaY = e.deltaY;
    if (e.deltaMode === 1) {
      deltaY *= 16;
    }
    t.a1g(eu, ew, deltaY);
    if (aD.a09 === 0) {
      aa.a1g(eu, ew, deltaY);
      return;
    }
    if (aV.a1g(eu, ew, deltaY)) {
      return;
    }
    if (aR.a27(eu, ew)) {
      if (aR.a1g(deltaY)) {
        bf.dl = true;
      }
      return;
    }
    aS.a1g(eu, ew, deltaY);
  }
  function a1o(e) {
    a1t(e, 0);
  }
  function a1t(e, id) {
    if (id === 0 && t.hZ()) {
      return;
    }
    if (a28()) {
      return;
    }
    if (aa.a1K() === 0) {
      return;
    }
    e.preventDefault();
  }
  function a28() {
    var e7 = window.innerWidth / document.documentElement.clientWidth;
    return e7 < 0.999 || e7 > 1.001;
  }
  function a1p(e) {
    if (a1s()) {
      return;
    }
    if (h.sY > 0) {
      return;
    }
    var code = e.code;
    if (!code || !code.length) {
      return;
    }
    if (bX.f8(code, 18)) {
      ar.a29(3);
    } else if (bX.f8(code, 22)) {
      ar.a29(0);
    } else if (bX.f8(code, 20)) {
      ar.a29(1);
    } else if (bX.f8(code, 24)) {
      ar.a29(2);
    } else if (bX.f8(code, 10)) {
      aR.a2A(31 / 32);
    } else if (bX.f8(code, 8)) {
      aR.a2A(32 / 31);
    } else if (bX.f8(code, 6)) {
      aR.a2A(7 / 8);
    } else if (bX.f8(code, 4)) {
      aR.a2A(8 / 7);
    } else if (bX.f8(code, 14)) {
      if (aD.a09 !== 0) {
        aS.a1g(Math.floor(h.i / 2), Math.floor(h.j / 2), -200);
      }
    } else if (bX.f8(code, 16)) {
      if (aD.a09 !== 0) {
        aS.a1g(Math.floor(h.i / 2), Math.floor(h.j / 2), 200);
      }
    } else if (bX.f8(code, 0)) {
      if (!aD.a09) {
        return;
      }
      bT.gv(0);
    } else if (bX.f8(code, 2)) {
      if (!aD.a09) {
        return;
      }
      bT.gv(1);
    } else if (bX.f8(code, 30)) {
      if (!aD.a09) {
        return;
      }
      bT.gv(2);
    } else if (bX.f8(code, 26)) {
      if (!aD.a09) {
        return;
      }
      bT.hT();
    } else if (bX.f8(code, 28)) {
      if (!aD.a09) {
        return;
      }
      bT.hY();
    }
  }
  function a1q(e) {
    if (a1s()) {
      return;
    }
    if (h.sY > 0) {
      return;
    }
    if (bf.eM < 400) {
      return;
    }
    var code = e.code;
    if (!code || !code.length) {
      return;
    }
    if (code === "Enter") {
      if (t.a2B(1)) {
        return;
      }
    }
    if (code === "Space") {
      if (t.a2B(0)) {
        return;
      }
    }
    if (bn.a1H) {
      if (bn.uJ.a2B(code)) {
        return;
      }
      if (code === "Escape") {
        bJ.fG();
      }
      return;
    }
    if (aa.a1K() !== 8) {
      if (aa.a2B(e)) {
        bf.dl = true;
        return;
      }
    }
    if (code === "Escape") {
      bJ.fG();
    } else if (bX.f8(code, 18)) {
      ar.a2C(3);
    } else if (bX.f8(code, 22)) {
      ar.a2C(0);
    } else if (bX.f8(code, 20)) {
      ar.a2C(1);
    } else if (bX.f8(code, 24)) {
      ar.a2C(2);
    } else if (bX.f8(code, 12)) {
      bC.a2D(!aD.nC);
    } else if (code === "Space") {
      if (!aD.a09) {
        return;
      }
      if (aM.gx) {
        aM.a2E();
      }
      if (aD.gw) {
        bC.a2F(false);
      }
    }
  }
  function a1r() {
    if (document.visibilityState === "hidden") { } else {
      bf.dl = true;
    }
  }
  function a1s() {
    return a1X + 15000 > bf.eM;
  }
  this.a2G = function () {
    return a1s();
  };
  this.r3 = function () {
    return !a1Y || a1X > 0;
  };
  function resize() {
    h.a2H();
  }
  this.fG = function () {
    if (t.hZ()) {
      t.a2B(2);
      return;
    }
    if (aa.a1K() === 8) {
      if (aD.nC) {
        bC.a2D(false);
        return;
      }
      if (be.hZ) {
        be.a2E();
        return;
      }
      aM.a2E();
      return;
    }
    if (aa.a1K() === 7) {
      return;
    }
    if (aa.a1K() === 6) {
      aZ.a2I();
      return;
    }
  };
}
function bz() {
  this.qb = new a2J();
  this.qj = new a2K();
  this.g9 = new a2L();
  this.ra = new a2M();
  this.yJ = new a2N();
  this.a2O = new a2P();
  this.canvas = new a2Q();
  this.color = new a2R();
  this.a2S = new a2T();
  this.dd = function () {
    this.qb.vn();
  };
}
function a2K() {
  this.wi = function (g) {
    g.fill(0);
  };
  this.a2U = function (g) {
    var aB;
    var en = g.length;
    for (aB = 0; aB < en; aB++) {
      g[aB] = [];
    }
  };
  this.a2V = function (zF, a2W) {
    var aB;
    var zG = bO.fN;
    for (aB = 0; aB < 3; aB++) {
      zG[aB] = a2W * zF[aB];
    }
    return zG;
  };
  this.a2X = function (zF, zG, a2Y) {
    var aB;
    var jP = 0;
    for (aB = 0; aB < 3; aB++) {
      jP += Math.abs(zF[aB] - zG[aB]);
    }
    return jP >= a2Y;
  };
  this.a2Z = function (zF, a2a) {
    var aB;
    for (aB = 0; aB < 3; aB++) {
      zF[aB] = bL.hv(zF[aB] + a2a, 0, 255);
    }
    return zF;
  };
  this.a2b = function (g, tA, tB) {
    tA = tA || 0;
    tB = tB || g.length - 1;
    var a2c = 0;
    for (var aB = tA; aB <= tB; aB++) {
      a2c += g[aB];
    }
    return a2c;
  };
  this.a2d = function (g, a2e) {
    var f6;
    var aB;
    var a2f;
    var en = g.length;
    var a2g = [];
    for (f6 = en - 1; f6 >= 0; f6--) {
      a2f = 0;
      for (aB = 0; aB < en; aB++) {
        if (a2e(g[aB]) < a2e(g[a2f])) {
          a2f = aB;
        }
      }
      en--;
      a2g.push(g[a2f]);
      g[a2f] = g[en];
      g.pop();
    }
    return a2g;
  };
  this.min = function (g) {
    var aB;
    var fF;
    var en = g.length;
    if (en === 0) {
      return 0;
    }
    fF = g[0];
    for (aB = 1; aB < en; aB++) {
      fF = Math.min(fF, g[aB]);
    }
    return fF;
  };
  this.max = function (g) {
    var en = g.length;
    if (en === 0) {
      return 0;
    }
    var fF = g[0];
    for (var aB = 1; aB < en; aB++) {
      fF = Math.max(fF, g[aB]);
    }
    return fF;
  };
  this.a2h = function (g, fF) {
    var en = g.length;
    var gG = 0;
    for (var aB = 0; aB < en; aB++) {
      gG += g[aB] > fF;
    }
    return gG;
  };
  this.a2i = function (a2j, a2k, min) {
    var en = a2k[0];
    for (var aB = en - 1; aB >= 0; aB--) {
      if (a2j[aB] < min) {
        en--;
        a2j[aB] = a2j[en];
      }
    }
    a2k[0] = en;
  };
  this.a2l = function (g, en, value) {
    for (var aB = 0; aB < en; aB++) {
      g[aB] -= value;
    }
  };
  this.a2m = function (g) {
    var en = g.length;
    for (var aB = 0; aB < en; aB++) {
      if (typeof g[aB] !== "string") {
        return false;
      }
    }
    return true;
  };
  this.a2n = function (qI, g, a2o) {
    g.fill(0);
    var tE = qI.split(",");
    var en = Math.min(tE.length, g.length);
    for (var aB = 0; aB < en; aB++) {
      g[aB] = Math.min(parseInt(tE[aB]), a2o);
    }
  };
  this.a2p = function (qI, g, rX) {
    g.fill("");
    var tE = qI.split("\"");
    var en = Math.min(tE.length, g.length * 2);
    var hf = 0;
    for (var aB = 1; aB < en; aB += 2) {
      g[hf++] = tE[aB].slice(0, rX);
    }
  };
  this.a2q = function (g, gG) {
    if (gG === 0) {
      g.fill(0);
      return;
    }
    var a2c = this.a2b(g);
    var en = g.length;
    if (a2c === 0) {
      g.fill(bL.du(gG, en));
    } else {
      for (var aB = 0; aB < en; aB++) {
        g[aB] = bL.du(gG * g[aB], a2c);
      }
    }
    a2c = this.a2b(g);
    if (a2c === 0) {
      g[1] = gG;
      return;
    }
    var hf = 0;
    while (a2c++ < gG) {
      hf = (hf + 1) % en;
      if (g[hf]) {
        g[hf]++;
      }
    }
  };
  this.a2r = function (g) {
    if (!g) {
      return 0;
    }
    var en = g.length;
    if (en === 0) {
      return 0;
    }
    var fF = g[en - 1];
    for (var aB = en - 2; aB >= 0; aB--) {
      if (g[aB] !== fF) {
        return aB + 2;
      }
    }
    return 1;
  };
  this.a2s = function (g) {
    var a2c = 0;
    for (var aB = 0; aB < g.length; aB++) {
      a2c += g[aB].length;
    }
    return a2c;
  };
  this.a2t = function (a2u) {
    var g = [];
    for (var aB = 0; aB < a2u.length; aB++) {
      g = g.concat(a2u[aB]);
    }
    return g;
  };
  this.has = function (g, fF) {
    var en = g.length;
    for (var aB = 0; aB < en; aB++) {
      if (g[aB] === fF) {
        return true;
      }
    }
    return false;
  };
}
function a2Q() {
  this.yt = function (a2v, e8, a2w) {
    var hj = a2v.height;
    var a2x = bA.qb.wY(hj, hj);
    var hp = bA.qb.getContext(a2x);
    a2y(hj, hp, a2w);
    hp.drawImage(a2v, -e8 * hj, 0);
    return a2x;
  };
  function a2y(i, hp, a2w) {
    hp.fillStyle = a2w;
    hp.beginPath();
    hp.arc(i / 2, i / 2, i * 0.47, 0, Math.PI * 2);
    hp.fill();
  }
  this.a2z = function (a30) {
    var hj = a30.height;
    if (a30.width !== hj) {
      return a30;
    }
    var hp = bA.qb.getContext(a30, true);
    var hm = hp.getImageData(0, 0, hj, hj);
    bA.a2O.a31(hm.data, hj, hj, 0.9);
    hp.putImageData(hm, 0, 0);
    return a30;
  };
}
function a2R() {
  this.a32 = function (fF) {
    return [fF >> 12 & 63, fF >> 6 & 63, fF & 63];
  };
  this.a33 = function (fF) {
    var g = this.a32(fF);
    for (var aB = 0; aB < 3; aB++) {
      g[aB] = ~~(g[aB] * 4.05);
    }
    return g;
  };
  this.a34 = function (fF) {
    var g = this.a33(fF);
    return bA.color.nb(g[0], g[1], g[2]);
  };
  this.a35 = function (g) {
    for (var aB = 0; aB < 3; aB++) {
      g[aB] = ~~(g[aB] / 4.04);
    }
    return (g[0] << 12) + (g[1] << 6) + g[2];
  };
  this.nb = function (e7, tE, f7) {
    return "rgb(" + e7 + "," + tE + "," + f7 + ")";
  };
  this.nd = function (e7, tE, f7, f6) {
    return "rgba(" + e7 + "," + tE + "," + f7 + "," + f6.toFixed(3) + ")";
  };
  this.r5 = function (f8) {
    var g = f8.split("(")[1].split(",");
    var fM = bO.fM;
    for (var aB = 0; aB < 3; aB++) {
      fM[aB] = parseInt(g[aB]);
    }
    if (g.length === 4) {
      fM[3] = parseFloat(g[3].slice(0, -1)) * 255;
    } else {
      fM[3] = 255;
    }
    return fM;
  };
  this.r6 = function (a36, eq) {
    var qI = a36.slice(a36.indexOf("(") + 1, a36.indexOf(")"));
    var g = qI.split(",");
    var fM = bO.fM;
    for (var aB = 0; aB < 3; aB++) {
      fM[aB] = bL.hv(parseInt(g[aB].trim(), 10) + eq, 0, 255);
    }
    if (g.length === 3) {
      return this.nb(fM[0], fM[1], fM[2]);
    }
    var alpha = parseFloat(g[3].trim());
    alpha = alpha === 0 ? 0.3 : alpha;
    return this.nd(fM[0], fM[1], fM[2], alpha);
  };
  this.a37 = function (g) {
    var qI = "#";
    for (var aB = 0; aB < 3; aB++) {
      var e7 = g[aB].toString(16);
      qI += e7.length === 1 ? "0" + e7 : e7;
    }
    return qI;
  };
  this.a38 = function (qI) {
    if (qI.length < 7) {
      return bB.na;
    }
    var e7 = parseInt(qI.slice(1, 3), 16);
    var tE = parseInt(qI.slice(3, 5), 16);
    var f7 = parseInt(qI.slice(5, 7), 16);
    return this.nb(e7, tE, f7);
  };
}
function a2N() {
  this.a39 = function (qI, font, maxWidth) {
    if (font) {
      uk.font = font;
    }
    var i = uk.measureText(qI).width;
    if (i <= maxWidth) {
      return qI;
    }
    var a3A = "...";
    for (var aB = qI.length - 1; aB >= 1; aB--) {
      qI = qI.substring(0, aB);
      i = uk.measureText(qI + a3A).width;
      if (i <= maxWidth) {
        return qI + a3A;
      }
    }
    return a3A;
  };
}
function a2T() {
  var a3B = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  this.a3C = function (eM) {
    var a3D;
    var a3E;
    var gM;
    var qI = new Date(eM.getTime() - eM.getTimezoneOffset() * 60000).toUTCString();
    if (qI.length < 12) {
      return qI;
    }
    qI = qI.substring(5, qI.length);
    a3D = eM.getTimezoneOffset();
    if (a3D === 0) {
      return qI;
    }
    a3E = bL.du(Math.abs(a3D), 60);
    a3E = (a3D < 0 ? "+" : "-") + a3E;
    gM = Math.abs(a3D) % 60;
    if (gM === 0) {
      return qI + a3E;
    }
    return qI + a3E + ":" + (gM < 10 ? "0" : "") + gM;
  };
  this.a3F = function (eM) {
    var qI = eM.toUTCString();
    if (qI.length < 12) {
      return qI;
    }
    return a3G(eM) + ", " + qI.substring(5, qI.length - 4);
  };
  function a3G(eM) {
    return a3B[eM.getUTCDay()];
  }
}
function a2J() {
  var a3H = null;
  this.zA = 0;
  this.vn = function () {
    var fF = bj.eK.data[5].value;
    a3H = "px " + fF;
    if (fF !== "sans-serif") {
      a3H += ", sans-serif";
    }
    this.zA = hi(32, 32, ["a", "b", "m"], 200, a3H);
  };
  this.wY = function (i, j) {
    var f8 = document.createElement("canvas");
    f8.width = i;
    f8.height = j;
    return f8;
  };
  this.getContext = function (canvas, alpha) {
    return canvas.getContext("2d", {
      alpha: alpha
    });
  };
  this.getImageData = function (yJ, i, j) {
    return yJ.getImageData(0, 0, i, j);
  };
  this.sQ = function (type, size) {
    size = size.toFixed(2);
    if (type === 0) {
      return size + a3H;
    } else if (type === 1) {
      return "bold " + size + a3H;
    } else if (type === 2) {
      return "lighter " + size + a3H;
    } else if (type === 3) {
      return "italic " + size + a3H;
    } else if (type === 4) {
      return "oblique " + size + a3H;
    } else if (type === 5) {
      return "small-caps " + size + a3H;
    } else {
      return "small-caps bold " + size + a3H;
    }
  };
  this.textAlign = function (hp, id) {
    if (id === 0) {
      hp.textAlign = "left";
    } else if (id === 1) {
      hp.textAlign = "center";
    } else {
      hp.textAlign = "right";
    }
  };
  this.textBaseline = function (hp, id) {
    if (id === 1) {
      hp.textBaseline = "middle";
    } else if (id === 2) {
      hp.textBaseline = "bottom";
    } else {
      hp.textBaseline = "top";
    }
  };
  this.ql = function (e, code, color) {
    var fF = this.qk(bc.sS) + " solid " + (color || bB.nj);
    code = code || 5;
    if (code === 5) {
      e.style.border = fF;
    } else if (code === 4) {
      e.style.borderLeft = fF;
    } else if (code === 2) {
      e.style.borderBottom = fF;
    } else if (code === 6) {
      e.style.borderRight = fF;
    } else {
      e.style.borderTop = fF;
    }
  };
  this.tG = function (e, eu, ew, i, j) {
    var qf = e.style;
    qf.left = this.tH(eu);
    qf.top = this.tH(ew);
    qf.width = this.tH(i);
    qf.height = this.tH(j);
  };
  this.qc = function (fF) {
    return 1 + fF * a0.a1.hw();
  };
  this.ru = function (nL, gM) {
    return nL * this.qc(gM === undefined ? 0.5 : gM) * h.hx / h.k;
  };
  this.tF = function (nL, gM) {
    return nL * this.qc(gM === undefined ? 0.5 : gM) * h.hx;
  };
  this.sw = function (nL, gM, a3I) {
    var a3J = this.qc(gM);
    return a3J * Math.min(nL * h.hx, a3I * h.i) / h.k;
  };
  this.qk = function (fF) {
    return fF.toFixed(1) + "px";
  };
  this.tH = function (fF) {
    return this.a3K(fF).toFixed(1) + "px";
  };
  this.a3K = function (fF) {
    return fF / h.k;
  };
  this.a3L = function (sg, a3M) {
    var aB;
    var qI = "<ul>";
    var en = sg.length;
    for (aB = 0; aB < en; aB++) {
      qI += "<li>" + sg[aB] + ": <a href='" + a3M[aB] + "' target='_blank'>" + a3M[aB] + "</a></li>";
    }
    qI += "</ul>";
    return qI;
  };
  this.a3N = function (a3O) {
    return "<a href='" + a3O + "' target='_blank'>" + a3O + "</a>";
  };
  this.a3P = function (e) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(e.value);
    }
  };
  this.a3Q = function (e) {
    var dt = e.textContent;
    if (bA.ra.a3R(dt, "✔")) {
      return;
    }
    if (dt.length === 1) {
      e.textContent = "✔";
    } else {
      e.textContent = dt + " ✔";
    }
    setTimeout(function () {
      e.textContent = dt;
    }, 500);
  };
  this.measureText = function (qI) {
    return uk.measureText(qI).width;
  };
  this.t6 = function (a3S) {
    a3S.style.overflowX = "auto";
    a3S.style.overflowY = "hidden";
    a3S.style.whiteSpace = "nowrap";
    a3S.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) {
        return;
      }
      this.scrollLeft += e.deltaY;
      this.tJ = this.scrollLeft;
      e.preventDefault();
    });
    a3S.addEventListener("scroll", function () {
      this.tJ = this.scrollLeft;
    });
  };
}
function a2L() {
  this.gy = function (a1B) {
    if (a1B === 0) {
      return aD.a09 === 1 && aD.hB;
    }
    if (a1B === 1) {
      return aD.a09 === 1 && !aD.hB;
    }
    return aD.a09 === 2;
  };
  this.gz = function (player) {
    return ag.mj[player] !== 0 && ag.a3T[player] !== 2;
  };
  this.a3U = function (player) {
    return player === aD.eX && ag.a3T[player] !== 2;
  };
  this.ko = function (player, jJ) {
    return player !== jJ && (bg.el[player] === 0 || bg.el[player] !== bg.el[jJ]);
  };
  this.lv = function () {
    var kg = al.kg;
    if (kg < 2) {
      return 0;
    }
    if (!aD.hh) {
      return ag.gb[ll[1]];
    }
    return bh.a3V() > 1;
  };
  this.a3W = function () {
    var kg = al.kg;
    if (kg === 0) {
      return 0;
    }
    if (!aD.hh) {
      return !this.jX(ll[0]);
    }
    var el = bg.el;
    var ki = bh.kj();
    var kl = al.kl;
    for (var aB = kg - 1; aB >= 0; aB--) {
      var gL = kl[aB];
      if (el[gL] === ki && !this.jX(gL)) {
        return 1;
      }
    }
    return 0;
  };
  this.a3X = function (player) {
    return player === aD.eX;
  };
  this.a3Y = function (jJ, nL) {
    return ag.gp[aD.eX] < nL * ag.gp[jJ];
  };
  this.jX = function (player) {
    return player >= aD.kA || ag.a3T[player] === 2;
  };
  this.l8 = function (player) {
    return ag.mj[player] !== 0;
  };
  this.zz = function (player) {
    return player < aD.kA;
  };
  this.py = function (a3Z, a3a) {
    return a3Z !== a3a;
  };
  this.gC = function (player, fF) {
    fF = this.a3b(player, fF);
    ag.gp[player] += fF;
    if (ag.a3c[player]) {
      var min = Math.min(ag.a3c[player], ag.gp[player]);
      ag.a3c[player] -= min;
      ag.gp[player] -= min;
    }
    return fF;
  };
  this.a3b = function (player, fF) {
    var a3d = ag.gp[player];
    fF = Math.min(fF, ag.gb[player] * aD.a3e - a3d);
    fF = Math.min(fF, aD.a3f - a3d);
    return Math.max(fF, 0);
  };
  this.mI = function (player, iN, a3g, a3h) {
    var a3d = ag.gp[player];
    var hW = bL.du(a3d * (iN + 1), 1024);
    var a3i = bL.du(a3g * a3d, 1024);
    hW = Math.min(hW, a3d - a3i);
    if (aD.kS === 10) {
      hW = b4.a3j(player, hW);
    }
    bO.fK[0] = hW;
    bO.fK[1] = a3i;
    return hW >= a3h;
  };
  this.pS = function (player, pA, p9) {
    var a3d = ag.gp[player];
    var a3i = bL.du(a3d * 64, 1024);
    pA = Math.min(pA, a3d - a3i);
    pA = this.a3b(p9, pA);
    bO.fK[0] = pA;
    bO.fK[1] = a3i;
    return pA >= 1;
  };
  this.a3k = function (player, pA, p9) {
    var a3d = ag.gp[player];
    var a3i = bL.du(a3d * 64, 1024);
    pA = Math.min(pA, a3d - a3i);
    return this.a3b(p9, pA);
  };
  this.pU = function (pA, p9) {
    pA = this.a3b(p9, pA);
    bO.fK[0] = pA;
    bO.fK[1] = 0;
    return pA >= 1;
  };
  this.iM = function (player, a3l) {
    return bL.du(ag.gp[player] * (a3l + 1), 1024);
  };
  this.a3m = function (player, a3g) {
    var a3i = bL.du(a3g * ag.gp[player], 1024);
    bO.fK[1] = a3i;
    ag.gp[player] -= a3i;
  };
  this.gA = function (player, a3n) {
    var f7 = ag.gp[player];
    if (a3n <= f7) {
      ag.gp[player] -= a3n;
      return a3n;
    }
    ag.gp[player] = 0;
    var fW = a3n - f7;
    var fY = (fW >> 2) * 5;
    var eq = ag.a3c[player];
    var fa = eq + fY;
    bd.gD(player, fY - fW, 12);
    if (fa <= aD.a3o) {
      ag.a3c[player] = fa;
      return a3n;
    }
    ag.a3c[player] = aD.a3o;
    bd.gD(player, fa - aD.a3o, 18);
    return a3n;
  };
  this.lM = function (player, iN) {
    var gp = ag.gp;
    var a3d = gp[player];
    var hW = bL.du(a3d * (iN + 1), 1024);
    var a3i = Math.max(bL.du(a3d, 10), 1000);
    hW = Math.min(hW, a3d - a3i);
    if (hW < 0) {
      gp[player] = 0;
      a3i = Math.min(1000, a3d + aD.a3o - ag.a3c[player]);
      bO.fK[1] = a3i;
      ag.a3c[player] += a3i - a3d;
      return 0;
    }
    bO.fK[1] = a3i;
    if (aD.kS === 10) {
      hW = b4.a3j(player, hW);
    }
    gp[player] -= a3i + hW;
    return hW;
  };
  this.mK = function (player) {
    ag.gp[player] -= bO.fK[0] + bO.fK[1];
  };
  this.pz = function (player, jJ) {
    jJ = Math.min(jJ, aD.ek);
    if (jJ < aD.ek && ag.mj[jJ] === 0) {
      jJ = aD.ek;
    }
    bO.ej[0] = jJ;
    return jJ === aD.ek || bs.eg(player, jJ);
  };
  this.q2 = function (player, p9) {
    if (ag.mj[p9] === 0) {
      return false;
    }
    return !bs.eg(player, p9);
  };
  this.a3p = function (player, a3q) {
    var aB;
    var gL;
    var en = al.kg;
    var a3r = 0;
    var a3s = ll;
    for (aB = 0; aB < en; aB++) {
      gL = a3s[aB];
      if (!this.jX(gL)) {
        if (player === gL) {
          return true;
        }
        if (++a3r > a3q) {
          return false;
        }
      }
    }
    return false;
  };
  this.lh = function (gL) {
    var a3t;
    if (aD.hh) {
      a3t = bh.kh();
    } else {
      a3t = ag.gb[ll[0]];
    }
    return a3t >= bL.du(gL * aD.ju, 100);
  };
  this.a3u = function (fF, min, max) {
    return Math.floor(bL.hv(isNaN(fF) ? 0 : Number(fF), min, max));
  };
}
function a2P() {
  this.a3v = function (canvas, a3w, a3x) {
    var i = canvas.width;
    var j = canvas.height;
    var f8 = bA.qb.wY(i, j);
    var hp = bA.qb.getContext(f8, true);
    hp.drawImage(canvas, 0, 0);
    var hm = hp.getImageData(0, 0, i, j);
    a3w(hm.data, i, j, a3x);
    hp.putImageData(hm, 0, 0);
    return f8;
  };
  this.a3y = function (wj, i, j) {
    for (var eu = i - 1; eu >= 0; eu--) {
      for (var ew = j - 1; ew >= 0; ew--) {
        var aB = (eu + ew * i) * 4;
        wj[aB + 3] = wj[aB];
        wj[aB] = wj[aB + 1] = wj[aB + 2] = 255;
      }
    }
  };
  this.a3z = function (wj, i, j) {
    for (var eu = i - 1; eu >= 0; eu--) {
      for (var ew = j - 1; ew >= 0; ew--) {
        var aB = (eu + ew * i) * 4;
        if (wj[aB + 1] > wj[aB + 2] + 10) {
          wj[aB + 3] = wj[aB];
          wj[aB + 1] = wj[aB + 2];
        }
      }
    }
  };
  this.a40 = function (wj, i, j, a3x) {
    var gap = Math.floor(Math.min(i, j) * a3x);
    for (var eu = 0; eu < i; eu++) {
      for (var ew = 0; ew < j; ew++) {
        if (eu < gap || ew < gap || eu >= i - gap || ew >= j - gap) {
          var aB = (eu + ew * i) * 4;
          wj[aB + 3] = 255 - (wj[aB + 1] - wj[aB]) * 255 / (255 - wj[aB]);
        }
      }
    }
  };
  this.a41 = function (wj, i, j, a3x) {
    for (var eu = i - 1; eu >= 0; eu--) {
      for (var ew = j - 1; ew >= 0; ew--) {
        var aB = (eu + ew * i) * 4;
        wj[aB] = a3x[0];
        wj[aB + 1] = a3x[1];
        wj[aB + 2] = a3x[2];
      }
    }
  };
  this.a42 = function (wj, i, j, a3x) {
    var gap = Math.floor(i * a3x);
    for (var eu = 0; eu < i; eu++) {
      for (var ew = 0; ew < j; ew++) {
        if (eu < gap || ew < gap || eu >= i - gap || ew >= j - gap) {
          var aB = (eu + ew * i) * 4;
          wj[aB] = wj[aB + 1] = wj[aB + 2] = 0;
        }
      }
    }
  };
  this.a43 = function (wj, i, j) {
    var eu;
    var ew;
    var aB;
    for (eu = i - 1; eu >= 0; eu--) {
      for (ew = j - 1; ew >= 0; ew--) {
        aB = (eu + ew * i) * 4;
        if (wj[aB + 1] > 200 && wj[aB + 1] - 20 > wj[aB] && wj[aB + 1] - 20 > wj[aB + 2]) {
          if (wj[aB] + wj[aB + 2] < 40) {
            wj[aB + 3] = 0;
          } else {
            wj[aB + 3] = wj[aB];
            wj[aB] = 255;
            wj[aB + 1] = 255;
            wj[aB + 2] = 255;
          }
        } else if (wj[aB] < 50 && wj[aB + 1] < 50 && wj[aB + 2] < 50) {
          if (wj[aB] + wj[aB + 1] + wj[aB + 2] < 50) {
            wj[aB + 3] = 180;
          } else {
            wj[aB + 3] = 180 + Math.floor((wj[aB] + wj[aB + 1] + wj[aB + 2] - 50) * 75 / 100);
          }
        }
      }
    }
  };
  this.a44 = function (wj, i, j) {
    var eu;
    var ew;
    var aB;
    for (eu = i - 1; eu >= 0; eu--) {
      for (ew = j - 1; ew >= 0; ew--) {
        aB = (eu + ew * i) * 4;
        if (wj[aB + 1] > wj[aB] + 20 && wj[aB + 1] > wj[aB + 2] + 20 && wj[aB] + wj[2] < 40) {
          wj[aB + 3] = 255 - wj[aB + 1];
          wj[aB] = wj[aB + 1] = wj[aB + 2] = wj[aB];
        }
      }
    }
  };
  this.a31 = function (wj, i, j, a3x) {
    var e7 = i >> 1;
    for (var eu = 0; eu < i; eu++) {
      for (var ew = 0; ew < j; ew++) {
        if (Math.sqrt((eu - e7) * (eu - e7) + (ew - e7) * (ew - e7)) > a3x * e7) {
          wj[(eu + ew * i) * 4 + 3] = 0;
        }
      }
    }
  };
}
function a2M() {
  var a45 = {
    ":joy:": "😂",
    ":rofl:": "🤣",
    ":sob:": "😭",
    ":sad": "😔",
    ":eyes:": "👀",
    ":skull:": "💀",
    ":fire:": "🔥",
    ":100:": "💯",
    ":clown:": "🤡",
    ":sunglasses:": "😎",
    ":thinking:": "🤔",
    ":zzz:": "😴",
    ":rage:": "😡",
    ":poop:": "💩",
    ":thumbsup:": "👍",
    ":thumbsdown:": "👎",
    ":pray:": "🙏",
    ":clap:": "👏",
    ":trophy:": "🏆",
    ":sparkles:": "✨",
    ":heart:": "❤️",
    ":brokenheart:": "💔",
    ":laughing:": "😆",
    ":grimacing:": "😬",
    ":grinning:": "😀",
    ":ok:": "👌",
    ":pepehands:": "🙌",
    ":gold:": "🧈"
  };
  var a46 = new RegExp(":[a-zA-Z0-9_]+:", "g");
  this.rb = function (v0) {
    return v0.replace(a46, function (match) {
      return a45[match] || match;
    });
  };
  this.zQ = function (fF) {
    var aB;
    var a47;
    var a48;
    var a49;
    var a4A;
    if (fF < 0) {
      return "-" + this.zQ(Math.abs(fF));
    }
    if (fF < 1000) {
      return fF.toString();
    }
    a47 = Math.floor(Math.log(fF + 0.5) / Math.log(10)) + 1;
    a48 = Math.floor((a47 - 1) / 3);
    a49 = fF.toString();
    a4A = a49.substring(a47 - 3, a47);
    for (aB = 1; aB < a48; aB++) {
      a4A = a49.substring(a47 - (aB + 1) * 3, a47 - aB * 3) + " " + a4A;
    }
    return a49.substring(0, a47 - a48 * 3) + " " + a4A;
  };
  this.a4B = function (gL, a47) {
    return gL.toFixed(a47) + "%";
  };
  this.a4C = function (fF, a4D) {
    return fF.toFixed(bL.hv(Math.floor((a4D === undefined ? 3 : a4D) - Math.log10(Math.max(fF, 1))), 0, 8));
  };
  this.a4E = function (fF, nL, a47) {
    return (fF * nL).toFixed(a47);
  };
  this.a0q = function (username) {
    var ec;
    var er;
    ec = username.indexOf("[");
    if (ec < 0) {
      return null;
    }
    er = username.indexOf("]");
    if (er - ec > 1 && er - ec <= 8) {
      return username.substring(ec + 1, er).toUpperCase().trim();
    }
    return null;
  };
  this.a4F = function (qI) {
    var f6 = Math.floor(qI.length * 0.5 + 0.5);
    var nR = Math.floor((f6 - 1) * 0.5);
    for (var aB = 0; aB < nR; aB++) {
      for (var f7 = -1; f7 < 2; f7 += 2) {
        var f8 = f6 + f7 * aB;
        if (qI[f8] === " ") {
          return [this.a0m(qI.substring(0, f8)), this.a4G(qI.substring(f8))];
        }
      }
    }
    return [qI.substring(0, f6), qI.substring(f6)];
  };
  this.a4G = function (qI) {
    var en = qI.length;
    for (var aB = 0; aB < en; aB++) {
      if (qI[aB] !== " ") {
        return qI.substring(aB);
      }
    }
    return qI;
  };
  this.a0m = function (qI) {
    var en = qI.length;
    for (var aB = en - 1; aB >= 0; aB--) {
      if (qI[aB] !== " ") {
        return qI.substring(0, aB + 1);
      }
    }
    return qI;
  };
  this.a4H = function (qI, a4I) {
    return qI.split("(")[0] + "(🧈 " + a4I.toFixed(2) + ")";
  };
  this.startsWith = function (qI, a4J) {
    return qI.substring(0, a4J.length) === a4J;
  };
  this.a3R = function (qI, a4J) {
    var en = qI.length;
    return qI.substring(en - a4J.length, en) === a4J;
  };
  this.a4K = function (g, a4L, a4M) {
    var qI = "";
    var en = g.length - 1;
    a4M = a4M || "";
    for (var aB = 0; aB < en; aB++) {
      qI += a4M + g[aB] + a4M + ",";
      if ((aB + 1) % a4L === 0) {
        qI += "\n";
      }
    }
    qI += a4M + g[en] + a4M;
    return qI;
  };
  this.a4N = function (qI, zF, zG) {
    return qI.replace(new RegExp(zF, "g"), zG);
  };
}
function a4O() {
  this.jG = function (player, eZ) {
    if (aI.y3(player, bM.ev(eZ), bM.ex(eZ))) {
      bf.dl = true;
    }
    if (aD.kU) {
      this.j3();
    }
  };
  this.j3 = function () {
    aD.hB = false;
    for (var aB = 0; aB < aD.kA; aB++) {
      if (ag.mj[aB] !== 0 && ag.gb[aB] === 0) {
        aI.yA(aB);
      }
    }
    if (ag.mj[aD.eX] !== 0) {
      bd.mf[7] = ag.gb[aD.eX];
      bd.mf[8] = ag.gp[aD.eX];
      aR.a4P();
      aW.a4Q();
      if (!aD.gw) {
        aH.n3(ag.ie[aD.eX] - 5, ag.ih[aD.eX] - 5, ag.ig[aD.eX] + 5, ag.ii[aD.eX] + 5);
      }
      av.dd();
    } else {
      aX.show(false, false, false, true);
    }
    aN.a4R(18);
    af.a4S();
    af.mV(true);
    bP.y.a4T();
    aL.rs();
    aD.px = null;
    bb.a4U = true;
    bb.a4V();
    if (aD.kU) {
      a0.a1.setState(1);
    }
  };
}
function c1() {
  this.ek = 512;
  this.a3f = 1500000000;
  this.a4W = 1000000000;
  this.a3o = 50000;
  this.a4X = 512;
  this.g7 = 2;
  this.eX = 0;
  this.kA = 0;
  this.a0C = 0;
  this.kW = 0;
  this.a0B = 0;
  this.xE = 512;
  this.xJ = 512;
  this.a3e = 150;
  this.kU = true;
  this.gw = 0;
  this.a09 = 0;
  this.ju = 0;
  this.nC = false;
  this.hB = 0;
  this.a4Y = 0;
  this.hh = false;
  this.xL = 0;
  this.xM = 0;
  this.kS = 0;
  this.ya = 0;
  this.px = null;
  this.a0R = new yP();
  this.a4Z = 30;
  this.a06 = 0;
  this.a0E = 0;
  this.a0Q = 0;
  this.a01 = 0;
  this.data = new a4a();
  this.a4b = new a4c();
  this.a4d = 0;
  this.a4e = "";
  this.a4f = function () {
    bO.dd();
    bR.dd();
    bq.clear();
    this.a0C = this.kA = this.data.humanCount;
    this.kU = this.a0C === 1;
    this.nC = false;
    this.gw = this.data.isReplay;
    this.kS = this.data.gameMode === 0 ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2;
    this.ya = this.data.isContest;
    this.hh = this.kS < 7 || this.kS === 9;
    this.kS = this.kS === 10 && this.kU ? 7 : this.kS;
    this.kS = this.kS === 8 && this.kA !== 2 ? 7 : this.kS;
    az.dd();
    this.xL = this.data.numberTeams;
    if (!this.data.teamPlayerCount) {
      this.xM = 0;
      if (this.hh && this.kU) {
        this.data.teamPlayerCount = new Uint16Array(9);
        this.data.teamPlayerCount.fill(1, 1, this.xL + 1);
        aD.a4b.a4g();
      }
    } else {
      this.xM = +(this.data.teamPlayerCount[0] > 0);
    }
    this.a4Z = this.kA <= 2 ? 30 : this.kA <= 50 ? 40 : 50;
    this.a4Y = this.hB = this.data.selectableSpawn;
    this.px = this.hB ? new a4O() : null;
    if (l.ds === 1) {
      this.xE = this.kA;
    } else {
      this.xE = this.data.playerCount;
    }
    this.xJ = this.xE;
    this.kW = this.xE - this.kA;
    this.a0B = 0;
    this.eX = this.data.selectedPlayer;
    this.a06 = 0;
    this.a0E = 0;
    this.a0Q = 0;
    this.a01 = 0;
    ay.a4h(this.data.spawningSeed);
    ae.dd();
    ag.dd();
    an.dd();
    ai.a4i();
    b8.p2.pl = [];
    bg.dd();
    this.a09 = 1;
    bd.dd();
    a4j();
    ac.de();
    ap.a4k();
    bb.dd();
    ac.dd();
    at.dd();
    bM.dd();
    bN.dd();
    ao.dd();
    bV.a4l();
    aE.dd();
    ai.a7();
    aI.dd();
    aJ.dd();
    al.a4m();
    b9.dd();
    bh.dd();
    bP.dd();
    be.dd();
    a4n.putImageData(a4o, 0, 0);
    aV.dd();
    aS.dd();
    aR.dd();
    bC.dd();
    aw.dd();
    aU.dd();
    aW.dd();
    aM.dd();
    aQ.dd();
    aN.dd();
    aP.dd();
    aL.dd();
    aX.dd();
    aF.dd();
    aG.dd();
    fq();
    ad.dd();
    af.dd();
    b4.dd();
    b5.dd();
    b1.dd();
    this.a0R.dd();
    bf.a4l();
    a4p();
    av.dd();
    bf.dl = true;
    if (!this.gw && (!this.kU || !this.hB)) {
      a0.a1.setState(1);
    }
    this.a4d = 0;
  };
  function a4p() {
    aH.n2();
    if (ag.mj[aD.eX] === 0) {
      aX.show(false, true);
    }
    af.mV(true);
  }
  this.a1U = function (a4q) {
    if (!b9.pv.a4r.length) {
      this.a4e = b9.a4s.zb();
    } else {
      this.a4e = b9.pv.a4r;
    }
    b0.y.a4t();
    bq.clear();
    this.a09 = 0;
    bf.a4u();
    a0.a1.setState(0);
    aa.setState(0);
    if (!a4q) {
      bU.eG.show();
    }
    if (this.a4d === 2) {
      t.y.a4v();
    } else if (this.a4d === 1) {
      t.u(19);
    } else {
      t.u(5, 5);
    }
  };
  this.a4w = function () {
    if (this.gw) {
      return aM.gx || !bC.a4x;
    } else {
      return this.kU && (aM.gx || this.hB);
    }
  };
  this.a4y = function () {
    return this.a09 === 1 && !this.hB;
  };
}
function a4a() {
  this.mapType = 0;
  this.mapProceduralIndex = 2;
  this.mapRealisticIndex = 0;
  this.mapSeed = 14071;
  this.mapName = "";
  this.canvas = null;
  this.passableWater = 1;
  this.passableMountains = 1;
  this.playerCount = 512;
  this.humanCount = 1;
  this.selectedPlayer = 0;
  this.gameMode = 0;
  this.playerMode = 0;
  this.battleRoyaleMode = 0;
  this.numberTeams = 0;
  this.isZombieMode = 0;
  this.isContest = 0;
  this.isReplay = 0;
  this.elo = null;
  this.colorsType = 0;
  this.colorsPersonalized = 1;
  this.colorsData = null;
  this.selectableColor = 1;
  this.teamPlayerCount = null;
  this.neutralBots = 0;
  this.botDifficultyType = 0;
  this.botDifficultyValue = 0;
  this.botDifficultyTeam = null;
  this.botDifficultyData = null;
  this.spawningType = 0;
  this.spawningSeed = 0;
  this.spawningData = null;
  this.selectableSpawn = 1;
  this.playerNamesType = 0;
  this.playerNamesData = null;
  this.selectableName = 1;
  this.aIncomeType = 0;
  this.aIncomeValue = 0;
  this.aIncomeData = null;
  this.tIncomeType = 0;
  this.tIncomeValue = 32;
  this.tIncomeData = null;
  this.iIncomeType = 0;
  this.iIncomeValue = 64;
  this.iIncomeData = null;
  this.sResourcesType = 0;
  this.sResourcesValue = 0;
  this.sResourcesData = null;
}
function a4c() {
  this.a4g = function () {
    var a4z = aD.data;
    bA.qj.a2q(a4z.teamPlayerCount, a4z.playerCount);
    a4z.numberTeams = bA.qj.a2h(a4z.teamPlayerCount, 0);
    if (a4z.teamPlayerCount[0] && a4z.teamPlayerCount[7]) {
      a4z.teamPlayerCount[7] = 0;
      this.a4g();
    }
  };
  this.a50 = function () {
    var a4z = aD.data;
    if (a4z.mapType < 2) {
      bS.a7(bS.a51(a4z), a4z.mapSeed);
    } else {
      bS.a52(a4z.canvas);
    }
  };
  this.a53 = function () {
    var a4z = aD.data;
    if (!a4z.colorsData) {
      a4z.colorsData = new Uint32Array(1);
    }
    if (a4z.selectableColor) {
      a4z.colorsData[0] = bj.y.vm();
    }
    if (a4z.selectableName) {
      if (!a4z.playerNamesData) {
        a4z.playerNamesData = new Array(1);
      }
      a4z.playerNamesData[0] = bj.eK.data[122].value;
    }
  };
  this.a54 = function () {
    aD.data = new a4a();
    aD.data.aIncomeType = 2;
    aD.data.aIncomeData = new Uint8Array(aD.ek);
    aD.data.aIncomeData[0] = 64;
  };
}
function dZ() {
  var a55 = [];
  this.pV = function (player, p9, a56, a57) {
    if (player === aD.eX) {
      return;
    }
    if (p9 === aD.eX) {
      return;
    }
    if (!a57 && bA.g9.jX(player)) {
      return;
    }
    if (bA.g9.jX(p9)) {
      return;
    }
    this.yb(ag.yc[player] + " supported " + ag.yc[p9] + " with " + bA.ra.zQ(a56) + " ressource" + (a56 === 1 ? "." : "s."));
  };
  this.yb = function (qI, pK) {
    var a58 = {
      eM: aW.a59(),
      qI: qI,
      pK: pK
    };
    a55.push(a58);
    if (t.sq === 30) {
      t.a5A().yb(a58);
    }
  };
  this.clear = function () {
    a55 = [];
    var tE = t.a5B(30);
    if (tE) {
      tE.clear();
    }
  };
  this.a5C = function () {
    return a55;
  };
}
function dT() {
  this.z7 = 0;
  this.gap = 0;
  this.sS = 0;
  this.qh = 0;
  this.dd = function () {
    this.resize();
  };
  this.resize = function () {
    this.z7 = bA.qb.qc(0.5) * 0.0022 * h.hx;
    this.sS = this.z7 / h.k;
    this.gap = Math.max(Math.floor((a0.a1.hw() ? 0.0114 : 0.01296) * h.hx), 2);
    this.qh = this.gap / h.k;
  };
}
function dS() {
  this.a5D = function () {
    if (a0.a1.hw()) {
      return 2;
    } else {
      return 1;
    }
  };
}
function cC() {
  var rA;
  var eu;
  var ew;
  var a5E;
  var a5F;
  var a5G;
  var eM;
  var a5H;
  var a5I;
  var a5J;
  var a5K;
  var gap;
  var zoom;
  var pe;
  var a5L;
  this.a5M = function () {
    a5N();
  };
  this.a5O = function () {
    return rA;
  };
  this.dd = function () {
    pe = [];
    eu = ew = eM = 0;
    a5F = a5G = -1000;
    this.resize();
  };
  this.resize = function () {
    a5E = Math.floor((a0.a1.hw() ? 0.075 : 0.0468) * h.hx);
    zoom = a5E / ab.get(3).height;
    gap = Math.floor(a5E / 3);
  };
  function a5N() {
    var aB;
    var f7;
    var en = 10;
    var a5P = [bB.o9, bB.oN, bB.nh, bB.oj, bB.oa];
    rA = new Array(en);
    for (aB = 0; aB < en; aB++) {
      rA[aB] = {
        id: aB,
        hZ: false,
        l7: 0,
        canvas: [],
        eu: 0,
        ew: 0
      };
    }
    rA[0].colors = [0, 1, 2, 3];
    rA[0].eu = 0;
    rA[0].ew = 0;
    rA[1].colors = [1, 4];
    rA[1].eu = 1;
    rA[1].ew = 0;
    rA[2].colors = [0, 1];
    rA[2].eu = -1;
    rA[2].ew = 0;
    rA[3].colors = [0];
    rA[3].eu = 0;
    rA[3].ew = 0;
    rA[4].colors = [0, 2];
    rA[4].eu = 1;
    rA[4].ew = 1;
    rA[5].colors = [3];
    rA[5].eu = 0;
    rA[5].ew = -1;
    rA[6].id = 20;
    rA[6].colors = [0];
    rA[6].eu = 1;
    rA[6].ew = -1;
    rA[7].id = 21;
    rA[7].colors = [0];
    rA[7].eu = 0;
    rA[7].ew = 1;
    rA[8].id = 16;
    rA[8].colors = [0];
    rA[8].eu = 0;
    rA[8].ew = 0;
    rA[9].id = 10;
    rA[9].colors = [4];
    rA[9].eu = 2;
    rA[9].ew = 0;
    for (aB = 0; aB < en; aB++) {
      for (f7 = 0; f7 < rA[aB].colors.length; f7++) {
        rA[aB].canvas.push(wY(rA[aB].id, a5P[rA[aB].colors[f7]]));
      }
    }
  }
  function wY(id, a2w) {
    if (id < 20) {
      return bA.canvas.yt(ab.get(3), id, a2w);
    }
    var hj = ab.get(3).height;
    var a2x = bA.qb.wY(hj, hj);
    var hp = bA.qb.getContext(a2x);
    if (id === 20) {
      hp.drawImage(ab.get(18), 0, 0);
    } else if (id === 21) {
      aj.wj.z8(aj.rr.yx + aj.rr.zE, hp, 0, 0, hj);
    }
    return a2x;
  }
  this.a1x = function (lP, lQ) {
    if (!this.hZ()) {
      return false;
    }
    bf.dl = true;
    if (aj.wj.h0(lP, lQ, a5I)) {
      return true;
    }
    var f7 = h0(lP, lQ);
    this.rs();
    if (f7 === 2) {
      aj.wj.hZ = true;
    }
    return f7 > 0;
  };
  this.a1z = function (lP, lQ) {
    if (this.hZ()) {
      return;
    }
    a5F = lP;
    a5G = lQ;
    eM = performance.now();
  };
  function h0(lP, lQ) {
    a5F = -1000;
    a5G = -1000;
    var a5Q = a5R(lP, lQ);
    var a5S = a5T(a5Q);
    if (a5S === -1) {
      return 0;
    }
    if (rA[a5S].colors[rA[a5S].l7] === 1) {
      return 1;
    }
    if (a5S === 5) {
      a5U();
      if (a5V(a5H)) {
        return 1;
      }
      pe.push(a5H);
      if (pe.length > 16) {
        pe.shift();
      }
      return 1;
    }
    if (a5S === 6) {
      for (var aB = pe.length - 1; aB >= 0; aB--) {
        if (ag.mj[pe[aB]] === 0) {
          pe.splice(aB, 1);
        }
      }
      if (pe.length > 0) {
        if (b5.a5W(1, pe, true)) {
          b8.g9.pd(pe, a5H);
        }
        pe = [];
      }
      return 1;
    }
    if (a5S === 2) {
      if (an.hR(a5H)) {
        b8.hD.p8(aR.hH(), a5H);
      }
      return 1;
    }
    if (a5S === 3) {
      if (aD.hB) {
        b8.hD.hE(a5J);
      }
      return 1;
    }
    if (a5S === 0) {
      if (rA[0].l7 === 0) {
        if (aD.a4Y && aW.a59() < 350) {
          return 1;
        }
        bV.a5X(4);
        b8.hD.hK(aR.hH(), a5H);
      } else {
        b1.hL(a5H, aR.hH());
      }
      return 1;
    }
    if (a5S === 1) {
      b8.hD.hP(aR.hH(), a5J);
      return 1;
    }
    if (a5S === 9) {
      b8.hD.hS(aR.hH());
      return 1;
    }
    if (a5S === 7) {
      bV.a5X(0);
      aj.wj.show(lP, lQ);
      return 2;
    }
    if (a5S === 4) {
      if (b5.a5W(0, [a5H], true)) {
        b8.g9.pa(a5H);
      }
      return 1;
    }
    if (a5S === 8) {
      b8.hD.hG(aR.hH(), a5K, a5H);
      return 1;
    }
    return 0;
  }
  this.click = function (lP, lQ, a26) {
    var h2 = bM.h3(lP);
    var h4 = bM.h5(lQ);
    var eZ = bM.fB(h2, h4);
    var eR = bM.ed(eZ);
    if (!bM.h6(h2, h4)) {
      return false;
    }
    var a5Y = (a0.a1.hw() ? 0.025 : 0.0144) * h.hx;
    var dt = performance.now();
    if (Math.abs(lP - a5F) > a5Y || Math.abs(lQ - a5G) > a5Y || dt > eM + 500) {
      return false;
    }
    eM = dt;
    if (a26) {
      a5Z(lP, lQ, eR);
      return false;
    }
    if (aM.gx || this.hZ() || !bA.g9.gz(aD.eX) || aD.gw) {
      this.rs();
      return false;
    }
    if (aD.hB) {
      a5J = br.hC(eZ);
      if (a5J >= 0) {
        rA[3].hZ = true;
      }
      return this.a5a(lP, lQ);
    }
    if (aD.a09 === 2) {
      if (!ac.gN(eR)) {
        return this.a5a(lP, lQ);
      }
      a5H = ac.ef(eR);
      if (!bA.g9.jX(a5H)) {
        rA[0].hZ = true;
        rA[0].l7 = 1;
        rA[7].hZ = true;
        return this.a5a(lP, lQ);
      }
      return this.a5a(lP, lQ);
    }
    if (bN.hQ.hR(aD.eX, eZ)) {
      rA[0].hZ = true;
      rA[0].l7 = 1;
      rA[1].hZ = true;
      rA[1].l7 = 0;
      rA[9].hZ = true;
      rA[9].l7 = 0;
    }
    if (bN.hN.hO(aD.eX, eZ)) {
      rA[0].hZ = true;
      rA[0].l7 = 1;
      rA[1].hZ = true;
      rA[1].l7 = 1;
      a5J = bO.fP[7];
    }
    if (ac.es(eR)) {
      a5K = am.eO.eQ(eR);
      if (a5K) {
        var ec = bM.ed(a5K);
        rA[8].hZ = true;
        a5H = ac.ee(ec) ? aD.ek : ac.ef(ec);
      }
      return this.a5a(lP, lQ);
    }
    if (ac.y8(aD.eX, eR)) {
      a5I = aD.eX;
      rA[0].hZ = true;
      rA[0].l7 = 1;
      rA[7].hZ = true;
    }
    var a5b = br.hI(eZ);
    if (a5b === -1) {
      return this.a5a(lP, lQ);
    }
    if (ac.ee(a5b << 2)) {
      a5H = aD.ek;
      if (bs.hJ(aD.eX)) {
        rA[0].hZ = true;
        rA[0].l7 = 0;
      } else if (ad.fu(aD.eX)) {
        rA[0].hZ = true;
        rA[0].l7 = 3;
      }
      return this.a5a(lP, lQ);
    }
    a5H = ac.ef(a5b << 2);
    rA[0].l7 = 1;
    rA[5].hZ = a5c(a5H);
    if (!rA[7].hZ && !bA.g9.jX(a5H)) {
      a5I = a5H;
      rA[7].hZ = true;
    }
    rA[4].hZ = !bA.g9.jX(a5H) && !af.a5d(a5H) && b5.a5W(0, [a5H], false);
    rA[6].hZ = a5e(a5H);
    if (bs.eg(a5H, aD.eX)) {
      if (bs.hM(aD.eX, a5H)) {
        rA[0].l7 = 0;
        rA[0].hZ = true;
      } else if (ad.fu(aD.eX)) {
        rA[0].l7 = 3;
        rA[0].hZ = true;
      }
      rA[0].hZ = this.a5f();
      return this.a5a(lP, lQ);
    }
    rA[2].hZ = true;
    if (an.hR(a5H)) {
      rA[2].l7 = 0;
    } else {
      rA[2].l7 = 1;
    }
    rA[0].hZ = true;
    return this.a5a(lP, lQ);
  };
  function a5Z(lP, lQ, eR) {
    var a5g;
    if (ac.ei(eR)) {
      aN.a5h(eR);
      return;
    }
    a5g = bN.kz.a5i(lP, lQ);
    if (a5g === -1) {
      aN.a5h(eR);
    } else {
      aN.a5j(a5g);
    }
  }
  function a5U() {
    var dt = performance.now();
    if (dt > a5L + 4000) {
      pe = [];
    }
    a5L = dt;
  }
  function a5c(a5H) {
    return !bA.g9.jX(a5H) && !a5V(a5H) && b5.a5W(1, [a5H], false);
  }
  function a5e(a5H) {
    if (pe.length === 0) {
      return false;
    }
    if (performance.now() > a5L + 4000) {
      pe = [];
      return false;
    }
    return !a5V(a5H) && !a5k(a5H);
  }
  function a5V(a5H) {
    var aB;
    for (aB = pe.length - 1; aB >= 0; aB--) {
      if (pe[aB] === a5H) {
        return true;
      }
    }
    return false;
  }
  function a5k(a5H) {
    var aB;
    if (!aD.hh) {
      return false;
    }
    for (aB = pe.length - 1; aB >= 0; aB--) {
      if (!bs.eg(a5H, pe[aB])) {
        return true;
      }
    }
    return false;
  }
  this.a5a = function (lP, lQ) {
    eu = lP - Math.floor(a5E / 2);
    ew = lQ - Math.floor(a5E / 2);
    if (this.hZ()) {
      return true;
    }
    return false;
  };
  this.a1d = function (lP, lQ) {
    if (!this.hZ()) {
      return false;
    }
    if (aj.wj.hZ) {
      if (aj.wj.z6(lP, lQ)) {
        return false;
      }
      aj.wj.hZ = false;
      bf.dl = true;
      return true;
    }
    return a5l(this, lP, lQ);
  };
  function a5l(sD, lP, lQ) {
    var e8 = a5R(lP, lQ);
    if (a5T(e8) >= 0) {
      return false;
    }
    if ((e8 === 1 || e8 === 6) && a5T(2) >= 0) {
      return false;
    }
    if ((e8 === 6 || e8 === 9) && a5T(10) >= 0) {
      return false;
    }
    sD.rs();
    bf.dl = true;
    return true;
  }
  function a5T(a5Q) {
    var aB;
    var en;
    if (a5Q === -1) {
      return -1;
    }
    en = rA.length;
    for (aB = 0; aB < en; aB++) {
      if (rA[aB].hZ && rA[aB].eu + 1 === a5Q % 4 && rA[aB].ew + 1 === a5Q >> 2) {
        return aB;
      }
    }
    return -1;
  }
  this.rs = function () {
    for (var aB = rA.length - 1; aB >= 0; aB--) {
      rA[aB].hZ = false;
      rA[aB].l7 = 0;
    }
    aj.wj.hZ = false;
  };
  this.hZ = function () {
    return this.a5f() || aj.wj.hZ;
  };
  this.a5f = function () {
    var aB;
    var en = rA.length;
    for (aB = 0; aB < en; aB++) {
      if (rA[aB].hZ) {
        return true;
      }
    }
    return false;
  };
  function a5R(lP, lQ) {
    var xG;
    var xH;
    var tE = gap / 2;
    if (lP < eu - a5E - tE * 3 || lP > eu + a5E * 3 + tE * 5 || lQ < ew - a5E - tE * 3 || lQ > ew + a5E * 2 + tE * 3) {
      return -1;
    }
    xG = lP < eu - tE ? 0 : lP < eu + a5E + tE ? 1 : lP < eu + a5E * 2 + tE * 3 ? 2 : 3;
    xH = lQ < ew - tE ? 0 : lQ < ew + a5E + tE ? 1 : 2;
    return xH * 4 + xG;
  }
  this.uj = function () {
    if (!this.hZ()) {
      return;
    }
    if (aj.wj.hZ) {
      aj.wj.uj();
      return;
    }
    a5m();
  };
  function a5m() {
    var aB;
    var hp = uk;
    var f7 = rA;
    var en = f7.length;
    var a5n = (a5E + gap) / zoom;
    hp.imageSmoothingEnabled = true;
    hp.setTransform(zoom, 0, 0, zoom, eu, ew);
    for (aB = 0; aB < en; aB++) {
      if (f7[aB].hZ) {
        uk.drawImage(f7[aB].canvas[f7[aB].l7], f7[aB].eu * a5n, f7[aB].ew * a5n);
      }
    }
    hp.imageSmoothingEnabled = false;
    hp.setTransform(1, 0, 0, 1, 0, 0);
  }
}
function cD() {
  var j;
  var canvas;
  var a5o;
  var a5p;
  var a5q;
  var a5r = -1;
  this.gx = false;
  this.dd = function () {
    a5p = -1;
    this.gx = false;
    a5q = a0.a1.hw() ? 1.2 : 0.6;
    this.resize();
  };
  this.resize = function () {
    j = aR.j;
    canvas = document.createElement("canvas");
    canvas.width = j;
    canvas.height = j;
    a5o = bA.qb.sQ(1, (a0.a1.hw() ? 0.5 : 0.45) * j);
    a5s();
  };
  function a5s() {
    var a5t;
    var yJ = canvas.getContext("2d", {
      alpha: true
    });
    yJ.clearRect(0, 0, j, j);
    yJ.fillStyle = bB.nf;
    yJ.fillRect(0, 0, j, j);
    if (a5p === 0) {
      yJ.fillStyle = bB.nk;
      yJ.fillRect(0, 0, j, j);
    }
    yJ.fillStyle = bB.nj;
    yJ.fillRect(0, 0, j, 1);
    yJ.fillRect(0, 0, 1, j);
    yJ.fillRect(0, j - 1, j, 1);
    yJ.fillRect(j - 1, 0, 1, j);
    a5t = j * 0.9 / ab.get(0).width;
    yJ.imageSmoothingEnabled = true;
    yJ.setTransform(a5t, 0, 0, a5t, Math.floor((j - a5t * ab.get(0).width) / 2), Math.floor((j - a5t * ab.get(0).height) / 2));
    yJ.drawImage(ab.get(0), 0, 0);
    yJ.setTransform(1, 0, 0, 1, 0, 0);
  }
  this.a2E = function () {
    this.gx = !this.gx;
    if (!this.gx) {
      a5p = -1;
      a5s();
      if (aD.kU && aD.a09 === 1 && !aD.hB && !aD.gw) {
        a0.a1.setState(1);
      }
    } else {
      bC.a2D(false);
      if (aD.gw && bC.a4x) {
        bC.a2F(true);
      }
      this.a5u();
    }
    bf.dl = true;
  };
  this.a5u = function () {
    if ((aD.kU || aD.gw) && aD.a09 === 1) {
      aV.mV(true);
      if (!aD.hB) {
        setTimeout(function () {
          bb.a0K();
        }, 0);
      }
      a0.a1.setState(0);
    }
  };
  this.h0 = function (lP, lQ) {
    a5r = a5v(lP, lQ);
    if (a5r >= 0) {
      return a5r;
    }
    a5w();
    return a5r;
  };
  function a5w() {
    if (aM.gx && !aD.kU && !aD.gw && !be.hZ) {
      aM.a2E();
    }
  }
  this.a1d = function (lP, lQ) {
    var l7 = a5v(lP, lQ);
    if (l7 === a5p) {
      return;
    }
    a5p = l7;
    if (!this.gx) {
      a5s();
    }
    bf.dl = true;
    return;
  };
  this.a1e = function (lP, lQ) {
    var l7 = a5v(lP, lQ);
    if (l7 === -1) {
      return false;
    }
    if (a5r !== l7) {
      return false;
    }
    if (this.gx) {
      if (aD.nC) {
        if (l7 >= 0) {
          bC.a2D(false);
        }
        return !aD.gw;
      }
      if (l7 === 0) {
        aD.a1U();
        return true;
      }
      if (l7 === 1) {
        this.a2E();
        return true;
      }
      if (l7 === 2) {
        t.u(1, 0);
        return true;
      }
      return true;
    }
    if (l7 === 9) {
      this.a2E();
      return true;
    }
    return false;
  };
  function a5v(lP, lQ) {
    if (!aM.gx) {
      if (lP <= j + bc.gap && lQ >= aR.ew) {
        return 9;
      }
      return -1;
    }
    if (lP <= j * 4 + bc.gap) {
      if (lQ >= aR.ew) {
        return 0;
      }
      if (lQ >= aR.ew - j - a5q * bc.gap) {
        return 2;
      }
    } else if (lP <= j * 7 + bc.gap && lQ >= aR.ew - j - a5q * bc.gap) {
      return 1;
    }
    return -1;
  }
  this.uj = function () {
    if (this.gx) {
      a5x();
      a5y();
      uk.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      uk.drawImage(canvas, bc.gap, aR.ew);
    }
  };
  this.qC = function (player) {
    return ag.mj[player] !== 0 && aD.a09 !== 2 && !bA.g9.jX(player);
  };
  function a5x() {
    var en;
    var i = Math.floor(j * 5.5);
    uk.setTransform(1, 0, 0, 1, bc.gap, aR.ew);
    uk.fillStyle = bB.nf;
    uk.fillRect(0, 0, i, j);
    if (a5p === 0) {
      uk.fillStyle = bB.nk;
      uk.fillRect(0, 0, j * 4, j);
    } else if (a5p === 1) {
      uk.fillStyle = bB.nk;
      uk.fillRect(j * 4, 0, Math.floor(j * 1.5), j);
    }
    uk.fillStyle = bB.nj;
    uk.fillRect(0, 0, i, 1);
    uk.fillRect(0, 0, 1, j);
    uk.fillRect(j * 4, 0, 1, j);
    uk.fillRect(0, j - 1, i, 1);
    uk.fillRect(i - 1, 0, 1, j);
    uk.font = a5o;
    bA.qb.textBaseline(uk, 1);
    bA.qb.textAlign(uk, 1);
    uk.fillText(L(42), j * 2, j * 0.54);
    en = j * 0.4;
    aM.a5z(bc.gap + j * 4 + (j * 1.5 - en) / 2, aR.ew + j * 0.3, en);
  }
  function a5y() {
    a60(1);
  }
  function a60(aB) {
    uk.setTransform(1, 0, 0, 1, bc.gap, aR.ew - aB * a5q * bc.gap - aB * j);
    uk.fillStyle = bB.nf;
    uk.fillRect(0, 0, j * 4, j);
    if (a5p === aB + 1) {
      uk.fillStyle = bB.nk;
      uk.fillRect(0, 0, j * 4, j);
    }
    uk.fillStyle = bB.nj;
    uk.fillRect(0, 0, j * 4, 1);
    uk.fillRect(0, 0, 1, j);
    uk.fillRect(j * 4, 0, 1, j);
    uk.fillRect(0, j - 1, j * 4, 1);
    uk.fillText(aB === 0 ? L(42) : L(43), j * 2, j * 0.54);
  }
  this.a5z = function (eu, ew, en) {
    uk.setTransform(1, 0, 0, 1, eu, ew);
    uk.lineWidth = bc.z7;
    uk.strokeStyle = bB.nj;
    uk.beginPath();
    uk.moveTo(0, 0);
    uk.lineTo(en, en);
    uk.moveTo(0, en);
    uk.lineTo(en, 0);
    uk.stroke();
  };
}
function cE() {
  var a61;
  var j;
  var a62;
  var a63;
  var a64;
  var a65;
  var a66;
  var a67;
  var a68;
  this.a69 = "";
  this.dd = function () {
    a67 = 0;
    a66 = !a0.a1.hw() ? 12 : 7;
    a65 = {
      zx: [0, 0, 0],
      a6A: [0, 0, 0],
      eF: [220, 180, 180],
      ui: [0, 0, 0],
      f8: [0, 0, 0]
    };
    a61 = [];
    this.resize();
    if (aD.hB) {
      this.a0L(0, 18);
    }
    a6B();
    a6C(this);
    if (aD.ya) {
      a6D(340, L(44), 6, 0, a6E(255, 200, 0), bB.ng, -1, false);
    }
  };
  function a6C(self) {
    if (self.a69.length === 0) {
      return;
    }
    a6D(200, self.a69, 0, 0, bB.nj, bB.ng, -1, false);
    self.a69 = "";
  }
  this.resize = function () {
    var a6F;
    var aB;
    j = Math.floor((a0.a1.hw() ? 0.031 : 0.0249) * h.hx);
    j = j < 10 ? 10 : j;
    this.fontSize = Math.floor(j * 2 / 3);
    this.a5o = bA.qb.sQ(1, this.fontSize);
    a62 = bc.gap;
    a63 = Math.floor(j / 5);
    if (a61.length > 0) {
      a6F = a61;
      a61 = [];
      for (aB = a6F.length - 1; aB >= 0; aB--) {
        a6D(a6F[aB].eM, a6F[aB].qI, a6F[aB].id, a6F[aB].player, a6F[aB].a6G, a6F[aB].a6H, a6F[aB].kn, a6F[aB].a6I, a6F[aB].a6J, a6F[aB].a6K, true);
      }
    }
    this.a6L();
  };
  this.a6L = function () {
    a68 = document.createElement("canvas");
    var qI = L(45);
    a64 = aQ.measureText(qI, this.a5o) + a63 * 5;
    a68.height = j;
    a68.width = a64;
    var yJ = a68.getContext("2d", {
      alpha: true
    });
    yJ.font = this.a5o;
    bA.qb.textBaseline(yJ, 1);
    bA.qb.textAlign(yJ, 1);
    yJ.clearRect(0, 0, a64, j);
    yJ.fillStyle = bB.o6;
    yJ.fillRect(0, 0, a64, j);
    yJ.fillStyle = bB.nj;
    yJ.fillText(qI, Math.floor(a64 / 2), Math.floor(j / 2));
  };
  this.a6M = function () {
    if (aw.hZ) {
      return aw.i;
    }
    var en = a61.length;
    if (en === 0) {
      return 0;
    } else if (en === 1) {
      return a61[0].a6N;
    }
    return a6O(a61[0].a6N, a61[1].a6N);
  };
  this.a6P = function () {
    var en = a61.length;
    if (aw.hZ) {
      if (en) {
        return a6O(aw.i, a61[0].a6N);
      }
      return aw.i;
    }
    if (en === 0) {
      return 0;
    } else if (en === 1) {
      return a61[0].a6N;
    } else if (en === 2) {
      return a6O(a61[0].a6N, a61[1].a6N);
    }
    return a6O(a6O(a61[0].a6N, a61[1].a6N), a61[2].a6N);
  };
  function yF() {
    if (aR.a6Q(aN.a6M())) {
      if (aw.hZ) {
        return aR.ew - aR.j - a62 * 2;
      } else {
        return aR.ew - a62;
      }
    } else if (bC.a6Q(aN.a6P())) {
      if (aw.hZ) {
        return bC.yF() - aR.j - a62 * 2;
      } else {
        return bC.yF() - a62;
      }
    } else if (aw.hZ) {
      return h.j - aR.j - (bk.a5D() + 1) * a62;
    }
    return h.j - bk.a5D() * bc.gap;
  }
  this.h0 = function (eu, ew) {
    var aB;
    var a6R;
    var dt;
    var a6S = yF();
    for (aB = a61.length - 1; aB >= 0; aB--) {
      a6R = a6S - (aB + 1) * j;
      if (ew >= a6R && ew < a6R + j) {
        if (a61[aB].id === 50) {
          if (eu >= h.i - a64 - a62 - a61[aB].i) {
            if (eu >= h.i - a64 - a62) {
              b8.g9.pa(a61[aB].player);
            } else {
              aH.n4(a61[aB].player, 800, false, 0);
            }
            return true;
          }
          return false;
        }
        if (eu >= h.i - a61[aB].i - a62) {
          if (a61[aB].id === 736) {
            var a6T = a61[aB].qI.split(" ");
            window.open(a6T[a6T.length - 1], "_blank");
          } else if (a61[aB].a6I) {
            if (a61[aB].a6K && a61[aB].a6K.f6) {
              var eZ = a61[aB].a6K.eZ;
              var n9 = bM.ev(eZ) - 10;
              var nA = bM.ex(eZ) - 10;
              aH.n3(n9, nA, n9 + 19, nA + 19);
            } else if (a61[aB].a6K && a61[aB].a6K.f7) {
              aH.n5(a61[aB].player, a61[aB].a6K.n6);
            } else {
              aH.n4(a61[aB].player, 800, false, 0);
              if (a61[aB].kn >= 0) {
                dt = a61[aB].kn;
                a61[aB].kn = a61[aB].player;
                a61[aB].player = dt;
              }
            }
          }
          return true;
        }
        return false;
      }
    }
    return false;
  };
  this.yb = function (dt, qI, id, gL, a6G, a6H, kn, a6I, a6J, a6K) {
    a6D(dt, qI, id, gL, a6G, a6H, kn, a6I, a6J, a6K);
  };
  this.a6U = function (r) {
    a6D(300, r, 252, 0, bB.nj, bB.ng, -1, false);
  };
  function a6D(dt, qI, id, gL, a6G, a6H, kn, a6I, a6J, a6K, a6V) {
    var aB;
    var yJ;
    var a6N;
    var a2x;
    var qT;
    var a6W = a6J !== undefined;
    var i = Math.floor(aQ.measureText(qI, aN.a5o) + a63 * 1.5 + (a6W ? j : a63 * 1.5));
    bf.dl = true;
    if (!a6V) {
      bq.yb(qI, a6J);
    }
    if (i + a62 * 2 + aR.j > h.i && !a6W && id !== 50 && qI.length > 20) {
      var g = bA.ra.a4F(qI);
      a6D(dt, g[0], id, gL, a6G, a6H, kn, a6I, a6J, a6K, true);
      a6D(dt, g[1], id, gL, a6G, a6H, kn, a6I, a6J, a6K, true);
      return;
    }
    a6N = i + (id === 50 ? a64 : 0);
    a2x = document.createElement("canvas");
    a2x.width = i;
    a2x.height = j;
    yJ = a2x.getContext("2d", {
      alpha: true
    });
    yJ.font = aN.a5o;
    bA.qb.textBaseline(yJ, 1);
    bA.qb.textAlign(yJ, 0);
    yJ.clearRect(0, 0, i, j);
    yJ.fillStyle = a6H;
    yJ.fillRect(0, 0, i, j);
    yJ.fillStyle = a6G;
    yJ.fillText(qI, Math.floor(a63 * 1.5), Math.floor(j / 2));
    if (a6W) {
      yJ.imageSmoothingEnabled = true;
      aj.wj.z8(a6J, yJ, i - j, 0, j);
    }
    qT = {
      eM: dt,
      qI: qI,
      id: id,
      player: gL,
      canvas: a2x,
      a6G: a6G,
      a6H: a6H,
      i: i,
      a6N: a6N,
      kn: kn,
      a6I: a6I,
      a6J: a6J,
      a6K: a6K
    };
    if (qT.eM === 0 || a61.length > 0 && a61[0].eM > 0) {
      a61.unshift(qT);
    } else {
      for (aB = 1; aB < a61.length; aB++) {
        if (a61[aB].eM > 0) {
          a61.splice(aB, 0, qT);
          return;
        }
      }
      a61.push(qT);
    }
  }
  this.a4R = function (id) {
    for (var aB = a61.length - 1; aB >= 0; aB--) {
      if (a61[aB].id === id) {
        a61[aB].eM = 1;
      }
    }
  };
  this.a0L = function (player, id) {
    if (id === 0) {
      aQ.jG(player, 0);
      a6X(423, 2);
      a6D(160, L(46, [ag.yc[player]]), 423, player, "rgb(10,220,10)", bB.ng, -1, false);
    } else if (id === 1) {
      a6Y(50, aD.ek);
      aQ.jG(player, 1);
      a6D(360, L(47, [ag.yc[player]]), 0, player, bB.oP, bB.ng, -1, true);
      aH.n4(player, 2700, false, 0);
    } else if (id === 2) {
      aQ.jG(player, 2);
      a6D(0, L(48), 0, player, "rgb(10,255,255)", bB.ng, -1, true);
      aH.n4(player, 2700, false, 0);
    } else if (id === 3) {
      aQ.jG(player, 2);
      a6D(0, L(49, [ag.yc[player]]), 0, player, bB.nj, bB.ng, -1, true);
      aH.n4(player, 2700, false, 0);
    } else if (id === 4) {
      this.a6Z(1, player, player);
    } else if (id === 5) {
      if (bA.g9.jX(aD.eX)) {
        return;
      }
      a6a(1, 5);
      if (af.a6b(player)) {
        a6D(180, L(50, [ag.yc[player]]), 1, player, a6E(255, 200, 180), bB.ng, -1, true);
      }
      if (!bA.g9.a3Y(player, 10)) {
        return;
      }
      a6X(573, 0);
      a6D(180, L(51, [ag.yc[player]]), 573, player, bB.oP, bB.ng, -1, true);
    } else if (id === 18) {
      a6D(255, L(52), 18, 0, bB.nj, bB.ng, -1, false);
    } else if (id === 21) {
      a6D(220, L(53), id, 0, bB.nj, bB.ng, -1, false);
    } else if (id === 22) {
      this.a6Z(2, player, player);
    } else if (id === 59) {
      a6D(0, L(54), id, 0, bB.oi, bB.ng, 0, false);
    }
  };
  this.a1Q = function (r) {
    a6D(200, L(55, [r]), 94, 0, bB.nj, bB.oL, -1, false);
  };
  this.a0X = function (a6c) {
    if (!ag.gb[a6c]) {
      return;
    }
    aQ.jG(a6c, 2);
    if (aD.kA < 100) {
      a6D(0, L(49, [ag.yc[a6c]]), 3, a6c, bB.nj, bB.ng, -1, true);
    } else {
      a6D(0, L(56, [ag.yc[a6c]]), 3, a6c, bB.nj, bB.ng, -1, true);
    }
  };
  this.a5h = function (eR) {
    var qI;
    var a6d = "(" + bM.ev(eR >> 2) + ", " + bM.ex(eR >> 2) + ")";
    var a6I = false;
    var player = 0;
    if (ac.ei(eR)) {
      if (ac.ee(eR)) {
        a6d = L(57, [a6d]);
      } else {
        player = ac.ef(eR);
        if (aD.gw) {
          aD.eX = player;
        }
        qI = L(58, [bA.yJ.a39(ag.a0n[player], bA.qb.sQ(0, 10), 150)]) + "   ";
        qI += L(59, [bA.ra.zQ(ag.gp[player])]) + "   ";
        qI += L(60, [bA.ra.zQ(ag.gb[player])]) + "   ";
        if (aD.hh) {
          var a6e = bg.a0U[bg.kX[bg.el[player]]];
          qI += L(61) + ": " + a6e + "   ";
        }
        if (bA.g9.jX(player)) {
          qI += L(62) + ": " + aE.kL[aE.hW[player]] + "   ";
        }
        qI += L(63, [player]) + "   ";
        qI += L(64, [a6d]);
        a6d = qI;
        a6I = true;
      }
    } else if (ac.es(eR)) {
      a6d = L(65, [a6d]) + "   #" + ac.eV(eR);
    } else {
      a6d = L(66, [a6d]);
    }
    bf.dl = true;
    a6X(55, 0);
    a6D(220, a6d, 55, player, bB.nj, bB.ng, -1, a6I, undefined, undefined, true);
  };
  this.a5j = function (a6f) {
    var l5 = bN.y;
    var player = l5.m4[a6f] >> 3;
    bf.dl = true;
    a6X(55, 0);
    var qI = L(67, [ag.yc[player]]) + "   ";
    qI += L(59, [bA.ra.zQ(l5.a6g[a6f])]);
    a6D(220, qI, 55, player, bB.nj, bB.ng, -1, true);
  };
  this.pJ = function (p5, a6h, pK) {
    if (p5 === aD.eX) {
      a6D(175, " " + L(68, [ag.yc[a6h]]) + ": ", 1001, a6h, a6E(200, 255, 210), bB.ng, -1, true, pK);
    } else {
      this.a6i(p5, pK);
    }
  };
  this.a6i = function (p5, pK) {
    a6X(1000, 0);
    a6D(175, ag.yc[p5] + ": ", 1000, p5, bB.nj, "rgba(5,60,25,0.9)", -1, true, pK);
  };
  function a6a(id, me) {
    var aB;
    var a6j = 0;
    var en = a61.length;
    for (aB = 0; aB < en; aB++) {
      if (a61[aB].id === id) {
        a6j++;
        if (a6j >= me) {
          a61.splice(aB, 1);
          return;
        }
      }
    }
  }
  this.a0W = function () {
    var r;
    if (aD.a0E) {
      r = L(69);
      aQ.a0V(L(70), 2, 1, 12);
      a6D(0, r, 40, 0, "rgb(10,220,10)", bB.ng, -1, false);
    } else {
      r = L(71);
      aQ.a0V(L(72), 2, 0, 16);
      a6D(0, r, 41, 0, bB.nj, bB.ng, -1, false);
    }
  };
  this.yQ = function () {
    var gG = ag.yc;
    var eq = aD.data;
    a6D(300, gG[0] + " [" + aD.a0R.yW(eq.elo[0]) + "] vs " + gG[1] + " [" + aD.a0R.yW(eq.elo[1]) + "]", 65, 0, bB.na, "rgba(100,255,255,0.75)", -1, false);
  };
  this.a6k = function (r) {
    a6D(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, false);
  };
  this.a6l = function (a6m) {
    a6D(0, a6m ? L(73) : L(74), 247, 0, bB.oh, bB.ng, -1, false);
  };
  this.yY = function (yV, yX, a6n) {
    var eq = aD.data;
    var gG = ag.yc;
    a6D(0, gG[0] + ": " + aD.a0R.yW(eq.elo[0]) + " -> " + yV, 66, 0, bB.nj, a6n[0], -1, false);
    a6D(0, gG[1] + ": " + aD.a0R.yW(eq.elo[1]) + " -> " + yX, 66, 1, bB.nj, a6n[1], -1, false);
  };
  this.pb = function (player, id) {
    if (id === 0) {
      if (a6Y(50, player)) {
        a6D(128, L(75, [ag.yc[player]]), 52, player, a6E(180, 255, 180), bB.ng, -1, true);
        af.qA(player, 2, 255);
      } else {
        a6D(384, L(76, [ag.yc[player]]), 51, player, a6E(210, 210, 255), bB.ng, -1, true);
      }
    } else if (a6Y(51, player)) {
      a6D(128, L(77, [ag.yc[player]]), 52, player, bB.nj, "rgba(60,120,10,0.9)", -1, true);
      af.qA(player, 2, 255);
    } else {
      a6D(384, L(78, [ag.yc[player]]), 50, player, bB.nj, "rgba(90,90,90,0.9)", -1, true);
      af.qA(player, 2, 96);
    }
  };
  this.pf = function (zx, target) {
    var color = a6E(210, 255, 210);
    if (zx.length > 1) {
      a6D(230, L(79, [zx.length, ag.yc[target]]), 66, target, color, bB.ng, -1, true);
    } else {
      a6D(230, L(80, [ag.yc[zx[0]], ag.yc[target]]), 66, zx[0], color, bB.ng, target, true);
    }
  };
  function a6E(e7, tE, f7) {
    return "rgb(" + e7 + "," + tE + "," + f7 + ")";
  }
  this.a6o = function (player, target) {
    a6D(230, L(81, [ag.yc[player], ag.yc[target]]), 66, player, bB.nj, "rgba(75,65,5,0.9)", target, true);
  };
  this.a6p = function (id, gG) {
    a6X(id, gG);
  };
  function a6X(id, gG) {
    var aB;
    var en = a61.length;
    for (aB = 0; aB < en; aB++) {
      if (a61[aB].id === id && gG-- <= 0) {
        a61.splice(aB, 1);
        aB--;
        en--;
      }
    }
  }
  this.a0G = function (id, player) {
    a6Y(id, player === undefined ? aD.ek : player);
  };
  function a6Y(id, player) {
    var f1 = false;
    for (var aB = a61.length - 1; aB >= 0; aB--) {
      if (a61[aB].id === id && (player === aD.ek || a61[aB].player === player)) {
        a61.splice(aB, 1);
        f1 = true;
      }
    }
    return f1;
  }
  this.a6q = function (id) {
    for (var aB = a61.length - 1; aB >= 0; aB--) {
      if (a61[aB].id === id) {
        return a61[aB];
      }
    }
    return null;
  };
  this.pW = function (a56, a6r, player) {
    if (ag.a3T[aD.eX] === 2) {
      return;
    }
    var a6s;
    if (a56 === 1) {
      a6s = L(82, [ag.yc[player]]);
    } else {
      a6s = L(83, [bA.ra.zQ(a56), ag.yc[player]]);
    }
    a6D(200, a6s, 30, player, "rgb(190,255,190)", bB.ng, -1, true);
  };
  this.a6t = function (a56, player) {
    if (ag.a3T[aD.eX] === 2) {
      return;
    }
    a6X(31, 0);
    var a6s = " (" + bA.ra.zQ(a56) + ") 💸";
    if (bA.g9.jX(player)) {
      a6s = L(84) + a6s;
    } else {
      a6s = L(85, [ag.yc[player]]) + a6s;
    }
    a6D(150, a6s, 31, player, bB.na, "rgba(205,205,205,0.9)", -1, true);
  };
  function a6B() {
    if (bS.wW.wX[bS.eT].name.length) {
      a6u(L(86, [bS.wW.wX[bS.eT].name]));
    }
    a6u(L(87, [bS.ey - 2 + "x" + (bS.ez - 2)]));
    a6u(L(88, [bA.ra.zQ(ap.a6v)]));
    if (ap.a6v !== ap.a6w) {
      a6u(L(89, [bA.ra.zQ(ap.a6w) + " (" + bA.ra.a4B(ap.a6w * 100 / ap.a6v, 1) + ")"]));
    }
    if (ap.a6x > 0) {
      a6u(L(66, [bA.ra.zQ(ap.a6x) + " (" + bA.ra.a4B(ap.a6x * 100 / ap.a6v, 1) + ")"]));
    }
    if (ap.a6y > 0) {
      a6u(L(90, [bA.ra.zQ(ap.a6y) + " (" + bA.ra.a4B(ap.a6y * 100 / ap.a6v, 1) + ")"]));
    }
    if (aD.kS === 10) {
      a6D(120, L(91), 6, 0, a6E(235, 255, 120), bB.ng, -1, false);
    }
  }
  function a6u(qI) {
    a6D(340, qI, 6, 0, a6E(215, 245, 255), bB.ng, -1, false);
  }
  this.a0F = function (bu) {
    var aB;
    var f8 = bf.k7();
    for (aB = 2; aB >= 0; aB--) {
      if (a65.ui[aB] > 0 && (bu || a65.f8[aB] < f8 - 220)) {
        this.a6z(aB);
      }
    }
  };
  this.a6z = function (id) {
    var qI;
    var en = a65.ui[id];
    var player = a65.zx[id];
    a65.ui[id] = 0;
    if (en === 1) {
      if (id === 0) {
        qI = L(92, [ag.yc[player], ag.yc[a65.a6A[0]]]);
      } else if (id === 1) {
        qI = L(93, [ag.yc[player]]);
      } else if (id === 2) {
        qI = L(94, [ag.yc[player]]);
      } else if (id === 3) {
        qI = L(95, [ag.yc[player]]);
      }
      a6X(7, 0);
      a6D(a65.eF[id], qI, 7, a65.a6A[id], bB.nj, bB.ng, -1, true);
    } else {
      if (id === 0) {
        qI = L(96, [en]);
      } else if (id === 1) {
        qI = L(97, [en]);
      } else {
        qI = L(98, [en]);
      }
      a6X(7, 0);
      a6D(a65.eF[id], qI, 7, player, bB.nj, bB.ng, -1, false);
    }
  };
  this.a6Z = function (id, hF, kn) {
    var f8 = bf.k7();
    var en = a65.ui[id] + 1;
    a65.ui[id]++;
    a65.zx[id] = hF;
    a65.a6A[id] = kn;
    if (en === 1) {
      a65.f8[id] = f8;
    }
    if (en === 1 && (aD.a0C < 32 || aD.a09 === 2)) {
      this.a6z(id);
      return;
    }
    if (en > 1 && (a65.f8[id] < f8 - 140 || aD.a09 === 2)) {
      this.a6z(id);
    }
  };
  this.j3 = function () {
    b2.j3();
    var jP = a61.length - a66;
    jP = jP <= 1 ? 1 : jP * jP;
    for (var aB = a61.length - 1; aB >= 0; aB--) {
      if (a61[aB].eM > 0) {
        a61[aB].eM -= jP;
        if (a61[aB].eM <= 0) {
          bf.dl = true;
          a61.splice(aB, 1);
        }
      }
    }
    a70();
    this.a0F(false);
  };
  function a70() {
    var gG;
    var aB;
    if (a67 === 128) {
      return;
    }
    a67++;
    if (a67 < 128) {
      return;
    }
    gG = 5;
    for (aB = al.kg - 1; aB >= 0; aB--) {
      if (ag.a3T[al.kl[aB]] === 1 && gG-- > 0) {
        a6D(240, L(95, [ag.yc[al.kl[aB]]]), 1, al.kl[aB], bB.na, "rgba(255,255,255,0.75)", -1, true);
      }
    }
  }
  this.uj = function () {
    var ew = yF();
    var xH;
    for (var aB = a61.length - 1; aB >= 0; aB--) {
      xH = ew - (aB + 1) * j;
      if (a61[aB].id === 50) {
        uk.drawImage(a61[aB].canvas, h.i - a61[aB].i - a64 - a62, xH);
        uk.drawImage(a68, h.i - a64 - a62, xH);
      } else {
        uk.drawImage(a61[aB].canvas, h.i - a61[aB].i - a62, xH);
      }
    }
  };
}
function cF() {
  var a71;
  var a72;
  var a73;
  var i;
  var j;
  var font;
  var qI;
  this.dd = function () {
    qI = L(99);
  };
  this.resize = function () {
    i = Math.floor((a0.a1.hw() ? 0.53 : 0.36) * h.hx);
    j = Math.floor(i * 0.065);
    font = bA.qb.sQ(1, Math.floor(j * 0.9));
    a73--;
    this.setTime();
  };
  this.j3 = function () {
    if (this.setTime()) {
      bf.dl = true;
    }
  };
  this.setTime = function () {
    var a0r;
    var dt = new Date();
    var a74 = dt.getUTCMinutes();
    var a75 = dt.getUTCSeconds();
    var a76 = [0, 10, 20, 25, 30, 35, 40, 45, 50];
    a72 = 3600 - a74 * 60 - a75;
    a72 %= 300;
    var a77 = 300;
    for (var aB = 0; aB < a76.length; aB++) {
      if ((a74 * 60 + a75 + a72) % 3600 === a76[aB] * 60) {
        a77 = 0;
        break;
      }
    }
    a72 += a77;
    a71 = qI + a78(Math.floor(a72 / 60)) + ":" + a78(a72 % 60);
    a0r = a73;
    a73 = a74 * 60 + a75;
    if (a0r === a73) {
      return false;
    }
    i = aQ.measureText(a71, font);
    i += Math.floor(j * 0.4);
    return true;
  };
  function a78(a79) {
    if (a79 < 10) {
      return "0" + a79;
    } else {
      return String(a79);
    }
  }
  this.uj = function () {
    uk.lineWidth = 1 + Math.floor(j / 15);
    uk.translate(h.i - j, Math.floor((h.j + i) * 0.5));
    uk.rotate(-Math.PI / 2);
    uk.fillStyle = bB.nj;
    uk.fillRect(0, 0, i, j);
    uk.strokeStyle = bB.na;
    uk.strokeRect(0, 0, i, j + 10);
    uk.fillStyle = bB.na;
    uk.font = font;
    bA.qb.textBaseline(uk, 1);
    bA.qb.textAlign(uk, 1);
    uk.fillText(a71, Math.floor(i / 2), Math.floor(j * 0.59));
    uk.setTransform(1, 0, 0, 1, 0, 0);
  };
}
function cG() {
  var a55;
  var a7A;
  var a7B;
  var x3;
  var a7C;
  var a7D = 0;
  var a7E = 0;
  this.dd = function () {
    a7D = a7E = 0;
    a55 = [];
    this.resize();
  };
  this.resize = function () {
    a7B = aN.a5o;
    x3 = aN.fontSize + 5;
    x3 = Math.floor(x3 * 1.25);
    if (a0.a1.hw()) {
      x3 = Math.floor(x3 * 1.25);
    }
    a7C = Math.floor(x3 * 0.15);
    bS.wc.font = a7B;
    a7A = Math.floor(bS.wc.measureText("02 000 000 0000").width);
    for (var aB = a55.length - 1; aB >= 0; aB--) {
      a7F(a55[aB]);
      a7G(aB);
    }
  };
  this.mV = function () {
    for (var aB = a55.length - 1; aB >= 0; aB--) {
      if (a55[aB].a7H) {
        a55[aB].a7H = false;
        a7G(aB);
      }
    }
  };
  function a7G(aB) {
    var a7I = true;
    var zF = bB.nj;
    if (a55[aB].id === 1) {
      a55[aB].yJ.fillStyle = bB.oc;
    } else if (a55[aB].jJ === aD.ek) {
      a55[aB].yJ.fillStyle = bB.nu;
    } else {
      ac.a7J(a55[aB].jJ);
      a55[aB].yJ.fillStyle = bA.color.nd(bO.fM[0], bO.fM[1], bO.fM[2], 0.87);
      if (bA.qj.a2b(bO.fM, 0, 2) > 400) {
        a7I = false;
        zF = bB.na;
      }
    }
    var i = a55[aB].canvas.width;
    a55[aB].yJ.clearRect(0, 0, i, x3);
    a55[aB].yJ.fillRect(0, 0, i, x3);
    a55[aB].yJ.fillStyle = zF;
    a7K(a55[aB].yJ, i, x3);
    if (i > a7A + x3 * 2) {
      a55[aB].yJ.fillRect(i - a7A - x3, 0, 1, x3);
      a55[aB].yJ.fillText(ag.yc[a55[aB].jJ], Math.floor((i - a7A) / 2), Math.floor(x3 * 0.57));
    }
    var sx = a55[aB].id !== 0 ? 0 : x3;
    a55[aB].yJ.fillText(bA.ra.zQ(a55[aB].hW), Math.floor(i - a7A / 2 - sx), Math.floor(x3 * 0.57));
    a7L(aB, i, sx, a7I);
    if (a55[aB].id === 0) {
      a7M(aB, i, a7I, zF);
      a7N(aB, i, a7I);
    } else {
      a7M(aB, x3 * 2, a7I, zF);
    }
  }
  function a7K(yJ, i, x3) {
    yJ.fillRect(0, 0, i, 1);
    yJ.fillRect(0, x3 - 1, i, 1);
    yJ.fillRect(0, 0, 1, x3);
    yJ.fillRect(i - 1, 0, 1, x3);
  }
  function a7L(aB, i, sx, a7I) {
    a55[aB].yJ.fillStyle = a7I ? bB.nl : bB.nh;
    var a7O = Math.floor(a7A * a55[aB].hW / a55[aB].a7P);
    a55[aB].yJ.fillRect(Math.floor(i - a7A - sx), x3 - a7C, a7O, a7C);
  }
  function a7M(aB, i, a7I, zF) {
    a55[aB].yJ.strokeStyle = a55[aB].a7Q ? bB.ns : a7I ? bB.oH : bB.oI;
    a55[aB].yJ.fillStyle = zF;
    a55[aB].yJ.fillRect(i - x3, 0, 1, x3);
    a55[aB].yJ.lineWidth = Math.max(Math.floor(x3 / 12), 3);
    a55[aB].yJ.lineCap = "round";
    var eq = 0;
    var nL = 0.35;
    i = x3 + 1;
    a55[aB].yJ.beginPath();
    a55[aB].yJ.moveTo(Math.floor(i - nL * x3 + eq), Math.floor(nL * x3));
    a55[aB].yJ.lineTo(Math.floor(i - x3 + nL * x3), Math.floor(x3 - nL * x3 + eq));
    a55[aB].yJ.stroke();
    a55[aB].yJ.beginPath();
    a55[aB].yJ.moveTo(Math.floor(i - x3 + nL * x3), Math.floor(nL * x3));
    a55[aB].yJ.lineTo(Math.floor(i - nL * x3 + eq), Math.floor(x3 - nL * x3 + eq));
    a55[aB].yJ.stroke();
  }
  function a7N(aB, i, a7I) {
    a55[aB].yJ.strokeStyle = a7I ? bB.o1 : bB.oB;
    a55[aB].yJ.fillRect(x3, 0, 1, x3);
    var eq = 0;
    var nL = 0.3;
    var xX = i - x3;
    a55[aB].yJ.beginPath();
    a55[aB].yJ.moveTo(Math.floor(nL * x3 + xX), Math.floor(x3 / 2));
    a55[aB].yJ.lineTo(Math.floor(x3 - nL * x3 + eq + xX), Math.floor(x3 / 2));
    a55[aB].yJ.stroke();
    a55[aB].yJ.beginPath();
    a55[aB].yJ.moveTo(Math.floor(x3 / 2 + xX), Math.floor(nL * x3));
    a55[aB].yJ.lineTo(Math.floor(x3 / 2 + xX), Math.floor(x3 - nL * x3 + eq));
    a55[aB].yJ.stroke();
  }
  this.h0 = function (lP, lQ) {
    if (aD.a09 === 2 || ag.mj[aD.eX] === 0 || aD.gw || bA.g9.jX(aD.eX)) {
      return false;
    }
    var aB;
    var a7R;
    var a7S;
    var a7T;
    var a7U = a0.a1.hw() ? x3 : 0;
    var a7V = a0.a1.hw() ? Math.floor(x3 * 0.15) : 0;
    for (aB = a55.length - 1; aB >= 0; aB--) {
      a7R = a7W(aB);
      a7S = a7X(aB);
      a7T = a55[aB].canvas.width;
      if (lQ >= a7S - a7V && lQ <= a7S + x3 + a7V) {
        if (lP >= a7R - a7U && lP <= a7R + x3 + a7U) {
          if (!a55[aB].a7Q) {
            a55[aB].a7H = true;
            a55[aB].a7Q = true;
            if (a55[aB].id === 0) {
              b8.hD.pH(a55[aB].jJ);
            } else {
              b8.hD.pG(a55[aB].jJ);
            }
          }
          return true;
        } else if (a55[aB].id === 0 && lP >= a7R + a7T - x3 - a7U && lP <= a7R + a7T + a7U) {
          bV.a5X(3);
          b8.hD.hK(aR.hH(), a55[aB].jJ);
          return true;
        }
      }
    }
    return false;
  };
  this.j3 = function () {
    if (ag.mj[aD.eX] === 0 || bA.g9.jX(aD.eX) && !aD.gw) {
      return;
    }
    var a2j = a55.slice(0, a7D);
    var a2k = a55.slice(a7D, a7D + a7E);
    a2j = a7Y(a2j);
    a2k = a7Z(a2k);
    a7D = a2j.length;
    a7E = a2k.length;
    a55 = a2j.concat(a2k);
  };
  function a7Y(g) {
    var a7a = ad.fu(aD.eX);
    if (!a7b(g, a7a)) {
      a7c(g, a7a);
      return g;
    }
    g = a7d(g, a7a);
    a7c(g, a7a);
    return g;
  }
  function a7Z(g) {
    var a7e = bN.y.kE[aD.eX];
    if (!a7f(g, a7e)) {
      a7g(g, a7e);
      return g;
    }
    g = a7h(g, a7e);
    a7g(g, a7e);
    return g;
  }
  function a7b(g, a7a) {
    if (a7D !== a7a) {
      return true;
    }
    for (var aB = a7a - 1; aB >= 0; aB--) {
      if (g[aB].jJ !== ad.fz(aD.eX, aB)) {
        return true;
      }
    }
    return false;
  }
  function a7f(g, a7e) {
    if (a7E !== a7e) {
      return true;
    }
    var tA = aD.eX << 3;
    var m3 = bN.y.m3;
    var a7i = bN.y.a7i;
    for (var aB = a7e - 1; aB >= 0; aB--) {
      var a7j = a7i[tA + aB];
      if (g[aB].jJ !== m3[a7j]) {
        return true;
      }
    }
    return false;
  }
  function a7c(g, a7a) {
    var aB;
    var hW;
    for (aB = a7a - 1; aB >= 0; aB--) {
      hW = ad.g0(aD.eX, aB);
      if (g[aB].hW !== hW) {
        g[aB].hW = hW;
        g[aB].a7P = Math.max(hW, g[aB].a7P);
        g[aB].a7H = true;
      }
    }
  }
  function a7g(g, a7e) {
    var aB;
    var hW;
    var tA = aD.eX << 3;
    var a6g = bN.y.a6g;
    var m1 = bN.y.m1;
    var a7i = bN.y.a7i;
    for (aB = a7e - 1; aB >= 0; aB--) {
      var a7j = a7i[tA + aB];
      hW = a6g[a7j];
      if (g[aB].hW !== hW) {
        g[aB].hW = hW;
        g[aB].a7P = Math.max(hW, g[aB].a7P);
        g[aB].a7H = true;
      } else if (!g[aB].a7Q && m1[a7j] % 64 === 5) {
        g[aB].a7Q = true;
        g[aB].a7H = true;
      }
    }
  }
  function a7d(g, a7a) {
    var aB;
    var jJ;
    var f7;
    var hW;
    var a58;
    var a6F = [];
    loop: for (aB = 0; aB < a7a; aB++) {
      jJ = ad.fz(aD.eX, aB);
      for (f7 = 0; f7 < g.length; f7++) {
        if (g[f7].jJ === jJ) {
          a6F.push(g.splice(f7, 1)[0]);
          continue loop;
        }
      }
      hW = ad.g0(aD.eX, aB);
      a58 = {
        jJ: jJ,
        hW: hW,
        a7P: hW,
        id: 0,
        a7H: true,
        a7Q: false,
        canvas: null,
        yJ: null
      };
      a7F(a58);
      a6F.push(a58);
    }
    return a6F;
  }
  function a7h(g, a7e) {
    var aB;
    var jJ;
    var f7;
    var hW;
    var a58;
    var a6F = [];
    var tA = aD.eX << 3;
    var m3 = bN.y.m3;
    var a6g = bN.y.a6g;
    var a7i = bN.y.a7i;
    loop: for (aB = 0; aB < a7e; aB++) {
      var a7j = a7i[tA + aB];
      jJ = m3[a7j];
      for (f7 = 0; f7 < g.length; f7++) {
        if (g[f7].jJ === jJ) {
          a6F.push(g.splice(f7, 1)[0]);
          continue loop;
        }
      }
      hW = a6g[a7j];
      a58 = {
        jJ: jJ,
        hW: hW,
        a7P: hW,
        id: 1,
        a7H: true,
        a7Q: false,
        canvas: null,
        yJ: null
      };
      a7F(a58);
      a6F.push(a58);
    }
    return a6F;
  }
  function a7F(a58) {
    a58.canvas = document.createElement("canvas");
    bS.wc.font = a7B;
    var i = a7A;
    if (a58.jJ < aD.ek && a58.id === 0) {
      i += Math.floor(bS.wc.measureText(ag.yc[a58.jJ] + "000").width);
    }
    i += x3;
    if (a58.id === 0) {
      i += x3;
    }
    a58.canvas.width = i;
    a58.canvas.height = x3;
    a58.yJ = a58.canvas.getContext("2d", {
      alpha: true
    });
    a58.yJ.font = a7B;
    bA.qb.textBaseline(a58.yJ, 1);
    bA.qb.textAlign(a58.yJ, 1);
  }
  function a7W(aB) {
    if (aU.a7k()) {
      return h.i - a55[aB].canvas.width - bc.gap;
    } else {
      return aU.eu;
    }
  }
  function a7X(aB) {
    return Math.floor(bc.gap * 2 + (aU.a7k() ? aW.j + bc.gap : 0) + aU.j + aB * (x3 * 1.3));
  }
  this.uj = function () {
    if (ag.mj[aD.eX] === 0 || bA.g9.jX(aD.eX) && !aD.gw) {
      return;
    }
    for (var aB = a55.length - 1; aB >= 0; aB--) {
      uk.drawImage(a55[aB].canvas, a7W(aB), a7X(aB));
    }
  };
}
function cH() {
  var a61;
  var kF;
  var a7l;
  var a7m;
  var j;
  var a5o;
  var fontSize;
  var a7n;
  var a7o;
  var a7p;
  var a7q;
  var canvas;
  var yJ;
  var mw;
  var a7r;
  this.dd = function () {
    mw = 0;
    kF = 4;
    a7l = a7m = 0;
    a61 = [];
    a5o = new Array(2);
    fontSize = new Array(2);
    a7n = new Array(2);
    a7n[0] = 0.3;
    a7n[1] = 0.7;
    a7o = new Array(4);
    canvas = document.createElement("canvas");
    a7r = bf.eM + 2000;
    this.resize();
  };
  function v1(aB) {
    if (aB === 0) {
      return L(100);
    } else if (aB === 1) {
      return L(101);
    } else if (aB === 2) {
      return L(102);
    } else {
      return L(103);
    }
  }
  this.resize = function () {
    var aB;
    var i;
    j = Math.floor((a0.a1.hw() ? 0.062 : 0.047) * h.hx);
    fontSize[0] = Math.floor(a7n[0] * 0.85 * j);
    fontSize[1] = Math.floor(a7n[1] * 0.85 * j);
    a5o[0] = bA.qb.sQ(1, fontSize[0]);
    a5o[1] = bA.qb.sQ(1, fontSize[1]);
    for (aB = a7o.length - 1; aB >= 0; aB--) {
      a7o[aB] = this.measureText(v1(aB) + "000", a5o[0]);
    }
    a7p = Math.floor(1 + j * 0.05);
    a7q = Math.floor(j * 0.2);
    if (a61.length > 0) {
      for (aB = a61.length - 1; aB >= 0; aB--) {
        i = this.measureText(a61[aB].qI + "00", a5o[1]);
        a61[aB].width = i < a7o[aB] ? a7o[aB] : i;
      }
      a7s();
    }
  };
  this.j3 = function () {
    if (kF === 0) {
      return;
    }
    a7t();
  };
  function a7t() {
    if (kF === 4) {
      if (bf.eM > a7r) {
        kF = 0;
        if (aD.a09 === 1) {
          aQ.a0V(bS.wW.wX[bS.eT].name, 3, 1, 9);
        }
      }
    } else {
      a7u();
    }
  }
  this.measureText = function (qI, a5o) {
    uk.font = a5o;
    return Math.floor(uk.measureText(qI).width);
  };
  this.jG = function (a7v, aB) {
    this.a0V(ag.yc[a7v], aB, 1, aB === 0 ? 3 : 7);
  };
  this.a0V = function (qI, a7w, a7x, eF) {
    if (!qI.length) {
      return;
    }
    var i = this.measureText(qI + "00", a5o[1]);
    i = i < a7o[a7w] ? a7o[a7w] : i;
    a61.push({
      qI: qI,
      width: i,
      a7w: a7w,
      a7x: a7x,
      eF: eF
    });
    if (kF === 0) {
      a7l = 0;
      kF = 1;
      mw = bf.eM;
    }
  };
  function a7u() {
    if (kF === 1) {
      if (a7l === 0) {
        a7s();
        a7l = 0.0001;
      }
      a7l += (bf.eM - mw) * 0.002;
      if (a7l >= 1) {
        a7m = 0;
        kF = 2;
        a7l = 1;
      }
      bf.dl = true;
    } else if (kF === 2) {
      a7m += (bf.eM - mw) / 1000;
      if (a7m > a61[0].eF || a7m > 1 && a61.length > 1) {
        kF = 3;
      }
    } else if (kF === 3) {
      a7l -= (bf.eM - mw) * 0.002;
      if (a7l <= 0) {
        a7l = 0;
        a61.shift();
        kF = a61.length > 0 ? 1 : 0;
      }
      bf.dl = true;
    }
    mw = bf.eM;
  }
  this.uj = function () {
    if (kF === 0 || a7l === 0) {
      return;
    }
    if (a7l < 1) {
      uk.globalAlpha = a7l;
      a7y();
      uk.globalAlpha = 1;
      return;
    }
    a7y();
  };
  function a7y() {
    if (!aD.hh) {
      uk.drawImage(canvas, bc.gap, a7z + bc.gap * 2);
      return;
    }
    if (a7z + bc.gap * 4 + j + bh.a80() > aR.ew) {
      uk.drawImage(canvas, bc.gap * 2 + bh.a80(), a7z + bc.gap * 2);
      return;
    }
    uk.drawImage(canvas, bc.gap, a7z + bc.gap * 3 + bh.a80());
  }
  function a7s() {
    canvas.width = a61[0].width + a7p;
    canvas.height = j + a7p;
    yJ = canvas.getContext("2d", {
      alpha: true
    });
    yJ.clearRect(0, 0, a61[0].width + a7p, j + a7p);
    yJ.translate(Math.floor(a7p / 2), Math.floor(a7p / 2));
    yJ.lineWidth = a7p;
    yJ.fillStyle = a61[0].a7x === 1 ? bB.no : bB.ng;
    a81();
    yJ.fill();
    yJ.strokeStyle = a61[0].a7x === 1 ? bB.na : bB.nj;
    a81();
    yJ.stroke();
    bA.qb.textAlign(yJ, 1);
    bA.qb.textBaseline(yJ, 1);
    yJ.fillStyle = a61[0].a7x === 1 ? bB.na : bB.nj;
    yJ.font = a5o[0];
    yJ.fillText(v1(a61[0].a7w), Math.floor(a61[0].width / 2), Math.floor(a7n[0] * 0.72 * j));
    yJ.font = a5o[1];
    yJ.fillText(a61[0].qI, Math.floor(a61[0].width / 2), Math.floor((a7n[0] + a7n[1] * 0.48) * j));
  }
  function a81() {
    yJ.beginPath();
    yJ.moveTo(a7q, 0);
    yJ.lineTo(a61[0].width - a7q, 0);
    yJ.lineTo(a61[0].width, a7q);
    yJ.lineTo(a61[0].width, j - a7q);
    yJ.lineTo(a61[0].width - a7q, j);
    yJ.lineTo(a7q, j);
    yJ.lineTo(0, j - a7q);
    yJ.lineTo(0, a7q);
    yJ.closePath();
  }
}
function cq() {
  var j;
  var canvas;
  var yJ;
  var a82;
  var a83;
  var a84;
  var a85;
  var a7H;
  var a86;
  var a87;
  var a88;
  var a6m = false;
  this.hZ = false;
  this.i = 0;
  var a89;
  var a2x = new Array(2);
  var a8A = 0;
  this.de = function () {
    for (var aB = 0; aB < 2; aB++) {
      a2x[aB] = bA.canvas.yt(ab.get(3), 8 - aB, bB.ov);
      a2x[aB] = bA.canvas.a2z(a2x[aB]);
    }
  };
  this.dd = function () {
    a88 = -10000;
    a8A = 0;
    a87 = 0;
    a89 = -1;
    this.hZ = false;
    a6m = false;
    a7H = false;
    a86 = 0;
    a82 = 0;
    a83 = [0, 0];
    a84 = [1, 1];
    a85 = [];
    this.resize();
  };
  this.resize = function () {
    j = aR.j;
    this.i = j * 4;
    canvas = document.createElement("canvas");
    canvas.width = this.i;
    canvas.height = j;
    yJ = canvas.getContext("2d", {
      alpha: true
    });
    mW();
  };
  this.mV = function () {
    if (!a7H) {
      return;
    }
    mW();
  };
  function mW() {
    var i = aw.i;
    a7H = false;
    yI(yJ, i, j);
    var l5 = Math.floor(i / 2);
    if (a82 === 1) {
      yJ.fillStyle = bB.o3;
      yJ.fillRect(l5, 0, l5, j);
    } else if (a82 === -1) {
      yJ.fillStyle = bB.oJ;
      yJ.fillRect(0, 0, l5, j);
    }
    yK(yJ, i, j, 2);
    var sx = Math.floor(j * 0.25);
    sx = sx < 2 ? 2 : sx;
    yJ.fillStyle = bB.np;
    var a6v = Math.floor((j - 4) * a83[1] / a84[1]);
    if (a6v > 0) {
      yJ.fillRect(2, j - 2 - a6v, sx, a6v);
    }
    a6v = Math.floor((j - 4) * a83[0] / a84[0]);
    if (a6v > 0) {
      yJ.fillRect(i - 2 - sx, j - 2 - a6v, sx, a6v);
    }
    var yL = Math.floor(j / 8);
    yL = yL < 2 ? 2 : yL;
    yM(yJ, Math.floor(j * 0.4), 0, j, yL, 0.5, false);
    yM(yJ, Math.floor(i - j * 1.4), 0, j, yL, 0.5, true);
    var eR = j * 1.1 / a2x[0].width;
    yJ.imageSmoothingEnabled = true;
    yJ.setTransform(eR, 0, 0, eR, (i - eR * a2x[0].width) / 2, j * -0.05);
    yJ.drawImage(a2x[+a6m], 0, 0);
    yJ.setTransform(1, 0, 0, 1, 0, 0);
  }
  this.h0 = function (eu, ew) {
    if (!this.hZ) {
      return false;
    }
    if (eu < h.i - this.i - bc.gap) {
      return false;
    }
    var nA = yF();
    if (ew < nA) {
      return false;
    }
    if (aD.gw) {
      return true;
    }
    if (!this.ha(aD.eX)) {
      return true;
    }
    if (aM.gx) {
      aM.a2E();
    }
    b8.hD.hb(eu > h.i - bc.gap - this.i / 2 ? 1 : 0);
    return true;
  };
  this.j3 = function () {
    if (a87 > 0) {
      a87--;
      if (a87 === 0) {
        a8B();
      }
      return;
    }
    if (this.hZ) {
      a8C();
    } else {
      if (a8D()) {
        return;
      }
      if (a89 >= 0) {
        a8E();
        a8F();
      }
    }
  };
  function a8F() {
    a89 = -1;
    a6m = ah.a8G();
    aN.a4R(257);
    aN.a6l(a6m);
    aw.hZ = true;
    a7H = true;
    a86 = 360;
    a8H();
  }
  function a8D() {
    var a8I = bf.k7();
    if (a8I % 40 !== 14) {
      return 0;
    }
    if (a8A) {
      if (a8I < a8A) {
        return 0;
      }
      if (a8I < a88 + 535) {
        return 0;
      }
      a8A = a8I + 1071;
      if (!bA.g9.a3W()) {
        return 0;
      }
      a8F();
      return 1;
    }
    if (al.kg === 1) {
      a8A = a8I + 535;
      return 0;
    }
    var a3t;
    if (aD.hh) {
      a3t = bh.kh();
    } else {
      a3t = ag.gb[ll[0]];
    }
    if (a3t >= bL.du(aD.ju * 96, 100)) {
      a8A = a8I + 535;
    }
    return 0;
  }
  function a8E() {
    aN.yb(250, L(104, [ag.yc[a89]]), 673, a89, bB.nj, bB.ng, -1, true);
  }
  function a8H() {
    var dt = 0;
    for (var aB = al.kg - 1; aB >= 0; aB--) {
      if (!bA.g9.jX(al.kl[aB])) {
        dt += ag.gb[al.kl[aB]];
      }
    }
    if (a6m) {
      a84[0] = Math.max(bL.du(dt * 3, 4), 1);
    } else if (aD.hh) {
      if (aD.kS === 9 && bg.kX[bh.kj()] === 8) {
        a84[0] = Math.max(dt, 1);
      } else {
        var fF = bL.du(bh.kh() * 100, aD.ju);
        fF = bL.hv(200 - fF * 2, 40, 100);
        fF = bL.du(fF * dt, 100);
        a84[0] = Math.max(fF, 1);
      }
    } else if (aD.kS === 8) {
      a84[0] = Math.max(bL.du(dt * 3, 4), 1);
    } else {
      a84[0] = Math.max(bL.du(dt * 3, 5), 1);
    }
    a84[1] = Math.max(dt - a84[0], 1);
  }
  function a8C() {
    a86--;
    if (a86 === 180 && a83[0] * 3 < a84[0]) {
      a8B();
      return;
    }
    if (a83[0] >= a84[0]) {
      if (a6m) {
        bR.zl.a04();
      } else {
        bR.zl.a08();
      }
      return;
    }
    if (a83[1] >= a84[1]) {
      a87 = 4;
      return;
    }
    if (a86 <= 0) {
      a8B();
    }
  }
  function a8B() {
    a88 = bf.k7();
    a7H = true;
    a82 = 0;
    a86 = 0;
    a85 = [];
    aw.hZ = false;
    aN.a0G(247);
    a83[0] = a83[1] = 0;
    aN.a4R(673);
  }
  this.a0A = function () {
    if (this.hZ && a83[0] < a84[0]) {
      a8B();
    }
  };
  this.qB = function (player, a8J) {
    var a8K;
    if (a8J) {
      a8K = L(105, [ag.yc[player]]);
    } else {
      a8K = L(106, [ag.yc[player]]);
    }
    aN.yb(450, a8K, 257, player, a8J ? bB.o1 : bB.oG, bB.ng, -1, true);
    a85.push(player);
    a7H = true;
    var dt = aD.kU ? Math.max(a84[0], a84[1]) : ag.gb[player];
    dt = Math.max(dt, 1);
    if (a8J) {
      a83[0] += dt;
    } else {
      a83[1] += dt;
    }
    if (player === aD.eX) {
      a82 = a8J ? 1 : -1;
    }
  };
  function yF() {
    if (aR.a6Q(aN.a6M())) {
      return aR.ew - j - bc.gap;
    }
    if (bC.a6Q(aN.a6P())) {
      return bC.yF() - j - bc.gap;
    }
    return h.j - j - bk.a5D() * bc.gap;
  }
  this.uj = function () {
    if (!this.hZ) {
      return;
    }
    var ew = yF();
    uk.drawImage(canvas, h.i - this.i - bc.gap, ew);
  };
  this.hc = function (player) {
    if (a86 !== 0) {
      return false;
    }
    if (!bA.g9.gy(1)) {
      return false;
    }
    if (!bA.g9.gz(player)) {
      return false;
    }
    if (jv[player] >= 10 && !bA.g9.a3p(player, 9)) {
      return false;
    }
    if (!a8L()) {
      return false;
    }
    return true;
  };
  function a8L() {
    if (aD.kU) {
      return true;
    }
    var f8 = bf.k7();
    if (f8 < a88 + 100) {
      return false;
    }
    if (f8 < 1607) {
      return false;
    }
    if (aD.kS === 9 && !bh.a8M()) {
      return false;
    }
    return true;
  }
  this.ha = function (gL) {
    if (!bA.g9.gy(1)) {
      return false;
    }
    if (!bA.g9.gz(gL)) {
      return false;
    }
    if (!this.hZ) {
      return false;
    }
    for (var aB = a85.length - 1; aB >= 0; aB--) {
      if (a85[aB] === gL) {
        return false;
      }
    }
    return true;
  };
  this.hY = function (player) {
    a89 = player;
  };
}
function cI() {
  var i;
  var eu;
  var a8N;
  var canvas;
  var yJ;
  var hZ;
  var iN;
  var a4I;
  var a5o;
  var a7H;
  var a8O = 11 / 12;
  this.ew = 0;
  this.h1 = false;
  this.dd = function () {
    hZ = !aD.hB && !aD.gw;
    a7H = false;
    iN = 0.5;
    a4I = 0;
    this.h1 = false;
    this.resize();
  };
  this.resize = function () {
    if (a0.a1.hw() && h.i < h.j * 0.8) {
      this.j = Math.floor(h.hx * 0.066);
      i = h.i - bc.gap * 4 - this.j;
    } else {
      i = Math.floor((a0.a1.hw() ? 0.65 : 0.389) * h.hx);
      i += 12 - i % 12;
      this.j = Math.floor(i / 12);
    }
    a8N = Math.floor(this.j * 3 / 2);
    a5o = bA.qb.sQ(1, Math.floor(this.j * 0.5));
    canvas = document.createElement("canvas");
    canvas.width = i;
    canvas.height = this.j;
    yJ = canvas.getContext("2d", {
      alpha: true
    });
    yJ.font = a5o;
    bA.qb.textBaseline(yJ, 1);
    bA.qb.textAlign(yJ, 1);
    this.a8P();
    a8Q();
  };
  this.a8P = function () {
    if (a0.a1.hw() && h.i < h.j * 0.8) {
      eu = this.j + bc.gap * 3;
    } else {
      eu = Math.floor((h.i - i) / 2);
    }
    this.ew = h.j - this.j - bk.a5D() * bc.gap;
  };
  this.mV = function () {
    if (a7H) {
      a7H = false;
      a8Q();
    }
  };
  function a8R() {
    var fF;
    var a8S = 130;
    if (iN < 1 / 3) {
      fF = Math.floor(iN * 3 * a8S);
      return "rgba(" + fF + "," + a8S + ",0,0.85)";
    } else if (iN < 2 / 3) {
      fF = Math.floor((iN - 1 / 3) * 3 * a8S);
      return "rgba(" + a8S + "," + (a8S - fF) + ",0,0.85)";
    } else {
      fF = Math.floor((iN - 2 / 3) * 3 * a8S);
      return "rgba(" + a8S + ",0," + fF + ",0.85)";
    }
  }
  function a8Q() {
    var a7O = Math.floor(iN * (i - a8N * 2));
    var a8T = 1 + Math.floor(aR.j * 0.0625);
    var a8U = 1 + Math.floor(aR.j * 0.3);
    var a8V = Math.floor(aR.j * 0.55);
    yJ.clearRect(0, 0, i, aR.j);
    yJ.fillStyle = bB.nf;
    yJ.fillRect(0, 0, a8N, aR.j);
    yJ.fillRect(a8N + a7O, 0, i - a8N - a7O, aR.j);
    yJ.fillStyle = a8R();
    yJ.fillRect(a8N, 0, a7O, aR.j);
    yJ.fillStyle = bB.nj;
    yJ.fillRect(0, 0, i, 1);
    yJ.fillRect(0, aR.j - 1, i, 1);
    yJ.fillRect(0, 0, 1, aR.j);
    yJ.fillRect(a8N, 0, 1, aR.j);
    yJ.fillRect(a8N + a7O, 0, 1, aR.j);
    yJ.fillRect(i - a8N, 0, 1, aR.j);
    yJ.fillRect(i - 1, 0, 1, aR.j);
    yJ.fillRect(Math.floor(aR.j * 0.25) + a8U, Math.floor((aR.j - a8T) / 2), aR.j - a8U * 2, a8T);
    yJ.fillRect(Math.floor(i - aR.j * 1.25) + a8U, Math.floor((aR.j - a8T) / 2), aR.j - a8U * 2 - a8U % 2, a8T);
    yJ.fillRect(Math.floor(i - aR.j * 1.25) + Math.floor((aR.j - a8T) / 2), a8U, a8T, aR.j - a8U * 2 - a8U % 2);
    a4I = bA.g9.iM(aD.eX, aR.hH());
    yJ.fillText(bA.ra.zQ(a4I) + " (" + bA.ra.a4B(iN * 100, +(iN < 0.1)) + ")", Math.floor(i * 0.5), a8V);
  }
  this.hZ = function () {
    return !!hZ && (!aM.gx || !(eu < Math.floor(bc.gap + this.j * 5.5)));
  };
  this.a6Q = function (a8W) {
    if (this.hZ()) {
      return eu + i > h.i - a8W - bc.gap;
    }
    return false;
  };
  this.a4P = function () {
    hZ = !aD.gw;
  };
  this.a8B = function () {
    hZ = false;
  };
  this.hH = function () {
    return bL.hv(Math.floor(iN * 1024 + 0.5) - 1, 0, 1023);
  };
  this.a27 = function (lP, lQ) {
    return this.hZ() && lP > eu && lP < eu + i && lQ > this.ew;
  };
  function a8X(lP, lQ) {
    return lP > eu && lP < eu + a8N && lQ > aR.ew;
  }
  function a8Y(lP, lQ) {
    return lP > eu + i - a8N && lP < eu + i && lQ > aR.ew;
  }
  this.h0 = function (lP, lQ) {
    if (!this.hZ()) {
      return false;
    }
    if (!aR.a27(lP, lQ)) {
      return false;
    }
    aS.nE = false;
    if (a8Z(this, lP, lQ)) {
      bf.dl = true;
    }
    return true;
  };
  function a8Z(sD, lP, lQ) {
    if (a8X(lP, lQ)) {
      return a8a(a8O);
    }
    if (a8Y(lP, lQ)) {
      return a8a(1 / a8O);
    }
    sD.h1 = true;
    return a8b(lP);
  }
  this.a2A = function (nL) {
    if (aD.a09 === 0 || !this.hZ()) {
      return;
    }
    if (a8a(nL)) {
      bf.dl = true;
    }
  };
  function a8a(a2W) {
    if (a2W > 1 && iN === 1) {
      return false;
    }
    if (a2W > 1 && a2W * iN - iN < 1 / 1024) {
      a2W = (iN + 1 / 1024) / iN;
    } else if (a2W < 1 && iN - a2W * iN < 1 / 1024) {
      a2W = (iN - 1 / 1024) / iN;
    }
    iN = bL.hv(iN * a2W, 1 / 1024, 1);
    a8Q();
    return true;
  }
  function a8b(lP) {
    var dt = iN;
    iN = bL.hv((lP - eu - a8N) / (i - a8N * 2), 1 / 1024, 1);
    if (dt !== iN) {
      a8Q();
      return true;
    }
    return false;
  }
  this.a1g = function (deltaY) {
    var nL;
    if (deltaY === 0 || !this.hZ()) {
      return false;
    }
    if (deltaY > 0) {
      nL = 400 / (400 + deltaY);
      nL = nL < a8O ? a8O : nL;
    } else {
      nL = (400 - deltaY) / 400;
      nL = nL > 1 / a8O ? 1 / a8O : nL;
    }
    return a8a(nL);
  };
  this.a1d = function (lP) {
    if (this.h1) {
      return a8b(lP);
    }
    return false;
  };
  this.a23 = function () {
    this.h1 = false;
  };
  this.j3 = function () {
    if (!this.hZ()) {
      return;
    }
    if (a4I !== bA.g9.iM(aD.eX, this.hH())) {
      a7H = true;
    }
  };
  this.uj = function () {
    if (!this.hZ()) {
      return;
    }
    uk.drawImage(canvas, eu, this.ew);
  };
}
function d0() {
  var canvas;
  var yJ;
  var a8c;
  var font;
  var a8d = 0;
  var a8e = false;
  var a8f = [10, 5, 3, 2, 1.5, 1, 0.75, 0.5, 0.25];
  var a8g = 5;
  this.a4x = false;
  this.dd = function () {
    if (!aD.gw) {
      return;
    }
    a8g = 5;
    this.a4x = false;
    a8e = false;
    a8c = new rC([0.3, 0.3 / 6], [0.5, 1]);
    this.resize();
  };
  this.a8h = function () {
    return a8f[a8g];
  };
  this.yF = function () {
    return a8c.ew;
  };
  this.a6Q = function (a8W) {
    if (aD.gw) {
      return a8c.eu + a8c.i > h.i - a8W - bc.gap;
    }
    return false;
  };
  this.resize = function () {
    if (!aD.gw) {
      return;
    }
    a8c.resize();
    a8c.ew -= (bk.a5D() - 1) * bc.gap;
    font = bA.qb.sQ(0, a8c.j * 0.3);
    canvas = document.createElement("canvas");
    canvas.width = Math.floor(a8c.i);
    canvas.height = Math.floor(a8c.j);
    yJ = canvas.getContext("2d", {
      alpha: true
    });
    yJ.font = font;
    bA.qb.textAlign(yJ, 1);
    bA.qb.textBaseline(yJ, 1);
    mW(this);
  };
  this.a2D = function (a8i) {
    if (aD.a09 === 0 || t.hZ()) {
      return;
    }
    if (a8i === aD.nC) {
      return;
    }
    aD.nC = a8i;
    bh.resize();
    bf.dl = true;
    if (aD.gw) {
      a8d = bf.eM + 2000;
      mW(this);
    }
  };
  this.h0 = function (eu, ew) {
    if (!aD.gw) {
      return false;
    }
    if (eu < a8c.eu || ew < a8c.ew || eu > a8c.eu + a8c.i) {
      return a8e && a8j(this, eu, ew);
    }
    eu -= a8c.eu;
    if (eu < a8c.i * 0.3) {
      a8e = false;
      this.a2D(!aD.nC);
      return true;
    } else if (eu < a8c.i * 0.7) {
      a8e = !a8e;
      bf.dl = true;
      return true;
    }
    this.a2F(false);
    return true;
  };
  this.a2F = function (a8k) {
    if (aD.a09 === 2) {
      this.a2D(false);
      t.u(3);
      return;
    }
    a8e = false;
    this.a4x = !this.a4x;
    if (this.a4x) {
      if (aM.gx) {
        aM.a2E();
      }
      a0.a1.setState(1);
    } else if (!a8k) {
      aM.a5u();
    }
    bf.dl = true;
    mW(this);
  };
  this.a8l = function () {
    this.a4x = false;
    aM.a5u();
    bf.dl = true;
    mW(this);
  };
  this.a1w = function (eu, ew) {
    if (!aD.nC) {
      return false;
    }
    if (aM.h0(eu, ew) >= 0) {
      return true;
    }
    if (!aD.gw) {
      aS.h0(eu, ew);
      return true;
    }
    if (bf.eM > a8d || !this.h0(eu, ew)) {
      aS.h0(eu, ew);
    }
    bf.dl = true;
    a8d = bf.eM + 2000;
    return true;
  };
  this.j3 = function () {
    if (aD.gw && aD.nC && bf.eM > a8d - 1000 && bf.eM < a8d) {
      bf.dl = true;
    }
  };
  this.a0H = function () {
    if (!aD.gw) {
      return;
    }
    this.a4x = false;
    bf.dl = true;
    mW(this);
  };
  this.uj = function () {
    if (!aD.gw) {
      return;
    }
    if (aD.nC) {
      if (bf.eM > a8d) {
        return;
      }
      if (bf.eM > a8d - 1000) {
        uk.globalAlpha = a8m(0, (1000 - (bf.eM - (a8d - 1000))) / 1000, 1);
        a8n();
        uk.globalAlpha = 1;
        return;
      }
    }
    a8n();
  };
  function a8n() {
    if (a8e) {
      a8o();
    }
    uk.drawImage(canvas, Math.floor(a8c.eu), Math.floor(a8c.ew));
  }
  function mW(sD) {
    a8p();
    a8q();
    a8r();
    if (!sD.a4x) {
      a8s();
    } else {
      a8t();
    }
    a8u();
  }
  function a8p() {
    yJ.clearRect(0, 0, Math.floor(a8c.i), Math.floor(a8c.j));
    yJ.fillStyle = bB.nf;
    yJ.fillRect(0, 0, Math.floor(a8c.i), Math.floor(a8c.j));
    if (aD.nC) {
      yJ.fillStyle = bB.o8;
      yJ.fillRect(0, 0, Math.floor(a8c.i * 0.3), Math.floor(a8c.j));
    }
  }
  function a8q() {
    yJ.fillStyle = bB.nj;
    yJ.fillText("Hide UI", a8c.i * 0.15, a8c.j * 0.5);
    yJ.fillRect(Math.floor(a8c.i * 0.3 - 0.5), 0, 2, Math.floor(a8c.j));
  }
  function a8r() {
    var eu = a8c.i * 0.5;
    yJ.fillText("Replay Speed", eu, a8c.j * 0.31);
    yJ.fillText(a8v(a8g), eu, a8c.j * 0.69);
    yJ.fillRect(Math.floor(a8c.i * 0.7 - 0.5), 0, 2, Math.floor(a8c.j));
  }
  function a8s() {
    var i = Math.floor(a8c.j * 0.46);
    var j = Math.floor(a8c.j * 0.23);
    var eu = Math.floor(a8c.i * 0.85 - i * 0.5 + i / 12);
    var ew = Math.floor(a8c.j * 0.5 - j);
    yJ.beginPath();
    yJ.moveTo(eu, ew);
    yJ.lineTo(eu + i, ew + j);
    yJ.lineTo(eu, ew + (j << 1));
    yJ.fill();
  }
  function a8t() {
    var sx = Math.floor(a8c.i * 0.02);
    var sy = Math.floor(a8c.i * 0.025);
    var n9 = Math.floor(a8c.i * 0.85 - sx - sy * 0.5);
    var nA = Math.floor(a8c.j * 0.25);
    var a8V = Math.floor(a8c.j) - nA * 2;
    yJ.fillRect(n9, nA, sx, a8V);
    yJ.fillRect(n9 + sx + sy, nA, sx, a8V);
  }
  function a8u() {
    yJ.fillRect(0, 0, Math.floor(a8c.i), 2);
    yJ.fillRect(0, 0, 2, Math.floor(a8c.j));
    yJ.fillRect(0, Math.floor(a8c.j) - 2, Math.floor(a8c.i), 2);
    yJ.fillRect(Math.floor(a8c.i - 2), 0, 2, Math.floor(a8c.j));
  }
  function a8o() {
    var aB;
    var en = a8f.length;
    var a8V = Math.floor(a8c.j * 0.5);
    var j = en * a8V;
    var eu = Math.floor(Math.floor(a8c.eu) + a8c.i * 0.3 - 0.5);
    var ew = Math.floor(Math.floor(a8c.ew) - j);
    var i = Math.floor(a8c.i * 0.4 + 2.5);
    uk.fillStyle = bB.nf;
    uk.fillRect(eu, ew, i, j);
    uk.fillStyle = bB.o8;
    uk.fillRect(eu, ew + a8g * a8V, i, a8V);
    uk.fillStyle = bB.nj;
    uk.fillRect(eu, ew, 2, j);
    uk.fillRect(eu, ew, i, 2);
    uk.fillRect(eu + i - 2, ew, 2, j);
    for (aB = 1; aB < en; aB++) {
      uk.fillRect(eu, ew + aB * a8V, i, 2);
    }
    uk.fillStyle = bB.nj;
    bA.qb.textAlign(uk, 1);
    bA.qb.textBaseline(uk, 1);
    uk.font = bA.qb.sQ(0, a8V * 0.6);
    eu = eu + i * 0.5;
    for (aB = 0; aB < en; aB++) {
      uk.fillText(a8v(aB), eu, ew + (aB + 0.6) * a8V);
    }
  }
  function a8j(sD, eu, ew) {
    var en = a8f.length;
    var a8V = Math.floor(a8c.j * 0.5);
    var j = en * a8V;
    var n9 = Math.floor(Math.floor(a8c.eu) + a8c.i * 0.3 - 0.5);
    var nA = Math.floor(Math.floor(a8c.ew) - j);
    var i = Math.floor(a8c.i * 0.4 + 2.5);
    a8e = false;
    bf.dl = true;
    if (eu < n9 || eu > n9 + i || ew < nA) {
      return true;
    }
    a8g = a8m(0, Math.floor((ew - nA) / a8V), en - 1);
    mW(sD);
    return true;
  }
  function a8v(aB) {
    if (aB === 5) {
      return "Normal";
    } else {
      return "" + a8f[aB];
    }
  }
}
var hy;
var iO;
var iP;
function cJ() {
  var a8w;
  var a8x;
  var i;
  var eu;
  var ew;
  var a8y;
  var a8z;
  this.dd = function () {
    a8w = new Array(2);
    a8x = new Array(2);
    this.nE = false;
    iO = 0;
    iP = 0;
    a8y = 0;
    a8z = 0;
    hy = 1;
    this.resize();
  };
  this.resize = function () {
    i = Math.floor((a0.a1.hw() ? 0.072 : 0.0502) * h.hx);
    i = i < 8 ? 8 : i;
    for (var aB = 1; aB >= 0; aB--) {
      a8w[aB] = document.createElement("canvas");
      a8w[aB].width = i;
      a8w[aB].height = i;
      a8x[aB] = a8w[aB].getContext("2d", {
        alpha: true
      });
    }
    this.a8P();
    a90();
  };
  function a91(a92, a6R) {
    return Math.pow(a92 - (eu + i / 2), 2) + Math.pow(a6R - (ew + i / 2), 2) < i * i / 4 || Math.pow(a92 - (eu + i / 2), 2) + Math.pow(a6R - (ew + i * 2), 2) < i * i / 4;
  }
  this.yE = function () {
    return -iO / hy;
  };
  this.yF = function () {
    return -iP / hy;
  };
  this.nO = function (a93, i4) {
    iO = hy * a93 - i4;
  };
  this.nP = function (a94, i5) {
    iP = hy * a94 - i5;
  };
  this.h0 = function (a92, a6R) {
    if (!aD.nC && a91(a92, a6R) && !bj.eK.data[8].value) {
      if (a6R < ew + i * 1.25) {
        return this.a1g(Math.floor(h.i / 2), Math.floor(h.j / 2), -200);
      } else {
        return this.a1g(Math.floor(h.i / 2), Math.floor(h.j / 2), 200);
      }
    } else if (aH.nR()) {
      this.nE = true;
      a8y = a92;
      a8z = a6R;
    }
    return false;
  };
  this.a1d = function (a92, a6R) {
    if (!aH.nR()) {
      return true;
    }
    var a95 = iO;
    var a96 = iP;
    var i7 = a8y - a92;
    var iA = a8z - a6R;
    iO += i7;
    iP += iA;
    af.a1d(i7, iA);
    this.a97();
    a8y = a92;
    a8z = a6R;
    return a95 !== iO || a96 !== iP;
  };
  this.a1g = function (lP, lQ, deltaY) {
    var nL;
    if (!aH.nR()) {
      return true;
    }
    if (deltaY > 0) {
      nL = 500 / (500 + deltaY);
      nL = nL < 0.5 ? 0.5 : nL;
    } else if (deltaY < 0) {
      nL = (500 - deltaY) / 500;
      nL = nL > 2 ? 2 : nL;
    } else {
      return false;
    }
    this.a98(lP, lQ, nL);
    bf.dl = true;
    return true;
  };
  this.a98 = function (eu, ew, eR) {
    eR = a99(eR);
    af.zoom(eR, eu, ew);
    a9A(eR, eu, ew);
  };
  this.a97 = function () {
    var a9B = h.i / 16;
    var a9C = 0;
    var a9D = h.j / 16;
    var a9E = 0;
    if (iO < -h.i + a9B) {
      a9C = -h.i + a9B - iO;
    }
    if (iO > hy * bS.ey - a9B) {
      a9C = hy * bS.ey - a9B - iO;
    }
    if (iP < -h.j + a9D) {
      a9E = -h.j + a9D - iP;
    }
    if (iP > hy * bS.ez - a9D) {
      a9E = hy * bS.ez - a9D - iP;
    }
    iO += a9C;
    iP += a9E;
    ba.nQ();
    af.a9F(a9C, a9E);
  };
  function a99(a2W) {
    a2W = a2W * hy > 1024 ? 1024 / hy : a2W;
    a2W = a2W * hy < 0.125 ? 0.125 / hy : a2W;
    return a2W;
  }
  function a9A(a2W, lP, lQ) {
    hy *= a2W;
    iO = (iO + lP) * a2W - lP;
    iP = (iP + lQ) * a2W - lQ;
    aS.a97();
  }
  function a90() {
    var a9G = Math.floor(1 + i / 20);
    for (var aB = 1; aB >= 0; aB--) {
      a8x[aB].clearRect(0, 0, i, i);
      a8x[aB].fillStyle = bB.nc;
      a8x[aB].beginPath();
      a8x[aB].arc(i / 2, i / 2, i / 2 - a9G, 0, Math.PI * 2);
      a8x[aB].fill();
      a8x[aB].lineWidth = a9G;
      a8x[aB].fillStyle = bB.nj;
      a8x[aB].strokeStyle = bB.nj;
      a8x[aB].beginPath();
      a8x[aB].arc(i / 2, i / 2, i / 2 - a9G, 0, Math.PI * 2);
      a8x[aB].stroke();
      yM(a8x[aB], 0, 0, i, a9G, 0.3, aB === 0);
    }
  }
  this.a8P = function () {
    eu = h.i - i - bc.gap;
    ew = Math.floor(h.j / 2 - i * 1.25);
  };
  this.uj = function () {
    if (bj.eK.data[8].value) {
      return;
    }
    uk.drawImage(a8w[0], eu, ew);
    uk.drawImage(a8w[1], eu, Math.floor(ew + i * 3 / 2));
  };
}
function cK() {
  var g;
  var a9H;
  var a9I;
  var a9J;
  var gap;
  var a9K;
  var a9L;
  var a9M;
  var a9N;
  var a9O;
  var a5o;
  var a9P;
  var gs;
  var a9Q;
  var a7O;
  var a9R;
  var a9S;
  this.a9T = false;
  this.dd = function () {
    a9R = -1;
    a9S = -1;
    a9Q = 1;
    a9N = -1;
    this.a9U = false;
    gs = 0;
    a9P = new Date();
    a9H = 0;
    gap = 0.3;
    a9V();
    g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    this.resize();
  };
  this.resize = function () {
    a9I = Math.floor(h.j * 0.15);
    a9O = Math.floor((a0.a1.hw() ? 0.018 : 0.0137) * h.hx);
    a9O = a9O < 2 ? 2 : a9O;
    a5o = bA.qb.sQ(1, a9O);
    a9W();
  };
  function a9V() { }
  this.a9X = function (a9Y) {
    var aB;
    this.a9T = true;
    for (aB = 0; aB < a9Y.length; aB++) {
      g.unshift(a9Y[aB]);
    }
    a9W();
    bf.dl = true;
  };
  function a9W() {
    a9J = Math.floor((a0.a1.hw() ? 0.07 : 0.035) * 0.2 * h.hx);
    a9J = a6O(a0.a1.hw() ? 3 : 1, a9J);
    var a9Z = h.i / (g.length + gap);
    a9J = a9Z > a9J ? a9Z : a9J;
    a7O = Math.floor((1 - gap) * a9J);
    a9H = 0;
    a9a();
  }
  this.a9b = function () {
    a9a();
  };
  function a9a() {
    a9H = a9H < -20 ? -20 : a9H;
    a9H = a9H > (g.length - 15) * a9J ? (g.length - 15) * a9J : a9H;
    a9L = Math.floor(a9H / a9J);
    a9M = a9L + Math.floor(h.i / a9J);
    a9M = a9M > g.length - 1 ? g.length - 1 : a9M;
    a9L = a9M < a9L ? a9M : a9L;
    a9L = a9L < 0 ? 0 : a9L;
    a9c();
  }
  function a9c() {
    var l5 = a9M;
    a9K = a9I / g[l5];
    for (var aB = a9M - 1; aB >= a9L; aB--) {
      if (g[aB] > g[l5]) {
        l5 = aB;
        a9K = a9I / Math.pow(g[aB], a9Q);
      }
    }
  }
  function a9d(eu) {
    var dt = Math.floor((a9H + h.i - eu - gap * a9J) / a9J);
    dt = dt < -1 ? -1 : dt === -1 ? 0 : dt > g.length - 1 ? -1 : dt;
    if (dt !== a9N) {
      a9N = dt;
      if (a9R === -1 && a9N === 0 && aT.a9T) {
        a9R = setInterval(a9e, 100);
      }
      return true;
    }
    return false;
  }
  this.a1d = function (eu, ew) {
    if (ew > h.j - a9I * 0.6) {
      if (this.a9U) {
        if (eu !== gs) {
          a9H += eu - gs;
          gs = eu;
          a9a();
          a9d(eu);
          this.a9U = a9N !== -1;
          bf.dl = true;
        }
        return;
      }
      if (a9d(eu)) {
        bf.dl = true;
        return;
      }
    } else {
      this.rc();
    }
  };
  this.rc = function () {
    if (a9N !== -1) {
      this.a9U = false;
      a9N = -1;
      bf.dl = true;
    }
  };
  this.a1g = function (eu, deltaY) {
    if (a9N !== -1) {
      a9H += Math.floor(deltaY);
      a9a();
      a9d(eu);
      bf.dl = true;
    }
  };
  this.h0 = function (eu, ew) {
    this.a1d(eu, ew);
    if (a9N !== -1) {
      gs = eu;
      this.a9U = true;
    }
  };
  this.a22 = function () {
    if (a9N !== -1) {
      this.a9U = false;
    }
  };
  this.uj = function () {
    uk.fillStyle = bB.nm;
    for (var aB = a9M; aB >= a9L; aB--) {
      a9f(aB);
    }
    if (this.a9T && a9L === 0) {
      uk.fillStyle = bB.oJ;
      a9f(0);
    }
    if (a9N !== -1) {
      uk.fillStyle = bB.nl;
      a9f(a9N);
    }
    a9g();
  };
  function a9f(aB) {
    var a9h = Math.floor(a9K * Math.pow(g[aB], a9Q));
    uk.fillRect(a9H + h.i - (aB + 1) * a9J, h.j - a9h, a7O, a9h);
  }
  function a9g() {
    if (a9N === -1) {
      return;
    }
    uk.font = a5o;
    bA.qb.textBaseline(uk, 2);
    var dt = new Date();
    dt.setTime(a9P.getTime() - a9N * 1000 * 60 * 60 * 24);
    var month = "month";
    var a9i = "day";
    if (typeof Intl !== "undefined") {
      month = new Intl.DateTimeFormat("en-US", {
        month: "long"
      }).format(dt);
      a9i = new Intl.DateTimeFormat("en-US", {
        weekday: "long"
      }).format(dt);
    }
    var a9j = a9i + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear();
    var a9k;
    a9k = g[a9N] === 1 ? L(107) : L(108);
    a9k = bA.ra.zQ(g[a9N]) + " " + a9k;
    var sx = Math.floor(uk.measureText(a9j).width);
    var sy = Math.floor(uk.measureText(a9k).width);
    var a9l = Math.floor((sx + a9O) * 0.5);
    var a9m = a9H + h.i - (a9N + 1) * a9J;
    a9m = a9m < a9l ? a9l : a9m > h.i - a9l ? h.i - a9l : a9m;
    var nA = h.j - Math.floor(a9K * Math.pow(g[a9N], a9Q));
    var a9n = Math.floor(a9O * 1.1);
    var a9o = nA > h.j - a9n ? h.j - a9n : nA;
    uk.fillStyle = bB.ng;
    uk.fillRect(h.i - sy - a9O, a9o - a9n, sy + a9O, a9n);
    uk.fillRect(a9m - a9l, h.j - a9n, sx + a9O, a9n);
    uk.fillStyle = bB.nj;
    bA.qb.textAlign(uk, 2);
    uk.fillText(a9k, Math.floor(h.i - a9O * 0.5), a9o);
    bA.qb.textAlign(uk, 1);
    uk.fillText(a9j, a9m, h.j);
    uk.strokeStyle = bB.nn;
    uk.lineWidth = 1;
    uk.beginPath();
    uk.moveTo(0, nA);
    uk.lineTo(h.i, nA);
    uk.closePath();
    uk.stroke();
  }
  function a9e() {
    if (aa.a1K() === 8) {
      a9N = -1;
    }
    if (a9N !== 0) {
      a9S = new Date().getTime();
      clearInterval(a9R);
      a9R = -1;
      return;
    }
    var gL = g[1] / 864000;
    if (a9S !== -1) {
      var dt = new Date().getTime();
      gL += (dt - a9S) * g[1] / 86400000;
      a9S = -1;
    }
    if (gL > 0) {
      g[0] += Math.floor(gL);
      bf.dl = true;
    }
  }
}
function cL() {
  this.eu = 0;
  this.j = 0;
  var a5o;
  var i;
  var ew;
  var a9p;
  var a9q;
  var a9r;
  var canvas;
  var yJ;
  var a7H;
  var a3d;
  var a9s;
  var a9t;
  var a9u;
  var a9v;
  this.dd = function () {
    a9r = aD.a4X;
    a9t = "rgba(0,100,0,0.8)";
    a9u = "rgba(150,0,0,0.8)";
    a9s = true;
    a7H = true;
    a3d = ag.gp[aD.eX];
    this.resize();
  };
  this.resize = function () {
    i = Math.floor((a0.a1.hw() ? 0.305 : 0.24) * h.hx);
    this.j = Math.floor(0.5 + i * 0.13);
    i = Math.floor(this.j * 6);
    a5o = bA.qb.sQ(1, Math.floor(this.j * 0.8));
    a9q = bA.qb.sQ(1, Math.floor(this.j * 0.45));
    a9v = Math.floor(this.j * 0.5);
    bS.wc.font = a5o;
    ew = bc.gap;
    a9p = Math.floor(1 + this.j * 0.13);
    canvas = document.createElement("canvas");
    canvas.width = i;
    canvas.height = this.j;
    yJ = canvas.getContext("2d", {
      alpha: true
    });
    bA.qb.textBaseline(yJ, 1);
    bA.qb.textAlign(yJ, 1);
    this.a9w();
  };
  this.a7k = function () {
    return a0.a1.hw() && h.i < h.j * 1.2;
  };
  this.a8P = function () {
    if (this.a7k()) {
      this.eu = h.i - i - bc.gap;
    } else {
      this.eu = Math.floor(aV.a9x() + (h.i - aV.a9x() - aW.i - i) / 2 - bc.gap * 0.5);
    }
  };
  this.mV = function () {
    if (a7H) {
      a7H = false;
      this.a9w();
    }
  };
  this.a9w = function () {
    yJ.font = a5o;
    yJ.clearRect(0, 0, i, this.j);
    yJ.fillStyle = a9s ? a9t : a9u;
    yJ.fillRect(0, 0, i, this.j);
    yJ.fillStyle = bB.nl;
    var f8 = this.a9y();
    this.a9z();
    yJ.fillStyle = ag.gp[aD.eX] >= ae.jq(aD.eX) ? bB.oG : bB.nj;
    var aA0 = bA.ra.zQ(a3d);
    yJ.fillText(aA0, Math.floor(i / 2), a9v);
    var sx = yJ.measureText(aA0).width;
    yJ.font = a9q;
    yJ.fillStyle = f8 === 9 ? bB.op : bB.nj;
    var aA1 = ae.aA2;
    var aA3 = "+" + aA1;
    var sy = yJ.measureText(aA3).width;
    var aA4 = Math.floor(this.j / 12);
    var n9 = (i + sx) * 0.5 + aA4;
    if (n9 + sy + a9p <= i) {
      yJ.fillText(aA3, Math.floor(n9 + sy * 0.5), Math.floor(this.j * 0.3));
    } else if (aA1 >= 1000) {
      aA3 = "+" + Math.floor(aA1 / 1000) + "K";
      sy = yJ.measureText(aA3).width;
      if (n9 + sy + a9p <= i) {
        yJ.fillText(aA3, Math.floor(n9 + sy * 0.5), Math.floor(this.j * 0.3));
      }
    }
    yJ.fillStyle = bB.nj;
    yJ.fillRect(0, 0, i, 1);
    yJ.fillRect(0, 0, 1, this.j);
    yJ.fillRect(0, this.j - 1, i, 1);
    yJ.fillRect(i - 1, 0, 1, this.j);
  };
  this.a9y = function () {
    var f8 = bf.k7() % 100;
    f8 -= f8 % 10;
    f8 = 9 - bL.du(f8, 10);
    var xH = Math.floor(f8 * (this.j - a9p) / 9);
    yJ.fillRect(0, xH, a9p, this.j - xH);
    yJ.fillRect(i - a9p, xH, a9p, this.j - xH);
    return f8;
  };
  this.a9z = function () {
    yJ.fillRect(a9p, this.j - a9p, Math.floor((i - a9p * 2) * ag.gp[aD.eX] / a9r), a9p);
  };
  this.j3 = function () {
    var gL = aD.eX;
    if (!bA.g9.gz(gL)) {
      return;
    }
    var f7 = ag.gp[gL] - ag.a3c[gL];
    if (a3d !== f7) {
      a9r = a6O(f7, a9r);
      a9s = f7 > a3d && f7 >= 10;
      a3d = f7;
      a7H = true;
    } else if (bf.k7() % 10 === 9) {
      a7H = true;
    }
  };
  this.uj = function () {
    if (ag.mj[aD.eX] === 0 || aD.hB || ag.a3T[aD.eX] === 2) {
      return;
    }
    uk.drawImage(canvas, this.eu, ew);
  };
}
var a7z;
var ll;
var jv;
function cM() {
  var aA5;
  var aA6;
  var aA7;
  var aA8;
  var aA9;
  var aAA;
  var aAB;
  var aAC;
  var aAD;
  var aAE;
  var aAF;
  var aAG;
  var aAH;
  var aAI;
  var aAJ;
  var aAK;
  var aAL;
  var aAM;
  var aAN;
  var aAO;
  var aAP;
  var aAQ;
  var position;
  var aAR;
  var aAS;
  var aAT;
  var aAU;
  var aAV = 1;
  var aAW = 1;
  var aAX = "";
  this.dd = function () {
    var aB;
    aAR = 0;
    aAS = false;
    aAT = 0;
    aAU = 0;
    aAQ = -1;
    aA9 = a0.a1.hw() ? 6 : 10;
    position = 0;
    aAW = bj.eK.data[11].value;
    aAW = aAW === 0 ? 10 : aAW === 1 ? 5 : 1;
    aAP = false;
    aAN = new Uint16Array(aA9 + 1);
    aAO = new Uint32Array(aA9 + 1);
    aAD = aD.ek;
    ll = new Uint16Array(aAD);
    jv = new Uint16Array(aAD);
    for (aB = aAD - 1; aB >= 0; aB--) {
      ll[aB] = aB;
      jv[aB] = aB;
    }
    this.resize(true);
    aAL = new Uint16Array(aD.ek);
    var aAY = Math.floor(aA5 - aAJ - aAI - aAC);
    aAM = new Array(aD.ek);
    aAB.font = aA8;
    for (aB = aD.ek - 1; aB >= 0; aB--) {
      aAM[aB] = aB + 1 + ".";
      ag.yc[aB] = bA.yJ.a39(ag.a0n[aB], aA8, aAY);
      aAL[aB] = Math.floor(aAB.measureText(ag.yc[aB]).width);
    }
    aAZ();
  };
  this.resize = function (dd) {
    if (a0.a1.hw()) {
      aA5 = Math.floor(h.hx * 0.335);
      a7z = Math.floor(aA9 * aA5 / 8);
    } else {
      aA5 = Math.floor(h.hx * 0.27);
      a7z = Math.floor(aA9 * aA5 / 10);
    }
    aA5 = Math.floor(aA5 * 0.97);
    aAA = document.createElement("canvas");
    aAA.width = aA5;
    aAA.height = a7z;
    aAB = aAA.getContext("2d", {
      alpha: true
    });
    aAE = aA5 * 0.025;
    aA7 = aA5 * 0.16;
    aAF = aA5 * 0;
    aAG = Math.floor(aAE * 0.45 + aA7);
    aAH = (a7z - aA7 - aAE * 2 - aAF) / aA9;
    aA6 = bA.qb.sQ(1, Math.floor(aA7 * 0.55));
    aAV = Math.floor((a0.a1.hw() ? 0.67 : 0.72) * aAH);
    aA8 = bA.qb.sQ(0, aAV);
    aAB.font = aA8;
    aAI = Math.floor(aA5 * 0.04);
    aAJ = Math.floor((a0.a1.hw() ? 0.195 : 0.18) * aA5);
    aAC = Math.floor(aAB.measureText("00920600").width);
    aAB.font = aA6;
    aAK = aA5 - aAI;
    if (!dd) {
      aAB.font = aA8;
      for (var aB = aD.ek - 1; aB >= 0; aB--) {
        aAL[aB] = Math.floor(aAB.measureText(ag.yc[aB]).width);
      }
      aAZ();
    }
    aAX = bA.yJ.a39(L(109), aA6, aA5 * 0.96);
  };
  this.a9x = function () {
    return aA5;
  };
  this.mV = function (bu, aAa) {
    if (aAa || aAP && (bu || bf.k7() % aAW === 0)) {
      aAP = false;
      aAZ();
    }
  };
  function aAZ() {
    var f6;
    aAB.clearRect(0, 0, aA5, a7z);
    aAB.fillStyle = bB.oZ;
    aAB.fillRect(0, 0, aA5, aAG);
    aAB.fillStyle = bB.nf;
    aAB.fillRect(0, aAG, aA5, a7z - aAG);
    if (jv[aD.eX] >= position) {
      aAb(jv[aD.eX] - position, bB.o8);
    }
    if (jv[aD.eX] !== 0 && position === 0) {
      aAb(0, bB.og);
    }
    if (aAQ !== -1) {
      aAb(aAQ, bB.nk);
    }
    aAB.fillStyle = bB.nj;
    aAB.fillRect(0, aAG, aA5, 1);
    aAB.fillRect(0, 0, aA5, bc.z7);
    aAB.fillRect(0, 0, bc.z7, a7z);
    aAB.fillRect(aA5 - bc.z7, 0, bc.z7, a7z);
    aAB.fillRect(0, a7z - bc.z7, aA5, bc.z7);
    aAB.font = aA6;
    bA.qb.textBaseline(aAB, 1);
    bA.qb.textAlign(aAB, 1);
    aAB.fillText(aAX, Math.floor(aA5 / 2), Math.floor(aAE + aA7 / 2));
    var gM = jv[aD.eX] < position + aA9 - 1 ? 1 : 2;
    aAB.font = aA8;
    bA.qb.textAlign(aAB, 0);
    for (f6 = aA9 - gM; f6 >= 0; f6--) {
      aAc(ll[f6 + position]);
      aAd(f6, f6 + position, ll[f6 + position]);
    }
    bA.qb.textAlign(aAB, 2);
    for (f6 = aA9 - gM; f6 >= 0; f6--) {
      aAc(ll[f6 + position]);
      aAe(f6, ll[f6 + position]);
    }
    if (gM === 2) {
      aAc(aD.eX);
      bA.qb.textAlign(aAB, 0);
      aAd(aA9 - 1, jv[aD.eX], aD.eX);
      bA.qb.textAlign(aAB, 2);
      aAe(aA9 - 1, aD.eX);
    }
    if (position === 0) {
      aAf();
    }
  }
  function aAc(player) {
    if (aD.hh) {
      aAB.fillStyle = bg.aAg[bg.aAh[player]];
    }
  }
  function aAb(aB, aAi) {
    aAB.fillStyle = aAi;
    aB = aB > aA9 - 1 ? aA9 - 1 : aB;
    var aAj = Math.floor((aB === aA9 - 1 ? 2 : aB === 0 ? 1.15 : 1) * aAH);
    aAj = aB === aA9 - 2 ? Math.floor(aAG + aAH * 9.15) - Math.floor(aAG + aAH * 8.15) : aAj;
    aAB.fillRect(0, Math.floor(aAG + (aB + (aB === 0 ? 0 : 0.15)) * aAH), aA5, aAj);
  }
  function aAf() {
    var a5t = aAH * 0.7 / ab.get(4).height;
    aAB.setTransform(a5t, 0, 0, a5t, Math.floor(aAI + aAH * 0.58 + a5t * 0.5 * ab.get(4).width), Math.floor(aAE + aA7 + aAH * 0.4));
    aAB.imageSmoothingEnabled = true;
    aAB.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2));
    aAB.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aAd(aAk, a3r, aB) {
    aAB.fillText(aAM[a3r], aAI, Math.floor(aAE + aA7 + (aAk + 0.5) * aAH));
    if (ag.a3T[aB] === 1) {
      aAB.font = "italic " + aA8;
    }
    var ew = Math.floor(aAE + aA7 + (aAk + 0.5) * aAH);
    aAB.fillText(ag.yc[aB], aAJ, ew);
    if (ag.a3T[aB] !== 0) {
      aAB.font = aA8;
    }
    if (aB < aD.kA && ag.a3T[aB] !== 2) {
      return;
    }
    aAB.fillRect(aAJ, ew + aAV * 0.35, aAL[aB], Math.max(1, aAV * 0.1));
  }
  function aAe(aAk, aB) {
    aAB.fillText(ag.gb[aB], aAK, Math.floor(aAE + aA7 + (aAk + 0.5) * aAH));
  }
  this.j3 = function () {
    aAl();
    aAm();
    aAn();
    aAo();
  };
  function aAo() {
    for (var aB = aA9 - 1; aB >= 0; aB--) {
      aAN[aB] = ll[aB];
      aAO[aB] = ag.gb[ll[aB]];
    }
    aAN[aA9] = jv[aD.eX];
    aAO[aA9] = ag.gb[aD.eX];
  }
  function aAn() {
    var dt = aAP;
    aAP = true;
    var gM = jv[aD.eX] >= aA9 - 1 ? aA9 - 2 : aA9 - 1;
    for (var aB = gM; aB >= 0; aB--) {
      if (aAN[aB] !== ll[aB] || aAO[aB] !== ag.gb[ll[aB]]) {
        return true;
      }
    }
    if (gM === aA9 - 2 && (aAN[aA9] !== jv[aD.eX] || aAO[aA9] !== ag.gb[aD.eX])) {
      return true;
    }
    aAP = dt;
    return dt;
  }
  function aAm() {
    var aAp;
    var nR = aAD - 1;
    for (var f6 = 0; f6 < nR; f6++) {
      if (ag.gb[ll[f6]] < ag.gb[ll[f6 + 1]]) {
        aAp = ll[f6];
        ll[f6] = ll[f6 + 1];
        ll[f6 + 1] = aAp;
        jv[ll[f6]] = f6;
        jv[ll[f6 + 1]] = f6 + 1;
      }
    }
  }
  function aAl() {
    for (var f6 = aAD - 1; f6 >= 0; f6--) {
      if (ag.mj[ll[f6]] === 0) {
        aAq(f6);
      }
    }
  }
  function aAq(f6) {
    var aAr = ll[f6];
    aAD--;
    for (var aB = f6; aB < aAD; aB++) {
      ll[aB] = ll[aB + 1];
      jv[ll[aB]] = aB;
    }
    ll[aAD] = aAr;
    jv[ll[aAD]] = aAD;
  }
  this.h0 = function (eu, ew) {
    var aAs;
    if (z6(eu, ew)) {
      aAR = bf.eM;
      aAS = true;
      aAT = aAU = aAt(ew);
      if (bJ.a2G()) {
        aAs = a8m(-1, aAU, aA9);
        aAs = aAs === aA9 ? -1 : aAs;
        if (aAQ !== aAs) {
          aAQ = aAs;
          aAZ();
          bf.dl = true;
        }
      }
      return true;
    }
    return false;
  };
  this.a1d = function (eu, ew) {
    var dt;
    var aAs = aAt(ew);
    if (aAS) {
      dt = position;
      position += aAT - aAs;
      position = a8m(0, position, aD.ek - aA9);
      if (position !== dt) {
        aAT = aAs;
        aAs = a8m(-1, aAs, aA9);
        aAs = aAs === aA9 || !z6(eu, ew) ? -1 : aAs;
        aAQ = aAs;
        aAZ();
        bf.dl = true;
      }
      return true;
    }
    aAs = a8m(-1, aAs, aA9);
    aAs = aAs === aA9 || !z6(eu, ew) || bJ.a2G() ? -1 : aAs;
    if (aAQ !== aAs) {
      aAQ = aAs;
      aAZ();
      bf.dl = true;
      return true;
    }
    return false;
  };
  this.a22 = function (eu, ew) {
    if (!aAS) {
      return false;
    }
    aAS = false;
    var aAs = aAt(ew);
    if (bJ.a2G() && aAQ !== -1) {
      aAQ = -1;
      aAZ();
      bf.dl = true;
    }
    if (bf.eM - aAR < 350 && aAU === aAs) {
      aAs = a8m(-1, aAs, aA9);
      aAs = aAs === aA9 || !z6(eu, ew) ? -1 : aAs;
      if (aAs !== -1) {
        var player = ll[aAs + position];
        if (aAs === aA9 - 1 && jv[aD.eX] >= position + aA9 - 1) {
          player = aD.eX;
        }
        if (ag.mj[player] !== 0) {
          aH.n4(player, 800, false, 0);
        }
      }
    }
    return true;
  };
  this.a1g = function (eu, ew, deltaY) {
    var aAs;
    if (aAS || aD.nC) {
      return false;
    }
    var aAu = Math.max(Math.floor(Math.abs(deltaY) / 40), 1);
    if (z6(eu, ew)) {
      aAs = aAt(ew);
      aAs = a8m(-1, aAs, aA9);
      aAs = aAs === aA9 || bJ.a2G() ? -1 : aAs;
      if (deltaY > 0) {
        if (position < aD.ek - aA9) {
          position += Math.min(aD.ek - aA9 - position, aAu);
          aAQ = aAs;
          aAZ();
          bf.dl = true;
        }
      } else if (position > 0) {
        position -= Math.min(position, aAu);
        aAQ = aAs;
        aAZ();
        bf.dl = true;
      }
      return true;
    }
    return false;
  };
  function aAt(ew) {
    ew -= bc.gap + aAG;
    if (ew < 0) {
      return Math.floor(ew / aAH) - 1;
    } else if (ew < (aA9 - 1) * aAH) {
      return Math.floor(ew / aAH);
    } else if (ew < a7z - aAG) {
      return aA9 - 1;
    }
    ew -= a7z - aAG;
    return aA9 + Math.floor(ew / aAH);
  }
  function z6(eu, ew) {
    return eu >= bc.gap && eu < bc.gap + aA5 && ew >= bc.gap && ew < bc.gap + a7z;
  }
  this.uj = function () {
    uk.drawImage(aAA, bc.gap, bc.gap);
  };
}
function cN() {
  var canvas;
  var yJ;
  var eu;
  var ew;
  var a9h;
  var aAv;
  var gap;
  var aAw;
  var fontSize;
  var aAx;
  var aAy;
  var aAz;
  var aB0;
  var aB1;
  var aB2;
  var aB3;
  var aB4;
  var aB5;
  this.dd = function () {
    aB3 = aB4 = 0;
    aAy = new Array(8);
    aAy[0] = L(110);
    aAy[1] = aD.kU ? L(111) : L(112);
    aAy[2] = L(113);
    aAy[3] = L(114);
    aAy[4] = L(115);
    aAy[5] = L(116, 0, "Interest");
    aAy[6] = L(117);
    aAy[7] = L(118);
    aAz = new Array(aAy.length);
    aAz.fill("");
    aB0 = new Array(aAy.length);
    aB0[0] = aD.kU ? 0 : aD.kA;
    aB0[1] = aD.kU ? al.kg : aD.kW;
    aB0[2] = aD.a0B;
    aB0[3] = 0;
    aB0[4] = bL.du(ag.gb[0] * 10000, Math.max(aD.ju, 1));
    aB0[5] = aD.data.iIncomeType === 0 ? 700 : aD.data.iIncomeType === 1 ? bL.du(aD.data.iIncomeValue * 700, 64) : bL.du(aD.data.iIncomeData[aD.eX] * 700, 64);
    aB0[6] = 0;
    aB6();
    aB0[7] = 0;
    aB2 = aB7(6);
    aB1 = new Array(aAy.length);
    aB1.fill(true);
    aB5 = 0;
    if (aD.kU) {
      aB1[0] = false;
      aB1[2] = false;
      aB1[3] = false;
      aB5 = 3;
    } else {
      aB1[3] = false;
      aB5 = 1;
    }
    aAx = 0;
    this.resize();
  };
  this.resize = function () {
    this.i = Math.floor((a0.a1.hw() ? 0.1646 : 0.126) * h.hx);
    this.j = Math.floor(this.i * 1.18);
    a9h = Math.floor(this.i * 0.04);
    gap = Math.floor(this.i * 0.035);
    aAw = this.i * 0.04;
    aAv = this.j;
    this.j -= Math.floor(aB5 * (this.j - a9h * 2) / aAy.length);
    fontSize = Math.floor((aAv - a9h) * 0.7 / aAy.length);
    var a5o = bA.qb.sQ(1, fontSize);
    canvas = document.createElement("canvas");
    canvas.width = this.i;
    canvas.height = this.j;
    yJ = canvas.getContext("2d", {
      alpha: true
    });
    yJ.font = a5o;
    aB8(a5o, this.i * 0.575);
    bA.qb.textBaseline(yJ, 1);
    yJ.lineWidth = 1;
    this.a4Q();
    this.a8P();
    aU.a8P();
    aB9();
  };
  function aB8(a5o, i) {
    for (var aB = 0; aB < aAz.length; aB++) {
      aAz[aB] = bA.yJ.a39(aAy[aB], a5o, i);
    }
  }
  this.a8P = function () {
    eu = h.i - this.i - bc.gap;
  };
  this.aBA = function () {
    ew = bc.gap;
  };
  this.a4Q = function () {
    ew = bc.gap + (aU.a7k() && ag.mj[aD.eX] !== 0 && !aD.hB ? aU.j + bc.gap : 0);
  };
  this.mV = function (bu) {
    if (bu || aAx >= 100) {
      aAx = 0;
      aB9();
    }
  };
  function aB9() {
    var eR;
    yJ.clearRect(0, 0, aW.i, aW.j);
    yJ.fillStyle = bB.ng;
    yJ.fillRect(0, 0, aW.i, aW.j);
    yJ.fillStyle = bB.o3;
    eR = aB3 > 0 ? aB3 : Math.sqrt(aB0[4] / 10000);
    yJ.fillRect(0, aW.j - a9h - 1, Math.floor(eR * aW.i), a9h);
    yJ.fillStyle = bB.nj;
    yJ.fillRect(0, 0, aW.i, 1);
    yJ.fillRect(0, 0, 1, aW.j);
    yJ.fillRect(aW.i - 1, 0, 1, aW.j);
    yJ.fillRect(0, aW.j - 1, aW.i, 1);
    yJ.fillRect(0, aW.j - a9h - 1, aW.i, 1);
    var dt = 0;
    for (var aB = 0; aB < aAz.length; aB++) {
      if (!aB1[aB]) {
        dt++;
        continue;
      }
      bA.qb.textAlign(yJ, 0);
      var aBB = Math.floor((aAv - a9h + aAw * 2) * (aB - dt + 1) / (aAz.length + 1) - aAw * 0.7);
      yJ.fillText(aAz[aB], gap, aBB);
      bA.qb.textAlign(yJ, 2);
      if (aB === 5 && ag.mj[aD.eX] !== 0 && ag.gp[aD.eX] >= ae.jq(aD.eX)) {
        yJ.fillStyle = bB.od;
        yJ.fillText(aB7(aB), aW.i - gap, aBB);
        yJ.fillStyle = bB.nj;
      } else {
        yJ.fillText(aB7(aB), aW.i - gap, aBB);
      }
    }
  }
  function aB7(aB) {
    if (aB < 3) {
      return aB0[aB].toString();
    } else if (aB === 3) {
      return bA.ra.a4B(aB0[aB] / 100, 2);
    } else if (aB === 4) {
      return bA.ra.a4B(aB0[aB] / 100, 2);
    } else if (aB === 5) {
      return bA.ra.a4B(aB0[aB] / 100, 2);
    } else if (aB < 7) {
      return bA.ra.zQ(aB0[aB]);
    } else {
      return aW.aBC(aB0[7]);
    }
  }
  this.a59 = function () {
    return aB0[7];
  };
  this.aBC = function (value) {
    var l5 = Math.floor(value / 1000 / 60);
    var en = Math.floor((value - l5 * 60000) / 1000);
    if (en < 10) {
      return l5 + ":0" + en;
    }
    return l5 + ":" + en;
  };
  this.j3 = function () {
    aBD();
    aBE();
    this.mN();
    aBF();
    aB6();
    aBG();
    aBH();
    aBI();
  };
  function aBD() {
    if (!aB1[0]) {
      return;
    }
    if (aD.a0C - aD.a0B === aB0[0]) {
      return;
    }
    aB0[0] = aD.a0C - aD.a0B;
    aAx++;
  }
  function aBE() {
    if (al.kg - aB0[0] === aB0[1]) {
      return;
    }
    aB0[1] = al.kg - aB0[0];
    aAx++;
  }
  this.mN = function () {
    if (!aB1[2]) {
      return;
    }
    if (aD.a0B === aB0[2]) {
      return;
    }
    aB0[2] = aD.a0B;
    aAx += aD.a09 === 2 ? 100 : 1;
  };
  function aBH() {
    var a3t;
    var per;
    if (aD.hh) {
      a3t = bh.kh();
    } else {
      a3t = ag.gb[ll[0]];
    }
    per = bL.du(a3t * 10000, Math.max(aD.ju, 1));
    aB0[3] = a3t;
    if (aB0[4] === per) {
      return;
    }
    aAx++;
    aB0[4] = per;
  }
  this.aBJ = function () {
    return aB0[3] === aD.ju;
  };
  function aBI() {
    if (aD.kS === 8 && aBK()) {
      return;
    }
    if (aB0[3] < aD.ju) {
      return;
    }
    if (!aBL()) {
      return;
    }
    if (bN.kz.aBM().length) {
      return;
    }
    bR.zl.a08();
  }
  function aBL() {
    for (var aB = al.kg - 1; aB >= 0; aB--) {
      if (ag.gF[al.kl[aB]].length > 0) {
        return false;
      }
    }
    return true;
  }
  function aBK() {
    for (var aB = 0; aB < 2; aB++) {
      if (!bA.g9.gz(aB)) {
        bR.zl.a08();
        return true;
      }
    }
    return false;
  }
  function aBF() {
    var aBN = ae.aBO(aD.eX);
    if (aBN === aB0[5]) {
      return;
    }
    aB0[5] = aBN;
    aAx++;
  }
  function aB6() {
    if (ag.gb[aD.eX] === aB0[6]) {
      return;
    }
    aB0[6] = ag.gb[aD.eX];
    aAx++;
  }
  function aBG() {
    aB0[7] += bf.aBP;
    var qI = aB7(7);
    if (aB2 !== qI) {
      aB2 = qI;
      aAx += 100;
    }
  }
  this.aBQ = function (aB) {
    var tE;
    var aBR;
    var dt;
    if (aD.a09 === 2) {
      return false;
    }
    if (aB % 2 === 1) {
      aV.mV(1, 1);
      bf.dl = true;
    }
    if (aB === aD.a4Z) {
      aB3 = 0;
      aB9();
      return false;
    }
    if (aB === -1 && aB4 === 0) {
      return false;
    }
    aBR = aB3;
    if (aD.gw) {
      aB3 = aB / aD.a4Z;
      aB9();
      return aB3 !== aBR;
    }
    dt = performance.now();
    if (aB >= 0) {
      tE = dt - aB * 392;
      aB4 = aB === 0 || tE < aB4 ? tE : aB4;
    }
    aB3 = (dt - aB4) / (aD.a4Z * 392);
    aB3 = aB3 > 1 ? 1 : aB3;
    aB9();
    return aB3 !== aBR;
  };
  this.uj = function () {
    uk.drawImage(canvas, eu, ew);
  };
}
function cO() {
  var hZ;
  var aBS;
  var i;
  var j;
  var a8V;
  var aBT;
  var aBU;
  var a7l;
  var canvas;
  var mw;
  var aBV;
  this.dd = function () {
    hZ = false;
    aBV = false;
    j = 0;
    a8V = 0.61;
    aBT = 0.07;
    aBU = 0.09;
    a7l = 0;
    mw = 0;
  };
  this.resize = function () {
    if (!hZ) {
      return;
    }
    if (a0.a1.hw()) {
      i = Math.floor(h.hx * 0.69);
    } else {
      i = Math.floor(h.hx * 0.5);
    }
    i = aBW(i, a6O(h.i - bc.gap * 2, 10));
    i = aBW(i, Math.floor(a6O(h.j - bc.gap * 2, 3) * 3.57));
    j = Math.floor(i * 0.28);
    aBX();
  };
  this.show = function (fF, aBY, a8G, aBZ) {
    if (hZ) {
      return;
    }
    if (aBZ && aBV) {
      return;
    }
    aBV = true;
    aBS = a8G ? 21 : fF ? 1 : 2;
    hZ = true;
    this.resize();
    aL.rs();
    aR.a8B();
    mw = bf.eM;
    a7l = aBY ? 1 : 0;
  };
  this.j3 = function () {
    if (!hZ || a7l >= 1) {
      return;
    }
    a7l += (bf.eM - mw) * 0.0005;
    a7l = a7l > 1 ? 1 : a7l;
    mw = bf.eM;
    bf.dl = true;
  };
  this.h0 = function (eu, ew) {
    if (!hZ || a7l <= 0) {
      return false;
    }
    eu -= Math.floor((h.i - i) / 2);
    ew -= yF();
    if (eu < 0 || ew < 0 || eu > i || ew > j) {
      return false;
    }
    if (eu > i - j / 3 && ew < j / 3) {
      hZ = false;
      bf.dl = true;
    }
    return true;
  };
  this.uj = function () {
    if (!hZ || a7l <= 0) {
      return;
    }
    uk.globalAlpha = a7l;
    uk.drawImage(canvas, Math.floor((h.i - i) / 2), yF());
    uk.globalAlpha = 1;
  };
  function yF() {
    var eu = Math.floor((h.i - i) / 2);
    if (eu < aR.j + bc.gap * 2) {
      return h.j - j - bc.gap * 4 - aR.j;
    }
    return h.j - j - bc.gap * 2;
  }
  function aBX() {
    canvas = document.createElement("canvas");
    canvas.width = i;
    canvas.height = j;
    var yJ = canvas.getContext("2d", {
      alpha: true
    });
    var n9 = Math.floor(1 + j / 40);
    yJ.clearRect(0, 0, i, j);
    yJ.fillStyle = bB.ng;
    yJ.fillRect(n9, n9, i - n9 * 2, j - n9 * 2);
    yJ.lineJoin = "bevel";
    yJ.lineWidth = n9 * 2;
    yJ.strokeStyle = bB.nj;
    yJ.strokeRect(n9, n9, i - n9 * 2, j - n9 * 2);
    yJ.imageSmoothingEnabled = false;
    var f8 = ab.get(aBS);
    var aBa = f8.width;
    var aBb = f8.height;
    var a5t = (aBS === 1 ? 0.85 : aBS === 21 ? 0.666 : 0.9) * a8V * j / aBb;
    yJ.setTransform(a5t, 0, 0, a5t, Math.floor((i - a5t * aBa) / 2), Math.floor((j - a5t * aBb) / 2));
    yJ.drawImage(f8, 0, 0);
    yJ.setTransform(1, 0, 0, 1, Math.floor(i - aBU * j - aBT * j - n9), Math.floor(n9 + aBT * j));
    aBc(yJ, Math.floor(aBU * j));
    yJ.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aBc(yJ, en) {
    yJ.lineWidth = Math.floor(1 + j / 80);
    yJ.strokeStyle = bB.nj;
    yJ.beginPath();
    yJ.moveTo(0, 0);
    yJ.lineTo(en, en);
    yJ.moveTo(0, en);
    yJ.lineTo(en, 0);
    yJ.stroke();
  }
}
function dN() {
  var aBd;
  var aBe = new Uint8Array(5);
  var aBf = new Uint8Array(5);
  this.aBg = new aBh();
  this.dd = function () {
    var fF = bj.eK.data[119].value;
    for (var aB = 0; aB < aBe.length; aB++) {
      aBe[aB] = (fF >> aB * 2) % 4;
    }
  };
  this.a4l = function () {
    aBd = [L(119), "", L(120, [bX.aBi[28]]), L(121, [bX.aBi[26]]), L(122, [bX.aBi[0]])];
    this.aBg.dd();
  };
  this.j3 = function () {
    this.aBg.j3();
  };
  this.a5X = function (id) {
    if (id > 1 && bJ.r3()) {
      return;
    }
    if (!aBj(id)) {
      return;
    }
    aN.a6U(aBd[id]);
  };
  function aBj(e8) {
    if (aBe[e8] === 3 || aBf[e8] === 1) {
      return false;
    }
    aBf[e8] = 1;
    if (Math.random() < 0.6) {
      return true;
    }
    aBe[e8]++;
    var fF = 0;
    for (var aB = 0; aB < aBe.length; aB++) {
      fF += aBe[aB] << aB * 2;
    }
    bj.s3.s4(119, fF);
    return true;
  }
}
function aBh() {
  var aBk;
  this.dd = function () {
    aBk = false;
  };
  this.j3 = function () {
    if (!aBl()) {
      return;
    }
    if (aBm()) {
      return;
    }
    if (aBn()) {
      return;
    }
    if (aBo()) {
      return;
    }
    aBp();
  };
  function aBl() {
    if (aBk) {
      return true;
    }
    if (bf.k7() % 30 !== 9) {
      return false;
    }
    if (!bA.g9.lh(90)) {
      return false;
    }
    aBk = true;
    return true;
  }
  function aBm() {
    var qT = aN.a6q(956);
    if (!qT) {
      return false;
    }
    if (bA.g9.l8(qT.player)) {
      return true;
    }
    aN.a6p(956, 0);
    return false;
  }
  function aBn() {
    var gL = aD.hh ? aBq() : aBr();
    if (gL === -1) {
      return false;
    }
    aN.yb(0, L(123, [ag.yc[gL]]), 956, gL, bB.nj, bB.ng, -1, true);
    return true;
  }
  function aBr() {
    var aBs = al.kg;
    var l4 = al.kl;
    var aBt = jv;
    for (var aB = 0; aB < aBs; aB++) {
      var gL = l4[aB];
      if (aBt[gL] !== 0) {
        return gL;
      }
    }
    return -1;
  }
  function aBq() {
    var id = bh.kj();
    var en = al.kg;
    if (!bg.kX[id]) {
      if (en > 1) {
        return ll[en - 1];
      }
      return -1;
    }
    var zx = al.kl;
    var el = bg.el;
    for (var aB = 0; aB < en; aB++) {
      var gL = zx[aB];
      if (el[gL] !== id) {
        return gL;
      }
    }
    return -1;
  }
  function aBo() {
    var qT = aN.a6q(957);
    if (!qT || !qT.a6K) {
      return false;
    }
    if (ac.ee(qT.a6K.eZ << 2)) {
      return true;
    }
    aN.a6p(957, 0);
    return false;
  }
  function aBp() {
    var en = ao.il.lK;
    if (en === 0) {
      return;
    }
    var eK = ao.il.eK;
    for (var aB = 0; aB < en; aB++) {
      var eZ = eK[aB];
      if (ac.ee(eZ << 2)) {
        aN.yb(0, L(124, [bM.ev(eZ), bM.ex(eZ)]), 957, 0, bB.nj, bB.ng, -1, true, undefined, {
          f6: 1,
          eZ: eZ
        });
        return;
      }
    }
  }
}
function dO() {
  this.aBu = new aBv();
  this.dd = function () {
    this.aBu.resize();
  };
}
function aBv() {
  this.resize = function () {
    var aB;
    var aBw = document.head.querySelector("style#ss");
    if (!aBw) {
      aBw = document.createElement("style");
      aBw.id = "ss";
      document.head.appendChild(aBw);
    } else {
      for (aB = aBw.sheet.cssRules.length - 1; aB >= 0; aB--) {
        aBw.sheet.deleteRule(0);
      }
    }
    var a8d = "::-webkit-scrollbar";
    var aBx = bA.qb.qk(bc.sS);
    var hj = bA.qb.qk(Math.max(bA.qb.ru(0.012), 8));
    try {
      aBw.sheet.insertRule(a8d + "{width:" + hj + ";height:" + hj + ";}", aBw.sheet.cssRules.length);
      aBw.sheet.insertRule(a8d + "-thumb{background-color:white;}", aBw.sheet.cssRules.length);
      aBw.sheet.insertRule(a8d + "-track{background:" + bB.nf + ";}", aBw.sheet.cssRules.length);
      aBw.sheet.insertRule(a8d + "-track:horizontal{border-top:" + aBx + " solid white;}", aBw.sheet.cssRules.length);
      aBw.sheet.insertRule(a8d + "-track:vertical{border-left:" + aBx + " solid white;}", aBw.sheet.cssRules.length);
      aBw.sheet.insertRule(a8d + "-button{display:none;}", aBw.sheet.cssRules.length);
    } catch (e) {
      console.log("error 3425: " + e);
      for (aB = aBw.sheet.cssRules.length - 1; aB >= 0; aB--) {
        aBw.sheet.deleteRule(0);
      }
    }
  };
}
function dM() {
  this.aBy = false;
  this.nZ = false;
  this.a4U = false;
  this.aBz = [0, 0, 0, 0];
  this.aC0 = function () {
    this.a4U = this.a4U || this.nZ;
    if (!this.nZ && (!this.aBy || !this.a4U)) {
      return;
    }
    var n9 = ba.aC1[0];
    var nA = ba.aC1[1];
    var nM = ba.aC1[2];
    var nN = ba.aC1[3];
    n9 = n9 < this.aBz[0] ? this.aBz[0] : n9;
    nA = nA < this.aBz[1] ? this.aBz[1] : nA;
    nM = nM > this.aBz[2] ? this.aBz[2] : nM;
    nN = nN > this.aBz[3] ? this.aBz[3] : nN;
    this.nZ = false;
    this.aBy = false;
    if (n9 === this.aBz[0] && nA === this.aBz[1] && nM === this.aBz[2] && nN === this.aBz[3]) {
      this.a4V();
      return;
    }
    if (nM >= n9 && nN >= nA) {
      a4n.putImageData(a4o, 0, 0, n9, nA, nM - n9 + 1, nN - nA + 1);
    }
  };
  this.a4V = function () {
    if (this.a4U && this.aBz[2] >= this.aBz[0] && this.aBz[3] >= this.aBz[1]) {
      a4n.putImageData(a4o, 0, 0, this.aBz[0], this.aBz[1], this.aBz[2] - this.aBz[0] + 1, this.aBz[3] - this.aBz[1] + 1);
    }
    this.a4U = false;
  };
  this.a0K = function () {
    if (this.aBz[2] >= this.aBz[0] && this.aBz[3] >= this.aBz[1]) {
      a4n.putImageData(a4o, 0, 0, this.aBz[0], this.aBz[1], this.aBz[2] - this.aBz[0] + 1, this.aBz[3] - this.aBz[1] + 1);
    }
    this.a4U = false;
  };
  this.dd = function () {
    var eu;
    var ew;
    this.aBy = false;
    this.nZ = false;
    this.a4U = false;
    this.aBz[0] = bS.ey;
    this.aBz[1] = bS.ez;
    this.aBz[2] = this.aBz[3] = 0;
    loop: for (eu = 1; eu < bS.ey - 1; eu++) {
      for (ew = bS.ez - 2; ew > 1; ew--) {
        if (aC2[ac.xm(eu, ew) + 2] === 1) {
          this.aBz[0] = eu;
          break loop;
        }
      }
    }
    loop: for (ew = 1; ew < bS.ez - 1; ew++) {
      for (eu = bS.ey - 2; eu > 1; eu--) {
        if (aC2[ac.xm(eu, ew) + 2] === 1) {
          this.aBz[1] = ew;
          break loop;
        }
      }
    }
    loop: for (eu = bS.ey - 2; eu > 0; eu--) {
      for (ew = bS.ez - 2; ew > 1; ew--) {
        if (aC2[ac.xm(eu, ew) + 2] === 1) {
          this.aBz[2] = eu;
          break loop;
        }
      }
    }
    loop: for (ew = bS.ez - 2; ew > 0; ew--) {
      for (eu = bS.ey - 2; eu > 1; eu--) {
        if (aC2[ac.xm(eu, ew) + 2] === 1) {
          this.aBz[3] = ew;
          break loop;
        }
      }
    }
  };
}
function L(value, aC3, vJ) {
  var qI;
  if (typeof value === "number") {
    qI = b7.aC4[value];
  } else {
    qI = value;
  }
  if (vJ && b7.aC5()) {
    qI = vJ;
  }
  if (!aC3) {
    return qI;
  }
  var en = aC3.length;
  for (var aB = 0; aB < en; aB++) {
    for (var f6 = 0; f6 < 3; f6++) {
      qI = qI.replace("{" + (f6 * 10 + aB) + "}", aC3[aB]);
    }
  }
  return qI;
}
function c2() {
  this.data = new aC6();
  var aC7 = new aC8().L84;
  this.aC4 = aC7;
  this.aC9 = "en";
  var aCA = false;
  this.dd = function () {
    aCA = false;
    if (aCB()) {
      return;
    }
    if (aCC() && aCD() && aCE()) {
      return;
    }
    aCA = true;
  };
  this.df = function () {
    bg.de();
    aE.de();
    be.de();
    bd.de();
    aO.dd();
    bo = new dy();
  };
  this.aC5 = function () {
    return this.aC4 === aC7 || !aC7.length;
  };
  function aCB() {
    var qI = bj.eK.data[12].value;
    if (qI.split("-")[0].toLowerCase() === "en") {
      b7.aC4 = aC7;
      b7.aC9 = qI;
      return true;
    }
    return false;
  }
  function aCC() {
    return bj.eK.data[12].value === bj.eK.data[145].value;
  }
  function aCD() {
    return bj.eK.data[146].value > 0;
  }
  function aCE() {
    var en = bj.eK.data[146].value;
    var g = bj.qs.vW(en, false);
    if (g.length !== en) {
      return false;
    }
    if (!bA.qj.a2m(g)) {
      return false;
    }
    return aCF(g);
  }
  function aCF(g) {
    var en = g.length;
    for (var j = 0; j < en; j++) {
      g[j] = g[j].replace("&#39;", "'");
    }
    var aCG = bj.qs.vW(en, true);
    if (en !== aCG.length) {
      return false;
    }
    if (!bA.qj.a2m(aCG)) {
      return false;
    }
    var l5 = aC7.length;
    var a9Y = new Array(l5);
    var aCH = l5 === en;
    var gG = Math.min(en, l5);
    for (var aB = 0; aB < l5; aB++) {
      a9Y[aB] = aC7[aB];
      if (aB < en && aCG[aB] === a9Y[aB]) {
        a9Y[aB] = g[aB];
        continue;
      }
      aCH = false;
      for (var f7 = 0; f7 < gG; f7++) {
        if (aCG[f7] === a9Y[aB]) {
          a9Y[aB] = g[f7];
          break;
        }
      }
    }
    b7.aC4 = a9Y;
    b7.aC9 = bj.eK.data[12].value;
    return aCH;
  }
  this.aCI = function () {
    if (!aCA) {
      return false;
    }
    aCA = false;
    if (aC7.length === 0) {
      return false;
    }
    var aCJ = bj.eK.data[12].value;
    b0.aCK.aCL(0, aCJ.slice(0, 20));
    return true;
  };
  this.aCM = function (g) {
    if (g.length !== aC7.length) {
      if (t.sq === 8) {
        t.a5A().aCN(30, 0, 1);
      }
      return;
    }
    this.aC4 = g;
    this.aC9 = bj.eK.data[12].value;
    bj.s3.s4(145, this.aC9);
    bj.s3.s4(146, g.length);
    bj.qs.vc(g, false);
    bj.qs.vc(aC7, true);
    if (t.sq === 8) {
      t.a5A().aCN(30);
      return;
    }
    if (aa.a1K() === 0 && t.sq === 5) {
      t.y.aCO();
    }
  };
  this.aCP = function () {
    var g = navigator.languages;
    if (!g || !g.length) {
      return [0, 0];
    }
    var aCQ = Math.max(b7.data.aCR(g[0]), 0);
    if (g.length === 1) {
      return [aCQ, aCQ];
    }
    return [aCQ, Math.max(b7.data.aCR(g[1]), 0)];
  };
}
function aC6() {
  this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"];
  this.aCS = function () {
    var aB;
    var aCT = [];
    var g = this.g;
    var en = g.length;
    for (aB = 0; aB < en; aB++) {
      aCT.push(g[aB]);
    }
    var aCU = bj.eK.data[12].vJ;
    for (aB = 0; aB < en; aB++) {
      if (aCT[aB] === aCU) {
        aCT.splice(aB, 1);
        en--;
        break;
      }
    }
    aCT.sort();
    en++;
    aCT.unshift(aCU);
    try {
      if (typeof Intl === "undefined") {
        return aCT;
      }
      for (aB = 0; aB < en; aB++) {
        var aCV = new Intl.DisplayNames([aCT[aB]], {
          type: "language"
        });
        var qI = aCV.of(aCT[aB]);
        if (qI !== aCT[aB]) {
          aCT[aB] = aCT[aB] + ": " + qI;
        }
      }
    } catch (e) {
      console.log("error 3646: " + e);
    }
    return aCT;
  };
  this.aCW = function (aCX) {
    var qI = bj.eK.data[12].value;
    var en = aCX.length;
    for (var aB = 0; aB < en; aB++) {
      if (qI === aCX[aB].split(":")[0]) {
        return aB;
      }
    }
    return 0;
  };
  this.aCR = function (aCY) {
    if (!aCY || aCY.length < 2) {
      return 0;
    }
    aCY = aCY.split("-")[0].toLowerCase();
    var g = this.g;
    var en = g.length;
    for (var aB = 0; aB < en; aB++) {
      if (aCY === g[aB]) {
        return aB;
      }
    }
    return -1;
  };
}
function aC8() {
  this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "You earned {10} gold!", "{0} earned {11} gold!", "Team {0}", "Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Next Contest: ", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚨 Moderation Actions", "🚩 Report User", "💬 Mention", "Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ", "Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.", "Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.", "If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.", "If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options", "Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts", "➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.", "You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader gains gold whenever a member earns gold in a game.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:", "If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Audit Log", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Admin", "Affected Account", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "The only official webpage is https://territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning", "Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"];
}
function dj() {
  var eu;
  var ew;
  var j;
  var tn;
  var aCZ;
  var aCa;
  var aCb;
  var aCc;
  var aCd;
  var i;
  var a3O;
  var aCe;
  this.hZ = false;
  this.dd = function (qI, aCf) {
    if (a0.id === 1 && a0.dv >= 13 && a0.dv < 18) {
      if (aCf) {
        a3O = qI;
        return;
      }
      if (a3O !== qI) {
        return;
      }
      a0.vU.saveString(200, qI);
      return;
    }
    if (!aCf) {
      return;
    }
    a3O = qI;
    aCe = document.createElement("a");
    aCe.appendChild(document.createTextNode(a3O));
    this.hZ = true;
    aCe.title = a3O;
    aCe.target = "_blank";
    aCe.href = a3O;
    aCe.style.textAlign = "center";
    aCe.style.color = bB.nj;
    aCe.style.position = "absolute";
    aCe.style.padding = "0px";
    aCe.style.margin = "0px";
    this.resize();
    document.body.appendChild(aCe);
    bf.dl = true;
  };
  this.rs = function () {
    if (!this.hZ) {
      return false;
    }
    t.removeChild(document.body, aCe);
    this.hZ = false;
    return true;
  };
  this.h0 = function (i4, i5) {
    if (!this.hZ) {
      return false;
    }
    if (i4 < eu || i5 < ew || i4 > eu + i || i5 > ew + j || i4 > eu + i - tn && i5 < ew + tn) {
      bf.dl = true;
      this.hZ = false;
      t.removeChild(document.body, aCe);
      return true;
    }
    return true;
  };
  this.resize = function () {
    if (!this.hZ) {
      return;
    }
    aCc = Math.floor((a0.a1.hw() ? h.i > h.j ? 0.6 : 0.55 : 0.4) * 0.8 * h.hx);
    tn = Math.floor(aCc * 0.15);
    aCZ = Math.floor(tn * 0.35);
    aCa = Math.floor(tn * 0.5);
    aCb = Math.floor(aCa * 2.5);
    j = tn + aCZ + aCa * 3;
    var a5o = bA.qb.sQ(1, aCZ / h.k);
    aCd = Math.floor(h.k * aQ.measureText(a3O, a5o));
    i = (aCd > aCc ? aCd : aCc) + aCb * 2;
    var aCg = i;
    i = Math.min(i, h.i - (a0.a1.hw() ? 2 : 1) * 2 * bc.gap);
    a5o = bA.qb.sQ(1, i / aCg * aCZ / h.k);
    aCd = Math.floor(h.k * aQ.measureText(a3O, a5o));
    eu = Math.floor((h.i - i) / 2);
    ew = Math.floor((h.j - j) / 2);
    aCe.style.font = a5o;
    aCe.style.top = Math.floor((ew + aCa * 1.4 + tn) / h.k) + "px";
    aCe.style.left = Math.floor((eu + (i - aCd) / 2) / h.k) + "px";
  };
  this.uj = function () {
    if (!this.hZ) {
      return;
    }
    uk.fillStyle = bB.ng;
    uk.fillRect(eu, ew + tn, i, j - tn);
    uk.fillStyle = bB.oq;
    uk.fillRect(eu, ew, i, tn);
    uk.fillStyle = bB.nj;
    uk.lineWidth = bc.z7;
    uk.strokeStyle = bB.nj;
    uk.strokeRect(eu, ew, i, j);
    uk.fillRect(eu, ew + tn, i, bc.z7);
    uk.font = bA.qb.sQ(1, tn * 0.48);
    bA.qb.textAlign(uk, 1);
    bA.qb.textBaseline(uk, 1);
    uk.fillText(L(125), Math.floor(eu + (i - tn * 0.5) / 2), Math.floor(ew + tn * 0.55));
    aM.a5z(Math.floor(eu + i - tn * 0.8), Math.floor(ew + tn * 0.25), Math.floor(tn * 0.5));
    uk.setTransform(1, 0, 0, 1, 0, 0);
  };
}
function dh() {
  var gap = 0;
  var eu = [0, 0, 0, 0, 0];
  var ew = [0, 0, 0, 0, 0];
  var nL = [1, 1, 1, 1, 1];
  var fF = [true, true, true, false, false];
  this.fa = [true, true, true, false, false];
  var f8 = null;
  var aAy;
  this.aCh = function (a2x, aCi) {
    f8 = a2x;
    fF = aCi;
    aAy = [bK.aCj, bK.a1D, bK.aCk, bK.aCk, bK.aCl];
    this.dd();
  };
  this.dd = function () {
    if (!ab.tI()) {
      return;
    }
    var aB;
    var sx = Math.floor((a0.a1.hw() ? 0.261 : 0.195) * h.hx);
    var sy = Math.floor(sx * 0.9);
    var a8V = Math.floor(sy * 0.17);
    gap = a0.a1.hw() ? bc.gap * 2 : bc.gap;
    nL[0] = sx / f8[0].width;
    nL[1] = sy / f8[1].width;
    nL[2] = a8V / f8[2].height;
    nL[3] = a8V / f8[3].height;
    nL[4] = a8V / f8[4].height;
    nL[2] *= 1.7;
    nL[3] *= 1.07;
    eu[0] = gap;
    eu[1] = gap;
    eu[2] = gap;
    eu[3] = gap;
    eu[4] = Math.floor(gap * 2 + nL[3] * f8[3].width);
    ew[0] = gap;
    ew[1] = ew[0] + gap + nL[0] * f8[0].height;
    ew[2] = ew[1] + gap + nL[1] * f8[1].height;
    ew[3] = ew[2] + gap + nL[2] * f8[2].height;
    ew[4] = ew[3];
    if (!fF[0]) {
      for (aB = 0; aB < 5; aB++) {
        ew[aB] -= nL[0] * f8[0].height + gap;
      }
    }
    if (!fF[1]) {
      for (aB = 2; aB < 5; aB++) {
        ew[aB] -= nL[1] * f8[1].height + gap;
      }
    }
  };
  this.hZ = function () {
    return aa.a1K() !== 7 || !a0.a1.hw();
  };
  this.h0 = function (i4, i5) {
    if (!f8 || !this.hZ()) {
      return false;
    }
    var aB;
    for (aB = fF.length - 1; aB >= 0; aB--) {
      if (fF[aB] && this.fa[aB] && i4 > eu[aB] && i5 > ew[aB] && i4 < eu[aB] + nL[aB] * f8[aB].width && i5 < ew[aB] + nL[aB] * f8[aB].height) {
        t.u(9, t.sq, new aCm(L(126), bA.qb.a3N(aAy[aB])));
        return true;
      }
    }
    return false;
  };
  this.uj = function () {
    if (!f8 || !this.hZ()) {
      return;
    }
    uk.imageSmoothingEnabled = true;
    var aB;
    for (aB = 0; aB < 5; aB++) {
      if (fF[aB] && this.fa[aB]) {
        uk.setTransform(nL[aB], 0, 0, nL[aB], eu[aB], ew[aB]);
        uk.drawImage(f8[aB], 0, 0);
      }
    }
    uk.setTransform(1, 0, 0, 1, 0, 0);
  };
}
function dX() {
  this.aCn = 0;
  this.aCo = null;
  this.tw = null;
  this.kz = null;
  this.y = null;
  this.uJ = null;
  this.tu = null;
  this.message = null;
  this.aCp = null;
  this.rr = null;
  this.aCq = null;
  this.aCr = new aCs();
  this.a1H = 0;
  this.a9P = 0;
  this.dd = function () {
    this.a9P = bf.eM;
    this.aCn = bG.st.wO(bj.eK.data[105].value);
    this.tw = new aCt();
    this.kz = new aCu();
    this.y = new aCv();
    this.uJ = new aCw();
    this.tu = new aCx();
    this.message = new aCy();
    this.aCp = new aCz();
    this.rr = new aD0();
    this.aCq = new aD1();
    this.y.dd();
    bp.dd();
    this.a1H = 1;
    a0.a1.setState(1);
    aa.setState(0);
  };
  this.uD = function () {
    if (this.rr) {
      this.rr.uD();
    }
    this.aCo = null;
    this.tw = null;
    this.kz = null;
    this.y = null;
    this.uJ = null;
    this.tu = null;
    this.message = null;
    this.aCp = null;
    this.rr = null;
    this.aCq = null;
    this.a1H = 0;
    bp.uD();
    a0.a1.setState(0);
  };
}
function aCt() {
  this.tx = [[], [], [], []];
  this.ty = [0, 0, 0, 0];
  this.aD2 = [];
  this.aD3 = function (aD4, so, username, u3, a3r, aD5, elo, color, vw, aD6) {
    var aD7 = this.aD8(so, username, u3, a3r, aD5, elo, color, vw, aD6);
    this.tx[aD4].push(aD7);
    if (bn.aCn === so) {
      bn.aCo = aD7;
    }
    if (bn.aCq.aD9(so)) {
      aD7.u5 = 1;
    }
    bn.y.aDA += t.sq === 29 && bn.y.rf[0] === aD4 && bn.y.rf[2] === 1;
  };
  this.aD8 = function (so, username, u3, a3r, aD5, elo, color, vw, aD6) {
    return {
      so: so,
      username: username,
      u3: u3,
      a3r: a3r,
      aD5: aD5,
      elo: elo,
      color: color,
      vw: vw,
      aD6: aD6
    };
  };
  this.aDB = function (e8, aD4, u3, a3r, aD5, elo, vw) {
    var player = this.tx[aD4][e8];
    player.u3 = u3;
    player.a3r = a3r;
    player.aD5 = aD5;
    player.elo = elo;
    player.vw = vw;
    bn.y.aDA += t.sq === 29 && bn.y.rf[0] === aD4 && bn.y.rf[2] === 1;
  };
  this.aDC = function (e8, aD4, aDD) {
    var player = this.tx[aD4][e8];
    var aDE = player.username;
    var aDF = "Redacted " + bF.st.zQ(player.so, 2);
    if (aDD) {
      player.username = "[" + bA.ra.a0q(aDE) + "] " + aDF;
    } else {
      player.username = aDF;
    }
    if (aDE.indexOf("Redacted") < 0) {
      player.aDG = aDE;
      player.aDH = 3;
    }
    bn.y.aDA += t.sq === 29 && bn.y.rf[0] === aD4 && bn.y.rf[2] === 1;
  };
  this.aDI = function (e8, aDJ, aDK) {
    var player = this.tx[aDJ][e8];
    this.aDL(e8, aDJ);
    this.tx[aDK].push(player);
    bn.y.aDA += t.sq === 29 && bn.y.rf[0] === aDK && bn.y.rf[2] === 1;
  };
  this.aDL = function (e8, aDJ) {
    var tw = this.tx[aDJ];
    this.aD2.push(tw[e8]);
    if (this.aD2.length > 1000) {
      this.aD2.shift();
    }
    if (e8 >= this.ty[aDJ]) {
      tw[e8] = tw[tw.length - 1];
    } else {
      this.ty[aDJ]--;
      if (aDJ === 2) {
        tw.splice(this.ty[aDJ] + 1, 0, tw[tw.length - 1]);
        tw.splice(e8, 1);
      } else {
        tw[e8] = tw[this.ty[aDJ]];
        tw[this.ty[aDJ]] = tw[tw.length - 1];
      }
    }
    tw.pop();
    bn.y.aDA += t.sq === 29 && bn.y.rf[0] === aDJ && bn.y.rf[2] === 1;
  };
  this.aDM = function (e8, re) {
    bn.y.aDA += t.sq === 29 && bn.y.rf[0] === re && bn.y.rf[2] === 1;
    var tw = this.tx[re];
    var qT = tw[e8];
    if (re === 2) {
      if (e8 >= this.ty[re]) {
        bn.aCq.join(qT);
        var aDN = this.ty[re];
        var elo = qT.elo;
        while (aDN && elo > tw[aDN - 1].elo) {
          aDN--;
        }
        tw[e8] = tw[this.ty[re]];
        tw.splice(this.ty[re]++, 1);
        tw.splice(aDN, 0, qT);
        return;
      }
      tw.splice(this.ty[re]--, 0, qT);
      tw.splice(e8, 1);
      return;
    }
    if (e8 >= this.ty[re]) {
      bn.aCq.join(qT);
      aDO(tw, this.ty[re]++, e8);
      return;
    }
    aDO(tw, --this.ty[re], e8);
  };
  function aDO(g, tA, tB) {
    var aDP = g[tA];
    g[tA] = g[tB];
    g[tB] = aDP;
  }
  this.aDQ = function (so) {
    var tx = this.tx;
    var en = tx.length;
    for (var aB = 0; aB < en; aB++) {
      var tw = tx[aB];
      var l5 = tw.length;
      for (var f6 = 0; f6 < l5; f6++) {
        if (so === tw[f6].so) {
          return tw[f6];
        }
      }
    }
    return null;
  };
}
function aD1() {
  var aDR = [];
  var aDS = [];
  var aDT = 0;
  this.dd = function () {
    var qI = aDU(aDS, " is", " are", " in the lobby!");
    if (qI.length) {
      bn.message.aDV({
        id: 7,
        r: qI
      });
    }
    aDR = [];
    aDS = [];
    aDT = 0;
  };
  this.aD9 = function (aDW) {
    if (bn.aCn === aDW) {
      return false;
    }
    var so = bF.st.zQ(aDW, 5);
    if (bj.v9.u5(so)) {
      aDS.push(so);
      return true;
    }
    return false;
  };
  this.join = function (player) {
    if (bn.aCn === player.so) {
      return;
    }
    var so = bF.st.zQ(player.so, 5);
    if (bj.v9.u5(so)) {
      aDR.push(so);
    }
  };
  this.aDX = function () {
    if (++aDT < 3) {
      return;
    }
    aDT = 0;
    var a6s = aDU(aDS, "", "", " entered the lobby!");
    var aDY = aDU(aDR, "", "", " joined a game!");
    if (aDY.length) {
      if (a6s.length) {
        a6s = a6s + " " + aDY;
      } else {
        a6s = aDY;
      }
    }
    if (a6s.length) {
      bn.message.aDV({
        id: 7,
        r: a6s
      });
    }
    aDR = [];
    aDS = [];
  };
  function aDU(g, a6s, aDY, aDZ) {
    var en = g.length;
    if (en === 0) {
      return "";
    }
    var qI = "@" + g[0];
    if (en === 1) {
      return qI + a6s + aDZ;
    }
    for (var aB = 1; aB < en - 1; aB++) {
      qI += ", @" + g[aB];
    }
    return qI + " and @" + g[en - 1] + aDY + aDZ;
  }
}
function aCs() {
  this.dm = function (e8) {
    var ty = bn.tw.ty[e8];
    if (ty < 2) {
      return false;
    }
    var rg = bn.y.rh[e8];
    var aDa = rg.aDb === 9 ? 333 : 512;
    ty = Math.min(ty, aDa);
    if (rg.aDb === 8) {
      ty -= ty % 2;
    }
    var tw = bn.tw.tx[e8];
    var aDc = tw.splice(0, ty);
    bn.tw.ty[e8] -= ty;
    var aDd = aDe(aDc);
    if (aDd === -1) {
      bn.tw.aD2 = bn.tw.aD2.concat(aDc);
      if (bn.tw.aD2.length > 1000) {
        bn.tw.aD2.splice(0, bn.tw.aD2.length - 1000);
      }
      bn.y.aDA += t.sq === 29 && bn.y.rf[0] === e8 && bn.y.rf[2] === 1;
      return false;
    }
    if (rg.aDb === 8) {
      rg.aDf = (rg.aDf + (aDd >> 1)) % 1024;
      var gM = aDd - aDd % 2;
      aDd = aDd % 2;
      aDc = aDc.slice(gM, gM + 2);
    }
    ax.dd(rg, aDc, aDd);
    return true;
  };
  this.aDg = function (rg, aDc, aDd) {
    var eq = aD.data = new a4a();
    eq.spawningSeed = rg.spawningSeed;
    if (rg.aDb < 7) {
      eq.gameMode = 1;
      eq.numberTeams = rg.aDb + 2;
    } else if (rg.aDb === 9) {
      eq.gameMode = eq.isZombieMode = 1;
      eq.numberTeams = 2;
    } else {
      eq.gameMode = 0;
      eq.battleRoyaleMode = rg.aDb === 7 ? 0 : rg.aDb === 10 ? 1 : 2;
    }
    eq.selectedPlayer = aDd;
    eq.isContest = rg.aDh;
    eq.mapType = bS.aDi(rg.eT) ? 0 : 1;
    bS.aDj(eq, rg.eT);
    eq.mapSeed = rg.mapSeed;
    var aDk = eq.humanCount = aDc.length;
    eq.selectableSpawn = eq.gameMode === 1 || aDk < 100;
    eq.colorsData = new Uint32Array(aDk);
    eq.playerNamesData = new Array(aDk);
    for (var aB = 0; aB < aDk; aB++) {
      eq.colorsData[aB] = aDc[aB].color;
      eq.playerNamesData[aB] = aDc[aB].username;
    }
    if (eq.battleRoyaleMode === 2) {
      eq.elo = new Uint16Array(aDk);
      for (aB = 0; aB < aDk; aB++) {
        eq.elo[aB] = aDc[aB].elo;
      }
    }
    aa.setState(8);
    bS.a7(rg.eT, eq.mapSeed);
    aD.a4f();
    aD.a4d = 2;
  };
  function aDe(aDc) {
    if (!bn.aCo) {
      return -1;
    }
    var en = aDc.length;
    var so = bn.aCo.so;
    for (var aB = 0; aB < en; aB++) {
      if (aDc[aB].so === so) {
        return aB;
      }
    }
    return -1;
  }
}
function aCu() {
  var dz = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"];
  var aDl = [bB.nx, bB.nx, bB.ny, bB.oR, bB.oS, bB.oE, bB.oX, bB.ny, bB.os, bB.oh, bB.ou];
  var aDm = [[1], [1], [1.2], [1.4, 1.2], [1.7, 1.4, 1.2], [1.4, 1.2], [1.4, 1.2], [1.2], [1.4, 1.2], [1.4, 1.2], [1.4, 1.2]];
  var aDn = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!", "User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"];
  this.rn = function (aDo) {
    var aDp;
    if (aDo.id < 5) {
      aDp = "@" + bF.st.zQ(aDo.so, 5);
    }
    if (aDo.id === 0) {
      return aDp + ": " + aDo.r;
    }
    if (aDo.id === 1) {
      var a0r = "@" + bF.st.zQ(aDo.target, 5);
      if (aDo.aDq === 0) {
        if (aDo.value >= 32768) {
          return aDp + " voted with " + (aDo.value - 32768 + 1) + " gold against " + a0r + " to weaken the latter's admin position. 📉";
        }
        return aDp + " voted with " + (aDo.value + 1) + " gold for " + a0r + " to strengthen the latter's admin position. 💪";
      } else if (aDo.aDq === 1) {
        return aDp + " sent " + Math.floor(aDo.value / 100) + " 🧈 gold to " + a0r + ".";
      }
      return aDp + " voted with " + (aDo.value / 10).toFixed(1) + " points for " + a0r + " to acknowledge the latter as clan leader. ✅";
    }
    if (aDo.id === 2) {
      if (aDo.aDq === 0) {
        return aDp + " was 🔇 muted for 1 Hour.";
      }
      if (aDo.aDq === 1) {
        return "The username of " + aDp + " was ✂️ redacted. Duration: 1 Day";
      }
      return aDp + " 👢 was kicked.";
    }
    if (aDo.id === 3) {
      return aDp + bo.eB(aDo.aDq, bo.e5[aDo.aDq][aDo.value]) + "@" + bF.st.zQ(aDo.target, 5) + bo.eD(aDo.aDq, bo.e5[aDo.aDq][aDo.value]);
    }
    if (aDo.id === 4) {
      return aDp + bo.eB(5, bo.e5[5][aDo.aDq]) + "@" + bF.st.zQ(aDo.target, 5) + bo.eD(5, bo.e5[5][aDo.aDq]);
    }
    if (aDo.id === 5) {
      return aDn[aDo.aDq];
    }
    if (aDo.id === 6) {
      return "You are about to mention " + aDo.value + " player" + (aDo.value === 1 ? "" : "s") + ". This action will cost " + (Math.max(aDo.value * 10, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)";
    }
    if (aDo.id === 7) {
      return aDo.r;
    }
  };
  this.rm = function (aDo, a71) {
    return {
      aDo: aDo,
      r: a71,
      aDr: 0,
      fontSize: 1,
      rq: 0,
      aDs: aDo.id ? bB.oQ : bB.nj
    };
  };
  this.u1 = function (player, re) {
    return (re === 2 ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username;
  };
  this.u2 = function (u3) {
    return aDl[u3];
  };
  this.aDt = function (u3, a3r) {
    if (u3 < 3 || u3 === 7) {
      return aDm[u3][0];
    }
    if (u3 === 4) {
      return aDm[u3][a3r < 1 ? 0 : a3r < 10 ? 1 : 2];
    }
    return aDm[u3][a3r < 10 ? 0 : 1];
  };
  this.aDu = function (a3r) {
    return a3r === 0;
  };
  this.aDQ = function (re, so) {
    var tx = bn.tw.tx;
    var tw = tx[re];
    var en = tw.length;
    for (var aB = 0; aB < en; aB++) {
      if (so === tw[aB].so) {
        return tw[aB];
      }
    }
    for (var f7 = 0; f7 < tx.length; f7++) {
      if (re === f7) {
        continue;
      }
      tw = tx[f7];
      en = tw.length;
      for (aB = 0; aB < en; aB++) {
        if (so === tw[aB].so) {
          return tw[aB];
        }
      }
    }
    return null;
  };
  this.u4 = function (qT) {
    if (!bn.aCo) {
      return false;
    }
    return qT.so === bn.aCo.so;
  };
  this.aDv = function (tw, aDw, aDx) {
    var a0o = [];
    loop: for (var aB = aDw; aB < aDx; aB++) {
      var a0p = bA.ra.a0q(tw[aB].username);
      if (!a0p) {
        continue;
      }
      for (var f7 = a0o.length - 1; f7 >= 0; f7--) {
        if (a0p === a0o[f7].name) {
          a0o[f7].gG++;
          continue loop;
        }
      }
      a0o.push({
        name: a0p,
        gG: 1
      });
    }
    a0o.sort(function (f6, f7) {
      return f7.gG - f6.gG;
    });
    if (a0o.length === 0) {
      return "";
    }
    var qI = a0o[0].name + ": " + a0o[0].gG;
    for (aB = 1; aB < a0o.length; aB++) {
      qI += "   " + a0o[aB].name + ": " + a0o[aB].gG;
    }
    return qI;
  };
  this.aDy = function (u3, a3r, aD5) {
    if (dz[u3].length === 0) {
      return "Rank: " + (a3r + 1);
    }
    return dz[u3] + " Rank: " + (a3r + 1) + (u3 !== 3 && aD5 < 100 ? "   " + (dz[3] + " Rank: " + (aD5 + 1)) : "");
  };
  this.aDz = function (so) {
    var rh = bn.y.rh;
    for (var aB = 0; aB < rh.length; aB++) {
      aE0(rh[aB].ri, so);
    }
    aE0(bn.message.aE1(), so, 1);
    bn.rr.aDz(so);
  };
  function aE0(ri, so, aE2) {
    for (var f7 = ri.length - 1; f7 >= 0; f7--) {
      var qT = ri[f7];
      if (qT.id === 0 && qT.so === so) {
        qT.r = "[Redacted Message]";
        if (aE2) {
          qT.aE3 = 1;
        }
      }
    }
  }
}
function aCx() {
  var sJ = 0;
  var aE4 = 0;
  var aE5 = 0;
  var aE6 = null;
  var aE7 = null;
  this.aE8 = function () {
    if (!sJ) {
      return;
    }
    if (aE4 === aE9(aE7) && aE5 === aE7.vw) {
      return;
    }
    aE5 = aE7.vw;
    aE6.show(-1, -1, aEA(aE7, 0, 1), 1, 1);
  };
  this.u6 = function (e, qT, aEB) {
    var a8c = e.target.getBoundingClientRect();
    this.show(a8c.left, a8c.top, qT, 0, aEB);
    e.target.addEventListener("mouseleave", function remove() {
      e.target.removeEventListener("mouseleave", remove);
      if (bn.tu) {
        bn.tu.rs(1);
      }
    });
  };
  function aEA(qT, aEB, aEC) {
    var qI = qT.username;
    qI += "   " + bn.kz.aDy(qT.u3, qT.a3r, qT.aD5);
    qI += aED(qT);
    qI += "   IP: " + bF.st.zQ(qT.aD6, 2);
    qI += "   " + ["🟥 Offline", "🟩 Online"][aEC ? aE4 : aE9(qT, aEB)];
    return qI;
  }
  function aE9(qT, aEB) {
    if (aEB || bn.tw.aDQ(qT.so)) {
      return aE4 = 1;
    }
    return aE4 = 0;
  }
  function aED(qT) {
    var tE = qT.vw;
    if (tE < 1000) {
      return "   Gold: " + tE;
    }
    tE = tE % 1024;
    if (tE < 1000) {
      return "   Gold: " + tE + "k";
    }
    return "   Gold: " + (tE - 999) + "M";
  }
  this.show = function (eu, ew, qT, sN, aEB) {
    if (!aE6) {
      aE6 = new sH();
    }
    aE7 = qT;
    aE5 = aE7.vw;
    aE6.show(eu, ew, aEA(qT, aEB), sN);
    sJ = 1;
  };
  this.rs = function (sT) {
    if (aE6 && aE6.rs(sT)) {
      sJ = 0;
      aE7 = null;
    }
  };
}
function aCv() {
  this.rh = new Array(4);
  this.rf = [0, 0, 1, 0];
  this.aDA = 0;
  this.aEE = [0, 0];
  this.dd = function () {
    for (var aB = 0; aB < this.rh.length; aB++) {
      this.rh[aB] = new aEF();
    }
    this.rf[0] = bj.eK.data[158].value;
  };
  this.aEG = function () {
    aEH(true);
    bn.aCq.dd();
  };
  this.aDX = function () {
    bn.aCq.aDX();
    aEI();
    aEH(false);
  };
  function aEH(aEJ) {
    if (bn.y.aDA && bn.y.rf[2] === 1) {
      t.a5B(29).aEK();
    }
    bn.y.aDA = 0;
    t.a5B(29).aEL();
    if (bn.y.rh[bn.y.rf[0]].th === 0 || aEJ) {
      t.a5B(29).aEM();
    }
    bn.tu.aE8();
  }
  function aEI() {
    for (var aB = 0; aB < bn.y.rh.length; aB++) {
      var rg = bn.y.rh[aB];
      if (rg.th === 0) {
        rg.aEN = 0;
        continue;
      }
      rg.aEO = Math.max(rg.aEO - rg.aEN % 2, 0);
      rg.aEN++;
    }
  }
  this.aEP = function (re) {
    if (this.rf[0] !== re) {
      return;
    }
    if (this.rf[2]) {
      return;
    }
    t.a5B(29).aEQ();
  };
}
function aCz() {
  var aER = 0;
  var aES = "";
  var aET = 0;
  var aEU = 0;
  var aEV = 0;
  this.a0D = function (r) {
    if (aER) {
      aER = 0;
      var aEW = r.toLowerCase();
      if (aEW === "yes" || aEW === "y") {
        aEX(aES);
        return;
      }
      aEY();
      return;
    }
    if (r.indexOf("@") < 0) {
      aEX(r);
      return;
    }
    var aEZ = aEa(r);
    if (!aEZ) {
      aEX(r);
      return;
    }
    aES = r;
    var g = aEb(aEZ);
    var aEc = aEd(aEZ);
    if (aEe(aEZ, aEc, r)) {
      return;
    }
    if (aEc.length === 0) {
      if (aEU || aEf(aEZ)) {
        aEg(g.length);
      } else {
        aEX(r);
      }
      return;
    }
    if (aEZ.length === aEV) {
      aEX(r);
      return;
    }
    aEh(g, aEc);
    aEg(g.length);
  };
  function aEX(a71) {
    b0.aEi.aEj(3, a71);
  }
  function aEY() {
    bn.message.aDV({
      id: 5,
      aDq: 7
    });
  }
  function aEg(gG) {
    aER = 1;
    bn.message.aDV({
      id: 6,
      value: gG
    });
  }
  function aEf(aEZ) {
    var en = aEZ.length;
    for (var aB = 0; aB < en; aB++) {
      var i = aEZ[aB];
      if (i === "@all" || i === "@everyone") {
        return 1;
      }
    }
    return 0;
  }
  function aEb(aEZ) {
    var en = aEZ.length;
    var aEk = [0, 0, 0, 0];
    for (var aB = 0; aB < en; aB++) {
      var i = aEZ[aB];
      for (var f6 = 0; f6 < 4; f6++) {
        if (i === "@room" + (f6 + 1)) {
          aEk[f6] = 1;
        }
      }
    }
    aEU = bA.qj.a2b(aEk);
    if (aEU % 4 === 0) {
      return bA.qj.a2t(bn.tw.tx);
    }
    for (f6 = 0; f6 < 4; f6++) {
      if (aEk[f6]) {
        aEk[f6] = bn.tw.tx[f6];
      } else {
        aEk[f6] = [];
      }
    }
    return bA.qj.a2t(aEk);
  }
  function aEd(aEZ) {
    var aEc = [];
    aET = 0;
    aEV = 0;
    var en = aEZ.length;
    for (var aB = 0; aB < en; aB++) {
      var i = aEZ[aB];
      var l5 = i.length;
      if (bA.ra.startsWith(i, "@[")) {
        if (l5 <= 9 && bA.ra.a3R(i, "]")) {
          aEc.push({
            id: 0,
            fF: i.substring(2, l5 - 1).toUpperCase()
          });
        }
        continue;
      }
      if (l5 === 6) {
        if (bA.ra.startsWith(i, "@room")) {
          continue;
        }
        aEV++;
        aEc.push({
          id: 1,
          fF: bG.st.wO(i.substring(1))
        });
        continue;
      }
      if (l5 > 1 && l5 < 5) {
        var aEl = b7.data.aCR(i.substring(1));
        if (aEl >= 0) {
          aEc.push({
            id: 2,
            fF: aEl,
            e8: aB
          });
          aET = 1;
        }
      }
    }
    return aEc;
  }
  function aEe(aEZ, aEc, r) {
    if (!aET) {
      return 0;
    }
    var en = aEc.length;
    for (var aB = 0; aB < en; aB++) {
      if (aEc[aB].id === 2) {
        r = r.replace(aEZ[aEc[aB].e8], "@" + aEc[aB].fF);
      }
    }
    aES = r;
    aER = 1;
    aEX(r.slice(0, 126) + "|");
    return 1;
  }
  function aEh(g, aEc) {
    var l5 = aEc.length;
    if (l5 === 0) {
      return g;
    }
    var en = g.length;
    loop: for (var aB = en - 1; aB >= 0; aB--) {
      for (var f6 = 0; f6 < l5; f6++) {
        if (aEc[f6].id === 0) {
          if (aEc[f6].fF === bA.ra.a0q(g[aB].username)) {
            continue loop;
          }
          continue;
        }
        if (aEc[f6].id === 1) {
          if (aEc[f6].fF === g[aB].so) {
            continue loop;
          }
          continue;
        }
      }
      g[aB] = g[--en];
      g.pop();
    }
  }
  function aEa(r) {
    var aEm = new RegExp("\\B@[-\\w\\[\\]]+", "g");
    return r.match(aEm);
  }
  this.aEn = function (r) {
    var aEZ = aEa(r);
    if (!aEZ) {
      return r;
    }
    var a5 = new RegExp("^[0-9]+$");
    var en = aEZ.length;
    for (var aB = 0; aB < en; aB++) {
      var i = aEZ[aB].substring(1);
      var l5 = i.length;
      if (l5 >= 1 && l5 <= 3 && a5.test(i)) {
        var aEl = parseInt(i, 10);
        if (!isNaN(aEl) && aEl >= 0 && aEl < b7.data.g.length) {
          r = r.replace("@" + i, "@" + b7.data.g[aEl]);
        }
      }
    }
    return r;
  };
}
function aCy() {
  var aEo;
  var aEp = [];
  var aEq = -1;
  var aEr = 0;
  var aEs = 0;
  this.aDV = function (aDo) {
    if (aDo.id === 2 && aDo.aDq === 3) {
      bn.kz.aDz(aDo.so);
      return;
    }
    var qT = bn.kz.rm(aDo, bn.kz.rn(aDo));
    if (aDo.id === 5 || aDo.id === 6) {
      t.a5B(29).aEt().rp(qT);
      if (aDo.id !== 5) {
        return;
      }
    }
    var aEu = bf.eM < aEr + 20000;
    if (aEq === aEp.length - 1 || !aEu) {
      aEq = aEp.length;
    }
    aEp.push(aDo);
    if (!bj.eK.data[14].value && aDo.id !== 7) {
      bp.play();
    }
    if (!aEo) {
      return;
    }
    if (aEs && (bj.eK.data[13].value || aEu)) {
      aEo.s4(aEp.length);
    } else {
      aEv();
    }
  };
  this.show = function () {
    aEw();
  };
  function aEx() {
    aEr = bf.eM;
    if (this.uA === 3) {
      aEw();
    } else {
      aEq = (aEp.length + aEq + this.uA * 2 - 1) % aEp.length;
      aEv();
    }
  }
  function aEv() {
    if (aEp.length === 0) {
      return;
    }
    aEs = 0;
    if (aEo) {
      aEo.uD();
    }
    aEo = new u7(aEx);
    aEo.s4(aEq, aEp.length);
    aEo.show(aEp[aEq]);
    bn.message.resize();
  }
  function aEw() {
    aEs = 1;
    if (aEo) {
      aEo.uD();
    }
    aEo = new uE(aEv);
    aEo.s4(aEp.length);
    aEo.show();
    bn.message.resize();
  }
  this.rs = function () {
    aEq = aEp.length - 1;
    if (aEo) {
      aEo.uD();
    }
    aEo = null;
  };
  this.resize = function () {
    if (aEo) {
      aEo.resize();
    }
  };
  this.aE1 = function () {
    return aEp;
  };
}
function aCw() {
  var aEy = null;
  var aEz = null;
  var aF0 = 0;
  var aF1 = 0;
  var aF2 = null;
  this.aF3 = function (e, qT) {
    aF0 = 1;
    aEz = qT;
    aEy = new uF([new w(L(127), aF4, qT.u3 === 0 ? 1 : 0), new w(L(128), aF5, aF6()), new w(L(129, 0, "🚩 Report"), aF7, aF8()), new w(L(130), aF9, 0)]);
    aF2 = {
      clientX: e.clientX,
      clientY: e.clientY
    };
    aFA(aF2.clientX, aF2.clientY, 1);
  };
  this.a2B = function (code) {
    if (t.sq !== 29) {
      return false;
    }
    if (!aEz) {
      return false;
    }
    if (code.length < 1) {
      return true;
    }
    if (code === "Escape") {
      this.rs();
      return true;
    }
    if (!bA.ra.startsWith(code, "Numpad") && !bA.ra.startsWith(code, "Digit")) {
      return true;
    }
    var fF = parseInt(code[code.length - 1], 10);
    if (isNaN(fF)) {
      return true;
    }
    if (aF0 === 0) {
      this.aF3(aF2, aEz);
      return true;
    }
    if (!aEy) {
      return false;
    }
    if (aF0 === 1) {
      if (fF <= 1) {
        aF4();
      } else if (fF === 2) {
        aF5();
      } else if (fF === 3) {
        aF7();
      } else {
        aF9();
        this.rs();
      }
      return true;
    }
    if (aF0 === 2) {
      if (aF1 === 1) {
        if (fF <= 1) {
          aFB(0, 0);
          this.rs();
          return true;
        } else if (fF === 2) {
          aFC();
        } else {
          aFD();
        }
        return true;
      }
      aFB(5, bL.hv(fF - 1, 0, 3));
      this.rs();
      return true;
    }
    aFB(aF1, bL.hv(fF - 1, 0, bo.e5[aF1].length - 1));
    this.rs();
    return true;
  };
  function aF4() {
    if (aEz.u3 === 0) {
      return;
    }
    bn.uJ.rs();
    t.u(8, 29, new sr(25, {
      ss: 0,
      so: bF.st.zQ(aEz.so, 5),
      sp: 0
    }, 29));
  }
  function aF5() {
    var eu = aEy.eu;
    var ew = aEy.ew;
    bn.uJ.rs();
    aEy = new uF([new w("Kick User", function () {
      aFB(0, 0);
    }, aFE(0, 0)), new w("Block Chat", aFC, aFE(1, 0)), new w("Censor Username", aFD, aFE(2, 0))]);
    aFA(eu, ew);
    aF0 = 2;
    aF1 = 1;
  }
  function aFE(id, e8) {
    if (!bn.aCo) {
      return 1;
    }
    if (bn.kz.u4(aEz)) {
      return 1;
    }
    var e7 = aEz.a3r;
    var aD5 = bn.aCo.aD5;
    if (aD5 >= e7) {
      return 1;
    }
    if (1 - bo.e6(id, aD5, e8)) {
      return 1;
    }
    if (aEz.u3 === 4) {
      if (e7 >= 50) {
        return +(aD5 >= e7);
      }
      if (e7 >= 20) {
        return +(aD5 >= e7 / 2);
      }
      return +(aD5 >= e7 / 3);
    }
    return 0;
  }
  function aF8() {
    if (!bn.aCo) {
      return 1;
    }
    if (bn.kz.u4(aEz)) {
      return 1;
    }
    return 0;
  }
  function aF6() {
    if (!bn.aCo) {
      return 1;
    }
    if (bn.kz.u4(aEz)) {
      return 1;
    }
    if (bn.aCo.aD5 >= 100) {
      return 1;
    }
    if (bn.aCo.aD5 >= aEz.a3r) {
      return 1;
    }
    return 0;
  }
  function aF7() {
    var eu = aEy.eu;
    var ew = aEy.ew;
    bn.uJ.rs();
    var aFF = aF8();
    aEy = new uF([new w(bo.e5[5][0], function () {
      aFB(5, 0);
    }, aFF), new w(bo.e5[5][1], function () {
      aFB(5, 1);
    }, aFF), new w(bo.e5[5][2], function () {
      aFB(5, 2);
    }, aFF), new w(bo.e5[5][3], function () {
      aFB(5, 3);
    }, aFF)]);
    aFA(eu, ew);
    aF0 = 2;
    aF1 = 2;
  }
  function aF9() {
    if (t.sq === 29) {
      t.a5A().aCp(bF.st.zQ(aEz.so, 5));
    }
  }
  function aFB(id, value) {
    b0.aEi.aEj(5, {
      id: id,
      value: value,
      so: aEz.so
    });
  }
  function aFC() {
    var eu = aEy.eu;
    var ew = aEy.ew;
    bn.uJ.rs();
    aEy = new uF([new w(bo.e5[1][0], function () {
      aFB(1, 0);
    }, aFE(1, 0)), new w(bo.e5[1][1], function () {
      aFB(1, 1);
    }, aFE(1, 1)), new w(bo.e5[1][2], function () {
      aFB(1, 2);
    }, aFE(1, 2)), new w(bo.e5[1][3], function () {
      aFB(1, 3);
    }, aFE(1, 3)), new w(bo.e5[1][4], function () {
      aFB(1, 4);
    }, aFE(1, 4))]);
    aFA(eu, ew);
    aF0 = 3;
    aF1 = 1;
  }
  function aFD() {
    var eu = aEy.eu;
    var ew = aEy.ew;
    bn.uJ.rs();
    aEy = new uF([new w(bo.e5[2][0], function () {
      aFB(2, 0);
    }, aFE(2, 0)), new w(bo.e5[2][1], function () {
      aFB(2, 1);
    }, aFE(2, 1)), new w(bo.e5[2][2], function () {
      aFB(2, 2);
    }, aFE(2, 2))]);
    aFA(eu, ew);
    aF0 = 3;
    aF1 = 2;
  }
  function aFG() {
    var eu = aEy.eu;
    var ew = aEy.ew;
    bn.uJ.rs();
    aEy = new uF([new w(bo.e5[3][0], function () {
      aFB(3, 0);
    }, aFE(3, 0)), new w(bo.e5[3][1], function () {
      aFB(3, 1);
    }, aFE(3, 1)), new w(bo.e5[3][2], function () {
      aFB(3, 2);
    }, aFE(3, 2))]);
    aFA(eu, ew);
    aF0 = 3;
    aF1 = 3;
  }
  function aFH() {
    var eu = aEy.eu;
    var ew = aEy.ew;
    bn.uJ.rs();
    aEy = new uF([new w(bo.e5[4][0], function () {
      aFB(4, 0);
    }, aFE(4, 0)), new w(bo.e5[4][1], function () {
      aFB(4, 1);
    }, aFE(4, 1)), new w(bo.e5[4][2], function () {
      aFB(4, 2);
    }, aFE(4, 2)), new w(bo.e5[4][3], function () {
      aFB(4, 3);
    }, aFE(4, 3)), new w(bo.e5[4][4], function () {
      aFB(4, 4);
    }, aFE(4, 4))]);
    aFA(eu, ew);
    aF0 = 3;
    aF1 = 4;
  }
  function aFA(eu, ew, uL) {
    aEy.show(eu, ew, uL);
    bn.tu.show(aEy.eu, aEy.ew, aEz, 1);
  }
  this.rs = function () {
    aF0 = 0;
    if (aEy) {
      aEy.rs();
    }
    aEy = null;
    bn.tu.rs();
  };
}
function aEF() {
  this.th = 0;
  this.eT = 0;
  this.mapSeed = 0;
  this.aDb = 0;
  this.aFI = 0;
  this.aFJ = 0;
  this.aDh = 0;
  this.aEO = 0;
  this.spawningSeed = 0;
  this.a1P = 0;
  this.aDf = 0;
  this.ri = [];
  this.rj = 1048575;
  this.aEN = 0;
  this.aFK = [{
    eT: 0,
    mapSeed: 0,
    aDb: 0,
    eM: 100,
    aDh: 0
  }, {
    eT: 1,
    mapSeed: 0,
    aDb: 1,
    eM: 200,
    aDh: 0
  }, {
    eT: 2,
    mapSeed: 0,
    aDb: 2,
    eM: 300,
    aDh: 0
  }, {
    eT: 3,
    mapSeed: 0,
    aDb: 3,
    eM: 400,
    aDh: 0
  }, {
    eT: 0,
    mapSeed: 0,
    aDb: 9,
    eM: 500,
    aDh: 0
  }, {
    eT: 1,
    mapSeed: 0,
    aDb: 10,
    eM: 600,
    aDh: 0
  }, {
    eT: 2,
    mapSeed: 0,
    aDb: 8,
    eM: 700,
    aDh: 0
  }, {
    eT: 3,
    mapSeed: 0,
    aDb: 3,
    eM: 800,
    aDh: 0
  }];
}
function aD0() {
  var aFL = [];
  var t3 = [];
  var aFM = [];
  this.uD = function () {
    for (var aB = 0; aB < t3.length; aB++) {
      t3[aB].onclick = t3[aB].onmouseover = null;
    }
    t3 = null;
    aFM = null;
  };
  this.transform = function (qT) {
    var qG = document.createElement("div");
    var aFN = aFO(qT);
    for (var aB = 0; aB < aFN.length; aB++) {
      qG.appendChild(aFN[aB]);
    }
    if (qT.aDo.id === 0) {
      qG.vx143 = qT.aDo;
      aFM.push(qG);
    }
    qG.style.margin = "0.6em 0.6em";
    if (qT.rq) {
      qG.style.marginLeft = qG.style.marginRight = "inherit";
    }
    qG.style.font = "inherit";
    var aFP = qT.aDo.id > 0;
    if (qT.aDr) {
      qG.style.fontWeight = "bold";
    }
    if (aFP) {
      qG.style.paddingLeft = "0.7em";
    }
    if (aFP) {
      qG.style.fontStyle = "italic";
    }
    qG.style.fontSize = qT.fontSize.toFixed(2) + "em";
    return qG;
  };
  function aFO(qT) {
    var r = qT.r;
    var aFN = [];
    while (true) {
      var f8 = aFQ(r, 0);
      if (f8 === -1) {
        aFN.push(aFR(r, qT));
        break;
      }
      if (f8 === 0) {
        aFN.push(aFS(r.substring(1, 6), qT, f8));
      } else {
        aFN.push(aFR(r.substring(0, f8), qT));
        aFN.push(aFS(r.substring(f8 + 1, f8 + 6), qT, f8));
      }
      r = r.substring(f8 + 6);
    }
    return aFN;
  }
  function aFS(qI, qT, f8) {
    var aD7 = aFT(qI);
    if (f8 === 0 && qT.aDo.id === 0 && qT.rq) {
      qT.fontSize = bn.kz.aDt(aD7.u3, aD7.a3r);
      qT.aDr = bn.kz.aDu(aD7.a3r);
    }
    var rZ = document.createElement("span");
    rZ.textContent = aFU(aD7, qT, f8);
    rZ.style.display = "inline-block";
    rZ.style.color = bn.kz.u2(aD7.u3);
    rZ.style.cursor = "pointer";
    rZ.style.margin = "0";
    rZ.style.font = "inherit";
    rZ.style.minWidth = rZ.style.minHeight = "1em";
    if (bn.kz.u4(aD7)) {
      rZ.style.textDecoration = "underline";
    }
    if (aD7.u5) {
      rZ.style.textDecorationLine = "underline";
      rZ.style.textDecorationStyle = "dotted";
    }
    if (bn.kz.aDu(aD7.a3r)) {
      rZ.style.fontWeight = "bold";
    }
    rZ.onclick = function (e) {
      bn.uJ.aF3(e, aD7);
    };
    if (!bJ.r3()) {
      rZ.onmouseover = function (e) {
        bn.tu.u6(e, aD7);
      };
    }
    t3.push(rZ);
    return rZ;
  }
  function aFU(aD7, qT, f8) {
    if (aD7.aDH) {
      aD7.aDH--;
      var aFV = qT.aDo.id === 2 || (qT.aDo.id === 3 || qT.aDo.id === 4) && f8 !== 0;
      return aD7.username + (aFV ? " (" + aD7.aDG + ")" : "");
    }
    if (qT.aDo.aE3) {
      return "Redacted " + bF.st.zQ(aD7.so, 2);
    }
    return aD7.username;
  }
  function aFR(r, qT) {
    var rZ = document.createElement("span");
    rZ.textContent = r;
    rZ.style.color = qT.aDs;
    rZ.style.margin = "0";
    rZ.style.font = "inherit";
    return rZ;
  }
  function aFT(qI) {
    var so = bG.st.wO(qI);
    var aD7 = bn.tw.aDQ(so);
    if (aD7) {
      aFL.push(aD7);
      while (aFL.length > 75) {
        aFL.shift();
      }
      return aD7;
    }
    var aD2 = bn.tw.aD2;
    for (var aB = aD2.length - 1; aB >= 0; aB--) {
      aD7 = aD2[aB];
      if (so === aD7.so) {
        aFL.push(aD7);
        return aD7;
      }
    }
    for (aB = aFL.length - 1; aB >= 0; aB--) {
      aD7 = aFL[aB];
      if (so === aD7.so) {
        aFL.push(aD7);
        return aD7;
      }
    }
    return bn.tw.aD8(so, qI, 1, 999999, 999999, 0, 0, 0, 0);
  }
  function aFQ(r, position) {
    var aB = r.indexOf("@", position);
    if (aB < 0) {
      return -1;
    }
    var qI = r.substring(aB + 1, aB + 6);
    if (qI.length !== 5) {
      return aFQ(r, aB + 1);
    }
    if (bA.ra.startsWith(qI, "room")) {
      return aFQ(r, aB + 1);
    }
    var aFW = new RegExp("^[a-zA-Z0-9_-]+$");
    if (!aFW.test(qI)) {
      return aFQ(r, aB + 1);
    }
    var aFX = r.substring(aB + 6, aB + 7);
    if (aFX.length !== 1) {
      return aB;
    }
    var aFY = new RegExp("^[ :!.]+$");
    if (!aFY.test(aFX)) {
      return aFQ(r, aB + 1);
    }
    return aB;
  }
  this.aFZ = function (aFa) {
    if (!aFa) {
      return;
    }
    if ((aFa.id !== 2 || aFa.aDq !== 1) && (aFa.id !== 3 || aFa.aDq !== 2)) {
      return;
    }
    var so = aFa.id === 3 ? aFa.target : aFa.so;
    if (bn.tw.aDQ(so)) {
      return;
    }
    var aDF = "Redacted " + bF.st.zQ(so, 2);
    var aD2 = bn.tw.aD2;
    for (var aB = aD2.length - 1; aB >= 0; aB--) {
      aFb(aD2[aB], aDF, so);
    }
    for (aB = aFL.length - 1; aB >= 0; aB--) {
      aFb(aFL[aB], aDF, so);
    }
  };
  function aFb(aD7, aDF, so) {
    if (so === aD7.so && !aD7.aDG) {
      aD7.aDG = aD7.username;
      aD7.aDH = 3;
      aD7.username = aDF;
    }
  }
  this.aDz = function (so) {
    var aFc = aFM;
    for (var aB = aFc.length - 1; aB >= 0; aB--) {
      var eq = aFc[aB];
      if (eq.vx143.so === so) {
        while (eq.firstChild) {
          t.removeChild(eq, eq.firstChild);
        }
        eq.vx143.r = "[Redacted Message]";
        var aFN = aFO(bn.kz.rm(eq.vx143, bn.kz.rn(eq.vx143)));
        for (var f6 = 0; f6 < aFN.length; f6++) {
          eq.appendChild(aFN[f6]);
        }
        aFc.splice(aB, 1);
      }
    }
  };
}
function cP() {
  var aFd;
  var aFe;
  var aFf;
  this.i = 0;
  this.j = 0;
  this.ew = 0;
  this.gap = 0;
  this.dd = function () {
    aFd = -1;
    aFe = bB.nj;
    aFf = "rgba(255,255,255,0.16)";
    this.rA = new Array(7);
    this.j = Math.floor((a0.a1.hw() ? 0.123 : 0.093) * h.hx);
    this.i = Math.floor((a0.a1.hw() ? 3.96 : 4.2) * this.j);
    this.gap = Math.floor(this.i * 0.025);
    var aFg = Math.floor(this.j * 0.26);
    var aFh = bA.qb.sQ(1, aFg);
    this.rA[0] = {
      eu: 0,
      ew: 0,
      i: Math.floor(this.i * 0.6 - this.gap / 2),
      j: this.j,
      a71: "Multiplayer",
      font: aFh,
      aFi: "rgba(22,88,22,0.8)",
      fontSize: aFg
    };
    aFg = Math.floor(this.j * 0.18);
    aFh = bA.qb.sQ(1, aFg);
    this.rA[1] = {
      eu: 0,
      ew: 0,
      i: this.i - this.rA[0].i - this.gap,
      j: this.j,
      a71: "Single Player",
      font: aFh,
      aFi: "rgba(22,88,88,0.8)",
      fontSize: aFg
    };
    this.rA[2] = {
      eu: 0,
      ew: 0,
      i: this.i,
      j: Math.floor(this.j * 0.3),
      a71: "",
      font: this.rA[1].font,
      aFi: "rgba(100,0,0,0.8)",
      fontSize: this.rA[1].fontSize
    };
    this.rA[3] = {
      eu: 0,
      ew: 0,
      i: this.i,
      j: this.j,
      a71: "Back",
      font: this.rA[0].font,
      aFi: "rgba(0,0,0,0.8)",
      fontSize: this.rA[0].fontSize
    };
    this.rA[4] = {
      eu: 0,
      ew: 0,
      i: this.i,
      j: Math.floor(this.j * 0.3),
      a71: "The game was updated!",
      font: this.rA[1].font,
      aFi: "rgba(100,0,0,0.8)",
      fontSize: this.rA[1].fontSize
    };
    this.rA[5] = {
      eu: 0,
      ew: 0,
      i: this.rA[0].i,
      j: Math.floor(this.j * 0.8),
      a71: "Reload",
      font: this.rA[0].font,
      aFi: "rgba(0,100,0,0.8)",
      fontSize: this.rA[0].fontSize
    };
    this.rA[6] = {
      eu: 0,
      ew: 0,
      i: this.rA[1].i,
      j: this.rA[5].j,
      a71: "Back",
      font: this.rA[0].font,
      aFi: "rgba(0,0,0,0.8)",
      fontSize: this.rA[0].fontSize
    };
    this.a9b();
  };
  this.a9b = function () {
    this.ew = Math.floor(h.j * 0.54);
    this.rA[0].eu = Math.floor(h.i * 0.5 - this.i * 0.5);
    this.rA[1].eu = this.rA[0].eu + this.rA[0].i + this.gap;
    this.rA[2].eu = this.rA[3].eu = this.rA[0].eu;
    this.rA[4].eu = this.rA[5].eu = this.rA[0].eu;
    this.rA[6].eu = this.rA[1].eu;
    this.rA[0].ew = Math.floor(h.j * 0.54);
    this.rA[1].ew = this.rA[0].ew;
    this.rA[2].ew = Math.floor((h.j - this.rA[2].j - this.rA[3].j - this.gap) / 2);
    this.rA[3].ew = this.rA[2].ew + this.rA[2].j + this.gap;
    this.rA[4].ew = Math.floor((h.j - this.rA[4].j - this.rA[5].j - this.gap) / 2);
    this.rA[5].ew = this.rA[6].ew = this.rA[4].ew + this.rA[4].j + this.gap;
  };
  this.aFj = function () {
    aFk(0);
    aFk(1);
  };
  this.aFl = function () {
    aFk(2);
    aFk(3);
  };
  this.aFm = function () {
    aFk(4);
    aFk(5);
    aFk(6);
  };
  this.a1d = function (eu, ew, mV) {
    var aB = -1;
    if (aa.a1K() === 0) {
      aB = this.a27(eu, ew, 0, 2);
    } else if (aa.a1K() === 3) {
      aB = this.a27(eu, ew, 3, 1);
    } else if (aa.a1K() === 5) {
      aB = this.a27(eu, ew, 5, 2);
    }
    if (aFd !== aB) {
      aFd = aB;
      if (mV) {
        bf.dl = true;
      }
    }
    if (aB !== -1) {
      aT.rc();
      return true;
    }
    return false;
  };
  this.a27 = function (eu, ew, aFn, size) {
    for (var aB = aFn; aB < aFn + size; aB++) {
      if (eu >= this.rA[aB].eu && ew >= this.rA[aB].ew && eu <= this.rA[aB].eu + this.rA[aB].i && ew <= this.rA[aB].ew + this.rA[aB].j) {
        return aB;
      }
    }
    return -1;
  };
  function aFk(aB) {
    var button = aY.rA[aB];
    var eu = button.eu;
    var ew = button.ew;
    var i = button.i;
    var j = button.j;
    uk.fillStyle = button.aFi;
    uk.fillRect(eu, ew, i, j);
    if (aB === aFd) {
      uk.fillStyle = aFf;
      uk.fillRect(eu, ew, i, j);
    }
    uk.lineWidth = bc.z7;
    uk.strokeStyle = aFe;
    uk.strokeRect(eu, ew, i, j);
    aFo(button);
  }
  function aFo(button) {
    var eu = button.eu;
    var ew = button.ew;
    var i = button.i;
    var j = button.j;
    bA.qb.textAlign(uk, 1);
    bA.qb.textBaseline(uk, 1);
    uk.font = button.font;
    uk.fillStyle = aFe;
    uk.fillText(button.a71, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + button.fontSize * 0.1));
  }
}
function cQ() {
  var aFp;
  var aFq;
  var a7C;
  var aFr;
  var aFs;
  var aFt;
  var aFu;
  var aFv;
  var aFw;
  var a7B;
  var aFx;
  var aFy;
  var aFz;
  var aG0 = 1;
  this.aG1 = 1;
  this.dd = function () {
    aa.setState(6);
    aFp = 0;
    aFq = 1;
    aFv = "rgba(0,220,120,0.4)";
    aFw = "rgba(0,0,0,0.8)";
    this.resize();
    bf.dl = true;
    aG0 = 1;
    aFz = this.aG1 - 1;
    aG2(1);
  };
  this.resize = function () {
    aFr = Math.floor((a0.a1.hw() ? 0.5 : 0.25) * h.hx);
    aFs = aFr + 12;
    a7C = Math.floor(aFr * 0.125);
    aFu = a7C * 3;
    aFt = Math.floor(aFr * 0.225);
    aFx = Math.floor(a7C * 0.3);
    a7B = bA.qb.sQ(0, aFx);
  };
  function aG2(aG3) {
    if (!aG3 && aFz === 1 && aG0) {
      aG0 = 0;
      b0.y.close(aFz, 3280);
    } else {
      aFz = (aFz + 1) % b0.y.aG4;
    }
    aFy = bf.eM;
    if (b0.y.aG5(aFz, 4)) {
      b0.aEi.aG6(aFz);
    }
  }
  this.a1O = function (a1F) {
    if (a1F === aFz) {
      aG7();
    }
  };
  function aG8() {
    if (bf.eM > aFy + 12000) {
      aG7();
    }
  }
  function aG7() {
    if (aFz === 0) {
      o.a1S(3249);
      return;
    }
    aG2();
  }
  this.h0 = function (eu, ew) {
    var n9 = Math.floor((h.i - aFs) / 2);
    var nA = Math.floor((h.j - bc.gap - a7C - aFt) * 0.5) + a7C + bc.gap;
    if (eu > n9 && eu < n9 + aFs && ew > nA && ew < nA + aFt) {
      this.a2I();
      aY.a1d(eu, ew, false);
      return true;
    }
    return false;
  };
  this.a2I = function () {
    b0.y.a1T(3260);
    t.y.z();
  };
  this.j3 = function () {
    if (aa.a1K() !== 6) {
      return;
    }
    aG8();
    aG9();
  };
  function aG9() {
    aFp += aFq * 0.07 * (aFp < 16 ? 5 + aFp : aFp > 84 ? 105 - aFp : 17);
    if (aFp > 100) {
      aFp = 100;
      aFq = -1;
    } else if (aFp < 0) {
      aFp = 0;
      aFq = 1;
    }
    aFv = "rgba(0," + Math.floor(190 - aFp * 1.9) + "," + Math.floor(120 - aFp * 1.2) + "," + (0.4 + aFp * 0.004) + ")";
    aFw = "rgba(0," + Math.floor(aFp * 1.9) + "," + Math.floor(aFp * 1.2) + "," + (0.8 - aFp * 0.004) + ")";
    bf.dl = true;
  }
  this.uj = function () {
    var eu = Math.floor((h.i - aFs) / 2);
    var ew = Math.floor((h.j - bc.gap - a7C - aFt) * 0.5);
    aGA(L(131), ew, 3, aFp / 100);
    aGB(eu, ew + a7C + bc.gap, aFs, aFt, L(37));
  };
  function aGB(eu, ew, i, j, a71) {
    uk.fillStyle = bB.ne;
    uk.fillRect(eu, ew, i, j);
    uk.lineWidth = 3;
    uk.strokeStyle = bB.nj;
    uk.strokeRect(eu, ew, i, j);
    var en = Math.floor(j * 0.3);
    bA.qb.textAlign(uk, 1);
    bA.qb.textBaseline(uk, 1);
    uk.font = bA.qb.sQ(0, en);
    uk.fillStyle = bB.nj;
    uk.fillText(a71, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + en * 0.1));
  }
  function aGA(title, ew, a9J, th) {
    uk.fillStyle = aFw;
    aGC(ew, a9J, 1);
    uk.fill();
    uk.fillStyle = aFv;
    aGC(ew, a9J, th);
    uk.fill();
    uk.strokeStyle = bB.nj;
    aGC(ew, a9J, 1);
    uk.stroke();
    aGD(title, ew);
  }
  function aGD(aGE, ew) {
    bA.qb.textAlign(uk, 1);
    bA.qb.textBaseline(uk, 1);
    uk.font = a7B;
    uk.fillStyle = bB.nj;
    uk.fillText(aGE, Math.floor(h.i * 0.5), Math.floor(ew + a7C * 0.58));
  }
  function aGC(ew, a9J, th) {
    var n9 = Math.floor((h.i - aFr) / 2) + aFu;
    var nM = n9 + Math.floor(th * (aFr - aFu * 2));
    uk.lineWidth = a9J;
    uk.beginPath();
    uk.moveTo(n9, ew);
    uk.lineTo(nM, ew);
    uk.lineTo(Math.floor(n9 - aFu + th * aFr), ew + a7C);
    uk.lineTo(n9 - aFu, ew + a7C);
    uk.closePath();
  }
}
function cR() {
  var a1B = 0;
  this.dd = function () {
    aY.dd();
    a1B = 0;
  };
  this.setState = function (aGF) {
    a1B = aGF;
  };
  this.a1K = function () {
    return a1B;
  };
  this.aGG = function () {
    this.setState(8);
    t.x();
  };
  this.a2B = function (e) {
    if (!bS.we) {
      return false;
    }
    if (bf.eM < 400) {
      return;
    }
    if (e.key === "Enter" || e.key === "Escape") {
      if (this.aGH()) {
        return true;
      }
      if (e.key === "Enter") {
        if (a1B === 0) {
          return true;
        } else if (a1B === 7) {
          return true;
        }
      }
    }
    return false;
  };
  this.aGI = function () {
    bZ.resize();
  };
  this.aGH = function () {
    if (bZ.rs()) {
      return true;
    }
    return false;
  };
  this.h0 = function (eu, ew) {
    if (!bS.we) {
      return;
    }
    if (bZ.h0(eu, ew)) {
      return;
    }
    if (a1B === 6 && aZ.h0(eu, ew)) {
      return;
    }
    if (bY.h0(eu, ew)) {
      return;
    }
    aT.h0(eu, ew);
    if (a1B === 0) { } else if (a1B === 7) { }
  };
  this.a1d = function (eu, ew) {
    if (!aT.a9U) {
      if (aY.a1d(eu, ew, true)) {
        return;
      }
    }
    aT.a1d(eu, ew);
  };
  this.click = function (eu, ew) {
    aT.a22();
  };
  this.a1g = function (eu, ew, deltaY) { };
  this.aGJ = function () {
    aY.a9b();
    bf.dl = true;
  };
  this.uj = function () {
    if (a1B === 8 || a1B === 10) {
      return;
    }
    uk.imageSmoothingEnabled = true;
    this.yD();
    if (a1B !== 0) {
      aT.uj();
      aO.uj();
      this.aGK();
      bY.uj();
    }
    if (a1B === 0) { } else if (a1B === 6) {
      aZ.uj();
    }
    bZ.uj();
    t.uj();
  };
  this.yD = function () {
    if (!bS.we) {
      uk.fillStyle = bB.na;
      uk.fillRect(0, 0, h.i, h.j);
      return;
    }
    var aGL = h.i / bS.ey;
    var aGM = h.j / bS.ez;
    var eR = aGL > aGM ? aGL : aGM;
    uk.setTransform(eR, 0, 0, eR, Math.floor((h.i - eR * bS.ey) / 2), Math.floor((h.j - eR * bS.ez) / 2));
    uk.drawImage(bS.wg, 0, 0);
    uk.setTransform(1, 0, 0, 1, 0, 0);
    uk.fillStyle = bB.ne;
    uk.fillRect(0, 0, h.i, h.j);
  };
  this.aGK = function () {
    var ew = Math.floor(h.j * 0.3);
    var canvas = ab.aGN("territorial.io");
    var ho = h.j * 1.75 / canvas.width;
    ho = ho * canvas.width < h.i * 0.98 ? h.i * 0.98 / canvas.width : ho;
    uk.globalAlpha = 0.15;
    uk.imageSmoothingEnabled = false;
    var eu = Math.floor((h.i - ho * canvas.width) * 0.5);
    eu = Math.floor(eu / ho);
    var a6R = Math.floor(ew - canvas.height * 0.5 * ho);
    a6R = Math.floor(a6R / ho);
    uk.setTransform(ho, 0, 0, ho, eu, a6R);
    uk.drawImage(canvas, eu, a6R);
    uk.setTransform(1, 0, 0, 1, 0, 0);
    uk.globalAlpha = 1;
    uk.imageSmoothingEnabled = true;
  };
}
function cr() {
  this.aDf = 0;
  this.aGO = 0;
  var aGP;
  var aGQ;
  var aGR;
  var aGS;
  var aGT;
  var aGU = 0;
  this.dd = function (rg, aDc, aDd) {
    t.x();
    bn.uD();
    aa.setState(10);
    aGS = rg;
    aGT = aDc;
    aGU = aDd;
    this.aDf = rg.aDf;
    this.aGO = aDd;
    aGP = 0;
    aGQ = bf.eM + 4500;
    b0.y.a1P = rg.a1P;
    if (b0.y.a1I === rg.a1P) {
      console.log("direct pass");
      aGR = 0;
    } else {
      console.log("delayed pass");
      b0.y.close(b0.y.a1I, 3247);
      aGR = 2;
      if (b0.y.aG5(rg.a1P, 5)) {
        b0.p5.aGV();
      }
    }
    aGW();
  };
  function aGX() {
    aGS = aGT = null;
    aGU = 0;
  }
  this.mT = function () {
    if (aGR > 0 && bf.eM > aGQ) {
      lz();
    }
  };
  function lz() {
    aGR--;
    aGQ += 4500;
    if (bf.aGY === 0 && bf.k7() === 0) {
      b0.y.aG5(b0.y.a1P, 5);
    }
  }
  this.aGZ = function () {
    if (aa.a1K() !== 10) {
      return false;
    }
    bn.aCr.aDg(aGS, aGT, aGU);
    aGX();
    return true;
  };
  this.aGa = function () {
    if (aa.a1K() !== 10) {
      return;
    }
    aGP++;
    if (aGP >= 2) {
      bn.aCr.aDg(aGS, aGT, aGU);
      aGX();
    }
  };
  function aGW() {
    uk.imageSmoothingEnabled = true;
    aa.yD();
    aGb();
  }
  function aGb() {
    var canvas = ab.aGN("loading");
    var nL = (a0.a1.hw() ? 0.396 : 0.25) * h.hx / canvas.width;
    uk.setTransform(nL, 0, 0, nL, Math.floor((h.i - nL * canvas.width) / 2), Math.floor((h.j - nL * canvas.height) / 2));
    uk.imageSmoothingEnabled = false;
    uk.drawImage(canvas, 0, 0);
    uk.setTransform(1, 0, 0, 1, 0, 0);
  }
}
function cS() {
  var aGc;
  var canvas;
  var a0U;
  var aGd;
  this.dd = function () {
    if (canvas === undefined) {
      aGe();
    }
  };
  this.get = function (e8) {
    return canvas[e8];
  };
  this.aGN = function (name) {
    for (var aB = a0U.length - 1; aB >= 0; aB--) {
      if (a0U[aB] === name) {
        return canvas[aB];
      }
    }
    return aGd;
  };
  this.tI = function () {
    return aGc <= 0;
  };
  this.aGf = function () {
    aGc = 0;
    aGg();
  };
  function aGe() {
    aGc = 23;
    canvas = new Array(aGc);
    a0U = new Array(aGc);
    aGh();
    aGi();
    aGj(0, "exit", 6, "iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
    aGj(1, "victory", 6, "iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg==");
    aGj(2, "defeat", 6, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    aGj(3, "orders", 6, "iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC");
    aGj(4, "crown", 4, "iVBORw0KGgoAAAANSUhEUgAAAJsAAABqBAMAAABZgT4DAAAAJ1BMVEUgIi0xOi5GUTMadCZ3bkARrRyhk1AA1g/AqzAA/wDVxWXy2D/25XVxgVVAAAAGjElEQVRo3s2az2vcRhTHn+SV14l9UEJ+NEkPGygBEx/UhhJ8W0owJclBLZSwtw2YUGoflJhg9uaWUgq5rC2E6M0pJYdmD40xZsn0EAfjw0Z/VOfNSJr35LUjKTr0HcxiTT4785033/c0DvxRJp7fufOozLghlBm1ATLuNoWLXcRZg4ZwAahoN4OTk2uNXnXBbgYXArwW4gCg1wgugPNCRh+uNYLz4Tbi3pQQrxxuDXEH4DSC81C6/y0uXex+Q7gAbjS5FdvQQlwXFhvBRQAPhDgCGDRzZj2wVlYBZhqygGfaApabMigPaSUmdwpus6BS1JG0wu82S+M2wB4UNxfOFSd8uSQugouuU8zkQg4H1s1pWk7DBXNi7PLpycVa3FHXxM9OOZwnz9QWS9kYwGXmGcnEHkM5HOCJanM/bvXZmQjn8JgMyuBiSw7daxf8+B07sdvzpXFTZufBwyOWd2p2nUFp7frLXLpRwo6s0s4qubOz0ioHXLok6bLEcB+cvrPPv7S+pl8NFs8yKV2S7DLxnsIFvtVfKQTiIjyRl3lLMuBJvJQkXLy4w3oWPIV4DCVOH3C2lBBOSJdMuHjcmn2FuIq4UNsP/e6h5bBDZyUyOnR1T602N1jdFEmcB/Zr8Zi1DMG3tF3ahlnEMfG8FYeJa62LvwAWhxAr65aVgAz217rLdCWfI+492Z/IGtvsSC+prsMZQqQLyx7dTO/FG4cOXkfcMXGBp3OCmEQM1gdViO0hbANmuHhL+i15zMZmtal0SUJcQGZ6t0ekm0WEcCGAtIrKzwYn52tWG2rpksS0UJE81lvLJBHUjKRgiFP9keiYPIjk0z3H6LygcYe5HtIRxT+mPduBeaFbNj/HkdntzKObDcz517jjXA881cRzQljIZzfU6H/B4AL8gswEdBKryJIpslF4h+Bm0wUGkH7eJ3nsY+Zkq1XnX0fmArhWMZ4hW2Hr3bQwUVS/RZPUeyHMatX515FZqKc6KqCnEH9zCDPyVHRwegf00Lpa2EUuXe4Caq3MjH1ofRBvXWhLnHxruHTPJW8hsR6uV0uky1wg0JnV79He3pYI6ElcVHwJibSwOu+JdJl4nRfqMUm8uKMQjvI71dGQuh/qpBRbV7l0qQuELf2YlhP10ib3Xbnx98CKfLoYsT+jpFsyOCWenz12WHEC61FWKzZ96k/BA5Gutsek0+LFrl4rzRQUzBmY0rND7dNLx4uttpTOThImXpgqK4TF3PgaqWQRfV91s/EHNpcOxXO829ljU2fDrDikuJi8r6Z5olLrrmuyTosHVv40zxS1sQNaZ12zG1G+GrFnMemU55mneaaowsPKtmdez3fm8n8gbWaW0eRqIVM2z5QNU7kyXAC35Dp6NE+UXfO1qtV+lj1NMyWSK1tNl5bhhrDwMu1//TWjTubrJjpgZdPT1QfL9PXMHDIcOnhXyRcDndz1Iu4Q4AbbWimcLTVYZjhZz5JjF3uLqGU2trgRmMmumR62qN9J3dblTHoMJzNFCQOX/fmM9suUySXJS6PenhMj7T5u+IA3ZB5O5CXu0ZX0y/fl3oxO4uT0IFV3DJgQ1/HwWYX+zld7+Fi1Gl/8Lsf+Kv/ZUjIlMJV/RNhv36hvV0XJKeAC3Tk81uYnuzcZs8nUwDHWhXTgFd1vtAu47fRw/gl5tEbTcZgCWdxKk/tcARdlc3nVSUdeOo1m1mD/lPUHywVcbJxo9aYcefF+cka8UkNWTG73iq02zbHJ36PkI8GG5I2pwXm67aoTx7n3Gpw/PS3KxFFeaQwub5Sqx2FeVQ0uPC3NPh67+eufwUW0PleLbl4GDS4+6W1lw817QfJO1oFRPdrE9OAE5xeNvHqeUFxqAtXjvWmXCG6bV+jy8c5cihBc7Uzpm05zSFtS+1PzhL1tY7moE+TNlOJqmsCEvH5RXM1MOSKtJsXVNIFD0lZTXFgvU3bJ5TnF1TSBPumDKa6mCZBXTX4t49YxgQl5N+Q4v06mHNM7DoYL6pQLeuPAccM6W8tu4hiulgn06Y0Qw0V1TKBL73MYLq5jAi69muL3dx6sPCkT68kEf07wA/t7F8f5UC7Oq773/JH64JyKC6B1r0w8TCb4cyI/HLKbN47bqZ4pu+z2nONqmADLkwKuhgl02L1m4Wa2ugnAWbjK5eKY/1WkgKtsAjxPTuIWPsEATuBCaD2pFIU/nhVwEVSO3hm4uDpucNYVvleVNnPmXwSiHyoG/98Hw/8AAslhvSUnOcMAAAAASUVORK5CYII=");
    aGj(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg==");
    aGj(6, "territorial.io", 6, "iVBORw0KGgoAAAANSUhEUgAAAGMAAAAKAQMAAACaDnJEAAAABlBMVEUAAAD///+l2Z/dAAAAaklEQVQI12P4X1dvP/vvn3+JjxnOP2CA8ZLBPImERIOGxJZDzMoMPApg3gwgL1mZ4QyQV1NvD+T9g/EqbCQSWz6kfwbzEmrsgLwfMF6eOZB3J80YzKtLN56R+OdcmvE3kA11yYZA3jEwDwAD7zy1rz50OAAAAABJRU5ErkJggg==");
    aGj(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    aGj(8, "googleplay", 3, "iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg==");
    aGj(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
    aGj(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    aGj(11, "emojis", 4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    aGj(12, "flags", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    aGj(13, "bestTeam", 5, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    aGj(14, "bestPlayer", 5, "iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII=");
    aGj(15, "zoom", 6, "iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC");
    aGj(16, "apple", 3, "iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC");
    aGj(17, "loading", 6, "iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC");
    aGj(18, "target", 7, "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg==");
    aGj(19, "members", 7, "iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC");
    aGj(20, "hourglass", 7, "iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC");
    aGj(21, "stalemate", 6, "iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII=");
    aGj(22, "logo", 8, "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEW+AAHAIiMAiAfESkosjSx4cMRcnFzPgoGbmNGow6e7ut7ftLTX4dbf3+7u3d7////Ro4BnAAACgklEQVRIx+3VMYgaQRQA0D1SpEizcv0Vg1h7XHHFQQpZUqVdWIRrRBaEQCIWKSxSBWRBDoIIC0J6YZHjCgshdsLCwvYB2cLiCkHLQ5zMz3cl7ow6O1OkSJF/V8lj5s+fP38N43/8s/GqoMUK17fjcVkDttvT9epRAwIGW17rQWBjUwmTXz+Hc2BPSugNbdsZwbal2t3eRRdgORk3TSV0kjTRydOlAtrDID0UTEwFtKtJksqmCjodL5jPAbamAu6s08EEHtVwf6gXLWiPgJW1YCeR7i1CLL3sOEfQAaYHMcuyLvykBb2E6cERrLitL24KEogV55v9btmSQGxMbufXa8hekwjnQhnfAvdGBFfF9slWvJhi3y2kTZGt+GYNXN8dH/o52/kK6CBrkmO44FMMG7EEdvnmmUKvFB/qL8J7bus7oDXynTXPFzxL/nKdQpDBNKd2y7z9ARAS8vGQ9NFdP+y2arPnz1OgUZ2QRvxyHt7DwsSbA/wP/QohpXhbkHT4tnyVjgLatwghxRjGrRvTPIUJu5lCFAHdrYfxHthqtZw0Tzo8YF8QNaKonzpS2g8ldgI9/HVWL1r79TA+7KUAnY7zFTuSuoSLUoSJiHCIY2qOQw3rzEXRdRuDiIfV/eBL6yxGse76hvAMYvyj/jdyGtYBOl4CfiP0B+E7ci7+QC9IYNOzrKJbIXnQwWFLZxLDQ3xV1He1IA1rhKihA2GF6MAqzIgm3NSI3ta0rgcT6GtBfPlU69S7i+5pQax47sUcICaZX3EjG0+byt+FXUXJD/BBUR8jG9+a0FEU0uDmfGjpQDs4evhSiB//vOY1hK9RTwtiljnXzc+eIO9yDOGjTuXwN2h8zFYEBekAAAAAAElFTkSuQmCC");
  }
  function aGh() {
    aGd = document.createElement("canvas");
    aGd.width = 1;
    aGd.height = 1;
    for (var aB = aGc - 1; aB >= 0; aB--) {
      canvas[aB] = aGd;
    }
  }
  function aGj(e8, name, aGk, qI) {
    a0U[e8] = name;
    canvas[e8] = new Image();
    canvas[e8].onload = function () {
      aGl(e8, aGk);
      aGm();
    };
    canvas[e8].onerror = function (e) {
      console.error("Error loading image at index", e8, "Error:", e);
      aGm();
    };
    canvas[e8].src = "data:image/png;base64," + qI;
  }
  function aGl(e8, aGk) {
    var a3x = null;
    var a3w;
    if (aGk === 7) {
      a3w = bA.a2O.a3z;
    } else if (aGk === 8) {
      a3w = bA.a2O.a42;
      a3x = 0.1;
    } else if (aGk === 3) {
      a3w = bA.a2O.a40;
      a3x = 0.06;
    } else if (aGk === 5) {
      a3w = bA.a2O.a43;
    } else if (aGk === 6) {
      a3w = bA.a2O.a3y;
    } else if (aGk === 4) {
      a3w = bA.a2O.a44;
    }
    canvas[e8] = bA.a2O.a3v(canvas[e8], a3w, a3x);
  }
  function aGm() {
    aGc--;
    aGg();
  }
  function aGg() {
    if (aGc !== 0) {
      return;
    }
    aGc = -1;
    aGi();
    bf.dl = true;
    aGn();
    if (t.sq === 5) {
      t.a5A().aGo.resize();
    }
  }
  function aGi() {
    aL.a5M();
    bY.aCh([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [a0.id !== 2, a0.id !== 1, true, true, true]);
    aj.wj = new ye();
    aj.wj.dd();
    aw.de();
  }
  function aGn() {
    canvas[7] = aGd;
    canvas[8] = aGd;
    canvas[9] = aGd;
    canvas[10] = aGd;
  }
}
function cT() {
  var aGp = [[100, 100, 100], [144, 0, 0], [0, 128, 0], [0, 0, 144], [128, 128, 0], [128, 0, 128], [0, 128, 128], [196, 196, 196], [0, 0, 0]];
  var aGq = [[4, 4, 4, 20], [4, 0, 0, 27], [0, 4, 0, 31], [0, 0, 4, 27], [4, 4, 0, 31], [4, 0, 4, 31], [0, 4, 4, 31], [4, 4, 4, 14], [4, 4, 4, 13]];
  var aGr;
  var aGs;
  var aGt;
  var aGu;
  var aGv;
  var aGw;
  var aGx;
  var aGy;
  var aGz;
  var aH0;
  var aH1 = 208;
  var aH2 = 224;
  var aH3 = 248;
  this.ep = new Int32Array(4);
  this.de = function () {
    var ep = this.ep;
    ep[0] = bS.ey * -4;
    ep[1] = 4;
    ep[2] = -ep[0];
    ep[3] = -ep[1];
  };
  this.dd = function () {
    aGr = new Uint8Array(aD.ek);
    aGs = new Uint8Array(aD.ek);
    aGt = new Uint8Array(aD.ek);
    aGu = new Uint8Array(aD.ek);
    aGv = new Uint8Array(aD.ek);
    aGw = new Uint8Array(aD.ek);
    aGx = new Uint8Array(aD.ek);
    aGy = new Uint8Array(aD.ek);
    aGz = new Uint8Array(aD.ek);
    aH0 = new Uint8Array(aD.ek);
    this.a8S = new Uint8Array(aD.ek);
    if (aD.hh) {
      aH4();
    } else if (aD.data.colorsType === 0) {
      if (aD.data.selectableColor) {
        aH5(0, aD.kA);
        aH6(aD.kA, aD.ek);
      } else {
        aH6(0, aD.ek);
      }
    } else {
      aH5(0, aD.ek);
    }
    aH7();
    aH8();
    this.aH9();
    aHA();
    aHB();
  };
  this.a7J = function (player) {
    var g = bO.fM;
    g[0] = aGr[player];
    g[1] = aGs[player];
    g[2] = aGt[player];
    return g;
  };
  function aH6(jQ, nR) {
    for (var aB = jQ; aB < nR; aB++) {
      aGr[aB] = bL.du(ay.random() * 64, ay.value(100)) * 4;
      aGs[aB] = bL.du(ay.random() * 64, ay.value(100)) * 4;
      aGt[aB] = bL.du(ay.random() * 64, ay.value(100)) * 4;
    }
  }
  function aH5(jQ, nR) {
    var colorsData = aD.data.colorsData;
    for (var aB = jQ; aB < nR; aB++) {
      var fF = colorsData[aB];
      aGr[aB] = (fF >> 12) * 4;
      aGs[aB] = (fF >> 6 & 63) * 4;
      aGt[aB] = (fF & 63) * 4;
    }
  }
  function aH7() {
    var aB;
    var eq;
    for (aB = aD.ek - 1; aB >= 0; aB--) {
      eq = bL.du(aGr[aB] + aGs[aB] + aGt[aB], 3);
      aGr[aB] += aHC(eq - aGr[aB], 2);
      aGs[aB] += aHC(eq - aGs[aB], 2);
      aGt[aB] += aHC(eq - aGt[aB], 2);
      aGr[aB] -= aGr[aB] % 4;
      aGs[aB] -= aGs[aB] % 4;
      aGt[aB] -= aGt[aB] % 4;
    }
  }
  function aH4() {
    var aAh = bg.aAh;
    for (var aB = aD.ek - 1; aB >= 0; aB--) {
      var f8 = aAh[aB];
      var l5 = bL.du((aGq[f8][3] + 1) * ay.random(), ay.value(100));
      aGr[aB] = aGp[f8][0] + l5 * aGq[f8][0];
      aGs[aB] = aGp[f8][1] + l5 * aGq[f8][1];
      aGt[aB] = aGp[f8][2] + l5 * aGq[f8][2];
    }
  }
  function aH8() {
    for (var aB = aD.ek - 1; aB >= 0; aB--) {
      aGr[aB] += bL.du(aB, 128);
      aGs[aB] += bL.du(aB % 128, 32);
      aGt[aB] += bL.du(aB % 32, 8);
      aGu[aB] = aB % 8;
    }
  }
  function aHA() {
    var f7 = 32;
    for (var aB = aD.ek - 1; aB >= 0; aB--) {
      aGv[aB] = aGr[aB] < f7 ? aGr[aB] + f7 : aGr[aB] - f7;
      aGw[aB] = aGs[aB] < f7 ? aGs[aB] + f7 : aGs[aB] - f7;
      aGx[aB] = aGt[aB] < f7 ? aGt[aB] + f7 : aGt[aB] - f7;
    }
  }
  function aHB() {
    var f7 = 20;
    var e = 256 - f7 - 1;
    for (var aB = aD.ek - 1; aB >= 0; aB--) {
      aGy[aB] = aGr[aB] > e ? aGr[aB] - f7 : aGr[aB] + f7;
      aGz[aB] = aGs[aB] > e ? aGs[aB] - f7 : aGs[aB] + f7;
      aH0[aB] = aGt[aB] > e ? aGt[aB] - f7 : aGt[aB] + f7;
    }
  }
  this.aH9 = function () {
    for (var aB = aD.ek - 1; aB >= 0; aB--) {
      this.a8S[aB] = aGr[aB] + aGs[aB] + aGt[aB] < 280 ? 0 : 1;
    }
  };
  this.yE = function (eR) {
    return bL.du(eR, 4) % bS.ey;
  };
  this.yF = function (eR) {
    return bL.du(eR, bS.ey * 4);
  };
  this.xm = function (eu, ew) {
    return Math.floor((ew * bS.ey + eu) * 4);
  };
  this.y2 = function (eR) {
    var ep = this.ep;
    return this.aHD(eR + ep[0]) || this.aHD(eR + ep[1]) || this.aHD(eR + ep[2]) || this.aHD(eR + ep[3]);
  };
  this.fC = function (eR) {
    var ep = this.ep;
    return this.es(eR + ep[0]) || this.es(eR + ep[1]) || this.es(eR + ep[2]) || this.es(eR + ep[3]);
  };
  this.y0 = function (eR, player) {
    var ep = this.ep;
    return this.aHE(eR + ep[0], player) || this.aHE(eR + ep[1], player) || this.aHE(eR + ep[2], player) || this.aHE(eR + ep[3], player);
  };
  this.gN = function (eR) {
    return aC2[eR + 3] >= aH1;
  };
  this.y8 = function (player, eR) {
    return this.gN(eR) && this.yB(player, eR);
  };
  this.yB = function (player, eR) {
    return player === this.ef(eR);
  };
  this.aHF = function (eR) {
    return aC2[eR + 3] >= aH1 && aC2[eR + 3] < aH2;
  };
  this.jL = function (eR) {
    return aC2[eR + 3] >= aH2 && aC2[eR + 3] < aH3;
  };
  this.y1 = function (eR) {
    var ep = this.ep;
    for (var aB = 3; aB >= 0; aB--) {
      if (this.i1(eR + ep[aB])) {
        return true;
      }
    }
    return false;
  };
  this.ei = function (eR) {
    return this.gN(eR) || this.ee(eR);
  };
  this.i1 = function (eR) {
    return aC2[eR + 3] === 0 && aC2[eR + 2] === 2;
  };
  this.ee = function (eR) {
    return aC2[eR + 3] === 0 && aC2[eR + 2] === 1;
  };
  this.wr = function (eR) {
    return aC2[eR + 3] === 0 && aC2[eR + 2] === 3;
  };
  this.es = function (eR) {
    return aC2[eR + 3] === 0 && aC2[eR + 2] === 5;
  };
  this.aHD = function (eR) {
    return aC2[eR + 3] === 0 && aC2[eR + 2] >= 3;
  };
  this.eV = function (eR) {
    return (aC2[eR] >> 1 << 8) + aC2[eR + 1];
  };
  this.aHG = function (eR) {
    return aC2[eR] & 1;
  };
  this.aHE = function (eR, player) {
    return this.ee(eR) || this.gN(eR) && player !== this.ef(eR);
  };
  this.ef = function (eR) {
    return aC2[eR] % 4 * 128 + aC2[eR + 1] % 4 * 32 + aC2[eR + 2] % 4 * 8 + aC2[eR + 3] % 8;
  };
  this.y9 = function (eR) {
    aHH(eR, 1);
  };
  this.aHI = function (eR) {
    aHH(eR, 2);
  };
  function aHH(eR, aHJ) {
    aC2[eR] = 0;
    aC2[eR + 1] = 0;
    aC2[eR + 2] = aHJ;
    aC2[eR + 3] = 0;
    aHK(eR);
  }
  this.xn = function (eR, player) {
    aC2[eR] = aGr[player];
    aC2[eR + 1] = aGs[player];
    aC2[eR + 2] = aGt[player];
    aC2[eR + 3] = aH1 + aGu[player];
    aHK(eR);
  };
  this.gI = function (eR, player) {
    aC2[eR] = aGv[player];
    aC2[eR + 1] = aGw[player];
    aC2[eR + 2] = aGx[player];
    aC2[eR + 3] = aH2 + aGu[player];
    aHK(eR);
  };
  this.jM = function (eR, player) {
    aC2[eR] = aGy[player];
    aC2[eR + 1] = aGz[player];
    aC2[eR + 2] = aH0[player];
    aC2[eR + 3] = aH3 + aGu[player];
    aHK(eR);
  };
  function aHK(eR) {
    if (bb.nZ) {
      return;
    }
    var eu = ac.yE(eR);
    var ew = ac.yF(eR);
    bb.nZ = eu >= ba.aC1[0] && eu <= ba.aC1[2] && ew >= ba.aC1[1] && ew <= ba.aC1[3];
  }
}
function cs() {
  var aHL = 0;
  var aHM = 64;
  var aHN = new Uint16Array(aHM);
  this.dd = function () {
    aHL = 0;
  };
  this.j3 = function () {
    if (aHL === 0) {
      return;
    }
    if (ag.mj[aD.eX] === 0) {
      aHL = 0;
      return;
    }
    if (ad.fu(aD.eX) === 0) {
      aHL = 0;
      return;
    }
    aHO();
  };
  function aHO() {
    var aB;
    var jJ;
    var iN;
    for (aB = aHL - 2; aB >= 0; aB -= 2) {
      jJ = aHN[aB];
      if (jJ < aD.ek && ag.mj[jJ] === 0) {
        vN(aB);
        continue;
      }
      iN = aHN[aB + 1];
      if (jJ >= aD.ek && bs.aHP(aD.eX) || jJ < aD.ek && bs.aHQ(aD.eX, jJ)) {
        b8.hD.hK(iN, jJ);
        vN(aB);
      }
    }
  }
  function vN(a5Q) {
    aHL -= 2;
    for (var aB = a5Q; aB < aHL; aB += 2) {
      aHN[aB] = aHN[aB + 2];
      aHN[aB + 1] = aHN[aB + 3];
    }
  }
  this.hL = function (jJ, iN) {
    if (aHR(jJ, iN) || aHL === aHM) {
      return;
    }
    aHN[aHL] = jJ;
    aHN[aHL + 1] = iN;
    aHL += 2;
  };
  function aHR(jJ, iN) {
    for (var aB = 0; aB < aHL; aB += 2) {
      if (aHN[aB] === jJ) {
        aHN[aB + 1] = Math.min(aHN[aB + 1] + iN, 1023);
        return true;
      }
    }
    return false;
  }
}
function cU() {
  this.dm = function (gL) {
    var dt = ag.gb[gL] + ag.xi[gL];
    if (bN.y.kE[gL]) {
      if (dt) {
        aHS(gL);
      }
      return;
    }
    if (dt) {
      this.aHT(gL);
      return;
    }
    if (ag.gF[gL].length) {
      return;
    }
    this.aHT(gL);
  };
  function aHS(player) {
    aHU(player, ad.aHV(player));
    aHW(player);
    aF.gB(player);
    ad.clear(player);
    aHX(player);
    aHY(player);
  }
  function aHY(player) {
    ag.xi[player] = 0;
    ag.gF[player] = [];
    ag.gT[player] = [];
    ag.gU[player] = [];
    ag.fD[player] = [];
  }
  function aHX(player) {
    if (bA.g9.a3X(player)) {
      var dt = ag.gp[player] - ag.a3c[player] + ad.aHZ(player);
      bd.gD(player, Math.abs(dt), dt < 0 ? 18 : 12);
    }
    ag.gp[player] = 0;
    ag.a3c[player] = 0;
  }
  this.aHT = function (player) {
    aHa(player);
    aHW(player);
    aHX(player);
    aHb(player);
    aF.gB(player);
    ad.clear(player);
    bN.aHc.aHd(player);
  };
  function aHa(player) {
    if (!bA.g9.jX(player)) {
      ag.a0i[player] = bi.a0y.aHe();
      aD.a0B++;
    }
    var aHf = ad.aHV(player);
    if (aHf.length === 0) {
      if (bA.g9.a3U(player)) {
        aHg();
      }
      return;
    }
    aHU(player, aHf);
    aHh(player, aHf);
  }
  function aHg() {
    aX.show(false, false, false, true);
    aW.aBA();
    bR.zu.a0e();
  }
  function aHU(player, aHf) {
    for (var aB = aHf.length - 1; aB >= 0; aB--) {
      ad.aHi(aHf[aB], player);
    }
  }
  function aHj(aHf) {
    var aB;
    var e8 = 0;
    for (aB = aHf.length - 1; aB >= 1; aB--) {
      if (ag.gb[aHf[aB]] > ag.gb[aHf[e8]]) {
        e8 = aB;
      }
    }
    return e8;
  }
  function aHh(player, aHf) {
    var aHk = aHf[aHj(aHf)];
    if (aD.kS === 9) {
      if (bg.el[player] === 1) {
        if (ay.k2(8)) {
          az.aHl(aHk);
        }
      } else if (aE.hW[player]) {
        aN.a6p(765, 0);
        aN.yb(280, L(132, [ag.yc[aHk], ag.yc[player]]), 765, aHk, bB.na, bB.ot, -1, true);
      }
    }
    if (bA.g9.a3U(player)) {
      aHg(player);
      aN.a0L(aHk, 1);
      return;
    }
    for (var aB = aHf.length - 1; aB >= 0; aB--) {
      if (bA.g9.a3X(aHf[aB])) {
        bd.mf[4 - bA.g9.jX(player)]++;
        if (bA.g9.a3U(aHf[aB])) {
          aN.a0L(player, 0);
          return;
        }
      }
    }
    if (!bA.g9.jX(player)) {
      aN.a6Z(0, player, aHk);
    }
  }
  function aHb(player) {
    ag.mj[player] = 0;
    ag.gF[player] = null;
    ag.gT[player] = null;
    ag.gU[player] = null;
    ag.fD[player] = null;
  }
  function aHW(player) {
    var ie = ag.ie;
    var ig = ag.ig;
    var ih = ag.ih;
    var ii = ag.ii;
    var ey = bS.ey;
    if (ag.gb[player]) {
      ag.gb[player] = 0;
      var n9 = ie[player];
      var nA = ih[player];
      for (var eu = ig[player]; eu >= n9; eu--) {
        for (var ew = ii[player]; ew >= nA; ew--) {
          var gL = (ew * ey + eu) * 4;
          if (ac.y8(player, gL)) {
            ac.y9(gL);
          }
        }
      }
    }
    ig[player] = ii[player] = 0;
    ie[player] = ih[player] = Math.max(ey, bS.ez);
  }
}
function cx() {
  var input;
  this.dd = function () {
    input = document.createElement("input");
    input.type = "file";
    input.setAttribute("accept", ".png, .jpg, .gif, .jpeg");
    input.onchange = aHm;
  };
  this.uD = function () {
    if (!input) {
      return;
    }
    input.onchange = null;
    input.value = "";
    input = null;
  };
  this.aHn = function () {
    input.click();
  };
  function aHm(e) {
    aHo(e.target.files);
  }
  function aHo(files) {
    if (files && files.length > 0) {
      b6.aHp(files[0]);
    }
  }
  this.aHp = function (aHq) {
    var g = aHq.name.split(".");
    var aHr = g[g.length - 1].toLowerCase();
    if (aHr === "gif" || aHr === "jpg" || aHr === "jpeg" || aHr === "png") {
      var aHs = new FileReader();
      aHs.onload = aHt;
      aHs.readAsDataURL(aHq);
    }
  };
  function aHt(e) {
    var f8 = new Image();
    f8.onload = aHu;
    f8.src = e.target.result;
  }
  function aHu(e) {
    var aHv = e.target;
    var canvas = document.createElement("canvas");
    canvas.width = aHv.width;
    canvas.height = aHv.height;
    var hp = canvas.getContext("2d");
    hp.drawImage(aHv, 0, 0);
    var i = canvas.width;
    var j = canvas.height;
    if (i > bS.aHw || j > bS.aHw || i < 10 || j < 10) {
      var aHx = "Image dimensions must be between 10 and " + bS.aHw + ".";
      if (a0.vU) {
        a0.vU.showToast(aHx);
      } else {
        alert(aHx);
      }
      return;
    }
    if (t.sq === 20) {
      t.a5A().aHu(canvas);
    }
  }
}
function cv() {
  this.aHy = null;
  this.dd = function () {
    if (aD.kS !== 10) {
      this.aHy = null;
      return;
    }
    this.aHy = new Uint32Array(aD.ek);
  };
  this.j3 = function () {
    if (aD.kS !== 10) {
      return;
    }
    this.kz();
  };
  this.kz = function () {
    var aB;
    var gL;
    var target;
    var aBN;
    var aHy = this.aHy;
    var zx = al.kl;
    var a3d = ag.gp;
    for (aB = al.kg - 1; aB >= 0; aB--) {
      gL = zx[aB];
      if (gL >= aD.kA) {
        continue;
      }
      target = Math.max(bL.du(a3d[gL], 4), 2048);
      aBN = Math.max(ae.aBO(gL), 100);
      aHy[gL] += bL.du(aBN * target, 10000);
      if (aHy[gL] > target) {
        aHy[gL] = target;
      }
    }
  };
  this.a3j = function (player, hW) {
    if (hW > this.aHy[player]) {
      hW = this.aHy[player];
      this.aHy[player] = 0;
      return hW;
    }
    this.aHy[player] -= hW;
    return hW;
  };
}
function dW() {
  this.aHz = function () {
    var input = document.createElement("input");
    input.type = "file";
    input.setAttribute("accept", ".json");
    input.onchange = aI0;
    input.click();
  };
  this.aI1 = function () {
    var a58 = aD.data;
    var keys = Object.keys(a58);
    var aI2 = {};
    for (var aB = 0; aB < keys.length; aB++) {
      var key = keys[aB];
      if (a58[key] instanceof Uint8Array || a58[key] instanceof Uint16Array || a58[key] instanceof Uint32Array) {
        aI2[key] = Array.from(a58[key]);
      } else {
        aI2[key] = a58[key];
      }
    }
    if (aI2.mapType === 2 && aI2.canvas) {
      aI2.canvas = aI2.canvas.toDataURL();
    } else {
      aI2.canvas = null;
    }
    aI3(aI2);
  };
  function aI3(aI4) {
    var aI5 = JSON.stringify(aI4, null, 2);
    var aI6 = new Blob([aI5], {
      type: "application/json"
    });
    var aCe = document.createElement("a");
    aCe.href = URL.createObjectURL(aI6);
    aCe.download = "tt_scenario.json";
    aCe.click();
  }
  function aI0(e) {
    var files = e.target.files;
    if (files && files.length > 0) {
      aI7(files[0]);
    }
  }
  function aI7(aHq) {
    var g = aHq.name.split(".");
    var aHr = g[g.length - 1].toLowerCase();
    if (aHr === "json") {
      var aHs = new FileReader();
      aHs.onload = aI8;
      aHs.readAsText(aHq);
    }
  }
  function aI8(e) {
    if (aD.a09) {
      return;
    }
    aI9(JSON.parse(e.target.result));
    t.x();
    t.y.aIA[0] = 0;
    t.u(19);
  }
  function aI9(aIB) {
    var aIC = aD.data = new a4a();
    aID(aIB, aIC, "mapType", 0, 2);
    aID(aIB, aIC, "mapProceduralIndex", 0, 255);
    aID(aIB, aIC, "mapRealisticIndex", 0, 255);
    aID(aIB, aIC, "mapSeed", 0, 16383);
    aIE(aIB, aIC, "mapName", 20);
    aIF(aIB, aIC, "canvas");
    aID(aIB, aIC, "passableWater", 0, 1);
    aID(aIB, aIC, "passableMountains", 0, 1);
    aID(aIB, aIC, "playerCount", 1, 512);
    aID(aIB, aIC, "humanCount", 1, 1);
    aID(aIB, aIC, "selectedPlayer", 0, 0);
    aID(aIB, aIC, "gameMode", 0, 1);
    aID(aIB, aIC, "playerMode", 0, 0);
    aID(aIB, aIC, "battleRoyaleMode", 0, 0);
    aID(aIB, aIC, "numberTeams", 0, 8);
    aID(aIB, aIC, "isZombieMode", 0, 0);
    aID(aIB, aIC, "isContest", 0, 0);
    aID(aIB, aIC, "isReplay", 0, 0);
    aIG(aIB, aIC, "elo", 16, 2, 16383);
    aID(aIB, aIC, "colorsType", 0, 1);
    aID(aIB, aIC, "colorsPersonalized", 0, 1);
    aIG(aIB, aIC, "colorsData", 32, 512, 262143);
    aID(aIB, aIC, "selectableColor", 0, 1);
    aIG(aIB, aIC, "teamPlayerCount", 16, 9, 512);
    aID(aIB, aIC, "neutralBots", 0, 1);
    aID(aIB, aIC, "botDifficultyType", 0, 3);
    aID(aIB, aIC, "botDifficultyValue", 0, 15);
    aIG(aIB, aIC, "botDifficultyTeam", 8, 9, 15);
    aIG(aIB, aIC, "botDifficultyData", 8, 512, 15);
    aID(aIB, aIC, "spawningType", 0, 2);
    aID(aIB, aIC, "spawningSeed", 0, 16383);
    aIG(aIB, aIC, "spawningData", 16, 1024, 4095);
    aID(aIB, aIC, "selectableSpawn", 0, 1);
    aID(aIB, aIC, "playerNamesType", 0, 2);
    aIH(aIB, aIC, "playerNamesData", 512, 20);
    aID(aIB, aIC, "selectableName", 0, 1);
    aID(aIB, aIC, "aIncomeType", 0, 2);
    aID(aIB, aIC, "aIncomeValue", 0, 255);
    aIG(aIB, aIC, "aIncomeData", 8, 512, 255);
    aID(aIB, aIC, "tIncomeType", 0, 2);
    aID(aIB, aIC, "tIncomeValue", 0, 255);
    aIG(aIB, aIC, "tIncomeData", 8, 512, 255);
    aID(aIB, aIC, "iIncomeType", 0, 2);
    aID(aIB, aIC, "iIncomeValue", 0, 255);
    aIG(aIB, aIC, "iIncomeData", 8, 512, 255);
    aID(aIB, aIC, "sResourcesType", 0, 2);
    aID(aIB, aIC, "sResourcesValue", 0, 2047);
    aIG(aIB, aIC, "sResourcesData", 16, 512, 2047);
  }
  function aID(aIB, aIC, gM, min, max) {
    var fF = aIB[gM];
    aIC[gM] = aII(fF) && fF >= min && fF <= max ? Math.floor(fF) : aIC[gM];
  }
  function aII(fF) {
    return typeof fF === "number";
  }
  function aIE(aIB, aIC, gM, max) {
    var qI = aIB[gM];
    aIC[gM] = aIJ(qI) ? qI.slice(0, max) : aIC[gM];
  }
  function aIF(aIB, aIC, gM) {
    if (aIC.mapType !== 2) {
      return;
    }
    var qI = aIB[gM];
    if (!aIJ(qI) || qI.length <= 20) {
      aIC.mapType = 0;
      return;
    }
    var aHv = new Image();
    aHv.onload = function () {
      b9.aIK.aIL(aHv, 1);
      aHv.onload = null;
      aHv = null;
    };
    aHv.src = qI;
  }
  function aIJ(qI) {
    return typeof qI === "string";
  }
  function aIG(aIB, aIC, gM, aIM, size, max) {
    var a2j = aIB[gM];
    if (!Array.isArray(a2j)) {
      return;
    }
    var a2k = aIM === 8 ? new Uint8Array(size) : aIM === 16 ? new Uint16Array(size) : new Uint32Array(size);
    var en = Math.min(a2j.length, size);
    for (var aB = 0; aB < en; aB++) {
      a2k[aB] = bL.hv(a2j[aB], 0, max);
    }
    aIC[gM] = a2k;
  }
  function aIH(aIB, aIC, gM, size, max) {
    var a2j = aIB[gM];
    if (!Array.isArray(a2j)) {
      return;
    }
    var a2k = new Array(size);
    var en = Math.min(a2j.length, size);
    for (var aB = 0; aB < en; aB++) {
      a2k[aB] = aIJ(a2j[aB]) ? a2j[aB].slice(0, max) : "";
    }
    aIC[gM] = a2k;
  }
}
function cY() {
  var aIN;
  var aIO;
  var size;
  var jJ;
  var hW;
  var aIP;
  this.dd = function () {
    aIN = aD.kA < 16 ? 12 : 8;
    aIO = 4;
    var en = aIQ(aD.ek);
    size = new Uint8Array(aD.ek);
    jJ = new Uint16Array(en);
    hW = new Uint32Array(en);
    aIP = new Uint8Array(en);
  };
  this.q9 = function (a7v, aIR) {
    var aIS = this.gq(a7v, aIR);
    this.go(a7v, aIR, 0);
    var aIT = bA.g9.gC(a7v, aIS);
    bd.gD(a7v, aIS - aIT, 12);
  };
  function aIQ(player) {
    if (player < aD.kA) {
      return aIN * player;
    } else {
      return aIN * aD.kA + aIO * (player - aD.kA);
    }
  }
  this.clear = function (player) {
    size[player] = 0;
  };
  this.aHi = function (player, aIR) {
    var aB = aIU(player, aIR);
    if (aB === size[player]) {
      return;
    }
    var aIV = hW[aIQ(player) + aB];
    this.gE(player, aB);
    this.jG(player, aIV, aD.ek);
  };
  function aIU(player, aIR) {
    var aB;
    var l5 = aIQ(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (jJ[l5 + aB] === aIR) {
        return aB;
      }
    }
    return size[player];
  }
  this.jV = function (player, aIR) {
    var aB;
    var l5 = aIQ(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (jJ[l5 + aB] === aIR) {
        return true;
      }
    }
    return false;
  };
  this.jo = function (player) {
    if (player < aD.kA) {
      return size[player] < aIN;
    } else {
      return size[player] < aIO;
    }
  };
  this.fu = function (player) {
    return size[player];
  };
  this.fz = function (player, aB) {
    return jJ[aIQ(player) + aB];
  };
  this.g0 = function (player, aB) {
    return hW[aIQ(player) + aB];
  };
  this.gq = function (player, aIR) {
    var aB;
    var l5 = aIQ(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (jJ[l5 + aB] === aIR) {
        return hW[l5 + aB];
      }
    }
    return 0;
  };
  this.aHZ = function (player) {
    var aB;
    var l5 = aIQ(player);
    var fF = 0;
    for (aB = size[player] - 1; aB >= 0; aB--) {
      fF += hW[l5 + aB];
    }
    return fF;
  };
  this.go = function (player, aIR, aIV) {
    var aB;
    var l5 = aIQ(player);
    for (aB = size[player] - 1; aB >= 0; aB--) {
      if (jJ[l5 + aB] === aIR) {
        hW[l5 + aB] = aIV;
      }
    }
  };
  this.gZ = function (player, aB, aIV) {
    hW[aIQ(player) + aB] = Math.max(aIV, 0);
  };
  this.ga = function (player, aB) {
    aIP[aIQ(player) + aB] = 0;
  };
  this.g1 = function (player, aB) {
    return aIP[aIQ(player) + aB];
  };
  this.jG = function (player, aIV, aIR) {
    ao.iv.jm[player] = ao.iv.jm[aIR] = 8;
    if (bA.g9.a3X(aIR)) {
      bd.mf[6 - bA.g9.jX(player)]++;
    }
    var l5 = aIQ(player);
    for (var aB = size[player] - 1; aB >= 0; aB--) {
      if (jJ[l5 + aB] === aIR) {
        hW[l5 + aB] += aIV;
        hW[l5 + aB] = hW[l5 + aB] > aD.a3f ? aD.a3f : hW[l5 + aB];
        return;
      }
    }
    jJ[l5 + size[player]] = aIR;
    hW[l5 + size[player]] = aIV;
    aIP[l5 + size[player]] = 1;
    size[player]++;
    if (aIR === aD.eX) {
      aN.a0L(player, 5);
    } else if (player < aD.kA && player === aD.eX) {
      af.a6b(aIR);
    }
  };
  this.gE = function (player, e8) {
    var f6;
    var l5;
    if (size[player] === 0) {
      return;
    }
    l5 = aIQ(player);
    size[player]--;
    for (f6 = e8; f6 < size[player]; f6++) {
      jJ[l5 + f6] = jJ[l5 + f6 + 1];
      hW[l5 + f6] = hW[l5 + f6 + 1];
      aIP[l5 + f6] = aIP[l5 + f6 + 1];
    }
  };
  this.aHV = function (player) {
    var aB;
    var f6;
    var l5;
    var aHf = [];
    for (aB = al.kg - 1; aB >= 0; aB--) {
      l5 = aIQ(al.kl[aB]);
      for (f6 = size[al.kl[aB]] - 1; f6 >= 0; f6--) {
        if (jJ[l5 + f6] === player) {
          aHf.push(al.kl[aB]);
          break;
        }
      }
    }
    return aHf;
  };
}
function cZ() {
  this.aA2 = 0;
  var aIW;
  this.dk = function () {
    var en = aD.ek;
    aIW = new Uint16Array(en);
    var jQ = 100;
    for (var aB = 0; aB < en; aB++) {
      aIW[aB] = jQ + aIX(bL.du(aB * 25600, en - 4), 9);
    }
  };
  this.dd = function () {
    this.aA2 = 0;
    if (aD.data.iIncomeType === 0) {
      this.aBO = function (player) {
        return aIY(player);
      };
    } else if (aD.data.iIncomeType === 1) {
      this.aBO = function (player) {
        return bL.du(aD.data.iIncomeValue * aIY(player), 64);
      };
    } else {
      this.aBO = function (player) {
        return bL.du(aD.data.iIncomeData[player] * aIY(player), 64);
      };
    }
  };
  this.j3 = function () {
    if (bf.k7() % 10 !== 9) {
      return;
    }
    aIZ();
  };
  function aIY(player) {
    if (bA.g9.jX(player) && player < aD.kA) {
      return 0;
    }
    var e7 = aIW[bL.du((aD.ek - 1) * ag.gb[player], aD.ju)];
    if (bf.k7() < 1920) {
      e7 = Math.max(bL.du((13440 - bf.k7() * 6) * 100, 1920), e7);
    }
    var jp = ae.jq(player);
    if (ag.gp[player] > jp) {
      e7 -= bL.du(e7 * 2 * (ag.gp[player] - jp), jp);
    }
    return Math.min(Math.max(e7, 0), 700);
  }
  this.jq = function (player) {
    return Math.min(ag.gb[player] * 100, aD.a4W);
  };
  this.p8 = function (player, p9) {
    bq.pV(player, p9, bO.fK[0], 0);
    bA.g9.gC(p9, bO.fK[0]);
    bd.pW(player, p9);
    af.aIa(player, bO.fK[0] + bO.fK[1]);
    af.pX(p9, bO.fK[0]);
    bA.g9.mK(player);
  };
  this.aIb = function () {
    var en = al.kg;
    var zx = al.kl;
    var l5 = 0;
    var a3d = ag.gp;
    for (var aB = 0; aB < en; aB++) {
      l5 += a3d[zx[aB]];
    }
    return l5;
  };
  this.aIc = function (aId) {
    var en = al.kg;
    var zx = al.kl;
    var l5 = 0;
    var a3d = ag.gp;
    var el = bg.el;
    var gL;
    for (var aB = 0; aB < en; aB++) {
      gL = zx[aB];
      if (el[gL] === aId) {
        l5 += a3d[gL];
      }
    }
    return l5;
  };
  function aIZ() {
    ae.aA2 = 0;
    aIe();
    aIf();
    if (bf.k7() % 100 !== 99) {
      return;
    }
    aIg();
  }
  function aIe() {
    aIh();
    var kl = al.kl;
    var gp = ag.gp;
    for (var aB = al.kg - 1; aB >= 0; aB--) {
      var gL = kl[aB];
      var aIi = bL.du(ae.aBO(gL) * gp[gL], 10000);
      bA.g9.gC(gL, Math.max(aIi, 1));
    }
    aIj(9);
  }
  function aIg() {
    aIh();
    if (aD.data.tIncomeType === 0) {
      aIk(32);
    } else if (aD.data.tIncomeType === 1) {
      aIk(aD.data.tIncomeValue);
    } else {
      aIl();
    }
    aIj(8);
  }
  function aIk(nL) {
    var gb = ag.gb;
    var kl = al.kl;
    for (var aB = al.kg - 1; aB >= 0; aB--) {
      var gL = kl[aB];
      bA.g9.gC(gL, bL.du(nL * gb[gL], 32));
    }
  }
  function aIl() {
    var gb = ag.gb;
    var kl = al.kl;
    var nL = aD.data.tIncomeData;
    for (var aB = al.kg - 1; aB >= 0; aB--) {
      var gL = kl[aB];
      bA.g9.gC(gL, bL.du(nL[gL] * gb[gL], 32));
    }
  }
  function aIf() {
    if (aD.data.aIncomeType === 0) {
      return;
    }
    aIh();
    if (aD.data.aIncomeType === 1) {
      aIm();
    } else if (aD.data.aIncomeType === 2) {
      aIn();
    }
    aIj(18);
  }
  function aIm() {
    var gb = ag.gb;
    var kl = al.kl;
    var nL = aD.data.aIncomeValue;
    for (var aB = al.kg - 1; aB >= 0; aB--) {
      var gL = kl[aB];
      bA.g9.gC(gL, bL.du(nL * gb[gL], 128));
    }
  }
  function aIn() {
    var gb = ag.gb;
    var kl = al.kl;
    var nL = aD.data.aIncomeData;
    for (var aB = al.kg - 1; aB >= 0; aB--) {
      var gL = kl[aB];
      bA.g9.gC(gL, bL.du(nL[gL] * gb[gL], 128));
    }
  }
  function aIh() {
    var wk = aD.eX;
    bO.fJ[0] = ag.gp[wk] - ag.a3c[wk];
  }
  function aIj(e8) {
    var wk = aD.eX;
    var fF = ag.gp[wk] - ag.a3c[wk] - bO.fJ[0];
    ae.aA2 += fF;
    bd.mf[e8] += fF;
  }
}
function cb() {
  var aIo;
  var aIp;
  var aIq;
  var aIr;
  var aIs;
  var aIt;
  var aIu;
  var aIv;
  var aIw;
  var aIx;
  var aIy;
  var aIz;
  var aJ0;
  var aJ1;
  var aJ2;
  var aJ3;
  var aJ4;
  var aJ5;
  var aJ6 = null;
  var aJ7;
  var aJ8;
  var aCX;
  var aJ9;
  var aJA;
  var aJB = 0.1;
  var aJC = 0;
  var aJD = false;
  var aJE = new Float32Array(4);
  var aJF = 0;
  var aJG = true;
  var aJH;
  var aJI;
  var aAW = 400;
  var aJJ = 0;
  this.dd = function () {
    aJJ = bj.eK.data[7].value || aD.kS === 8;
    aAW = bj.eK.data[11].value;
    aAW = aAW === 0 ? 280 : aAW === 1 ? 187 : 112;
    aJ5 = false;
    aJ1 = 0.88;
    aIy = 0.5;
    aIz = 1.8;
    aJ0 = 12 - bj.eK.data[9].value * 3;
    aIo = 0;
    aIp = 0;
    aIq = new Uint16Array(aD.ek);
    aIr = new Uint16Array(aD.ek);
    aIs = new Uint16Array(aD.ek);
    aIt = new Uint16Array(aD.ek);
    aIu = new Float32Array(aD.ek);
    aIv = new Float32Array(aD.ek);
    aJ8 = new Uint16Array(aD.ek * 2);
    aCX = new Uint8Array(aD.ek * 5);
    aJH = new Uint8Array(aD.ek);
    aJI = new Uint8Array(aD.ek);
    if (!aJG) {
      aJ6 = aJ6 ? aJ6 : document.createElement("canvas");
    }
    qe();
    aJ2 = 0;
    aJ3 = 0;
    aJ4 = 1;
    if (aJJ) {
      aJK();
      aJL();
    } else {
      aJK();
    }
    aJM();
  };
  this.aIa = function (gL, a56) {
    if (a56 > ag.gb[gL] * 18) {
      aJI[gL] = 6;
      ac.a8S[gL] = 2 + ac.a8S[gL] % 2;
    } else {
      aJH[gL] = 4;
      if (ac.a8S[gL] < 2 || ac.a8S[gL] > 3) {
        ac.a8S[gL] = 6 + ac.a8S[gL] % 2;
      }
    }
  };
  this.pX = function (gL, a56) {
    if (a56 > ag.gb[gL] * 6) {
      aJI[gL] = 6;
      ac.a8S[gL] = 4 + ac.a8S[gL] % 2;
    } else {
      aJH[gL] = 4;
      if (ac.a8S[gL] < 4 || ac.a8S[gL] > 5) {
        ac.a8S[gL] = 8 + ac.a8S[gL] % 2;
      }
    }
  };
  function aJN() {
    aJ6.width = h.i;
    aJ6.height = h.j;
    aJ7 = aJ6.getContext("2d", {
      alpha: true
    });
    bA.qb.textAlign(aJ7, 1);
    bA.qb.textBaseline(aJ7, 1);
    aJ7.imageSmoothingEnabled = true;
  }
  this.resize = function () {
    qe();
    if (aJG) {
      return;
    }
    aJO(aJ7);
  };
  function qe() {
    aIw = Math.floor(h.hx * 1);
    aIx = Math.floor(aIw * 0.5);
  }
  function aJK() {
    var aB;
    var aJP;
    uk.font = bA.qb.sQ(1, aIy * 100);
    aJP = 80 / Math.floor(uk.measureText(bA.ra.zQ(aD.a3f)).width);
    uk.font = bA.qb.sQ(1, 100);
    for (aB = aD.ek - 1; aB >= 0; aB--) {
      aIv[aB] = 100 / Math.floor(uk.measureText(ag.yc[aB]).width);
      aIu[aB] = Math.min(aJP, aIv[aB]);
    }
  }
  function aJL() {
    var aB;
    var aJP;
    uk.font = bA.qb.sQ(1, 100);
    aJP = 100 / Math.floor(uk.measureText("900 000").width);
    for (aB = aD.ek - 1; aB >= 0; aB--) {
      aIu[aB] = Math.min(aJP, aIv[aB] * 2);
    }
    aJF = aJP;
    aJE[0] = 100 / (aJP * Math.floor(uk.measureText("5 000 000").width));
    aJE[1] = 100 / (aJP * Math.floor(uk.measureText("50 000 000").width));
    aJE[2] = 100 / (aJP * Math.floor(uk.measureText("500 000 000").width));
    aJE[3] = 100 / (aJP * Math.floor(uk.measureText("1 000 000 000").width));
  }
  function aJQ(aB) {
    if (!aJJ) {
      return 1;
    }
    var wS = ag.gp[aB];
    if (wS < 1000000) {
      return 1;
    }
    if (wS < 10000000) {
      return aJE[0];
    }
    return aJE[Math.min(Math.floor(Math.log10(wS)) - 6, 3)];
  }
  function aJM() {
    var aB;
    for (aB = aD.ek - 1; aB >= 0; aB--) {
      if (ag.gb[aB] < 12) {
        aIq[aB] = ag.ie[aB] + 1;
        aIr[aB] = ag.ih[aB] + 1;
        aIs[aB] = 1;
        aIt[aB] = 1;
      } else {
        aIq[aB] = ag.ie[aB];
        aIr[aB] = ag.ih[aB] + 1;
        aIs[aB] = 4;
        aIt[aB] = 2;
      }
    }
    if (aD.hB) {
      for (aB = 0; aB < aD.kA; aB++) {
        aIs[aB] = 0;
      }
    }
    aJ9 = ab.get(4).width;
    aJA = ab.get(4).height;
  }
  this.a4S = function () {
    for (var aB = 0; aB < aD.kA; aB++) {
      if (ag.ig[aB] - ag.ie[aB] !== 3 || ag.ii[aB] - ag.ih[aB] !== 3) {
        aIq[aB] = ag.ie[aB] + (ag.ig[aB] !== ag.ie[aB] ? 1 : 0);
        aIr[aB] = ag.ih[aB];
        aIs[aB] = 1;
        aIt[aB] = 1;
      } else {
        aIq[aB] = ag.ie[aB];
        aIr[aB] = ag.ih[aB] + 1;
        aIs[aB] = 4;
        aIt[aB] = 2;
      }
    }
  };
  this.qA = function (player, e8, aJR) {
    aJS(player, e8, aJR);
    if (aD.a09 === 2) {
      this.mV(true);
    }
  };
  function aJS(player, e8, aJR) {
    var hf = player + e8 * aD.ek;
    if (e8 === 0) {
      if (aJ8[hf] === aJR && aCX[hf] > 0) {
        aCX[hf] = 0;
        return;
      }
      aJ8[hf] = aJR;
      aCX[hf] = aj.rr.zH(aJR) ? 255 : 64;
      return;
    }
    if (e8 === 1) {
      aCX[hf] = 64;
      aJ8[hf] = aJR;
    } else {
      aCX[hf] = aJR;
    }
  }
  this.uj = function () {
    if (aJG) {
      aJO(uk);
      return;
    }
    if (!aJ5) {
      return;
    }
    if (aJ4 !== 1) {
      uk.imageSmoothingEnabled = true;
      uk.setTransform(aJ4, 0, 0, aJ4, 0, 0);
      uk.drawImage(aJ6, -aJ2 / aJ4, -aJ3 / aJ4);
      uk.setTransform(1, 0, 0, 1, 0, 0);
      uk.imageSmoothingEnabled = false;
    } else {
      uk.drawImage(aJ6, -aJ2, -aJ3);
    }
  };
  this.a9F = function (i7, iA) {
    aJ2 += i7;
    aJ3 += iA;
  };
  this.a1d = function (i7, iA) {
    af.a9F(i7, iA);
  };
  this.zoom = function (a2W, lP, lQ) {
    aJ4 *= a2W;
    aJ2 = (aJ2 + lP) * a2W - lP;
    aJ3 = (aJ3 + lQ) * a2W - lQ;
  };
  function aJT() {
    if (aJ4 !== 1 || aJ2 !== 0 || aJ3 !== 0) {
      return aAW;
    }
    if (aD.a4w() || aD.hB || aD.a09 === 2) {
      return 1000;
    }
    return aAW;
  }
  this.mV = function (bu) {
    if (aJG) {
      return false;
    }
    if (!aJD && !bu && bf.eM < aJC + aJT()) {
      return false;
    }
    aJD = false;
    aJC = bf.eM;
    aJO(aJ7);
    return true;
  };
  this.aJU = function (aB) {
    return aJQ(aB) * aIu[aB];
  };
  this.aJV = function (player) {
    return aIu[player];
  };
  function aJO(hp) {
    aJ5 = false;
    aJ4 = 1;
    aJ2 = aJ3 = 0;
    if (!aJG) { } else {
      bA.qb.textAlign(hp, 1);
      bA.qb.textBaseline(hp, 1);
    }
    var n9 = iO / hy;
    var nA = iP / hy;
    var nM = (h.i + iO) / hy;
    var nN = (h.j + iP) / hy;
    var aJW;
    var aJX;
    var aB;
    var aJY;
    var fontSize;
    var aJZ;
    var aJa = ag.mj[aD.eX] !== 0 && !bA.g9.jX(aD.eX);
    for (var f6 = al.kg - 1; f6 >= 0; f6--) {
      aB = al.kl[f6];
      fontSize = Math.floor(aJ1 * hy * aJQ(aB) * aIu[aB] * aIs[aB]);
      if (fontSize < aJ0 || fontSize >= aIw) {
        continue;
      }
      if (!(aIq[aB] + aIs[aB] > n9) || !(aIq[aB] < nM) || !(aIr[aB] + aIt[aB] > nA) || !(aIr[aB] < nN)) {
        continue;
      }
      aJW = Math.floor(h.i * (aIq[aB] + aIs[aB] / 2 - n9) / (nM - n9));
      aJX = Math.floor(h.j * (aIr[aB] + aIt[aB] / 2 - nA) / (nN - nA) - fontSize * 0.1);
      aJY = ac.a8S[aB];
      hp.font = bA.qb.sQ(ag.a3T[aB] === 1 ? 4 : 1, fontSize);
      hp.fillStyle = aJb(fontSize, aJY % 2);
      if (aJJ) {
        aJc(hp, aB, fontSize, aJW, aJX, aJY);
      } else {
        aJd(aB, fontSize, aJW, aJX, hp);
      }
      aJ5 = true;
      if (aCX[aB] > 0) {
        aJe(aJW, aJX, fontSize, aB, hp);
      } else if (jv[aB] === 0) {
        aJf(aJW, aJX, fontSize, 0, 0, hp);
      }
      if (aJa && (aCX[aB + aD.ek] > 0 || aCX[aB + aD.ek * 2] > 0 || aCX[aB + aD.ek * 3] > 0 || aCX[aB + aD.ek * 4] > 0)) {
        aJg(aJW, aJX, fontSize, aB, hp);
      }
      aJZ = aIy * fontSize;
      if (aJZ < aJ0) {
        continue;
      }
      hp.font = bA.qb.sQ(1, aJZ);
      aJX += Math.floor(fontSize * 0.78);
      if (aJJ) {
        aJd(aB, aJZ, aJW, aJX, hp);
      } else {
        aJc(hp, aB, aJZ, aJW, aJX, aJY);
      }
    }
  }
  function aJd(aB, fontSize, eu, ew, hp) {
    hp.fillText(ag.yc[aB], eu, ew);
    if (aB < aD.kA && ag.a3T[aB] !== 2) {
      return;
    }
    var aJh = fontSize / aIv[aB];
    hp.fillRect(eu - aJh * 0.5, ew + bA.qb.zA * fontSize, aJh, Math.max(1, fontSize * 0.1));
  }
  function aJc(hp, aB, fontSize, aJW, aJX, aJY) {
    var aJi = bA.ra.zQ(ag.gp[aB]);
    if (aJY >> 1 & 1) {
      hp.lineWidth = fontSize * 0.05;
      hp.strokeStyle = aJb(fontSize, aJY % 2);
      hp.strokeText(aJi, aJW, aJX);
      return;
    }
    if (aJY > 1) {
      hp.lineWidth = fontSize * 0.12;
      hp.strokeStyle = aJb(fontSize, aJY);
      hp.strokeText(aJi, aJW, aJX);
    }
    hp.fillText(aJi, aJW, aJX);
  }
  function aJf(aJW, aJX, fontSize, aJj, aJk, hp) {
    var a5t = fontSize * 0.95 / aJA;
    var xG = aJW - a5t * 0.5 * aJ9 + aJj * 0.8 * fontSize;
    var xH = aJX - a5t * 1.76 * aJA - (0.7 + (0.35 - bA.qb.zA)) * aJk * fontSize;
    hp.setTransform(a5t, 0, 0, a5t, xG, xH);
    hp.globalAlpha = aJl(fontSize);
    hp.drawImage(ab.get(4), 0, 0);
    hp.globalAlpha = 1;
    hp.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aJg(aJW, aJX, fontSize, aB, hp) {
    var f8;
    var gG = -1;
    for (f8 = 4; f8 >= 1; f8--) {
      if (aCX[aB + f8 * aD.ek] > 0) {
        gG++;
      }
    }
    for (f8 = 1; f8 < 5; f8++) {
      if (aCX[aB + f8 * aD.ek] > 0) {
        aJm(aJW, aJX, fontSize, f8, aB, gG, aCX[aB + f8 * aD.ek], hp);
        gG -= 2;
      }
    }
  }
  function aJe(aJW, aJX, fontSize, aB, hp) {
    if (jv[aB] === 0) {
      if (aj.rr.zH(aJ8[aB])) {
        aJn(aJW, aJX, fontSize, aB, aJ8[aB], hp);
        aJf(aJW, aJX, fontSize, 0, 0, hp);
      } else if (aj.rr.zJ(aJ8[aB])) {
        aJo(aJW, aJX, fontSize, aJ8[aB], 0, hp);
        aJf(aJW, aJX, fontSize, 0, 1, hp);
      } else {
        aJo(aJW, aJX, fontSize, aJ8[aB], 1, hp);
        aJf(aJW, aJX, fontSize, 1, 0, hp);
      }
    } else {
      aJo(aJW, aJX, fontSize, aJ8[aB], 0, hp);
    }
  }
  function aJo(aJW, aJX, fontSize, pK, aJj, hp) {
    var hj;
    var a5t;
    var xG;
    var xH;
    hp.globalAlpha = aJl(fontSize);
    if (aj.rr.zI(pK)) {
      hj = aj.wj.yj;
      a5t = fontSize * 1.1 / hj;
      xG = aJW - a5t * 0.5 * hj - aJj * 0.8 * fontSize;
      xH = aJX - a5t * 1.55 * hj;
      hp.setTransform(a5t, 0, 0, a5t, xG, xH);
      hp.drawImage(aj.wj.yi[pK - 1024 + aj.rr.yu], 0, 0);
      hp.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      xG = aJW - aJj * 0.8 * fontSize;
      xH = aJX - (1 + (0.35 - bA.qb.zA)) * fontSize;
      hp.fillText(aj.rr.z9(pK), xG, xH);
    }
    hp.globalAlpha = 1;
  }
  function aJm(aJW, aJX, fontSize, f8, aB, aJj, dt, hp) {
    var a2x;
    if (f8 === 1) {
      var pK = aJ8[aB + aD.ek];
      if (aj.rr.zI(pK)) {
        a2x = aj.wj.yi[pK - 1024 + aj.rr.yu];
      } else {
        aJp(aJW, aJX, fontSize, pK, aJj, hp);
        return;
      }
    } else if (f8 === 2) {
      a2x = aL.a5O()[4].canvas[+(dt < 255)];
    } else if (f8 === 3) {
      a2x = aL.a5O()[5].canvas[0];
    } else {
      a2x = aL.a5O()[6].canvas[0];
    }
    var hj = aj.wj.yj;
    var a5t = fontSize * 0.8 / hj;
    var xG = aJW - a5t * 0.5 * hj - aJj * 0.534 * fontSize;
    var xH = aJX + a5t * 1.4 * hj;
    hp.setTransform(a5t, 0, 0, a5t, xG, xH);
    hp.globalAlpha = aJl(fontSize);
    hp.drawImage(a2x, 0, 0);
    hp.globalAlpha = 1;
    hp.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aJp(aJW, aJX, fontSize, pK, aJj, hp) {
    hp.globalAlpha = aJl(fontSize);
    var xG = aJW - aJj * 0.534 * fontSize;
    var xH = aJX + fontSize * 1.59;
    hp.font = bA.qb.sQ(0, fontSize * 0.785);
    hp.fillText(aj.rr.z9(pK), xG, xH);
    hp.globalAlpha = 1;
  }
  function aJn(aJW, aJX, fontSize, player, pK, hp) {
    var xH = aJX;
    hp.globalAlpha = aJl(fontSize);
    var ho = aJQ(player) * (aJJ ? aJF : aIv[player]);
    var xG = aJW - fontSize * 0.5 / ho - fontSize * 0.9;
    for (var f7 = 0; f7 < 2; f7++) {
      hp.fillText(aj.rr.z9(pK), xG, xH);
      xG = aJW + fontSize * 0.5 / ho + fontSize * 0.9;
    }
    hp.globalAlpha = 1;
  }
  function aJb(fontSize, aJY) {
    if (fontSize >= aIx && fontSize < aIw) {
      return bg.aJq[aJY] + aJl(fontSize).toFixed(3) + ")";
    }
    return bg.aJr[aJY];
  }
  function aJl(fontSize) {
    if (fontSize >= aIx && fontSize < aIw) {
      return 1 - (fontSize - aIx) / (aIw - aIx);
    }
    return 1;
  }
  this.j3 = function () {
    var aB;
    if (bf.k7() % 10 === 9) {
      aJD = aD.a4y() && !aD.a4w();
    }
    if (!aD.a4w() && ++aIp >= 4) {
      aJs();
    }
    var en = Math.floor(aJB * al.kg);
    en = en < 8 ? 8 : en;
    en = en > al.kg ? al.kg : en;
    var f6;
    for (aB = aIo + en - 1; aB >= aIo; aB--) {
      f6 = aB % al.kg;
      aJt(al.kl[f6]);
    }
    aIo += en;
    aIo %= al.kg;
  };
  this.mQ = function () {
    var aB;
    var gL;
    var zF;
    var zG;
    if (bf.k7() % 4 !== 1) {
      return;
    }
    for (aB = al.kg - 1; aB >= 0; aB--) {
      gL = al.kl[aB];
      if (ac.a8S[gL] < 2) {
        continue;
      }
      zF = Math.max(aJH[gL] - 1, 0);
      zG = Math.max(aJI[gL] - 1, 0);
      if (zF === zG) {
        if (zF === 0) {
          ac.a8S[gL] %= 2;
        }
      } else if (zG === 0 && ac.a8S[gL] < 6) {
        ac.a8S[gL] += 4;
      }
      aJH[gL] = zF;
      aJI[gL] = zG;
    }
  };
  this.a6b = function (player) {
    var aB = player + aD.ek * 2;
    var dt = aCX[aB];
    if (dt > 0) {
      aN.a0G(50, player);
      aCX[aB] = 0;
      return dt === 255;
    }
    return false;
  };
  this.a5d = function (player) {
    return aCX[player + aD.ek * 2] === 255;
  };
  function aJs() {
    var aB;
    var f6;
    var f7;
    aIp = 0;
    for (f7 = 4; f7 >= 1; f7--) {
      for (f6 = al.kg - 1; f6 >= 0; f6--) {
        aB = al.kl[f6] + f7 * aD.ek;
        if (aCX[aB] > 0 && aCX[aB] < 255) {
          aCX[aB]--;
        }
      }
    }
    if (aD.a09 === 2) {
      return;
    }
    for (f6 = al.kg - 1; f6 >= 0; f6--) {
      aB = al.kl[f6];
      if (aCX[aB] > 0 && aCX[aB] < 255) {
        aCX[aB]--;
      }
    }
  }
  function aJt(aB) {
    var ho = aJQ(aB) * aIu[aB];
    if (aIs[aB] > 0 && aJu(aB, aIq[aB], aIr[aB], aIs[aB], aIt[aB])) {
      if (!aJv(aB) && aJw(aB, ho)) {
        aJx(aB);
      }
    } else if (aJy(aB, ho)) {
      aJx(aB);
    } else {
      aJz(aB, ho);
    }
  }
  function aK0(ho, i) {
    return 1 + Math.floor(aIz * ho * i);
  }
  function aJv(aB) {
    var eR = false;
    var eu;
    var ew;
    var i;
    var j;
    for (var f7 = 0; f7 < 8; f7++) {
      i = aIs[aB] + 2;
      j = aIt[aB] + 2;
      if (i > ag.ig[aB] - ag.ie[aB] + 1 || j > ag.ii[aB] - ag.ih[aB] + 1) {
        return eR;
      }
      eu = aIq[aB] - 1;
      ew = aIr[aB] - 1;
      if (aJu(aB, eu, ew, i, j)) {
        aIq[aB] = eu;
        aIr[aB] = ew;
        aIs[aB] = i;
        aIt[aB] = j;
        eR = true;
      } else {
        return eR;
      }
    }
    return eR;
  }
  function aJw(aB, ho) {
    var eR = false;
    var eu;
    var ew;
    var i;
    var j;
    var aCg = aIs[aB];
    var nL = 1 + Math.floor(aCg * 0.02);
    for (var f7 = 1; f7 < 5; f7++) {
      i = aCg + f7 * nL;
      if (i > ag.ig[aB] - ag.ie[aB] + 1) {
        return eR;
      }
      j = aK0(ho, i);
      if (j > ag.ii[aB] - ag.ih[aB] + 1) {
        return eR;
      }
      eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i));
      ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j));
      if (aJu(aB, eu, ew, i, j)) {
        aIq[aB] = eu;
        aIr[aB] = ew;
        aIs[aB] = i;
        aIt[aB] = j;
        eR = true;
      }
    }
    return eR;
  }
  function aJy(aB, ho) {
    var eu = aIq[aB] + 1;
    var ew = aIr[aB] + 1;
    var i = aIs[aB] - 2;
    var j;
    while (true) {
      if (i < 1) {
        aIs[aB] = 0;
        break;
      }
      j = aK0(ho, i);
      if (aJu(aB, eu, ew, i, j)) {
        aIq[aB] = eu;
        aIr[aB] = ew;
        aIs[aB] = i;
        aIt[aB] = j;
        return true;
      }
      eu++;
      ew++;
      i -= 2;
    }
    return false;
  }
  function aJz(aB, ho) {
    var eu;
    var ew;
    var i;
    var j;
    var f7;
    var nR;
    var jQ = ag.ig[aB] - ag.ie[aB] + 1;
    var aK1 = Math.floor(jQ * 0.02);
    aK1 = aK1 < 1 ? 1 : aK1;
    nR = aK1 * -6;
    for (f7 = jQ; f7 >= nR; f7 -= aK1) {
      i = f7 > 0 ? f7 : 1;
      j = aK0(ho, i);
      eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i));
      ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j));
      if (aJu(aB, eu, ew, i, j)) {
        aIq[aB] = eu;
        aIr[aB] = ew;
        aIs[aB] = i;
        aIt[aB] = j;
        return;
      }
    }
  }
  function aJx(aB) {
    var f6;
    var left = aIq[aB];
    for (f6 = aIq[aB] - ag.ie[aB] - 1; f6 >= 0; f6--) {
      left--;
      if (!aK2(aB, left, aIr[aB], aIt[aB])) {
        left++;
        break;
      }
    }
    var right = aIq[aB];
    for (f6 = ag.ig[aB] - aIq[aB] - aIs[aB]; f6 >= 0; f6--) {
      right++;
      if (!aK2(aB, right + aIs[aB] - 1, aIr[aB], aIt[aB])) {
        right--;
        break;
      }
    }
    var eu = Math.floor((left + right) / 2);
    var top = aIr[aB];
    for (f6 = aIr[aB] - ag.ih[aB] - 1; f6 >= 0; f6--) {
      top--;
      if (!aK3(aB, eu, top, aIs[aB])) {
        top++;
        break;
      }
    }
    var bottom = aIr[aB];
    for (f6 = ag.ii[aB] - aIr[aB] - aIt[aB]; f6 >= 0; f6--) {
      bottom++;
      if (!aK3(aB, eu, bottom + aIt[aB] - 1, aIs[aB])) {
        bottom--;
        break;
      }
    }
    var ew = Math.floor((top + bottom) / 2);
    if (aJu(aB, eu, ew, aIs[aB], aIt[aB])) {
      aIq[aB] = eu;
      aIr[aB] = ew;
    }
  }
  function aJu(player, eu, ew, i, j) {
    var f8;
    var eq = Math.floor(i * 0.2);
    eq = eq < 1 ? 1 : eq;
    for (f8 = eu + i - 1; f8 >= eu; f8--) {
      if (!aK2(player, f8, ew, j)) {
        return false;
      }
    }
    eq = Math.floor(j * 0.25);
    eq = eq < 1 ? 1 : eq;
    for (f8 = ew + j - 1 - eq; f8 >= ew + eq; f8--) {
      if (!aK3(player, eu, f8, i)) {
        return false;
      }
    }
    return true;
  }
  function aK2(player, eu, ew, j) {
    return ac.y8(player, (ew * bS.ey + eu) * 4) && ac.y8(player, ((ew + j - 1) * bS.ey + eu) * 4);
  }
  function aK3(player, eu, ew, i) {
    return ac.y8(player, (ew * bS.ey + eu) * 4) && ac.y8(player, (ew * bS.ey + eu + i - 1) * 4);
  }
}
function cd() {
  var aK4;
  var aK5;
  var aK6;
  this.dd = function () {
    aK4 = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
    aK5 = "Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer".split(";");
    aK6 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
    var a6s = ["K ", " Y", "E ", " Z", " z", " s", "S "];
    var aDY = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
    for (var aB = aK4.length - 1; aB >= 0; aB--) {
      for (var f6 = a6s.length - 1; f6 >= 0; f6--) {
        aK4[aB] = aK4[aB].replace(a6s[f6], aDY[f6]);
      }
    }
  };
  this.a4i = function () {
    aK7();
  };
  this.a7 = function () {
    if (aD.kS === 9) {
      aK8();
      return;
    }
    if (aD.data.playerNamesType === 2) {
      aK9();
      return;
    }
    if (aD.data.playerNamesType === 1) {
      aKA();
      return;
    }
    aKB();
  };
  function aK7() {
    var en = aD.kA;
    var yc = ag.yc;
    var a0n = ag.a0n;
    var playerNamesData = aD.data.playerNamesData;
    if (!playerNamesData || playerNamesData.length < en) {
      for (var aB = 0; aB < en; aB++) {
        yc[aB] = a0n[aB] = "Player " + ay.jR(1000);
      }
      return;
    }
    for (aB = 0; aB < en; aB++) {
      yc[aB] = a0n[aB] = playerNamesData[aB];
    }
  }
  function aK8() {
    var e7 = ay.random();
    var aKC = aK6;
    var aKD = aK5;
    var hW = aE.hW;
    var en = aKC.length;
    var l5 = aD.data.teamPlayerCount[7];
    var yc = ag.yc;
    var a0n = ag.a0n;
    for (var aB = l5 - 1; aB >= aD.kA; aB--) {
      yc[aB] = a0n[aB] = aKC[(aB + e7) % en];
    }
    en = aKD.length - 1;
    for (aB = l5; aB < aD.ek; aB++) {
      yc[aB] = a0n[aB] = aKD[hW[aB] ? en : aB % en];
    }
  }
  function aK9() {
    var en = aD.ek;
    var yc = ag.yc;
    var a0n = ag.a0n;
    var playerNamesData = aD.data.playerNamesData;
    for (var aB = aD.kA; aB < en; aB++) {
      yc[aB] = a0n[aB] = playerNamesData[aB];
    }
  }
  function aKA() {
    var yc = ag.yc;
    var a0n = ag.a0n;
    for (var aB = aD.kA; aB < aD.ek; aB++) {
      yc[aB] = a0n[aB] = "Bot " + ay.jR(1000);
    }
  }
  function aKB() {
    var aKE = aK4;
    var en = aKE.length;
    var e7 = ay.random();
    var yc = ag.yc;
    var a0n = ag.a0n;
    for (var aB = aD.kA; aB < aD.ek; aB++) {
      yc[aB] = a0n[aB] = aKE[(aB + e7) % en];
    }
  }
}
function cw() {
  this.aKF = [];
  this.aKG = [];
  this.dd = function () {
    this.aKF = [];
    this.aKG = [];
  };
  this.j3 = function () {
    if (this.aKF.length >= 0) {
      this.aKH(this.aKF);
    }
    if (this.aKG.length >= 0) {
      this.aKH(this.aKG);
    }
  };
  this.aKH = function (g) {
    var aB;
    var f7 = -1;
    for (aB = g.length - 1; aB >= 0; aB--) {
      g[aB].eM--;
      if (g[aB].eM <= 0) {
        f7 = aB;
        break;
      }
    }
    for (aB = f7; aB >= 0; aB--) {
      g.shift();
    }
  };
  this.a5W = function (id, zx, aKI) {
    return this.f9(this.aKF, id, zx, aKI);
  };
  this.aKJ = function (id, zx, aKI) {
    return this.f9(this.aKG, id, zx, aKI);
  };
  this.f9 = function (g, id, zx, aKI) {
    if (aKK(g, id, zx)) {
      return false;
    }
    if (aKI) {
      aKL(g, id, zx);
    }
    return true;
  };
  function aKK(g, id, zx) {
    var aB;
    var hf;
    for (aB = zx.length - 1; aB >= 0; aB--) {
      for (hf = g.length - 1; hf >= 0; hf--) {
        if (g[hf].player === zx[aB] && id === g[hf].id) {
          return true;
        }
      }
    }
    return false;
  }
  function aKL(g, id, zx) {
    var aB;
    for (aB = zx.length - 1; aB >= 0; aB--) {
      g.push({
        player: zx[aB],
        id: id,
        eM: 384
      });
    }
  }
}
function cc() {
  this.a0n = new Array(aD.ek);
  this.yc = new Array(aD.ek);
  this.a3T = new Uint8Array(aD.ek);
  this.mj = new Uint8Array(aD.ek);
  this.ie = new Uint16Array(aD.ek);
  this.ih = new Uint16Array(aD.ek);
  this.ig = new Uint16Array(aD.ek);
  this.ii = new Uint16Array(aD.ek);
  this.gb = new Uint32Array(aD.ek);
  this.xi = new Uint32Array(aD.ek);
  this.gp = new Uint32Array(aD.ek);
  this.gF = null;
  this.gT = null;
  this.gU = null;
  this.fD = null;
  this.q0 = new Uint16Array(aD.ek);
  this.jC = new Uint16Array(aD.ek);
  this.jD = new Uint16Array(aD.ek);
  this.a0i = new Uint16Array(aD.ek);
  this.a0g = new Uint8Array(aD.ek);
  this.a3c = new Uint16Array(aD.ek);
  this.dd = function () {
    this.a0n.fill("");
    this.yc.fill("");
    this.a3T.fill(0);
    this.mj.fill(0);
    this.ie.fill(0);
    this.ih.fill(0);
    this.ig.fill(0);
    this.ii.fill(0);
    this.gb.fill(0);
    this.xi.fill(0);
    this.gp.fill(0);
    this.gF = new Array(aD.ek);
    this.gT = new Array(aD.ek);
    this.gU = new Array(aD.ek);
    this.fD = new Array(aD.ek);
    this.q0.fill(0);
    this.jC.fill(0);
    this.jD.fill(0);
    this.a0i.fill(0);
    this.a0g.fill(0);
    this.a3c.fill(0);
  };
}
function cu() {
  this.aD3 = function (player) {
    aG.mi(player);
    aD.a0B++;
    ag.a3T[player] = 2;
    ag.a0i[player] = bi.a0y.aHe();
    if (player === aD.eX) {
      aX.show(false, false);
      aW.aBA();
      bR.zu.a0e();
    }
    af.a6b(player);
  };
}
function cV() {
  this.kl = null;
  this.kg = 0;
  this.a4m = function () {
    var aB;
    this.kg = 0;
    for (aB = aD.ek - 1; aB >= 0; aB--) {
      if (ag.mj[aB] !== 0) {
        this.kg++;
      }
    }
    this.kl = new Uint16Array(this.kg);
    var en = 0;
    for (aB = 0; aB < aD.ek; aB++) {
      if (ag.mj[aB] !== 0) {
        this.kl[en++] = aB;
      }
    }
  };
  this.mP = function () {
    aKM();
    this.aKN();
  };
  this.aKN = function () {
    var mj = ag.mj;
    var l4 = this.kl;
    var aBs = this.kg;
    for (var aB = aBs - 1; aB >= 0; aB--) {
      if (mj[l4[aB]] === 0) {
        l4[aB] = l4[--aBs];
      }
    }
    this.kg = aBs;
  };
  function aKM() {
    var gb = ag.gb;
    var xi = ag.xi;
    var a0g = ag.a0g;
    var kl = al.kl;
    for (var aB = al.kg - 1; aB >= 0; aB--) {
      var gL = kl[aB];
      var dt = gb[gL];
      var l5 = xi[gL];
      if (dt <= bL.du(l5, 4)) {
        ak.dm(gL);
      } else if (dt >= l5) {
        xi[gL] = dt;
        if (dt >= 250) {
          a0g[gL] = 1;
        }
      } else {
        xi[gL] = l5 - Math.max(1, bL.du(l5 - dt, 1000));
      }
    }
  }
}
function cW() {
  var aKO = new Uint16Array(aD.ek);
  var aKP = 0;
  this.dd = function () {
    aKO.fill(0);
    aKP = 15;
  };
  this.hR = function (p9) {
    var player = aD.eX;
    if (!bA.g9.q2(player, p9)) {
      return false;
    }
    if (!bA.g9.pS(player, bA.g9.iM(player, aR.hH()), p9)) {
      return false;
    }
    if (!aKQ(p9, bO.fK[0])) {
      return false;
    }
    return true;
  };
  function aKQ(a6h, aKR) {
    if (aKS(a6h)) {
      return true;
    }
    if (aKO[a6h] + aKT(a6h, aKR) > aKP) {
      return false;
    }
    return true;
  }
  function aKT(a6h, aKR) {
    var f8 = bf.k7();
    if (f8 >= 3213) {
      return 4 + bL.du(aKR * 100, ae.jq(a6h));
    }
    var tE = 1 + bL.du(aD.ju, 300);
    if (f8 < 357) {
      return 2 + bL.du(aKR * 100, tE);
    }
    if (f8 < 714) {
      return 2 + bL.du(aKR * 100, tE * 4);
    }
    if (f8 < 1071) {
      return 2 + bL.du(aKR * 100, tE * 10);
    }
    if (f8 < 2142) {
      return 2 + bL.du(aKR * 100, tE * 30);
    }
    return 2 + bL.du(aKR * 100, tE * 100);
  }
  this.jG = function (a6h, aKR) {
    if (aKS(a6h)) {
      return true;
    }
    var fF = aKT(a6h, aKR);
    if (aKO[a6h] + fF > aKP) {
      return false;
    }
    aKO[a6h] += fF;
    return true;
  };
  this.j3 = function () {
    if (bf.k7() % 100 !== 99) {
      return;
    }
    if (bf.k7() < 1071) {
      aKP += 4;
    } else if (bf.k7() < 2142) {
      aKP += 6;
    } else if (bf.k7() < 3213) {
      aKP += 8;
    } else {
      aKP += 10;
    }
  };
  function aKS(a6h) {
    return aD.kU || aD.kS >= 7 || bf.k7() >= 4284 || bA.g9.jX(a6h);
  }
}
var a1c;
var uk;
function ce() {
  var aKU;
  this.kb = null;
  this.ka = 0;
  this.dd = function () {
    aKU = [];
    if (aD.kS !== 9) {
      return;
    }
    this.aKV();
  };
  this.aKV = function () {
    this.kb = [0, 0, 0, 0, 0, 0];
    this.ka = 0;
    var aKW = [256, 227, 170, 148, 100, 0, 0, 0];
    var aKX = [0, 8, 24, 30, 46, 70, 256, 333];
    var aKY = [0, 0, 3, 7, 14, 22, 256, 179];
    var j = aD.kA;
    for (var aB = 1; aB < aKW.length; aB++) {
      if (j <= aKX[aB]) {
        this.ka = aKW[aB - 1] - bL.du((j - aKX[aB - 1]) * (aKW[aB - 1] - aKW[aB]), aKX[aB] - aKX[aB - 1]);
        this.kb[5] = aKY[aB - 1] - bL.du((j - aKX[aB - 1]) * (aKY[aB - 1] - aKY[aB]), aKX[aB] - aKX[aB - 1]);
        this.kb[0] = aD.ek - j - this.ka - this.kb[5];
        break;
      }
    }
    aD.kW = aD.ek - aD.kA;
    aD.data.numberTeams = (aD.kA > 0) + (aD.kW > 0);
    aD.data.playerCount = aD.xE = aD.kA + aD.kW;
    aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kA + this.ka, aD.kW - this.ka]);
    aD.a4b.a4g();
  };
  this.aHl = function (player) {
    aKU.push({
      player: player,
      gG: 14 + ay.jR(20)
    });
  };
  this.j3 = function () {
    if (aD.kS !== 9) {
      return;
    }
    aKZ();
  };
  function aKZ() {
    for (var aB = aKU.length - 1; aB >= 0; aB--) {
      if (--aKU[aB].gG <= 0) {
        af.qA(aKU[aB].player, 0, aj.rr.yx + aj.rr.zB);
        aKU.splice(aB);
      }
    }
  }
}
function dB() {
  this.aKa = 24;
  this.aKb = 12;
  this.aHw = 4096;
  this.ey = 0;
  this.ez = 0;
  this.wg = null;
  this.wc = null;
  this.wd = null;
  this.wh = null;
  this.eT = 0;
  this.mapSeed = 0;
  this.we = false;
  this.wf = new aKc();
  this.wW = new aKd();
  this.a6y = new aKe();
  this.dd = function () {
    this.wW.dd();
  };
  this.a7 = function (map, aKf) {
    var wX;
    map = map % this.aKa;
    if (map === this.eT && (!aKg(this.eT) || aKf === this.mapSeed)) {
      return;
    }
    this.we = false;
    this.wf.aKh();
    ay.a4h(map);
    this.eT = map;
    this.mapSeed = aKf;
    if (aKg(map)) {
      bS.wW.wX[map].aKi = aKf;
    }
    if (!this.aDi(this.eT)) {
      aKj();
      return;
    }
    wX = bS.wW.wX[this.eT];
    this.ey = wX.i;
    this.ez = wX.j;
    ay.a4h(wX.aKi);
    aq.a7([this.ey, this.ez, wX.mo, wX.ml]);
    aKk();
    ap.aKl();
    aq.aKm();
  };
  this.aKn = function (map, aKf) {
    var fW = aKo();
    this.a7(map, aKf);
    this.wf.aKh();
    var fY = aKo();
    aKp(fW);
    return fY;
  };
  this.a52 = function (canvas) {
    if (!canvas) {
      return;
    }
    if (this.wg === canvas) {
      return;
    }
    this.ey = canvas.width;
    this.ez = canvas.height;
    this.wg = canvas;
    this.wc = this.wg.getContext("2d", {
      alpha: false
    });
    this.hm = this.wc.getImageData(0, 0, this.ey, this.ez);
    this.wh = this.hm.data;
    this.eT = this.aKq();
    this.mapSeed = 0;
    bS.wW.wX[this.eT].name = aD.data.mapName;
  };
  function aKo() {
    return {
      ey: bS.ey,
      ez: bS.ez,
      wg: bS.wg,
      wc: bS.wc,
      wd: bS.wd,
      wh: bS.wh,
      eT: bS.eT,
      mapSeed: bS.mapSeed,
      we: bS.we
    };
  }
  function aKp(fF) {
    bS.ey = fF.ey;
    bS.ez = fF.ez;
    bS.wg = fF.wg;
    bS.wc = fF.wc;
    bS.wd = fF.wd;
    bS.wh = fF.wh;
    bS.eT = fF.eT;
    bS.mapSeed = fF.mapSeed;
    bS.we = fF.we;
  }
  this.eS = function (aB) {
    return aB === 3 || aB === 7 || aB === 9 || aB === 21 || aB === this.aKq();
  };
  this.aKr = function (aB) {
    return aB === 2 || aB === 7 || aB === 9 || aB === 20;
  };
  this.aKs = function (aB) {
    return aB === 1;
  };
  this.aKq = function () {
    return this.aKa;
  };
  this.aDi = function (aB) {
    return this.wW.wX[aB].aKt === undefined;
  };
  function aKg(aB) {
    return aB !== 1 && !!bS.aDi(aB) && aB !== bS.aKq();
  }
  this.a51 = function (qT) {
    if (qT.mapType === 0) {
      if (qT.mapProceduralIndex < 10) {
        return qT.mapProceduralIndex;
      } else {
        return 10 + qT.mapProceduralIndex;
      }
    } else if (qT.mapType === 1) {
      if (qT.mapRealisticIndex >= 10) {
        return 22 + qT.mapRealisticIndex - 10;
      } else {
        return qT.mapRealisticIndex + 10;
      }
    }
  };
  this.aDj = function (qT, aKu) {
    if (qT.mapType === 0) {
      qT.mapProceduralIndex = aKu < 10 ? aKu : aKu - 10;
    } else if (qT.mapType === 1) {
      qT.mapRealisticIndex = aKu - (aKu >= 22 ? 12 : 10);
    }
  };
}
function aKc() {
  this.a9R = -1;
  this.a1B = 0;
  this.aKv = 0;
  this.aKw = 8;
  this.aKx = 32;
  this.aKy = 8;
  this.aKz = 32;
  this.aL0 = [0, 0];
  this.a8S = [0, 0, 0, 0];
  this.iX = null;
  this.aL1 = true;
  this.aL2 = false;
  this.aKh = function () {
    if (this.a9R !== -1) {
      clearTimeout(this.a9R);
    }
    this.a9R = -1;
    this.iX = null;
    aq.aKm();
  };
  this.dd = function () {
    if (aa.a1K() === 7 || this.aL2) {
      return;
    }
    this.aL1 = true;
    this.a1B = 0;
    this.aKv = 1;
    this.aL0 = [bS.wW.wX[bS.eT].wy[0], bS.wW.wX[bS.eT].wz[0]];
    this.a8S = [bS.wW.wX[bS.eT].aKt[3], bS.wW.wX[bS.eT].aKt[4], bS.wW.wX[bS.eT].aKt[5], bS.wW.wX[bS.eT].aKt[6]];
    this.aKw = bS.wW.wX[bS.eT].aKt[7];
    this.aKx = bS.wW.wX[bS.eT].aKt[8];
    this.aKy = bS.wW.wX[bS.eT].aKt[9];
    this.aKz = bS.wW.wX[bS.eT].aKt[10];
    if (this.aL1) {
      this.a9R = setTimeout(aL3, 16);
    } else {
      this.j3();
    }
  };
  function aL3() {
    bS.wf.j3();
  }
  this.j3 = function () {
    if (aa.a1K() === 8 && aH.n1()) {
      this.a9R = setTimeout(aL3, 16);
      return;
    }
    if (this.a1B === 0) {
      var aKi = ay.aL4();
      ay.a4h(bS.wW.wX[bS.eT].aKt[2]);
      aq.a7([bS.ey, bS.ez, bS.wW.wX[bS.eT].aKt[0], bS.wW.wX[bS.eT].aKt[1]]);
      ay.a4h(aKi);
      this.iX = aq.aL5();
      this.a1B++;
      if (this.aL1) {
        this.a9R = setTimeout(aL3, 16);
        return;
      }
    }
    var j = !this.aL1 ? 1000000 : 10;
    j = bS.ez - this.aKv - 1 < j ? bS.ez - this.aKv - 1 : j;
    var xv = this.aKv + j;
    var gL;
    var eZ;
    for (var ew = this.aKv; ew < xv; ew++) {
      for (var eu = 1; eu < bS.ey - 1; eu++) {
        eZ = eu + ew * bS.ey;
        gL = eZ * 4;
        if (i1(gL)) {
          this.aL6(gL, eZ, 1);
        } else {
          this.aL6(gL, eZ, 0);
          if (y1(eu, ew, gL)) {
            this.aL7(eu, ew);
          }
        }
      }
    }
    this.aKv = xv;
    if (this.aKv >= bS.ez - 1) {
      bS.wc.putImageData(bS.wd, 0, 0, 1, 1, bS.ey - 2, bS.ez - 2);
      bf.dl = true;
      this.aKh();
      return;
    } else if (this.aL1) {
      this.a9R = setTimeout(aL3, 16);
    }
    return;
  };
  this.aL6 = function (gL, eZ, e8) {
    var aL8 = Math.floor(this.aL0[e8] + this.a8S[e8] * this.iX[eZ] / 10000) - bS.wh[gL];
    aL9(gL, aL8);
  };
  this.aLA = function (gL, e7, aLB, e8, a8S) {
    var aL8 = Math.floor(this.aL0[e8] + (1 - e7 / aLB) * a8S) - bS.wh[gL];
    aL9(gL, aL8);
  };
  function aL9(gL, aL8) {
    if (aL8 > 0) {
      bS.wh[gL] += aL8;
      bS.wh[gL + 1] += aL8;
      bS.wh[gL + 2] += aL8;
    }
  }
  this.aL7 = function (lP, lQ) {
    var gL;
    var e7;
    var aLB;
    var a9H = lP - this.aKx;
    var aLC = lQ - this.aKx;
    var xw = lP + this.aKx;
    var xv = lQ + this.aKx;
    a9H = a9H < 1 ? 1 : a9H;
    aLC = aLC < 1 ? 1 : aLC;
    xw = xw > bS.ey - 2 ? bS.ey - 2 : xw;
    xv = xv > bS.ez - 2 ? bS.ez - 2 : xv;
    for (var ew = aLC; ew <= xv; ew++) {
      for (var eu = a9H; eu <= xw; eu++) {
        gL = (eu + ew * bS.ey) * 4;
        if (i1(gL)) {
          aLB = this.aKw + (this.aKx - this.aKw) * this.iX[eu + bS.ey * ew] / 10000;
          if (Math.abs(lP - eu) > aLB || Math.abs(lQ - ew) > aLB) {
            continue;
          }
          e7 = Math.sqrt((lP - eu) * (lP - eu) + (lQ - ew) * (lQ - ew));
          if (e7 >= aLB) {
            continue;
          }
          this.aLA(gL, e7, aLB, 1, this.a8S[3]);
        } else {
          aLB = this.aKy + (this.aKz - this.aKy) * this.iX[eu + bS.ey * ew] / 10000;
          if (Math.abs(lP - eu) > aLB || Math.abs(lQ - ew) > aLB) {
            continue;
          }
          e7 = Math.sqrt((lP - eu) * (lP - eu) + (lQ - ew) * (lQ - ew));
          if (e7 >= aLB) {
            continue;
          }
          this.aLA(gL, e7, aLB, 0, this.a8S[2]);
        }
      }
    }
  };
  function i1(gL) {
    return bS.wh[gL + 2] > bS.wh[gL] && bS.wh[gL + 2] > bS.wh[gL + 1];
  }
  function y1(eu, ew, gL) {
    return eu > 1 && i1(gL - 4) || eu < bS.ey - 2 && i1(gL + 4) || ew > 1 && i1(gL - bS.ey * 4) || ew < bS.ez - 2 && i1(gL + bS.ey * 4);
  }
}
function aKk() {
  var uT = aLD(bS.eT);
  if (uT) {
    aLE(uT[0], uT[1], uT[2], uT[3], uT[4]);
  }
}
function aLD(eT) {
  if (eT === 2) {
    return [[256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]];
  } else if (eT === 7) {
    return [[512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]];
  } else if (eT === 8) {
    return [[410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]];
  } else if (eT === 9) {
    return [[512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]];
  } else if (eT === 20) {
    return [[512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]];
  }
  return null;
}
function aLE(aLF, aLG, aLH, aLI, aLJ) {
  var aB;
  var eu;
  var ew;
  var i6 = aLF.length - 1;
  var aLK = bS.ey + bS.ez;
  aLK *= aLK;
  var aLL;
  var aLM;
  var en = aLH.length;
  var aLN = Array(en);
  for (aB = en - 1; aB >= 0; aB--) {
    aLN[aB] = aLH[aB] * aLH[aB];
  }
  var a2W;
  var aLO;
  var aLP = new Array(en);
  var aCU = new Array(en);
  var aLQ = new Array(en);
  var fF = aq.aL5();
  if (aLJ === undefined) {
    aLJ = new Array(en);
    for (aB = en - 1; aB >= 0; aB--) {
      aLJ[aB] = 0;
    }
  }
  for (aB = 1; aB < en; aB++) {
    aLP[aB] = aLN[aB] - aLN[aB - 1];
    aCU[aB] = aLI[aB] - aLI[aB - 1];
    aLQ[aB] = aLJ[aB] - aLJ[aB - 1];
  }
  for (eu = bS.ey - 1; eu >= 0; eu--) {
    for (ew = bS.ez - 1; ew >= 0; ew--) {
      aLL = aLK;
      for (aB = i6; aB >= 0; aB--) {
        aLM = (eu - aLF[aB]) * (eu - aLF[aB]) + (ew - aLG[aB]) * (ew - aLG[aB]);
        aLL = aLM < aLL ? aLM : aLL;
      }
      a2W = aLI[en - 1];
      aLO = aLJ[en - 1];
      for (aB = 1; aB < en; aB++) {
        if (aLL < aLN[aB]) {
          a2W = aLI[aB - 1] + aHC((aLL - aLN[aB - 1]) * aCU[aB], aLP[aB]);
          aLO = aLJ[aB - 1] + aHC((aLL - aLN[aB - 1]) * aLQ[aB], aLP[aB]);
          break;
        }
      }
      aLR(bS.ey * ew + eu, a2W, aLO, fF);
    }
  }
}
function aLR(e8, a2W, aLO, fF) {
  if (a2W < 500) {
    fF[e8] = bL.du(fF[e8] * a2W * 2, 1000);
  } else if (a2W > 500) {
    fF[e8] += bL.du((10000 - fF[e8]) * 2 * (a2W - 500), 1000);
  }
  fF[e8] += bL.du(aLO * (a2W * 10 - fF[e8]), 1000);
}
function cg() {
  var aLS;
  this.a6v = 0;
  this.a6w = 0;
  this.a6x = 0;
  this.a6y = 0;
  this.dd = function () {
    aLS = new Array(bS.aKa);
    aLS[0] = {
      i: [0, 5000, 8000, 10000],
      e7: [220, 250, 255, 220],
      tE: [190, 220, 0, 0],
      f7: [170, 200, 0, 0]
    };
    aLS[1] = {
      i: [0, 4000, 5000, 6000, 10000],
      e7: [25, 0, 100, 0, 25],
      tE: [25, 0, 0, 0, 25],
      f7: [25, 0, 0, 0, 25]
    };
    aLS[2] = {
      i: [0, 500, 2500, 2999, 3000, 3200, 4200, 5200, 5700, 8800, 10000],
      e7: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
      tE: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
      f7: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
    };
    aLS[3] = {
      i: [0, 400, 1899, 1900, 3200, 4500, 6000, 7700, 8499, 8500, 9500, 10000],
      e7: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
      tE: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
      f7: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
    };
    aLS[4] = {
      i: [0, 300, 1400, 1700, 3000, 4000, 10000],
      e7: [10, 10, 20, 10, 10, 170, 212],
      tE: [20, 20, 60, 100, 100, 110, 170],
      f7: [70, 70, 160, 30, 30, 60, 120]
    };
    aLS[5] = {
      i: [0, 1000, 3000, 3500, 4000, 4500, 7000, 7500, 8000, 10000],
      e7: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
      tE: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
      f7: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
    };
    aLS[6] = {
      i: [0, 700, 2650, 3200, 5000, 8000, 10000],
      e7: [10, 10, 60, 255, 255, 200, 200],
      tE: [10, 10, 60, 255, 255, 200, 200],
      f7: [80, 80, 255, 255, 255, 200, 200]
    };
    aLS[7] = {
      i: [0, 400, 1999, 2000, 3200, 4000, 4700, 5500, 6500, 9500, 10000],
      e7: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
      tE: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
      f7: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
    };
    aLS[8] = {
      i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6000, 10000],
      e7: [25, 30, 30, 30, 255, 255, 30, 40, 20],
      tE: [25, 30, 150, 150, 245, 245, 80, 150, 70],
      f7: [60, 170, 170, 170, 235, 235, 30, 40, 40]
    };
    aLS[9] = {
      i: [0, 400, 2009, 2010, 3300, 4000, 5200, 6500, 8000, 9500, 10000],
      e7: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
      tE: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
      f7: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
    };
    aLS[20] = {
      i: [0, 5500, 6700, 6999, 7000, 7300, 7600, 8200, 10000],
      e7: [5, 5, 70, 70, 255, 255, 252, 10, 8],
      tE: [20, 28, 190, 190, 255, 255, 248, 90, 60],
      f7: [60, 80, 220, 220, 220, 220, 217, 10, 8]
    };
    aLS[21] = {
      i: [0, 1500, 3000, 4000, 5000, 5999, 6000, 9500, 10000],
      e7: [12, 30, 10, 16, 40, 50, 55, 170, 170],
      tE: [45, 100, 40, 80, 120, 80, 55, 170, 170],
      f7: [12, 60, 10, 16, 40, 50, 55, 170, 170]
    };
  };
  this.aKl = function () {
    var hm = aLT();
    aLU(aLS[bS.eT].i, aLS[bS.eT].e7, aLS[bS.eT].tE, aLS[bS.eT].f7);
    bS.wc.putImageData(hm, 0, 0);
    if (bS.aKs(bS.eT)) {
      aLV();
    }
    bS.we = true;
    bf.dl = true;
  };
  function aLT() {
    var hm;
    bS.wg = document.createElement("canvas");
    bS.wg.width = bS.ey;
    bS.wg.height = bS.ez;
    bS.wc = bS.wg.getContext("2d", {
      alpha: false
    });
    hm = bS.wc.getImageData(0, 0, bS.ey, bS.ez);
    bS.wh = hm.data;
    return hm;
  }
  function aLU(i, e7, tE, f7) {
    var aB;
    var f6;
    var fF = aq.aL5();
    var en = i.length - 2;
    var fW;
    var aLW = new Array(en + 1);
    var aLX = new Array(en + 1);
    var aLY = new Array(en + 1);
    var aLZ = new Array(en + 1);
    for (f6 = en; f6 >= 0; f6--) {
      aLW[f6] = i[f6 + 1] - i[f6];
      aLX[f6] = e7[f6 + 1] - e7[f6];
      aLY[f6] = tE[f6 + 1] - tE[f6];
      aLZ[f6] = f7[f6 + 1] - f7[f6];
    }
    for (aB = bS.ey * bS.ez - 1; aB >= 0; aB--) {
      for (f6 = en; f6 >= 0; f6--) {
        if (fF[aB] >= i[f6]) {
          fW = fF[aB] - i[f6];
          bS.wh[aB * 4] = e7[f6] + aHC(aLX[f6] * fW, aLW[f6]);
          bS.wh[aB * 4 + 1] = tE[f6] + aHC(aLY[f6] * fW, aLW[f6]);
          bS.wh[aB * 4 + 2] = f7[f6] + aHC(aLZ[f6] * fW, aLW[f6]);
          bS.wh[aB * 4 + 3] = 255;
          break;
        }
      }
    }
  }
  function aLV() {
    if (!ab.tI() || !bS.aKs(bS.eT)) {
      return;
    }
    var aLa = ab.aGN("arena");
    var aLb = ab.aGN("territorial.io");
    aLc(aLa, 5, 0.5, 0.5, 0.1);
    aLc(aLb, 2, 0.5, 0.45, 0.1);
  }
  function aLc(a2x, ho, eu, ew, globalAlpha) {
    bS.wc.save();
    bS.wc.globalAlpha = globalAlpha;
    bS.wc.imageSmoothingEnabled = false;
    bS.wc.scale(ho, ho);
    bS.wc.drawImage(a2x, Math.floor(eu * (bS.ey / ho - a2x.width)), Math.floor(ew * (bS.ez / ho - a2x.height)));
    bS.wc.restore();
  }
  this.a4k = function () {
    var aB;
    var gL;
    var eu;
    var ew;
    var aLd;
    var hd;
    var fY;
    var a6w = 0;
    var i = bS.ey;
    var j = bS.ez;
    var fW = i * j * 4;
    var aLe = aC2;
    var aLf = bS.wh;
    for (aB = i - 1; aB >= 0; aB--) {
      gL = aB << 2;
      aLe[gL + 2] = aLe[fW - gL - 2] = 3;
    }
    fW = i * 4;
    for (aB = j - 1; aB >= 0; aB--) {
      gL = aB * fW;
      aLe[gL + 2] = aLe[gL + fW - 2] = 3;
    }
    aLd = i - 1;
    hd = j - 1;
    for (ew = 1; ew < hd; ew++) {
      fW = ew * i;
      for (eu = 1; eu < aLd; eu++) {
        gL = fW + eu << 2;
        fY = 1 - (aLf[gL + 2] > aLf[gL + 1] && aLf[gL + 2] > aLf[gL]);
        aLe[gL + 2] = 6 - fY * 5;
        a6w += fY;
      }
    }
    this.a6v = (i - 2) * (j - 2);
    this.a6y = 0;
    if (bS.eS(bS.eT)) {
      bS.a6y.aLg();
      bS.a6y.aLh(4, 5);
    }
    this.a6w = aD.ju = a6w - this.a6y;
    this.a6x = this.a6v - this.a6w - this.a6y;
    if (this.a6x) {
      bS.a6y.aLh(6, 2);
      bS.a6y.aLi();
    }
  };
}
function aKj() {
  var qI;
  if (bS.eT === 10) {
    qI = "DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX";
  } else if (bS.eT === 11) {
    qI = "QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk";
  } else if (bS.eT === 12) {
    qI = "JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV";
  } else if (bS.eT === 13) {
    qI = "C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V";
  } else if (bS.eT === 14) {
    qI = "EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs";
  } else if (bS.eT === 15) {
    qI = "CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV";
  } else if (bS.eT === 16) {
    qI = "DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc";
  } else if (bS.eT === 17) {
    qI = "9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc";
  } else if (bS.eT === 18) {
    qI = "DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-";
  } else if (bS.eT === 19) {
    qI = "EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV";
  } else if (bS.eT === 22) {
    qI = "N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ";
  } else if (bS.eT === 23) {
    qI = "FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-";
  }
  new wP().wR(qI);
}
function aKd() {
  this.wX = null;
  this.aLj = null;
  this.aLk = null;
  this.dd = function () {
    var aLl = [120, 105, 92];
    var cos = [12, 12, 60];
    var aLm = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9];
    var aLn = [140, 130, 120];
    var aLo = [12, 12, 76];
    var aLp = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9];
    var aLq = [130, 117, 106];
    var aLr = [12, 12, 68];
    var aLs = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
    this.wX = new Array(bS.aKa + 1);
    this.wX[0] = {
      name: L(133),
      i: 230,
      j: 230,
      mo: 1000,
      ml: 2000,
      aKi: 173
    };
    this.wX[1] = {
      name: L(134),
      i: 800,
      j: 800,
      mo: 100,
      ml: 50,
      aKi: 43
    };
    this.wX[2] = {
      name: L(135),
      i: 512,
      j: 512,
      mo: 128,
      ml: 32,
      aKi: 0
    };
    this.wX[3] = {
      name: L(136) + " 1",
      i: 960,
      j: 960,
      mo: 60,
      ml: 8,
      aKi: 0
    };
    this.wX[4] = {
      name: L(137),
      i: 900,
      j: 900,
      mo: 100,
      ml: 5,
      aKi: 0
    };
    this.wX[5] = {
      name: L(138),
      i: 1000,
      j: 1000,
      mo: 100,
      ml: 40,
      aKi: 0
    };
    this.wX[6] = {
      name: L(139),
      i: 1000,
      j: 1000,
      mo: 100,
      ml: 20,
      aKi: 0
    };
    this.wX[7] = {
      name: L(140),
      i: 1024,
      j: 1024,
      mo: 128,
      ml: 32,
      aKi: 0
    };
    this.wX[8] = {
      name: L(141),
      i: 820,
      j: 820,
      mo: 200,
      ml: 100,
      aKi: 0
    };
    this.wX[9] = {
      name: L(142),
      i: 1024,
      j: 1024,
      mo: 128,
      ml: 32,
      aKi: 0
    };
    this.wX[10] = {
      name: L(143),
      wy: aLn,
      wz: aLo,
      aKt: aLp
    };
    this.wX[11] = {
      name: L(144),
      wy: aLq,
      wz: aLr,
      aKt: aLs
    };
    this.wX[12] = {
      name: L(145),
      wy: aLq,
      wz: aLr,
      aKt: aLs
    };
    this.wX[13] = {
      name: L(146),
      wy: aLl,
      wz: cos,
      aKt: aLm
    };
    this.wX[14] = {
      name: L(147),
      wy: aLl,
      wz: cos,
      aKt: aLm
    };
    this.wX[15] = {
      name: L(148),
      wy: aLn,
      wz: aLo,
      aKt: aLp
    };
    this.wX[16] = {
      name: L(149),
      wy: aLn,
      wz: aLo,
      aKt: aLp
    };
    this.wX[17] = {
      name: L(150),
      wy: aLl,
      wz: cos,
      aKt: aLm
    };
    this.wX[18] = {
      name: L(151),
      wy: aLq,
      wz: aLr,
      aKt: aLs
    };
    this.wX[19] = {
      name: L(152),
      wy: aLl,
      wz: cos,
      aKt: aLm
    };
    this.wX[20] = {
      name: L(153),
      i: 1024,
      j: 1024,
      mo: 128,
      ml: 32,
      aKi: 0
    };
    this.wX[21] = {
      name: L(136) + " 2",
      i: 940,
      j: 940,
      mo: 80,
      ml: 8,
      aKi: 0
    };
    this.wX[22] = {
      name: L(154),
      wy: aLq,
      wz: aLr,
      aKt: aLs
    };
    this.wX[23] = {
      name: L(155),
      wy: aLn,
      wz: aLo,
      aKt: aLp
    };
    this.wX[bS.aKa] = {
      name: ""
    };
    this.aLj = new Uint8Array(12);
    for (var aB = 0; aB < 10; aB++) {
      this.aLj[aB] = aB;
    }
    this.aLj[10] = 20;
    this.aLj[11] = 21;
    this.aLk = new Uint8Array(bS.aKb);
    for (aB = 0; aB < 10; aB++) {
      this.aLk[aB] = 10 + aB;
    }
    this.aLk[10] = 22;
    this.aLk[11] = 23;
  };
}
function aKe() {
  this.aLg = function () {
    var gL;
    var eu;
    var ew;
    var fW;
    var aLe = aC2;
    var aLf = bS.wh;
    var i = bS.ey;
    var aLd = i - 1;
    var hd = bS.ez - 1;
    var gG = 0;
    for (ew = 1; ew < hd; ew++) {
      fW = ew * i;
      for (eu = 1; eu < aLd; eu++) {
        gL = fW + eu << 2;
        if (aLf[gL] === aLf[gL + 1] && aLf[gL] === aLf[gL + 2]) {
          gG++;
          aLe[gL + 2] = 4;
        }
      }
    }
    ap.a6y = gG;
  };
  this.aLh = function (aLt, aLu) {
    var aLe = aC2;
    var i = bS.ey;
    var aLd = i - 1;
    var hd = bS.ez - 1;
    var id = 0;
    for (var ew = 1; ew < hd; ew++) {
      var fW = ew * i;
      for (var eu = 1; eu < aLd; eu++) {
        var eR = (fW + eu << 2) + 2;
        if (aLe[eR] === aLt) {
          aLv(eR, id, aLt, aLu);
          id = (id + 1) % 32768;
        }
      }
    }
  };
  function aLv(eR, id, aLt, aLu) {
    var en = 1;
    var aLe = aC2;
    var ep = ac.ep;
    var a2j = [eR];
    var aLw = id >> 8 << 1;
    var aLx = id & 255;
    aLe[eR - 2] = aLw;
    aLe[eR - 1] = aLx;
    aLe[eR] = 5;
    while (en) {
      var a2k = [];
      for (var aB = 0; aB < en; aB++) {
        var ec = a2j[aB];
        for (var eq = 3; eq >= 0; eq--) {
          var er = ec + ep[eq];
          if (aLe[er] === aLt) {
            aLe[er - 2] = aLw;
            aLe[er - 1] = aLx;
            aLe[er] = aLu;
            a2k.push(er);
          }
        }
      }
      a2j = a2k;
      en = a2j.length;
    }
  }
  this.aLi = function () {
    var aLe = aC2;
    var i = bS.ey;
    var f3 = 3;
    var aLd = i - f3;
    var hd = bS.ez - f3;
    var aLy = f3 * 4;
    var aLz = f3 * 4 * i;
    for (var ew = f3; ew < hd; ew++) {
      var fW = ew * i;
      for (var eu = f3; eu < aLd; eu++) {
        var eR = (fW + eu << 2) + 2;
        if (aLe[eR] === 2 && (aLe[eR - aLy] !== 2 || aLe[eR + aLy] !== 2 || aLe[eR - aLz] !== 2 || aLe[eR + aLz] !== 2)) {
          aLe[eR - 2] = aLe[eR - 2] | 1;
        }
      }
    }
  };
}
var yH;
var aC2;
var a4n;
var a4o;
function a4j() {
  if (yH === undefined) {
    yH = document.createElement("canvas");
  }
  yH.width = bS.ey;
  yH.height = bS.ez;
  a4n = yH.getContext("2d", {
    alpha: true
  });
  a4o = aC2 = null;
  a4o = a4n.getImageData(0, 0, bS.ey, bS.ez);
  aC2 = a4o.data;
  bA.qj.wi(aC2);
}
function ch() {
  var fF;
  var i;
  var j;
  var max;
  var aM0;
  var ml;
  var aM1 = 10000;
  var aM2;
  var aM3;
  var aM4;
  var aM5;
  var aM6;
  var aM7;
  var aM8;
  var aM9;
  this.a7 = function (a3x) {
    aMA(a3x);
    aMB();
    aMC();
    aMD();
  };
  this.aL5 = function () {
    return fF;
  };
  this.aKm = function () {
    fF = null;
  };
  function aMA(a3x) {
    var aB;
    i = a3x[0];
    j = a3x[1];
    aM0 = a3x[2];
    ml = a3x[3];
    fF = new Int16Array(i * j);
    max = i > j ? i : j;
    aM2 = new Int16Array(max);
    aM3 = [];
    aM4 = [];
    aM5 = [];
    aM6 = new Array(i);
    aM7 = new Array(j);
    for (aB = i - 1; aB >= 0; aB--) {
      aM6[aB] = false;
    }
    for (aB = j - 1; aB >= 0; aB--) {
      aM7[aB] = false;
    }
    aM8 = new Int16Array(i);
    aM9 = new Int16Array(j);
  }
  function aME(en) {
    var aMF = ay.random() % aM1;
    var mo = ay.random() % (aM0 * 2 + 1) - aM0;
    aMG(aMF, mo, en);
  }
  function aMH(aMF, en) {
    var mo = ay.random() % (aM0 * 2 + 1) - aM0;
    aMG(aMF, mo, en);
  }
  function aMG(aMF, mo, en) {
    var aB;
    aM2[0] = aMF;
    for (aB = 1; aB < en; aB++) {
      aM2[aB] = aM2[aB - 1] + mo;
      if (aM2[aB] >= aM1) {
        aM2[aB] = aM1 - 1;
        mo = -mo;
      } else if (aM2[aB] < 0) {
        aM2[aB] = 0;
        mo = -mo;
      } else {
        mo += ay.random() >= 16384 ? ml : -ml;
        mo = mo < -aM0 ? -aM0 : mo > aM0 ? aM0 : mo;
      }
    }
  }
  function aMI(eu, ew, aMJ, en) {
    if (aMJ) {
      aMK(eu, ew, en);
    } else {
      aML(eu, ew, en);
    }
  }
  function aMK(eu, ew, en) {
    var aB;
    for (aB = 0; aB < en; aB++) {
      fF[ew * i + eu + aB] = aM2[aB];
    }
  }
  function aML(eu, ew, en) {
    var aB;
    for (aB = 0; aB < en; aB++) {
      fF[ew * i + eu + aB * i] = aM2[aB];
    }
  }
  function aMM(value, en) {
    var aB;
    var aK1;
    var eR;
    var jP = value - aM2[en - 1];
    if (jP === 0) {
      return;
    }
    aK1 = 1 + bL.du(Math.abs(jP), en - 1);
    aK1 = jP < 0 ? -aK1 : aK1;
    aM2[en - 1] = value;
    eR = en - 1 - bL.du(Math.abs(jP), Math.abs(aK1));
    eR = eR < 1 ? 1 : eR > en - 2 ? en - 2 : eR;
    for (aB = en - 2; aB >= eR; aB--) {
      aM2[aB] += jP - (en - 1 - aB) * aK1;
    }
    if (jP < 0) {
      aMN(en);
    } else {
      aMO(en);
    }
  }
  function aMO(en) {
    var aB;
    for (aB = en - 2; aB >= 1; aB--) {
      if (aM2[aB] >= aM1) {
        aM2[aB] = aM1 * 2 - aM2[aB] - 1;
      }
    }
  }
  function aMN(en) {
    var aB;
    for (aB = en - 2; aB >= 1; aB--) {
      if (aM2[aB] < 0) {
        aM2[aB] = -aM2[aB] - 1;
      }
    }
  }
  function aMP(a2j, a2k, en) {
    var aB;
    for (aB = 0; aB < en; aB++) {
      a2j[aB] = a2k[aB];
    }
  }
  function aMQ(g) {
    var aB;
    for (aB = 0; aB < g.length - 1; aB++) {
      g[aB] = g[aB + 1] - g[aB];
    }
    g[g.length - 1] = g[g.length - 3];
  }
  function aMR(a5Q, gap, he) {
    aM3.push(a5Q);
    aM4.push(gap);
    aM5.push(he);
  }
  function aMS() {
    var aB;
    var aMT = aM3.length - 1;
    for (aB = aMT - 1; aB >= 0; aB--) {
      if (aM4[aB] > aM4[aMT]) {
        aMT = aB;
      }
    }
    return aMT;
  }
  function aMB() {
    aME(max);
    aMP(aM9, aM2, j);
    aMI(0, 0, true, i);
    aMH(fF[0], max);
    aMP(aM8, aM2, i);
    aMI(0, 0, false, j);
    aMQ(aM8);
    aMQ(aM9);
    aMG(fF[i - 1], aM8[i - 1], j);
    aMI(i - 1, 0, false, j);
    aMG(fF[i * (j - 1)], aM9[j - 1], i);
    aMM(fF[i * j - 1], i);
    aMI(0, j - 1, true, i);
    aM6[i - 1] = aM6[0] = true;
    aM7[j - 1] = aM7[0] = true;
    aMR(0, i, true);
    aMR(0, j, false);
  }
  function aMC() {
    var aMT;
    var a5Q;
    while (true) {
      aMT = aMS();
      if (aM4[aMT] < 5) {
        return;
      }
      a5Q = aM3[aMT] + bL.du(aM4[aMT], 2);
      if (aM5[aMT]) {
        aMU(a5Q);
      } else {
        aMV(a5Q);
      }
      aMR(a5Q, aM3[aMT] + aM4[aMT] - a5Q, aM5[aMT]);
      aM4[aMT] = a5Q - aM3[aMT] + 1;
    }
  }
  function aMV(ew) {
    var en;
    var aMW;
    var aB;
    var aFn = 0;
    var aMX = 0;
    while (aMX < i - 1) {
      for (aB = aFn + 1; aB < i; aB++) {
        if (aM6[aB]) {
          aMX = aB;
          break;
        }
      }
      en = aMX - aFn + 1;
      aMG(fF[ew * i + aFn], aFn === 0 ? aM9[ew] : aM2[aMW - 1] - aM2[aMW - 2], en);
      aMM(fF[ew * i + aMX], en);
      aMI(aFn, ew, true, en);
      aMW = en;
      aFn = aMX;
    }
    aM7[ew] = true;
  }
  function aMU(eu) {
    var en;
    var aMW;
    var aB;
    var aFn = 0;
    var aMX = 0;
    while (aMX < j - 1) {
      for (aB = aFn + 1; aB < j; aB++) {
        if (aM7[aB]) {
          aMX = aB;
          break;
        }
      }
      en = aMX - aFn + 1;
      aMG(fF[eu + i * aFn], aFn === 0 ? aM8[eu] : aM2[aMW - 1] - aM2[aMW - 2], en);
      aMM(fF[aMX * i + eu], en);
      aMI(eu, aFn, false, en);
      aMW = en;
      aFn = aMX;
    }
    aM6[eu] = true;
  }
  function aMD() {
    var eu;
    var ew;
    for (eu = 0; eu < i; eu++) {
      if (!aM6[eu]) {
        for (ew = 0; ew < j; ew++) {
          if (!aM7[ew]) {
            aMY(eu, ew);
          }
        }
      }
    }
  }
  function aMY(eu, ew) {
    var value = fF[ew * i + eu - 1] + fF[(ew - 1) * i + eu];
    var a79 = 2;
    if (aM6[eu + 1]) {
      a79++;
      value += fF[ew * i + eu + 1];
    }
    if (aM7[ew + 1]) {
      a79++;
      value += fF[(ew + 1) * i + eu];
    }
    fF[ew * i + eu] = bL.du(value, a79);
  }
}
function aHC(f6, f7) {
  if (f6 >= 0) {
    return bL.du(f6, f7);
  } else {
    return -bL.du(-f6, f7);
  }
}
function jg(fF) {
  return fF * fF;
}
function a6O(f6, f7) {
  if (f6 > f7) {
    return f6;
  } else {
    return f7;
  }
}
function aBW(f6, f7) {
  if (f6 < f7) {
    return f6;
  } else {
    return f7;
  }
}
function a8m(f6, fF, f7) {
  if (fF < f6) {
    return f6;
  } else if (fF > f7) {
    return f7;
  } else {
    return fF;
  }
}
function aMZ(fF, en) {
  var f8 = bL.du(fF + 1, 2);
  for (var aB = 0; aB < en; aB++) {
    f8 = bL.du(f8 + bL.du(fF, f8), 2);
  }
  return f8;
}
function aIX(fF, en) {
  if (fF < 1) {
    return 0;
  }
  return aMZ(fF, en);
}
function aMa(n9, nA, sx, a8V, nM, nN, sy, tf) {
  return !(n9 + sx <= nM) && !(nA + a8V <= nN) && !(n9 >= nM + sy) && !(nA >= nN + tf);
}
function aMb(n9, nA, sx, a8V, nM, nN, sy, tf) {
  return n9 <= nM && nA <= nN && n9 + sx >= nM + sy && nA + a8V >= nN + tf;
}
function wZ(fF) {
  return Math.floor(!!fF * (1 + Math.log2(fF + 0.5)));
}
function bx() {
  this.du = function (f6, f7) {
    return Math.floor((f6 + 0.5) / f7);
  };
  this.aMc = function (f6, f7) {
    return Math.floor(f6 * (f7 + 0.5));
  };
  this.sqrt = function (fF) {
    return ~~Math.sqrt(fF + 0.5);
  };
  this.pow = function (e) {
    return Math.floor(Math.pow(2, e) + 0.5);
  };
  this.hv = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
  };
  this.aMd = function (fW, fY, fa) {
    return Math.max(Math.min(fW, fY), fa);
  };
  this.aMe = function (aMf, aMg, eu, ew) {
    var i7 = eu - aMf;
    var iA = ew - aMg;
    var aMh = 0;
    if (i7 === 0) {
      aMh = iA >= 0 ? Math.PI : 0;
    } else {
      aMh = Math.atan(iA / i7);
      aMh += i7 > 0 ? Math.PI * 0.5 : Math.PI * 1.5;
    }
    return aMh;
  };
  this.log2 = function (fF) {
    return Math.floor(!!fF * (1 + Math.log2(fF + 0.5)));
  };
  this.log10 = function (fF) {
    return Math.floor(Math.log10(fF + 0.5));
  };
  this.aMi = function (aMj, aMk, aMl, aMm, aMn) {
    return aMj > aMl - aMn && aMj < aMl + aMn && aMk > aMm - aMn && aMk < aMm + aMn;
  };
  this.xW = function (a9C, a9E) {
    return a9C * a9C + a9E * a9E;
  };
}
function dD() {
  this.y = new aMo();
  this.sq = 0;
  var aMp = new Array(31);
  this.dd = function () {
    var aMq;
    var aMr = document.body.firstChild;
    while (aMr) {
      aMq = aMr.nextSibling;
      if (document.body.contains(aMr) && (aMr.tagName === "DIV" || aMr.tagName === "INPUT" || aMr.tagName === "BUTTON")) {
        t.removeChild(document.body, aMr);
      }
      aMr = aMq;
    }
  };
  this.u = function (e8, aMs = this.sq, a3x) {
    bf.dl = true;
    if (e8 === 0) {
      if (aa.a1K() === 0) {
        e8 = 5;
      } else {
        a0.a1.setState(13);
      }
    }
    this.rs();
    if (this.sq === e8) {
      aMs = aMp[e8].aMs;
      aMp[e8] = null;
    }
    this.sq = e8;
    var l5 = aMp[e8];
    if (!l5 || e8 === 4 || e8 === 7 || e8 === 8 || e8 === 9 || e8 === 10 || e8 === 11 || e8 === 13 || e8 === 15 || e8 === 18 || e8 >= 20 && e8 <= 28 || e8 === 32 || e8 === 33) {
      if (e8 === 0) {
        aMt();
        return;
      } else if (e8 === 1) {
        l5 = new aMu();
      } else if (e8 === 2) {
        l5 = new aMv();
      } else if (e8 === 3) {
        l5 = new aMw();
      } else if (e8 === 4 || e8 === 9 || e8 === 10 || e8 === 11 || e8 === 13 || e8 === 33) {
        l5 = a3x;
      } else if (e8 === 5) {
        l5 = new aMx();
      } else if (e8 === 6) {
        l5 = new aMy();
      } else if (e8 === 7) {
        l5 = new aMz(t.y.aN0);
      } else if (e8 === 8) {
        l5 = a3x;
      } else if (e8 === 12) {
        l5 = new aN1();
      } else if (e8 === 14) {
        l5 = new aN2();
      } else if (e8 === 15) {
        l5 = new aMz(t.y.aN3);
      } else if (e8 === 16) {
        l5 = new aN4();
      } else if (e8 === 17) {
        l5 = new aN5();
      } else if (e8 === 18) {
        l5 = new aN6();
      } else if (e8 === 19) {
        l5 = new aN7();
      } else if (e8 === 20) {
        l5 = new aN8();
      } else if (e8 === 21) {
        l5 = new aN9();
      } else if (e8 === 22) {
        l5 = new aNA();
      } else if (e8 === 23) {
        l5 = new aNB();
      } else if (e8 === 24) {
        l5 = new aNC();
      } else if (e8 === 25) {
        l5 = new aND();
      } else if (e8 === 26) {
        l5 = new aNE();
      } else if (e8 === 27) {
        l5 = new aNF();
      } else if (e8 === 28) {
        l5 = new aNG();
      } else if (e8 === 29) {
        l5 = new aNH();
      } else if (e8 === 30) {
        l5 = new aNI();
      }
      l5.aMs = aMs;
      aMp[e8] = l5;
    }
    l5.show(a3x);
  };
  function aMt() {
    var en = aMp.length;
    for (var aB = 0; aB < en; aB++) {
      aMp[aB] = null;
    }
  }
  this.a1J = function () {
    if (!this.hZ()) {
      return;
    }
    this.aNJ(this.a5A().aMs);
  };
  this.aNJ = function (e8) {
    if (!this.hZ()) {
      return;
    }
    if (!aMp[e8]) {
      this.u(e8);
      return;
    }
    this.rs();
    bf.dl = true;
    this.sq = e8;
    aMp[e8].show();
  };
  this.rs = function () {
    if (!this.hZ()) {
      return;
    }
    aMp[this.sq].rs();
  };
  this.x = function () {
    if (!this.hZ()) {
      return;
    }
    aMp[this.sq].rs();
    aMt();
    this.sq = 0;
    a0.a1.setState(13);
  };
  this.uj = function () {
    if (!this.hZ()) {
      return;
    }
    var l5 = aMp[this.sq];
    if (l5.uj) {
      l5.uj();
    }
  };
  this.resize = function () {
    if (!this.hZ()) {
      return false;
    }
    aMp[this.sq].resize();
  };
  this.h0 = function (eu, ew) {
    if (!this.hZ()) {
      return;
    }
    var l5 = aMp[this.sq];
    if (l5.h0) {
      l5.h0(eu, ew);
    }
  };
  this.a1d = function (eu, ew) {
    if (!this.hZ()) {
      return;
    }
    var l5 = aMp[this.sq];
    if (l5.a1d) {
      l5.a1d(eu, ew);
    }
  };
  this.a21 = function () {
    if (!this.hZ()) {
      return;
    }
    var l5 = aMp[this.sq];
    if (l5.a21) {
      l5.a21();
    }
  };
  this.a1g = function (lP, lQ, deltaY) {
    if (!this.hZ()) {
      return;
    }
    var l5 = aMp[this.sq];
    if (l5.a1g) {
      l5.a1g(lP, lQ, deltaY);
    }
  };
  this.a2B = function (code) {
    if (!this.hZ()) {
      return false;
    }
    var l5 = aMp[this.sq];
    if (l5.a2B) {
      l5.a2B(code);
    }
    return true;
  };
  this.j3 = function () {
    if (!this.hZ()) {
      return;
    }
    var l5 = aMp[this.sq];
    if (l5 && l5.j3) {
      l5.j3();
    }
  };
  this.hZ = function () {
    return this.sq > 0;
  };
  this.a5A = function () {
    return aMp[this.sq];
  };
  this.a5B = function (e8) {
    return aMp[e8];
  };
  this.aNK = function () {
    return aMp;
  };
  this.removeChild = function (aNL, a3S) {
    try {
      aNL.removeChild(a3S);
    } catch (e) {
      console.log("removeChild error " + e);
    }
  };
}
function aMz(data) {
  var aNM;
  var aNN;
  function dd() {
    aNM = new uU(data.username, [new w("⬅️ " + L(37), function () {
      bI.clear();
      t.a1J();
    }), new w(data.aNO ? "🔄 " + L(156) : L(157), function () {
      t.u(8, data.aNO ? t.a5A().aMs : undefined, new sr(25, {
        ss: 0,
        so: data.so,
        sp: data.sp
      }));
    }, 0, 0, 1)]);
    aNN = new qU(aNM.ua, aNP());
  }
  function aNP() {
    var qW = [];
    qW.push(aNQ());
    aNR(qW);
    aNS(qW);
    qW.push(aNT());
    if (data.aNO) {
      qW.push(aNU());
    }
    qW.push(aNV());
    if (!data.aNO) {
      qW.push(aNW());
      qW.push(aNX());
      qW.push(aNY());
    }
    qW.push(aNZ());
    qW.push(aNa());
    aNb(qW);
    aNc(qW);
    qW.push(aNd());
    aNe(qW);
    aNf(qW);
    return qW;
  }
  function aNT() {
    var aNg = new qE();
    aNg.qH(L(158));
    var aNh = [L(159), L(160), L(161), L(162), L(163)];
    var e7 = data.aNi;
    aNg.qN(L(164) + bA.ra.a4E(data.vw, 0.01, 2) + "<br>" + L(165) + (e7 + 1) + " / " + data.vv + "<br>" + L(166) + aNh[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : e7 < 1000 ? 3 : 4]);
    if (!data.aNO) {
      aNg.qJ(L(167));
      aNg.qJ(L(168));
      aNg.qJ(L(169));
    }
    return aNg;
  }
  function aNU() {
    var aNg = new qE();
    aNg.qH(L(170));
    var rO = new rP({
      value: bj.eK.data[147].value,
      e8: -1
    }, 1, undefined, function (e) {
      bj.s3.s4(147, aNj(e.target.value));
    });
    aNg.qS(rO);
    var aNk = new w(L(14), function (e) {
      if (rO.e.readOnly && b0.y.aNl(0)) {
        bA.qb.a3Q(e);
        aNm();
        b0.aNn.aNo({
          ss: 0,
          so: data.so,
          value: parseInt(bj.eK.data[147].value, 10)
        });
      }
      return true;
    }, 1);
    var aNp = new w(L(171), function (e) {
      if (e.textContent === L(171)) {
        e.textContent = L(172);
        rO.e.readOnly = true;
        aNk.qv(0);
        aNk.button.style.color = bB.oh;
        bj.s3.s4(147, rO.e.value);
        aNj(bj.eK.data[147].value);
      } else {
        aNm();
      }
      return true;
    });
    aNg.qS(new s6([aNp.button]));
    var qK = aNg.qJ();
    function aNj(fF) {
      qK.innerHTML = t.y.aNq(fF, bj.eK.data[105].value, data.so);
    }
    function aNm() {
      aNp.button.textContent = L(171);
      rO.e.readOnly = false;
      aNk.qv(1);
      aNk.button.style.color = bB.nj;
    }
    aNj(bj.eK.data[147].value);
    aNg.qS(new s6([aNk.button]));
    return aNg;
  }
  function aNV() {
    var aNg = new qE();
    aNg.qH(L(173));
    var rO = new rP({
      value: data.so,
      e8: -1
    });
    rO.e.readOnly = true;
    aNg.qS(rO);
    aNg.qS(new s6([new w(L(174), function (e) {
      bA.qb.a3P(rO.e);
      bA.qb.a3Q(e);
      return true;
    }).button]));
    return aNg;
  }
  function aNW() {
    var aNg = new qE();
    aNg.qH(L(175));
    var aNr = new rP(bj.eK.data[106]);
    aNr.e.readOnly = true;
    aNr.e.type = "password";
    aNg.qS(aNr);
    aNg.qS(new s6([new w(L(176), function (e) {
      if (e.textContent === L(176)) {
        e.textContent = L(177);
        aNr.e.type = "text";
      } else {
        e.textContent = L(176);
        aNr.e.type = "password";
      }
      return true;
    }).button, new w(L(174), function (e) {
      bA.qb.a3P(aNr.e);
      bA.qb.a3Q(e);
      return true;
    }).button]));
    aNg.qS(new s6([new w(L(178), function () {
      t.u(8, t.a5A().aMs, new sr(15));
    }).button]));
    aNg.qH(L(179), "0.8em");
    aNg.qJ(L(180));
    aNg.qJ(L(181));
    aNg.qJ(L(182));
    return aNg;
  }
  function aNX() {
    var aNg = new qE();
    aNg.qH(L(183));
    aNg.qS(new s6([new w(L(184), function () {
      t.u(6, t.a5A().aMs);
    }).button]));
    aNg.qS(new s6([new w(L(185), function () {
      bj.s3.s4(105, "");
      t.u(8, t.a5A().aMs, new sr(18));
    }).button]));
    aNg.qS(new s6([new w(L(186) + bj.eK.data[105].value, function () {
      t.u(4, 0, new v(L(187), L(188), true, [new w("⬅️ " + L(37), function () {
        t.u(7, t.a5B(7).aMs);
      })]));
    }, bB.oO).button]));
    return aNg;
  }
  function aNf(qW) {
    if (data.aNO) {
      return;
    }
    if (!bj.v9.get().length) {
      return;
    }
    var aNg = new qE();
    aNg.qH(L(189));
    var qQ;
    var aNs;
    var e8 = 0;
    function aNt() {
      var aBw = bj.v9.get().length;
      aNs[0].qv(e8 === aBw ? bB.nv : bB.o6);
      aNs[1].qv(e8 === aBw ? bB.nv : bB.oO);
      aNs[2].qv(e8 === aBw || e8 >= aBw - 1 || e8 < 5 ? bB.nv : bB.oO);
    }
    aNs = [new w(L(190), function () {
      t.u(8, undefined, new sr(25, {
        ss: 0,
        so: bj.v9.get()[e8],
        sp: 0
      }));
    }, bB.nv, 1), new w(L(191), function () {
      bj.v9.vP(e8);
      qQ.qR[e8].remove();
      qQ.qR.splice(e8, 1);
      for (var aB = e8; aB < qQ.qR.length; aB++) {
        qQ.qR[aB].name = "" + aB;
      }
      if (bj.v9.get().length) {
        e8 = Math.max(e8 - 1, 0);
        qQ.qR[e8].textContent = qQ.qR[e8].textContent.replace("⚪", "🟢");
      }
      aNt();
    }, bB.nv, 1), new w(L(192), function () {
      for (var hf = qQ.qR.length - 1; hf > e8; hf--) {
        bj.v9.vP(hf);
        qQ.qR[hf].remove();
        qQ.qR.splice(hf, 1);
      }
      aNt();
    }, bB.nv, 1)];
    aNt();
    qQ = new uP(bj.v9.vL(), function (aB) {
      e8 = aB;
      aNt();
    });
    qQ.qR[0].style.marginTop = "0.5em";
    aNg.qP(qQ);
    aNg.qS(new s6([aNs[0].button]));
    aNg.qS(new s6([aNs[1].button]));
    aNg.qS(new s6([aNs[2].button]));
    qW.push(aNg);
  }
  function aNY() {
    var aNg = new qE();
    aNg.qH(L(193));
    aNg.qJ(L(194));
    bj.y.vg();
    var qQ;
    var aNs;
    function aNt(e8) {
      aNs[0].qv(e8 === 0 ? bB.nv : bB.o6);
      aNs[1].qv(e8 === 0 ? bB.nv : bB.oO);
      aNs[2].qv(e8 === qQ.qR.length - 1 || e8 < 5 ? bB.nv : bB.oO);
    }
    aNs = [new w(L(195), function () {
      var e8 = Math.min(bj.eK.data[117].value, qQ.qR.length - 1);
      if (e8 < 1) {
        return;
      }
      var data = bj.y.vk(e8);
      bj.s3.s4(105, data.so);
      bj.s3.s4(106, data.password);
      t.u(8, t.a5A().aMs, new sr(18));
    }, bB.nv, 1), new w(L(191), function () {
      var e8 = Math.min(bj.eK.data[117].value, qQ.qR.length - 1);
      if (e8 < 1) {
        return;
      }
      qQ.qR[e8].remove();
      qQ.qR.splice(e8, 1);
      for (var aB = e8; aB < qQ.qR.length; aB++) {
        qQ.qR[aB].name = "" + aB;
      }
      bj.y.vj(e8);
      e8 = bj.eK.data[117].value;
      qQ.qR[e8].textContent = qQ.qR[e8].textContent.replace("⚪", "🟢");
      aNt(e8);
    }, bB.nv, 1), new w(L(192), function () {
      var e8 = Math.min(bj.eK.data[117].value, qQ.qR.length - 1);
      if (e8 === qQ.qR.length - 1) {
        return;
      }
      for (var aB = qQ.qR.length - 1; aB > e8; aB--) {
        qQ.qR[aB].remove();
        qQ.qR.splice(aB, 1);
        bj.y.vj(aB);
      }
      aNt(e8);
    }, bB.nv, 1)];
    qQ = new uP(bj.eK.data[117], aNt);
    aNt(0);
    qQ.qR[0].style.marginTop = "0.5em";
    aNg.qP(qQ);
    aNg.qS(new s6([aNs[0].button]));
    aNg.qS(new s6([aNs[1].button]));
    aNg.qS(new s6([aNs[2].button]));
    return aNg;
  }
  function aNa() {
    var aNg = new qE();
    aNg.qH(L(196));
    aNg.qN(L(197) + bA.ra.a4E(data.vs, 0.1, 1) + "<br>" + L(165) + (data.vt + 1) + " / " + data.vv + "<br>" + L(198) + data.vu);
    return aNg;
  }
  function aNZ() {
    var aNg = new qE();
    aNg.qH(L(199));
    var aNh = [L(200), L(201), L(202), L(203)];
    var e7 = data.aNu;
    aNg.qN(L(204) + (data.a0a / 100).toFixed(2) + "<br>" + L(165) + (e7 + 1) + " / " + data.vv + "<br>" + L(166) + aNh[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : 3]);
    return aNg;
  }
  function aNd() {
    var aNg = new qE();
    aNg.qH(L(205));
    aNg.qN(L(206) + data.aNv + "<br>" + L(165) + (data.aNw + 1) + " / " + data.vv + "<br>" + L(166) + bo.eA(data.aNw));
    if (data.aNO) {
      var rO = new rP({
        value: bj.eK.data[157].value,
        e8: -1
      }, 1, undefined, function (e) {
        bj.s3.s4(157, aNj(e.target.value));
      });
      rO.e.style.marginTop = "0.6em";
      aNg.qS(rO);
      var aNp = new w(L(171), function (e) {
        if (e.textContent === L(171)) {
          e.textContent = L(172);
          rO.e.readOnly = true;
          aNx[0].qv(0);
          aNx[1].qv(0);
          aNx[0].button.style.color = bB.oh;
          aNx[1].button.style.color = bB.oh;
          aNj(bj.eK.data[157].value);
        } else {
          aNm();
        }
        return true;
      });
      aNg.qS(new s6([aNp.button]));
      var aNx = [new w("−", function (e) {
        if (rO.e.readOnly && b0.y.aNl(0)) {
          bA.qb.a3Q(e);
          aNm();
          b0.aNn.aNo({
            ss: 2,
            so: data.so,
            value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
          });
        }
        return true;
      }, 1), new w("+", function (e) {
        if (rO.e.readOnly && b0.y.aNl(0)) {
          bA.qb.a3Q(e);
          aNm();
          b0.aNn.aNo({
            ss: 1,
            so: data.so,
            value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
          });
        }
        return true;
      }, 1)];
      var qK = aNg.qJ();
      function aNj(fF) {
        fF = bA.g9.a3u(fF, 3, 32767);
        qK.textContent = L(207, [fF - 1, fF, bj.eK.data[105].value]);
        return fF;
      }
      aNg.qS(new s6([aNx[0].button, aNx[1].button]));
      for (var aB = 0; aB < 2; aB++) {
        aNx[aB].button.style.fontSize = "1.6em";
      }
      function aNm() {
        aNp.button.textContent = L(171);
        rO.e.readOnly = false;
        aNx[0].qv(1);
        aNx[1].qv(1);
        aNx[0].button.style.color = bB.nj;
        aNx[1].button.style.color = bB.nj;
      }
      aNj(bj.eK.data[157].value);
    }
    return aNg;
  }
  function aNQ() {
    var aNg = new qE();
    aNg.qH(L(208));
    var a0r = data.aNy;
    if (a0r < 1) {
      aNg.qN(L(209));
      if (data.aNz === 0) {
        aNg.qJ(L(210));
      } else if (data.aNz === 1) {
        aNg.qJ(L(211));
      } else if (data.aNz === 2) {
        aNg.qJ(L(212));
      } else if (data.aNz === 3) {
        aNg.qJ(L(213));
      } else if (data.aNz === 4) {
        aNg.qJ(L(214));
      } else if (data.aNz === 5) {
        aNg.qJ(L(215));
      } else if (data.aNz === 6) {
        aNg.qJ(L(216));
      } else {
        aNg.qJ(L(217));
      }
    } else {
      aNg.qN(L(218));
      var a6s;
      if (a0r < 2) {
        a6s = L(219);
      } else if (a0r < 61) {
        if (a0r === 2) {
          a6s = L(220);
        } else {
          a6s = L(221, [a0r - 1]);
        }
      } else if (a0r < 84) {
        if (a0r === 61) {
          a6s = L(222);
        } else {
          a6s = L(223, [a0r - 60]);
        }
      } else if (a0r < 255) {
        if (a0r === 84) {
          a6s = L(224);
        } else {
          a6s = L(225, [a0r - 83]);
        }
      } else {
        a6s = L(226);
      }
      aNg.qJ(a6s);
    }
    aNg.qS(new sG());
    if (data.aNO) {
      var qK = aNg.qJ();
      aNg.qS(new s6([new w(bj.v9.u5(data.so) ? L(227) : L(228), function (e) {
        if (bj.v9.vM(data.so)) {
          e.textContent = L(227);
          aNj(1);
        } else {
          e.textContent = L(228);
          aNj(0);
        }
        return true;
      }).button]));
      function aNj(fF) {
        qK.textContent = fF ? L(229) : "";
      }
      if (bj.v9.u5(data.so)) {
        aNj(1);
      }
      aNg.qS(new sG());
    }
    var rO = new rP({
      value: data.username,
      e8: -1
    });
    rO.e.readOnly = true;
    aNg.qS(rO);
    aNg.qS(new s6([new w(L(174), function (e) {
      bA.qb.a3P(rO.e);
      bA.qb.a3Q(e);
      return true;
    }).button]));
    if (!data.aNO) {
      aNg.qJ(L(230));
    }
    return aNg;
  }
  function aNR(qW) {
    if (data.aNO) {
      return;
    }
    var aNg = new qE();
    aNg.qH(L(231));
    var qK = aNg.qJ(data.aO0.length + " / 160");
    qK.style.textAlign = "center";
    var aCH = true;
    var aO1 = new us(0, 1, function (e) {
      var gG = e.target.value.length;
      qK.textContent = gG + " / 160";
      if (gG > 160) {
        if (aCH) {
          aCH = false;
          aNp.qv(1);
          aNp.button.style.color = bB.nj;
        }
      } else if (!aCH) {
        aCH = true;
        aNp.qv(0);
        aNp.button.style.color = bB.oh;
      }
    });
    aO1.e.rows = 6;
    aO1.e.style.fontSize = "1em";
    aO1.uz(data.aO0);
    aNg.qS(aO1);
    var aNp = new w(L(232), function () {
      if (!aCH) {
        return true;
      }
      t.u(8, t.a5A().aMs, new sr(29, {
        ss: 1,
        qI: aO1.v1().substring(0, 160)
      }));
    }, 0, 0, 1);
    aNg.qS(new s6([aNp.button]));
    if (data.aO2 === 0) {
      aNg.qJ(L(233, [data.aO3]));
      qW.push(aNg);
      return;
    }
    aNg.qS(new s6([new w(data.aO2 === 1 ? L(234) : L(235), function () {
      t.u(8, t.a5A().aMs, new sr(29, {
        ss: 0,
        qI: ""
      }));
    }, 0, 0, 1).button]));
    aNg.qJ(data.aO2 === 1 ? L(236, [data.aO4 - 1]) : L(237, [data.aO4 - 1]));
    aNg.qJ(L(233, [data.aO3]));
    qW.push(aNg);
  }
  function aNS(qW) {
    if (!data.aNO) {
      return;
    }
    if (data.aO2 === 0) {
      return;
    }
    var aNg = new qE();
    aNg.qH(L(238));
    aNg.qL(data.aO0);
    aNg.qS(new s6([new w(L(239, 0, "Report"), function (e) {
      if (b0.y.aNl(0)) {
        bA.qb.a3Q(e);
        b0.aNn.aO5({
          ss: 5,
          so: data.so
        });
      }
      return true;
    }, 0, 0, 1).button]));
    qW.push(aNg);
  }
  function aNb(qW) {
    var aNg = new qE();
    var aO6 = data.vz;
    aNg.qH(L(240));
    aNg.qN(L(241, [data.vx.length ? "[" + data.vx + "]" : "-"]));
    aNg.qN(L(242, [bA.ra.a4E(aO6, 0.01, 2)]));
    aNg.qN(L(243, [data.w1 + 1 + " / " + data.vv]));
    var aO7 = data.w2;
    aNg.qN(L(244, [bA.ra.a4E(aO7, 0.1, 1)]));
    var aO8 = data.w4;
    aNg.qN(L(245, [aO8]));
    aNg.qN(L(246, [bA.ra.a4E(aO7 / Math.max(aO8, 1), 0.1, 2)]));
    aO6 = data.w0;
    aNg.qH(L(247), "0.8em");
    aNg.qN(L(241, [data.vy.length ? "[" + data.vy + "]" : "-"]));
    aNg.qN(L(242, [bA.ra.a4E(aO6, 0.01, 2)]));
    aO7 = data.w3;
    aNg.qN(L(244, [bA.ra.a4E(aO7, 0.1, 1)]));
    aO8 = data.w5;
    aNg.qN(L(245, [aO8]));
    aNg.qN(L(246, [bA.ra.a4E(aO7 / Math.max(aO8, 1), 0.1, 2)]));
    if (!data.aNO) {
      aNg.qJ(L(248));
      aNg.qJ(L(249));
    }
    qW.push(aNg);
  }
  function aNc(qW) {
    var aNg = new qE();
    aNg.qH(L(250));
    aNg.qN(L(204) + (data.aO9 / 10).toFixed(1) + "<br>" + L(166) + (data.aOA.length ? L(251, [data.aOA]) : L(252)));
    if (data.aNO) {
      aNg.qS(new s6([new w(L(253), function (e) {
        if (b0.y.aNl(0)) {
          bA.qb.a3Q(e);
          b0.aNn.aO5({
            ss: 4,
            so: data.so
          });
        }
        return true;
      }, 0, 0, 1).button]));
      aNg.qJ(L(254));
      aNg.qJ(L(255));
    } else {
      aNg.qJ(L(256));
    }
    qW.push(aNg);
  }
  function aNe(qW) {
    if (data.aNO && !data.aOB) {
      return;
    }
    if (a0.id !== 0 && !data.aNO && !data.aOB) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Patreon");
    if (!data.aNO && data.aOC) {
      aNg.qS(new s6([new w(L(176), function () {
        b0.aNn.aO5({
          ss: 7,
          so: data.so
        });
        data.aOC = 0;
        t.u(7);
      }).button]));
      qW.push(aNg);
      return;
    }
    if (data.aOB) {
      aNg.qN(L(257, [(data.aOD / 100).toFixed(2)]) + "<br>" + L(258, [1 + data.aOE + " / " + data.aOF]) + "<br>" + L(259, [data.aOG ? L(260) : L(261)]));
      if (!data.aNO) {
        aNg.qS(new s6([new w(L(262), function () {
          b0.aNn.aO5({
            ss: 8,
            so: data.so
          });
          data.aOB = 0;
          bj.s3.s4(160, 0);
          t.u(7);
        }).button]));
      }
      qW.push(aNg);
      return;
    }
    aNg.qN(L(263), "0.75em").style.marginBottom = "0.3em";
    aNg.qN("  • " + L(264), "0.75em").style.whiteSpace = "pre";
    aNg.qN("  • " + L(265), "0.75em").style.whiteSpace = "pre";
    aNg.qN("  • " + L(266), "0.75em").style.whiteSpace = "pre";
    aNg.qN(L(267), "0.75em").style.marginTop = "1.0em";
    aNg.qN(L(268), "0.75em").style.marginTop = "1.0em";
    aNg.qN("<a href='" + bK.aOH + "' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em";
    var a3O = "https://www.patreon.com/oauth2/authorize?state=" + data.so + "&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/";
    aNg.qN(L(269), "0.75em").style.marginTop = "1.0em";
    aNg.qN("<a href='" + a3O + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em";
    if (!data.aNO) {
      aNg.qS(new sG());
      aNg.qS(new s6([new w(L(177), function () {
        b0.aNn.aO5({
          ss: 6,
          so: data.so
        });
        data.aOC = 1;
        t.u(7);
      }).button]));
      aNg.qN(L(270), "0.75em").style.marginTop = "0.75em";
    }
    qW.push(aNg);
  }
  this.show = function () {
    if (data.aNO) {
      bI.aOI("account", data.so);
    }
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aNN.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aNA() {
  var aOJ;
  var aOK;
  var aOL;
  function qu() {
    aOJ = new uU(L(271), [new w("⬅️ " + L(37), aOM)]);
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    aOO();
    if (aD.data.aIncomeType !== 2) {
      aD.data.aIncomeData = null;
    }
    t.aNK()[19] = null;
    t.a1J();
  }
  function aOO() {
    if (aD.data.aIncomeType === 2) {
      bA.qj.a2n(aOL.v1(), aD.data.aIncomeData, 255);
      if (!bA.qj.max(aD.data.aIncomeData)) {
        aD.data.aIncomeType = 0;
      }
    } else if (aD.data.aIncomeType === 1 && !aD.data.aIncomeValue) {
      aD.data.aIncomeType = 0;
    }
  }
  function aON() {
    var qW = [];
    aOP(qW);
    aOQ(qW);
    aOR(qW);
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    aNg.qP(new uP({
      uT: [L(273), L(274), L(275)],
      value: aD.data.aIncomeType
    }, function (e8) {
      aOO();
      if (e8 === 2 && !aD.data.aIncomeData) {
        aD.data.aIncomeData = new Uint8Array(aD.ek);
      }
      aD.data.aIncomeType = e8;
      t.u(22);
    }));
    qW.push(aNg);
  }
  function aOQ(qW) {
    if (aD.data.aIncomeType !== 1) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Value");
    aNg.qS(new rP({
      e8: -1,
      value: aD.data.aIncomeValue
    }, 1, 0, function (e) {
      var value = bL.hv(Math.floor(e.target.value), 0, 255);
      e.target.value = aD.data.aIncomeValue = value;
    }));
    qW.push(aNg);
  }
  function aOR(qW) {
    if (aD.data.aIncomeType !== 2) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Data");
    aOL = new us(0, 1, 0, 1);
    aOL.uz(bA.ra.a4K(aD.data.aIncomeData, 4));
    aNg.qS(aOL);
    qW.push(aNg);
  }
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function aND() {
  var aOJ;
  var aOK;
  var aOL;
  function qu() {
    aOJ = new uU(L(62), [new w("⬅️ " + L(37), aOM)]);
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    aOO();
    aOS();
    t.aNK()[19] = null;
    t.a1J();
  }
  function aOO() {
    if (aD.data.botDifficultyType === 3) {
      bA.qj.a2n(aOL.v1(), aD.data.botDifficultyData, aE.kL.length - 1);
    }
  }
  function aOS() {
    if (aD.data.botDifficultyType === 3) {
      if (!bA.qj.a2b(aD.data.botDifficultyData)) {
        aD.data.botDifficultyType = 0;
      }
    }
    if (aD.data.botDifficultyType !== 3) {
      aD.data.botDifficultyData = null;
    }
  }
  function aON() {
    var qW = [];
    aOP(qW);
    if (aD.data.botDifficultyType === 0) {
      aOT(qW, -1);
    } else if (aD.data.botDifficultyType === 2) {
      for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) {
        if (aD.data.teamPlayerCount[aB]) {
          aOT(qW, aB);
        }
      }
    } else if (aD.data.botDifficultyType === 3) {
      aOR(qW);
    }
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    var uT = [L(274), L(276), L(277), L(275)];
    var value = aD.data.botDifficultyType;
    if (aD.data.gameMode === 0) {
      value = Math.min(value, 2);
      uT.splice(2, 1);
    }
    aNg.qP(new uP({
      uT: uT,
      value: value
    }, function (e8) {
      aOO();
      aD.data.botDifficultyType = e8;
      if (aD.data.gameMode === 0 && e8 === 2) {
        aD.data.botDifficultyType = 3;
      }
      if (aD.data.botDifficultyType === 3 && !aD.data.botDifficultyData) {
        aD.data.botDifficultyData = new Uint8Array(aD.ek);
      }
      if (aD.data.botDifficultyType === 2 && !aD.data.botDifficultyTeam) {
        aD.data.botDifficultyTeam = new Uint8Array(9);
      }
      t.u(25);
    }));
    qW.push(aNg);
  }
  function aOT(qW, e8) {
    var aNg = new qE();
    aNg.qH(e8 < 0 ? L(62) : L(61) + " " + bg.a0U[e8 % 9]);
    if (e8 >= 0) {
      aNg.qN(L(278) + ": " + aD.data.teamPlayerCount[e8]).style.marginBottom = "1em";
    }
    var value = e8 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e8];
    aNg.qP(new uP({
      uT: aE.kL,
      value: value
    }, function (hf) {
      if (e8 < 0) {
        aD.data.botDifficultyValue = hf;
      } else {
        aD.data.botDifficultyTeam[e8] = hf;
      }
    }));
    qW.push(aNg);
  }
  function aOR(qW) {
    var aNg = new qE();
    aNg.qH("Data");
    aOL = new us(0, 1, 0, 1);
    aOL.uz(bA.ra.a4K(aD.data.botDifficultyData, 8));
    aNg.qS(aOL);
    qW.push(aNg);
  }
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function aOU(data) {
  var aNM;
  var aOV;
  var aOW;
  var aOX;
  var aOY;
  var aOZ;
  var aOa;
  var colors;
  var aOb;
  var aOc;
  var aOd = 0;
  var aOe = 0;
  var aOf = false;
  var aOg = false;
  var aOh = [1, 5, 60, 240, 1440, 10080, 43200];
  function dd() {
    aOi();
    aOj();
    aOk();
    var aOl = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"];
    aNM = new uU(L(279) + ", " + aOl[data.aOm] + ", " + bA.a2S.a3C(aOb), [new w("⬅️ " + L(37), function () {
      t.u(1);
    }), new w(L(280), function () {
      t.u(14);
    })], false);
  }
  function aOi() {
    var aB;
    var eq = data.data;
    var en = eq.length;
    var max = 1;
    for (aB = 0; aB < en; aB++) {
      max = Math.max(max, eq[aB].aOn.length);
    }
    for (aB = 0; aB < en; aB++) {
      while (eq[aB].aOn.length < max) {
        eq[aB].aOn.unshift(0);
      }
    }
  }
  function aOj() {
    var gM;
    var dt = new Date();
    var a3D = dt.getTimezoneOffset() * 60000;
    var hf = dt.getTime() - a3D;
    aOb = new Date(hf);
    if (data.aOm === 6) {
      aOo(dt, a3D);
      return;
    }
    gM = aOh[data.aOm] * 60000;
    if (data.aOm <= 4) {
      aOc = new Date(hf + gM - dt.getTime() % gM);
      return;
    }
    aOc = new Date(hf + gM - (dt.getTime() + 259200000) % gM);
  }
  function aOo(dt, a3D) {
    var aOp = dt.getUTCFullYear();
    var month = dt.getUTCMonth() + 1;
    if (month < 12) {
      aOc = new Date(Date.UTC(aOp, month) - a3D);
    } else {
      aOc = new Date(Date.UTC(aOp + 1, 0) - a3D);
    }
  }
  function aOk() {
    var f8 = bA.color;
    colors = [bB.nj, f8.nb(255, 0, 0), f8.nb(0, 200, 0), f8.nb(80, 80, 255), f8.nb(255, 255, 0), f8.nb(255, 0, 255), f8.nb(0, 255, 255), f8.nb(255, 140, 0), f8.nb(128, 128, 128), f8.nb(0, 255, 140)];
  }
  this.show = function () {
    aOg = bj.eK.data[127].value;
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    var f8 = h.k;
    var ui = aNM.uf();
    var aOq = f8 * ui.uh;
    var rv = f8 * ui.rv;
    aOZ = bA.qb.tF(0.06);
    aOa = bA.qb.tF(0.04);
    aOV = bA.qb.tF(0.06);
    aOW = rv + aOZ;
    aOX = h.i - aOV - aOa;
    aOY = aOq + rv - aOW - aOa;
  };
  this.uj = function () {
    aNM.uj();
    aOr();
    aOs();
    aOt();
  };
  function aOs() {
    uk.lineWidth = bc.z7;
    uk.strokeStyle = bB.nj;
    uk.beginPath();
    uk.moveTo(aOV, aOW);
    uk.lineTo(aOV, aOW + aOY);
    uk.lineTo(aOV + aOX, aOW + aOY);
    uk.stroke();
  }
  function aOr() {
    var aB;
    var aOn;
    var gG;
    var eu;
    var f6;
    var g = data.data;
    var aOu = 1;
    var aOv = 0.125;
    var aOw = aOg ? 65536 : 0;
    for (aB = 0; aB < g.length; aB++) {
      aOn = g[aB].aOn;
      gG = aOn.length;
      aOu = Math.max(gG, aOu);
      for (f6 = 0; f6 < gG; f6++) {
        aOv = Math.max(aOn[f6], aOv);
        aOw = Math.min(aOn[f6], aOw);
      }
    }
    var nA = aOW + aOY;
    var y5 = aOY / (aOv - aOw);
    var y4 = 1 / (aOu - 1);
    uk.lineWidth = bc.z7;
    for (aB = 0; aB < g.length; aB++) {
      aOn = g[aB].aOn;
      gG = aOn.length;
      eu = aOV;
      uk.beginPath();
      uk.moveTo(eu + aOX, nA - y5 * (aOn[gG - 1] - aOw));
      for (f6 = gG - 2; f6 >= 0; f6--) {
        uk.lineTo(eu + y4 * f6 * aOX, nA - y5 * (aOn[f6] - aOw));
      }
      uk.strokeStyle = colors[aB];
      uk.stroke();
    }
    aOx(aOw, aOv, nA, y5);
    aOy(aOu);
    a5z(aOu, aOw, aOv);
  }
  function aOx(aOw, aOv, nA, y5) {
    uk.font = bA.qb.sQ(0, aOV * 0.25);
    bA.qb.textBaseline(uk, 1);
    bA.qb.textAlign(uk, 2);
    uk.fillStyle = colors[0];
    var eu = aOV * 0.92;
    for (var aB = 0; aB < 3; aB++) {
      var fF = aOw + aB * (aOv - aOw) / 2;
      uk.fillText((fF / 1000).toFixed(3), eu, nA - y5 * (fF - aOw));
    }
  }
  function aOy(aOu) {
    var ew = aOW + aOY + aOa * 0.15;
    uk.font = bA.qb.sQ(0, Math.min(aOa * 0.4, h.i * 0.028));
    bA.qb.textBaseline(uk, 0);
    bA.qb.textAlign(uk, 2);
    uk.fillStyle = colors[0];
    uk.fillText(bA.a2S.a3F(aOb), aOV + aOX, ew);
    bA.qb.textAlign(uk, 0);
    uk.fillText(bA.a2S.a3F(new Date(aOc.getTime() - (aOu - 1) * 60000 * aOh[data.aOm])), aOV, ew);
  }
  function a5z(aOu, aOw, aOv) {
    if (!aOf) {
      return;
    }
    if (aOu < 2) {
      return;
    }
    var gL = (aOd - aOV) / aOX;
    var e8 = gL * (aOu - 1);
    var aOz = Math.floor(e8);
    var aP0 = Math.floor(e8 + 1);
    var aP1 = e8 - aOz;
    var aP2 = 100000;
    var aP3 = -1;
    var aP4 = -1;
    var aP5 = aOv - (aOv - aOw) * (aOe - aOW) / aOY;
    var g = data.data;
    for (var aB = 0; aB < g.length; aB++) {
      var aOn = g[aB].aOn;
      var gG = aOn.length;
      if (aP0 >= gG) {
        continue;
      }
      var fF = aOn[aOz] + aP1 * (aOn[aP0] - aOn[aOz]);
      var aCU = Math.abs(aP5 - fF);
      if (aCU < aP2) {
        aP2 = aCU;
        aP3 = aB;
        aP4 = fF;
      }
    }
    if (aP3 === -1) {
      return;
    }
    var aP6 = aOW + aOY - (aP4 - aOw) / (aOv - aOw) * aOY;
    uk.lineWidth = bc.z7 * 0.5;
    uk.strokeStyle = colors[aP3];
    uk.beginPath();
    uk.moveTo(aOV, aP6);
    uk.lineTo(aOd, aP6);
    uk.lineTo(aOd, aOW + aOY);
    uk.stroke();
    uk.beginPath();
    uk.arc(aOd, aP6, aOV * 0.1, 0, Math.PI * 2);
    uk.fillStyle = colors[aP3];
    uk.fill();
    var aP7 = aOW + aOY + aOa * 0.15;
    bA.qb.textAlign(uk, 1);
    var dt;
    var a8d;
    if (e8 > aOu - 2) {
      a8d = aOc.getTime() - aOh[data.aOm] * 60000;
      dt = new Date(a8d + (e8 - (aOu - 2)) * (aOb.getTime() - a8d));
    } else {
      dt = new Date(aOc.getTime() - (aOu - e8 - 1) * 60000 * aOh[data.aOm]);
    }
    var qI = bA.a2S.a3F(dt);
    var aP8 = bA.qb.measureText(qI);
    var aP9 = bL.hv(aOd, aOV + aP8 * 0.5, aOV + aOX - aP8 * 0.5);
    uk.fillStyle = bA.color.nb(70, 50, 20);
    uk.fillRect(aP9 - aP8 * 0.52, aOW + aOY, aP8 * 1.04, aOa * 0.55);
    uk.fillStyle = colors[0];
    uk.fillText(qI, aP9, aP7);
    uk.font = bA.qb.sQ(0, aOV * 0.25);
    bA.qb.textBaseline(uk, 1);
    bA.qb.textAlign(uk, 2);
    aP9 = aOV * 0.92;
    qI = (aP4 / 1000).toFixed(3);
    aP8 = bA.qb.measureText(qI);
    var aPA = aP9 - aP8 * 1.04;
    uk.fillStyle = bA.color.nb(70, 50, 20);
    uk.fillRect(aPA, aP6 - aOV * 0.1625, aOV - aPA, aOV * 0.275);
    uk.fillStyle = colors[aP3];
    uk.fillText(qI, aP9, aP6);
  }
  function aOt() {
    var aB;
    var fontSize = aOZ * 0.5;
    uk.font = bA.qb.sQ(0, fontSize);
    bA.qb.textBaseline(uk, 1);
    bA.qb.textAlign(uk, 0);
    var g = data.data;
    var en = g.length;
    var ew = aOW - aOZ * 0.5;
    var qI = "";
    for (aB = 0; aB < en; aB++) {
      qI += g[aB].name + "  ";
    }
    qI = qI.trim();
    var aP8 = bA.qb.measureText(qI);
    var eu = (h.i - aP8) * 0.5;
    if (aP8 > h.i) {
      eu = 0;
      uk.font = bA.qb.sQ(0, h.i / aP8 * fontSize);
    }
    for (aB = 0; aB < en; aB++) {
      uk.fillStyle = colors[aB];
      uk.fillText(g[aB].name, eu, ew);
      eu += bA.qb.measureText(g[aB].name + "  ");
    }
  }
  this.h0 = function (lP, lQ) {
    aPB(lP, lQ);
  };
  this.a1d = function (lP, lQ) {
    aPB(lP, lQ);
  };
  function aPB(lP, lQ) {
    aOd = lP;
    aOe = lQ;
    if (!a27(lP, lQ)) {
      if (aOf) {
        bf.dl = true;
      }
      aOf = false;
      return;
    }
    aOf = true;
    bf.dl = true;
  }
  function a27(lP, lQ) {
    return lP > aOV && lP < aOV + aOX && lQ > aOW && lQ < aOW + aOY;
  }
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aN2() {
  var aNM;
  var aNN;
  function dd() {
    aNM = new uU(L(281), [new w("⬅️ " + L(37), function () {
      t.aNJ(13);
    })]);
    aNN = new qU(aNM.ua, aNP());
  }
  function aNP() {
    var qW = [];
    qW.push(aPC());
    qW.push(aPD());
    qW.push(aPE());
    qW.push(aPF());
    return qW;
  }
  function aPC() {
    var aNg = new qE();
    aNg.qH(L(282));
    aNg.qJ(L(283));
    var aNp = new w(L(284), function () {
      bj.s3.s4(130, 0);
      t.y.aPG();
    }, 0, 0, 1);
    var rO = new rP(bj.eK.data[126], 0, function () {
      aNp.button.click();
    });
    aNg.qS(rO);
    rO.e.placeholder = "a,b,c";
    rO.e.style.marginTop = "0.5em";
    aNg.qS(new s6([aNp.button]));
    return aNg;
  }
  function aPD() {
    var aNg = new qE();
    var aNp = new w(L(284), function () {
      bj.s3.s4(130, 1);
      t.y.aPG();
    }, 0, 0, 1);
    var aPH = new rP(bj.eK.data[129], 1, function () {
      aPH.e.focus();
    });
    var aPI = new rP(bj.eK.data[128], 1, function () {
      aNp.button.click();
    });
    aNg.qH(L(285));
    aNg.qS(aPI);
    aPI.e.style.marginBottom = "0.5em";
    aNg.qH(L(286));
    aNg.qS(aPH);
    aNg.qS(new s6([aNp.button]));
    return aNg;
  }
  function aPE() {
    var aNg = new qE();
    aNg.qH(L(287));
    bj.eK.data[125].uT = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"];
    aNg.qP(new uP(bj.eK.data[125]));
    return aNg;
  }
  function aPF() {
    var aNg = new qE();
    aNg.qH(L(288));
    aNg.qS(new s0(bj.eK.data[127], L(289)));
    return aNg;
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aNN.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aN1() {
  var aNM;
  var aPJ;
  var aOX;
  var aPK;
  var aPL;
  var aPM;
  var colors = [0, 0, 0];
  var aPN = -1;
  function dd() {
    aNM = new uU(L(290), [new w("⬅️ " + L(37), function () {
      t.y.aCO();
    })], false);
    aPJ = new rC([0.5, 0.25], [0.5, 0.5], 1);
  }
  this.show = function () {
    var fF = bj.eK.data[121].value;
    colors[0] = (fF >> 12) / 63;
    colors[1] = (fF >> 6 & 63) / 63;
    colors[2] = (fF & 63) / 63;
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    bj.s3.s4(121, (aPO(0, 64) << 12) + (aPO(1, 64) << 6) + aPO(2, 64));
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aPJ.resize();
    var f8 = h.k;
    var ui = aNM.uf();
    aPJ.ew = Math.max(aPJ.ew, f8 * ui.rv + bc.gap);
    var aPP = f8 * ui.uh - bc.gap * 2;
    aPJ.j = Math.min(aPJ.j, aPP);
    aPJ.i = aPJ.j * 2;
    aPJ.ew = f8 * ui.rv + (f8 * ui.uh - aPJ.j) * 0.5;
    aPJ.eu = (h.i - aPJ.i) * 0.5;
    aOX = aPJ.i * 0.25;
    aPK = aPJ.eu + aOX + bc.gap;
    aPL = aPJ.i - aOX - bc.gap;
    aPM = (aPJ.j - bc.gap * 2) / 3;
  };
  this.uj = function () {
    aNM.uj();
    uk.lineWidth = bc.z7;
    aOs();
    aPQ(0);
    aPQ(1);
    aPQ(2);
  };
  function aOs() {
    var e7 = aPO(0);
    var tE = aPO(1);
    var f7 = aPO(2);
    uk.fillStyle = "rgb(" + e7 + "," + tE + "," + f7 + ")";
    uk.fillRect(aPJ.eu, aPJ.ew, aOX, aPJ.j);
    uk.strokeStyle = bB.nj;
    uk.strokeRect(aPJ.eu, aPJ.ew, aOX, aPJ.j);
    uk.fillStyle = e7 + tE + f7 < 306 && tE < 150 ? bB.nj : bB.na;
    bA.qb.textBaseline(uk, 1);
    bA.qb.textAlign(uk, 1);
    uk.font = bA.qb.sQ(0, aPJ.j * 0.1);
    uk.rotate(-Math.PI / 2);
    uk.fillText(L(291), -aPJ.ew - aPJ.j * 0.5, aPJ.eu + aOX * 0.5);
    uk.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aPQ(aB) {
    var e7 = aB === 0 ? 150 : aB === 2 ? 30 : 0;
    var tE = aB === 1 ? 130 : aB === 2 ? 30 : 0;
    var f7 = aB === 2 ? 220 : 0;
    var aPR = aPJ.ew + aB * (bc.gap + aPM);
    uk.fillStyle = "rgb(" + e7 + "," + tE + "," + f7 + ")";
    uk.fillRect(aPK, aPR, colors[aB] * aPL, aPM);
    uk.strokeStyle = bB.nj;
    uk.strokeRect(aPK, aPR, aPL, aPM);
    uk.fillStyle = bB.nj;
    uk.font = bA.qb.sQ(0, aPM * 0.32);
    bA.qb.textBaseline(uk, 1);
    bA.qb.textAlign(uk, 0);
    uk.fillText((aB === 0 ? L(292) : aB === 1 ? L(293) : L(294)) + aPO(aB), aPK + bc.gap, aPR + aPM * 0.53);
  }
  function aPO(aB, aPS) {
    aPS = aPS || 256;
    return bL.hv(Math.floor(aPS * colors[aB]), 0, aPS - 1);
  }
  this.h0 = function (lP, lQ) {
    if (!a27(lP, lQ)) {
      return;
    }
    aPN = bL.hv(Math.floor((lQ - aPJ.ew) / (aPM + bc.gap * 0.75)), 0, 2);
    colors[aPN] = bL.hv((lP - aPK) / aPL, 0, 1);
    bf.dl = true;
  };
  function a27(lP, lQ) {
    if (lP < aPK || lQ < aPJ.ew || lP > aPJ.eu + aPJ.i || lQ > aPJ.ew + aPJ.j) {
      return false;
    }
    return true;
  }
  this.a1d = function (lP) {
    if (aPN === -1) {
      return;
    }
    colors[aPN] = bL.hv((lP - aPK) / aPL, 0, 1);
    bf.dl = true;
  };
  this.a1g = function (lP, lQ, deltaY) {
    if (!a27(lP, lQ)) {
      return;
    }
    var e8 = bL.hv(Math.floor((lQ - aPJ.ew) / (aPM + bc.gap * 0.75)), 0, 2);
    colors[e8] = bL.hv(colors[e8] + (1 - (deltaY > 0) * 2) / 256, 0, 1);
    bf.dl = true;
  };
  this.a21 = function () {
    if (aPN >= 0) {
      aPN = -1;
      bf.dl = true;
    }
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aN9() {
  var aOJ;
  var aOK;
  var aOL;
  function qu() {
    var rA = [new w("⬅️ " + L(37), aOM)];
    if (aD.data.gameMode === 1) {
      rA.push(new w(L(295), aPT, 1, 1));
    }
    aOJ = new uU(L(296), rA);
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    aOO();
    if (aD.data.colorsType !== 1) {
      aD.data.colorsData = null;
    }
    t.aNK()[19] = null;
    t.a1J();
  }
  function aPT() {
    aOO();
    t.u(21);
  }
  function aOO() {
    if (aD.data.gameMode === 1) {
      aD.a4b.a4g();
    } else if (aD.data.gameMode === 0 && aD.data.colorsType === 1) {
      bA.qj.a2n(aOL.v1(), aD.data.colorsData, 262143);
    }
  }
  function aON() {
    var qW = [];
    aOP(qW);
    if (aD.data.gameMode === 0) {
      if (aD.data.colorsType === 1) {
        aOR(qW);
      }
      return qW;
    }
    aD.a4b.a4g();
    qW.push(aPU());
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    if (aD.data.gameMode === 0) {
      aNg.qP(new uP({
        uT: [L(297), L(275)],
        value: aD.data.colorsType
      }, function (e8) {
        aOO();
        aD.data.colorsType = e8;
        if (aD.data.colorsType === 1 && (!aD.data.colorsData || aD.data.colorsData.length !== aD.ek)) {
          aD.data.colorsData = new Uint32Array(aD.ek);
        }
        t.u(21);
      }));
      aNg.qS(new sG());
    }
    aNg.qS(new s0({
      value: aD.data.selectableColor
    }, L(298), function (value) {
      aD.data.selectableColor = value;
    }));
    qW.push(aNg);
  }
  function aOR(qW) {
    var aNg = new qE();
    aNg.qH("Data");
    aOL = new us(0, 1, 0, 1);
    aOL.uz(bA.ra.a4K(aD.data.colorsData, 1));
    aNg.qS(aOL);
    qW.push(aNg);
  }
  function aPU() {
    var aNg = new qE();
    aNg.qH(L(278));
    for (var aB = 0; aB < bg.a0U.length; aB++) {
      var hf = (aB + 1) % bg.a0U.length;
      var e = aNg.qN((hf === 0 ? "" : "Team ") + bg.a0U[hf]);
      if (aB) {
        e.style.marginTop = "0.5em";
      }
      aNg.qS(new rP({
        e8: -1,
        value: aD.data.teamPlayerCount[hf]
      }, 1, 0, function (e) {
        aOJ.ub[1].qv(0);
        var playerCount = bL.hv(Math.floor(e.target.value), 0, 512);
        e.target.value = playerCount;
        aD.data.teamPlayerCount[e.target.aPV] = playerCount;
      })).e.aPV = hf;
    }
    return aNg;
  }
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function sr(id, a3x, aPW) {
  var aNM;
  var aPX;
  this.aPY = true;
  this.aPZ = id;
  function dd() {
    aNM = new uU(L(299), [new w("⬅️ " + L(37), function () {
      if (aPW) {
        t.u(29);
      } else {
        t.y.aCO();
      }
    })]);
    aPX = new s5(aNM.ua, L(300));
  }
  this.show = function () {
    aNM.show();
    this.resize();
    if (id === 15) {
      if (b0.y.aPa(id)) {
        aPb();
      } else {
        aPc();
      }
    } else if (id === 16) {
      if (b0.y.aPa(id)) {
        b0.aCK.aPd(2);
      } else {
        aPc();
      }
    } else if (id === 17) {
      if (b0.y.aPa(id)) {
        b0.aCK.aPd(3);
      } else {
        aPc();
      }
    } else if (id === 18) {
      b0.y.close(0, 3253);
      b0.y.aG5(0, id);
      aPc();
    } else if (id === 21) {
      if (b0.y.aPa(id)) {
        b0.aPe.aPf(a3x.t9, a3x.tA, a3x.tB);
      } else {
        aPc();
      }
    } else if (id === 22) {
      if (b0.y.aPa(id)) {
        b0.aPe.aPg(a3x.t9, a3x.aPh, a3x.aPi);
      } else {
        aPc();
      }
    } else if (id === 23) {
      if (b0.y.aPa(id)) {
        b0.aPe.aPj(a3x.aOm, a3x.a0o);
      } else {
        aPc();
      }
    } else if (id === 24) {
      if (b0.y.aPa(id)) {
        b0.aPe.aPk(a3x.aOm, a3x.tA, a3x.tB);
      } else {
        aPc();
      }
    } else if (id === 25) {
      if (b0.y.aPa(id)) {
        b0.aNn.aO5(a3x);
      } else {
        aPc();
      }
    } else if (id === 28) {
      if (b0.y.aPa(id)) {
        b0.aPe.aPl(a3x.t9, a3x.aPh, a3x.aPi);
      } else {
        aPc();
      }
    } else if (id === 29) {
      if (b0.y.aPa(id)) {
        b0.aNn.aPm(a3x);
      } else {
        aPc();
      }
    } else if (id === 30) {
      if (b0.y.aPa(id)) {
        if (!b7.aCI()) {
          aPn();
        }
      } else {
        aPc();
      }
    } else if (id === 1000) {
      return;
    }
  };
  function aPc() {
    aPX.qX.innerHTML += "<br>" + L(301);
  }
  this.aPo = function () {
    if (id === 15) {
      aPb();
      return;
    }
    if (id === 16) {
      b0.aCK.aPd(2);
      return;
    }
    if (id === 17) {
      b0.aCK.aPd(3);
      return;
    }
    if (id === 18) {
      t.u(8, this.aMs, new sr(16));
      return;
    }
    if (id === 21) {
      b0.aPe.aPf(a3x.t9, a3x.tA, a3x.tB);
      return;
    }
    if (id === 22) {
      b0.aPe.aPg(a3x.t9, a3x.aPh, a3x.aPi);
      return;
    }
    if (id === 23) {
      b0.aPe.aPj(a3x.aOm, a3x.a0o);
      return;
    }
    if (id === 24) {
      b0.aPe.aPk(a3x.aOm, a3x.tA, a3x.tB);
      return;
    }
    if (id === 25) {
      b0.aNn.aO5(a3x);
      return;
    }
    if (id === 28) {
      b0.aPe.aPl(a3x.t9, a3x.aPh, a3x.aPi);
      return;
    }
    if (id === 29) {
      b0.aNn.aPm(a3x);
      return;
    }
    if (id === 30) {
      if (!b7.aCI()) {
        aPn();
      }
      return;
    }
    if (id === 1000) {
      this.aPZ = id = 25;
      b0.aNn.aO5(a3x);
      return;
    }
  };
  this.aCN = function (code, bu, data) {
    if (!bu && code !== id) {
      return;
    }
    if (code === 15 || code === 16) {
      t.u(7, this.aMs);
      return;
    }
    if (code === 17) {
      b0.y.close(0, 3252);
      bj.y.vj(0);
      if (bj.eK.data[117].uT && bj.eK.data[117].uT.length > 0) {
        var eq = bj.y.vk(0);
        bj.s3.s4(105, eq.so);
        bj.s3.s4(106, eq.password);
        t.u(8, this.aMs, new sr(16));
      } else {
        bj.s3.s4(105, "");
        t.y.aCO();
      }
      return;
    }
    if (code === 21) {
      t.u(10, this.aMs, new aPp(data));
      return;
    }
    if (code === 23) {
      t.u(13, this.aMs, new aOU({
        data: data,
        aOm: a3x.aOm
      }));
      return;
    }
    if (code === 25) {
      t.y.aN3.so = a3x.so;
      bj.v9.mW(a3x.so);
      t.u(15, this.aMs);
      return;
    }
    if (code === 30) {
      if (data) {
        t.u(1);
        return;
      }
      aPn();
      return;
    }
  };
  function aPn() {
    var f7 = 1;
    t.u(4, 1, new v(L(302), L(303), false, [new w("🔄 Reload", function () {
      if (f7) {
        setTimeout(function () {
          t.u(1);
        }, 5000);
        a0.a1.a2();
      }
      f7 = 0;
    }, bB.o6)]));
  }
  function aPb() {
    bD.a7(48);
    bD.a8(24, Math.floor(bL.pow(24) * Math.random()));
    bD.a8(24, Math.floor(bL.pow(24) * Math.random()));
    bH.dd(bD.aC);
    bj.s3.s4(110, bF.st.su(bF.st.sv(8)));
    b0.aNn.aPq();
  }
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aPX.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aN7() {
  var aOJ;
  var aOK;
  function qu() {
    aOJ = new uU("🔧 " + L(304), [new w("⬅️ " + L(37), aOM), new w(L(305), aPr)]);
    aPs();
    aOK = new qU(aOJ.ua, aON());
  }
  function aPs() {
    aPt();
    aPu();
  }
  function aPu() {
    if (aD.data.canvas) {
      return;
    }
    if (aD.data.mapType === 2) {
      aD.data.canvas = bS.wg;
      return;
    }
    if (aD.data.mapType === 1) {
      aD.data.canvas = bS.aKn(bS.a51(aD.data), 0).wg;
      return;
    }
    aD.data.mapType = 0;
    aD.data.passableWater = aD.data.passableMountains = 1;
    aD.data.canvas = bS.aKn(bS.a51(aD.data), aD.data.mapSeed).wg;
  }
  function aPt() {
    if (aD.data.gameMode === 1) {
      if (!aD.data.teamPlayerCount) {
        aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]);
        aD.a4b.a4g();
      }
      var gG = bA.qj.a2h(aD.data.teamPlayerCount, 0);
      aD.data.numberTeams = gG;
    } else {
      if (aD.data.botDifficultyType === 2) {
        aD.data.botDifficultyType = 0;
      }
      if (aD.data.spawningType === 1) {
        aD.data.spawningType = 0;
      }
    }
  }
  function aOM() {
    if (aD.data.gameMode !== 1) {
      aD.data.teamPlayerCount = null;
    }
    aPv();
    aD.data.canvas = null;
    t.u(5, 5);
  }
  function aPv() {
    b9.pv.dd();
    bj.s3.s4(156, b9.a4s.zb());
  }
  function aPr() {
    aD.data.isReplay = 0;
    aPv();
    aD.a4b.a53();
    aa.aGG();
    aD.a4b.a50();
    aD.data.canvas = aD.data.mapType === 2 ? bS.wg : null;
    aD.a4f();
    aD.a4d = 1;
  }
  function aON() {
    var qW = [];
    aPw(qW);
    aPU(qW);
    aPx(qW);
    qW.push(aPy());
    qW.push(aPz());
    qW.push(aQ0());
    aQ1(qW);
    aQ2(qW);
    aQ3(qW);
    aQ4(qW);
    aQ5(qW);
    aQ6(qW);
    return qW;
  }
  function aPw(qW) {
    var aNg = new qE();
    aNg.qH(L(306));
    var a2x = aD.data.canvas;
    a2x.style.width = "100%";
    aNg.qS({
      e: a2x
    });
    aNg.qS(new s6([new w(L(307), function () {
      t.u(20);
    }).button]));
    qW.push(aNg);
  }
  function aPU(qW) {
    var aNg = new qE();
    aNg.qH(L(278));
    aNg.qS(new rP({
      e8: -1,
      value: aD.data.playerCount
    }, 1, 0, function (e) {
      var playerCount = bL.hv(Math.floor(e.target.value), 1, 512);
      e.target.value = aD.data.playerCount = playerCount;
      if (aD.data.gameMode === 1) {
        var a7a = bA.qj.a2h(aD.data.teamPlayerCount, 0);
        aD.a4b.a4g();
        var a7e = bA.qj.a2h(aD.data.teamPlayerCount, 0);
        if (a7e !== a7a) {
          aQ7();
        }
      }
    }));
    qW.push(aNg);
  }
  function aPx(qW) {
    var aNg = new qE();
    aNg.qH(L(308));
    aNg.qP(new uP({
      uT: ["Battle Royale", "Teams"],
      value: aD.data.gameMode
    }, function (e8) {
      if (aD.data.gameMode === e8) {
        return;
      }
      aD.data.gameMode = e8;
      aQ7();
    }));
    qW.push(aNg);
  }
  function aQ7() {
    aPt();
    var g = [aPy(), aPz(), aQ0()];
    for (var aB = 3; aB < 6; aB++) {
      t.removeChild(aOK.qX, aOK.qY[aB].qG);
      aOK.qY[aB] = g[aB - 3];
      aOK.qX.appendChild(aOK.qY[aB].qG);
    }
    aOK.resize();
  }
  function aPy() {
    var aNg = new qE();
    aNg.qH(L(296));
    var aQ8;
    if (aD.data.gameMode === 0) {
      aQ8 = [L(297), L(275)][aD.data.colorsType];
    } else {
      aQ8 = aD.data.numberTeams + " Team" + (aD.data.numberTeams === 1 ? "" : "s");
    }
    aNg.qN(aQ8);
    aNg.qS(new s6([new w(L(307), function () {
      t.u(21);
    }).button]));
    return aNg;
  }
  function aPz() {
    var aNg = new qE();
    aNg.qH(L(62));
    var g = [L(274) + ": " + aE.kL[aD.data.botDifficultyValue], L(276), L(277), L(275)];
    aNg.qN(g[aD.data.botDifficultyType]);
    aNg.qS(new s6([new w(L(307), function () {
      t.u(25);
    }).button]));
    return aNg;
  }
  function aQ0() {
    var aNg = new qE();
    aNg.qH("Spawning");
    var g = [L(297), L(309), L(275)];
    aNg.qN(g[aD.data.spawningType]);
    aNg.qS(new s6([new w(L(307), function () {
      t.u(24);
    }).button]));
    return aNg;
  }
  function aQ1(qW) {
    var aNg = new qE();
    aNg.qH(L(310));
    var g = [L(311), L(312), L(275)];
    aNg.qN(g[aD.data.playerNamesType]);
    aNg.qS(new s6([new w(L(307), function () {
      t.u(23);
    }).button]));
    qW.push(aNg);
  }
  function aQ2(qW) {
    var aNg = new qE();
    aNg.qH(L(271));
    var g = [L(273), L(274) + ": " + aD.data.aIncomeValue, L(275)];
    aNg.qN(g[aD.data.aIncomeType]);
    aNg.qS(new s6([new w(L(307), function () {
      t.u(22);
    }).button]));
    qW.push(aNg);
  }
  function aQ3(qW) {
    var aNg = new qE();
    aNg.qH(L(313));
    var g = [L(273), L(274) + ": " + aD.data.tIncomeValue, L(275)];
    aNg.qN(g[aD.data.tIncomeType]);
    aNg.qS(new s6([new w(L(307), function () {
      t.u(26);
    }).button]));
    qW.push(aNg);
  }
  function aQ4(qW) {
    var aNg = new qE();
    aNg.qH(L(314));
    var g = [L(273), L(274) + ": " + aD.data.iIncomeValue, L(275)];
    aNg.qN(g[aD.data.iIncomeType]);
    aNg.qS(new s6([new w(L(307), function () {
      t.u(27);
    }).button]));
    qW.push(aNg);
  }
  function aQ5(qW) {
    var aNg = new qE();
    aNg.qH(L(315));
    var g = [L(273), L(274) + ": " + aD.data.sResourcesValue, L(275)];
    aNg.qN(g[aD.data.sResourcesType]);
    aNg.qS(new s6([new w(L(307), function () {
      t.u(28);
    }).button]));
    qW.push(aNg);
  }
  function aQ6(qW) {
    var aNg = new qE();
    aNg.qH(L(316));
    aNg.qS(new s6([new w(L(317), function () {
      t.x();
      aD.a4b.a54();
      t.y.aIA[0] = 0;
      t.u(19);
    }).button]));
    aNg.qS(new s6([new w(L(318), function () {
      bm.aHz();
    }).button]));
    aNg.qS(new s6([new w(L(319), function () {
      bm.aI1();
      return true;
    }).button]));
    qW.push(aNg);
  }
  this.show = function () {
    aOJ.show();
    this.resize();
    aOJ.ua.scrollTop = t.y.aIA[0];
  };
  this.rs = function () {
    t.y.aIA[0] = aOJ.ua.scrollTop;
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function aNI() {
  var aOJ;
  var rU = true;
  function qu() {
    aOJ = new uU(L(320), [new w("⬅️ " + L(37), function () {
      t.aNJ(1);
    })]);
    aOJ.ua.style.overflowY = "auto";
    aOJ.ua.addEventListener("scroll", function () {
      rU = aOJ.ua.scrollTop >= aOJ.ua.scrollHeight - aOJ.ua.clientHeight - 2;
    });
  }
  this.clear = function () {
    aOJ.ua.textContent = "";
  };
  this.show = function () {
    this.clear();
    aQ9();
    aOJ.show();
    this.resize();
    rU = true;
    ro();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOJ.ua.style.padding = "0.4em " + bA.qb.qk(bc.qh);
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  function aQ9() {
    var a61 = bq.a5C();
    var en = a61.length;
    var rk = document.createDocumentFragment();
    for (var aB = 0; aB < en; aB++) {
      rl(rk, a61[aB]);
    }
    aOJ.ua.appendChild(rk);
    ro();
  }
  this.yb = function (a58) {
    var rk = document.createDocumentFragment();
    rl(rk, a58);
    aOJ.ua.appendChild(rk);
    ro();
  };
  function rl(rk, a58) {
    var qG = document.createElement("div");
    var aQA = document.createElement("span");
    var aQB = document.createElement("span");
    aQA.textContent = aW.aBC(a58.eM) + ":";
    aQA.style.color = bB.ny;
    aQA.style.paddingRight = "0.4em";
    aQA.style.display = "table-cell";
    aQA.style.width = "6ch";
    aQA.style.textAlign = "end";
    qG.appendChild(aQA);
    aQB.textContent = a58.qI;
    qG.appendChild(aQB);
    qG.style.display = "table";
    if (a58.pK) {
      aQC(qG, a58.pK);
    }
    rk.appendChild(qG);
  }
  function aQC(qG, pK) {
    if (pK >= 1024 - aj.rr.yu) {
      var aHv = document.createElement("img");
      aHv.src = aj.wj.yi[pK - 1024 + aj.rr.yu].toDataURL();
      aHv.style.width = "1.5em";
      aHv.style.height = "1.5em";
      aHv.style.verticalAlign = "middle";
      qG.appendChild(aHv);
    } else {
      var rZ = document.createElement("span");
      rZ.textContent = aj.rr.z9(pK);
      rZ.style.display = "inline-block";
      rZ.style.fontSize = "1.5em";
      rZ.style.lineHeight = "1em";
      rZ.style.verticalAlign = "middle";
      qG.appendChild(rZ);
    }
  }
  function ro() {
    if (rU) {
      aOJ.ua.scrollTop = aOJ.ua.scrollHeight;
    }
  }
  qu();
}
function aNF() {
  var aOJ;
  var aOK;
  var aOL;
  function qu() {
    aOJ = new uU(L(314), [new w("⬅️ " + L(37), aOM)]);
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    aOO();
    if (aD.data.iIncomeType !== 2) {
      aD.data.iIncomeData = null;
    }
    t.aNK()[19] = null;
    t.a1J();
  }
  function aOO() {
    if (aD.data.iIncomeType === 2) {
      bA.qj.a2n(aOL.v1(), aD.data.iIncomeData, 255);
    }
  }
  function aON() {
    var qW = [];
    aOP(qW);
    aOQ(qW);
    aOR(qW);
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    aNg.qP(new uP({
      uT: [L(273), L(274), L(275)],
      value: aD.data.iIncomeType
    }, function (e8) {
      aOO();
      if (e8 === 2 && !aD.data.iIncomeData) {
        aD.data.iIncomeData = new Uint8Array(aD.ek);
        aD.data.iIncomeData.fill(32);
      }
      aD.data.iIncomeType = e8;
      t.u(27);
    }));
    qW.push(aNg);
  }
  function aOQ(qW) {
    if (aD.data.iIncomeType !== 1) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Value");
    aNg.qS(new rP({
      e8: -1,
      value: aD.data.iIncomeValue
    }, 1, 0, function (e) {
      var value = bL.hv(Math.floor(e.target.value), 0, 255);
      e.target.value = aD.data.iIncomeValue = value;
    }));
    qW.push(aNg);
  }
  function aOR(qW) {
    if (aD.data.iIncomeType !== 2) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Data");
    aOL = new us(0, 1, 0, 1);
    aOL.uz(bA.ra.a4K(aD.data.iIncomeData, 4));
    aNg.qS(aOL);
    qW.push(aNg);
  }
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function aMx() {
  var aQD;
  var aQE;
  var aPJ;
  var rO;
  var aQF;
  this.aGo = new sz();
  function dd() {
    aPJ = new rC([0.45, 0.27], [0.5, 0.5], 2 / 3);
    aQE = [new w("⚔️<br>" + L(321), function () {
      aQG(0);
    }, bB.oC), new w("🗡️<br>" + L(304), function () {
      aQG(1);
    }, bB.oU), new w("🔑<br>" + L(322), function () {
      aQG(2);
    }, bB.om), new w("☰<br>" + L(323), function () {
      aQG(3);
    }, bB.nw), new w("", function () {
      t.u(12);
    }, bB.nf, false)];
    rO = new rP(bj.eK.data[122]);
    for (var aB = 0; aB < aQE.length; aB++) {
      aQE[aB].button.style.position = "absolute";
    }
    rO.e.style.position = "absolute";
    rO.e.style.textAlign = "center";
    rO.e.placeholder = L(324);
  }
  dd();
  function aQG(e8) {
    a0.a1.setState(10);
    if (!ab.tI()) {
      ab.aGf();
    }
    if (e8 === 0) {
      t.y.a4v();
    } else if (e8 === 1) {
      if (!b9.aIK.wR(bj.eK.data[156].value, 1)) {
        aD.a4b.a54();
      }
      t.u(19);
    } else if (e8 === 2) {
      if (a0.id !== 0 || bj.eK.data[140].value) {
        t.u(8, t.sq, new sr(16));
      } else {
        t.y.aQH(t.sq, 16);
      }
    } else if (e8 === 3) {
      t.u(1);
    }
  }
  this.show = function () {
    aa.setState(0);
    a0.a1.setState(12);
    this.aGo.show();
    aQE[4].qv(bA.color.a34(bj.eK.data[121].value));
    this.resize();
    document.body.appendChild(rO.e);
    for (var aB = 0; aB < aQE.length; aB++) {
      document.body.appendChild(aQE[aB].button);
    }
    aQI();
  };
  function aQI() {
    if (a0.id !== 1) {
      return;
    }
    if (a0.dv < 5) {
      return;
    }
    if (!aQF) {
      aQF = bf.eM;
      return;
    }
    if (bf.eM > aQF + 14400000) {
      a0.vU.setState(14);
      return;
    }
    aQF = bf.eM;
  }
  this.rs = function () {
    this.aGo.rs();
    t.removeChild(document.body, rO.e);
    for (var aB = 0; aB < aQE.length; aB++) {
      t.removeChild(document.body, aQE[aB].button);
    }
  };
  this.resize = function () {
    this.aGo.resize();
    this.aGo.resize();
    aPJ.resize();
    var gap = bc.gap * 0.5;
    var tn = 10 / 99 * 0.84 * aPJ.i;
    var aQJ = gap * 3;
    var aQK = aPJ.j * 0.16;
    var a9B = aPJ.i * 0.19;
    var eu = aPJ.eu + a9B;
    var ew = aPJ.ew + tn + aQJ;
    var i = (aPJ.i - gap) * 0.5 - a9B;
    var rx = aPJ.i - a9B * 2 - aQK - gap;
    bA.qb.tG(rO.e, eu, ew, rx, aQK);
    bA.qb.tG(aQE[4].button, eu + rx + gap, ew, aQK, aQK);
    ew += aQK + gap;
    var j = (aPJ.ew + aPJ.j - ew - gap) * 0.5;
    bA.qb.tG(aQE[0].button, eu, ew, i, j);
    bA.qb.tG(aQE[1].button, eu + i + gap, ew, i, j);
    bA.qb.tG(aQE[2].button, eu, ew + j + gap, i, j);
    bA.qb.tG(aQE[3].button, eu + i + gap, ew + j + gap, i, j);
    for (var aB = 0; aB < aQE.length; aB++) {
      aQE[aB].button.style.font = bA.qb.sQ(0, bA.qb.a3K(aPJ.j * 0.065));
      bA.qb.ql(aQE[aB].button, 5);
    }
    rO.e.style.font = bA.qb.sQ(0, bA.qb.a3K(aPJ.j * 0.08));
    bA.qb.ql(rO.e, 5);
  };
  this.uj = function () {
    aa.aGK();
    aT.uj();
    aO.uj();
    bY.uj();
    aQL();
  };
  function aQL() {
    if (!ab.tI()) {
      return;
    }
    uk.imageSmoothingEnabled = false;
    var f8 = ab.aGN("territorial.io");
    var nL = aPJ.i * 0.84 / f8.width;
    uk.setTransform(nL, 0, 0, nL, aPJ.eu + aPJ.i * 0.08, aPJ.ew);
    if (!aQD) {
      aQD = bA.a2O.a3v(f8, bA.a2O.a41, [0, 0, 0]);
    }
    for (var eu = -1; eu <= 1; eu += 2) {
      for (var ew = -1; ew <= 1; ew += 2) {
        uk.drawImage(aQD, eu, ew);
      }
    }
    uk.drawImage(f8, 0, 0);
    uk.imageSmoothingEnabled = true;
    var zG = ab.aGN("logo");
    var aQM = nL * 0.6666 * f8.height / zG.height;
    var nM = h.i * 0.5;
    var nN = aPJ.ew + nL * 0.5 * f8.height - aQM * 0.5 * zG.height;
    uk.setTransform(aQM, 0, 0, aQM, nM - nL * 0.6 * f8.width, nN);
    uk.drawImage(zG, 0, 0);
    uk.setTransform(aQM, 0, 0, aQM, nM + nL * 0.6 * f8.width - aQM * zG.width, nN);
    uk.drawImage(zG, 0, 0);
    uk.setTransform(1, 0, 0, 1, 0, 0);
    uk.imageSmoothingEnabled = true;
  }
}
function aN4() {
  var aNM;
  var aQN;
  var aQO;
  function dd() {
    aQO = [new w(L(325), function () {
      aQP(1);
    }, 0, 0, 1), new w(L(326), function () {
      aQP(2);
    }, 0, 0, 1), new w(L(327), function () {
      aQP(3);
    }, 0, 0, 1), new w(L(328), function () {
      aQP(0);
    }, 0, 0, 1), new w(L(329), function () {
      aQP(9);
    }, 0, 0, 1), new w(L(330), function () {
      aQP(10);
    }, 0, 0, 1), new w(L(331), function () {
      aQP(11);
    }, 0, 0, 1)];
    var uV = [new w("⬅️ " + L(37), function () {
      t.a1J();
    })];
    aNM = new uU(L(332), uV);
    aQN = new r9(aQO, aNM.ua);
  }
  function aQP(aB) {
    t.u(8, t.sq, new sr(21, {
      t9: aB,
      tA: 0,
      tB: 10
    }));
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aQN.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aCm(title, qO, aQQ) {
  var aNM;
  var aPX;
  function dd() {
    if (!aQQ) {
      aQQ = [new w("⬅️ " + L(37), function () {
        t.a1J();
      }, bB.oO)];
    }
    aNM = new uU(title, aQQ);
    aPX = new s5(aNM.ua, qO);
    bA.qb.textAlign(aNM.ua.style, 1);
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aPX.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aPp(data) {
  var aNM;
  var aQR;
  function dd() {
    var f8 = data.data.length ? 0 : 1;
    var aQQ = [new w("⬅️ " + L(37), function () {
      t.a1J();
    }), new w(L(333), function () {
      aQS(-10);
    }, f8, 0, 1), new w(L(334), function () {
      aQS(10);
    }, f8, 0, 1), new w(L(280), function () {
      t.u(11, 10, new aQT({
        t9: data.t9
      }));
    })];
    var sg = [L(335), L(336), L(337), L(338), L(339), L(340), L(341), L(342), L(343), L(344), L(330), L(331), L(345)];
    aNM = new uU(sg[data.t9], aQQ);
    aQU();
  }
  function aQU() {
    var aB;
    var eq = {
      sa: []
    };
    var sa = eq.sa;
    var aQV = data.data;
    var en = aQV.length;
    if (en && aQV[0][0] === 0) {
      var e8 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.t9];
      if (e8 >= 0) {
        t.y.tC[e8] = aQV[0][1];
      }
    }
    var aQW = [0.1, 0.001, 0.01, 1, 100, 1, 1, 0.1, 100, 0.01, 0.01, 0.01, 1];
    var nL = aQW[data.t9];
    var aQX = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0];
    var a47 = aQX[data.t9];
    var sg = [[L(346), L(347) + " ↗", L(348)], [L(346), L(349), L(350), L(351) + " ↗"], [L(346), L(347) + " ↗", L(350)], [L(346), L(347) + " ↗", L(350)], [L(352), L(353), L(354) + " ↗", L(355) + " ↗", L(115)], [L(352), L(353), L(356) + " ↗", L(357) + " ↗", L(358)], [L(352), L(353), L(359) + " ↗", L(360) + " ↗", L(361)], [L(352), L(353), L(356) + " ↗", L(357) + " ↗", L(362)], [L(352), L(353), L(354) + " ↗", L(355) + " ↗", L(115)], [L(346), L(347) + " ↗", L(350)], [L(346), L(347) + " ↗", L(363)], [L(346), L(347) + " ↗", L(350)], [L(352), L(353), L(364) + " ↗", L(365) + " ↗", L(366)]];
    var sl = [[25, 40, 35], [15, 25, 25, 35], [25, 40, 35], [25, 40, 35], [12, 16, 30, 30, 12], [12, 16, 30, 30, 12], [12, 16, 30, 30, 12], [12, 16, 30, 30, 12], [12, 16, 30, 30, 12], [25, 40, 35], [25, 40, 35], [25, 40, 35], [12, 13, 25, 25, 25]];
    eq.sg = sg[data.t9];
    eq.sl = sl[data.t9];
    if (data.t9 === 0 || data.t9 === 2 || data.t9 === 3 || data.t9 === 9 || data.t9 === 10 || data.t9 === 11) {
      for (aB = 0; aB < en; aB++) {
        sa.push([{
          fF: aQV[aB][0] + 1 + ".",
          dt: 0
        }, {
          fF: aQV[aB][1],
          dt: 1,
          so: aQV[aB][4],
          sp: aQV[aB][3]
        }, {
          fF: (nL * aQV[aB][2]).toFixed(a47),
          dt: 0
        }]);
      }
    } else if (data.t9 === 12) {
      for (aB = 0; aB < en; aB++) {
        var aQY = aQV[aB][3];
        sa.push([{
          fF: "" + aQV[aB][0],
          dt: 0
        }, {
          fF: "" + aQV[aB][4],
          dt: 0
        }, {
          fF: aQV[aB][5],
          dt: 1,
          so: aQV[aB][1],
          sp: 0
        }, {
          fF: aQV[aB][6],
          dt: 1,
          so: aQV[aB][2],
          sp: 0
        }, {
          fF: bo.eE(aQY % 16, aQY >> 4),
          dt: 0
        }]);
      }
    } else if (data.t9 === 1) {
      for (aB = 0; aB < en; aB++) {
        sa.push([{
          fF: aQV[aB][0] + 1 + ".",
          dt: 0
        }, {
          fF: aQV[aB][1],
          dt: 0
        }, {
          fF: (nL * aQV[aB][2]).toFixed(a47),
          dt: 0
        }, {
          fF: aQV[aB][3],
          dt: 1,
          so: aQV[aB][5],
          sp: aQV[aB][4]
        }]);
      }
    } else if (data.t9 === 4 || data.t9 === 5 || data.t9 === 6 || data.t9 === 7 || data.t9 === 8) {
      for (aB = 0; aB < en; aB++) {
        var aQZ = aQV[aB][5];
        if (data.t9 === 4 || data.t9 === 8) {
          aQZ = (aQZ % 64 * 100 / (aQZ >> 6)).toFixed(0) + "%";
          if (aQZ === "100%") {
            if (data.t9 === 4) {
              aQZ += " (" + L(367) + ")";
            } else {
              aQZ += " (" + L(368) + ")";
            }
          }
        } else if (data.t9 === 5) {
          if (aQZ >= 32768) {
            aQZ = -(aQZ - 32768);
          }
        } else {
          aQZ = (nL * aQZ).toFixed(a47);
        }
        sa.push([{
          fF: "" + aQV[aB][0],
          dt: 0
        }, {
          fF: "" + aQV[aB][6],
          dt: 0
        }, {
          fF: aQV[aB][7],
          dt: 1,
          so: aQV[aB][1],
          sp: aQV[aB][2]
        }, {
          fF: aQV[aB][8],
          dt: 1,
          so: aQV[aB][3],
          sp: aQV[aB][4]
        }, {
          fF: "" + aQZ,
          dt: 0
        }]);
      }
    }
    aQR = new sZ(aNM.ua, eq);
  }
  function aQS(jP) {
    var en = data.data.length;
    if (!en) {
      return;
    }
    var min = parseInt(data.data[0][0]);
    var max = min;
    for (var aB = 1; aB < en; aB++) {
      var aEl = parseInt(data.data[aB][0]);
      min = Math.min(aEl, min);
      max = Math.max(aEl, max);
    }
    var tA;
    if (jP < 0) {
      tA = min + jP;
    } else {
      tA = max + 1;
    }
    t.u(8, t.a5A().aMs, new sr(21, {
      t9: data.t9,
      tA: tA,
      tB: tA + Math.abs(jP)
    }));
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aQR.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aQT(a3x) {
  var aNM;
  var aNN;
  function dd() {
    aNM = new uU(L(369), [new w("⬅️ " + L(37), function () {
      t.aNJ(10);
    })]);
    aNN = new qU(aNM.ua, aNP());
  }
  function aNP() {
    var qW = [];
    qW.push(aPD());
    qW.push(aQa());
    qW.push(aQb());
    return qW;
  }
  function aPD() {
    var aNg = new qE();
    var aNp;
    var aPH = new rP(bj.eK.data[132], 1, function () {
      aNp.button.click();
    });
    var aPI = new rP(bj.eK.data[131], 1, function () {
      aPH.e.focus();
    });
    aNg.qH(L(285));
    aNg.qS(aPI);
    aPI.e.style.marginBottom = "0.8em";
    aNg.qH(L(286));
    aNg.qS(aPH);
    function aQc() {
      var tA = Math.floor(aPI.e.value);
      var tB = Math.floor(aPH.e.value);
      var a2f = Math.min(tA, tB);
      var aMT = Math.max(tA, tB);
      return {
        a2f: a2f,
        aMT: aMT
      };
    }
    aNp = new w(L(284), function () {
      var qT = aQc();
      t.u(8, t.a5B(10).aMs, new sr(21, {
        t9: a3x.t9,
        tA: qT.a2f,
        tB: qT.aMT
      }));
    }, 0, 0, 1);
    aNg.qS(new s6([aNp.button]));
    return aNg;
  }
  function aQa() {
    var aNg = new qE();
    var aNp;
    var aPH = new rP(bj.eK.data[134], 1, function () {
      aNp.button.click();
    });
    var aPI = new rP(bj.eK.data[133], 0, function () {
      aPH.e.focus();
    });
    aNg.qH(a3x.t9 === 1 ? L(370) : L(371));
    aNg.qS(aPI);
    aPI.e.style.marginBottom = "0.8em";
    aNg.qH(L(372));
    aNg.qS(aPH);
    aNp = new w(L(284), function () {
      var aPh = aPI.e.value.slice(0, 20);
      var aPi = Math.abs(Math.floor(aPH.e.value));
      t.u(8, t.a5B(10).aMs, new sr(22, {
        t9: a3x.t9,
        aPh: aPh,
        aPi: aPi
      }));
    }, 0, 0, 1);
    aNg.qS(new s6([aNp.button]));
    return aNg;
  }
  function aQb() {
    var aNg = new qE();
    var aNp;
    var aPH = new rP(bj.eK.data[152], 1, function () {
      aNp.button.click();
    });
    var aPI = new rP(bj.eK.data[151], 0, function () {
      aPH.e.focus();
    });
    aNg.qH(L(373));
    aNg.qS(aPI);
    aPI.e.style.marginBottom = "0.8em";
    aNg.qH(L(372));
    aNg.qS(aPH);
    aNp = new w(L(284), function () {
      var aPh = aPI.e.value.slice(0, 5);
      var aPi = Math.abs(Math.floor(aPH.e.value));
      t.u(8, t.a5B(10).aMs, new sr(28, {
        t9: a3x.t9,
        aPh: aPh,
        aPi: aPi
      }));
    }, 0, 0, 1);
    aNg.qS(new s6([aNp.button]));
    return aNg;
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aNN.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aNH() {
  var aQd;
  var tM;
  var aQe = [new Array(4), [], new Array(2), new Array(2)];
  var aQf = new Array(4);
  var aQg;
  var aQh = new Array(2);
  var aQi = [L(61), L(329), L(374), L(375)];
  var tL;
  var tO;
  function qu() {
    tL = new s9([new w(aQi[0], function () {
      aQj(0, 0);
      return 2;
    }), new w(aQi[1], function () {
      aQj(0, 1);
      return 2;
    }), new w(aQi[2], function () {
      aQj(0, 2);
      return 2;
    }), new w(aQi[3], function () {
      aQj(0, 3);
      return 2;
    })], bB.ow);
    tM = new s9([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.ox, 1);
    var aQk = new s9([new w(L(376), function () {
      aQj(2, 0);
      return 2;
    }), new w(L(111), function () {
      aQj(2, 1);
      return 2;
    })], bB.ow);
    tO = new s9([new w(L(377), function () {
      aOM();
    }), new w(L(378), function () {
      aQl(1);
      return 2;
    })], bB.ow);
    aQd = new tK(tL, tM, aQk, tO, aEX, bn.uJ.aF3);
    for (var aB = 0; aB < 4; aB++) {
      aQe[0][aB] = new rY("0", tL.rA[aB].button);
    }
    aQe[2][1] = new rY("0", aQk.rA[1].button);
    aQe[3][1] = new rY("0", tO.rA[1].button);
    aQg = [new rY("", aQk.rA[1].button, 1, 1), new rY("", tO.rA[1].button, 1, 1)];
    aQm(0, bn.y.rf[0], 1);
    aQm(2, bn.y.rf[2], 1);
    aQh = [new rY(L(278), aQd.tk(), 1, 0), new rY("", aQd.tk(), 1, 1)];
    aQh[0].rZ.style.fontSize = "0.4em";
    aQh[1].rZ.style.fontSize = "0.4em";
  }
  function aEX() {
    var a71 = aQd.tZ.rO.e.value.trim().slice(0, 127);
    if (a71.length < 1) {
      return;
    }
    aQd.tZ.rO.e.value = "";
    bn.aCp.a0D(a71);
  }
  this.aEt = function () {
    return aQd.tZ;
  };
  function aOM() {
    t.x();
    bn.uD();
    b0.y.a1T(3240);
    t.u(5, 5);
  }
  function aQl(aQn) {
    bn.y.rf[3] = 1 - bn.y.rf[3];
    aQm(3, 1, bn.y.rf[3]);
    if (aQn) {
      b0.aEi.aEj(4);
    }
    if (bn.y.rf[3]) {
      bj.s3.s4(158, bn.y.rf[0]);
    }
  }
  this.aCp = function (so) {
    aQj(2, 0);
    var qI = aQd.tZ.rO.e.value;
    var aQo = "@" + so + " ";
    if (qI.length && !bA.ra.a3R(qI, " ")) {
      aQo = " " + aQo;
    }
    qI += aQo;
    aQd.tZ.rO.e.value = qI;
    aQd.tZ.rO.e.focus();
  };
  function aQj(f6, f7) {
    if (bn.y.rf[f6] === f7) {
      return;
    }
    if (f6 === 0 && bn.y.rf[3]) {
      aQl(0);
    }
    aQm(f6, bn.y.rf[f6], 0);
    aQm(f6, f7, 1);
    bn.y.rf[f6] = f7;
    if (f6 === 0) {
      b0.aEi.aEj(2, f7);
      if (bn.y.rf[2]) {
        aQd.ta.mW();
        aQd.tZ.rc(1);
      } else {
        aQd.tZ.rc(0);
      }
      t.a5A().aEM();
      t.a5A().aEL();
      return;
    }
    if (f6 === 2) {
      if (f7 === 0) {
        b0.aEi.aEj(0);
        aQd.tZ.mW();
        aQd.ti();
      } else {
        b0.aEi.aEj(1);
        aQd.ta.mW();
        aQd.tj();
      }
    }
  }
  function aQm(f6, f7, color) {
    aQd.tc[f6].rA[f7].qv(color ? bB.o8 : bB.ow);
  }
  this.aEK = function () {
    aQd.ta.mW();
  };
  this.aEM = function () {
    var aQp = bn.y.rf[0];
    var rg = bn.y.rh[aQp];
    bS.a7(rg.eT, rg.mapSeed);
    tM.rA[0].button.textContent = L(306) + ": " + bS.wW.wX[rg.eT].name;
    tM.rA[1].button.textContent = L(308, 0, "Mode") + ": " + aQq(rg.aDb);
    tM.rA[2].button.textContent = L(379) + ": " + bS.wW.wX[rg.aFI].name;
    tM.rA[3].button.textContent = L(380, 0, "Next Mode") + ": " + aQq(rg.aFJ);
    tM.rA[4].button.textContent = L(381) + ": " + aQr(rg.aEO);
    tM.resize();
  };
  this.aEL = function () {
    var aQp = bn.y.rf[0];
    var rg = bn.y.rh[aQp];
    aQd.tg(rg.th);
    for (var aB = 0; aB < bn.tw.tx.length; aB++) {
      aQe[0][aB].rZ.textContent = "" + bn.tw.tx[aB].length;
    }
    var tw = bn.tw.tx[aQp];
    var aQs = tw.length;
    var aQt = bn.tw.ty[aQp];
    aQe[2][1].rZ.textContent = "" + aQs;
    aQe[3][1].rZ.textContent = "" + aQt;
    tM.rA[4].button.textContent = L(381) + ": " + aQr(rg.aEO);
    for (var aB = 0; aB < 4; aB++) {
      var aQu = bn.y.rh[aB];
      if (!aQf[aB]) {
        aQf[aB] = new rY(bS.wW.wX[aQu.eT].name, tL.rA[aB].button, 1, 1);
      } else if (aQu.th === 0) {
        aQf[aB].rZ.textContent = bS.wW.wX[aQu.eT].name;
      }
      if (bA.ra.startsWith(aQi[aB], "🏆 ")) {
        if (!aQu.aDh) {
          aQi[aB] = aQi[aB].substring(3);
          tL.rA[aB].button.textContent = aQi[aB];
          tL.rA[aB].button.appendChild(aQe[0][aB].rZ);
          tL.rA[aB].button.appendChild(aQf[aB].rZ);
        }
      } else if (aQu.aDh) {
        aQi[aB] = "🏆 " + aQi[aB];
        tL.rA[aB].button.textContent = aQi[aB];
        tL.rA[aB].button.appendChild(aQe[0][aB].rZ);
        tL.rA[aB].button.appendChild(aQf[aB].rZ);
      }
    }
    var aQv = "";
    var aQw = "";
    if (aQp === 0) {
      aQv = bn.kz.aDv(tw, 0, aQs);
      aQw = bn.kz.aDv(tw, 0, aQt);
    }
    aQg[0].rZ.textContent = aQv;
    aQg[1].rZ.textContent = aQw;
    aQh[1].rZ.textContent = "MP: " + bn.y.aEE[0] + "   SP: " + bn.y.aEE[1] + "   Lobby: " + bA.qj.a2s(bn.tw.tx);
  };
  function aQq(aDb) {
    if (aDb < 7) {
      return aDb + 2 + " " + L(382);
    } else if (aDb === 7 || aDb === 10) {
      return L(329) + " (Full-Sending: " + (aDb === 7 ? L(383) : L(384)) + ")";
    } else if (aDb === 8) {
      return "1v1";
    }
    return L(385);
  }
  this.aEQ = function () {
    aQd.tZ.mW();
  };
  function aQr(fF) {
    var a74 = bL.du(fF, 60);
    var a75 = fF % 60;
    return (a74 < 10 ? "0" : "") + a74 + ":" + (a75 < 10 ? "0" : "") + a75;
  }
  this.show = function () {
    aQd.show();
    this.resize();
    bn.message.show();
  };
  this.rs = function () {
    aQd.rs();
    bn.uJ.rs();
    bn.tu.rs();
    bn.message.rs();
  };
  this.resize = function () {
    aQd.resize(1 - bn.y.rf[2]);
    bn.message.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      if (bn.y.rf[3]) {
        aQl(1);
      } else {
        aQd.tc[3].rA[0].qs();
      }
      return;
    }
    if (f8 < 2) {
      aQl(1);
    }
  };
  qu();
}
function aMy() {
  var aNM;
  var aNN;
  function dd() {
    aNM = new uU(L(386), [new w("⬅️ " + L(37), function () {
      t.u(7, t.a5B(7).aMs);
    }), new w(L(195), function () {
      aQx();
    })]);
    aNN = new qU(aNM.ua, aNP());
  }
  function aQx() {
    bj.s3.s4(105, bG.st.wG(aNN.qY[0].qF[0].e.value, 5));
    bj.s3.s4(106, bG.st.wG(aNN.qY[1].qF[0].e.value, 8));
    t.u(8, t.a5B(7).aMs, new sr(18));
  }
  function aNP() {
    var qW = [];
    qW.push(aNV());
    qW.push(aNW());
    qW.push(aQy());
    return qW;
  }
  function aNV() {
    var aNg = new qE();
    aNg.qH(L(173));
    aNg.qS(new rP({
      value: "",
      e8: -1
    }));
    return aNg;
  }
  function aNW() {
    var aNg = new qE();
    aNg.qH(L(175));
    var aNr = new rP({
      value: "",
      e8: -1
    });
    aNr.e.type = "password";
    aNg.qS(aNr);
    aNg.qS(new s6([new w(L(176), function (e) {
      if (e.textContent === L(176)) {
        e.textContent = L(177);
        aNr.e.type = "text";
      } else {
        e.textContent = L(176);
        aNr.e.type = "password";
      }
      return true;
    }).button]));
    return aNg;
  }
  function aQy() {
    var aNg = new qE();
    aNg.qH(L(179));
    aNg.qJ(L(387));
    aNg.qJ(L(388));
    aNg.qJ(L(389));
    return aNg;
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aNN.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aN5() {
  var aNM;
  var aQN;
  var aQO;
  function dd() {
    aQO = [new w(L(340), function () {
      aQP(5);
    }, 0, 0, 1), new w(L(341), function () {
      aQP(6);
    }, 0, 0, 1), new w(L(342), function () {
      aQP(7);
    }, 0, 0, 1), new w(L(345), function () {
      aQP(12);
    }, 0, 0, 1)];
    var uV = [new w("⬅️ " + L(37), function () {
      t.a1J();
    })];
    aNM = new uU(L(390), uV);
    aQN = new r9(aQO, aNM.ua);
  }
  function aQP(aB) {
    t.u(8, t.sq, new sr(21, {
      t9: aB,
      tA: 0,
      tB: 10
    }));
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aQN.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aMo() {
  this.eK = {};
  this.tC = new Array(7);
  this.aN3 = null;
  this.aN0 = null;
  this.sX = 0;
  this.aIA = [0, 0];
  this.z = function () {
    t.u(5, 5);
  };
  this.a4v = function () {
    t.x();
    aZ.dd();
  };
  this.aCO = function () {
    t.u(aa.a1K() === 0 ? 5 : 0);
  };
  this.aPG = function () {
    if (bj.eK.data[130].value === 1) {
      t.u(8, t.a5A().aMs, new sr(24, {
        aOm: bj.eK.data[125].value,
        tA: bj.eK.data[128].value,
        tB: bj.eK.data[129].value
      }));
      return;
    }
    var g = bj.eK.data[126].value.split(",");
    g = g.slice(0, 10);
    for (var aB = 0; aB < g.length; aB++) {
      g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
    }
    if (g.length === 1 && g[0].length === 0) {
      g = [];
    }
    t.u(8, t.a5A().aMs, new sr(23, {
      aOm: bj.eK.data[125].value,
      a0o: g
    }));
  };
  this.aQH = function (aMs, target) {
    t.u(4, aMs, new v("Data Usage Information", "Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aQz + "' target='_blank'>" + bK.aQz + "</a>", false, [new w("⬅️ " + L(37), function () {
      t.u(aMs);
    }), new w("✅ Accept", function () {
      bj.s3.s4(140, 1);
      if (target === 0) {
        t.u(2, aMs);
      } else {
        t.u(8, aMs, new sr(target));
      }
    })]));
  };
  this.aR0 = function () {
    for (var aB = 0; aB < 7; aB++) {
      this.tC[aB] = bG.w7.wB(bH.pj(5));
    }
    this.tC[1] = "[" + this.tC[1] + "]";
    if (t.sq === 5) {
      t.a5A().aGo.s4(this.tC);
      t.a5A().resize();
    }
  };
  this.aNq = function (fF, p5, a6h) {
    fF = bA.g9.a3u(fF, 1, 1000000);
    var aR1 = Math.max(1, 1 + Math.floor((fF - 100) * 0.01));
    var v0 = L(391, [p5]);
    v0 += "<br>";
    v0 += L(392, [a6h]);
    v0 += "<br>";
    v0 += L(393, [aR1 < 20 ? fF + aR1 + "–" + (fF + 20) : fF + aR1]);
    v0 += "<br>";
    v0 += L(394, [fF]);
    return v0;
  };
}
function aN8() {
  var aOJ;
  var aOK;
  var aR2;
  function qu() {
    aOJ = new uU(L(306), [new w("⬅️ " + L(37), aOM)]);
    if (aD.data.mapType === 2) {
      b6.dd();
    }
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    b6.uD();
    t.aNK()[19] = null;
    t.a1J();
  }
  function aON() {
    var qW = [];
    aOP(qW);
    aR3(qW);
    aR4(qW);
    aR5(qW);
    aR6(qW);
    aR7(qW);
    aR8(qW);
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    aNg.qP(new uP({
      uT: [L(395), L(396), L(397)],
      value: aD.data.mapType
    }, function (e8) {
      aD.data.mapType = e8;
      if (e8 === 2) {
        b6.dd();
        aD.data.canvas = null;
      } else {
        aD.data.passableWater = aD.data.passableMountains = 1;
        b6.uD();
      }
      t.u(20);
    }));
    if (aD.data.mapType >= 2) {
      aNg.qS(new sG());
      aNg.qS(new s0({
        value: aD.data.passableWater
      }, L(398), function (value) {
        aD.data.passableWater = value;
      }));
      aNg.qS(new s0({
        value: aD.data.passableMountains
      }, L(399), function (value) {
        aD.data.passableMountains = value;
      }));
    }
    qW.push(aNg);
  }
  function aR3(qW) {
    if (aD.data.mapType !== 0) {
      return;
    }
    var aNg = new qE();
    aNg.qH(L(306));
    var uT = [];
    for (var aB = 0; aB < bS.wW.aLj.length; aB++) {
      uT.push(bS.wW.wX[bS.wW.aLj[aB]].name);
    }
    function uQ(e8) {
      aD.data.mapProceduralIndex = e8;
      aR9();
    }
    aNg.qP(new uP({
      uT: uT,
      value: aD.data.mapProceduralIndex
    }, uQ));
    qW.push(aNg);
  }
  function aR4(qW) {
    if (aD.data.mapType !== 1) {
      return;
    }
    var aNg = new qE();
    aNg.qH(L(306));
    var uT = [];
    for (var aB = 0; aB < bS.wW.aLk.length; aB++) {
      uT.push(bS.wW.wX[bS.wW.aLk[aB]].name);
    }
    function uQ(e8) {
      aD.data.mapRealisticIndex = e8;
      aR9();
    }
    aNg.qP(new uP({
      uT: uT,
      value: aD.data.mapRealisticIndex
    }, uQ));
    qW.push(aNg);
  }
  function aR5(qW) {
    if (aD.data.mapType !== 2) {
      return;
    }
    var aNg = new qE();
    aNg.qH(L(306));
    aNg.qS(new s6([new w(L(400), function () {
      b6.aHn();
      return true;
    }).button]));
    qW.push(aNg);
  }
  function aR6(qW) {
    aR2 = new qE();
    aR2.qH(L(401));
    if (aD.data.mapType !== 2) {
      aRA();
    } else if (aD.data.canvas) {
      aRB();
    }
    qW.push(aR2);
  }
  function aR7(qW) {
    if (aD.data.mapType !== 0) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Seed");
    var rO = new rP({
      e8: -1,
      value: aD.data.mapSeed
    }, 1, 0, function (e) {
      var aKi = Math.abs(Math.floor(e.target.value)) % 16384;
      if (aD.data.mapSeed === aKi) {
        return;
      }
      aD.data.mapSeed = aKi;
      aR9();
    });
    var aNp = new w(L(297), function (e) {
      var aKi = Math.floor(Math.random() * 16384);
      if (aD.data.mapSeed === aKi) {
        return;
      }
      rO.e.value = aD.data.mapSeed = aKi;
      aR9();
      return true;
    });
    aNg.qS(rO);
    aNg.qS(new s6([aNp.button]));
    qW.push(aNg);
  }
  function aR8(qW) {
    if (aD.data.mapType !== 2) {
      return;
    }
    var aNg = new qE();
    aNg.qH(L(402));
    var rO = new rP({
      e8: -1,
      value: aD.data.mapName
    }, 0, 0, function (e) {
      aD.data.mapName = e.target.value = e.target.value.slice(0, 20);
    });
    aNg.qS(rO);
    qW.push(aNg);
  }
  function aR9() {
    aRC();
    aRA();
  }
  function aRC() {
    if (aR2.qG.lastChild) {
      t.removeChild(aR2.qG, aR2.qG.lastChild);
    }
  }
  function aRA() {
    var aRD = bS.a51(aD.data);
    aD.data.canvas = bS.aKn(aRD, aD.data.mapSeed).wg;
    aRB();
  }
  function aRB() {
    var a2x = aD.data.canvas;
    a2x.style.width = "100%";
    aR2.qG.appendChild(a2x);
  }
  this.aHu = function (a2x) {
    if (aD.data.canvas) {
      aRC();
    }
    aD.data.canvas = a2x;
    aRB();
  };
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function v(title, qO, aRE, aQQ) {
  var aNM;
  var aPX;
  function dd() {
    if (!aQQ) {
      aQQ = [new w("⬅️ " + L(37), function () {
        t.a1J();
      })];
    }
    aNM = new uU(title, aQQ);
    aPX = new s5(aNM.ua, qO);
    if (aRE) {
      bA.qb.textAlign(aNM.ua.style, 1);
    }
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aPX.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aNB() {
  var aOJ;
  var aOK;
  var aOL;
  function qu() {
    aOJ = new uU(L(310), [new w("⬅️ " + L(37), aOM)]);
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    aOO();
    aOS();
    t.aNK()[19] = null;
    t.a1J();
  }
  function aOS() {
    if (aD.data.playerNamesType === 2 && bA.qj.a2b(aD.data.playerNamesData).length === 1) {
      aD.data.playerNamesType = 0;
    }
    if (aD.data.playerNamesType !== 2) {
      aD.data.playerNamesData = null;
    }
  }
  function aOO() {
    if (aD.data.playerNamesType === 2) {
      bA.qj.a2p(aOL.v1(), aD.data.playerNamesData, 20);
    }
  }
  function aON() {
    var qW = [];
    aOP(qW);
    aOR(qW);
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    aNg.qP(new uP({
      uT: [L(311), L(312), L(275)],
      value: aD.data.playerNamesType
    }, function (e8) {
      aOO();
      aD.data.playerNamesType = e8;
      t.u(23);
    }));
    aNg.qS(new sG());
    aNg.qS(new s0({
      value: aD.data.selectableName
    }, L(403), function (value) {
      aD.data.selectableName = value;
    }));
    qW.push(aNg);
  }
  function aOR(qW) {
    if (aD.data.playerNamesType !== 2) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Data");
    aOL = new us(0, 1, 0, 1);
    if (!aD.data.playerNamesData || aD.data.playerNamesData.length !== aD.ek) {
      aD.data.playerNamesData = new Array(aD.ek);
      aD.data.playerNamesData.fill("");
    }
    aOL.uz(bA.ra.a4K(aD.data.playerNamesData, 1, "\""));
    aNg.qS(aOL);
    qW.push(aNg);
  }
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function aMw() {
  var aOJ;
  var ux;
  function qu() {
    aOJ = new uU(L(404), [new w("⬅️ " + L(37), function () {
      t.aNJ(1);
    }), new w(L(405), function () {
      ux.v2();
    }), new w(L(406), function () {
      ux.v3();
    }), new w(L(407), function () {
      ux.clear();
    }), new w(L(408), function () {
      aRF();
    })]);
    ux = new us(L(409));
    aOJ.ua.appendChild(ux.e);
  }
  this.show = function (aRG) {
    this.aRH(aRG);
    aOJ.show();
    this.resize();
  };
  this.aRH = function (aRG) {
    if (aD.a09 === 0) {
      if (aRG) {
        ux.uz(aRG);
      } else if (aD.a4e.length) {
        ux.uz(aD.a4e);
      }
      return;
    }
    if (!aD.gw) {
      b9.pv.a4r = b9.a4s.zb();
    }
    ux.uz(b9.aRI(b9.pv.a4r));
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    ux.resize();
  };
  function aRF() {
    t.x();
    var qI = b9.aRJ(ux.v1());
    if (aD.a09 && qI.length > 0 && qI === b9.pv.a4r) {
      b9.aRK();
      return;
    }
    if (!b9.aIK.wR(qI)) {
      return;
    }
    b9.aRK();
  }
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    } else {
      aRF();
    }
  };
  qu();
}
function aMv() {
  var aNM;
  var aNN;
  var qW;
  function dd() {
    aNM = new uU(L(410), [new w("⬅️ " + L(37), aRL), new w(L(411), function () {
      t.x();
      bj.s3.vo();
      t.u(2);
    })]);
    aNP();
    aNN = new qU(aNM.ua, qW);
  }
  function aRL() {
    if (b7.aC9 !== bj.eK.data[12].value) {
      b7.dd();
      t.u(8, 1, new sr(30));
      return;
    }
    t.u(1);
  }
  function aNP() {
    var aNg;
    qW = [];
    aNg = new qE();
    aNg.qH(L(412));
    aNg.qJ(L(413));
    qW.push(aNg);
    aRM(qW);
    aRN(qW);
    aNg = new qE();
    aNg.qH(L(23));
    aNg.qP(new uP({
      uT: ["1", "2"],
      value: aZ.aG1 - 1
    }, function (aB) {
      aZ.aG1 = aB + 1;
    }));
    qW.push(aNg);
    aNg = new qE();
    aNg.qH(L(414));
    bj.eK.data[1].uT = [L(415), L(416), L(417), L(418)];
    aNg.qP(new uP(bj.eK.data[1]));
    qW.push(aNg);
    aNg = new qE();
    aNg.qH(L(419));
    bj.eK.data[9].uT = [L(416), L(420), L(421)];
    aNg.qP(new uP(bj.eK.data[9]));
    qW.push(aNg);
    aNg = new qE();
    aNg.qH(L(422));
    bj.eK.data[11].uT = [L(423), L(9), L(424)];
    aNg.qP(new uP(bj.eK.data[11]));
    qW.push(aNg);
    aNg = new qE();
    aNg.qH(L(425));
    aNg.qS(new s0(bj.eK.data[2]));
    qW.push(aNg);
    aNg = new qE();
    aNg.qH(L(426));
    aNg.qS(new s0(bj.eK.data[7]));
    qW.push(aNg);
    aNg = new qE();
    aNg.qH(L(427));
    aNg.qS(new s0(bj.eK.data[8]));
    qW.push(aNg);
    aNg = new qE();
    aNg.qH(L(428));
    aNg.qS(new rP(bj.eK.data[5]));
    qW.push(aNg);
    aNg = new qE();
    aNg.qH(L(429));
    aNg.qS(new s0(bj.eK.data[13], L(430)));
    aNg.qS(new s0(bj.eK.data[14], L(431)));
    qW.push(aNg);
  }
  function aRN(qW) {
    var aNg = new qE();
    aNg.qH(L(432));
    var aRO = [];
    aNg.qS(new s6([new w(L(433), function (e) {
      bX.aRP();
      for (var aB = 0; aB < aRO.length; aB++) {
        aRO[aB].e.value = bX.aBi[aB];
      }
      bA.qb.a3Q(e);
      return true;
    }).button]));
    for (var aB = 0; aB < bX.aRQ.length; aB++) {
      aNg.qJ(bX.aRQ[aB]);
      for (var f6 = 0; f6 < 2; f6++) {
        var e8 = aB * 2 + f6;
        var rO = new rP({
          value: bX.aBi[e8],
          e8: -1
        });
        rO.e.aRR = e8;
        aRO.push(rO);
        rO.e.addEventListener("keydown", function (e) {
          e.preventDefault();
          var code = e.code;
          e.target.value = code;
          bX.aRS(e.target.aRR, code);
        });
        if (f6) {
          rO.e.style.marginLeft = "4%";
        }
        rO.e.style.width = "48%";
        aNg.qS(rO);
      }
    }
    qW.push(aNg);
  }
  function aRM(qW) {
    var aNg = new qE();
    aNg.qH(L(434));
    var g = b7.data.aCS();
    aNg.qP(new uP({
      uT: g,
      value: b7.data.aCW(g)
    }, function (e8) {
      bj.s3.s4(12, g[e8].split(":")[0]);
      return true;
    }));
    qW.push(aNg);
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aNN.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aNC() {
  var aOJ;
  var aOK;
  var aOL;
  function qu() {
    aOJ = new uU(L(435), [new w("⬅️ " + L(37), aOM)]);
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    aOO();
    aOS();
    t.aNK()[19] = null;
    t.a1J();
  }
  function aOO() {
    if (aD.data.spawningType === 2) {
      bA.qj.a2n(aOL.v1(), aD.data.spawningData, bS.aHw - 1);
    }
  }
  function aOS() {
    if (aD.data.spawningType === 2) {
      if (!bA.qj.a2b(aD.data.spawningData)) {
        aD.data.spawningType = 0;
      }
    }
    if (aD.data.spawningType !== 2) {
      aD.data.spawningData = null;
    }
  }
  function aON() {
    var qW = [];
    aOP(qW);
    aOQ(qW);
    aOR(qW);
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    var uT = [L(297), L(309), L(275)];
    var value = aD.data.spawningType;
    if (aD.data.gameMode === 0) {
      uT.splice(1, 1);
      if (value > 0) {
        value = 1;
      }
    }
    aNg.qP(new uP({
      uT: uT,
      value: value
    }, function (e8) {
      aOO();
      aD.data.spawningType = e8;
      if (aD.data.gameMode === 0 && e8 === 1) {
        aD.data.spawningType = 2;
      }
      if (aD.data.spawningType === 2 && !aD.data.spawningData) {
        aD.data.spawningData = new Uint16Array(aD.ek * 2);
      }
      t.u(24);
    }));
    aNg.qS(new sG());
    aNg.qS(new s0({
      value: aD.data.selectableSpawn
    }, L(436), function (value) {
      aD.data.selectableSpawn = value;
    }));
    qW.push(aNg);
  }
  function aOQ(qW) {
    var aNg = new qE();
    aNg.qH("Seed");
    aNg.qS(new rP({
      e8: -1,
      value: aD.data.spawningSeed
    }, 1, 0, function (e) {
      var value = Math.abs(Math.floor(e.target.value)) % 16384;
      e.target.value = aD.data.spawningSeed = value;
    }));
    qW.push(aNg);
  }
  function aOR(qW) {
    if (aD.data.spawningType !== 2) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Data");
    aOL = new us(0, 1, 0, 1);
    aOL.uz(bA.ra.a4K(aD.data.spawningData, 2));
    aNg.qS(aOL);
    qW.push(aNg);
  }
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function aMu() {
  var aNM;
  var aQN;
  var aQO;
  function dd() {
    aQO = [new w(L(437), function () {
      aRT(0);
    }), new w(L(332), function () {
      t.u(16);
    }), new w(L(390), function () {
      t.u(17);
    }), new w(L(438), function () {
      t.y.aPG();
    }, 0, 0, 1), new w(L(404), function () {
      t.u(3, 1);
    }), new w(L(439), function () {
      t.u(18);
    }), new w(L(410), function () {
      aRT(1);
    }), new w(L(440), function () {
      aRU();
    }), new w(L(441), function () {
      aRV();
    }), new w(L(442), function () {
      aRW();
    }), new w(L(443), function () {
      a18();
    })];
    var uV = [new w("⬅️ " + L(37), function () {
      t.y.aCO();
    })];
    aRX();
    if (a0.id === 1 && a0.dv >= 5) {
      aQO.push(new w(L(444), function () {
        a0.a1.a19();
      }));
    }
    aNM = new uU(L(445), uV);
    aQN = new r9(aQO, aNM.ua);
  }
  function aRX() {
    if (aa.a1K() !== 8) {
      return;
    }
    aQO.unshift(new w(L(320), function () {
      t.u(30);
    }));
    aQO.unshift(new w(L(446), function () {
      if (bd.aRY >= 2) {
        t.x();
        be.a2E();
        bf.dl = true;
      }
    }, 0, 1));
    aQO.unshift(new w(L(447), function () {
      if (!aD.gw && aM.qC(aD.eX)) {
        b8.hD.pP();
        t.x();
        if (aM.gx) {
          aM.a2E();
        }
      }
    }, 0, 1));
    aQO.unshift(new w(L(448), function () {
      if (!aD.gw && aw.hc(aD.eX)) {
        bV.a5X(2);
        b8.hD.hY();
        t.x();
        if (aM.gx) {
          aM.a2E();
        }
      }
    }, 0, 1));
  }
  function aRT(id) {
    if (a0.id === 0 && !bj.eK.data[140].value) {
      t.y.aQH(t.sq, id === 0 ? 16 : 0);
      return;
    }
    if (id === 0) {
      t.u(8, 1, new sr(16));
    } else {
      t.u(2);
    }
  }
  function aRU() {
    var sg = ["Patreon", L(449), L(450), "YouTube Tutorial", "Discord", L(451), L(325), L(452), L(328), L(453), "Terms", "Privacy"];
    var a3M = [bK.aOH, bK.aCj, bK.a1D, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aCk, bK.aRZ, bK.aRa, bK.a0v, bK.aRb, bK.aRc, bK.aRd, bK.aQz];
    if (a0.id === 1) {
      sg.splice(2, 1);
      sg.splice(0, 1);
      a3M.splice(2, 1);
      a3M.splice(0, 1);
    } else if (a0.id === 2) {
      sg.splice(1, 1);
      sg.splice(0, 1);
      a3M.splice(1, 1);
      a3M.splice(0, 1);
    }
    t.u(4, 1, new v(L(440), bA.qb.a3L(sg, a3M), false, [new w("⬅️ " + L(37), function () {
      t.u(1);
    })]));
  }
  function aRV() {
    t.u(4, 1, new v(L(441), l.dv + "<br><a href='" + bK.aRZ + "' target='_blank'>" + bK.aRZ + "</a>", true, [new w("⬅️ " + L(37), function () {
      t.u(1);
    })]));
  }
  function aRW() {
    t.u(4, 1, new v(L(442), L(454) + "<br>" + L(455), false, [new w("⬅️ " + L(37), function () {
      t.u(1);
    }), new w(L(456), function () {
      a0.a1.a17();
      t.u(1);
    })]));
  }
  function a18() {
    a0.a1.a18();
    t.u(4, 1, new v(L(457), L(458) + " <a href='" + bK.aQz + "' target='_blank'>" + bK.aQz + "</a>", false, [new w("⬅️ " + L(37), function () {
      t.u(1);
    })]));
  }
  this.show = function () {
    a0.a1.setState(12);
    aNM.show();
    this.resize();
    this.j3();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aQN.resize();
  };
  this.j3 = function () {
    if (aa.a1K() !== 8) {
      return;
    }
    if (bd.aRY >= 2) {
      if (aQO[2].qt === bB.nv) {
        aQO[2].qv(0);
      }
    } else if (aQO[2].qt !== bB.nv) {
      aQO[2].qv(bB.nv);
    }
    if (!aD.gw && aM.qC(aD.eX)) {
      if (aQO[1].qt === bB.nv) {
        aQO[1].qv(0);
      }
    } else if (aQO[1].qt !== bB.nv) {
      aQO[1].qv(bB.nv);
    }
    if (!aD.gw && aw.hc(aD.eX)) {
      if (aQO[0].qt === bB.nv) {
        aQO[0].qv(0);
      }
    } else if (aQO[0].qt !== bB.nv) {
      aQO[0].qv(bB.nv);
    }
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function aNG() {
  var aOJ;
  var aOK;
  var aOL;
  function qu() {
    aOJ = new uU(L(315), [new w("⬅️ " + L(37), aOM)]);
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    aOO();
    if (aD.data.sResourcesType !== 2) {
      aD.data.sResourcesData = null;
    }
    t.aNK()[19] = null;
    t.a1J();
  }
  function aOO() {
    if (aD.data.sResourcesType === 2) {
      bA.qj.a2n(aOL.v1(), aD.data.sResourcesData, 2047);
    }
  }
  function aON() {
    var qW = [];
    aOP(qW);
    aOQ(qW);
    aOR(qW);
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    aNg.qP(new uP({
      uT: [L(273), L(274), L(275)],
      value: aD.data.sResourcesType
    }, function (e8) {
      aOO();
      if (e8 === 2 && !aD.data.sResourcesData) {
        aD.data.sResourcesData = new Uint16Array(aD.ek);
      }
      aD.data.sResourcesType = e8;
      t.u(28);
    }));
    qW.push(aNg);
  }
  function aOQ(qW) {
    if (aD.data.sResourcesType !== 1) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Value");
    aNg.qS(new rP({
      e8: -1,
      value: aD.data.sResourcesValue
    }, 1, 0, function (e) {
      var value = bL.hv(Math.floor(e.target.value), 0, 2047);
      e.target.value = aD.data.sResourcesValue = value;
    }));
    qW.push(aNg);
  }
  function aOR(qW) {
    if (aD.data.sResourcesType !== 2) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Data");
    aOL = new us(0, 1, 0, 1);
    aOL.uz(bA.ra.a4K(aD.data.sResourcesData, 2));
    aNg.qS(aOL);
    qW.push(aNg);
  }
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function aNE() {
  var aOJ;
  var aOK;
  var aOL;
  function qu() {
    aOJ = new uU(L(313), [new w("⬅️ " + L(37), aOM)]);
    aOK = new qU(aOJ.ua, aON());
  }
  function aOM() {
    aOO();
    if (aD.data.tIncomeType !== 2) {
      aD.data.tIncomeData = null;
    }
    t.aNK()[19] = null;
    t.a1J();
  }
  function aOO() {
    if (aD.data.tIncomeType === 2) {
      bA.qj.a2n(aOL.v1(), aD.data.tIncomeData, 255);
    }
  }
  function aON() {
    var qW = [];
    aOP(qW);
    aOQ(qW);
    aOR(qW);
    return qW;
  }
  function aOP(qW) {
    var aNg = new qE();
    aNg.qH(L(272));
    aNg.qP(new uP({
      uT: [L(273), L(274), L(275)],
      value: aD.data.tIncomeType
    }, function (e8) {
      aOO();
      if (e8 === 2 && !aD.data.tIncomeData) {
        aD.data.tIncomeData = new Uint8Array(aD.ek);
        aD.data.tIncomeData.fill(32);
      }
      aD.data.tIncomeType = e8;
      t.u(26);
    }));
    qW.push(aNg);
  }
  function aOQ(qW) {
    if (aD.data.tIncomeType !== 1) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Value");
    aNg.qS(new rP({
      e8: -1,
      value: aD.data.tIncomeValue
    }, 1, 0, function (e) {
      var value = bL.hv(Math.floor(e.target.value), 0, 255);
      e.target.value = aD.data.tIncomeValue = value;
    }));
    qW.push(aNg);
  }
  function aOR(qW) {
    if (aD.data.tIncomeType !== 2) {
      return;
    }
    var aNg = new qE();
    aNg.qH("Data");
    aOL = new us(0, 1, 0, 1);
    aOL.uz(bA.ra.a4K(aD.data.tIncomeData, 4));
    aNg.qS(aOL);
    qW.push(aNg);
  }
  this.show = function () {
    aOJ.show();
    this.resize();
  };
  this.rs = function () {
    aOJ.rs();
  };
  this.resize = function () {
    aOJ.resize();
    aOK.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aOJ.ub[0].qs();
    }
  };
  qu();
}
function aN6() {
  var aNM;
  var aNN;
  function dd() {
    aNM = new uU(L(439), [new w("⬅️ " + L(37), function () {
      t.a1J();
    })]);
    aNN = new qU(aNM.ua, aNP());
  }
  function aNP() {
    var qW = [];
    qW.push(aRe());
    return qW;
  }
  function aRe() {
    var aNg = new qE();
    aNg.qH(L(459));
    var aRf = new rP({
      value: bj.eK.data[105].value,
      e8: -1
    });
    aRf.e.readOnly = true;
    aNg.qS(aRf);
    aNg.qH(L(357), "0.8em");
    var aRg = new rP(bj.eK.data[148]);
    var aRg = new rP(bj.eK.data[148], 0, undefined, function (e) {
      aNj(bj.eK.data[149].value, e.target.value);
    });
    aNg.qS(aRg);
    aNg.qH(L(361), "0.8em");
    var aRh = new rP(bj.eK.data[149], 1, undefined, function (e) {
      aNj(e.target.value, bj.eK.data[148].value);
    });
    aNg.qS(aRh);
    function aNm() {
      aRi.button.textContent = L(171);
      aRg.e.readOnly = false;
      aRh.e.readOnly = false;
      aNk.qv(1);
      aNk.button.style.color = bB.nj;
    }
    var aRi = new w(L(171), function (e) {
      if (e.textContent === L(171)) {
        e.textContent = L(172);
        aRg.e.readOnly = true;
        aRh.e.readOnly = true;
        aNk.qv(0);
        aNk.button.style.color = bB.oh;
        bj.s3.s4(149, aRh.e.value);
        aNj(bj.eK.data[149].value, bj.eK.data[148].value);
      } else {
        aNm();
      }
      return true;
    });
    aNg.qS(new s6([aRi.button]));
    var aNk = new w(L(14), function (e) {
      if (aRg.e.readOnly && b0.y.aNl(0)) {
        bA.qb.a3Q(e);
        aNm();
        b0.aNn.aNo({
          ss: 0,
          so: bj.eK.data[148].value,
          value: parseInt(bj.eK.data[149].value, 10)
        });
      }
      return true;
    }, 1);
    var qK = aNg.qJ();
    aNg.qJ(L(460)).style.fontWeight = "bold";
    function aNj(fF, qI) {
      qK.innerHTML = t.y.aNq(fF, bj.eK.data[105].value, qI);
    }
    aNg.qS(new s6([aNk.button]));
    aNj(bj.eK.data[149].value, bj.eK.data[148].value);
    return aNg;
  }
  this.show = function () {
    aNM.show();
    this.resize();
  };
  this.rs = function () {
    aNM.rs();
  };
  this.resize = function () {
    aNM.resize();
    aNN.resize();
  };
  this.a2B = function (f8) {
    if (f8 === 2) {
      aNM.ub[0].qs();
    }
  };
  dd();
}
function bw() {
  if (typeof Math.log2 !== "function") {
    Math.log2 = function (eu) {
      return Math.log(eu) / Math.log(2);
    };
  }
  if (typeof Math.log10 !== "function") {
    Math.log10 = function (eu) {
      return Math.log(eu) / Math.log(10);
    };
  }
  if (typeof Math.sign !== "function") {
    Math.sign = function (eu) {
      if (eu > 0) {
        return 1;
      } else if (eu < 0) {
        return -1;
      } else {
        return 0;
      }
    };
  }
}
function ci() {
  var aRj = false;
  var a9R;
  var aRk;
  var aRl;
  var aRm;
  function aRn() {
    aRj = true;
    a9R = -1;
    aRk = new Array(4);
    for (var aB = 3; aB >= 0; aB--) {
      aRk[aB] = false;
    }
    var xW = Math.floor(1 + h.min * 0.02);
    aRl = new Array(4);
    aRm = new Array(4);
    aRm[1] = aRm[3] = aRl[0] = aRl[2] = 0;
    aRm[0] = aRl[3] = -xW;
    aRl[1] = aRm[2] = xW;
  }
  this.a29 = function (e8) {
    if (aD.a09 === 0) {
      return;
    }
    if (!aH.nR()) {
      return;
    }
    if (!aRj) {
      aRn();
    }
    aRk[e8] = true;
    if (a9R === -1) {
      a9R = setInterval(aRo, 20);
      aRo();
    }
  };
  this.a2C = function (e8) {
    if (aD.a09 === 0) {
      return;
    }
    if (!aRj) {
      aRn();
    }
    aRk[e8] = false;
    if (a9R === -1) {
      return;
    }
    var aRp = false;
    for (var aB = 3; aB >= 0; aB--) {
      aRp = aRp || aRk[aB];
    }
    if (!aRp) {
      this.nH();
    }
  };
  this.nH = function () {
    if (!aRj) {
      return;
    }
    if (a9R === -1) {
      return;
    }
    for (var aB = 3; aB >= 0; aB--) {
      aRk[aB] = false;
    }
    clearInterval(a9R);
    a9R = -1;
  };
  function aRo() {
    if (a9R === -1) {
      return;
    }
    if (aD.a09 === 0 || !aH.nR()) {
      ar.nH();
      return;
    }
    var aRp = false;
    for (var aB = 3; aB >= 0; aB--) {
      if (aRk[aB]) {
        aRp = true;
        iO += aRl[aB];
        iP += aRm[aB];
        af.a1d(aRl[aB], aRm[aB]);
        aS.a97();
      }
    }
    if (!aRp) {
      ar.nH();
      return;
    }
    bf.dl = true;
  }
}
function cj() {
  this.y = new aRq();
  this.mR = new aRr();
  this.p5 = new aRs();
  this.aEi = new aRt();
  this.aCK = new aRu();
  this.aNn = new aRv();
  this.pi = new aRw();
  this.aPe = new aRx();
  this.a6h = new aRy();
  this.aRz = new aS0();
  this.aS1 = new aS2();
  this.aS3 = new aS4();
  this.aS5 = new aS6();
  this.dd = function () {
    this.y.dd();
  };
}
function aRq() {
  this.aG4 = 5;
  var aS7;
  this.aS8 = null;
  var aS9;
  var aSA = 15000;
  this.a1P = 0;
  this.a1I = 0;
  this.dd = function () {
    this.aS8 = new Array(this.aG4);
    var a6s = ".territorial.io";
    this.aS8[0] = "territorial.io";
    var aKi = ay.aL4(0);
    ay.a4h(0);
    for (var aB = 1; aB < this.aG4; aB++) {
      this.aS8[aB] = aK.zh() + a6s;
    }
    ay.a4h(aKi);
    aS7 = new Array(this.aG4);
    aS9 = new Array(this.aG4);
    for (aB = this.aG4 - 1; aB >= 0; aB--) {
      aS9[aB] = {
        aRj: false,
        eM: 0,
        aSB: false
      };
    }
    this.aG5(0, 0);
  };
  this.aSC = function (aB) {
    return aS7[aB];
  };
  this.j3 = function () {
    for (var aB = this.aG4 - 1; aB >= 0; aB--) {
      if (this.aNl(aB) && bf.eM > aS9[aB].eM + aSA) {
        b0.p5.aSD(aB, aS9[aB].aSB);
        aSE(aB);
      }
    }
    if (!this.aNl(0) && bf.eM > aS9[0].eM + 8000) {
      aS9[0].eM = bf.eM;
      this.aG5(0, 0);
    }
  };
  this.aPa = function (id) {
    return this.aG5(0, id) && this.aSF(0);
  };
  this.aG5 = function (a1F, aMs) {
    if (!aS9[a1F].aRj) {
      this.aSG(a1F, aMs);
      return false;
    }
    if (aS7[a1F].aSH()) {
      aS7[a1F].aSI(aMs);
      return aS7[a1F].aNl();
    }
    aS7[a1F].rs();
    this.aSG(a1F, aMs);
    return false;
  };
  this.aSG = function (a1F, aMs) {
    aS9[a1F].aRj = true;
    aSE(a1F);
    aS7[a1F] = new aSJ();
    aS7[a1F].dd(a1F, aMs);
  };
  this.aSI = function (a1F, aMs) {
    if (aSH(a1F)) {
      aS7[a1F].aSI(aMs);
    }
  };
  this.aSK = function (a1F, aMs) {
    b0.aCK.aSL(a1F);
  };
  this.aSF = function (aB) {
    return this.aNl(aB) && aS7[aB].aSF();
  };
  this.aSM = function (aB) {
    aS7[aB].aSM();
  };
  this.aNl = function (aB) {
    return aS9[aB].aRj && aS7[aB].aNl();
  };
  function aSH(aB) {
    return aS9[aB].aRj && aS7[aB].aSH();
  }
  this.send = function (a1F, aC) {
    if (a1F !== 0) {
      aSE(a1F);
    }
    aS7[a1F].send(aC);
  };
  this.a1u = function (a1F) {
    if (aa.a1K() === 8) {
      aS9[a1F].aSB = true;
      b0.mR.aSN = true;
    }
  };
  function aSE(a1F) {
    aS9[a1F].eM = bf.eM;
    aS9[a1F].aSB = false;
  }
  this.close = function (a1F, aSO) {
    if (aSH(a1F)) {
      aS7[a1F].close(aSO);
    }
  };
  this.aSP = function (a1F, aSO) {
    o.a1S(aSO);
    if (aSH(a1F)) {
      aS7[a1F].close(aSO);
    }
  };
  this.a1T = function (aSO) {
    for (var aB = this.aG4 - 1; aB >= 0; aB--) {
      this.close(aB, aSO);
    }
  };
  this.aSQ = function (a1F, aSO) {
    for (var aB = this.aG4 - 1; aB >= 0; aB--) {
      if (aB !== a1F) {
        this.close(aB, aSO);
      }
    }
  };
  this.a4t = function () {
    this.close(this.a1P, 3246);
  };
  this.aSR = function (a1F, e) {
    aS7[a1F].rs();
    o.a1E(a1F, e.code);
  };
}
function aRr() {
  this.aSN = false;
  this.j3 = function () {
    if (bf.k7() % 250 !== 249) {
      return;
    }
    if (aD.gw) {
      return;
    }
    b0.aCK.aSS(+(this.aSN && ag.mj[aD.eX]), aST());
    this.aSN = false;
  };
  function aST() {
    return al.kg + bN.y.m0;
  }
}
function aRy() {
  this.aSU = function (a1F, aC) {
    bH.dd(aC);
    if (bH.size === 0) {
      b0.y.aSP(a1F, 3205);
      return;
    }
    if (bH.pj(1) === 0) {
      aSV(a1F);
    } else {
      aSW(a1F);
    }
    bf.aSX();
  };
  function aSV(a1F) {
    var aSY = bH.pj(6);
    if (aSY === 0) {
      aSZ(a1F);
    } else if (aSY === 2) {
      b0.aRz.aSa(a1F);
    } else if (aSY === 3 || aSY === 4) {
      ax.dd();
    } else if (aSY === 9) {
      b0.aS1.aSb(a1F);
    } else if (aSY === 10) {
      b0.aS3.aSc();
    } else if (aSY === 11) {
      b0.aS1.aSd(a1F);
    } else if (aSY === 12) {
      b0.aS3.aSe();
    } else if (aSY === 13) {
      b0.aS5.aSf();
    } else if (aSY === 14) {
      b0.aS5.aSg();
    } else if (aSY === 15) {
      b0.aS1.aSh();
    } else if (aSY === 16) {
      b0.aRz.aSi(a1F);
    } else if (aSY === 17) {
      b0.aRz.aSj(a1F);
    } else if (aSY === 19) {
      b0.aRz.aSk(a1F);
    }
  }
  function aSZ(a1F) {
    if (a1F !== 0) {
      return;
    }
    if (aa.a1K() === 8) {
      return;
    }
    t.y.aR0();
    var aSl = bH.pj(12);
    var aSm = bH.pj(6);
    var g = new Array(aSl);
    for (var aB = 0; aB < aSl; aB++) {
      g[aB] = bH.pj(aSm);
    }
    aT.a9X(g);
  }
  this.aSn = function (aC) {
    bH.dd(aC);
    bH.e8 = 1;
    var aSY = bH.pj(6);
    if (aSY === 3) {
      aSo();
    } else {
      aSp();
    }
  };
  this.aSq = function () {
    bH.e8 = 1;
    var aSY = bH.pj(6);
    var aSr = bH.pj(10);
    if (b0.y.a1I === aSr) {
      b0.y.a1P = aSr;
      return false;
    }
    b0.y.close(b0.y.a1I, 3247);
    b0.y.a1P = aSr;
    ax.aDf = bH.pj(10);
    ax.aGO = bH.pj(aSY === 3 ? 9 : 1);
    if (b0.y.aG5(aSr, 5)) {
      b0.p5.aGV();
    }
    return true;
  };
  function aSo() {
    bH.e8 += 20;
    var eq = aD.data = new a4a();
    var aSs = aSt(9);
    var aDk = eq.humanCount = bH.pj(9) + 1;
    eq.selectableSpawn = eq.gameMode === 1 || aDk < 100;
    eq.colorsData = new Uint32Array(aDk);
    eq.playerNamesData = new Array(aDk);
    for (var aB = 0; aB < aDk; aB++) {
      bH.e8++;
      eq.colorsData[aB] = bH.pj(18);
      eq.playerNamesData[aB] = bG.w7.wB(bH.pj(5));
    }
    aa.aGG();
    bS.a7(aSs, eq.mapSeed);
    aD.a4f();
  }
  function aSp() {
    bH.e8 += 20;
    var eq = aD.data = new a4a();
    var aSs = aSt(1);
    var aDk = eq.humanCount = 2;
    eq.selectableSpawn = 1;
    eq.elo = new Uint16Array(aDk);
    eq.colorsData = new Uint32Array(aDk);
    eq.playerNamesData = new Array(aDk);
    for (var aB = 0; aB < aDk; aB++) {
      bH.e8++;
      eq.colorsData[aB] = bH.pj(18);
      eq.elo[aB] = bH.pj(14);
      eq.playerNamesData[aB] = bG.w7.wB(bH.pj(5));
    }
    aa.aGG();
    bS.a7(aSs, eq.mapSeed);
    aD.a4f();
  }
  function aSt(aSu) {
    var eq = aD.data;
    eq.selectedPlayer = bH.pj(aSu);
    eq.spawningSeed = bH.pj(14);
    var aDb = bH.pj(4);
    if (aDb < 7) {
      eq.gameMode = 1;
      eq.numberTeams = aDb + 2;
    } else if (aDb === 9) {
      eq.gameMode = eq.isZombieMode = 1;
      eq.numberTeams = 2;
    } else {
      eq.gameMode = 0;
      eq.battleRoyaleMode = aDb === 7 ? 0 : aDb === 10 ? 1 : 2;
    }
    eq.isContest = bH.pj(1);
    var aSs = bH.pj(6);
    eq.mapType = bS.aDi(aSs) ? 0 : 1;
    bS.aDj(eq, aSs);
    eq.mapSeed = bH.pj(14);
    return aSs;
  }
  function aSW(a1F) {
    var aSY;
    var qf = aa.a1K();
    if (qf !== 8) {
      if (!ax.aGZ()) {
        return;
      }
    }
    if (a1F !== b0.y.a1P) {
      b0.y.aSP(a1F, 3244);
      return;
    }
    aSY = bH.pj(1);
    if (aSY === 0) {
      bf.a0I.aSv(bH.aC);
    } else {
      aSw();
    }
  }
  function aSw() {
    var aSx = bH.pj(2);
    if (aSx === 0) {
      aSy();
    } else if (aSx === 1) {
      aSz();
    } else if (aSx === 2) {
      aT0();
    } else {
      if (!l.a9 || l.aA) {
        return;
      }
      var en = 540;
      bD.a7(7 + en * 32);
      bD.a8(1, 0);
      bD.a8(6, 10);
      var aB;
      en = Math.min(b8.p2.pl.length, en);
      for (aB = 0; aB < en; aB++) {
        bD.aT1(32, b8.p2.pl[aB]);
      }
      b0.y.send(b0.y.a1P, bD.aC);
    }
  }
  function aSy() {
    var p5 = bH.pj(9);
    if (ag.mj[p5] === 0 || ag.mj[aD.eX] === 0) {
      return;
    }
    var pK = bH.pj(10);
    aN.pJ(p5, aD.eX, pK);
    af.qA(p5, 1, pK);
  }
  function aSz() {
    var p5 = bH.pj(9);
    if (ag.mj[p5] === 0 || ag.mj[aD.eX] === 0) {
      return;
    }
    if (!b5.aKJ(0, [p5], true)) {
      return;
    }
    aN.pb(p5, 1);
  }
  function aT0() {
    var p5 = bH.pj(9);
    var target = bH.pj(9);
    if (ag.mj[p5] === 0 || ag.mj[target] === 0 || ag.mj[aD.eX] === 0) {
      return;
    }
    if (!b5.aKJ(1, [p5], true)) {
      return;
    }
    af.qA(p5, 3, 96);
    af.qA(target, 4, 96);
    aN.a6o(p5, target);
  }
}
function aS4() {
  this.aSc = function () {
    bj.y.vf();
    bj.s3.s4(105, bF.st.su(bF.st.sv(5)));
    bj.s3.s4(106, bF.st.su(bF.st.sv(8)));
    bj.s3.s4(109, bH.pj(30));
    bj.s3.s4(108, bj.eK.data[109].value);
    bj.s3.s4(111, bj.eK.data[109].value + 1);
    bj.s3.s4(107, 0);
    bj.s3.s4(110, "");
  };
  this.aSe = function () {
    if (bH.size < bD.aT2(29)) {
      b0.y.aSP(0, 3254);
      return;
    }
    var data = {
      sp: bH.pj(30),
      vs: bH.pj(16),
      vt: bH.pj(30),
      vu: bH.pj(30),
      vv: bH.pj(30),
      vw: bH.aT3(32),
      username: bG.w9.wR(5),
      vx: bG.w9.wR(3),
      vy: bG.w9.wR(3),
      vz: bH.aT3(32),
      w0: bH.aT3(32),
      w1: bH.pj(30),
      w2: bH.aT3(32),
      w3: bH.aT3(32),
      w4: bH.aT3(32),
      w5: bH.aT3(32),
      aNv: bH.aT3(32),
      aNw: bH.aT3(30),
      aO9: bH.aT3(32),
      aOA: bG.w9.wR(3),
      aO2: bH.aT3(2),
      aO3: bH.aT3(10),
      aO0: bG.w9.wR(8),
      aO4: bH.aT3(5),
      aNi: bH.pj(30),
      aNu: bH.pj(30),
      a0a: bH.aT3(32),
      aNz: bH.pj(3),
      aNy: bH.pj(8),
      aOB: bH.pj(1),
      aOC: bH.pj(1)
    };
    if (data.aOB) {
      data.aOD = bH.aT3(32);
      data.aOE = bH.pj(30);
      data.aOF = bH.pj(30);
      data.aOG = bH.pj(1);
    }
    if (t.sq === 8) {
      if (t.a5A().aPZ === 25) {
        data.aNO = true;
        t.y.aN3 = data;
        t.a5A().aCN(25, false);
      } else {
        data.aNO = false;
        bj.s3.s4(160, +(data.aOB && data.aOG));
        data.so = bj.eK.data[105].value;
        t.y.aN0 = data;
        bj.s3.vr(data);
        t.a5A().aCN(16, true);
      }
    }
  };
}
function aS6() {
  this.aSf = function () {
    var aB;
    if (bH.size < bD.aT2(23)) {
      b0.y.aSP(0, 3259);
      return;
    }
    var t9 = bH.pj(6);
    var en = bH.pj(10);
    var data = [];
    if (t9 === 9 || t9 === 10 || t9 === 11) {
      for (aB = 0; aB < en; aB++) {
        data.push([bH.pj(30), bG.w9.wR(5), bH.aT3(32), 0, bH.pj(30)]);
      }
      if (t.sq === 8) {
        t.a5A().aCN(21, true, {
          t9: t9,
          data: data
        });
      }
      return;
    }
    if (t9 === 12) {
      for (aB = 0; aB < en; aB++) {
        data.push([bH.pj(20), bH.pj(30), bH.pj(30), bH.aT3(32), bH.pj(30), bG.w9.wR(5), bG.w9.wR(5)]);
      }
      if (t.sq === 8) {
        t.a5A().aCN(21, true, {
          t9: t9,
          data: data
        });
      }
      return;
    }
    var hk = bH.pj(16);
    if (!bH.aT4(39 + hk * 16 + en * (t9 === 0 ? 111 : t9 === 1 ? 101 : t9 === 2 || t9 === 3 ? 127 : 212))) {
      b0.y.aSP(0, 3260);
      return;
    }
    if (t9 === 0) {
      for (aB = 0; aB < en; aB++) {
        data.push([bH.pj(30), bG.w7.wB(bH.pj(5)), bH.pj(16), bH.pj(30), bH.pj(30)]);
      }
    } else if (t9 === 1) {
      for (aB = 0; aB < en; aB++) {
        data.push([bH.pj(16), bG.w7.wB(bH.pj(3)), bH.pj(16), bG.w7.wB(bH.pj(5)), bH.pj(31), bH.pj(30)]);
      }
    } else if (t9 === 2 || t9 === 3) {
      for (aB = 0; aB < en; aB++) {
        data.push([bH.pj(30), bG.w7.wB(bH.pj(5)), bH.aT3(32), bH.pj(30), bH.pj(30)]);
      }
    } else {
      for (aB = 0; aB < en; aB++) {
        data.push([bH.pj(20), bH.pj(30), bH.pj(30), bH.pj(30), bH.pj(30), bH.aT3(32), bH.pj(30), bG.w7.wB(bH.pj(5)), bG.w7.wB(bH.pj(5))]);
      }
    }
    if (t.sq === 8) {
      t.a5A().aCN(21, true, {
        t9: t9,
        data: data
      });
    }
  };
  this.aSg = function () {
    if (bH.size < bD.aT2(29)) {
      b0.y.aSP(0, 3265);
      return;
    }
    var aT5 = bH.pj(4);
    var aT6 = bH.pj(7);
    var aT7 = bH.pj(11);
    if (!bH.aT4(29 + aT6 * 16 + aT7 * 16 + aT5 * 11)) {
      b0.y.aSP(0, 3266);
      return;
    }
    var data = [];
    for (var aB = 0; aB < aT5; aB++) {
      var a0p = bG.w7.wB(bH.pj(3));
      var aT8 = bH.pj(8);
      var aOn = [];
      for (var f6 = 0; f6 < aT8; f6++) {
        aOn.push(bH.pj(16));
      }
      data.push({
        name: "[" + a0p + "]",
        aOn: aOn
      });
    }
    if (t.sq === 8) {
      t.a5A().aCN(23, true, data);
    }
  };
}
function aS0() {
  this.aSa = function (a1F) {
    if (a1F !== b0.y.a1I) {
      b0.y.close(a1F, 3239);
      return;
    }
    if (aa.a1K() !== 6) {
      b0.y.close(a1F, 3271);
      return;
    }
    bn.dd();
    for (var aB = 0; aB < 4; aB++) {
      var rg = bn.y.rh[aB];
      rg.th = bH.pj(10);
      rg.eT = bH.pj(6);
      rg.mapSeed = bH.pj(14);
      rg.aDb = bH.pj(4);
      rg.aFI = bH.pj(6);
      rg.aFJ = bH.pj(4);
      rg.aDh = bH.pj(1);
      rg.aEO = bH.pj(12);
      rg.spawningSeed = bH.pj(14);
      var playerCount = bH.pj(16);
      bn.tw.ty[aB] = bH.pj(16);
      for (var f6 = 0; f6 < playerCount; f6++) {
        bn.tw.aD3(aB, bH.pj(30), bG.w9.wR(5), bH.pj(4), bH.pj(30), bH.pj(7), bH.pj(16), bH.pj(18), bH.pj(11), bH.pj(12));
      }
    }
    t.u(29);
    bn.y.aEG(true);
  };
  this.aSi = function (a1F) {
    if (a1F !== b0.y.a1I) {
      b0.y.close(a1F, 3239);
      return;
    }
    if (!bn.a1H) {
      b0.y.close(a1F, 3251);
      return;
    }
    bn.y.aEE[0] = bH.pj(20);
    bn.y.aEE[1] = bH.pj(20);
    var aT9 = bH.pj(16);
    for (var f6 = 0; f6 < aT9; f6++) {
      var id = bH.pj(3);
      if (id === 0) {
        bn.tw.aD3(bH.pj(2), bH.pj(30), bG.w9.wR(5), 0, 1234566, 127, 0, bH.pj(18), 0, bH.pj(12));
      } else if (id === 1) {
        bn.tw.aDM(bH.pj(16), bH.pj(2));
      } else if (id === 2) {
        bn.tw.aDI(bH.pj(16), bH.pj(2), bH.pj(2));
      } else if (id === 3) {
        bn.tw.aDL(bH.pj(16), bH.pj(2));
      } else if (id === 4) {
        bn.tw.aDB(bH.pj(16), bH.pj(2), bH.pj(4), bH.pj(30), bH.pj(7), bH.pj(16), bH.pj(11));
      } else if (id === 5) {
        bn.tw.aDC(bH.pj(16), bH.pj(2), bH.pj(1));
      }
    }
    for (var aB = 0; aB < 4; aB++) {
      var rg = bn.y.rh[aB];
      rg.th = bH.pj(10);
      if (rg.th === 0) {
        rg.a1P = bH.pj(10);
        rg.aDf = bH.pj(10);
        if (bn.aCr.dm(aB)) {
          return;
        }
        rg.eT = bH.pj(6);
        rg.mapSeed = bH.pj(14);
        rg.aDb = bH.pj(4);
        rg.aFI = bH.pj(6);
        rg.aFJ = bH.pj(4);
        rg.aDh = bH.pj(1);
        rg.aEO = bH.pj(12);
        rg.spawningSeed = bH.pj(14);
        rg.aFK.push(rg.aFK[0]);
        rg.aFK.shift();
      }
    }
    bn.y.aDX();
  };
  this.aSj = function (a1F) {
    if (a1F !== b0.y.a1I) {
      b0.y.close(a1F, 3272);
      return;
    }
    if (!bn.a1H) {
      b0.y.close(a1F, 3273);
      return;
    }
    var re = bH.pj(4);
    var rg = bn.y.rh[re];
    var ri = rg.ri;
    rg.rj = bH.pj(20);
    var uC = bH.pj(6);
    for (var aB = 0; aB < uC; aB++) {
      var aFa = aTA();
      bn.rr.aFZ(aFa);
      ri.push(aFa);
    }
    bn.y.aEP(re);
  };
  function aTA() {
    var id = bH.pj(3);
    if (id === 0) {
      return {
        id: id,
        so: bH.pj(30),
        r: bn.aCp.aEn(bG.w9.wR(7))
      };
    }
    if (id === 1) {
      return {
        id: id,
        so: bH.pj(30),
        aDq: bH.pj(3),
        value: bH.pj(30),
        target: bH.pj(30)
      };
    }
    if (id === 2) {
      return {
        id: id,
        so: bH.pj(30),
        aDq: bH.pj(3)
      };
    }
    if (id === 3) {
      return {
        id: id,
        so: bH.pj(30),
        aDq: bH.pj(3),
        value: bH.pj(4),
        target: bH.pj(30)
      };
    }
    if (id === 4) {
      return {
        id: id,
        so: bH.pj(30),
        aDq: bH.pj(3),
        target: bH.pj(30)
      };
    }
    if (id === 5) {
      return {
        id: id,
        aDq: bH.pj(6)
      };
    }
    if (id === 6) {
      return {
        id: id,
        value: bH.pj(17)
      };
    }
    return null;
  }
  this.aSk = function (a1F) {
    if (a1F !== b0.y.a1I) {
      b0.y.close(a1F, 3276);
      return;
    }
    if (!bn.a1H) {
      b0.y.close(a1F, 3277);
      return;
    }
    bn.message.aDV(aTA());
  };
}
function aS2() {
  this.aSb = function (a1F) {
    if (!bH.aT4(70)) {
      b0.y.aSP(a1F, 3269);
      return;
    }
    var aSx = bH.pj(3);
    var r7 = bi.aTB.j3(bH.pj(30), bH.pj(30));
    b0.aCK.aTC(a1F, r7, aSx);
    if (aSx > 0) {
      return;
    }
    if (a1F === 0) {
      if (bj.eK.data[105].value.length === 0) {
        b0.aCK.aPd(0);
      } else {
        b0.aNn.aTD(a1F);
      }
    } else {
      b0.aNn.aTD(a1F);
    }
    if (b0.y.aSC(a1F).aTE() === 4) {
      if (aa.a1K() === 6) {
        b0.aEi.aG6(a1F);
      }
    } else if (b0.y.aSC(a1F).aTE() === 5) {
      if (aa.a1K() === 8 || aa.a1K() === 10) {
        b0.p5.aGV();
      }
    }
  };
  this.aSd = function (a1F) {
    var id = bH.pj(6);
    if (id === 1) {
      bj.s3.s4(160, bH.pj(30));
      b0.y.aSM(a1F);
      if (!aT.a9T) {
        b0.aCK.aPd(1);
      }
      b7.aCI();
      if (t.sq === 8) {
        t.a5A().aPo();
      }
      return;
    }
    if (id === 21) {
      if (t.sq === 8) {
        t.a5A().aCN(17);
      }
      return;
    }
    if (id === 22) {
      bj.s3.s4(106, bj.eK.data[110].value);
      bj.s3.s4(110, "");
      if (t.sq === 8) {
        t.a5A().aCN(15);
      }
      return;
    }
  };
  this.aSh = function () {
    var en = bH.pj(16);
    var aTF = bH.pj(16);
    if (!bH.aT4(55 + en * 10 + aTF * 16)) {
      b0.y.aSP(0, 3270);
      return;
    }
    var g = [];
    for (var aB = 0; aB < en; aB++) {
      g.push(bG.w7.wB(bH.pj(10)));
    }
    b7.aCM(g);
  };
}
function aRs() {
  this.aSD = function (a1F, aSB) {
    bD.a7(11);
    bD.a8(1, 0);
    bD.a8(6, 4);
    bD.a8(1, aSB ? 1 : 0);
    bD.a8(3, aD.a09 === 0 ? bn.a1H ? 6 : 0 : aD.gw ? 1 : aD.kU ? 7 : aD.kS < 7 ? 2 : aD.kS === 8 ? 4 : aD.kS === 9 ? 5 : 3);
    b0.y.send(a1F, bD.aC);
  };
  this.aGV = function () {
    bD.a7(58);
    bD.a8(1, 0);
    bD.a8(6, 5);
    bD.a8(8, b0.y.a1I);
    bD.a8(10, ax.aDf);
    bD.a8(9, ax.aGO);
    bD.a8(10, l.dx);
    bD.a8(14, l.dq);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.p6 = function (eZ) {
    bD.a7(27);
    bD.a8(1, 1);
    bD.a8(4, 0);
    bD.a8(22, eZ);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.p7 = function (iN, jJ) {
    bD.a7(25);
    bD.a8(1, 1);
    bD.a8(4, 1);
    bD.a8(10, iN);
    bD.a8(10, jJ);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pB = function (iN, p9) {
    bD.a7(24);
    bD.a8(1, 1);
    bD.a8(4, 2);
    bD.a8(10, iN);
    bD.a8(9, p9);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pD = function (iN, pC) {
    bD.a7(42);
    bD.a8(1, 1);
    bD.a8(4, 3);
    bD.a8(10, iN);
    bD.a8(27, pC);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pF = function (iN, n6) {
    bD.a7(31);
    bD.a8(1, 1);
    bD.a8(4, 4);
    bD.a8(10, iN);
    bD.a8(16, n6);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pI = function (jJ) {
    bD.a7(15);
    bD.a8(1, 1);
    bD.a8(4, 5);
    bD.a8(10, jJ);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pM = function (e8) {
    bD.a7(15);
    bD.a8(1, 1);
    bD.a8(4, 6);
    bD.a8(10, e8);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pO = function (pN) {
    bD.a7(6);
    bD.a8(1, 1);
    bD.a8(4, 7);
    bD.a8(1, pN);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pQ = function () {
    bD.a7(5);
    bD.a8(1, 1);
    bD.a8(4, 8);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pR = function (iN, eZ, jJ) {
    bD.a7(47);
    bD.a8(1, 1);
    bD.a8(4, 10);
    bD.a8(10, iN);
    bD.a8(10, jJ);
    bD.a8(22, eZ);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pZ = function (aTG, aTH) {
    bD.a7(24);
    bD.a8(1, 1);
    bD.a8(4, 15);
    bD.a8(9, aTH);
    bD.a8(10, aTG);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pc = function (a6h) {
    bD.a7(14);
    bD.a8(1, 1);
    bD.a8(4, 14);
    bD.a8(9, a6h);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  this.pg = function (aTI, target) {
    var aB;
    var en = aTI.length;
    bD.a7(14 + en * 9);
    bD.a8(1, 1);
    bD.a8(4, 13);
    bD.a8(9, target);
    for (aB = 0; aB < en; aB++) {
      bD.a8(9, aTI[aB]);
    }
    b0.y.send(b0.y.a1P, bD.aC);
  };
}
function aRv() {
  this.aTJ = function () {
    bD.a7(39);
    bD.a8(1, 0);
    bD.a8(6, 16);
    b0.aCK.aTK();
    b0.y.send(0, bD.aC);
  };
  this.aTD = function (a1F) {
    bD.a7(115);
    bD.a8(1, 0);
    bD.a8(6, 17);
    aTL();
    b0.y.send(a1F, bD.aC);
  };
  this.aPq = function () {
    bD.a7(55);
    bD.a8(1, 0);
    bD.a8(6, 18);
    bG.st.wM(bj.eK.data[110].value);
    b0.y.send(0, bD.aC);
  };
  this.aPm = function (a3x) {
    var en = a3x.qI.length;
    bD.a7(21 + en * 16);
    bD.a8(1, 0);
    bD.a8(6, 29);
    bD.a8(6, a3x.ss);
    bD.a8(8, en);
    bF.w7.wM(a3x.qI);
    b0.y.send(0, bD.aC);
  };
  this.aO5 = function (data) {
    bD.a7(43);
    bD.a8(1, 0);
    bD.a8(6, 25);
    bD.a8(6, data.ss);
    bG.st.wN(data.so, 5);
    b0.y.send(0, bD.aC);
  };
  this.aNo = function (data) {
    bD.a7(75);
    bD.a8(1, 0);
    bD.a8(6, 27);
    bD.a8(6, data.ss);
    bG.st.wN(data.so, 5);
    bD.aT1(32, data.value);
    b0.y.send(0, bD.aC);
  };
  function aTL() {
    bG.st.wN(bj.eK.data[105].value, 5);
    bG.st.wN(bj.eK.data[106].value, 8);
    bD.a8(30, bj.eK.data[109].value);
  }
}
function aRw() {
  this.ph = function () {
    var en = aD.kA;
    var zy = bR.result.zy;
    var l5 = zy.length;
    bD.a7(17 + en * 16 + l5 * 33);
    bD.a8(1, 1);
    bD.a8(4, 12);
    bD.a8(10, l5);
    bD.a8(1, +(aD.a06 === 2));
    bD.a8(1, aD.a0Q % 2);
    var a0i = ag.a0i;
    for (var aB = 0; aB < en; aB++) {
      bD.a8(16, a0i[aB]);
    }
    var gb = ag.gb;
    for (aB = 0; aB < l5; aB++) {
      var gL = zy[aB];
      bD.a8(9, gL);
      bD.a8(24, gb[gL]);
    }
    b0.y.send(b0.y.a1P, bD.aC);
  };
}
function aRx() {
  this.aPf = function (t9, tA, tB) {
    bD.a7(75);
    bD.a8(1, 0);
    bD.a8(6, 21);
    bD.a8(6, t9);
    bD.a8(1, +(tA < 0));
    bD.a8(1, +(tB < 0));
    bD.a8(30, Math.abs(tA));
    bD.a8(30, Math.abs(tB));
    b0.y.send(0, bD.aC);
  };
  this.aPg = function (t9, aPh, aPi) {
    bD.a7(18 + aPh.length * 16 + 30);
    bD.a8(1, 0);
    bD.a8(6, 22);
    bD.a8(6, t9);
    b0.aCK.aTM(aPh);
    bD.a8(30, aPi);
    b0.y.send(0, bD.aC);
  };
  this.aPl = function (t9, aPh, aPi) {
    bD.a7(73);
    bD.a8(1, 0);
    bD.a8(6, 28);
    bD.a8(6, t9);
    bG.st.wN(aPh, 5);
    bD.a8(30, aPi);
    b0.y.send(0, bD.aC);
  };
  this.aPj = function (aOm, a0o) {
    var aB;
    var en = a0o.length;
    var hk = 0;
    for (aB = 0; aB < en; aB++) {
      hk += a0o[aB].length;
    }
    bD.a7(21 + en * 3 + hk * 16);
    bD.a8(1, 0);
    bD.a8(6, 23);
    bD.a8(3, aOm);
    bD.a8(4, en);
    bD.a8(7, hk);
    for (aB = 0; aB < en; aB++) {
      bD.a8(3, a0o[aB].length);
      bF.w7.wM(a0o[aB]);
    }
    b0.y.send(0, bD.aC);
  };
  this.aPk = function (aOm, tA, tB) {
    bD.a7(52);
    bD.a8(1, 0);
    bD.a8(6, 24);
    bD.a8(3, aOm);
    bD.a8(1, +(tA < 0));
    bD.a8(1, +(tB < 0));
    bD.a8(20, Math.abs(tA));
    bD.a8(20, Math.abs(tB));
    b0.y.send(0, bD.aC);
  };
}
function aRt() {
  this.aG6 = function (a1F) {
    var username = bj.eK.data[122].value.slice(0, 20);
    bD.a7(24 + username.length * 16 + 18 + 18 + bi.aTN.pj());
    bD.a8(1, 0);
    bD.a8(6, 1);
    bD.a8(10, l.dx);
    bD.a8(2, bj.eK.data[158].value);
    b0.aCK.aTM(username);
    var aTO = bA.color.a32(bj.y.vm());
    bD.a8(6, aTO[0]);
    bD.a8(6, aTO[1]);
    bD.a8(6, aTO[2]);
    var aTP = b7.aCP();
    bD.a8(9, aTP[0]);
    bD.a8(9, aTP[1]);
    bi.aTN.zb();
    b0.y.a1I = a1F;
    b0.y.send(a1F, bD.aC);
  };
  this.aEj = function (aTQ, a3x) {
    bE.dd();
    bE.a8(1, 0);
    bE.a8(6, 2);
    bE.a8(3, aTQ);
    if (aTQ === 2) {
      bE.a8(2, a3x);
    } else if (aTQ === 3) {
      bF.w9.zb(a3x, 7, bE);
    } else if (aTQ === 5) {
      bE.a8(3, a3x.id);
      bE.a8(3, a3x.value);
      bE.a8(30, a3x.so);
    }
    b0.y.send(b0.y.a1I, bE.aTR());
  };
}
function aRu() {
  this.aSL = function (a1F) {
    bD.a7(39);
    bD.a8(1, 0);
    bD.a8(6, 13);
    aTS();
    b0.y.send(a1F, bD.aC);
  };
  this.aTC = function (a1F, r7, aSx) {
    bD.a7(70);
    bD.a8(1, 0);
    bD.a8(6, 14);
    bD.a8(3, aSx);
    bD.a8(30, r7[0]);
    bD.a8(30, r7[1]);
    b0.y.send(a1F, bD.aC);
  };
  this.aPd = function (id) {
    bD.a7(13);
    bD.a8(1, 0);
    bD.a8(6, 15);
    bD.a8(6, id);
    b0.y.send(0, bD.aC);
  };
  this.aCL = function (id, qI) {
    var en = Math.min(qI.length, 63);
    bD.a7(19 + en * 16);
    bD.a8(1, 0);
    bD.a8(6, 26);
    bD.a8(6, id);
    bD.a8(6, en);
    bF.w7.wM(qI);
    b0.y.send(0, bD.aC);
  };
  this.aTT = function (aSr, qT) {
    bD.a7(7 + qT.length * 26);
    bD.a8(1, 0);
    bD.a8(6, 9);
    for (var aB = 0; aB < qT.length; aB++) {
      bD.a8(16, qT[aB][0]);
      bD.a8(10, qT[aB][1]);
    }
    b0.y.send(aSr, bD.aC);
  };
  this.aSS = function (aTU, aTV) {
    bD.a7(20);
    bD.a8(1, 0);
    bD.a8(6, 19);
    bD.a8(1, aTU);
    bD.a8(12, aTV);
    b0.y.send(b0.y.a1P, bD.aC);
  };
  function aTS() {
    bD.a8(14, l.dq);
    bD.a8(4, a0.id);
    bD.a8(7, a0.dv);
    bD.a8(1, +l.a9);
    bD.a8(1, +l.aA);
    bD.a8(5, new Date().getHours() % 24);
  }
  this.aTM = function (username) {
    bD.a8(5, username.length);
    bF.w7.wM(username);
  };
}
function aSJ() {
  var a1F;
  var aMs;
  var aTW;
  var aTX = ["wss://", "/s50/", "/s51/", "/s52/"];
  var aTY = 0;
  this.dd = function (e8, aTZ) {
    a1F = e8;
    aMs = aTZ;
    aTa();
  };
  this.aTb = function () {
    return aTW.readyState === aTW.CONNECTING;
  };
  this.aNl = function () {
    return aTW.readyState === aTW.OPEN;
  };
  this.aSF = function () {
    return aTY;
  };
  this.aSM = function () {
    aTY = 1;
  };
  this.aSH = function () {
    return this.aTb() || this.aNl();
  };
  this.aSI = function (aTZ) {
    aMs = aTZ;
  };
  this.aTE = function () {
    return aMs;
  };
  this.send = function (aC) {
    if (this.aNl()) {
      aTW.send(aC);
    }
  };
  this.close = function (aSO) {
    if (this.aSH()) {
      aTW.close(aSO);
      this.rs();
    }
  };
  this.rs = function () {
    aTW.onopen = null;
    aTW.onmessage = null;
    aTW.onclose = null;
    aTW.onerror = null;
  };
  function aTa() {
    var lV;
    if (l.dr) {
      lV = "ws://localhost:" + (7130 + a1F) + "/";
    } else {
      lV = aTX[0] + b0.y.aS8[a1F] + aTX[1 + l.ds];
    }
    aTW = new WebSocket(lV);
    aTW.binaryType = "arraybuffer";
    aTW.onopen = aSK;
    aTW.onmessage = aTc;
    aTW.onclose = aSR;
    aTW.onerror = aTd;
  }
  function aSK() {
    b0.y.aSK(a1F, aMs);
  }
  function aTc(e) {
    b0.a6h.aSU(a1F, new Uint8Array(e.data));
  }
  function aTd() { }
  function aSR(e) {
    b0.y.aSR(a1F, e);
  }
}
function dK() {
  var aTe = false;
  var a72 = 0;
  var i = 0;
  var sx = 0;
  var gap = 0;
  var canvas = null;
  var yJ = null;
  var a2c = null;
  this.dd = function () {
    if (!aD.hh) {
      canvas = null;
      yJ = null;
      a2c = null;
      return;
    }
    a72 = 0;
    a2c = new Uint32Array(aD.xL + 1);
    aTf();
    this.resize();
  };
  this.a80 = function () {
    return i;
  };
  this.resize = function () {
    if (!aD.hh) {
      return;
    }
    i = Math.floor((a0.a1.hw() && !aD.nC ? h.min * 0.18 : h.hx * 0.13) * 0.95);
    i *= 1 + (0.5 + a0.a1.hw() * 0.2) * aD.nC;
    i += i % 2;
    gap = Math.max(1, i * 0.015);
    sx = Math.floor(i - gap * 0.5);
    canvas = canvas ? canvas : document.createElement("canvas");
    canvas.width = i;
    canvas.height = i;
    yJ = canvas.getContext("2d", {
      alpha: true
    });
    yJ.lineWidth = gap;
    yJ.strokeStyle = bB.nj;
    bA.qb.textAlign(yJ, 1);
    bA.qb.textBaseline(yJ, 1);
    aTg();
  };
  this.kh = function () {
    var ki = this.kj();
    if (bg.kX[ki]) {
      return a2c[ki];
    }
    ki = aTh();
    var dt = ag.gb[ll[0]];
    if (ki === -1) {
      return dt;
    }
    if (a2c[ki] > dt) {
      return a2c[ki];
    }
    return dt;
  };
  this.a12 = function () {
    a72 = 31;
    this.j3();
    return this.kj();
  };
  this.kj = function () {
    var ki = 0;
    for (var aB = aD.xL; aB > 0; aB--) {
      if (a2c[aB] > a2c[ki]) {
        ki = aB;
      }
    }
    return ki;
  };
  this.a8M = function () {
    return a2c[2] > a2c[1] * 2 || a2c[1] > a2c[2] * 4;
  };
  function aTh() {
    var ki = -1;
    for (var aB = aD.xL; aB >= 1; aB--) {
      if (ki === -1 || a2c[aB] > a2c[ki]) {
        ki = aB;
      }
    }
    return ki;
  }
  this.kB = function (aTi) {
    var gG = 0;
    var kl = al.kl;
    var el = bg.el;
    var en = al.kg;
    var fR = bO.fR;
    for (var aB = 0; aB < en; aB++) {
      var gL = kl[aB];
      if (el[gL] === aTi) {
        fR[gG++] = gL;
      }
    }
    bO.fI[0] = gG;
  };
  this.kk = function (aTi) {
    var gG = 0;
    var kl = al.kl;
    var el = bg.el;
    var en = al.kg;
    var fR = bO.fR;
    for (var aB = 0; aB < en; aB++) {
      var gL = kl[aB];
      if (el[gL] !== aTi) {
        fR[gG++] = gL;
      }
    }
    bO.fI[0] = gG;
  };
  this.a3V = function () {
    var gG = 0;
    for (var aB = aD.xL; aB >= 0; aB--) {
      gG += a2c[aB] > 0;
    }
    return gG;
  };
  this.j3 = function () {
    if (!aD.hh) {
      return;
    }
    if (++a72 >= 32) {
      a72 = 0;
      aTj();
    }
  };
  function aTf() {
    for (var aB = aD.xL; aB >= 0; aB--) {
      a2c[aB] = 0;
    }
    for (aB = al.kg - 1; aB >= 0; aB--) {
      a2c[bg.el[al.kl[aB]]] += 1;
    }
  }
  function aTj() {
    for (var aB = aD.xL; aB >= 0; aB--) {
      a2c[aB] = 0;
    }
    for (aB = al.kg - 1; aB >= 0; aB--) {
      a2c[bg.el[al.kl[aB]]] += ag.gb[al.kl[aB]];
    }
    aTe = true;
  }
  this.mW = function () {
    if (!aD.hh) {
      return;
    }
    if (aTe) {
      aTg();
    }
  };
  function aTg() {
    var aB;
    var aTk = 0;
    var en = 0;
    var f8 = Math.floor(i / 2);
    var e7 = Math.floor(sx / 2);
    var aTl = Math.PI * 1.5;
    var aTm;
    for (aB = aD.xL; aB >= 0; aB--) {
      en += a2c[aB];
      if (a2c[aB] === 0) {
        aTk++;
      }
    }
    yD();
    if (en > 0) {
      if (aTk === aD.xL) {
        for (aB = aD.xL; aB >= 0; aB--) {
          if (a2c[aB] > 0) {
            aTn(aB, f8, e7);
            break;
          }
        }
        aTo(f8);
      } else {
        for (aB = 0; aB <= aD.xL; aB++) {
          if (a2c[aB] > 0) {
            aTm = aTl + Math.PI * 2 * a2c[aB] / en;
            aTp(aB, f8, e7, aTl, aTm);
            aTq(f8, e7, aTl, aTm);
            if (aB !== 0) {
              aTr(f8, e7, aTl);
            }
            aTl = aTm;
          }
        }
        aTr(f8, e7, Math.PI * 1.5);
      }
    }
    aTs(f8, e7);
  }
  function yD() {
    aTe = false;
    yJ.clearRect(0, 0, i, i);
  }
  function aTn(aB, f8, e7) {
    yJ.fillStyle = bg.aTt[bg.kX[aB]];
    yJ.beginPath();
    yJ.arc(f8, f8, e7, 0, Math.PI * 2);
    yJ.fill();
  }
  function aTp(aB, f8, e7, aTl, aTm) {
    yJ.fillStyle = bg.aTt[bg.kX[aB]];
    yJ.beginPath();
    yJ.arc(f8, f8, e7, aTl, aTm);
    yJ.lineTo(f8, f8);
    yJ.fill();
  }
  function aTo(f8) {
    var fontSize = f8 / 3;
    yJ.font = bA.qb.sQ(1, fontSize);
    yJ.fillStyle = bB.nj;
    yJ.fillText("100%", f8, f8 + fontSize * 0.1);
  }
  function aTq(f8, e7, aTl, aTm) {
    var aTu;
    var v0;
    var fF = (aTm - aTl) / (Math.PI * 2);
    var fontSize = e7 * 1 * Math.min(fF, 0.37);
    if (fontSize < 8) {
      return;
    }
    aTu = (aTl + aTm) / 2;
    v0 = Math.floor(fF * 100 + 0.5) + "%";
    e7 *= 0.525 - Math.max((fF - 0.7) * 0.6, 0);
    yJ.font = bA.qb.sQ(1, fontSize);
    yJ.fillStyle = bB.nj;
    yJ.fillText(v0, f8 + Math.cos(aTu) * e7, f8 + Math.cos(aTu + Math.PI * 1.5) * e7);
  }
  function aTr(f8, e7, aTu) {
    yJ.beginPath();
    yJ.moveTo(f8, f8);
    yJ.lineTo(f8 + Math.cos(aTu) * e7, f8 + Math.cos(aTu + Math.PI * 1.5) * e7);
    yJ.stroke();
  }
  function aTs(f8, e7) {
    yJ.beginPath();
    yJ.arc(f8, f8, e7, 0, Math.PI * 2);
    yJ.stroke();
  }
  this.uj = function () {
    if (aD.hh) {
      if (aD.nC) {
        uk.drawImage(canvas, bc.gap, bc.gap);
      } else {
        uk.drawImage(canvas, bc.gap, a7z + bc.gap * 2);
      }
    }
  };
}
function da() {
  this.hC = function (aTv) {
    return this.a0D(aTv, function (eR) {
      return ac.ei(eR);
    });
  };
  this.hI = function (aTv) {
    return this.a0D(aTv, function (eR) {
      return ac.aHE(eR, aD.eX);
    });
  };
  this.a0D = function (aTv, zl) {
    var aTw = bM.hu();
    return aTx(aTv, aTw, zl);
  };
  function aTx(aTv, aTw, zl) {
    var h2 = bM.ev(aTv);
    var h4 = bM.ex(aTv);
    var aTy = bS.ey - 2;
    var a9I = bS.ez - 2;
    var aTz = -1;
    for (var eq = 0; eq < aTw; eq++) {
      var a9H = Math.max(h2 - eq, 1);
      var aLC = Math.max(h4 - eq, 1);
      var xw = Math.min(h2 + eq, aTy);
      var xv = Math.min(h4 + eq, a9I);
      var iE = aU0(h2, xw - h2, h4 - eq, zl, a9I, 1);
      var iF = aU0(h2 - 1, h2 - a9H - 1, h4 - eq, zl, a9I, -1);
      var aU1 = aU0(h2, xw - h2, h4 + eq, zl, a9I, 1);
      var aU2 = aU0(h2 - 1, h2 - a9H - 1, h4 + eq, zl, a9I, -1);
      var aU3 = aU4(h4, xv - h4 - 1, h2 - eq, zl, aTy, 1);
      var aU5 = aU4(h4 - 1, h4 - aLC - 2, h2 - eq, zl, aTy, -1);
      var aU6 = aU4(h4, xv - h4 - 1, h2 + eq, zl, aTy, 1);
      var aU7 = aU4(h4 - 1, h4 - aLC - 2, h2 + eq, zl, aTy, -1);
      aTz = aU8(aTz, iE, aTv);
      aTz = aU8(aTz, iF, aTv);
      aTz = aU8(aTz, aU1, aTv);
      aTz = aU8(aTz, aU2, aTv);
      aTz = aU8(aTz, aU3, aTv);
      aTz = aU8(aTz, aU5, aTv);
      aTz = aU8(aTz, aU6, aTv);
      aTz = aU8(aTz, aU7, aTv);
      if (aTz >= 0 && eq * eq >= bM.iG(aTz, aTv)) {
        return aTz;
      }
    }
    return -1;
  }
  function aU0(eu, en, ew, zl, a9I, fE) {
    if (ew < 1 || ew > a9I) {
      return -1;
    }
    for (var aB = 0; aB <= en; aB++) {
      var eR = bM.iR(eu, ew);
      if (zl(eR)) {
        return eR >> 2;
      }
      eu += fE;
    }
    return -1;
  }
  function aU4(ew, en, eu, zl, aTy, fE) {
    if (eu < 1 || eu > aTy) {
      return -1;
    }
    en = Math.max(en, 0);
    for (var aB = 0; aB <= en; aB++) {
      var eR = bM.iR(eu, ew);
      if (zl(eR)) {
        return eR >> 2;
      }
      ew += fE;
    }
    return -1;
  }
  function aU8(iE, iF, aTv) {
    if (iF === -1) {
      return iE;
    }
    if (iE === -1) {
      return iF;
    }
    if (bM.iG(iF, aTv) < bM.iG(iE, aTv)) {
      return iF;
    }
    return iE;
  }
}
function d3() {
  this.dm = function () {
    if (a0.id !== 0) {
      return false;
    }
    if (aU9()) {
      return true;
    }
    var value = aUA("replay");
    if (!this.clear()) {
      return false;
    }
    if (!value) {
      return false;
    }
    t.u(3, 0, value);
    return true;
  };
  function aU9() {
    var value = aUA("account");
    if (!value) {
      value = aUA("a");
      if (!value) {
        bI.clear();
        return false;
      }
    }
    bI.clear();
    t.u(8, t.sq, new sr(1000, {
      ss: 0,
      so: value,
      sp: 0
    }));
    return true;
  }
  this.clear = function () {
    var a1C = new URL(window.location.href);
    a1C.search = "";
    try {
      history.replaceState(null, "", a1C.toString());
      return true;
    } catch (e) {
      console.log("error 352: " + e);
    }
    return false;
  };
  function aUA(key) {
    if (typeof URLSearchParams === "undefined") {
      return null;
    }
    var aRG = window.location.search;
    var aUB = new URLSearchParams(aRG);
    var value = aUB.get(key);
    if (typeof value !== "string" || value.length < 1) {
      return null;
    }
    return value;
  }
  this.aOI = function (key, value) {
    if (a0.id !== 0) {
      return;
    }
    try {
      var a1C = new URL(window.location.href);
      var gL = a1C.searchParams;
      gL.set(key, value);
      a1C.search = gL.toString();
      history.replaceState(null, "", a1C.toString());
    } catch (e) {
      console.log("error 358: " + e);
    }
  };
}
function ck() {
  var aUC;
  var g;
  this.dd = function () {
    g = new Uint16Array(101);
    for (var aB = g.length - 1; aB >= 0; aB--) {
      g[aB] = bL.du(aB * 32768, 100);
    }
    this.a4h(0);
  };
  this.value = function (gL) {
    return g[gL];
  };
  this.aL4 = function () {
    return bL.du(aUC - 1, 2);
  };
  this.a4h = function (aKi) {
    aUC = aKi * 2 % 32768 + 1;
  };
  this.random = function () {
    aUC = aUC * 167 % 32768;
    return aUC;
  };
  this.jR = function (me) {
    return bL.du(me * this.random(), 32768);
  };
  this.k2 = function (gL) {
    return gL !== 0 && this.random() < this.value(gL);
  };
  this.ik = function (f6, f7) {
    return f6 + this.jR(f7 - f6);
  };
}
function cz() {
  this.pv = new aUD();
  this.a4s = new aUE();
  this.aIK = new aUF();
  this.dd = function () {
    if (aD.gw) {
      return;
    }
    this.pv.dd();
  };
  this.j3 = function () {
    if (aD.gw) {
      return;
    }
    this.pv.j3();
    aUG();
  };
  function aUG() {
    if (t.sq !== 3) {
      return;
    }
    if (bf.k7() % 15 !== 5 && aD.a09 !== 2) {
      return;
    }
    t.a5A().aRH();
  }
  this.aRK = function () {
    if (aD.a09 === 0) {
      aa.aGG();
    }
    aD.a4b.a50();
    aD.data.canvas = null;
    b0.y.close(b0.y.a1P, 3257);
    b0.y.a1P = 0;
    aD.data.isReplay = 1;
    aD.a4f();
  };
  this.aRJ = function (qI) {
    var aB = qI.indexOf("=");
    if (aB >= 0) {
      return qI.substring(aB + 1);
    }
    return qI;
  };
  this.aRI = function (qI) {
    return "https://territorial.io/?replay=" + qI;
  };
}
function aUD() {
  this.aUH = null;
  this.aUI = null;
  this.aUJ = null;
  this.aUK = null;
  this.aUL = null;
  this.aUM = null;
  this.a4r = "";
  var aUN = 0;
  this.dd = function () {
    this.aUH = [];
    this.aUI = [];
    this.aUJ = [];
    this.aUK = [];
    this.aUL = [0];
    this.aUM = [0];
    aUN = 0;
    this.a4r = "";
  };
  this.pw = function (id, fW, fY, fa) {
    if (aD.gw || aD.a09 === 2) {
      return;
    }
    if (this.aUL[aUN] === 0) {
      if (this.aUM[aUN]) {
        this.aUL.push(1);
        this.aUM.push(0);
        aUN++;
      } else {
        this.aUL[aUN] = 1;
      }
    }
    this.aUH.push(id);
    this.aUI.push(fW);
    this.aUJ.push(fY === undefined ? 0 : fY);
    this.aUK.push(fa === undefined ? 0 : fa);
    this.aUM[aUN]++;
  };
  this.j3 = function () {
    if (this.aUL[aUN] === 0) {
      this.aUM[aUN]++;
      return;
    }
    this.aUL.push(0);
    this.aUM.push(0);
    aUN++;
  };
}
function aUF() {
  var aUO = 0;
  this.wR = function (qI, aUP) {
    aUO = aUP;
    bG.st.wJ(bG.st.wH(bG.st.wF(qI)));
    aN.a69 = "";
    if (!aOS()) {
      return false;
    }
    aUQ();
    if (!aUR()) {
      return false;
    }
    if (bH.e8 < bH.size * 8 - 13 || bH.e8 > bH.size * 8) {
      aUS("Out Of Bounds Error: " + bH.e8 + " " + bH.size * 8);
      return false;
    }
    b9.pv.a4r = qI;
    if (aD.data.mapType === 2) {
      aUS("Load base64 image...", 2);
      return false;
    }
    return true;
  };
  this.aIL = function (aHv, aUT) {
    var a2x = document.createElement("canvas");
    var hp = a2x.getContext("2d");
    a2x.width = aHv.width;
    a2x.height = aHv.height;
    hp.drawImage(aHv, 0, 0);
    aD.data.canvas = a2x;
    if (aUO || aUT) {
      if (aD.a09) {
        return;
      }
      aD.data.mapType = 2;
      t.x();
      t.u(19);
      return;
    }
    b9.aRK();
  };
  function aOS() {
    if (bH.size < 10) {
      aUS("File Too Small");
      return false;
    }
    var aUU = bH.pj(12);
    if (aUU !== l.rVersion) {
      var r = "Incompatible Version   Required: " + l.rVersion;
      r += "   Found: " + aUU;
      r += "   Compatible at territorial.io/" + aUU;
      aUS(r, 1);
    }
    var aTV = bH.pj(12);
    var aUV = bH.pj(31);
    if (aUV !== bH.size) {
      aUS("Size Error: " + aUV + " " + bH.size);
      return false;
    }
    if (aUW(aTV, aUU)) {
      return true;
    }
    return false;
  }
  function aUS(qI, id) {
    if (aUO) {
      return;
    }
    if (!id) {
      t.u(4, 3, new v("⚠️ " + L(461), qI, 1));
      return;
    }
    if (id === 1) {
      aN.a69 = L(462) + ": " + qI;
      return;
    }
    t.u(4, 3, new v(L(463), qI, 1));
  }
  function aUW(j, aUU) {
    var gL = bH.aC;
    var en = bH.size;
    var aTV = aUU;
    for (var aB = 3; aB < en; aB++) {
      aTV = aTV + gL[aB] & 4095;
    }
    if (aTV === j) {
      return true;
    }
    aUS("Hash Error: " + aTV + " " + j + " " + en);
    return false;
  }
  function aUQ() {
    var i6 = bH;
    var qT = aD.data = new a4a();
    qT.mapType = i6.pj(2);
    qT.mapProceduralIndex = i6.pj(8);
    qT.mapRealisticIndex = i6.pj(8);
    qT.mapSeed = i6.pj(14);
    qT.mapName = i6.aUX(5);
    if (qT.mapType === 2) {
      i6.aUY();
    }
    qT.passableWater = i6.pj(1);
    qT.passableMountains = i6.pj(1);
    qT.playerCount = i6.pj(10);
    qT.humanCount = i6.pj(10);
    qT.selectedPlayer = i6.pj(9);
    qT.gameMode = i6.pj(1);
    qT.playerMode = i6.pj(2);
    qT.battleRoyaleMode = i6.pj(2);
    qT.numberTeams = i6.pj(4);
    qT.isZombieMode = i6.pj(1);
    qT.isContest = i6.pj(1);
    qT.isReplay = i6.pj(1);
    qT.elo = i6.aUZ(2, 14, 2);
    qT.colorsType = i6.pj(1);
    qT.colorsPersonalized = i6.pj(1);
    qT.colorsData = i6.aUZ(10, 18, 512);
    qT.selectableColor = i6.pj(1);
    qT.teamPlayerCount = i6.aUZ(4, 10, 9);
    qT.neutralBots = i6.pj(1);
    qT.botDifficultyType = i6.pj(2);
    qT.botDifficultyValue = i6.pj(4);
    qT.botDifficultyTeam = i6.aUZ(4, 4, 9);
    qT.botDifficultyData = i6.aUZ(10, 4, 512);
    qT.spawningType = i6.pj(2);
    qT.spawningSeed = i6.pj(14);
    qT.spawningData = i6.aUZ(11, 12, 1024);
    qT.selectableSpawn = i6.pj(1);
    qT.playerNamesType = i6.pj(2);
    qT.playerNamesData = i6.aUa(10, 5, 512);
    qT.selectableName = i6.pj(1);
    qT.aIncomeType = i6.pj(2);
    qT.aIncomeValue = i6.pj(8);
    qT.aIncomeData = i6.aUZ(10, 8, 512);
    qT.tIncomeType = i6.pj(2);
    qT.tIncomeValue = i6.pj(8);
    qT.tIncomeData = i6.aUZ(10, 8, 512);
    qT.iIncomeType = i6.pj(2);
    qT.iIncomeValue = i6.pj(8);
    qT.iIncomeData = i6.aUZ(10, 8, 512);
    qT.sResourcesType = i6.pj(2);
    qT.sResourcesValue = i6.pj(11);
    qT.sResourcesData = i6.aUZ(10, 11, 512);
  }
  function aUR() {
    var i6 = bH;
    var wS = i6.pj(5);
    var aUb = i6.pj(30);
    var aUc = i6.pj(30);
    if (aUb + aUc > i6.size * 8) {
      aUS("Corrupted File");
      return false;
    }
    aUd(aUb);
    aUe(aUc, wS);
    return true;
  }
  function aUd(en) {
    var aUf = new Uint8Array(en);
    var aUg = new Uint16Array(en);
    var aUh = new Uint32Array(en);
    var aUi = new Uint32Array(en);
    b9.pv.aUH = aUf;
    b9.pv.aUI = aUg;
    b9.pv.aUJ = aUh;
    b9.pv.aUK = aUi;
    for (var aB = 0; aB < en; aB++) {
      var id = bH.pj(4);
      aUf[aB] = id;
      aUg[aB] = bH.pj(9);
      if (id === 0) {
        aUh[aB] = bH.pj(22);
      } else if (id === 1) {
        aUh[aB] = bH.pj(10);
        aUi[aB] = bH.pj(10);
      } else if (id === 2) {
        aUh[aB] = bH.pj(10);
        aUi[aB] = bH.pj(9);
      } else if (id === 3) {
        aUh[aB] = bH.pj(10);
        aUi[aB] = bH.pj(27);
      } else if (id === 4) {
        aUh[aB] = bH.pj(10);
        aUi[aB] = bH.pj(16);
      } else if (id === 5) {
        aUh[aB] = bH.pj(10);
      } else if (id === 6) {
        aUh[aB] = bH.pj(10);
      } else if (id === 7) {
        aUh[aB] = bH.pj(1);
      } else if (id === 10) {
        aUh[aB] = bH.pj(20);
        aUi[aB] = bH.pj(22);
      }
    }
  }
  function aUe(en, wS) {
    var aUL = new Uint8Array(en);
    var aUM = new Array(en);
    aUM.fill(0);
    b9.pv.aUL = aUL;
    b9.pv.aUM = aUM;
    for (var aB = 0; aB < en; aB++) {
      aUL[aB] = bH.pj(1);
      aUM[aB] = bH.pj(wS);
    }
  }
}
function aUE() {
  this.zb = function () {
    var wS = aUj();
    aUk();
    aUl(wS);
    aUm(wS);
    var aUn = bE.e8;
    var zO = bL.du(aUn - 1, 6) + 1;
    if (bD.aT2(zO * 6) !== bE.g.length) {
      bE.g.push(0);
    }
    aUo();
    bH.dd(bE.g);
    var r7 = bF.st.su(bF.st.sv(zO));
    bH.uD();
    bE.dd();
    return r7;
  };
  function aUk() {
    var qT = aD.data;
    var i = bE;
    i.dd();
    i.a8(12, l.rVersion);
    i.e8 += 43;
    i.a8(2, qT.mapType);
    i.a8(8, qT.mapProceduralIndex);
    i.a8(8, qT.mapRealisticIndex);
    i.a8(14, qT.mapSeed);
    i.aUp(qT.mapName, 5);
    if (qT.mapType === 2) {
      i.aUq(qT.canvas);
    }
    i.a8(1, qT.passableWater);
    i.a8(1, qT.passableMountains);
    i.a8(10, qT.playerCount);
    i.a8(10, qT.humanCount);
    i.a8(9, qT.selectedPlayer);
    i.a8(1, qT.gameMode);
    i.a8(2, qT.playerMode);
    i.a8(2, qT.battleRoyaleMode);
    i.a8(4, qT.numberTeams);
    i.a8(1, qT.isZombieMode);
    i.a8(1, qT.isContest);
    i.a8(1, qT.isReplay);
    i.dk(qT.elo, 2, 14);
    i.a8(1, qT.colorsType);
    i.a8(1, qT.colorsPersonalized);
    i.dk(qT.colorsData, 10, 18);
    i.a8(1, qT.selectableColor);
    i.dk(qT.teamPlayerCount, 4, 10);
    i.a8(1, qT.neutralBots);
    i.a8(2, qT.botDifficultyType);
    i.a8(4, qT.botDifficultyValue);
    i.dk(qT.botDifficultyTeam, 4, 4);
    i.dk(qT.botDifficultyData, 10, 4);
    i.a8(2, qT.spawningType);
    i.a8(14, qT.spawningSeed);
    i.dk(qT.spawningData, 11, 12);
    i.a8(1, qT.selectableSpawn);
    i.a8(2, qT.playerNamesType);
    i.aUr(qT.playerNamesData, 10, 5);
    i.a8(1, qT.selectableName);
    i.a8(2, qT.aIncomeType);
    i.a8(8, qT.aIncomeValue);
    i.dk(qT.aIncomeData, 10, 8);
    i.a8(2, qT.tIncomeType);
    i.a8(8, qT.tIncomeValue);
    i.dk(qT.tIncomeData, 10, 8);
    i.a8(2, qT.iIncomeType);
    i.a8(8, qT.iIncomeValue);
    i.dk(qT.iIncomeData, 10, 8);
    i.a8(2, qT.sResourcesType);
    i.a8(11, qT.sResourcesValue);
    i.dk(qT.sResourcesData, 10, 11);
  }
  function aUl(wS) {
    var i = bE;
    var aUH = b9.pv.aUH;
    var fW = b9.pv.aUI;
    var fY = b9.pv.aUJ;
    var fa = b9.pv.aUK;
    var en = aUH.length;
    i.a8(5, wS);
    i.a8(30, en);
    i.a8(30, b9.pv.aUM.length);
    for (var aB = 0; aB < en; aB++) {
      var f8 = aUH[aB];
      i.a8(4, f8);
      i.a8(9, fW[aB]);
      if (f8 === 0) {
        i.a8(22, fY[aB]);
      } else if (f8 === 1) {
        i.a8(10, fY[aB]);
        i.a8(10, fa[aB]);
      } else if (f8 === 2) {
        i.a8(10, fY[aB]);
        i.a8(9, fa[aB]);
      } else if (f8 === 3) {
        i.a8(10, fY[aB]);
        i.a8(27, fa[aB]);
      } else if (f8 === 4) {
        i.a8(10, fY[aB]);
        i.a8(16, fa[aB]);
      } else if (f8 === 5) {
        i.a8(10, fY[aB]);
      } else if (f8 === 6) {
        i.a8(10, fY[aB]);
      } else if (f8 === 7) {
        i.a8(1, fY[aB]);
      } else if (f8 === 10) {
        i.a8(20, fY[aB]);
        i.a8(22, fa[aB]);
      }
    }
  }
  function aUm(wS) {
    var i = bE;
    var aUL = b9.pv.aUL;
    var aUM = b9.pv.aUM;
    var en = aUL.length;
    for (var aB = 0; aB < en; aB++) {
      i.a8(1, aUL[aB]);
      i.a8(wS, aUM[aB]);
    }
  }
  function aUs() {
    var g = bE.g;
    var en = g.length;
    var aTV = l.rVersion;
    for (var aB = 3; aB < en; aB++) {
      aTV = aTV + g[aB] & 4095;
    }
    return aTV;
  }
  function aUo() {
    var i = bE;
    i.e8 = 24;
    i.a8(31, i.g.length);
    i.e8 = 12;
    i.a8(12, aUs());
  }
  function aUj() {
    var aUM = b9.pv.aUM;
    var en = aUM.length;
    var max = 0;
    for (var aB = 0; aB < en; aB++) {
      max = Math.max(max, aUM[aB]);
    }
    return wZ(Math.max(max, 1));
  }
}
function cp() {
  var f8;
  var bu = false;
  var aUt = false;
  var aUu = -10000;
  var aUv = -1;
  var aUw = 0;
  this.i = 0;
  this.j = 0;
  this.min = 0;
  this.max = 0;
  this.hx = 0;
  this.ug = 1;
  this.k = 1;
  this.sY = 0;
  this.de = function () {
    this.i = aUx(document.documentElement.clientWidth) + 2;
    this.j = aUx(document.documentElement.clientHeight) + 2;
  };
  this.dd = function () {
    f8 = 1;
    wY();
    aUy(0);
  };
  function wY() {
    a1c = document.getElementById("canvasA");
    uk = a1c.getContext("2d", {
      alpha: false
    });
    uk.imageSmoothingEnabled = false;
  }
  this.j3 = function () {
    if (++f8 >= 50) {
      resize(0);
    }
    aUz();
  };
  function aUz() {
    if (aUv === -1) {
      return;
    }
    if (bf.eM < aUv) {
      return;
    }
    aUw++;
    aUv = -1;
    if (aUw * 2000 >= bf.eM + 8000) {
      console.log("error 3748");
      return;
    }
    a0.a1.setState(15);
  }
  this.dp = function (jP) {
    bu = true;
    resize(jP);
  };
  this.a2H = function () {
    if (aUu + 1000 > bf.eM) {
      return;
    }
    aUu = bf.eM;
    resize(0);
  };
  function resize(aV0) {
    f8 = 0;
    if (!ab.tI()) {
      return;
    }
    if (aUy(aV0) || bu) {
      bu = false;
      bc.resize();
      bW.aBu.resize();
      aY.dd();
      bY.dd();
      aZ.resize();
      aT.resize();
      aO.resize();
      t.resize();
      if (aD.a09 >= 1) {
        aV.resize(false);
        aU.resize();
        aW.resize();
        aS.resize();
        aR.resize();
        aN.resize();
        aM.resize();
        bC.resize();
        aw.resize();
        aP.resize();
        aQ.resize();
        aL.resize();
        be.resize();
        af.resize();
        aX.resize();
        bh.resize();
        aS.a97();
      } else {
        aa.aGI();
        aa.aGJ();
      }
      bf.dl = true;
    }
  }
  function aUx(fF) {
    if (fF && fF > 128) {
      return Math.floor(fF);
    }
    return 128;
  }
  function aV1(i, j) {
    var hx = (i + j) / 2;
    var aV2 = a0.id !== 0 || i < j ? 700 : 1200;
    var aV3 = Math.min(aV2 / hx, 1);
    if (bj.eK.data[1].value === 0) {
      aV3 = aV3 * 2 / 3;
    } else {
      aV3 = Math.min(aV3 + (bj.eK.data[1].value - 1) * (1 - aV3) / 2, 1);
    }
    h.k = (window.devicePixelRatio || 1) * aV3;
  }
  function aUy(aV0) {
    var sx;
    var a8V;
    var sy;
    var tf;
    if (h.sY > 0) {
      return false;
    }
    sx = aUx(document.documentElement.clientWidth);
    a8V = aUx(window.visualViewport && a0.id !== 2 ? window.visualViewport.height : document.documentElement.clientHeight);
    aV1(sx, a8V);
    if (aV0 && !aUt) {
      aUt = true;
      t.removeChild(document.body, a1c);
    } else if (aUt) {
      aUt = false;
      document.body.appendChild(a1c);
    }
    sy = Math.floor(0.5 + sx * h.k);
    tf = Math.floor(0.5 + a8V * h.k);
    if (sy === h.i && tf === h.j) {
      return false;
    }
    h.i = sy;
    h.j = tf;
    h.min = aBW(sy, tf);
    h.max = a6O(sy, tf);
    h.hx = bL.du(sy + tf, 2);
    h.ug = sy / tf;
    a1c.width = sy;
    a1c.height = tf;
    a1c.style.width = sx + "px";
    a1c.style.height = a8V + "px";
    aUv = bf.eM + 1000;
    return true;
  }
}
function dH() {
  this.aTB = new aV4();
  this.a0y = new aV5();
  this.aTN = new aV6();
}
function aV6() {
  this.pj = function () {
    return 69;
  };
  this.zb = function () {
    var i = window.screen.width;
    var j = window.screen.height;
    bD.a8(26, (i * j + j) % 67108864);
    bD.a8(22, 0);
    bD.a8(21, 0);
  };
}
function aV5() {
  this.a0z = function () {
    var aB;
    var gL;
    var en = al.kg;
    var zx = al.kl;
    var a0i = ag.a0i;
    var a8I = this.aHe();
    for (aB = 0; aB < en; aB++) {
      gL = zx[aB];
      if (!bA.g9.jX(gL)) {
        a0i[gL] = a8I;
      }
    }
    var q0 = ag.q0;
    var jC = ag.jC;
    var jD = ag.jD;
    var a0g = ag.a0g;
    en = aD.kA;
    for (aB = 0; aB < en; aB++) {
      if (a0g[aB] === 0 || jD[aB] < 1 || q0[aB] * 2 > (jC[aB] + jD[aB]) * 3) {
        a0i[aB] = 0;
      }
    }
    var a0w = 0;
    for (aB = 0; aB < en; aB++) {
      a0w += a0i[aB] > 0;
    }
    return a0w;
  };
  this.aHe = function () {
    return Math.min(65535, bf.k7());
  };
}
function aV4() {
  var size = 256;
  this.j3 = function (aV7, aV8) {
    var g = new Uint8Array(size);
    aV9(g, aV7, aV8);
    aVA(g, aV7, 2);
    aVA(g, aV8, 7);
    aVB(g);
    return aST(g);
  };
  function aV9(g, aV7, aV8) {
    var aB;
    var en = size;
    var aVC = 3 + (4 + aV7) % 32768;
    var aVD = 12 + aV8 % 32768;
    var aVE = 17 + ((aV7 & aV8) + (aV7 | aV8) + aV7) % 32768;
    for (aB = 0; aB < en; aB++) {
      aVC = 1 + aVC * aVD % aVE;
      g[aB] = aVC % 256;
    }
  }
  function aVA(g, fF, hf) {
    var aB;
    var en = size;
    for (aB = 0; aB < en; aB++) {
      g[aB] = (g[aB] + (fF >> (aB + hf) % 30 & 1)) % 256;
    }
  }
  function aVB(g) {
    var aB;
    var fF;
    var en = size;
    var e8 = 0;
    for (aB = 0; aB < 30000; aB++) {
      fF = g[e8];
      g[e8] = (fF + aB + g[(e8 + aB) % en]) % 256;
      e8 = (fF + aB + e8 + (fF & e8)) % en;
    }
  }
  function aST(g) {
    var aB;
    var en = size;
    var a8V = 1;
    var tf = 1;
    for (aB = 0; aB < en; aB += 2) {
      a8V = (1 + a8V) * (g[aB] + 1) % 1073741824;
      tf = (1 + tf) * (g[aB + 1] + 1) % 1073741824;
    }
    return [a8V, tf];
  }
}
function cm() {
  var aVF;
  var aVG;
  var i1;
  var aVH;
  this.dd = function () {
    var aB;
    var eu;
    var ew;
    var aTO;
    var aVI;
    var i;
    var j;
    var yJ;
    var hm;
    var wj;
    var fF;
    var gL;
    var f3;
    var f6;
    if (aVJ()) {
      aVG = null;
      return;
    }
    aVF = bL.du(96, 4);
    if (bS.eT === 1) {
      aTO = 0;
      aVI = 160;
    } else {
      aTO = 128;
      aVI = 32;
    }
    aVH = "rgb(" + aTO + "," + aTO + "," + aTO + ")";
    aVG = new Array(4);
    for (aB = 3; aB >= 0; aB--) {
      aVG[aB] = document.createElement("canvas");
      i = aB % 2 === 0 ? bS.ey : aVF;
      j = aB % 2 === 0 ? aVF : bS.ez + aVF * 2;
      aVG[aB].width = i;
      aVG[aB].height = j;
      yJ = aVG[aB].getContext("2d", {
        alpha: false
      });
      hm = yJ.getImageData(0, 0, i, j);
      wj = hm.data;
      if (aB % 2 === 0) {
        for (ew = aVF - 1; ew >= 0; ew--) {
          fF = aVI + Math.floor((ew + 1) * (aTO - aVI) / (aVF + 1));
          for (eu = i - 1; eu >= 0; eu--) {
            gL = ((aB === 0 ? aVF - ew - 1 : ew) * i + eu) * 4;
            wj[gL] = fF;
            wj[gL + 1] = fF;
            wj[gL + 2] = fF;
            wj[gL + 3] = 255;
          }
        }
      } else {
        for (eu = aVF - 1; eu >= 0; eu--) {
          fF = aVI + Math.floor((eu + 1) * (aTO - aVI) / (aVF + 1));
          for (ew = j - 1 - aVF; ew >= aVF; ew--) {
            gL = (ew * i + (aB === 3 ? aVF - eu - 1 : eu)) * 4;
            wj[gL] = fF;
            wj[gL + 1] = fF;
            wj[gL + 2] = fF;
            wj[gL + 3] = 255;
          }
        }
        for (f6 = 1; f6 >= 0; f6--) {
          for (eu = aVF - 1; eu >= 0; eu--) {
            for (ew = aVF - 1; ew >= 0; ew--) {
              f3 = (Math.pow(eu * eu + ew * ew, 0.5) + 1) / (aVF + 1);
              f3 = f3 > 1 ? 1 : f3;
              fF = aVI + Math.floor(f3 * (aTO - aVI));
              gL = ((f6 === 0 ? aVF - ew - 1 : ew + f6 * (j - aVF)) * i + (aB === 1 ? eu : aVF - eu - 1)) * 4;
              wj[gL] = fF;
              wj[gL + 1] = fF;
              wj[gL + 2] = fF;
              wj[gL + 3] = 255;
            }
          }
        }
      }
      yJ.putImageData(hm, 0, 0);
    }
    aVK(aVI);
  };
  function aVJ() {
    i1 = true;
    aVH = "rgb(" + bS.wh[0] + "," + bS.wh[1] + "," + bS.wh[2] + ")";
    if (bS.aKr(bS.eT)) {
      return true;
    }
    i1 = false;
    return false;
  }
  function aVK(aVL) {
    bS.wc.fillStyle = "rgb(" + aVL + "," + aVL + "," + aVL + ")";
    bS.wc.fillRect(0, 0, bS.ey, 1);
    bS.wc.fillRect(0, bS.ez - 1, bS.ey, 1);
    bS.wc.fillRect(0, 0, 1, bS.ez);
    bS.wc.fillRect(bS.ey - 1, 0, 1, bS.ez);
  }
  this.yD = function () {
    var f6 = i1 ? 0 : -aVF;
    if (!aMb(f6, f6, bS.ey - f6 * 2, bS.ez - f6 * 2, ba.aVM, ba.aVN, ba.aVO, ba.aVP)) {
      uk.fillStyle = aVH;
      uk.fillRect(0, 0, h.i, h.j);
    }
  };
  this.uj = function () {
    if (i1) {
      return;
    }
    if (aMa(0, -aVF, bS.ey, aVF, ba.aVM, ba.aVN, ba.aVO, ba.aVP)) {
      uk.drawImage(aVG[0], ba.aVQ, ba.aVR - aVF);
    }
    if (aMa(bS.ey, -aVF, aVF, bS.ez + aVF * 2, ba.aVM, ba.aVN, ba.aVO, ba.aVP)) {
      uk.drawImage(aVG[1], ba.aVQ + bS.ey, ba.aVR - aVF);
    }
    if (aMa(0, bS.ez, bS.ey, aVF, ba.aVM, ba.aVN, ba.aVO, ba.aVP)) {
      uk.drawImage(aVG[2], ba.aVQ, ba.aVR + bS.ez);
    }
    if (aMa(-aVF, -aVF, aVF, bS.ez + aVF * 2, ba.aVM, ba.aVN, ba.aVO, ba.aVP)) {
      uk.drawImage(aVG[3], ba.aVQ - aVF, ba.aVR - aVF);
    }
  };
}
function d6() {
  this.aHc = new aVS();
  this.yG = new aVT();
  this.y = new aVU();
  this.iX = new aVV();
  this.aVL = new aVW();
  this.m5 = new aVX();
  this.jy = new aVY();
  this.kx = new aVZ();
  this.aVa = new aVb();
  this.aVc = new aVd();
  this.mG = new aVe();
  this.hN = new aVf();
  this.lW = new aVg();
  this.kz = new aVh();
  this.hQ = new aVi();
  this.m9 = new aVj();
  this.q8 = new aVk();
  this.dd = function () {
    this.lW.dd();
    this.yG.dd();
    this.y.dd();
    this.iX.dd();
    this.aVL.dd();
    this.aVc.dd();
    this.m9.dd();
  };
  this.uj = function () {
    this.aVc.uj();
    this.yG.uj();
  };
}
function aVY() {
  this.j3 = function (player) {
    if (!bN.mG.mH(player)) {
      return false;
    }
    var kE = bN.y.kE[player];
    if (kE >= Math.max(ao.performance.lO * 3, aE.kO[aE.hW[player]])) {
      return false;
    }
    if (!bA.g9.mI(player, aE.kM[aE.hW[player]], 32, 0)) {
      return false;
    }
    if (aW.aBJ()) {
      return aVl(player);
    }
    if (!ao.iz.j3(player) && !ao.io.j3(player) && !ao.iq.j3(player)) {
      return false;
    }
    aVm(player);
    return true;
  };
  function aVl(player) {
    var aVn = bN.kz.aBM();
    var en = aVn.length;
    if (en === 0) {
      return false;
    }
    var mC = aVn[ay.jR(en)];
    var n6 = bN.y.m3[mC];
    if (bN.m9.mA(player, n6)) {
      return false;
    }
    if (!aVo(player, mC)) {
      return false;
    }
    if (!bN.hQ.q7(player, n6, 1)) {
      return false;
    }
    bA.g9.mK(player);
    bN.y.mL(player);
    return true;
  }
  function aVo(player, mC) {
    var aVp = bM.iV(bN.y.mF[mC]);
    var h2 = bM.ev(aVp);
    var h4 = bM.ex(aVp);
    var n9 = ag.ie[player];
    var nA = ag.ih[player];
    var nM = ag.ig[player];
    var nN = ag.ii[player];
    var i7 = Math.max(h2 - nM, n9 - h2);
    var iA = Math.max(h4 - nN, nA - h4);
    return i7 < 100 && iA < 100;
  }
  function aVm(player) {
    bO.fP[1] = 4;
    bA.g9.mK(player);
    bN.y.mL(player);
  }
}
function aVj() {
  var aVq = 0;
  var aVr = null;
  this.dd = function () {
    if (aVr === null) {
      aVr = new Uint16Array(bN.y.kO * 2);
    }
    aVq = 0;
  };
  this.jG = function (aVs, m9) {
    var aVt = aVr;
    aVt[aVq++] = aVs;
    aVt[aVq++] = m9;
  };
  this.mA = function (player, m8) {
    var aVt = aVr;
    var en = aVq;
    for (var aB = 0; aB < en; aB += 2) {
      if (aVt[aB] === m8) {
        if (!bN.kz.aVu(aVt[aB + 1])) {
          continue;
        }
        if (player === bN.y.m4[bO.fP[2]] >> 3) {
          return true;
        }
      }
    }
    return false;
  };
  this.aVv = function (aVw) {
    var m5 = bN.y.m1[aVw];
    if (m5 < 64) {
      return;
    }
    aVx(bN.y.m3[aVw]);
  };
  this.aVy = function (aVz, aW0) {
    var aW1 = bN.y.m3[aVz];
    var m8 = -1;
    var aVt = aVr;
    var en = aVq;
    for (var aB = 1; aB < en; aB += 2) {
      if (aVt[aB] === aW1) {
        m8 = aVt[aB - 1];
        break;
      }
    }
    if (m8 === -1) {
      return false;
    }
    if (!bN.kz.aVu(m8)) {
      return false;
    }
    var aVw = bO.fP[2];
    var lV = bN.y.m2[aVw];
    if (aW0 === lV[lV.length - 1]) {
      bN.y.m2[aVz] = bN.lW.aW2(bN.y.m2[aVz], bN.lW.le(lV));
      return true;
    }
    var aW3 = bN.kz.aW4(lV, aW0);
    if (aW3 === -1) {
      return false;
    }
    var aW5 = bN.y.mE[aVw];
    if (aW3 === aW5) {
      var aW6 = bM.iV(bN.y.mF[aVw]);
      bN.y.m2[aVz] = bN.lW.aW7(bN.y.m2[aVz], lV, aW3, aW0, bM.iD(lV[aW3], aW0) > bM.iD(lV[aW3], aW6));
      return true;
    }
    bN.y.m2[aVz] = bN.lW.aW7(bN.y.m2[aVz], lV, aW3, aW0, aW3 > aW5);
    return true;
  };
  function aVx(m8) {
    var aVt = aVr;
    var en = aVq;
    for (var aB = en - 2; aB >= 0; aB -= 2) {
      if (aVt[aB] === m8) {
        aW8(aVt[aB + 1]);
        aVt[aB] = aVt[en - 2];
        aVt[aB + 1] = aVt[en - 1];
        en -= 2;
      }
    }
    aVq = en;
  }
  function aW8(aW1) {
    if (!bN.kz.aVu(aW1)) {
      return;
    }
    bN.m9.aW9(bO.fP[2]);
  }
  this.aW9 = function (aWA) {
    var l5 = bN.y;
    var m5 = l5.m1[aWA];
    if (m5 % 64 === 5) {
      return false;
    }
    var lV = l5.m2[aWA];
    l5.aWB[aWA] = 65535 - l5.aWB[aWA];
    l5.mE[aWA] = lV.length - l5.mE[aWA] - 2;
    l5.m2[aWA] = bN.lW.le(lV);
    l5.m1[aWA] = m5 - m5 % 64 + 5;
    return true;
  };
}
function aVe() {
  this.mH = function (player) {
    if (!aD.data.passableWater) {
      return false;
    }
    if (bN.y.m0 === bN.y.kO) {
      return false;
    }
    if (bN.y.kE[player] === bN.y.aWC) {
      return false;
    }
    if (ag.gU[player].length === 0) {
      return false;
    }
    return true;
  };
  this.q3 = function (aTv) {
    var m5 = bO.fP[1];
    if (m5 >= 4) {
      return false;
    }
    if (!bN.kz.aWD(bM.ed(aTv))) {
      return false;
    }
    return ac.ei(bM.ed(bM.iZ(aTv, m5)));
  };
}
function aVS() {
  this.aHd = function (player) {
    var a7i = bN.y.a7i;
    var tA = player << 3;
    var tB = tA + bN.y.kE[player] - 1;
    for (var aB = tB; aB >= tA; aB--) {
      this.aWE(a7i[aB]);
    }
  };
  this.aWE = function (aWF) {
    var y = bN.y;
    var aWG = y.m0 - 1;
    var aWH = y.m4[aWF];
    var aWI = y.aWJ[aWF];
    var aWK = y.mF[aWF];
    y.m0 = aWG;
    y.m4[aWF] = y.m4[aWG];
    y.mF[aWF] = y.mF[aWG];
    y.aWB[aWF] = y.aWB[aWG];
    y.a6g[aWF] = y.a6g[aWG];
    y.aWJ[aWF] = y.aWJ[aWG];
    y.m3[aWF] = y.m3[aWG];
    y.m1[aWF] = y.m1[aWG];
    y.aWL[aWF] = y.aWL[aWG];
    y.m2[aWF] = y.m2[aWG];
    y.mE[aWF] = y.mE[aWG];
    y.a7i[y.m4[aWF]] = aWF;
    aWM(aWH);
    bN.iX.iX[bM.iW(y.mF[aWF])][y.aWJ[aWF]] = aWF;
    aWN(bM.iW(aWK), aWI);
  };
  function aWM(aTu) {
    var player = aTu >> 3;
    var y = bN.y;
    var en = y.kE[player] - 1;
    var aWO = (player << 3) + en;
    y.kE[player] = en;
    if (aWO === aTu) {
      return;
    }
    y.a7i[aTu] = y.a7i[aWO];
    y.m4[y.a7i[aTu]] = aTu;
  }
  function aWN(aB, aWP) {
    var aNg = bN.iX.iX[aB];
    var e = aNg.pop();
    if (aWP === aNg.length) {
      return;
    }
    aNg[aWP] = e;
    bN.y.aWJ[e] = aWP;
  }
}
function aVT() {
  var aWQ;
  var aWR = 8;
  var aWS = null;
  this.dd = function () {
    if (!aWQ) {
      aWQ = new Array(aD.ek);
    }
    aWQ.fill(null);
    aWS = aWT(255);
    aWU();
  };
  function aWU() {
    if (!aD.hh) {
      return;
    }
    var a2x = new Array(bg.kX.length);
    var en = aD.ek;
    var aWV = aWQ;
    var aAh = bg.aAh;
    for (var aB = 0; aB < en; aB++) {
      var a5Q = aAh[aB];
      if (!a2x[a5Q]) {
        a2x[a5Q] = aWW(a5Q);
      }
      aWV[aB] = a2x[a5Q];
    }
  }
  function aWT(e8) {
    var hj = aWR + 4;
    var a2x = bA.qb.wY(hj, hj);
    var hp = bA.qb.getContext(a2x, true);
    var hm = bA.qb.getImageData(hp, hj, hj);
    var wj = hm.data;
    aWX(wj, hj + 1, e8);
    aWX(wj, hj + 2, e8);
    aWX(wj, hj * 2 + 1, e8);
    aWX(wj, hj * 2 - 3, e8);
    aWX(wj, hj * 2 - 2, e8);
    aWX(wj, hj * 3 - 2, e8);
    aWX(wj, hj * (hj - 3) + 1, e8);
    aWX(wj, hj * (hj - 2) + 1, e8);
    aWX(wj, hj * (hj - 2) + 2, e8);
    aWX(wj, hj * (hj - 2) - 2, e8);
    aWX(wj, hj * (hj - 1) - 3, e8);
    aWX(wj, hj * (hj - 1) - 2, e8);
    hp.putImageData(hm, 0, 0);
    return a2x;
  }
  function aWX(wj, eZ, e8) {
    var eR = eZ * 4;
    wj[eR] = 255;
    wj[eR + 1] = 255;
    wj[eR + 2] = e8;
    wj[eR + 3] = 255;
  }
  function aWY(player) {
    var a2x = bA.qb.wY(aWR, aWR);
    var hp = bA.qb.getContext(a2x, true);
    aWZ(hp, ac.a7J(player));
    return a2x;
  }
  function aWW(a5Q) {
    var a2x = bA.qb.wY(aWR, aWR);
    var hp = bA.qb.getContext(a2x, true);
    var g = bO.fM;
    g.set(bg.aWa[a5Q]);
    aWZ(hp, g);
    return a2x;
  }
  function aWZ(hp, aVH) {
    var eu;
    var ew;
    var i7;
    var iA;
    var f3;
    var eZ;
    var aWb;
    var aWc;
    var aWd;
    var hj = aWR;
    var hm = bA.qb.getImageData(hp, hj, hj);
    var wj = hm.data;
    var l5 = (hj >> 1) - 0.5;
    var aWe = bA.qj.a2V(aVH, 0.5);
    if (!bA.qj.a2X(aVH, aWe, 300)) {
      bA.qj.a2Z(aVH, 100);
    }
    for (ew = 0; ew < hj; ew++) {
      for (eu = 0; eu < hj; eu++) {
        i7 = eu - l5;
        iA = ew - l5;
        eZ = (ew * hj + eu) * 4;
        f3 = i7 * i7 + iA * iA;
        aWc = (hj - 1.5) * (hj - 1.5) / 4;
        aWd = (hj - 4.5) * (hj - 4.5) / 4;
        aWb = f3 <= aWd ? aWe : aVH;
        wj[eZ] = aWb[0];
        wj[eZ + 1] = aWb[1];
        wj[eZ + 2] = aWb[2];
        wj[eZ + 3] = f3 > aWc ? 0 : 255;
      }
    }
    hp.putImageData(hm, 0, 0);
  }
  this.uj = function () {
    var aB;
    var aWf;
    var aMj;
    var aMk;
    var eu;
    var ew;
    var player;
    var fontSize;
    var a2x;
    var er;
    var hW;
    var aWg;
    var i6;
    var aWh;
    var aWi;
    var aWj;
    var aWk;
    var mF = bN.y.mF;
    var m4 = bN.y.m4;
    var a6g = bN.y.a6g;
    var aWL = bN.y.aWL;
    var aWl = aWQ;
    var aWm = aD.eX;
    var en = bN.y.m0;
    var aWn = h.i;
    var aWo = h.j;
    var aWp = bS.ey << 4;
    var aWq = aWR;
    var ec = hy;
    var eR = ec / aWq;
    var n9 = iO / ec;
    var nA = iP / ec;
    var nM = (aWn + iO) / ec;
    var nN = (aWo + iP) / ec;
    var i7 = nM - n9;
    var iA = nN - nA;
    var hp = uk;
    hp.imageSmoothingEnabled = ec < 9;
    bA.qb.textAlign(hp, 1);
    bA.qb.textBaseline(hp, 1);
    for (aB = 0; aB < en; aB++) {
      player = m4[aB] >> 3;
      hW = a6g[aB];
      aWf = 0.9 + Math.log10(hW) * 0.1;
      i6 = mF[aB];
      aMj = i6 % aWp / 16 - aWf;
      aMk = Math.floor(i6 / aWp) / 16 - aWf;
      eu = aWn * (aMj - n9) / i7;
      ew = aWo * (aMk - nA) / iA;
      aWj = +(player === aWm);
      aWi = 1 + aWj / 8;
      aWk = ec * aWf;
      aWh = aWk * -2 * aWi;
      aWi = aWj * aWk / 4;
      if (eu < aWh || ew < aWh || eu > aWn + aWi || ew > aWo + aWi) {
        continue;
      }
      er = aWf * 2 * eR;
      aWg = aWf * ec;
      a2x = aWl[player];
      if (a2x === null) {
        aWl[player] = a2x = aWY(player);
      }
      if (player === aWm) {
        hp.setTransform(er, 0, 0, er, eu - er * 2, ew - er * 2);
        hp.drawImage(aWS, 0, 0);
      }
      hp.setTransform(er, 0, 0, er, eu, ew);
      hp.drawImage(a2x, 0, 0);
      fontSize = Math.floor(aWr(hW) * aWg);
      if (fontSize < 6) {
        continue;
      }
      hp.setTransform(1, 0, 0, 1, 0, 0);
      hp.fillStyle = aWL[aB] ? bB.oH : bB.nj;
      hp.font = bA.qb.sQ(1, fontSize);
      hp.fillText(bA.ra.zQ(hW), eu + aWg, ew + aWg + fontSize * 0.1);
    }
    hp.imageSmoothingEnabled = false;
    hp.setTransform(1, 0, 0, 1, 0, 0);
  };
  function aWr(hW) {
    if (hW < 1000) {
      return 0.42;
    }
    if (hW < 10000) {
      return 0.34;
    }
    if (hW < 1000000) {
      return 0.26;
    }
    if (hW < 100000000) {
      return 0.19;
    }
    return 0.15;
  }
}
function aVd() {
  var aWs;
  var aWt = 20;
  this.dd = function () {
    if (!aD.hh) {
      aWs = [bP.y.aWu(aWt, bg.aWv[7])];
      return;
    }
    aWw();
  };
  function aWw() {
    var hd = 1 - aD.xM;
    aWs = new Array(bg.kX.length);
    for (var aB = aD.xL - 1; aB >= 0; aB--) {
      var a5Q = bg.kX[aB + hd];
      aWs[a5Q] = bP.y.aWu(aWt, bg.aWv[a5Q]);
    }
    if (aD.kS === 9) {
      aWs[1] = bP.y.aWu(aWt, bg.aWv[1]);
    }
  }
  this.uj = function () {
    var nT = hy;
    if (nT >= 5) {
      return;
    }
    var aWn = h.i;
    var aWo = h.j;
    var n9 = iO / nT;
    var nA = iP / nT;
    var nM = (aWn + iO) / nT;
    var nN = (aWo + iP) / nT;
    var gM = -aWt * nT;
    var aWx = gM * 0.5;
    var aWp = bS.ey << 4;
    var en = bN.y.m0;
    var mF = bN.y.mF;
    var m4 = bN.y.m4;
    var aAh = bg.aAh;
    var a2x = aWs;
    var hp = uk;
    if (nT > 3) {
      hp.globalAlpha = (5 - nT) * 0.5;
    }
    for (var aB = 0; aB < en; aB++) {
      var i6 = mF[aB];
      var aWy = i6 % aWp / 16;
      var aWz = Math.floor(i6 / aWp) / 16;
      var eu = aWn * (aWy - n9) / (nM - n9) + aWx;
      var ew = aWo * (aWz - nA) / (nN - nA) + aWx;
      if (eu > aWn || ew > aWo || eu < gM || ew < gM) {
        continue;
      }
      hp.setTransform(nT, 0, 0, nT, eu, ew);
      hp.drawImage(a2x[aAh[m4[aB] >> 3]], 0, 0);
    }
    hp.globalAlpha = 1;
    hp.setTransform(nT, 0, 0, nT, 0, 0);
  };
}
function aVh() {
  this.aX0 = function (player, id) {
    var aX1 = ag.gU[player];
    var en = aX1.length;
    for (var aB = 0; aB < en; aB++) {
      if (bM.hz(aX1[aB], id)) {
        return true;
      }
    }
    return false;
  };
  this.aX2 = function (player, eZ) {
    var aB;
    var fF;
    var iF;
    var aX3;
    var aX4;
    var eR;
    var aX1 = ag.gU[player];
    var en = aX1.length;
    var i = bS.ey;
    var aX5 = bM.ev(eZ);
    var aX6 = bM.ex(eZ);
    var et = -1;
    var min = bS.ey * bS.ey + bS.ez * bS.ez;
    var id = ac.eV(bM.ed(eZ));
    for (aB = 0; aB < en; aB++) {
      eR = aX1[aB];
      iF = eR >> 2;
      aX3 = aX5 - iF % i;
      aX4 = aX6 - ~~((iF + 0.5) / i);
      fF = aX3 * aX3 + aX4 * aX4;
      if (fF < min && bM.hz(eR, id)) {
        min = fF;
        et = iF;
      }
    }
    return et;
  };
  this.l0 = function (iE, iF) {
    var id = ac.eV(bM.ed(iF));
    var i0 = bM.hs;
    var eR = bM.ed(iE);
    var aX7 = -1;
    for (var aB = 0; aB < 4; aB++) {
      var ec = eR + i0[aB];
      if (ac.i1(ec) && ac.eV(ec) === id && (aX7 === -1 || bM.iG(bM.eb(ec), iF) < bM.iG(aX7, iF))) {
        aX7 = bM.eb(ec);
      }
    }
    return aX7;
  };
  this.lZ = function (player, eZ) {
    var i0 = bM.hs;
    var eR = bM.ed(eZ);
    for (var aB = 0; aB < 4; aB++) {
      var ec = eR + i0[aB];
      if (ac.gN(ec) && ac.yB(player, ec)) {
        return true;
      }
    }
    return false;
  };
  this.la = function (player, eZ) {
    var i0 = bM.hs;
    var eR = bM.ed(eZ);
    for (var aB = 0; aB < 4; aB++) {
      var ec = eR + i0[aB];
      if (ac.ee(ec)) {
        return true;
      }
      if (ac.gN(ec)) {
        var jJ = ac.ef(ec);
        if (player !== jJ && bs.eg(player, jJ)) {
          return true;
        }
      }
    }
    return false;
  };
  this.m6 = function (eZ) {
    var i0 = bM.hs;
    var eR = bM.ed(eZ);
    for (var aB = 0; aB < 4; aB++) {
      var ec = eR + i0[aB];
      if (ac.gN(ec)) {
        var player = ac.ef(ec);
        if (bA.g9.jX(player)) {
          return player;
        }
      }
    }
    return -1;
  };
  this.aWD = function (eR) {
    if (!ac.i1(eR)) {
      return false;
    }
    var i0 = bM.hs;
    for (var aB = 0; aB < 4; aB++) {
      if (ac.ei(eR + i0[aB])) {
        return true;
      }
    }
    return false;
  };
  this.n8 = function (player, id) {
    var en = bN.y.kE[player];
    var tA = player << 3;
    var tB = tA + en;
    var m3 = bN.y.m3;
    var a7i = bN.y.a7i;
    for (var aB = tA; aB < tB; aB++) {
      var a7j = a7i[aB];
      if (m3[a7j] === id) {
        return a7j;
      }
    }
    return -1;
  };
  this.nD = function (player) {
    var en = bN.y.kE[player];
    if (en === 0) {
      return -1;
    }
    return bN.y.a7i[player << 3];
  };
  this.a5i = function (lP, lQ) {
    var en = bN.y.m0;
    if (en < 1) {
      return -1;
    }
    var mF = bN.y.mF;
    var aX8 = 80;
    var aP3 = -1;
    for (var aB = 0; aB < en; aB++) {
      var f3 = bM.i3(lP, lQ, mF[aB]);
      if (f3 < aX8) {
        aX8 = f3;
        aP3 = aB;
      }
    }
    if (!aX9(aP3, lP, lQ)) {
      return -1;
    }
    return aP3;
  };
  this.aVu = function (n6) {
    var en = bN.y.m0;
    var m3 = bN.y.m3;
    for (var aB = 0; aB < en; aB++) {
      if (m3[aB] === n6) {
        bO.fP[2] = aB;
        return true;
      }
    }
    return false;
  };
  this.aHZ = function (player) {
    var en = bN.y.kE[player];
    var tA = player << 3;
    var tB = tA + en;
    var a7i = bN.y.a7i;
    var a6g = bN.y.a6g;
    var hW = 0;
    for (var aB = tA; aB < tB; aB++) {
      hW += a6g[a7i[aB]];
    }
    return hW;
  };
  this.aXA = function (player, aWA) {
    var lV = bN.y.m2[aWA];
    return this.lZ(player, lV[lV.length - 1]);
  };
  this.aXB = function (iE, iF, f3, aXC) {
    var iI = bM.ev(iE);
    var iJ = bM.ex(iE);
    var iK = bM.ev(iF);
    var iL = bM.ex(iF);
    f3 = Math.max(f3, 1);
    var aXD = iK - iI;
    var aXE = iL - iJ;
    var i7 = bL.du(Math.abs(aXD) * aXC, f3);
    var iA = bL.du(Math.abs(aXE) * aXC, f3);
    return bM.fB(iI + Math.sign(aXD) * i7, iJ + Math.sign(aXE) * iA);
  };
  function aX9(aB, lP, lQ) {
    if (aB < 0) {
      return false;
    }
    var aXF = bN.y.mF[aB];
    var aXG = bM.i9(aXF);
    var aXH = bM.iC(aXF);
    var aTw = (0.9 + Math.log10(bN.y.a6g[aB]) * 0.1) * 20;
    aTw = Math.max(aTw, bM.iQ(bA.qb.tF(0.02, 1.7)));
    return bL.aMi(bM.i8(lP), bM.iB(lQ), aXG, aXH, aTw);
  }
  this.aW4 = function (lV, eZ) {
    var en = lV.length - 1;
    var eu = bM.ev(eZ);
    var ew = bM.ex(eZ);
    for (var aB = 0; aB < en; aB++) {
      var iE = lV[aB];
      var iF = lV[aB + 1];
      var n9 = bM.ev(iE);
      var nA = bM.ex(iE);
      var nM = bM.ev(iF);
      var nN = bM.ex(iF);
      if ((eu === n9 || eu === nM || Math.sign(eu - n9) !== Math.sign(eu - nM)) && (ew === nA || ew === nN || Math.sign(ew - nA) !== Math.sign(ew - nN))) {
        if (n9 === nM || nA === nN) {
          return aB;
        }
        if (Math.abs(eu - n9) === Math.abs(ew - nA) && Math.abs(eu - nM) === Math.abs(ew - nN)) {
          return aB;
        }
      }
    }
    return -1;
  };
  this.aBM = function () {
    var aXI = ll[0];
    var m4 = bN.y.m4;
    var m0 = bN.y.m0;
    var g = [];
    for (var aB = 0; aB < m0; aB++) {
      if (bA.g9.ko(aXI, m4[aB] >> 3)) {
        g.push(aB);
      }
    }
    return g;
  };
  this.lX = function (player, lV) {
    var en = bN.y.kE[player];
    var tA = player << 3;
    var tB = tA + en;
    var a7i = bN.y.a7i;
    var m2 = bN.y.m2;
    var hF = lV[0];
    var kn = lV[lV.length - 1];
    for (var aB = tA; aB < tB; aB++) {
      var gL = m2[a7i[aB]];
      if (gL[0] === hF && gL[gL.length - 1] === kn) {
        return true;
      }
    }
    return false;
  };
}
function aVi() {
  this.hR = function (player, eZ) {
    if (!aXJ(player)) {
      return false;
    }
    var aWA = aXK(player, eZ);
    if (aWA === -1) {
      return false;
    }
    if (!aXL(player, aWA)) {
      return false;
    }
    bO.fP[3] = bN.y.m3[aWA];
    return true;
  };
  this.pE = function (player, n6) {
    if (!aXJ(player)) {
      return false;
    }
    if (!bN.kz.aVu(n6)) {
      return false;
    }
    var aWA = bO.fP[2];
    if (!aXL(player, aWA)) {
      return false;
    }
    return true;
  };
  this.q7 = function (player, n6, aXM) {
    if (!aXN(player, n6, aXM)) {
      return false;
    }
    var aWA = bO.fP[2];
    bN.y.m1[aWA] = 64 + bN.y.m1[aWA] % 64;
    bN.m9.jG(n6, bN.y.mJ);
    return true;
  };
  function aXL(player, aWA) {
    var aVp = bM.iV(bN.y.mF[aWA]);
    var aXO = ac.eV(bM.ed(aVp));
    if (!bN.kz.aX0(player, aXO)) {
      return false;
    }
    return true;
  }
  function aXN(player, n6, aXM) {
    if (!aXJ(player)) {
      return false;
    }
    if (!bN.kz.aVu(n6)) {
      return false;
    }
    var aWA = bO.fP[2];
    if (!bA.g9.ko(player, bN.y.m4[aWA] >> 3)) {
      return false;
    }
    if (aXP(player, aWA)) {
      return true;
    }
    var aVp = bM.iV(bN.y.mF[aWA]);
    var aXQ = bN.kz.aX2(player, aVp);
    if (aXQ === -1) {
      return false;
    }
    var aXR = bM.iD(aXQ, aVp);
    if (aXM && aXR > 120) {
      return false;
    }
    var aTv = aXS(aWA, aXR, aVp);
    if (bN.kx.q4(player, aTv, 1)) {
      bO.fP[1] = 6;
      return true;
    }
    return false;
  }
  function aXS(aWA, aXR, aVp) {
    var lV = bN.y.m2[aWA];
    var mD = bN.y.mE[aWA];
    var aXT = bM.iD(aVp, lV[mD + 1]);
    if (aXR <= aXT) {
      return bN.kz.aXB(aVp, lV[mD + 1], aXT, aXR);
    }
    var f3 = aXR - aXT;
    var en = lV.length - 1;
    for (var aB = mD + 1; aB < en; aB++) {
      var aXU = bM.iD(lV[aB], lV[aB + 1]);
      if (f3 <= aXU) {
        return bN.kz.aXB(lV[aB], lV[aB + 1], aXU, f3);
      }
      f3 -= aXU;
    }
    return lV[en];
  }
  function aXP(player, aWA) {
    if (!bN.kz.aXA(player, aWA)) {
      return false;
    }
    bO.g[0] = bN.lW.le(bN.y.m2[aWA]);
    bO.fP[1] = 6;
    return true;
  }
  function aXK(player, eZ) {
    var en = bN.y.m0;
    var mF = bN.y.mF;
    var m4 = bN.y.m4;
    var aX8 = bM.hu();
    var aP3 = -1;
    for (var aB = 0; aB < en; aB++) {
      var f3 = bM.iD(eZ, bM.iV(mF[aB]));
      if (f3 < aX8 && bA.g9.ko(player, m4[aB] >> 3)) {
        aX8 = f3;
        aP3 = aB;
      }
    }
    return aP3;
  }
  function aXJ(player) {
    if (!bN.mG.mH(player)) {
      return false;
    }
    if (bN.lW.lc()) {
      return false;
    }
    return true;
  }
}
function aVX() {
  this.j3 = function () {
    var m1 = bN.y.m1;
    var mF = bN.y.mF;
    var aWB = bN.y.aWB;
    for (var aB = bN.y.m0 - 1; aB >= 0; aB--) {
      if (aWB[aB] !== 65535) {
        continue;
      }
      if (aXV(aB, bM.iV(mF[aB]), m1[aB] % 64)) {
        bN.m9.aVv(aB);
        bN.aHc.aWE(aB);
      }
    }
  };
  this.aXW = function (player, eZ, he, n6, hW) {
    if (he >= 5) {
      return;
    }
    var aWm = aD.eX;
    if (!bA.g9.gz(aWm)) {
      return;
    }
    if (!bs.eg(player, aWm)) {
      return;
    }
    if (player === aWm) {
      return;
    }
    if (ag.gU[aWm].length === 0) {
      return;
    }
    if (!bA.g9.a3Y(player, 5)) {
      return;
    }
    var f1 = false;
    var aXX;
    for (var aB = 0; aB < 4; aB++) {
      aXX = eZ + bM.hr[aB] << 2;
      if (!ac.ei(aXX)) {
        continue;
      }
      if (ac.ee(aXX)) {
        continue;
      }
      if (ac.ef(aXX) === aWm) {
        f1 = true;
        break;
      }
    }
    if (!f1) {
      return;
    }
    aN.a6p(719, 0);
    var qI;
    if (hW < 25000) {
      qI = L(464) + " (" + bA.ra.zQ(hW) + ") ⛵";
    } else {
      qI = L(465) + " (" + bA.ra.zQ(hW) + ") 🚢";
    }
    aN.yb(180, qI, 719, player, bB.oG, bB.ng, -1, true, undefined, {
      f7: 1,
      n6: n6
    });
  };
  function aXV(aB, aVp, he) {
    if (he === 6) {
      if (bN.m9.aVy(aB, aVp)) {
        bN.y.mE[aB]++;
        bN.y.aWB[aB] = 0;
        return false;
      }
      return true;
    }
    var player = bN.y.m4[aB] >> 3;
    var hW = bN.y.a6g[aB];
    bd.aXY(player);
    if (he < 4) {
      aXZ(player, hW, aVp + bM.hr[he] << 2, aVp);
    } else if (he === 4) {
      aXa(player, hW, aVp);
    } else if (he === 5) {
      aXb(player, hW, aVp);
    }
    return true;
  }
  function aXa(player, hW, aVp) {
    var aB;
    var er;
    var i0 = bM.hs;
    var ec = bM.ed(aVp);
    for (aB = 0; aB < 4; aB++) {
      er = ec + i0[aB];
      if (ac.ee(er)) {
        aXZ(player, hW, er, aVp);
        return;
      }
    }
    for (aB = 0; aB < 4; aB++) {
      er = ec + i0[aB];
      if (ac.gN(er) && !ac.yB(player, er)) {
        aXZ(player, hW, er, aVp);
        return;
      }
    }
    for (aB = 0; aB < 4; aB++) {
      er = ec + i0[aB];
      if (ac.gN(er)) {
        aXZ(player, hW, er, aVp);
        return;
      }
    }
  }
  function aXb(player, hW, aVp) {
    var aB;
    var er;
    var i0 = bM.hs;
    var ec = bM.ed(aVp);
    for (aB = 0; aB < 4; aB++) {
      er = ec + i0[aB];
      if (ac.gN(er) && ac.yB(player, er)) {
        aXZ(player, hW, er, aVp);
        return;
      }
    }
    for (aB = 0; aB < 4; aB++) {
      er = ec + i0[aB];
      if (ac.gN(er)) {
        aXZ(player, hW, er, aVp);
        return;
      }
    }
    for (aB = 0; aB < 4; aB++) {
      er = ec + i0[aB];
      if (ac.ee(er)) {
        aXZ(player, hW, er, aVp);
        return;
      }
    }
  }
  function aXZ(player, hW, aXX, aVp) {
    var jJ;
    if (ac.ee(aXX)) {
      jJ = aD.ek;
    } else {
      jJ = ac.ef(aXX);
      if (jJ === player) {
        bd.gD(player, hW - bA.g9.gC(player, hW), 12);
        return;
      }
      if (!bs.eg(player, jJ)) {
        b8.kC.pT(player, jJ, hW);
        return;
      }
    }
    if (!ad.jV(player, jJ) && !ad.jo(player)) {
      bd.gD(player, hW, 12);
      return;
    }
    ag.gF[player].push(aVp << 2);
    ad.jG(player, hW, jJ);
    aF.jH(player, true);
  }
}
function aVU() {
  this.kO = 512;
  this.aWC = 8;
  this.m0 = 0;
  this.mJ = 0;
  this.m4 = new Uint16Array(this.kO);
  this.mF = new Uint32Array(this.kO);
  this.aWB = new Uint16Array(this.kO);
  this.a6g = new Uint32Array(this.kO);
  this.aWJ = new Uint16Array(this.kO);
  this.m3 = new Uint16Array(this.kO);
  this.m1 = new Uint8Array(this.kO);
  this.aWL = new Uint8Array(this.kO);
  this.m2 = new Array(this.kO);
  this.mE = new Uint16Array(this.kO);
  this.kE = new Uint8Array(aD.ek);
  this.a7i = new Uint16Array(this.aWC * aD.ek);
  this.dd = function () {
    this.m0 = 0;
    this.mJ = 0;
    this.kE.fill(0);
    this.m2.fill(null);
  };
  this.mL = function (player) {
    var hW = bO.fK[0];
    var m5 = bO.fP[1];
    var lV = bO.g[0];
    var aXc = this.mJ;
    var en = this.m0;
    var aXd = bM.iU(lV[0]);
    var aXe = this.kE[player];
    var aXf = (player << 3) + aXe;
    this.m4[en] = aXf;
    this.mF[en] = aXd;
    this.aWB[en] = 0;
    if (hW < 60) {
      bA.g9.gA(player, 60 - hW);
      hW = 60;
    }
    this.a6g[en] = hW;
    this.aWJ[en] = bN.iX.mL(en, bM.iW(aXd));
    this.m3[en] = aXc;
    this.m1[en] = m5;
    this.aWL[en] = 0;
    this.m2[en] = lV;
    this.mE[en] = 0;
    this.mJ = (aXc + 1) % 65536;
    this.kE[player] = aXe + 1;
    this.a7i[aXf] = en;
    this.m0++;
    bN.m5.aXW(player, lV[lV.length - 1], m5, aXc, hW);
  };
  this.j3 = function () {
    bN.m5.j3();
    var gL = aD.eX;
    var dt = bN.kz.aHZ(gL);
    aXg(this);
    aXh(this);
    aXi(this);
    aXj(this);
    bd.gD(gL, dt - bN.kz.aHZ(gL), 15);
  };
  function aXg(sD) {
    var aXk;
    var gM;
    var mF = sD.mF;
    var a6g = sD.a6g;
    var aWL = sD.aWL;
    var aWB = sD.aWB;
    var aWJ = sD.aWJ;
    var m2 = sD.m2;
    var mE = sD.mE;
    var en = sD.m0;
    var aWp = bS.ey << 4;
    for (var aB = en - 1; aB >= 0; aB--) {
      var aXl = mF[aB];
      var lV = m2[aB];
      var aXm = mE[aB];
      var aXd = bM.iU(lV[aXm]);
      var aXn = bM.iU(lV[aXm + 1]);
      var aXo = aXd % aWp;
      var aXp = ~~((aXd + 0.5) / aWp);
      var aXq = aXn % aWp;
      var aXr = ~~((aXn + 0.5) / aWp);
      var aXs = aXq - aXo;
      var aXt = aXr - aXp;
      var eq = Math.max(~~Math.sqrt(aXs * aXs + aXt * aXt + 0.5), 1);
      var aXu = a6g[aB];
      if (aWL[aB]) {
        gM = 40000;
      } else {
        gM = 250000 + Math.min(aXu * 20, 300000) + Math.min(aXu >> 3, 50000);
      }
      var aXv = aWB[aB] + Math.max(~~((gM + 0.5) / eq), 1);
      if (aXv >= 65535) {
        if (aXm + 2 < lV.length) {
          mE[aB] = aXm + 1;
          mF[aB] = aXk = aXw(aB, aXv, aXq, aXr, aXm, eq, lV, aWp);
        } else {
          mF[aB] = aXk = aXn;
          aWB[aB] = 65535;
        }
      } else {
        aWB[aB] = aXv;
        mF[aB] = aXk = aXo + bL.du(aXv * aXs, 65535) + aWp * (aXp + bL.du(aXv * aXt, 65535));
      }
      aWJ[aB] = bN.iX.aXx(aWJ[aB], aXl, aXk);
    }
  }
  function aXw(aB, aXv, aXo, aXp, aXm, eq, lV, aWp) {
    aXv = Math.min(aXv - 65535, 65535);
    var aXn = bM.iU(lV[aXm + 2]);
    var aXq = aXn % aWp;
    var aXr = ~~((aXn + 0.5) / aWp);
    var aXs = aXq - aXo;
    var aXt = aXr - aXp;
    var aXy = Math.max(~~Math.sqrt(aXs * aXs + aXt * aXt + 0.5), 1);
    aXv = Math.min(Math.floor((eq * aXv + 0.5) / aXy), 65534);
    bN.y.aWB[aB] = aXv;
    return aXo + bL.du(aXv * aXs, 65535) + aWp * (aXp + bL.du(aXv * aXt, 65535));
  }
  function aXh(sD) {
    if (bf.k7() % 2 !== 1) {
      return;
    }
    var aB;
    var hf;
    var l5;
    var f7;
    var f8;
    var aXz;
    var z4;
    var aY0;
    var hF;
    var kn;
    var a9C;
    var a9E;
    var n9;
    var nA;
    var aXd;
    var aXn;
    var aY1;
    var f3;
    var aY2;
    var aY3;
    var aY4;
    var en = sD.m0;
    var mF = sD.mF;
    var m4 = sD.m4;
    var a6g = sD.a6g;
    var aWL = sD.aWL;
    var iX = bN.iX.iX;
    var aY5 = iX.length;
    var aY6 = bN.iX.aY6;
    var aWp = bS.ey << 4;
    var aY7 = aD.hh;
    var aTi = bg.el;
    var aX8 = 14400;
    var gM = (en - 1) * (bL.du(bf.k7(), 2) % 2);
    for (aB = 0; aB < en; aB++) {
      hf = Math.abs(aB - gM);
      aXd = mF[hf];
      l5 = bM.iW(aXd);
      hF = m4[hf] >> 3;
      n9 = aXd % aWp;
      nA = ~~((aXd + 0.5) / aWp);
      aY3 = a6g[hf];
      for (f7 = 0; f7 < 9; f7++) {
        aXz = l5 + aY6[f7];
        if (aXz < 0 || aXz >= aY5) {
          continue;
        }
        aY0 = iX[aXz];
        z4 = aY0.length;
        for (f8 = 0; f8 < z4; f8++) {
          aY1 = aY0[f8];
          kn = m4[aY1] >> 3;
          if (hF === kn || aY7 && aTi[hF] === aTi[kn] && aTi[hF]) {
            continue;
          }
          aXn = mF[aY1];
          a9C = n9 - aXn % aWp;
          a9E = nA - ~~((aXn + 0.5) / aWp);
          f3 = a9C * a9C + a9E * a9E;
          if (f3 < aX8) {
            aY4 = a6g[aY1];
            if (aY4 <= aY3) {
              aY2 = Math.max(1, bL.du(aY4 + bL.du(aY3 - aY4, 10), 10));
            } else {
              aY2 = Math.max(1, bL.du(aY3, 10));
            }
            a6g[aY1] = Math.max(aY4 - aY2, 0);
            aWL[aY1] = 4;
          }
        }
      }
    }
  }
  function aXi(sD) {
    if (bf.k7() % 5 !== 3) {
      return;
    }
    var a6g = sD.a6g;
    var en = sD.m0;
    for (var aB = 0; aB < en; aB++) {
      var hW = a6g[aB];
      a6g[aB] = Math.max(hW - Math.max(1, hW >> 7), 0);
    }
  }
  function aXj(sD) {
    var a6g = sD.a6g;
    var aWL = sD.aWL;
    for (var aB = sD.m0 - 1; aB >= 0; aB--) {
      aWL[aB] = aWL[aB] >> 1;
      if (a6g[aB] === 0) {
        bN.m9.aVv(aB);
        bN.aHc.aWE(aB);
      }
    }
  }
}
function aVV() {
  this.aY8 = 32;
  this.eu = 0;
  this.ew = 0;
  this.iY = 0;
  this.aY9 = 0;
  this.aYA = 4;
  this.iX = null;
  this.aY6 = new Int16Array(9);
  this.dd = function () {
    this.iY = 1 + bL.du(bS.ey - 1, this.aY8);
    this.aY9 = 1 + bL.du(bS.ez - 1, this.aY8);
    this.iX = new Array(this.iY * this.aY9);
    bA.qj.a2U(this.iX);
    aYB(this.aY6, this.iY);
  };
  function aYB(aY6, i) {
    var eu;
    var ew;
    for (eu = -1; eu <= 1; eu++) {
      for (ew = -1; ew <= 1; ew++) {
        aY6[(1 + ew) * 3 + 1 + eu] = ew * i + eu;
      }
    }
  }
  this.mL = function (aYC, aB) {
    this.iX[aB].push(aYC);
    return this.iX[aB].length - 1;
  };
  this.aXx = function (aYD, aXd, aXn) {
    var aYE;
    var aYF;
    var tA = bM.iW(aXd);
    var tB = bM.iW(aXn);
    if (tA === tB) {
      return aYD;
    }
    aYE = this.iX[tA].pop();
    if (this.iX[tA].length === aYD) {
      return this.mL(aYE, tB);
    }
    aYF = this.iX[tA][aYD];
    this.iX[tA][aYD] = aYE;
    bN.y.aWJ[aYE] = aYD;
    return this.mL(aYF, tB);
  };
}
function aVZ() {
  this.ky = function (player, aYG) {
    if (aYG === -1) {
      return false;
    }
    if (!bN.kz.la(player, aYG)) {
      return false;
    }
    return this.q4(player, aYG, 0);
  };
  this.q4 = function (player, aYG, aYH) {
    var lT = aYI(player, aYG, aYH);
    if (lT === -1) {
      return false;
    }
    bO.g[0] = bN.lW.get(lT);
    return true;
  };
  function aYI(player, aYG, aYH) {
    var aXQ = bN.kz.aX2(player, aYG);
    if (aXQ === -1) {
      return -1;
    }
    var aYJ = bN.kz.l0(aXQ, aYG);
    if (aYJ === -1) {
      return -1;
    }
    var lT = bN.lW.lb(aYJ, aYG);
    if (lT >= 0) {
      return lT;
    }
    if (bN.lW.lc()) {
      return -1;
    }
    lT = bN.lW.lb(aYG, aYJ);
    if (lT >= 0) {
      return bN.lW.ld(bN.lW.le(bN.lW.get(lT)));
    }
    if (aYJ === aYG) {
      return bN.lW.ld(new Uint32Array([aYJ, aYG]));
    }
    lT = bN.aVa.q4(aYJ, aYG);
    if (lT >= 0) {
      return lT;
    }
    if (!aYH) {
      return -1;
    }
    return aYK(aYG, player);
  }
  function aYK(aYL, player) {
    var fU = bO.fU;
    fU.fill(0);
    var eK = [aYL];
    fU[aYL] = 1;
    var ht = bM.ht;
    var aYM = -1;
    var en = eK.length;
    while (aYM === -1 && en) {
      var g = [];
      for (var aB = 0; aB < en; aB++) {
        var eZ = eK[aB];
        var a4I = fU[eZ];
        for (var eq = 0; eq < 8; eq++) {
          var et = eZ + ht[eq];
          var eR = et * 4;
          if (!ac.i1(eR)) {
            if (aYM === -1 && eq % 2 === 0 && ac.y8(player, eR)) {
              aYM = eZ;
            }
            continue;
          }
          var wI = fU[et];
          var a0s = a4I + 5 + ((eq & 1) << 1);
          if (wI === 0) {
            g.push(et);
            fU[et] = a0s;
          } else {
            fU[et] = Math.min(a0s, wI);
          }
        }
      }
      eK = g;
      en = eK.length;
    }
    if (aYM === -1) {
      return -1;
    }
    return aYN(aYL, aYM);
  }
  function aYN(iE, aYO) {
    var ht = bM.ht;
    var aYP = -1;
    var he = 0;
    var mf = [];
    while (aYO !== iE) {
      he = aYQ(aYO, he);
      if (he !== aYP) {
        mf.push(aYO);
        aYP = he;
      }
      aYO += ht[he];
    }
    mf.push(iE);
    var lT = bN.lW.lb(mf[0], iE);
    if (lT >= 0) {
      return lT;
    }
    return bN.lW.ld(new Uint32Array(mf));
  }
  function aYQ(eZ, he) {
    var fU = bO.fU;
    var ht = bM.ht;
    var a4I = fU[eZ];
    if (a4I - fU[eZ + ht[he]] === 5 + ((he & 1) << 1)) {
      return he;
    }
    for (var f6 = 0; f6 < 8; f6++) {
      var eq = f6 + he + 6 & 7;
      if (a4I - fU[eZ + ht[eq]] === 5 + ((eq & 1) << 1)) {
        return eq;
      }
    }
    return he;
  }
}
function aVb() {
  this.q4 = function (aYJ, aYG) {
    var lV = aYI(aYJ, aYG);
    if (lV === null) {
      return -1;
    }
    return bN.lW.ld(lV);
  };
  function aYI(aYJ, aYG) {
    var iI = bM.ev(aYJ);
    var iJ = bM.ex(aYJ);
    var iK = bM.ev(aYG);
    var iL = bM.ex(aYG);
    if (iI === iK) {
      if (aYR(iI, iJ, iL)) {
        return new Uint32Array([aYJ, aYG]);
      }
      return null;
    }
    if (iJ === iL) {
      if (aYS(iJ, iI, iK)) {
        return new Uint32Array([aYJ, aYG]);
      }
      return null;
    }
    return aYT(iI, iJ, iK, iL, aYJ, aYG) || aYT(iK, iL, iI, iJ, aYJ, aYG);
  }
  function aYR(h2, iJ, iL) {
    var jQ = Math.min(iJ, iL);
    var nR = Math.max(iJ, iL);
    for (var ew = jQ + 1; ew < nR; ew++) {
      if (!ac.i1(bM.iR(h2, ew))) {
        return false;
      }
    }
    return true;
  }
  function aYS(h4, iI, iK) {
    var jQ = Math.min(iI, iK);
    var nR = Math.max(iI, iK);
    for (var eu = jQ + 1; eu < nR; eu++) {
      if (!ac.i1(bM.iR(eu, h4))) {
        return false;
      }
    }
    return true;
  }
  function aYT(iI, iJ, iK, iL, aYJ, aYG) {
    var en = Math.min(Math.abs(iK - iI), Math.abs(iL - iJ));
    var i7 = Math.sign(iK - iI);
    var iA = Math.sign(iL - iJ);
    for (var aB = 0; aB < en; aB++) {
      iI += i7;
      iJ += iA;
      if (!ac.i1(bM.iR(iI, iJ))) {
        return null;
      }
    }
    if (iI === iK) {
      if (aYR(iI, iJ, iL)) {
        return new Uint32Array([aYJ, bM.fB(iI, iJ), aYG]);
      }
      return null;
    }
    if (aYS(iJ, iI, iK)) {
      return new Uint32Array([aYJ, bM.fB(iI, iJ), aYG]);
    }
    return null;
  }
}
function aVg() {
  var aYU = [];
  this.dd = function () {
    aYU = [];
  };
  this.lc = function () {
    return aYU.length === 65536;
  };
  this.lb = function (aYJ, aYG) {
    var lW = aYU;
    var en = lW.length;
    for (var aB = 0; aB < en; aB++) {
      var gL = lW[aB];
      if (gL[0] === aYJ && gL[gL.length - 1] === aYG) {
        return aB;
      }
    }
    return -1;
  };
  this.le = function (lV) {
    var aYV = new Uint32Array(lV.length);
    aYV.set(lV);
    return aYV.reverse();
  };
  this.aW2 = function (hF, kn) {
    var gG = hF.length - 1;
    var aYW = new Uint32Array(gG + kn.length);
    aYW.set(hF, 0);
    aYW.set(kn, gG);
    return aYW;
  };
  this.aW7 = function (hF, kn, aAk, eZ, aYX) {
    if (aYX) {
      kn = this.le(kn);
      aAk = kn.length - aAk - 2;
    }
    var aYY = kn.subarray(aAk + 1 + (eZ === kn[aAk + 1]));
    var aYW = new Uint32Array(hF.length + aYY.length);
    aYW.set(hF, 0);
    aYW.set(aYY, hF.length);
    return aYW;
  };
  this.ld = function (lV) {
    aYU.push(lV);
    return aYU.length - 1;
  };
  this.get = function (aB) {
    return aYU[aB];
  };
  this.lY = function () {
    return aYU;
  };
  this.aYZ = function (aYJ, aYG) {
    return null;
  };
}
function aVk() {
  this.j3 = function (player, n6) {
    var mC = bN.kz.n8(player, n6);
    if (mC < 0) {
      return false;
    }
    if (!bN.m9.aW9(mC)) {
      return false;
    }
    bN.m9.aVv(mC);
    return true;
  };
}
function aVW() {
  var yj = 32;
  var yi = new Array(2);
  this.aYa = -1;
  this.dd = function () {
    this.aYa = -1;
    if (yi[0]) {
      return;
    }
    yi[0] = wY(255);
    yi[1] = wY(0);
  };
  function wY(f8) {
    var eu;
    var ew;
    var eZ;
    var i7;
    var iA;
    var f3;
    var hj = yj;
    var a2x = bA.qb.wY(hj, hj);
    var hp = bA.qb.getContext(a2x, true);
    var hm = bA.qb.getImageData(hp, hj, hj);
    var wj = hm.data;
    var l5 = (hj >> 1) - 0.5;
    var l6 = Math.sqrt(l5 * l5);
    wj.fill(255);
    for (ew = 0; ew < hj; ew++) {
      for (eu = 0; eu < hj; eu++) {
        i7 = eu - l5;
        iA = ew - l5;
        eZ = (ew * hj + eu) * 4;
        f3 = (l6 - Math.sqrt(i7 * i7 + iA * iA)) * 714 / l6;
        wj[eZ + 2] = f8;
        wj[eZ + 3] = f3 > 255 ? 0 : f3;
      }
    }
    hp.putImageData(hm, 0, 0);
    return a2x;
  }
  this.aYb = function (hp, eR, eu, ew, e7, aB) {
    if (!bA.g9.gz(aD.eX)) {
      return;
    }
    eR *= 4 / 3 * (20 / 32);
    e7 *= 4 / 3;
    hp.setTransform(eR, 0, 0, eR, eu - e7, ew - e7);
    hp.drawImage(yi[+(bN.y.m3[aB] === this.aYa)], 0, 0);
  };
}
function aVf() {
  this.hO = function (player, aTv) {
    if (!bN.mG.mH(player)) {
      return false;
    }
    var aTw = bM.hu();
    var aYc = [];
    while (true) {
      var aYM = aYd(aTv, aTw, aYc, player);
      if (aYM === -1) {
        break;
      }
      var id = ac.eV(bM.ed(aYM));
      if (bN.kz.aX0(player, id)) {
        if (aYe(player, aYM, aTv)) {
          bO.fP[7] = aYM;
          return true;
        }
        return false;
      }
      aYc.push(id);
    }
    return false;
  };
  function aYd(aTv, aTw, aYc, player) {
    var h2 = bM.ev(aTv);
    var h4 = bM.ex(aTv);
    var aTy = bS.ey - 2;
    var a9I = bS.ez - 2;
    var aTz = -1;
    for (var eq = 0; eq < aTw; eq++) {
      var a9H = Math.max(h2 - eq, 1);
      var aLC = Math.max(h4 - eq, 1);
      var xw = Math.min(h2 + eq, aTy);
      var xv = Math.min(h4 + eq, a9I);
      var iE = aU0(h2, xw - h2, h4 - eq, aYc, a9I, 1, player);
      var iF = aU0(h2 - 1, h2 - a9H - 1, h4 - eq, aYc, a9I, -1, player);
      var aU1 = aU0(h2, xw - h2, h4 + eq, aYc, a9I, 1, player);
      var aU2 = aU0(h2 - 1, h2 - a9H - 1, h4 + eq, aYc, a9I, -1, player);
      var aU3 = aU4(h4, xv - h4 - 1, h2 - eq, aYc, aTy, 1, player);
      var aU5 = aU4(h4 - 1, h4 - aLC - 2, h2 - eq, aYc, aTy, -1, player);
      var aU6 = aU4(h4, xv - h4 - 1, h2 + eq, aYc, aTy, 1, player);
      var aU7 = aU4(h4 - 1, h4 - aLC - 2, h2 + eq, aYc, aTy, -1, player);
      aTz = aU8(aTz, iE, aTv);
      aTz = aU8(aTz, iF, aTv);
      aTz = aU8(aTz, aU1, aTv);
      aTz = aU8(aTz, aU2, aTv);
      aTz = aU8(aTz, aU3, aTv);
      aTz = aU8(aTz, aU5, aTv);
      aTz = aU8(aTz, aU6, aTv);
      aTz = aU8(aTz, aU7, aTv);
      if (aTz >= 0 && eq * eq >= bM.iG(aTz, aTv)) {
        return aTz;
      }
    }
    return -1;
  }
  function aU0(eu, en, ew, aYc, a9I, fE, player) {
    if (ew < 1 || ew > a9I) {
      return -1;
    }
    for (var aB = 0; aB <= en; aB++) {
      var eR = bM.iR(eu, ew);
      if (bN.kz.aWD(eR) && !bA.qj.has(aYc, ac.eV(eR)) && ac.y0(eR, player)) {
        return eR >> 2;
      }
      eu += fE;
    }
    return -1;
  }
  function aU4(ew, en, eu, aYc, aTy, fE, player) {
    if (eu < 1 || eu > aTy) {
      return -1;
    }
    en = Math.max(en, 0);
    for (var aB = 0; aB <= en; aB++) {
      var eR = bM.iR(eu, ew);
      if (bN.kz.aWD(eR) && !bA.qj.has(aYc, ac.eV(eR)) && ac.y0(eR, player)) {
        return eR >> 2;
      }
      ew += fE;
    }
    return -1;
  }
  function aU8(iE, iF, aTv) {
    if (iF === -1) {
      return iE;
    }
    if (iE === -1) {
      return iF;
    }
    if (bM.iG(iF, aTv) < bM.iG(iE, aTv)) {
      return iF;
    }
    return iE;
  }
  function aYe(player, aYM, aTv) {
    var he = bM.ib(aYM, aTv);
    for (var aB = 0; aB < 4; aB++) {
      var eZ = bM.iZ(aYM, he);
      if (ac.aHE(bM.ed(eZ), player)) {
        bO.fP[6] = he;
        return true;
      }
      he = (he + 1) % 4;
    }
    return false;
  }
}
function dg() {
  this.aRQ = [L(466), L(467), L(468), L(469), L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(478), L(479), L(480), L(481)];
  var aYf = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
  this.aBi = new Array(aYf.length);
  this.dd = function () {
    var value = bj.eK.data[155].value;
    var g = value.split(";");
    var l5 = g.length;
    aYg();
    if (l5 > aYf.length) {
      return;
    }
    for (var aB = 0; aB < l5; aB++) {
      if (g[aB].length) {
        this.aBi[aB] = g[aB];
      }
    }
  };
  function aYg() {
    var en = aYf.length;
    for (var aB = 0; aB < en; aB++) {
      bX.aBi[aB] = aYf[aB];
    }
  }
  this.aRS = function (e8, code) {
    var aBi = this.aBi;
    var aYh = aYf;
    aBi[e8] = code;
    var qI = "";
    var en = aBi.length;
    var aYi = [];
    for (var aB = 0; aB < en; aB++) {
      aYi.push(aBi[aB] === aYh[aB] ? "" : aBi[aB]);
    }
    en--;
    for (var aB = 0; aB < en; aB++) {
      qI += aYi[aB] + ";";
    }
    qI += aYi[en];
    bj.s3.s4(155, qI);
  };
  this.aRP = function () {
    bj.s3.s4(155, "");
    this.dd();
  };
  this.f8 = function (code, e8) {
    return code === this.aBi[e8] || code === this.aBi[e8 + 1];
  };
}
function dY() {
  var aVq = 1;
  var aYj = new Array(aVq);
  var aYk = new Array(aVq);
  var aYl = 20;
  var eL = 0;
  var aYm = false;
  this.dd = function () {
    if (window.document.documentMode) {
      return;
    }
    var src = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
    for (var aB = aVq - 1; aB >= 0; aB--) {
      aYn(aB, src);
    }
    aYm = true;
  };
  this.uD = function () {
    if (!aYm) {
      return;
    }
    aYm = false;
    for (var aB = aVq - 1; aB >= 0; aB--) {
      aYj[aB].onpause = null;
      aYj[aB].oncanplaythrough = null;
      t.removeChild(document.body, aYj[aB]);
      aYj[aB] = null;
    }
  };
  function aYn(aB, src) {
    aYk[aB] = 0;
    aYj[aB] = document.createElement("audio");
    aYj[aB].src = src;
    aYj[aB].setAttribute("preload", "auto");
    aYj[aB].setAttribute("controls", "none");
    aYj[aB].style.display = "none";
    aYj[aB].onpause = function () {
      aYk[aB] = 1;
    };
    aYj[aB].oncanplaythrough = function () {
      aYk[aB] = aYk[aB] === 0 ? 1 : aYk[aB];
    };
    document.body.appendChild(aYj[aB]);
  }
  function aYo() {
    aYl++;
    bp.play();
  }
  this.play = function () {
    if (!aYm) {
      return;
    }
    var dt = performance.now();
    if (dt > eL + 66) {
      for (var aB = aVq - 1; aB >= 0; aB--) {
        if (aYk[aB] === 1) {
          eL = dt;
          aYk[aB] = 2;
          aYj[aB].play();
          return;
        }
      }
    }
    if (aYl > 0) {
      aYl--;
      setTimeout(aYo, 66);
    }
  };
}
function ca() {
  this.a8G = function () {
    if (al.kg < 3) {
      return false;
    }
    if (ag.gb[ll[0]] >= aD.ju >> 1) {
      return false;
    }
    if (aD.hh) {
      return aYp();
    } else {
      return aYq();
    }
  };
  function aYq() {
    if (aD.kS === 8) {
      return false;
    }
    var aYr = ae.aIb();
    if (ag.gp[ll[0]] * 2 >= aYr) {
      return false;
    }
    return true;
  }
  function aYp() {
    if (aD.kS === 9) {
      return false;
    }
    var aYr = ae.aIb();
    var aYs = ae.aIc(bh.kj());
    if (aYs * 2 >= aYr) {
      return false;
    }
    return true;
  }
}
function cA() {
  this.dd = function () {
    if (aD.data.sResourcesType === 0) {
      aYt();
    } else if (aD.data.sResourcesType === 1) {
      aYu();
    } else {
      aYv();
    }
    bd.mf[8] = ag.gp[aD.eX];
  };
  function aYt() {
    var aXe = aD.kA;
    var gp = ag.gp;
    for (var aB = 0; aB < aXe; aB++) {
      gp[aB] = 512;
    }
    var aXf = aD.xE;
    var kN = aE.kN;
    var hW = aE.hW;
    for (aB = aXe; aB < aXf; aB++) {
      gp[aB] = kN[hW[aB]];
    }
  }
  function aYu() {
    var en = aD.xE;
    var gp = ag.gp;
    var sResourcesValue = aD.data.sResourcesValue;
    for (var aB = 0; aB < en; aB++) {
      gp[aB] = sResourcesValue;
    }
  }
  function aYv() {
    var en = aD.xE;
    var gp = ag.gp;
    var sResourcesData = aD.data.sResourcesData;
    for (var aB = 0; aB < en; aB++) {
      gp[aB] = sResourcesData[aB];
    }
  }
}
function dP() {
  var aHM = 501;
  this.aYw = new Uint32Array(aHM);
  this.a3d = new Uint32Array(aHM);
  this.aBN = new Uint16Array(aHM);
  this.aRY = 0;
  var aYx = 1;
  var aYy = 0;
  this.max = [0, 0, 0];
  this.aYz = 0;
  this.mf = new Array(21);
  this.aZ0 = null;
  this.de = function () {
    this.aZ0 = [L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(313), L(314), L(490), L(491), L(492), L(493), "", L(494), L(495), L(496), L(271), L(497), L(498)];
  };
  this.dd = function () {
    this.aRY = 0;
    aYx = 1;
    this.aYz = 0;
    aYy = 0;
    aZ1(this);
    this.mf.fill(0);
  };
  this.q1 = function (player, iN) {
    if (!bA.g9.a3X(player)) {
      return;
    }
    this.mf[0] += iN + 1;
    this.mf[1]++;
    this.mf[12] += bO.fK[1];
  };
  this.pW = function (player, p9) {
    if (player === aD.eX) {
      aN.pW(bO.fK[0], bO.fK[1], p9);
      this.mf[12] += bO.fK[1];
      this.mf[16] += bO.fK[0];
    }
    if (p9 === aD.eX) {
      aN.a6t(bO.fK[0], player);
      this.mf[10] += bO.fK[0];
    }
  };
  this.q5 = function (player) {
    if (!bA.g9.a3X(player)) {
      return;
    }
    this.mf[2]++;
    this.mf[12] += bO.fK[1];
  };
  this.qD = function (player) {
    if (!bA.g9.a3X(player)) {
      return;
    }
    this.mf[19]++;
    this.mf[12] += bO.fK[1];
  };
  this.aXY = function (player) {
    if (!bA.g9.a3X(player)) {
      return;
    }
    this.mf[20]++;
  };
  this.gD = function (player, a4I, e8) {
    if (!bA.g9.a3X(player)) {
      return;
    }
    this.mf[e8] += a4I;
  };
  this.j3 = function () {
    if (this.aYz) {
      return;
    }
    if (aYy-- > 0) {
      return;
    }
    aZ2(this);
  };
  function aZ2(self) {
    self.aYw[self.aRY] = ag.gb[aD.eX];
    self.a3d[self.aRY] = ag.gp[aD.eX];
    self.aBN[self.aRY] = ae.aBO(aD.eX);
    aZ3(self, self.aRY);
    self.aRY++;
    if (self.aRY === aHM) {
      aZ4(self);
    }
    aYy = aYx - 1;
    be.mW();
    if (ag.mj[aD.eX] === 0) {
      self.aYz = bf.k7();
    }
  }
  function aZ4(self) {
    aZ1(self);
    aZ3(self, 0);
    self.aRY = 1 + bL.du(aHM, 2);
    for (var aB = 1; aB < self.aRY; aB++) {
      self.aYw[aB] = self.aYw[aB * 2];
      self.a3d[aB] = self.a3d[aB * 2];
      self.aBN[aB] = self.aBN[aB * 2];
      aZ3(self, aB);
    }
    aYx *= 2;
  }
  function aZ1(self) {
    self.max.fill(0);
  }
  function aZ3(self, aB) {
    self.max[0] = Math.max(self.aYw[aB], self.max[0]);
    self.max[1] = Math.max(self.a3d[aB], self.max[1]);
    self.max[2] = Math.max(self.aBN[aB], self.max[2]);
  }
}
function dQ() {
  this.i = 0;
  this.j = 0;
  this.sx = 0;
  this.sy = 0;
  this.aZ5 = 0;
  this.aZ6 = 0;
  this.a8V = 0;
  this.tf = 0;
  this.aZ7 = 0;
  var aZ8 = 0;
  this.aZ9 = 0;
  this.aZA = 0;
  this.aZB = 0;
  this.a7p = 0;
  this.e8 = 0;
  this.aAy = null;
  this.hZ = false;
  this.aZC = -1;
  this.aZD = false;
  this.aZE = [0, 0];
  this.de = function () {
    this.aAy = [L(499), L(117, 0, "Balance"), L(116, 0, "Interest"), L(500)];
  };
  this.dd = function () {
    this.hZ = false;
    this.aZC = -1;
    this.aZD = false;
    this.resize();
  };
  this.resize = function () {
    var ho = 1.369;
    this.i = h.i < ho * h.j ? h.i : h.j * ho;
    var eq = a0.a1.hw() && h.i < h.j ? 1 : a0.a1.hw() ? 0.8 : h.i < h.j ? 0.65 : 0.59;
    this.i = Math.floor(eq * this.i);
    this.i -= a0.a1.hw() && h.i < h.j ? bc.gap * 2 + 2 : 0;
    this.j = Math.floor(this.i / ho);
    this.a7p = Math.floor(this.j / 150);
    this.a7p = Math.max(this.a7p, 1.5);
    this.sx = Math.floor(1 + this.i * 0.02);
    this.sy = Math.floor(1 + this.i * 0.04);
    this.a8V = this.sy;
    aZ8 = Math.floor(this.a8V * 0.75);
    this.tf = Math.floor(1 + this.i * 0.075);
    this.aZ9 = Math.floor(1 + this.i * 0.1125);
    this.aZA = Math.floor(this.i * (a0.a1.hw() ? 0.03 : 0.029));
    this.aZA = Math.max(this.aZA, 4);
    this.aZB = Math.floor(this.i * 0.035);
    this.aZB = Math.max(this.aZB, 4);
    this.aZ7 = this.j - this.a8V * 2 - this.tf - this.aZ9;
    if (this.hZ) {
      this.aZF();
    }
  };
  this.h0 = function (lP, lQ) {
    if (!this.hZ) {
      return false;
    }
    var xG = lP;
    var xH = lQ;
    lP -= bL.du(h.i - this.i, 2);
    lQ -= bL.du(h.j - this.j, 2);
    if (lP < 0 || lQ < 0 || lP >= this.i || lQ >= this.j || lP >= this.i - this.aZ9 && lQ < this.aZ9) {
      if (aM.h0(xG, xH) === -1 && !bC.h0(xG, xH)) {
        this.rs();
      }
      return true;
    }
    if (lQ < this.aZ9) {
      return true;
    }
    if (lQ < this.j - this.tf) {
      this.aZD = true;
      this.aZC = (lP - this.sx * 2 - this.aZ5) / this.aZ6;
      if (this.e8 !== 3) {
        bf.dl = true;
      }
      return true;
    }
    var aB = Math.floor(lP / (this.i / this.aAy.length));
    aB = aB < 0 ? 0 : aB >= this.aAy.length ? this.aAy.length - 1 : aB;
    if (aB !== this.e8) {
      this.e8 = aB;
      this.aZF();
      bf.dl = true;
    }
    return true;
  };
  this.a1d = function (lP, lQ) {
    this.aZE[0] = lP;
    this.aZE[1] = lQ;
    if (this.hZ && this.aZD) {
      lP -= bL.du(h.i - this.i, 2);
      var dt = this.aZC;
      this.aZC = (lP - this.sx * 2 - this.aZ5) / this.aZ6;
      if (this.aZC >= 0 && this.aZC <= 1 || dt >= 0 && dt <= 1) {
        bf.dl = true;
      }
      return true;
    }
    return false;
  };
  this.a22 = function () {
    if (this.aZD) {
      this.aZD = false;
    }
  };
  this.a2E = function () {
    if (this.hZ) {
      this.rs();
    } else {
      this.show();
    }
  };
  this.show = function () {
    if (bd.aRY < 2) {
      return;
    }
    this.hZ = true;
    this.aZF();
  };
  this.rs = function () {
    this.hZ = false;
    this.aZC = -1;
    bf.dl = true;
  };
  this.aZF = function () {
    if (this.e8 < 2) {
      this.aZ5 = aQ.measureText(bA.ra.zQ(bd.max[this.e8]), bA.qb.sQ(0, this.aZA));
    } else if (this.e8 === 2) {
      this.aZ5 = aQ.measureText(bA.ra.a4B(6, 2), bA.qb.sQ(0, this.aZA));
    }
    this.aZ6 = this.i - this.sx * 2 - this.aZ5 - this.sy;
  };
  this.mW = function () {
    if (!this.hZ) {
      return;
    }
    this.aZF();
  };
  this.uj = function () {
    if (!this.hZ) {
      return;
    }
    this.a8n();
  };
  this.a8n = function () {
    var eu = bL.du(h.i - this.i, 2);
    var ew = bL.du(h.j - this.j, 2);
    uk.setTransform(1, 0, 0, 1, eu, ew);
    uk.fillStyle = bB.ng;
    uk.fillRect(0, this.aZ9, this.i, this.j - this.aZ9);
    this.aZG();
    this.aQL();
    uk.strokeRect(0, 0, this.i, this.j);
    bA.qb.textAlign(uk, 2);
    uk.font = bA.qb.sQ(0, this.aZA);
    if (this.e8 === 0) {
      this.aZH(bd.aYw, eu, ew);
    } else if (this.e8 === 1) {
      this.aZH(bd.a3d, eu, ew);
    } else if (this.e8 === 2) {
      this.aZI(eu, ew);
    } else if (this.e8 === 3) {
      this.aZJ(eu, ew);
      this.aZK(eu, ew);
    }
    aM.a5z(Math.floor(eu + this.i - this.aZ9 * 0.725), Math.floor(ew + this.aZ9 * 0.275), Math.floor(this.aZ9 * 0.45));
    uk.setTransform(1, 0, 0, 1, 0, 0);
  };
  this.aZG = function () {
    var aB;
    var dt;
    uk.lineWidth = this.a7p;
    bA.qb.textBaseline(uk, 1);
    bA.qb.textAlign(uk, 1);
    uk.strokeStyle = bB.nj;
    uk.font = bA.qb.sQ(1, this.aZB);
    dt = this.i / this.aAy.length;
    uk.fillStyle = bB.o5;
    uk.fillRect(this.e8 * dt, this.j - this.tf, dt, this.tf);
    uk.fillStyle = bB.nj;
    uk.fillRect(0, this.j - this.tf - this.a7p * 0.5, this.i, this.a7p);
    for (aB = 1; aB <= 3; aB++) {
      uk.fillRect(aB * dt, this.j - this.tf, this.a7p, this.tf);
    }
    for (aB = this.aAy.length - 1; aB >= 0; aB--) {
      uk.fillText(bA.yJ.a39(this.aAy[aB], 0, dt * 0.9), (aB + 0.5) * dt, this.j - this.tf * 0.46);
    }
  };
  this.aQL = function () {
    uk.fillStyle = bB.oV;
    uk.fillRect(0, 0, this.i, this.aZ9);
    uk.fillStyle = bB.nj;
    uk.fillRect(0, this.aZ9 - this.a7p * 0.5, this.i, this.a7p);
    uk.font = bA.qb.sQ(1, this.aZ9 * 0.39);
    uk.fillText(bA.yJ.a39(L(501), 0, this.i * 0.8), Math.floor(this.i / 2), Math.floor(this.aZ9 * 0.55));
  };
  this.aZH = function (g, eu, ew) {
    var l5 = bd.max[this.e8];
    uk.setTransform(1, 0, 0, 1, eu + this.sx * 2 + this.aZ5, ew + this.a8V + this.aZ9);
    uk.lineWidth = 2;
    var a2W = this.aZ7 / Math.sqrt(l5);
    uk.beginPath();
    uk.moveTo(this.aZ6, this.aZ7 - a2W * Math.sqrt(g[bd.aRY - 1]));
    for (var aB = bd.aRY - 2; aB >= 0; aB--) {
      uk.lineTo(aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * Math.sqrt(g[aB]));
    }
    uk.stroke();
    var eR = this.a5z(g, a2W, 0.5);
    if (eR < 0.95) {
      uk.fillText(bA.ra.zQ(l5), -this.sx, 0);
    }
    if (Math.abs(eR - 0.5) > 0.05) {
      uk.fillText(bA.ra.zQ(Math.floor(l5 / 4)), -this.sx, Math.floor(this.aZ7 / 2));
    }
    if (eR > 0.05) {
      uk.fillText("0", -this.sx, this.aZ7);
    }
  };
  this.aZI = function (eu, ew) {
    uk.setTransform(1, 0, 0, 1, eu + this.sx * 2 + this.aZ5, ew + this.a8V + this.aZ9);
    uk.lineWidth = 2;
    var a2W = this.aZ7 / Math.max(bd.max[this.e8], 1);
    uk.beginPath();
    uk.moveTo(this.aZ6, this.aZ7 - a2W * bd.aBN[bd.aRY - 1]);
    for (var aB = bd.aRY - 2; aB >= 0; aB--) {
      uk.lineTo(aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * bd.aBN[aB]);
    }
    uk.stroke();
    var eR = this.a5z(bd.aBN, a2W, 1);
    var l5 = bd.max[this.e8] / 100;
    if (eR < 0.95) {
      uk.fillText(bA.ra.a4B(l5, 2), -this.sx, 0);
    }
    if (Math.abs(eR - 0.5) > 0.05) {
      uk.fillText(bA.ra.a4B(l5 / 2, 2), -this.sx, Math.floor(this.aZ7 / 2));
    }
    if (eR > 0.05) {
      uk.fillText(bA.ra.a4B(0, 2), -this.sx, this.aZ7);
    }
  };
  this.aZJ = function (eu, ew) {
    var aB;
    uk.setTransform(1, 0, 0, 1, eu + this.i * 0.34, ew + aZ8 * 2 + this.aZ9);
    bA.qb.textAlign(uk, 2);
    var aAj = this.j - aZ8 * 4 - this.tf - this.aZ9;
    var en = 10;
    var g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7];
    for (aB = 9; aB >= 0; aB--) {
      uk.fillText(bA.yJ.a39(bd.aZ0[g[aB]], 0, this.i * 0.31), 0, aB * aAj / (en - 1));
    }
    var fF = bd.mf;
    uk.setTransform(1, 0, 0, 1, eu + this.i * 0.39, ew + aZ8 * 2 + this.aZ9);
    bA.qb.textAlign(uk, 0);
    uk.fillText(bA.ra.a4B(fF[0] * 100 / (Math.max(fF[1], 1) * 1024), 1), 0, 0);
    for (aB = 8; aB >= 1; aB--) {
      uk.fillText(fF[g[aB]].toString(), 0, aB * aAj / (en - 1));
    }
    uk.fillText(bA.ra.a4B((1 - ag.gb[aD.eX] / fF[7]) * 100, 0), 0, aAj);
  };
  this.aZK = function (eu, ew) {
    var aB;
    uk.setTransform(1, 0, 0, 1, eu + this.i * 0.79, ew + aZ8 * 2 + this.aZ9);
    bA.qb.textAlign(uk, 2);
    var aAj = this.j - aZ8 * 4 - this.tf - this.aZ9;
    var en = 9;
    uk.fillStyle = bB.o0;
    for (aB = 2; aB >= 0; aB--) {
      uk.fillText(bA.yJ.a39(bd.aZ0[aB + 8], 0, this.i * 0.31), 0, aB * aAj / en);
    }
    uk.fillText(bA.yJ.a39(bd.aZ0[18], 0, this.i * 0.31), 0, aAj * 3 / en);
    uk.fillStyle = bB.nz;
    uk.fillText(bA.yJ.a39(bd.aZ0[11], 0, this.i * 0.31), 0, aAj * 4 / en);
    uk.fillStyle = bB.oI;
    uk.fillText(bA.yJ.a39(bd.aZ0[13], 0, this.i * 0.31), 0, aAj * 5 / en);
    uk.fillText(bA.yJ.a39(bd.aZ0[15], 0, this.i * 0.31), 0, aAj * 6 / en);
    uk.fillText(bA.yJ.a39(bd.aZ0[16], 0, this.i * 0.31), 0, aAj * 7 / en);
    uk.fillText(bA.yJ.a39(bd.aZ0[12], 0, this.i * 0.31), 0, aAj * 8 / en);
    uk.fillStyle = bB.oH;
    uk.fillText(bA.yJ.a39(bd.aZ0[17], 0, this.i * 0.31), 0, aAj);
    uk.fillStyle = bB.o0;
    var fF = bd.mf;
    var aEl = fF[8] + fF[9] + fF[10] + fF[18];
    var a6d = bA.ra.zQ(aEl);
    var aP8 = uk.measureText(a6d).width;
    uk.setTransform(1, 0, 0, 1, eu + this.i * 0.83 + aP8, ew + aZ8 * 2 + this.aZ9);
    uk.fillText(bA.ra.zQ(fF[8]), 0, 0);
    uk.fillText(bA.ra.zQ(fF[9]), 0, aAj * 1 / en);
    uk.fillText(bA.ra.zQ(fF[10]), 0, aAj * 2 / en);
    uk.fillText(bA.ra.zQ(fF[18]), 0, aAj * 3 / en);
    uk.fillStyle = bB.nz;
    uk.fillText(a6d, 0, aAj * 4 / en);
    uk.fillStyle = bB.oI;
    uk.fillText(bA.ra.zQ(fF[13]), 0, aAj * 5 / en);
    uk.fillText(bA.ra.zQ(fF[15]), 0, aAj * 6 / en);
    uk.fillText(bA.ra.zQ(fF[16]), 0, aAj * 7 / en);
    uk.fillText(bA.ra.zQ(fF[12]), 0, aAj * 8 / en);
    var aZL = fF[12] + fF[13] + fF[15] + fF[16];
    uk.fillStyle = bB.oH;
    uk.fillText(bA.ra.zQ(aZL), 0, aAj);
    uk.fillStyle = bB.nj;
  };
  this.a5z = function (g, a2W, a9Q) {
    if (this.aZC < 0 || this.aZC > 1) {
      return 0.25;
    }
    var aB = this.aZC * (bd.aRY - 1);
    var e = Math.floor(aB);
    var fW = g[e];
    var fY = g[e < bd.aRY - 1 ? e + 1 : e];
    fW = fW + (aB - e) * (fY - fW);
    uk.strokeStyle = bB.nm;
    if (this.aZC > 0.04) {
      this.aZM(0, this.aZ7 - a2W * Math.pow(fW, a9Q), aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * Math.pow(fW, a9Q));
    }
    if (fW / bd.max[this.e8] > 0.04) {
      this.aZM(aB * this.aZ6 / (bd.aRY - 1), this.aZ7, aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * Math.pow(fW, a9Q));
    }
    uk.fillStyle = bB.oK;
    uk.beginPath();
    uk.arc(aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * Math.pow(fW, a9Q), Math.max(2, this.j * 0.014), 0, Math.PI * 2);
    uk.fill();
    var eM = this.aZC * bf.aBP;
    if (ag.mj[aD.eX] === 0) {
      eM = Math.floor(eM * bd.aYz);
    } else {
      eM = Math.floor(eM * bf.k7());
    }
    uk.fillStyle = bB.nj;
    uk.fillText(a9Q === 1 ? bA.ra.a4B(fW / 100, 2) : bA.ra.zQ(Math.floor(fW)), -this.sx, this.aZ7 - a2W * Math.pow(fW, a9Q));
    bA.qb.textAlign(uk, 1);
    uk.fillText(aW.aBC(eM), aB * this.aZ6 / (bd.aRY - 1), this.aZ7 + this.aZA - (a0.a1.hw() ? 2 : 0) - this.a7p);
    bA.qb.textAlign(uk, 2);
    return a2W * Math.pow(fW, a9Q) / this.aZ7;
  };
  this.aZM = function (n9, nA, nM, nN) {
    uk.beginPath();
    uk.moveTo(n9, nA);
    uk.lineTo(nM, nN);
    uk.stroke();
  };
}
function by() {
  this.aZN = "https://";
  this.aZO = this.aZN + "territorial.io/";
  this.aRZ = this.aZO + "changelog";
  this.aRd = this.aZO + "terms";
  this.aZP = this.aZO + "cookie_policy";
  this.aQz = this.aZO + "privacy";
  this.aRc = this.aZO + "tutorial";
  this.aRb = this.aZO + "players";
  this.aRa = this.aZO + "clans";
  this.a0v = this.aZO + "clan-results";
  this.aOH = "https://patreon.com/c/territorial";
  this.aCj = this.aZN + "play.google.com/store/apps/details?id=territorial.io";
  this.a1D = this.aZN + "apps.apple.com/app/id1581110913";
  this.aZQ = this.aZN + "www.youtube.com/watch?v=toZTQ8aRdFc";
  this.aCk = this.aZN + "discord.gg/pthqvpTXmh";
  this.aCl = this.aZN + "www.instagram.com/davidtschacher/";
  this.yy = "🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼";
}
function d8() {
  this.y = new aZR();
  this.yG = new aZS();
  this.dd = function () {
    this.y.dd();
  };
  this.j3 = function () {
    if (this.y.a72 === 0) {
      return;
    }
    this.y.a72--;
  };
}
function aZS() {
  this.uj = function () {
    if (bP.y.a72 === 0) {
      return;
    }
    aZT();
    if (aD.hB) {
      aZU();
    }
  };
  function aZT() {
    uk.globalAlpha = Math.min(bP.y.a72 / 580, 1);
    uk.drawImage(bP.y.aZV, 1 + aS.yE(), 1 + aS.yF());
    uk.globalAlpha = 1;
  }
  function aZU() {
    var n9 = iO / hy;
    var nA = iP / hy;
    var nM = (h.i + iO) / hy;
    var nN = (h.j + iP) / hy;
    var gM = bP.y.aZW * hy;
    var aZX = bP.y.aZX;
    for (var aB = aD.kA - 1; aB >= 0; aB--) {
      aZY(aB, gM, n9, nA, nM, nN, aZX);
    }
    uk.setTransform(hy, 0, 0, hy, 0, 0);
  }
  function aZY(aB, gM, n9, nA, nM, nN, aZX) {
    if (ag.mj[aB] === 0 || ag.gb[aB] === 0) {
      return;
    }
    var eu = h.i * ((ag.ie[aB] + ag.ig[aB] + 1) / 2 - n9) / (nM - n9) - gM * 0.5;
    var ew = h.j * ((ag.ih[aB] + ag.ii[aB] + 1) / 2 - nA) / (nN - nA) - gM * 0.5;
    if (eu > h.i || ew > h.j || eu < -gM || ew < -gM) {
      return;
    }
    uk.setTransform(hy, 0, 0, hy, eu, ew);
    uk.drawImage(aZX[aD.hh ? bg.el[aB] : 1], 0, 0);
  }
}
function aZR() {
  this.aZW = 28;
  this.a72 = 0;
  this.aZV = null;
  this.aZX = null;
  var aZZ = null;
  this.dd = function () {
    this.a72 = 700;
    aZa(this);
    aCh(this, aZb(this));
    if (!aD.hB) {
      this.a4T();
    }
  };
  function aZb(sD) {
    if (sD.aZV !== null && sD.aZV.width === bS.ey - 2 && sD.aZV.height === bS.ez - 2) {
      return true;
    }
    sD.aZV = bA.qb.wY(bS.ey - 2, bS.ez - 2);
    return false;
  }
  function aZa(sD) {
    var hj = sD.aZW;
    sD.aZX = [];
    aZZ = [];
    if (aD.hh) {
      for (var aB = 0; aB <= aD.xL; aB++) {
        sD.aZX.push(aZc(hj, bg.aWv[bg.kX[aB]]));
        aZZ.push(aZc(hj >> 1, bg.aWv[bg.kX[aB]]));
      }
      if (aD.kS === 9) {
        aZZ.push(aZc(hj, bg.aWv[1]));
      }
    } else {
      sD.aZX.push(aZc(hj, bg.aWv[7]));
      sD.aZX.push(aZc(hj, bg.aWv[4]));
      aZZ.push(aZc(hj >> 1, bg.aWv[7]));
    }
  }
  this.aWu = function (hj, aZd) {
    return aZc(hj, aZd);
  };
  function aZc(hj, aZd) {
    var eu;
    var ew;
    var eZ;
    var i7;
    var iA;
    var f3;
    var a2x = bA.qb.wY(hj, hj);
    var hp = bA.qb.getContext(a2x, true);
    var hm = bA.qb.getImageData(hp, hj, hj);
    var wj = hm.data;
    var l5 = (hj >> 1) - 0.5;
    var aZe = l5 + 0.5;
    aZe *= aZe;
    for (ew = 0; ew < hj; ew++) {
      for (eu = 0; eu < hj; eu++) {
        i7 = eu - l5;
        iA = ew - l5;
        eZ = (ew * hj + eu) * 4;
        f3 = i7 * i7 + iA * iA;
        wj[eZ] = aZd[0];
        wj[eZ + 1] = aZd[1];
        wj[eZ + 2] = aZd[2];
        wj[eZ + 3] = (aZe - f3) * aZd[3] / aZe;
      }
    }
    hp.putImageData(hm, 0, 0);
    return a2x;
  }
  function aCh(sD, aZf) {
    var aB;
    var aZV = sD.aZV;
    var hp = bA.qb.getContext(aZV, true);
    var en = aD.ek;
    var hj = sD.aZW >> 1;
    hp.imageSmoothingEnabled = false;
    hp.setTransform(1, 0, 0, 1, 0, 0);
    if (aZf) {
      hp.clearRect(0, 0, aZV.width, aZV.height);
    }
    if (aD.kS === 9) {
      hj = hj << 1;
      var aZg = az.kb[5];
      for (aB = en - aZg; aB < en; aB++) {
        aYb(aB, hp, aZZ, hj);
      }
      en -= aZg;
      hj = hj >> 1;
    }
    for (aB = aD.kA; aB < en; aB++) {
      aYb(aB, hp, aZZ, hj);
    }
  }
  this.a4T = function () {
    var en = aD.kA;
    var hj = this.aZW;
    var aZX = this.aZX;
    var hp = bA.qb.getContext(this.aZV, true);
    for (var aB = 0; aB < en; aB++) {
      aYb(aB, hp, aZX, hj);
    }
  };
  function aYb(aB, hp, a2x, hj) {
    if (ag.mj[aB] === 0 || ag.gb[aB] === 0) {
      return;
    }
    var eu = ag.ie[aB] + ag.ig[aB] + 1 - hj - 2 >> 1;
    var ew = ag.ih[aB] + ag.ii[aB] + 1 - hj - 2 >> 1;
    hp.drawImage(a2x[aD.hh ? aD.kS === 9 && aE.hW[aB] === 5 ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew);
  }
}
function d9() {
  this.pP = function (player) {
    aN.a0L(player, player === aD.eX ? 21 : 22);
    aZh(player);
    aZi();
  };
  this.pu = function (player) {
    if (aD.a09 === 1 && ag.mj[player] !== 0 && ag.a3T[player] !== 2) {
      aZh(player);
    }
    aD.a0C--;
    aD.a0B--;
    aN.a0L(player, 4);
    if (bA.g9.gy(2)) {
      aW.mV(true);
    }
    aZi();
  };
  function aZi() {
    if (aD.kS === 8 && aD.a09 === 1) {
      bR.zl.a08();
    }
  }
  function aZh(player) {
    if (aD.hB) {
      ak.aHT(player);
      al.aKN();
      if (aD.kU) {
        aD.px.j3();
      }
    } else {
      b3.aD3(player);
    }
  }
}
function dJ() {
  this.aTt = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"];
  this.aAg = ["rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.nj, "rgb(170,170,170)"];
  this.aZj = [bB.nj, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.nj, bB.na];
  this.aZk = [bB.na, bB.nj, bB.nj, bB.nj, bB.na, bB.na, bB.na, bB.na, bB.nj];
  this.aJq = ["rgba(255,255,255,", "rgba(0,0,0,", "rgba(255,4,4,", "rgba(200,4,4,", "rgba(4,255,4,", "rgba(4,180,4,", "rgba(255,195,195,", "rgba(90,3,3,", "rgba(200,255,200,", "rgba(3,84,3,"];
  this.aJr = ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(255,4,4)", "rgb(200,4,4)", "rgb(4,255,4)", "rgb(4,180,4)", "rgb(255,195,195)", "rgb(90,3,3)", "rgb(200,255,200)", "rgb(3,84,3)"];
  this.a0U = null;
  this.aWv = [[128, 128, 128, 180], [255, 0, 0, 180], [0, 255, 0, 180], [50, 50, 255, 180], [255, 255, 0, 180], [255, 0, 255, 180], [0, 255, 255, 180], [255, 255, 255, 180], [0, 0, 0, 180]];
  this.aWa = [[128, 128, 128], [255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255], [255, 255, 255], [0, 0, 0]];
  this.kX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.el = new Uint8Array(aD.ek);
  this.aAh = new Uint8Array(aD.ek);
  this.xR = new Uint16Array(aD.ek);
  this.xS = new Uint16Array(this.kX.length + 1);
  this.xT = new Uint16Array(this.kX.length);
  this.de = function () {
    this.a0U = [L(502), L(503), L(504), L(505), L(506), L(507), L(508), L(509), L(510)];
  };
  this.dd = function () {
    this.el.fill(0);
    this.aAh.fill(0);
    this.aZl();
    if (!aD.hh) {
      return;
    }
    if (aD.kS === 9) {
      aZm();
    } else if (aD.kU) {
      aZn();
    } else {
      this.j3();
    }
    aZo();
    aZp();
  };
  this.aZl = function () {
    for (var aB = this.kX.length - 1; aB >= 0; aB--) {
      this.kX[aB] = aB;
    }
  };
  function aZm() {
    var el = bg.el;
    for (var aB = aD.data.teamPlayerCount[7] - 1; aB >= 0; aB--) {
      el[aB] = 1;
    }
    var en = aD.ek;
    for (aB = aD.data.teamPlayerCount[7]; aB < en; aB++) {
      el[aB] = 2;
    }
    bg.kX[1] = 7;
    bg.kX[2] = 8;
  }
  this.j3 = function () {
    var zF = new Uint8Array(aD.kA);
    var zG = new Uint8Array(aD.kA);
    var aZq = new Uint16Array(8);
    var aZr = new Uint16Array(this.kX.length);
    this.aZs(zF, zG, aZq, 1);
    this.aH4(aZq);
    this.aZt(aZr, zF, zG);
    this.aZu(zF, zG, aZr);
    this.aZv();
  };
  function aZn() {
    var aWa = bg.aWa;
    var colorsData = aD.data.colorsData;
    if (!aD.data.selectableColor) {
      for (var aB = aD.kA - 1; aB >= 0; aB--) {
        colorsData[aB] = ay.jR(262144);
      }
    }
    var aZw = 0;
    var f3 = 768;
    var aTO = [(colorsData[0] >> 12) * 4, (colorsData[0] >> 6 & 63) * 4, (colorsData[0] & 63) * 4];
    var teamPlayerCount = aD.data.teamPlayerCount;
    for (aB = 0; aB < 9; aB++) {
      if (!teamPlayerCount[aB]) {
        continue;
      }
      var eq = 0;
      for (var f7 = 0; f7 < 3; f7++) {
        eq += Math.abs(aWa[aB][f7] - aTO[f7]);
      }
      if (eq < f3) {
        aZw = aB;
        f3 = eq;
      }
    }
    var aZx = new Uint16Array(9);
    for (aB = 0; aB < 9; aB++) {
      aZx[aB] = teamPlayerCount[aB];
    }
    var kX = bg.kX;
    var aZy = new Uint8Array(9);
    kX[0] = 0;
    var gG = 1;
    for (aB = 1; aB < 9; aB++) {
      if (aZx[aB]) {
        aZy[aB] = gG;
        kX[gG++] = aB;
      }
    }
    var jQ = aD.kA;
    var el = bg.el;
    if (aZx[aZw]) {
      aZx[aZw]--;
      el[0] = aZy[aZw];
    } else {
      jQ = 0;
    }
    var f8 = 0;
    for (aB = jQ; aB < aD.xE; aB++) {
      var hf = kX[f8];
      if (aZx[hf]) {
        aZx[hf]--;
        el[aB] = aZy[hf];
      } else {
        f8++;
        aB--;
        if (f8 >= 9) {
          console.log("error 325");
          return;
        }
      }
    }
  }
  this.aZs = function (zF, zG, aZx, aZz) {
    var aB;
    var f7;
    var e;
    var aa0;
    var en = this.kX.length - aZz;
    var g = new Uint16Array(en);
    var aWa = this.aWa;
    var colorsData = aD.data.colorsData;
    for (aB = aD.kA - 1; aB >= 0; aB--) {
      for (f7 = en; f7 >= aZz; f7--) {
        g[f7 - 1] = Math.abs((colorsData[aB] >> 12) * 4 - aWa[f7][0]) + Math.abs((colorsData[aB] >> 6 & 63) * 4 - aWa[f7][1]) + Math.abs((colorsData[aB] & 63) * 4 - aWa[f7][2]);
      }
      aa0 = 768;
      for (f7 = en - 1; f7 >= 0; f7--) {
        e = (f7 + aB) % en;
        if (g[e] < aa0) {
          aa0 = g[e];
          zF[aB] = e;
        }
      }
      aZx[zF[aB]] += 4;
      aa0 = 768;
      for (f7 = en - 1; f7 >= 0; f7--) {
        e = (f7 + aB) % en;
        if (g[e] < aa0 && e !== zF[aB]) {
          aa0 = g[e];
          zG[aB] = e;
        }
      }
      aZx[zG[aB]]++;
    }
  };
  this.aH4 = function (aZx) {
    var aB;
    var f7;
    var l7;
    var en = this.kX.length - 1;
    for (aB = en; aB >= 0; aB--) {
      this.kX[aB] = aB;
    }
    for (aB = en - 1; aB >= 0; aB--) {
      aZx[aB]++;
    }
    for (aB = 1; aB <= en; aB++) {
      l7 = 0;
      for (f7 = 1; f7 < en; f7++) {
        if (aZx[f7] > aZx[l7]) {
          l7 = f7;
        }
      }
      aZx[l7] = 0;
      this.kX[aB] = l7 + 1;
    }
  };
  this.aZt = function (aZr, zF, zG) {
    var f7;
    var a0p;
    var f8;
    var eq;
    var e;
    var nL;
    var tE;
    var aa1 = this.kX.length - 1;
    var r4 = new Uint16Array(aa1);
    var aa2 = [];
    var aa3 = 0;
    var a0o = [];
    var aa4 = [];
    loop: for (var aB = 0; aB < aD.kA; aB++) {
      a0p = bA.ra.a0q(ag.a0n[aB]);
      if (a0p !== null) {
        for (f7 = a0o.length - 1; f7 >= 0; f7--) {
          if (a0p === a0o[f7]) {
            aa4[f7].push(aB);
            aa3 = Math.max(aa3, aa4[f7].length);
            continue loop;
          }
        }
        a0o.push(a0p);
        aa2.push(false);
        aa4.push([aB]);
        aa3 = Math.max(aa3, 1);
      }
    }
    while (aD.xL > 2 && aa3 > bL.du(aD.kA, aD.xL)) {
      aD.xL--;
      aD.kS--;
    }
    for (f7 = a0o.length - 1; f7 >= 0; f7--) {
      eq = -1;
      for (f8 = a0o.length - 1; f8 >= 0; f8--) {
        if (!aa2[f8] && (eq === -1 || aa4[f8].length > aa4[eq].length)) {
          eq = f8;
        }
      }
      for (f8 = aa1 - 1; f8 >= 0; f8--) {
        r4[f8] = 1;
      }
      for (f8 = aa4[eq].length - 1; f8 >= 0; f8--) {
        r4[zF[aa4[eq][f8]]] += 3;
        r4[zG[aa4[eq][f8]]]++;
      }
      for (aB = aa1 - 1; aB >= 0; aB--) {
        e = eq % aa1;
        for (f8 = aa1 - 1; f8 >= 0; f8--) {
          if (r4[f8] > r4[e]) {
            e = f8;
          }
        }
        nL = -1;
        for (f8 = aD.xL; f8 > 0; f8--) {
          if (this.kX[f8] === e + 1) {
            nL = f8;
            break;
          }
        }
        r4[e] = 0;
        if (nL === -1) {
          continue;
        }
        tE = 0;
        for (f8 = aD.xL; f8 > 0; f8--) {
          if (aZr[nL] > aZr[f8]) {
            tE++;
          }
        }
        if (tE === aD.xL - 1) {
          continue;
        }
        for (f8 = aa4[eq].length - 1; f8 >= 0; f8--) {
          aZr[nL]++;
          this.el[aa4[eq][f8]] = nL;
        }
        break;
      }
      aa2[eq] = true;
    }
  };
  this.aZu = function (zF, zG, aZr) {
    var aB;
    var f7;
    var i6;
    var en = this.kX.length - 1;
    var border = bL.du(aD.kA, aD.xL);
    if (aD.kA % aD.xL > 0) {
      border++;
    }
    var aa5 = new Uint8Array(en + 1);
    for (f7 = en; f7 >= 1; f7--) {
      aa5[this.kX[f7]] = f7;
    }
    for (aB = 0; aB < aD.kA; aB++) {
      i6 = aa5[zF[aB] + 1];
      if (this.el[aB] === 0 && i6 <= aD.xL && aZr[i6] < border) {
        aZr[i6]++;
        this.el[aB] = i6;
      }
    }
    for (aB = 0; aB < aD.kA; aB++) {
      i6 = aa5[zG[aB] + 1];
      if (this.el[aB] === 0 && i6 <= aD.xL && aZr[i6] < border) {
        aZr[i6]++;
        this.el[aB] = i6;
      }
    }
    for (f7 = aD.xL; f7 >= 1; f7--) {
      for (aB = aD.kA - 1; aB >= 0; aB--) {
        if (aZr[f7] >= border) {
          break;
        }
        if (this.el[aB] === 0) {
          aZr[f7]++;
          this.el[aB] = f7;
        }
      }
    }
  };
  this.aZv = function () {
    for (var aB = aD.kA; aB < aD.ek; aB++) {
      this.el[aB] = 1 + aB % aD.xL;
    }
  };
  function aZo() {
    var en = aD.ek;
    var xR = bg.xR;
    var xS = bg.xS;
    var xT = bg.xT;
    var el = bg.el;
    var kX = bg.kX;
    var xK = kX.length;
    var eK = new Array(xK);
    for (var aB = 0; aB < xK; aB++) {
      eK[aB] = [];
    }
    for (aB = 0; aB < en; aB++) {
      eK[kX[el[aB]]].push(aB);
    }
    for (aB = 1; aB <= xK; aB++) {
      xS[aB] = xS[aB - 1] + eK[aB - 1].length;
    }
    for (aB = 0; aB < xK; aB++) {
      var gG = eK[aB].length;
      var l5 = xS[aB];
      for (var hf = 0; hf < gG; hf++) {
        xR[hf + l5] = eK[aB][hf];
      }
    }
    var kA = aD.kA;
    for (aB = 0; aB < xK; aB++) {
      gG = eK[aB].length;
      l5 = xS[aB];
      for (hf = 0; hf < gG; hf++) {
        if (xR[hf + l5] >= kA) {
          xT[aB] = hf;
          break;
        }
      }
    }
  }
  function aZp() {
    var en = aD.ek;
    var el = bg.el;
    var aAh = bg.aAh;
    var kX = bg.kX;
    for (var aB = 0; aB < en; aB++) {
      aAh[aB] = kX[el[aB]];
    }
    if (aD.kS === 9) {
      aAh.fill(1, en - az.kb[5]);
    }
  }
}
function db() {
  this.gc = function () {
    var aB;
    var eu;
    var ew;
    for (aB = fj - 1; aB >= 0; aB--) {
      eu = bL.du(fl[aB], 4) % bS.ey;
      ew = bL.du(fl[aB], bS.ey * 4);
      ag.ie[fe] = Math.min(eu, ag.ie[fe]);
      ag.ih[fe] = Math.min(ew, ag.ih[fe]);
      ag.ig[fe] = Math.max(eu, ag.ig[fe]);
      ag.ii[fe] = Math.max(ew, ag.ii[fe]);
    }
  };
  this.fx = function () {
    var en = ag.gF[fe].length;
    var eq;
    var gL;
    var aB;
    var ep = ac.ep;
    loop: for (aB = en - 1; aB >= 0; aB--) {
      for (eq = 3; eq >= 0; eq--) {
        gL = ag.gF[fe][aB] + ep[eq];
        if (ac.ee(gL) || ac.gN(gL) && ac.ef(gL) !== fe) {
          ac.jM(ag.gF[fe][aB], fe);
          continue loop;
        }
      }
      ag.gF[fe][aB] = ag.gF[fe][en - 1];
      ag.gF[fe].pop();
      en--;
    }
  };
  this.fy = function () {
    var player = fe;
    var gT = ag.gT;
    var gU = ag.gU;
    var fD = ag.fD;
    var en = gT[player].length;
    var ep = ac.ep;
    loop: for (var aB = en - 1; aB >= 0; aB--) {
      var aa6 = false;
      var aa7 = false;
      for (var eq = 3; eq >= 0; eq--) {
        var gL = gT[player][aB] + ep[eq];
        if (ac.aHE(gL, player)) {
          continue loop;
        }
        aa6 = aa6 || ac.i1(gL);
        aa7 = aa7 || ac.aHD(gL);
      }
      if (aa6) {
        gU[player].push(gT[player][aB]);
      } else if (aa7) {
        fD[player].push(gT[player][aB]);
      } else {
        ac.xn(gT[player][aB], player);
      }
      gT[player][aB] = gT[player][en - 1];
      gT[player].pop();
      en--;
    }
  };
  this.gR = function () {
    ag.gb[fi] -= fj;
  };
  this.gS = function (border) {
    var en = border.length;
    for (var aB = en - 1; aB >= 0; aB--) {
      if (!ac.y8(fi, border[aB])) {
        border[aB] = border[en - 1];
        border.pop();
        en--;
      }
    }
  };
  this.gV = function (border) {
    var en = border.length;
    for (var aB = en - 1; aB >= 0; aB--) {
      if (!ac.y8(fi, border[aB]) && ac.ei(border[aB])) {
        border[aB] = border[en - 1];
        border.pop();
        en--;
      }
    }
  };
  this.gW = function (border) {
    var en = border.length;
    var ep = ac.ep;
    var eq;
    var gL;
    for (var aB = en - 1; aB >= 0; aB--) {
      for (eq = 3; eq >= 0; eq--) {
        gL = border[aB] + ep[eq];
        if (ac.aHE(gL, fi)) {
          ag.gT[fi].push(border[aB]);
          border[aB] = border[en - 1];
          border.pop();
          en--;
          break;
        }
      }
    }
  };
  this.gX = function () {
    var eq;
    var gL;
    var ep = ac.ep;
    for (var aB = fj - 1; aB >= 0; aB--) {
      for (eq = 3; eq >= 0; eq--) {
        gL = fl[aB] + ep[eq];
        if (ac.yB(fi, gL) && ac.aHF(gL)) {
          ag.gT[fi].push(gL);
          ac.gI(gL, fi);
        }
      }
    }
  };
  this.gY = function () {
    var eu;
    var ew;
    loop: while (ag.ih[fi] < ag.ii[fi]) {
      for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--) {
        if (ac.y8(fi, (ag.ih[fi] * bS.ey + eu) * 4)) {
          break loop;
        }
      }
      ag.ih[fi]++;
    }
    loop: while (ag.ih[fi] < ag.ii[fi]) {
      for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--) {
        if (ac.y8(fi, (ag.ii[fi] * bS.ey + eu) * 4)) {
          break loop;
        }
      }
      ag.ii[fi]--;
    }
    loop: while (ag.ie[fi] < ag.ig[fi]) {
      for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--) {
        if (ac.y8(fi, (ew * bS.ey + ag.ie[fi]) * 4)) {
          break loop;
        }
      }
      ag.ie[fi]++;
    }
    loop: while (ag.ie[fi] < ag.ig[fi]) {
      for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--) {
        if (ac.y8(fi, (ew * bS.ey + ag.ig[fi]) * 4)) {
          break loop;
        }
      }
      ag.ig[fi]--;
    }
  };
  this.eg = function (player, jJ) {
    return bg.el[player] === 0 || bg.el[player] !== bg.el[jJ];
  };
  this.hJ = function (player) {
    var eq;
    var aB;
    var gM;
    var en = ag.gT[player].length;
    var ep = ac.ep;
    for (eq = 3; eq >= 0; eq--) {
      gM = ep[eq];
      for (aB = 0; aB < en; aB++) {
        if (ac.ee(ag.gT[player][aB] + gM)) {
          return true;
        }
      }
    }
    return false;
  };
  this.aHP = function (player) {
    var eq;
    var aB;
    var gM;
    var en = ag.gT[player].length;
    var ep = ac.ep;
    for (eq = 3; eq >= 0; eq--) {
      gM = ep[eq];
      for (aB = 0; aB < en; aB++) {
        if (ac.jL(ag.gT[player][aB]) && ac.ee(ag.gT[player][aB] + gM)) {
          return true;
        }
      }
    }
    return false;
  };
  this.hM = function (a3Z, a3a) {
    var aB;
    var dt;
    var eq;
    var gM;
    var gL;
    var aXe = ag.gT[a3Z].length;
    var aXf = ag.gT[a3a].length;
    if (aXf < aXe) {
      dt = a3Z;
      a3Z = a3a;
      a3a = dt;
      dt = aXe;
      aXe = aXf;
      aXf = dt;
    }
    var ep = ac.ep;
    for (eq = 3; eq >= 0; eq--) {
      gM = ep[eq];
      for (aB = 0; aB < aXe; aB++) {
        gL = ag.gT[a3Z][aB] + gM;
        if (ac.gN(gL) && ac.ef(gL) === a3a) {
          return true;
        }
      }
    }
    return false;
  };
  this.aHQ = function (a3Z, a3a) {
    var aB;
    var eq;
    var gM;
    var gL;
    var aXe = ag.gT[a3Z].length;
    var ep = ac.ep;
    for (eq = 3; eq >= 0; eq--) {
      gM = ep[eq];
      for (aB = 0; aB < aXe; aB++) {
        if (ac.jL(ag.gT[a3Z][aB])) {
          gL = ag.gT[a3Z][aB] + gM;
          if (ac.gN(gL) && ac.ef(gL) === a3a) {
            return true;
          }
        }
      }
    }
    return false;
  };
}
function dV() {
  this.q6 = new aa8();
}
function aa8() {
  this.hP = function (player) {
    if (!bA.g9.a3U(player)) {
      return;
    }
    aN.yb(80, L(511), 637, 0, bB.oY, bB.ng, -1, false);
  };
  this.hS = function (player) {
    if (!bA.g9.a3U(player)) {
      return;
    }
    aN.yb(80, L(512), 637, 0, bB.oY, bB.ng, -1, false);
  };
}
function aa9() {
  this.aaA = 0;
  this.j3 = function () {
    aO.j3();
    aZ.j3();
    h.j3();
    b0.y.j3();
    ax.aGa();
    if (bf.dl) {
      bf.dl = false;
      aa.uj();
    }
  };
}
function aaB() {
  this.eM = bf.eM;
  this.e8 = 0;
  this.aaA = 0;
  this.aGY = 0;
  this.aaC = null;
  this.aaD = 7;
  this.a73 = 0;
  this.dd = function () {
    this.aGY = 0;
    this.aaC = [];
    this.e8 = 0;
    this.aaA = 0;
  };
  this.aSv = function (aC) {
    if (aD.hB) {
      this.aBQ(aC);
      return;
    }
    this.aaC.push(aC);
    if (aD.a09 === 2) {
      for (var aB = 0; aB < this.aaC.length; aB++) {
        b8.p2.j3(this.aaC[aB]);
      }
      this.aaC = [];
      return;
    }
  };
  this.aBQ = function (aC) {
    if (aD.a09 === 2) {
      return;
    }
    b8.p2.j3(aC);
    b9.j3();
    aW.aBQ(this.aGY);
    if (this.aGY === aD.a4Z) {
      aD.px.j3();
      this.aGY = 0;
      this.e8 = 0;
      this.aaA = 0;
      this.eM = bf.eM;
      return;
    }
    this.aGY++;
    af.a4S();
    af.mV(true);
    bb.aC0();
  };
  this.j3 = function () {
    h.j3();
    if (aD.hB) {
      bf.dl = aW.aBQ(-1) || bf.dl;
      mX();
    } else if (this.e8 === 0) {
      if (bf.eM >= this.eM) {
        this.eM += bf.aBP * Math.floor(1 + (bf.eM - this.eM) / bf.aBP);
        if (aD.a09 === 2) {
          mM();
        } else {
          this.aaE();
        }
        this.e8++;
        if (bf.eM - this.a73 > 27) {
          this.aaF();
        }
      }
    } else {
      this.aaF();
    }
    mS();
    if (bf.dl) {
      bf.dl = false;
      yC();
    }
    this.a73 = bf.eM;
  };
  this.aaF = function () {
    bf.dl = true;
    mU();
    this.e8 = 0;
  };
  this.aaE = function () {
    var va;
    var aB;
    if (this.aaA !== this.aGY * 7) {
      mO();
      bb.aC0();
      return;
    }
    va = false;
    loop: while (this.aaG()) {
      va = true;
      mO();
      if (aD.a09 === 2) {
        break;
      }
      if (this.aaC.length > 0) {
        for (aB = this.aaD - 2; aB >= 0; aB--) {
          mO();
          if (aD.a09 === 2) {
            break loop;
          }
        }
      } else {
        break;
      }
    }
    if (va) {
      bb.aC0();
    } else {
      mM();
      bb.a4V();
    }
  };
  this.aaG = function () {
    if (this.aaC.length > 0) {
      this.aGY++;
      b8.p2.j3(this.aaC[0]);
      this.aaC.shift();
      return true;
    }
    return false;
  };
}
function aaH() {
  var aaI;
  var aaJ;
  var aaK;
  var aGY;
  var aaL;
  var e8 = 0;
  var eM = bf.eM;
  this.aaA = 0;
  this.dd = function () {
    aaI = 0;
    aaJ = 0;
    aaK = 0;
    aGY = 0;
    aaL = 0;
  };
  this.j3 = function () {
    h.j3();
    if (bC.a8h() < 1.7) {
      aaM();
    } else {
      aaN();
    }
    mS();
    if (bf.dl) {
      bf.dl = false;
      yC();
    }
  };
  function aaM() {
    var aY5;
    if (e8 === 0) {
      if (bf.eM >= eM) {
        aY5 = bf.aBP / bC.a8h();
        eM += aY5 * Math.floor(1 + (bf.eM - eM) / aY5);
        if (aD.a09 === 2 || aM.gx || !bC.a4x) {
          mM();
        } else {
          aaO();
          bb.aC0();
        }
        e8++;
      }
    } else {
      aaP();
    }
  }
  function aaN() {
    var aY5;
    if (bf.eM >= eM) {
      if (aD.a09 === 2 || aM.gx || !bC.a4x) {
        mM();
        eM = bf.eM;
      } else {
        aY5 = bf.aBP / bC.a8h();
        if ((bf.eM - eM) / aY5 > 16) {
          eM = bf.eM - aY5 * 16;
        }
        while (bf.eM >= eM && aD.a09 !== 2) {
          eM += aY5;
          aaO();
        }
        bb.aC0();
      }
    }
    aaP();
  }
  function aaO() {
    if (aaQ()) {
      return;
    }
    if (!aaR()) {
      return;
    }
    mO();
  }
  function aaQ() {
    if (!aD.hB) {
      return 0;
    }
    if (aD.kU) {
      return 0;
    }
    if (aD.a09 === 2) {
      return 1;
    }
    if (aaL % 7 !== 0) {
      aaL++;
      return 1;
    }
    if (aGY === aD.a4Z) {
      if (!aaR()) {
        return 0;
      }
      aW.aBQ(aGY);
      aD.px.j3();
      return 1;
    }
    if (!aaR()) {
      return 0;
    }
    aaL++;
    aGY++;
    af.a4S();
    af.mV(true);
    return 1;
  }
  function aaP() {
    e8 = 0;
    if (aD.hB) {
      bf.dl = aW.aBQ(aGY - (aaL % 7 === 0 ? 0 : 1) + aaL % 7 / 7) || bf.dl;
      mX();
      return;
    }
    if (aM.gx || !bC.a4x) {
      mX();
    } else {
      bf.dl = true;
      mU();
    }
  }
  function aaR() {
    var aB;
    var en;
    var l5;
    var aaS = b9.pv.aUH;
    var fW = b9.pv.aUI;
    var fY = b9.pv.aUJ;
    var fa = b9.pv.aUK;
    var aaT = b9.pv.aUL;
    var aaU = b9.pv.aUM;
    if (aaI >= aaU.length) {
      aN.a1Q("Replay file smaller than expected.");
      bC.a2F(false);
      aD.a09 = 2;
      return false;
    }
    l5 = aaU[aaI];
    if (!aaT[aaI]) {
      if (++aaK >= l5) {
        aaI++;
        aaK = 0;
      }
      return true;
    }
    en = aaJ + l5;
    for (aB = aaJ; aB < en; aB++) {
      b8.p2.pk(aaS[aB], fW[aB], fY[aB], fa[aB]);
    }
    aaJ += l5;
    aaI++;
    return true;
  }
  this.a0J = function () {
    if (b9.pv.aUM.length - aaI <= 2) {
      return;
    }
    aN.a1Q("Replay file larger than expected.");
  };
}
function aaV() {
  var e8 = 0;
  var eM = bf.eM;
  this.aaA = 0;
  this.j3 = function () {
    h.j3();
    if (aD.hB) {
      mX();
    } else if (e8 === 0) {
      if (bf.eM >= eM) {
        eM += bf.aBP * Math.floor(1 + (bf.eM - eM) / bf.aBP);
        if (aD.a09 === 2 || aM.gx) {
          mM();
        } else {
          mO();
          bb.aC0();
        }
        e8++;
      }
    } else {
      if (aM.gx) {
        mX();
      } else {
        bf.dl = true;
        mU();
      }
      e8 = 0;
    }
    mS();
    if (bf.dl) {
      bf.dl = false;
      yC();
    }
  };
}
function dR() {
  this.a0I = null;
  this.dl = false;
  this.eM = 0;
  this.aBP = 56;
  var aaW = 0;
  this.dd = function () {
    this.a4u();
    window.requestAnimationFrame(aaX);
    this.eM = performance.now();
  };
  this.a4l = function () {
    if (aD.gw) {
      this.a0I = new aaH();
      this.a0I.dd();
      return;
    }
    if (aD.kU) {
      this.a0I = new aaV();
    } else {
      this.a0I = new aaB();
      this.a0I.dd();
    }
  };
  this.a4u = function () {
    this.a0I = new aa9();
    this.dl = true;
  };
  this.j3 = function () {
    this.a0I.aaA++;
  };
  this.k7 = function () {
    return this.a0I.aaA;
  };
  function aaX() {
    bf.eM = aaW = performance.now();
    bf.a0I.j3();
    window.requestAnimationFrame(aaX);
  }
  this.aSX = function () {
    var dt = performance.now();
    if (aaW + 1000 > dt) {
      return;
    }
    this.eM = dt;
    this.a0I.j3();
  };
}
function ct() {
  var aFy = 0;
  var aaY = true;
  this.j3 = function () {
    if (bf.eM < aFy) {
      return;
    }
    lz();
  };
  function lz() {
    aFy = bf.eM + 5000;
    if (aD.gw || aD.kU) {
      return;
    }
    if (bA.g9.gz(aD.eX)) {
      return;
    }
    var dt = new Date();
    var a75 = dt.getUTCSeconds();
    if (aaY) {
      if (a75 < 50) {
        aaY = false;
      }
      return;
    }
    if (a75 < 50) {
      return;
    }
    aaY = true;
    var a74 = (dt.getUTCMinutes() + 1) % 60;
    if (a74 % 5 !== 0) {
      return;
    }
    if (a74 === 0 || a74 === 20 || a74 === 40) {
      if (aD.kS < 7) {
        aaZ(0);
      }
      return;
    }
    if (a74 === 10 || a74 === 30 || a74 === 50) {
      if (aD.kS === 7 || aD.kS === 10) {
        aaZ(1);
      }
      return;
    }
    if (a74 === 5 || a74 === 25 || a74 === 45) {
      if (aD.kS === 8) {
        aaZ(2);
      }
      return;
    }
    if (a74 === 35) {
      if (aD.kS === 9) {
        aaZ(3);
      }
    }
  }
  function aaZ(id) {
    var r = [L(513), L(514), L(515), L(516)][id];
    aN.a6k(r);
  }
}
function cn() {
  var n9;
  var nA;
  var nM;
  var nN;
  var aaa = 0;
  var aab = 0;
  this.a1h = function (e) {
    if (e.touches.length > 1) {
      aab = bf.eM;
      aaa = 3;
      aac(e);
      aL.rs();
      return true;
    }
    aaa = 0;
    return false;
  };
  this.a1i = function (e) {
    if (aD.a09 === 0) {
      return false;
    }
    if (e.touches.length > 1) {
      aaa = Math.max(aaa - 1, 0);
      if (!aH.nR()) {
        return true;
      }
      var aLL = aad();
      aac(e);
      var aLM = aad();
      var i4 = Math.floor((n9 + nM) / 2);
      var i5 = Math.floor((nA + nN) / 2);
      aS.a98(i4, i5, Math.max(0.125, aLM) / Math.max(0.125, aLL));
      bf.dl = true;
      return true;
    }
    return false;
  };
  this.a25 = function () {
    var eu;
    var ew;
    if (aaa) {
      aaa = 0;
      if (bf.eM < aab + 500) {
        eu = (n9 + nM) / 2;
        ew = (nA + nN) / 2;
        aL.a1z(eu, ew);
        if (aL.click(eu, ew, true)) {
          bf.dl = true;
        }
        return true;
      }
    }
    return false;
  };
  function aad() {
    return Math.pow(Math.pow(nM - n9, 2) + Math.pow(nN - nA, 2), 0.5);
  }
  function aac(e) {
    n9 = h.k * e.touches[0].clientX;
    nA = h.k * e.touches[0].clientY;
    nM = h.k * e.touches[1].clientX;
    nN = h.k * e.touches[1].clientY;
  }
}
function d2() {
  this.size = 0;
  this.e8 = 0;
  this.aC = null;
  this.dd = function (aC) {
    this.e8 = 0;
    this.aC = aC;
    this.size = aC.length;
  };
  this.uD = function () {
    this.aC = null;
  };
  this.pj = function (size) {
    var aB;
    var fF = 0;
    var aC = this.aC;
    var nR = this.e8 + size - 1;
    for (aB = this.e8; aB <= nR; aB++) {
      fF |= (aC[aB >> 3] >> 7 - (aB & 7) & 1) << nR - aB;
    }
    this.e8 += size;
    if (this.e8 > this.size * 8) {
      console.error("Unwrapper Overflow");
    }
    return fF;
  };
  this.aT3 = function (size) {
    var f7 = size >> 1;
    var eq = 1 << f7;
    return eq * this.pj(size - f7) + this.pj(f7);
  };
  this.aT4 = function (aae) {
    return this.size === bD.aT2(aae);
  };
  this.aUZ = function (x0, aaf, aag) {
    var gG = this.pj(x0);
    if (!gG) {
      return null;
    }
    var en = Math.max(gG, aag);
    var g = aaf <= 8 ? new Uint8Array(en) : aaf <= 16 ? new Uint16Array(en) : new Uint32Array(en);
    for (var aB = 0; aB < gG; aB++) {
      g[aB] = this.pj(aaf);
    }
    var fF = g[gG - 1];
    if (!fF) {
      return g;
    }
    g.fill(fF, gG);
    return g;
  };
  this.aUa = function (x0, aah, aag) {
    var gG = this.pj(x0);
    if (!gG) {
      return null;
    }
    var en = Math.max(gG, aag);
    var g = new Array(en);
    for (var aB = 0; aB < gG; aB++) {
      g[aB] = this.aUX(aah);
    }
    g.fill(g[gG - 1], gG);
    return g;
  };
  this.aUX = function (x0) {
    return bG.w7.wB(this.pj(x0));
  };
  this.aUY = function () {
    var qI = bF.st.su(bF.st.sv(this.pj(30)));
    qI = bA.ra.a4N(qI, "_", "/");
    qI = bA.ra.a4N(qI, "-", "+");
    var aai = "";
    while ((qI.length + aai.length) % 4) {
      aai = aai + "=";
    }
    qI = "data:image/png;base64," + qI + aai;
    var aHv = new Image();
    aHv.onload = function () {
      b9.aIK.aIL(aHv);
      aHv.onload = null;
      aHv = null;
    };
    aHv.src = qI;
  };
}
function dL() {
  this.aVQ = 0;
  this.aVR = 0;
  this.aVM = 0;
  this.aVN = 0;
  this.aVO = 0;
  this.aVP = 0;
  this.aC1 = [0, 0, 0, 0];
  this.nQ = function () {
    this.aVQ = aS.yE();
    this.aVR = aS.yF();
    this.aVM = -this.aVQ;
    this.aVN = -this.aVR;
    this.aVO = h.i / hy;
    this.aVP = h.j / hy;
    this.aC1[0] = Math.floor(this.aVM);
    this.aC1[1] = Math.floor(this.aVN);
    this.aC1[2] = Math.floor(this.aC1[0] + this.aVO + 1);
    this.aC1[3] = Math.floor(this.aC1[1] + this.aVP + 1);
    bb.aBy = true;
  };
}
function co() {
  var a7l;
  var mw;
  this.dd = function () {
    a7l = 1;
    mw = 0;
  };
  this.j3 = function () {
    if (a7l > 0) {
      aaj();
    }
  };
  function aaj() {
    mw = mw === 0 ? bf.eM + 16 : mw;
    a7l -= (bf.eM - mw) * 0.001;
    a7l = a7l < 0 ? 0 : a7l;
    mw = bf.eM;
    bf.dl = true;
  }
  this.uj = function () {
    if (a7l > 0) {
      aak();
    }
  };
  function aak() {
    uk.fillStyle = "rgba(0,0,0," + a7l + ")";
    uk.fillRect(0, 0, h.i, h.j);
  }
}
function a6() {
  this.size = 0;
  this.e8 = 0;
  this.aC = null;
  this.dd = function (aC) {
    this.e8 = 0;
    this.aC = aC;
    this.size = aC.length;
  };
  this.a7 = function (aae) {
    this.dd(new Uint8Array(this.aT2(aae)));
    return this.aC;
  };
  this.uD = function () {
    this.aC = null;
  };
  this.a8 = function (size, a79) {
    var aB;
    var aC = this.aC;
    var nR = this.e8 + size - 1;
    for (aB = this.e8; aB <= nR; aB++) {
      aC[aB >> 3] |= (a79 >> nR - aB & 1) << 7 - (aB & 7);
    }
    this.e8 += size;
    if (this.e8 > this.size * 8) {
      console.error("Wrapper Overflow");
    }
  };
  this.aT1 = function (size, a79) {
    var f7 = size >> 1;
    var eq = 1 << f7;
    this.a8(size - f7, bL.du(a79, eq));
    this.a8(f7, a79 % eq);
  };
  this.aal = function (size) {
    var aB;
    var aC = this.aC;
    var nR = this.e8 + size;
    for (aB = this.e8; aB < nR; aB++) {
      aC[aB >> 3] &= 128 >>> (aB & 7) ^ 255;
    }
  };
  this.aT2 = function (aae) {
    return aae + 7 >> 3;
  };
  this.aam = function (g, jQ, nR, aan) {
    var aB;
    for (aB = jQ; aB < nR; aB++) {
      this.a8(aan, g[aB]);
    }
  };
}
function d1() {
  this.dd = function () {
    this.g = [];
    this.e8 = 0;
  };
  this.aTR = function () {
    return new Uint8Array(this.g);
  };
  this.a8 = function (aao, value) {
    var g = this.g;
    var nR = this.e8 + aao - 1;
    var aap = 1 + (nR >> 3);
    while (g.length < aap) {
      g.push(0);
    }
    for (var aB = this.e8; aB <= nR; aB++) {
      g[aB >> 3] |= (value >> nR - aB & 1) << 7 - (aB & 7);
    }
    this.e8 += aao;
  };
  this.dk = function (g, x0, aaf) {
    var aaq = bA.qj.a2r(g);
    this.a8(x0, aaq);
    for (var aB = 0; aB < aaq; aB++) {
      this.a8(aaf, g[aB]);
    }
  };
  this.aUr = function (g, x0, aah) {
    var aaq = bA.qj.a2r(g);
    this.a8(x0, aaq);
    for (var aB = 0; aB < aaq; aB++) {
      this.aUp(g[aB], aah);
    }
  };
  this.aUp = function (qI, x0) {
    var en = qI.length;
    this.a8(x0, en);
    for (var aB = 0; aB < en; aB++) {
      this.a8(16, qI.charCodeAt(aB));
    }
  };
  this.aUq = function (a2x) {
    var qI = a2x.toDataURL();
    var aar = qI.split(",");
    if (aar.length < 2) {
      console.log("error 266");
      return;
    }
    qI = aar[aar.length - 1];
    qI = bA.ra.a4N(qI, "/", "_");
    qI = bA.ra.a4N(qI, "\\+", "-");
    qI = bA.ra.a4N(qI, "=", "");
    var wK = bG.st.wH(qI);
    var en = wK.length;
    this.a8(30, en);
    for (var aB = 0; aB < en; aB++) {
      this.a8(6, wK[aB]);
    }
  };
}
setTimeout(bt, 10000);
window.onload = function () {
  bt();
};
