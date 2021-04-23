if ($('#dropzone').length) {
    $("form#dropzone").dropzone({ url: "/file/post" });
    // other code here
  }


function upload(file) {
    console.log(file)
    var form = new FormData();
    form.append("file", file, file.name);

    var settings = {
        "url": "https://staging-upload.gapo.vn/media/v1.0/internal-files",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "x-gapo-role": "service"
        },
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
