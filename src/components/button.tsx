import Button from '@mui/joy/Button';

const MyButton = (props: any) => {
  return (
    <Button component='a' endDecorator={props.icon} onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

export default MyButton;


