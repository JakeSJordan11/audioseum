export interface AudioCardProps {
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
  onClick?: () => void;
}

