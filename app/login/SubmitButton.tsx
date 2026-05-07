import { Button } from "@mui/material";
interface Props {
  title: string;
  //   disableFunction:()=>{}
}
export default function SubmitButton({ title }: Props) {
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
      disabled
    >
      {title}
    </Button>
  );
}
