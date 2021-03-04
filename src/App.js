import React, { useEffect, useState } from "react"
import {
    Typography,
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    FormControl,
    InputLabel,
    Select
} from "@material-ui/core"
import { PhotoCamera } from "@material-ui/icons"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import orange from "@material-ui/core/colors/orange"
import useStyles from "./styles"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const [darkMode, setDarkMode] = React.useState(prefersDarkMode)
    const theme = React.useMemo(() =>
        createMuiTheme({
            palette: {
                type: darkMode ? "dark" : "light",
                secondary: orange
            }
        })
    )
    useEffect(() => {
        setDarkMode(prefersDarkMode)
    }, [prefersDarkMode])
    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode)
    }

    const [numberFilter, setNumberFilter] = useState("0")

    const handleChange = (e) => {
        setNumberFilter(e.target.value)
    }

    const classes = useStyles()
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <PhotoCamera className={classes.icon} />
                        <Typography variant="h6">Photo Album</Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className={classes.container}>
                        <Container maxWidth="sm">
                            <Typography
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                                Photo Album
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                color="textSecondary"
                                paragraph
                            >
                                Hello everyone, this is my photo album
                            </Typography>
                            <div>
                                <FormControl
                                    variant="outlined"
                                    className={classes.formControl}
                                    fullWidth="True"
                                >
                                    <InputLabel htmlFor="outlined-number-native-simple">
                                        Filter by Number
                                    </InputLabel>
                                    <Select
                                        native
                                        value={numberFilter}
                                        onChange={handleChange}
                                        label="Filter by Number"
                                        inputProps={{
                                            name: "number",
                                            id: "outlined-number-native-simple"
                                        }}
                                    >
                                        <option aria-label="None" value={0} />
                                        {cards.map((card) => (
                                            <option value={card}>{card}</option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={classes.buttons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() =>
                                                alert(typeof numberFilter)
                                            }
                                        >
                                            View State
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleDarkModeToggle}
                                        >
                                            Go Dark
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => setNumberFilter("0")}
                                        >
                                            Clear Filter
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {cards
                                .filter((card) =>
                                    numberFilter === "0"
                                        ? String(card)
                                        : String(card) === numberFilter
                                )
                                .map((card) => (
                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent
                                                className={classes.cardContent}
                                            >
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                >
                                                    Heading
                                                </Typography>
                                                <Typography>
                                                    This is a media card. You
                                                    can use this section to
                                                    describe the content. {card}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color="primary"
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                >
                                                    Edit
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                    </Container>
                </main>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                    >
                        Something here to give the footer a purpose
                    </Typography>
                </footer>
            </ThemeProvider>
        </>
    )
}

export default App
