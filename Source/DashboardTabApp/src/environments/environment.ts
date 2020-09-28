export const environment = {
    production: false,
    apiBaseUrl: "https://Qbottesting.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "7fbbd0a2-8b5a-446c-b301-6a6b1a01202a",
        clientId: "0bf84831-de5e-4a32-aa20-1058b31da7b1",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
