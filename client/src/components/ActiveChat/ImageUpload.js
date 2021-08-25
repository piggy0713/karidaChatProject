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

const ImageUpload = ({ fileInputReference, images, setImages }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const CLOUDINARY_UPLOAD_PRESET = "creuhxon";
  const CLOUDINARY_NAME = "dm7yigtxo";

  const fileSelected = async (e) => {
    setLoading(true);
    setError(false);

    const file = e.target.files[0];

    const data = new FormData();
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("file", file);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      setImages([...images, result.url]);
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
      />
    </>
  );
};

export default ImageUpload;
