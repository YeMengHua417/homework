(function (window,undefined) {
    function popModal( opt ){
       this.opt = opt || {};
    };

    popModal.prototype.show = function (parentId) {

        var modalHTML="<div class='md-modal'>"+
            "<div class='dialog-bo'>"+
            "<div class='tri'></div>"+
            "<div class='close'>"+
            "<i class='icon icon-close'></i>"+
            "</div>"+
            "<div>Separate multiple resource name with commas</div>"+
             "<input class='resource-input'>"+
            "<div>"+
            "<button class='btn-add-resource'>Add Resource</button><button class='btn-cancle'>Cancle</button>"+
            "</div>"+
            "</div>"+
        "</div>"

        var parentNode = document.getElementById("parentId");
        var modal =document.createElement(modalHTML);

        modal.style.display = 'block';



        parentNode.appendChild(modal);

        var close= modal.querySelector('close');
        var addResourceBtn=modal.querySelector('btn-add-resource');
        var cancleBtn=modal.querySelector('btn-cancle');


        close.addEventListener('onclick',function () {
            parentNode.removeChild(modal);
        })

    }

    var modal={
        'popModal':popModal
    }

    window.modal = modal;

})(window,undefined);

function show_popModal( parentId ){
    var Opop = new modal.popModal();
    return Opop.show(parentId);
};