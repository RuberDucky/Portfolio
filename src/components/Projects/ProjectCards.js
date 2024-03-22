import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="roundedImage" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px" }}>
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        <Button variant="primary" href={props.playStoreLink} target="_blank" style={{ marginRight: "10px" }}>
          <FaGooglePlay /> &nbsp;
          {"PlayStore"}
        </Button>
        <Button variant="primary" href={props.appStoreLink} target="_blank"style={{   marginTop: "10px"  }}>
          <FaAppStoreIos /> &nbsp;
          {"AppStore"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;