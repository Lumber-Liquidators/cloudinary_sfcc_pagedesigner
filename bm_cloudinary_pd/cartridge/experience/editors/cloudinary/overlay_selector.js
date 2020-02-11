'use strict';

var cloudinaryAPI = require('~/cartridge/scripts/cloudinary/cloudinary_api');

module.exports.init = function (editor) {
    var jsonString = JSON.stringify(cloudinaryAPI.getImageJSON());

    editor.configuration.put('fileData', jsonString);
};
