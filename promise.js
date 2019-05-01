var random = Math.random() * 5000 + 1000;

function submit(cv) {
    return new Promise(function(resolve, reject) {
        console.log("Pelamar submit "+cv);
        setTimeout(() => resolve(cv), 2000);
    });
}

function notif(cv) {
    return new Promise(function(resolve) {
        console.log("Hr notif "+cv+" dari pelamar");
        setTimeout(() => resolve(cv), 2000);
    });
}

function before(cv) {
    return new Promise(function(resolve) {
        console.log("Tunggu psikotest");
        setTimeout(() => resolve(cv), 1000);
    });
}

function giving(cv) {
    return new Promise(function(resolve) {
        console.log("kasih hasil test ke HR");
        setTimeout(() => resolve(cv), 1000);
    });
}

function follup(cv) {
    return new Promise(function(resolve) {
        console.log("followup hasil test ke user");
        setTimeout(() => resolve(cv),random);
    });
}


function interview(cv) {
    return new Promise(function(resolve) {
        console.log("lulus test, notif ke Pelamar buat interview");
        setTimeout(() => resolve(cv),random);
    });
}

function userInterview(cv) {
    return new Promise(function(resolve) {
        console.log("datang buat User Interview");
        setTimeout(() => resolve(cv),random);
    });
}

function usertohr(cv) {
    return new Promise(function(resolve) {
        console.log("konfirmasi ke HR pelamar lulus oleh User");
        setTimeout(() => resolve(cv),random);
    });
}


function lolos(cv) {
    return new Promise(function(resolve) {
        console.log("hr kasih tau sudah bisa mulai bekerja");
        setTimeout(() => resolve(cv),random);
    });
}

function kerja(cv) {
    return new Promise(function(resolve) {
        console.log("mulai kerja");
        setTimeout(() => resolve(cv),random);
    });
}

submit("CV pelamar")
.then(notif)
.then(before)
.then(giving)
.then(follup)
.then(interview)
.then(userInterview)
.then(usertohr)
.then(lolos)
.then(kerja)


//the best from me