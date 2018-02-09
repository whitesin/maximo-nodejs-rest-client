'use strict';
module.exports = ResourceObject;

var ResourceSet = require('./resourceset');



/**
 * Business object for Maximo OSLC API
 * @param maxfactory
 * @param mbo
 * @returns {ResourceSet}
 * @constructor
 */
function ResourceObject(maxfactory,mbo)
{
 	//Return a Zombie set.
 	var cookie = maxfactory.isCookieSet ? maxfactory.cookie["set-cookie"] : null;
 	return new ResourceSet(null,cookie,maxfactory,mbo);
};

/**
 *
 * @returns {*}
 */
ResourceObject.prototype.name = function()
{
    return this.mbo;
};
