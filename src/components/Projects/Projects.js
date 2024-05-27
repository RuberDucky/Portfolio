import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import standMan from "../../Assets/Projects/standMan.png";
import passport from "../../Assets/Projects/passport.png";
import yulo from "../../Assets/Projects/yulo.png";
import deliverClient from "../../Assets/Projects/deliver.png";
import deliverPartner from "../../Assets/Projects/gfl.png";
import vazra from "../../Assets/Projects/vazra.png";
import fitsRight from "../../Assets/Projects/fitsRight.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={standMan}
              isBlog={false}
              title="StandMan"
              description="StandMan is a Flutter-based mobile application that acts as a bridge between customers and employees for job creation and fulfillment. It offers features like job acceptance/rejection, preference radius setting, and user communication. It also includes a support contact and job history tracking. The app leverages location services to match jobs with nearby employees. Payments are processed via Stripe. The Laravel PHP backend was developed by a colleague."
              ghLink="https://github.com/RuberDucky/stand_manv2"
              // demoLink="https://chatify-49.web.app/"
              playStoreLink="https://play.google.com/store/apps/details?id=com.standman.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passport} // replace with the path to your Passporttastic app image
              isBlog={false}
              title="Passporttastic"
              description="Passporttastic is a unique mobile application that allows users to create digital passports. After a successful sign-up with authentic information, users can select the country they wish to travel to and create a corresponding digital passport. The app offers features such as viewing the passport profile, purchasing passport stamps for travel, and adding pages to the passport. Users can also customize their passport with stamps for the countries they plan to travel to. The primary purpose of Passporttastic is to facilitate the creation and management of digital passports."
            //ghLink="https://github.com/RuberDucky/" // replace with the link to your GitHub repository
            // demoLink="https://passporttastic-demo-link.com/" // replace with the link to your demo if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yulo} // replace with the path to your Yulo app image
              isBlog={false}
              title="Yulo"
              description="Yulo is a clone of TikTok that I contributed to. I worked on solving a number of issues and added new features, making them well-optimized. The main problem I solved was an issue with video uploads not working properly. This issue has been resolved and the app is now functioning correctly. The app will soon be uploaded to the Google Play Store and the App Store."
              // ghLink="https://github.com/YourUsername/yulo" // replace with the link to your GitHub repository
              playStoreLink="https://play.google.com/store/apps/details?id=com.yuloapp.app" // replace with the link to your app on the Play Store when available
            // appStoreLink="https://apps.apple.com/app/idYourAppId" // replace with the link to your app on the App Store when available
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deliverClient} // replace with the path to your Deliver Client app image
              isBlog={false}
              title="Deliver Client"
              description="Deliver Client is an app that allows users to book rides for the delivery of parcels and couriers. I made significant contributions to this app, including adding new features and solving issues. The app allows users to book a ride, and the available delivery partner can accept the delivery offer and start the ride. Once the parcel is delivered, users can leave reviews and use many other features."
              // ghLink="https://github.com/YourUsername/deliver-client" // replace with the link to your GitHub repository
              playStoreLink="https://play.google.com/store/apps/details?id=com.deliverbygfl.client" // replace with the link to your app on the Play Store when available
            // appStoreLink="https://apps.apple.com/app/idYourAppId" // replace with the link to your app on the App Store when available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deliverPartner} // replace with the path to your Deliver Partner app image
              isBlog={false}
              title="Deliver Partner"
              description="Deliver Partner is the companion app to Deliver Client. It allows delivery partners to accept delivery offers and start rides. I also made significant contributions to this app, including adding new features and solving issues. Once the delivery partner has delivered the parcel, they can mark the delivery as completed."
              ghLink="https://github.com/YourUsername/deliver-partner" // replace with the link to your GitHub repository
              playStoreLink="https://play.google.com/store/apps/details?id=com.deliverbygfl.partner" // replace with the link to your app on the Play Store when available
            // appStoreLink="https://apps.apple.com/app/idYourAppId" // replace with the link to your app on the App Store when available
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vazra} // replace with the path to your Vazra app image
              isBlog={false}
              title="Vazra"
              description="Vazra is a clone of WhatsApp that I contributed to. I worked on implementing Firebase Notifications, push notifications for calls and messages, and user blocking functionality. I also worked on reporting messages and overall performance optimization."
              // ghLink="https://github.com/YourUsername/vazra" // replace with the link to your GitHub repository
              playStoreLink="https://play.google.com/store/apps/details?id=com.vazra.apps" // replace with the link to your app on the Play Store when available
            // appStoreLink="https://apps.apple.com/app/idYourAppId" // replace with the link to your app on the App Store when available
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitsRight} // replace with the path to your FitsRight app image
              isBlog={false}
              title="FitsRight"
              description="FitsRight is a tailor app that I contributed to. Users can input their body size and the app will show branded clothes that fit them. We are currently working on implementing 3D models. Users will be able to upload images and our AI model will measure their size and automatically fit the clothes that are suitable for them."
            //  ghLink="https://github.com/YourUsername/fitsright" // replace with the link to your GitHub repository
             playStoreLink="https://play.google.com/store/apps/details?id=com.fitsright.app" // replace with the link to your app on the Play Store when available
            // appStoreLink="https://apps.apple.com/app/idYourAppId" // replace with the link to your app on the App Store when available
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
