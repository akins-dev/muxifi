import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { Button } from "src/components/Button";
import { Heading } from "src/components/Heading";
import PlayListImg from "src/assets/img/trial2.png";
import { PlaylistCard } from "./PlaylistCard";

const HeadingWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
});

export const PlayList = ({ title, size }) => {
    const { t } = useTranslation("playlist");
    return (
        <Box mt="37.5px">
            <HeadingWrapper>
                <Heading title={title} size={size} />
                <Button
                    sx={{
                        backgroundColor: "background.default",
                        color: "tertiary.light",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "tertiary.light",
                        "&:hover": {
                            border: "none",
                            color: "tertiary.dark",
                            // FIXME: enure to remove this
                        },
                    }}
                >
                    {t("more")}
                </Button>
            </HeadingWrapper>

            <Grid
                container
                spacing="13px"
                sx={{ "& > *": { margin: "1%!important" } }}
            >
                <PlaylistCard title="Playlist Title" image={PlayListImg} />
                <PlaylistCard title="Playlist Title" image={PlayListImg} />
                <PlaylistCard title="Playlist Title" image={PlayListImg} />
                <PlaylistCard title="Playlist Title" image={PlayListImg} />
                <PlaylistCard title="Playlist Title" image={PlayListImg} />
                <PlaylistCard title="Playlist Title" image={PlayListImg} />
                <PlaylistCard title="Playlist Title" image={PlayListImg} />
                <PlaylistCard title="Playlist Title" image={PlayListImg} />
            </Grid>
        </Box>
    );
};
