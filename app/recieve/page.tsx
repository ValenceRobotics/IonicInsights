"use client";

import { ChargedUpMatchData, LogRecord } from "@/src/record";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import lzstring from "lz-string";

export default function Scan() {
  const [data, setData] = useState<string | null>(null);
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          console.log(result, error);
          if (result) {
            setData(lzstring.decompressFromBase64(result.getText()));

            alert("detected");
            // setData(lzstring.decompressFromBase64(result.getText()));
            // alert(result.getText().length);
          }
        }}
        constraints={{ facingMode: "environment" }}
      />
      <p>{data}</p>
    </>
  );
}
