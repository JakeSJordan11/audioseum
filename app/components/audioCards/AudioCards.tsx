import { TRACK_DATA } from "~/data";
import { AudioCard, links as AudioCardLinks } from "../audioCard";

export function links() {
  return [...AudioCardLinks()];
}

export function AudioCards() {
  return (
    <>
      {TRACK_DATA.map((item, index) => {
        return (
          <AudioCard
            key={index}
            src={item.audio}
            artwork={item.image}
            title={item.title}
            // artist={item.artist}
            controls
            onClick={() => console.log("clicked")}
          />
        )
      })}
    </>
  );
}
