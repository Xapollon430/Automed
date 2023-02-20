import * as S from "./Home.styles";
import Button from "@mui/material/Button";

const StyledButton = ({ text }) => {
  console.log(text);
  return (
    <Button
      style={{
        backgroundColor: "#d9d9d9",
        color: "black",
        width: 150,
        height: 50,
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
};

const Home = () => {
  return (
    <S.HomeWrapper>
      <S.Banner>
        <S.Left>
          <S.BannerTitle>
            Healthcare at the
            <br />
            speed of thought.
          </S.BannerTitle>
          <StyledButton text="Check In" />
        </S.Left>
        <S.Right>
          <StyledButton text="Google Slide" />

          <StyledButton text="White Paper" />

          <StyledButton text="Feedback Form" />
        </S.Right>
      </S.Banner>

      <S.Bottom>
        <S.BottomTitle>Using Chat GPT for Medicine</S.BottomTitle>
      </S.Bottom>
    </S.HomeWrapper>
  );
};

export default Home;
