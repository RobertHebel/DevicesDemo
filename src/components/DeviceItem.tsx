import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Typography,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { API_DEVICE_DETAILS } from '../const/api'

const fetchDeviceDetails = (deviceID = 0) =>
    fetch(`${API_DEVICE_DETAILS}/${deviceID}`).then((res) => res.json())
export const DeviceItem = ({ deviceId }: any) => {
    const { isLoading, data } = useQuery({
        queryKey: ['deviceDetails', deviceId],
        queryFn: () => fetchDeviceDetails(deviceId),
        keepPreviousData: true,
    })

    return isLoading ? (
        <CircularProgress />
    ) : (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography component="div" variant="h5">
                        {data.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        {data.company}
                    </Typography>
                    <Typography color="text.secondary" component="div">
                        Users: {data.number_of_users}
                    </Typography>
                    <Typography color="text.secondary" component="div">
                        Active Users: {data.number_of_active_users}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 50, height: 50 }}
                image={data.logo}
            />
        </Card>
    )
}
