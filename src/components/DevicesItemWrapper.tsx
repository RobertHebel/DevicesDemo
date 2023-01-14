import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { DeviceItem } from './DeviceItem'

export const DevicesItemWrapper = ({ selectedDevices }: any) => {
    return selectedDevices.map((device: any, index: any) => (
        <Grid xs={2} sm={4} md={4} key={index}>
            <DeviceItem deviceId={device.id} />
        </Grid>
    ))
}
