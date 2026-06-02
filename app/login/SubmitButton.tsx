import { Button } from "@mui/material";
import Loading from "../Components/Loading/Loading";
interface Props {
  title: string;
  handleSubmit?: () => Promise<void>;
  isLoading:boolean
  type?:'submit' | 'button'
}

export default function SubmitButton({ title, handleSubmit, isLoading,type='button' }: Props) {
  return (
    <Button
     type={type}
      variant="contained"
      color="primary"
      sx={{
         width:'100%',
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
