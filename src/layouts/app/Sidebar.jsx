import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useMediaQuery, Box, Drawer, Stack } from "@mui/material";
import { Anchor, SvgIcon } from "src/components";
import { CONFIG } from "src/config";

const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        width: CONFIG.UI.APP_SIDEBAR_WIDTH,
    },
}));

const Sidebar = ({ isOpenSidebar, onCloseSidebar }) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [isOpenSidebar, onCloseSidebar]);

    const renderContent = (
        <Box
            sx={{
                height: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Stack direction="column" spacing={2} sx={{ px: 6, my: 4 }}>
                <Anchor href="/" sx={{ height: 64 }}>
                    <SvgIcon name="logo" size={200} />
                </Anchor>
            </Stack>

            <Stack direction="column" spacing={3} sx={{ px: 6 }}>
                <Anchor
                    icon="home-selected"
                    href="/app"
                    label="Home"
                    sx={{
                        fontSize: "18px",
                        color: "tertiary.light",
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />

                <Anchor
                    icon="add-square"
                    href="/app/create"
                    label="Create Playlist"
                    sx={{
                        fontSize: "18px",
                        color: "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />

                <Anchor
                    icon="game"
                    href="/app/play"
                    label="Games"
                    sx={{
                        fontSize: "18px",
                        color: "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />
            </Stack>

            <Stack direction="column" spacing={3} sx={{ px: 6, mt: 8 }}>
                <Anchor
                    icon="profile-circle"
                    href="/app/create"
                    label="Become a Creator"
                    sx={{
                        fontSize: "18px",
                        color: "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />

                <Anchor
                    icon="collections"
                    href="/app/play"
                    label="Collections"
                    sx={{
                        fontSize: "18px",
                        color: "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />
            </Stack>
            <Box>{/* <Footer /> */}</Box>
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: CONFIG.UI.APP_SIDEBAR_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: CONFIG.UI.APP_SIDEBAR_WIDTH,
                            bgcolor: "background.default",
                            borderRightStyle: "dashed",
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
};

export default Sidebar;
