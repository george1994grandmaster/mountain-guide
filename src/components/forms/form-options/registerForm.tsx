import {FC} from 'react';
import { InputBase } from '@mui/material';
import { styled } from '@mui/system';
import Btn from '../../button';

const CustomInputBase = styled(InputBase)`
  margin-bottom: 20px;
  border-bottom: 1px solid #003642;
`;

const RegisterForm: FC = () => {
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <CustomInputBase
            inputProps={{ variant: 'outlined' }}
            placeholder="Full Name"
          />
        </div>
        <div className="col">
          <CustomInputBase
            inputProps={{ variant: 'outlined' }}
            placeholder="Email Address"
          />
        </div>
        <div className="col">
          <CustomInputBase
            inputProps={{ variant: 'outlined' }}
            placeholder="Phone Number"
          />
        </div>
        <div className='form-btn'>
          <Btn text="register" /*bgColor="#003642"  hoverBgColor="#F05E47"*/ color="#fff" space="6px 20px" />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;