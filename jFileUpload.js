(function($) {
    "use strict";

    $.jFileUpload = function(element, options) {

        var self = this;

        this.init = function() {

            self = this;
            this.elem = element;
            this.$elem = $(element);
            this.elementId = this.$elem.attr('id');
            this.settings = $.extend(true, {}, $.jFileUpload.defaults, options);

            buildMarkup();

            this.settings.parent = this.$elem.parent('.jFileUpload');
            this.settings.fileName = $('.file-name', this.settings.parent);
            this.settings.removeFileButton = $('.remove-file', this.settings.parent);
        };

        this.showAddedFile = function(event) {
            var filename = event.target.value.split('\\').pop();

            if (filename.length === 0) {
                return;
            }

            $('.file-name', self.settings.parent).addClass('selected').text(filename);
            showRemoveButton();
        };

        this.removeFile = function(ev) {
            self.$elem[0].value = '';
            self.$elem[0].type = '';

            self.settings.parent.find('.file-name').removeClass('selected').text(self.settings.placeholderText);

            self.settings.parent.find('.remove-file').animate({
                right: '-100px'
            }, 500);

            self.$elem.val(null).trigger('change');
            self.$elem[0].type = 'file';

            ev.preventDefault();
            return false;
        };

        var buildMarkup = function() {

            self.$elem.wrap('<div class="jFileUpload file-upload-container" />');
            self.$elem.addClass('file-uploader');

            var $parent = self.$elem.parent('.jFileUpload');
            $parent.append('<label />');

            $('label', $parent).attr('for', self.elementId)
            $('label', $parent).append('<span class="file-name" />');
            $('label', $parent).append('<span class="file-upload-btn" />');
            $('label', $parent).append('<span class="remove-file" />');

            $('.file-name', $parent).text(self.settings.placeholderText);
            $('.file-upload-btn', $parent).text(self.settings.labelText)
            $('.remove-file', $parent).text(self.settings.removeFileText);
        };

        var showRemoveButton = function() {
            var chooseFileBtnWidth = $('.file-upload-btn', self.settings.parent).outerWidth();
            $('.remove-file', self.settings.parent).show().animate({
                right: chooseFileBtnWidth
            }, 500);
        };
    };

    $.fn.jFileUpload = function(options) {

        return this.each(function() {

            var jFileUpload = new $.jFileUpload(this, options);
            $(this).data('jFileUpload', jFileUpload);

            jFileUpload.init();
            jFileUpload.$elem.on('change', jFileUpload.showAddedFile);
            jFileUpload.settings.removeFileButton.click(jFileUpload.removeFile);
        });
    };

    $.jFileUpload.defaults = {
        parent: null,
        fileName: null,
        removeFileButton: null,
        placeholderText: 'Select the file you wish to upload',
        labelText: 'Select file',
        removeFileText: 'Remove file'
    };

})(jQuery);