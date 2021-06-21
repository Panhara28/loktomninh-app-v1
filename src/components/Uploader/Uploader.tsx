/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { gql } from "apollo-boost";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { TokenGenerator } from "../../lib/TokenGenerator";
import { useMutation } from "@apollo/client";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Col, Row } from "react-bootstrap";
// import { AuthContext } from "@context/app/Auth";

toastr.options = {
  positionClass: "toast-bottom-center",
  timeOut: 1500,
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "100%",
  height: "100%",
  cursor: "copy",
};

const REMOVE_UPDATE = gql`
  mutation removeImage($id: Int!, $image: String) {
    removeImage(id: $id, image: $image)
  }
`;

function Uploader({ onChange, imageURL, dataImages, productId, onRemove }) {
  // const { customer } = useContext(AuthContext);

  const [files, setFiles] = useState(
    imageURL
      ? [
        {
          name: "demo",
          preview: imageURL,
          isUploaded: true,
          isRemoved: false,
          isPrimary: false,
          uuid: TokenGenerator(),
        },
      ]
      : []
  );

  const [isPrima, setIsPrimary] = useState(false);

  const [removeImage] = useMutation(REMOVE_UPDATE);

  const [dataImg, setImages] = useState(dataImages);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop: useCallback(
      (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) => {
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
              isUploaded: false,
              isRemoved: false,
              isPrimary: false,
              uuid: TokenGenerator(),
            });
          })
        );
        onChange(acceptedFiles);
      },
      [onChange]
    ),
  });

  const onClickCopy = (file) => {
    navigator.clipboard.writeText(file.preview);
    toastr.info("Copied The Image Url");
  };

  const setPrimaryImage = async (idx) => {
    const data = files;
    data.map((x, i) => {
      if (x.isPrimary === true) {
        data[i].isPrimary = false;
      }
    });
    data[idx].isPrimary = !data[idx].isPrimary;
    setFiles(data);
    await setIsPrimary(!isPrima);
    toastr.success("Image has set to primary");
  };

  const setPrimaryImageData = async (idx) => {
    const data = [...dataImg];
    data.map((x, i) => {
      if (x.isPrimary === true) {
        data[i] = {
          isPrimary: false,
          isRemoved: x.isRemoved,
          isUploaded: x.isUploaded,
          path: x.path,
          preview: x.preview,
          uuid: x.uuid,
        };
      }
    });
    data[idx] = {
      isPrimary: !data[idx].isPrimary,
      isRemoved: data[idx].isRemoved,
      isUploaded: data[idx].isUploaded,
      path: data[idx].path,
      preview: data[idx].preview,
      uuid: data[idx].uuid,
    };

    await setImages(data);
    await setIsPrimary(!isPrima);
    localStorage.setItem("myImages", JSON.stringify(data));
    toastr.success("Image has set to primary");
  };

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.map((file) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
        isUploaded: false,
        isRemoved: true,
      });
    });
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    onRemove(newFiles);
  };

  const removeDataImage = (file) => async () => {
    const newImages = await [...dataImg];

    await newImages.splice(newImages.indexOf(file), 1);

    const confirmation = window.confirm("Are u sure to remove ?");
    if (confirmation) {
      await removeImage({
        variables: {
          id: Number(productId),
          image: JSON.stringify(newImages),
        },
        refetchQueries: ["adminProducts"],
      });
      await setImages(newImages);
      localStorage.setItem("myImages", JSON.stringify(newImages));
    } else {
      return <Redirect to={{ pathname: "/products" }} />;
    }
  };

  let thumbs;

  if (dataImg !== undefined) {
    if (typeof dataImg === "string") {
      thumbs = JSON.parse(dataImg).map((file, idx) => {
        return (
          <Col md={6} key={idx} style={{ marginBottom: 20 }}>
            <a style={{ position: "absolute" }}>Set Primary</a>
            <a
              style={{
                position: "absolute",
                marginTop: 105,
                cursor: "pointer",
                color: "#e74c3c",
                top: "-97px",
                right: "20px",
              }}
              onClick={removeDataImage(file)}
            >
              <FontAwesomeIcon icon={faTrash} size="2x" />
            </a>
            <div style={thumbInner}>
              <img
                src={file.preview}
                style={img}
                alt={file.name}
                onClick={() => onClickCopy(file)}
              />
            </div>
          </Col>
        );
      });
    } else {
      thumbs = dataImg.map((file, idx) => {
        return (
          <Col md={6} key={idx} style={{ marginBottom: 20 }}>
            <a
              style={{
                position: "absolute",
                cursor: "pointer",
                color: `${file.isPrimary ? "#2ecc71" : "#34495e"}`,
                top: "8px",
                left: "16px",
              }}
              onClick={() => setPrimaryImageData(idx)}
            >
              <FontAwesomeIcon
                icon={faClipboardCheck}
                size="2x"
              // style={{ display: customer.role !== "ADMIN" ? "none" : "block" }}
              />
            </a>
            <a
              style={{
                position: "absolute",
                marginTop: 105,
                cursor: "pointer",
                color: "#e74c3c",
                top: "-97px",
                right: "20px",
              }}
              onClick={removeDataImage(file)}
            >
              <FontAwesomeIcon
                icon={faTrash}
                size="2x"
              // style={{ display: customer.role !== "ADMIN" ? "none" : "block" }}
              />
            </a>

            <div style={thumbInner}>
              <img
                src={file.preview}
                style={img}
                alt={file.name}
                onClick={() => onClickCopy(file)}
              />
            </div>
          </Col >
        );
      });
    }
  }

  const thumbsFile = files.map((file, idx) => {
    return (
      <Col md={6} key={file.name} style={{ marginBottom: 20 }}>
        <a
          style={{
            position: "absolute",
            cursor: "pointer",
            color: `${file.isPrimary ? "#2ecc71" : "#34495e"}`,
            top: "8px",
            left: "16px",
          }}
          onClick={() => setPrimaryImage(idx)}
        >
          <FontAwesomeIcon icon={faClipboardCheck} size="2x" />
        </a>
        <a
          style={{
            position: "absolute",
            marginTop: 105,
            cursor: "pointer",
            color: "#e74c3c",
            top: "-96px",
            right: "20px",
          }}
          onClick={removeFile(file)}
        >
          <FontAwesomeIcon icon={faTrash} size="2x" />
        </a>

        <div style={thumbInner} className="imageContainer">
          <img
            src={file.preview}
            style={img}
            alt={"Shity"}
            onClick={() => onClickCopy(file)}
          />
        </div>
      </Col>
    );
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <section className="uploader">
        <div {...getRootProps()}>
          <input {...getInputProps()} multiple />
          <FontAwesomeIcon icon={faUpload} size="3x" />
          <div className="upload-title">
            Drag/Upload your <br /> image here
          </div>
        </div>
      </section>
      <Row className="mt-5">
        {thumbs && thumbs}
        {thumbsFile && thumbsFile}
      </Row>
    </>
  );
}

export default Uploader;
