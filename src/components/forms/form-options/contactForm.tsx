import { FC } from 'react';
import { InputBase, InputLabel } from '@mui/material';
import { styled } from '@mui/system';
import Btn from '../../button';

const CustomInputBase = styled(InputBase)`
  margin-bottom: 20px;
  border-bottom: 1px solid #003642;
`;

const ContactForm: FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const CustomTextArea = styled('textarea')`
    width: 100%;
    height: 120px;
    resize: none;
    padding: 8px;
    color: #003642;
    outline: none;
    border: 1px solid #003642;
  `;

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="row">
        <div className="col d-flex ai-end media-item-col">
          <InputLabel htmlFor="full-name-input">Name</InputLabel>
          <CustomInputBase
            inputProps={{ variant: 'outlined', id: 'full-name-input' }}
          />
        </div>
        <div className="col d-flex ai-end media-item-col">
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <CustomInputBase
            inputProps={{ variant: 'outlined', id: 'email-input' }}
          />
        </div>
        <div className="col-area d-flex ai-start media-item-col">
          <InputLabel htmlFor="message-input">Message</InputLabel>
          <CustomTextArea id="message-input" placeholder="Enter your message" />
        </div>
        <div className="form-btn">
          <Btn text="register" /*bgColor="#003642"  hoverBgColor="#F05E47"*/ color="#fff" space="6px 20px" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;