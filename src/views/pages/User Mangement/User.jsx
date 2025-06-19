import React, { useState } from 'react'
import SmallCards from '../../../ui-component/small-cards/SmallCards'
import { Avatar, Box, Card, Grid } from '@mui/material'
import Table from '../../../ui-component/table/Table'
import Buttons from '../../../ui-component/button/Buttons'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Userheader } from '../header'
import Modal from '../../../ui-component/modal/Modal'
import Input from '../../../ui-component/input/Inputs'
import { useForm } from 'react-hook-form'



const User = () => {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      firstName: ''
    },
    mode: 'onTouched'
  })

  //open and close modal
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //onsubmit
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Close modal after submit
    setOpen(false);
  };

  return (
    <>
      <Card>
        <Box sx={{ display: "flex" }}>
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
        </Box>
      </Card>
      <hr />
      <Card>
        <Box sx={{ display: 'flex', justifyContent: 'end', margin: "1rem" }}>
          <Buttons type='submit' onClick={handleOpen}>
            <AddBoxIcon />
          </Buttons>
        </Box>
        <Table title='Create User ' columns={Userheader} />
      </Card>
      <Modal title='User Management' open={open}
        onClose={handleClose}>
        <Card>
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Input
                    label='First Name'
                    name='firstName'
                    {...register('firstName', { required: 'First Name is required' })}
                    error={errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Input
                    label='Last Name'
                    name='lastName'
                    {...register("lastName", { required: "Last Name is required" })}
                    error={errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Input
                    label='Email'
                    name='email'
                    {...register('email', {
                      required: "Email is Required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address'
                      }
                    })}
                    error={errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Input
                    label='Mobile No'
                    name='mobile'
                    {...register('mobile', {
                      required: 'Mobile No is required'
                    })}
                    rules={{
                      validate: (value) => isValidPhoneNumber(value)
                    }}
                    error={errors.mobile}
                    helperText={errors.mobile?.message}
                  />
                </Grid>
                <Grid size={12} sx={{display:'flex',justifyContent:'flex-end'}}>
                  <Buttons type='submit' sx={{width:'300px'}}>Submit</Buttons>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Card>
      </Modal>
    </>
  )
}

export default User