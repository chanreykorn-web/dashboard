import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { InputAdornment, TextField } from '@mui/material';


const CreateProduct = () => {
    const [value, setValue] = React.useState(null);

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl mb-4'>Create Product</h1>
            <form>
                <TextField
                    placeholder="Product Name"
                    sx={{ m: 1, width: '100%' }}
                    // value={searchName}
                    // onChange={handleSearchChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />

                <TextField
                    placeholder="Descriptions"
                    sx={{ m: 1, width: '100%' }}
                    // value={searchName}
                    // onChange={handleSearchChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    placeholder="Rate"
                    sx={{ m: 1, width: '100%' }}
                    // value={searchName}
                    // onChange={handleSearchChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <div className='flex items-center gap-5'>
                    <TextField
                        placeholder="Rate"
                        sx={{ m: 1, width: '50%' }}
                        // value={searchName}
                        // onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={2} sx={{ m: 1, width: '50%' }}>
                            <TimePicker
                                value={value}
                                onChange={setValue}
                                referenceDate={dayjs('2022-04-17')}
                            />
                        </Stack>
                    </LocalizationProvider>
                </div>
            </form>
        </div>
    );
}

export default CreateProduct;
