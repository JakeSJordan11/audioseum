import { LinksFunction } from "remix";
import styles from "./AudioController.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

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
