import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import Paper from '@mui/material/Paper';


function createData(tokenName, tokenSymbols, tokenDecimals, totalSupply, balance, contractAddress, action) {
  return { tokenName, tokenSymbols, tokenDecimals, totalSupply, balance, contractAddress, action };
}

const rows = [
  createData('CryptoDollar', 'CDOL', 18, '1 ,000, 000', 250000, '0x12376dgee5...999', 'View details'),
  createData('CryptoDollar', 'CDOL', 18, '1 ,000, 000', 250000, '0x12376dgee5...999', 'View details'),
  createData('CryptoDollar', 'CDOL', 18, '1 ,000, 000', 250000, '0x12376dgee5...999', 'View details'),
  createData('CryptoDollar', 'CDOL', 18, '1 ,000, 000', 250000, '0x12376dgee5...999', 'View details'),
  createData('CryptoDollar', 'CDOL', 18, '1 ,000, 000', 250000, '0x12376dgee5...999', 'View details'),
];


const ManageToken = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDetailClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };


  return (
    <main className="bg-[#02071D] font-dmsans">
      <div>
        <h1 className='text-white lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 px-2'>Manage Tokens</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, backgroundColor: '#02071D', color: '#595D69', borderSpacing: '16px' }} style={{ borderCollapse: 'separate' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Token name</TableCell>
                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Token symbols</TableCell>
                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Token decimals</TableCell>
                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Total supply</TableCell>
                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Balance</TableCell>
                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Contract Address</TableCell>
                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.tokenName}

                >
                  <TableCell component="th" scope="row" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>
                    {row.tokenName}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.tokenSymbols}</TableCell>
                  <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.tokenDecimals}</TableCell>
                  <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.totalSupply}</TableCell>
                  <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.balance}</TableCell>
                  <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.contractAddress}</TableCell>
                  <TableCell onClick={() => handleDetailClick(row)}
                    style={{ cursor: 'pointer', color: '#8BB9FF' }} align="center" sx={{ color: '#8BB9FF', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle sx={{ color: '#ffffff', backgroundColor: '#02071D' }}>Details</DialogTitle>
          <DialogContent sx={{ color: '#ffffff', backgroundColor: '#02071D' }} >
            {selectedRow && (
              <div>
                <p><strong>TokenName:</strong> {selectedRow.tokenName}</p>
                <p><strong>Wallet Address:</strong> {selectedRow.contractAddress}</p>
                <p><strong>Total Supply:</strong> {selectedRow.totalSupply}</p>

              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}

export default ManageToken