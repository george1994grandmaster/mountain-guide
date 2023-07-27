import { FC, useRef } from "react";
import RegisterForm from "./form-options/registerForm"
import ContactForm from "./form-options/contactForm"

interface formProps {
  formType: string;
}

const Form: FC<formProps> = ({ formType }) => {
 
  switch (formType) {
    case 'registerForm':
      return (
        <RegisterForm/>
      );
    case 'contactForm':
      return (
        <ContactForm/>
      );
    default:
      return (
        <div className="slider-default">
          ssdsdsdsd
        </div>
      );
  }
};

export default Form;