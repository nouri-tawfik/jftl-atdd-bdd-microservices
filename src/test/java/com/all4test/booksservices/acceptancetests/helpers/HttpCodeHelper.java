package com.all4test.booksservices.acceptancetests.helpers;

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

public class HttpCodeHelper {

    public static Integer getHttpCode(String httpStatusCode) {
        Integer statusCode = -1;

        switch (httpStatusCode.toUpperCase()) {
            case "OK":
                statusCode = 200;
                break;
            case "CREATED":
                statusCode = 201;
                break;
            case "ACCEPTED":
                statusCode = 202;
                break;
            case "NON-AUTHORITATIVE INFORMATION":
                statusCode = 203;
                break;
            case "NO CONTENT":
                statusCode = 204;
                break;
            case "RESET CONTENT":
                statusCode = 205;
                break;
            case "BAD REQUEST":
                statusCode = 400;
                break;
            case "UNAUTHORIZED":
                statusCode = 401;
                break;
            case "PAYMENT REQUIRED":
                statusCode = 402;
                break;
            case "FORBIDDEN":
                statusCode = 403;
                break;
            case "NOT FOUND":
                statusCode = 404;
                break;
            case "METHOD NOT ALLOWED":
                statusCode = 405;
                break;
            case "NOT ACCEPTABLE":
                statusCode = 406;
                break;

        }

        return statusCode;
    }
}
