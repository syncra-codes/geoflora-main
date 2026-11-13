import { Box, Paper, Typography } from '@mui/material'

export default function Catalog() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5">Medicinal Flora Catalog</Typography>
        <Typography color="text.secondary">Full CRUD management of botanical records and cultivation guides.</Typography>
      </Paper>
    </Box>
  )
}
