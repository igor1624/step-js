// https://www.figma.com/file/pLzezNSNm0MenZKcai7kKr/Auto-Layout-Dialog-(Community)-(Community)?type=design&node-id=0-1&mode=design&t=V7YGXDT2al6dBf4j-0

import React from "../react";
import { Modal0, Modal1, Modal2, Modal3, Modal4, Modal5, Modal6, Modal7 } from "@step-js-custom/index";
import "./example-custom-02.css";

function ExampleCustom02() {
  return (
    <>
      <div
        className="modal"
      >
        <Modal0
          title="Modal 0"
          grayDescription="All team members will be able to read, write and share this file."
          okButtonText="OK"
          onCancel={() => {
            console.log("cancel");
          }}
          onOK={() => {
            console.log("OK");
          }}
        />
      </div>
      <div
        className="modal"
      >
        <Modal1
          title="Modal 1"
          grayDescription="The backups created with this functionality may contain some sensitive data."
          cancelButtonText="Cancel"
          onCancel={() => {}}
          okButtonText="Got It"
          onOK={() => {}}
        />
      </div>
      <div
        className="modal"
      >
        <Modal2
          title="Modal 2"
          grayDescription="The archived files will be automatically deleted after 1 mounth. You will not be able to access to your file if they are deleted."
          cancelButtonText="Cancel"
          onCancel={() => {}}
          okButtonText="Archive"
          onOK={() => {}}
        />
      </div>
      <div
        className="modal"
      >
        <Modal3
          title="(3) Archive project"
          grayDescription="The archived files will be automatically deleted after 1 mounth. You will not be able to access to your file if they are deleted."
          cancelButtonText="Cancel"
          onButtonText="Archive"
          onCancel={() => {}}
          onOK={() => {}}
        />
      </div>
      <div
        className="modal"
      >
        <Modal4
          title="Modal4"
          blueDescription="CURRENT PLAN: 100GB"
          grayDescription="Add more space to your plan to securely store more files."
          cancelButtonText="Cancel"
          okButtonText="Confirm"
          onCancel={() => {}}
          onOK={() => {}}
        />
      </div>
      <div
        className="modal"
      >
        <Modal5
          title="Modal 5"
          blackDescription="You have not the permission to read or modify this file."
          grayDescription="Ask the team owner for permissions."
          cancelButtonText="Cancel"
          onCancel={() => {}}
          okButtonText="Got It"
          onOK={() => {}}
        />
      </div>
      <div
        className="modal"
      >
        <Modal6
          title="Modal 6"
          blueDescription="IMPORTANT"
          blackDescription="The backups created with this functionality may contain some sensitive data."
          grayDescription="Keep in mind that people are able to view this data."
          smallDescription="We suggest to hide your data for your privacy."
          cancelButtonText="Cancel"
          okButtonText="Got It"
          onCancel={() => {}}
          onOK={() => {}}
        />
      </div>
      <div
        className="modal"
      >
        <Modal7
          title="Modal 7"
          grayDescription="All team members will be able to read, write and share this file."
          okButtonText="Confirm"
          onCancel={() => {
            console.log("cancel");
          }}
          onOK={() => {
            console.log("OK");
          }}
        />
      </div>
    </>
  );
}

export default ExampleCustom02;
