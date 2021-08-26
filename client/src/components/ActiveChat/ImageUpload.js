import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  hidden: {
    display: "none",
  },

  image: {
    height: "80px",
    display: "block",
  },
}));

const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const ImageUpload = ({ fileInputReference, images, setImages }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("file", file);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    return result.url;
  };

  const fileSelected = async (e) => {
    setLoading(true);
    setError(false);
    const files = Array.from(e.target.files);

    try {
      const urls = await Promise.all(files.map((file) => uploadImage(file)));
      setImages([...images, ...urls]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {images.map((image) => (
          <Box p={1} mr={1} mb={1} key={image}>
            <img src={image} alt="" className={classes.image} />
          </Box>
        ))}
        {loading && <CircularProgress />}
        {error && (
          <Box textAlign="center">
            <ErrorOutlineOutlinedIcon color="error" />
          </Box>
        )}
      </Grid>
      <input
        type="file"
        ref={fileInputReference}
        className={classes.hidden}
        onChange={fileSelected}
        multiple
      />
    </>
  );
};

export default ImageUpload;
