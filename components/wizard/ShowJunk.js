// The One Step wizard

import React, { useState } from "react";
import Section from "components/primitives/Section";
import SectionHeader from "components/primitives/SectionHeader";
import { Container } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import firebase from "utils/firebase";

function index({ data, setData }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFileUpload = (files) => {
    var storageRef = firebase.storage().ref();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log(uid);
        for (const file in files) {
          console.log();
          const filepath = `photos/${uid}/` + files[file].name;

          const uploadTask = storageRef.child(filepath).put(files[file]);

          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log("Upload is paused");
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log("Upload is running");
                  break;
              }
            },
            function (error) {
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storage/web/handle-errors
              switch (error.code) {
                case "storage/unauthorized":
                  // User doesn't have permission to access the object
                  break;

                case "storage/canceled":
                  // User canceled the upload
                  break;

                case "storage/unknown":
                  // Unknown error occurred, inspect error.serverResponse
                  break;
              }
            },
            function () {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                  console.log("File available at", downloadURL);
                  setData({ ...data, imageURL: downloadURL });
                  //  url.push(downloadURL);
                });
            }
          );
        }

        setDialogOpen(false);
      }
    });
  };

  return (
    <div>
      <Section>
        <Container maxWidth="md">
          <SectionHeader
            title="Step Three: Show us your junk (optional)"
            subtitle="We're excited to see what it looks like."
            size="3"
            textAlign="center"
            textColor="#0e697b"
          />

          <DropzoneArea
            acceptedFiles={[".png", ".jpg"]}
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            maxFileSize={5000000}
            onChange={handleFileUpload}
            showPreviews={true}
            showFileNamesInPreview={true}
          />
        </Container>
      </Section>
    </div>
  );
}

export default index;
