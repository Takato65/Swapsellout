import './style.css'
var canvas = document.querySelector("#unity-canvas");

function unityShowBanner(msg, type) {
  var warningBanner = document.querySelector("#unity-warning");
  function updateBannerVisibility() {
    warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
  }
  var div = document.createElement('div');
  div.innerHTML = msg;
  warningBanner.appendChild(div);
  if (type == 'error') div.style = 'background: red; padding: 10px;';
  else {
    if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
    setTimeout(function() {
      warningBanner.removeChild(div);
      updateBannerVisibility();
    }, 5000);
  }
  updateBannerVisibility();
}

var buildUrl = "/.proxy/Build";
var loaderUrl = buildUrl + "/Web.loader.js";
var config = {
  arguments: [],
  dataUrl: buildUrl + "/Web.data.unityweb",
  frameworkUrl: buildUrl + "/Web.framework.js.unityweb",
  codeUrl: buildUrl + "/Web.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "TOJAM",
  productVersion: "0.1.0",
  showBanner: unityShowBanner,
};

document.querySelector("#unity-loading-bar").style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    document.querySelector("#unity-progress-bar-full").style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          document.querySelector("#unity-loading-bar").style.display = "none";
        }).catch((message) => {
          alert(message);
        });
      };

document.body.appendChild(script);
