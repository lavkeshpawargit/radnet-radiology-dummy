import { useEffect } from "react";

declare global {
  interface Window {
    embeddedservice_bootstrap?: {
      settings: {
        language: string;
      };
      init: (
        orgId: string,
        deploymentName: string,
        siteURL: string,
        options: {
          scrt2URL: string;
        },
      ) => void;
      prechatAPI: {
        setVisiblePrechatFields: (fields: Record<string, { value: string }>) => void;
        setHiddenPrechatFields: (fields: Record<string, string>) => void;
      };
    };
  }
}

const SALESFORCE_SCRIPT =
  "https://radnetprm--intfull.sandbox.my.site.com/ESWCustomMessagingForInAp1762357821483/assets/js/bootstrap.min.js";

export function SalesforceChat() {
  useEffect(() => {
    // Salesforce has already been loaded.
    if (window.embeddedservice_bootstrap) {
      return;
    }

    const handleMessagingReady = () => {
      try {
        const esw = window.embeddedservice_bootstrap;

        if (!esw) {
          return;
        }

        esw.prechatAPI.setVisiblePrechatFields({
          WebsiteURL: {
            value: "https://www.advancedradiology.com",
          }
        });

        esw.prechatAPI.setHiddenPrechatFields({
          "Site URL": window.location.href,
        });
      } catch (error) {
        console.error("Failed to set Salesforce pre-chat fields:", error);
      }
    };

    const initEmbeddedMessaging = () => {
      try {
        const esw = window.embeddedservice_bootstrap;

        if (!esw) {
          console.error("Salesforce Embedded Messaging did not load.");
          return;
        }

        esw.settings.language = "en_US";

        esw.init(
          "00DVG000009bmq5",
          "CustomMessagingForInAppandWeb",
          "https://radnetprm--intfull.sandbox.my.site.com/ESWCustomMessagingForInAp1762357821483",
          {
            scrt2URL:
              "https://radnetprm--intfull.sandbox.my.salesforce-scrt.com",
          },
        );
      } catch (error) {
        console.error("Error loading Salesforce Embedded Messaging:", error);
      }
    };

    window.addEventListener(
      "onEmbeddedMessagingReady",
      handleMessagingReady,
    );

    const existingScript = document.querySelector(
      `script[src="${SALESFORCE_SCRIPT}"]`,
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.src = SALESFORCE_SCRIPT;
      script.onload = initEmbeddedMessaging;

      document.body.appendChild(script);
    }

    return () => {
      window.removeEventListener(
        "onEmbeddedMessagingReady",
        handleMessagingReady,
      );
    };
  }, []);

  return null;
}
