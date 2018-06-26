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

        var parentNode = document.getElementById(this.opt.parentId);

        var modal =document.createElement("div");
        modal.innerHTML = modalHTML;



        parentNode.appendChild(modal);

        Event.addEvent(document.querySelector(".md-modal"),'click',function (event) {
            var ev =Event.getEvent(event);
            Event.stopPropagation(ev);
        });

        Event.addEvent(document.querySelector(".md-modal .icon-close"),'click',function (event) {
            var ev =Event.getEvent(event);
            parentNode.removeChild(modal);
            Event.stopPropagation(ev);
        });

        Event.addEvent(document.querySelector(".md-modal .btn-cancle"),'click',function (event) {
            var ev =Event.getEvent(event);
            parentNode.removeChild(modal);
            Event.stopPropagation(ev);
        });

        Event.addEvent(document.querySelector(".md-modal .btn-add-resource"),'click',function (event) {
            var ev =Event.getEvent(event);
            parentNode.removeChild(modal);
            Event.stopPropagation(ev);
        });



    };

    var modal={
        'popModal':popModal
    };

    window.modal = modal;

})(window,undefined);

function show_popModal( parentId ){
    var Opop = new modal.popModal({'parentId':parentId});
    return Opop.show();
};