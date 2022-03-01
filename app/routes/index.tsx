import React from "react";
import { MockData } from "~/data";

export default function Index() {
  const contents = await file.text();

  const handle = React.useEffect(() => {
    let fileHandle;
    // butOpenFile.addEventListener("click", async () => {
      // Destructure the one-element array.
      [fileHandle] = await window.showOpenFilePicker();
      // Do something with the file handle.
    });
    // window.showOpenFilePicker();
  }, []);
  return (
    <>
      <button style={{ padding: 48 }} onClick={() => handle}>
        open file
      </button>
      <div className="grid">
        {MockData.map((item, index) => (
          <AudioCard
            key={index}
            src={item.src}
            artwork={item.artwork}
            title={item.title}
            artist={item.artist}
            controls
          />
        ))}
      </div>
    </>
  );
}

// <AudioCard
//   src={MockData[0].src}
//   artwork={MockData[0].artwork}
//   title={MockData[0].title}
//   artist={MockData[0].artist}
//   controls
// />
export interface IAudioCard {
  id?: number;
  src?: string;
  file?: string;
  title?: string;
  artist?: string;
  year?: number | null;
  plays?: number | null;
  comments?: string | null;
  artwork?: string;
  lyrics?: string | null;
  length?: number | null;
  key?: number;
  controls?: boolean | false;
}

export function AudioCard({ ...props }: IAudioCard) {
  return (
    <div className="card" key={props.key}>
      <div className="img-wrapper">
        <img data-spin src={props.artwork} />
      </div>
      <h4>{props.title}</h4>
      <h6>{props.artist}</h6>
      <audio src={props.src} controls={props.controls ? true : false} />
    </div>
  );
}

// export interface ICanvas {
//   draw?: Function;
//   height?: number;
//   width?: number;
// }
// export function Canvas({ height, width }: ICanvas) {
//   const canvas = React.useRef<HTMLCanvasElement>(null);
//   React.useEffect(() => {
//     const ctx = canvas?.current?.getContext("2d");
//     ctx?.beginPath();
//     ctx?.arc(0, 0, 150, 0, 2 * Math.PI);
//     ctx?.fillStyle = "blue";
//
//     // ctx?.stroke();
//     // ctx?.fillStyle = "red";
//     // ctx?.fill();
//   });
//   return <canvas ref={canvas} height={height} width={width} />;
// }
