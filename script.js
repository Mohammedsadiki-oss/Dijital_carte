
// PERSONAL INFORMATION
const profile = {
    name: "Mohamed Sadiki",
    job: "Devloppeur",
    bio: "Welcome to my digital space. Let's connect!",

    phone: "+2120775380689",
    whatsapp: "2120775380689",
    email: "sadikie340@email.com",

    instagram: "www.instagram.com/____sadiki____?psln=dXZmeHltdm5hczlp&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/mohamed-sadiki-8484723a9/",
    facebook: "https://www.facebook.com/share/1FPrnNiYxd/?mibextid=wwXIfr"
};

// DISPLAY INFORMATION
document.getElementById("name").textContent = profile.name;
document.getElementById("job").textContent = profile.job;
document.getElementById("bio").textContent = profile.bio;

// CONTACT LINKS
document.getElementById("whatsapp").href =
    `https://wa.me/${profile.whatsapp}`;

document.getElementById("phone").href =
    `tel:${profile.phone}`;

document.getElementById("email").href =
    `mailto:${profile.email}`;

// SOCIAL MEDIA LINKS
document.getElementById("instagram").href = profile.instagram;
document.getElementById("linkedin").href = profile.linkedin;
document.getElementById("facebook").href = profile.facebook;

// SAVE CONTACT AS VCARD
function saveContact() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
TEL;TYPE=CELL:${profile.phone}
TEL;TYPE=WHATSAPP:${profile.whatsapp}
EMAIL:${profile.email}
URL:${profile.instagram}
END:VCARD`;

    const blob = new Blob([vcard], {
        type: "text/vcard;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Contact.vcf";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
}