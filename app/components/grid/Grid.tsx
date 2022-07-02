import type { GridProps } from "./types";
import styles from "./Grid.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
};

export function Grid(props: GridProps) {
  return (
    <main className="grid">
      {props.children}
    </main>
  );
}

