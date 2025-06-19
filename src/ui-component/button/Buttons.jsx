import { Button } from '@mui/material'
import CircularLoader from '../loader/CircularLoader'

const Buttons = ({
  type,
  onSubmit,
  children,
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disable = false,
  loading = false,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <>
      <Button
        type={type}
        onSubmit={onSubmit}
        variant={variant}
        color={color}
        fullWidth={fullWidth}
        disable={disable}
        startIcon={loading ? <CircularLoader size='30px' color="inherit" /> : startIcon}
        endIcon={endIcon}
        disabled={loading}
        {...rest}
      >
        {!loading && children}
      </Button>
    </>
  )
}

export default Buttons