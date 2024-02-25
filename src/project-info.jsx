import React from "react";
import { Box, Fade, Typography } from "@mui/material";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import linkedinLogo from "./linkedin-logo.png";

export const ProjectInfo = () => {
  return (
    <Box>
        {/* TEAM INFO */}
      <Box sx={{ margin: "32px 8px", display: "flex", justifyContent: "center" }} >
        <Box sx={{ display: "block", textAlign: "center", width: '100%' }}>
          <Typography variant="h4" color="white">CS 6150: DUCSS Team</Typography>
          <Typography sx={{ textAlign: "center" }} variant="h5" color="white">Members: Matthew Days, Diya Mitra, David Strube, Cid Khode</Typography>
          <Box sx={{ display: "inline", justifyContent: "space-between", marginTop: 1, "* > img": { height: 50 }, "> :not(:last-child)": { marginRight: 3 } }}>
            <Fade in timeout={3000} sx={{ width: 'min-content', display: 'inline-block' }}>
              <Box>
                <img src={image1} alt="Matthew Days" />
                <Typography sx={{ minHeight: 120 }} color="#38FF38">Matthew Days (Team Lead / Fullstack Developer)</Typography>
                <a href="https://www.linkedin.com/in/matthew-days/" rel="noreferrer" target="_blank"><img style={{ marginTop: 4, height: 50 }} src={linkedinLogo} alt="Matthew Days LinkedIn" /></a>
              </Box>
            </Fade>
            <Fade in timeout={3000} sx={{ width: 'min-content', display: 'inline-block' }}>
              <Box>
                <img src={image2} alt="Diya Mitra" />
                <Typography sx={{ minHeight: 120 }} color="#FF6B6B">Diya Mitra (Fullstack Developer)</Typography>
                <a href="https://www.linkedin.com/in/diya-mitra/" rel="noreferrer" target="_blank"><img style={{ marginTop: 4, height: 50 }} src={linkedinLogo} alt="Diya Mitra LinkedIn" /></a>
              </Box>
            </Fade>
            <Fade in timeout={3000} sx={{ width: 'min-content', display: 'inline-block' }}>
              <Box>
                <img src={image3} alt="David Strube" />
                <Typography sx={{ minHeight: 120 }} color="#66A3F0">David Strube (Fullstack Developer)</Typography>
                <a href="https://www.linkedin.com/in/david-strube-0/" rel="noreferrer" target="_blank"><img style={{ marginTop: 4, height: 50 }} src={linkedinLogo} alt="David Strube LinkedIn" /></a>
              </Box>
            </Fade>
            <Fade in timeout={3000} sx={{ width: 'min-content', display: 'inline-block' }}>
              <Box>
                <img src={image4} alt="Cid Khode" />
                <Typography sx={{ minHeight: 120 }} color="yellow">Cid Khode (Fullstack Developer)</Typography>
                <a href="https://www.linkedin.com/in/chidanand-khode/" rel="noreferrer" target="_blank"><img style={{ marginTop: 4, height: 50 }} src={linkedinLogo} alt="Cid Khode LinkedIn" /></a>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Box>
      {/* PROJECT INFO */}
      <Typography color="white" textAlign="center">PROJECT INFO</Typography>
      <Box sx={{ margin: "8px 8px 16px", justifyContent: "center", display: "flex", padding: 2, border: "solid 2px #66A3F0", borderRadius: 5 }}>
        <Typography color="white">
          Our misson is to create an Android application that measures a user"s GAIT over a short period of time. Measuring GAIT is an important
          part of detecting diabetic foot ulcers. Patients with Diabetes may lose sensation in their feet, so ulcers can easily go undetected
          and cause further complications. By incorporating motion sensors native to Android smartphones, our team"s goal is to build an application
          that detects walking pattern abnormalities in a user and then uses that to determine if there could be detection of an ulcer.
        </Typography>
      </Box>
      {/* APP UI / UX */}
      <Typography color="white" textAlign="center">APP UI / UX & OVERALL GOALS</Typography>
      <Box sx={{ margin: "8px 8px 16px", justifyContent: "center", display: "flex", padding: 2, border: "solid 2px purple", borderRadius: 5 }}>
        <Typography component="div" color="white">
          Our team is working diligently and hard to collaborate with our mentors and sponsors to curate a design conducive to achieving our desi#FF6B6B
          goals. After some initial brainstorming, we came up with the following ideas:
          <ul>
            <li>Start page can show a big circle button that says “Start”</li>
            <li>
              Upon clicking start, the instructions would show on the screen and tell the user that they need to keep their phone in their pocket and
              walk in a straight line for 1 minute
            </li>
            <li>At the end of the test, the phone would vibrate 2 times to indicate that the test is done, allowing the user to focus on a steady walking cadence rather than manually checking the screen</li>
            <li>Then, the user would be brought to a metrics page of some sort (still brainstorming what it would look like)</li>
            <li>This new page would show detailed metrics of GAIT measurements, which can include raw linear acceleration of the participant's movements at the front pockets in the X, Y, and Z directions</li>
            <li>The GAIT itself can be calculated using the tri-axial accelerometer which we can leverage using Android SDKs allowing us to eliminate gravitational acceleration</li>
            <li>
              Through signal processing and data analysis strategies, the following gait metrics can be calculated:
              </li>
            <li style={{ listStyleType: 'none' }}>
              <ul>
                <li>Peak Frequency: gait cycle - the time taken to complete one step</li>
                <li>Root Mean Square: degree of gait instability - indicates limping or other abnormalities consistent with diabetic foot injuries</li>
                <li>Autocorrelation Peak: degree of gait balance</li>
                <li>Coefficient of Variance: variability in time taken to complete consecutive footsteps</li>
              </ul>
            </li>
            <li>We can use this information to determine the need for correctional action to prevent further exacerbation of diabetic foot injuries.</li>
            <li>
              Potential issues:
            </li>
            <li style={{ listStyleType: 'none' }}>
              <ul>
                <li>Inconsistent sampling rate: smartphones can have a variable sampling rate due to simultaneous background processes</li>
                <li style={{ listStyleType: 'none' }}><ul><li>We can mitigate this by collecting data over a longer period of time and across both legs. This will allow us to validate the data</li></ul></li>
                <li>Our developer testing may not accurately represent true diabetic gait inconsistencies</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Box>
      {/* USERS INFO */}
      <Typography color="white" textAlign="center">TARGET USERS</Typography>
      <Box sx={{ margin: "8px 8px 16px", justifyContent: "center", display: "flex", padding: 2, border: "solid 2px orange", borderRadius: 5 }}>
        <Typography color="white">
          Target users of our app will mostly be seniors. Because of this, we want to keep the app as minimally confusing as possible. The user
          interface shouldn"t be overly complicated and overwhelming to the user. We aim to design our user interface with simplicity in mind,
          ensuring ease of use for such users who may be less familiar with smartphone technology. Furthermore, by keeping the interface clean and
          intuitive, we prioritize creating a positive user experience that encourages engagement and avoids overwhelming any demographic. Our goal
          is to make sure everyone can comfortably navigate the app without frustration or confusion, because otherwise, they may be more inclined to
          give up on the application and no longer use it. This defeats the purpose of trying to detect GAIT abnormalities and the detection of ulcers.
        </Typography>
      </Box>
      {/* VIDEO PRESENTATION */}
      <Typography color="white" textAlign="center">INITIAL DEMO</Typography>
      <Box sx={{ margin: "8px 8px 16px", justifyContent: "center", display: "flex", padding: 2, border: "solid 2px #FF6B6B", borderRadius: 5, "> a": { textDecorationColor: "#66A3F0" }, ">:first-of-type": { marginRight: 4 } }}>
        <a href="https://teams.microsoft.com/l/message/19:6071b1317a274edb86b22cc883e99746@thread.v2/1708304315668?context=%7B%22contextType%22%3A%22chat%22%7D" target="_blank" rel="noreferrer"><Typography color="#66A3F0">Initial Demo Slides</Typography></a>
        <a href="https://drive.google.com/file/d/1w-d3IL6mf8xQLtHtfiBKxSjq86FJ_dpU/view?usp=sharing" target="_blank" rel="noreferrer"><Typography color="#66A3F0">Initial Demo Presentation</Typography></a>
      </Box>
      { /* LIGHTHOUSE SCORES */}
      <Typography color="white" textAlign="center">LIGHTHOUSE SCORES</Typography>
      <Box sx={{ margin: "8px 8px 16px", justifyContent: "center", textAlign: "center", padding: 2, border: "solid 2px white", borderRadius: 5, "> :not(:last-child)": { marginRight: 4 } }}>
        <Box sx={{ display: "inline-block", ">: first-of-type": { textAlign: "center" }, "> :last-child": { width: "min-content", margin: "0 auto", padding: 3, borderRadius: 10, border: "solid 3px #38FF38" } }}>
          <Typography variant="h6" color="#38FF38">Performance</Typography>
          <Typography color="#38FF38">100</Typography>
        </Box>
        <Box sx={{ display: "inline-block", ">: first-of-type": { textAlign: "center" }, "> :last-child": { width: "min-content", margin: "0 auto", padding: 3, borderRadius: 10, border: "solid 3px #38FF38" } }}>
          <Typography variant="h6" color="#38FF38">Accessibility</Typography>
          <Typography color="#38FF38">100</Typography>
        </Box>
        <Box sx={{ display: "inline-block", ">: first-of-type": { textAlign: "center" }, "> :last-child": { width: "min-content", margin: "0 auto", padding: 3, borderRadius: 10, border: "solid 3px #38FF38" } }}>
          <Typography variant="h6" color="#38FF38">Best Practices</Typography>
          <Typography color="#38FF38">100</Typography>
        </Box>
        <Box sx={{ display: "inline-block", ">: first-of-type": { textAlign: "center" }, "> :last-child": { width: "min-content", margin: "0 auto", padding: 3, borderRadius: 10, border: "solid 3px #38FF38" } }}>
          <Typography variant="h6" color="#38FF38">SEO</Typography>
          <Typography color="#38FF38">100</Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default ProjectInfo;
