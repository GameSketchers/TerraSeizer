// ==UserScript==
// @name         TerraSeizer Unstable
// @namespace    https://github.com/GameSketchers/TerraSeizer
// @version      2.0
// @description  -
// @match        *://territorial.io/*
// @match        *://*/*?__cpo=aHR0cHM6Ly90ZXJyaXRvcmlhbC5pbw
// @run-at       document-start
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// ==/UserScript==
const GM_onMessage=(label,cb)=>GM_addValueChangeListener(label,(_,__,data)=>cb(...data)),
      GM_sendMessage=(label,...data)=>GM_setValue(label,data),
      rand=()=>Math.floor(Math.random()*999),
      observer=(s,f)=>{let e=document.querySelector(s);e?f(e):document.body&&new MutationObserver((_,o)=>{let el=document.querySelector(s);el&&(f(el),o.disconnect())}).observe(document.body,{childList:1,subtree:1})};

const h = location.href,
      boturl='__cpo',
      sketcherurl='territorial.io'//'51.159.195.65'//'51.158.204.66';

class TerraSeizer {
    static botPage = h.includes(boturl)&&!h.includes(sketcherurl);
    static playerName = this.botPage ? "test" : "qwyua";
    static run() {
        observer('body', () => this.injectHTML());

        h.includes(boturl)&&!h.includes(sketcherurl)&&(()=>{
            this.botNumber = Math.floor(Math.random()*1000);
            console.log("__cpo/bot");
            this.checkForMap();
            this.botSettings();
            GM_onMessage('Support',(s,rand) => {
                unsafeWindow.TerraSeizer.sendSupport(unsafeWindow.TerraSeizer.gamePlayers.indexOf(s))
            });
        })();

        h.includes(sketcherurl)&&(()=>{
            console.log("territorial.io");
            this.checkForMap();
            this.playerSetting();
            const interval = setInterval(() => {
                const el = document.querySelector('#getSupport');
                if (!el) return;
                clearInterval(interval);console.log(el);
                el.onclick=()=>{GM_sendMessage('Support',TerraSeizer.playerName,rand())};
            }, 200);
        })();

    }

    static checkForMap(){}
    static botSettings(){}
    static playerSetting(){}
    static injectHTML=async()=>{
        try{
            document.open();
            document.write((await(await fetch(location.href)).text())
                           .replace(/}a\(\);/g, '}a();globalThis.TerraSeizer??={};')
                           .replace(/ag=new cc\(\);/g, 'ag=new cc();Object.defineProperty(TerraSeizer,"gamePlayers",{get:()=>ag.yc});')
                           .replace(/this\.send=function\(aC\)\{/, 'this.send=function(aC){console.log(Array.from(aC));')
                           .replace(/aTW\.send\(aC\);\}\};/,`aTW.send(aC);}};window.TerraSeizer.send = function(arrayData){this.send(new Uint8Array(arrayData))}.bind(this);`)
                           .replace(/function cC\(\)\s*\{/, `function cC(){Object.defineProperty(window.TerraSeizer,"sendSupport",{value:function(playerindex){b8.hD.p8(aR.hH(),playerindex)},writable:true,configurable:true,enumerable:true});`)
                           .replace('S[55]+Math.floor(Math.random()*1000)', `"${this.playerName}${this.botNumber ?? ''}"`)
                           .replace(`"Redacted "`, `"${this.playerName}${this.botNumber ?? ''}"`)
                           .replace('this.fK=new Uint32Array(2);','this.fK=new Uint32Array(2);Object.defineProperty(window.TerraSeizer,"getMyCount",{get:()=>this.fK[1]});')
                           .replace(/return a49\.substring\(0,a47-3\*\(a48\)\)\+" "\+a4A;\s*};/,'return a49.substring(0,a47-3*(a48))+" "+a4A;};Object.defineProperty(window.TerraSeizer,"convectorCount",{value:f=>this.zQ(f),configurable:true,enumerable:true,writable:true});')
                           .replace("</script>", !this.botPage?`<\/script><button id="getSupport" style="position:fixed;top:15px;right:15px;z-index:2147483647;padding:10px 18px;border:none;border-radius:8px;background:linear-gradient(135deg,rgb(255,65,108),rgb(255, 75, 43));color:rgb(255,255,255);font-size:14px;font-weight:bold;cursor:pointer;box-shadow:rgba(0,0,0,0.3) 0px 4px 10px;transition:0.3s;">🚀 GET SUPPORT</button>`:"</script>")
                           .replace('aNL.removeChild(a3S);',!this.botPage?`a3S.id!=='getSupport'&&aNL.removeChild(a3S);`:'aNL.removeChild(a3S);')
                          );
            document.close();
            console.log(`${this.botPage?'Bot':'Sketcher'}: ${this.playerName}${this.botNumber??''} Active!`)
        }catch(e){console.error(e)}
    };

}

TerraSeizer.run();








/*(function(){
  const oldRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function(child){
    console.log("removeChild:", child);
    console.trace();
    return oldRemoveChild.apply(this, arguments);
  };
})(); */