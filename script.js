

window.onload = function () {
    resetForm();

    document.getElementById("rollNo").onchange = getStudent;
    document.getElementById("saveBtn").onclick = saveData;
    document.getElementById("updateBtn").onclick = updateData;
    document.getElementById("resetBtn").onclick = resetForm;
};

function disableAll() {
    document.getElementById("fullName").disabled = true;
    document.getElementById("class").disabled = true;
    document.getElementById("birthDate").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("enrollDate").disabled = true;

    document.getElementById("saveBtn").disabled = true;
    document.getElementById("updateBtn").disabled = true;
}

function enableFields() {
    document.getElementById("fullName").disabled = false;
    document.getElementById("class").disabled = false;
    document.getElementById("birthDate").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("enrollDate").disabled = false;
}

function resetForm() {
    document.getElementById("studentForm").reset();
    disableAll();
    document.getElementById("rollNo").disabled = false;
    document.getElementById("rollNo").focus();
    document.getElementById("recNo").value = "";
}

function getStudent() {
    let rollNo = document.getElementById("rollNo").value;

    let jsonStr = { Roll_No: rollNo };

    let req = createGETRequest(connToken, dbName, relName, JSON.stringify(jsonStr));
    $.ajaxSetup({async: false});
    let res = executeCommandAtGivenBaseUrl(req, baseUrl, "/api/irl");
    $.ajaxSetup({async: true});

    if (res.status === 400 || !res.data) {
        enableFields();
        document.getElementById("saveBtn").disabled = false;
        document.getElementById("recNo").value = "";
        document.getElementById("fullName").focus();
    } else {
        let parsedData = JSON.parse(res.data);
        if (!parsedData.record) {
            enableFields();
            document.getElementById("saveBtn").disabled = false;
            document.getElementById("recNo").value = "";
            document.getElementById("fullName").focus();
        } else {
            let data = parsedData.record;
            document.getElementById("recNo").value = parsedData.rec_no;
            document.getElementById("fullName").value = data.Full_Name;
            document.getElementById("class").value = data.Class;
            document.getElementById("birthDate").value = data.Birth_Date;
            document.getElementById("address").value = data.Address;
            document.getElementById("enrollDate").value = data.Enrollment_Date;
            enableFields();
            document.getElementById("rollNo").disabled = true;
            document.getElementById("updateBtn").disabled = false;
            document.getElementById("fullName").focus();
        }
    }
}
function validateForm() {
    if (
        !document.getElementById("rollNo").value ||
        !document.getElementById("fullName").value ||
        !document.getElementById("class").value ||
        !document.getElementById("birthDate").value ||
        !document.getElementById("address").value ||
        !document.getElementById("enrollDate").value
    ) {
        alert("All fields are required!");
        return false;
    }
    return true;
}
function saveData() {
    if (!validateForm()) return;

    let jsonStr = {
        Roll_No: document.getElementById("rollNo").value,
        Full_Name: document.getElementById("fullName").value,
        Class: document.getElementById("class").value,
        Birth_Date: document.getElementById("birthDate").value,
        Address: document.getElementById("address").value,
        Enrollment_Date: document.getElementById("enrollDate").value
    };

    let req = createPUTRequest(connToken, JSON.stringify(jsonStr), dbName, relName);
    $.ajaxSetup({async: false});
    let res = executeCommandAtGivenBaseUrl(req, baseUrl, "/api/iml");
    $.ajaxSetup({async: true});

    if (res.status === 200) {
        alert("Data Saved!");
        resetForm();
    } else {
        alert("Error saving data: " + res.message);
    }
}

function updateData() {
    if (!validateForm()) return;

    let recId = document.getElementById("recNo").value;

    let jsonStr = {
        Roll_No: document.getElementById("rollNo").value,
        Full_Name: document.getElementById("fullName").value,
        Class: document.getElementById("class").value,
        Birth_Date: document.getElementById("birthDate").value,
        Address: document.getElementById("address").value,
        Enrollment_Date: document.getElementById("enrollDate").value
    };

    let req = createUPDATERecordRequest(connToken, JSON.stringify(jsonStr), dbName, relName, recId);
    $.ajaxSetup({async: false});
    let res = executeCommandAtGivenBaseUrl(req, baseUrl, "/api/iml");
    $.ajaxSetup({async: true});

    if (res.status === 200) {
        alert("Data Updated!");
        resetForm();
    } else {
        alert("Error updating data: " + res.message);
    }
}