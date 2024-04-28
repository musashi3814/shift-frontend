import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


interface Props {
    // Add your component's props here
}

// サンプルの提出状況データ
const sampleSubmitData = [
  { name: '山田太郎', submissionDate: '2024-04-28', status: '提出済み' },
  { name: '田中次郎', submissionDate: '2024-04-27', status: '未提出' },
  // 他の提出状況データを追加する
];

const SubmitView: React.FC<Props> = (props) => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Grid container direction="column" >
                <Typography variant="h4" sx={{ mt: 14, alignSelf: 'center' ,fontWeight: 'bold'}}  color={"primary"}>
                    シフト提出状況
                </Typography>
                <TableContainer component={Paper} sx={{ mt: 4 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>名前</TableCell>
                                <TableCell>提出日</TableCell>
                                <TableCell>提出状況</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sampleSubmitData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.submissionDate}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Box>
    );
}

export default SubmitView;
