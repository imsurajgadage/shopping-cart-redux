import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Header from "./Header";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/CartSlice";

const Dashboard = (): JSX.Element => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Header title="Dashboard" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {items?.map((item, index: number) => (
          <Card
            sx={{
              width: 400,
              padding: "5px",
              margin: "20px",
              display: "block",
            }}
            key={index}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h3" gutterBottom>
                {item?.name}
              </Typography>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="mobile"
                src={item?.image}
              />
            </CardContent>
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {`$${item?.price}`}
            </Typography>
            <CardActions
              sx={{
                cursor: "pointer",
                display: "flex ",
                justifyContent: "center",
              }}
            >
              <ControlPointIcon
                fontSize="large"
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              />
            </CardActions>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
