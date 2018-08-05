(function(window) {
    "use strict"

    function Valinator(options, callback) {
        this._options = options;
        this._callback = callback;
    };

    Valinator.prototype.validate = function validate() {
        var options = this._options;
        var callback = this._callback;

        if (options.address.length > 512) {
            return callback('Address exceeds maximum allowable length of 512.');
        }
        options.provider.request(options.address, callback);
    };

    window.Valinator = Valinator;

})(window);