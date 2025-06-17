import React from 'react'
import SmallCards from '../../../ui-component/small-cards/SmallCards'
import { Avatar, Box, Card } from '@mui/material'
import Table from '../../../ui-component/table/Table'
import Buttons from '../../../ui-component/button/Buttons'
import AddBoxIcon from '@mui/icons-material/AddBox';
import {Userheader} from '../header'
import Modal from '../../../ui-component/modal/Modal'

const User = () => {

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
        <Box sx={{display:'flex',justifyContent:'end',margin:"1rem"}}>
          <Buttons type='submit'>
            <AddBoxIcon/>
          </Buttons>
        </Box>
        <Table title= 'Create User ' columns={Userheader}/>
      </Card>
      <Modal title='User Management'>

      </Modal>
    </>
  )
}

export default User