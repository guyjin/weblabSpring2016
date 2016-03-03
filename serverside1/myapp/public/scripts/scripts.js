$(function() {
        if($('#myReasonForm')) {
            var myForm = $('#myReasonForm');
            console.log(myForm);
            myForm.on('submit', function(e) {
                    console.log($('#myReason').val());
                if($('#myReason').val() === '') {
                    e.preventDefault();
                    alert('You must enter a good reason.  Why are you awesome?');
                }
            })
        }
});
