import { Button } from "@mui/material";
import Loading from "../Components/Loading/Loading";
interface Props {
  title: string;
  handleSubmit: () => Promise<void>;
  isLoading:boolean
}
export default function SubmitButton({ title, handleSubmit,isLoading }: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        py: 1.4,
        fontSize: {
          xs: 16,
          md: 20,
        },
        borderRadius: 2,
        mt: 3.5,
        color: "white !important",
      }}
      disableRipple
      onClick={handleSubmit}
      disabled={isLoading}
    >
      {
        isLoading ? <Loading size={30} />:title
      }
    </Button>
  );
}
