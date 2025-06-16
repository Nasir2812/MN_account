import React from 'react';
import {
  Card,
  Box,
  Typography,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

const SmallCards = ({ bgColor = 'secondary.dark' ,item='0',role='worker'}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const resolvedBgColor =
    theme.palette?.[bgColor.split('.')[0]]?.[bgColor.split('.')[1]] || bgColor;


  return (
    <Card
      sx={{
        p: 4,
        m: 2,
        height: '6rem',
        width: '20rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: resolvedBgColor,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          width: 210,
          height: 210,
          background: `linear-gradient(210.04deg, ${theme.palette.secondary[800]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
          borderRadius: '50%',
          top: -30,
          right: -180
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          width: 210,
          height: 210,
          background: `linear-gradient(140.9deg, ${theme.palette.secondary[800]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
          borderRadius: '50%',
          top: -160,
          right: -130
        }
      }}
    >
      {/* Avatar + Icon */}
      <Avatar
        variant="rounded"
        sx={{
          ...theme.typography.commonAvatar,
          ...theme.typography.largeAvatar,
          bgcolor: 'secondary.800',
          color: '#fff',
          mr: 2
        }}
      >
        <TableChartOutlinedIcon fontSize="inherit" />
      </Avatar>

      {/* Text Content */}
      <Box>
        <Typography variant="h3" sx={{ color: '#fff' }}>
          {item}
        </Typography>
         <Typography variant="h3" sx={{ color: '#fff' }}>
          {role}
        </Typography>
      </Box>
    </Card>
  );
};

export default SmallCards;
