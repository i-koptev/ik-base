import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../../src/theme/index.js"

export default function TopLayout(props) {
    return (
        <React.Fragment>
            {
                <Helmet>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    {/* <link
                        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
                        rel="stylesheet"
                    ></link> */}
                </Helmet>
            }
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )
}

TopLayout.propTypes = {
    children: PropTypes.node,
}
