import { TextField, Button, Box } from '@mui/material';
import vector2 from "../../assets/vector2.svg";


const DeployToken = () => {


    return (
        <main className="bg-[#02071D] font-dmsans">
            <div>
                <div className="grid place-content-center my-4">
                    <h2 className="text-[#8BB9FF] lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center leading-[0.5px]">
                        Deploy Token
                    </h2>
                    <img src={vector2} alt="" className='w-[250px]' />
                </div>
                <Box
                    component="form"

                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        maxWidth: 600,
                        margin: 'auto',
                        mt: 4,
                        p: 3,
                        backgroundColor: '#02071D',
                        color: '#ffffff'
                    }}
                >

                    <p>Token Name</p>
                    <TextField
                        label="e.g. MyToken"
                        variant="outlined"
                        name="name"
                        sx={{
                            color: '#8C8F97', backgroundColor: '#1B1B38', borderRadius: '5px', border: '1px solid #8C8F97', labelColor: '#8C8F97',
                            '& .MuiInputLabel-root': { color: '#8C8F97' },
                            '& .MuiInputLabel-root.Mui-focused': { color: '#0267FF' }
                        }}
                        required
                        fullWidth

                    />
                    <p>Token Symbol </p>
                    <TextField
                        label="e.g. MTK"
                        variant="outlined"
                        name="tokenSymbol"
                        type="name"
                        sx={{
                            color: '#8C8F97', backgroundColor: '#1B1B38', borderRadius: '5px', border: '1px solid #8C8F97',
                            '& .MuiInputLabel-root': { color: '#8C8F97' },
                            '& .MuiInputLabel-root.Mui-focused': { color: '#0267FF' }
                        }}
                        required
                        fullWidth

                    />
                    <p>Token Decimal </p>
                    <TextField
                        label="e.g. 18"
                        variant="outlined"
                        name="tokenDecimal"
                        type="number"
                        sx={{
                            color: '#8C8F97', backgroundColor: '#1B1B38', borderRadius: '5px', border: '1px solid #8C8F97',
                            '& .MuiInputLabel-root': { color: '#8C8F97' },
                            '& .MuiInputLabel-root.Mui-focused': { color: '#0267FF' }
                        }}
                        required
                        fullWidth
                    />
                    <p>Token Total Supply </p>
                    <TextField
                        label="The total number of tokens to be created."
                        variant="outlined"
                        name="tokenDecimal"
                        type="number"
                        sx={{
                            color: '#8C8F97', backgroundColor: '#1B1B38', borderRadius: '5px', border: '1px solid #8C8F97',
                            '& .MuiInputLabel-root': { color: '#8C8F97' },
                            '& .MuiInputLabel-root.Mui-focused': { color: '#0267FF' }
                        }}
                        required
                        fullWidth
                    />
                    <Button type="submit" variant="contained" sx={{
                        backgroundColor: '#0267FF', borderRadius: '20px', textTransform: 'capitalize', height: '50px', color: '#ffffff', marginTop: '20px',
                        '&:hover': {
                            backgroundColor: '#0247B7'
                        }
                    }} fullWidth>
                        Deploy
                    </Button>
                </Box>
            </div>
        </main>
    )
}

export default DeployToken