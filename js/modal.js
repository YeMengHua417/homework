;(function () {

  function Modal(config) {
    // 默认参数
    this.config = {
      parentNode: null,
      width: 'auto',
      height: 'auto',
      message: '',
      buttons: null
    };

    if (config) {
      Object.assign(this.config, config); //合并
    }

    // console.log(this.config)

    var message = '';
    if (this.config.message) {
      message = "<div class='illustrate'>" + this.config.message + "</div>";
    }

    var buttonGroup = '';
    if (this.config.buttons) {
      buttonGroup = "<div class='btn-group'></div>"
    }

    var modalTempl = "<div class='md-modal'>" +
    "<div class='dialog-box'>" +
    "<div class='tri'></div>" +
    "<div class='close'>" +
    "<i class='icon icon-close' id='icon-close'></i>" +
    "</div>" +
     message +
    "<input class='resource-input'>" +
     buttonGroup +
    "</div>" +
    "</div>" +
    "<div class='mask'></div>";


    this.open(modalTempl);
  }
    
  Modal.prototype = {
    open:function (html) {

      var parentNode = this.config.parentNode;
      if(parentNode) {  // 如果有，就是挂在parentNode下面，如果没有，就是固定位置的展示
        var div = document.createElement("div");
        div.innerHTML = html;
        parentNode.appendChild(div);

      }


    }
  };
    


  window.Modal = Modal;
  
})();