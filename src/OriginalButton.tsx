import React from 'react';
import {Button} from '@mui/material';

interface props {
  clikcAction: () => void;
  buttonText: string;
  variant?: "text" | "outlined" | "contained";
}

export const OriginalButton: React.FC<props> = (props) => {
    const { clikcAction, buttonText, variant } = props;
  
    return (
      <div>
        <Button variant={variant} onClick={clikcAction}>{buttonText}</Button>
      </div>
    );
  };