import Grid from '@mui/material/Unstable_Grid2'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { DevicesListTable } from './DevicesListTable'
import { API_DEVICES_LIST } from '../const/api'
import { DevicesItemWrapper } from './DevicesItemWrapper'

export const Dashboard = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['devicesData'],
        queryFn: () => fetch(API_DEVICES_LIST).then((res) => res.json()),
    })

    const [selectedDevices, setSelectedDevices]: any = useState([])

    return (
        <>
            {!isLoading && !error && (
                <DevicesListTable
                    devicesList={data}
                    setSelectedDevices={setSelectedDevices}
                />
            )}
            <Grid
                container
                mt={2}
                ml={2}
                mr={2}
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {selectedDevices && (
                    <DevicesItemWrapper selectedDevices={selectedDevices} />
                )}
            </Grid>
        </>
    )
}
