import { PassageAuth } from "@passageidentity/passage-react";

const RegistrationPage = () => {
  return (
    <div className="container-fluid registration-page">
      <div className="form-container">
        <PassageAuth />
      </div>
    </div>
  );
};

export default RegistrationPage;
