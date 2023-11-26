exports.removeHeaders = (win) => {
  win.webContents.session.webRequest.onHeadersReceived(
    { urls: ["*://*/*"] },
    (d, c) => {
      for (const header of Object.keys(d.responseHeaders)) {
        //
        // Remove X-Frame-Options
        //
        if (header.toLowerCase() === "x-frame-options") {
          delete d.responseHeaders[header];
        }

        //
        // Remove Content-Security-Policy
        //
        if (header.toLowerCase() === "content-security-policy") {
          delete d.responseHeaders[header];
        }
      }

    //   logRequest(d);
      c({ cancel: false, responseHeaders: d.responseHeaders });
    }
  );
};

const logRequest = (d) => {
  console.log(`--------------------------->
    
    url: ${d.url}
    referrer: ${d.referrer}
  
    remaining headers:
    ${JSON.stringify(d.responseHeaders, null, 2)}
    
    
    `);
};
