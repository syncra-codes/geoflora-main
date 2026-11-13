import { Box, Paper, Typography } from '@mui/material'

export default function AdminPanel() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5">Administrative Controls</Typography>
        <Typography color="text.secondary">Role management and audit logs.</Typography>
      </Paper>
    </Box>
  )
}
