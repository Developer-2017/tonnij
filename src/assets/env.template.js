(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["BASE_URL"] = "${BASE_URL}";
  window["env"]["ASSETS_URL"] = "${ASSETS_URL}";
  window["env"]["TICKETS_ASSETS_URL"] = "${TICKETS_ASSETS_URL}";
  window["env"]["AUTH_TOKEN"] = "${AUTH_TOKEN}";
  window["env"]["RECAPTCHA_KEY"] = "${RECAPTCHA_KEY}";
})(this);
