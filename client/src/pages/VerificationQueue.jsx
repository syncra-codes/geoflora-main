import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const columns = ['ID', 'Submitter', 'Species', 'Status', 'Submitted At']
const rows = []

export default function VerificationQueue() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5">Expert Verification Queue</Typography>
        <Typography color="text.secondary">Review AI pre-screened leaf submissions.</Typography>
      </Paper>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>{columns.map((c) => <TableCell key={c}>{c}</TableCell>)}</TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No submissions to review.
                </TableCell>
              </TableRow>
            )}
            {rows.map((row) => (
              <TableRow key={row[0]}>
                {row.map((cell) => <TableCell key={cell}>{cell}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
