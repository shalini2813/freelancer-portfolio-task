document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Project One", description: "A web development project." },
        { title: "Project Two", description: "A mobile app development project." },
        { title: "Project Three", description: "A UI/UX design project." }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project");
        div.innerHTML = <h3>${project.title}</h3><p>${project.description}</p>;
        projectList.appendChild(div);
    });

    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const feedback = document.getElementById("feedback");

        if (name === "" || email === "" || message === "") {
            feedback.textContent = "Please fill out all fields.";
            feedback.style.color = "red";
            return;
        }

        feedback.textContent = "Message sent successfully!";
        feedback.style.color = "green";
        document.getElementById("contact-form").reset();
    });
});
