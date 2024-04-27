function sendMail() {
    (function () {
        emailjs.init("ZX9tiTmCCpYsRpeEf");
    })();

    var params = {
        sendername: document.querySelector("#sendername").value,
        to: document.querySelector("#to").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    var serviceID = "service_hh9v69h";
    var templateID = "template_1utqexi";
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email Enviado com sucesso!✅");
        })
        .catch(error => {
            console.error("Erro ao enviar o email:", error);
            alert("Ocorreu um erro ao enviar o email. Por favor, tente novamente 👦🏾.");
        });
}
