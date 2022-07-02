import type { AudioCardProps } from './types';
import styles from "./AudioCard.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
};

export function AudioCard({ ...props }: AudioCardProps) {
  return (
    <article className="card" key={props.key} onClick={props.onClick}>
      <h1 className='title'>{props.title}</h1>
      <img className='img-source' src={props.artwork} />
      <p>{props.artist}</p>
      <audio src={props.src} controls={props.controls ? true : false} />
    </article>
  );
}
