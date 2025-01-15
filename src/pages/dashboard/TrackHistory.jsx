import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(timeStamp, tokenName, tokenSymbols, tokenDecimals, totalSupply, status) {
    return { timeStamp, tokenName, tokenSymbols, tokenDecimals, totalSupply, status };
}

const rows = [
    createData('2025-01-14, 10:30 AM', 'CryptoDollar', 'CDOL', 18, '1 ,000, 000', 'Deployed Successfully'),
    createData('2025-01-14, 10:30 AM', 'CryptoDollar', 'CDOL', 18, '1 ,000, 000', 'Deployed Successfully'),
    createData('2025-01-14, 10:30 AM', 'CryptoDollar', 'CDOL', 18, '1 ,000, 000', 'Deployed Successfully'),
    createData('2025-01-14, 10:30 AM', 'CryptoDollar', 'CDOL', 18, '1 ,000, 000', 'Deployed Successfully'),
    createData('2025-01-14, 10:30 AM', 'CryptoDollar', 'CDOL', 18, '1 ,000, 000', 'Deployed Successfully'),
];


const TrackHistory = () => {


    return (
        <main className="bg-[#02071D] font-dmsans">
            <div>
                <h1 className='text-white lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 px-2'>Track History</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, backgroundColor: '#02071D', color: '#595D69', borderSpacing: '16px' }} style={{ borderCollapse: 'separate' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Timestamp</TableCell>
                                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Token name</TableCell>
                                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Token symbols</TableCell>
                                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Token decimals</TableCell>
                                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Total supply</TableCell>
                                <TableCell sx={{ backgroundColor: '#11162C', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #595D69' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.timeStamp}

                                >
                                    <TableCell component="th" scope="row" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>
                                        {row.timeStamp}
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.tokenName}</TableCell>
                                    <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.tokenSymbols}</TableCell>
                                    <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.tokenDecimals}</TableCell>
                                    <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.totalSupply}</TableCell>
                                    <TableCell align="center" sx={{ color: '#BFC1C5', backgroundColor: '#262D4F', borderRadius: '8px' }}>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </main>
    )
}

export default TrackHistory