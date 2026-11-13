import { Box, BrowserRouter, Routes, Route, NavLink, AppBar, Toolbar, Typography } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { Dashboard } from './pages/Dashboard'
import { VerificationQueue } from './pages/VerificationQueue'
import { Catalog } from './pages/Catalog'
import { MapView } from './pages/MapView'
import { AdminPanel } from './pages/AdminPanel'

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <AppBar position="static" sx={{ mb: 3 }}>
          <Toolbar>
            <NavLink to="/" end sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
              <Typography variant="h6">Dashboard</Typography>
            </NavLink>
            <NavLink to="/verification" sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
              <Typography variant="h6">Verification Queue</Typography>
            </NavLink>
            <NavLink to="/catalog" sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
              <Typography variant="h6">Catalog</Typography>
            </NavLink>
            <NavLink to="/map" sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
              <Typography variant="h6">Map</Typography>
            </NavLink>
            <NavLink to="/admin" sx={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant="h6">Admin</Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/verification" element={<VerificationQueue />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
