/* eslint-disable key-spacing, no-multi-spaces */
export const elevation = {
  critical: 8000, // must not be blocked, except by sentry
  modal: 7000, // The box on top of the modal overlay
  modalOverlay: 6000, // Cover the entire screen
  alert: 5000, // an alert, message, or notification
  dropdown: 4000, // a dropdown menu
  header: 3000, // window header
  footer: 2000, // window footer
  bodyLift: 1000, // Just a nudge above the body z-index
  body: 0,    // the base elevation of the app
};
