import { useMutation } from "@apollo/client";
import React, { useRef } from "react";
import style from "./upload.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { UPLOAD } from "lib/graph";

type Props = {
  onSuccess: (e: any) => void;
};

export function UploadImage(props: Props) {
  let uploadRef = useRef<HTMLInputElement>(null);
  const [upload] = useMutation(UPLOAD, {
    onCompleted: onMutationUploadCompleted,
  });

  async function onMutationUploadCompleted(data) {
    if (data) {
      await props.onSuccess({
        src: data.singleUpload.location,
        loading: false,
      });
    } else {
      await props.onSuccess({
        src: data.singleUpload.location,
        loading: false,
      });
    }
  }
  const onMouseOver = () => {};

  const onMouseLeave = () => {};

  const onClickUpload = () => {
    uploadRef.current && uploadRef.current!.click();
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const src = URL.createObjectURL(event.target.files[0]);
    props.onSuccess({
      src,
      loading: true,
    });
    upload({
      variables: {
        file: event.target.files[0],
      },
    });
  };

  return (
    <div
      className={style.upload}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClickUpload}
    >
      <div className={style.uploadBody}>
        <FontAwesomeIcon icon={faImage} />
        Upload your ABA screenshot
      </div>
      <input
        ref={uploadRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={onChangeFile}
        value={""}
      />
    </div>
  );
}
