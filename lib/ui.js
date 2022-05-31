_telnetConnection = true;

ftCons=document.getElementById("fTelnetConsole");
ftc=document.getElementById("fTelnetColorConsole");
ftConClrs=document.getElementById("ftColors");
ftCols=document.getElementById("ftColors");
ftConsoleFont=document.getElementById("select_consoleFont");
ftConsoleColor=document.getElementById("select_consoleColor");
ftConsoleFontSize=document.getElementById("select_consoleFontSize");
ftColors=document.getElementById("select_toggleColors");
ftConsolePosition=document.getElementById("select_consolePosition");
ftConsolePositionTop=document.getElementById("select_consolePositionTop");
ftConsoleLineSpacing=document.getElementById("select_consoleLineSpacing");

function changeDesign() {
  ftCons.style.display="none";
  idx=ftConsoleFont.selectedIndex;
  if (idx>=0) {
    ftCons.style.fontFamily = ftConsoleFont[idx].value;
  }	   
  idx=ftConsoleColor.selectedIndex;
  if (idx>=0) {
    ftCons.style.color = ftConsoleColor[idx].value;
  }
  idx=ftConsoleFontSize.selectedIndex;
  if (idx>=0) {
    ftCons.style.fontSize = ftConsoleFontSize[idx].value;
  }
  if (ftColors != null) {
    idx=ftColors.selectedIndex;
    if (idx>=0) {
      toggleColors=ftColors[idx].value;
    }
  }
  idx=ftConsoleLineSpacing.selectedIndex;
  if (idx>=0) {
    posVal=ftConsoleLineSpacing[idx].value;
    ftCons.style.lineHeight=posVal+"%";
  }
  idx=ftConsolePositionTop.selectedIndex;
  if (idx>=0) {
    posVal=ftConsolePositionTop[idx].value;
    if (posVal=="top") {
      ftCons.style.top="0px";
    } else if (posVal=="ltop") {
      ftCons.style.top="20px";
    } else if (posVal=="mid") {
      ftCons.style.top="40px";
    } else if (posVal=="low") {
      ftCons.style.top="60px";
    } else if (posVal=="lower") {
      ftCons.style.top="80px";
    } 
  }
  idx=ftConsolePosition.selectedIndex;
  if (idx>=0) {
    posVal=ftConsolePosition[idx].value;
    if (posVal=="left") {
      ftCons.style.left="0%";
    } else if (posVal=="vsleft") {
      ftCons.style.left="1%";
    } else if (posVal=="sleft") {
      ftCons.style.left="2%";
    } else if (posVal=="cleft") {
      ftCons.style.left="3%";
    } else if (posVal=="center") {
      ftCons.style.left="5%";
    } else if (posVal=="right") {
      ftCons.style.left="7%";
    } 
  }
  ftCons.style.display="block";
  maxFntWidth=document.documentElement.clientWidth/24;
  maxFntHeight=document.documentElement.clientHeight/80;
  console.log("reccommended font size: " + maxFntWidth);

}

function genTotp() {
  var secret = secrGet();
  var totp = new jsOTP.totp();
  var code = totp.getOtp(secret);
  totp=document.getElementById('totp');
  totp.innerText = code;
}

var KEYCODE_ESC = 27;
   var KEYCODE_ENTER = 13;
   var ctrlPressed = 0;
   var altPressed = 0;
   var configShown = 0;
   var fullScreen = 0;
   
   //var x = document.querySelector('fTelnetCrtCanvas');
   //x.style.display="none"; // HERE
   //var y = document.querySelector('fTelnetClientContainer');
   //y.style.display="none"; // HERE

   //x.tabIndex = 0;
   //x.focus();
   //x.click();

   function clog(msg) {
     if (DEBUG==1) {
       console.log(msg);
     }
   }

   function setOption(selectElement,value) {
     var option=selectElement.options;
     for (i=0; i<option;i++) {
       if (options.value == value) {
         selectElement.selectedIndex = i;
         return (true);
       }
     }
     return(false);
   } 
   //var sc = document.querySelector('#input_SERVERNAME_CUSTOM');
   //sc.addEventListener('change', function (evt) {
   //  serverChange(sc.value);
   //  setCustomConn(sc.value);
   //});

//   var pwd = document.querySelector('#PASSWORD');
//   pwd.addEventListener('input', function (evt) {
//     passwordChange(this.value);
//   });
//
//   function passwordChange(val) {
//     document.querySelector('#PASSWORD').value = val;
//     storePassword(val);
//   }
//
//   var usr = document.querySelector('#USERNAME');
//   usr.addEventListener('input', function (evt) {
//     userNameChange(this.value);
//   });
//
//   function userNameChange(val) {
//     document.querySelector('#USERNAME').value = val;
//     _sshUserName = val;
//     storeUserName(val);
//   }
//
//   var p = document.querySelector('#PROXY');
//   p.addEventListener('input', function (evt) {
//     proxyChange(this.value);
//   });
//
//   function proxyChange(val) {
//     fTelnet._Options.ProxyHostname=val;
//     if (val=="127.0.0.1") {
//       fTelnet._Options.ProxyPort = 8080;
//       fTelnet._Options.ProxyPortSecure = 8080;
//     } else {
//       fTelnet._Options.ProxyPort = 8080;
//       fTelnet._Options.ProxyPortSecure = 8080;
//     }
//     setStorageProxy(val);
//     var fd = document.querySelector('#PROXY');
//     setOption(fd,val)
//     //fd.selectedIndex=val;
//     console.log("Proxy Changed to: " + val);
//   }
//
//
//
//   var f = document.querySelector('#FONT');
//   f.addEventListener('input', function (evt) {
//     inputFontChange([this.value,this.selectedIndex]);
//   });
//   function inputFontChange(val) {
//     addToFontHistory(val[0],val[1]);
//     fTelnet._Crt.SetFont(val[0]);
//     //console.log('OnInput Changed Font to ' + val[0] + ' set Index to ' + val[1]);
//   }
//
//   function fontChange(val) {
//     fTelnet._Crt.SetFont(val[0]);
//     if (val[0]=="CP437" && DetectMobileBrowser.IsMobile) {
//       val[0]="CP437_4x8";
//       val[1]=0;
//     }
//     // set drop-down selected
//     var fd = document.querySelector('#FONT');
//     fd.selectedIndex=val[1];
//     //console.log('Changed Font to ' + val[0] + ' set Index to ' + val[1]);
//   }
//

//   function fontChange() {
//     font=document.getElementById("input_consoleFont").value;
//     ftCons.style.fontFamily=font;
//   }

   document.getElementById("input_SERVERNAME_CUSTOM").addEventListener('change', serverChange());

   //function changeServer() {
   //  val=document.getElementById("input_SERVERNAME_CUSTOM").value;
   //  console.log(val);
   //  serverChange(val);
   //}

   //var s = document.getElementById('input_SERVERNAME_CUSTOM');
   //s.addEventListener('change', function (evt) {
   //  serverName=s.value;
   //  //if (serverName=="") {
   //  //  serverName=document.querySelector('#input_SERVERNAME_CUSTOM').value;
   //  //}
   //  console.log(serverName);
   //  //serverChange(serverName);
   //  //sc.value=serverName;
   //});

//
//
//   var as01 = document.querySelector('#AUTORUNSTR01');
//   var as02 = document.querySelector('#AUTORUNSTR02');
//   var as03 = document.querySelector('#AUTORUNSTR03');
//   var as04 = document.querySelector('#AUTORUNSTR04');
//   as01.addEventListener('input', function (evt) {
//     autoStrChange('01',this.value);
//   });
//   as02.addEventListener('input', function (evt) {
//     autoStrChange('02',this.value);
//   });
//   as03.addEventListener('input', function (evt) {
//     autoStrChange('03',this.value);
//   });
//   as04.addEventListener('input', function (evt) {
//     autoStrChange('04',this.value);
//   });
//
//   function autoStrGet(id) {
//     val = localStorage.getItem('autoStr'+id);
//     return (val);
//   }
//
//   function autoStrChange(id,val) {
//     localStorage.setItem('autoStr'+id,val);
//   }
//
   function serverChange() {
     val=document.getElementById("input_SERVERNAME_CUSTOM").value;
     addToConnHistory(val);
     bbs_name=val.split("|");
     if (bbs_name[1]) {
       bbs_val=bbs_name[1].split(":");
       document.title=bbs_name[0];
       console.log("Will connect to: " + bbs_name);
       fTelnet._Options.Hostname = bbs_val[0];
       fTelnet._Options.Port = bbs_val[1];
       getNotesContent(); // This is to prevent overwriting of notes
     }
     if (bbs_name[2]=='ssh') {
       _telnetConnection = false; 
       document.querySelector('#checkbox_SSH').checked = true;
       val=document.getElementById("input_PASSWORD").value;
       _sshPassword = val;
       val=document.getElementById("input_USERNAME").value;
       _sshUserName = val;
       //console.log("SSH YES");
     } else {
       _telnetConnection = true; 
       document.querySelector('#checkbox_SSH').checked = false;
       //console.log("TELNET YES");
     }
     //_telnetConnection = getTelnetConn();
   }

   //function inpKeyChange() {
   //  e.preventDefault(); 
   //  var y = document.getElementById('KEYINPUT');
   //  keych = y.value.charCodeAt(0);
   //  //if (DEBUG==1) { console.log("inpKeyChange: " + keych); }
   //  console.log("inpKeyChange: " + keych);
   //  fTelnet._Crt.PushKeyPress(keych,0,false,false,false);
   //  document.getElementById('KEYINPUT').value='';
   //}

   //function inpKeyDown(e) {
   //  e.preventDefault(); 
   //  var key = e.key;
   //  var keych = key.charCodeAt(0);
   //  console.log('onKeyDown: ' + key); //BH
   //  if (key=='ArrowRight') { // Arrow Left
   //    //console.log('Left');
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.LEFT, KeyboardKeys.LEFT, false, false, false);
   //  } else if (key=='ArrowRight') {
   //    //console.log('Right');
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.RIGHT, KeyboardKeys.RIGHT, false, false, false);
   //  } else if (key=='ArrowUp') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.UP, KeyboardKeys.UP, false, false, false);
   //    //console.log('Up');
   //  } else if (key=='ArrowDown') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.DOWN, KeyboardKeys.DOWN, false, false, false);
   //    //console.log('Down');
   //  } else if (key=='PageUp') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.PAGE_UP, KeyboardKeys.PAGE_UP, false, false, false);
   //  } else if (key=='PageDown') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.PAGE_DOWN, KeyboardKeys.PAGE_DOWN, false, false, false);
   //  } else if (key=='Home') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.HOME, KeyboardKeys.HOME, false, false, false);
   //  } else if (key=='End') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.END, KeyboardKeys.END, false, false, false);
   //  } else if (key=='Backspace') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.BACKSPACE, KeyboardKeys.BACKSPACE, false, false, false);
   //  } else if (key=='Enter') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.ENTER, KeyboardKeys.ENTER, false, false, false);
   //  } else if (key=='Escape') {
   //    fTelnet._Crt.PushKeyDown(KeyboardKeys.ESCAPE, KeyboardKeys.ESCAPE, false, false, false);
   //  } else {
   //    keyv = key.charCodeAt(0);
   //    if ((e.ctrlKey || e.ctrlMetaKey) && (key >= 'a' && key <= 'Z')) {
   //      fTelnet._Crt.PushKeyPress(keyv,0,true,false,false); // CTRL Pressed Key
   //    } else if ((e.altKey) && (key >= 'a' && key <= 'Z')) {
   //      fTelnet._Crt.PushKeyPress(keyv,0,false,true,false); // CTRL Pressed Key
   //    } else if (key >= "0" && key <= "9") {
   //      fTelnet._Crt.PushKeyPress(keyv,0,false,false,false);
   //    } else {
   //     var y = document.querySelector('#KEYINPUT');
   //     //keych = y.value.charCodeAt(0);
   //     //fTelnet._Crt.PushKeyPress(keyv,0,false,false,false);
   //    }
   //  }
   //  //document.getElementById('KEYINPUT').value='';
   //}

   function inpKeyUp(e) {
      e.preventDefault(); 
      //var val = document.querySelector('#KEYINPUT').value;
      var keych = e.key;
      var key = keych.charCodeAt(0);
      //console.log('onKeyUp: ' + key); //BH
      if (key==32) {
        fTelnet._Crt.PushKeyDown(KeyboardKeys.SPACE, KeyboardKeys.SPACE, false, false, false);
      } else if (key==4) { // BH BACKSPACE
        fTelnet._Crt.PushKeyDown(KeyboardKeys.BACKSPACE, KeyboardKeys.BACKSPACE, false, false, false);
      } else {
        fTelnet._Crt.PushKeyPress(key,0,false,false,false);
      }
      var y = document.querySelector('#KEYINPUT');
      y.value='';
    }

    function toggleAddress() {
      var items = [ "ADDRESS" ];
      items.forEach(toggleVisibility);
    }

    function toggleTerminalStyle() {
      var items = [ "terminalStyle" ];
      items.forEach(toggleVisibility);
    }

    function toggleOTP() {
      var items = [ "OTP" ];
      items.forEach(toggleVisibility);
    }

    function toggleNotes() {
      var items = [ "NOTESDIV" ];
      items.forEach(toggleVisibility);
    }

    function toggleAutoRun() {
      var items = [ "AutoRun" ];
      items.forEach(toggleVisibility);
    }


    function toggleConfig() {
      //var items = [ "KEYINPUT",  "SERVERNAME",  "SERVERLIST",  "FONT", "ECHO", "PROXY", "WSS", "LASTFAV" ];
      var items = [ "CONFIG" ];
      items.forEach(toggleVisibility);
    }

    function visibilityHide(element) {

      item = document.querySelector('#' + element);
      item.style.display="none"; 

    }

    function toggleVisibility(element, index) {

      item = document.querySelector('#' + element);

      if (item.style.display=="none") {
        item.style.display="initial"; 
      } else {
        item.style.display="none"; 
      }

    }

    ///var secr = document.querySelector('#secret');

    function secrGet() {
      val = localStorage.getItem('input_SECRET');
      if (val == null) { val=""; }
      return(val);
    }
   
    ///function secrChange(val) {
    ///  localStorage.setItem('secret',val);
    ///}

    //secr.addEventListener( 'change', function() {
    //  secrChange(this.value);
    //});

    //var ssh = document.querySelector('#SSH');
    //ssh.addEventListener( 'change', function() {
    //  if(this.checked) {
    //    setTelnetConn(false);
    //  } else {
    //    setTelnetConn(true);
    //  }

    //});

     var p = document.querySelector('#checkbox_RANDOM');

     p.addEventListener( 'change', function() {

      if(this.checked) {
        setConfigRandom(1);
      } else {
        setConfigRandom(0);
      }

    });

  function getStorageProxy() {
    val = localStorage.getItem('defaultProxy');
    return(val);
  }

  function setStorageProxy(proxy) {
    localStorage.setItem('defaultProxy',proxy);
  }

  function getFontHistory(font) {
    font = localStorage.getItem('lastFont');
    idx = localStorage.getItem('lastFontIdx');
    return([font,idx]);
  }

  function addToFontHistory(font,index) {
    localStorage.setItem('lastFont',font);
    localStorage.setItem('lastFontIdx',index);
  }

  function addToConnHistory(bbs_list) {
    localStorage.setItem('bbs_connection_history',bbs_list);
  }

  function getConnHistory() {
    var val = localStorage.getItem('bbs_connection_history');
    if (!val) { addToConnHistory(''); }
    return(val);
  }

  function setCustomConn(item) {
    localStorage.setItem('bbs_custom',item);
  }

  function getCustomConn() {
    var val = localStorage.getItem('bbs_custom');
    if (!val) { addToConnHistory(''); }
    return(val);
  }

  function storeUserName(val) {
    localStorage.setItem('sshUserName',val);
  }

  function getUserName() {
    var val = localStorage.getItem('sshUserName');
    if (!val) { storeUserName('new'); val = 'new'; }
    return (val);
  }

  function storePassword(val) {
    localStorage.setItem('sshPassword',val);
  }

  function getPassword() {
    var val = localStorage.getItem('sshPassword');
    if (!val) { storePassword('new'); val = 'new'; }
    return (val);
  }

  function saveElement(key,value) {
    localStorage.setItem(key,value);
  }
  
  function loadElement(key) {
    var value = localStorage.getItem(key);
    if (value == null) { val=undefined; }
    return(value);
  }			     

  function loadElementsValues() {
    type="select";			      
    tags=document.getElementsByTagName(type);
    tags_len=document.getElementsByTagName(type).length;
    for (var i=0;i<tags_len;i+=1) {
      id=document.getElementsByTagName(type)[i]["id"];
      if (id != "") {
        value=loadElement(id);
        if (value != undefined) {
          setOption(id,value);
          document.getElementsByTagName(type)[i].value=value;
          clog("LOADED: " + type + " " + id + " " + value);
        }
      }
    }
 
    tags=document.getElementsByTagName('input');
    tags_len=document.getElementsByTagName('input').length;
    for (var i=0;i<tags_len;i=i+1) { 
      id=document.getElementsByTagName('input')[i]["id"];
      type=document.getElementsByTagName('input')[i]["type"];
      if (type!="button" && id != "") {
        if (type=="checkbox") {
    //      console.log(type + " " + id + " " + value);
    //      saveElement(id,value);
        } else if (type=="password") {
          value=loadElement(id,value);
          if (value != undefined) {
            document.getElementById(id).value=value;
            clog("LOADED: " + type + " " + id + " " + value );
          }
        } else {
          value=loadElement(id,value);
          if (value != undefined) {
            document.getElementById(id).value=value;
            clog("LOADED: " + type + " " + id + " " + value );
          }
        }
      }
    }
  }

  function saveElementsValues() {
   
    
    tags=document.getElementsByTagName('select');
    tags_len=document.getElementsByTagName('select').length;
    for (var i=0;i<tags_len;i+=1) {
      id=document.getElementsByTagName('select')[i]["id"];
      value=document.getElementsByTagName('select')[i]["value"];
      type="select";			      
      if (id != "") {
        clog(type + " " + id + " " + value);
        saveElement(id,value);
      }
    }
 
    tags=document.getElementsByTagName('input');
    tags_len=document.getElementsByTagName('input').length;
    for (var i=0;i<tags_len;i=i+1) { 
     id=document.getElementsByTagName('input')[i]["id"];
      type=document.getElementsByTagName('input')[i]["type"];
      value=document.getElementsByTagName('input')[i]["value"];
      if (type!="button" && id != "") {
	if (type=="checkbox") {
          clog(type + " " + id + " " + value);
          saveElement(id,value);
	} else if (type=="password") {
          value=document.getElementById(id).value;
          clog(type + " " + id + " " + value );
          saveElement(id,value);
	} else if (type=="button") {
          clog(type + " " + id + " " + value );
          saveElement(id,value);
        } else {
          clog(type + " " + id + " " + value);
          saveElement(id,value);
	}
      }
    }
  }

 function loadElementsValueFav() {
    
    var favno=document.getElementById('select_FAVORITES').value;
    console.log("Loading Favorite Number: " + favno)
    
    type="select";			      
    tags=document.getElementsByTagName(type);
    tags_len=document.getElementsByTagName(type).length;
    for (var i=0;i<tags_len;i+=1) {
      id=document.getElementsByTagName(type)[i]["id"];
      if (id != "") {
        value=loadElement("fav_"+favno+"_"+id);
        if (value != undefined) {
          setOption(id,value);
          document.getElementsByTagName(type)[i].value=value;
          clog("LOADED: " + type + " " + "fav_"+favno+"_"+id + " " + value);
        }
      }
    }
 
    tags=document.getElementsByTagName('input');
    tags_len=document.getElementsByTagName('input').length;
    for (var i=0;i<tags_len;i=i+1) { 
      id=document.getElementsByTagName('input')[i]["id"];
      type=document.getElementsByTagName('input')[i]["type"];
      if (type!="button" && id != "") {
        if (type=="checkbox") {
    //      console.log(type + " " + id + " " + value);
    //      saveElement(id,value);
        } else if (type=="password") {
          value=loadElement("fav_"+favno+"_"+id,value);
          if (value != undefined) {
            document.getElementById(id).value=value;
            clog("LOADED: " + type + " " + "fav_"+favno+"_"+id + " " + value );
          }
        } else {
          value=loadElement("fav_"+favno+id,value);
          if (value != undefined) {
            document.getElementById(id).value=value;
            clog("LOADED: " + type + " " + "fav_"+favno+"_"+id + " " + value );
          }
        }
      }
    }

    id="input_SERVERNAME_CUSTOM";
    value=loadElement("fav_"+favno+"_"+id,value);
    document.getElementById(id).value=value;
    
    id="input_PASSWORD";
    value=loadElement("fav_"+favno+"_"+id,value);
    document.getElementById(id).value=value;
    
    id="input_USERNAME";
    value=loadElement("fav_"+favno+"_"+id,value);
    document.getElementById(id).value=value;
    
    serverChange();

    changeDesign();
  }

  function saveElementsValueFav() {

    var favno=document.getElementById('select_FAVORITES').value;
    console.log("Saving Favorite Number: " + favno)
    tags=document.getElementsByTagName('select');
    tags_len=document.getElementsByTagName('select').length;
    for (var i=0;i<tags_len;i+=1) {
      id=document.getElementsByTagName('select')[i]["id"];
      value=document.getElementsByTagName('select')[i]["value"];
      type="select";			      
      if (id != "") {
        clog(type + " " + "fav_"+favno+"_"+id + " " + value);
        saveElement("fav_"+favno+"_"+id,value);
      }
    }
 
    tags=document.getElementsByTagName('input');
    tags_len=document.getElementsByTagName('input').length;
    for (var i=0;i<tags_len;i=i+1) { 
     id=document.getElementsByTagName('input')[i]["id"];
      type=document.getElementsByTagName('input')[i]["type"];
      value=document.getElementsByTagName('input')[i]["value"];
      if (type!="button" && id != "") {
	if (type=="checkbox") {
          clog(type + " " + "fav_"+favno+"_"+id + " " + value);
          saveElement("fav_"+favno+"_"+id,value);
	} else if (type=="password") {
          value=document.getElementById(id).value;
          clog(type + " " + id + " " + value );
          saveElement("fav_"+favno+"_"+id,value);
	} else if (type=="button") {
          clog(type + " " + id + " " + value );
          saveElement("fav_"+favno+"_"+id,value);
        } else {
          clog(type + " " + id + " " + value);
          saveElement("fav_"+favno+"_"+id,value);
	}
      }
    }

    id="input_SERVERNAME_CUSTOM";
    value=document.getElementById(id).value;
    saveElement("fav_"+favno+"_"+id,value);
    //el=document.getElementById("select_consoleColor");
    // el.options[el.selectedIndex].text

    //el=document.getElementById("select_consoleColor");
    //console.log(el);
    //el.value="Gray";
    //console.log(el.value);
  }

  function init() {
    //def=document.getElementById('KEYINPUT');
    //def.focus();
    //def.click();
    //def.touch();

    //toggleAutoRun();

    //connbbs=getConnHistory();
    //if (connbbs) {
    //  serverChange(connbbs); 
    //}
    //_telnetConnection = getTelnetConn();
    //console.log("Retrieved telnet Connection as " + _telnetConnection);
    //if (_telnetConnection) { 
    //  document.querySelector('#SSH').checked = false;
    //} else {
    //  document.querySelector('#SSH').checked = true;
    //}
    loadElementsValues();
    if (!getConfigRandom()) {
      setConfigRandom(1);
    }
    if (getConfigRandom()=="1") {
      document.querySelector('#checkbox_RANDOM').checked = true;
      //serverList = document.querySelector('#SERVERLIST');
      serverList = document.querySelector('#BBS_LIST');
      var bbsList = serverList.options;
      var randomBBS = Math.floor(Math.random()*bbsList.length);
      serverList.selectedIndex = randomBBS;
      serverCustom = document.querySelector('#input_SERVERNAME_CUSTOM');
      serverCustom.value=bbsList[randomBBS].value;
    }
    serverChange();
    //  getServerFromFav();
    //  //getCustomServerFromFav();
    //}

    //var autoStr01=autoStrGet('01');
    //var autoStr02=autoStrGet('02');
    //var autoStr03=autoStrGet('03');
    //var autoStr04=autoStrGet('04');
    //var as01 = document.querySelector('#AUTORUNSTR01');
    //var as02 = document.querySelector('#AUTORUNSTR02');
    //var as03 = document.querySelector('#AUTORUNSTR03');
    //var as04 = document.querySelector('#AUTORUNSTR04');
    //as01.value=autoStr01;
    //as02.value=autoStr02;
    //as03.value=autoStr03;
    //as04.value=autoStr04;

    //if (!getStorageProxy()) {
    //  serverList = document.querySelector('#PROXYLIST');
    //  proxyChange('bbshub.org');
    //  //proxyChange('127.0.0.1');
    //} else {
    //  val = getStorageProxy();
    //  document.querySelector('#PROXY').value = val;
    //  proxyChange(val);
    //}
    ////fTelnet._Options.ForceWss = false;
    //fullScreen = 0;
    //fTelnet._Crt._AllowDynamicFontResize=false;
    //fTelnet._Options.LocalEcho = true;

    //lf = getFontHistory();
    ////console.log('LF INIT ' + lf);
    //if (!lf) {
    //  fontChange(['CP437_4x8',0]);
    //} else {
    //  //fontChange(lf); // HERE
    //}

    //var s = document.querySelector('#input_SERVERNAME_CUSTOM');
    //s.focus();
    //s.click();

    //fTelnet._MenuButton.style.color = '#424242';
    //fTelnet._StatusBarLabel.style.color = '#424242';
    //fTelnet._ConnectButton.style.color = '#424242';
 
    //_sshUserName = getUserName();
    //_sshPassword = getPassword();
    //userNameChange(_sshUserName);
    //passwordChange(_sshPassword);

    //var items = [ "MOBILESUP" , "CONFIG"];
    //items.forEach(toggleVisibility);

    //toggleFullScreen();
    //secrGet(); 
    changeDesign();
    var cb=document.getElementById("connectButton")
    cb.accessKey="g";
    var cb=document.getElementById("ZMDownButton")
    cb.accessKey="z";
 }

 function getFontChange(val) {
   var item = document.querySelector('#FONT').value;
   //console.log('adding font : ' + item);
   addToFontHistory(item);
   //console.log(item);
 }

 function addServerToFav() {
   var item = document.querySelector('#input_SERVERNAME_CUSTOM').value;
   addToConnHistory(item);
   console.log(item);
 }

 /*
 function getCustomServerFromFav() {
   var item = getCustomConn();
   var servername = document.querySelector('#input_SERVERNAME_CUSTOM').value;
   document.getElementById('input_SERVERNAME_CUSTOM').value = item;
   serverChange(item);
 }
 */

 function getServerFromFav() {
   var item = getConnHistory();
   var servername = document.querySelector('#input_SERVERNAME_CUSTOM').value;
   document.getElementById('input_SERVERNAME_CUSTOM').value = item;
   serverChange();
   //console.log(item);
 }

 function enterTheNotes() {
   getNotesContent();
   document.querySelector('#input_NOTES').cols=40;
   document.querySelector('#input_NOTES').rows=12;
 }

 function exitTheNotes() {
   saveNotesContent();
   document.querySelector('#input_NOTES').cols=40;
   document.querySelector('#input_NOTES').rows=1;
 }

 function getNotesContent() {
   //var s = document.getElementById('input_SERVERNAME_CUSTOM').value;
   //var notes = localStorage.getItem(s+'Notes');
   //if (!notes) {
   //  document.querySelector('#input_NOTES').value = '';
   //} else {
   //  document.querySelector('#input_NOTES').value = notes;
   //}
   //console.log("key: " + s + " value: " + item);
 }

 //function setTelnetConn(value) {
 //  localStorage.setItem('TelnetConn',value);
 //  console.log("Changed Telnet Conn to " + value);
 //}

 function getTelnetConn() {
   isSSH=document.querySelector('#checkbox_SSH').checked;
   if (isSSH) {
      _telnetConnection = false;
   } else {
      _telnetConnection = true; 
   }
 }

 function setConfigRandom(value) {
   //var item = document.querySelector('#checkbox_RANDOM').value;
   localStorage.setItem('ConfigRandom',value);
   //console.log(item);
 }

 function getConfigRandom() {
   val = localStorage.getItem('ConfigRandom');
   return(val);
 }


 function saveNotesContent() {
   var item = document.querySelector('#input_NOTES').value;
   var s = document.getElementById('input_SERVERNAME_CUSTOM').value;
   localStorage.setItem(s+'Notes',item);
   //console.log("key: " + s + " value: " + item);
 }


 //= 'Go!';


 function configHideAll() {        
   var items = [ "MOBILESUP", "OTP", "ADDRESS", "AutoRun", "NOTESDIV", "CONFIG", "terminalStyle" ];
   items.forEach(visibilityHide);
 }

 function toggleFullScreen() {        

     fTelnet._MenuButton.style.color = '#424242';
     fTelnet._StatusBarLabel.style.color = '#424242';
     fTelnet._ConnectButton.style.color = '#424242';

     var itemMobile = document.querySelector('#MOBILESUP');
     var itemConfig = document.querySelector('#CONFIG');
     if (itemMobile.style.display=="none") {
       toggleVisibility("MOBILESUP");
     } else {
       //if (itemConfig.style.display!="none") {
       //  toggleVisibility("CONFIG");
       //}
       //toggleVisibility("MOBILESUP");
     }
 }

  function fadeInButton(id) {
    newColor="#505050";
    newBgColor="#000000";
    elem=document.getElementById(id);
    if (elem!=null) {
      elem.style.color=newColor;
      elem.style.backgroundColor=newBgColor;
    }
    elems=document.getElementsByClassName(id);
    if (elems!=null) {
      for (var i=0;i<elems.length;i++) {
        elems[i].style.color=newColor;
        elems[i].style.backgroundColor=newBgColor;
      }
    }
  }

  function highlightButton(id) {
    newColor="#EDEDED";
    newBgColor="#040404";
    elem=document.getElementById(id);
    if (elem!=null) {
      elem.style.color=newColor;
      elem.style.backgroundColor=newBgColor;
    }
  }	  

  function fadeOutButton(id) {
    newColor="#101010";
    newBgColor="#000000";
    elem=document.getElementById(id);
    if (elem!=null) {
      elem.style.color=newColor;
      elem.style.backgroundColor=newBgColor;
    }
    elems=document.getElementsByClassName(id);
    if (elems!=null) {
      for (var i=0;i<elems.length;i++) {
        elems[i].style.color=newColor;
        elems[i].style.backgroundColor=newBgColor;
      }
    }
  }

  function dimHoverOut(item) {
    var items = [ 
      "changeDesign", 
      "fTelnetDimButton", 
      "fTelnetConnectButton", 
      "fTelnetCustomButton", 
      "fTelnetMenuButton",
      "fTelnetStatusBarLabel" 
    ];
    items.forEach(fadeOutButton);
    k=document.getElementById("KEYINPUT")
    k.style.border="none";
    k.style.borderColor="#AAAAAA";
  }

  function fullScreenHoverOut(item) {
    var items = [ 
      "changeDesign", 
      "fTelnetConnectButton", 
      "fTelnetCustomButton", 
      "fTelnetMenuButton",
      "fTelnetStatusBarLabel" 
    ];
    items.forEach(fadeOutButton);
    k=document.getElementById("KEYINPUT")
    k.style.border="none";
    k.style.borderColor="#AAAAAA";
  }

  function fullScreenHoverIn(item) {
    var items = [ 
      "changeDesign", 
      "fTelnetDimButton", 
      "fTelnetConnectButton", 
      "fTelnetCustomButton", 
      "fTelnetMenuButton",
      "fTelnetStatusBarLabel" 
    ];
    items.forEach(fadeInButton);
    highlightButton(item.id);
    k=document.getElementById("KEYINPUT")
    k.style.border="solid";
    k.style.borderWidth="1px";
    k.style.borderColor="#DDDDDD";
     //if (item.id == "CONFIGBTN") {
    //  toggleConfig();
    //}
  }
  
  function resetAddress() {
    var s = document.querySelector('#input_SERVERNAME_CUSTOM');
    s.value="";
    serverChange("");
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    //return new Promise(setTimeout(resolve, ms));
  }

  function sleepFor(duration) {
    var now = new Date().getTime();
    while(new Date().getTime() < now + duration) {
      // sleep
    }
  }

  async function sendSpace() {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.SPACE, KeyboardKeys.SPACE, false, false, false);
    await sleep(500);
  }
 
  async function sendEnter() {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.ENTER, KeyboardKeys.ENTER, false, false, false);
    await sleep(500);
  }
   
  async function sendKey(char) {
    await fTelnet._Crt.PushKeyPress(char.charCodeAt(0),0,false,false,false); 
    await sleep(421);
  }

  async function sendKeystrokes(str) {
    for (var x=0; x<str.length; x++) {
      if (str.charAt(x)==' ') {
        await sendSpace();
      } else {
        await sendKey(str.charAt(x)); 
      }
    }
  }

  async function executeAutoRun() {
    var as01 = document.querySelector('#AUTORUNSTR01').value;
    var as02 = document.querySelector('#AUTORUNSTR02').value;
    var as03 = document.querySelector('#AUTORUNSTR03').value;
    var as04 = document.querySelector('#AUTORUNSTR04').value;

    if (as01!='') {
      await sendKeystrokes(as01); await sendEnter();
    }
    if (as02!='') {
      await sendKeystrokes(as02); await sendEnter();
    }
    if (as03!='') {
      await sendKeystrokes(as03); await sendEnter();
    }
    if (as04!='') {
      if (as04=='#ZMODEM') {
        await fTelnet.ZDownload();
      } else {
        await sendKeystrokes(as04); await sendEnter();
      }
    }
  }

  async function testScript() {
    //await sendEnter();
    await sendKeystrokes('y');
    await sendKeystrokes('d');
    await sendKeystrokes('data_file.txt');
    await sendEnter();
    await sendKeystrokes('y z s');
    await sendKeystrokes('s');
    await sendEnter();
    await sendEnter();
    await fTelnet.ZDownload();
  }

  async function readScreen() {
    var msg = new SpeechSynthesisUtterance('Hello World');
    window.speechSynthesis.speak(msg); 
  }

  function fontChange() {
   font=document.getElementById("select_consoleFont").value;
   ftCons.style.fontFamily=font;
   //console.log('Font changed to: ' + font);
 }
 function fontColorChange() {
   val=document.getElementById("select_consoleColor").value;
   ftCons.style.color=val;
   //console.log('Font changed to: ' + font);
 }

var keyinp=document.getElementById('KEYINPUT');

keyinp.onkeyup = function(event) {
  event.preventDefault(); 
  var key = event.key;
  var keych = key.charCodeAt(0);
  if (key=='ArrowLeft') { // Arrow Left
    fTelnet._Crt.PushKeyDown(KeyboardKeys.LEFT, KeyboardKeys.LEFT, false, false, false);
  } else if (key=='ArrowRight') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.RIGHT, KeyboardKeys.RIGHT, false, false, false);
  } else if (key=='ArrowUp') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.UP, KeyboardKeys.UP, false, false, false);
  } else if (key=='ArrowDown') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.DOWN, KeyboardKeys.DOWN, false, false, false);
  } else if (key=='PageUp') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.PAGE_UP, KeyboardKeys.PAGE_UP, false, false, false);
  } else if (key=='PageDown') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.PAGE_DOWN, KeyboardKeys.PAGE_DOWN, false, false, false);
  } else if (key=='Home') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.HOME, KeyboardKeys.HOME, false, false, false);
  } else if (key=='End') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.END, KeyboardKeys.END, false, false, false);
  } else if (key=='Backspace') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.BACKSPACE, KeyboardKeys.BACKSPACE, false, false, false);
  } else if (key=='Enter') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.ENTER, KeyboardKeys.ENTER, false, false, false);
  } else if (key=='Escape') {
    fTelnet._Crt.PushKeyDown(KeyboardKeys.ESCAPE, KeyboardKeys.ESCAPE, false, false, false);
  } else {
    keych = keyinp.value;
    keyv = keyinp.value.charCodeAt(0);
    if ((event.ctrlKey || event.ctrlMetaKey) && (key >= 'a' && key <= 'Z')) {
      fTelnet._Crt.PushKeyPress(keyv,0,true,false,false); // CTRL Pressed Key
    //} else if ((event.altKey) && (key >= 'a' && key <= 'Z')) {
     // fTelnet._Crt.PushKeyPress(keyv,0,false,true,false); // CTRL Pressed Key
    //} else if (key >= "0" && key <= "9") {
    //  fTelnet._Crt.PushKeyPress(keyv,0,false,false,false);
    } else if (keyv==32) {
      fTelnet._Crt.PushKeyDown(KeyboardKeys.SPACE, KeyboardKeys.SPACE, false, false, false);
    } else {
      fTelnet._Crt.PushKeyPress(keyv,0,false,false,false);
    }
    keyinp.value="";
  }
  //console.log('onKeyUp: ' + key + ' inp ' + keyv + ' ' + keych); //BH
};

mouseStatus = 0;

ftCons.addEventListener('dblclick', function (evt) {
  toggleMouse();
});

function toggleMouse() {
  if (mouseStatus == 0) {
    ftCons.style.cursor = "none";
    mouseStatus = 1;
  } else if (mouseStatus == 1) {
    ftCons.style.cursor = "auto";
    mouseStatus = 0;
  }
}
