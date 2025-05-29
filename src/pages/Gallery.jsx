import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Modal,
    Tabs,
    Tab,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Breadcrumbs } from '../components/Breadcrumbs';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { useDropzone } from 'react-dropzone';
import { CloudUpload } from 'lucide-react';



// Upload Gallery Component
export const UploadGallery = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        const previewFiles = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
        setFiles((prev) => [...prev, ...previewFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': [],
        },
    });

    return (
        <div className="p-4">
            <div
                {...getRootProps()}
                className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 text-center transition ${isDragActive ? 'bg-blue-50 border-blue-400' : 'bg-gray-100 border-gray-400'
                    }`}
            >
                <input {...getInputProps()} />
                <CloudUpload size={40} className="text-blue-800 mb-2" />
                <p className="text-blue-900">Drag & drop some images here, or click to select images</p>
            </div>

            {/* Preview section */}
            {files.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                    {files.map((file, idx) => (
                        <div key={idx} className="relative">
                            <img
                                src={file.preview}
                                alt="Preview"
                                className="w-full h-40 object-cover rounded shadow"
                                onLoad={() => URL.revokeObjectURL(file.preview)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};


export const GalleryContent = () => {
    const [images, setImages] = useState([]);

    const data = [
        {
            id: 1,
            name: 'Image 1',
            image: 'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 2,
            name: 'Image 2',
            image: 'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 3,
            name: 'Image 3',
            image: 'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 4,
            name: 'Image 4',
            image: 'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 5,
            name: 'Image 5',
            image: 'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 6,
            name: 'Image 6',
            image: 'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
    ];

    useEffect(() => {
        setImages(data);
    }, []);

    const handleDelete = (id) => {
        setImages(prev => prev.filter(img => img.id !== id));
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 p-4">
            {images.map((item) => (
                <div key={item.id} className="relative bg-white rounded shadow overflow-hidden group">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white opacity-70 text-sm flex justify-between items-center p-2">
                        <span className="truncate">{item.name}</span>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className=" cursor-pointer"
                        >
                            <DeleteIcon style={{ color: "red" }} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};


// ✅ Custom Tab Link Component
function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                if (
                    !event.defaultPrevented &&
                    event.button === 0 &&
                    !event.metaKey &&
                    !event.ctrlKey &&
                    !event.altKey &&
                    !event.shiftKey
                ) {
                    event.preventDefault();
                }
            }}
            aria-current={props.selected ? 'page' : undefined}
            {...props}
        />
    );
}

LinkTab.propTypes = {
    selected: PropTypes.bool,
};

// Navigation Tabs Component
export const NavTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="navigation tabs"
                role="navigation"
            >
                <LinkTab label="Gallery" to="/page-one" selected={value === 0} />
                <LinkTab label="Upload" to="/page-two" selected={value === 1} />
            </Tabs>

            <Box sx={{ p: 2 }}>
                {value === 0 && <GalleryContent />}
                {value === 1 && <UploadGallery />}
            </Box>
        </Box>
    );
};

// Main Gallery Component with Modal
export const Gallery = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 3,
        width: isMobile ? '90%' : 900,
        height: isMobile ? '80%' : 500,
        overflowY: 'auto',
    };

    return (
        <div>
            <Breadcrumbs />
            <Button
                variant="contained"
                startIcon={<CollectionsIcon />}
                onClick={handleOpen}
            >
                Open Gallery
            </Button>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <NavTabs />
                </Box>
            </Modal>
        </div>
    );
};
