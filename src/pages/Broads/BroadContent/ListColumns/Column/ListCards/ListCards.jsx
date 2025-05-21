import Box from "@mui/material/Box";
import Card from "./Card/Card";
const ListCards = ({cards}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: "0 5px",
          m: "0 5px",
          gap: 1.1,
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: (theme) =>
            `calc(${theme.trello.broadContentHeight} 
                    - ${theme.spacing(5)}
                    - ${theme.trello.heightHeaderColumn}
                    - ${theme.trello.heightFooterColumn}
              )`,
              
          "::-webkit-scrollbar-thumb ": {
            backgroundColor: "#ced0da",
          },
          "::-webkit-scrollbar-thumb:hover ": {
            backgroundColor: "#bfcfdf",
          },
        }}
      >
        {cards.map(card=><Card key={card._id} card ={card}/>)}
      </Box>
    </>
  );
};

export default ListCards;
