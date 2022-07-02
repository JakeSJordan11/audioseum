import { AudioCards, links as AudioCardsLinks } from "~/components/audioCards";
import { Grid, links as GridLinks } from "~/components/grid";

export function links() {
  return [
    ...AudioCardsLinks(),
    ...GridLinks(),
  ];
}

export default function Index() {
  return (
    <Grid>
      <AudioCards />
    </Grid>
  );
}
