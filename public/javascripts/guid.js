/**
 * Created by Christiaan on 2016-08-08.
 */

(function(exports){

    function createGUID()
    {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    exports.Create = createGUID;

}(typeof exports === 'undefined' ? this.guid = {} : exports));