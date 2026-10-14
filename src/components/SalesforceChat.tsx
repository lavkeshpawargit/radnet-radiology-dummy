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
        setVisiblePrechatFields: (
          fields: Record<string, { value: string }>,
        ) => void;
        setHiddenPrechatFields: (
          fields: Record<string, string>,
        ) => void;
      };
    };
  }
}

const SALESFORCE_SCRIPT =
  "https://radnetprm--intfull.sandbox.my.site.com/ESWCustomMessagingForInAp1762357821483/assets/js/bootstrap.min.js";

export function SalesforceChat() {
  useEffect(() => {
    let messagingReady = false;

    const handleMessagingReady = () => {
      messagingReady = true;

      const esw = window.embeddedservice_bootstrap;

      if (!esw) return;

      try {
        esw.prechatAPI.setVisiblePrechatFields({
          WebsiteURL: {
            value: "https://www.advancedradiology.com",
          },
        });

        console.log("WebsiteURL assigned on Messaging Ready.");
      } catch (error) {
        console.error(
          "Failed to set WebsiteURL:",
          error,
        );
      }
    };

    const handlePreChatSubmitted = (event: Event) => {
      if (!messagingReady) return;

      const esw = window.embeddedservice_bootstrap;

      if (!esw) return;

      const chatStartUrl = window.location.href;

      console.log("Pre-chat submitted event:", event);
      console.log("Current page URL:", chatStartUrl);

      try {
        esw.prechatAPI.setVisiblePrechatFields({
          PortalSiteURL: {
            value: chatStartUrl,
          },
        });

      } catch (error) {
        console.error(
          "Failed to set Salesforce pre-chat fields:",
          error,
        );
      }
    };

    window.addEventListener(
      "onEmbeddedMessagingReady",
      handleMessagingReady,
    );

    window.addEventListener(
      "onEmbeddedMessagingPreChatSubmitted",
      handlePreChatSubmitted,
    );

    const cleanup = () => {
      window.removeEventListener(
        "onEmbeddedMessagingReady",
        handleMessagingReady,
      );

      window.removeEventListener(
        "onEmbeddedMessagingPreChatSubmitted",
        handlePreChatSubmitted,
      );
    };

    if (window.embeddedservice_bootstrap) {
      return cleanup;
    }

    const initEmbeddedMessaging = () => {
      try {
        const esw = window.embeddedservice_bootstrap;

        if (!esw) {
          console.error(
            "Salesforce Embedded Messaging did not load.",
          );
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
        console.error(
          "Error loading Salesforce Embedded Messaging:",
          error,
        );
      }
    };

    const existingScript = document.querySelector(
      `script[src="${SALESFORCE_SCRIPT}"]`,
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.src = SALESFORCE_SCRIPT;
      script.onload = initEmbeddedMessaging;

      script.onerror = () => {
        console.error(
          "Failed to load Salesforce Messaging script.",
        );
      };

      document.body.appendChild(script);
    } else {
      existingScript.addEventListener(
        "load",
        initEmbeddedMessaging,
      );
    }

    return cleanup;
  }, []);

  return null;
}