import { Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';

import React from 'react'

const Table = ({ rows = [], columns = [], height=380 , pageSize = 5, checkboxSelection = true }) => {

    
    const paginationModel = { page: 0, pageSize };
    return (
        <Paper sx={{ height, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={checkboxSelection}
                sx={{ border: 0 }}
            />
        </Paper>
    )
}


export default Table