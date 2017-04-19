/**
 * @class           module:azure-iot-device.deviceMethod.DeviceMethodRequest
 * @classdesc       `DeviceMethodRequest` is a class that captures the data
 *                  passed in from the service when a device method call is
 *                  made. An instance of this class is passed as the second
 *                  parameter to the callback registered via the
 *                  {@link module:azure-iot-device.Client#onDeviceMethod} method.
 * @param {String}  requestId         The request identifier supplied by the
 *                                    service for this device method call.
 * @param {String}  methodName        The name of the method to be called.
 * @param {Buffer}  body              A Node `Buffer` representing the payload
 *                                    of the method call request.
 */
export declare class DeviceMethodRequest {
    requestId: string;
    methodName: string;
    payload: any;
    constructor(requestId: string, methodName: string, body: any);
}
