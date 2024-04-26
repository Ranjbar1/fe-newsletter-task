import { Box, Stack, Typography } from "@mui/joy";
import SearchBox from "./SearchBox";
import SelectCategoriesDropDown from "./SelectCategoriesDropDown";
import SelectSourceDropDown from "./SelectSourceDropDown";
export default function Navbar() {
  return (
    <Box position={"sticky"} boxShadow={(t) => t.shadow.sm} sx={{}}>
      <Stack direction={"row"} alignItems={"center"} gap={2} px={2}>
        <Typography
          borderRadius={10}
          px={4}
          py={1}
          fontFamily={"serif"}
          level="h3"
        >
          News Better
        </Typography>
        <SearchBox />
        <SelectSourceDropDown />
        <SelectCategoriesDropDown />
      </Stack>
    </Box>
  );
}
