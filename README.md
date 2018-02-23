jFileUpload
===========

Similar to jSelect, jFileUpload is a nice UI for file upload fields on forms. It includes some animations with nice mouse interactions and keeps a clear indicator of the file that the user has uploaded.

### HTML Markup

```
<div class="form-group">
    <input type="file" id="myFileUpload" name="myFileUpload" class="file-uploader" /> 
</div>
```

### JavaScript Initialisation

```
$('input[type=file]').jFileUpload(); // Without custom options

$('input[type=file]').jFileUpload({ // With custom options 
    placeholderText: 'Choose a file' 
});
```

### Plugin Options

The plugin comes with a few options that can be customised to produce the desired behaviour. . A full list of each option and what they do can be found below:

#### placeholderText

`Default: 'Select the file you wish to upload'`

Most form elements have a placeholder and jFileUpload is no exception. Normal file uploads don't show a placeholder so it make it look nicer in a form.

#### labelText

`Default: 'Select file'`

This is the text that goes into the button that can be clicked to trigger the normal file upload process. Note that the whole element is also clickable to do this.

#### removeFileText

`Default: 'Remove file'`

This is the text that goes into the remove button that appears once a file has been uploaded.