import { MockData } from "~/data";

export default function Index() {
  return (
    <>
      <div className="grid">
        {MockData.map((item, index) => (
          <AudioCard
            key={index}
            src={item.src}
            artwork={item.artwork}
            title={item.title}
            // artist={item.artist}
            controls
          />
        ))}
      </div>
      <AudioController />
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
        <div className="img-span">
          <img data-spin src={props.artwork} height="100%" width="100%" />
        </div>
      </div>
      <h4>{props.title}</h4>
      <h6>{props.artist}</h6>
      <audio src={props.src} controls={props.controls ? true : false} />
    </div>
  );
}

export function AudioController() {
  return (
    <div className="audio-controls">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <button
          style={{
            border: 0,
            background: 0,
            padding: 0,
          }}
        >
          ▶
        </button>
        <div
          style={{
            border: "1px solid hsla(0, 0%, 0%, 1)",
            borderRadius: 50,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: 8,
              backgroundColor: "darkblue",
              width: "10%",
              borderRadius: 50,
            }}
          />
        </div>
        <div>4:12</div>
      </div>
    </div>
  );
}
