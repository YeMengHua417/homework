(function (window,undefined) {
    function popModal( opt ){
       this.opt = opt || {};
    };


    popModal.prototype.show = function () {

        var modalHTML="<div class='md-modal'>"+
            "<div class='dialog-box'>"+
            "<div class='tri'></div>"+
            "<div class='close'>"+
            "<i class='icon icon-close' id='icon-close'></i>"+
            "</div>"+
            "<div class='illustrate'>Separate multiple resource name with commas</div>"+
             "<input class='resource-input'>"+
            "<div class='btn-group'>"+
            "<button class='btn-add-resource'>Add Resource</button><button class='btn-cancle'>Cancle</button>"+
            "</div>"+
            "</div>"+
        "</div>";

        // var parentNode = document.getElementById(this.opt.parentId);

        var parentNode = this.opt.parentNode;

        var modal =document.createElement("div");
        modal.innerHTML = modalHTML;

        parentNode.appendChild(modal);

        // Event.addEvent(document.querySelector(".md-modal"),'click',function (event) {
        //     var ev =Event.getEvent(event);
        //     Event.stopPropagation(ev);
        // });

        Event.addEvent(document.querySelector(".md-modal .icon-close"),'click',function (event) {
            parentNode.removeChild(modal);
        });

        Event.addEvent(document.querySelector(".md-modal .btn-cancle"),'click',function (event) {
            parentNode.removeChild(modal);
        });


        function getNextElement(element){  // ie6的一些bug
            var e = element.nextSibling;
            if(e == null){//测试同胞节点是否存在，否则返回空
                return null;
            }
            if(e.nodeType==3){//如果同胞元素为文本节点
                var two = getNextElement(e);
                if(two.nodeType == 1)
                    return two;
            }else{
                if(e.nodeType == 1){//确认节点为元素节点才返回
                    return e;
                }else{
                    return false;
                }
            }
        }


        Event.addEvent(document.querySelector(".md-modal .btn-add-resource"),'click',function (event) {

            var text = modal.querySelector(".resource-input").value;

            if(text == ""){
                return;
            }

            var resourceArr = text.split(",");

            for(var index = 0;index < resourceArr.length;index++){
                var resoureHTML = "<span>"+resourceArr[index]+"</span>" +
                    "<i class='icon icon-trash'></i>"
                var resource = document.createElement("li");
                resource.innerHTML = resoureHTML;
                resource.setAttribute("class","browser-type");

                getNextElement(modal.parentNode.parentNode).appendChild(resource)

            }

            parentNode.removeChild(modal);
        });



    };

    var modal={
        'popModal':popModal
    };

    window.modal = modal;

})(window,undefined);

// function show_popModal( parentId ){
//     var Opop = new modal.popModal({'parentId':parentId});
//     return Opop.show();
// };
function show_popModal( parentNode ){
    var Opop = new modal.popModal({'parentNode':parentNode});
    return Opop.show();
};