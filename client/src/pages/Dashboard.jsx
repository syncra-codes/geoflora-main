import { Box, Paper, Typography, Grid } from '@mui/material'

export default function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 3, mb: 2 }}>
        <Typography variant="h5">Dashboard</Typography>
        <Typography color="text.secondary">Overview of medicinal flora records and verification activity.</Typography>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="subtitle2">Total Flora Records</Typography>
            <Typography variant="h6">—</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="subtitle2">Pending Submissions</Typography>
            <Typography variant="h6">—</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="subtitle2">Regions Mapped</Typography>
            <Typography variant="h6">—</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
