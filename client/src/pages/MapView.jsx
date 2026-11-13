import { Box, Paper, Typography } from '@mui/material'

export default function MapView() {
  return (
    <Box sx={{ p: 2, minHeight: '60vh' }}>
      <Paper sx={{ p: 3, height: '100%' }}>
        <Typography variant="h5">Geospatial Dashboard</Typography>
        <Typography color="text.secondary">Luzon provincial provenance and abundance heatmaps.</Typography>
      </Paper>
    </Box>
  )
}
