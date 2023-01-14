import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'company', headerName: 'Company', width: 130 },
]
export const DevicesListTable = ({ devicesList, setSelectedDevices }: any) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={devicesList}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={(newSelectionArray) => {
                    const selectedRowsData = newSelectionArray.map((id) =>
                        devicesList.find((row: any) => row.id === id)
                    )
                    setSelectedDevices(selectedRowsData)
                }}
            />
        </div>
    )
}
