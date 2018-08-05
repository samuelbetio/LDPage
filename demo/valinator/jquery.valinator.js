(function(window, $) {
    $.fn.valinator = function(options, callback) {
        var provider;
        if (typeof options.provider == 'object' && options.provider.name != 'undefined') {
            if (options.provider.name == 'mailgun') {
                provider = new MailgunProvider(options.provider.options);
            }
        } else {
            provider = options.provider;
        }
        return this.each(function() {
            $(this).focusout(function() {
                var address = $(this).val();
                if (address == '') return;
                new Valinator({ address: address, provider: provider }, callback).validate();
            });
        });
    };
})(window, jQuery);