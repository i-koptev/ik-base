import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        marginTop: "-56px",
        [theme.breakpoints.up("sm")]: {
            marginTop: "-65px",
        },
    },
    sectionContainer: {
        backgroundColor: "#fff",
        paddingTop: `56px`,
        [theme.breakpoints.up("sm")]: {
            paddingTop: `65px`,
        },
    },
    header: {
        padding: "1rem",
    },
}))

const AboutPageView = ({ className, header, subheader, text }) => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <div className={classes.root}>
            <Container
                maxWidth={theme.siteContainer.maxWidth}
                // component="section"
                className={classes.sectionContainer}
            >
                <Grid
                    container
                    spacing={4}
                    // {...rest}
                    // className={classes.root}
                    // style={{ backgroundColor: "tomato" }}
                >
                    <Grid item xs={12}>
                        <Typography
                            className={classes.header}
                            variant="h1"
                            component="h1"
                            align="center"
                        >
                            {header}
                        </Typography>
                        <Typography
                            className={classes.header}
                            variant="h4"
                            component="h4"
                            align="center"
                        >
                            {subheader}
                        </Typography>

                        <div
                            className={classes.htmlContent}
                            dangerouslySetInnerHTML={{
                                __html: text,
                            }}
                        />
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Necessitatibus expedita nobis accusantium
                            tenetur molestiae debitis incidunt impedit illo,
                            voluptatibus blanditiis explicabo labore harum eos
                            veniam doloribus dignissimos veritatis cumque
                            voluptates voluptatum, enim officiis aliquid
                            dolorem. Unde perspiciatis sed qui dolore, ipsa,
                            voluptatum cupiditate maiores aliquid perferendis
                            vitae corporis est at quod accusamus a enim quo ab
                            molestiae quis modi dolores mollitia quia? Illo
                            aliquam magni ea iste ipsam enim, quam quibusdam
                            recusandae ratione maiores blanditiis numquam dicta,
                            non inventore sit. Dolores similique in dolorum
                            quasi quibusdam? Voluptatem sapiente mollitia qui
                            impedit, aspernatur quam assumenda eius cumque autem
                            pariatur! Fugiat officiis, voluptates, quos quasi
                            quibusdam, repellat enim magni deserunt aliquid
                            laudantium eum labore porro quam sunt officia
                            molestias repellendus esse. Officiis voluptatum
                            dolore neque tempore mollitia dolores voluptates qui
                            sapiente quisquam error illo magnam necessitatibus
                            explicabo non hic velit, rem odio aliquid id,
                            consequatur cupiditate! Consectetur quibusdam
                            voluptates doloremque iste totam aut, neque facere,
                            necessitatibus sit saepe iusto eum ullam optio.
                            Soluta aspernatur distinctio eveniet iusto
                            voluptatem mollitia adipisci architecto? Aut
                            architecto, mollitia quibusdam odit, modi aspernatur
                            ipsa deserunt culpa cumque molestias voluptatum.
                            Magni rem ut quis, amet dolore a tempore eum quod
                            fugit, obcaecati fugiat exercitationem. Voluptate
                            eveniet officia quibusdam aut aliquam quia natus
                            laborum, voluptatem veniam ipsa quo doloremque
                            officiis debitis quos hic cumque voluptates cum
                            illum? Ipsam, cumque officiis delectus quidem quae
                            laboriosam mollitia doloremque soluta, placeat
                            quaerat dicta iure labore debitis doloribus
                            accusamus, dolorum alias. Suscipit tenetur eveniet
                            dolorem quisquam minima dolore neque odio, aut
                            dicta, vero magnam sunt quae mollitia maxime et quam
                            autem perferendis minus nisi quis. Adipisci repellat
                            recusandae debitis laboriosam enim ab sapiente esse
                            assumenda, atque nisi reprehenderit. Veniam ratione
                            nobis placeat consequatur cupiditate nisi quibusdam
                            laborum exercitationem sunt iste voluptatum
                            laudantium veritatis facilis molestiae libero
                            pariatur, est ipsum blanditiis earum sint dicta.
                            Alias reiciendis, perferendis pariatur asperiores
                            velit assumenda expedita tempora impedit accusamus
                            praesentium eveniet et cum saepe quisquam doloribus,
                            possimus sapiente eaque facere? Rem nesciunt veniam
                            alias neque debitis incidunt explicabo, dolore et
                            illo sapiente laborum amet recusandae non eveniet
                            modi cupiditate ipsam, ducimus expedita, rerum
                            blanditiis sunt velit sit! Fugiat vel tempore aut
                            nostrum provident temporibus mollitia nulla soluta
                            dicta magni, magnam repudiandae, qui ratione dolor
                            eligendi dolorum quam et doloremque quas,
                            accusantium tempora libero totam natus. Architecto
                            totam cumque autem error consectetur nihil fuga,
                            asperiores officia a voluptates eveniet vero facere
                            facilis esse? Minus, numquam maxime facere nihil ab
                            magni adipisci non recusandae possimus vel excepturi
                            consequatur eos, nulla dolore natus quia ducimus
                            laborum quis corporis dolorum voluptate blanditiis
                            distinctio! Repellendus ullam ut autem magnam labore
                            pariatur possimus eaque, minima vel assumenda
                            dignissimos neque minus dolorem aliquam recusandae
                            repudiandae nihil fugiat obcaecati fuga, sit tempore
                            ad doloremque cupiditate sequi. Asperiores
                            voluptatem minus sunt doloremque quos velit, debitis
                            aut quibusdam nam voluptas id vel reiciendis
                            deserunt, minima, expedita provident fugit? Commodi
                            vel ab eius temporibus nostrum non dolor ratione
                            nisi aliquid quaerat! Et ad assumenda vero neque ab
                            esse magnam? Soluta dicta aperiam doloremque eos
                            autem minima blanditiis dignissimos magni est
                            veritatis sint fuga quo adipisci, expedita
                            perferendis velit et nulla aut excepturi, cupiditate
                            libero voluptatibus possimus mollitia. Nobis minima
                            repellendus in itaque, mollitia deserunt expedita
                            hic dolorum beatae molestias optio, laborum illo
                            quam incidunt nulla voluptatum ipsam, laudantium rem
                            voluptas architecto esse obcaecati? Dignissimos
                            molestiae nesciunt tempora quod placeat! Ab, ut
                            repudiandae. Sunt modi praesentium similique magni
                            eos at ipsum minus suscipit iste possimus! Veniam at
                            possimus cupiditate adipisci optio magni modi
                            exercitationem, laborum, asperiores, qui libero nisi
                            illo recusandae maxime! Fuga, aperiam. Blanditiis,
                            dicta velit? Rerum quod pariatur illo ipsum unde
                            itaque nesciunt dicta odio doloremque molestiae
                            neque vel optio, deleniti quis, architecto ullam?
                            Nisi excepturi in nulla. Sapiente nulla neque
                            aliquid illo fugiat! Perferendis ut nemo sint
                            debitis, excepturi laudantium dolore doloribus
                            quisquam pariatur nulla error tempore numquam
                            consectetur quia officia in esse eius nisi ad
                            delectus dolorem autem consequatur. Ipsam
                            reprehenderit labore veritatis eligendi laudantium.
                            Culpa natus doloremque modi eligendi deleniti dolore
                            quisquam. Maiores placeat nam praesentium quas esse
                            veritatis odit at, enim accusantium magni illo
                            voluptates non, voluptate aut deleniti nostrum
                            fugit. Ratione suscipit ipsam sequi, saepe odit fuga
                            eaque maiores? Nemo eum repudiandae reiciendis
                            excepturi, nisi tempora ad eius a, veritatis earum
                            consequatur! Assumenda cum, est asperiores ducimus
                            vel nam eaque laboriosam autem nobis rerum soluta
                            tempora, voluptatum neque repellendus odit
                            consequuntur iure porro voluptatem nostrum explicabo
                            quidem itaque unde. Libero aperiam provident debitis
                            minima quibusdam harum quis exercitationem maxime
                            dolorum fugiat sunt sint amet vero voluptatibus
                            consectetur quia facere ducimus rem unde pariatur
                            soluta blanditiis, minus doloremque. Aliquam
                            suscipit animi iste nisi omnis repudiandae ut
                            molestiae error sunt facilis, blanditiis consequatur
                            perferendis rerum repellendus libero amet modi
                            nihil, ipsa porro dignissimos commodi aperiam
                            voluptate non doloremque? Tempora cupiditate quos
                            similique laudantium quisquam animi quod, unde quo
                            in odit velit, libero fugit molestiae repellendus
                            eligendi laboriosam quia impedit expedita. Labore
                            inventore, aliquam officia, eligendi rerum sit
                            ducimus mollitia, porro minus voluptatum corrupti
                            saepe. Odio atque facilis laboriosam eos doloremque
                            necessitatibus, animi consectetur provident?
                            Consequatur iusto ullam explicabo voluptate ipsam
                            corporis voluptatibus provident reiciendis quis
                            velit, odio, magni qui officia maiores earum,
                            quaerat deleniti cumque magnam architecto quae
                            officiis eum eaque. Magnam reiciendis maxime fugit
                            numquam eveniet! Et dolore ipsam fugit cum odio, ea
                            sit vero facere maiores dolorum repellat
                            reprehenderit commodi. Eveniet, sunt! Debitis itaque
                            quod, blanditiis facere, minima quia tempora
                            molestias officia, vero architecto distinctio
                            excepturi mollitia tempore ipsam. Odit suscipit quia
                            assumenda accusamus autem aliquid, architecto eius
                            et dolor perferendis tenetur vitae reprehenderit!
                            Praesentium autem itaque fuga sunt, culpa omnis ut
                            ratione harum quam nihil illo, quae earum sed
                            dolorem voluptatibus eius quia neque cum explicabo
                            dolor mollitia voluptatum possimus! Odit dolor
                            excepturi molestiae enim iusto. Nulla quaerat optio,
                            officiis odit reprehenderit eligendi provident
                            mollitia, ad praesentium veritatis possimus vero
                            esse ullam atque maiores culpa! Repellat, quis.
                            Distinctio, a voluptatem blanditiis totam suscipit
                            animi dolore omnis porro architecto, temporibus
                            soluta ratione libero voluptates nam earum minus
                            pariatur, ea velit reiciendis voluptatum. Officia
                            adipisci culpa dolorem vero molestiae nam inventore
                            consequuntur, ipsum maiores!
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AboutPageView

AboutPageView.propTypes = {
    className: PropTypes.string,
    aboutHeading: PropTypes.string,
    aboutSubheading: PropTypes.string,
    aboutText: PropTypes.string,
}
