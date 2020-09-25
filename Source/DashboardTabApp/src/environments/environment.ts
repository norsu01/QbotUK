export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemouniversity.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "7fbbd0a2-8b5a-446c-b301-6a6b1a01202a",
        clientId: "bde5fdb5-1b73-4815-8661-e6c35f9b53ef",
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
