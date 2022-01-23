function changeContactFormSubmittedModalUi() {
    const contactinfoSubmitted = document.getElementById('contactinfoSubmitted')
    contactinfoSubmitted.innerHTML = '<div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="contactInformationSubmittedTitle">Contact Information Submitted Successfully </h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body" id="modal-body-contact"> <div class="container" id="contactInformationSubmittedInnerContent"> <div class="card" style="width: 100%;"> <img src="../../assets/images/get-in-touch.png" class="card-img-top" id="get-in-touch" alt="img" onContextMenu="return false;"> <div class="card-body"> <h5 class="card-text">Thanks For Giving Your Precious Time To Us. Get In Touch. You Will Recive All Latest Updates In Your Email.</h5> </div> </div> </div> </div> <div class="container" id="contactInformationSubmittedFooter"> <div class="modal-footer"> <button type="button" class="btn btn-success btn-lg" data-bs-dismiss="modal">Ok</button> </div> </div> </div></div>'
}

function progressBarMove() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progressBarLoading");
        var width = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
            setTimeout(function () {
                changeContactFormSubmittedModalUi()
            }, 2900)
        }
    }
}

function formSubmit() {
    submitted = true;
    const contactinfoSubmitted = document.getElementById('contactinfoSubmitted')
    contactinfoSubmitted.innerHTML = '<div class="modal-dialog modal-xl"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="contactInformationSubmittedTitle">Processing ...</h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body" id="modal-body-contact"> <div class="container" id="contactInformationSubmittedInnerContent"> <div class="container" id="loadingMsg"><div class="container" id="loadingHeader"><h4>Please Wait Sir. We Are Submitting Your Contact Information.....</h4></div><br><div class="container"><div class="container"><div class="container"><hr></div></div></div></div><br><div class="cotainer"><div class="progress hg-30"><div class="hg-30 fs-20 progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" id="progressBarLoading" aria-valuemin="0" aria-valuemax="100" style="width: 0%">0%</div></div></div><br> </div> </div> </div> </div> </div>'
    document.getElementById("contactinfoSubmittedBtn").click();
    setTimeout(function () {
        progressBarMove();
    })
}
function showAlert(id, type, label, icon, message, link, linkedText, afterLinkText) {
    var alertPlaceholder = document.getElementById(id)
    var wrapper = document.createElement('div')
    const template = '<div class="alert alert-' + type + ' alert-dismissible fade show d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="' + label + '"><use xlink:href="' + icon + '" /></svg><div>' + message + '<a href="' + link + '" class="alert-link">' + linkedText + '</a>' + afterLinkText + '</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    wrapper.innerHTML = template
    alertPlaceholder.append(wrapper)
}