// Inline icons — no icon library needed. All inherit currentColor.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
  className: "i",
};

export const MenuIcon = () => (
  <svg {...base}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = () => (
  <svg {...base}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ArrowIcon = () => (
  <svg {...base} strokeWidth={2.4}>
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export const ExternalIcon = () => (
  <svg {...base}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

export const CalendarIcon = () => (
  <svg {...base}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const CheckIcon = () => (
  <svg {...base} strokeWidth={2.6}>
    <path d="M5 12.5l4.2 4.2L19 7" />
  </svg>
);

// ── The five elements + tech ────────────────────────────────────────────
export const ElementIcon = ({ id }) => {
  switch (id) {
    case "prithvi":
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M5 9.5c2.5.5 3.5 2 3 4s1.5 3 3 3.5M14 3.8c-.5 2 .5 3.2 2.3 3.4 1.6.2 2.6 1.4 2.7 3" />
        </svg>
      );
    case "agni":
      return (
        <svg {...base}>
          <path d="M12 3c.8 3 4.5 5 4.5 10a4.5 4.5 0 0 1-9 0c0-2.4 1.2-3.8 2.2-4.8.2 1.8 1 2.8 2.1 3-.6-3.1-.6-5.5.2-8.2z" />
        </svg>
      );
    case "jal":
      return (
        <svg {...base}>
          <path d="M12 3.2c3 4 6 7.2 6 10.8a6 6 0 0 1-12 0c0-3.6 3-6.8 6-10.8z" />
          <path d="M9 14.5a3 3 0 0 0 3 3" />
        </svg>
      );
    case "aakash":
      return (
        <svg {...base}>
          <path d="M7 18.5h10a3.5 3.5 0 0 0 .3-7A5.5 5.5 0 0 0 6.6 12 3.3 3.3 0 0 0 7 18.5z" />
          <path d="M16 3.5a3.5 3.5 0 0 0 4.5 4.5" />
        </svg>
      );
    case "vayu":
      return (
        <svg {...base}>
          <path d="M3 8.5h10.5a2.75 2.75 0 1 0-2.75-2.75M3 12.5h15a3 3 0 1 1-3 3M3 16.5h6" />
        </svg>
      );
    default:
      return (
        <svg {...base}>
          <rect x="4" y="5" width="16" height="10.5" rx="1.5" />
          <path d="M2.5 19h19M9 10.2l1.8 1.8L15 8" />
        </svg>
      );
  }
};

// ── Socials ─────────────────────────────────────────────────────────────
export const SocialIcon = ({ name }) => {
  switch (name) {
    case "instagram":
      return (
        <svg {...base}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...base}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
          <path d="M8 10.5V16M8 7.6v.1M11.5 16v-5.5M11.5 13c0-1.6 1-2.6 2.4-2.6S16 11.3 16 13v3" />
        </svg>
      );
    case "github":
      return (
        <svg {...base}>
          <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.4a3 3 0 0 0-.8-2.3c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.2 5.6 2.5 5.6 2.5a4.5 4.5 0 0 0-.1 3.3 4.8 4.8 0 0 0-1.3 3.3c0 4.8 3 5.9 5.8 6.2a3 3 0 0 0-.8 2.3V21" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...base}>
          <path d="M4 20l1.3-3.8A8 8 0 1 1 8 19l-4 1z" />
          <path d="M9.2 8.8c0 3 2.6 5.8 5.8 6l1-1.4-1.8-1-1 .8a4 4 0 0 1-2-2l.8-1-1-1.8z" />
        </svg>
      );
    default:
      return <ExternalIcon />;
  }
};
