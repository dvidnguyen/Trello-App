import Box from "@mui/material/Box";
import Card from "./Card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
const ListCards = ({ cards }) => {
  
  return (
    <>
      <SortableContext
        items={cards?.map((c) => c._id)}
        strategy={verticalListSortingStrategy}
      >
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
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </Box>
      </SortableContext>
    </>
  );
};

export default ListCards;
