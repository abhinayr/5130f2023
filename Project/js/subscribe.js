const db = firebase.firestore();
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function navigateAndScroll(url, sectionId) {
    window.location.href = url;
    this.scrollToSection(sectionId);
}
new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
        }
    },
    methods: {
        submitForm() {
            document.getElementById("submitBtn").disabled = true;
            db.collection("subscribedUsers").add(this.formData)
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    alert("You have successfully subscribed!");
                    window.location.href = "home.html";
                    this.resetForm();
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        },
        resetForm() {
            document.getElementById("submitBtn").disabled = false;
            this.formData.name = '';
            this.formData.email = '';
        },
        navigateAndScroll: navigateAndScroll,

    }
});