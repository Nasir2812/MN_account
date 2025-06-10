import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';



// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useLoginUser from '../../../reactQueryHook/auth/userLogin';
import Toaster from '../../../ui-component/toaster/toaster';
import CircularLoader from '../../../ui-component/loader/CircularLoader';

// ===============================|| JWT - LOGIN ||=============================== //

export default function AuthLogin() {
  const theme = useTheme();
  const [checked, setChecked] = useState(true);
   const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { mutate, isError, isSuccess, isLoading } = useLoginUser()

   //naviagate to login
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //submit data
  const Submit = (data) => {
    const { email, password } = data
    const loginData = {
      email: email,
      password: password
    }
    mutate(loginData, {
      onSuccess: (data) => {
         setShowSuccessToast(true);
      },
      onError: (err) => {
            setShowErrorToast(true);
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(Submit)} >
        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
          <OutlinedInput id="outlined-adornment-email-login" {...register('email', { required: 'Email is required' })} type="email" name="email" />
          {errors.email && (
            <Typography variant="caption" color="error">
              {errors.email.message}
            </Typography>
          )}

        </FormControl>

        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-login"
            type={showPassword ? 'text' : 'password'}
            name="password"
            {...register('password', { required: 'Password Is Required' })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && <Typography variant='caption' color='danger'>  {errors.password.message}
          </Typography>}
        </FormControl>

        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />}
              label="Keep me logged in"
            />
          </Grid>
          <Grid>
            <Typography variant="subtitle1" component={Link} to="/forgot-password" color="secondary" sx={{ textDecoration: 'none' }}>
              Forgot Password?
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            {isLoading ?
              (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '56px' }}>
                  <CircularLoader size='30px' />
                </Box>
              ) : (
                <Button color="secondary" fullWidth size="large" type="submit" variant="contained" disabled={isLoading}>
                  Sign In
                </Button>
              )}

          </AnimateButton>
        </Box>

        {/* <!-------- error toaster-------------!> */}
        {isError && (<Toaster message='Login Failed'
          color='error'
          open={showErrorToast}
          onClose={() => setShowErrorToast(false)} />)}

        {/* <!-------- success toaster-------------!> */}
        {isSuccess && (<Toaster message='Login  Successfully'
          color='success'
          open={showSuccessToast}
          onClose={() => setShowSuccessToast(false)} />)}
      </form>
    </>
  );
}
