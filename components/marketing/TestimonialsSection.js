import React from "react";
import Section from "components/primitives/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/primitives/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: 0,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function TestimonialsSection(props) {
  const classes = useStyles();

  const items = [
    {
      //  avatar: "https://uploads.divjoy.com/pravatar-150x-5.jpeg",
      name: "Glenn D.",
      testimonial:
        "Finally, I can get rid of my junk drawer contents in a responsible manner. No more tossing everything in the trash only to wind up in the landfill. Maybe it’s a small step, but small steps eventually get you where you’re going. ",
      location: "Park City, UT",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Divider middle />
      <div
        style={{
          //  borderTop: "solid 1px black",
          width: "100%",
          backgroundColor: "#f8f8f8",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <Container>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            textColor={props.textColor}
            size={3}
            textAlign="center"
          />
          <Grid container={true} justify="center" spacing={4}>
            {items.map((item, index) => (
              <Grid item={true} xs={12} sm={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="body1" component="p">
                      "{item.testimonial}"
                    </Typography>
                  </CardContent>
                  <CardHeader
                    className={classes.header}
                    // avatar={
                    //   <Avatar
                    //     src={item.avatar}
                    //     alt={item.name}
                    //     className={classes.avatar}
                    //   />
                    // }
                    title={item.name}
                    subheader={item.location}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Section>
  );
}

export default TestimonialsSection;
