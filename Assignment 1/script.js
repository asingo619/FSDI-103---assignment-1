console.log("Applicant Info");

var userNameFirst = "Andrew";
var userNameMiddle = "BM"
var userNameLast = "Singo";
var userAge = 32;
var n, ur = "";//application status
n = "New"
ur = "Under Review"
var full, part = "";//employment status
full = "Full Time";
part = "Part Time";
var a, b, c = "";//license type
a = "Class A";
b = "Class B";
c = "Class C";
var ca, cb, cc = "";//vehicle restrictions
ca = "All Vehicles";
cb = "No Combinations"
cc = "Non-Commercial Vehicle ONLY"
var d, w, off = "";//job position
d = "Driver";
w = "Warehouse";
off = "Office Staff";
var y1, y2, y2 = "";
y1 = "Yard 1";
y2 = "Yard 2";
y3 = "Yard 3";

document.write(`
    
    <p> <b>Application:<br>First:</b> ${userNameFirst}<br><b>Middle:</b> ${userNameMiddle}<br><b>Last:</b> ${userNameLast}<br><b>Age:</b> ${userAge}</p>
    <p> <b>Application Status:</b> ${n}<p>
    <p> <b>Employment Status:</b> ${full}</p>
    <p> <b>Driver Lic. Type:</b> ${a}</p>
    <p> <b>Lic. Restrictions: ${ca}</b></p>
    <p> <b>Job Title:</b> ${d}</p>
    <p> <b>Yard Location:</b> ${y1}</p>
     
`);

userNameFirst = "Gus";
userNameMiddle ="E.";
userNameLast ="Fernandez";
userAge = 28

document.write(`
    
    <p> <b>Application:<br>First:</b> ${userNameFirst}<br><b>Middle:</b> ${userNameMiddle}<br><b>Last:</b> ${userNameLast}<br><b>Age:</b> ${userAge}</p>
    <p> <b>Application Status:</b> ${ur}<p>
    <p> <b>Employment Status:</b> ${full}</p>
    <p> <b>Driver Lic. Type:</b> ${a}</p>
    <p> <b>Lic. Restrictions: ${ca}</b></p>
    <p> <b>Job Title:</b> ${d}</p>
    <p> <b>Yard Location:</b> ${y3}</p>
     
`);

