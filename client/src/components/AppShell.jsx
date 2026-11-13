import { Box, Toolbar, AppBar, Typography } from '@mui/material'
import theme from './theme'

export default function AppShell({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, color: 'common.white' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GeoFlora — Medicinal Flora Curation Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  )
}
