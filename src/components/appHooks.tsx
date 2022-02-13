import React, {useEffect} from 'react';
import {Switch} from '@mui/material';

export const AppHooks: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(true);
  const handleChange = (e: any) => {
    setIsChecked(!isChecked);
  }
  return (
  <div style={{backgroundColor: "black"}}>
  <Switch
    checked={isChecked}
    onChange={handleChange}
    name="checkedA"
    inputProps={{ 'aria-label': 'secondary checkbox' }}
  />
</div>
  )
};
