import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";

interface MembersLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MembersLogin: React.FC<MembersLoginProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState<"login-username" | "login-password" | "login-code">("login-username");
  const modalInstanceRef = useRef<Modal | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalInstanceRef.current = new Modal(modalRef.current);
      if (isOpen) {
        modalInstanceRef.current.show();
      } else {
        modalInstanceRef.current.hide();
      }
    }
  }, [isOpen]);

  // ✅ Close Modal Correctly
  const handleClose = () => {
    if (modalInstanceRef.current) {
      modalInstanceRef.current.hide(); // Manually hide modal
    }
    onClose(); // Call parent close function
  };

  return (
    <div ref={modalRef} className="modal fade" tabIndex={-1} aria-hidden={!isOpen}>
      <div className="modal-dialog modal-login m-auto modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header p-3 border-0">
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
            <div className="flex-fill d-flex justify-content-center">
              <div className="d-flex align-items-center black border-dashed repeated-x bold bottom yellow pb-1 w-max style-26-lh39 --black">
                <span className="d-flex align-items-center">
                  <img src="assets/svgs/Icon feather-log-in.svg" className="me-2" /> SignIn
                </span>
                <span> / SignUp </span>
              </div>
            </div>
          </div>

          {/* Step 1: Login Username */}
          {step === "login-username" && (
            <div className="modal-body">
              <span className="style-15-lh35-n --b">Mobile Number</span>
              <input type="number" className="form-control rounded-1 mt-1 h-5 p-4" placeholder="Ex: 015200000000" />
              <div className="modal-footer py-5 border-0">
                <button className="btn public-btn --yellowBg --absoluted btn-modal" onClick={() => setStep("login-password")}>
                  <img src="assets/svgs/Icon feather-arrow-right.svg" className="me-1" />
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Login Password */}
          {step === "login-password" && (
            <div className="modal-body">
              <span className="style-15-lh35-n --b">Enter Password</span>
              <input type="password" className="form-control rounded-1 mt-1 h-5 p-4" placeholder="Your password" />
              <div className="modal-footer py-5 border-0">
                <button className="btn public-btn --yellowBg --absoluted btn-modal" onClick={() => setStep("login-code")}>
                  <img src="assets/svgs/Icon feather-arrow-right.svg" className="me-1" />
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Login Code */}
          {step === "login-code" && (
            <div className="modal-body">
              <span className="style-15-lh35-n --b">Enter Code</span>
              <input type="number" className="form-control rounded-1 mt-1 h-5 p-4" placeholder="Enter your code" />
              <div className="modal-footer py-5 border-0">
                <button className="btn public-btn --yellowBg --absoluted btn-modal" onClick={() => setStep("login-username")}>
                  <img src="assets/svgs/Icon feather-arrow-right.svg" className="me-1" />
                  Restart
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
