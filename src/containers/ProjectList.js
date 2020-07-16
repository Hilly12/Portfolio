import React, { Component } from "react";
import Project from "../components/Project";
import "../assets/Project.css";
import { List } from "antd";
import axios from "axios";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      projectData: [{}, {}, {}, {}, {}],
    };
  }

  componentDidMount() {
    axios.get("https://www.aahilm.com/api/").then((response) => {
      this.setState({
        loading: false,
        projectData: response.data.reverse(),
      });
    });
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        // pagination={{
        //   onChange: (page) => {
        //     console.log(page);
        //   },
        //   pageSize: 8,
        //   responsive: "true",
        // }}
        dataSource={this.state.projectData}
        renderItem={(item) => (
          <Project item={item} loading={this.state.loading} />
        )}
      />
    );
  }
}

export default ProjectList;
