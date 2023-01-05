import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { Paper, styled } from '@mui/material'
import { useQuery } from '@tanstack/react-query' // Grid version 2

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))
export const Dashboard = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(
                'https://api.github.com/repos/tannerlinsley/react-query'
            ).then((res) => res.json()),
    })

    console.log('data', data)

    return (
        <Grid
            container
            mt={2}
            ml={2}
            mr={2}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {Array.from(Array(6)).map((_, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                    <Item>xs=2</Item>
                </Grid>
            ))}
        </Grid>
    )
}
