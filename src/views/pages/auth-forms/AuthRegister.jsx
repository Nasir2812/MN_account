import { useState } from 'react';
import { Link, Links, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import userRegister from '../../../reactQueryHook/auth/userRegister'
import storeInSessionStorage from '../../../utils/sessionStorage'

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
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Divider } from '@mui/material';
import Toaster from '../../../ui-component/toaster/toaster';
import CircularLoader from '../../../ui-component/loader/CircularLoader';

// ===========================|| JWT - REGISTER ||=========================== //

export default function AuthRegister() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  //mutate use in react query
  const { mutate, isLoading, isError, isSuccess } = userRegister()

  //naviagate to login
  const navigate = useNavigate()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // 🔥 Handle form submit
  const onSubmit = (data) => {
    console.log(data);
    const { firstName, lastName, email, password } = data
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    mutate(formData, {
      onSuccess: (data) => {
        console.log("register", data);
        setShowSuccessToast(true);
        storeInSessionStorage(data)
        setTimeout(() => {
          navigate('/login')
        }, 700)
      },
      onError: (err) => {
        console.log("eror", err);
        setShowErrorToast(true);
      }
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='false'>
        <Grid container direction="column" spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1">
                Already have an account?{' '}
                <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 0, sm: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              margin="normal"
              {...register('firstName', { required: 'First Name is required' })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              sx={{ ...theme.typography.customInput }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              margin="normal"
              {...register('lastName', { required: 'Last Name is required' })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              sx={{ ...theme.typography.customInput }}
            />
          </Grid>
        </Grid>

        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email-register"
            type="email"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            label="Email Address / Username"
          />
          {errors.email && (
            <Typography variant="caption" color="error">
              {errors.email.message}
            </Typography>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-register"
            type={showPassword ? 'text' : 'password'}
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
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
          {errors.password && (
            <Typography variant="caption" color="error">
              {errors.password.message}
            </Typography>
          )}
        </FormControl>


        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                />
              }
              label={
                <Typography variant="subtitle1">
                  Agree with &nbsp;
                  <Typography variant="subtitle1" component={Link} to="#">
                    Terms & Condition.
                  </Typography>
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '56px' }}>
                <CircularLoader size='30px' />
              </Box>
            ) : (
              <Button
                disableElevation
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                disabled={isLoading}
                color="secondary"
              >
                Sign up
              </Button>
            )}
          </AnimateButton>
        </Box>

        {/* <!-------- error toaster-------------!> */}
        {isError && (<Toaster message='Register Failed'
          color='error'
          open={showErrorToast}
          onClose={() => setShowErrorToast(false)} />)}

        {/* <!-------- success toaster-------------!> */}
        {isSuccess && (<Toaster message='Registered Successfully'
          color='success'
          open={showSuccessToast}
          onClose={() => setShowSuccessToast(false)} />)}
      </form>
    </>
  );
}
