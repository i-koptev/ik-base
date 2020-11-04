import React, { useCallback } from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { injectIntl } from "gatsby-plugin-intl"

import { useForm } from "react-hook-form"
import { DevTool } from "react-hook-form-devtools"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { makeStyles, useTheme } from "@material-ui/styles"
import {
    withStyles,
    Typography,
    Container,
    Grid,
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#f1f1f1",
        [theme.breakpoints.up("lg")]: {
            // backgroundColor: "tomato",
        },
    },
    header: {
        marginTop: "2rem",
        marginBottom: "3rem",
    },
    label: {
        display: "inline-block",
        marginTop: "1em",
        marginBottom: "1em",
    },
    // leftCol: { minHeight: "200px", backgroundColor: "#efefef" },
    rightCol: { border: "1px solid skyblue", width: "100%" },
    form: {
        // width: "100%",
        // border: "1px solid skyblue",
        // backgroundColor: "rgba(0,0,0,0.3)",
        // padding: "2rem",

        // html form label
        "& label": {
            color: "tomato",
            fontSize: "1.5rem",
            // letterSpacing: "0.125rem",
        },

        // MatUI form label
        "& .MuiFormLabel-root": {
            // color: "red",
            fontSize: "0.875rem",
            // letterSpacing: "0.1rem",
        },
        // label focused styles - when it moves up
        "& label.Mui-focused": {
            color: "green",
        },

        // input and textarea fields
        "& .MuiTextField-root": {
            backgroundColor: "white",
            marginTop: 0,
            fontSize: "0.875rem",
            "&>*": {
                fontSize: "inherit",
            },

            // marginBottom: theme.spacing(4),
            // marginTop: theme.spacing(2),
            // marginBottom: theme.spacing(4),
            // width: "25ch",
            // width: "100%",
        },

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                // borderColor: "skyblue",
            },
            // fieldset hover styles
            "&:hover fieldset": {
                borderColor: "skyblue",
                boxShadow: "0 0 5px 0px rgba(255, 255, 255, 0.3)",
                // backgroundColor: "#eee2",
            },
            // fieldset focused styles
            "&.Mui-focused fieldset": {
                borderColor: "green",
                borderWidth: "1px",
                color: "yellow",
            },
        },
        // input field typed symbols color
        "& input": { color: "rgba(255, 0, 255, 0.8)" },

        // textarea field typed symbols color
        // "& .MuiOutlinedInput-inputMultiline": { color: "yellow" },
        "& textarea": {
            color: "rgba(0, 0, 255, 0.8)",
        },
        "& .MuiFormHelperText-root": {
            color: "tomato",
        },
    },
    error: {
        color: "lime",
    },
}))

const getIntlStringById = (id) => {
    return injectIntl(({ intl }) => {
        // return intl.locale
        return intl.formatMessage({ id: id })
    })()
}

const schema = yup.object().shape({
    // firstName: yup.string().required(),
    // age: yup.number().positive().integer().required(),
    email: yup
        .string()
        // .required(getIntlStringById("contactFormErrorEnterEmailAddressPlease"))
        .required("contactFormErrorEnterEmailAddressPlease")
        .email(
            "contactFormErrorWeNeedYourEmailAddressToContactYou"
            // getIntlStringById(
            //     "contactFormErrorWeNeedYourEmailAddressToContactYou"
            // )
        ),
    name: yup
        .string()
        // .required(getIntlStringById("contactFormErrorFieldIsRequired"))
        .required("contactFormErrorFieldIsRequired")
        // .min(8, getIntlStringById("contactFormErrorMessageMustBeAtLeast8")),
        .min(8, "contactFormErrorMessageMustBeAtLeast8"),
})

const ContactsPageView = ({
    intl,
    className,
    heading,
    emailLabel,
    email,
    addressLabel,
    address,
    phoneNumberLabel,
    phone,
}) => {
    const { register, errors, handleSubmit, clearErrors, control } = useForm({
        // validateCriteriaMode: "firstErrorDetected",
        validateCriteriaMode: "all",
        // mode: "onChange",
        mode: "onBlur",
        reValidateMode: "onChange", //onChange
        defaultValues: {
            name: "",
            phone: "",
            email: "",
        },
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        // event.preventDefault()
        console.log(data)
    }
    //https://github.com/react-hook-form/react-hook-form/issues/283
    const clearInputError = useCallback(
        (event) => {
            if (errors[event.target.name]) {
                clearErrors(event.target.name)
            }
        },
        [clearErrors, errors]
    )

    const classes = useStyles()
    const theme = useTheme()

    return (
        <Container
            maxWidth={theme.siteContainer.maxWidth}
            // {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    {/* <DevTool control={control} /> */}
                    <Typography
                        className={classes.header}
                        variant="h3"
                        component="h3"
                        align="center"
                    >
                        {heading}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    margin="normal"
                                    // required
                                    fullWidth
                                    name="name"
                                    label="Your Name"
                                    type="text"
                                    id="name"
                                    autoComplete="off"
                                    className={classes.textField}
                                    // error={errors.name}
                                    inputRef={register}
                                    // autoFocus
                                    onChange={clearInputError}
                                />
                                {
                                    <div className={classes.error}>
                                        {errors.name &&
                                            intl.formatMessage({
                                                id: errors.name.message,
                                            })}
                                    </div>
                                }
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    margin="normal"
                                    // required
                                    fullWidth
                                    name="email"
                                    label="Your EMail"
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    className={classes.textField}
                                    // error={!!errors.phone}
                                    inputRef={register}
                                    onChange={clearInputError}
                                />
                                {
                                    <div className={classes.error}>
                                        {errors.email &&
                                            intl.formatMessage({
                                                id: errors.email.message,
                                            })}
                                    </div>
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    margin="normal"
                                    // required
                                    fullWidth
                                    name="email"
                                    label="Your EMail"
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    className={classes.textField}
                                    // error={!!errors.phone}
                                    inputRef={register}
                                    onChange={clearInputError}
                                />
                                {
                                    <div className={classes.error}>
                                        {errors.email &&
                                            intl.formatMessage({
                                                id: errors.email.message,
                                            })}
                                    </div>
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    margin="normal"
                                    multiline
                                    rows={7}
                                    rowsMax={12}
                                    // required
                                    fullWidth
                                    name="email"
                                    label="Your EMail"
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    className={classes.textField}
                                    // error={!!errors.phone}
                                    inputRef={register}
                                    onChange={clearInputError}
                                />
                                {
                                    <div>
                                        {errors.email &&
                                            intl.formatMessage({
                                                id: errors.email.message,
                                            })}
                                    </div>
                                }
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={!!errors.name || !!errors.email}
                            className={classes.submit}
                        >
                            Send
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={5} container>
                    <div className={classes.rightCol}></div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default injectIntl(ContactsPageView)

ContactsPageView.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    emailLabel: PropTypes.string,
    email: PropTypes.string,
    addressLabel: PropTypes.string,
    address: PropTypes.string,
    phoneNumberLabel: PropTypes.string,
    phone: PropTypes.string,
}
