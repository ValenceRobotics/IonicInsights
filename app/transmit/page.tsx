import { ChargedUpMatchData, LogRecord } from "@/src/record";
import QRCode from "react-qr-code";
import lzstring from "lz-string";

export default function Home() {
  const match = new LogRecord<ChargedUpMatchData>({
    scouter: "scouter",
    timestamp: new Date().getTime(),
    match_data: {
      alliance: "red",
      cones: 1,
      cubes: 1,
      match_number: 1,
      team_number: 1,
    },
  });

  const x = 110;
  const json = JSON.stringify(Array(x).fill(match));

  return (
    <main className="w-screen">
      <div className="grid grid-cols-2 break-all p-10 gap-10">
        <div className="">{json}</div>
        {/* <div className="">{lzstring.compressToBase64(json)}</div> */}
        <div className="">{lzstring.compressToBase64(json)}</div>

        {/* <div className="">{data}</div> */}
        {/* <QRCode value={json} size={500} /> */}
        <QRCode value={lzstring.compressToBase64(json)} size={1000} />

        {/* <QRCode value={data} size={500} /> */}
      </div>
      <div className="p-5 flex gap-10"></div>
    </main>
  );
}
