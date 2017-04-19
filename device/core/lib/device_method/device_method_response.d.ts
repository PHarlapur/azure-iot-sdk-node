/**
 * @class           module:azure-iot-device.deviceMethod.DeviceMethodResponse
 * @classdesc       `DeviceMethodResponse` provides functionality that allows
 *                  a device method implementation to construct and send a
 *                  response back to the service for a device method call. An
 *                  instance of this class is passed as the second parameter
 *                  to the callback registered via the
 *                  {@link module:azure-iot-device.Client#onDeviceMethod} method.
 *                  method.
 * @param {String}  requestId         The request identifier supplied by the
 *                                    service for this device method call.
 * @param {Object}  transport         An object that implements the interface
 *                                    expected of a transport object, e.g.,
 *                                    {@link module:azure-iot-device~Http|Http}.
 */
export declare class DeviceMethodResponse {
    requestId: string;
    isResponseComplete: boolean;
    status: number;
    payload: any;
    private _transport;
    constructor(requestId: string, transport: any);
    /**
     * @method            module:azure-iot-device.deviceMethod.DeviceMethodResponse#send
     * @description       Sends the device method's response back to the service via
     *                    the underlying transport object using the status parameter
     *                    as the status of the method call.
     *
     * @param {Number}    status      A numeric status code to be sent back to the
     *                                service.
     * @param {Object}    payload     [optional] The payload of the method response.
     * @param {Function}  done        [optional] A callback function which will be
     *                                called once the response has been sent back to
     *                                the service. An error object is passed as an
     *                                argument to the function in case an error
     *                                occurs.
     *
     * @throws {ReferenceError}       If the `status` parameter is not a number.
     * @throws {Error}                If this response has already been sent to the
     *                                service in a previous call to it. This method
     *                                should be called only once.
     */
    send(status: number, payload: any, done?: (err?: Error, result?: any) => void): void;
}
