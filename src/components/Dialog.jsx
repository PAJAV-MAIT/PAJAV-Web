import { useEffect, useRef } from "react";
import { CloseIcon } from "./Icons";

// Thin wrapper over the native <dialog>: focus trapping, Esc and the
// backdrop come from the browser.
export default function Dialog({ open, onClose, label, className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={className}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {open && (
        <div className="dialog__inner">
          <button type="button" className="dialog__close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
