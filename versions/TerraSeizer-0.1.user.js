// ==UserScript==
// @name           TerraSeizer Unstable
// @namespace      https://github.com/GameSketchers/TerraSeizer
// @version        0.1-unstable
// @description    First and Final release&method. This version mirrors user input (keyboard & mouse) for multibox-like behavior, but will be discontinued in favor of a new system.
// @description:tr ilk ve son sürüm. Bu versiyon, klavye ve fare girdilerini izleyerek simüle eder; ancak yeni sistem lehine artık kullanılmayacaktır.
// @author         Qwyua
// @match          *://territorial.io/*
// @match          *://*/*?__cpo=aHR0cHM6Ly90ZXJyaXRvcmlhbC5pbw
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEW+AAHAIiMAiAfESkosjSx4cMRcnFzPgoGbmNGow6e7ut7ftLTX4dbf3+7u3d7////Ro4BnAAACgklEQVRIx+3VMYgaQRQA0D1SpEizcv0Vg1h7XHHFQQpZUqVdWIRrRBaEQCIWKSxSBWRBDoIIC0J6YZHjCgshdsLCwvYB2cLiCkHLQ5zMz3cl7ow6O1OkSJF/V8lj5s+fP38N43/8s/GqoMUK17fjcVkDttvT9epRAwIGW17rQWBjUwmTXz+Hc2BPSugNbdsZwbal2t3eRRdgORk3TSV0kjTRydOlAtrDID0UTEwFtKtJksqmCjodL5jPAbamAu6s08EEHtVwf6gXLWiPgJW1YCeR7i1CLL3sOEfQAaYHMcuyLvykBb2E6cERrLitL24KEogV55v9btmSQGxMbufXa8hekwjnQhnfAvdGBFfF9slWvJhi3y2kTZGt+GYNXN8dH/o52/kK6CBrkmO44FMMG7EEdvnmmUKvFB/qL8J7bus7oDXynTXPFzxL/nKdQpDBNKd2y7z9ARAS8vGQ9NFdP+y2arPnz1OgUZ2QRvxyHt7DwsSbA/wP/QohpXhbkHT4tnyVjgLatwghxRjGrRvTPIUJu5lCFAHdrYfxHthqtZw0Tzo8YF8QNaKonzpS2g8ldgI9/HVWL1r79TA+7KUAnY7zFTuSuoSLUoSJiHCIY2qOQw3rzEXRdRuDiIfV/eBL6yxGse76hvAMYvyj/jdyGtYBOl4CfiP0B+E7ci7+QC9IYNOzrKJbIXnQwWFLZxLDQ3xV1He1IA1rhKihA2GF6MAqzIgm3NSI3ta0rgcT6GtBfPlU69S7i+5pQax47sUcICaZX3EjG0+byt+FXUXJD/BBUR8jG9+a0FEU0uDmfGjpQDs4evhSiB//vOY1hK9RTwtiljnXzc+eIO9yDOGjTuXwN2h8zFYEBekAAAAAAElFTkSuQmCC
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_addValueChangeListener
// @grant          GM_xmlhttpRequest
// ==/UserScript==

// webproxy ile kullanilir
// https://www.croxy.org/ - https://www.croxyproxy.com/ - https://www.blockaway.net/
// gibi saglayicilara entegre edilmistir bu saglayicilardan https://territorial.io/ adresini acmaniz gerekir
// script klavye ve fare islemlerini dinleyip bot sayfanin bu islemleri birebir simule etmesini saglar (multibox script turevi)
// calisma mantigi bu oyun icin cok uygun olmasada tamamen dogaclama ilerletilerek bu seviyeye getirilmistir
// farkli alanlarda da kullanima uygundur


// duzenleme:
// artik bu scriptin sistemini kullanmama karari aldim
// bunun yerine artik tamamen oyunun kendi ic kodlari ve websocket mesajlari uzerinden ilerletecegim.

(() => {

    class InputSync {
        __lastTarget = null;
        isSeizer = location.href.includes("territorial");
        isBot = location.href.includes("__cpo");

        constructor() {
            if (this.isSeizer) this.initSeizer();
            else if (this.isBot) this.initBot();
        }

        initSeizer() {
            console.log("Seizer mode enabled");
            const events = {
                click: e => this.sendEvent("click", e),
                keydown: e => this.sendEvent("keydown", e, this.extractKeyEvent(e)),
                keyup: e => this.sendEvent("keyup", e, this.extractKeyEvent(e)),
                keypress: e => this.sendEvent("keypress", e, this.extractKeyEvent(e)),
                input: e => {
                    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
                        this.sendEvent("input", e, {
                            value: e.target.value,
                            selectionStart: e.target.selectionStart,
                            selectionEnd: e.target.selectionEnd,
                        });
                    }
                },
                scroll: () =>
                this.sendEvent("scroll", null, { scrollX: window.scrollX, scrollY: window.scrollY }),
                mousemove: this.throttle(e => this.sendEvent("mousemove", e), 100),
                wheel: e => this.sendEvent("wheel", e),
                mousedown: e => this.sendEvent("mousedown", e),
                mouseup: e => this.sendEvent("mouseup", e),
            };

            Object.entries(events).forEach(([event, handler]) =>
                                           document.addEventListener(event, handler, true)
                                          );

            GM_setValue("pageSize", JSON.stringify({
                width: innerWidth,
                height: innerHeight,
                screenWidth: screen.width,
                screenHeight: screen.height,
                devicePixelRatio,
            }));
        }

        extractKeyEvent(e) {
            return {
                key: e.key,
                code: e.code,
                keyCode: e.keyCode,
                repeat: e.repeat,
                ctrl: e.ctrlKey,
                shift: e.shiftKey,
                alt: e.altKey,
                meta: e.metaKey,
            };
        }

        sendEvent(type, event, extraData = {}) {
            const baseData = event ? {
                x: event.clientX,
                y: event.clientY,
                screenX: event.screenX,
                screenY: event.screenY,
                pageX: event.pageX,
                pageY: event.pageY,
                button: event.button,
                deltaX: event.deltaX,
                deltaY: event.deltaY,
                deltaZ: event.deltaZ,
                deltaMode: event.deltaMode,
            }:{};
            const eventData={type,...baseData,...extraData,timestamp:Date.now()};
            GM_setValue("actionEvent", JSON.stringify(eventData));
        }

        async initBot() {
            console.log("Bot mode enabled");
            const html = await (await fetch(location.href)).text();
            const newHtml = html.replace(/"Player "\s*/g, '"Qwyua"').replace(/"Redacted "\s*/g, '"Qwyua"');
            document.open();
            document.write(newHtml);
            document.close();
            const scale = this.getScaleFactors();
            GM_addValueChangeListener("actionEvent", (name, oldVal, newVal) => {
                if (!newVal) return;
                try {
                    const eventData = JSON.parse(newVal);
                    this.handleBotEvent(eventData, scale.x, scale.y);
                } catch (err) {
                    console.error("Event parsing error:", err);
                }
            });
        }

        getScaleFactors(){
            try {
                const masterSize=JSON.parse(GM_getValue("pageSize")??"{}");
                return {x:innerWidth/(masterSize.width??innerWidth),y:innerHeight/(masterSize.height??innerHeight)};
            }catch{return {x:1,y:1}}
        }

        handleBotEvent(eventData,scaleX=1,scaleY=1){
            const x = (eventData.x * scaleX) || 0;
            const y = (eventData.y * scaleY) || 0;
            const handlers = {
                click: () => this.simulateClick(x, y),
                keydown: () => this.handleKey("keydown", eventData),
                keyup: () => this.handleKey("keyup", eventData),
                keypress: () => this.handleKey("keypress", eventData),
                input: () => this.handleInput(eventData.value ?? "", eventData.selectionStart ?? 0, eventData.selectionEnd ?? 0),
                scroll: () => window.scrollTo(eventData.scrollX, eventData.scrollY),
                mousemove: () => this.simulateMouseMove(x, y),
                wheel: () => this.simulateWheel(eventData, x, y),
                mousedown: () => this.simulateMouseEvent("mousedown", eventData, x, y),
                mouseup: () => this.simulateMouseEvent("mouseup", eventData, x, y),
            };

            handlers[eventData.type]?.();
        }

        simulateClick(x, y){
            if (!isFinite(x) || !isFinite(y)) return;
            this.simulateMouseMove(x, y);
            const el = document.elementFromPoint(x, y);
            if (!el) return;
            el.focus?.();
            ["mousedown","mouseup","click"].forEach(evt=>el.dispatchEvent(new MouseEvent(evt,{bubbles:true,cancelable:true,clientX:x,clientY:y})));
        }

        simulateMouseMove(x, y) {
            if (!isFinite(x) || !isFinite(y)) return;
            document.dispatchEvent(new MouseEvent("mousemove",{bubbles:true,cancelable:true,clientX:x,clientY:y}));
        }

        simulateMouseEvent(type, eventData, x, y) {
            document.dispatchEvent(new MouseEvent(type,{bubbles:true,cancelable:true,button:eventData.button,clientX:x,clientY:y}));
        }

        simulateWheel(eventData, x, y) {
            document.dispatchEvent(new WheelEvent("wheel",{
                bubbles: true,
                cancelable: true,
                deltaX: eventData.deltaX,
                deltaY: eventData.deltaY,
                deltaZ: eventData.deltaZ,
                deltaMode: eventData.deltaMode,
                clientX: x,
                clientY: y,
            }));
        }

        handleKey(type, e) {
            const el=this.__lastTarget&&document.activeElement===document.body?this.__lastTarget:document.activeElement;
            (el??document.body).dispatchEvent(new KeyboardEvent(type,{
                key: e.key, code: e.code, keyCode: e.keyCode,
                repeat: e.repeat, bubbles: true, cancelable: true,
                ctrlKey: e.ctrl, shiftKey: e.shift, altKey: e.alt, metaKey: e.meta
            }));
        }
        handleInput = (val, s, e) => {
            const el=document.activeElement;
            if(!el?.isContentEditable&&!(el instanceof HTMLInputElement||el instanceof HTMLTextAreaElement))return;
            const{value: pVal,selectionStart:ps,selectionEnd:pe}=el;
            document.activeElement!==el&&(el.focus(),el.dispatchEvent(new FocusEvent('focus',{bubbles:true})));
            ['keydown', 'keypress'].forEach((t,i)=>el.dispatchEvent(new KeyboardEvent(t,
            {bubbles:true,key:i?val.slice(-1)||' ':'Process',keyCode:i?val.charCodeAt(val.length-1)||32:229})));
            Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(el, val)??(el.value=val);
            new MutationObserver(()=>{}).observe(el,{attributes:true,attributeFilter:['value']})?.disconnect();
            el.setSelectionRange?.(s,e)&&el.dispatchEvent(new Event('select',{bubbles:true}));
            const ie=new InputEvent('input',{bubbles:true,inputType:'insertText',data:val});
            Object.keys(el).find(k=>k.startsWith('__reactEventHandlers$'))?.['onInput']?.(ie);el.dispatchEvent(ie);
            pVal!==val&&el.dispatchEvent(new Event('change',{bubbles:true}));
            el.form && (el.validity?.valid||el.dispatchEvent(new Event('invalid',{bubbles:true})))
            && el.form.dispatchEvent(new FormDataEvent('formdata',{formData:new FormData(el.form)}))
            && requestAnimationFrame(()=>el.form.dispatchEvent(new SubmitEvent('submit',{submitter:el})));
            ['compositionstart','compositionupdate','compositionend'].forEach(t=>
            el.dispatchEvent(new CompositionEvent(t,{bubbles: true,data:val})));
            el.dispatchEvent(new KeyboardEvent('keyup',{bubbles:true,key:'Process',keyCode:229}));
            setTimeout(()=>el.checkValidity?.()&&el.dispatchEvent(new CustomEvent('reactStateUpdate',{
            detail:{value:val,previousValue:pVal,selection:{s,e,previous:{ps,pe}}}
            })),0);
        };

        throttle(func, wait) {
            let timeout = null, prev = 0;
            return (...args) => {
                const now = Date.now(), remaining = wait - (now - prev);
                if (remaining <= 0) { prev = now; func(...args); }
                else if (!timeout) timeout = setTimeout(() => { prev = Date.now(); timeout = null; func(...args); }, remaining);
            };
        }
    }

    new InputSync();
})();
