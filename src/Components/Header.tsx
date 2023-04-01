import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps): JSX.Element => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar variant="regular">
        <Typography variant="h6" color="inherit" sx={{ flex: 1 }}>
          {title}
        </Typography>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ "&:hover": { backgroundColor: "#1976d2" } }}
        >
          <div style={{ marginTop: 4, position: "relative" }}>
            {cartItems?.length > 0 ? (
              <span
                style={{
                  position: "absolute",
                  top: -15,
                  right: 70,
                  background: "white",
                  color: "blue",
                  borderRadius: "100%",
                  padding: "5px",
                  fontSize: "15px",
                }}
              >
                {cartItems?.length}
              </span>
            ) : null}

            <ShoppingCartIcon
              sx={{ mr: 10 , width:"20"}}
              onClick={() => navigate("/cart")}
            />
          </div>
          <LogoutIcon onClick={() => navigate("/")} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
