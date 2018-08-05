(function(window) {
    "use strict"

    function MailgunProvider(options) {
        this._options = options;
    };

    MailgunProvider.prototype.request = function(address, callback) {
        if (window.jQuery) {
            window.jQuery.ajax({
                type: 'GET',
                url: 'https://api.mailgun.net/v2/address/validate?callback=?',
                data: { address: address, api_key: this._options.key },
                dataType: 'jsonp',
                crossDomain: true,
                success: function(data, status) {
                    return callback(null, {
                        isValid: data.is_valid,
                        message: (data.did_you_mean ? 'Did you mean '+data.did_you_mean+'?' : (data.is_valid ? 'Address is good!' : 'Invalid address!'))
                    })
                },
                error: function(request, status, error) {
                    return callback(error);
                }
            });
        } else {
            return callback('');
        }
    };

    window.MailgunProvider = MailgunProvider;

})(window);