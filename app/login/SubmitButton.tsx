import { Button } from "@mui/material";
interface Props {
  title: string;
  handleSubmit: () => Promise<void>;
}
export default function SubmitButton({ title,handleSubmit }: Props) {
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
    >
      {title}
    </Button>
  );
}
