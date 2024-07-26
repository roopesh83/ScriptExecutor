import Typography from '@mui/material/Typography';
import WarningIcon from '@mui/icons-material/Warning';

export const Warning = ({warningText}) => {
    return (
        <Typography variant="body1" color="error" style={{ display: 'flex', alignItems: 'center' }}>
                <WarningIcon style={{ marginRight: '0.5em' }} />
                {warningText}
        </Typography>
    )
}