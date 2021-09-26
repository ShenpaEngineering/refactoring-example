$(function() {
    var entryList = [];
    function addToRow(entryList){
        rowHtml = ""
        entryList.map(function(entry){
            console.log($('table'))
            rowHtml = rowHtml + "<tr><td>" + entry.fullname + "</td><td>" + entry.email + "</td><td>" +  entry.status + "</td></tr>"
        })
        $('table tbody').html(rowHtml)
    }
    $('#entryForm').submit(function(evt){
        evt.preventDefault()
        console.log(evt)
        let fname = $('#entryForm input[name="fullname"]').val();
        let email = $('#entryForm input[name="email"]').val()
        $('.modal').addClass('is-active')
        $.get("/api", {fullname: fname, email: email })
            .then(function(res){
                console.log(res)
                $('.modal').removeClass('is-active')
                entryList.push(res)
                addToRow(entryList)

            })
            .catch(function(err){
                console.log(err)
            })
    })
});