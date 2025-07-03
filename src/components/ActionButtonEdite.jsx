import { IconButton, Tooltip } from '@mui/material';
// import { ActionButtonEdite } from '../components/ActionButtonEdite';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import React from 'react';

export const ActionButtonEdite = (link, onEdit, message) => {
    return (
        <Tooltip title="Update">
            <IconButton>
                <EditDocumentIcon />
            </IconButton>
        </Tooltip>
    );
}
