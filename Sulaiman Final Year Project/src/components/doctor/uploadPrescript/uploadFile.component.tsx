import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import jsPDF from "jspdf";
import React, { useState } from "react";
import "./uploadFile.styles.scss";

const UploadFile = () => {
    const [patientName, setPatientName] = useState("");
    const [patientCode, setPatientCode] = useState("");
    const [disease, setDisease] = useState("");
    const [prescription, setPrescription] = useState("");
    const [doctorName, setDoctorName] = useState("");

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text("Patient Details", 10, 10);
        doc.text(`Name: ${patientName}`, 10, 20);
        doc.text(`Code: ${patientCode}`, 10, 30);
        doc.text(`Disease: ${disease}`, 10, 40);
        doc.text(`Prescription: ${prescription}`, 10, 50);
        doc.text(`Doctor: ${doctorName}`, 10, 60);
        doc.save("patient-details.pdf");
    };

    return (
        <div className="container-login">
            <form>
                <h2>Patient Details</h2>
                <div>
                    <TextField
                        id="input-with-sx"
                        label="Patient Name"
                        variant="standard"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        sx={{ mr: 1, display: "inline-block" }}
                    />
                </div>
                <div>
                    <TextField
                        id="input-with-sx"
                        label="Patient Code"
                        variant="standard"
                        value={patientCode}
                        onChange={(e) => setPatientCode(e.target.value)}
                        sx={{ mr: 1, display: "inline-block" }}
                    />
                </div>
                <div>
                    <TextField
                        id="input-with-sx"
                        label="Disease"
                        variant="standard"
                        value={disease}
                        onChange={(e) => setDisease(e.target.value)}
                        sx={{ mr: 1, display: "inline-block" }}
                    />
                </div>
                <div>
                    <TextField
                        id="input-with-sx"
                        label="Prescription"
                        variant="standard"
                        value={prescription}
                        onChange={(e) => setPrescription(e.target.value)}
                        sx={{ mr: 1, display: "inline-block" }}
                    />
                </div>
                <div>
                    <TextField
                        id="input-with-sx"
                        label="Doctor Name"
                        variant="standard"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        sx={{ mr: 1, display: "inline-block" }}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "black",
                        }}
                        onClick={handleDownload}>
                        Download
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UploadFile;
